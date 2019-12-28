/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTerms
// ====================================================

export interface getTerms_terms_list {
  __typename: "Term";
  id: string;
  title: string | null;
}

export interface getTerms_terms {
  __typename: "TermsConnection";
  cursor: string;
  hasMore: boolean;
  list: getTerms_terms_list[];
}

export interface getTerms {
  terms: getTerms_terms;
}

export interface getTermsVariables {
  pageSize?: number | null;
  after?: string | null;
}
