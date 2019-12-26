import React from 'react';
import { Flex, Box, Card, Heading } from 'rebass';
import { PageHeading } from '../../design-system/components';
import { CreatePageConnector } from '../terms-create';

export const CreateTermPage = () => (
  <Box width={1} px={5}>
    <PageHeading>Create new term</PageHeading>
    <CreatePageConnector />
  </Box>
);
