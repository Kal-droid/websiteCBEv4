import React from 'react';
import Hero from '../components/home/Hero';
import StrategicOverview from '../components/sections/StrategicOverview';
import ServiceSection from '../components/services/ServiceSection';
import TransformationSection from '../components/transformation/TransformationSection';
import JoinUsSection from '../components/join/JoinUsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StrategicOverview />
      <ServiceSection />
      <TransformationSection />
      <JoinUsSection />
    </div>
  );
}