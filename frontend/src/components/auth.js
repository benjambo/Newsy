import jwt from 'jsonwebtoken'

// functions for authentication
export function isLoggedIn() {
  const token = localStorage.getItem('token')
  return token != null
  
}

export function logout() {
  if (isLoggedIn()) {
    //localStorage.clear();
    localStorage.removeItem('token')
    window.location.reload(true);
  }
}

// to save the token to the browsers localstorage which
// will keep the session active
export function setToken(token) {
  if (getToken() === token) {
    localStorage.clear()
    localStorage.setItem('token', token)
  }
  localStorage.setItem('token', token)
}

export function getToken() {
  return localStorage.getItem('token')
}

export function decodeToken() {
  const token = getToken()
  if (!token) {
    return null
  }
  const decodedToken = jwt.decode(token)
  console.log('decoded token:')
  console.log(decodedToken)
  return decodedToken
}

// User info decoded from Token
export function getUserId() {
  // decrypt token to its original data
  const token = decodeToken()
  if (!token) {
    return null
  }
  return token.id
}

export function getUserEmail() {
  // decrypt token to its original data
  const token = decodeToken()
  if (!token) {
    return null
  }
  return token.email
}
export function getUserFirstName() {
  // decrypt token to its original data

  const token = decodeToken()
  if (!token) {
    return 'User'
  }
  return token.firstName
}
export function getUserLastName() {
  // decrypt token to its original data
  const token = decodeToken()
  if (!token) {
    return null
  }
  return token.lastName
}
