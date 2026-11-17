import React from 'react';

interface EditorialBadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'neutral' | 'amber' | 'emerald' | 'outline' | 'dark';
  pulse?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const EditorialBadge: React.FC<EditorialBadgeProps> = ({
  children,
  variant = 'neutral',
  pulse = false,
  className = '',
  size = 'md',
}) => {
  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200/80',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200',
    amber: 'bg-amber-50 text-amber-800 border-amber-200',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    outline: 'bg-transparent text-slate-600 border-slate-300',
    dark: 'bg-slate-900/90 text-slate-300 border-slate-700',
  }[variant];

  const pulseColors = {
    blue: 'bg-blue-600',
    neutral: 'bg-slate-500',
    amber: 'bg-amber-500',
    emerald: 'bg-emerald-500',
    outline: 'bg-slate-400',
    dark: 'bg-blue-400',
  }[variant];

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono font-medium border tracking-wide uppercase ${sizeStyles} ${variantStyles} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColors}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${pulseColors}`}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};

