import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Sparkles, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#E2E8F0] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-200">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-slate-900">
                GovAssist<span className="text-blue-600">.ai</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Empowering Indian citizens with intelligent, unbiased AI guidance to discover eligible welfare schemes, understand documentation, and access official government portals securely.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                100% Free & Verified Sources
              </span>
            </div>
          </div>

          {/* Explore Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/schemes" className="hover:text-blue-600 transition-colors">
                  Find Schemes
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-blue-600 transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-blue-600 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-blue-600 transition-colors">
                  Citizen Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Help */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">
                  About GovAssist
                </Link>
              </li>
              <li>
                <Link to="/how-it-works#faqs" className="hover:text-blue-600 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/about#sources" className="hover:text-blue-600 transition-colors">
                  Official Sources Directory
                </Link>
              </li>
              <li>
                <a 
                  href="https://india.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                >
                  <span>National Portal of India</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Important & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Important
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/about#disclaimer" className="hover:text-blue-600 transition-colors">
                  Official Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/about#privacy" className="hover:text-blue-600 transition-colors">
                  Privacy & Data Security
                </Link>
              </li>
              <li>
                <Link to="/about#accessibility" className="hover:text-blue-600 transition-colors">
                  Accessibility Standards
                </Link>
              </li>
              <li>
                <Link to="/about#terms" className="hover:text-blue-600 transition-colors">
                  Terms of Assistance
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-6 pb-4">
          <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed text-center sm:text-left">
            <strong className="text-slate-700">Official Disclaimer: </strong>
            GovAssist AI is an independent, non-governmental informational assistance platform designed to help citizens understand welfare schemes. GovAssist AI does not process or accept government scheme applications, nor does it guarantee scheme approvals. All applications must be submitted directly through the respective official Government of India or State Government portals (`.gov.in` / `.nic.in`).
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-3">
          <p>© {new Date().getFullYear()} GovAssist AI. Dedicated to Indian Citizens & Digital India.</p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Built with care for public digital empowerment</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
