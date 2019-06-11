import React from "react";
import { TextField } from "@material-ui/core";

interface TermsSearchProps {
  terms: Array<any>;
}

export const TermsSearch = ({ terms }: TermsSearchProps) => (
  <form noValidate autoComplete="on">
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      margin="normal"
      variant="outlined"
    />
  </form>
);
