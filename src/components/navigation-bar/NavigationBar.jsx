import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHouseUser,
  FaUserTie,
  FaRegIdCard,
  FaSuitcase,
  FaEnvelope,
} from 'react-icons/fa';
import './NavigationBar.css';
import MyProfile from '../../assets/images/my-profile.png';

const NavbarDesktop = () => (
  <nav>
    <div className="profile-section">
      <img src={MyProfile} alt="Profile" className="my-profile-photo" />
      <h3 className="profile-name">Adorn Choga</h3>
    </div>
    <ul className="nav-links-container">
      <li>
        <NavLink to="/">
          <FaHouseUser className="icon" />
          <p className="nav-title">Home</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-me">
          <FaUserTie className="icon" />
          <p className="nav-title">About Me</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/resume">
          <FaRegIdCard className="icon" />
          <p className="nav-title">Resume</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">
          <FaSuitcase className="icon" />
          <p className="nav-title">Porfolio</p>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-me">
          <FaEnvelope className="icon" />
          <p className="nav-title">Contact</p>
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavbarDesktop;
