const mongoose = require('mongoose')

const newsSearch = new mongoose.Schema({
  keyword: String,
  times_searched: Number
})

newsSearch.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('NewsSearch', newsSearch)
