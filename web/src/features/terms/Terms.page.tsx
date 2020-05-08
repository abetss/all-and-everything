import React from 'react';
import { Flex, Box } from 'src/design-system';
import { TermDetailConnector } from './term-detail';
import { TermsListConnector } from './terms-list';
import { useTermQueryParam } from './utils';
import { Switch, Route, useRouteMatch } from 'react-router';
import { CreateTermPage } from './CreateTerm.page';

export const TermsPage = () => {
  const [termId] = useTermQueryParam();
  let { path } = useRouteMatch();

  console.log('termId', JSON.stringify(termId, null, 2));

  return (
    <Switch>
      <Route
        exact={true}
        path={path}
        children={
          <Flex>
            <Box sx={{ bg: 'bg.surface', minHeight: '100vh', maxWidth: '25%' }}>
              <TermsListConnector />
            </Box>
            <Box sx={{ width: '75%' }}>{termId && <TermDetailConnector id={termId} />}</Box>
          </Flex>
        }
      />

      <Route path={`${path}/create`} component={CreateTermPage} />
    </Switch>
  );
};
