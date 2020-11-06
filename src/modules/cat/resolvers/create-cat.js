const Cat = require('../../../models/cat')

const createCat = async (_, {
  name, breed, weight
}) => {
  const newCat = new Cat({
    name,
    breed,
    weight
  })

  await newCat
    .execPopulate()

  return newCat.save()
}

module.exports = createCat
