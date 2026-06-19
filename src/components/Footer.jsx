import { useState } from 'react';

/* ─────────────────────────────────────────────────
   Footer — Contact card.
   • Single copy-to-clipboard email button.
   • No mailto links or external mail app calls.
───────────────────────────────────────────────── */
function Footer({ profile, labels }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-card">
          <h2 className="contact-title">{labels.contactHeader}</h2>
          <p className="contact-desc">{labels.contactSubtitle}</p>

          {/* ✅ Single clipboard-copy button — clean, no mail client */}
          <button
            type="button"
            className={`copy-email-btn ${copied ? 'copied' : ''}`}
            onClick={handleCopyEmail}
            aria-live="polite"
          >
            {copied ? (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="3"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {labels.emailCopied}
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {profile.email}
              </>
            )}
          </button>

          {/* Social icons */}
          <div className="social-links">
            <a href={profile.socials.github} className="social-link"
              target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <a href={profile.socials.linkedin} className="social-link"
              target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <span>{labels.footerText}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            React + Vite
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
