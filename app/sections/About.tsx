'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { MapPin, Coffee, Moon, Headphones, Terminal, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

const PROFILE = {
  name: 'IFFAT FAKHIR',
  role: 'Mahasiswa Prodi TRPL',
  location: 'Bekasi, Indonesia',
  bio: 'Suka ngoding dan merancang produk digital yang bermanfaat. Fokus pada arsitektur web modern, performa tinggi, dan pengalaman pengguna yang intuitif.',
  availability: 'Available for projects & roles',
  photo: '/fotoprofil.jpeg',
};

const HIGHLIGHTS = [
  { icon: Coffee, text: 'Kopi & clean code setiap hari' },
  { icon: Moon, text: 'Fokus tinggi & paling produktif saat malam' },
  { icon: Headphones, text: 'Lo-fi & synthwave playlist enthusiast' },
  { icon: Terminal, text: 'Problem solving & system optimization' },
];

const FOCUS_AREAS = [
  { name: 'Full-Stack Web (React / Next.js / Node)', pct: 85 },
  { name: 'Backend Engineering & APIs (Go / Fiber / Express)', pct: 78 },
  { name: 'Databases & System Design (PostgreSQL / MySQL / Prisma)', pct: 72 },
];

const HOBBIES = ['Coding', 'UI/UX Design', 'Gaming', 'Music', 'Tech Exploration', 'Photography'];

function ProfileAvatar({ name, photo }: { name: string; photo: string }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    const initials = name
      .split(' ')
      .map((w) => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

    return (
      <div style={{
        width: 110,
        height: 110,
        borderRadius: 16,
        background: '#18181b',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 800,
        fontSize: '2rem',
        color: '#ffffff',
        flexShrink: 0,
        letterSpacing: '0.05em',
      }}>
        {initials}
      </div>
    );
  }

  return (
    <div style={{
      width: 110,
      height: 110,
      borderRadius: 16,
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      background: '#121215',
    }}>
      <Image
        src={photo}
        alt={`${name} profile photo`}
        fill
        sizes="110px"
        style={{ objectFit: 'cover' }}
        onError={() => setImgError(true)}
        priority
      />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Background & Philosophy</p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Membangun solusi digital nyata dengan fondasi teknis yang kokoh
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.25rem',
          maxWidth: 1040,
          margin: '0 auto',
        }}>

          {/* Card 1: Main Profile (Span 8) */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="card"
            style={{
              gridColumn: 'span 12',
              padding: '2.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <ProfileAvatar name={PROFILE.name} photo={PROFILE.photo} />

            <div style={{ flex: 1, minWidth: 260 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.6rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}>
                  {PROFILE.name}
                </h3>
              </div>

              <p style={{
                color: 'var(--text-secondary)',
                fontWeight: 500,
                fontSize: '0.92rem',
                fontFamily: 'var(--font-inter), sans-serif',
                marginBottom: 12,
              }}>
                {PROFILE.role}
              </p>

              <p style={{
                color: 'var(--text-muted)',
                fontSize: '0.92rem',
                lineHeight: 1.75,
                marginBottom: 18,
              }}>
                {PROFILE.bio}
              </p>

              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  <MapPin size={14} color="#a1a1aa" /> {PROFILE.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                  <span className="status-dot" />
                  {PROFILE.availability}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Key Highlights (Span 6) */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="card"
            style={{
              gridColumn: 'span 12',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
              <Sparkles size={15} color="var(--text-primary)" />
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}>
                Core Work Habits
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1rem',
            }}>
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    borderRadius: 8,
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-color)',
                  }}>
                    <Icon size={16} color="#a1a1aa" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Card 3: Technical Focus (Span 6) */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="card"
            style={{
              gridColumn: 'span 12',
              padding: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
              <Terminal size={15} color="var(--text-primary)" />
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '0.78rem',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
              }}>
                Current Technical Focus
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FOCUS_AREAS.map((item) => (
                <div key={item.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.name}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{item.pct}%</span>
                  </div>
                  <div style={{ height: 4, background: 'rgba(255, 255, 255, 0.06)', borderRadius: 999, overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      style={{ height: '100%', background: 'var(--text-primary)', borderRadius: 999 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Interests & Tags (Span 12) */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="card"
            style={{
              gridColumn: 'span 12',
              padding: '1.5rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '0.78rem',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
            }}>
              Interests &amp; Exploration
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {HOBBIES.map((hobby) => (
                <span key={hobby} className="tech-badge">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
