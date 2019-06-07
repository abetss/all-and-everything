import React from 'react';
import { ThemeProvider } from 'styled-components';
import { materialUiTheme } from './design-system';
import NoSsr from '@material-ui/core/NoSsr';
import Box from '@material-ui/core/Box';

export default function Demo() {
	return (
		<NoSsr>
			<ThemeProvider theme={materialUiTheme}>
				<Box
					color="primary.main"
					bgcolor="background.paper"
					fontFamily="h6.fontFamily"
					fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
					p={{ xs: 2, sm: 3, md: 4 }}
				>
					@material-ui/system
				</Box>
			</ThemeProvider>
		</NoSsr>
	);
}
