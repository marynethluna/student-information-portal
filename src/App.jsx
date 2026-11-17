import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Students from './pages/Students';
import Courses from './pages/Courses';
import About from './pages/About';

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
              <main className="page-content not-found-page">
                <h1>404 - Page Not Found</h1>
                <p>The requested page could not be located.</p>
                <Link to="/" className="btn btn-primary">Return to Home</Link>
              </main>
            } 
          />
        </Routes>

        <footer className="portal-footer">
          <p>&copy; {new Date().getFullYear()} University Student Information Portal. All rights reserved.</p>
          <p>Built with React &amp; React Router.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
