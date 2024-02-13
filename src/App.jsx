import { useState } from 'react'
import './App.css'
import SinglePlayer from './components/SinglePlayer.jsx'
import NewPlayerForm from './components/NewPlayerForm.jsx'
import { Routes, Route, Link } from "react-router-dom"
import Navbar from './components/NavBar'
import Registration from './components/Registration.jsx'
import AllPlayers from './components/AllPlayers.jsx'
const cohortName = "2308-ACC-ET-WEB-PT-A";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

function App () {
  const [user, setUser] = useState(null);
  return (
    <div>
        <h1>Introducing the Puppy Bowl</h1>
        <Navbar user={user}/>
        <main>
        <Routes>
            <Route path="/" element={<div>All Players</div>} />
            <Route path="/SinglePlayer" element={<SinglePlayer user={user} setUser={setUser} />} />
            <Route path="/NewPlayerForm" element={<NewPlayerForm user={user} setUser={setUser} />} />
            <Route path="/Registration" element={<Registration user={user} setUser={setUser} />} />          
            <Route path="/AllPlayers" element={<AllPlayers user={user} setUser={setUser} />} />
          </Routes>
        </main>
        


                      



      </div>
  )
}
  
    
  

export default App

