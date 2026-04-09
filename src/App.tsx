import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ValueProps from './components/ValueProps';
import Pricing from './components/Pricing';
import Results from './components/Results';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Scene3D from './components/Scene3D';
import CustomCursor from './components/CustomCursor';

// New Content Pages
import HowItWorksPage from './pages/HowItWorksPage';
import TheEdgePage from './pages/TheEdgePage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import SuccessPage from './pages/SuccessPage';

function HomePage({ openModal }: { openModal: () => void }) {
  return (
    <>
      <Hero onGetStarted={openModal} />
      <HowItWorks />
      <ValueProps />
      <Results />
      <Pricing />
      <FAQ />
    </>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#030303] selection:bg-accent/30 selection:text-accent relative">
        <div className="noise-overlay" />
        <Scene3D />
        <CustomCursor />
        
        <Navbar onGetStarted={openModal} />
        
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage openModal={openModal} />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/the-edge" element={<TheEdgePage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </main>

        <Footer />

        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
}
