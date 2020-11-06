const { makeExecutableSchemaFromModules } = require('../utils/modules')


const cat = require('./cat')

module.exports = makeExecutableSchemaFromModules({
  modules: [
    cat
  ]
})
