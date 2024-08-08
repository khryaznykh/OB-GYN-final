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
          <Route path='/Week' element={<WeekByWeek/>}/>
          <Route path='/WhatToExpect' element={<WhatToExpect/>}/>
          <Route path="/Feedback" element={<Calculator/>}/>       
          <Route path='/Home' element={<ContactUs/>}/>
          <Route path='/Week/:title' element={<WeeksSlides/>}/>
          <Route path="/WhatToExpect" element={<Obgyn/>}/>
          <Route path="/WhatToExpect" element={<Genetics/>}/>
          <Route path="/WhatToExpect" element={<Blood/>}/>
        </Routes>
  </Router>
  </div>
  );
}

export default App;
