import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { TermsList } from './TermsList';
import { getTermsVariables } from './graphqlGenTypes/getTerms';

const TERMS_QUERY = gql`
  query indexTerms($pageSize: Int, $after: String) {
    indexTerms(pageSize: $pageSize, after: $after) {
      cursor
      hasMore
      list {
        id
        title
      }
    }
  }
`;

export const TermsListConnector = () => {
  const { data, error, loading } = useQuery<any, getTermsVariables>(TERMS_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const {
    indexTerms: { list },
  } = data;

  return <TermsList terms={list} />;
};
