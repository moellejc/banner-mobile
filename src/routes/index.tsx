import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from "../modules/login/Login";
import Register from "../modules/register/Register";

export default () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </NativeRouter>
  );
};
