'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Lock, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    num: '01',
    category: 'Fullstack / Automation',
    title: 'QRayakan',
    description: 'Menggunakan konsep timeline (garis waktu) interaktif, di mana pasangan bisa menggulir halaman ke bawah untuk menelusuri kembali momen-momen, tanggal penting, dan pencapaian yang telah dilewati bersama.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/iffatfreelance-crypto/projek4mylove.git',
    demo: 'https://projek4mylove.vercel.app/',
    isPrivate: false,
  },
  {
    id: 2,
    num: '02',
    category: 'Web / Fullstack',
    title: 'Kinerja Hub',
    description: 'Platform manajemen kehadiran dan pemantauan kinerja karyawan terintegrasi dengan kontrol akses multi-role, pelacakan tugas, grafik analitik interaktif, dan rekapitulasi laporan otomatis',
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Chart.js', 'JavaScript'],
    github: '',

    isPrivate: true,
  },
  {
    id: 3,
    num: '03',
    category: 'Developer Portfolio',
    title: 'Developer Portfolio v2',
    description: 'Personal developer portfolio with high-performance dark minimalist monochrome aesthetics, custom smooth transitions, and type-safe architecture.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/RyHarJr/portofoliov2',
    demo: 'https://ryhar.my.id',
    isPrivate: false,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Fullstack', 'Web'];

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Selected Works</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Koleksi aplikasi dan sistem yang saya bangun dengan fokus pada skalabilitas dan performa
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              suppressHydrationWarning
              onClick={() => setFilter(cat)}
              style={{
                padding: '6px 18px',
                borderRadius: 9999,
                fontSize: '0.8rem',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600,
                border: filter === cat ? '1px solid var(--text-primary)' : '1px solid var(--border-color)',
                background: filter === cat ? 'var(--text-primary)' : 'var(--bg-card)',
                color: filter === cat ? 'var(--bg-primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          maxWidth: 1040,
          margin: '0 auto',
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, idx) => (
              <motion.article
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="card"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-inter), monospace',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                    }}>
                      PROJECT {proj.num}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {proj.isPrivate && (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-inter), monospace',
                          color: 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          padding: '2px 8px',
                          borderRadius: 4,
                        }}>
                          <Lock size={11} /> Private
                        </span>
                      )}
                      <span style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-inter), monospace',
                        color: 'var(--text-muted)',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-color)',
                        padding: '2px 8px',
                        borderRadius: 4,
                      }}>
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                  }}>
                    {proj.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}>
                    {proj.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {proj.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                  }}>
                    {proj.isPrivate ? (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 5,
                          fontSize: '0.82rem',
                          color: 'var(--text-muted)',
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 500,
                        }}
                      >
                        <Lock size={13} /> Private Repo
                      </span>
                    ) : (
                      proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.82rem',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease',
                            fontFamily: 'Outfit, sans-serif',
                            fontWeight: 500,
                          }}
                          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
                        >
                          <Github size={14} /> Code
                        </a>
                      )
                    )}

                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: '0.82rem',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          transition: 'opacity 0.2s ease',
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 600,
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.75')}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                      >
                        Live Demo <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
