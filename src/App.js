import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './style/App.css';
import React from "react";
import WeekByWeek from './Week/WeekByWeek';
import WhatToExpect from "./WhatToExpect/WhatToExpect";
import Home from "./Home/Home";
import ContactUs from "./Home/ContactUs";
import WeeksSlides from "./Week/WeeksSlides";
import Obgyn from "./WhatToExpect/Obgyn";
import Genetics from "./WhatToExpect/Genetics";
import Blood from "./WhatToExpect/Blood";
import Calculator from "./FeedbackNew/Calculator";
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
          <Route path='/WeekByWeek' element={<WeekByWeek/>}/>
          <Route path='/WhatToExpect' element={<WhatToExpect/>}/>
          <Route path="/Calculator" element={<Calculator/>}/>       
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/WeeksSlises/:title' element={<WeeksSlides/>}/>
          <Route path="/Obgyn" element={<Obgyn/>}/>
          <Route path="/Genetics" element={<Genetics/>}/>
          <Route path="/Blood" element={<Blood/>}/>
        </Routes>
  </Router>
  </div>
  );
}

export default App;
