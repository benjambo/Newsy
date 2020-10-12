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
  .connect("mongodb+srv://NewsAppProjeckt:2Io1WlMQWpibF5qw@newsappdb.6ikab.mongodb.net/NewsAppDB?retryWrites=true&w=majority", {
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

const newsRouter = require('./routes/News')
app.use('/api', newsRouter)

// Respond with this when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('This is the Backend for Newsy, Welcome!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
