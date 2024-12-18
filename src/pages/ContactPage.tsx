import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Clock } from 'lucide-react';
import Section from '../components/sections/Section';
import AnimatedSection from '../components/common/AnimatedSection';
import Card from '../components/common/Card';

export default function ContactPage() {
  return (
    <Section pattern patternVariant="light" className="bg-white min-h-screen">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Contact Us</h1>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <AnimatedSection delay={0.2}>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </Card>
        </AnimatedSection>

        {/* Contact Information */}
        <AnimatedSection delay={0.4}>
          <Card className="p-8">
            <h2 className="text-2xl font-semibold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@cbecapital.com</p>
                  <p className="text-gray-600">support@cbecapital.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+251 116 681 888</p>
                  <p className="text-gray-600">+251 116 683 037</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    CBE Head Quarters<br />
                    Churchill Avenue<br />
                    P.O. Box 255<br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </Section>
  );
}