import React from 'react';
import { Link } from 'react-router-dom';
import { CircleButton, Flex } from 'src/design-system';
import { useTerms } from './utils';
import { TermsSearch, Terms } from './components';
import { getTerms_termNotes_list } from './graphqlGenTypes/getTerms';

interface TermsListProps {
  terms: getTerms_termNotes_list[];
}

export const TermsList = ({ terms }: TermsListProps) => {
  const [filteredTerms, setTermId, termId, filterList] = useTerms(terms);

  return (
    <React.Fragment>
      <Flex sx={{ alignItems: 'center', pr: 3 }}>
        <TermsSearch onChange={filterList} />
        <Link to="/create">
          <CircleButton size="medium" bg="secondary">
            +
          </CircleButton>
        </Link>
      </Flex>
      <Terms terms={filteredTerms} onClick={setTermId} termId={termId} />
    </React.Fragment>
  );
};
