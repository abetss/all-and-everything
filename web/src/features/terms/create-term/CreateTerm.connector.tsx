import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { CreateTerm } from './CreateTerm';

export const CreatePageConnector = () => {
  const history = useHistory();
  const [pages, setPages] = useState<any>([]);
  const [term, setTerm] = useState<String>('');

  const handleTermSubmission = useCallback(() => {
    console.log('handleTermSubmission', { pages, term });
    history.push('/');
  }, [pages, term, history]);

  const handleAddPageClicked = useCallback(
    (page: number) => {
      if (!pages.includes(page)) {
        setPages([...pages, page]);
      }
    },
    [pages],
  );

  const handleRemovePageClicked = useCallback(
    (removePageNumber: number) => {
      const newPages = pages.filter((page: number) => page !== removePageNumber);
      setPages(newPages);
    },
    [pages],
  );

  return (
    <CreateTerm
      currentPages={pages}
      term={term}
      onTermChange={setTerm}
      onAddPageClicked={handleAddPageClicked}
      onRemovePageClick={handleRemovePageClicked}
      onTermSubmitted={handleTermSubmission}
    />
  );
};
