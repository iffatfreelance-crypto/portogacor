'use client';

import { motion } from 'motion/react';
import { Github, Instagram, Mail, Heart } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/iffatfreelance-crypto', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/odeeale._?stkn=MW1ub3A1b2g2YmFsNQ==', label: 'Instagram' },
  { icon: Mail, href: 'mailto:iffatfreelance@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '2.5rem 0',
      background: 'var(--bg-primary)',
    }}>
      <div className="container-custom">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          {/* Logo */}
          <a
            href="#"
            style={{
              textDecoration: 'none',
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            Iffat<span style={{ color: 'var(--text-muted)' }}>.dev</span>
          </a>

          {/* Copyright */}
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}>
            © {year} Made with <Heart size={13} style={{ color: '#ef4444', fill: '#ef4444' }} /> by Iffat Fakhir
          </p>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9,
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
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-color)';
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
                  (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)';
                }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
