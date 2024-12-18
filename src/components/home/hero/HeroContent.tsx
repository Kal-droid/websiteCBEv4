import React from 'react';
import { motion } from 'framer-motion';
import Text from '../../common/Text';
import HeroButtons from './HeroButtons';

interface HeroContentProps {
  title: string;
  subtitle: string;
}

export default function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Text variant="h1" className="mb-6">
          {title}
        </Text>
        <Text variant="body" className="mb-8 text-accent-light">
          {subtitle}
        </Text>
      </motion.div>
      <HeroButtons />
    </div>
  );
}