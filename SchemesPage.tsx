import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Building2
} from 'lucide-react';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { SchemeCategory } from '../types';
import { SchemeCard } from '../components/schemes/SchemeCard';
import { SchemeFilterSidebar, SchemeFilterState } from '../components/schemes/SchemeFilterSidebar';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useProfile } from '../context/ProfileContext';

export const SchemesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as SchemeCategory | null;
  const { t } = useProfile();

  const [filters, setFilters] = useState<SchemeFilterState>({
    searchQuery: searchParams.get('q') || '',
    category: categoryParam || 'all',
    state: '',
    level: 'all',
    occupation: '',
    maxIncome: 'all'
  });

  const [sortBy, setSortBy] = useState<'relevance' | 'popular' | 'alpha'>('popular');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [categoryParam]);

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      category: 'all',
      state: '',
      level: 'all',
      occupation: '',
      maxIncome: 'all'
    });
    setSearchParams({});
  };

  const removeSpecificFilter = (key: keyof SchemeFilterState) => {
    if (key === 'category') setFilters({ ...filters, category: 'all' });
    else if (key === 'level') setFilters({ ...filters, level: 'all' });
    else if (key === 'maxIncome') setFilters({ ...filters, maxIncome: 'all' });
    else if (key === 'state') setFilters({ ...filters, state: '' });
    else if (key === 'occupation') setFilters({ ...filters, occupation: '' });
    else if (key === 'searchQuery') setFilters({ ...filters, searchQuery: '' });
  };

  const filteredSchemes = useMemo(() => {
    return VERIFIED_SCHEMES.filter(scheme => {
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesText = 
          scheme.name.toLowerCase().includes(query) ||
          (scheme.shortName && scheme.shortName.toLowerCase().includes(query)) ||
          scheme.tagline.toLowerCase().includes(query) ||
          scheme.ministry.toLowerCase().includes(query) ||
          scheme.briefDescription.toLowerCase().includes(query) ||
          scheme.keyBenefits.some(b => b.toLowerCase().includes(query));
        if (!matchesText) return false;
      }

      if (filters.category !== 'all' && scheme.category !== filters.category) {
        return false;
      }

      if (filters.level !== 'all' && scheme.level !== filters.level) {
        return false;
      }

      if (filters.state) {
        if (scheme.level === 'State' && scheme.state && scheme.state.toLowerCase() !== filters.state.toLowerCase()) {
          return false;
        }
      }

      if (filters.occupation) {
        if (scheme.eligibility.occupations && scheme.eligibility.occupations.length > 0) {
          if (!scheme.eligibility.occupations.includes(filters.occupation)) {
            return false;
          }
        }
      }

      if (filters.maxIncome !== 'all') {
        const incomeCeiling = parseInt(filters.maxIncome, 10);
        if (scheme.eligibility.maxAnnualIncome && scheme.eligibility.maxAnnualIncome > incomeCeiling) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'popular') {
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      }
      if (sortBy === 'alpha') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [filters, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 flex-1 flex flex-col">
      
      {/* Top Search & Filter Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-subtle space-y-5">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Building2 className="w-3.5 h-3.5" />
            Verified Government Scheme Directory
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('schemes_title')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t('schemes_subtitle')}
          </p>
        </div>

        {/* Global Search Input */}
        <div className="relative flex items-center max-w-2xl">
          <Search className="w-4 h-4 text-slate-400 absolute left-4" />
          <input
            type="text"
            value={filters.searchQuery}
            onChange={e => setFilters({ ...filters, searchQuery: e.target.value })}
            placeholder={t('schemes_search_placeholder')}
            className="w-full py-3 sm:py-3.5 pl-11 pr-10 text-xs sm:text-sm text-slate-900 bg-slate-50 hover:bg-slate-50/80 focus:bg-white border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 rounded-2xl transition-all outline-none"
          />
          {filters.searchQuery && (
            <button
              onClick={() => setFilters({ ...filters, searchQuery: '' })}
              className="absolute right-3 p-1 text-slate-400 hover:text-slate-600"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="flex-1 flex flex-col md:flex-row gap-6">
        
        {/* Desktop Filter Sidebar */}
        <div className="hidden md:block">
          <SchemeFilterSidebar
            filters={filters}
            onChangeFilters={setFilters}
            onResetFilters={handleResetFilters}
            totalResultsCount={filteredSchemes.length}
          />
        </div>

        {/* Schemes Results Content Area */}
        <div className="flex-1 flex flex-col space-y-5">
          
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl flex items-center gap-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                <span>Filters</span>
              </button>

              <span className="text-xs font-bold text-slate-800">
                {t('schemes_showing')} {filteredSchemes.length}
              </span>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <span className="text-xs text-slate-500 font-medium">{t('schemes_sort_by')}</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-2.5 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="popular">{t('schemes_sort_popular')}</option>
                <option value="alpha">{t('schemes_sort_alpha')}</option>
              </select>
            </div>

          </div>

          {/* Active Filter Chips */}
          {(filters.category !== 'all' || filters.level !== 'all' || filters.state || filters.occupation || filters.maxIncome !== 'all' || filters.searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Active Filters:</span>
              
              {filters.category !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  Category: {filters.category}
                  <button onClick={() => removeSpecificFilter('category')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.level !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Level: {filters.level}
                  <button onClick={() => removeSpecificFilter('level')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.state && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                  State: {filters.state}
                  <button onClick={() => removeSpecificFilter('state')}><X className="w-3 h-3" /></button>
                </span>
              )}

              {filters.occupation && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                  Beneficiary: {filters.occupation}
                  <button onClick={() => removeSpecificFilter('occupation')}><X className="w-3 h-3" /></button>
                </span>
              )}

              <button
                onClick={handleResetFilters}
                className="text-xs text-rose-600 hover:underline font-semibold pl-1"
              >
                {t('schemes_clear_all')}
              </button>
            </div>
          )}

          {/* Schemes Grid */}
          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredSchemes.map(scheme => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </div>
          ) : (
            <div className="gov-card p-12 text-center space-y-4 my-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Search className="w-7 h-7" />
              </div>
              <div className="space-y-1 max-w-md mx-auto">
                <h3 className="text-base font-bold text-slate-900">{t('schemes_no_results')}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Try adjusting or clearing your filters, or describe your situation directly to our conversational AI assistant.
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                >
                  {t('schemes_reset_filters')}
                </button>
                <a
                  href="/assistant"
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-xs"
                >
                  {t('nav_start_assistant')}
                </a>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-slate-900/50 backdrop-blur-2xs animate-fade-in">
          <div 
            className="bg-white rounded-t-3xl max-h-[85vh] h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <SchemeFilterSidebar
              filters={filters}
              onChangeFilters={setFilters}
              onResetFilters={handleResetFilters}
              isMobileDrawer={true}
              onCloseMobileDrawer={() => setMobileFilterOpen(false)}
              totalResultsCount={filteredSchemes.length}
            />
          </div>
        </div>
      )}

      {/* Bottom Disclaimer */}
      <DisclaimerBanner />

    </div>
  );
};
