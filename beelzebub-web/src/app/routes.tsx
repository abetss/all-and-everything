import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { TermsListConnectorWithHook } from "../features";

const Home = () => <div>Info Page</div>;

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        path="/terms"
        component={TermsListConnectorWithHook}
      />
      <Route exact={true} path="/info" component={Home} />
      <Redirect from="/" to="/terms" />
    </Switch>
  </BrowserRouter>
);
