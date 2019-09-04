import React, { useState } from 'react';
import { Card, Button, Flex } from 'rebass';
import styled from 'styled-components';

interface CreateTermProps {
  onAddTermClick: (term: string) => void;
}
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  margin:4px &:active,
  &:focus {
    text-align: left;
  }
`;
const Label = styled.label`
  font-size: 16px;
  margin: 4px;
  width: 80%;
`;

export const CreateTerm = (props: CreateTermProps) => {
  let [term, setTerm] = useState('');
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <Flex flexDirection="column">
      <Card px={2}>
        <form onSubmit={handleSubmit}>
          <Label>Term Name:</Label>
          <Input
            type="text"
            name="term"
            value={term}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTerm(event.target.value)}
          />
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
