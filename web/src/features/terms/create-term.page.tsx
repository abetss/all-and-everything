import React from 'react';
import { Box } from 'rebass/styled-components';
import { PageHeading } from '../../design-system/components';
import { CreatePageConnector } from './terms-create';

export const CreateTermPage = () => (
  <Box width={1} mx={5}>
    <PageHeading>Create new term</PageHeading>
    <CreatePageConnector />
  </Box>
);
