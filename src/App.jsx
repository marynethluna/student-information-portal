import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="*" 
            element={
              <main className="page-content empty-state-box" style={{ margin: '4rem auto' }}>
                <div className="empty-icon">404</div>
                <h2>Page Not Found</h2>
                <p>The page you are looking for does not exist or has been moved.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Return to Home
                </Link>
              </main>
            } 
          />
        </Routes>

        <footer className="portal-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-title">Student Information Portal (SIP)</span>
              <span className="footer-sub">Centralized Academic Records &amp; Course Management</span>
            </div>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

            <div className="footer-meta">
              <p>&copy; {new Date().getFullYear()} University Academic Portal.</p>
              <p>Built with React &amp; React Router</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
