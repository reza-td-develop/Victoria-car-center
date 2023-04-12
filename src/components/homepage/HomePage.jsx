import React from 'react';
import Navbar from './navbar/Navbar';
import HeroSlider from './heroSlider/HeroSlider';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import CTA from './cta/CTA';
import Features from './features/Features';
import Testimonials from './testimonials/Testimonials';
import Blog from './blog/Blog';
import Footer from './footer/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <About />
      <Portfolio />
      <CTA />
      <Features />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  )
}
