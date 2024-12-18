import React from 'react';
import { motion } from 'framer-motion';
import ServicesHero from '../components/services/ServicesHero';
import ServiceSection from '../components/services/ServiceSection';
import MarketInsights3D from '../components/sections/market-insights/MarketInsights3D';
import Section from '../components/sections/Section';
import PageLayout from '../components/layout/PageLayout';

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHero />
      <Section pattern patternVariant="light" className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ServiceSection />
        </motion.div>
      </Section>
      <Section pattern patternVariant="dark" className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <MarketInsights3D />
        </motion.div>
      </Section>
    </PageLayout>
  );
}