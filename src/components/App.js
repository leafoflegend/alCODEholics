import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Users from './Users'
import Alcohols from './Alcohols'

const App = () => {
  const [users, setUsers] = useState([])
  const [alcohols, setAlcohols] = useState([])


  return (
    <Router>
      <Switch>
      <div className="App">
      <Navbar />
      <Route path='/users'>
        <Users
        users = {users}
        setUsers = {setUsers}
        />
      </Route>
      <Route path='/alcohol'>
        <Alcohols
        alcohols = {alcohols}
        setAlcohols = {setAlcohols}
        />
      </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;