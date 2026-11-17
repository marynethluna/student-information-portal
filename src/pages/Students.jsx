import React from 'react';
import Navbar from '../components/Navbar';
import StudentCard from '../components/StudentCard';

function Students() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content students-page">
        <header className="page-header">
          <h1>Students</h1>
          <p>Student directory using reusable StudentCard components.</p>
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
    </div>
  );
}

export default Students;
