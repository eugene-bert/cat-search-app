const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./modules')

const server = new ApolloServer({
  schema
})

const app = express()

server.applyMiddleware({
  path: '/',
  app
})

module.exports = app
