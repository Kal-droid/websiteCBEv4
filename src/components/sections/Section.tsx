import React from 'react';
import { motion } from 'framer-motion';
import Container from '../common/Container';
import PatternBackground from '../backgrounds/PatternBackground';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  pattern?: boolean;
  patternVariant?: 'light' | 'dark';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Section({
  children,
  className = '',
  pattern = false,
  patternVariant = 'light',
  containerSize = 'lg'
}: SectionProps) {
  return (
    <motion.section
      className={`relative py-16 overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {pattern && (
        <PatternBackground 
          variant={patternVariant} 
          animate 
          opacity={patternVariant === 'dark' ? 0.2 : 0.15}
        />
      )}
      <Container size={containerSize} className="relative z-10">
        {children}
      </Container>
    </motion.section>
  );
}