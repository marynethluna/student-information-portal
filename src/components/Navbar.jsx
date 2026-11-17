import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

// Default navigation links for the portal
const DEFAULT_NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/students', label: 'Students' },
  { path: '/courses', label: 'Courses' },
  { path: '/about', label: 'About' },
];

/**
 * Reusable Navbar Component
 * 
 * Props:
 * - brand (string): Brand or portal title (defaults to "Student Information Portal")
 * - links (array): Array of link objects with `path` and `label` (defaults to Home, Students, Courses, About)
 */
function Navbar({ 
  brand = 'Student Information Portal', 
  links = DEFAULT_NAV_LINKS 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Link */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <span className="brand-title">{brand}</span>
        </Link>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {/* Dynamic Navigation Links */}
        <nav className={`navbar-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`} aria-label="Main Navigation">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMobileMenu}
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
