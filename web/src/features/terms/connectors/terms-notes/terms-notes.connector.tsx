import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { TermsNotesComponent } from './terms-notes.component';

interface TermsNotesConnectorProps {
  id?: any;
}

const FIND_TERM_QUERY = gql`
  query term($id: Int) {
    term(id: $id) {
      title
      notes {
        text
      }
      pages
      tags
    }
  }
`;

export const TermsNotesConnector = ({ id }: TermsNotesConnectorProps) => {
  const { data, error, loading } = useQuery(FIND_TERM_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const { term } = data;

  return <TermsNotesComponent term={term} />;
};
