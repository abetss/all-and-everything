import React, { useState } from 'react';
import { AddTerm } from './add-term.component';

const removeIndexElement = (arr: number[], i: any) => {
  return arr.filter((x, index) => (x === arr[i] ? false : true));
};

export const CreatePageConnector = () => {
  let [pages, setPages] = useState<any>([]);
  let [term, setTerm] = useState<any>([]);

  return (
    <AddTerm
      currentPages={pages}
      onAddTermClick={(term: string) => setTerm([term])}
      onAddClick={(page: number) => setPages([...pages, page])}
      onRemoveClick={(removePageNumber: string) => {
        setPages(removeIndexElement(pages, removePageNumber));
        //  setPages()
      }}
    />
  );
};
