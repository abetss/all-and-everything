// import { nanoid } from 'nanoid'

export const createUserModel = db => {
  return {
    findOne() {
      return db.get('user')
        .value()
    },

    create(user) {
      const newUser = {id:'adaw2' /*id: nanoid()*/, createdAt: Date.now(), ...user}
      db.set('user', newUser)
        .write()

      return newUser
    }
  }
}

