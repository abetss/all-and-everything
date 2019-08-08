import React from 'react';
import { Heading, Flex, Box, Card } from 'rebass';

export const TermsAddScene = () => (
  <Box width={1}>
    <Flex alignItems="center" justifyContent="center">
      <Heading px={3} pt={3}>
        Create new term
      </Heading>
    </Flex>
    <Card>
      <form>
        <label>
          Term Name:
          <input type="text" name="term" />
        </label>
        <label>
          Pages:
          <input type="text" name="term" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </Card>
  </Box>
);
