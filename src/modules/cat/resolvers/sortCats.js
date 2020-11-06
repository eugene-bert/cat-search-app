const Cat = require('../../../models/cat')

const sortCats = async (_, {property, order}) => {

  const sortObj = {
    [property]: order
  }
  const cats = await Cat.find().sort(sortObj)

  return cats
}

module.exports = sortCats
