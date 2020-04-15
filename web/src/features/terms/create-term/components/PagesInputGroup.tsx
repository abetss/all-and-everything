import React, { useState } from 'react';
import { TextField, Badge, CircleButton, Flex, Box } from 'src/design-system';

interface PagesInputGroupProps {
  addedPages: number[];
  onAddPageClicked: (pageNumber: string) => void;
  onRemovePageClick: (pageNumber: number) => void;
}

export const PagesInputGroup = ({ addedPages, onAddPageClicked, onRemovePageClick }: PagesInputGroupProps) => {
  const [page, setPage] = useState('');

  return (
    <Flex sx={{ flexDirection: 'row', alignItems: 'baseline' }}>
      <TextField
        label="Page Number"
        fullWidth={false}
        type="number"
        margin="none"
        value={page}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setPage(event.target.value)}
      />
      <Box ml={3} pb={1}>
        <CircleButton
          size="small"
          mr={3}
          disabled={page === ''}
          onClick={() => {
            onAddPageClicked(page);
            setPage('');
          }}
        >
          +
        </CircleButton>

        {addedPages.map((addedPage: number, i: number) => (
          <Badge mr={1} onClick={() => onRemovePageClick(addedPage)} key={i}>
            {addedPage}
          </Badge>
        ))}
      </Box>
    </Flex>
  );
};
