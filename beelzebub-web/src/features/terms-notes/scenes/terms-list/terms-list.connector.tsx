import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Box, Paper, Typography } from '@material-ui/core';

export class TermsListConnector extends React.PureComponent<
	RouteComponentProps<{}>,
	{}
> {
	render() {
		return (
			<Paper>
				<Box p={2}>
					<Typography variant="h3">Terms List</Typography>
					<Box mt={2}>
						<Typography variant="body1">Alkadan</Typography>
						<Typography variant="body1">ABC</Typography>
					</Box>
				</Box>
			</Paper>
		);
	}
}
