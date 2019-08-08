import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { TermsNotesScene, TermsAddScene } from '../features';

const Home = () => <div>Info Page</div>;

export const Routes = () => (
  <BrowserRouter>
    <QueryParamProvider ReactRouterRoute={Route}>
      <Switch>
        <Route exact={true} path="/terms" component={TermsNotesScene} />
        <Route exact={true} path="/terms/:id" component={TermsNotesScene} />
        <Route exact={true} path="/info" component={Home} />
        <Route exact={true} path="/create" component={TermsAddScene} />
        <Redirect from="/" to="/terms" />
      </Switch>
    </QueryParamProvider>
  </BrowserRouter>
);
