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
import Certification from './components/Certification';
import Corporate from './components/Corporate';
import Advance from './components/Advance';
import Advance1 from './components/Advance1';
import Advance2 from './components/Advance2';
import Advance3 from './components/Advance3';
import Corporate1 from './components/Corporate1';
import Corporate2 from './components/Corporate2';
import Corporate3 from './components/Corporate3';
import Advance4 from './components/Advance4';
import Advance5 from './components/Advance5';
import Advance6 from './components/Advance6';
import Advance7 from './components/Advance7';
import Advance8 from './components/Advance8';
import Advance9 from './components/Advance9';
import Advance10 from './components/Advance10';
import Advance11 from './components/Advance11';
import Advance12 from './components/Advance12';
import Advance13 from './components/Advance13';
import Advance14 from './components/Advance14';
import Advance15 from './components/Advance15';
import Advance16 from './components/Advance16';
import Advance17 from './components/Advance17';
import Advance18 from './components/Advance18';
import Advance19 from './components/Advance19';
import Advance20 from './components/Advance20';

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
          <Route path='/Certification' element={<Certification />} />
          <Route path="/Corporate" element={<Corporate />} />
          <Route path="/Advance" element={<Advance />} />
          <Route path='/virtual' element={<Advance1 />} />
          <Route path='/business' element={<Advance2 />} />
          <Route path='/aienhanced' element={<Advance3 />} />
          <Route path="/communication" element={<Corporate1 />} />
          <Route path="/1" element={<Advance4 />} />
          <Route path='/2' element={<Advance5 />} />
          <Route path='/3' element={<Advance6 />} />
          <Route path='/4' element={<Advance7 />} />
          <Route path="/5" element={<Advance8 />} />
          <Route path='/6' element={<Advance9 />} />
          <Route path='/7' element={<Advance10 />} />
          <Route path="/mentorship" element={<Corporate2 />} />
          <Route path="/1.1" element={<Advance11 />} />
          <Route path="/2.1" element={<Advance12 />} />
          <Route path="/3.1" element={<Advance13 />} />
          <Route path="/4.1" element={<Advance14 />} />
          <Route path="/5.1" element={<Advance15 />} />
          <Route path="/6.1" element={<Advance16 />} />
          <Route path="/7.1" element={<Advance17 />} />
          <Route path="/foreign" element={<Corporate3 />} />
          <Route path="/1.1.1" element={<Advance18 />} />
          <Route path="/2.1.1" element={<Advance19 />} />
          <Route path="/3.1.1" element={<Advance20 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
