import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { Global } from '@emotion/core';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { theme } from 'src/design-system';
import { BrowserRouter as AppLevelBrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { createClient } from './apollo';
import { Layout } from './components'

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
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <ApolloHooksProvider client={client}>
              <AppLevelBrowserRouter>
                <Layout>
                  <Routes />
                </Layout>
              </AppLevelBrowserRouter>
            </ApolloHooksProvider>
          </ApolloProvider>
        </ThemeProvider>
      </>
    );
  }
}
