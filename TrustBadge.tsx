import React from 'react';
import { ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';

interface TrustBadgeProps {
  type?: 'verified' | 'central' | 'state' | 'department';
  text?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const TrustBadge: React.FC<TrustBadgeProps> = ({
  type = 'verified',
  text,
  size = 'sm',
  className = ''
}) => {
  if (type === 'verified') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 ${
          size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
        } ${className}`}
      >
        <CheckCircle2 className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-emerald-600 shrink-0`} />
        <span>{text || 'Official Verified Source'}</span>
      </span>
    );
  }

  if (type === 'central') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-blue-50 text-blue-800 border border-blue-200/80 ${
          size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
        } ${className}`}
      >
        <Building2 className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-blue-600 shrink-0`} />
        <span>{text || 'Central Sector Scheme'}</span>
      </span>
    );
  }

  if (type === 'state') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-indigo-50 text-indigo-800 border border-indigo-200/80 ${
          size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
        } ${className}`}
      >
        <Building2 className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-indigo-600 shrink-0`} />
        <span>{text || 'State Government Scheme'}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-slate-100 text-slate-700 border border-slate-200 ${
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      } ${className}`}
    >
      <ShieldCheck className={`${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} text-slate-500 shrink-0`} />
      <span>{text || 'Government Digital Service'}</span>
    </span>
  );
};
