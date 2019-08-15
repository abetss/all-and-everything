import React, { useState } from 'react';
import { Button, Card } from 'rebass';
import { string } from 'prop-types';

export const CreatePage = () => {
  let [page, setPage] = useState<string | undefined>();
  //let [pages, setPages] = useState < Array<number>([]);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //console.log(pages);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pages:
        <input
          type="text"
          name="page"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPage(event.target.value)}
        />
      </label>

      <Button
        onClick={() => {
          // setPages(pages.push(page));
        }}
      >
        Add another page
      </Button>

      <input type="submit" value="Submit" />
    </form>
  );
};
