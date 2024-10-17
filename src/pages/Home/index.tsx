import React from 'react';
import logo from "../../../src/logo.png";
import './home.css';
import { Link } from "react-router-dom";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Home:React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <header className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>
            Welcome to React Starter Kit
          </h2>
          <p>
            The React Starter Library serves as the foundational toolkit for developers to
            establish <br /> the initial codebase or utilize a pre-made setup containing essential components in React JS.
          </p>
        </header>
      </div>
      <Footer />
    </>
  );
}
export default Home;
