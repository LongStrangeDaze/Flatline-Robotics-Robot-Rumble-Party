import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Main from './components/main.componet'
import AboutUs from './components/aboutus.componet'
import CompanyEvents from './components/companyevents.componet'
import ContactUs from './components/contactus.componet'
import KidsParty from './components/kidsparty.componet'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="">
            <Link className="navbar-brand" to={'/main'}>
            Robot Rumble Parties
            </Link>
          </div>
          <div class="navbar-collapse ml-auto justify-content-end" id="navbar4">
            <ul className="nav ml-auto ">
              <li className="nav-item m-1">
                <Link className="nav-link" to={'/aboutus'}>
                  About
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link className="nav-link" to={'/kidsparty'}>
                  Kids Partys
                </Link>
              </li>
              <li className="nav-item m-1">
                <Link className="nav-link" to={'/companyevents'}>
                  Company Events
                </Link>
              </li>
              <li className='nav-item m-1'>
              <Link className="nav-link" to={'/contactus'}>
                Contact Us
              </Link></li>
            </ul>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/main" element={< Main />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/KidsParty" element={<KidsParty />} />
              <Route path="/CompanyEvents" element={<CompanyEvents />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App