// import { nanoid } from 'nanoid'

export const createTermModel = db => {
  return {
    findAll(filter) {
      const terms = db.get('term');

      return terms.filter(filter).orderBy(['title'], ['desc']).value();
    },

    findOne(filter) {
      return db.get('term').find(filter).value();
    },

    findById(id) {
      return db.get('term').find({ id }).value();
    },

    create(term) {
      const newTerm = { id: 'adaw2' /*id: nanoid()*/, createdAt: Date.now(), ...term };

      db.get('term').push(newTerm).write();

      return newTerm;
    },
  };
};
