const jwt = require('jsonwebtoken')

module.exports.jwt = function decodeToken(token) {
    if (!token) {
      return null
    }
    const decodedToken = jwt.decode(token)
    console.log('decoded token:')
    console.log(decodedToken)
    return decodedToken
  }