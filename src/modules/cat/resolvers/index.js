const cat = require('./cat')
const cats = require('./cats')
const sortCats = require('./sortCats')
const createCat = require('./create-cat')
const deleteCat = require('./delete-cat')
const catsPaginate = require('./cats-paginate')
const findCatByName = require('./find-cat-by-name')

const resolvers = {
  Query: {
    cat,
    cats,
    findCatByName,
    catsPaginate,
    sortCats
  },
  Mutation: {
    createCat,
    deleteCat
  }
}

module.exports = resolvers
