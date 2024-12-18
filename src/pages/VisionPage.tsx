import React from 'react';
import TransformationSection from '../components/transformation/TransformationSection';
import ValuePyramid from '../components/value-proposition/ValuePyramid';
import Section from '../components/sections/Section';
import PageLayout from '../components/layout/PageLayout';

export default function VisionPage() {
  return (
    <PageLayout>
      <Section pattern patternVariant="light" className="bg-white">
        <ValuePyramid />
      </Section>
      <TransformationSection />
    </PageLayout>
  );
}