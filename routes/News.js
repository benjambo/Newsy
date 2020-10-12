const express = require('express')
const newsRouter = express.Router()
const News = require('../models/News')
const NewsSearch = require('./models/News')


// Get all news search words
app.get('/newsSearches', (request, response) => {
  //console.log(request)
  News.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.status(200).json(result);
    }
  });
})

// Get specific search word
app.get('/newsSearches/:title', (request, response) => {
  //console.log(request)
  const title = request.params.title;
  News.findOne({keyword: title}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      response.status(200).json(result);
    }
  });
})

// Post search word
newsRouter.post('/newsSearch', (request, response) => {
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