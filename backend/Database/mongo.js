require('dotenv').config()

const mongoose = require('mongoose')
const url = process.env.MONGO_URL

    mongoose.connect(url,
        { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
        .then(res => {console.log("connected to mongoDB")})

    const newsSchema = new mongoose.Schema({
        id: Number,
        clicks: Number
    })

    newsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('News', newsSchema)

const newsSearch = new mongoose.Schema({
    keyword: String
})

newsSearch.set('toJSON', {
transform: (document, returnedObject) => {
returnedObject.id = returnedObject._id.toString()
delete returnedObject._id
delete returnedObject.__v
}
})

module.exports = mongoose.model('NewsSearch', newsSearch)


