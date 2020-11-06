const Cat = require('../../../models/cat')

const createCat = async (_, {
  name
}, { user }) => {
  const userId = user._id.toString()

  const newCat = new Cat({
    name,
    createdBy: userId
  })

  await newCat
    .populate('createdBy')
    .execPopulate()

  return newCat.save()
}

module.exports = createCat
