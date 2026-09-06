import React, { useState } from 'react';
import { User, Sparkles, SlidersHorizontal, ChevronRight, X } from 'lucide-react';
import { ProfileSummary } from '../components/assistant/ProfileSummary';
import { ChatWindow } from '../components/assistant/ChatWindow';
import { useProfile } from '../context/ProfileContext';
import { calculateProfileCompleteness } from '../services/nlpEngine';

export const AssistantPage: React.FC = () => {
  const { profile } = useProfile();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { percentage } = calculateProfileCompleteness(profile);

  return (
    <div className="flex-1 flex flex-col bg-slate-100/60 overflow-hidden relative">
      
      {/* Mobile Top Profile Quick Status Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-2xs z-20">
        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="flex items-center gap-2 text-xs font-semibold text-slate-800 focus:outline-none"
        >
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <User className="w-3.5 h-3.5" />
          </div>
          <div className="text-left">
            <span className="block leading-tight">Your Profile</span>
            <span className="text-[10px] text-blue-600 font-medium">
              {percentage}% Complete • {profile.state || 'All-India'}
            </span>
          </div>
        </button>

        <button
          onClick={() => setMobileDrawerOpen(true)}
          className="px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg flex items-center gap-1"
        >
          <SlidersHorizontal className="w-3 h-3" />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex-1 flex overflow-hidden max-w-7xl w-full mx-auto bg-white border-x border-slate-200/80 shadow-subtle">
        
        {/* Left Column: Citizen Profile Summary (Desktop) */}
        <div className="hidden md:block md:w-80 lg:w-96 shrink-0 h-full overflow-hidden">
          <ProfileSummary />
        </div>

        {/* Right Column: AI Assistant Chat Interface */}
        <div className="flex-1 h-full flex flex-col overflow-hidden">
          <ChatWindow />
        </div>

      </div>

      {/* Mobile Profile Slide-in Drawer Modal */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end bg-slate-900/50 backdrop-blur-2xs animate-fade-in">
          <div 
            className="bg-white rounded-t-3xl max-h-[85vh] h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <ProfileSummary 
              isMobileDrawer={true} 
              onCloseMobileDrawer={() => setMobileDrawerOpen(false)} 
            />
          </div>
        </div>
      )}

    </div>
  );
};
