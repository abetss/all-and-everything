import React, { useState, useCallback } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Paper, Grid, Box } from '@material-ui/core';
import { TermsList, TermsSearch, TermsHeader } from './components';
import { useQuery } from 'react-apollo-hooks';

// TODO: to be moved to a different file
const findStringMatch = (input: string) => (item: any) => {
	return item.title.toLowerCase().search(input.toLowerCase()) !== -1;
};

// TODO: to be moved to a different file
const useTerms = (terms: any) => {
	const [allTerms] = useState(terms);
	const [filteredTerms, setFilteredTerms] = useState(allTerms);

	const handleClick = useCallback(id => {
		console.log('id', id);
	}, []);

	const filterList = useCallback((input: string) => {
		const updatedList = allTerms.filter(findStringMatch(input));
		setFilteredTerms(updatedList);
	}, []);

	return [allTerms, filteredTerms, handleClick, filterList];
};

export const TermsListComponent = ({ terms }: any) => {
	const [allTerms, filteredTerms, handleClick, filterList] = useTerms(terms);

	return (
		<Grid container justify="center" direction="column">
			<Grid item xs={4}>
				<Paper>
					<TermsHeader />
					<TermsSearch terms={allTerms} onChange={filterList} />
					<TermsList terms={filteredTerms} onClick={handleClick} />
				</Paper>
			</Grid>
		</Grid>
	);
};