const { gql } = require('apollo-server-express')

const typeDefs = gql`
  extend type Query {
    cat(id: ID!): Cat @isAuthenticated
    cats: [Cat] @isAuthenticated
  }

  extend type Mutation {
    createCat(
      name: String!
    ): Cat
  }

  type Cat {
    id: ID!
    name: String!
    createdBy: User!
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
