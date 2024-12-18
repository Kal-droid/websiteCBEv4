import React from 'react';
import { financialServices } from '../../data/services';
import ServiceCard from './ServiceCard';
import Section from '../sections/Section';
import Text from '../common/Text';
import Grid from '../common/Grid';

export default function ServiceSection() {
  return (
    <Section pattern className="bg-white">
      <Text 
        variant="h2" 
        className="text-center mb-12"
      >
        Comprehensive Financial Services
      </Text>
      <Grid cols={3} gap={8}>
        {financialServices.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service}
            index={index}
          />
        ))}
      </Grid>
    </Section>
  );
}