import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { createUserModel, createTermModel, createUserTermsModel, createIndexTermModel } from './models'

const adapter = new FileSync('src/data-sources/db/lowdb/db.json');

export const db = low(adapter);

export const models = {
  user: createUserModel(db),
  terms: createTermModel(db),
  userTerms: createUserTermsModel(db),
  indexTerm: createIndexTermModel(db)
};
