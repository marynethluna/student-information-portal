import React from 'react';
import StudentCard from '../components/StudentCard';

function Students() {
  return (
    <main className="page-content students-page">
      <header className="page-header">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">Student directory using reusable StudentCard components.</p>
      </header>

      <section className="cards-grid">
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
        <StudentCard />
      </section>
    </main>
  );
}

export default Students;
