import React, { useState, useEffect } from 'react';
import portfolioData from './data/portfolioData.json';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import ProjectsGrid from './components/ProjectsGrid';
import Footer       from './components/Footer';

/* ─────────────────────────────────────────────────
   Hash → page key mapping
   #/            → 'home'
   #/proyectos   → 'projects'
   #/trayectoria → 'trajectory'
───────────────────────────────────────────────── */
const HASH_MAP = {
  '#/'            : 'home',
  '#/proyectos'   : 'projects',
  '#/trayectoria' : 'trajectory',
};

const PAGE_HASH = {
  home       : '#/',
  projects   : '#/proyectos',
  trajectory : '#/trayectoria',
};

function getPageFromHash() {
  const hash = window.location.hash || '#/';
  return HASH_MAP[hash] ?? 'home';
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [showScroll, setShowScroll] = useState(false);

  /* Listen for browser back/forward navigation */
  useEffect(() => {
    const onHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  /* Scroll-to-top button visibility */
  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 350);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Navigate: update hash → triggers hashchange listener */
  const handleNavigate = (page) => {
    window.location.hash = PAGE_HASH[page];
  };

  const { profile, labels, sections, skills, skillsCategories,
          experience, education, projects, projectFilters } = portfolioData;

  return (
    <>
      <Navbar
        profile={profile}
        labels={labels}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      <main className="page-container">

        {/* ── HOME ─────────────────────────────────── */}
        {activePage === 'home' && (
          <>
            <Hero profile={profile} labels={labels} />
            <Skills skills={skills} categories={skillsCategories} sections={sections} />
            <Footer profile={profile} labels={labels} />
          </>
        )}

        {/* ── PROJECTS ─────────────────────────────── */}
        {activePage === 'projects' && (
          <>
            <ProjectsGrid
              projects={projects}
              sections={sections}
              labels={labels}
              filters={projectFilters}
            />
            <Footer profile={profile} labels={labels} />
          </>
        )}

        {/* ── TRAJECTORY ───────────────────────────── */}
        {activePage === 'trajectory' && (
          <>
            <Experience
              experience={experience}
              education={education}
              sections={sections}
              labels={labels}
            />
            <Footer profile={profile} labels={labels} />
          </>
        )}
      </main>

      {/* Floating scroll-to-top */}
      <button
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}

export default App;
