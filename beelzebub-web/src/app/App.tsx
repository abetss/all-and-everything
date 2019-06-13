import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { materialUiTheme } from '../design-system';
import NoSsr from '@material-ui/core/NoSsr';
import { Routes } from './routes';
import { createClient } from './apollo';

const client = createClient();

// Using both ApolloProvider and ApolloHooksProvider in case we don't want to use
// apollo hooks all the time. Otherwise, we can remove the ApolloProvider later

export default class App extends React.PureComponent {
	render() {
		return (
			<NoSsr>
				<ThemeProvider theme={materialUiTheme}>
					<ApolloProvider client={client}>
						<ApolloHooksProvider client={client}>
							<Routes />
						</ApolloHooksProvider>
					</ApolloProvider>
				</ThemeProvider>
			</NoSsr>
		);
	}
}
