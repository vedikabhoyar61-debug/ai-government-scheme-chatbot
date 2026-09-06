import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  Sparkles, 
  Search, 
  MessageSquareCode, 
  BookOpen, 
  Info, 
  LayoutDashboard, 
  Menu, 
  X, 
  Globe, 
  User, 
  LogOut,
  ChevronDown
} from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logoutUser, language, setLanguage, savedSchemes, t } = useProfile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
  ];

  const currentLangObj = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm ring-2 ring-blue-500/20 transition-transform group-hover:scale-105">
              <Building2 className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 bg-sky-400 text-slate-950 p-0.5 rounded-full border border-white shadow-xs">
                <Sparkles className="w-2.5 h-2.5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  GovAssist<span className="text-blue-600">.ai</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-blue-50 text-blue-700 rounded border border-blue-200">
                  INDIA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium -mt-0.5 hidden sm:block">
                AI Government Scheme Assistant
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              {t('nav_home')}
            </Link>
            
            <Link
              to="/schemes"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/schemes') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>{t('nav_find_schemes')}</span>
            </Link>

            <Link
              to="/assistant"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/assistant') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <MessageSquareCode className="w-4 h-4 text-blue-600" />
              <span>{t('nav_ai_assistant')}</span>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
            </Link>

            <Link
              to="/how-it-works"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/how-it-works') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('nav_how_it_works')}</span>
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>{t('nav_about')}</span>
            </Link>

            <Link
              to="/dashboard"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                isActive('/dashboard') 
                  ? 'text-blue-600 bg-blue-50/80 font-semibold' 
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{t('nav_dashboard')}</span>
              {savedSchemes.length > 0 && (
                <span className="px-1.5 py-0.2 text-[11px] font-semibold bg-blue-100 text-blue-800 rounded-full">
                  {savedSchemes.length}
                </span>
              )}
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  setUserDropdownOpen(false);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors focus:outline-none shadow-2xs"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-bold">{currentLangObj.native}</span>
                <ChevronDown className="w-3 h-3 text-blue-500" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-fade-in">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {t('nav_select_lang')}
                  </div>
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-blue-50 transition-colors ${
                        language === l.code ? 'font-bold text-blue-600 bg-blue-50/70' : 'text-slate-700'
                      }`}
                    >
                      <span className="text-sm font-medium">{l.native}</span>
                      <span className="text-[11px] text-slate-400">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Auth Menu or Sign In */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => {
                    setUserDropdownOpen(!userDropdownOpen);
                    setLangDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full border border-slate-200 hover:border-blue-300 transition-colors bg-white focus:outline-none"
                >
                  <img
                    src={user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=user"}
                    alt={user.name}
                    className="w-6 h-6 rounded-full bg-blue-100"
                  />
                  <span className="text-xs font-semibold text-slate-800 hidden sm:inline max-w-[100px] truncate">
                    {user.name.split(' ')[0]}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 animate-fade-in">
                    <div className="px-3.5 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-900">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>{t('nav_dashboard')}</span>
                    </Link>
                    <Link
                      to="/assistant"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-3.5 py-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <MessageSquareCode className="w-4 h-4" />
                      <span>{t('nav_ai_assistant')}</span>
                    </Link>
                    <button
                      onClick={() => {
                        logoutUser();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3.5 py-2 text-xs text-rose-600 hover:bg-rose-50 transition-colors text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('nav_sign_out')}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>{t('nav_sign_in')}</span>
              </Link>
            )}

            {/* Primary Action Button */}
            <button
              onClick={() => navigate('/assistant')}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span>{t('nav_start_assistant')}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-slide-up">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_home')}
          </Link>
          <Link
            to="/schemes"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/schemes') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_find_schemes')}
          </Link>
          <Link
            to="/assistant"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/assistant') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_ai_assistant')}
          </Link>
          <Link
            to="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/how-it-works') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_how_it_works')}
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/about') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_about')}
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-sm font-medium ${
              isActive('/dashboard') ? 'text-blue-600 bg-blue-50 font-bold' : 'text-slate-700'
            }`}
          >
            {t('nav_dashboard')} ({savedSchemes.length})
          </Link>
        </div>
      )}
    </header>
  );
};
