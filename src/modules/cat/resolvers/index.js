const cat = require('./cat')
const cats = require('./cats')
const sortCats = require('./sortCats')
const createCat = require('./create-cat')
const deleteCat = require('./delete-cat')
const catsPaginate = require('./cats-paginate')
const findCatByName = require('./find-cat-by-name')
const catsPaginateSort = require('./cats-paginate-sort');

const resolvers = {
  Query: {
    cat,
    cats,
    findCatByName,
    catsPaginate,
    catsPaginateSort,
    sortCats
  },
  Mutation: {
    createCat,
    deleteCat
  }
}

module.exports = resolvers
