const { ApolloError } = require("apollo-server-express");
const Cat = require('../../../models/cat')

const sortCats = async (_, {property, order}) => {
  try {
    const sortObj = {
      [property]: order
    }
    const cat = await Cat.find().sort(sortObj)

    if (cat.length < 1) {
      throw new ApolloError("Not found");
    }

    return cat
  }  catch (error) {
    console.log(error)
    return error
  }
}

module.exports = sortCats
