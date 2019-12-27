import { gql } from 'apollo-server-lambda';
import { paginateResults } from '../../core/utils';
import { Term } from './terms-notes.types';

export const termsNotesTypeDefs = gql`
  extend type Query {
    terms(pageSize: Int, after: String): TermsConnection!
    term(id: Int): Term!
  }

  type TermsConnection {
    cursor: String!
    hasMore: Boolean!
    list: [Term!]!
  }

  type Note {
    text: String
  }

  # TODO: rename Terms to Term
  type Term {
    id: ID!
    title: String
    author: User
    notes: [Note]!
    pages: [Int]!
    tags: [String!]!
  }
`;

export const termsNotesResolvers = {
  Query: {
    terms: async (
      _: any,
      { pageSize, after }: any,
      { dataSources: { databaseApi } }: any
    ) => {
      const allTerms: Term[] = await databaseApi.getAllTerms();

      // TODO: create a generic pagination logic
      const paginableTerms = allTerms.map(item => ({
        ...item,
        cursor: item.id.toString()
      }));

      const paginatedTerms = paginateResults<Term, string>(
        paginableTerms,
        after,
        pageSize
      );

      return {
        list: paginatedTerms,
        cursor: paginatedTerms.length
          ? paginatedTerms[paginatedTerms.length - 1].cursor
          : null,
        // if the cursor of the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: paginatedTerms.length
          ? paginatedTerms[paginatedTerms.length - 1].cursor !==
            paginableTerms[paginableTerms.length - 1].cursor
          : false
      };
    },
    term: async (
      _: any,
      { id }: any,
      { dataSources: { databaseApi } }: any
    ) => {
      const term: Term = await databaseApi.findTerm(id);
      return term;
    }
  }
};
