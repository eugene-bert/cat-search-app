const Cat = require('../../../models/cat')

const cats = async (_) => {
  return Cat.find()
}

module.exports = cats
