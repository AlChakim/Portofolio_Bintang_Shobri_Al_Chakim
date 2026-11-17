import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { journeyData } from '../../data/journeyData';
import { CheckCircle2 } from 'lucide-react';

export const Journey: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="journey" className="py-24 sm:py-32 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-16 border-b border-slate-200 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
              05 / ENGINEERING TIMELINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
              DEVELOPMENT JOURNEY<span className="text-blue-600">.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 font-mono max-w-md">
            {t(
              'Continuous progression from bare-metal microcontroller circuits to multi-modal Edge AI and smart factory digital twins.',
              'Perkembangan berkelanjutan dari sirkuit mikrokontroler mendasar menuju Edge AI multi-modal dan sistem digital twin pabrik cerdas.'
            )}
          </p>
        </div>

        {/* Minimalist Architectural Timeline */}
        <div className="space-y-12">
          {journeyData.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pb-12 border-b border-slate-150 last:border-b-0 items-start group"
            >
              {/* Phase & Period (3 cols) */}
              <div className="md:col-span-3 space-y-1">
                <span className="text-2xl sm:text-3xl font-mono font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                  0{index + 1}
                </span>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">
                  {item.stage}
                </p>
                <p className="text-xs text-slate-500 font-mono">
                  {item.period}
                </p>
              </div>

              {/* Title & Description (6 cols) */}
              <div className="md:col-span-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title[lang]}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description[lang]}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono text-slate-600 bg-slate-50 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Takeaway / Outcome (3 cols) */}
              <div className="md:col-span-3 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-1.5 text-blue-700 font-bold font-mono text-[11px] uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Engineering Outcome</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {item.keyOutcome[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
