import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './components/signup/SignUp';
import Home from './components/home/Home';
import Login from './components/login/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
