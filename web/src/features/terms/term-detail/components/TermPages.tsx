import React from 'react';
import { Badge, Flex, Text } from 'src/design-system';

interface TermPagesProps {
  pages: number[];
}

export const TermPages = ({ pages }: TermPagesProps) => (
  <Flex mt={2}>
    <Text sx={{ fontSize: 3 }} mr={1}>
      Pages:{' '}
    </Text>
    {pages.map((page: number) => (
      <Badge mr={1} key={`term-page-${page}`}>
        {page}
      </Badge>
    ))}
  </Flex>
);
