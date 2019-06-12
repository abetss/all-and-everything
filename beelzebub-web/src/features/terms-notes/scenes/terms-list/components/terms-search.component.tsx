import React from "react";
import { TextField } from "@material-ui/core";

interface TermsSearchProps {
  terms: Array<any>;
  onChange: (filterText: string) => void;
}

export const TermsSearch = ({ terms, onChange }: TermsSearchProps) => (
  <form noValidate autoComplete="on">
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      margin="normal"
      variant="outlined"
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
        onChange(event.target.value)
      }
    />
  </form>
);
