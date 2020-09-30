import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

// Pages
import { Home } from './pages/home'
import { News } from './pages/news'

// Components
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
