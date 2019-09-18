import React, { useState, useEffect } from 'react';
import { Button, Card, Flex } from 'rebass';
import styled from 'styled-components';
interface CreatePageProps {
  addedPages: number[];
  onAddClick: (pageNumber: string) => void;
  onRemoveClick: (pageIndex: number) => void;
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
//<CreatePage addedPages={[3, 10, 15]} onAddClick={onAddClick} />

export const CreatePage = (props: CreatePageProps) => {
  const [page, setPage] = useState();

  let pageList = props.addedPages.map((addedPage: number, i: number) => {
    return (
      <Button mx={1} onClick={() => props.onRemoveClick(i)} key={i}>
        {addedPage}
      </Button>
    );
  });
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <Card p={2}>
          <Label>Pages:</Label>
          <Input
            type="text"
            value={page}
            name="page"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPage(event.target.value)}
          />
        </Card>
        <Button
          disabled={page == ''}
          mx={2}
          onClick={() => {
            props.onAddClick(page);
            setPage('');
            // setPages(pages.push(page));
          }}
        >
          Add page
        </Button>
      </Flex>
      <Flex alignItems="center">
        <Card px={2}>
          {props.addedPages.length ? <h3>Added Pages : {pageList}</h3> : <h3>No Pages added</h3>}
        </Card>
      </Flex>
    </Flex>
  );
};
