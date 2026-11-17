import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { skillsData } from '../../data/skillsData';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import { Cpu, Radio, Bot, Layers, Code2, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const { lang, tr, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].id);

  const iconMap: Record<string, React.ElementType> = {
    Eye: Cpu,
    Radio: Radio,
    Bot: Bot,
    Layers: Layers,
    Code2: Code2,
  };

  return (
    <section id="expertise" className="py-24 sm:py-36 bg-white relative border-t border-slate-200 overflow-hidden">
      {/* Anchor for backward compatibility with #skills */}
      <span id="skills" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="02"
          category={t('TECHNICAL DISCIPLINES', 'BIDANG KEAHLIAN TEKNIS')}
          title={tr('expertise.title')}
          titleOutline={tr('expertise.titleOutline')}
          titleAccent={tr('expertise.titleAccent')}
          description={tr('expertise.desc')}
        />

        {/* Editorial Interactive Matrix: Split Composition (Category Selector on Left, Deep Capabilities on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: 5 Category Selector Rows (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 mb-4">
              {t('Select Discipline to Inspect:', 'Pilih Bidang untuk Memeriksa:')}
            </p>

            <div className="space-y-2.5">
              {skillsData.map((category, idx) => {
                const isSelected = activeCategory === category.id;
                const IconComponent = iconMap[category.icon] || Cpu;

                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-slate-950 text-white border-slate-900 shadow-md shadow-slate-950/15'
                        : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono font-extrabold text-sm ${
                          isSelected ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-600'
                        }`}
                      >
                        0{idx + 1}
                      </span>

                      <div className="space-y-0.5">
                        <h3 className="font-display font-bold text-sm sm:text-base tracking-tight leading-snug">
                          {category.title[lang]}
                        </h3>
                        <p
                          className={`text-xs font-mono line-clamp-1 ${
                            isSelected ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          {category.description[lang]}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-xl transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Detailed Capability Breakdown & Verified Context (7 cols) */}
          <div className="lg:col-span-7">
            {skillsData.map(category => {
              if (category.id !== activeCategory) return null;
              const IconComponent = iconMap[category.icon] || Cpu;

              return (
                <Reveal key={category.id} direction="up" distance={20} className="space-y-6">
                  {/* Category Header Card */}
                  <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm shadow-blue-500/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
                            {t('Active Discipline Scope', 'Cakupan Bidang Aktif')}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-display font-black text-slate-950">
                            {category.title[lang]}
                          </h3>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-mono font-bold text-slate-600 bg-white border border-slate-200">
                        {category.skills.length} {t('Key Capabilities', 'Kompetensi Inti')}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {category.description[lang]}
                    </p>
                  </div>

                  {/* Editorial Capability Rows (No Chunky Badges) */}
                  <div className="divide-y divide-slate-150 border-y border-slate-150">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-4.5 px-3 hover:bg-slate-50/80 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 group-hover:scale-150 transition-transform" />
                          <span className="font-display font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                            {skill.name}
                          </span>
                        </div>

                        {skill.context && (
                          <div className="sm:text-right pl-4.5 sm:pl-0">
                            <span className="text-xs font-mono text-slate-600 group-hover:text-slate-800 transition-colors">
                              {skill.context}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Verification Notice */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-600">
                    <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{t('Verified in prototypes & competitions', 'Terverifikasi pada purwarupa & kompetisi')}</span>
                    </span>
                    <span className="text-slate-600">
                      No synthetic skill percentage claims
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
