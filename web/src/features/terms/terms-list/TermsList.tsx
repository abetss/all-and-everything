import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { CircleButton, Flex } from 'src/design-system';
import { useTerms } from './utils';
import { TermsSearch, Terms } from './components';
import { getTerms_termNotes_list } from './graphqlGenTypes/getTerms';

interface TermsListProps {
  terms: getTerms_termNotes_list[];
}

export const TermsList = ({ terms }: TermsListProps) => {
  const [filteredTerms, setTermId, termId, filterList] = useTerms(terms);
  let { path } = useRouteMatch();

  console.log('termId', JSON.stringify(termId, null, 2));

  return (
    <React.Fragment>
      <Flex sx={{ alignItems: 'center', pr: 3 }}>
        <TermsSearch onChange={filterList} />
        <Link to={`${path}/create`}>
          <CircleButton size="medium" variant="primary">
            +
          </CircleButton>
        </Link>
      </Flex>
      <Terms terms={filteredTerms} onClick={setTermId} termId={termId} />
    </React.Fragment>
  );
};
