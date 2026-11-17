import React from 'react';
import { CheckCircle2, Clock, PlayCircle, AlertCircle } from 'lucide-react';
import { ProjectStatusItem } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatusItem['status'];
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const getBadgeConfig = () => {
    switch (status) {
      case 'Implemented':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
          classes: 'bg-emerald-50 text-emerald-800 border-emerald-200',
          label: 'Implemented'
        };
      case 'Tested':
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />,
          classes: 'bg-blue-50 text-blue-800 border-blue-200',
          label: 'Tested'
        };
      case 'Developed':
        return {
          icon: <PlayCircle className="w-3.5 h-3.5 text-indigo-600" />,
          classes: 'bg-indigo-50 text-indigo-800 border-indigo-200',
          label: 'Developed'
        };
      case 'In Development':
        return {
          icon: <Clock className="w-3.5 h-3.5 text-amber-600" />,
          classes: 'bg-amber-50 text-amber-800 border-amber-200',
          label: 'In Development'
        };
      case 'Planned':
      default:
        return {
          icon: <AlertCircle className="w-3.5 h-3.5 text-slate-500" />,
          classes: 'bg-slate-100 text-slate-700 border-slate-200',
          label: 'Planned'
        };
    }
  };

  const config = getBadgeConfig();
  const sizeClasses = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${config.classes} ${sizeClasses}`}>
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};
