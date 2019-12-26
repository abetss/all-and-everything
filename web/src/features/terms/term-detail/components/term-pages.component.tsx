import React from 'react';
import { Flex, Text } from 'rebass/styled-components';
import { Badge } from '../../../../design-system';

interface TermPagesProps {
  pages: number[];
}

export const TermPages = ({ pages }: TermPagesProps) => (
  <Flex mt={2}>
    <Text fontSize={3}>Pages: </Text>
    {pages.map((page: number) => (
      <Badge>{page}</Badge>
    ))}
  </Flex>
);
