import React from 'react';
import { Card } from 'rebass';

let term: any;

function handleChange(newTerm: string): void {
  term = newTerm;
}
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  console.log(term);
}

export const TermsCreateTerm = () => (
  <Card p={3}>
    <form onSubmit={handleSubmit}>
      <label>
        Term Name:
        <input
          type="text"
          name="term"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(event.target.value)
          }
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <h2>{term}</h2>
  </Card>
);
