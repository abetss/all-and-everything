import React from "react";
import { List, ListItem } from "@material-ui/core";

interface TermsListProps {
  terms: Array<any>;
  onClick: (id: number) => void;
}

export const TermsList = ({ terms, onClick }: TermsListProps) => (
  <List>
    {terms.map((term: any) => (
      <ListItem button onClick={() => onClick(term.id)} key={term.id}>
        {term.title}
      </ListItem>
    ))}
  </List>
);
