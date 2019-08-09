import React from 'react';
import { Card } from 'rebass';

let term: any;

export const TermsCreateTerm = () =>
  function onChange(newTerm: string): void {
    term = newTerm;
  };
function handleSubmit() {
  console.log(term);
  alert('A name was submitted: ' + term);
}
<Card p={3}>
  <form onSubmit={handleSubmit}>
    <label>
      Term Name:
      <input
        type="text"
        name="term"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      />
    </label>
    <input type="submit" value="Submit" />
  </form>
  <h2>{term}</h2>
</Card>;
