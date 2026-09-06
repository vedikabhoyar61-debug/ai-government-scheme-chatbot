import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  CheckSquare, 
  Square, 
  PhoneCall, 
  ShieldCheck, 
  HelpCircle, 
  ListOrdered,
  Calendar,
  IndianRupee,
  Share2,
  Printer
} from 'lucide-react';
import { Scheme } from '../../types';
import { useProfile } from '../../context/ProfileContext';
import { TrustBadge } from '../common/TrustBadge';

interface SchemeDetailsModalProps {
  scheme: Scheme | null;
  onClose: () => void;
}

export const SchemeDetailsModal: React.FC<SchemeDetailsModalProps> = ({ scheme, onClose }) => {
  const { isSchemeSaved, toggleSaveScheme, savedSchemes, toggleDocumentCheck, t } = useProfile();
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'documents' | 'process' | 'faqs'>('overview');
  const [copied, setCopied] = useState(false);

  if (!scheme) return null;

  const saved = isSchemeSaved(scheme.id);
  const savedItem = savedSchemes.find(s => s.schemeId === scheme.id);
  const completedDocs = savedItem?.completedDocuments || [];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: scheme.name,
        text: scheme.tagline,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden my-auto"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-200 bg-slate-50/70 flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {scheme.level === 'Central' ? (
                <TrustBadge type="central" />
              ) : (
                <TrustBadge type="state" text={scheme.state || t('scheme_state_scheme')} />
              )}
              <TrustBadge type="verified" />
              <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {t('scheme_last_verified')} {scheme.lastVerifiedDate}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              {scheme.name}
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                <strong>Ministry:</strong> {scheme.ministry}
              </span>
              {scheme.department && (
                <span>• <strong>Dept:</strong> {scheme.department}</span>
              )}
            </div>
          </div>

          {/* Action Tools & Close */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
              title="Share Scheme"
              aria-label="Share Scheme"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200 hidden sm:block"
              title="Print Document Checklist"
              aria-label="Print Document Checklist"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`p-2 rounded-xl border transition-colors ${
                saved 
                  ? 'bg-blue-50 text-blue-600 border-blue-200' 
                  : 'text-slate-500 hover:text-slate-800 border-slate-200 hover:bg-slate-100'
              }`}
              title={saved ? 'Saved in Dashboard' : 'Save Scheme'}
              aria-label={saved ? 'Remove bookmark' : 'Bookmark scheme'}
            >
              {saved ? <BookmarkCheck className="w-4 h-4 fill-blue-600" /> : <Bookmark className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-6 border-b border-slate-200 bg-white overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: t('scheme_overview_tab'), icon: FileText },
            { id: 'eligibility', label: t('scheme_eligibility_tab'), icon: CheckCircle2 },
            { id: 'documents', label: t('scheme_docs_tab'), icon: CheckSquare, count: scheme.requiredDocuments.length },
            { id: 'process', label: t('scheme_process_tab'), icon: ListOrdered },
            { id: 'faqs', label: t('scheme_faqs_tab'), icon: HelpCircle },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 px-4 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-blue-600 text-blue-600 bg-blue-50/40'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-1.5 py-0.2 text-[11px] rounded-full ${isActive ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-slate-800 text-sm">
          
          {/* TAB 1: OVERVIEW & BENEFITS */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Key Benefit Banner */}
              {scheme.maxBenefitAmount && (
                <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <IndianRupee className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase text-blue-800 tracking-wider">{t('scheme_key_benefit')}</span>
                      <p className="text-lg font-bold text-slate-900">{scheme.maxBenefitAmount}</p>
                    </div>
                  </div>
                  <div className="text-xs text-blue-700 bg-white/80 px-3 py-1.5 rounded-lg border border-blue-200 font-medium">
                    100% Direct Benefit Transfer (DBT)
                  </div>
                </div>
              )}

              {/* Brief Tagline */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Tagline & Summary</h4>
                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  {scheme.tagline}
                </p>
              </div>

              {/* Detailed Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Detailed Description</h4>
                <p className="text-slate-600 leading-relaxed">
                  {scheme.detailedOverview}
                </p>
              </div>

              {/* Target Beneficiaries */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Target Beneficiaries</h4>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {scheme.targetBeneficiaries}
                </p>
              </div>

              {/* Key Benefits List */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Key Benefits & Coverage</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {scheme.keyBenefits.map((benefit, i) => (
                    <div key={i} className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-emerald-950 font-medium leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ELIGIBILITY CRITERIA */}
          {activeTab === 'eligibility' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
                <strong className="font-semibold">Important Eligibility Notice: </strong>
                The criteria listed below are extracted from the latest official scheme guidelines published by the {scheme.ministry}.
              </div>

              {/* Detailed Criteria Bullets */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">{t('scheme_eligibility_tab')}</h4>
                <div className="space-y-2.5">
                  {scheme.eligibilityDescription.map((desc, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific Conditions & Exclusions */}
              {scheme.eligibility.specificConditions && (
                <div>
                  <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Conditions & Exclusion Rules</h4>
                  <div className="space-y-2">
                    {scheme.eligibility.specificConditions.map((cond, i) => (
                      <div key={i} className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{cond}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

          {/* TAB 3: REQUIRED DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t('scheme_doc_tracker')}</h4>
                  <p className="text-xs text-slate-500">Check off documents you have prepared to track your readiness.</p>
                </div>
                <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {completedDocs.length} of {scheme.requiredDocuments.length} {t('scheme_ready_count')}
                </div>
              </div>

              <div className="space-y-3">
                {scheme.requiredDocuments.map((doc, idx) => {
                  const isChecked = completedDocs.includes(doc.name);
                  return (
                    <div 
                      key={idx}
                      onClick={() => toggleDocumentCheck(scheme.id, doc.name)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                        isChecked 
                          ? 'bg-emerald-50/70 border-emerald-300' 
                          : 'bg-white border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button 
                          className="mt-0.5 text-blue-600 focus:outline-none"
                          aria-label={isChecked ? 'Mark document as incomplete' : 'Mark document as ready'}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                          ) : (
                            <Square className="w-5 h-5 text-slate-400" />
                          )}
                        </button>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${isChecked ? 'text-emerald-950 line-through' : 'text-slate-900'}`}>
                              {doc.name}
                            </span>
                            {doc.isMandatory ? (
                              <span className="px-1.5 py-0.2 text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200 rounded">
                                {t('scheme_mandatory')}
                              </span>
                            ) : (
                              <span className="px-1.5 py-0.2 text-[10px] font-medium bg-slate-100 text-slate-600 rounded">
                                {t('scheme_optional')}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 mt-1">
                            <strong>Purpose:</strong> {doc.purpose}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  Tip: Keep self-attested scanned PDF or JPEG copies under 200KB ready before applying on the official portal.
                </span>
              </div>

            </div>
          )}

          {/* TAB 4: APPLICATION PROCESS */}
          {activeTab === 'process' && (
            <div className="space-y-6 animate-fade-in">
              
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-xs text-emerald-950">
                <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-sm font-bold text-emerald-900 block mb-0.5">
                    Official Government Application Guidance
                  </strong>
                  Follow these step-by-step instructions to register and apply directly on the verified official portal. <strong>GovAssist AI does not charge fees or process applications directly.</strong>
                </div>
              </div>

              {/* Step by Step Timeline */}
              <div className="space-y-4">
                {scheme.applicationProcessSteps.map((step) => (
                  <div key={step.stepNumber} className="flex items-start gap-4 p-4 bg-slate-50/80 border border-slate-200 rounded-2xl">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                      {step.stepNumber}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-700 leading-relaxed">{step.description}</p>
                      {step.actionTip && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg text-[11px] font-medium border border-blue-200/60 mt-1">
                          <span>💡 Action Tip: {step.actionTip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 5: FAQS & CONDITIONS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Important Conditions */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Important Operational Rules</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {scheme.importantConditions.map((cond, i) => (
                    <li key={i} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{cond}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">{t('scheme_faqs_tab')}</h4>
                <div className="space-y-3">
                  {scheme.faqs.map((faq, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-xl shadow-subtle space-y-1.5">
                      <p className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </p>
                      <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Helpline */}
              {scheme.helplinePhone && (
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="w-5 h-5 text-blue-700" />
                    <div>
                      <span className="text-xs font-bold text-blue-950">Official Toll-Free Helpline</span>
                      <p className="text-xs text-blue-800">{scheme.helplinePhone}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200">
                    Toll-Free Govt Desk
                  </span>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span className="font-semibold text-slate-700">Official Portal: </span>
            <code className="text-blue-700 font-mono text-[11px]">{scheme.officialPortalUrl}</code>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors flex-1 sm:flex-none"
            >
              {t('scheme_close')}
            </button>

            <a
              href={scheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <span>{t('scheme_apply_official')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
