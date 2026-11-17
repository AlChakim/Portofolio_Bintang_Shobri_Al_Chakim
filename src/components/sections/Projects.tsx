import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { projectsData } from '../../data/projectsData';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { Award, ArrowUpRight, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const { lang, tr, t } = useLanguage();

  const mandor = projectsData.find(p => p.id === 'mandor') || projectsData[0];
  const simandiri = projectsData.find(p => p.id === 'simandiri') || projectsData[1];
  const maestro = projectsData.find(p => p.id === 'maestro') || projectsData[2];
  const robotics = projectsData.find(p => p.id === 'mobile-robotics') || projectsData[3];
  const additionalProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="works" className="py-24 sm:py-36 bg-[#F8FAFC] relative border-t border-slate-200 overflow-hidden">
      {/* Anchor for backward compatibility with #projects */}
      <span id="projects" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="03"
          category={t('SELECTED WORKS & CASE STUDIES', 'KARYA TERPILIH & STUDI KASUS')}
          title={tr('works.title')}
          titleOutline={tr('works.titleOutline')}
          titleAccent={tr('works.titleAccent')}
          description={tr('works.desc')}
        />

        {/* =========================================================================
            SHOWCASE 01: MANDOR (FLAGSHIP HERO SHOWCASE - 1ST PLACE KMIPN VIII 2026)
           ========================================================================= */}
        <Reveal direction="up" distance={25} className="mb-20 sm:mb-28">
          <article className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-card-hover group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Context, Narrative, Tech (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono font-black text-3xl sm:text-4xl text-blue-600">
                    01
                  </span>
                  <span className="w-6 h-[1px] bg-slate-300" />
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>1st Place — KMIPN VIII 2026</span>
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    IoT Category
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-950 tracking-tight">
                    {mandor.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 mt-1">
                    {mandor.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {mandor.shortDescription}
                </p>

                {/* Key Technical Highlights */}
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs font-mono space-y-2">
                  <span className="font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span>Core Engineering Stack</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Google Coral Edge TPU • Multi-Axis Accelerometer • MQTT Telemetry • Unity VR Digital Twin • Vibration Spectral Diagnostics
                  </p>
                </div>

                {/* Personal Scope & Contribution */}
                <div className="text-xs font-mono text-slate-600 space-y-1">
                  <span className="font-bold text-slate-900 uppercase tracking-wider">
                    {t('Personal Contribution:', 'Kontribusi Pribadi:')}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {mandor.personalContribution[lang]}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="pt-2">
                  <Link
                    to={`/projects/${mandor.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-blue-600 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md group/btn"
                  >
                    <span>{tr('works.viewCaseStudy')}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Preview & Architecture Blueprint (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group-hover:border-blue-200 transition-colors">
                  <ImagePlaceholder
                    src={mandor.images[0]?.src || './images/mandor/mandor-prototype-placeholder.png'}
                    alt={mandor.title}
                    type="hardware"
                    aspectRatio="video"
                    className="border-0 shadow-none rounded-none"
                  />

                  {/* Overlay Metadata Strip */}
                  <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-slate-150 flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-900">
                      Edge AI & Physical Sensor Interface
                    </span>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-200 text-[10px]">
                      VERIFIED WINNER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* =========================================================================
            SHOWCASE 02 & 03: SIMANDIRI & MAESTRO (SPLIT ASYMMETRIC GRID)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 mb-20 sm:mb-28">
          {/* Showcase 02: SIMANDIRI (2nd Place Teknocom) */}
          <Reveal direction="up" delay={0.1} distance={20}>
            <article className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-2xl text-blue-600">02</span>
                    <span className="w-4 h-[1px] bg-slate-300" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      WORKPLACE SAFETY IoT
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>2nd Place — Teknocom 2026</span>
                  </span>
                </div>

                {/* Preview Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <ImagePlaceholder
                    src={simandiri.images[0]?.src || './images/simandiri/simandiri-logo.png'}
                    alt={simandiri.title}
                    type="vision"
                    aspectRatio="video"
                    className="border-0 shadow-none rounded-none"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 tracking-tight">
                    {simandiri.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                    {simandiri.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {simandiri.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {simandiri.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-150 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Computer Vision & Gate IoT
                </span>
                <Link
                  to={`/projects/${simandiri.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>{tr('works.viewCaseStudy')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Showcase 03: MAESTRO (3rd Place 4Force) */}
          <Reveal direction="up" delay={0.2} distance={20}>
            <article className="h-full p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between group">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-2xl text-blue-600">03</span>
                    <span className="w-4 h-[1px] bg-slate-300" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                      SMART MANUFACTURING
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    <span>3rd Place — 4Force 2026</span>
                  </span>
                </div>

                {/* Preview Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                  <ImagePlaceholder
                    src={maestro.images[0]?.src || './images/maestro/maestro-prototype-placeholder.png'}
                    alt={maestro.title}
                    type="diagram"
                    aspectRatio="video"
                    className="border-0 shadow-none rounded-none"
                  />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 tracking-tight">
                    {maestro.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                    {maestro.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {maestro.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {maestro.technologies.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-slate-150 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  MES / ERP & VR Digital Twin
                </span>
                <Link
                  to={`/projects/${maestro.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>{tr('works.viewCaseStudy')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>

        {/* =========================================================================
            SHOWCASE 04: AUTONOMOUS MOBILE ROBOTICS (FULL-WIDTH EXHIBIT)
           ========================================================================= */}
        <Reveal direction="up" distance={25} className="mb-20 sm:mb-28">
          <article className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white border border-slate-800 hover:border-blue-500 transition-all duration-300 shadow-xl group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Robotics Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono font-black text-3xl text-blue-400">04</span>
                  <span className="w-6 h-[1px] bg-slate-700" />
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-950/80 text-blue-300 border border-blue-800 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    <span>Top 5 — FUTURA Transporter 2025</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    & 4th Place SGD 2024
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
                    {robotics.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mt-1">
                    {robotics.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {robotics.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {robotics.technologies.slice(0, 6).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    to={`/projects/${robotics.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md group/btn"
                  >
                    <span>{tr('works.viewCaseStudy')}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right: Robotics Visual Preview (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                  <ImagePlaceholder
                    src={robotics.images[0]?.src || './images/robotics/robotics-placeholder.png'}
                    alt={robotics.title}
                    type="robotics"
                    aspectRatio="video"
                    className="border-0 shadow-none rounded-none"
                  />
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* =========================================================================
            ADDITIONAL VERIFIED PROJECTS (CLEAN EDITORIAL LIST)
           ========================================================================= */}
        <div className="space-y-8">
          <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600">
                04 / SUPPLEMENTAL CASE STUDIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 uppercase">
                {t('Additional Systems & Research', 'Proyek & Eksperimen Tambahan')}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              {additionalProjects.length} {t('Documented Projects', 'Proyek Terdokumentasi')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProjects.map((project, idx) => (
              <Reveal key={project.id} direction="up" delay={idx * 0.08} distance={15}>
                <article className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all flex flex-col justify-between h-full group shadow-2xs hover:shadow-sm">
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 inline-block">
                      {project.category}
                    </span>

                    <h4 className="font-display font-bold text-base text-slate-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-150 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-600">
                      Case Study
                    </span>
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
