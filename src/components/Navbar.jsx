
/* ─────────────────────────────────────────────────
   Navbar — Hash-based tab navigation.
   Uses <a href> tags so clicking naturally updates
   window.location.hash and the hashchange event fires.
───────────────────────────────────────────────── */
const PAGES = [
  { key: 'home',       hash: '#/',            labelKey: 'navHome' },
  { key: 'projects',   hash: '#/proyectos',   labelKey: 'navProjects' },
  { key: 'trajectory', hash: '#/trayectoria', labelKey: 'navExperience' },
];

function Navbar({ profile, labels, activePage, onNavigate }) {
  const handleClick = (e, page) => {
    e.preventDefault();               // prevent full page reload
    onNavigate(page);                 // let App.jsx write the hash
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo — always goes home */}
        <a
          href="#/"
          className="nav-logo"
          onClick={(e) => handleClick(e, 'home')}
          aria-label="Inicio"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          {profile.name}
        </a>

        {/* Navigation tabs */}
        <ul className="nav-links">
          {PAGES.map(({ key, hash, labelKey }) => (
            <li key={key}>
              <a
                href={hash}
                className={`nav-link ${activePage === key ? 'nav-link--active' : ''}`}
                onClick={(e) => handleClick(e, key)}
              >
                {labels[labelKey]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
