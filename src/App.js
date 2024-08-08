import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './style/App.css';
import React from "react";
import WeekByWeek from './WeekByWeek/WeekByWeek';
import WhatToExpect from "./whattoexpect/WhatToExpect";
import Home from "./Home/Home";
import ContactUs from "./Home/ContactUs";
import WeeksSlides from "./WeekByWeek/WeeksSlides";
import Obgyn from "./whattoexpect/Obgyn";
import Genetics from "./whattoexpect/Genetics";
import Blood from "./whattoexpect/Blood";
import Calculator from "./Feedback/Calculator";
import Navbars from "./Navbars";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
    <div className="mainpage">
      <Router>
        <ScrollToTop/>
        <Navbars/>
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
