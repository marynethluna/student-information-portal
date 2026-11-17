import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <main className="page-content home-page">
      <header className="page-header">
        <h1>Student Information Portal</h1>
        <p>Welcome to the Student Information Portal.</p>
        <nav>
          <ul>
            <li><Link to="/students">View Students</Link></li>
            <li><Link to="/courses">View Courses</Link></li>
            <li><Link to="/about">About Portal</Link></li>
          </ul>
        </nav>
      </header>

      <section className="featured-section">
        <h2>Students</h2>
        <div className="cards-grid">
          <StudentCard />
          <StudentCard />
        </div>
      </section>

      <section className="featured-section">
        <h2>Courses</h2>
        <div className="cards-grid">
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </main>
  );
}

export default Home;
