const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const JWT = require('jsonwebtoken')
const User = require('../models/User')
const News = require('../models/News')

userRouter.post('/signup', (req, res) => {
  const { email, password } = req.body
  User.findOne({ email }, (err, user) => {
    if (err)
      res.status(500),
        json({ message: { msgBody: 'Error has occured', msgError: true } })
    if (user)
      res.status(400),
        json({ message: { msgBody: 'Email is already taken', msgError: true } })
    else {
      const newUser = new User({ email, password })
      newUser.save((err) => {
        if (err)
          res.status(500),
            json({
              message: { msgBody: 'Error has occured', msgError: true },
            })
        else
          res.status(201),
            json({
              message: {
                msgBody: 'Account successfully createf',
                msgError: false,
              },
            })
      })
    }
  })
})

module.exports = userRouter
