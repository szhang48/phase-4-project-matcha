import React, { useState, useEffect } from "react"
import { Switch, Route} from 'react-router-dom'

import Homepage from "./components/Homepage"
import Login from "./components/login_signup/Login"
import Signup from "./components/login_signup/Signup"
import Feed from "./components/feed_components/Feed"

function App() {

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
      </Switch>
  );
}

export default App;
