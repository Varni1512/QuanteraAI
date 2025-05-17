import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Full Pages
import ServicePage from './components/AISolutions';

// Components
import Navbar from './components/Navbar'; // ✅ NEWLY ADDED
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import VisionSection from './components/VisionSection';
import BenefitsSection from './components/BenefitsSection';
import AISolutionsSection from './components/AISolutionsSection';
import WhyChooseUsPage from './components/WhyChooseUsPage';
import FAQPage from './components/FAQPage';
import TeamMembersPage from './components/TeamMembersPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AboutUs from './components/about';

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id="about" className="scroll-mt-[120px]"><AboutUs /></div>
      <div id="services" className="scroll-mt-[120px]"><MissionSection /></div>
      <VisionSection />
      <div id="features" className="scroll-mt-[120px]"><BenefitsSection /></div>
      <AISolutionsSection />
      <WhyChooseUsPage />
      <div id="faqs" className="scroll-mt-[120px]"><FAQPage /></div>
      <div id="ourteam" className="scroll-mt-[120px]"><TeamMembersPage /></div>
      <TestimonialsPage />
      <div id="contact" className="scroll-mt-[120px]"><ContactPage /></div>
      <Newsletter />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans scroll-smooth w-full m-0 p-0 overflow-x-hidden" style={{ backgroundColor: "#FBFDFF" }}>
        {/* <Navbar /> */}
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
