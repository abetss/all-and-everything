import React, { useState } from 'react';
import { Button, Card } from 'rebass';
import { string } from 'prop-types';

// interface CreatePageProps {
//   addedPages: number[];
//   onAddClick: any;
//   onRemoveClick: any;
//   textInput: string;
//   pages: number;
// }

export const CreatePage = () => {
  let [pages, setPages] = useState<any>([]);
  let textInput: any;
  let pageNumber: any;
  //let [page, setPage] = useState<string | undefined>();
  let addedPages: [] = [];
  function handleSubmit(e: string) {
    //console.log(pages);
  }
  function onAddClick(pageNumber: React.RefObject<unknown>) {
    console.log(pageNumber);
    console.log(pages);
    setPages(pages.push(pageNumber));
    console.log(pages);
  }
  let pageList = pages.map((page: any, i: any) => {
    return <Button key={i}>{page}</Button>;
  });
  return (
    <div>
      <div>
        Pages:
        <input
          type="text"
          name="page"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            (textInput = event.target.value)
          }
        />
      </div>

      <Button
        onClick={() => {
          onAddClick(textInput);
          // setPages(pages.push(page));
        }}
      >
        Add page
      </Button>
      <div>{pages.length ? pageList : <h3>No Pages added</h3>}</div>
    </div>
  );
};
