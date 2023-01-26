import React, { useState, useEffect } from "react"
import { Switch, Route} from 'react-router-dom'

import Homepage from "./components/Homepage"
import Login from "./components/login_signup/Login"
import Signup from "./components/login_signup/Signup"
import Feed from "./components/feed_components/Feed"
import Bio from './components/feed_components/Bio'

function App() {

  useEffect(() => {
    fetch('/authorize')
    .then(r => r.json())
    .then(d => console.log(d))
  }, [])

  return (
      <Switch>

        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/feed">
          <Feed />
        </Route>

        <Route path="/bio/:id">
          <Bio />
        </Route>

      </Switch>
  );
}

export default App;
