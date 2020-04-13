import { Pronunciation } from './index-terms.types';
// import { IndexTerm } from './index-terms.types';
import { gql } from 'apollo-server-lambda';
import { paginateResults } from '../../core/utils';

export const indexTermsTypeDefs = gql`
  extend type Query {
    interTerms(pageSize: Int, after: String): IndexTermsConnection!
    indexTerm(id: ID): IndexTerm!
  }

  type IndexTermsConnection {
    cursor: String!
    hasMore: Boolean!
    list: [IndexTerm!]!
  }

  type TermReference {
    id: ID!
    title: String!
  }

  type SpecialPage {
    page: Int!
    type: String!
  }

  type Pages {
    pageNumbers: [Int]!
    specialPages: [SpecialPage!]!
  }

  type Association {
    type: String!
    quotation: String
    terms: [TermReference!]!
    pages: Pages
  }

  type TermInfo {
    title: String!
    pronunciation: Pronunciation
    associations: [Association!]!
    usedThroughOut: Boolean!
  }

  type IndexGuideEditions {
    english1950: TermInfo
    english1992: TermInfo
  }

  type Pronunciation {
    spelling: String
    phonetic: String
    sound: String
    lang: String
  }

  type SubWord {
    word: String
    description: String
    lang: String
  }

  type OtherLang {
    lang: String
    spelling: String
  }

  type Dictionary {
    description: String
    subWords: [SubWord]!
    otherLangs: [OtherLang!]!
  }

  type IndexGuide {
    parentTerm: ID
    editions: IndexGuideEditions!
    inOtherLangs: [Pronunciation!]!
  }

  type IndexTerm {
    id: ID!
    title: String!
    indexGuide: IndexGuide
    dictionary: Dictionary
  }
`;

export const indexTermsResolvers = {
  Query: {
    interTerms: async (_: any, { pageSize, after }: any, { dataSources: { databaseApi } }: any) => {
      const allIndexTerms: Index.Term[] = await databaseApi.getAllIndexTerms();
      console.log('allIndexTerms', JSON.stringify(allIndexTerms, null, 2));

      const paginableTerms = allIndexTerms.map(item => ({
        ...item,
        cursor: item.id.toString(),
      }));

      const paginatedTerms = paginateResults<Index.Term, string>(paginableTerms, after, pageSize);

      return {
        list: paginatedTerms,
        cursor: paginatedTerms.length ? paginatedTerms[paginatedTerms.length - 1].cursor : null,
        hasMore: paginatedTerms.length
          ? paginatedTerms[paginatedTerms.length - 1].cursor !== paginableTerms[paginableTerms.length - 1].cursor
          : false,
      };
    },
    indexTerm: async (_: any, { id }: any, { dataSources: { databaseApi } }: any) => {
      const indexTerm: Index.Term = await databaseApi.findIndexTerm(id);
      return indexTerm;
    },
  },
};
