import React, { useState } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Users from './Users'

const App = () => {
  const [users, setUsers] = useState([])


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
      </div>
      </Switch>
    </Router>
  );
}

export default App;