import React from 'react';
import { Flex, Text } from 'rebass';

interface TermPagesProps {
  term: any;
}

export const TermPages = ({ term }: TermPagesProps) => (
  <Flex mt={2}>
    <Text>Pages: </Text>
    {term.pages.map((page: number) => (
      <Text ml={2}>{page}</Text>
    ))}
  </Flex>
);
