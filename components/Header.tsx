'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.75rem 0' : '1.25rem 0',
          transition: 'all 0.3s ease',
          background: scrolled ? 'var(--bg-header)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        }}
      >
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.35rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Iffat<span style={{ color: 'var(--text-muted)' }}>.dev</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ y: -2 }}
                  style={{
                    textDecoration: 'none',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '0.95rem',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.2s ease',
                    position: 'relative',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.href) {
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    }
                  }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      style={{
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: 'var(--text-primary)',
                        borderRadius: 1,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Right side — theme toggle + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Theme Toggle */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              suppressHydrationWarning
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* CTA Button — hidden on mobile */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary desktop-cta"
              style={{ padding: '8px 20px', fontSize: '0.875rem' }}
            >
              Contact Me
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
              suppressHydrationWarning
              style={{
                width: 38,
                height: 38,
                borderRadius: 10,
                border: '1px solid var(--border-color)',
                background: 'var(--bg-card)',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-primary)',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-container"
            style={{
              position: 'fixed',
              top: 68,
              left: '1rem',
              right: '1rem',
              maxWidth: 480,
              margin: '0 auto',
              zIndex: 999,
              borderRadius: 16,
              padding: '1.25rem',
              background: 'var(--bg-mobile-menu)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      display: 'block',
                      padding: '0.75rem 1rem',
                      textDecoration: 'none',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      background: isActive ? 'var(--bg-secondary)' : 'transparent',
                      borderRadius: 10,
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'var(--bg-secondary)';
                      (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = isActive ? 'var(--bg-secondary)' : 'transparent';
                      (e.currentTarget as HTMLElement).style.color = isActive ? 'var(--text-primary)' : 'var(--text-secondary)';
                    }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
            <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '0.85rem', paddingTop: '0.85rem' }}>
              <a
                href="#contact"
                className="btn-primary"
                onClick={() => setMobileOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-container { display: none !important; }
        }
      `}</style>
    </>
  );
}
