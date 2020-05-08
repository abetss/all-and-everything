import { useState, useCallback } from 'react';
import { findStringMatch } from 'src/core/utils';
import { useQueryParam, StringParam } from 'use-query-params';
import { getTerms_termNotes_list } from './../graphqlGenTypes/getTerms';

export const useTerms = (
  terms: getTerms_termNotes_list[],
): [
  getTerms_termNotes_list[],
  (newValue: string, updateType?: 'replace' | 'replaceIn' | 'push' | 'pushIn') => void,
  string,
  (input: string) => void,
] => {
  const [filteredTerms, setFilteredTerms] = useState(terms);
  const [termId, setTermId] = useQueryParam('id', StringParam);

  const filterList = useCallback(
    (input: string) => {
      const updatedList = terms.filter(findStringMatch(input));
      setFilteredTerms(updatedList);
    },
    [terms],
  );

  return [filteredTerms, setTermId, termId, filterList];
};
