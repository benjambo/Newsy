require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = process.env.MONGO_URL
const bodyParser = require('body-parser')
const CookieParser = require('cookie-parser')
const News = require('./models/News')
const NewsSearch = require('./models/News')
const User = require('./models/User')

const PORT = 3001

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((res) => {
    console.log('connected to mongoDB')
  })

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const userRouter = require('./routes/User')
app.use('/user', userRouter)

app.post('/api/news', (request, response) => {
  /*
    const body = request.body
    if (body.clicks === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
    */
  const news = new News({
    id: 11111111,
    clicks: 123,
  })

  news.save().then((savedNews) => {
    response.json(savedNews.toJSON())
  })
})
app.post('/api/newsSearch', (request, response) => {
  //console.log(request)
  const newsSearch = new NewsSearch({
    keyword: request.body.topic,
  })

  newsSearch.save().then((savedNews) => {
    response.json(savedNews.toJSON())
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
