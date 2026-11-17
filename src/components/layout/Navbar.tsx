import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const { lang, setLang, tr } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '';

  const navLinks = [
    { id: 'home', label: tr('nav.home'), href: isHomePage ? '#home' : '/#home' },
    { id: 'about', label: tr('nav.about'), href: isHomePage ? '#about' : '/#about' },
    { id: 'works', label: tr('nav.works'), href: isHomePage ? '#works' : '/#works' },
    { id: 'experience', label: tr('nav.experience'), href: isHomePage ? '#experience' : '/#experience' },
    { id: 'achievements', label: tr('nav.achievements'), href: isHomePage ? '#achievements' : '/#achievements' },
    { id: 'contact', label: tr('nav.contact'), href: isHomePage ? '#contact' : '/#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (isHomePage) {
        const sections = ['home', 'about', 'works', 'experience', 'achievements', 'contact'];
        const scrollPosition = window.scrollY + 140;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-subtle py-3'
          : 'bg-white/70 backdrop-blur-xs py-4 sm:py-5 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Personal Logo & Brand Mark */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-950 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:bg-blue-600 transition-colors duration-300">
              <span className="font-display font-black text-xs sm:text-sm tracking-wider">
                BS
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-blue-500 border-2 border-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors">
                  BINTANG<span className="text-blue-600">.</span>
                </span>
                <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase text-blue-700 bg-blue-50 border border-blue-200/80">
                  POLMAN
                </span>
              </div>
              <span className="text-[10px] text-slate-600 font-mono tracking-tight hidden sm:block">
                Industrial Informatics Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 backdrop-blur-sm p-1.5 rounded-full border border-slate-200/80">
            {navLinks.map(link => {
              const isActive = isHomePage && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-slate-950 rounded-full shadow-xs -z-10"
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Controls: Language Selector & CV CTA */}
          <div className="flex items-center gap-3">
            {/* Segmented Language Selector (EN / ID) */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100/90 border border-slate-200/80 text-[11px] font-mono font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-white text-blue-700 shadow-2xs font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  lang === 'id'
                    ? 'bg-white text-blue-700 shadow-2xs font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                aria-label="Switch to Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Curriculum Vitae Button */}
            <button
              onClick={onOpenCvModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20 hover:-translate-y-0.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100/80 border border-slate-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-lg px-6 py-6 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map(link => {
                const isActive = isHomePage && activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-mono font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-md shadow-blue-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>{tr('nav.downloadCv')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
