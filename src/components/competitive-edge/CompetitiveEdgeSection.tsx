import React from 'react';
import CompetitiveEdgeHeader from './CompetitiveEdgeHeader';
import CompetitiveEdgeTimeline from './CompetitiveEdgeTimeline';
import CompetitiveEdgeMetrics from './CompetitiveEdgeMetrics';
import Section from '../common/Section';

export default function CompetitiveEdgeSection() {
  return (
    <Section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <CompetitiveEdgeHeader />
      <CompetitiveEdgeTimeline />
      <CompetitiveEdgeMetrics />
    </Section>
  );
}