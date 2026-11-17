import React, { useEffect } from 'react';

function StudentModal({ student, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!student) return null;

  const totalDegreeCredits = 120;
  const progressPercent = Math.min(100, Math.round((student.creditsCompleted / totalDegreeCredits) * 100));

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-student-name">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal window">
          &times;
        </button>

        <div className="modal-header">
          <img 
            src={student.avatar} 
            alt={student.name} 
            className="modal-avatar"
          />
          <div className="modal-header-meta">
            <span className="badge-pill badge-primary">{student.status} Student</span>
            <h2 id="modal-student-name">{student.name}</h2>
            <p className="modal-subtitle">{student.major} &bull; {student.year}</p>
            <p className="modal-id">Student ID: <strong>{student.id}</strong></p>
          </div>
        </div>

        <div className="modal-body">
          <section className="modal-section">
            <h3>Academic Summary</h3>
            <div className="modal-stats-grid">
              <div className="modal-stat-box">
                <span className="stat-label">Cumulative GPA</span>
                <span className="stat-value highlight-text">{student.gpa.toFixed(2)} / 4.00</span>
              </div>
              <div className="modal-stat-box">
                <span className="stat-label">Credits Earned</span>
                <span className="stat-value">{student.creditsCompleted} Units</span>
              </div>
              <div className="modal-stat-box">
                <span className="stat-label">Degree Progress</span>
                <span className="stat-value">{progressPercent}%</span>
              </div>
            </div>

            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <span className="progress-note">{student.creditsCompleted} of {totalDegreeCredits} degree credits completed</span>
            </div>
          </section>

          <section className="modal-section">
            <h3>About the Student</h3>
            <p className="modal-bio">{student.bio}</p>
          </section>

          <section className="modal-section">
            <h3>Academic Advising &amp; Contact</h3>
            <div className="modal-contact-details">
              <p><strong>Faculty Advisor:</strong> {student.advisor}</p>
              <p><strong>Official Email:</strong> <a href={`mailto:${student.email}`}>{student.email}</a></p>
              <p><strong>Campus Status:</strong> Enrolled in Good Academic Standing</p>
            </div>
          </section>

          <section className="modal-section">
            <h3>Currently Enrolled Courses</h3>
            <div className="modal-courses-list">
              {student.enrolledCourses.map((code) => (
                <div key={code} className="modal-course-item">
                  <span className="modal-course-badge">{code}</span>
                  <span className="modal-course-desc">Registered for Current Academic Term</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close Profile</button>
          <a href={`mailto:${student.email}`} className="btn btn-primary">Send Email</a>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
