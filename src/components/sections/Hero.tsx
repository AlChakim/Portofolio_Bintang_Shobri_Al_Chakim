import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowDown, FileText, Mail, Linkedin, Github, MapPin, Cpu, ArrowUpRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Magnetic } from '../animation/Magnetic';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const { tr } = useLanguage();
  const [profileImgError, setProfileImgError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.11, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 28 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.18 },
    },
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    if (!target.dataset.fallbackTried) {
      target.dataset.fallbackTried = '1';
      target.src = './images/profile/profile-photo-placeholder.png';
    } else {
      setProfileImgError(true);
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-x-hidden bg-white bg-grid-blue pt-28 pb-6 sm:pt-32 sm:pb-8"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 sm:mb-10 sm:pb-6"
        >
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
            <span className="font-extrabold text-slate-950">BINTANG SHOBRI AL CHAKIM</span>
            <span className="text-slate-300">•</span>
            <span className="text-blue-700">POLMAN BANDUNG</span>
          </div>

          <div className="hidden items-center gap-3 text-xs font-mono text-slate-600 sm:flex">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-blue-600" />
              <span>Bandung, Indonesia</span>
            </div>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">2024–2028 BATCH</span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 items-center gap-x-6 gap-y-8 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] md:gap-y-0 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-x-10"
        >
          <div className="relative z-20 min-w-0 space-y-5 text-left sm:space-y-6 md:col-start-1 md:row-start-1">
            <motion.div variants={itemVariants}>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3.5 py-1.5 text-xs font-mono font-semibold tracking-tight text-blue-800 shadow-2xs">
                <Cpu className="h-3.5 w-3.5 shrink-0 text-blue-600" />
                <span className="whitespace-normal leading-relaxed">{tr('hero.narrativeBadge')}</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1
                className="max-w-full font-display text-[clamp(1.4rem,7vw,2.4rem)] font-black uppercase leading-[0.86] tracking-tighter text-slate-950 md:text-[clamp(1.5rem,4.3vw,2.875rem)] lg:text-[clamp(2.75rem,4.3vw,3.7rem)]"
              >
                <span className="block whitespace-nowrap">ENGINEERING</span>
                <span className="block whitespace-nowrap text-blue-600">INTELLIGENCE.</span>
                <span className="block whitespace-nowrap">BUILDING</span>
                <span className="block whitespace-nowrap text-outline-light">INDUSTRIAL</span>
                <span className="block whitespace-nowrap">INNOVATION.</span>
              </h1>
            </motion.div>

          </div>

          <div className="relative isolate z-30 mx-auto h-[clamp(18rem,56vh,32rem)] w-full min-w-0 md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:h-[clamp(24rem,78vh,44rem)]">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute right-0 top-3 z-50 flex max-w-full items-center rounded-2xl border border-slate-800 bg-slate-950/90 px-3.5 py-2 text-[11px] font-mono text-white shadow-xl backdrop-blur-md sm:right-2 md:top-[-2.75rem] lg:right-[-1.75rem] lg:top-3"
            >
              <span className="whitespace-nowrap font-semibold text-slate-200">Edge AI &amp; IIoT Focus</span>
            </motion.div>

            {!profileImgError ? (
              <motion.img
                variants={photoVariants}
                src="./images/profile/bintang-profile-transparent.png"
                alt="Bintang Shobri Al Chakim — Industrial Informatics Engineer"
                onError={handleImgError}
                className="absolute bottom-0 right-0 h-full w-auto max-w-full scale-[1.05] select-none object-contain object-bottom drop-shadow-[0_24px_40px_rgba(15,23,42,0.14)] transition-transform duration-700 hover:scale-[1.08] md:h-[140%] md:max-w-[140%] md:scale-[1.07] md:hover:scale-[1.08] lg:bottom-[2.5rem]"
                loading="eager"
                draggable={false}
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center text-center">
                <User className="h-20 w-20 stroke-[1.25] text-slate-400" />
                <span className="mt-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                  Bintang Shobri Al Chakim
                </span>
              </div>
            )}
          </div>

          <div className="relative z-20 min-w-0 space-y-5 text-left sm:space-y-6 md:col-start-1 md:row-start-2">
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg"
            >
              {tr('hero.supporting')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">
              <Magnetic strength={0.2}>
                <a
                  href="#works"
                  className="group inline-flex max-w-full items-center gap-2.5 rounded-xl bg-slate-950 px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-md shadow-slate-950/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 sm:px-7 sm:py-4"
                >
                  <span>{tr('hero.exploreWorks')}</span>
                  <ArrowDown className="h-4 w-4 shrink-0 text-blue-400 transition-transform group-hover:translate-y-0.5 group-hover:text-white" />
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <button
                  onClick={onOpenCvModal}
                  className="group inline-flex max-w-full items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 shadow-2xs transition-all duration-300 hover:border-blue-400 hover:bg-slate-50 sm:px-6 sm:py-4"
                >
                  <FileText className="h-4 w-4 shrink-0 text-blue-600" />
                  <span>{tr('nav.downloadCv')}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </button>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  className="inline-flex max-w-full items-center gap-2 rounded-xl px-4 py-3.5 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 transition-colors hover:text-blue-600 sm:px-5 sm:py-4"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{tr('hero.contactMe')}</span>
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200/80 pt-5 font-mono text-xs text-slate-600 sm:mt-10 sm:pt-6"
        >
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/bintang-shobri-al-chakim-5bb4a1319/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-700 transition-colors hover:text-blue-600"
            >
              <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" />
              <span>LinkedIn ↗</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-slate-700 transition-colors hover:text-blue-600"
            >
              <Github className="h-3.5 w-3.5 text-slate-900" />
              <span>GitHub ↗</span>
            </a>
          </div>

          <span className="hidden text-slate-300 sm:inline">•</span>
          <span className="text-[11px] text-slate-600">
            Audio Video Electronics (SMKN 4) → Industrial Informatics (POLMAN)
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between border-t border-slate-200 px-4 pt-5 font-mono text-[11px] text-slate-600 sm:px-6 sm:pt-6 lg:px-8"
      >
        <a
          href="#about"
          className="group flex items-center gap-2 transition-colors hover:text-blue-600"
        >
          <span className="uppercase tracking-widest">{tr('hero.scrollIndicator')}</span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
        </a>

        <div className="hidden items-center gap-4 text-slate-600 md:flex">
          <span>IIoT</span>
          <span>•</span>
          <span>EDGE AI</span>
          <span>•</span>
          <span>MES / ERP</span>
          <span>•</span>
          <span>ROBOTICS</span>
        </div>
      </motion.div>
    </section>
  );
};
