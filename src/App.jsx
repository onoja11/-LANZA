import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route element={<AppLayout/>} >
        <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App