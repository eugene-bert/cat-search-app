const { ApolloError } = require("apollo-server-express");
const Cat = require('../../../models/cat')

const cats = async (_) => {
  try {
    const cat = Cat.find()

    if (cat.length < 1) {
      throw new ApolloError("Not found");
    }

    return cat
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = cats
