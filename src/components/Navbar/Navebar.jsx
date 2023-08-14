import React from "react";
import "./Navebar.css";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Logo</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <link to='/todo'>todo</link> */}
        <Link to="/todo">Todo</Link>
      </div>
      <div className="btn">
        <Link to='/Signup'><button className="button-1">Sign Up</button></Link>
        <Link to='/Login'><button className="button-1">Login</button></Link>
        
        
      </div>
    </nav>
  );
}

export default Navebar;
