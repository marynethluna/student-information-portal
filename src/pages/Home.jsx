import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { studentsData } from '../data/studentsData';
import { coursesData } from '../data/coursesData';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';
import StudentModal from '../components/StudentModal';
import CourseModal from '../components/CourseModal';

function Home() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Compute portal metrics dynamically
  const metrics = useMemo(() => {
    const avgGpa = (
      studentsData.reduce((acc, curr) => acc + curr.gpa, 0) / studentsData.length
    ).toFixed(2);

    const departmentsCount = new Set(coursesData.map((c) => c.department)).size;

    return {
      totalStudents: studentsData.length,
      totalCourses: coursesData.length,
      avgGpa,
      departmentsCount
    };
  }, []);

  const featuredStudents = studentsData.slice(0, 3);
  const featuredCourses = coursesData.slice(0, 3);

  return (
    <main className="page-content home-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="hero-badge">University Academic Portal 2026-2027</span>
          <h1 className="hero-title">
            Empowering Academic Excellence &amp; Student Success
          </h1>
          <p className="hero-description">
            Welcome to the centralized Student Information Portal. Efficiently monitor student records,
            track academic milestones, explore accredited degree courses, and connect with faculty advisors.
          </p>
          <div className="hero-actions">
            <Link to="/students" className="btn btn-primary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
              <span>Explore Students</span>
            </Link>
            <Link to="/courses" className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
              </svg>
              <span>Browse Catalog</span>
            </Link>
            <Link to="/about" className="btn btn-ghost btn-lg">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Key Performance Indicators / Statistics */}
      <section className="metrics-section" aria-label="Portal Statistics">
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon-wrap icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-number">{metrics.totalStudents}</span>
              <span className="metric-name">Active Students</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
                <path d="M6 6h10"/>
                <path d="M6 10h10"/>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-number">{metrics.totalCourses}</span>
              <span className="metric-name">Courses Offered</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-number">{metrics.avgGpa}</span>
              <span className="metric-name">Average Portal GPA</span>
            </div>
          </div>

          <div className="metric-card">
            <div className="metric-icon-wrap icon-amber">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18"/>
                <path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"/>
                <line x1="19" y1="21" x2="19" y2="10"/>
                <line x1="5" y1="21" x2="5" y2="10"/>
              </svg>
            </div>
            <div className="metric-details">
              <span className="metric-number">{metrics.departmentsCount}</span>
              <span className="metric-name">Academic Departments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements & Academic Alerts */}
      <section className="announcements-section">
        <div className="section-header-compact">
          <h2>Campus News &amp; Announcements</h2>
          <span className="status-live">Updated Today</span>
        </div>
        <div className="announcements-grid">
          <div className="announcement-item">
            <span className="announcement-date">Nov 17, 2026</span>
            <h4>Spring Term Course Pre-Registration Open</h4>
            <p>Students can now review preliminary course schedules and consult their faculty advisors.</p>
          </div>
          <div className="announcement-item">
            <span className="announcement-date">Nov 12, 2026</span>
            <h4>Dean's Honors List Recognition Announced</h4>
            <p>Congratulations to all enrolled scholars maintaining a cumulative GPA of 3.75 and higher.</p>
          </div>
          <div className="announcement-item">
            <span className="announcement-date">Nov 05, 2026</span>
            <h4>Academic Advising Week &amp; Degree Audits</h4>
            <p>Schedule your one-on-one degree progress consultation with your assigned departmental mentor.</p>
          </div>
        </div>
      </section>

      {/* Featured Students Section */}
      <section className="featured-section">
        <div className="section-header-bar">
          <div>
            <h2 className="section-title">Spotlight Students</h2>
            <p className="section-subtitle">Exemplary students demonstrating outstanding academic leadership and achievement</p>
          </div>
          <Link to="/students" className="link-arrow">
            View all students &rarr;
          </Link>
        </div>

        <div className="cards-grid">
          {featuredStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onSelect={setSelectedStudent}
            />
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="featured-section">
        <div className="section-header-bar">
          <div>
            <h2 className="section-title">Popular Courses</h2>
            <p className="section-subtitle">Core curricular offerings in computing, mathematics, and data sciences</p>
          </div>
          <Link to="/courses" className="link-arrow">
            View full catalog &rarr;
          </Link>
        </div>

        <div className="cards-grid">
          {featuredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onSelect={setSelectedCourse}
            />
          ))}
        </div>
      </section>

      {/* Active Modals */}
      {selectedStudent && (
        <StudentModal 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}

      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </main>
  );
}

export default Home;
