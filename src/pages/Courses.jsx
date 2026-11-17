import React, { useState } from 'react';
import { coursesData } from '../data/coursesData';
import CourseCard from '../components/CourseCard';

function Courses() {
  const [courses] = useState(coursesData);

  return (
    <main className="page-content courses-page">
      <header className="page-header">
        <h1>Course Catalog</h1>
        <p>Explore current academic course offerings, instructors, credits, schedules, and capacity limits.</p>
      </header>

      <section className="directory-summary">
        <p>Showing <strong>{courses.length}</strong> available courses</p>
      </section>

      <section className="cards-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
}

export default Courses;
