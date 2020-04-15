import React from 'react';
import { Badge, Flex } from 'src/design-system';

interface TermTagsProps {
  tags: string[];
}

export const TermTags = ({ tags }: TermTagsProps) => (
  <Flex mt={2}>
    {tags.map((tag: string) => (
      <Badge
        mr={1}
        bg="secondary.dark"
        key={`term-tag-${tag}`}
        onClick={() => {
          console.log(tag);
        }}
      >{`#${tag}`}</Badge>
    ))}
  </Flex>
);
