import React from 'react';
import { Reveal } from '../animation/Reveal';

interface SectionHeaderProps {
  index: string;
  category: string;
  title: string;
  titleAccent?: string;
  titleOutline?: string;
  description?: string;
  theme?: 'light' | 'dark';
  align?: 'left' | 'between';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  index,
  category,
  title,
  titleAccent,
  titleOutline,
  description,
  theme = 'light',
  align = 'between',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`section-header pb-10 mb-14 sm:mb-20 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      } ${
        align === 'between'
          ? 'flex flex-col lg:flex-row lg:items-end justify-between gap-6'
          : 'space-y-4'
      } ${className}`}
    >
      <div className="section-header-copy space-y-3 max-w-3xl">
        {/* Eyebrow with Monospace Index */}
        <Reveal direction="down" distance={15}>
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-widest uppercase">
            <span className="text-blue-500">{index}</span>
            <span className={isDark ? 'text-slate-600' : 'text-slate-300'}>/</span>
            <span className={isDark ? 'text-slate-400' : 'text-slate-500'}>
              {category}
            </span>
          </div>
        </Reveal>

        {/* Massive Editorial Headline */}
        <div className="section-header-headline-wrapper pt-1">
          <h2
            className={`section-header-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight uppercase leading-[0.95] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {title}{' '}
            {titleOutline && (
              <span
                className={
                  isDark
                    ? 'text-outline-dark hover:text-white transition-colors'
                    : 'text-outline-light hover:text-slate-900 transition-colors'
                }
              >
                {titleOutline}{' '}
              </span>
            )}
            {titleAccent && (
              <span className="text-blue-600">{titleAccent}</span>
            )}
            <span className="text-blue-600">.</span>
          </h2>
        </div>
      </div>

      {/* Supporting Editorial Paragraph */}
      {description && (
        <Reveal direction="up" delay={0.15} distance={15} className="section-header-description lg:max-w-md">
          <p
            className={`text-xs sm:text-sm font-mono leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
