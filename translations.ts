export type LanguageCode = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn' | 'gu';

export interface TranslationDict {
  // Navigation
  nav_home: string;
  nav_find_schemes: string;
  nav_ai_assistant: string;
  nav_how_it_works: string;
  nav_about: string;
  nav_dashboard: string;
  nav_sign_in: string;
  nav_start_assistant: string;
  nav_select_lang: string;
  nav_sign_out: string;

  // Hero Section
  hero_badge: string;
  hero_title_1: string;
  hero_title_highlight: string;
  hero_desc: string;
  hero_cta_start: string;
  hero_cta_explore: string;
  hero_trust_verified: string;
  hero_trust_personalized: string;
  hero_trust_free: string;
  hero_preview_title: string;
  hero_preview_subtitle: string;
  hero_preview_badge: string;
  hero_preview_user_msg: string;
  hero_preview_ai_msg: string;
  hero_preview_cta: string;

  // How It Works
  hiw_badge: string;
  hiw_title: string;
  hiw_subtitle: string;
  hiw_step1_title: string;
  hiw_step1_desc: string;
  hiw_step2_title: string;
  hiw_step2_desc: string;
  hiw_step3_title: string;
  hiw_step3_desc: string;

  // Assistant & Chat
  chat_live_engine: string;
  chat_active_desc: string;
  chat_new_chat: string;
  chat_placeholder: string;
  chat_send: string;
  chat_disclaimer_short: string;
  chat_no_form_notice: string;
  chat_welcome_title: string;
  chat_welcome_msg: string;
  chat_recommended_schemes: string;
  chat_verified_criteria: string;
  chat_read_aloud: string;
  chat_copy: string;
  chat_suggested_starters: string;
  chat_checking_eligibility: string;

  // Profile Summary Panel
  profile_title: string;
  profile_subtitle: string;
  profile_completeness: string;
  profile_edit: string;
  profile_save: string;
  profile_cancel: string;
  profile_reset: string;
  profile_age: string;
  profile_gender: string;
  profile_state: string;
  profile_occupation: string;
  profile_income: string;
  profile_category: string;
  profile_not_specified: string;
  profile_privacy_note: string;

  // Scheme Cards & Modal
  scheme_view_details: string;
  scheme_official_portal: string;
  scheme_key_benefit: string;
  scheme_why_match: string;
  scheme_req_docs: string;
  scheme_mandatory: string;
  scheme_optional: string;
  scheme_apply_official: string;
  scheme_last_verified: string;
  scheme_central: string;
  scheme_state_scheme: string;
  scheme_overview_tab: string;
  scheme_eligibility_tab: string;
  scheme_docs_tab: string;
  scheme_process_tab: string;
  scheme_faqs_tab: string;
  scheme_doc_tracker: string;
  scheme_ready_count: string;
  scheme_close: string;

  // Directory & Explore
  schemes_title: string;
  schemes_subtitle: string;
  schemes_search_placeholder: string;
  schemes_filter_level: string;
  schemes_filter_category: string;
  schemes_filter_state: string;
  schemes_filter_beneficiary: string;
  schemes_filter_income: string;
  schemes_showing: string;
  schemes_sort_by: string;
  schemes_sort_popular: string;
  schemes_sort_alpha: string;
  schemes_clear_all: string;
  schemes_no_results: string;
  schemes_reset_filters: string;

  // Dashboard
  dash_welcome: string;
  dash_subtitle: string;
  dash_saved_schemes: string;
  dash_recommendations: string;
  dash_ready_docs: string;
  dash_status_saved: string;
  dash_status_docs_ready: string;
  dash_status_applied: string;

  // Common Disclaimer
  disclaimer_title: string;
  disclaimer_desc: string;
  disclaimer_footer: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDict> = {
  // 1. ENGLISH
  en: {
    nav_home: 'Home',
    nav_find_schemes: 'Find Schemes',
    nav_ai_assistant: 'AI Assistant',
    nav_how_it_works: 'How It Works',
    nav_about: 'About',
    nav_dashboard: 'Dashboard',
    nav_sign_in: 'Sign In',
    nav_start_assistant: 'Start Assistant',
    nav_select_lang: 'Language',
    nav_sign_out: 'Sign Out',

    hero_badge: 'AI-Powered Government Services',
    hero_title_1: 'Find Government Schemes You',
    hero_title_highlight: 'May Be Eligible For',
    hero_desc: 'Tell us about yourself, and our AI assistant will help you discover relevant government schemes, understand eligibility, prepare documents, and navigate to official application links.',
    hero_cta_start: 'Start Assistant',
    hero_cta_explore: 'Explore Schemes',
    hero_trust_verified: 'Verified Government Sources',
    hero_trust_personalized: 'Personalized Recommendations',
    hero_trust_free: '100% Free & Unbiased',
    hero_preview_title: 'GovAssist Live Preview',
    hero_preview_subtitle: 'Intelligent Citizen Matching',
    hero_preview_badge: 'Try Dialogue Below',
    hero_preview_user_msg: "I'm a 21-year-old student from Maharashtra. My family income is around ₹2.5 lakh per year.",
    hero_preview_ai_msg: 'I found 4 verified schemes that may be relevant to your profile:',
    hero_preview_cta: 'Launch Assistant',

    hiw_badge: 'Simple 3-Step Process',
    hiw_title: 'How GovAssist AI Works For Citizens',
    hiw_subtitle: 'No complex government jargon. Just clear conversational guidance from discovery to official application.',
    hiw_step1_title: 'Tell Us About You',
    hiw_step1_desc: 'Answer a few simple questions in plain language about your age, state, education, occupation, or family income.',
    hiw_step2_title: 'Discover Relevant Schemes',
    hiw_step2_desc: 'Our intelligent engine cross-checks verified Central and State scheme databases to pinpoint schemes you may qualify for.',
    hiw_step3_title: 'Apply With Confidence',
    hiw_step3_desc: 'Review required documents, follow step-by-step guidance, and navigate directly to verified official government portals.',

    chat_live_engine: 'GovAssist AI Live Engine',
    chat_active_desc: 'Government welfare discovery & verification active',
    chat_new_chat: 'New Chat',
    chat_placeholder: "Ask anything (e.g. 'I am a student in Karnataka, family income 2 lakh' or 'PM-KISAN eligibility')...",
    chat_send: 'Send',
    chat_disclaimer_short: 'GovAssist AI gives verified informational guidance only.',
    chat_no_form_notice: 'No registration form on this site • Direct official links',
    chat_welcome_title: 'Namaste and welcome to GovAssist AI! 🇮🇳',
    chat_welcome_msg: "I am your official-grade digital assistant for discovering Indian Government schemes. Tell me about your situation (e.g. 'I'm a 21-year-old student in Maharashtra with family income of ₹2.5 Lakh' or 'Farmer in UP looking for financial grants'), and I will guide you through verified eligibility and official application portals.",
    chat_recommended_schemes: 'Recommended Government Schemes',
    chat_verified_criteria: 'Verified Criteria',
    chat_read_aloud: 'Read aloud',
    chat_copy: 'Copy response',
    chat_suggested_starters: 'Suggested Starting Prompts',
    chat_checking_eligibility: 'Checking eligibility & schemes',

    profile_title: 'Your Citizen Profile',
    profile_subtitle: 'Auto-extracted from your chat',
    profile_completeness: 'Profile Completeness',
    profile_edit: 'Edit',
    profile_save: 'Save Profile',
    profile_cancel: 'Cancel',
    profile_reset: 'Reset Profile',
    profile_age: 'Age',
    profile_gender: 'Gender',
    profile_state: 'State',
    profile_occupation: 'Occupation',
    profile_income: 'Family Income',
    profile_category: 'Category',
    profile_not_specified: 'Not specified',
    profile_privacy_note: 'Profile data is kept securely in your local browser and never sold or shared.',

    scheme_view_details: 'View Details',
    scheme_official_portal: 'Official Portal',
    scheme_key_benefit: 'Key Benefit:',
    scheme_why_match: 'Potential Match Criteria:',
    scheme_req_docs: 'Required Docs:',
    scheme_mandatory: 'Mandatory',
    scheme_optional: 'Optional',
    scheme_apply_official: 'Apply on Official Government Website',
    scheme_last_verified: 'Verified:',
    scheme_central: 'Central Sector Scheme',
    scheme_state_scheme: 'State Scheme',
    scheme_overview_tab: 'Overview & Benefits',
    scheme_eligibility_tab: 'Eligibility Criteria',
    scheme_docs_tab: 'Required Documents',
    scheme_process_tab: 'Official Application Steps',
    scheme_faqs_tab: 'FAQs & Helpline',
    scheme_doc_tracker: 'Document Checklist & Readiness Tracker',
    scheme_ready_count: 'Ready',
    scheme_close: 'Close',

    schemes_title: 'Explore Government Schemes & Subsidies',
    schemes_subtitle: 'Search verified schemes across Central Ministries and State initiatives with official portal links.',
    schemes_search_placeholder: "Search schemes by name, keyword (e.g. 'Scholarship', 'PM-KISAN', 'Mudra')...",
    schemes_filter_level: 'Government Level',
    schemes_filter_category: 'Scheme Category',
    schemes_filter_state: 'State / Territory',
    schemes_filter_beneficiary: 'Target Beneficiary',
    schemes_filter_income: 'Annual Family Income Limit',
    schemes_showing: 'Showing',
    schemes_sort_by: 'Sort by:',
    schemes_sort_popular: 'Most Popular & Flagship',
    schemes_sort_alpha: 'Alphabetical (A-Z)',
    schemes_clear_all: 'Clear all',
    schemes_no_results: "We couldn't find a strong match yet",
    schemes_reset_filters: 'Reset Filters',

    dash_welcome: 'Welcome back,',
    dash_subtitle: 'Track your saved schemes, review personalized AI recommendations, and manage your document readiness.',
    dash_saved_schemes: 'Saved Schemes',
    dash_recommendations: 'AI Recommendations',
    dash_ready_docs: 'Ready Documents',
    dash_status_saved: '📋 Saved',
    dash_status_docs_ready: '✅ Documents Ready',
    dash_status_applied: '🚀 Applied on Portal',

    disclaimer_title: 'Verified Information & Strict Direct Portal Application Policy',
    disclaimer_desc: 'GovAssist AI is an independent citizen assistance service and does not charge any fees or process scheme applications directly. Always complete your application directly on the official department portals (.gov.in / .nic.in).',
    disclaimer_footer: 'GovAssist AI is an independent, non-governmental informational assistance platform designed to help citizens understand welfare schemes. Applications must be completed on official government portals.'
  },

  // 2. HINDI (हिन्दी)
  hi: {
    nav_home: 'होम',
    nav_find_schemes: 'योजनाएं खोजें',
    nav_ai_assistant: 'एआई सहायक',
    nav_how_it_works: 'यह कैसे काम करता है',
    nav_about: 'हमारे बारे में',
    nav_dashboard: 'डैशबोर्ड',
    nav_sign_in: 'साइन इन',
    nav_start_assistant: 'सहायक शुरू करें',
    nav_select_lang: 'भाषा',
    nav_sign_out: 'साइन आउट',

    hero_badge: 'एआई-संचालित सरकारी सेवाएं',
    hero_title_1: 'सरकारी योजनाएं खोजें जिनके लिए आप',
    hero_title_highlight: 'पात्र हो सकते हैं',
    hero_desc: 'अपने बारे में बताएं, और हमारा एआई सहायक आपको प्रासंगिक सरकारी योजनाओं की खोज करने, पात्रता समझने, दस्तावेज तैयार करने और आधिकारिक पोर्टल लिंक तक पहुंचने में मदद करेगा।',
    hero_cta_start: 'सहायक शुरू करें',
    hero_cta_explore: 'योजनाएं देखें',
    hero_trust_verified: 'सत्यापित सरकारी स्रोत',
    hero_trust_personalized: 'व्यक्तिगत सिफारिशें',
    hero_trust_free: '100% निःशुल्क और निष्पक्ष',
    hero_preview_title: 'गोवअसिस्ट लाइव पूर्वावलोकन',
    hero_preview_subtitle: 'सटीक नागरिक योजना मिलान',
    hero_preview_badge: 'नीचे चैट आज़माएं',
    hero_preview_user_msg: 'मैं महाराष्ट्र से 21 वर्षीय छात्र हूं। मेरी पारिवारिक वार्षिक आय ₹2.5 लाख है।',
    hero_preview_ai_msg: 'मुझे आपकी प्रोफ़ाइल के लिए 4 सत्यापित योजनाएं मिली हैं:',
    hero_preview_cta: 'सहायक खोलें',

    hiw_badge: 'सरल 3-चरणीय प्रक्रिया',
    hiw_title: 'गोवअसिस्ट एआई नागरिकों के लिए कैसे काम करता है',
    hiw_subtitle: 'कोई जटिल सरकारी शब्दावली नहीं। केवल स्पष्ट और सीधी बातचीत के माध्यम से आधिकारिक आवेदन तक मार्गदर्शन।',
    hiw_step1_title: 'अपने बारे में बताएं',
    hiw_step1_desc: 'अपनी उम्र, राज्य, शिक्षा, व्यवसाय या पारिवारिक आय के बारे में सरल भाषा में उत्तर दें।',
    hiw_step2_title: 'प्रासंगिक योजनाएं खोजें',
    hiw_step2_desc: 'हमारा एआई इंजन केंद्र और राज्य योजनाओं के नियमों से मिलान करके उपयुक्त योजनाएं ढूंढता है।',
    hiw_step3_title: 'विश्वास के साथ आवेदन करें',
    hiw_step3_desc: 'जरूरी दस्तावेजों की सूची देखें, मार्गदर्शन समझें और सीधे आधिकारिक सरकारी पोर्टल पर जाएं।',

    chat_live_engine: 'गोवअसिस्ट एआई लाइव इंजन',
    chat_active_desc: 'सरकारी कल्याणकारी योजना खोज और सत्यापन सक्रिय',
    chat_new_chat: 'नई चैट',
    chat_placeholder: 'कुछ भी पूछें (उदा. "मैं यूपी का किसान हूं" या "छात्रवृत्ति योजनाएं")...',
    chat_send: 'भेजें',
    chat_disclaimer_short: 'गोवअसिस्ट केवल सत्यापित सूचनात्मक मार्गदर्शन प्रदान करता है।',
    chat_no_form_notice: 'इस साइट पर कोई पंजीकरण फॉर्म नहीं है • सीधे आधिकारिक लिंक',
    chat_welcome_title: 'नमस्ते और गोवअसिस्ट एआई में आपका स्वागत है! 🇮🇳',
    chat_welcome_msg: 'मैं भारतीय सरकारी योजनाओं की खोज के लिए आपका आधिकारिक डिजिटल सहायक हूं। अपनी स्थिति बताएं (उदा. "मैं 21 वर्षीय छात्र हूं" या "मुझे लघु व्यवसाय ऋण चाहिए"), और मैं आपको सत्यापित पात्रता और आधिकारिक पोर्टल्स तक मार्गदर्शन दूंगा।',
    chat_recommended_schemes: 'अनुशंसित सरकारी योजनाएं',
    chat_verified_criteria: 'सत्यापित मानदंड',
    chat_read_aloud: 'बोलकर सुनें',
    chat_copy: 'कॉपी करें',
    chat_suggested_starters: 'सुझाए गए प्रारंभिक प्रश्न',
    chat_checking_eligibility: 'पात्रता और योजनाओं की जांच की जा रही है',

    profile_title: 'आपकी नागरिक प्रोफ़ाइल',
    profile_subtitle: 'आपकी चैट से स्वतः निकाली गई',
    profile_completeness: 'प्रोफ़ाइल पूर्णता',
    profile_edit: 'संपादित करें',
    profile_save: 'सहेजें',
    profile_cancel: 'रद्द करें',
    profile_reset: 'रीसेट करें',
    profile_age: 'आयु',
    profile_gender: 'लिंग',
    profile_state: 'राज्य',
    profile_occupation: 'व्यवसाय',
    profile_income: 'पारिवारिक आय',
    profile_category: 'वर्ग / श्रेणी',
    profile_not_specified: 'अनिर्दिष्ट',
    profile_privacy_note: 'प्रोफ़ाइल डेटा आपके स्थानीय ब्राउज़र में सुरक्षित रहता है और कभी साझा नहीं किया जाता।',

    scheme_view_details: 'विवरण देखें',
    scheme_official_portal: 'आधिकारिक पोर्टल',
    scheme_key_benefit: 'मुख्य लाभ:',
    scheme_why_match: 'संभावित मिलान कारण:',
    scheme_req_docs: 'आवश्यक दस्तावेज:',
    scheme_mandatory: 'अनिवार्य',
    scheme_optional: 'वैकल्पिक',
    scheme_apply_official: 'आधिकारिक सरकारी वेबसाइट पर आवेदन करें',
    scheme_last_verified: 'सत्यापित:',
    scheme_central: 'केंद्रीय क्षेत्र योजना',
    scheme_state_scheme: 'राज्य योजना',
    scheme_overview_tab: 'अवलोकन और लाभ',
    scheme_eligibility_tab: 'पात्रता मानदंड',
    scheme_docs_tab: 'आवश्यक दस्तावेज',
    scheme_process_tab: 'आधिकारिक आवेदन प्रक्रिया',
    scheme_faqs_tab: 'अक्सर पूछे जाने वाले प्रश्न',
    scheme_doc_tracker: 'दस्तावेज़ चेकलिस्ट और तैयारी ट्रैकर',
    scheme_ready_count: 'तैयार',
    scheme_close: 'बंद करें',

    schemes_title: 'सरकारी योजनाओं और सब्सिडी की खोज करें',
    schemes_subtitle: 'केंद्र और राज्य मंत्रालयों की सत्यापित योजनाएं खोजें और आधिकारिक पोर्टल पर आवेदन करें।',
    schemes_search_placeholder: 'योजना का नाम या कीवर्ड खोजें (उदा. "स्कॉलरशिप", "किसान", "मुद्रा")...',
    schemes_filter_level: 'सरकारी स्तर',
    schemes_filter_category: 'योजना श्रेणी',
    schemes_filter_state: 'राज्य / केंद्र शासित प्रदेश',
    schemes_filter_beneficiary: 'लक्षित लाभार्थी',
    schemes_filter_income: 'वार्षिक पारिवारिक आय सीमा',
    schemes_showing: 'दिखाए जा रहे हैं',
    schemes_sort_by: 'क्रमबद्ध करें:',
    schemes_sort_popular: 'सर्वाधिक लोकप्रिय',
    schemes_sort_alpha: 'वर्णमाला (A-Z)',
    schemes_clear_all: 'सभी साफ़ करें',
    schemes_no_results: 'अभी तक कोई मिलान नहीं मिला',
    schemes_reset_filters: 'फ़िल्टर रीसेट करें',

    dash_welcome: 'स्वागत है,',
    dash_subtitle: 'अपनी सहेजी गई योजनाएं ट्रैक करें, एआई सिफारिशें देखें और दस्तावेज़ तत्परता प्रबंधित करें।',
    dash_saved_schemes: 'सहेजी गई योजनाएं',
    dash_recommendations: 'एआई सिफारिशें',
    dash_ready_docs: 'तैयार दस्तावेज',
    dash_status_saved: '📋 सहेजी गई',
    dash_status_docs_ready: '✅ दस्तावेज तैयार',
    dash_status_applied: '🚀 पोर्टल पर आवेदन किया',

    disclaimer_title: 'सत्यापित जानकारी और केवल आधिकारिक पोर्टल नीति',
    disclaimer_desc: 'गोवअसिस्ट एआई एक स्वतंत्र नागरिक सहायता सेवा है और सीधे आवेदन संसाधित नहीं करता। हमेशा आधिकारिक (.gov.in / .nic.in) पोर्टल पर आवेदन करें।',
    disclaimer_footer: 'गोवअसिस्ट एआई एक स्वतंत्र सूचनात्मक सहायता मंच है। आवेदन आधिकारिक सरकारी पोर्टलों पर ही जमा किए जाने चाहिए।'
  },

  // 3. MARATHI (मराठी)
  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_find_schemes: 'योजना शोधा',
    nav_ai_assistant: 'एआय सहाय्यक',
    nav_how_it_works: 'कसे कार्य करते',
    nav_about: 'आमच्याबद्दल',
    nav_dashboard: 'डॅशबोर्ड',
    nav_sign_in: 'साइन इन',
    nav_start_assistant: 'सहाय्यक सुरू करा',
    nav_select_lang: 'भाषा',
    nav_sign_out: 'साइन आउट',

    hero_badge: 'एआय-सक्षम शासकीय सेवा',
    hero_title_1: 'शासकीय योजना शोधा ज्यासाठी तुम्ही',
    hero_title_highlight: 'पात्र असू शकता',
    hero_desc: 'तुमच्याबद्दल माहिती द्या आणि आमचा एआय सहाय्यक तुम्हाला शासकीय योजना शोधण्यात, पात्रता समजून घेण्यात आणि अधिकृत संकेतस्थळावर जाण्यासाठी मदत करेल.',
    hero_cta_start: 'सहाय्यक सुरू करा',
    hero_cta_explore: 'योजना पहा',
    hero_trust_verified: 'सत्यापित शासकीय स्त्रोत',
    hero_trust_personalized: 'वैयक्तिकृत शिफारसी',
    hero_trust_free: '१००% मोफत व निःपक्षपाती',
    hero_preview_title: 'गोवअसिस्ट थेट पूर्वावलोकन',
    hero_preview_subtitle: 'अचूक नागरिक योजना जुळणी',
    hero_preview_badge: 'खाली चॅट करून पहा',
    hero_preview_user_msg: 'मी महाराष्ट्रातील २१ वर्षांचा विद्यार्थी आहे. माझे वार्षिक उत्पन्न २.५ लाख रुपये आहे.',
    hero_preview_ai_msg: 'मला तुमच्या प्रोफाइलसाठी ४ सत्यापित योजना सापडल्या आहेत:',
    hero_preview_cta: 'सहाय्यक उघडा',

    hiw_badge: 'सोपी ३-टप्प्यांची प्रक्रिया',
    hiw_title: 'नागरिकांसाठी गोवअसिस्ट कसे कार्य करते',
    hiw_subtitle: 'कोणतीही कठीण शासकीय भाषा नाही. फक्त सोप्या संवादाद्वारे अधिकृत अर्जापर्यंत मार्गदर्शन.',
    hiw_step1_title: 'तुमच्याबद्दल सांगा',
    hiw_step1_desc: 'वय, राज्य, शिक्षण, व्यवसाय किंवा उत्पन्नाबद्दल सोप्या भाषेत माहिती द्या.',
    hiw_step2_title: 'योग्य योजना शोधा',
    hiw_step2_desc: 'आमचे एआय इंजिन केंद्र आणि राज्य शासनाच्या योजनांमधून तुमच्यासाठी योग्य योजना शोधते.',
    hiw_step3_title: 'आत्मविश्वासाने अर्ज करा',
    hiw_step3_desc: 'कागदपत्रांची यादी तपासा आणि थेट अधिकृत शासकीय पोर्टलवर जाऊन अर्ज करा.',

    chat_live_engine: 'गोवअसिस्ट एआय थेट इंजिन',
    chat_active_desc: 'शासकीय योजना शोध व पडताळणी सक्रिय',
    chat_new_chat: 'नवीन चॅट',
    chat_placeholder: 'काहीही विचारा (उदा. "मी शेतकरी आहे" किंवा "लाडकी बहीण योजना")...',
    chat_send: 'पाठवा',
    chat_disclaimer_short: 'गोवअसिस्ट फक्त अधिकृत माहितीपर मार्गदर्शन पुरवतो.',
    chat_no_form_notice: 'या वेबसाइटवर अर्ज फॉर्म नाही • थेट अधिकृत लिंक्स',
    chat_welcome_title: 'नमस्कार आणि गोवअसिस्ट एआय मध्ये आपले स्वागत आहे! 🇮🇳',
    chat_welcome_msg: 'भारतीय शासकीय योजना शोधण्यासाठी मी आपला डिजिटल सहाय्यक आहे. आपली माहिती सांगा आणि मी आपल्याला योग्य पात्रता आणि अधिकृत शासकीय पोर्टलकडे मार्गदर्शन करीन.',
    chat_recommended_schemes: 'शिफारस केलेल्या शासकीय योजना',
    chat_verified_criteria: 'सत्यापित निकष',
    chat_read_aloud: 'वाचा',
    chat_copy: 'कॉपी करा',
    chat_suggested_starters: 'सुचवलेले प्रश्न',
    chat_checking_eligibility: 'पात्रतेची तपासणी करत आहे',

    profile_title: 'आपली नागरिक प्रोफाइल',
    profile_subtitle: 'चॅटमधून आपोआप संकलित',
    profile_completeness: 'प्रोफाइल पूर्णता',
    profile_edit: 'संपादित करा',
    profile_save: 'जतन करा',
    profile_cancel: 'रद्द करा',
    profile_reset: 'रीसेट करा',
    profile_age: 'वय',
    profile_gender: 'लिंग',
    profile_state: 'राज्य',
    profile_occupation: 'व्यवसाय',
    profile_income: 'वार्षिक उत्पन्न',
    profile_category: 'प्रवर्ग',
    profile_not_specified: 'नमूद नाही',
    profile_privacy_note: 'माहिती आपल्या स्थानिक ब्राउझरमध्ये सुरक्षित ठेवली जाते.',

    scheme_view_details: 'तपशील पहा',
    scheme_official_portal: 'अधिकृत पोर्टल',
    scheme_key_benefit: 'मुख्य लाभ:',
    scheme_why_match: 'संभाव्य जुळणी कारण:',
    scheme_req_docs: 'आवश्यक कागदपत्रे:',
    scheme_mandatory: 'अनिवार्य',
    scheme_optional: 'पर्यायी',
    scheme_apply_official: 'अधिकृत संकेतस्थळावर अर्ज करा',
    scheme_last_verified: 'सत्यापित:',
    scheme_central: 'केंद्रीय योजना',
    scheme_state_scheme: 'राज्य शासन योजना',
    scheme_overview_tab: 'विहंगावलोकन आणि लाभ',
    scheme_eligibility_tab: 'पात्रता निकष',
    scheme_docs_tab: 'कागदपत्रे',
    scheme_process_tab: 'अर्ज प्रक्रिया',
    scheme_faqs_tab: 'वारंवार विचारले जाणारे प्रश्न',
    scheme_doc_tracker: 'कागदपत्रे चेकलिस्ट',
    scheme_ready_count: 'तयार',
    scheme_close: 'बंद करा',

    schemes_title: 'शासकीय योजना आणि अनुदाने शोधा',
    schemes_subtitle: 'केंद्र आणि राज्य मंत्रालयांच्या योजना शोधा आणि थेट अधिकृत पोर्टलवर अर्ज करा.',
    schemes_search_placeholder: 'योजनेचे नाव किंवा कीवर्ड शोधा...',
    schemes_filter_level: 'शासकीय स्तर',
    schemes_filter_category: 'श्रेणी',
    schemes_filter_state: 'राज्य',
    schemes_filter_beneficiary: 'लाभार्थी',
    schemes_filter_income: 'वार्षिक उत्पन्न मर्यादा',
    schemes_showing: 'दाखवत आहे',
    schemes_sort_by: 'क्रमवारी:',
    schemes_sort_popular: 'सर्वात लोकप्रिय',
    schemes_sort_alpha: 'अकारविल्हे (A-Z)',
    schemes_clear_all: 'सर्व पुसा',
    schemes_no_results: 'कोणतीही योजना सापडली नाही',
    schemes_reset_filters: 'फिल्टर रीसेट करा',

    dash_welcome: 'स्वागत आहे,',
    dash_subtitle: 'जतन केलेल्या योजना, शिफारसी आणि कागदपत्रांची तयारी तपासा.',
    dash_saved_schemes: 'जतन केलेल्या योजना',
    dash_recommendations: 'एआय शिफारसी',
    dash_ready_docs: 'तयार कागदपत्रे',
    dash_status_saved: '📋 जतन केले',
    dash_status_docs_ready: '✅ कागदपत्रे तयार',
    dash_status_applied: '🚀 पोर्टलवर अर्ज केला',

    disclaimer_title: 'सत्यापित माहिती आणि थेट अधिकृत पोर्टल अर्ज धोरण',
    disclaimer_desc: 'गोवअसिस्ट एआय ही एक स्वतंत्र नागरिक सहाय्य सेवा आहे. अर्ज नेहमी अधिकृत शासकीय पोर्टलवरच (.gov.in) पूर्ण करा.',
    disclaimer_footer: 'गोवअसिस्ट एआय हा एक स्वतंत्र माहितीपर सहाय्यक मंच आहे.'
  },

  // 4. TAMIL (தமிழ்)
  ta: {
    nav_home: 'முகப்பு',
    nav_find_schemes: 'திட்டங்களை காண்க',
    nav_ai_assistant: 'AI உதவியாளர்',
    nav_how_it_works: 'எப்படி இயங்குகிறது',
    nav_about: 'எங்களை பற்றி',
    nav_dashboard: 'டாஷ்போர்டு',
    nav_sign_in: 'உள்நுழைக',
    nav_start_assistant: 'உதவியாளரை தொடங்குக',
    nav_select_lang: 'மொழி',
    nav_sign_out: 'வெளியேறு',

    hero_badge: 'AI அரசு திட்ட சேவைகள்',
    hero_title_1: 'நீங்கள் தகுதி பெறக்கூடிய',
    hero_title_highlight: 'அரசு திட்டங்களை கண்டறியுங்கள்',
    hero_desc: 'உங்களை பற்றி கூறுங்கள், எங்கள் AI உதவியாளர் தகுதியான அரசு நலத்திட்டங்களை கண்டறியவும், ஆவணங்களை தயார் செய்யவும், அதிகாரப்பூர்வ போர்ட்டலில் விண்ணப்பிக்கவும் வழிகாட்டும்.',
    hero_cta_start: 'உதவியாளரை தொடங்கு',
    hero_cta_explore: 'திட்டங்களை காண்க',
    hero_trust_verified: 'சரிபார்க்கப்பட்ட அரசு மூலங்கள்',
    hero_trust_personalized: 'தனிப்பயனாக்கப்பட்ட பரிந்துரைகள்',
    hero_trust_free: '100% இலவசம்',
    hero_preview_title: 'GovAssist நேரடி மாதிரி',
    hero_preview_subtitle: 'துல்லியமான குடிமக்கள் பொருத்தம்',
    hero_preview_badge: 'கீழே முயற்சிக்கவும்',
    hero_preview_user_msg: 'நான் தமிழ்நாட்டை சேர்ந்த 21 வயது மாணவன். குடும்ப வருமானம் ₹2.5 லட்சம்.',
    hero_preview_ai_msg: 'உங்கள் விவரங்களுக்கு ஏற்ற 4 அரசு திட்டங்கள் கண்டறியப்பட்டுள்ளன:',
    hero_preview_cta: 'உதவியாளரை துவக்குக',

    hiw_badge: 'எளிய 3 படிகள்',
    hiw_title: 'GovAssist AI எவ்வாறு செயல்படுகிறது',
    hiw_subtitle: 'கடினமான அரசு வார்த்தைகள் இல்லை. எளிய உரையாடல் வழிகாட்டல்.',
    hiw_step1_title: 'உங்களை பற்றி கூறுங்கள்',
    hiw_step1_desc: 'வயது, மாநிலம், தொழில், வருமானம் பற்றி எளிய மொழியில் பதிலளிக்கவும்.',
    hiw_step2_title: 'திட்டங்களை கண்டறியுங்கள்',
    hiw_step2_desc: 'மத்திய மற்றும் மாநில திட்ட விதிகளை சரிபார்த்து உங்களுக்கு ஏற்ற திட்டங்களை காண்பிக்கும்.',
    hiw_step3_title: 'விண்ணப்பிக்கவும்',
    hiw_step3_desc: 'தேவையான ஆவணங்களை தயார் செய்து நேரடியாக அதிகாரப்பூர்வ அரசு தளத்தில் விண்ணப்பிக்கவும்.',

    chat_live_engine: 'GovAssist AI நேரடி இஞ்சின்',
    chat_active_desc: 'அரசு திட்ட வழிகாட்டல் செயலில் உள்ளது',
    chat_new_chat: 'புதிய உரையாடல்',
    chat_placeholder: 'ஏதேனும் கேளுங்கள் (उदा. "மகளிர் உரிமைத் திட்டம்" அல்லது "கல்வி உதவித்தொகை")...',
    chat_send: 'அனுப்பு',
    chat_disclaimer_short: 'GovAssist AI தகவல் வழிகாட்டல் மட்டுமே வழங்குகிறது.',
    chat_no_form_notice: 'இந்த தளத்தில் விண்ணப்ப படிவம் இல்லை • நேரடி அரசு இணைப்புகள்',
    chat_welcome_title: 'வணக்கம்! GovAssist AI க்கு நல்வரவு! 🇮🇳',
    chat_welcome_msg: 'இந்திய அரசு திட்டங்களை கண்டறிய நான் உங்கள் AI உதவியாளர். உங்கள் நிலையை கூறுங்கள், தகுதியான திட்டங்களையும் அதிகாரப்பூர்வ போர்ட்டலையும் காண்பிக்கிறேன்.',
    chat_recommended_schemes: 'பரிந்துரைக்கப்பட்ட அரசு திட்டங்கள்',
    chat_verified_criteria: 'சரிபார்க்கப்பட்ட தகுதிகள்',
    chat_read_aloud: 'கேட்க',
    chat_copy: 'நகலெடு',
    chat_suggested_starters: 'பரிந்துரைக்கப்பட்ட கேள்விகள்',
    chat_checking_eligibility: 'தகுதியை சரிபார்க்கிறது...',

    profile_title: 'உங்கள் சுயவிவரம்',
    profile_subtitle: 'உரையாடலில் இருந்து தானாக எடுக்கப்பட்டது',
    profile_completeness: 'முழுமை நிலை',
    profile_edit: 'திருத்து',
    profile_save: 'சேமி',
    profile_cancel: 'ரத்து',
    profile_reset: 'மீட்டமை',
    profile_age: 'வயது',
    profile_gender: 'பாலினம்',
    profile_state: 'மாநிலம்',
    profile_occupation: 'தொழில்',
    profile_income: 'குடும்ப வருமானம்',
    profile_category: 'பிரிவு',
    profile_not_specified: 'குறிப்பிடப்படவில்லை',
    profile_privacy_note: 'தகவல்கள் உங்கள் உலாவியில் மட்டுமே பாதுகாப்பாக இருக்கும்.',

    scheme_view_details: 'விவரங்களை காண்க',
    scheme_official_portal: 'அதிகாரப்பூர்வ தளம்',
    scheme_key_benefit: 'முக்கிய நன்மை:',
    scheme_why_match: 'பொருத்தத்திற்கான காரணம்:',
    scheme_req_docs: 'தேவையான ஆவணங்கள்:',
    scheme_mandatory: 'கட்டாயம்',
    scheme_optional: 'விருப்பத்தேர்வு',
    scheme_apply_official: 'அதிகாரப்பூர்வ அரசு தளத்தில் விண்ணப்பிக்கவும்',
    scheme_last_verified: 'சரிபார்க்கப்பட்டது:',
    scheme_central: 'மத்திய அரசு திட்டம்',
    scheme_state_scheme: 'மாநில அரசு திட்டம்',
    scheme_overview_tab: 'கண்ணோட்டம் & நன்மைகள்',
    scheme_eligibility_tab: 'தகுதி வரம்புகள்',
    scheme_docs_tab: 'ஆவணங்கள்',
    scheme_process_tab: 'விண்ணப்பிக்கும் முறை',
    scheme_faqs_tab: 'கேள்வி பதில்கள்',
    scheme_doc_tracker: 'ஆவணங்கள் பட்டியல்',
    scheme_ready_count: 'தயார்',
    scheme_close: 'மூடுக',

    schemes_title: 'அரசு நலத்திட்டங்களை கண்டறியுங்கள்',
    schemes_subtitle: 'மத்திய மற்றும் மாநில அரசுகளின் திட்டங்களை தேடி அதிகாரப்பூர்வ தளத்தில் விண்ணப்பிக்கவும்.',
    schemes_search_placeholder: 'திட்டத்தின் பெயரை தேடுக...',
    schemes_filter_level: 'அரசு நிலை',
    schemes_filter_category: 'பிரிவு',
    schemes_filter_state: 'மாநிலம்',
    schemes_filter_beneficiary: 'பயனாளி',
    schemes_filter_income: 'வருமான வரம்பு',
    schemes_showing: 'காண்பிக்கப்படுகிறது',
    schemes_sort_by: 'வரிசைப்படுத்து:',
    schemes_sort_popular: 'பிரபலமானவை',
    schemes_sort_alpha: 'அகரவரிசை (A-Z)',
    schemes_clear_all: 'அனைத்தையும் நீக்குக',
    schemes_no_results: 'திட்டங்கள் எதுவும் கிடைக்கவில்லை',
    schemes_reset_filters: 'வடிகட்டியை மீட்டமை',

    dash_welcome: 'நல்வரவு,',
    dash_subtitle: 'சேமிக்கப்பட்ட திட்டங்கள், ஆவணங்கள் மற்றும் பரிந்துரைகளை கண்காணிக்கவும்.',
    dash_saved_schemes: 'சேமித்த திட்டங்கள்',
    dash_recommendations: 'AI பரிந்துரைகள்',
    dash_ready_docs: 'தயாரான ஆவணங்கள்',
    dash_status_saved: '📋 சேமிக்கப்பட்டது',
    dash_status_docs_ready: '✅ ஆவணங்கள் தயார்',
    dash_status_applied: '🚀 தளத்தில் விண்ணப்பிக்கப்பட்டது',

    disclaimer_title: 'அதிகாரப்பூர்வ தகவல் & நேரடி விண்ணப்ப கொள்கை',
    disclaimer_desc: 'GovAssist AI ஒரு தகவல் வழிகாட்டி மட்டுமே. எப்போதும் அதிகாரப்பூர்வ (.gov.in) தளத்தில் விண்ணப்பிக்கவும்.',
    disclaimer_footer: 'GovAssist AI என்பது சுயாதீன தகவல் வழிகாட்டுதல் தளம் மட்டுமே.'
  },

  // 5. TELUGU (తెలుగు)
  te: {
    nav_home: 'హోమ్',
    nav_find_schemes: 'పథకాలను శోధించండి',
    nav_ai_assistant: 'AI అసిస్టెంట్',
    nav_how_it_works: 'ఇది ఎలా పనిచేస్తుంది',
    nav_about: 'మా గురించి',
    nav_dashboard: 'డాష్‌బోర్డ్',
    nav_sign_in: 'సైన్ ఇన్',
    nav_start_assistant: 'అసిస్టెంట్ ప్రారంభించండి',
    nav_select_lang: 'భాష',
    nav_sign_out: 'సైన్ అవుట్',

    hero_badge: 'AI-ఆధారిత ప్రభుత్వ సేవలు',
    hero_title_1: 'మీరు అర్హత సాధించగల',
    hero_title_highlight: 'ప్రభుత్వ పథకాలను కనుగొనండి',
    hero_desc: 'మీ వివరాలను చెప్పండి, మా AI అసిస్టెంట్ మీకు తగిన సంక్షేమ పథకాలను కనుగొనడానికి, అవసరమైన పత్రాలను సిద్ధం చేయడానికి మరియు అధికారిక పోర్టల్‌లో దరఖాస్తు చేసుకోవడానికి మార్గనిర్దేశం చేస్తుంది.',
    hero_cta_start: 'అసిస్టెంట్ ప్రారంభించండి',
    hero_cta_explore: 'పథకాలను చూడండి',
    hero_trust_verified: 'ధృవీకరించబడిన ప్రభుత్వ వనరులు',
    hero_trust_personalized: 'వ్యక్తిగతీకరించిన సిఫార్సులు',
    hero_trust_free: '100% ఉచితం',
    hero_preview_title: 'GovAssist లైవ్ ప్రివ్యూ',
    hero_preview_subtitle: 'పౌరుల పథక అర్హత శోధన',
    hero_preview_badge: 'క్రింద ప్రయత్నించండి',
    hero_preview_user_msg: 'నేను 21 సంవత్సరాల విద్యార్థిని, కుటుంబ వార్షిక ఆదాయం ₹2.5 లక్షలు.',
    hero_preview_ai_msg: 'మీ ప్రొఫైల్‌కు తగిన 4 ప్రభుత్వ పథకాలు కనుగొనబడ్డాయి:',
    hero_preview_cta: 'అసిస్టెంట్ ప్రారంభించు',

    hiw_badge: 'సులభమైన 3 దశలు',
    hiw_title: 'GovAssist AI పౌరుల కోసం ఎలా పనిచేస్తుంది',
    hiw_subtitle: 'కష్టమైన నిబంధనలు లేవు. సులభమైన సంభాషణ ద్వారా అధికారిక దరఖాస్తు వరకు పూర్తి మార్గదర్శనం.',
    hiw_step1_title: 'మీ వివరాలను తెలియజేయండి',
    hiw_step1_desc: 'వయస్సు, రాష్ట్రం, విద్య, వృత్తి లేదా ఆదాయం గురించి సులభమైన సమాధానాలు ఇవ్వండి.',
    hiw_step2_title: 'పథకాలను కనుగొనండి',
    hiw_step2_desc: 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాల నిబంధనలతో పోల్చి సరైన పథకాలను గుర్తిస్తుంది.',
    hiw_step3_title: 'దరఖాస్తు చేసుకోండి',
    hiw_step3_desc: 'కావలసిన పత్రాలను సిద్ధం చేసి నేరుగా అధికారిక ప్రభుత్వ పోర్టల్‌లో దరఖాస్తు చేయండి.',

    chat_live_engine: 'GovAssist AI లైవ్ ఇంజిన్',
    chat_active_desc: 'ప్రభుత్వ పథకాల శోధన & ధృవీకరణ యాక్టివ్‌గా ఉంది',
    chat_new_chat: 'కొత్త చాట్',
    chat_placeholder: 'ఏదైనా అడగండి (ఉదా. "నేను రైతును", "విద్యార్థి వేతనాలు")...',
    chat_send: 'పంపు',
    chat_disclaimer_short: 'GovAssist కేవలం సమాచార మార్గదర్శకత్వాన్ని మాత్రమే అందిస్తుంది.',
    chat_no_form_notice: 'ఈ సైట్‌లో రిజిస్ట్రేషన్ ఫారమ్‌లు లేవు • నేరుగా అధికారిక లింకులు',
    chat_welcome_title: 'నమస్కారం! GovAssist AI కి స్వాగతం! 🇮🇳',
    chat_welcome_msg: 'భారత ప్రభుత్వ పథకాలను కనుగొనడంలో నేను మీ డిజిటల్ అసిస్టెంట్‌ని. మీ వివరాలను చెప్పండి, అర్హతలను మరియు అధికారిక పోర్టల్‌లను నేను చూపిస్తాను.',
    chat_recommended_schemes: 'సిఫార్సు చేయబడిన పథకాలు',
    chat_verified_criteria: 'ధృవీకరించబడిన నిబంధనలు',
    chat_read_aloud: 'వినండి',
    chat_copy: 'కాపీ చేయండి',
    chat_suggested_starters: 'సూచించబడిన ప్రశ్నలు',
    chat_checking_eligibility: 'అర్హతలను తనిఖీ చేస్తోంది...',

    profile_title: 'మీ ప్రొఫైల్',
    profile_subtitle: 'చాట్ నుండి స్వయంచాలకంగా తీసుకోబడింది',
    profile_completeness: 'ప్రొఫైల్ పూర్తి శాతం',
    profile_edit: 'సవరించు',
    profile_save: 'సేవ్ చేయి',
    profile_cancel: 'రద్దు చేయి',
    profile_reset: 'రీసెట్ చేయి',
    profile_age: 'వయస్సు',
    profile_gender: 'లింగం',
    profile_state: 'రాష్ట్రం',
    profile_occupation: 'వృత్తి',
    profile_income: 'కుటుంబ ఆదాయం',
    profile_category: 'కేటగిరీ',
    profile_not_specified: 'పేర్కొనబడలేదు',
    profile_privacy_note: 'మీ డేటా మీ స్థానిక బ్రౌజర్‌లో సురక్షితంగా ఉంటుంది.',

    scheme_view_details: 'వివరాలు చూడండి',
    scheme_official_portal: 'అధికారిక పోర్టల్',
    scheme_key_benefit: 'ప్రధాన ప్రయోజనం:',
    scheme_why_match: 'అర్హత కారణం:',
    scheme_req_docs: 'అవసరమైన పత్రాలు:',
    scheme_mandatory: 'తప్పనిసరి',
    scheme_optional: 'ఐచ్ఛికం',
    scheme_apply_official: 'అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో దరఖాస్తు చేయండి',
    scheme_last_verified: 'ధృవీకరించబడింది:',
    scheme_central: 'కేంద్ర ప్రభుత్వ పథకం',
    scheme_state_scheme: 'రాష్ట్ర ప్రభుత్వ పథకం',
    scheme_overview_tab: 'సమీక్ష & ప్రయోజనాలు',
    scheme_eligibility_tab: 'అర్హత నిబంధనలు',
    scheme_docs_tab: 'పత్రాలు',
    scheme_process_tab: 'దరఖాస్తు విధానం',
    scheme_faqs_tab: 'ప్రశ్నలు & సమాధానాలు',
    scheme_doc_tracker: 'పత్రాల చెక్‌లిస్ట్',
    scheme_ready_count: 'సిద్ధం',
    scheme_close: 'మూసివేయి',

    schemes_title: 'ప్రభుత్వ పథకాలు & సబ్సిడీలను శోధించండి',
    schemes_subtitle: 'కేంద్ర మరియు రాష్ట్ర ప్రభుత్వ పథకాలను శోధించి అధికారిక పోర్టల్‌లో దరఖాస్తు చేసుకోండి.',
    schemes_search_placeholder: 'పథకం పేరు లేదా కీవర్డ్ శోధించండి...',
    schemes_filter_level: 'ప్రభుత్వ స్థాయి',
    schemes_filter_category: 'కేటగిరీ',
    schemes_filter_state: 'రాష్ట్రం',
    schemes_filter_beneficiary: 'లబ్ధిదారుడు',
    schemes_filter_income: 'ఆదాయ పరిమితి',
    schemes_showing: 'చూపుతోంది',
    schemes_sort_by: 'క్రమబద్ధీకరించు:',
    schemes_sort_popular: 'అత్యంత ప్రజాదరణ పొందినవి',
    schemes_sort_alpha: 'అక్షరమాల (A-Z)',
    schemes_clear_all: 'అన్నీ క్లియర్ చేయి',
    schemes_no_results: 'ఎలాంటి పథకాలు కనుగొనబడలేదు',
    schemes_reset_filters: 'ఫిల్టర్లు రీసెట్ చేయి',

    dash_welcome: 'స్వాగతం,',
    dash_subtitle: 'సేవ్ చేసిన పథకాలు, సిఫార్సులు మరియు పత్రాల సంసిద్ధతను పర్యవేక్షించండి.',
    dash_saved_schemes: 'సేవ్ చేసిన పథకాలు',
    dash_recommendations: 'AI సిఫార్సులు',
    dash_ready_docs: 'సిద్ధంగా ఉన్న పత్రాలు',
    dash_status_saved: '📋 సేవ్ చేయబడింది',
    dash_status_docs_ready: '✅ పత్రాలు సిద్ధం',
    dash_status_applied: '🚀 పోర్టల్‌లో దరఖాస్తు చేయబడింది',

    disclaimer_title: 'అధికారిక సమాచారం & ప్రత్యక్ష పోర్టల్ విధానం',
    disclaimer_desc: 'GovAssist AI కేవలం సమాచార వేదిక మాత్రమే. ఎల్లప్పుడూ అధికారిక (.gov.in) పోర్టల్‌లో దరఖాస్తు చేసుకోండి.',
    disclaimer_footer: 'GovAssist AI అనేది ఒక స్వతంత్ర సమాచార సహాయ వేదిక మాత్రమే.'
  },

  // 6. BENGALI (বাংলা)
  bn: {
    nav_home: 'হোম',
    nav_find_schemes: 'প্রকল্প খুঁজুন',
    nav_ai_assistant: 'AI সহায়ক',
    nav_how_it_works: 'কিভাবে কাজ করে',
    nav_about: 'আমাদের সম্পর্কে',
    nav_dashboard: 'ড্যাশবোর্ড',
    nav_sign_in: 'সাইন ইন',
    nav_start_assistant: 'সহায়ক শুরু করুন',
    nav_select_lang: 'ভাষা',
    nav_sign_out: 'সাইন আউট',

    hero_badge: 'AI চালিত সরকারি পরিষেবা',
    hero_title_1: 'সরকারি প্রকল্প খুঁজুন যার জন্য আপনি',
    hero_title_highlight: 'যোগ্য হতে পারেন',
    hero_desc: 'আপনার সম্পর্কে বলুন, আমাদের AI সহায়ক আপনাকে উপযুক্ত সরকারি প্রকল্প খুঁজে পেতে, যোগ্যতা বুঝতে এবং অফিসিয়াল পোর্টালে আবেদন করতে সাহায্য করবে।',
    hero_cta_start: 'সহায়ক শুরু করুন',
    hero_cta_explore: 'প্রকল্পগুলি দেখুন',
    hero_trust_verified: 'যাচাইকৃত সরকারি উৎস',
    hero_trust_personalized: 'ব্যক্তিগতকৃত সুপারিশ',
    hero_trust_free: '১০০% বিনামূল্যে',
    hero_preview_title: 'GovAssist লাইভ প্রিভিউ',
    hero_preview_subtitle: 'সঠিক নাগরিক প্রকল্প মিল',
    hero_preview_badge: 'নিচে চ্যাট করে দেখুন',
    hero_preview_user_msg: 'আমি ২১ বছর বয়সী ছাত্র, বার্ষিক পারিবারিক আয় ২.৫ লক্ষ টাকা।',
    hero_preview_ai_msg: 'আপনার প্রোফাইলের জন্য ৪টি যাচাইকৃত সরকারি প্রকল্প পাওয়া গেছে:',
    hero_preview_cta: 'সহায়ক খুলুন',

    hiw_badge: 'সহজ ৩টি ধাপ',
    hiw_title: 'GovAssist AI কিভাবে কাজ করে',
    hiw_subtitle: 'কোনো জটিল সরকারি ভাষা নেই। সহজ কথোপকথনের মাধ্যমে অফিসিয়াল আবেদন পর্যন্ত সম্পূর্ণ পথনির্দেশ।',
    hiw_step1_title: 'আপনার তথ্য দিন',
    hiw_step1_desc: 'বয়স, রাজ্য, শিক্ষা, পেশা বা পারিবারিক আয়ের সহজ উত্তর দিন।',
    hiw_step2_title: 'উপযুক্ত প্রকল্প খুঁজুন',
    hiw_step2_desc: 'কেন্দ্রীয় ও রাজ্য প্রকল্পগুলির নিয়ম বিশ্লেষণ করে আপনার উপযুক্ত প্রকল্প বের করে।',
    hiw_step3_title: 'আত্মবিশ্বাসের সাথে আবেদন করুন',
    hiw_step3_desc: 'প্রয়োজনীয় নথি প্রস্তুত করুন এবং সরাসরি অফিসিয়াল সরকারি পোর্টালে আবেদন করুন।',

    chat_live_engine: 'GovAssist AI লাইভ ইঞ্জিন',
    chat_active_desc: 'সরকারি প্রকল্প অনুসন্ধান ও যাচাইকরণ সক্রিয়',
    chat_new_chat: 'নতুন চ্যাট',
    chat_placeholder: 'যেকোনো প্রশ্ন করুন (যেমন "আমি একজন কৃষক", "ছাত্রবৃত্তি প্রকল্প")...',
    chat_send: 'পাঠান',
    chat_disclaimer_short: 'GovAssist AI কেবল তথ্যমূলক নির্দেশিকা প্রদান করে।',
    chat_no_form_notice: 'এই সাইটে কোনো আবেদন ফর্ম নেই • সরাসরি অফিসিয়াল লিঙ্ক',
    chat_welcome_title: 'নমস্কার এবং GovAssist AI-তে স্বাগতম! 🇮🇳',
    chat_welcome_msg: 'ভারতীয় সরকারি প্রকল্প অনুসন্ধানে আমি আপনার ডিজিটাল সহায়ক। আপনার পরিস্থিতি জানান এবং আমি আপনাকে সঠিক যোগ্যতা ও অফিসিয়াল পোর্টালে পৌঁছে দেব।',
    chat_recommended_schemes: 'সুপারিশকৃত সরকারি প্রকল্প',
    chat_verified_criteria: 'যাচাইকৃত নিয়মাবলী',
    chat_read_aloud: 'শুনুন',
    chat_copy: 'কপি করুন',
    chat_suggested_starters: 'প্রস্তাবিত প্রশ্নাবলী',
    chat_checking_eligibility: 'যোগ্যতা যাচাই করা হচ্ছে...',

    profile_title: 'আপনার নাগরিক প্রোফাইল',
    profile_subtitle: 'চ্যাট থেকে স্বয়ংক্রিয়ভাবে সংগৃহীত',
    profile_completeness: 'প্রোফাইল সম্পূর্ণতা',
    profile_edit: 'সম্পাদনা',
    profile_save: 'সংরক্ষণ করুন',
    profile_cancel: 'বাতিল',
    profile_reset: 'রিসেট',
    profile_age: 'বয়স',
    profile_gender: 'লিঙ্গ',
    profile_state: 'রাজ্য',
    profile_occupation: 'পেশা',
    profile_income: 'পারিবারিক আয়',
    profile_category: 'শ্রেণী',
    profile_not_specified: 'নির্দিষ্ট নয়',
    profile_privacy_note: 'তথ্য আপনার স্থানীয় ব্রাউজারে সুরক্ষিত থাকে।',

    scheme_view_details: 'বিস্তারিত দেখুন',
    scheme_official_portal: 'অফিসিয়াল পোর্টাল',
    scheme_key_benefit: 'মূল সুবিধা:',
    scheme_why_match: 'মিলের কারণ:',
    scheme_req_docs: 'প্রয়োজনীয় নথি:',
    scheme_mandatory: 'বাধ্যতামূলক',
    scheme_optional: 'ঐচ্ছিক',
    scheme_apply_official: 'অফিসিয়াল সরকারি ওয়েবসাইটে আবেদন করুন',
    scheme_last_verified: 'যাচাইকৃত:',
    scheme_central: 'কেন্দ্রীয় সরকারি প্রকল্প',
    scheme_state_scheme: 'রাজ্য সরকারি প্রকল্প',
    scheme_overview_tab: 'সংক্ষিপ্ত বিবরণ ও সুবিধা',
    scheme_eligibility_tab: 'যোগ্যতার মানদণ্ড',
    scheme_docs_tab: 'প্রয়োজনীয় নথি',
    scheme_process_tab: 'আবেদন পদ্ধতি',
    scheme_faqs_tab: 'প্রশ্নোত্তর',
    scheme_doc_tracker: 'নথি চেকলিস্ট',
    scheme_ready_count: 'প্রস্তুত',
    scheme_close: 'বন্ধ করুন',

    schemes_title: 'সরকারি প্রকল্প ও ভর্তুকি অন্বেষণ করুন',
    schemes_subtitle: 'কেন্দ্রীয় ও রাজ্য মন্ত্রণালয়ের প্রকল্প খুঁজুন এবং সরাসরি অফিসিয়াল পোর্টালে আবেদন করুন।',
    schemes_search_placeholder: 'প্রকল্পের নাম বা কীওয়ার্ড খুঁজুন...',
    schemes_filter_level: 'সরকারি স্তর',
    schemes_filter_category: 'ক্যাটাগরি',
    schemes_filter_state: 'রাজ্য',
    schemes_filter_beneficiary: 'সুবিধাভোগী',
    schemes_filter_income: 'আয়ের সীমা',
    schemes_showing: 'দেখানো হচ্ছে',
    schemes_sort_by: 'সাজান:',
    schemes_sort_popular: 'সবচেয়ে জনপ্রিয়',
    schemes_sort_alpha: 'বর্ণানুক্রমিক (A-Z)',
    schemes_clear_all: 'সব মুছুন',
    schemes_no_results: 'কোনো প্রকল্প পাওয়া যায়নি',
    schemes_reset_filters: 'ফিল্টার রিসেট করুন',

    dash_welcome: 'স্বাগতম,',
    dash_subtitle: 'সংরক্ষিত প্রকল্প, সুপারিশ এবং নথিপত্রের প্রস্তুতি পর্যবেক্ষণ করুন।',
    dash_saved_schemes: 'সংরক্ষিত প্রকল্প',
    dash_recommendations: 'AI সুপারিশ',
    dash_ready_docs: 'প্রস্তুত নথিপত্র',
    dash_status_saved: '📋 সংরক্ষিত',
    dash_status_docs_ready: '✅ নথি প্রস্তুত',
    dash_status_applied: '🚀 পোর্টালে আবেদন করা হয়েছে',

    disclaimer_title: 'যাচাইকৃত তথ্য ও অফিসিয়াল পোর্টাল নীতি',
    disclaimer_desc: 'GovAssist AI একটি তথ্যমূলক সহায়তা সেবা। সর্বদা অফিসিয়াল (.gov.in) পোর্টালে আবেদন করুন।',
    disclaimer_footer: 'GovAssist AI একটি স্বাধীন তথ্যমূলক সহায়তা প্ল্যাটফর্ম।'
  },

  // 7. GUJARATI (ગુજરાતી)
  gu: {
    nav_home: 'હોમ',
    nav_find_schemes: 'યોજનાઓ શોધો',
    nav_ai_assistant: 'AI સહાયક',
    nav_how_it_works: 'કેવી રીતે કાર્ય કરે છે',
    nav_about: 'અમારા વિશે',
    nav_dashboard: 'ડેશબોર્ડ',
    nav_sign_in: 'સાઇન ઇન',
    nav_start_assistant: 'સહાયક શરૂ કરો',
    nav_select_lang: 'ભાષા',
    nav_sign_out: 'સાઇન આઉટ',

    hero_badge: 'AI આધારિત સરકારી સેવાઓ',
    hero_title_1: 'સરકારી યોજનાઓ શોધો જેના માટે તમે',
    hero_title_highlight: 'પાત્ર હોઈ શકો છો',
    hero_desc: 'તમારા વિશે જણાવો અને અમારો AI સહાયક તમને સરકારી યોજનાઓ શોધવા, પાત્રતા સમજવા અને સત્તાવાર પોર્ટલ પર અરજી કરવા માટે માર્ગદર્શન આપશે.',
    hero_cta_start: 'સહાયક શરૂ કરો',
    hero_cta_explore: 'યોજનાઓ જુઓ',
    hero_trust_verified: 'ચકાસાયેલ સરકારી સ્ત્રોતો',
    hero_trust_personalized: 'વ્યક્તિગત ભલામણો',
    hero_trust_free: '100% મફત',
    hero_preview_title: 'GovAssist લાઇવ પ્રીવ્યૂ',
    hero_preview_subtitle: 'સચોટ નાગરિક યોજના મેચિંગ',
    hero_preview_badge: 'નીચે ચેટ અજમાવો',
    hero_preview_user_msg: 'હું ગુજરાતનો ૨૧ વર્ષીય વિદ્યાર્થી છું, વાર્ષિક આવક ₹૨.૫ લાખ છે.',
    hero_preview_ai_msg: 'તમારી પ્રોફાઇલ માટે ૪ ચકાસાયેલ યોજનાઓ મળી છે:',
    hero_preview_cta: 'સહાયક ખોલો',

    hiw_badge: 'સરળ ૩ પગલાં',
    hiw_title: 'GovAssist AI નાગરિકો માટે કેવી રીતે કાર્ય કરે છે',
    hiw_subtitle: 'સરળ વાતચીત દ્વારા સત્તાવાર અરજી સુધીનું માર્ગદર્શન.',
    hiw_step1_title: 'તમારી વિગતો આપો',
    hiw_step1_desc: 'ઉંમર, રાજ્ય, શિક્ષણ, વ્યવસાય અથવા આવક વિશે સરળ માહિતી આપો.',
    hiw_step2_title: 'યોગ્ય યોજનાઓ શોધો',
    hiw_step2_desc: 'અમારું AI એન્જિન તમારા માટે યોગ્ય સરકારી યોજનાઓ શોધી કાઢે છે.',
    hiw_step3_title: 'અરજી કરો',
    hiw_step3_desc: 'દસ્તાવેજો તૈયાર કરો અને સીધા સત્તાવાર સરકારી પોર્ટલ પર અરજી કરો.',

    chat_live_engine: 'GovAssist AI લાઇવ એન્જિન',
    chat_active_desc: 'સરકારી યોજના શોધ અને ચકાસણી સક્રિય',
    chat_new_chat: 'નવી ચેટ',
    chat_placeholder: 'કંઈપણ પૂછો (દા.ત. "હું ખેડૂત છું", "વિદ્યાર્થી શિષ્યવૃત્તિ")...',
    chat_send: 'મોકલો',
    chat_disclaimer_short: 'GovAssist AI માત્ર માહિતીપ્રદ માર્ગદર્શન પૂરું પાડે છે.',
    chat_no_form_notice: 'આ સાઇટ પર કોઈ અરજી ફોર્મ નથી • સીધી સત્તાવાર લિંક્સ',
    chat_welcome_title: 'નમસ્તે અને GovAssist AI માં આપનું સ્વાગત છે! 🇮🇳',
    chat_welcome_msg: 'ભારતીય સરકારી યોજનાઓ શોધવા માટે હું તમારો ડિજિટલ સહાયક છું. તમારી વિગતો જણાવો અને હું તમને યોગ્ય યોજનાઓ અને સત્તાવાર પોર્ટલ બતાવીશ.',
    chat_recommended_schemes: 'ભલામણ કરેલ સરકારી યોજનાઓ',
    chat_verified_criteria: 'ચકાસાયેલ માપદંડ',
    chat_read_aloud: 'સાંભળો',
    chat_copy: 'કોપી કરો',
    chat_suggested_starters: 'સૂચવેલા પ્રશ્નો',
    chat_checking_eligibility: 'પાત્રતા તપાસી રહ્યું છે...',

    profile_title: 'તમારી નાગરિક પ્રોફાઇલ',
    profile_subtitle: 'ચેટમાંથી આપમેળે મેળવેલ',
    profile_completeness: 'પ્રોફાઇલ પૂર્ણતા',
    profile_edit: 'સંપાદિત કરો',
    profile_save: 'સાચવો',
    profile_cancel: 'રદ કરો',
    profile_reset: 'રીસેટ કરો',
    profile_age: 'ઉંમર',
    profile_gender: 'જાતિ',
    profile_state: 'રાજ્ય',
    profile_occupation: 'વ્યવસાય',
    profile_income: 'કૌટુંબિક આવક',
    profile_category: 'કેટેગરી',
    profile_not_specified: 'ઉલ્લેખિત નથી',
    profile_privacy_note: 'માહિતી તમારા સ્થાનિક બ્રાઉઝરમાં સુરક્ષિત રહે છે.',

    scheme_view_details: 'વિગતો જુઓ',
    scheme_official_portal: 'સત્તાવાર પોર્ટલ',
    scheme_key_benefit: 'મુખ્ય લાભ:',
    scheme_why_match: 'મેળ ખાવાનું કારણ:',
    scheme_req_docs: 'જરૂરી દસ્તાવેજો:',
    scheme_mandatory: 'ફરજિયાત',
    scheme_optional: 'વૈકલ્પિક',
    scheme_apply_official: 'સત્તાવાર સરકારી વેબસાઇટ પર અરજી કરો',
    scheme_last_verified: 'ચકાસાયેલ:',
    scheme_central: 'કેન્દ્ર સરકારની યોજના',
    scheme_state_scheme: 'રાજ્ય સરકારની યોજના',
    scheme_overview_tab: 'સમીક્ષા અને લાભો',
    scheme_eligibility_tab: 'પાત્રતા માપદંડ',
    scheme_docs_tab: 'દસ્તાવેજો',
    scheme_process_tab: 'અરજી પ્રક્રિયા',
    scheme_faqs_tab: 'વારંવાર પૂછાતા પ્રશ્નો',
    scheme_doc_tracker: 'દસ્તાવેજ ચેકલિસ્ટ',
    scheme_ready_count: 'તૈયાર',
    scheme_close: 'બંધ કરો',

    schemes_title: 'સરકારી યોજનાઓ અને સબસિડી શોધો',
    schemes_subtitle: 'કેન્દ્ર અને રાજ્ય મંત્રાલયોની યોજનાઓ શોધો અને સત્તાવાર પોર્ટલ પર અરજી કરો.',
    schemes_search_placeholder: 'યોજનાનું નામ અથવા કીવર્ડ શોધો...',
    schemes_filter_level: 'સરકારી સ્તર',
    schemes_filter_category: 'શ્રેણી',
    schemes_filter_state: 'રાજ્ય',
    schemes_filter_beneficiary: 'લાભાર્થી',
    schemes_filter_income: 'આવક મર્યાદા',
    schemes_showing: 'દર્શાવી રહ્યું છે',
    schemes_sort_by: 'ક્રમબદ્ધ કરો:',
    schemes_sort_popular: 'સૌથી લોકપ્રિય',
    schemes_sort_alpha: 'મૂળાક્ષર પ્રમાણે (A-Z)',
    schemes_clear_all: 'બધું સાફ કરો',
    schemes_no_results: 'કોઈ યોજના મળી નથી',
    schemes_reset_filters: 'ફિલ્ટર રીસેટ કરો',

    dash_welcome: 'સ્વાગત છે,',
    dash_subtitle: 'સાચવેલી યોજનાઓ, AI ભલામણો અને દસ્તાવેજોની તૈયારી તપાસો.',
    dash_saved_schemes: 'સાચવેલી યોજનાઓ',
    dash_recommendations: 'AI ભલામણો',
    dash_ready_docs: 'તૈયાર દસ્તાવેજો',
    dash_status_saved: '📋 સાચવેલ',
    dash_status_docs_ready: '✅ દસ્તાવેજ તૈયાર',
    dash_status_applied: '🚀 પોર્ટલ પર અરજી કરી',

    disclaimer_title: 'ચકાસાયેલ માહિતી અને સત્તાવાર પોર્ટલ નીતિ',
    disclaimer_desc: 'GovAssist AI માત્ર એક માહિતી સહાય સેવા છે. હંમેશા સત્તાવાર (.gov.in) પોર્ટેલ પર અરજી કરો.',
    disclaimer_footer: 'GovAssist AI એ એક સ્વતંત્ર માહિતી સહાય મંચ છે.'
  }
};

export function getTranslation(lang: string, key: keyof TranslationDict): string {
  const selectedLang = (TRANSLATIONS[lang as LanguageCode] ? lang : 'en') as LanguageCode;
  return TRANSLATIONS[selectedLang][key] || TRANSLATIONS['en'][key] || key;
}
