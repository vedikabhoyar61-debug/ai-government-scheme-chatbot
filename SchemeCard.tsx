import React from 'react';
import { 
  Building2, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  IndianRupee
} from 'lucide-react';
import { Scheme } from '../../types';
import { useProfile } from '../../context/ProfileContext';
import { TrustBadge } from '../common/TrustBadge';

interface SchemeCardProps {
  scheme: Scheme;
  matchScore?: number;
  matchReasons?: string[];
  onViewDetails?: (scheme: Scheme) => void;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  scheme,
  matchReasons,
  onViewDetails
}) => {
  const { isSchemeSaved, toggleSaveScheme, openSchemeModal, t } = useProfile();
  const saved = isSchemeSaved(scheme.id);

  const handleOpenDetails = () => {
    if (onViewDetails) {
      onViewDetails(scheme);
    } else {
      openSchemeModal(scheme);
    }
  };

  return (
    <div className="gov-card flex flex-col h-full group bg-white border border-[#E2E8F0] hover:border-blue-300 transition-all">
      
      {/* Card Header */}
      <div className="p-5 pb-3">
        
        {/* Badges row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {scheme.level === 'Central' ? (
              <TrustBadge type="central" size="sm" />
            ) : (
              <TrustBadge type="state" text={scheme.state || t('scheme_state_scheme')} size="sm" />
            )}
            
            <span className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-700 rounded-full capitalize">
              {scheme.category.replace('_', ' ')}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => toggleSaveScheme(scheme.id)}
            className={`p-1.5 rounded-lg border transition-colors ${
              saved 
                ? 'bg-blue-50 text-blue-600 border-blue-200' 
                : 'text-slate-400 hover:text-slate-600 border-transparent hover:bg-slate-50'
            }`}
            title={saved ? 'Saved to Dashboard' : 'Save Scheme'}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark scheme'}
          >
            {saved ? <BookmarkCheck className="w-4 h-4 fill-blue-600" /> : <Bookmark className="w-4 h-4" />}
          </button>
        </div>

        {/* Scheme Title */}
        <h3 
          onClick={handleOpenDetails}
          className="text-base font-bold text-slate-900 group-hover:text-blue-600 cursor-pointer transition-colors leading-snug line-clamp-2"
        >
          {scheme.name}
        </h3>

        {/* Ministry / Department */}
        <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1 line-clamp-1">
          <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>{scheme.ministry}</span>
        </p>

        {/* Tagline / Brief */}
        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-2">
          {scheme.tagline || scheme.briefDescription}
        </p>
      </div>

      {/* Match reasons if present */}
      {matchReasons && matchReasons.length > 0 && (
        <div className="mx-5 mb-3 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-xl text-xs text-emerald-900">
          <div className="flex items-center gap-1 font-semibold text-emerald-800 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('scheme_why_match')}</span>
          </div>
          <ul className="space-y-0.5 text-[11px] text-emerald-700 list-disc list-inside">
            {matchReasons.slice(0, 2).map((r, i) => (
              <li key={i} className="truncate">{r}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Benefit Highlight Bar */}
      {scheme.maxBenefitAmount && (
        <div className="mx-5 mb-3 px-3 py-2 bg-blue-50/60 border border-blue-100/80 rounded-xl flex items-center justify-between">
          <span className="text-[11px] font-semibold text-blue-900 flex items-center gap-1">
            <IndianRupee className="w-3.5 h-3.5 text-blue-600" />
            {t('scheme_key_benefit')}
          </span>
          <span className="text-xs font-bold text-blue-700 text-right">
            {scheme.maxBenefitAmount}
          </span>
        </div>
      )}

      {/* Quick eligibility & documents snapshot */}
      <div className="px-5 pb-4 space-y-2 mt-auto">
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>{scheme.requiredDocuments.length} {t('scheme_req_docs')}</span>
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>{t('scheme_last_verified')} {scheme.lastVerifiedDate}</span>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2">
          <button
            onClick={handleOpenDetails}
            className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1"
          >
            <span>{t('scheme_view_details')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <a
            href={scheme.officialPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors flex items-center justify-center gap-1"
            title="Opens official government portal in a new tab"
          >
            <span>{t('scheme_official_portal')}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
