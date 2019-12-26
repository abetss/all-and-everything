import React, { useState } from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { TextField, Badge, CircleButton } from '../../../../design-system';
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
