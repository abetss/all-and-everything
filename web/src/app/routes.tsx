import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { TermsNotesPage, CreateTermPage } from '../features';

const Info = () => <div>Info Page</div>;
const Index = () => <div>Index Page</div>;
const Tags = () => <div>Tags Page</div>;

export const Routes = () => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <Switch>
      <Route exact={true} path="/terms" component={TermsNotesPage} />
      <Route exact={true} path="/terms/:id" component={TermsNotesPage} />
      <Route exact={true} path="/info" component={Info} />
      <Route exact={true} path="/index" component={Index} />
      <Route exact={true} path="/tags" component={Tags} />
      <Route exact={true} path="/create" component={CreateTermPage} />
      <Redirect from="/" to="/terms" />
    </Switch>
  </QueryParamProvider>
);
