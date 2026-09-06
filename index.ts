export type SchemeCategory =
  | 'education'
  | 'agriculture'
  | 'women'
  | 'employment'
  | 'business'
  | 'housing'
  | 'healthcare'
  | 'financial'
  | 'seniors'
  | 'disability'
  | 'social_welfare';

export type GovernmentLevel = 'Central' | 'State';

export interface EligibilityCriteria {
  minAge?: number;
  maxAge?: number;
  gender?: 'All' | 'Female' | 'Male' | 'Transgender';
  states?: string[]; // Empty or ['All-India'] for central
  occupations?: string[]; // e.g. ['Student', 'Farmer', 'Unemployed', 'Self-Employed', 'Artisan']
  maxAnnualIncome?: number; // In INR e.g. 250000
  categories?: ('General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'All')[];
  studentStatus?: boolean;
  farmerStatus?: boolean;
  disabilityStatus?: boolean;
  hasDisability?: boolean;
  minDisabilityPercent?: number;
  landHoldingMaxAcres?: number;
  specificConditions?: string[];
}

export interface Scheme {
  id: string;
  name: string;
  shortName?: string;
  tagline: string;
  category: SchemeCategory;
  level: GovernmentLevel;
  state?: string; // If state level
  ministry: string;
  department?: string;
  lastVerifiedDate: string; // e.g. "January 2026"
  officialPortalUrl: string;
  helplinePhone?: string;
  briefDescription: string;
  detailedOverview: string;
  targetBeneficiaries: string;
  keyBenefits: string[];
  maxBenefitAmount?: string; // e.g. "Up to ₹5,00,000 / year"
  eligibility: EligibilityCriteria;
  eligibilityDescription: string[];
  requiredDocuments: {
    name: string;
    purpose: string;
    isMandatory: boolean;
  }[];
  applicationProcessSteps: {
    stepNumber: number;
    title: string;
    description: string;
    actionTip?: string;
  }[];
  importantConditions: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  isFeatured?: boolean;
  isPopular?: boolean;
  isDemoData?: boolean;
}

export interface UserProfile {
  age?: number;
  gender?: 'Female' | 'Male' | 'Transgender' | 'Other';
  state?: string;
  district?: string;
  occupation?: 'Student' | 'Farmer' | 'Self-Employed' | 'Unemployed' | 'Employed' | 'Artisan/Worker' | 'Senior Citizen' | 'Homemaker' | 'Other';
  annualFamilyIncome?: number; // In INR
  category?: 'General' | 'OBC' | 'SC' | 'ST' | 'EWS';
  isStudent?: boolean;
  educationLevel?: 'School' | 'Undergraduate' | 'Postgraduate' | 'Doctoral' | 'Diploma' | 'Other';
  isFarmer?: boolean;
  landHoldingAcres?: number;
  hasDisability?: boolean;
  disabilityPercent?: number;
  maritalStatus?: 'Single' | 'Married' | 'Widowed' | 'Divorced';
  isMinority?: boolean;
  urbanRural?: 'Urban' | 'Rural';
  specificNeeds?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: Date;
  matchedSchemes?: Scheme[];
  suggestedFollowUps?: string[];
  profileExtracted?: Partial<UserProfile>;
  isStreaming?: boolean;
}

export interface SavedSchemeItem {
  schemeId: string;
  savedAt: string;
  notes?: string;
  status: 'saved' | 'documents_ready' | 'applied_on_portal';
  completedDocuments: string[]; // Document names checked off
}
