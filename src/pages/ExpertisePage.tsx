import React from 'react';
import CompetitiveEdgeSection from '../components/competitive-edge/CompetitiveEdgeSection';
import Section from '../components/sections/Section';
import PageLayout from '../components/layout/PageLayout';

export default function ExpertisePage() {
  return (
    <PageLayout>
      <Section pattern patternVariant="light" className="bg-white">
        <CompetitiveEdgeSection />
      </Section>
    </PageLayout>
  );
}