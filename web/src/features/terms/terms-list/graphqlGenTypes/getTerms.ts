/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTerms
// ====================================================

export interface getTerms_termNotes_list {
  __typename: "TermNote";
  id: string;
  title: string | null;
}

export interface getTerms_termNotes {
  __typename: "TermNotesConnection";
  cursor: string;
  hasMore: boolean;
  list: getTerms_termNotes_list[];
}

export interface getTerms {
  termNotes: getTerms_termNotes;
}

export interface getTermsVariables {
  pageSize?: number | null;
  after?: string | null;
}
