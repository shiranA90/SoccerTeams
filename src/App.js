import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Team from './containers/Team'
import TeamsList from './containers/TeamsList'

const App = () => {
  return (
    <Router>
      <Switch>
          <Route exact path='/teams' component={ TeamsList } />
          <Route exact path='/teams/:id' component={ Team } />
          <Redirect from='*' to='/teams' />
      </Switch>
    </Router>
  )
}

export default App
