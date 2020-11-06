const { ApolloError } = require("apollo-server-express");
const Cat = require("../../../models/cat");

const findCatByName = async (_, { name }) => {
  const cat = await Cat.find({ name: name });

  if (!cat) {
    throw new ApolloError("Not found");
  }
  console.log(cat)
  return cat;
};

module.exports = findCatByName;
