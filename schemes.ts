import { Scheme } from '../types';

export const VERIFIED_SCHEMES: Scheme[] = [
  {
    id: 'pm-kisan',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    shortName: 'PM-KISAN',
    tagline: 'Direct annual income support of ₹6,000 to landholding farmer families across India.',
    category: 'agriculture',
    level: 'Central',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    department: 'Department of Agriculture and Farmers Welfare',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmkisan.gov.in',
    helplinePhone: '155261 / 011-24300606',
    briefDescription: 'Provides income support of ₹6,000 per year in three equal installments of ₹2,000 directly into the Aadhaar-seeded bank accounts of eligible farmer families.',
    detailedOverview: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector scheme with 100% funding from Government of India. Under the scheme an income support of ₹6,000/- per year in three equal installments is provided to all landholding farmer families, subject to certain exclusion criteria relating to higher income status.',
    targetBeneficiaries: 'Small, marginal, and all cultivable landholding farmer families in rural & urban India.',
    keyBenefits: [
      'Direct benefit transfer of ₹6,000 per year in 3 installments of ₹2,000 every 4 months.',
      '100% government-funded central sector direct benefit scheme.',
      'No intermediaries; money transferred directly to Aadhaar-linked active bank account.',
      'Access to Kisan Credit Card (KCC) with subsidized agricultural credit.'
    ],
    maxBenefitAmount: '₹6,000 / year (3 installments)',
    eligibility: {
      minAge: 18,
      gender: 'All',
      occupations: ['Farmer'],
      farmerStatus: true,
      specificConditions: [
        'Must possess cultivable landholding in own or family name as per official land records.',
        'Institutional landholders and institutional bodies are excluded.',
        'Constitutional post holders, serving/retired government employees, and income tax payees in last assessment year are excluded.'
      ]
    },
    eligibilityDescription: [
      'Small and marginal landholder farmer families with land in their names.',
      'Must have verified e-KYC done via OTP or biometric authentication.',
      'Land records must be seeded with state revenue registries.',
      'Active bank account linked with Aadhaar and NPCI mapping.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Identity verification & mandatory e-KYC authentication', isMandatory: true },
      { name: 'Landholding Proof (Khasra/Khatauni/RoR)', purpose: 'Verification of agricultural land ownership records', isMandatory: true },
      { name: 'Active Bank Passbook', purpose: 'Aadhaar-linked DBT account number & IFSC code', isMandatory: true },
      { name: 'Mobile Number Linked to Aadhaar', purpose: 'OTP generation for instant verification', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Open the Official PM-KISAN Portal',
        description: 'Navigate to the verified government portal (https://pmkisan.gov.in) using your desktop or mobile browser.',
        actionTip: 'Always verify the secure https:// and .gov.in domain.'
      },
      {
        stepNumber: 2,
        title: 'Access Farmers Corner',
        description: 'Click on "New Farmer Registration" in the Farmers Corner on the homepage. Choose between Rural Farmer or Urban Farmer Registration.',
        actionTip: 'Keep your Aadhaar number and mobile number ready.'
      },
      {
        stepNumber: 3,
        title: 'Complete Aadhaar OTP Authentication',
        description: 'Enter your Aadhaar number, mobile number, and select your State. Submit the OTP received on your mobile.',
        actionTip: 'Ensure your Aadhaar is already linked to your mobile.'
      },
      {
        stepNumber: 4,
        title: 'Fill Land Details & Submit',
        description: 'Select your District, Sub-District, Block, and Village. Enter your Survey/Khata number, Khasra number, and land area in hectares.',
        actionTip: 'Upload scanned copy of land ownership document (PDF max 200KB).'
      },
      {
        stepNumber: 5,
        title: 'Track Application Status',
        description: 'Use the "Status of Self Registered Farmer/CSC Farmers" link on the portal with your Aadhaar number to monitor verification by the State Nodal Officer.',
        actionTip: 'Save your Application Reference ID for future queries.'
      }
    ],
    importantConditions: [
      'Mandatory e-KYC must be completed periodically on the portal.',
      'Land title must be transferred or registered prior to the official cut-off date.',
      'If any family member is paying income tax, the family is ineligible.'
    ],
    faqs: [
      {
        question: 'How do I check if my name is in the beneficiary list?',
        answer: 'Visit pmkisan.gov.in, go to "Beneficiary List", select your State, District, Sub-District, Block, and Village, and click "Get Report".'
      },
      {
        question: 'What should I do if my payment installment is stopped?',
        answer: 'Check your e-KYC status and land seeding status under "Know Your Status" on pmkisan.gov.in. If land is unseeded, contact your local Revenue Officer/Patwari.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    shortName: 'PM-JAY',
    tagline: 'World\'s largest government-funded health assurance scheme providing ₹5 Lakh cashless hospital coverage per family per year.',
    category: 'healthcare',
    level: 'Central',
    ministry: 'Ministry of Health and Family Welfare',
    department: 'National Health Authority (NHA)',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmjay.gov.in',
    helplinePhone: '14555 / 1800-111-565',
    briefDescription: 'Provides health cover of ₹5 Lakh per family per year for secondary and tertiary care hospitalization across public and empaneled private hospitals in India.',
    detailedOverview: 'Ayushman Bharat PM-JAY aims to provide health cover of ₹5,00,000 per family per year to over 12 crore poor and vulnerable families (approximately 55 crore beneficiaries). Coverage includes 3 days of pre-hospitalization, medical examination, tests, medicines, surgical procedures, ICU, post-hospitalization care for 15 days, with zero out-of-pocket expenses.',
    targetBeneficiaries: 'Deprived rural households and identified occupational categories of urban workers families based on SECC 2011 and expanded state databases (now also including all senior citizens aged 70+ regardless of income).',
    keyBenefits: [
      'Cashless and paperless access to healthcare services at the point of care.',
      'Up to ₹5,00,000 per family per year across 27,000+ empaneled hospitals nationwide.',
      'Covers pre-existing conditions from Day 1.',
      'Includes over 1,949 medical and surgical treatment procedures.',
      'Dedicated top-up cover for senior citizens aged 70 and above.'
    ],
    maxBenefitAmount: '₹5,00,000 / family / year',
    eligibility: {
      minAge: 0,
      maxAge: 100,
      gender: 'All',
      maxAnnualIncome: 300000,
      specificConditions: [
        'Families listed in SECC 2011 deprivation criteria (D1 to D7) in rural areas or identified 11 occupational categories in urban areas.',
        'Active ration card holders under NFSA in many participating states.',
        'All citizens aged 70 years and above are eligible for the Ayushman Vay Vandana Card regardless of income.'
      ]
    },
    eligibilityDescription: [
      'Rural families with kutcha walls/roof, female-headed households, landless casual manual laborers.',
      'Urban workers: ragpickers, domestic workers, street vendors, transport workers, shop workers, artisans.',
      'Senior citizens aged 70+ (universal coverage irrespective of economic status).'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Mandatory identity verification & e-KYC', isMandatory: true },
      { name: 'Ration Card / NFSA Card', purpose: 'Proof of family composition & SECC linkage', isMandatory: true },
      { name: 'Registered Mobile Number', purpose: 'OTP verification during card generation', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Check Your Eligibility Online',
        description: 'Go to the official portal (https://beneficiary.nha.gov.in or https://pmjay.gov.in) and click "Am I Eligible".',
        actionTip: 'Enter your 10-digit mobile number and verify via OTP.'
      },
      {
        stepNumber: 2,
        title: 'Search for Your Family',
        description: 'Search using your Aadhaar Number, Ration Card (Family ID), or Location (Rural/Urban).',
        actionTip: 'If your name appears, your family is entitled to free treatment.'
      },
      {
        stepNumber: 3,
        title: 'Perform e-KYC & Generate Ayushman Card',
        description: 'Click "Action/eKYC", authenticate using Aadhaar OTP or Face Auth via the Ayushman App, capture a live photo, and submit.',
        actionTip: 'Your digital Ayushman Card (PVC Golden Card) is generated instantly for download.'
      },
      {
        stepNumber: 4,
        title: 'Show at Any Empaneled Hospital',
        description: 'Present your Ayushman Card / Aadhaar at the Ayushman Mitra Helpdesk in any empaneled hospital for 100% cashless treatment.',
        actionTip: 'Find empaneled hospitals near you using pmjay.gov.in/hospital-search.'
      }
    ],
    importantConditions: [
      'Treatment is only available at empaneled government and private healthcare facilities.',
      'No registration fee or middleman charges exist; card creation is completely free.',
      'Coverage is fully portable across any state in India.'
    ],
    faqs: [
      {
        question: 'Is there any restriction on family size or age of family members?',
        answer: 'No. There is no cap on family size, age, or gender under PM-JAY.'
      },
      {
        question: 'Are pre-existing diseases covered under PM-JAY?',
        answer: 'Yes, all pre-existing conditions are covered from day one of enrollment.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'nsp-post-matric-scholarship',
    name: 'National Scholarship Portal — Post Matric Scholarships Scheme',
    shortName: 'NSP Post-Matric Scholarship',
    tagline: 'Financial scholarship for Class 11, 12, Undergraduate, Postgraduate, and Professional degree students from underprivileged backgrounds.',
    category: 'education',
    level: 'Central',
    ministry: 'Ministry of Social Justice and Empowerment / Ministry of Tribal Affairs / Ministry of Minority Affairs',
    department: 'Department of Higher Education',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://scholarships.gov.in',
    helplinePhone: '0120-6619540',
    briefDescription: 'Provides complete tuition fee reimbursement and maintenance allowance for students pursuing higher education (Class 11 to PhD) whose family annual income is within prescribed limits.',
    detailedOverview: 'The Post Matric Scholarship is a centrally sponsored scheme implemented through state governments and UT administrations. It aims to substantially increase the Gross Enrolment Ratio (GER) in higher education by providing financial assistance to meritorious and needy students belonging to SC, ST, OBC, EWS, and minority communities.',
    targetBeneficiaries: 'Students studying in Class 11, 12, ITI, Polytechnic, UG, PG, M.Phil, Ph.D, Medicine, Engineering, Law, and other recognized courses in recognized institutes.',
    keyBenefits: [
      '100% non-refundable course compulsory tuition fees reimbursed directly to institute/student.',
      'Monthly maintenance allowance up to ₹13,500/year for hostellers and day scholars.',
      'Book bank allowance, study tour allowance, and thesis typing support for research scholars.',
      'Direct Benefit Transfer (DBT) directly into student\'s Aadhaar-seeded active bank account.'
    ],
    maxBenefitAmount: 'Full Tuition Fee + up to ₹13,500 / year maintenance allowance',
    eligibility: {
      minAge: 15,
      maxAge: 35,
      gender: 'All',
      studentStatus: true,
      maxAnnualIncome: 250000,
      categories: ['SC', 'ST', 'OBC', 'EWS'],
      occupations: ['Student'],
      specificConditions: [
        'Must have passed previous qualifying examination with minimum passing percentage.',
        'Must be enrolled in a recognized institution with valid AISHE/DISE code.',
        'Annual family income from all sources must not exceed ₹2.50 Lakh (₹2.00 Lakh for certain OBC schemes).'
      ]
    },
    eligibilityDescription: [
      'Students enrolled in recognized post-matric courses (XI, XII, BA, BSc, BTech, MBBS, MBA, etc.).',
      'Family income ceiling of ₹2.50 Lakh per annum.',
      'SC, ST, OBC, Economically Weaker Section (EWS), or Notified Minority communities.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of Student', purpose: 'One-time registration (OTR) and e-KYC', isMandatory: true },
      { name: 'Income Certificate (Competent Authority)', purpose: 'Verification of family annual income under ₹2.5 Lakh', isMandatory: true },
      { name: 'Caste / Community Certificate', purpose: 'Proof of SC/ST/OBC/Minority status', isMandatory: true },
      { name: 'Previous Year Marksheet / Certificate', purpose: 'Verification of academic qualification', isMandatory: true },
      { name: 'Current Year Fee Receipt / Admission Letter', purpose: 'Verification of active enrollment & tuition fee calculation', isMandatory: true },
      { name: 'Student Bank Passbook (Aadhaar Seeded)', purpose: 'Direct Benefit Transfer (DBT) credit', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Complete One-Time Registration (OTR)',
        description: 'Visit the National Scholarship Portal (https://scholarships.gov.in) and register via the NSP OTR app or website using Aadhaar OTP or Face Authentication.',
        actionTip: 'You will receive a unique 14-digit OTR ID.'
      },
      {
        stepNumber: 2,
        title: 'Login to NSP Portal',
        description: 'Login with your OTR ID and password. Select "Apply for Scholarship" to open the Central/State scheme list matching your profile.',
        actionTip: 'Ensure your institution name and AISHE code match correctly.'
      },
      {
        stepNumber: 3,
        title: 'Upload Documents & Enter Academic Details',
        description: 'Enter your admission roll number, previous exam marks, parent details, and upload scanned copies of Income, Caste, and Fee receipts.',
        actionTip: 'Files should be in PDF/JPEG format under 200KB.'
      },
      {
        stepNumber: 4,
        title: 'Final Submit & Institute Verification',
        description: 'Review details and submit. Download the application acknowledgement and submit physical copies to your college Nodal Officer for verification.',
        actionTip: 'Keep a saved copy of your Application ID for status tracking.'
      }
    ],
    importantConditions: [
      'Only one government scholarship can be availed for the same course year.',
      'Bank account must be in the student\'s own name and actively seeded with NPCI/Aadhaar.',
      'Students must renew application each academic year on NSP portal.'
    ],
    faqs: [
      {
        question: 'Can I apply if my college is outside my home state?',
        answer: 'Yes, as long as the institute is recognized by UGC/AICTE/State Govt and listed on the NSP portal.'
      },
      {
        question: 'What if my Aadhaar is not linked to my bank account?',
        answer: 'DBT payments will fail. Visit your bank branch immediately and request NPCI Aadhaar Mapping.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'pm-mudra-yojana',
    name: 'Pradhan Mantri Mudra Yojana (PMMY)',
    shortName: 'PM Mudra Yojana',
    tagline: 'Collateral-free business loans up to ₹20 Lakh for micro and small enterprises, shopkeepers, traders, and artisans.',
    category: 'business',
    level: 'Central',
    ministry: 'Ministry of Finance',
    department: 'Department of Financial Services (DFS) & MUDRA Ltd.',
    lastVerifiedDate: 'January 2026',
    officialPortalUrl: 'https://www.mudra.org.in',
    helplinePhone: '1800-180-1111 / 1800-11-0001',
    briefDescription: 'Provides institutional credit to micro-enterprises in manufacturing, trading, services, and allied agricultural activities across three categories: Shishu, Kishore, Tarun, and Tarun Plus.',
    detailedOverview: 'Pradhan Mantri Mudra Yojana (PMMY) facilitates loans to non-corporate, non-farm small/micro enterprises. Loans are disbursed by Commercial Banks, RRBs, Small Finance Banks, MFIs, and NBFCs with zero collateral or third-party guarantee requirement. Following Union Budget 2024-25, the maximum limit under the enhanced Tarun Plus category is ₹20 Lakh.',
    targetBeneficiaries: 'Micro-entrepreneurs, small shopkeepers, fruit/vegetable vendors, truck operators, food service units, repair shops, machine operators, artisans, and women entrepreneurs.',
    keyBenefits: [
      'No collateral or guarantor required for loans up to ₹20 Lakh.',
      'Four flexible tiers: Shishu (up to ₹50,000), Kishore (₹50,000 - ₹5 Lakh), Tarun (₹5 Lakh - ₹10 Lakh), and Tarun Plus (₹10 Lakh - ₹20 Lakh).',
      'Affordable interest rates linked to RBI benchmark repo/MCLR.',
      'Mudra Debit Card provided for convenient working capital withdrawal.',
      'Special focus on women entrepreneurs and SC/ST/OBC beneficiaries.'
    ],
    maxBenefitAmount: 'Loans up to ₹20,00,000 without collateral',
    eligibility: {
      minAge: 18,
      maxAge: 65,
      gender: 'All',
      occupations: ['Self-Employed', 'Artisan/Worker', 'Unemployed'],
      specificConditions: [
        'Must have a viable business proposal in non-farm sector (manufacturing, processing, trading, services).',
        'Should not be a defaulter with any bank or financial institution.',
        'Must possess basic business identity proof and bank account.'
      ]
    },
    eligibilityDescription: [
      'Any Indian citizen with a business idea or existing micro-enterprise.',
      'Proprietorship, partnership firms, small manufacturers, shopkeepers, service providers.',
      'Clean credit track record.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card / Voter ID / PAN Card', purpose: 'Identity & Address Proof', isMandatory: true },
      { name: 'Business Proof / Registration / Udyam Certificate', purpose: 'Proof of business existence and address', isMandatory: false },
      { name: 'Bank Statement (Last 6 Months)', purpose: 'Financial assessment', isMandatory: true },
      { name: 'Quotation of Machinery / Project Report', purpose: 'For Kishore & Tarun loan categories', isMandatory: false },
      { name: 'Passport Size Photographs', purpose: 'Applicant identification', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Choose the Loan Category',
        description: 'Decide whether your requirement falls under Shishu (up to ₹50k), Kishore (₹50k-₹5L), Tarun (₹5L-₹10L), or Tarun Plus (up to ₹20L).',
        actionTip: 'Prepare a simple 1-page business quotation or cost estimate.'
      },
      {
        stepNumber: 2,
        title: 'Apply on the Official Portal (Udyamimitra)',
        description: 'Visit the official government credit portal (https://www.udyamimitra.in or https://www.mudra.org.in) or visit your nearest public sector / private bank branch.',
        actionTip: 'Online application via UdyamiMitra connects to multiple lenders simultaneously.'
      },
      {
        stepNumber: 3,
        title: 'Fill Business Details & Upload KYC',
        description: 'Enter your personal details, business activity description, required loan amount, and upload KYC documents.',
        actionTip: 'Keep your Udyam Registration number handy if available.'
      },
      {
        stepNumber: 4,
        title: 'Bank Appraisal & Sanction',
        description: 'The selected bank branch will evaluate the proposal, verify documents, and issue the loan sanction letter and Mudra Card.',
        actionTip: 'Banks do not charge processing fees for Shishu loans.'
      }
    ],
    importantConditions: [
      'Loan must be used strictly for business setup, working capital, or equipment purchase.',
      'No processing fee for Shishu loans (up to ₹50,000).',
      'Repayment tenure typically ranges from 3 to 5 years.'
    ],
    faqs: [
      {
        question: 'Do I need to pledge land or gold as security for a Mudra loan?',
        answer: 'No. RBI guidelines mandate that banks cannot demand collateral security for loans up to ₹10 Lakh (extended to ₹20 Lakh under PMMY).'
      },
      {
        question: 'Can I apply for a Mudra loan to buy a commercial vehicle or auto-rickshaw?',
        answer: 'Yes! Transport vehicles used for commercial passenger or goods movement are fully eligible.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'pm-awas-yojana-urban-gramin',
    name: 'Pradhan Mantri Awas Yojana (PMAY — Urban & Gramin)',
    shortName: 'PM Awas Yojana',
    tagline: 'Housing for All — financial assistance & interest subsidy for construction or purchase of pucca houses.',
    category: 'housing',
    level: 'Central',
    ministry: 'Ministry of Housing and Urban Affairs & Ministry of Rural Development',
    department: 'Housing for All / Rural Housing Division',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmaymis.gov.in',
    helplinePhone: '011-23063285 / 011-23060484',
    briefDescription: 'Provides direct financial assistance of ₹1.20 Lakh to ₹1.30 Lakh in rural areas (PMAY-G) and credit-linked interest subsidy up to ₹2.67 Lakh in urban areas (PMAY-U 2.0).',
    detailedOverview: 'Pradhan Mantri Awas Yojana ensures that every homeless family and those living in kutcha and dilapidated houses get a pucca house with basic amenities like piped water, sanitation, and electricity. PMAY 2.0 covers EWS, LIG, and Middle Income Groups in urban and rural areas across India.',
    targetBeneficiaries: 'Economically Weaker Section (EWS), Low Income Group (LIG), Middle Income Group (MIG), homeless families, and female-headed households.',
    keyBenefits: [
      'Direct grant of ₹1,20,000 (plains) / ₹1,30,000 (hilly/difficult areas) for rural house construction.',
      'Interest subsidy of up to 4.0% to 6.5% on home loans up to ₹25 Lakh for urban EWS/LIG families.',
      'Direct convergence with MGNREGA for 90-95 days of paid unskilled construction labor wages.',
      'Additional ₹12,000 grant for toilet construction under Swachh Bharat Mission.',
      'Mandatory ownership/co-ownership in the name of the female head of household.'
    ],
    maxBenefitAmount: 'Up to ₹2,67,000 interest subsidy or ₹1,30,000 direct construction grant',
    eligibility: {
      minAge: 18,
      gender: 'All',
      maxAnnualIncome: 600000,
      categories: ['General', 'OBC', 'SC', 'ST', 'EWS'],
      specificConditions: [
        'The beneficiary family should not own a pucca house anywhere in India.',
        'Must not have availed central assistance under any prior housing scheme.',
        'Female ownership or joint ownership is mandatory for urban houses (EWS/LIG).'
      ]
    },
    eligibilityDescription: [
      'EWS households (annual income up to ₹3 Lakh) and LIG households (annual income ₹3 Lakh - ₹6 Lakh).',
      'Rural households identified in Awaas+ survey list living in zero/one/two-room kutcha houses.',
      'No existing pucca house in any family member\'s name.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of all family members', purpose: 'Identity & deduplication check', isMandatory: true },
      { name: 'Income Certificate / Salary Slip / ITR', purpose: 'Income classification verification', isMandatory: true },
      { name: 'Land Ownership / Allotment Document', purpose: 'Proof of construction plot in rural areas', isMandatory: true },
      { name: 'Active Bank Account Details', purpose: 'Direct Benefit Transfer installment credit', isMandatory: true },
      { name: 'Affidavit of Not Owning Pucca House', purpose: 'Self-declaration of homelessness', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Check Awaas+ / Beneficiary List',
        description: 'For rural (PMAY-G), check your inclusion in the Gram Panchayat Awaas+ list via https://rhreporting.nic.in. For urban (PMAY-U), visit https://pmaymis.gov.in.',
        actionTip: 'Contact your Gram Panchayat Secretary for rural verification.'
      },
      {
        stepNumber: 2,
        title: 'Citizen Assessment Online (Urban)',
        description: 'Under "Citizen Assessment" on pmaymis.gov.in, select "Apply Online" and enter your Aadhaar Number and name as on Aadhaar.',
        actionTip: 'Ensure your Aadhaar name matches exactly.'
      },
      {
        stepNumber: 3,
        title: 'Fill Personal & Household Details',
        description: 'Fill in present address, permanent address, family member details, existing house condition, and bank details.',
        actionTip: 'Select the relevant component (Credit Linked Subsidy or Beneficiary Led Construction).'
      },
      {
        stepNumber: 4,
        title: 'Submit & Geo-Tagging Verification',
        description: 'Save the application assessment ID. Municipal or Gram Panchayat officials will conduct on-site geo-tagged photo verification before releasing installments.',
        actionTip: 'Installments are released in stages as construction progresses (plinth, roof, completion).'
      }
    ],
    importantConditions: [
      'House construction must be geo-tagged at 4 distinct milestones (Foundation, Plinth, Lintel, Completion).',
      'Minimum carpet area for rural houses is 25 sq. meters including dedicated cooking space.',
      'Cannot sell or transfer property within the statutory lock-in period.'
    ],
    faqs: [
      {
        question: 'How are the funds disbursed for building a house in rural areas?',
        answer: 'Funds are transferred in 3 to 4 installments directly to your bank account after geo-tagged inspection of each construction stage.'
      },
      {
        question: 'Can unmarried daughters or single women apply?',
        answer: 'Yes, single women, widows, and differently-abled individuals are given priority.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (Beti Bachao Beti Padhao)',
    shortName: 'Sukanya Samriddhi (SSY)',
    tagline: 'High-interest government savings scheme (8.2% p.a.) with complete tax exemption (EEE) for girl children.',
    category: 'women',
    level: 'Central',
    ministry: 'Ministry of Finance & Ministry of Women and Child Development',
    department: 'Department of Economic Affairs',
    lastVerifiedDate: 'January 2026',
    officialPortalUrl: 'https://www.indiapost.gov.in',
    helplinePhone: '1800-266-6868',
    briefDescription: 'A long-term government-backed small savings scheme designed specifically for parents of girl children to build a dedicated education and marriage corpus.',
    detailedOverview: 'Sukanya Samriddhi Account (SSA) can be opened by parents or legal guardians for a girl child from her birth till she attains 10 years of age. It offers one of the highest sovereign-guaranteed interest rates (currently 8.2% per annum, compounded annually) along with triple tax exemption under Section 80C, interest earned, and final maturity.',
    targetBeneficiaries: 'Girl children up to 10 years of age through their parents or legal guardians.',
    keyBenefits: [
      'Government-guaranteed attractive interest rate of 8.2% p.a. (compounded annually).',
      'Triple Tax Exemption (EEE): Investment (Section 80C up to ₹1.5L), Interest, and Maturity are 100% tax-free.',
      'Flexible deposit: Minimum ₹250 to maximum ₹1,50,000 per financial year.',
      'Partial withdrawal allowed up to 50% of the balance after the girl turns 18 for higher education fees.',
      'Account matures after 21 years from the date of opening or upon marriage after age 18.'
    ],
    maxBenefitAmount: '8.2% tax-free compounded interest + Full corpus maturity',
    eligibility: {
      minAge: 0,
      maxAge: 10,
      gender: 'Female',
      specificConditions: [
        'Account can be opened only in the name of a girl child below 10 years of age.',
        'Maximum of two accounts permitted per family (one account per girl child; exception for triplets/twins).',
        'Deposits can be made for 15 years from account opening date.'
      ]
    },
    eligibilityDescription: [
      'Girl child resident in India under 10 years of age.',
      'Opened by natural parents or legal guardian.'
    ],
    requiredDocuments: [
      { name: 'Birth Certificate of Girl Child', purpose: 'Proof of age and date of birth', isMandatory: true },
      { name: 'Aadhaar Card of Parent/Guardian', purpose: 'KYC and identity verification', isMandatory: true },
      { name: 'PAN Card of Parent/Guardian', purpose: 'Financial identity record', isMandatory: true },
      { name: 'Address Proof (Electricity Bill / Passport / Aadhaar)', purpose: 'Residential address verification', isMandatory: true },
      { name: 'Passport Size Photographs', purpose: 'Account opening application form', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Collect Form at Post Office or Bank',
        description: 'Visit any India Post office or authorized commercial bank branch (SBI, PNB, BoB, HDFC, ICICI, etc.) and request Form-1 (Sukanya Samriddhi Account Opening Form).',
        actionTip: 'Form can also be downloaded from indiapost.gov.in.'
      },
      {
        stepNumber: 2,
        title: 'Fill Girl Child & Guardian Details',
        description: 'Fill in details of the child (name, date of birth) and parent/guardian (KYC details, initial deposit amount minimum ₹250).',
        actionTip: 'Attach self-attested copies of birth certificate and guardian\'s Aadhaar.'
      },
      {
        stepNumber: 3,
        title: 'Deposit Initial Amount & Get Passbook',
        description: 'Submit the form with initial deposit via cash, cheque, or DD. The bank/post office issues a dedicated SSY passbook.',
        actionTip: 'Subsequent annual deposits can be made seamlessly online via IPPB Mobile Banking or NetBanking.'
      }
    ],
    importantConditions: [
      'Minimum deposit of ₹250 must be made every financial year to avoid account default.',
      'Defaulted accounts can be regularized by paying a nominal penalty of ₹50 per default year plus minimum deposit.',
      'Account is fully transferable anywhere in India if family relocates.'
    ],
    faqs: [
      {
        question: 'Can I withdraw money from the SSY account before 21 years?',
        answer: 'Yes, after the girl turns 18, up to 50% of the preceding financial year\'s balance can be withdrawn for higher education expenses.'
      },
      {
        question: 'Can NRIs open an SSY account?',
        answer: 'No, only resident Indian girl children are eligible to open and maintain an SSY account.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'pm-vishwakarma-scheme',
    name: 'PM Vishwakarma Scheme',
    shortName: 'PM Vishwakarma',
    tagline: 'End-to-end holistic support, skill upgradation, ₹15,000 toolkits grant, and collateral-free enterprise credit at 5% interest for traditional artisans & craftspeople.',
    category: 'business',
    level: 'Central',
    ministry: 'Ministry of Micro, Small and Medium Enterprises (MoMSME)',
    department: 'Skill Development & Traditional Crafts Division',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmvishwakarma.gov.in',
    helplinePhone: '1800-267-7777 / 011-23061500',
    briefDescription: 'Provides formal recognition (PM Vishwakarma Certificate & ID Card), skill training with ₹500/day stipend, modern toolkit incentive of ₹15,000, and subsidized collateral-free enterprise credit up to ₹3 Lakh.',
    detailedOverview: 'PM Vishwakarma is a flagship central scheme dedicated to empowering traditional artisans and craftspeople who work with their hands and tools across 18 designated trades (Carpenters, Blacksmiths, Goldsmiths, Potters, Sculptors, Cobblers, Masons, Basket/Mat makers, Tailors, Barbers, Washermen, Fishermen, etc.).',
    targetBeneficiaries: 'Traditional artisans and craftspeople engaged in 18 notified traditional trades on a self-employment basis.',
    keyBenefits: [
      'PM Vishwakarma Certificate and Digital ID Card conferring formal recognition.',
      'Free 5–7 days Basic Skill Training and 15 days Advanced Training with ₹500/day stipend.',
      '₹15,000 Digital Toolkit Incentive e-Voucher to purchase modern equipment.',
      'Enterprise Development Loan: 1st tranche up to ₹1,00,000 (18 months) & 2nd tranche up to ₹2,00,000 (30 months) at highly concessional 5% interest rate (8% interest subvention by GoI).',
      'Digital transaction cashback up to ₹100 per month (₹1 per transaction for up to 100 transactions).'
    ],
    maxBenefitAmount: '₹15,000 Free Toolkit + ₹3,00,000 loan at 5% interest',
    eligibility: {
      minAge: 18,
      gender: 'All',
      occupations: ['Artisan/Worker', 'Self-Employed'],
      specificConditions: [
        'Must be practicing one of the 18 notified traditional trades.',
        'Only one member of the family can avail benefits under the scheme.',
        'Should not have availed similar credit-based schemes (like PMEGP, PM SVANidhi, Mudra) in the past 5 years unless fully repaid.'
      ]
    },
    eligibilityDescription: [
      'Artisans in 18 trades: Carpenter, Boat Maker, Armourer, Blacksmith, Hammer and Tool Kit Maker, Locksmith, Sculptor, Goldsmith, Potter, Cobbler, Mason, Basket/Mat Maker, Traditional Doll/Toy Maker, Barber, Garland Maker, Washerman, Tailor, Fishing Net Maker.',
      'Must be self-employed in the unorganized sector.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Biometric e-KYC and identification', isMandatory: true },
      { name: 'Mobile Number linked with Aadhaar', purpose: 'OTP generation', isMandatory: true },
      { name: 'Bank Account Passbook', purpose: 'Direct credit of stipend, toolkit voucher & loan', isMandatory: true },
      { name: 'Ration Card / Family Composition Proof', purpose: 'Verification of one beneficiary per family', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Visit Nearest Common Service Centre (CSC)',
        description: 'Biometric verification is required. Visit any authorized CSC (Gram Panchayat or Urban) or visit https://pmvishwakarma.gov.in.',
        actionTip: 'Registration on the portal is completely free of charge.'
      },
      {
        stepNumber: 2,
        title: 'Biometric e-KYC & Trade Selection',
        description: 'Authenticate your identity through Aadhaar fingerprint/iris scan. Select your traditional trade from the 18 listed crafts.',
        actionTip: 'Ensure family member details match your Ration Card.'
      },
      {
        stepNumber: 3,
        title: 'Three-Stage Verification',
        description: 'Your application is verified at Stage 1 (Gram Panchayat / ULB), Stage 2 (District Implementation Committee), and Stage 3 (Screening Committee).',
        actionTip: 'You will receive SMS updates at each verification stage.'
      },
      {
        stepNumber: 4,
        title: 'Download ID & Attend Skill Training',
        description: 'Once approved, download your Vishwakarma Certificate & ID card. Attend the local skill training center to receive your ₹500/day stipend and ₹15,000 toolkit voucher.',
        actionTip: 'You can apply for the ₹1 Lakh loan after completing basic training.'
      }
    ],
    importantConditions: [
      'Government employees and their immediate family members are not eligible.',
      'Training must be completed to unlock the toolkit incentive and loan facility.'
    ],
    faqs: [
      {
        question: 'What are the 18 covered trades?',
        answer: 'Carpenters, Boat Makers, Armourers, Blacksmiths, Tool Kit Makers, Locksmiths, Sculptors, Goldsmiths, Potters, Cobblers, Masons, Basket/Mat/Broom Makers, Traditional Doll & Toy Makers, Barbers, Garland Makers, Washermen (Dhobi), Tailors (Darzi), and Fishing Net Makers.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'pm-svanidhi',
    name: 'PM Street Vendor\'s AtmaNirbhar Nidhi (PM SVANidhi)',
    shortName: 'PM SVANidhi',
    tagline: 'Affordable working capital collateral-free micro-credit up to ₹50,000 with 7% interest subsidy for street vendors.',
    category: 'business',
    level: 'Central',
    ministry: 'Ministry of Housing and Urban Affairs (MoHUA)',
    department: 'Urban Poverty Alleviation Division',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmsvanidhi.mohua.gov.in',
    helplinePhone: '1800-111-979',
    briefDescription: 'Special micro-credit facility empowering urban, peri-urban, and rural street vendors to restart and grow their livelihoods with progressive loan limits and cashback incentives.',
    detailedOverview: 'PM SVANidhi facilitates collateral-free working capital loans to street vendors. It follows an escalating credit model: 1st loan up to ₹10,000 (1 year tenure); on timely repayment, 2nd loan up to ₹20,000 (18 months); and 3rd loan up to ₹50,000 (36 months). Vendors receive 7% interest subsidy credited directly to bank accounts and up to ₹1,200 annual cashback on digital UPI transactions.',
    targetBeneficiaries: 'Street vendors, hawkers, thela-walas, vegetable sellers, food stall operators, and service providers in urban and semi-urban areas.',
    keyBenefits: [
      'Collateral-free working capital loan: ₹10,000 -> ₹20,000 -> ₹50,000.',
      '7% interest subsidy credited directly every quarter into bank account.',
      'Digital transaction cashback up to ₹100 per month (₹1,200 per year).',
      'No prepayment penalty on early repayment.',
      'Inclusion of family under 8 central welfare schemes via "SVANidhi se Samriddhi".'
    ],
    maxBenefitAmount: 'Up to ₹50,000 loan + 7% interest subsidy + ₹1,200 cashback',
    eligibility: {
      minAge: 18,
      gender: 'All',
      occupations: ['Self-Employed', 'Artisan/Worker'],
      specificConditions: [
        'Must be engaged in street vending in urban/semi-urban areas.',
        'Vendors with Certificate of Vending / Identity Card issued by ULB (Urban Local Body) or identified in street vendor surveys.',
        'Vendors left out of survey can apply through a Letter of Recommendation (LoR) issued by Town Vending Committee.'
      ]
    },
    eligibilityDescription: [
      'Street vendors possessing Vending Certificate / ID Card from Urban Local Body.',
      'Vendors possessing Letter of Recommendation (LoR) from Town Vending Committee (TVC).'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Identity and address verification', isMandatory: true },
      { name: 'Vending Certificate / TVC Identity Card / LoR', purpose: 'Proof of street vending status', isMandatory: true },
      { name: 'Active Bank Passbook', purpose: 'Loan disbursement and subsidy credit', isMandatory: true },
      { name: 'Mobile Number linked with Aadhaar', purpose: 'OTP application verification', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Check Vending Status / Apply for LoR',
        description: 'Visit the official portal (https://pmsvanidhi.mohua.gov.in) and check if your name exists in the Urban Local Body survey list.',
        actionTip: 'If not listed, request a Letter of Recommendation (LoR) online or from your local Municipality.'
      },
      {
        stepNumber: 2,
        title: 'Apply for Loan Online',
        description: 'Click "Apply for Loan" on the PM SVANidhi portal or mobile app. Enter your Aadhaar number and OTP.',
        actionTip: 'Select your preferred lending institution (your regular bank where you hold an active account).'
      },
      {
        stepNumber: 3,
        title: 'Select Loan Amount',
        description: 'Choose 1st loan tranche (₹10,000) or subsequent tranches if eligible. Submit your application.',
        actionTip: 'The application is routed electronically to the nearest bank branch.'
      },
      {
        stepNumber: 4,
        title: 'Disbursement & Digital QR Setup',
        description: 'The bank disburses the loan directly into your account and provides a UPI QR code standee to earn digital cashbacks.',
        actionTip: 'Repaying on time unlocks the next higher loan limit and credit score boost.'
      }
    ],
    importantConditions: [
      'Subsidies and cashbacks are only credited to Aadhaar-seeded bank accounts.',
      'Timely monthly repayment is essential to maintain interest subsidy eligibility.'
    ],
    faqs: [
      {
        question: 'Do I need any guarantor or security to get a PM SVANidhi loan?',
        answer: 'No. No collateral or third-party guarantee is required from any street vendor.'
      }
    ],
    isFeatured: false,
    isPopular: true
  },
  {
    id: 'pmmvy-maternity-scheme',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    shortName: 'PM Matru Vandana Yojana',
    tagline: 'Direct maternity cash benefit of ₹5,000 to ₹6,000 for pregnant women and lactating mothers.',
    category: 'women',
    level: 'Central',
    ministry: 'Ministry of Women and Child Development',
    department: 'Women Welfare Division',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://pmmvy.wcd.gov.in',
    helplinePhone: '1098 / 011-23382393',
    briefDescription: 'Conditional cash transfer scheme providing nutritional compensation and wage loss support to pregnant women and lactating mothers for the first child (₹5,000) and second girl child (₹6,000).',
    detailedOverview: 'PMMVY provides cash incentives through Direct Benefit Transfer (DBT) to pregnant women for partial wage compensation and to promote health seeking behavior, institutional delivery, and child immunization. Under Mission Shakti (PMMVY 2.0), ₹5,000 is provided in 2 installments for the 1st child, and an enhanced incentive of ₹6,000 in a single installment for the 2nd child if it is a girl.',
    targetBeneficiaries: 'Pregnant women and lactating mothers (PW&LM) belonging to socially and economically disadvantaged sections.',
    keyBenefits: [
      'Direct Benefit Transfer of ₹5,000 for the 1st live birth (Installment 1: ₹3,000 upon pregnancy registration & ANC; Installment 2: ₹2,000 after child birth registration & 1st cycle immunization).',
      'Direct Benefit Transfer of ₹6,000 for the 2nd child if it is a girl child.',
      'Promotes institutional delivery and timely immunization for newborn babies.',
      'Credited directly to the mother\'s own Aadhaar-linked bank account.'
    ],
    maxBenefitAmount: 'Up to ₹6,000 cash assistance',
    eligibility: {
      minAge: 19,
      maxAge: 45,
      gender: 'Female',
      maxAnnualIncome: 800000,
      specificConditions: [
        'Pregnant woman must belong to eligible categories: SC/ST, Divyangjan, EWS/BPL ration card holders, MGNREGA job card holders, PM-JAY beneficiaries, or family income below ₹8 Lakh.',
        'Regular employees of Central/State Govt or PSUs are not eligible.'
      ]
    },
    eligibilityDescription: [
      'Pregnant women & lactating mothers registered at Anganwadi Centre / Health facility.',
      'Holding NFSA Ration card, EWS certificate, MGNREGA job card, or income below ₹8 Lakh.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of Beneficiary (Mother)', purpose: 'Mandatory identification and DBT credit', isMandatory: true },
      { name: 'Mother-Child Protection (MCP) Card', purpose: 'Proof of ANC checkup and child immunization', isMandatory: true },
      { name: 'Aadhaar Card of Husband', purpose: 'Family record verification', isMandatory: false },
      { name: 'Beneficiary Bank Passbook', purpose: 'Aadhaar-seeded personal bank account', isMandatory: true },
      { name: 'Child Birth Registration Certificate', purpose: 'Required for claiming 2nd installment / girl child incentive', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Register Pregnancy at Anganwadi / Health Sub-Centre',
        description: 'Register pregnancy within 570 days of LMP at your nearest Anganwadi Centre (AWC) or approved Government Health Facility to obtain your MCP Card.',
        actionTip: 'Ensure ANC checkup is recorded in MCP card.'
      },
      {
        stepNumber: 2,
        title: 'Apply Online on PMMVY Portal',
        description: 'Beneficiary can self-register online at https://pmmvy.wcd.gov.in using Citizen Login or submit details to the Anganwadi Worker (AWW) / ASHA.',
        actionTip: 'Citizen login requires Aadhaar OTP authentication.'
      },
      {
        stepNumber: 3,
        title: 'Fill Form 1A & Upload MCP Details',
        description: 'Enter MCP card registration date, ANC date, and your individual bank account details.',
        actionTip: 'Bank account must be in mother\'s name only, not joint with husband.'
      },
      {
        stepNumber: 4,
        title: 'Claim 2nd Installment after Birth & Immunization',
        description: 'After child birth and completing the first immunization cycle (BCG, OPV, DPT, Hepatitis B), upload the birth certificate and updated MCP card to receive the final installment.',
        actionTip: 'Track DBT payment status using your Application ID.'
      }
    ],
    importantConditions: [
      'Bank account must strictly be in the name of the mother and Aadhaar-seeded.',
      'Government employees are excluded from monetary assistance.'
    ],
    faqs: [
      {
        question: 'Can I get the benefit if my first child was born at home?',
        answer: 'Yes, as long as birth is officially registered and required vaccinations are given and verified by ASHA/ANM.'
      }
    ],
    isFeatured: false,
    isPopular: true
  },
  {
    id: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    shortName: 'Atal Pension Yojana',
    tagline: 'Guaranteed government monthly pension of ₹1,000 to ₹5,000 for unorganized sector workers after age 60.',
    category: 'financial',
    level: 'Central',
    ministry: 'Ministry of Finance',
    department: 'Pension Fund Regulatory and Development Authority (PFRDA)',
    lastVerifiedDate: 'January 2026',
    officialPortalUrl: 'https://www.npscra.nsdl.co.in',
    helplinePhone: '1800-110-069',
    briefDescription: 'A government-backed periodic pension scheme focused on all citizens in the unorganized sector, ensuring lifelong fixed monthly pension from age 60 onwards.',
    detailedOverview: 'Atal Pension Yojana (APY) provides a guaranteed minimum monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 to subscribers upon attaining the age of 60 years, depending on their contributions. In case of subscriber\'s death, the same pension is paid to spouse for life; thereafter the entire accumulated pension wealth is returned to the nominee.',
    targetBeneficiaries: 'Indian citizens aged between 18 and 40 years holding a savings bank account, especially those in the unorganized sector.',
    keyBenefits: [
      'Guaranteed lifelong monthly pension of ₹1,000 to ₹5,000 after 60 years.',
      'Sovereign guarantee: Government covers any shortfall in pension corpus.',
      'Spouse receives identical pension for life upon subscriber\'s demise.',
      'Nominee receives full accumulated corpus (up to ₹8.5 Lakh for ₹5k pension) upon demise of both subscriber & spouse.',
      'Tax deduction benefits under Section 80CCD(1B) up to ₹50,000 additionally.'
    ],
    maxBenefitAmount: 'Guaranteed ₹5,000 monthly pension for life',
    eligibility: {
      minAge: 18,
      maxAge: 40,
      gender: 'All',
      specificConditions: [
        'Must be an Indian citizen aged between 18 and 40 years.',
        'Must possess a savings bank account with auto-debit facility.',
        'Should not be an income tax payer (as per rules effective October 1, 2022).'
      ]
    },
    eligibilityDescription: [
      'Any Indian citizen between 18 and 40 years.',
      'Must have an active savings account in bank or post office.',
      'Non-taxpayer.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Identity and e-KYC', isMandatory: true },
      { name: 'Savings Bank Account Passbook', purpose: 'Setting up auto-debit monthly contribution', isMandatory: true },
      { name: 'Active Mobile Number', purpose: 'SMS alerts and PRAN generation', isMandatory: true },
      { name: 'Nominee Details (Aadhaar/Identity)', purpose: 'Nomination for corpus return', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Visit Bank or NetBanking Portal',
        description: 'Login to your bank\'s Internet Banking / Mobile Banking app or visit your bank branch where you have an active savings account.',
        actionTip: 'Most major banks offer 1-click APY enrollment in mobile apps.'
      },
      {
        stepNumber: 2,
        title: 'Choose Desired Pension Amount',
        description: 'Select your target monthly pension (₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000). The monthly auto-debit amount will be calculated based on your current age.',
        actionTip: 'Joining at age 18 requires only ₹210/month for a ₹5,000/month pension.'
      },
      {
        stepNumber: 3,
        title: 'Provide Nominee & Spouse Details',
        description: 'Fill in spouse details and nominee information.',
        actionTip: 'Double check spelling of nominee name as per Aadhaar.'
      },
      {
        stepNumber: 4,
        title: 'Receive PRAN & e-PRAN Card',
        description: 'Upon confirmation, your Permanent Retirement Account Number (PRAN) is generated and sent via SMS. Download your e-PRAN from the NSDL CRA portal (https://www.npscra.nsdl.co.in).',
        actionTip: 'Ensure sufficient balance on the monthly auto-debit due date.'
      }
    ],
    importantConditions: [
      'Contributions must be maintained until age 60.',
      'Monthly, quarterly, or half-yearly auto-debit frequencies are available.'
    ],
    faqs: [
      {
        question: 'Can I increase or decrease my pension amount later?',
        answer: 'Yes, subscribers can upgrade or downgrade their pension amount once per financial year in April.'
      }
    ],
    isFeatured: false,
    isPopular: true
  },
  {
    id: 'pm-kvy-skill-training',
    name: 'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',
    shortName: 'PMKVY 4.0',
    tagline: 'Free industry-aligned skill certification, technical training, Industry 4.0 courses, and placement assistance.',
    category: 'employment',
    level: 'Central',
    ministry: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
    department: 'National Skill Development Corporation (NSDC)',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://www.skillindiadigital.gov.in',
    helplinePhone: '088000-55555 / 1800-123-9626',
    briefDescription: 'Government-funded skill training initiative enabling Indian youth to take up industry-relevant, future-ready job training (AI, Robotics, Solar, Electric Vehicles, Healthcare, IT) to secure better livelihoods.',
    detailedOverview: 'PMKVY 4.0 offers on-demand, free-of-cost skill training, Short Term Training (STT), Recognition of Prior Learning (RPL), and Special Projects. All training and assessment fees are 100% paid by the Government of India. Candidates receiving certification are assisted with job fairs, apprenticeship opportunities, and Kaushal Melas.',
    targetBeneficiaries: 'Unemployed youth, school/college dropouts, job seekers, and existing workers wanting skill certification across India.',
    keyBenefits: [
      '100% free technical and vocational training across hundreds of certified job roles.',
      'New-age courses in Coding, AI, Robotics, Mechatronics, IoT, 3D Printing, Drones, and Green Hydrogen.',
      'Government of India recognized Skill India Certificate & Digital Skill Passport.',
      'Stipend / conveyance support and accidental insurance coverage during training.',
      'Direct linkage to Skill India Digital placement portal and apprenticeship stipends.'
    ],
    maxBenefitAmount: 'Free Certified Training + Apprenticeship Stipend',
    eligibility: {
      minAge: 15,
      maxAge: 45,
      gender: 'All',
      occupations: ['Unemployed', 'Student', 'Artisan/Worker'],
      specificConditions: [
        'Must be an Indian citizen with Aadhaar and valid mobile number.',
        'Must possess minimum educational qualification specified for the chosen job role (from 8th pass to Graduate).'
      ]
    },
    eligibilityDescription: [
      'Youth looking for industry-aligned job training.',
      'School or college dropouts wanting vocational certifications.',
      'Workers seeking formal Recognition of Prior Learning (RPL).'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Identity verification & Skill India registration', isMandatory: true },
      { name: 'Educational Marksheet / Certificate', purpose: 'Verification of minimum entry qualification', isMandatory: true },
      { name: 'Active Bank Passbook', purpose: 'Disbursement of conveyance allowance / reward', isMandatory: true },
      { name: 'Passport Size Photographs', purpose: 'Candidate profile creation', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Open Skill India Digital Portal',
        description: 'Visit the official government platform (https://www.skillindiadigital.gov.in) or download the Skill India Digital App.',
        actionTip: 'Register using your mobile number and Aadhaar e-KYC.'
      },
      {
        stepNumber: 2,
        title: 'Explore Skill Courses & PMKK Centres',
        description: 'Search for courses by sector (IT, Solar, Automotive, Healthcare, Construction) or locate your nearest Pradhan Mantri Kaushal Kendra (PMKK).',
        actionTip: 'Check course duration and minimum eligibility requirements.'
      },
      {
        stepNumber: 3,
        title: 'Enroll in Selected Batch',
        description: 'Select your preferred training center and batch schedule. Submit your enrollment application online.',
        actionTip: 'You will receive batch confirmation and reporting instructions via SMS.'
      },
      {
        stepNumber: 4,
        title: 'Complete Training, Assessment & Get Certified',
        description: 'Attend theoretical and practical hands-on sessions. Pass the third-party assessment to receive your digital QR-coded Skill Certificate and attend Rozgar Melas.',
        actionTip: 'Download your certified credential directly to DigiLocker.'
      }
    ],
    importantConditions: [
      'Minimum 70% attendance is mandatory to appear for the final assessment.',
      'Assessments are conducted by independent Sector Skill Councils (SSCs).'
    ],
    faqs: [
      {
        question: 'Do I have to pay any course fee or exam fee?',
        answer: 'No. PMKVY is 100% free. The entire fee is sponsored by the Ministry of Skill Development.'
      }
    ],
    isFeatured: false,
    isPopular: true
  },
  {
    id: 'nsap-old-age-pension',
    name: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS — NSAP)',
    shortName: 'National Old Age Pension (IGNOAPS)',
    tagline: 'Monthly social security financial pension for senior citizens living below poverty line.',
    category: 'seniors',
    level: 'Central',
    ministry: 'Ministry of Rural Development',
    department: 'National Social Assistance Programme (NSAP) Division',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://nsap.nic.in',
    helplinePhone: '1800-111-555',
    briefDescription: 'Provides non-contributory monthly old age pensions to senior citizens aged 60 years and above belonging to BPL households across India, supplemented by state contributions.',
    detailedOverview: 'IGNOAPS is a flagship component of the National Social Assistance Programme (NSAP). Central assistance of ₹200 to ₹500 per month is directly augmented with additional state shares (ranging from ₹1,000 to ₹2,500/month depending on the state) to ensure social security for elderly citizens with no regular source of income.',
    targetBeneficiaries: 'Destitute and senior citizens aged 60+ belonging to BPL families.',
    keyBenefits: [
      'Monthly direct benefit transfer pension credited directly into senior citizen\'s bank or post office account.',
      'No contribution or prior investment required.',
      'Increased pension amount upon attaining 80 years of age.',
      'Doorstep delivery of pension via India Post Payment Bank (IPPB) micro-ATMs in rural areas.'
    ],
    maxBenefitAmount: '₹1,000 to ₹3,000 / month (Central + State combined)',
    eligibility: {
      minAge: 60,
      maxAge: 100,
      gender: 'All',
      occupations: ['Senior Citizen'],
      maxAnnualIncome: 120000,
      specificConditions: [
        'Applicant must be 60 years of age or older.',
        'Must belong to a household living Below Poverty Line (BPL) as per state government criteria / BPL card list.'
      ]
    },
    eligibilityDescription: [
      'Senior citizens aged 60 and above.',
      'Identified BPL ration card holders / destitute elderly with no family financial support.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Proof of age and identity', isMandatory: true },
      { name: 'BPL Card / Antyodaya Ration Card', purpose: 'Proof of Below Poverty Line status', isMandatory: true },
      { name: 'Bank Passbook / Post Office Savings Account', purpose: 'Direct monthly pension credit', isMandatory: true },
      { name: 'Age Certificate / Medical Officer Age Proof', purpose: 'Proof of age if not clear on Aadhaar', isMandatory: false },
      { name: 'Passport Size Photographs', purpose: 'Application records', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Check Inclusion in State BPL / NSAP Register',
        description: 'Verify your name in the BPL list at your Gram Panchayat (Rural) or Municipality / Ward Office (Urban) or on https://nsap.nic.in.',
        actionTip: 'Keep your BPL survey number handy.'
      },
      {
        stepNumber: 2,
        title: 'Submit Application Form',
        description: 'Collect the NSAP Pension application form from your Block Development Office (BDO), Gram Panchayat, or apply online via the State Social Welfare portal / e-District portal.',
        actionTip: 'Attach photocopies of Aadhaar, BPL card, and bank passbook.'
      },
      {
        stepNumber: 3,
        title: 'Verification by Village / Ward Nodal Officer',
        description: 'The Panchayat Secretary / Social Welfare Inspector conducts physical enquiry and forwards the application to the Sub-Divisional Officer (SDO).',
        actionTip: 'Track status via NSAP portal under "Beneficiary Track".'
      },
      {
        stepNumber: 4,
        title: 'Sanction Order & Monthly DBT Pension',
        description: 'Upon sanction, your pension Sanction Order is generated and monthly DBT credits begin directly into your savings account.',
        actionTip: 'Annual digital life certificate (Jeevan Pramaan) can be submitted at any CSC or post office.'
      }
    ],
    importantConditions: [
      'Annual submission of Digital Life Certificate (Jeevan Pramaan) or physical verification is required.',
      'Must maintain an active bank/post office account with Aadhaar seeding.'
    ],
    faqs: [
      {
        question: 'How much total pension will I receive in my state?',
        answer: 'While the Central Government contribution is fixed, most states add their own top-up ranging between ₹800 and ₹2,500/month, making total monthly pension between ₹1,000 and ₹3,000/month.'
      }
    ],
    isFeatured: false,
    isPopular: false
  },
  {
    id: 'adip-differently-abled-assistance',
    name: 'ADIP Scheme — Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances',
    shortName: 'ADIP Scheme (Divyangjan)',
    tagline: 'Free high-quality modern assistive devices, motorized tricycles, hearing aids, wheelchairs, and artificial limbs for Divyangjan.',
    category: 'disability',
    level: 'Central',
    ministry: 'Ministry of Social Justice and Empowerment',
    department: 'Department of Empowerment of Persons with Disabilities (DEPwD) & ALIMCO',
    lastVerifiedDate: 'January 2026',
    officialPortalUrl: 'https://www.adip.disabilityaffairs.gov.in',
    helplinePhone: '1800-180-5129',
    briefDescription: 'Assists needy persons with disabilities in procuring durable, sophisticated, and scientifically manufactured modern standard aids and appliances to promote their physical, social, and psychological rehabilitation.',
    detailedOverview: 'Under the ADIP Scheme, ALIMCO and certified implementing agencies distribute assistive aids free of cost or at 50% subsidy to individuals holding a valid Unique Disability ID (UDID) card whose monthly income does not exceed prescribed limits. Aids include motorized tricycles, smart canes, digital hearing aids, daisy players for visual impairment, wheelchairs, and cochlear implants for children.',
    targetBeneficiaries: 'Persons with 40% or more benchmark disability and low family income.',
    keyBenefits: [
      '100% free aids & appliances for beneficiaries with monthly income up to ₹22,500.',
      '50% subsidy for beneficiaries with monthly income between ₹22,501 and ₹30,000.',
      'Free motorized tricycles and wheelchairs for severe locomotor disabilities.',
      'Cochlear implant surgeries supported up to ₹6,00,000 for deaf children under 5 years.',
      'Smart phones, laptops with screen readers, braille slates, and daisy players for students with visual impairment.'
    ],
    maxBenefitAmount: 'Free Modern Assistive Devices / Implants up to ₹6,00,000',
    eligibility: {
      minAge: 0,
      maxAge: 100,
      gender: 'All',
      hasDisability: true,
      minDisabilityPercent: 40,
      maxAnnualIncome: 360000,
      occupations: ['Unemployed', 'Student', 'Self-Employed', 'Artisan/Worker', 'Senior Citizen'],
      specificConditions: [
        'Must hold a valid Disability Certificate / UDID Card showing minimum 40% benchmark disability.',
        'Total monthly family income from all sources must not exceed ₹30,000.',
        'Should not have received the same aid/appliance from government/voluntary organization within the last 3 years (1 year for children under 12).'
      ]
    },
    eligibilityDescription: [
      'Divyangjan with minimum 40% benchmark disability and valid UDID card.',
      'Monthly family income not exceeding ₹30,000.'
    ],
    requiredDocuments: [
      { name: 'UDID Card / Disability Certificate (40%+)', purpose: 'Verification of benchmark disability', isMandatory: true },
      { name: 'Aadhaar Card', purpose: 'Identity and address proof', isMandatory: true },
      { name: 'Income Certificate / BPL Card / Salary Slip', purpose: 'Income eligibility verification', isMandatory: true },
      { name: 'Passport Size Full Body Photograph showing disability', purpose: 'Clinical assessment records', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Obtain UDID Card (if not already held)',
        description: 'Apply for your Unique Disability ID (UDID) online at https://www.swavlambancard.gov.in and undergo medical board evaluation at your District Hospital.',
        actionTip: 'UDID card enables seamless single-window access across all disability schemes.'
      },
      {
        stepNumber: 2,
        title: 'Register on ADIP Portal or Attend ALIMCO Camp',
        description: 'Register online at https://www.adip.disabilityaffairs.gov.in or attend free ADIP Mega Assessment Camps organized periodically by District Administration and ALIMCO.',
        actionTip: 'Check upcoming camp schedules on the district administration website.'
      },
      {
        stepNumber: 3,
        title: 'Clinical Assessment & Prescription',
        description: 'Rehabilitation specialists, audiologists, and prosthetic technicians assess individual requirements and measure custom fitments.',
        actionTip: 'Carry all original medical records and audiograms/X-rays.'
      },
      {
        stepNumber: 4,
        title: 'Free Distribution at Distribution Camp',
        description: 'Aids and modern appliances (such as customized motorized tricycles, digital hearing aids, braille kits) are distributed free of cost with training on maintenance.',
        actionTip: 'Warranty and repair support are provided by ALIMCO.'
      }
    ],
    importantConditions: [
      'Aids can be re-applied for after 3 years of usage (or 1 year for growing children).',
      'Fitting and training on usage is provided free at the camp.'
    ],
    faqs: [
      {
        question: 'How do I know when an ADIP camp is happening in my district?',
        answer: 'Camp dates are published in local newspapers and on the official ADIP portal and District Magistrate portal.'
      }
    ],
    isFeatured: false,
    isPopular: false
  },
  {
    id: 'maharashtra-ladki-bahin-yojana',
    name: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    shortName: 'Majhi Ladki Bahin Yojana',
    tagline: 'Direct monthly financial assistance of ₹1,500 credited to women aged 21 to 65 years in Maharashtra.',
    category: 'women',
    level: 'State',
    state: 'Maharashtra',
    ministry: 'Women and Child Development Department, Government of Maharashtra',
    department: 'Directorate of Women and Child Development, Pune',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://ladakibahin.maharashtra.gov.in',
    helplinePhone: '181 / 022-22027050',
    briefDescription: 'Maharashtra state government flagship initiative providing ₹1,500 direct monthly DBT financial aid to women to promote economic self-reliance, nutrition, and health.',
    detailedOverview: 'Mukhyamantri Majhi Ladki Bahin Yojana provides financial empowerment to resident women of Maharashtra aged 21-65 years whose annual family income is up to ₹2.5 Lakh. The amount of ₹1,500 is credited directly into their Aadhaar-linked active bank account every month.',
    targetBeneficiaries: 'Married, widowed, divorced, deserted, and destitute women in Maharashtra aged 21 to 65 years.',
    keyBenefits: [
      'Direct Benefit Transfer (DBT) of ₹1,500 every month (₹18,000 annually).',
      'Directly deposited into woman\'s individual Aadhaar-linked bank account.',
      'Supports women\'s personal healthcare, daily nutrition, and household financial resilience.',
      'Simple online registration via Nari Shakti Doot mobile app or official web portal.'
    ],
    maxBenefitAmount: '₹1,500 / month (₹18,000 / year)',
    eligibility: {
      minAge: 21,
      maxAge: 65,
      gender: 'Female',
      states: ['Maharashtra'],
      maxAnnualIncome: 250000,
      occupations: ['Homemaker', 'Self-Employed', 'Artisan/Worker', 'Unemployed', 'Farmer'],
      specificConditions: [
        'Must be a permanent resident of Maharashtra holding Domicile Certificate / Ration Card issued at least 15 years ago.',
        'Combined annual family income must not exceed ₹2.50 Lakh.',
        'No family member should be a regular/permanent government employee or paying income tax.',
        'Family should not own a four-wheeler (excluding tractor).'
      ]
    },
    eligibilityDescription: [
      'Resident women of Maharashtra aged 21 to 65.',
      'Annual family income ceiling of ₹2.50 Lakh.',
      'Yellow or Orange Ration Card holders exempted from separate income certificate.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card of Applicant', purpose: 'Identity and age verification', isMandatory: true },
      { name: 'Maharashtra Domicile Certificate / Ration Card / Birth Certificate', purpose: 'Proof of 15 years residency in Maharashtra', isMandatory: true },
      { name: 'Income Certificate (Under ₹2.5 Lakh) or Yellow/Orange Ration Card', purpose: 'Income criteria proof', isMandatory: true },
      { name: 'Personal Bank Passbook (Aadhaar Seeded)', purpose: 'Direct monthly DBT credit', isMandatory: true },
      { name: 'Undertaking / Hamipatra', purpose: 'Self-declaration of eligibility conditions', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Open Official Portal / Nari Shakti Doot App',
        description: 'Visit the verified Maharashtra government portal (https://ladakibahin.maharashtra.gov.in) or download the Nari Shakti Doot app.',
        actionTip: 'You can also apply with assistance at your nearest Setu Suvidha Kendra, Gram Panchayat, or Anganwadi.'
      },
      {
        stepNumber: 2,
        title: 'Enter Mobile Number & OTP Registration',
        description: 'Register with your active mobile number and complete Aadhaar OTP authentication.',
        actionTip: 'Ensure your Aadhaar is linked to your active bank account with NPCI mapping.'
      },
      {
        stepNumber: 3,
        title: 'Fill Application Details & Upload Documents',
        description: 'Fill in your name, address, district, taluka, bank details, and upload photo of Aadhaar, Ration Card, and Bank Passbook.',
        actionTip: 'Make sure your bank account is not a joint account with your husband.'
      },
      {
        stepNumber: 4,
        title: 'Submit & Track Application Approval',
        description: 'Submit the application and note your Registration Number. Check application status online under "Beneficiary Application List".',
        actionTip: 'Approved applicants receive ₹1,500 monthly via Aadhaar-enabled DBT.'
      }
    ],
    importantConditions: [
      'Women already receiving ₹1,500 or more per month from another government pension scheme are not eligible.',
      'Bank account must be individual and actively linked to Aadhaar.'
    ],
    faqs: [
      {
        question: 'Do I need an Income Certificate if I have an Orange or Yellow Ration Card?',
        answer: 'No. As per government GR, Orange and Yellow Ration Card holders do not need to produce a separate income certificate.'
      },
      {
        question: 'Can unmarried women apply for this scheme?',
        answer: 'Unmarried women are eligible if they are between 21 and 65 years and meet residency and family income conditions.'
      }
    ],
    isFeatured: true,
    isPopular: true
  },
  {
    id: 'karnataka-yuva-nidhi',
    name: 'Yuva Nidhi Scheme (Karnataka Guarantee)',
    shortName: 'Yuva Nidhi (Karnataka)',
    tagline: 'Monthly unemployment financial allowance of ₹3,000 for Graduates and ₹1,500 for Diploma holders in Karnataka.',
    category: 'employment',
    level: 'State',
    state: 'Karnataka',
    ministry: 'Skill Development, Entrepreneurship and Livelihood Department, Karnataka',
    department: 'Yuva Nidhi Implementation Cell',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://sevasindhuservices.karnataka.gov.in',
    helplinePhone: '1902 / 080-22279954',
    briefDescription: 'Provides monthly financial assistance and skill development training to unemployed graduates and diploma holders who passed out in recent academic years in Karnataka.',
    detailedOverview: 'Yuva Nidhi is one of Karnataka\'s flagship guarantee schemes. It provides ₹3,000/month to unemployed degree holders and ₹1,500/month to unemployed diploma holders for up to 24 months or until they secure employment or self-employment, whichever is earlier.',
    targetBeneficiaries: 'Unemployed Graduates and Diploma holders residing in Karnataka who graduated in 2023 or subsequent years and have remained unemployed for at least 180 days.',
    keyBenefits: [
      '₹3,000 monthly allowance for unemployed Degree/Professional Graduates.',
      '₹1,500 monthly allowance for unemployed Diploma holders.',
      'Direct Benefit Transfer into Aadhaar-seeded bank account for up to 2 years.',
      'Free access to Karnataka Skill Development Corporation (KSDC) industry training and job fairs.'
    ],
    maxBenefitAmount: '₹3,000 / month for up to 24 months (₹72,000 total)',
    eligibility: {
      minAge: 18,
      maxAge: 35,
      gender: 'All',
      states: ['Karnataka'],
      occupations: ['Unemployed'],
      specificConditions: [
        'Must have passed Degree / Diploma from a recognized institution in Karnataka in the eligible academic year.',
        'Must have remained unemployed for at least 180 days post graduation.',
        'Must be a domicile resident of Karnataka for at least 6 years prior.',
        'Should not be enrolled in higher education or receiving apprentice stipend.'
      ]
    },
    eligibilityDescription: [
      'Graduates and Diploma holders domicile in Karnataka.',
      'Unemployed for 180+ days after passing degree/diploma.',
      'Not paying PF/ESI and not employed in government or private corporate sector.'
    ],
    requiredDocuments: [
      { name: 'Aadhaar Card', purpose: 'Identity and Karnataka domicile verification', isMandatory: true },
      { name: 'Degree / Diploma Certificate and All Semester Marksheets', purpose: 'Proof of educational qualification and passing year', isMandatory: true },
      { name: 'Karnataka Domicile Certificate / 6 Years Study Certificate', purpose: 'Proof of residency in Karnataka', isMandatory: true },
      { name: 'Aadhaar Seeded Bank Passbook', purpose: 'Monthly DBT credit', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Open Seva Sindhu Portal',
        description: 'Navigate to https://sevasindhuservices.karnataka.gov.in and click on "Yuva Nidhi Guarantee Scheme".',
        actionTip: 'You can also apply at Karnataka One, Bangalore One, or Grama One service centres.'
      },
      {
        stepNumber: 2,
        title: 'Fetch University / Polytechnic Marksheet Data',
        description: 'Enter your University Registration Number / Polytechnic Roll Number. The system automatically fetches your degree details via NAD/DigiLocker.',
        actionTip: 'Verify your marks and passing year.'
      },
      {
        stepNumber: 3,
        title: 'Aadhaar e-KYC & Self-Declaration',
        description: 'Perform Aadhaar OTP authentication and submit a self-declaration that you are currently not employed, not self-employed with GST, and not enrolled in full-time higher studies.',
        actionTip: 'Monthly self-declaration of unemployment is required on the portal.'
      },
      {
        stepNumber: 4,
        title: 'Approval & Monthly DBT Credit',
        description: 'Once verified by the Skill Development Department, monthly allowance is credited directly to your Aadhaar-linked bank account.',
        actionTip: 'Log in on the 1st of every month to submit the simple 1-click unemployment renewal status.'
      }
    ],
    importantConditions: [
      'Beneficiaries must log into Seva Sindhu every month between the 1st and 10th to confirm continuing unemployment status.',
      'If the beneficiary gets a job or starts an enterprise, they must surrender the benefit promptly.'
    ],
    faqs: [
      {
        question: 'What happens if I secure a job while receiving Yuva Nidhi?',
        answer: 'You must update your status on Seva Sindhu to stop the allowance. Continuing to receive benefits after securing employment attracts recovery.'
      }
    ],
    isFeatured: false,
    isPopular: true
  },
  {
    id: 'tamil-nadu-magalir-urimai-thittam',
    name: 'Kalaignar Magalir Urimai Thittam (Tamil Nadu)',
    shortName: 'Magalir Urimai Thittam',
    tagline: 'Monthly basic income entitlement of ₹1,000 for women heads of families in Tamil Nadu.',
    category: 'women',
    level: 'State',
    state: 'Tamil Nadu',
    ministry: 'Special Programme Implementation Department, Government of Tamil Nadu',
    department: 'Revenue & Social Welfare Administration',
    lastVerifiedDate: 'February 2026',
    officialPortalUrl: 'https://kmut.tn.gov.in',
    helplinePhone: '044-25619208 / 1100',
    briefDescription: 'Tamil Nadu state government basic income scheme providing ₹1,000 monthly rights grant to over 1.15 crore women family heads in recognition of their unpaid domestic and caregiving labor.',
    detailedOverview: 'Kalaignar Magalir Urimai Thittam honors the contribution of women home-makers and care-givers. Women designated as the head of family in their Smart Ration Card receive ₹1,000 per month directly into their bank accounts.',
    targetBeneficiaries: 'Women heads of families aged 21 years and above residing in Tamil Nadu with annual family income below ₹2.5 Lakh.',
    keyBenefits: [
      'Direct Benefit Transfer of ₹1,000 every month on the 15th of the month.',
      'Covers over 1.15 crore women heads of households in Tamil Nadu.',
      'Directly deposited into the woman\'s personal bank account.',
      'Transparent grievance redressal and appeal mechanism.'
    ],
    maxBenefitAmount: '₹1,000 / month (₹12,000 / year)',
    eligibility: {
      minAge: 21,
      gender: 'Female',
      states: ['Tamil Nadu'],
      maxAnnualIncome: 250000,
      occupations: ['Homemaker', 'Self-Employed', 'Artisan/Worker', 'Unemployed', 'Farmer'],
      specificConditions: [
        'Must be listed as the Female Head of the Family on the Tamil Nadu Smart Family Card (Ration Card).',
        'Annual family income must be less than ₹2.50 Lakh.',
        'Family landholding must be less than 5 acres of wetland or less than 10 acres of dryland.',
        'Annual household electricity consumption should be less than 3,600 units.'
      ]
    },
    eligibilityDescription: [
      'Women heads of household aged 21 and above in Tamil Nadu.',
      'Family income below ₹2.5 Lakh / year.',
      'Holders of valid TN Smart Ration Card.'
    ],
    requiredDocuments: [
      { name: 'Tamil Nadu Smart Ration Card', purpose: 'Proof of family composition and head of household', isMandatory: true },
      { name: 'Aadhaar Card of Female Head', purpose: 'Identity and biometric authentication', isMandatory: true },
      { name: 'Bank Passbook (Individual Account)', purpose: 'Direct monthly DBT payment', isMandatory: true },
      { name: 'Electricity Consumer Number (EB Card)', purpose: 'Electricity consumption criteria verification', isMandatory: true }
    ],
    applicationProcessSteps: [
      {
        stepNumber: 1,
        title: 'Check Smart Ration Card Status',
        description: 'Verify that your name is designated as the family head on the TN Smart Ration Card (https://tnpds.gov.in).',
        actionTip: 'If a male is listed as head, the eldest adult female can apply as the representative head.'
      },
      {
        stepNumber: 2,
        title: 'Apply at Special Camp or e-Sevai Centre',
        description: 'Submit application at designated KMUT Special Camps organized at Ration Shops or visit any authorized e-Sevai centre.',
        actionTip: 'Carry original Smart Card and Aadhaar card for biometric verification.'
      },
      {
        stepNumber: 3,
        title: 'Field Verification & SMS Confirmation',
        description: 'Field inspection and automated database checks (TNEB, Revenue, Transport) verify eligibility criteria.',
        actionTip: 'You will receive SMS confirmation upon approval.'
      },
      {
        stepNumber: 4,
        title: 'Monthly ₹1,000 DBT on the 15th',
        description: 'Approved beneficiaries receive ₹1,000 on the 15th of every month directly in their bank account with SMS alert.',
        actionTip: 'Appeal option is available on kmut.tn.gov.in within 30 days if rejected.'
      }
    ],
    importantConditions: [
      'Only one woman per Smart Ration Card can receive the benefit.',
      'Must have an active individual bank account linked with Aadhaar.'
    ],
    faqs: [
      {
        question: 'Can unmarried or single women living alone apply?',
        answer: 'Yes, if they have a separate Smart Family Card and are above 21 years of age.'
      }
    ],
    isFeatured: false,
    isPopular: false
  }
];

export const SCHEMES_MAP = new Map<string, Scheme>(
  VERIFIED_SCHEMES.map(s => [s.id, s])
);
