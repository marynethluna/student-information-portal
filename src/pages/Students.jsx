import React, { useState, useMemo } from 'react';
import { studentsData } from '../data/studentsData';
import StudentCard from '../components/StudentCard';
import StudentModal from '../components/StudentModal';

function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [majorFilter, setMajorFilter] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Extract unique majors dynamically
  const uniqueMajors = useMemo(() => {
    return ['All', ...new Set(studentsData.map((s) => s.major))];
  }, []);

  // Filter and sort students
  const filteredStudents = useMemo(() => {
    return studentsData
      .filter((student) => {
        const matchesSearch =
          student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.major.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesYear = yearFilter === 'All' || student.year === yearFilter;
        const matchesMajor = majorFilter === 'All' || student.major === majorFilter;

        return matchesSearch && matchesYear && matchesMajor;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        } else if (sortBy === 'gpa-desc') {
          return b.gpa - a.gpa;
        } else if (sortBy === 'gpa-asc') {
          return a.gpa - b.gpa;
        } else if (sortBy === 'year') {
          return a.year.localeCompare(b.year);
        }
        return 0;
      });
  }, [searchTerm, yearFilter, majorFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchTerm('');
    setYearFilter('All');
    setMajorFilter('All');
    setSortBy('name-asc');
  };

  const isFilteringActive = searchTerm !== '' || yearFilter !== 'All' || majorFilter !== 'All' || sortBy !== 'name-asc';

  return (
    <main className="page-content students-page">
      <header className="page-header">
        <div className="header-breadcrumbs">
          <span>Portal</span> &rsaquo; <span>Directory</span> &rsaquo; <span className="current">Students</span>
        </div>
        <h1 className="page-title">Enrolled Student Directory</h1>
        <p className="page-subtitle">
          Comprehensive registry of active university scholars. Search by name or ID, filter by major or academic standing, and view detailed transcripts.
        </p>
      </header>

      {/* Control Panel: Search, Filter, Sort */}
      <section className="controls-panel" aria-label="Student Directory Filters">
        <div className="controls-row">
          {/* Search Bar */}
          <div className="search-input-group">
            <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              type="text"
              placeholder="Search by student name, ID (e.g. STU-2024), or major..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control search-field"
              aria-label="Search students"
            />
            {searchTerm && (
              <button 
                className="clear-search-btn" 
                onClick={() => setSearchTerm('')} 
                aria-label="Clear search query"
              >
                &times;
              </button>
            )}
          </div>

          {/* Filters & Sorters */}
          <div className="filters-group">
            <div className="select-wrapper">
              <label htmlFor="year-select" className="select-label">Year Level</label>
              <select
                id="year-select"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="form-select"
              >
                <option value="All">All Years</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>

            <div className="select-wrapper">
              <label htmlFor="major-select" className="select-label">Academic Major</label>
              <select
                id="major-select"
                value={majorFilter}
                onChange={(e) => setMajorFilter(e.target.value)}
                className="form-select"
              >
                {uniqueMajors.map((major) => (
                  <option key={major} value={major}>
                    {major === 'All' ? 'All Majors' : major}
                  </option>
                ))}
              </select>
            </div>

            <div className="select-wrapper">
              <label htmlFor="sort-select" className="select-label">Sort By</label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="form-select"
              >
                <option value="name-asc">Name (A &rarr; Z)</option>
                <option value="name-desc">Name (Z &rarr; A)</option>
                <option value="gpa-desc">Highest GPA</option>
                <option value="gpa-asc">Lowest GPA</option>
                <option value="year">Year Level</option>
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

        {/* Dynamic Status Counter */}
        <div className="results-counter-bar">
          <p className="counter-text">
            Showing <strong>{filteredStudents.length}</strong> of <strong>{studentsData.length}</strong> registered students
          </p>
          {isFilteringActive && (
            <span className="filter-badge">Active Filters Applied</span>
          )}
        </div>
      </section>

      {/* Students Cards Grid */}
      {filteredStudents.length > 0 ? (
        <section className="cards-grid">
          {filteredStudents.map((student) => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onSelect={setSelectedStudent} 
            />
          ))}
        </section>
      ) : (
        <div className="empty-state-box">
          <div className="empty-icon">🔍</div>
          <h3>No students match your criteria</h3>
          <p>Try modifying your search query or reset the year and major filters.</p>
          <button onClick={handleResetFilters} className="btn btn-primary">
            Reset All Filters
          </button>
        </div>
      )}

      {/* Interactive Modal */}
      {selectedStudent && (
        <StudentModal 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </main>
  );
}

export default Students;
