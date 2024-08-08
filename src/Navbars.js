import logo from "./assets/preg-logo.png";
import { Link } from "react-router-dom";
function Navbars() {
    return(
        <nav className="menu">
        <div className="circle-menu">
        <img src={logo} width={80} alt="logo"/>
        </div>
        <Link className="menuItem" to="/">HOME</Link>
        <Link className="menuItem" to="/WeekByWeek">Week by Week</Link>
        <Link className="menuItem" to="/WhatToExpect">What to Expect</Link>
        <Link className="menuItem" to="/Calculator">Feedback</Link>
      </nav>
    )
}
export default Navbars;