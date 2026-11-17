import React from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';

function Courses() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content courses-page">
        <header className="page-header">
          <h1>Courses</h1>
          <p>Course catalog using reusable CourseCard components.</p>
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
  );
}

export default Courses;
