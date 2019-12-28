import React from 'react';
import { TextField } from '@material-ui/core';
import { Box } from 'rebass/styled-components';

interface TermsSearchProps {
  onChange: (filterText: string) => void;
}

export const TermsSearch = ({ onChange }: TermsSearchProps) => (
  <Box mx={3} mb={3}>
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      margin="normal"
      variant="outlined"
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(event.target.value)}
    />
  </Box>
);
