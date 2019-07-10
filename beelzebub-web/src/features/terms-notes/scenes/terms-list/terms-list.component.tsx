import React from 'react';
import { Notes } from './notes/notes-component';
import { Heading, Card, Flex, Box } from 'rebass';
import { useTerms } from './utils';
import { TermsSearch, TermsList } from './components';

export const TermsListComponent = ({ terms }: any) => {
  const [allTerms, filteredTerms, handleClick, filterList, selectedId] = useTerms(terms);

  // todo: Notes should get the array of notes instead of the term id

  return (
    <Flex>
      <Card width={1 / 4} border={1} borderColor="surface">
        <Heading px={3} pt={3}>
          Terms List
        </Heading>
        <TermsSearch terms={allTerms} onChange={filterList} />
        <TermsList terms={filteredTerms} onClick={handleClick} />
      </Card>
      <Box width={3 / 4}>
        <Notes selectedId={selectedId} />
      </Box>
    </Flex>
  );
};
