const { ApolloError } = require('apollo-server-express')
const Cat = require('../../../models/cat')

const cat = async (_, args) => {
  const { id } = args
  try {
    const cat = await Cat
      .findById(id)

    if (!cat) {
      throw new ApolloError('Not found')
    }

    return cat
  } catch (error) {
    console.log(error)

    return error
  }
}

module.exports = cat
