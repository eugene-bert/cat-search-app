const Cat = require('../../../models/cat')

const cats = async (_) => {
  const cats = await Cat
    .find()
    .populate('createdBy')

  return cats
}

module.exports = cats
