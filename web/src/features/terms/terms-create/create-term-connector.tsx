import React, { useState } from 'react';
import { CreateTermForm } from './create-term-form';

export const CreatePageConnector = () => {
  let [pages, setPages] = useState<any>([]);
  let [term, setTerm] = useState<any>('');

  return (
    <CreateTermForm
      currentPages={pages}
      term={term}
      onTermChange={(term: string) => setTerm(term)}
      onAddPageClicked={(page: number) => {
        if (!pages.includes(page)) {
          setPages([...pages, page]);
        }
      }}
      onRemovePageClick={(removePageNumber: number) => {
        const newPages = pages.filter((page: number) => page !== removePageNumber);
        setPages(newPages);
      }}
    />
  );
};
