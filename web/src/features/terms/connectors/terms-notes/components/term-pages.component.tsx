import React from 'react';
import { Flex, Text } from 'rebass';

interface TermPagesProps {
  term: any;
}

export const TermPages = ({ term }: TermPagesProps) => (
  <Flex mt={2}>
    <Text fontSize={3}>Pages: </Text>
    {term.pages.map((page: number) => (
      <Text fontSize={3} ml={2}>
        {page}
      </Text>
    ))}
  </Flex>
);
