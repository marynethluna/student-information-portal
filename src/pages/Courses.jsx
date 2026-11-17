import React from 'react';
import CourseCard from '../components/CourseCard';

function Courses() {
  return (
    <main className="page-content courses-page">
      <header className="page-header">
        <h1>Courses</h1>
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
  );
}

export default Courses;
