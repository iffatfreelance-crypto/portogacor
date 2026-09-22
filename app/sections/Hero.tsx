'use client';

import { useEffect, useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowDown, Github, FileText } from 'lucide-react';

const typewriterWords = [
  'Fullstack Developer',
  'Software Engineer',
  'Problem Solver',
  'Tech Enthusiast',
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const word = typewriterWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 90);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 50);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % typewriterWords.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="home"
      className="bg-grid"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--gradient-hero)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1, paddingTop: '7.5rem', paddingBottom: '5rem' }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}
        >
          {/* Status Badge */}
          <motion.div variants={item} style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              borderRadius: 9999,
              padding: '6px 16px',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              fontFamily: 'Outfit, sans-serif',
              letterSpacing: '0.04em',
            }}>
              <span className="status-dot" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            style={{
              fontSize: 'clamp(2.75rem, 8vw, 5.25rem)',
              fontWeight: 900,
              marginBottom: '1rem',
              lineHeight: 1.08,
              letterSpacing: '-0.035em',
            }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">IFFAT FAKHIR</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={item}
            style={{
              marginBottom: '1.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
            }}>
              A{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{displayed}</span>
              <span style={{
                display: 'inline-block',
                width: 2,
                height: '1.1em',
                background: 'var(--text-primary)',
                marginLeft: 3,
                verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
              color: 'var(--text-muted)',
              maxWidth: 580,
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
            }}
          >
            Suka bikin hal-hal yang hidup di internet — dari interface yang smooth, logic yang rapi,
            sampai sistem yang terstruktur. Fokus pada performa tinggi dan pengalaman pengguna yang seamless.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-primary"
            >
              View My Work
              <ArrowDown size={15} />
            </motion.a>
            <motion.a
              href="/CV.pdf"
              target="_blank"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary"
            >
              <FileText size={15} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            variants={item}
            style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}
          >
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif' }}>
              Find me on
            </span>
            {[
              { icon: Github, href: 'https://github.com/iffatfreelance-crypto', label: 'GitHub' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.14em' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} color="var(--text-muted)" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}
