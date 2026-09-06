import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  ExternalLink, 
  Heart, 
  Award, 
  FileText,
  AlertTriangle,
  Globe
} from 'lucide-react';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { TrustBadge } from '../components/common/TrustBadge';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 flex-1">
      
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Trust, Transparency & Integrity</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          About GovAssist AI
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A modern, trustworthy digital public service interface dedicated to connecting Indian citizens with eligible government welfare schemes.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="gov-card p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Verified Sources Only</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every scheme in our repository is directly validated against official gazettes, central/state department notifications, and official `.gov.in` portals.
          </p>
        </div>

        <div className="gov-card p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Strict No-Brokerage Pledge</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We never charge fees, collect bank credentials, or accept middleman registrations. Citizens are guided straight to official government portals.
          </p>
        </div>

        <div className="gov-card p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Universal Digital Access</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Designed to be accessible to all citizens—supporting regional languages, voice input, screen readers, and clear plain-language explanations.
          </p>
        </div>

      </div>

      {/* Verified Official Sources Registry */}
      <div id="sources" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-subtle space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-bold text-slate-900">Verified Government Source Registry</h2>
          </div>
          <p className="text-xs text-slate-500">
            GovAssist AI links directly to official government portals. Below is an index of official departments and their portal domains.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
            <thead className="bg-slate-50 font-bold text-slate-700">
              <tr>
                <th className="px-4 py-3">Scheme Name</th>
                <th className="px-4 py-3">Responsible Ministry / Dept</th>
                <th className="px-4 py-3">Level</th>
                <th className="px-4 py-3">Official Verified URL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
              {VERIFIED_SCHEMES.map((scheme) => (
                <tr key={scheme.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {scheme.shortName || scheme.name}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {scheme.ministry}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      scheme.level === 'Central' ? 'bg-blue-50 text-blue-700' : 'bg-indigo-50 text-indigo-700'
                    }`}>
                      {scheme.level}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={scheme.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-mono inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{scheme.officialPortalUrl.replace('https://', '')}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Official Disclaimer & Compliance Section */}
      <div id="disclaimer" className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          <h3>Legal Notice & Non-Affiliation Disclaimer</h3>
        </div>
        
        <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
          <p>
            <strong>1. Informational Purpose Only:</strong> GovAssist AI is an independent citizen-assistive technological platform. GovAssist AI is not an official government agency, department, or statutory authority. All scheme information provided is compiled from public domain government sources and official notifications.
          </p>
          <p>
            <strong>2. No Application Processing or Registration on this Site:</strong> GovAssist AI does not collect government registration forms, process benefit applications, or collect financial credentials. All application submissions, document verifications, and approvals remain the exclusive prerogative of the respective Central or State Government departments via their official portals (`.gov.in` / `.nic.in`).
          </p>
          <p>
            <strong>3. Eligibility Disclaimers:</strong> Any eligibility matches generated by GovAssist AI are preliminary assessments based on user-provided parameters and available scheme criteria. Users are strongly advised to verify the latest guidelines on the official portal before initiating applications.
          </p>
        </div>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
