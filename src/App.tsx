import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { CvModal } from './components/ui/CvModal';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { CustomCursor } from './components/ui/CustomCursor';
import { AnimatePresence, motion } from 'framer-motion';

const AnimatedRoutes: React.FC<{ onOpenCvModal: () => void }> = ({ onOpenCvModal }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route
            path="/"
            element={<Home onOpenCvModal={onOpenCvModal} />}
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route
            path="*"
            element={<Home onOpenCvModal={onOpenCvModal} />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <CustomCursor />
        <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-600 selection:text-white">
          <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

          <main className="flex-1">
            <AnimatedRoutes onOpenCvModal={() => setIsCvModalOpen(true)} />
          </main>

          <Footer />

          {/* CV Access Modal */}
          <CvModal
            isOpen={isCvModalOpen}
            onClose={() => setIsCvModalOpen(false)}
          />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
