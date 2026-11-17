import React from 'react';

function CourseCard({ course, onSelect }) {
  if (!course) return null;

  return (
    <article className="course-card" id={`course-${course.id}`}>
      <div className="course-card-header">
        <span className="course-code-badge">{course.code}</span>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-department"><strong>Department:</strong> {course.department}</p>
      </div>

      <div className="course-card-body">
        <p className="course-credits"><strong>Credits:</strong> {course.credits} Units</p>
        <p className="course-instructor"><strong>Instructor:</strong> {course.instructor}</p>
        <p className="course-schedule"><strong>Schedule:</strong> {course.schedule}</p>
        <p className="course-room"><strong>Location:</strong> {course.room}</p>
        <p className="course-enrollment">
          <strong>Enrollment:</strong> {course.enrolled} / {course.capacity} students
        </p>
        <p className="course-description">{course.description}</p>
      </div>

      <div className="course-card-footer">
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={() => onSelect && onSelect(course)}
        >
          View Course Details
        </button>
      </div>
    </article>
  );
}

export default CourseCard;
