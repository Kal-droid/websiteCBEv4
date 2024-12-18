import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';
import PageTransition from './components/transitions/PageTransition';
import TransitionOverlay from './components/transitions/TransitionOverlay';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const VisionPage = React.lazy(() => import('./pages/VisionPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ExpertisePage = React.lazy(() => import('./pages/ExpertisePage'));
const PartnershipsPage = React.lazy(() => import('./pages/PartnershipsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <TransitionOverlay key="overlay" />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="vision" element={
            <PageTransition>
              <VisionPage />
            </PageTransition>
          } />
          <Route path="services" element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } />
          <Route path="expertise" element={
            <PageTransition>
              <ExpertisePage />
            </PageTransition>
          } />
          <Route path="partnerships" element={
            <PageTransition>
              <PartnershipsPage />
            </PageTransition>
          } />
          <Route path="contact" element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}