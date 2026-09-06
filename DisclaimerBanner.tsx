import React from 'react';
import { ShieldAlert, ExternalLink } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  const { t } = useProfile();

  if (compact) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-start gap-2.5 text-xs text-slate-600">
        <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-800">Informational Guidance Notice: </span>
          {t('disclaimer_desc')}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50/70 via-slate-50 to-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-subtle">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">
              {t('disclaimer_title')}
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-3xl">
              {t('disclaimer_desc')}
            </p>
          </div>
        </div>
        <a
          href="/about"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 shrink-0 hover:underline"
        >
          <span>Learn about verification</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
