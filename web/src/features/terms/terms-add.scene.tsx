import React from 'react';
import { Heading, Flex, Box, Card } from 'rebass';
import { TermsCreateTerm, TermsCreatePages } from './terms-create';

export const TermsAddScene = () => (
  <Box width={1}>
    <Flex alignItems="center" justifyContent="center">
      <Heading px={3} pt={3}>
        Create new term
      </Heading>
    </Flex>
    <Card>
      <TermsCreateTerm />
      <TermsCreatePages />
    </Card>
  </Box>
);
