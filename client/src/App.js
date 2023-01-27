import React, { useState, useEffect } from "react"
import { Switch, Route} from 'react-router-dom'

import Homepage from "./components/Homepage"
import Login from "./components/login_signup/Login"
import Signup from "./components/login_signup/Signup"
import Feed from "./components/feed_components/Feed"
import Bio from './components/feed_components/Bio'
import SearchResultPage from './components/feed_components/SearchResultPage'
import TopBar from './components/feed_components/TopBar'

function App() {
  const [user, setUser] = useState(null)
  const [search, setSearch] = useState("")
  const [searchQuery, setSearchQuery] = useState([])

  function handleSearch() {
    
  }

  useEffect(() => {
    fetch('/authorize')
    .then(r => {
      if(r.ok) {
        r.json().then(user => {setUser(user)})
      }
      else {
        r.json().then(() => setUser(null))
      }
    })
  }, [])

  console.log(user)

  if(user === null) return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} user={user} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </>
  )

  else if(user !== null) return (
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
          <Feed  search={search} setSearch={setSearch}/>
        </Route>

        <Route path="/bio/:id">
          <Bio />
        </Route>

        <Route path="/searchresults">
          <SearchResultPage search={search}/>
        </Route>

      </Switch>
  );
}

export default App;
