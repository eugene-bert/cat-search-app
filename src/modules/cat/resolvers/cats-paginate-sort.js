const Cat = require('../../../models/cat')

const catsPaginateSort = async (_, {property, order, page_size, page_num}) => {
  const skips = page_size * (page_num - 1)
  const sortObj = {
    [property]: order
  }
  const cats = await Cat
    .find().sort(sortObj).skip(skips).limit(page_size)

  return cats
}

module.exports = catsPaginateSort
