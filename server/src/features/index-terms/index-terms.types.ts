declare namespace Index {
  export enum SpecialPageType {
    f,
    ff,
    pasim,
  }

  export interface Pronunciation {
      phonetic?: string;
      spelling?: any;
      sound?: any;
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

  export interface Editions {
      english1950?: TermInfo;
      english1992?: TermInfo;
  }

  export interface OtherPronunciation {
      transcription: string;
      spelling?: any;
      sound?: any;
  }

  export interface OtherPronunciations {
      russian: OtherPronunciation;
      french: OtherPronunciation;
  }

  export interface Term {
      id: string;
      parentTerm?: string;
      source: string;
      editions: Editions;
      otherPronunciations: OtherPronunciations;
  }

}

