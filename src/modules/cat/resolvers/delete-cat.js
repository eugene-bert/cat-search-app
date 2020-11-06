const Cat = require('../../../models/cat')

const deleteCat = async (_, {id}) => {
  return Cat.findByIdAndDelete(id);
}

module.exports = deleteCat
