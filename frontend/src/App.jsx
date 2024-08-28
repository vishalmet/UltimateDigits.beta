import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/LandingPage'
import SelectionPage from './pages/selection-page/SelectionPage'
import RealNumber from './pages/real-number/RealNumber'
import VirtualNumber from './pages/virtual-number/VirtualNumber'
import SearchResult from './pages/virtual-number/search-result/searchResults'
import OtpPage from './pages/real-number/OtpPage'
import Linked from './pages/real-number/Linked'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/selection-page' element={<SelectionPage />}></Route>
          <Route path='/real-number' element={<RealNumber/>}></Route>
          <Route path='/virtual-number' element={<VirtualNumber/>}></Route>
          <Route path='/otp-page' element={<OtpPage/>}></Route>
          <Route path='/number-linked' element={<Linked/>}></Route>
          <Route path='/search-results' element={<SearchResult/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App