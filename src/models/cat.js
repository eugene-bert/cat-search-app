const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: false
  },
  weight: {
    type: Number,
    required: false,
  },
  created: {
    type: Date,
    default: Date.now
  },
  changed: {
    type: Date,
    default: Date.now
  }
})

const Cat = mongoose.model('Cat', catSchema)

module.exports = Cat
