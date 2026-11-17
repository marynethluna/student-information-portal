import React from 'react';

function About() {
  return (
    <main className="page-content about-page">
      <header className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Learn more about the Student Information Portal.</p>
      </header>

      <section className="about-card">
        <h3>Portal Overview</h3>
        <p>
          This Student Information Portal was developed using React, React Router for seamless navigation,
          and reusable JSX components including Navbar, StudentCard, and CourseCard.
        </p>
      </section>

      <section className="about-card" style={{ marginTop: '1.5rem' }}>
        <h3>Features</h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li>Reusable <code>Navbar</code> component for page navigation (Home, Students, Courses, About).</li>
          <li>Reusable <code>StudentCard</code> components displayed multiple times on the Students page.</li>
          <li>Reusable <code>CourseCard</code> components displayed multiple times on the Courses page.</li>
          <li>Configured React Router for client-side routing.</li>
          <li>Organized CSS styling for layout, navigation, and cards.</li>
        </ul>
      </section>
    </main>
  );
}

export default About;
