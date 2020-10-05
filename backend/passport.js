const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const User = require('./models/User')

const cookieExtractor = (req) => {
  let token = null
  if (req && req.cookies) {
    token = req.cookies['access_token']
  }
  return token
}

// Authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'Newsy',
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false)
        if (user) return done(null, user)
        else return done(null, false)
      })
    }
  )
)

// Authenticated local strategy using email and password
passport.use(
  new LocalStrategy((email, password, done) => {
    User.findOne({ email }, (err, user) => {
      // Something has gone wrong
      if (err) return done(err)
      // If no user exists
      if (!user) return done(null, false)
      // Check if password is correct
      user.comparePassword(password, done)
    })
  })
)
