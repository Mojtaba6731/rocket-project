import { message } from "antd";
import React, { useState, useEffect } from "react";

export const UserContext = React.createContext({
  users: [],
  setUsers: () => {},
});

export default function UserProvider({ children }) {
  const [user, _setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isUserLogedIn, setIsUserLogedIn] = useState(!!user);
  const [authToken, _setAuthToken] = useState(
    localStorage.getItem("authToken")
  );

  // useEffect(() => {
  //   if (isUserLogedIn) {
  //     _setUser(user);
  //   }
  // }, [isUserLogedIn]);

  const setAuthToken = (token) => {
    _setAuthToken(token);
    localStorage.setItem("authToken", token || "");
  };

  const setUser = (user) => {
    _setUser(user);
    localStorage.setItem("user", user ? JSON.stringify(user) : "");
  };

  const setlogOut = () => {
    setTimeout(() => {
      setIsUserLogedIn(false);
      setUser(undefined);
      localStorage.clear();
    }, 1800);

    message.loading({ content: "logging out...", key: "updatable" });
    setTimeout(() => {
      message.success({
        content: "logged out!",
        key: "updatable",
        duration: 2.5,
      });
    }, 2000);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isUserLogedIn,
        setIsUserLogedIn,
        authToken,
        setAuthToken,
        setlogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
