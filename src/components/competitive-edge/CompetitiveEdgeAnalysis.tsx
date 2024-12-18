import React from 'react';
import { motion } from 'framer-motion';
import CompetitiveStrengthsMap from './CompetitiveStrengthsMap';
import AdvantageFlow from './AdvantageFlow';
import ValueChainMetrics from './ValueChainMetrics';
import Section from '../common/Section';
import Text from '../common/Text';

export default function CompetitiveEdgeAnalysis() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white">
      <Text variant="h2" className="text-center mb-12">
        Our Competitive Edge: An Integrated System
      </Text>
      <div className="space-y-16">
        <CompetitiveStrengthsMap />
        <AdvantageFlow />
        <ValueChainMetrics />
      </div>
    </Section>
  );
}