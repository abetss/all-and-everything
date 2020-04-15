import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { TermsPage } from '../features';

const Index = () => <div>Index Page</div>;
const Tags = () => <div>Tags Page</div>;

export const Routes = () => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <Switch>
      <Route exact={false} path="/terms" component={TermsPage} />
      <Route exact={true} path="/index" component={Index} />
      <Route exact={true} path="/tags" component={Tags} />
      <Redirect from="/" to="/terms" />
    </Switch>
  </QueryParamProvider>
);
