const { ApolloError } = require("apollo-server-express");
const Cat = require("../../../models/cat");

const findCatByName = async (_, { name }) => {
  try {
    const cat = await Cat.find({ name: name });

    if (cat.length < 1) {
      throw new ApolloError("Not found");
    }
    return cat;
  } catch (error) {
    console.log(error)
    return  error
  }
};

module.exports = findCatByName;
