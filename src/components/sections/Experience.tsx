import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { experienceData } from '../../data/experienceData';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import { Calendar, MapPin, Building2, CheckCircle2, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang, tr, t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-36 bg-white relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="04"
          category={t('ORGANIZATIONAL LEADERSHIP & MENTORSHIP', 'KEPEMIMPINAN ORGANISASI & MENTORSHIP')}
          title={tr('experience.title')}
          titleOutline={tr('experience.titleOutline')}
          titleAccent={tr('experience.titleAccent')}
          description={tr('experience.desc')}
        />

        {/* Editorial Interactive Timeline Cards */}
        <div className="space-y-8 sm:space-y-10">
          {experienceData.map((exp, idx) => (
            <Reveal key={exp.id} direction="up" delay={idx * 0.1} distance={20}>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-2xs hover:shadow-card group">
                {/* Header Row: Role, Organization, Period */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-black text-xl text-blue-600">
                        0{idx + 1}
                      </span>
                      <span className="w-4 h-[1px] bg-slate-300" />
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        <Award className="w-3.5 h-3.5" />
                        <span>{t('Active Leadership', 'Kepengurusan Aktif')}</span>
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-950 tracking-tight">
                      {exp.role[lang]}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>{exp.institution}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Period Badge */}
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold text-slate-800 bg-white border border-slate-200 shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities & Achievements List */}
                <div className="py-6 space-y-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    {t('Key Responsibilities & Scope:', 'Tanggung Jawab & Ruang Lingkup Utama:')}
                  </span>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {exp.highlights[lang].map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed p-3 rounded-xl bg-white border border-slate-150"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scope & Competencies Pills */}
                <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-500 mr-2">
                    Scope:
                  </span>
                  {exp.technologies.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 bg-white border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
