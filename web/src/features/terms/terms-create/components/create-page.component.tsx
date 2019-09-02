import React, { useState, useEffect } from 'react';
import { Button, Card } from 'rebass';
import { string } from 'prop-types';

interface CreatePageProps {
  addedPages: number[];
  onAddClick: (pageNumber: string) => void;
  onRemoveClick: (pageIndex: number) => void;
}

//<CreatePage addedPages={[3, 10, 15]} onAddClick={onAddClick} />

export const CreatePage = (props: CreatePageProps) => {
  const [text, setText] = useState('');

  let pageList = props.addedPages.map((page: any, i: number) => {
    return (
      <Button onClick={() => props.onRemoveClick(i)} key={i}>
        {page}
      </Button>
    );
  });
  return (
    <div>
      <div>
        Pages:
        <input
          type="text"
          value={text}
          name="page"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
        />
      </div>

      <Button
        onClick={() => {
          props.onAddClick(text);
          setText('');
          // setPages(pages.push(page));
        }}
      >
        Add page
      </Button>
      <div>{props.addedPages.length ? pageList : <h3>No Pages added</h3>}</div>
    </div>
  );
};
