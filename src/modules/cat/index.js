const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    cat(id: ID!): Cat
    cats: [Cat]
    findCatByName(name: String!): [Cat]
    catsPaginate(page_size: Int!, page_num: Int!): [Cat]
    sortCats(property: String, order: Int): [Cat]
  }

  extend type Mutation {
    createCat(
      name: String!
      breed: String
      weight: Int
    ): Cat

    deleteCat(
      id: ID!
    ): Cat
  }

  type Cat {
    id: ID!
    name: String!
    breed: String
    weight: Int
    created: DateTime!
  }
`

const resolvers = require('./resolvers')

module.exports = {
  typeDefs: [
    typeDefs
  ],
  resolvers
}
