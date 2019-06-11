import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Paper, Grid } from "@material-ui/core";
import { termsMocks } from ".";
import { TermsList, TermsSearch, TermsHeader } from "./components";

export class TermsListConnector extends React.PureComponent<
  RouteComponentProps<{}>,
  {}
> {
  handleClick = (id: number) => {
    console.log(id);
  };

  render() {
    return (
      <Grid container justify="center" direction="column">
        <Grid item xs={4}>
          <Paper>
            <TermsHeader />
            <TermsSearch terms={termsMocks} />
            <TermsList terms={termsMocks} onClick={this.handleClick} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
