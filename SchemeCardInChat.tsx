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
  ShieldAlert, 
  IndianRupee, 
  Calendar 
} from 'lucide-react';
import { Scheme } from '../../types';
import { useProfile } from '../../context/ProfileContext';
import { TrustBadge } from '../common/TrustBadge';

interface SchemeCardInChatProps {
  scheme: Scheme;
}

export const SchemeCardInChat: React.FC<SchemeCardInChatProps> = ({ scheme }) => {
  const { isSchemeSaved, toggleSaveScheme, openSchemeModal, t } = useProfile();
  const saved = isSchemeSaved(scheme.id);

  return (
    <div className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-4 sm:p-5 shadow-subtle transition-all my-3 max-w-full text-left">
      
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
            {scheme.level === 'Central' ? (
              <TrustBadge type="central" size="sm" />
            ) : (
              <TrustBadge type="state" text={scheme.state || 'State'} size="sm" />
            )}
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-700 rounded-full capitalize">
              {scheme.category.replace('_', ' ')}
            </span>
            <span className="text-[10px] text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {t('scheme_last_verified')} {scheme.lastVerifiedDate}
            </span>
          </div>

          <h4 
            onClick={() => openSchemeModal(scheme)}
            className="text-base font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors leading-snug"
          >
            {scheme.name}
          </h4>

          <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{scheme.ministry}</span>
          </p>
        </div>

        {/* Save/Bookmark action */}
        <button
          onClick={() => toggleSaveScheme(scheme.id)}
          className={`p-2 rounded-xl border transition-colors shrink-0 ${
            saved 
              ? 'bg-blue-50 text-blue-600 border-blue-200' 
              : 'text-slate-400 hover:text-slate-600 border-slate-200 hover:bg-slate-50'
          }`}
          title={saved ? 'Saved in Dashboard' : 'Save Scheme'}
          aria-label={saved ? 'Remove bookmark' : 'Bookmark scheme'}
        >
          {saved ? <BookmarkCheck className="w-4 h-4 fill-blue-600" /> : <Bookmark className="w-4 h-4" />}
        </button>
      </div>

      {/* Why it may apply to you / Matching Highlights */}
      <div className="mt-3 p-3 bg-blue-50/60 border border-blue-100 rounded-xl space-y-1.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-900">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>{t('scheme_why_match')}</span>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          {scheme.tagline || scheme.briefDescription}
        </p>
      </div>

      {/* Benefit Highlight */}
      {scheme.maxBenefitAmount && (
        <div className="mt-3 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-center justify-between">
          <span className="text-xs font-semibold text-emerald-900 flex items-center gap-1">
            <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
            {t('scheme_key_benefit')}
          </span>
          <span className="text-xs font-bold text-emerald-800">
            {scheme.maxBenefitAmount}
          </span>
        </div>
      )}

      {/* Eligibility Checklist Summary */}
      <div className="mt-3 space-y-1">
        <div className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
          {t('scheme_eligibility_tab')}
        </div>
        <ul className="text-xs text-slate-600 space-y-1">
          {scheme.eligibilityDescription.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Required Documents */}
      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
        <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
          <FileText className="w-3 h-3 text-slate-400" />
          {t('scheme_req_docs')}
        </span>
        {scheme.requiredDocuments.slice(0, 3).map((doc, idx) => (
          <span key={idx} className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-700 rounded-md border border-slate-200">
            {doc.name}
          </span>
        ))}
        {scheme.requiredDocuments.length > 3 && (
          <span className="text-[10px] text-slate-400 font-medium">
            +{scheme.requiredDocuments.length - 3} more
          </span>
        )}
      </div>

      {/* Advisory Note */}
      <div className="mt-3 text-[11px] text-amber-800 bg-amber-50/80 p-2 rounded-lg border border-amber-200/60 flex items-start gap-1.5">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
        <span>
          {t('chat_disclaimer_short')} {t('chat_no_form_notice')}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          onClick={() => openSchemeModal(scheme)}
          className="w-full py-2 px-3 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
        >
          <span>{t('scheme_view_details')}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={scheme.officialPortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
          title="Opens official government portal"
        >
          <span>{t('scheme_official_portal')}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
