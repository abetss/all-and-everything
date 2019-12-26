import React, { useState, useEffect } from 'react';
import { Button, Card, Flex, Box } from 'rebass';
import styled from 'styled-components';
import { TextField, Badge } from '../../../design-system';
interface CreatePageProps {
  addedPages: number[];
  onAddPageClicked: (pageNumber: string) => void;
  onRemovePageClick: (pageNumber: number) => void;
}

export const CreatePage = ({
  addedPages,
  onAddPageClicked,
  onRemovePageClick,
}: CreatePageProps) => {
  const [page, setPage] = useState('');

  return (
    <Flex flexDirection="row" alignItems="baseline">
      <TextField
        label="Page Number"
        fullWidth={false}
        type="number"
        margin="none"
        value={page}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => setPage(event.target.value)}
      />
      <Box ml={3} pb={1}>
        <Button
          variant="clickable"
          mr={2}
          borderRadius={3}
          px={2}
          py={1}
          disabled={page === ''}
          onClick={() => {
            onAddPageClicked(page);
            setPage('');
          }}
        >
          +
        </Button>
        {addedPages.map((addedPage: number, i: number) => (
          <Badge onClick={() => onRemovePageClick(addedPage)} key={i}>
            {addedPage}
          </Badge>
        ))}
      </Box>
    </Flex>
  );
};
