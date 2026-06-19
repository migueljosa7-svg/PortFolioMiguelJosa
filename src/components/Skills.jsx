
function Skills({ skills, categories, sections }) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">{sections.skillsTitle}</h2>
        <p className="section-subtitle">{sections.skillsSubtitle}</p>
      </div>

      <div className="skills-grid">
        {Object.keys(skills).map((key) => (
          <div key={key} className="skills-card">
            <h3 className="skills-category-title">{categories[key]}</h3>
            <div className="skills-list">
              {skills[key].map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
