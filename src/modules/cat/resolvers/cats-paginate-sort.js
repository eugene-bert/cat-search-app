const { ApolloError } = require("apollo-server-express");
const Cat = require('../../../models/cat')

const catsPaginateSort = async (_, {property, order, page_size, page_num}) => {
  const skips = page_size * (page_num - 1)
  try {
    const cats = await Cat
      .find().sort({[property]: order}).skip(skips).limit(page_size)

    if (cats.length < 1) {
      throw new ApolloError("Not found");
    }

    return cats
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = catsPaginateSort
