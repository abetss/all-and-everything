declare namespace Index {
  export enum SpecialPageType {
    f,
    ff,
    pasim,
  }

  export interface TermReference {
    id: any;
    title: string;
  }

  export interface SpecialPage {
    page: number;
    type: SpecialPageType;
  }

  export interface Pages {
    pageNumbers: number[];
    specialPages: SpecialPage[];
  }

  export interface Association {
    type: string;
    quotation?: string;
    terms: TermReference[];
    pages: Pages;
  }

  export interface TermInfo {
    title: string;
    pronunciation: Pronunciation;
    associations: Association[];
    usedThroughOut: boolean;
  }

  export interface SubWord {
    word: string;
    description: string;
    lang: string;
  }

  export interface OtherLang {
    lang: string;
    spelling: string;
  }

  export interface Dictionary {
    description?: string;
    subWords: SubWord[];
    inOtherLangs: Pronunciation[];
  }

  export interface IndexGuideEditions {
    english1950?: TermInfo;
    english1992?: TermInfo;
  }

  export interface Pronunciation {
    phonetic?: string;
    spelling?: string;
    sound?: string;
    lang?: string;
  }

  export interface IndexGuide {
    parentTerm?: string;
    editions: IndexGuideEditions;
    inOtherLangs: Pronunciation[];
  }

  export interface Term {
    id: string;
    title: string;
    indexGuide?: IndexGuide;
    dictionary?: Dictionary;
  }
}
