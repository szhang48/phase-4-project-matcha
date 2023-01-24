import React, { useState, useEffect } from "react"
import { Switch, Route} from 'react-router-dom'

import Homepage from "./components/Homepage"
import Login from "./components/Login"
import Signup from "./components/Signup"

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
      </Switch>
  );
}

export default App;
