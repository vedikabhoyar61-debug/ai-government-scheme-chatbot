import { SchemeCategory } from '../types';

export interface CategoryInfo {
  id: SchemeCategory;
  name: string;
  shortName: string;
  description: string;
  iconName: string;
  color: string;
  bgLight: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'education',
    name: 'Education & Scholarships',
    shortName: 'Education',
    description: 'Pre-matric, post-matric scholarships, fellowships, coaching, and student assistance.',
    iconName: 'GraduationCap',
    color: '#2563EB',
    bgLight: '#EFF6FF',
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Rural Support',
    shortName: 'Agriculture',
    description: 'Direct income support, crop insurance, solar pumps, fertilizer subsidies, and farm equipment.',
    iconName: 'Sprout',
    color: '#16A34A',
    bgLight: '#F0FDF4',
  },
  {
    id: 'women',
    name: 'Women & Child Development',
    shortName: 'Women & Child',
    description: 'Maternity assistance, girls education, savings schemes, safety, and self-help group loans.',
    iconName: 'HeartHandshake',
    color: '#DB2777',
    bgLight: '#FDF2F8',
  },
  {
    id: 'healthcare',
    name: 'Health & Medical Wellness',
    shortName: 'Healthcare',
    description: 'Free hospital treatments, cashless health coverage up to ₹5 Lakh, generic medicines, and diagnostics.',
    iconName: 'Activity',
    color: '#0284C7',
    bgLight: '#F0F9FF',
  },
  {
    id: 'business',
    name: 'MSME, Startup & Small Business',
    shortName: 'Business & MSME',
    description: 'Collateral-free loans, credit guarantee, startup seed funding, technology upgrades, and vendor support.',
    iconName: 'Briefcase',
    color: '#D97706',
    bgLight: '#FFFBEB',
  },
  {
    id: 'housing',
    name: 'Housing & Urban Development',
    shortName: 'Housing',
    description: 'Interest subsidies on home loans, pucca house construction assistance for rural and urban families.',
    iconName: 'Home',
    color: '#9333EA',
    bgLight: '#FAF5FF',
  },
  {
    id: 'employment',
    name: 'Employment & Skill Training',
    shortName: 'Employment',
    description: 'Free vocational certifications, apprenticeship stipends, guaranteed rural employment, and job fairs.',
    iconName: 'Wrench',
    color: '#4F46E5',
    bgLight: '#EEF2FF',
  },
  {
    id: 'financial',
    name: 'Financial Inclusion & Insurance',
    shortName: 'Banking & Insurance',
    description: 'Zero-balance accounts, micro-insurance for ₹20/year, pension funds, and emergency credit lines.',
    iconName: 'ShieldCheck',
    color: '#059669',
    bgLight: '#ECFDF5',
  },
  {
    id: 'seniors',
    name: 'Senior Citizens Welfare',
    shortName: 'Senior Citizens',
    description: 'Old-age pensions, higher interest deposits, assisted living devices, and geriatric healthcare.',
    iconName: 'Users',
    color: '#475569',
    bgLight: '#F8FAFC',
  },
  {
    id: 'disability',
    name: 'Differently Abled (Divyangjan)',
    shortName: 'Divyangjan',
    description: 'Scholarships, aids & assistive devices, dedicated transport concessions, and skill development.',
    iconName: 'Accessibility',
    color: '#7C3AED',
    bgLight: '#F5F3FF',
  },
  {
    id: 'social_welfare',
    name: 'Social Justice & Empowerment',
    shortName: 'Social Welfare',
    description: 'Community upliftment, pre & post-matric assistance for SC/ST/OBC/EWS/Minorities, and destitute pensions.',
    iconName: 'Scale',
    color: '#0891B2',
    bgLight: '#ECFEFF',
  },
];
