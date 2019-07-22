import React from 'react';
import { Flex, Text } from 'rebass';

interface TermTagsProps {
  term: any;
}

export const TermTags = ({ term }: TermTagsProps) => (
  <Flex mt={2}>
    {term.tags.map((tag: string) => (
      <Text mr={2}>#{tag}</Text>
    ))}
  </Flex>
);
