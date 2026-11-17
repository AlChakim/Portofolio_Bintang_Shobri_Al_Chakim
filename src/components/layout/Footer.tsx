import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useLocation } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { tr, t } = useLanguage();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: tr('nav.home'), href: isHomePage ? '#home' : '/#home' },
    { label: tr('nav.about'), href: isHomePage ? '#about' : '/#about' },
    { label: tr('nav.works'), href: isHomePage ? '#works' : '/#works' },
    { label: tr('nav.experience'), href: isHomePage ? '#experience' : '/#experience' },
    { label: tr('nav.achievements'), href: isHomePage ? '#achievements' : '/#achievements' },
    { label: tr('nav.contact'), href: isHomePage ? '#contact' : '/#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white text-slate-700 text-xs py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive Editorial Typographic Banner (Reference: Matthew / Dymas Alfin) */}
        <div className="pb-14 sm:pb-20 border-b border-slate-200 overflow-hidden">
          <p className="text-xs font-mono font-bold tracking-widest uppercase text-blue-600 mb-3">
            {t('ENGINEERING THE FUTURE • INDUSTRIAL INFORMATICS', 'REKAYASA MASA DEPAN • INFORMATIKA INDUSTRI')}
          </p>
          <div className="overflow-hidden">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-tighter uppercase leading-[0.88] text-slate-900 select-none break-words">
              BINTANG <span className="text-outline-light">SHOBRI</span> AL CHAKIM<span className="text-blue-600">.</span>
            </h2>
          </div>
        </div>

        {/* 3-Column Editorial Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-12 sm:py-16 border-b border-slate-200 items-start">
          {/* Identity & Institutional Scope (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-slate-950 flex items-center justify-center text-white font-display font-black text-xs shadow-xs">
                BS
              </div>
              <span className="font-display font-black text-slate-900 text-base tracking-tight uppercase">
                BINTANG SHOBRI AL CHAKIM<span className="text-blue-600">.</span>
              </span>
            </div>

            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm max-w-sm">
              {t(
                'Industrial Informatics Engineering student at Politeknik Manufaktur Negeri Bandung. Bridging hardware architectures, Edge AI, and industrial software systems.',
                'Mahasiswa Teknologi Rekayasa Informatika Industri di Politeknik Manufaktur Negeri Bandung. Menjembatani arsitektur hardware, Edge AI, dan sistem perangkat lunak industri.'
              )}
            </p>

            <div className="flex items-center gap-2 text-slate-600 font-mono text-xs">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Bandung, West Java, Indonesia</span>
            </div>
          </div>

          {/* Quick Editorial Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-mono font-bold text-slate-950 uppercase tracking-widest text-[11px]">
              {t('Navigation', 'Navigasi')}
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              {navLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-slate-300 group-hover:text-blue-600 transition-colors">/</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Professional Channels (4 cols) */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="font-mono font-bold text-slate-950 uppercase tracking-widest text-[11px]">
              {t('Verified Channels', 'Kanal Terverifikasi')}
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs font-mono">
              <a
                href="https://www.linkedin.com/in/bintang-shobri-al-chakim-5bb4a1319/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 text-slate-700 hover:text-blue-700 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span className="font-semibold">LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="mailto:bintangalchakim@gmail.com"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 text-slate-700 hover:text-blue-700 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold">bintangalchakim@gmail.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50/80 border border-slate-200 text-slate-700 hover:text-blue-700 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-slate-900" />
                  <span className="font-semibold">GitHub Inquiries</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-600">
          <p>
            © {new Date().getFullYear()} Bintang Shobri Al Chakim. {tr('footer.allRightsReserved')}.
          </p>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-600">
              POLMAN Bandung • D4 Teknologi Rekayasa Informatika Industri
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-700 transition-colors shadow-2xs font-bold"
              aria-label="Back to top"
            >
              <span>{tr('footer.backToTop')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
