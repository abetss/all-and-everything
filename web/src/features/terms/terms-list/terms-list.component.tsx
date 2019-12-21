import React from 'react';
import { Heading, Card, Flex, Button } from 'rebass';
import { useTerms } from './utils';
import { TermsSearch, TermsList, AddTerm } from './components';
import { PageHeading, SidePageHeading } from '../../../design-system/components/';

export const TermsListComponent = ({ terms }: any, title: string, pageView: string) => {
  const [allTerms, filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  return (
    <Card width={1} border={1} borderColor="surface">
      <SidePageHeading>Terms List</SidePageHeading>
      <Flex alignItems="center">
        <TermsSearch onChange={filterList} />
        <AddTerm pageView={'/create'} />
      </Flex>
      <TermsList terms={filteredTerms} onClick={setTermId} termId={termId} />
    </Card>
  );
};
