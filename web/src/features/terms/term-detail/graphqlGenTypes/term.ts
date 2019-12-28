/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: term
// ====================================================

export interface term_term_notes {
  __typename: "Note";
  text: string | null;
}

export interface term_term {
  __typename: "Term";
  title: string | null;
  notes: (term_term_notes | null)[];
  pages: (number | null)[];
  tags: string[];
}

export interface term {
  term: term_term;
}

export interface termVariables {
  id?: number | null;
}
