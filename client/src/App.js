import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage";
import { Switch, Route} from 'react-router-dom'

function App() {

  return (
      <Switch>

        <Route path="/">
          <Homepage />
        </Route>
        
      </Switch>
  );
}

export default App;
