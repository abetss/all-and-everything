/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: indexTerms
// ====================================================

export interface indexTerms_indexTerms_list {
  __typename: "IndexTerm";
  id: string;
  title: string;
}

export interface indexTerms_indexTerms {
  __typename: "IndexTermsConnection";
  cursor: string | null;
  hasMore: boolean | null;
  list: indexTerms_indexTerms_list[] | null;
}

export interface indexTerms {
  indexTerms: indexTerms_indexTerms;
}

export interface indexTermsVariables {
  pageSize?: number | null;
  after?: string | null;
}
