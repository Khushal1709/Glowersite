
import React from 'react';
import '../components/Header.css'; // We'll style it separately
import logo from '../assets/images/logo.png'; // Adjust the path if you place the logo elsewhere
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


import { Link } from "react-router";
// import Profile from '../pages/Profile';

const Header = () => {
  return (
    <header className="navbar">
    <div className="logo">
      <a href="/">
        <img src={logo} alt="Logo" className="logo-image" />
      </a>
    </div>
    <nav className="nav-links">
      <a href="/">HOME</a>
      <a href="#">PRODUCTS</a>
      <a href="#">CONTACT</a>
    </nav>
    <div className="nav-actions">
      <a href="../pages/Profile.jsx" className="login"></a>
      <Link to="/Profile"><FaUserCircle /></Link>
      

      <Link to="/Cart"><a className="cart"><FaShoppingCart /></a></Link>
    </div>
  </header>
  );
};

export default Header;



