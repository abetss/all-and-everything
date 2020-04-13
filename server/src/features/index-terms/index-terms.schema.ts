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

  type Pronunciation {
    phonetic: String
    spelling: String
    sound: String
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

  type Editions {
    english1950: TermInfo
    english1992: TermInfo
  }

  type OtherPronunciation {
    transcription: String
    spelling: String
    sound: String
  }

  type OtherPronunciations {
    russian: OtherPronunciation
    french: OtherPronunciation
  }

  type IndexTerm {
    id: ID!
    parentTerm: ID
    source: String!
    editions: Editions!
    otherPronunciations: OtherPronunciations
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
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
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
