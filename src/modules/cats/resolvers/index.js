const cat = require('./cat')
const cats = require('./cats')
const createCat = require('./create-cat')

const resolvers = {
  Query: {
    cat,
    cats
  },
  Mutation: {
    createCat
  }
}

module.exports = resolvers
