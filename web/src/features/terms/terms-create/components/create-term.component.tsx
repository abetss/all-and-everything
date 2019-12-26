import React, { useState } from 'react';
import { Card, Button, Flex } from 'rebass/styled-components';

interface CreateTermProps {
  onAddTermClick: (term: string) => void;
}

export const CreateTerm = (props: CreateTermProps) => {
  let [term, setTerm] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Flex flexDirection="column">
      <Card px={2}>
        <form onSubmit={handleSubmit}>
          <Button
            onClick={() => {
              props.onAddTermClick(term);
            }}
          >
            Save Term
          </Button>
        </form>
        <h3>New Term : {term}</h3>
      </Card>
    </Flex>
  );
};
