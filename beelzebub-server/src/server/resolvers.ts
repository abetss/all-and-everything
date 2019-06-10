import { merge } from 'lodash';

import { termsNotesResolvers } from '../features/terms-notes';
import { authResolvers } from '../features/auth';

export const resolvers = merge([authResolvers, termsNotesResolvers]);
