import React, { useState } from 'react';
import { studentsData } from '../data/studentsData';
import StudentCard from '../components/StudentCard';

function Students() {
  const [students] = useState(studentsData);

  return (
    <main className="page-content students-page">
      <header className="page-header">
        <h1>Student Directory</h1>
        <p>Browse through registered students, review their academic majors, GPA, and enrolled courses.</p>
      </header>

      <section className="directory-summary">
        <p>Showing <strong>{students.length}</strong> registered students</p>
      </section>

      <section className="cards-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </section>
    </main>
  );
}

export default Students;
