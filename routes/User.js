const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const JWT = require('jsonwebtoken')
const User = require('../models/User')
const News = require('../models/News')

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'Newsy',
      sub: userID,
    },
    'Newsy',
    { expiresIn: '3h' }
  )
}

userRouter.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body
  User.findOne({ email }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: 'Error has occured', msgError: true } })
    if (user)
      res.status(400).json({
        message: { msgBody: 'Email is already taken', msgError: true },
      })
    else {
      const newUser = new User({ firstName, lastName, email, password })
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: 'Error has occured', msgError: true },
          })
        else
          res.status(201).json({
            message: {
              msgBody: 'Account successfully createf',
              msgError: false,
            },
          })
      })
    }
  })
})

userRouter.post(
  '/signin',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, email } = req.user
      const token = signToken(_id)
      res.cookie('access_token', token, { httpOnly: true, sameSite: true })
      res
        .status(200)
        .json({ isAuthenticated: true, user: { email }, token: token })
    }
  }
)

userRouter.get(
  '/signout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    req.logout()
    res.clearCookie('access_token')
    res.json({ user: { email: '' }, success: true })
  }
)

userRouter.get(
  '/authenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { email } = req.user
    res.status(200).json({ isAuthenticated: true, user: { email } })
  }
)
module.exports = userRouter
