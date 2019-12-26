import React from 'react';
import { TextField } from '@material-ui/core';
import { Box } from 'rebass/styled-components';

interface TermsSearchProps {
  onChange: (filterText: string) => void;
}

export const TermsSearch = ({ onChange }: TermsSearchProps) => (
  <Box px={3} pb={3}>
    <form noValidate autoComplete="on">
      <TextField
        id="outlined-search"
        label="Search field"
        type="search"
        margin="normal"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
      />
    </form>
  </Box>
);
