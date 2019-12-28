import React from 'react';
import { Card, Flex } from 'rebass/styled-components';
import { useTerms } from './utils';
import { TermsSearch, Terms } from './components';
import { SidePageHeading, CircleButton } from 'src/design-system/components';
import { Link } from 'react-router-dom';
import { getTerms_terms_list } from './graphqlGenTypes/getTerms';
interface TermsListProps {
  terms: getTerms_terms_list[];
}

export const TermsList = ({ terms }: TermsListProps) => {
  const [filteredTerms, setTermId, termId, filterList] = useTerms(terms);

  return (
    <Card border={1} borderColor="surface">
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
