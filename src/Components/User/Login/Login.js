import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { UserContext } from "../../../Contexts/UserProvider";
import { LOGIN_DEPENDENCIES } from "../../../Constants/config";
import axios from "axios";
import { Button, message, notification } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";

export default function Login() {
  const { setUser, setIsUserLogedIn, setAuthToken } = useContext(UserContext);
  const history = useHistory();
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, CORS_PROXY, GITHUB_API_URL } =
    LOGIN_DEPENDENCIES;

  // data for demoUser in Demo-version
  const demoUser = {
    name: "test-user",
    coin: 1000,
    id: 19970925,
    dataAded: new Date().getTime(),
    moreData: {
      name: "Mr.test-user",
      avatar_url: "https://avatars.githubusercontent.com/u/78034349?v=4",
      email: "mrtest@gamil.com",
      blog: null,
      bio: "it's just for test",
      location: null,
      company: null,
    },
  };

  // a function that set a fake user for Demo version's Login.
  // Notice: however if anyone set the true CLIENT_ID and CLIENT_SECRET,
  // then it will links the user to Login with Github acc

  const isItDemoVersion = () => {
    if ((CLIENT_ID || CLIENT_SECRET) === null) {
      setIsUserLogedIn(true);
      setUser(demoUser);
      message.success("It's Demo version and you're logged in fake!", 2.2);
      setTimeout(() => {
        notification.open({
          message: "About Login",
          duration: 10,
          description:
            "For security and safety reasons we are disabled to log in, But there is a Config file in <<src/Constants/config.js>> which you can set your own app information then this app will be able to Login in real.",
        });
      }, 2400);
      history.push("/");
    } else {
      window.open(
        `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo%20user%20gist`
      );
    }
  };

  const goHomeHandler = () => {
    history.push("/");
  };

  let searchParams = new URLSearchParams(window.location.search.substring(1));
  let code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      let token;
      message.loading("Action in progress..", 2);
      axios
        .post(
          CORS_PROXY + "https://github.com/login/oauth/access_token",
          {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            code,
          },
          { headers: { Accept: "application/vnd.github.v3+json" } }
        )
        .then(function (response) {
          if (response.data["access_token"]) {
            setAuthToken("token " + response.data["access_token"]);
          }

          token = "token " + response.data["access_token"];
          axios
            .get(GITHUB_API_URL + "user", {
              headers: {
                Authorization: token,
              },
            })
            .then((res) => {
              message.success("You Are Loged In Now!", 2.2);
              setUser({
                name: res.data.login,
                coin: 1000,
                id: res.data.id,
                dataAded: new Date().getTime(),
                moreData: res.data,
              });
              setIsUserLogedIn(true);
              history.push("/");
            });
        })
        .catch(function (error) {
          message.error("Something Went Wrong!");
          console.log(error);
        });
    }
  }, [code]);

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <Helmet>
        <title>Log In | Rocket</title>
      </Helmet>
      <div className="w-full md:w-3/5 xl:w-2/5 h-full sm:h-3/5 mt-10 mb-20 py-8 sm:shadow-lg sm:bg-white flex flex-col justify-center items-center space-y-6">
        <div className="flex flex-col justify-center items-center w-4/5 sm:w-2/5 2xl:w-80 space-y-6">
          <Button
            block
            type="primary"
            size="large"
            className="text-sm md:text-base flex items-center justify-center"
            key="login-with-github"
            onClick={isItDemoVersion}
            icon={
              <GithubOutlined className="text-base md:text-lg flex items-center" />
            }
          >
            Log in with Github
          </Button>
          <Button
            block
            size="large"
            key="login-with-google"
            className="text-sm md:text-base flex items-center justify-center"
            icon={
              <GoogleOutlined className="text-base md:text-lg flex items-center" />
            }
            disabled
          >
            Coming Soon!
          </Button>
          <Button
            block
            type="dashed"
            size="large"
            key="back-home"
            className="text-sm md:text-base flex items-center justify-center"
            onClick={goHomeHandler}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
