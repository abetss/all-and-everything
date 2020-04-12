// import { nanoid } from 'nanoid'

export const createUserTermsModel = db => {
  return {
    findMany(filter) {
      return db.get('userTerms')
        .filter(filter)
        .orderBy(['title'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('userTerms')
        .find(filter)
        .value()
    },

    create(term) {
      const newTerm = {id:'adaw2' /*id: nanoid()*/, createdAt: Date.now(), ...term}

      db.get('userTerms')
        .push(newTerm)
        .write()

      return newTerm
    }
  }
}

