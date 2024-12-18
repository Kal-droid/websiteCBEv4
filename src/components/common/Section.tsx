import React, { forwardRef } from 'react';
import Container from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl';
  containerClassName?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(({
  children,
  className = '',
  containerSize = 'lg',
  containerClassName = '',
  ...props
}, ref) => {
  return (
    <section
      ref={ref}
      className={`py-16 ${className}`}
      {...props}
    >
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;