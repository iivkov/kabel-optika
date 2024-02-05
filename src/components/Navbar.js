import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HamburgerLogo } from '../assets/icons/hamburger_logo.svg';
import CompanyLogo from '../assets/Kabel-optika_logo.svg';
import '../App.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="logo">
        <a href="/" rel="noopener noreferrer">
          <div><img decoding="async" src={CompanyLogo} alt="Logotip" /></div>
        </a>
      </div>
    <div className="menu-icon" onClick={handleShowNavbar}>
        <HamburgerLogo />
    </div>
    <div className={`nav-elements right ${showNavbar && 'active'}`}>
      <ul>
        <li>
          <NavLink to="/">Početna</NavLink>
        </li>
        <li>
          <NavLink to="/o-nama">O nama</NavLink>
        </li>
        <li>
          <NavLink to="/podatci">Osnovni podatci</NavLink>
        </li>
        <li>
          <NavLink to="/EU-projekti">EU projekti</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar