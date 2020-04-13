// import { nanoid } from 'nanoid'

export const createIndexTermModel = db => {
  return {
    findAll(filter) {
      const terms = db.get('indexTerm');
      console.log('indexTerm findAll', JSON.stringify(terms, null, 2));

      return terms
        .filter(filter)
        // .orderBy(['title'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('indexTerm')
        .find(filter)
        .value()
    },

    findById(id) {
      return db.get('indexTerm')
        .find({ id })
        .value()
    },

    create(indexTerm) {
      const newTerm = {id:'adaw2' /*id: nanoid()*/, createdAt: Date.now(), ...indexTerm}

      db.get('indexTerm')
        .push(newTerm)
        .write()

      return newTerm
    }
  }
}

