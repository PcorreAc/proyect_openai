import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Personal from './pages/Personal'
import GameOfLife from './components/GameOfLive'
import './index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/personal" element={<GameOfLife />} />
      </Routes>
    </Router>
  )
}
export default App
