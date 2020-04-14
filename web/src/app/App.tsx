import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { theme, Page } from 'src/design-system';
import NoSsr from '@material-ui/core/NoSsr';
import { Routes } from './routes';
import { createClient } from './apollo';

const client = createClient();

const GlobalStyle = () => (
  <Global
    styles={theme => ({
      '*': {
        boxSizing: 'border-box',
      },
      body: {
        margin: 0,
      },
    })}
  />
);

// Using both ApolloProvider and ApolloHooksProvider in case we don't want to use
// apollo hooks all the time. Otherwise, we can remove the ApolloProvider later

export default class App extends React.PureComponent {
  render() {
    return (
      <NoSsr>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <Page>
                <Routes />
              </Page>
            </ApolloHooksProvider>
          </ApolloProvider>
        </ThemeProvider>
      </NoSsr>
    );
  }
}
