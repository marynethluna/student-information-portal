import React, { useState, useEffect } from 'react';

function CourseModal({ course, onClose }) {
  const [enrolledStatus, setEnrolledStatus] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!course) return null;

  const handleEnrollClick = () => {
    setEnrolledStatus('success');
    setTimeout(() => {
      setEnrolledStatus(null);
    }, 4000);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-course-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal window">
          &times;
        </button>

        <div className="modal-header">
          <div className="modal-course-badge-large">{course.code}</div>
          <div className="modal-header-meta">
            <span className="badge-pill badge-primary">{course.department}</span>
            <h2 id="modal-course-title">{course.title}</h2>
            <p className="modal-subtitle">{course.credits} Credits &bull; Undergraduate Program</p>
          </div>
        </div>

        <div className="modal-body">
          {enrolledStatus === 'success' && (
            <div className="alert-success-box" role="alert">
              <span className="alert-icon">✓</span>
              <div>
                <strong>Registration Request Submitted!</strong>
                <p>Your enrollment request for {course.code} has been logged in the portal queue.</p>
              </div>
            </div>
          )}

          <section className="modal-section">
            <h3>Course Description &amp; Scope</h3>
            <p className="modal-bio">{course.description}</p>
          </section>

          <section className="modal-section">
            <h3>Course Schedule &amp; Meeting Information</h3>
            <div className="modal-stats-grid">
              <div className="modal-stat-box">
                <span className="stat-label">Lecture Days &amp; Time</span>
                <span className="stat-value">{course.schedule}</span>
              </div>
              <div className="modal-stat-box">
                <span className="stat-label">Assigned Classroom</span>
                <span className="stat-value">{course.room}</span>
              </div>
              <div className="modal-stat-box">
                <span className="stat-label">Capacity / Enrolled</span>
                <span className="stat-value">{course.enrolled} / {course.capacity}</span>
              </div>
            </div>
          </section>

          <section className="modal-section">
            <h3>Instructor &amp; Academic Staff</h3>
            <div className="modal-contact-details">
              <p><strong>Primary Professor:</strong> {course.instructor}</p>
              <p><strong>Office Hours:</strong> Tuesdays &amp; Thursdays, 3:30 PM - 5:00 PM</p>
              <p><strong>Department:</strong> Department of {course.department}</p>
            </div>
          </section>

          <section className="modal-section">
            <h3>Syllabus Key Topics</h3>
            <ul className="syllabus-topics-list">
              <li>Core theoretical foundations and foundational problem solving</li>
              <li>Hands-on laboratory programming and practical implementation projects</li>
              <li>Midterm examination and comprehensive team capstone presentation</li>
            </ul>
          </section>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>Close Details</button>
          <button 
            className="btn btn-primary" 
            onClick={handleEnrollClick}
            disabled={enrolledStatus === 'success'}
          >
            {enrolledStatus === 'success' ? 'Enrolled ✓' : 'Register for Course'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseModal;
