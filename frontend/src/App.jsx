import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewMessage from './NewMessage'

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path="/new" element= {<NewMessage />}/>
    </Routes>
  )
}

export default App
