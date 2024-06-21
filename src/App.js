import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import React from "react";
import WeekByWeek from './WeekByWeek';
import WhatToExpect from "./WhatToExpect";
import InvasiveProcedures from "./InvasiveProcedures";
import Faq from "./Faq";
import Ultrasound from "./Ultrasound";
import Myths from "./Myths";
import logo from "./preg-logo.png";


import Home from "./Home";
import ContactUs from "./ContactUs";
import WeeksSlides from "./WeeksSlides";
import Obgyn from "./Obgyn";
import Genetics from "./Genetics";
import Blood from "./Blood";
import 'bootstrap/dist/css/bootstrap.min.css'
import Questions from "./Questions";


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
          <Link className="menuItem" to="/InvasiveProcedures">Invasive Procedures</Link>
          <Link className="menuItem" to="/Questions">Feedback</Link>
          <Link className="menuItem" to="/Myths">Myths</Link>
          <Link className="menuItem" to="/Faq">FAQ</Link>
            
        </nav>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/WeekByWeek/*' element={<WeekByWeek/>}/>
          <Route path='/WhatToExpect' element={<WhatToExpect/>}/>
          <Route path='/InvasiveProcedures' element={<InvasiveProcedures/>}/>
          <Route path='/Questions' element={<Questions/>}/>
          <Route path='/Myths' element={<Myths/>}/>
          <Route path='/Faq' element={<Faq/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/WeekByWeek/:title' element={<WeeksSlides/>}/>
          <Route path="/Obgyn" element={<Obgyn/>}/>
          <Route path="/Genetics" element={<Genetics/>}/>
          <Route path="/Blood" element={<Blood/>}/>
        </Routes>
  </Router>

  
  </div>




    // <div className="App" >
    //   <Menu/>
    //   <video width={500} ref={refVideo} loop={true} onChange={videoHandler}>
    //     <source src='./video/video-pregnant.mp4'  type='video/mp4'/>
    //   </video>  
    // </div>
  );
}

export default App;
