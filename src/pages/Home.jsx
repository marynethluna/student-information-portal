import React from 'react';
import { Link } from 'react-router-dom';
import { studentsData } from '../data/studentsData';
import { coursesData } from '../data/coursesData';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';

function Home() {
  const featuredStudents = studentsData.slice(0, 2);
  const featuredCourses = coursesData.slice(0, 2);

  return (
    <main className="page-content home-page">
      <section className="hero-section">
        <h1>Welcome to the Student Information Portal</h1>
        <p>
          A centralized academic management and directory hub designed for students,
          faculty, and academic advisors. Browse registered students, explore offered courses,
          and stay updated with university academic programs.
        </p>
        <div className="hero-actions">
          <Link to="/students" className="btn btn-primary">Browse Students</Link>
          <Link to="/courses" className="btn btn-secondary">Explore Courses</Link>
          <Link to="/about" className="btn btn-outline">About Portal</Link>
        </div>
      </section>

      <section className="portal-overview-section">
        <h2>Portal Quick Overview</h2>
        <div className="overview-stats">
          <div className="stat-card">
            <h3>Total Registered Students</h3>
            <p className="stat-number">{studentsData.length}</p>
          </div>
          <div className="stat-card">
            <h3>Active Course Offerings</h3>
            <p className="stat-number">{coursesData.length}</p>
          </div>
          <div className="stat-card">
            <h3>Academic Departments</h3>
            <p className="stat-number">6</p>
          </div>
          <div className="stat-card">
            <h3>System Status</h3>
            <p className="stat-number">Online</p>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Students</h2>
        <div className="cards-grid">
          {featuredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
        <p><Link to="/students">View all {studentsData.length} students &rarr;</Link></p>
      </section>

      <section className="featured-section">
        <h2>Featured Courses</h2>
        <div className="cards-grid">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <p><Link to="/courses">View all {coursesData.length} courses &rarr;</Link></p>
      </section>
    </main>
  );
}

export default Home;
