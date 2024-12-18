import React from 'react';
import { motion } from 'framer-motion';

export default function HeroButtons() {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Buttons removed */}
    </motion.div>
  );
}