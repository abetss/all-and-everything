import { merge } from 'lodash';

import { indexTermsResolvers } from '../features/index-terms';
import { termsNotesResolvers } from '../features/terms-notes';
import { authResolvers } from '../features/auth';

export const resolvers = merge([authResolvers, termsNotesResolvers, indexTermsResolvers]);
