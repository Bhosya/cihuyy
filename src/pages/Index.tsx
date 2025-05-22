
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WhyItsSoGood from '@/components/WhyItsSoGood';
import ProductSection from '@/components/ProductSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyItsSoGood />
      <ProductSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
