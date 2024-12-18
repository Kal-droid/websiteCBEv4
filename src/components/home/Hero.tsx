import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, Globe } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';
import FinancialGridBackground from '../backgrounds/FinancialGridBackground';
import Container from '../common/Container';
import Text from '../common/Text';
import Card from '../common/Card';

const statsData = [
  { icon: <BarChart2 className="h-6 w-6" />, value: "20+", label: "Years Experience" },
  { icon: <Globe className="h-6 w-6" />, value: "30+", label: "Global Partners" },
  { icon: <TrendingUp className="h-6 w-6" />, value: "$2B+", label: "Assets Managed" }
];

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-primary-dark text-white min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <FinancialGridBackground opacity={0.15} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-primary/50" />
      </div>
      
      <Container className="relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Text variant="h1" className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-accent">Pioneering</span> Ethiopia's & Africa's Financial Future
                </Text>
                <Text variant="body" className="mb-8 text-lg sm:text-xl text-accent-light">
                  CBE Capital is committed to driving financial inclusion and empowerment across Ethiopia and the African continent.
                </Text>
              </motion.div>
            </div>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {statsData.map((stat, index) => (
              <Card
                key={stat.label}
                variant="glass"
                className="p-6"
                hover={true}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-accent mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-sm text-accent-light">{stat.label}</div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}