import React from 'react';
import styles from './HeroSection.module.scss';

const leftImages = [
  '/images/left1.png',
  '/images/left2.png',
  '/images/left3.png',
  '/images/left4.png'
];

const rightImages = [
  '/images/right1.png',
  '/images/right2.png',
  '/images/right3.png',
  '/images/right4.png'
];

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* SVG Definitions */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4683D0" />
            <stop offset="50%" stopColor="#84D6A3" />
            <stop offset="100%" stopColor="#4683D0" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.container}>
        <div className={styles.imageColumns}>
          {/* Left Column - Scrolling Down */}
          <div className={styles.column}>
            <div className={styles.scrollingContent}>
              {/* Double the images for seamless loop */}
              {[...leftImages, ...leftImages].map((image, index) => (
                <div 
                  key={`left-${index}`} 
                  className={styles.imageWrapper}
                >
                  <img
                    src={image}
                    alt={`Lifestyle image ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Scrolling Up */}
          <div className={`${styles.column} ${styles.reverse}`}>
            <div className={styles.scrollingContent}>
              {/* Double the images for seamless loop */}
              {[...rightImages, ...rightImages].map((image, index) => (
                <div 
                  key={`right-${index}`} 
                  className={styles.imageWrapper}
                >
                  <img
                    src={image}
                    alt={`Lifestyle image ${index + 1}`}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Book an appointment with{' '}
            <span className={styles.highlight}>lifestyle medicine</span> experts
          </h1>
          <p className={styles.subtitle}>
            Optimize your lifestyle and reverse chronic diseases.
          </p>

          <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.searchContainer}>
              <div className={styles.inputRow}>
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Condition, procedure, specialty…"
                    className={styles.searchInput}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="City, state, or zipcode"
                    className={styles.searchInput}
                  />
                </div>
              </div>
              <div className={styles.inputRow}>
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 5H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2zm0 6H4"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Insurance carrier"
                    className={styles.searchInput}
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Select date"
                    className={styles.searchInput}
                  />
                </div>
              </div>
              <button type="submit" className={styles.findButton}>
                Find now
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,101.3C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 