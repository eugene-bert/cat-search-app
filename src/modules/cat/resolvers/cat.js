const { ApolloError } = require('apollo-server-express')
const Cat = require('../../../models/cat')

const cat = async (_, args) => {
  const { id } = args
  const cat = await Cat
    .findById(id)

  if (!cat) {
    throw new ApolloError('Not found')
  }

  console.log(cat)
  return cat
}

module.exports = cat
