import { useState, useCallback } from 'react';
import { findStringMatch } from '../../../../../core/utils';
import { useQueryParam, NumberParam } from 'use-query-params';

export const useTerms = (terms: any) => {
  const [allTerms] = useState(terms);
  const [filteredTerms, setFilteredTerms] = useState(allTerms);
  const [termId, setTermId] = useQueryParam('id', NumberParam);

  const filterList = useCallback((input: string) => {
    const updatedList = allTerms.filter(findStringMatch(input));
    setFilteredTerms(updatedList);
  }, []);

  return [allTerms, filteredTerms, setTermId, termId, filterList];
};
