'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';

const words = ['Welcome', 'to', 'my', 'portfolio'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  },
};

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 350);
          return 100;
        }
        return prev + Math.random() * 16 + 6;
      });
    }, 110);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
          }}
        >
          {/* Header Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginBottom: '2.5rem', textAlign: 'center' }}
          >
            {/* Minimalist Spinner */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                borderTopColor: '#ffffff',
                margin: '0 auto 1.5rem',
              }}
            />

            {/* Word-by-Word Animated Text */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'flex',
                gap: '0.45rem',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              {words.map((word, index) => {
                const isHighlight = index === words.length - 1;
                return (
                  <motion.span
                    key={word + index}
                    variants={wordVariants}
                    style={{
                      display: 'inline-block',
                      color: isHighlight ? '#ffffff' : 'var(--text-secondary)',
                      fontWeight: isHighlight ? 700 : 500,
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Minimalist Progress bar */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '180px' }}
            transition={{ delay: 0.2 }}
            style={{
              height: '2px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                background: '#ffffff',
                borderRadius: '999px',
                width: `${Math.min(progress, 100)}%`,
                transition: 'width 0.15s ease',
              }}
            />
          </motion.div>

          {/* Progress text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: '0.875rem',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-inter), monospace',
              letterSpacing: '0.08em',
            }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
