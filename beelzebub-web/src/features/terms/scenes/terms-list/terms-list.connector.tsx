import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Paper, Grid } from '@material-ui/core';
import { termsMocks } from '../terms-list';
import { TermsList, TermsSearch } from './components';

interface terms {
  value: string;
  filterList: (event: React.FormEvent<HTMLSelectElement>) => void;
}
export class TermsListConnector extends React.PureComponent<RouteComponentProps<{}>, {}> {
  state = {
    terms: termsMocks,
    filteredTerms: termsMocks,
  };

  handleClick = (id: number) => {
    console.log(id);
  };
  filterList = (filterText: string) => {
    // var updatedList = this.state.terms;
    const updatedList = this.state.terms.filter(function(item: any) {
      return item.title.toLowerCase().search(filterText.toLowerCase()) !== -1;
    });

    this.setState({
      filteredTerms: updatedList,
    });
  };
  render() {
    const {
      filterList,
      handleClick,
      state: { terms, filteredTerms },
    } = this;

    return (
      <Grid container justify="center" direction="column">
        <Grid item xs={4}>
          <Paper>
            <TermsSearch terms={terms} onChange={filterList} />
            <TermsList terms={filteredTerms} onClick={handleClick} />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
