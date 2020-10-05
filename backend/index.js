const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()
const News = require('./Database/mongo')
const NewsSearch = require('./Database/mongo')
const PORT = 3001

const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

app.post('/api/news', (request, response) => {

    /*
    const body = request.body
    if (body.clicks === undefined) {
      return response.status(400).json({ error: 'content missing' })
    }
    */
    const news = new News({
      id: 11111111,
      clicks: 123
    })
  
    news.save().then(savedNews => {
      response.json(savedNews.toJSON())
    })
  })
  app.post('/api/newsSearch', (request, response) => {

    const newsSearch = new NewsSearch({
      keyword:"covid"
    })
  
    newsSearch.save().then(savedNews => {
      response.json(savedNews.toJSON())
    })
  })

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })