import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Student Information Portal</h2>
        </div>
        <nav className="navbar-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/students" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Students
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/courses" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
