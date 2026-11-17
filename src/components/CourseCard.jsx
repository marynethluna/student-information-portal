import React from 'react';

function CourseCard({ course, onSelect }) {
  if (!course) return null;

  const percentFull = Math.round((course.enrolled / course.capacity) * 100);
  const isNearlyFull = percentFull >= 90;

  return (
    <article className="course-card" id={`course-${course.id}`}>
      <div className="course-card-header">
        <div className="course-tags">
          <span className="course-code-badge">{course.code}</span>
          <span className="course-dept-tag">{course.department}</span>
        </div>
        <span className="course-credits-badge">{course.credits} Credits</span>
      </div>

      <div className="course-card-main">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
      </div>

      <div className="course-meta-details">
        <div className="meta-item">
          <span className="meta-icon" aria-hidden="true">👤</span>
          <div>
            <span className="meta-label">Instructor</span>
            <span className="meta-value">{course.instructor}</span>
          </div>
        </div>

        <div className="meta-item">
          <span className="meta-icon" aria-hidden="true">🕒</span>
          <div>
            <span className="meta-label">Schedule</span>
            <span className="meta-value">{course.schedule}</span>
          </div>
        </div>

        <div className="meta-item">
          <span className="meta-icon" aria-hidden="true">📍</span>
          <div>
            <span className="meta-label">Room</span>
            <span className="meta-value">{course.room}</span>
          </div>
        </div>
      </div>

      <div className="course-capacity-section">
        <div className="capacity-labels">
          <span className="capacity-title">Enrollment Status</span>
          <span className={`capacity-count ${isNearlyFull ? 'capacity-warning' : ''}`}>
            {course.enrolled} / {course.capacity} seats ({percentFull}%)
          </span>
        </div>
        <div className="progress-bar-bg" role="progressbar" aria-valuenow={percentFull} aria-valuemin="0" aria-valuemax="100">
          <div 
            className={`progress-bar-fill ${isNearlyFull ? 'fill-warning' : 'fill-primary'}`} 
            style={{ width: `${percentFull}%` }}
          ></div>
        </div>
      </div>

      <div className="course-card-footer">
        <button 
          type="button" 
          className="btn-course-action"
          onClick={() => onSelect && onSelect(course)}
          aria-label={`View full details for course ${course.title}`}
        >
          <span>Course Details &amp; Syllabus</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
