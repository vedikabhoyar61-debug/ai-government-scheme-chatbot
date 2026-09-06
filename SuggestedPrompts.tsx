import React from 'react';
import { 
  GraduationCap, 
  Sprout, 
  HeartHandshake, 
  Briefcase, 
  Home, 
  Activity,
  IndianRupee,
  Sparkles
} from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

interface SuggestedPromptsProps {
  onSelectPrompt: (promptText: string) => void;
  customPrompts?: string[];
}

export const SuggestedPrompts: React.FC<SuggestedPromptsProps> = ({
  onSelectPrompt,
  customPrompts
}) => {
  const { language, t } = useProfile();

  if (customPrompts && customPrompts.length > 0) {
    return (
      <div className="flex flex-wrap items-center gap-2 py-2">
        {customPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => onSelectPrompt(prompt)}
            className="px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50/90 hover:bg-blue-100 hover:border-blue-300 border border-blue-200 rounded-full transition-all text-left flex items-center gap-1.5 shadow-2xs"
          >
            <Sparkles className="w-3 h-3 text-blue-500 shrink-0" />
            <span>{prompt}</span>
          </button>
        ))}
      </div>
    );
  }

  const localizedStarters: Record<string, { text: string; icon: any }[]> = {
    hi: [
      { text: "मेरे लिए योजनाएं खोजें", icon: Sparkles },
      { text: "मैं 21 वर्षीय छात्र हूं (स्कॉलरशिप)", icon: GraduationCap },
      { text: "मैं एक छोटा किसान हूं (पीएम किसान)", icon: Sprout },
      { text: "महिला सशक्तिकरण और व्यवसाय योजनाएं", icon: HeartHandshake },
      { text: "मेरी दुकान के लिए बिना गारंटी लोन (मुद्रा)", icon: Briefcase },
      { text: "आयुष्मान भारत मुफ्त स्वास्थ्य कार्ड", icon: Activity },
      { text: "आवास निर्माण सहायता (पीएम आवास)", icon: Home },
      { text: "वरिष्ठ नागरिकों के लिए पेंशन योजनाएं", icon: IndianRupee },
    ],
    mr: [
      { text: "माझ्यासाठी योजना शोधा", icon: Sparkles },
      { text: "मी २१ वर्षांचा विद्यार्थी आहे (शिष्यवृत्ती)", icon: GraduationCap },
      { text: "मी अल्पभूधारक शेतकरी आहे (पीएम किसान)", icon: Sprout },
      { text: "माझी लाडकी बहीण योजना पात्रता", icon: HeartHandshake },
      { text: "छोट्या दुकानासाठी कर्ज (मुद्रा योजना)", icon: Briefcase },
      { text: "मोफत उपचारासाठी आयुष्मान भारत कार्ड", icon: Activity },
      { text: "घरकुल योजना अनुदान (पीएम आवास)", icon: Home },
      { text: "ज्येष्ठ नागरिकांसाठी पेन्शन योजना", icon: IndianRupee },
    ],
    ta: [
      { text: "எனக்கான திட்டங்களை கண்டறியவும்", icon: Sparkles },
      { text: "நான் 21 வயது மாணவன் (கல்வி உதவித்தொகை)", icon: GraduationCap },
      { text: "நான் ஒரு விவசாயி (PM-KISAN உதவி)", icon: Sprout },
      { text: "மகளிர் உரிமைத் திட்டம் மற்றும் கடனுதவி", icon: HeartHandshake },
      { text: "சிறு வணிகத்திற்கான பிணையில்லா கடன் (முத்ரா)", icon: Briefcase },
      { text: "ஆயுஷ்மான் பாரத் இலவச மருத்துவ காப்பீடு", icon: Activity },
      { text: "வீடு கட்டும் மானியம் (PMAY திட்டம்)", icon: Home },
      { text: "முதியோர் ஓய்வூதிய திட்டங்கள்", icon: IndianRupee },
    ],
    te: [
      { text: "నా కోసం పథకాలను శోధించండి", icon: Sparkles },
      { text: "నేను 21 సంవత్సరాల విద్యార్థిని (స్కాలర్‌షిప్)", icon: GraduationCap },
      { text: "నేను చిన్న రైతును (పీఎం కిసాన్)", icon: Sprout },
      { text: "మహిళా సాధికారత మరియు ఆర్థిక పథకాలు", icon: HeartHandshake },
      { text: "చిన్న వ్యాపారం కోసం రుణం (ముద్ర లోన్)", icon: Briefcase },
      { text: "ఉచిత వైద్యం కోసం ఆయుష్మాన్ భారత్", icon: Activity },
      { text: "గృహ నిర్మాణ గ్రాంట్ (పీఎం ఆవాస్)", icon: Home },
      { text: "వృద్ధాప్య పెన్షన్ పథకాలు", icon: IndianRupee },
    ],
    bn: [
      { text: "আমার জন্য উপযুক্ত প্রকল্প খুঁজুন", icon: Sparkles },
      { text: "আমি ২১ বছর বয়সী ছাত্র (স্কলারশিপ)", icon: GraduationCap },
      { text: "আমি একজন প্রান্তিক কৃষক (পিএম কিসান)", icon: Sprout },
      { text: "মহিলাদের জন্য আর্থিক সহায়তা প্রকল্প", icon: HeartHandshake },
      { text: "ছোট ব্যবসার জন্য ঋণ (মুদ্রা যোজনা)", icon: Briefcase },
      { text: "আয়ুষ্মান ভারত বিনামূল্যে স্বাস্থ্য কার্ড", icon: Activity },
      { text: "বাড়ি তৈরির সরকারি অনুদান (আবাস যোজনা)", icon: Home },
      { text: "প্রবীণ নাগরিকদের জন্য পেনশন প্রকল্প", icon: IndianRupee },
    ],
    gu: [
      { text: "મારા માટે યોજનાઓ શોધો", icon: Sparkles },
      { text: "હું ૨૧ વર્ષીય વિદ્યાર્થી છું (શિષ્યવૃત્તિ)", icon: GraduationCap },
      { text: "હું એક નાનો ખેડૂત છું (પીએમ કિસાન)", icon: Sprout },
      { text: "મહિલા સશક્તિકરણ અને વ્યાપાર યોજનાઓ", icon: HeartHandshake },
      { text: "નાની દુકાન માટે લોન (મુદ્રા યોજના)", icon: Briefcase },
      { text: "આયુષ્માન ભારત મફત સારવાર કાર્ડ", icon: Activity },
      { text: "મકાન સહાય યોજના (પીએમ આવાસ)", icon: Home },
      { text: "વરિષ્ઠ નાગરિકો માટે પેન્શન યોજનાઓ", icon: IndianRupee },
    ],
    en: [
      { text: "Find schemes for me", icon: Sparkles },
      { text: "I'm a 21-year-old student in Maharashtra", icon: GraduationCap },
      { text: "I'm a small farmer looking for income support", icon: Sprout },
      { text: "Show schemes for women entrepreneurs", icon: HeartHandshake },
      { text: "I need collateral-free loan for my small shop", icon: Briefcase },
      { text: "Check eligibility for Ayushman Bharat health card", icon: Activity },
      { text: "I want housing construction grant (PMAY)", icon: Home },
      { text: "Show financial pension schemes for seniors", icon: IndianRupee },
    ]
  };

  const defaultStarters = localizedStarters[language] || localizedStarters['en'];

  return (
    <div className="w-full">
      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        <span>{t('chat_suggested_starters')}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {defaultStarters.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => onSelectPrompt(item.text)}
              className="p-2.5 text-left text-xs text-slate-700 hover:text-blue-700 bg-slate-50/80 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-200 rounded-xl transition-all flex items-center gap-2.5 group shadow-2xs"
            >
              <div className="w-7 h-7 rounded-lg bg-white group-hover:bg-blue-600 group-hover:text-white text-slate-500 border border-slate-200 flex items-center justify-center shrink-0 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium flex-1 line-clamp-1">{item.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
