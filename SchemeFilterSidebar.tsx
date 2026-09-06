import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  Check, 
  MapPin, 
  Briefcase, 
  IndianRupee, 
  Building2, 
  Layers,
  X
} from 'lucide-react';
import { SchemeCategory, GovernmentLevel } from '../../types';
import { CATEGORIES } from '../../data/categories';
import { INDIAN_STATES_AND_UTS } from '../../data/states';
import { useProfile } from '../../context/ProfileContext';

export interface SchemeFilterState {
  searchQuery: string;
  category: SchemeCategory | 'all';
  state: string;
  level: GovernmentLevel | 'all';
  occupation: string;
  maxIncome: string;
}

interface SchemeFilterSidebarProps {
  filters: SchemeFilterState;
  onChangeFilters: (newFilters: SchemeFilterState) => void;
  onResetFilters: () => void;
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
  totalResultsCount: number;
}

export const SchemeFilterSidebar: React.FC<SchemeFilterSidebarProps> = ({
  filters,
  onChangeFilters,
  onResetFilters,
  isMobileDrawer = false,
  onCloseMobileDrawer,
  totalResultsCount
}) => {
  const { t } = useProfile();

  const handleCategoryClick = (catId: SchemeCategory | 'all') => {
    onChangeFilters({ ...filters, category: catId });
  };

  const isFilterActive = 
    filters.category !== 'all' || 
    filters.state !== '' || 
    filters.level !== 'all' || 
    filters.occupation !== '' || 
    filters.maxIncome !== 'all';

  return (
    <aside className={`bg-white flex flex-col h-full ${
      isMobileDrawer 
        ? 'w-full p-5' 
        : 'w-72 lg:w-80 border-r border-[#E2E8F0] p-5 lg:p-6 shrink-0 shadow-subtle'
    }`}>
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-bold text-slate-900">{t('schemes_showing')}</h3>
          <span className="px-2 py-0.5 text-[11px] font-semibold bg-blue-50 text-blue-700 rounded-full">
            {totalResultsCount}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {isFilterActive && (
            <button
              onClick={onResetFilters}
              className="text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
              title={t('schemes_reset_filters')}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t('schemes_clear_all')}</span>
            </button>
          )}

          {isMobileDrawer && (
            <button
              onClick={onCloseMobileDrawer}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Sections */}
      <div className="flex-1 overflow-y-auto space-y-6 pt-4 pr-1 text-xs">
        
        {/* Government Level (Central vs State) */}
        <div>
          <label className="font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('schemes_filter_level')}</span>
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { id: 'all', label: 'All' },
              { id: 'Central', label: 'Central' },
              { id: 'State', label: 'State' },
            ].map(lvl => (
              <button
                key={lvl.id}
                onClick={() => onChangeFilters({ ...filters, level: lvl.id as any })}
                className={`py-1.5 px-2 text-center rounded-lg font-semibold transition-all ${
                  filters.level === lvl.id
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <label className="font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('schemes_filter_category')}</span>
          </label>
          <div className="space-y-1">
            <button
              onClick={() => handleCategoryClick('all')}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
                filters.category === 'all'
                  ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>All Categories</span>
              {filters.category === 'all' && <Check className="w-3.5 h-3.5 text-blue-600" />}
            </button>

            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
                  filters.category === cat.id
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="truncate">{cat.name}</span>
                {filters.category === cat.id && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            ))}
          </div>
        </div>

        {/* State Filter */}
        <div>
          <label className="font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('schemes_filter_state')}</span>
          </label>
          <select
            value={filters.state}
            onChange={e => onChangeFilters({ ...filters, state: e.target.value })}
            className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All-India & All States</option>
            {INDIAN_STATES_AND_UTS.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>
        </div>

        {/* Beneficiary Occupation */}
        <div>
          <label className="font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('schemes_filter_beneficiary')}</span>
          </label>
          <select
            value={filters.occupation}
            onChange={e => onChangeFilters({ ...filters, occupation: e.target.value })}
            className="w-full p-2 border border-slate-300 rounded-lg bg-white text-slate-800 text-xs focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Beneficiaries</option>
            <option value="Student">Students</option>
            <option value="Farmer">Farmers & Agriculturists</option>
            <option value="Self-Employed">Self-Employed & Small Business</option>
            <option value="Artisan/Worker">Artisans & Traditional Crafts</option>
            <option value="Unemployed">Job Seekers & Unemployed</option>
            <option value="Homemaker">Women & Homemakers</option>
            <option value="Senior Citizen">Senior Citizens (60+)</option>
          </select>
        </div>

        {/* Income Filter */}
        <div>
          <label className="font-bold text-slate-900 block mb-2 flex items-center gap-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-slate-500" />
            <span>{t('schemes_filter_income')}</span>
          </label>
          <div className="space-y-1">
            {[
              { id: 'all', label: 'Any Income Limit' },
              { id: '150000', label: 'Up to ₹1.5 Lakh / year' },
              { id: '250000', label: 'Up to ₹2.5 Lakh / year' },
              { id: '500000', label: 'Up to ₹5.0 Lakh / year' },
              { id: '800000', label: 'Up to ₹8.0 Lakh / year' },
            ].map(inc => (
              <label 
                key={inc.id}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer text-slate-700"
              >
                <input
                  type="radio"
                  name="incomeFilter"
                  checked={filters.maxIncome === inc.id}
                  onChange={() => onChangeFilters({ ...filters, maxIncome: inc.id })}
                  className="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5"
                />
                <span className="text-xs">{inc.label}</span>
              </label>
            ))}
          </div>
        </div>

      </div>

      {isMobileDrawer && (
        <div className="pt-4 border-t border-slate-100">
          <button
            onClick={onCloseMobileDrawer}
            className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs shadow-xs"
          >
            Apply Filters ({totalResultsCount})
          </button>
        </div>
      )}

    </aside>
  );
};
