import { useState, useCallback } from 'react';
import { findStringMatch } from 'src/core/utils';
import { useQueryParam, NumberParam } from 'use-query-params';
import { getTerms_terms_list } from './../graphqlGenTypes/getTerms';

export const useTerms = (
  terms: getTerms_terms_list[],
): [
  getTerms_terms_list[],
  (newValue: number, updateType?: 'replace' | 'replaceIn' | 'push' | 'pushIn') => void,
  number,
  (input: string) => void,
] => {
  const [filteredTerms, setFilteredTerms] = useState(terms);
  const [termId, setTermId] = useQueryParam('id', NumberParam);

  const filterList = useCallback(
    (input: string) => {
      const updatedList = terms.filter(findStringMatch(input));
      setFilteredTerms(updatedList);
    },
    [terms],
  );

  return [filteredTerms, setTermId, termId, filterList];
};
