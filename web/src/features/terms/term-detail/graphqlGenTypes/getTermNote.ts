/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTermNote
// ====================================================

export interface getTermNote_termNote_notes {
  __typename: 'Note';
  text: string | null;
}

export interface getTermNote_termNote {
  __typename: 'TermNote';
  title: string | null;
  notes: (getTermNote_termNote_notes | null)[];
  pages: (number | null)[];
  tags: string[];
}

export interface getTermNote {
  termNote: getTermNote_termNote;
}

export interface getTermNoteVariables {
  id?: number | null;
}
