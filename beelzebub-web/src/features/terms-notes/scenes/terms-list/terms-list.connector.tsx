import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Paper, Typography, Grid, List, ListItem, AppBar, Toolbar } from '@material-ui/core';
import { termsMocks } from '.';

export class TermsListConnector extends React.PureComponent<
	RouteComponentProps<{}>,
	{}
> {
	render() {
		function handleClick(id: React.MouseEvent){
			console.log(id)
		}
		console.log(termsMocks)
		const tempTerms = termsMocks.map(term => <ListItem button  key={term.id}>{term.title}</ListItem>) 
		return (
			
			<Grid container spacing={2}  direction="column">
				<Grid item xs={4}>
					<Paper>
						<AppBar position="static" color="default">
							<Toolbar>
							<Typography variant="h6" color="inherit">
								Terms List
							</Typography>
							</Toolbar>
						</AppBar>

						<List>
							{tempTerms}
						</List>
					</Paper>
				</Grid>
			</Grid>
			
		);
	}
}
