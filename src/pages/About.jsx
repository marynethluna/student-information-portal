import React, { useState } from 'react';

function About() {
  // Interactive FAQ State
  const [activeFaq, setActiveFaq] = useState(0);

  // Interactive Support Form State
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    category: 'Advising',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const faqs = [
    {
      q: "How does the Student Information Portal calculate GPA?",
      a: "Cumulative GPA is calculated as the sum of all earned course grade points divided by total completed credit units, updated after official end-of-term grading."
    },
    {
      q: "Can students self-enroll in upper-division courses?",
      a: "Yes, students in good academic standing can submit registration requests through the Courses catalog, provided prerequisite coursework is fulfilled."
    },
    {
      q: "How do I contact my assigned faculty academic advisor?",
      a: "Advisor details and direct email links are available on your student profile page under the Student Directory section."
    },
    {
      q: "What technologies power this Student Information Portal?",
      a: "This application is developed using modern React, React Router for single-page client routing, and reusable JSX components (Navbar, StudentCard, CourseCard, Modals)."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    const generatedTicket = `TICK-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      studentId: '',
      email: '',
      category: 'Advising',
      message: ''
    });
    setFormSubmitted(false);
    setTicketId('');
  };

  return (
    <main className="page-content about-page">
      <header className="page-header">
        <div className="header-breadcrumbs">
          <span>Portal</span> &rsaquo; <span>Information</span> &rsaquo; <span className="current">About</span>
        </div>
        <h1 className="page-title">About the Student Information Portal</h1>
        <p className="page-subtitle">
          Learn about our portal architecture, academic policies, institutional mission, and support resources.
        </p>
      </header>

      {/* Mission & Purpose Grid */}
      <section className="about-grid">
        <div className="about-card">
          <div className="about-card-icon">🏛️</div>
          <h3>University Mission</h3>
          <p>
            To foster an inclusive, innovation-driven academic environment that prepares next-generation
            scientists, engineers, and leaders to solve complex global challenges with integrity and skill.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">⚡</div>
          <h3>Modern Architecture</h3>
          <p>
            Engineered with modular, reusable React components and dynamic client-side routing.
            Features separate component directories, single-source datasets, and interactive interfaces.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">🛡️</div>
          <h3>Academic Integrity</h3>
          <p>
            Transparent tracking of course capacity, prerequisites, student GPA milestones,
            and degree audit progress supervised by accredited faculty mentors.
          </p>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="about-tech-section">
        <h2>Key Technical Highlights &amp; Rubric Alignment</h2>
        <div className="tech-features-list">
          <div className="tech-feature-item">
            <span className="tech-badge">Routing</span>
            <div>
              <h4>React Router Dom v6</h4>
              <p>Configured with clean URL paths (<code>/</code>, <code>/students</code>, <code>/courses</code>, <code>/about</code>) and active navigation state highlighting.</p>
            </div>
          </div>

          <div className="tech-feature-item">
            <span className="tech-badge">JSX Modularity</span>
            <div>
              <h4>Reusable Card Components</h4>
              <p>Reusable <code>StudentCard</code> and <code>CourseCard</code> components populated via props and rendered multiple times across pages.</p>
            </div>
          </div>

          <div className="tech-feature-item">
            <span className="tech-badge">Git Workflow</span>
            <div>
              <h4>Branch Versioning</h4>
              <p>Maintains both <code>no-style</code> (pure HTML-only skeleton) and <code>main</code> (modern styled and interactive) branches in Git.</p>
            </div>
          </div>

          <div className="tech-feature-item">
            <span className="tech-badge">Interactivity</span>
            <div>
              <h4>Dynamic Client Features</h4>
              <p>Real-time search filtering, multi-criteria sorting, interactive detail modals, and inquiry feedback state.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-accordion">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div key={index} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Student Support Form */}
      <section className="support-form-section">
        <div className="form-card">
          <h2>Student Inquiries &amp; Help Desk</h2>
          <p className="form-lead">
            Have questions regarding registration, graduation requirements, or technical access? Submit a ticket below.
          </p>

          {formSubmitted ? (
            <div className="form-success-banner" role="alert">
              <div className="success-icon-wrap">✓</div>
              <h3>Inquiry Successfully Submitted!</h3>
              <p>
                Thank you, <strong>{formData.fullName}</strong>. Your ticket has been logged under reference number:
              </p>
              <div className="ticket-badge">{ticketId}</div>
              <p className="ticket-note">
                An academic counselor will contact you at <code>{formData.email}</code> within 1-2 business days.
              </p>
              <button onClick={handleResetForm} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="studentId">Student ID</label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    placeholder="e.g. STU-2024-001"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">University Email <span className="req">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex.morgan@university.edu"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Inquiry Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="Advising">Academic Advising</option>
                    <option value="Enrollment">Course Enrollment &amp; Prerequisites</option>
                    <option value="Transcript">Graduation &amp; Transcript Records</option>
                    <option value="Technical">Portal Technical Support</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Detailed Message <span className="req">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your inquiry or question in detail..."
                  required
                  className="form-control textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                Submit Academic Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Campus Contact Cards */}
      <section className="contact-details-section">
        <h2>Department Directory &amp; Office Hours</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h4>Office of the Registrar</h4>
            <p>Academic Hall, Room 104</p>
            <p><strong>Email:</strong> registrar@university.edu</p>
            <p><strong>Phone:</strong> (555) 234-5678</p>
            <p className="contact-hours">Mon-Fri: 8:00 AM – 5:00 PM</p>
          </div>

          <div className="contact-card">
            <h4>College of Computing</h4>
            <p>Turing Technology Center, Room 300</p>
            <p><strong>Email:</strong> computing.advising@university.edu</p>
            <p><strong>Phone:</strong> (555) 234-5690</p>
            <p className="contact-hours">Mon-Fri: 9:00 AM – 4:30 PM</p>
          </div>

          <div className="contact-card">
            <h4>Academic Student Support</h4>
            <p>Student Success Pavilion, Suite 210</p>
            <p><strong>Email:</strong> support@university.edu</p>
            <p><strong>Phone:</strong> (555) 234-5700</p>
            <p className="contact-hours">Mon-Sat: 8:30 AM – 6:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
