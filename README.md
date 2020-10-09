<h1 align="center">Welcome to NewsApp 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/benjambo/NewsApp" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> NewsApp is an application for everyday usage. Read articles on what's going on in the world

### ✨ [Demo video of project](https://drive.google.com/file/d/1MwZrIF2ykMxbIy1aYI13n1e3GKCRD7Ky/view?usp=sharing)

### ✨ [Website Demo (Coming Soon)]()

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

# RestAPI

The use of the RestAPI

## Usage

```sh
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
```

## Author:

👤 **Benjamin Bowo, Jere Saarelma**

- Github: [@benjambo](https://github.com/benjambo)
- Github: [@jepu32](https://github.com/jepu32)

## Show your support

Give a ⭐️ if this project helped you!
