import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../../../../Contexts/UserProvider";
import { LOGIN_DEPENDENCIES } from "../../../../Constants/config";
import axios from "axios";
import { Button, Form, Input, message } from "antd";

export default function EditProfile() {
  const { GITHUB_API_URL } = LOGIN_DEPENDENCIES;

  const { user, setUser, authToken } = useContext(UserContext);
  const history = useHistory();
  const [editLoading, setEditLoading] = useState(false);
  const [discardLoading, setDiscradLoading] = useState(false);

  const [editedName, setEditedName] = useState((user.moreData.name || "") + "");
  const [editedEmail, setEditedEmail] = useState(
    (user.moreData.email || "") + ""
  );
  const [editedBlog, setEditedBlog] = useState((user.moreData.blog || "") + "");
  const [editedCompany, setEditedCompany] = useState(
    (user.moreData.company || "") + ""
  );
  const [editedLocation, setEditedLocation] = useState(
    (user.moreData.location || "") + ""
  );
  const [editedBio, setEditedBio] = useState((user.moreData.bio || "") + "");

  // ___antDesign constants:___
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  //  __________________________

  const editNameHandler = (e) => {
    setEditedName(e.target.value);
  };
  const editEmailHandler = (e) => {
    setEditedEmail(e.target.value);
  };
  const editBlogHandler = (e) => {
    setEditedBlog(e.target.value);
  };
  const editCompanyHandler = (e) => {
    setEditedCompany(e.target.value);
  };
  const editLocationHandler = (e) => {
    setEditedLocation(e.target.value);
  };
  const editBioHandler = (e) => {
    setEditedBio(e.target.value);
  };

  const discardHandler = () => {
    setDiscradLoading(true);
    setTimeout(() => {
      setDiscradLoading(false);
      history.push("/Profile");
      message.info("Changes were canceled.");
    }, 1000);
  };
  const editHandler = () => {
    if (!authToken) {
      message.info("It's Demo version");
      discardHandler();
    } else {
      setEditLoading(true);
      axios
        .patch(
          GITHUB_API_URL + "user",
          {
            name: editedName,
            email: editedEmail,
            blog: editedBlog,
            company: editedCompany,
            location: editedLocation,
            bio: editedBio,
          },
          {
            headers: {
              Authorization: authToken,
              Accept: "application/vnd.github.v3+json",
            },
          }
        )
        .then((res) => {
          setUser({
            name: res.data.login,
            coin: 1000,
            id: res.data.id,
            dataAded: new Date().getTime(),
            moreData: res.data,
          });
          setTimeout(() => {
            if (res.status === 200) {
              message.success(
                "Your profile information is successfully changed."
              );
              setTimeout(() => {
                message.info("If you want to see result, refresh the page", 4);
              }, 3000);
              setEditLoading(false);
              history.push("/Profile");
              window.location.reload();
              setUser(res);
            } else {
              message.error("oops! something went wrong :(");
              history.push("/Profile");
              console.log(res);
            }
          }, 2000);
        });
    }
  };

  return (
    <div className="w-screen h-full md:h-screen flex justify-center items-center bg-slate-50 ">
      <Helmet>
        <title>Edit-Profile | Rocket</title>
      </Helmet>
      <div className="mb-16 w-full sm:w-4/5 md:w-4/5 lg:w-3/5 h-full md:h-4/5 bg-white shadow-md grid grid-cols-1 md:grid-rows-4 md:grid-cols-2">
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b md:border-r">
          <p className="font-medium text-slate-500">Name:</p>
          <Form {...layout} form={form} name="edit-name">
            <Input
              allowClear
              value={editedName}
              type="text"
              onChange={editNameHandler}
              placeholder={editedName === "" ? "add your Name" : editedName}
            />
          </Form>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b">
          <p className="font-medium text-slate-500">Email:</p>
          <Form {...layout} form={form} name="edit-email">
            <Input
              allowClear
              value={editedEmail}
              type="text"
              onChange={editEmailHandler}
              placeholder={editedEmail === "" ? "Email" : editedEmail}
            />
          </Form>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b md:border-r">
          <p className="font-medium text-slate-500">Blog:</p>
          <Input
            allowClear
            value={editedBlog}
            type="text"
            onChange={editBlogHandler}
            placeholder={editedBlog === "" ? "Website" : editedBlog}
          />
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b">
          <p className="font-medium text-slate-500">Company:</p>
          <Input
            allowClear
            value={editedCompany}
            type="text"
            onChange={editCompanyHandler}
            placeholder={editedCompany === "" ? "Company" : editedCompany}
          />
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b md:border-r">
          <p className="font-medium text-slate-500">Location:</p>
          <Input
            allowClear
            value={editedLocation}
            type="text"
            onChange={editLocationHandler}
            placeholder={editedLocation === "" ? "Location" : editedLocation}
          />
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center border-b">
          <p className="font-medium text-slate-500">Bio:</p>
          <Input
            allowClear
            value={editedBio}
            type="text"
            onChange={editBioHandler}
            placeholder={editedBio === "" ? "add a bio" : editedBio}
          />
        </div>
        <div className="md:col-span-2 flex items-center justify-center space-x-4 my-8 md:my-0">
          <Button loading={editLoading} type="default" onClick={editHandler}>
            Save Changes
          </Button>
          <Button
            loading={discardLoading}
            type="dashed"
            onClick={discardHandler}
          >
            Discard Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
