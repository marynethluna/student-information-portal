import React from 'react';
import StudentCard from '../components/StudentCard';

function Students() {
  return (
    <main className="page-content students-page">
      <header className="page-header">
        <h1>Students</h1>
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
