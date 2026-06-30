
function Experience({ experience, education, sections, labels }) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">{sections.experienceTitle}</h2>
        <p className="section-subtitle">{sections.experienceSubtitle}</p>
      </div>

      <div className="experience-grid">
        {/* EXPERIENCE COLUMN */}
        <div className="experience-column">
          <h3 className="column-title">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-accent)', marginRight: '0.5rem' }}
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            {labels.experienceTab}
          </h3>
          <div className="timeline">
            {experience.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-role">{item.role}</h4>
                  <h5 className="timeline-company">{item.company}</h5>
                  <ul className="timeline-tasks">
                    {item.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION COLUMNs */}
        <div className="experience-column">
          <h3 className="column-title">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--color-purple)', marginRight: '0.5rem' }}
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
            </svg>
            {labels.educationTab}
          </h3>
          <div className="timeline">
            {education.map((item) => (
              <div key={item.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h4 className="timeline-role">{item.title}</h4>
                  <h5 className="timeline-company">{item.center}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
