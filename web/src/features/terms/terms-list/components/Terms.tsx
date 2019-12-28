import React from 'react';
import { Flex } from 'rebass/styled-components';
import { ListItem } from 'src/design-system';
import { getTerms_terms_list } from '../graphqlGenTypes/getTerms';

interface TermsProps {
  terms: getTerms_terms_list[];
  onClick: (id: number) => void;
  termId: number;
}

export const Terms = ({ terms, onClick, termId }: TermsProps) => (
  <Flex flexDirection="column">
    {terms.map(({ id, title }: any) => (
      <ListItem id={id} onClick={onClick} key={id} selected={termId === Number(id)}>
        {title}
      </ListItem>
    ))}
  </Flex>
);
