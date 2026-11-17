import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { awardsData } from '../../data/awardsData';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../animation/Reveal';
import { Trophy, Calendar, MapPin, Globe2, CheckCircle2, Award, Sparkles, Filter } from 'lucide-react';

export const Awards: React.FC = () => {
  const { lang, tr, t } = useLanguage();
  const [filterType, setFilterType] = useState<'all' | 'victory' | 'finalist' | 'training'>('all');

  const filteredAwards = awardsData.filter(item => {
    if (filterType === 'all') return true;
    if (filterType === 'victory') return item.awardType === 'victory';
    if (filterType === 'finalist') return item.awardType === 'finalist' || item.awardType === 'qualifier';
    if (filterType === 'training') return item.awardType === 'training' || item.awardType === 'participation';
    return true;
  });

  return (
    <section id="achievements" className="py-24 sm:py-36 bg-[#F8FAFC] relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          index="05"
          category={t('HONORS & COMPETITIVE ACHIEVEMENTS', 'PENGHARGAAN & PRESTASI KOMPETISI')}
          title={tr('achievements.title')}
          titleOutline={tr('achievements.titleOutline')}
          titleAccent={tr('achievements.titleAccent')}
          description={tr('achievements.desc')}
        />

        {/* Filter Controls (Clear Hierarchy Distinguishing Victories vs Training) */}
        <div className="flex flex-col items-start xl:flex-row xl:items-center xl:justify-between gap-4 pb-8 mb-12 border-b border-slate-200">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Filter className="w-3.5 h-3.5" />
            <span>{t('Filter by Recognition Type:', 'Filter Berdasarkan Kategori:')}</span>
          </div>

          <div className="awards-filter-controls w-full xl:w-auto flex flex-wrap items-center gap-2 text-xs font-mono font-bold">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-950 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {t('All Honors', 'Semua Prestasi')} ({awardsData.length})
            </button>

            <button
              onClick={() => setFilterType('victory')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterType === 'victory'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200'
              }`}
            >
              🏆 {t('Podium Victories', 'Juara 1 & 2')}
            </button>

            <button
              onClick={() => setFilterType('finalist')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterType === 'finalist'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200'
              }`}
            >
              ⭐ {t('Top Finalists & Qualifiers', 'Finalis & Qualifier')}
            </button>

            <button
              onClick={() => setFilterType('training')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                filterType === 'training'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-blue-600 border border-slate-200'
              }`}
            >
              🌐 {t('International Training', 'Pelatihan Internasional')}
            </button>
          </div>
        </div>

        {/* Dynamic Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredAwards.map((award, idx) => {
            const isPodium = award.awardType === 'victory';

            return (
              <Reveal key={award.id} direction="up" delay={idx * 0.08} distance={20}>
                <article
                  className={`h-full p-8 sm:p-10 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-2xs group ${
                    isPodium
                      ? 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-card'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  <div className="space-y-6">
                    {/* Top Row: Rank Badge & Year */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        {isPodium ? (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1.5 shadow-2xs">
                            <Trophy className="w-3.5 h-3.5 text-amber-600" />
                            <span>{award.award}</span>
                          </span>
                        ) : award.awardType === 'training' ? (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                            <Globe2 className="w-3.5 h-3.5 text-purple-600" />
                            <span>{award.award}</span>
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                            <Award className="w-3.5 h-3.5 text-blue-600" />
                            <span>{award.award}</span>
                          </span>
                        )}

                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                          {award.category}
                        </span>
                      </div>

                      <span className="font-mono font-extrabold text-xs text-slate-400">
                        {award.year}
                      </span>
                    </div>

                    {/* Competition Name & Associated System */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl sm:text-2xl font-display font-black text-slate-950 tracking-tight leading-snug">
                        {award.competition}
                      </h3>
                      <p className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
                        Project: <span className="text-slate-900 font-semibold">{award.project}</span>
                      </p>
                    </div>

                    {/* Event Venue & Scale Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-600 p-4 rounded-2xl bg-slate-50 border border-slate-150">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="line-clamp-1">{award.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{award.date}</span>
                      </div>
                      <div className="sm:col-span-2 pt-1.5 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500">
                        <Globe2 className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{award.participantScope}</span>
                      </div>
                    </div>

                    {/* Description Narrative */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {award.description[lang]}
                    </p>

                    {/* Key Technical Implementations */}
                    {award.keyImplementation && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>Evaluated Engineering Criteria:</span>
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {award.keyImplementation.map((impl, iIdx) => (
                            <div
                              key={iIdx}
                              className="flex items-center gap-1.5 text-[11px] font-mono text-slate-700"
                            >
                              <CheckCircle2 className="w-3 h-3 text-blue-600 shrink-0" />
                              <span className="line-clamp-1">{impl}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="pt-6 mt-6 border-t border-slate-150 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="font-semibold text-slate-700">
                      Verified Honor • Institutional Archive
                    </span>
                    <span className="text-blue-600 font-bold">
                      {award.rankNumber}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
