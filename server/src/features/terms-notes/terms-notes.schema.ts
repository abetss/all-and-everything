import { gql } from 'apollo-server-lambda';
import { paginateResults } from '../../core/utils';
import { TermNote } from './terms-notes.types';

export const termsNotesTypeDefs = gql`
  extend type Query {
    termNotes(pageSize: Int, after: String): TermNotesConnection!
    termNote(id: Int): TermNote!
  }

  type TermNotesConnection {
    cursor: String!
    hasMore: Boolean!
    list: [TermNote!]!
  }

  type Note {
    text: String
  }

  # TODO: rename Terms to Term
  type TermNote {
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
    termNotes: async (_: any, { pageSize, after }: any, { dataSources: { databaseApi } }: any) => {
      const allTerms: TermNote[] = await databaseApi.getAllTerms();

      // TODO: create a generic pagination logic
      const paginableTerms = allTerms.map(item => ({
        ...item,
        cursor: item.id.toString(),
      }));

      const paginatedTerms = paginateResults<TermNote, string>(paginableTerms, after, pageSize);

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
    termNote: async (_: any, { id }: any, { dataSources: { databaseApi } }: any) => {
      const term: TermNote = await databaseApi.findTerm(id);
      return term;
    },
  },
};
