import React from 'react';
import JoinUsSection from '../components/join/JoinUsSection';
import Partnerships from '../components/home/Partnerships';
import FinancialGap from '../components/home/FinancialGap';

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen">
      <JoinUsSection />
      <Partnerships />
      <FinancialGap />
    </div>
  );
}