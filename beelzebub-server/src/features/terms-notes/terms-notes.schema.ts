import { gql } from 'apollo-server';
import { termsMocks as allTerms } from './mocks/terms';
import { paginateResults } from '../../core/utils';
import { Term } from './terms-notes.types';

export const termsNotesTypeDefs = gql`
	extend type Query {
		terms(pageSize: Int, after: String): TermsConnection!
	}

	type TermsConnection {
		cursor: String!
		hasMore: Boolean!
		terms: [Terms!]!
	}

	type Terms {
		id: ID!
		title: String
		author: User
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
				terms: paginatedTerms,
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
		}
	}
};
