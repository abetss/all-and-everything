import React from 'react';
import { PageHeading, Box } from 'src/design-system';
import { CreatePageConnector } from './create-term';

export const CreateTermPage = () => (
  <Box px={5}>
    <PageHeading>Create new term</PageHeading>
    <CreatePageConnector />
  </Box>
);
