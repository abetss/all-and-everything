import React from 'react';
import { Heading, Card, Flex, Button } from 'rebass/styled-components';
import { useTerms } from './utils';
import { TermsSearch, TermsList, AddTerm } from './components';
import { PageHeading, SidePageHeading, CircleButton } from '../../../design-system/components/';
import { Link } from 'react-router-dom';

export const TermsListComponent = ({ terms }: any, title: string, pageView: string) => {
  const [allTerms, filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  return (
    <Card width={1} border={1} borderColor="surface">
      <SidePageHeading>Terms List</SidePageHeading>
      <Flex alignItems="center">
        <TermsSearch onChange={filterList} />
        <Link to="/create">
          <CircleButton size="medium" onClick={() => {}} bg="secondary">
            +
          </CircleButton>
        </Link>
      </Flex>
      <TermsList terms={filteredTerms} onClick={setTermId} termId={termId} />
    </Card>
  );
};
