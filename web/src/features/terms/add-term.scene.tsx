import React from 'react';
import { Flex, Box, Card } from 'rebass';
import { CreateTerm, CreatePage } from './terms-create';
import { PageHeading } from '../../design-system/components/';

export const AddTermScene = () => (
  <Box width={1}>
    <Flex alignItems="center" justifyContent="center">
      <PageHeading title={'Create new term'} />
    </Flex>
    <Card>
      <CreateTerm />
      <CreatePage />
    </Card>
  </Box>
);
