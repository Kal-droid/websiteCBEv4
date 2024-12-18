import React from 'react';
import { motion } from 'framer-motion';

interface NavbarBackgroundProps {
  isScrolled: boolean;
}

export default function NavbarBackground({ isScrolled }: NavbarBackgroundProps) {
  return (
    <motion.div
      className="absolute inset-0 w-full"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isScrolled ? 0.92 : 0.85,
        backdropFilter: `blur(${isScrolled ? 12 : 8}px)`
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Primary background with optimal opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-primary/90" />
      
      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/5" />
    </motion.div>
  );
}