import React from "react";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import { TermsListComponent } from "./terms-list.component";

const TERMS_QUERY = gql`
  query getTerms($pageSize: Int, $after: String) {
    terms(pageSize: $pageSize, after: $after) {
      cursor
      hasMore
      list {
        id
        title
      }
    }
  }
`;

export const TermsListConnectorWithHook = () => {
  const { data, error, loading } = useQuery(TERMS_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const {
    terms: { list }
  } = data;

  return <TermsListComponent terms={list} />;
};
