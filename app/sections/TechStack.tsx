'use client';

import { motion } from 'motion/react';

const techGroups = [
  {
    category: 'Frontend Engineering',
    description: 'Modern, reactive interfaces with component-driven architecture',
    techs: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend & APIs',
    description: 'Robust server architecture, microservices, and fast data processing',
    techs: ['Node.js', 'Express.js', 'Go (Fiber)', 'Laravel', 'REST APIs', 'WebSocket'],
  },
  {
    category: 'Databases & ORM',
    description: 'Reliable persistent storage, indexing, and schema management',
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    category: 'DevOps & Tooling',
    description: 'Continuous integration, containerization, and infrastructure',
    techs: ['Git & GitHub', 'Docker', 'Linux (Ubuntu)', 'Nginx Reverse Proxy', 'Vercel', 'Postman'],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Core Competencies</p>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Teknologi dan perangkat modern yang saya gunakan dalam pengembangan perangkat lunak
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          maxWidth: 1040,
          margin: '0 auto',
        }}>
          {techGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
              className="card"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <div style={{ width: 4, height: 16, borderRadius: 2, background: 'var(--text-primary)' }} />
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {group.category}
                  </h3>
                </div>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.82rem',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                }}>
                  {group.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {group.techs.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
