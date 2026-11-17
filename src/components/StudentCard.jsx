import React from 'react';

function StudentCard({ student, onSelect }) {
  if (!student) return null;

  return (
    <article className="student-card" id={`student-${student.id}`}>
      <div className="student-card-header">
        <img 
          src={student.avatar} 
          alt={`Profile portrait of ${student.name}`} 
          className="student-avatar"
          width="80"
          height="80"
        />
        <div className="student-header-info">
          <h3 className="student-name">{student.name}</h3>
          <p className="student-id"><strong>ID:</strong> {student.id}</p>
          <span className="student-status-badge">{student.status}</span>
        </div>
      </div>

      <div className="student-card-body">
        <p className="student-major"><strong>Major:</strong> {student.major}</p>
        <p className="student-year"><strong>Year Level:</strong> {student.year}</p>
        <p className="student-gpa"><strong>GPA:</strong> {student.gpa.toFixed(2)}</p>
        <p className="student-email"><strong>Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
        <p className="student-advisor"><strong>Academic Advisor:</strong> {student.advisor}</p>
        
        <div className="student-courses">
          <strong>Enrolled Courses:</strong>
          <ul>
            {student.enrolledCourses.map((code) => (
              <li key={code}>{code}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="student-card-footer">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => onSelect && onSelect(student)}
        >
          View Full Profile
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
