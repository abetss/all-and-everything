import React from 'react';
import { ThemeProvider } from 'styled-components';
import { materialUiTheme } from '../design-system';
import NoSsr from '@material-ui/core/NoSsr';
import { Routes } from './routes';

export default class App extends React.PureComponent {
	render() {
		return (
			<NoSsr>
				<ThemeProvider theme={materialUiTheme}>
					<Routes />
				</ThemeProvider>
			</NoSsr>
		);
	}
}
