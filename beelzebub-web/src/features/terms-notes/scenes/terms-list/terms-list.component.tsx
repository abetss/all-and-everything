import React, { useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Paper, Grid, Box } from "@material-ui/core";
import { TermsList, TermsSearch, TermsHeader } from "./components";
import { Notes } from "./notes/notes-component";
import { useQuery } from "react-apollo-hooks";

// TODO: to be moved to a different file
const findStringMatch = (input: string) => (item: any) => {
  return item.title.toLowerCase().search(input.toLowerCase()) !== -1;
};

// TODO: to be moved to a different file
const useTerms = (terms: any) => {
  const [allTerms] = useState(terms);
  const [filteredTerms, setFilteredTerms] = useState(allTerms);
  const [selectedId, setSelectedId] = useState(allTerms[0].note);

  const handleClick = (id: number) => {
    console.log("id", id);
    const currentTerm = allTerms.filter((term: any) => {
      if (term.id === id) {
        return true;
      }
    });
    console.log(currentTerm[0]);
    setSelectedId(currentTerm[0]);
  };

  const filterList = useCallback((input: string) => {
    const updatedList = allTerms.filter(findStringMatch(input));
    setFilteredTerms(updatedList);
  }, []);

  return [allTerms, filteredTerms, handleClick, filterList, selectedId];
};

export const TermsListComponent = ({ terms }: any) => {
  const [
    allTerms,
    filteredTerms,
    handleClick,
    filterList,
    selectedId
  ] = useTerms(terms);

  return (
    <Grid container justify="center" direction="row">
      <Grid item xs={4}>
        <Paper>
          <TermsHeader />
          <TermsSearch terms={allTerms} onChange={filterList} />
          <TermsList terms={filteredTerms} onClick={handleClick} />
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <Paper>
          <Notes selectedId={selectedId} />
        </Paper>
      </Grid>
    </Grid>
  );
};
