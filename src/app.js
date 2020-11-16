const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const schema = require('./modules')
const app = express()
const cors = require('cors')
const path = require('path')

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

//fronted application
app.set('views', __dirname + '/dist');
app.engine('html', require('ejs').renderFile);
app.use('/frontend-app', express.static("dist"));
app.get('/frontend-app/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})
app.get('/', function(req, res) {
  res.redirect('/frontend-app');
})
module.exports = app
