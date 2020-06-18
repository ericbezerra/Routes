import React from "react";
import { Router, Switch, Route } from "react-router";
import { history } from "../history";

import Login from "../pages/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Public from "../pages/Public";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const Root = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PublicRoute exact path="/login" component={Login} />
      <Route exact path="/public" component={Public} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;
