import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import React from "react";
import WeekByWeek from './weekbyweek/WeekByWeek';
import WhatToExpect from "./whattoexpect/WhatToExpect";
import logo from "./preg-logo.png";
import Home from "./Home/Home";
import ContactUs from "./Home/ContactUs";
import WeeksSlides from "./weekbyweek/WeeksSlides";
import Obgyn from "./whattoexpect/Obgyn";
import Genetics from "./whattoexpect/Genetics";
import Blood from "./whattoexpect/Blood";
import Calculator from "./feedback/Calculator";

function App() {
    return (
    <div>
      <Router>
        <nav className="menu">
          <div className="circle-menu">
          <img src={logo} width={80} alt="logo"/>
          </div>
          <Link className="menuItem" to="/">HOME</Link>
          <Link className="menuItem" to="/WeekByWeek">Week by Week</Link>
          <Link className="menuItem" to="/WhatToExpect">What to Expect</Link>
          <Link className="menuItem" to="/Calculator">Feedback</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/WeekByWeek/*' element={<WeekByWeek/>}/>
          <Route path='/WhatToExpect' element={<WhatToExpect/>}/>
          <Route path="/Calculator" element={<Calculator/>}/>       
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/WeekByWeek/:title' element={<WeeksSlides/>}/>
          <Route path="/Obgyn" element={<Obgyn/>}/>
          <Route path="/Genetics" element={<Genetics/>}/>
          <Route path="/Blood" element={<Blood/>}/>
        </Routes>
  </Router>

  
  </div>
  );
}

export default App;
