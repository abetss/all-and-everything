import React from 'react';
import { Flex, Button } from 'rebass';

interface TermTagsProps {
  term: any;
}

export const TermTags = ({ term }: TermTagsProps) => (
  <Flex mt={2}>
    {term.tags.map((tag: string) => (
      <Button bg="secondary-variant" mr={2} key={tag}>
        {tag}
      </Button>
    ))}
  </Flex>
);
