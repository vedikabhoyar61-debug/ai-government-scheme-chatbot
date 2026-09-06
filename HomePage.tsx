import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Search, 
  GraduationCap, 
  Sprout, 
  HeartHandshake, 
  Activity, 
  Briefcase, 
  Home, 
  Users, 
  ExternalLink,
  ChevronRight,
  Send,
  User
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { SchemeCard } from '../components/schemes/SchemeCard';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useProfile } from '../context/ProfileContext';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { openSchemeModal, sendMessage, t } = useProfile();
  
  // Hero interactive preview state
  const [heroInput, setHeroInput] = useState("I'm a 21-year-old student from Maharashtra. My family income is around ₹2.5 lakh per year.");

  const featuredSchemes = VERIFIED_SCHEMES.filter(s => s.isFeatured).slice(0, 4);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroInput.trim()) {
      sendMessage(heroInput.trim());
      navigate('/assistant');
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return GraduationCap;
      case 'Sprout': return Sprout;
      case 'HeartHandshake': return HeartHandshake;
      case 'Activity': return Activity;
      case 'Briefcase': return Briefcase;
      case 'Home': return Home;
      default: return Users;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 pb-4 overflow-hidden">
        
        {/* Background glow accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/80 via-sky-50/40 to-transparent pointer-events-none -z-10 rounded-full blur-3xl opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Action */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                <span>{t('hero_badge')}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {t('hero_title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600">{t('hero_title_highlight')}</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {t('hero_desc')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  onClick={() => navigate('/assistant')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <Sparkles className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
                  <span>{t('hero_cta_start')}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => navigate('/schemes')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-2xs"
                >
                  <Search className="w-4 h-4 text-slate-400" />
                  <span>{t('hero_cta_explore')}</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('hero_trust_verified')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t('hero_trust_personalized')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t('hero_trust_free')}</span>
                </div>
              </div>

            </div>

            {/* Right Column: Live AI Assistant Interactive Preview Card */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-card hover:shadow-card-hover transition-all relative">
                
                {/* Preview Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-slate-900">{t('hero_preview_title')}</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <span className="text-[10px] text-slate-400">{t('hero_preview_subtitle')}</span>
                    </div>
                  </div>
                  
                  <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {t('hero_preview_badge')}
                  </span>
                </div>

                {/* Sample Chat Dialogue Stream */}
                <div className="py-4 space-y-4 text-xs">
                  
                  {/* User Message */}
                  <div className="flex items-start justify-end gap-2.5">
                    <div className="bg-blue-50 text-slate-800 border border-blue-100 rounded-2xl rounded-tr-sm p-3.5 max-w-[85%] shadow-2xs">
                      {t('hero_preview_user_msg')}
                    </div>
                    <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start justify-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Building2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-slate-50/80 text-slate-800 border border-slate-200 rounded-2xl rounded-tl-sm p-3.5 max-w-[90%] space-y-2.5">
                      <p className="font-medium text-slate-700">
                        {t('hero_preview_ai_msg')}
                      </p>

                      {/* Small Scheme Match Preview Card */}
                      <div 
                        onClick={() => openSchemeModal(VERIFIED_SCHEMES[2])}
                        className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-slate-900 line-clamp-1">NSP Post-Matric Scholarship Scheme</span>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                            Full Tuition + Allowance
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          Covers higher education fees for family income up to ₹2.5L/year.
                        </p>
                        <div className="flex items-center justify-between pt-1 text-[10px] text-blue-600 font-semibold">
                          <span>{t('scheme_view_details')} →</span>
                          <span className="text-emerald-600">✓ Verified</span>
                        </div>
                      </div>

                      {/* Second preview card */}
                      <div 
                        onClick={() => openSchemeModal(VERIFIED_SCHEMES[10])}
                        className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-bold text-slate-900 line-clamp-1">Mukhyamantri Majhi Ladki Bahin Yojana</span>
                          <span className="text-[10px] font-bold text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded">
                            ₹1,500 / month
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1">
                          Maharashtra state assistance for resident women aged 21-65.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Interactive input box in preview */}
                <form onSubmit={handleHeroSubmit} className="pt-2 border-t border-slate-100 flex items-center gap-2">
                  <input
                    type="text"
                    value={heroInput}
                    onChange={(e) => setHeroInput(e.target.value)}
                    placeholder="Describe your situation..."
                    className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-xs flex items-center gap-1.5 shrink-0"
                  >
                    <span>{t('hero_preview_cta')}</span>
                    <Send className="w-3 h-3" />
                  </button>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* THREE-STEP "HOW IT WORKS" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            {t('hiw_badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t('hiw_title')}
          </h2>
          <p className="text-sm text-slate-600">
            {t('hiw_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Step 1 */}
          <div className="gov-card p-6 relative group">
            <div className="text-3xl font-black text-blue-200 mb-4">01</div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {t('hiw_step1_title')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('hiw_step1_desc')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="gov-card p-6 relative group border-blue-200 shadow-card">
            <div className="text-3xl font-black text-blue-300 mb-4">02</div>
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {t('hiw_step2_title')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('hiw_step2_desc')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="gov-card p-6 relative group">
            <div className="text-3xl font-black text-blue-200 mb-4">03</div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4">
              <ExternalLink className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              {t('hiw_step3_title')}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {t('hiw_step3_desc')}
            </p>
          </div>

        </div>
      </section>

      {/* SCHEME CATEGORIES EXPLORATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Browse By Focus Area
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Explore Government Scheme Categories
            </h2>
          </div>
          <Link
            to="/schemes"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CATEGORIES.slice(0, 8).map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const count = VERIFIED_SCHEMES.filter(s => s.category === cat.id).length;

            return (
              <Link
                key={cat.id}
                to={`/schemes?category=${cat.id}`}
                className="gov-card p-4 sm:p-5 flex flex-col justify-between group hover:border-blue-300 transition-all"
              >
                <div>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: cat.bgLight, color: cat.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {cat.shortName}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-blue-600">
                  <span>{count > 0 ? `${count} Active Schemes` : 'Explore'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED SCHEMES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
              Flagship Initiatives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Popular Verified Government Schemes
            </h2>
          </div>
          <Link
            to="/schemes"
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0"
          >
            <span>{t('hero_cta_explore')}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredSchemes.map((scheme) => (
            <SchemeCard key={scheme.id} scheme={scheme} />
          ))}
        </div>
      </section>

      {/* TRUST & VERIFICATION NOTICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DisclaimerBanner />
      </section>

      {/* FAST CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to discover what you qualify for?
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              Start chatting with GovAssist AI right now. No account creation required to begin discovery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => navigate('/assistant')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>{t('hero_cta_start')}</span>
            </button>
            <Link
              to="/about"
              className="w-full sm:w-auto px-5 py-3.5 text-white hover:bg-white/10 font-semibold text-sm rounded-xl border border-white/30 transition-colors text-center"
            >
              {t('nav_about')}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
