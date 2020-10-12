<h1 align="center">Welcome to NewsApp 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/benjambo/NewsApp" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> NewsApp is an application for everyday usage. Read articles on what's going on in the world

### ✨ [Demo video of project](https://drive.google.com/file/d/1MwZrIF2ykMxbIy1aYI13n1e3GKCRD7Ky/view?usp=sharing)

### ✨ [Website Demo](https://benjambo.github.io/Newsy/#/)

## Prerequisites:

- React.JS 16.13.1
- Axios
- MongoDB
- Express
- Node.JS

# How to use:

Run NewsApp from your IDE. <br />
Open folder frontApp and follow the instructions down below:

## Install:

```sh
npm install
```

## Usage:

```sh
npm start      #For scripts start
```

# Rest API

#### Use of the RestAPI

## Usage:

### Get searched words in JSON

- URL

```sh
  /api/newsSearch
```

- Method

```sh
  GET
```

- URL parameters

```sh
  keyword={String} Searched word
  times_searched={Integer} Number of search times for the word
  id={String} Keyword ID
```

- Response

```sh
  [
    {
        "keyword": "covid",
        "times_searched": 1,
        "id": "5f7cbd616aa57a39442d1fb3"
    },
    {
        "keyword": "kissa",
        "times_searched": 5,
        "id": "5f7cbffc3a4e6442245afb99"
    },
    {
        "keyword": "Tech",
        "times_searched": 1,
        "id": "5f7d822552ebe12d88cdb62c"
    }
  ]
```

### Get searched word by word in JSON

- URL

```sh
  /api/newsSearches/:title
```

- Method

```sh
  GET
```

- URL parameters

```sh
  keyword={String, title} Searched word
  times_searched={Integer} Number of search times
  id={String} Keyword ID
```

- Response

```sh
    {
        "keyword": "Tech",
        "times_searched": 1,
        "id": "5f7d822552ebe12d88cdb62c"
    }
```

### News Search POST Request:

```sh
app.post('/api/newsSearch', (request, response) => {
  const key = request.body.topic

  // Cant send requests without authentication
  if (Auth.jwt(request.body.token).iss === 'Newsy') {
    // If keyword exists update times_searched by one. else create new document
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
```

### User Details POST Request:

```sh
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
              msgBody: 'Account successfully created',
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
```

## Author:

👤 **Benjamin Bowo, Jere Saarelma**

- Github: [@benjambo](https://github.com/benjambo)
- Github: [@jepu32](https://github.com/jepu32)

## Show your support

Give a ⭐️ if this project helped you!
