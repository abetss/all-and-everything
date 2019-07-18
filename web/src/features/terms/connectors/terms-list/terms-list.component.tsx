import React from 'react';
import { Heading, Card } from 'rebass';
import { useTerms } from './utils';
import { TermsSearch, TermsList } from './components';

export const TermsListComponent = ({ terms }: any) => {
  const [allTerms, filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  return (
    <Card width={1} border={1} borderColor="surface">
        <Heading px={3} pt={3}>
          Terms List
        </Heading>
        <TermsSearch onChange={filterList} />
        <TermsList terms={filteredTerms} onClick={setTermId} />
    </Card>
  );
};
