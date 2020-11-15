const Cat = require('../../../models/cat')

const deleteCat = async (_, {id}) => {
  try {
    return Cat.findByIdAndDelete(id);
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = deleteCat
