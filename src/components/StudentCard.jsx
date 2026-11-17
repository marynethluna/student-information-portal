import React from 'react';

function StudentCard({ student, onSelect }) {
  if (!student) return null;

  // Determine GPA accent badge class
  const getGpaClass = (gpa) => {
    if (gpa >= 3.9) return 'gpa-badge-high';
    if (gpa >= 3.7) return 'gpa-badge-mid';
    return 'gpa-badge-good';
  };

  return (
    <article className="student-card" id={`student-${student.id}`}>
      <div className="student-card-header">
        <div className="student-avatar-wrapper">
          <img 
            src={student.avatar} 
            alt={`Profile photo of ${student.name}`} 
            className="student-avatar"
            loading="lazy"
          />
          <span className="status-dot-active" title="Active Student Status"></span>
        </div>
        <div className="student-header-info">
          <div className="student-meta-top">
            <span className="student-id-badge">{student.id}</span>
            <span className="student-year-badge">{student.year}</span>
          </div>
          <h3 className="student-name">{student.name}</h3>
          <p className="student-major">{student.major}</p>
        </div>
      </div>

      <div className="student-card-body">
        <div className="student-metric-row">
          <div className="metric-box">
            <span className="metric-label">GPA</span>
            <span className={`metric-value gpa-badge ${getGpaClass(student.gpa)}`}>
              {student.gpa.toFixed(2)}
            </span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Credits</span>
            <span className="metric-value">{student.creditsCompleted} pts</span>
          </div>
          <div className="metric-box">
            <span className="metric-label">Courses</span>
            <span className="metric-value">{student.enrolledCourses.length}</span>
          </div>
        </div>

        <div className="student-info-detail">
          <span className="detail-icon" aria-hidden="true">✉</span>
          <a href={`mailto:${student.email}`} className="student-email" title={`Send email to ${student.name}`}>
            {student.email}
          </a>
        </div>

        <div className="student-courses-section">
          <span className="courses-label">Enrolled:</span>
          <div className="course-chips">
            {student.enrolledCourses.map((code) => (
              <span key={code} className="course-chip">
                {code}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="student-card-footer">
        <button 
          type="button" 
          className="btn-card-action"
          onClick={() => onSelect && onSelect(student)}
          aria-label={`View full academic profile for ${student.name}`}
        >
          <span>View Profile</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  );
}

export default StudentCard;
