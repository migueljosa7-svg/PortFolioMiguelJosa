import { useState } from 'react';

/* -------------------------------------------------------
   ProjectsGrid — Filterable project cards.
   • Active filter drives visible subset via useState.
   • Projects with renderDemo === "#" get a disabled
     "Demo próximamente" button with a tooltip.
------------------------------------------------------- */
function ProjectsGrid({ projects, sections, labels, filters }) {
  const [activeFilter, setActiveFilter] = useState(labels.filterAll);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === labels.filterAll) return true;
    return project.technologies.some(
      (tech) => tech.toLowerCase() === activeFilter.toLowerCase()
    );
  });

  return (
    <section id="projects" className="page-section">
      <div className="section-header">
        <h2 className="section-title">{sections.projectsTitle}</h2>
        <p className="section-subtitle">{sections.projectsSubtitle}</p>
      </div>

      {/* Filter buttons */}
      <div className="filter-container">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="projects-grid">
        {filteredProjects.map((project) => {
          const hasDemo = project.renderDemo && project.renderDemo !== '#';

          return (
            <article key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>

              <div className="project-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag-badge">{tech}</span>
                ))}
              </div>

              <p className="project-desc">{project.description}</p>

              {/* Render cold-start warning — only when a live demo exists on Render */}
              {hasDemo && project.renderDemo.includes('render.com') && (
                <div className="render-note">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>{labels.renderWarning}</span>
                </div>
              )}

              {/* Action buttons */}
              <div className="project-actions"
                style={{ gridTemplateColumns: hasDemo ? '1fr 1fr' : '1fr' }}>

                {/* GitHub — always available */}
                <a href={project.github} className="btn btn-secondary"
                  target="_blank" rel="noopener noreferrer">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  {labels.githubButton}
                </a>

                {/* Demo — active or elegantly disabled */}
                {hasDemo ? (
                  <a href={project.renderDemo} className="btn btn-primary"
                    target="_blank" rel="noopener noreferrer">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    {labels.demoButton}
                  </a>
                ) : (
                  <span className="btn btn-disabled" title="Demo próximamente / Código disponible en GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {labels.demoComingSoon}
                  </span>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsGrid;
