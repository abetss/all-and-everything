import React from 'react';
import { ListItem, Flex } from 'src/design-system';
import { getTerms_termNotes_list } from '../graphqlGenTypes/getTerms';

interface TermsProps {
  terms: getTerms_termNotes_list[];
  onClick: (id: string) => void;
  termId: string;
}

export const Terms = ({ terms, onClick, termId }: TermsProps) => (
  <Flex sx={{ flexDirection: 'column' }}>
    {terms.map(({ id, title }: any, index) => (
      <ListItem
        id={id}
        onClick={onClick}
        key={`term-list-${title}`}
        withBorderTop={index !== 0}
        selected={termId === id}
      >
        {title}
      </ListItem>
    ))}
  </Flex>
);
