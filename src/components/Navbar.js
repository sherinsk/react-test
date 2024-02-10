import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">BookMyShow</div>
      <ul className="nav-links">
        <li><a href="#">Movies</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Plays</a></li>
        <li><a href="#">Sports</a></li>
        <li className="dropdown">
          <a href="#">More <span className="caret">&#9660;</span></a>
          <div className="dropdown-content">
            <a href="#">Activities</a>
            <a href="#">Fanhood</a>
            <a href="#">Buzz</a>
          </div>
        </li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search for movies, events, plays, and sports" />
        <button>Search</button>
      </div>
      <div className="user-auth">
        <a href="#">Sign In</a>
        <a href="#">Register</a>
      </div>
    </nav>
  </div>
  )
};

export default Navbar;
