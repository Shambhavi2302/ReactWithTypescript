import React from 'react';
import logo from "../../../src/notfound.png";
import './nopage.css';
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const NoPage:React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <header className="home-header">
          <img src={logo} className="notfound-logo" alt="logo" />
          <h2>
            Page not found! Please try again
          </h2>
        </header>
      </div>
      <Footer />
    </>
  );
}
export default NoPage;
