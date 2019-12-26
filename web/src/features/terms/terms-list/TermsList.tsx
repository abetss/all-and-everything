import React from 'react';
import { Card, Flex } from 'rebass/styled-components';
import { useTerms } from './utils';
import { TermsSearch, Terms } from './components';
import { SidePageHeading, CircleButton } from '../../../design-system/components';
import { Link } from 'react-router-dom';

export const TermsList = ({ terms }: any, title: string, pageView: string) => {
  const [, filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  return (
    <Card width={1} border={1} borderColor="surface">
      <SidePageHeading ml={3}>Terms List</SidePageHeading>

      <Flex alignItems="center">
        <TermsSearch onChange={filterList} />
        <Link to="/create">
          <CircleButton size="medium" bg="secondary">
            +
          </CircleButton>
        </Link>
      </Flex>
      <Terms terms={filteredTerms} onClick={setTermId} termId={termId} />
    </Card>
  );
};
