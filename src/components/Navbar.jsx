import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const DEFAULT_NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/students', label: 'Students' },
  { path: '/courses', label: 'Courses' },
  { path: '/about', label: 'About' },
];

function Navbar({ 
  brand = 'Student Information Portal', 
  links = DEFAULT_NAV_LINKS 
}) {
  return (
    <header className="navbar-header">
      <div className="navbar-brand">
        <h2><Link to="/">{brand}</Link></h2>
      </div>
      <nav className="navbar-nav" aria-label="Main Navigation">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                end={link.path === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
