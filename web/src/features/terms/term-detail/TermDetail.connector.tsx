import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { TermDetail } from './TermDetail';

interface TermDetailConnectorProps {
  id?: number;
}

const FIND_TERM_QUERY = gql`
  query getTermNote($id: Int) {
    termNote(id: $id) {
      title
      notes {
        text
      }
      pages
      tags
    }
  }
`;

export const TermDetailConnector = ({ id }: TermDetailConnectorProps) => {
  const { data, error, loading } = useQuery(FIND_TERM_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const { termNote } = data;

  return <TermDetail term={termNote} />;
};
