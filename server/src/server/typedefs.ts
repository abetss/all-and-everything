import { authTypeDefs } from '../features/auth';
import { indexTermsTypeDefs } from '../features/index-terms';
import { termsNotesTypeDefs } from '../features/terms-notes';

const rawQuery = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [rawQuery, termsNotesTypeDefs, authTypeDefs, indexTermsTypeDefs];
