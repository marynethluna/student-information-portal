import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content about-page">
        <header className="page-header">
          <h1>About</h1>
          <p>Learn more about the Student Information Portal.</p>
        </header>

        <section className="about-overview">
          <h2>Portal Overview</h2>
          <p>
            This portal was created using React, React Router, and reusable components (Navbar, StudentCard, CourseCard).
          </p>
        </section>
      </main>
    </div>
  );
}

export default About;
