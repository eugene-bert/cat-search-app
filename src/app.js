const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./modules')
const app = express()
const cors = require('cors')

//routes
const catRoutes = require('./routes/cat.routes')

//graphql
const server = new ApolloServer({
  schema
})

server.applyMiddleware({path: '/graphql', app})

//rest-api
app.use('/cat-api', cors())
app.use('/cat-api', require("body-parser").urlencoded({ extended: true }));
app.use('/cat-api', require("body-parser").json({ limit: "50mb" }));
app.use('/cat-api', catRoutes)

module.exports = app
