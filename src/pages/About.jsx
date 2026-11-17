import React from 'react';

function About() {
  return (
    <main className="page-content about-page">
      <header className="page-header">
        <h1>About the Student Information Portal</h1>
        <p>A centralized academic portal built with React, modular components, and React Router.</p>
      </header>

      <section className="about-overview">
        <h2>Mission & Purpose</h2>
        <p>
          The Student Information Portal (SIP) is designed to streamline academic information access
          for students, faculty, and administrative staff. It provides clear visibility into student profiles,
          academic standing, and comprehensive course details.
        </p>
      </section>

      <section className="about-features">
        <h2>Key Portal Features</h2>
        <ul>
          <li><strong>Modular JSX Architecture:</strong> Reusable components for student cards, course cards, and navigation.</li>
          <li><strong>Client-Side Routing:</strong> Seamless navigation powered by React Router.</li>
          <li><strong>Real-time Information:</strong> Up-to-date course enrollment metrics and academic details.</li>
          <li><strong>Semantic HTML:</strong> Accessible structure adhering to modern web development standards.</li>
        </ul>
      </section>

      <section className="about-contact">
        <h2>Department & Contact Information</h2>
        <address>
          <p><strong>Office of the University Registrar</strong></p>
          <p>Academic Hall, Suite 100</p>
          <p>Email: <a href="mailto:registrar@university.edu">registrar@university.edu</a></p>
          <p>Help Desk: +1 (555) 019-2834</p>
          <p>Operating Hours: Monday – Friday, 8:00 AM – 5:00 PM</p>
        </address>
      </section>
    </main>
  );
}

export default About;
