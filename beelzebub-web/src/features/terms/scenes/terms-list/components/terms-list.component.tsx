import React from 'react';
import { Flex } from 'rebass';
import { ListItem } from '../../../../../design-system';

interface TermsListProps {
  terms: Array<any>;
  onClick: (id: number) => void;
}

export const TermsList = ({ terms, onClick }: TermsListProps) => (
  <Flex flexDirection="column">
    {terms.map(({ id, title }: any) => (
      <ListItem id={id} onClick={onClick} key={id}>
        {title}
      </ListItem>
    ))}
  </Flex>
);
