import React from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';

function Courses() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main-container">
        <main className="page-content courses-page">
          <header className="page-header">
            <h1 className="page-title">Courses</h1>
            <p className="page-subtitle">Course catalog using reusable CourseCard components.</p>
          </header>

          <section className="cards-grid">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Courses;
