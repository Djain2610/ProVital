import React, { useState } from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLoginDropdownOpen(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo (always left, only once) */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <img src="/images/logo.png" alt="ProVital Logo" className={styles.logoImage} />
          </div>
          <span className={styles.logoText}>ProVital</span>
        </div>

        {/* Hamburger Menu Button (mobile only) */}
        <button 
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation (desktop) */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#list-practice">List your practice</a></li>
            <li><a href="#employers">For Employers</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#speakers">Speakers</a></li>
            <li className={styles.loginDropdown}>
              <button 
                className={styles.loginButton} 
                onClick={toggleLoginDropdown}
                aria-expanded={isLoginDropdownOpen}
              >
                Login / Signup
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className={`${styles.dropdownArrow} ${isLoginDropdownOpen ? styles.open : ''}`}
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className={`${styles.dropdownContent} ${isLoginDropdownOpen ? styles.show : ''}`}>
                <div className={styles.dropdownItem}>
                  <span>Doctor</span>
                  <div className={styles.dropdownLinks}>
                    <a href="#login">Login</a>
                    <a href="#signup">Sign up</a>
                  </div>
                </div>
                <div className={styles.dropdownItem}>
                  <span>Patients</span>
                  <div className={styles.dropdownLinks}>
                    <a href="#login">Login</a>
                    <a href="#signup">Sign up</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className={styles.mobileMenuOverlay}>
            <div className={styles.mobileMenu}>
              <div className={styles.mobileHeader}>
                <div className={styles.logo}>
                  <div className={styles.logoIcon}>
                    <img src="/images/logo.png" alt="ProVital Logo" className={styles.logoImage} />
                  </div>
                  <span className={styles.logoText}>ProVital</span>
                </div>
                <button 
                  className={styles.closeButton}
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <ul className={styles.mobileNavList}>
                <li><a href="#doctors">Doctors</a></li>
                <li><a href="#list-practice">List your practice</a></li>
                <li><a href="#employers">For Employers</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#books">Books</a></li>
                <li><a href="#speakers">Speakers</a></li>
                <li className={styles.loginDropdown}>
                  <button 
                    className={styles.loginButton} 
                    onClick={toggleLoginDropdown}
                    aria-expanded={isLoginDropdownOpen}
                  >
                    Login / Signup
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className={`${styles.dropdownArrow} ${isLoginDropdownOpen ? styles.open : ''}`}
                    >
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <div className={`${styles.dropdownContent} ${isLoginDropdownOpen ? styles.show : ''}`}>
                    <div className={styles.dropdownItem}>
                      <span>Doctor</span>
                      <div className={styles.dropdownLinks}>
                        <a href="#login">Login</a>
                        <a href="#signup">Sign up</a>
                      </div>
                    </div>
                    <div className={styles.dropdownItem}>
                      <span>Patients</span>
                      <div className={styles.dropdownLinks}>
                        <a href="#login">Login</a>
                        <a href="#signup">Sign up</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 