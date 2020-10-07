require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = process.env.MONGO_URL
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const News = require('./models/News')
const NewsSearch = require('./models/News')
const User = require('./models/User')
const Auth = require('./auth')

const PORT = process.env.PORT || 3001

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
app.use(cookieParser())
app.use(express.static('build'))

const userRouter = require('./routes/User')
app.use('/user', userRouter)

app.post('/api/newsSearch', (request, response) => {
  //console.log(request)
  const key = request.body.topic

  //cant send requests without authentication
  if (Auth.jwt(request.body.token).iss === 'Newsy') {
    //if keyword exists update times_searched by one. else create new document
    News.findOne({ keyword: key }, (req, res) => {
      if (res) {
        News.findOneAndUpdate(
          { keyword: key },
          { $inc: { times_searched: 1 } },
          { new: true },
          function (err, response) {
            if (err) {
              console.log(err)
            } else {
              console.log(response)
            }
          }
        )
      } else {
        const newsSearch = new NewsSearch({
          keyword: request.body.topic,
          times_searched: 1,
        })
        newsSearch.save().then((savedNews) => {
          response.json(savedNews.toJSON())
        })
      }
    })
  }
})

app.use(express.static('frontend/build'))
app.use(express.static('frontend/public'))
app.get('*', (req, res) => {
  res.sendFile('frontend/build/index.html')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
