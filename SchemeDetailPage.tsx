import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
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
  Printer,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import { SCHEMES_MAP } from '../data/schemes';
import { useProfile } from '../context/ProfileContext';
import { TrustBadge } from '../components/common/TrustBadge';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const SchemeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSchemeSaved, toggleSaveScheme, savedSchemes, toggleDocumentCheck } = useProfile();
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'documents' | 'process' | 'faqs'>('overview');
  const [copied, setCopied] = useState(false);

  const scheme = id ? SCHEMES_MAP.get(id) : undefined;

  if (!scheme) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-900">Scheme Not Found</h2>
        <p className="text-xs text-slate-600">The requested government scheme does not exist or has been updated.</p>
        <Link to="/schemes" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline">
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Scheme Directory</span>
        </Link>
      </div>
    );
  }

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

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to previous page</span>
        </button>
      </div>

      {/* Main Scheme Header Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-card space-y-6">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {scheme.level === 'Central' ? (
                <TrustBadge type="central" />
              ) : (
                <TrustBadge type="state" text={scheme.state || 'State Scheme'} />
              )}
              <TrustBadge type="verified" />
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Verified: {scheme.lastVerifiedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {scheme.name}
            </h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-blue-600" />
                <strong>Ministry:</strong> {scheme.ministry}
              </span>
              {scheme.department && (
                <span>• <strong>Department:</strong> {scheme.department}</span>
              )}
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-medium pt-1">
              {scheme.tagline}
            </p>
          </div>

          {/* Top Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button
              onClick={() => toggleSaveScheme(scheme.id)}
              className={`py-2.5 px-4 rounded-xl border text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                saved 
                  ? 'bg-blue-50 text-blue-600 border-blue-200' 
                  : 'text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              {saved ? <BookmarkCheck className="w-4 h-4 fill-blue-600" /> : <Bookmark className="w-4 h-4" />}
              <span>{saved ? 'Saved in Dashboard' : 'Bookmark Scheme'}</span>
            </button>

            <button
              onClick={handleShare}
              className="py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <a
              href={scheme.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Apply on Official Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center border-b border-slate-200 bg-white rounded-t-2xl px-4 overflow-x-auto no-scrollbar shadow-2xs">
        {[
          { id: 'overview', label: 'Overview & Benefits', icon: FileText },
          { id: 'eligibility', label: 'Eligibility Criteria', icon: CheckCircle2 },
          { id: 'documents', label: 'Required Documents', icon: CheckSquare, count: scheme.requiredDocuments.length },
          { id: 'process', label: 'Official Application Steps', icon: ListOrdered },
          { id: 'faqs', label: 'FAQs & Helpline', icon: HelpCircle },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-4 px-5 text-xs sm:text-sm font-semibold flex items-center gap-2 border-b-2 whitespace-nowrap transition-colors ${
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

      {/* Tab Panels */}
      <div className="bg-white border border-slate-200 rounded-b-2xl p-6 sm:p-8 shadow-subtle text-slate-800 text-sm space-y-6">
        
        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {scheme.maxBenefitAmount && (
              <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase text-blue-800 tracking-wider">Maximum Financial / Service Benefit</span>
                    <p className="text-lg font-bold text-slate-900">{scheme.maxBenefitAmount}</p>
                  </div>
                </div>
                <div className="text-xs text-blue-700 bg-white/80 px-3 py-1.5 rounded-lg border border-blue-200 font-medium">
                  Direct Benefit Transfer (DBT)
                </div>
              </div>
            )}

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-2">Detailed Scheme Overview</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {scheme.detailedOverview}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Target Beneficiaries</h4>
              <p className="text-slate-700 font-medium text-xs sm:text-sm leading-relaxed">
                {scheme.targetBeneficiaries}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">Key Benefits & Financial Assistance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scheme.keyBenefits.map((benefit, i) => (
                  <div key={i} className="p-3.5 bg-emerald-50/50 border border-emerald-100 rounded-xl flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-emerald-950 font-medium leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ELIGIBILITY */}
        {activeTab === 'eligibility' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs text-blue-900 leading-relaxed">
              <strong className="font-semibold">Official Criteria Notice: </strong>
              The following conditions are enforced by the {scheme.ministry}. Please ensure your documents verify these parameters.
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">Key Eligibility Conditions</h3>
              {scheme.eligibilityDescription.map((desc, i) => (
                <div key={i} className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">{desc}</span>
                </div>
              ))}
            </div>

            {scheme.eligibility.specificConditions && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Exclusions & Conditions</h3>
                {scheme.eligibility.specificConditions.map((cond, i) => (
                  <div key={i} className="p-3 bg-amber-50/60 border border-amber-200 rounded-xl flex items-start gap-2.5 text-xs text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{cond}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DOCUMENTS */}
        {activeTab === 'documents' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Required Document Checklist</h3>
                <p className="text-xs text-slate-500">Track and prepare your documents before opening the official portal.</p>
              </div>
              <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {completedDocs.length} of {scheme.requiredDocuments.length} Ready
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
                              Mandatory
                            </span>
                          ) : (
                            <span className="px-1.5 py-0.2 text-[10px] font-medium bg-slate-100 text-slate-600 rounded">
                              Optional
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
          </div>
        )}

        {/* APPLICATION PROCESS */}
        {activeTab === 'process' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3 text-xs text-emerald-950">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sm font-bold text-emerald-900 block mb-0.5">
                  Official Application Process Guidance
                </strong>
                GovAssist AI provides step-by-step guidance. Applications are processed directly on the official government website.
              </div>
            </div>

            <div className="space-y-4">
              {scheme.applicationProcessSteps.map((step) => (
                <div key={step.stepNumber} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    {step.stepNumber}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{step.description}</p>
                    {step.actionTip && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-800 rounded-lg text-[11px] font-medium border border-blue-200/60 mt-1">
                        <span>💡 Tip: {step.actionTip}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 text-center">
              <a
                href={scheme.officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-md transition-all"
              >
                <span>Proceed to Official Government Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* FAQS & HELPLINE */}
        {activeTab === 'faqs' && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-900">Frequently Asked Questions</h3>
              {scheme.faqs.map((faq, i) => (
                <div key={i} className="p-4 bg-slate-50/80 border border-slate-200 rounded-xl space-y-1.5">
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

            {scheme.helplinePhone && (
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <PhoneCall className="w-5 h-5 text-blue-700" />
                  <div>
                    <span className="text-xs font-bold text-blue-950">Official Helpline</span>
                    <p className="text-xs text-blue-800">{scheme.helplinePhone}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-lg border border-blue-200">
                  Govt Helpdesk
                </span>
              </div>
            )}
          </div>
        )}

      </div>

      <DisclaimerBanner />

    </div>
  );
};
