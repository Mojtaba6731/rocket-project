import React, { useEffect, useContext } from "react";
import { UserContext } from "../../../Contexts/UserProvider";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { LOGIN_DEPENDENCIES } from "../../../Constants/config";
import { Button, message } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";

export default function Login() {
  const { setUser, setIsUserLogedIn, setAuthToken } = useContext(UserContext);
  const history = useHistory();
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, CORS_PROXY, GITHUB_API_URL } =
    LOGIN_DEPENDENCIES;

  //
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
      <div className="w-2/5 h-3/5 mt-10 mb-20 py-8 shadow-lg bg-white flex flex-col justify-center items-center space-y-6">
        <Button
          type="primary"
          size="large"
          key="login-with-github"
          icon={<GithubOutlined className="text-lg" />}
          href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo%20user%20gist`}
        >
          Log in with Github
        </Button>
        <Button
          size="large"
          key="login-with-google"
          icon={<GoogleOutlined className="text-lg" />}
          disabled
        >
          Coming Soon!
        </Button>
        <Button size="large" key="back-home" onClick={goHomeHandler}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
