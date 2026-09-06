import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Briefcase, 
  IndianRupee, 
  Award, 
  RotateCcw, 
  Edit3, 
  Check, 
  X, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';
import { INDIAN_STATES_AND_UTS } from '../../data/states';
import { calculateProfileCompleteness } from '../../services/nlpEngine';

interface ProfileSummaryProps {
  isMobileDrawer?: boolean;
  onCloseMobileDrawer?: () => void;
}

export const ProfileSummary: React.FC<ProfileSummaryProps> = ({
  isMobileDrawer = false,
  onCloseMobileDrawer
}) => {
  const { profile, updateProfile, resetProfile, t } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  
  // Temporary editing form state
  const [formData, setFormData] = useState(profile);

  const { percentage, missingFields } = calculateProfileCompleteness(profile);

  const handleStartEdit = () => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  const formatCurrency = (amount?: number) => {
    if (!amount) return t('profile_not_specified');
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} Lakh/year`;
    }
    return `₹${amount.toLocaleString('en-IN')}/year`;
  };

  return (
    <aside className={`bg-white flex flex-col h-full ${
      isMobileDrawer 
        ? 'w-full p-5' 
        : 'w-full border-r border-[#E2E8F0] p-5 lg:p-6 shadow-subtle'
    }`}>
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <User className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">{t('profile_title')}</h3>
            <p className="text-[11px] text-slate-500">{t('profile_subtitle')}</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {!isEditing ? (
            <button
              onClick={handleStartEdit}
              className="p-1.5 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1"
              title="Manual Edit Profile"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{t('profile_edit')}</span>
            </button>
          ) : (
            <div className="flex items-center gap-1">
              <button
                onClick={handleSaveEdit}
                className="p-1 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
                title={t('profile_save')}
              >
                <Check className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleCancelEdit}
                className="p-1 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300"
                title={t('profile_cancel')}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {isMobileDrawer && (
            <button
              onClick={onCloseMobileDrawer}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Profile Completeness Score */}
      <div className="my-4 p-3.5 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 rounded-xl space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-blue-900 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            {t('profile_completeness')}
          </span>
          <span className="font-bold text-blue-700">{percentage}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-2 bg-blue-200/60 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        {missingFields.length > 0 && (
          <p className="text-[11px] text-blue-700 font-medium leading-tight">
            Add {missingFields.slice(0, 2).join(' or ')} to refine recommendations.
          </p>
        )}
      </div>

      {/* Main Profile Info Grid / Form */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
        
        {!isEditing ? (
          <>
            {/* Age */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_age')}
              </span>
              <span className="font-bold text-slate-800">
                {profile.age ? `${profile.age} years` : <span className="text-slate-400 font-normal italic">{t('profile_not_specified')}</span>}
              </span>
            </div>

            {/* Gender */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_gender')}
              </span>
              <span className="font-bold text-slate-800">
                {profile.gender || <span className="text-slate-400 font-normal italic">{t('profile_not_specified')}</span>}
              </span>
            </div>

            {/* State */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_state')}
              </span>
              <span className="font-bold text-slate-800">
                {profile.state || <span className="text-slate-400 font-normal italic">All-India</span>}
              </span>
            </div>

            {/* Occupation */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_occupation')}
              </span>
              <span className="font-bold text-slate-800">
                {profile.occupation || <span className="text-slate-400 font-normal italic">{t('profile_not_specified')}</span>}
              </span>
            </div>

            {/* Family Income */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <IndianRupee className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_income')}
              </span>
              <span className="font-bold text-blue-700">
                {formatCurrency(profile.annualFamilyIncome)}
              </span>
            </div>

            {/* Social Category */}
            <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center justify-between">
              <span className="text-slate-500 font-medium flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-slate-400" />
                {t('profile_category')}
              </span>
              <span className="font-bold text-slate-800">
                {profile.category || <span className="text-slate-400 font-normal italic">General / Open</span>}
              </span>
            </div>

            {/* Disability Status if applicable */}
            {profile.hasDisability && (
              <div className="p-3 bg-purple-50/70 rounded-xl border border-purple-200 flex items-center justify-between">
                <span className="text-purple-900 font-medium">Divyangjan Status</span>
                <span className="font-bold text-purple-700">
                  Yes ({profile.disabilityPercent || 40}%)
                </span>
              </div>
            )}
          </>
        ) : (
          /* Manual Edit Form */
          <div className="space-y-3 pt-1">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_age')}</label>
              <input
                type="number"
                min={1}
                max={100}
                value={formData.age || ''}
                onChange={e => setFormData({ ...formData, age: e.target.value ? parseInt(e.target.value) : undefined })}
                placeholder="e.g. 21"
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_gender')}</label>
              <select
                value={formData.gender || ''}
                onChange={e => setFormData({ ...formData, gender: e.target.value as any })}
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Transgender">Transgender</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_state')}</label>
              <select
                value={formData.state || ''}
                onChange={e => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All-India (Central)</option>
                {INDIAN_STATES_AND_UTS.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_occupation')}</label>
              <select
                value={formData.occupation || ''}
                onChange={e => setFormData({ ...formData, occupation: e.target.value as any })}
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select Occupation</option>
                <option value="Student">Student</option>
                <option value="Farmer">Farmer / Agriculturist</option>
                <option value="Self-Employed">Self-Employed / Small Business</option>
                <option value="Artisan/Worker">Artisan / Traditional Craftsperson</option>
                <option value="Unemployed">Unemployed / Job Seeker</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Senior Citizen">Senior Citizen / Retired</option>
                <option value="Employed">Salaried / Private Employee</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_income')}</label>
              <input
                type="number"
                value={formData.annualFamilyIncome || ''}
                onChange={e => setFormData({ ...formData, annualFamilyIncome: e.target.value ? parseInt(e.target.value) : undefined })}
                placeholder="e.g. 250000"
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">{t('profile_category')}</label>
              <select
                value={formData.category || ''}
                onChange={e => setFormData({ ...formData, category: e.target.value as any })}
                className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs focus:ring-1 focus:ring-blue-500"
              >
                <option value="General">General / Open</option>
                <option value="OBC">OBC (Other Backward Class)</option>
                <option value="SC">SC (Scheduled Caste)</option>
                <option value="ST">ST (Scheduled Tribe)</option>
                <option value="EWS">EWS (Economically Weaker Section)</option>
              </select>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={handleSaveEdit}
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs"
              >
                {t('profile_save')}
              </button>
            </div>
          </div>
        )}

      </div>

      {/* Footer Info & Reset */}
      <div className="pt-4 border-t border-slate-100 space-y-3 mt-auto">
        <div className="p-2.5 bg-slate-50 rounded-xl text-[11px] text-slate-500 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>{t('profile_privacy_note')}</span>
        </div>

        <button
          onClick={resetProfile}
          className="w-full py-2 text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{t('profile_reset')}</span>
        </button>
      </div>

    </aside>
  );
};
