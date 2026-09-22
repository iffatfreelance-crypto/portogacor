'use client';

import { useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  style?: React.CSSProperties;
}

export default function Card3DTilt({
  children,
  className,
  maxTilt = 10,
  scale = 1.02,
  style,
}: Card3DTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (y - 0.5) * -maxTilt,
        y: (x - 0.5) * maxTilt,
      });
      setGlare({ x: x * 100, y: y * 100 });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 800,
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform',
        ...style,
      }}
      className={className}
    >
      {children}
      {/* Glare overlay */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: 'inherit',
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.1) 0%, transparent 60%)`,
            zIndex: 10,
          }}
        />
      )}
    </motion.div>
  );
}
