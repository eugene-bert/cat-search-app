const Cat = require('../../../models/cat')

const catsPaginate = async (_, {page_size, page_num}) => {
  const skips = page_size * (page_num - 1)
  const cats = await Cat
    .find().skip(skips).limit(page_size)

  return cats
}

module.exports = catsPaginate
