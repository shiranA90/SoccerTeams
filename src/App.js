import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Team from '../src/components/Team/Team'
import TeamsList from '../src/components/TeamsList/TeamsList'

const App = () => {
  return (
    <Router>
        <div>
            <Switch>
                <Route exact path='/teams' component={ TeamsList } />
                <Route exact path='/teams/:id' component={ Team } />
                <Redirect from='*' to='/teams' />
            </Switch>
        </div>
    </Router>
  );
}

export default App
