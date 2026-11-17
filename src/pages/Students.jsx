import React from 'react';
import Navbar from '../components/Navbar';
import StudentCard from '../components/StudentCard';

function Students() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="main-container">
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
      </div>
    </div>
  );
}

export default Students;
