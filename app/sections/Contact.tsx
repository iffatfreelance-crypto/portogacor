'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Github, Instagram, MessageSquare, CheckCircle2, Loader2, MapPin } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/iffatfreelance-crypto' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/odeeale._?stkn=MW1ub3A1b2g2YmFsNQ==' },
  { icon: Mail, label: 'Email', href: 'mailto:iffatfreelance@gmail.com' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise((res) => setTimeout(res, 1400));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid var(--border-color)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Initiate Conversation</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Terbuka untuk diskusi proyek, kolaborasi engineering, atau sekadar bertukar wawasan seputar teknologi
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          maxWidth: 960,
          margin: '0 auto',
        }}>
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '2rem' }}
          >
            <div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
                letterSpacing: '-0.02em',
              }}>
                Mari berkolaborasi membangun solusi digital berkualitas.
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Saya selalu antusias mendiskusikan gagasan baru, optimasi sistem, dan pengembangan web full-stack.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={16} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>Email</p>
                    <a href="mailto:iffatfreelance@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}>
                      Iffat fakhir
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPin size={16} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>Location</p>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                      Bekasi, Jawa Barat  
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MessageSquare size={16} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2 }}>Response Time</p>
                    <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.9rem' }}>
                      Harusnya dalam 24 jam
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Connect Online
              </p>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                    style={{
                      width: 40,
                      height: 40,
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
              </div>
            </div>
          </motion.div>

          {/* Right side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              suppressHydrationWarning
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 14,
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Nama
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  autoComplete="name"
                  suppressHydrationWarning
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap Anda"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--text-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border-color)';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  autoComplete="email"
                  suppressHydrationWarning
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alamat@email.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--text-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border-color)';
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 6 }}>
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  suppressHydrationWarning
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tuliskan kebutuhan atau pesan Anda..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--text-primary)';
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLElement).style.borderColor = 'var(--border-color)';
                  }}
                />
              </div>

              <motion.button
                type="submit"
                suppressHydrationWarning
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.01 } : {}}
                whileTap={status === 'idle' ? { scale: 0.99 } : {}}
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  padding: '12px',
                  borderRadius: 8,
                  fontSize: '0.9rem',
                  opacity: status === 'loading' ? 0.8 : 1,
                  cursor: status !== 'idle' ? 'not-allowed' : 'pointer',
                  background: status === 'success' ? 'var(--bg-card-hover)' : 'var(--text-primary)',
                  color: status === 'success' ? 'var(--text-primary)' : 'var(--bg-primary)',
                  border: '1px solid var(--text-primary)',
                }}
              >
                {status === 'loading' && <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />}
                {status === 'success' && <CheckCircle2 size={16} />}
                {status === 'idle' && <Send size={15} />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
