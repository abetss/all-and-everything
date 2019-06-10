import { authTypeDefs } from '../features/auth';
import { termsNotesTypeDefs } from '../features/terms-notes';

const rawQuery = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [rawQuery, termsNotesTypeDefs, authTypeDefs];
