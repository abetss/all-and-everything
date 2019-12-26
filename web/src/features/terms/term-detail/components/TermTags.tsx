import React from 'react';
import { Flex } from 'rebass/styled-components';
import { Badge } from '../../../../design-system';

interface TermTagsProps {
  tags: string[];
}

export const TermTags = ({ tags }: TermTagsProps) => (
  <Flex mt={2}>
    {tags.map((tag: string) => (
      <Badge
        mr={1}
        bg="primary-variant"
        key={`term-tag-${tag}`}
        onClick={() => {
          console.log(tag);
        }}
      >{`#${tag}`}</Badge>
    ))}
  </Flex>
);
