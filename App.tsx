import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ProfileProvider, useProfile } from './context/ProfileContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SchemeDetailsModal } from './components/schemes/SchemeDetailsModal';

import { HomePage } from './pages/HomePage';
import { AssistantPage } from './pages/AssistantPage';
import { SchemesPage } from './pages/SchemesPage';
import { SchemeDetailPage } from './pages/SchemeDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage, SignupPage } from './pages/AuthPages';

// Scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Global modal overlay wrapper
const GlobalSchemeModal: React.FC = () => {
  const { selectedSchemeForModal, closeSchemeModal } = useProfile();
  return (
    <SchemeDetailsModal
      scheme={selectedSchemeForModal}
      onClose={closeSchemeModal}
    />
  );
};

export const AppContent: React.FC = () => {
  const location = useLocation();
  const isAssistantPage = location.pathname === '/assistant';

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/schemes" element={<SchemesPage />} />
          <Route path="/schemes/:id" element={<SchemeDetailPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Render Footer everywhere except inside full-height /assistant workspace */}
      {!isAssistantPage && <Footer />}

      <GlobalSchemeModal />
    </div>
  );
};

export default function App() {
  return (
    <ProfileProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ProfileProvider>
  );
}
