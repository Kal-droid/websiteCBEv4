import React from 'react';
import { motion } from 'framer-motion';
import { JoinUsSection } from '../../types/join';

interface JoinCardProps {
  section: JoinUsSection;
  index: number;
}

export default function JoinCard({ section, index }: JoinCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={section.image} 
          alt={section.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-primary mb-3">{section.title}</h3>
        <p className="text-gray-600">{section.description}</p>
      </div>
    </motion.div>
  );
}