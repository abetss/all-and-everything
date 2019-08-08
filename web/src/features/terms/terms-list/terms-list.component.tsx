import React from 'react';
import { Heading, Card, Flex, Button } from 'rebass';
import { useTerms } from './utils';
import { TermsSearch, TermsList, TermsAdd } from './components';
import styled from 'styled-components';

export const TermsListComponent = ({ terms }: any) => {
  const [allTerms, filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  return (
    <Card width={1} border={1} borderColor="surface">
      <Heading px={3} pt={3}>
        Terms List
      </Heading>
      <Flex alignItems="center">
        <TermsSearch onChange={filterList} />
        <TermsAdd />
      </Flex>
      <TermsList terms={filteredTerms} onClick={setTermId} termId={termId} />
    </Card>
  );
};
