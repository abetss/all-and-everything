import React, { useState } from 'react';
import { Card } from 'rebass';

export const TermsCreateTerm = () => {
  let [term, setTerm] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(term);
  }
  return (
    <Card p={3}>
      <form onSubmit={handleSubmit}>
        <label>
          Term Name:
          <input
            type="text"
            name="term"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTerm((term = event.target.value))
            }
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{term}</h2>
    </Card>
  );
};
