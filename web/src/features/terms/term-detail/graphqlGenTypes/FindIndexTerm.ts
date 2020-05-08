/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindIndexTerm
// ====================================================

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950_pronunciation {
  __typename: "Pronunciation";
  phonetic: string | null;
  spelling: string | null;
  sound: string | null;
  lang: string | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_terms {
  __typename: "TermReference";
  id: string | null;
  title: string | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_pages_specialPages {
  __typename: "SpecialPage";
  page: number | null;
  type: string | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_pages {
  __typename: "Pages";
  pageNumbers: number[] | null;
  specialPages: FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_pages_specialPages[] | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations {
  __typename: "Association";
  type: string;
  quotation: string | null;
  terms: FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_terms[] | null;
  pages: FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations_pages | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions_english1950 {
  __typename: "TermInfo";
  title: string | null;
  pronunciation: FindIndexTerm_indexTerm_indexGuide_editions_english1950_pronunciation | null;
  associations: FindIndexTerm_indexTerm_indexGuide_editions_english1950_associations[] | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_editions {
  __typename: "IndexGuideEditions";
  english1950: FindIndexTerm_indexTerm_indexGuide_editions_english1950 | null;
  english1992: FindIndexTerm_indexTerm_indexGuide_editions_english1950 | null;
}

export interface FindIndexTerm_indexTerm_indexGuide_inOtherLangs {
  __typename: "Pronunciation";
  phonetic: string | null;
  spelling: string | null;
  sound: string | null;
  lang: string | null;
}

export interface FindIndexTerm_indexTerm_indexGuide {
  __typename: "IndexGuide";
  editions: FindIndexTerm_indexTerm_indexGuide_editions;
  inOtherLangs: FindIndexTerm_indexTerm_indexGuide_inOtherLangs[] | null;
}

export interface FindIndexTerm_indexTerm_dictionary_subWords {
  __typename: "SubWord";
  word: string | null;
  description: string | null;
  lang: string | null;
}

export interface FindIndexTerm_indexTerm_dictionary_otherLangs {
  __typename: "Pronunciation";
  phonetic: string | null;
  spelling: string | null;
  sound: string | null;
  lang: string | null;
}

export interface FindIndexTerm_indexTerm_dictionary {
  __typename: "Dictionary";
  description: string | null;
  subWords: FindIndexTerm_indexTerm_dictionary_subWords[] | null;
  otherLangs: FindIndexTerm_indexTerm_dictionary_otherLangs[] | null;
}

export interface FindIndexTerm_indexTerm {
  __typename: "IndexTerm";
  id: string;
  title: string;
  indexGuide: FindIndexTerm_indexTerm_indexGuide | null;
  dictionary: FindIndexTerm_indexTerm_dictionary | null;
}

export interface FindIndexTerm {
  indexTerm: FindIndexTerm_indexTerm;
}

export interface FindIndexTermVariables {
  id?: string | null;
}
