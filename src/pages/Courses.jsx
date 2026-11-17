import React, { useState, useMemo } from 'react';
import { coursesData } from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import CourseModal from '../components/CourseModal';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [creditsFilter, setCreditsFilter] = useState('All');
  const [sortBy, setSortBy] = useState('code-asc');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Extract unique departments
  const uniqueDepartments = useMemo(() => {
    return ['All', ...new Set(coursesData.map((c) => c.department))];
  }, []);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    return coursesData
      .filter((course) => {
        const matchesSearch =
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDept = selectedDept === 'All' || course.department === selectedDept;
        const matchesCredits = creditsFilter === 'All' || course.credits === Number(creditsFilter);

        return matchesSearch && matchesDept && matchesCredits;
      })
      .sort((a, b) => {
        if (sortBy === 'code-asc') {
          return a.code.localeCompare(b.code);
        } else if (sortBy === 'title-asc') {
          return a.title.localeCompare(b.title);
        } else if (sortBy === 'credits-desc') {
          return b.credits - a.credits;
        } else if (sortBy === 'availability') {
          const availA = a.capacity - a.enrolled;
          const availB = b.capacity - b.enrolled;
          return availB - availA;
        }
        return 0;
      });
  }, [searchTerm, selectedDept, creditsFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDept('All');
    setCreditsFilter('All');
    setSortBy('code-asc');
  };

  const isFilteringActive = searchTerm !== '' || selectedDept !== 'All' || creditsFilter !== 'All' || sortBy !== 'code-asc';

  return (
    <main className="page-content courses-page">
      <header className="page-header">
        <div className="header-breadcrumbs">
          <span>Portal</span> &rsaquo; <span>Curriculum</span> &rsaquo; <span className="current">Courses</span>
        </div>
        <h1 className="page-title">University Course Catalog</h1>
        <p className="page-subtitle">
          Explore accredited courses, prerequisites, classroom schedules, and faculty assignments across computing and mathematical sciences.
        </p>
      </header>

      {/* Control Panel: Search & Filters */}
      <section className="controls-panel" aria-label="Course Catalog Filters">
        <div className="controls-row">
          {/* Search Bar */}
          <div className="search-input-group">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search by course code (e.g. CS 101), title, or professor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control search-field"
              aria-label="Search courses"
            />
            {searchTerm && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchTerm('')}
                aria-label="Clear search input"
              >
                &times;
              </button>
            )}
          </div>

          {/* Filters & Sorters */}
          <div className="filters-group">
            <div className="select-wrapper">
              <label htmlFor="dept-select" className="select-label">Department</label>
              <select
                id="dept-select"
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="form-select"
              >
                {uniqueDepartments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === 'All' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-wrapper">
              <label htmlFor="credits-select" className="select-label">Credits</label>
              <select
                id="credits-select"
                value={creditsFilter}
                onChange={(e) => setCreditsFilter(e.target.value)}
                className="form-select"
              >
                <option value="All">All Credits</option>
                <option value="3">3 Credits</option>
                <option value="4">4 Credits</option>
              </select>
            </div>

            <div className="select-wrapper">
              <label htmlFor="sort-courses-select" className="select-label">Sort By</label>
              <select
                id="sort-courses-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
              >
                <option value="code-asc">Course Code (A &rarr; Z)</option>
                <option value="title-asc">Course Title (A &rarr; Z)</option>
                <option value="credits-desc">Credits (Highest first)</option>
                <option value="availability">Seats Available</option>
              </select>
            </div>

            {isFilteringActive && (
              <button 
                type="button" 
                onClick={handleResetFilters} 
                className="btn btn-ghost btn-sm btn-reset"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Quick Department Tags Bar */}
        <div className="quick-dept-tags">
          <span className="tags-label">Quick filter:</span>
          {uniqueDepartments.map((dept) => (
            <button
              key={dept}
              type="button"
              className={`tag-filter-btn ${selectedDept === dept ? 'active' : ''}`}
              onClick={() => setSelectedDept(dept)}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Results Counter */}
        <div className="results-counter-bar">
          <p className="counter-text">
            Showing <strong>{filteredCourses.length}</strong> of <strong>{coursesData.length}</strong> courses
          </p>
          {isFilteringActive && (
            <span className="filter-badge">Filtered Results</span>
          )}
        </div>
      </section>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <section className="cards-grid">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onSelect={setSelectedCourse} 
            />
          ))}
        </section>
      ) : (
        <div className="empty-state-box">
          <div className="empty-icon">📚</div>
          <h3>No courses found</h3>
          <p>We couldn't find any courses matching your current search parameters.</p>
          <button onClick={handleResetFilters} className="btn btn-primary">
            Clear All Filters
          </button>
        </div>
      )}

      {/* Course Details Modal */}
      {selectedCourse && (
        <CourseModal 
          course={selectedCourse} 
          onClose={() => setSelectedCourse(null)} 
        />
      )}
    </main>
  );
}

export default Courses;
