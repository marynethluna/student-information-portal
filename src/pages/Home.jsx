import React from 'react';
import { Link } from 'react-router-dom';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';

function Home() {
  return (
    <main className="page-content home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">Student Information Portal</span>
          <h1 className="hero-title">Welcome to the Portal</h1>
          <p className="hero-description">
            A web application created using React Routing and reusable JSX components.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn btn-primary btn-lg">View Students</Link>
            <Link to="/courses" className="btn btn-secondary btn-lg">View Courses</Link>
            <Link to="/about" className="btn btn-ghost btn-lg">About</Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header-bar">
          <div>
            <h2 className="section-title">Students</h2>
            <p className="section-subtitle">Reusable StudentCard components</p>
          </div>
          <Link to="/students" className="link-arrow">View All Students &rarr;</Link>
        </div>
        <div className="cards-grid">
          <StudentCard />
          <StudentCard />
          <StudentCard />
        </div>
      </section>

      <section className="featured-section">
        <div className="section-header-bar">
          <div>
            <h2 className="section-title">Courses</h2>
            <p className="section-subtitle">Reusable CourseCard components</p>
          </div>
          <Link to="/courses" className="link-arrow">View All Courses &rarr;</Link>
        </div>
        <div className="cards-grid">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </main>
  );
}

export default Home;
