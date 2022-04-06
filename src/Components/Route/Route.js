import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { UserContext } from "../../Contexts/UserProvider";
import { routes } from "../../Constants/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Routers() {
  const { isUserLogedIn } = React.useContext(UserContext);

  return (
    <BrowserRouter basename="/https://mojtaba6731.github.io/rocket-project/">
      <Header />
      <Switch>
        {routes.map((route) => {
          const { privatePage, publicPage, component } = route;
          return (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {isUserLogedIn ? (
                privatePage ? (
                  component
                ) : (
                  component
                )
              ) : publicPage ? (
                component
              ) : (
                <Redirect
                  to={{
                    pathname: "/Login",
                  }}
                />
              )}
            </Route>
          );
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
