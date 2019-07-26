import React from 'react';
import { Flex } from 'rebass';
import { TermTag } from './term-tag.component';

interface TermTagsProps {
  tags: string[];
}

export const TermTags = ({ tags }: TermTagsProps) => (
  <Flex mt={2}>
    {tags.map((tag: string) => (
      <TermTag
        onClick={() => {
          console.log(tag);
        }}
      >
        {tag}
      </TermTag>
    ))}
  </Flex>
);
