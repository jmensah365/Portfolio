import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SDEPage from './components/SDEPage/SDEPage.jsx'
import './App.css'
import HomePage from './components/HomePage'
import SDETPage from './components/SDETPage/SDETPage.jsx'
import ContactMe from './components/ContactMe/ContactMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/SDE' element={<SDEPage/>}/>
          <Route path='/SDET' element={<SDETPage/>}/>
          <Route path='/ContactMe' element={<ContactMe/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
