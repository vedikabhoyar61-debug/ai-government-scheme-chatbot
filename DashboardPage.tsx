import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  BookmarkCheck, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  ExternalLink, 
  CheckSquare, 
  Square,
  Trash2
} from 'lucide-react';
import { useProfile } from '../context/ProfileContext';
import { SCHEMES_MAP } from '../data/schemes';
import { matchSchemesForProfile, calculateProfileCompleteness } from '../services/nlpEngine';
import { SchemeCard } from '../components/schemes/SchemeCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    user, 
    profile, 
    savedSchemes, 
    toggleSaveScheme, 
    updateSchemeStatus, 
    openSchemeModal,
    t
  } = useProfile();

  const { percentage } = calculateProfileCompleteness(profile);

  const [userUniversalDocs, setUserUniversalDocs] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('govassist_user_docs');
      return saved ? JSON.parse(saved) : ['Aadhaar Card', 'Active Bank Passbook'];
    } catch {
      return ['Aadhaar Card', 'Active Bank Passbook'];
    }
  });

  const toggleUniversalDoc = (docName: string) => {
    setUserUniversalDocs(prev => {
      const exists = prev.includes(docName);
      const updated = exists ? prev.filter(d => d !== docName) : [...prev, docName];
      localStorage.setItem('govassist_user_docs', JSON.stringify(updated));
      return updated;
    });
  };

  const commonDocTypes = [
    'Aadhaar Card (Mobile Linked)',
    'Active Bank Passbook (Aadhaar Seeded)',
    'Income Certificate (Issued by Tehsildar / Competent Authority)',
    'Caste / Community Certificate (SC / ST / OBC / EWS)',
    'Ration Card / NFSA Smart Card',
    'Domicile / Residence Certificate',
    'Previous Year Academic Marksheet',
    'Land Records / RoR / Khasra (for Farmers)',
    'UDID Disability Certificate (if applicable)'
  ];

  const matchedResults = matchSchemesForProfile(profile);
  const recommendedSchemes = matchedResults.map(m => m.scheme).slice(0, 3);

  const savedSchemeObjects = savedSchemes
    .map(item => ({
      ...item,
      scheme: SCHEMES_MAP.get(item.schemeId)
    }))
    .filter(item => item.scheme !== undefined);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 flex-1">
      
      {/* Top Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-300" />
            <span>Citizen Scheme Dashboard</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t('dash_welcome')} {user ? user.name : 'Citizen'}
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl">
            {t('dash_subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => navigate('/assistant')}
            className="px-5 py-3 bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>{t('nav_start_assistant')}</span>
          </button>
        </div>
      </div>

      {/* Metrics Overview Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Metric 1 */}
        <div className="gov-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">{t('dash_saved_schemes')}</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <BookmarkCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-900">{savedSchemes.length}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Tracked schemes</p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="gov-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">{t('dash_recommendations')}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-900">{matchedResults.length}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Matched for you</p>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="gov-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">{t('profile_completeness')}</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-900">{percentage}%</span>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${percentage}%` }} />
            </div>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="gov-card p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">{t('dash_ready_docs')}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <span className="text-2xl font-black text-slate-900">{userUniversalDocs.length} / {commonDocTypes.length}</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Documents prepared</p>
          </div>
        </div>

      </div>

      {/* SECTION 1: SAVED SCHEMES */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{t('dash_saved_schemes')} ({savedSchemeObjects.length})</h2>
            <p className="text-xs text-slate-500">Keep track of schemes you are preparing documents for.</p>
          </div>
          <Link to="/schemes" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
            <span>{t('nav_find_schemes')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {savedSchemeObjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {savedSchemeObjects.map(item => {
              const s = item.scheme!;
              return (
                <div key={s.id} className="gov-card p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-blue-50 text-blue-700 rounded-full">
                        {s.level} • {s.category}
                      </span>
                      <button
                        onClick={() => toggleSaveScheme(s.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove from saved"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <h3 
                      onClick={() => openSchemeModal(s)}
                      className="text-sm font-bold text-slate-900 hover:text-blue-600 cursor-pointer line-clamp-2"
                    >
                      {s.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{s.tagline}</p>
                  </div>

                  {/* Status update dropdown */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">Status:</span>
                      <select
                        value={item.status}
                        onChange={e => updateSchemeStatus(s.id, e.target.value as any)}
                        className="px-2 py-1 text-xs font-semibold rounded-lg bg-slate-50 border border-slate-200 text-slate-800"
                      >
                        <option value="saved">{t('dash_status_saved')}</option>
                        <option value="documents_ready">{t('dash_status_docs_ready')}</option>
                        <option value="applied_on_portal">{t('dash_status_applied')}</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => openSchemeModal(s)}
                        className="py-1.5 px-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-center"
                      >
                        {t('scheme_view_details')}
                      </button>
                      <a
                        href={s.officialPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-2.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg text-center flex items-center justify-center gap-1"
                      >
                        <span>{t('scheme_official_portal')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="gov-card p-8 text-center space-y-3">
            <BookmarkCheck className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">No saved schemes yet</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Browse government schemes or chat with the AI assistant to bookmark schemes relevant to you.
            </p>
            <Link
              to="/schemes"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold shadow-xs"
            >
              <span>{t('nav_find_schemes')}</span>
            </Link>
          </div>
        )}
      </section>

      {/* SECTION 2: UNIVERSAL DOCUMENT READINESS CHECKLIST */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-subtle space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">{t('scheme_doc_tracker')}</h2>
            <p className="text-xs text-slate-500">Check off documents you currently have available.</p>
          </div>
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {userUniversalDocs.length} {t('scheme_ready_count')}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
          {commonDocTypes.map((doc, idx) => {
            const isChecked = userUniversalDocs.includes(doc);
            return (
              <div
                key={idx}
                onClick={() => toggleUniversalDoc(doc)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
                  isChecked 
                    ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950' 
                    : 'bg-slate-50/70 border-slate-200 hover:border-blue-300 text-slate-700'
                }`}
              >
                <button className="focus:outline-none" aria-label={isChecked ? 'Mark document as incomplete' : 'Mark document as ready'}>
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Square className="w-4 h-4 text-slate-400" />
                  )}
                </button>
                <span className={`text-xs font-semibold ${isChecked ? 'line-through text-emerald-900' : ''}`}>
                  {doc}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: RECOMMENDED FOR YOU */}
      {recommendedSchemes.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">{t('dash_recommendations')}</h2>
              <p className="text-xs text-slate-500">Based on your age ({profile.age || 21}), state ({profile.state || 'Maharashtra'}), and occupation ({profile.occupation || 'Student'}).</p>
            </div>
            <Link to="/assistant" className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
              <span>{t('nav_start_assistant')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {recommendedSchemes.map(scheme => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>
        </section>
      )}

      <DisclaimerBanner />

    </div>
  );
};
