import React from 'react';
import logo from "../../logo.png"
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar:React.FC = () => {
  return (
      <div className="topnav">
        <div className='header-logo-section'>
          <img src={logo} className="header-logo" alt="logo" />
          <h6 className='header-logo-text'>DEX WebUI</h6>
        </div>
        <div className="header-menu">
          <Link to="/">Home</Link>
                              <Link to='/counter'>counter</Link>
                              <Link to='/axios'>axios</Link>
          <Link to="/others">others</Link>
        </div>
      </div>
  );
}
export default NavBar;
