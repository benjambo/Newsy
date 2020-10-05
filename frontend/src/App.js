import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'semantic-ui-css/semantic.min.css'

// Pages
import { Home } from './pages/home'
import News from './components/News'
import { Weather } from './pages/weather'
import { SignUp } from './pages/signUp'
import { SignIn } from './pages/signIn'

// Components
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/weather" component={Weather} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
