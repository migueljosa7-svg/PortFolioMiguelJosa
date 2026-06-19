import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";

/* ─────────────────────────────────────────────────
   Hero — Landing section.
   • Animated green availability badge.
   • CV button forces download via the `download` attribute.
   • Contact button copies email to clipboard.
   ───────────────────────────────────────────────── */
function Hero({ profile, labels }) {
  const heroRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-badge',  { opacity: 0, y: -20, duration: 0.5 })
        .from('.hero-role',   { opacity: 0, y: -15, duration: 0.5 }, '-=0.2')
        .from('.hero-title',  { opacity: 0, y: -30, duration: 0.7 }, '-=0.2')
        .from('.hero-bio',    { opacity: 0, y:  20, duration: 0.6 }, '-=0.3')
        .from('.hero-ctas',   { opacity: 0, y:  20, duration: 0.5 }, '-=0.3');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Ambient glow */}
      <div className="hero-glow" aria-hidden="true" />

      {/* Availability badge */}
      <div className="availability-badge hero-badge">
        <span className="availability-dot" aria-hidden="true" />
        {labels.availableBadge}
      </div>

      {/* Role pill */}
      <div className="hero-role">{profile.role}</div>

      {/* Name headline */}
      <h1 className="hero-title">
        Hola, soy <span>{profile.name}</span>
      </h1>

      {/* Bio */}
      <p className="hero-bio">{profile.bio}</p>

      {/* CTA row */}
      <div className="hero-ctas">
        {/* ✅ Forces direct download — no new tab, no preview */}
        <a
          href={profile.cvLink}
          download="CV_Miguel_Josa.pdf"
          target="_self"
          className="btn btn-primary"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          {labels.cvButton}
        </a>

        {/* ✅ Copy email to clipboard — no mailto, no external app */}
        <button
          type="button"
          className={`btn btn-secondary copy-hero-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopyEmail}
        >
          {copied ? (
            <>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              ¡Copiado!
            </>
          ) : (
            <>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {profile.email}
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default Hero;
