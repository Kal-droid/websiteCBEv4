import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart2, Lightbulb, Users, Target, Briefcase, Phone, Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavItem } from '../types/navigation';
import NavLink from './navigation/NavLink';
import MobileMenu from './navigation/MobileMenu';
import NavbarBackground from './navigation/NavbarBackground';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navItems: NavItem[] = [
  { to: '/', icon: <BarChart2 className="h-5 w-5" />, text: 'Overview' },
  { to: '/vision', icon: <Target className="h-5 w-5" />, text: 'Our Vision' },
  { to: '/services', icon: <Briefcase className="h-5 w-5" />, text: 'Services' },
  { to: '/expertise', icon: <Lightbulb className="h-5 w-5" />, text: 'Expertise' },
  { to: '/partnerships', icon: <Users className="h-5 w-5" />, text: 'Partnerships' },
  { to: '/contact', icon: <Phone className="h-5 w-5" />, text: 'Contact' }
];

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced background with optimal transparency */}
      <NavbarBackground isScrolled={isScrolled} />

      {/* Content with improved contrast */}
      <div className="relative container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* Mobile menu button with better visibility */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-white hover:text-accent transition-colors rounded-md hover:bg-white/10"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Logo with enhanced contrast */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 ml-2 md:ml-0 group"
            >
              <BarChart2 className="h-8 w-8 text-accent group-hover:text-accent-light transition-colors" />
              <span className="font-bold text-xl text-white tracking-wide group-hover:text-accent-light transition-colors">
                CBE Capital
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation with improved spacing and contrast */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink 
                key={item.to} 
                item={item}
                isActive={location.pathname === item.to}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        currentPath={location.pathname}
      />
    </motion.nav>
  );
}