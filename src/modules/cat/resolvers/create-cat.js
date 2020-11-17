const Cat = require('../../../models/cat')

const createCat = async (_, {
  name, breed, weight
}) => {
  try {
    const newCat = new Cat({
      name,
      breed,
      weight
    })

    await newCat
      .execPopulate()

    return newCat.save()
  } catch (error) {
    console.log(error)
    return  error
  }
}

module.exports = createCat
