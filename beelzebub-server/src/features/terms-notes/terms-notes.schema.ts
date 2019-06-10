import { terms } from './mocks/terms';

export const termsNotesTypeDefs = `
	extend type Query {
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
		terms: () => terms
	}
};
