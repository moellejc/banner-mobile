import React from "react";
import { NativeRouter, Switch, Route } from "react-router-native";
import Login from "./Login";
import Register from "./Register";

export default () => {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </NativeRouter>
  );
};
