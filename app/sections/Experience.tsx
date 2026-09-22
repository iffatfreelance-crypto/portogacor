'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Users } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'Mahasiswa aktif',
    organization: 'Politeknik Astra',
    period: '2026 — Sekarang',
    location: 'Bekasi, Jawa Barat',
    description: 'Masih menempuh pendidikan untuk mengejar gelar sarjana terapan dan mengambil prodi Teknologi rekayasa perangkat lunak.',
    skills: ['Software Engineering', 'System Analysis', 'Database Systems', 'Algorithms'],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Magang pkl di diva sinergi',
    organization: 'Peserta pkl',
    period: '4 agustus - 4 november 2025 ',
    location: 'jakarta selatan,DKI jakarta',
    description: 'Menganalisis dan memvalidasi data,mengembangkan aplikasi perusahaan serta membantu membuat projek projek tertentu ',
    skills: ['Node.js', 'php', 'TypeScript', 'MySQL'],
  },
  {
    type: 'organization',
    icon: Users,
    title: 'ORGANISASI OSIS',
    organization: 'OSIS (Organisasi siswa intra sekolah)',
    period: '2025 — 2026',
    location: 'Bekasi, Jawa Barat',
    description: 'Aktif dalam berbagai kegiatan sekolah maupun event eksternal dan internal dan sering menjadi panitia event',
    skills: ['Softskill dan hardskill'],
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Mengembangkan aplikasi Bandara',
    organization: 'PT Diva Sinergi',
    period: '4 agustus - 4 november 2025 ',
    location: 'jakarta selatan,DKI jakarta',
    description: 'Menganalisis dan memvalidasi data,mengembangkan aplikasi perusahaan serta membantu membuat projek projek tertentu ',
    skills: ['Node.js', 'php', 'TypeScript', 'MySQL'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Timeline &amp; Career</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle">
            Perjalanan pembelajaran, praktik profesional, dan kontribusi teknis
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 25,
            top: 26,
            bottom: 26,
            width: 1,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05), transparent)',
            zIndex: 0,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  {/* Icon dot */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      backgroundColor: 'var(--bg-card)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 2,
                      boxShadow: '0 0 20px rgba(255, 255, 255, 0.04)',
                    }}
                  >
                    <Icon size={18} color="var(--text-primary)" />
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="card"
                    style={{
                      flex: 1,
                      padding: '1.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
                      <div>
                        <h3 style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontWeight: 700,
                          fontSize: '1.05rem',
                          color: 'var(--text-primary)',
                          marginBottom: 2,
                        }}>
                          {exp.title}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '0.85rem' }}>
                          {exp.organization}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          display: 'inline-block',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 6,
                          padding: '3px 10px',
                          fontSize: '0.74rem',
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-inter), monospace',
                          fontWeight: 500,
                          marginBottom: 4,
                        }}>
                          {exp.period}
                        </span>
                        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                      {exp.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.skills.map((skill) => (
                        <span key={skill} className="tech-badge">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
