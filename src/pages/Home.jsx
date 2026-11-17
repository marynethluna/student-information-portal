import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content home-page">
        <header className="page-header">
          <h1>Student Information Portal</h1>
          <p>Welcome to the Student Information Portal.</p>
        </header>

        <section className="featured-section">
          <h2>Students</h2>
          <div className="cards-grid">
            <StudentCard />
            <StudentCard />
          </div>
          <p><Link to="/students">View All Students</Link></p>
        </section>

        <section className="featured-section">
          <h2>Courses</h2>
          <div className="cards-grid">
            <CourseCard />
            <CourseCard />
          </div>
          <p><Link to="/courses">View All Courses</Link></p>
        </section>
      </main>
    </div>
  );
}

export default Home;
