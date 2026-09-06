import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  FileCheck2,
  Lock,
  Search,
  MessageSquare
} from 'lucide-react';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const HowItWorksPage: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      num: '01',
      title: 'Tell Us About You',
      subtitle: 'Conversational Profile Collection',
      desc: 'Simply chat with the assistant as you would with a helpful official advisor. Share basic attributes like your age, state, occupation (student, farmer, self-employed, artisan), and family income range.',
      highlight: 'No complex registration or invasive questions. Only information necessary to verify eligibility criteria.'
    },
    {
      num: '02',
      title: 'Discover Relevant Schemes',
      subtitle: 'Cross-Database Criteria Matching',
      desc: 'Our rule-based and semantic engine compares your profile parameters with verified Central Ministries and State Government eligibility rules to identify exact matches.',
      highlight: 'Every match includes clear reasons explaining why you qualify and the potential financial or welfare benefits.'
    },
    {
      num: '03',
      title: 'Prepare Required Documents',
      subtitle: 'Actionable Readiness Checklists',
      desc: 'Review an organized checklist of mandatory documents (like Aadhaar, Income Certificate, Bank Details) with advice on required formats before starting the application.',
      highlight: 'Track which documents you already have ready directly within your personal citizen dashboard.'
    },
    {
      num: '04',
      title: 'Apply on Official Government Portals',
      subtitle: 'Strict No-Brokerage & Direct Official Links',
      desc: 'Follow clear step-by-step guidance on navigating the verified government website (`.gov.in` / `.nic.in`), completing OTP authentication, and submitting your application.',
      highlight: '100% free and unbiased. GovAssist AI never takes application fees or acts as an intermediary.'
    }
  ];

  const faqs = [
    {
      q: 'Does GovAssist AI submit applications for government schemes on my behalf?',
      a: 'No. To ensure maximum citizen security and prevent fraud, GovAssist AI strictly serves as an informational assistant. All scheme applications must be completed on official government portals (such as pmkisan.gov.in, scholarships.gov.in, pmjay.gov.in). We provide the verified links and step-by-step guidance.'
    },
    {
      q: 'Is there any fee to use GovAssist AI?',
      a: 'No. GovAssist AI is 100% free for all Indian citizens. We do not charge fees, require credit cards, or offer paid priority approvals.'
    },
    {
      q: 'How frequently are government scheme criteria verified?',
      a: 'Our scheme database is reviewed and verified regularly based on official gazettes and ministry releases from the Government of India and respective State Government departments.'
    },
    {
      q: 'Is my personal information stored securely?',
      a: 'Yes. Profile information you share during chat is stored locally in your browser session and is not shared with any third parties or commercial entities.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 flex-1">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Simple & Transparent</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          How GovAssist AI Works
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Discover how our intelligent assistant transforms complex government schemes and criteria into simple, actionable guidance for every citizen.
        </p>
      </div>

      {/* Step by Step Timeline */}
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div 
            key={idx}
            className="gov-card p-6 sm:p-8 flex flex-col md:flex-row items-start gap-6 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-md">
              {step.num}
            </div>

            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  {step.subtitle}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>

              <div className="pt-2">
                <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{step.highlight}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <div id="faqs" className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-subtle space-y-6">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500">Common questions about scheme matching, privacy, and verification.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white text-center space-y-4 shadow-lg">
        <h3 className="text-2xl font-bold">Ready to try GovAssist AI?</h3>
        <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
          Start a quick conversation and see which government schemes you and your family may qualify for today.
        </p>
        <button
          onClick={() => navigate('/assistant')}
          className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm rounded-xl shadow-md transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>Launch AI Assistant</span>
        </button>
      </div>

      <DisclaimerBanner />

    </div>
  );
};
