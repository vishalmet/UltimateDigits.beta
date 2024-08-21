import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import SelectionPage from './pages/selection-page/SelectionPage'
import RealNumber from './pages/real-number/RealNumber'
import OtpPage from './pages/real-number/OtpPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/selection-page' element={<SelectionPage />}></Route>
          <Route path='/real-number' element={<RealNumber/>}></Route>
          <Route path='/otp-page' element={<OtpPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App