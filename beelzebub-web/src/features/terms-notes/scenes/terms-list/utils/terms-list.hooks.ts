import { useState, useCallback } from 'react';
import { findStringMatch } from '../../../../../core/utils';

export const useTerms = (terms: any) => {
  const [allTerms] = useState(terms);
  const [filteredTerms, setFilteredTerms] = useState(allTerms);
  const [selectedId, setSelectedId] = useState(allTerms[0].note);

  const handleClick = (id: number) => {
    console.log('id', id);
    const currentTerm = allTerms.filter((term: any) => {
      if (term.id === id) {
        return true;
      }
    });
    console.log(currentTerm[0]);
    setSelectedId(currentTerm[0]);
  };

  const filterList = useCallback((input: string) => {
    const updatedList = allTerms.filter(findStringMatch(input));
    setFilteredTerms(updatedList);
  }, []);

  return [allTerms, filteredTerms, handleClick, filterList, selectedId];
};
