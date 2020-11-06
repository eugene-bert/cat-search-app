const { makeExecutableSchemaFromModules } = require('../utils/modules')

const auth = require('./auth')
const cats = require('./cats')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth,
    cats
  ]
})
