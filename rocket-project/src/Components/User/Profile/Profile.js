import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../../../Contexts/UserProvider";
import { Button } from "antd";
import { CopyrightOutlined, EditOutlined } from "@ant-design/icons";

export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-screen h-full md:h-screen flex justify-center items-center bg-slate-50 ">
      <Helmet>
        <title>Profile | Rocket</title>
      </Helmet>
      <div className="py-8 md:p-0 w-full lg:w-3/5 h-full md:h-3/5 bg-white  shadow-md grid grid-cols-1 md:grid-rows-3 md:grid-cols-3">
        <div className="flex flex-col justify-center items-center row-span-3 border-r">
          <img
            src={user.moreData.avatar_url}
            alt="user-avatar"
            className="w-36 h-auto"
          />
          <span className="mt-4 text-lg text-gray-500">@{user.name}</span>
          <span>
            <p className="flex items-center text-base font-medium text-slate-500">
              {<CopyrightOutlined className="text-orange-500" />}
              {user.coin}
            </p>
          </span>
          <Link to="/Profile/edit" className="mt-12 mb-8 md:mb-0">
            <Button icon={<EditOutlined />} className=" flex items-center">
              Edit Github Profile
            </Button>
          </Link>
        </div>

        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start border-b border-r">
          <p className="font-medium text-slate-500">Name:</p>
          <p className="text-base text-slate-700">{user.moreData.name}</p>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start border-b">
          <p className="font-medium text-slate-500">Email:</p>
          <p className="text-base text-slate-700">
            {user.moreData.email || "not exist"}
          </p>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start border-b border-r">
          <p className="font-medium text-slate-500">Blog:</p>
          <p className="text-base text-slate-700">
            {user.moreData.blog || "not exist"}
          </p>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start border-b">
          <p className="font-medium text-slate-500">Company:</p>
          <p className="text-base text-slate-700">
            {user.moreData.company || "not exist"}
          </p>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start border-b border-r">
          <p className="font-medium text-slate-500">Location:</p>
          <p className="text-base text-slate-700">
            {user.moreData.location || "not exist"}
          </p>
        </div>
        <div className="px-8 py-4 leading-3 flex flex-col justify-center items-center md:items-start md:border-b">
          <p className="font-medium text-slate-500">Bio:</p>
          <p className="text-base text-slate-700">
            {user.moreData.bio || "not exist"}
          </p>
        </div>
      </div>
    </div>
  );
}
