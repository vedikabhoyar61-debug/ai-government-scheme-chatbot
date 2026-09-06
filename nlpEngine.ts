import { Scheme, UserProfile } from '../types';
import { VERIFIED_SCHEMES } from '../data/schemes';
import { INDIAN_STATES_AND_UTS } from '../data/states';

export interface MatchResult {
  scheme: Scheme;
  score: number;
  matchReasons: string[];
  missingCriteria: string[];
}

export function extractProfileFromText(text: string, currentProfile: UserProfile = {}): Partial<UserProfile> {
  const lower = text.toLowerCase();
  const updated: Partial<UserProfile> = { ...currentProfile };

  // 1. Age extraction
  const ageMatch = text.match(/\b(?:i am|i'm|age is|age|aged|am)?\s*(\d{1,2})\s*(?:years old|yrs old|yr old|years|yrs|yo|age)?\b/i);
  if (ageMatch && ageMatch[1]) {
    const ageVal = parseInt(ageMatch[1], 10);
    if (ageVal >= 1 && ageVal <= 105) {
      // Don't accidentally capture small numbers that might be income in lakhs or counts
      if (!lower.includes(ageVal + ' lakh') && !lower.includes(ageVal + 'l') && !lower.includes(ageVal + ' k') && !lower.includes(ageVal + ' installment')) {
        updated.age = ageVal;
      }
    }
  }

  // 2. Gender extraction
  if (/\b(female|woman|women|girl|lady|she|her|mother|daughter|sister)\b/i.test(text)) {
    updated.gender = 'Female';
  } else if (/\b(male|man|men|boy|he|his|father|son|brother)\b/i.test(text)) {
    // Only set male if not previously set or if explicit
    if (!updated.gender) updated.gender = 'Male';
  } else if (/\b(transgender|trans)\b/i.test(text)) {
    updated.gender = 'Transgender';
  }

  // 3. State extraction
  for (const state of INDIAN_STATES_AND_UTS) {
    if (state.toLowerCase() === 'all-india (central)') continue;
    const regex = new RegExp(`\\b${state.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (regex.test(text)) {
      updated.state = state;
      break;
    }
  }
  // Common state nicknames & city mappings
  if (!updated.state) {
    if (/\b(mumbai|pune|nagpur|nashik|thane|maharashtra|mh)\b/i.test(text)) updated.state = 'Maharashtra';
    else if (/\b(bangalore|bengaluru|mysore|karnataka|ka)\b/i.test(text)) updated.state = 'Karnataka';
    else if (/\b(chennai|coimbatore|madurai|tamil nadu|tamilnadu|tn)\b/i.test(text)) updated.state = 'Tamil Nadu';
    else if (/\b(lucknow|kanpur|varanasi|noida|up|uttar pradesh)\b/i.test(text)) updated.state = 'Uttar Pradesh';
    else if (/\b(patna|bihar)\b/i.test(text)) updated.state = 'Bihar';
    else if (/\b(delhi|new delhi|ncr)\b/i.test(text)) updated.state = 'Delhi (NCT)';
    else if (/\b(kolkata|west bengal|wb)\b/i.test(text)) updated.state = 'West Bengal';
    else if (/\b(hyderabad|telangana|ts)\b/i.test(text)) updated.state = 'Telangana';
    else if (/\b(bhopal|indore|mp|madhya pradesh)\b/i.test(text)) updated.state = 'Madhya Pradesh';
    else if (/\b(ahmedabad|surat|gujarat|gj)\b/i.test(text)) updated.state = 'Gujarat';
    else if (/\b(jaipur|rajasthan|rj)\b/i.test(text)) updated.state = 'Rajasthan';
  }

  // 4. Occupation & Status extraction
  if (/\b(student|studying|college|school|undergraduate|postgraduate|btech|bsc|bcom|ba|mbbs|degree|diploma|phd)\b/i.test(text)) {
    updated.occupation = 'Student';
    updated.isStudent = true;
    if (/\b(btech|bsc|bcom|ba|degree|undergraduate|ug)\b/i.test(text)) updated.educationLevel = 'Undergraduate';
    else if (/\b(mtech|msc|mcom|ma|mba|postgraduate|pg)\b/i.test(text)) updated.educationLevel = 'Postgraduate';
    else if (/\b(phd|doctorate|research)\b/i.test(text)) updated.educationLevel = 'Doctoral';
    else if (/\b(diploma|polytechnic)\b/i.test(text)) updated.educationLevel = 'Diploma';
    else if (/\b(10th|12th|class 11|class 12|matric|school)\b/i.test(text)) updated.educationLevel = 'School';
  } else if (/\b(farmer|farming|kisan|agriculture|cultivator|crop|landholder|farm)\b/i.test(text)) {
    updated.occupation = 'Farmer';
    updated.isFarmer = true;
  } else if (/\b(artisan|craftsman|carpenter|blacksmith|goldsmith|potter|cobbler|mason|tailor|barber|weaver|darzi|lohar|badhai|kumhar|vishwakarma)\b/i.test(text)) {
    updated.occupation = 'Artisan/Worker';
  } else if (/\b(street vendor|vendor|hawker|thela|rehri|shopkeeper|trader|small business|shop owner|dukan|dukaan|entrepreneur|startup)\b/i.test(text)) {
    updated.occupation = 'Self-Employed';
  } else if (/\b(unemployed|jobless|looking for job|job seeker|passed out|graduated|graduate without job)\b/i.test(text)) {
    updated.occupation = 'Unemployed';
  } else if (/\b(homemaker|housewife|stay at home)\b/i.test(text)) {
    updated.occupation = 'Homemaker';
  } else if (/\b(senior citizen|retired|pensioner|elderly|old age|60\+)\b/i.test(text)) {
    updated.occupation = 'Senior Citizen';
    if (!updated.age || updated.age < 60) updated.age = 65;
  }

  // 5. Income extraction
  // Handles: ₹2.5 lakh, 2.5L, 2.5 lakh per year, 250000, 30000/month, etc.
  const lakhMatch = text.match(/(?:₹|rs\.?|inr)?\s*(\d+(?:\.\d+)?)\s*(?:lakh|lakhs|lac|lacs|l)\b/i);
  if (lakhMatch && lakhMatch[1]) {
    const num = parseFloat(lakhMatch[1]);
    updated.annualFamilyIncome = Math.round(num * 100000);
  } else {
    const directIncome = text.match(/(?:income|salary|earning|family income)(?:\s+is|\s+around|\s+of)?\s*(?:₹|rs\.?|inr)?\s*([\d,]+)/i);
    if (directIncome && directIncome[1]) {
      const parsed = parseInt(directIncome[1].replace(/,/g, ''), 10);
      if (parsed > 0) {
        // If monthly mentioned
        if (/month|per month|monthly|\/m/i.test(text)) {
          updated.annualFamilyIncome = parsed * 12;
        } else {
          updated.annualFamilyIncome = parsed;
        }
      }
    }
  }

  // 6. Category / Caste
  if (/\b(sc|scheduled caste)\b/i.test(text)) updated.category = 'SC';
  else if (/\b(st|scheduled tribe)\b/i.test(text)) updated.category = 'ST';
  else if (/\b(obc|other backward class)\b/i.test(text)) updated.category = 'OBC';
  else if (/\b(ews|economically weaker section)\b/i.test(text)) updated.category = 'EWS';
  else if (/\b(general|open category)\b/i.test(text)) updated.category = 'General';

  // 7. Disability
  if (/\b(disability|disabled|handicapped|divyang|divyangjan|pwd|visually impaired|blind|deaf|locomotor|wheelchair)\b/i.test(text)) {
    updated.hasDisability = true;
    const percentMatch = text.match(/(\d{1,2})%\s*(?:disability|disabled)?/i);
    if (percentMatch) {
      updated.disabilityPercent = parseInt(percentMatch[1], 10);
    } else {
      updated.disabilityPercent = 40;
    }
  }

  // 8. Marital Status
  if (/\b(widow|widowed)\b/i.test(text)) updated.maritalStatus = 'Widowed';
  else if (/\b(married|husband|wife)\b/i.test(text)) updated.maritalStatus = 'Married';
  else if (/\b(single|unmarried)\b/i.test(text)) updated.maritalStatus = 'Single';
  else if (/\b(divorced|separated|deserted)\b/i.test(text)) updated.maritalStatus = 'Divorced';

  return updated;
}

export function matchSchemesForProfile(profile: UserProfile): MatchResult[] {
  const results: MatchResult[] = [];

  for (const scheme of VERIFIED_SCHEMES) {
    let score = 0;
    const matchReasons: string[] = [];
    const missingCriteria: string[] = [];

    // 1. State check
    if (scheme.level === 'Central') {
      score += 15;
      matchReasons.push('Applicable pan-India across all States & UTs');
    } else if (scheme.level === 'State') {
      if (profile.state && scheme.state && profile.state.toLowerCase() === scheme.state.toLowerCase()) {
        score += 35;
        matchReasons.push(`Specifically tailored for residents of ${scheme.state}`);
      } else if (profile.state && scheme.state && profile.state.toLowerCase() !== scheme.state.toLowerCase()) {
        // State mismatch for state-specific scheme
        continue;
      } else {
        score += 5;
        missingCriteria.push(`Requires residence in ${scheme.state}`);
      }
    }

    // 2. Gender check
    if (scheme.eligibility.gender === 'All' || !scheme.eligibility.gender) {
      score += 10;
    } else if (profile.gender && scheme.eligibility.gender === profile.gender) {
      score += 25;
      matchReasons.push(`Targeted benefit for ${profile.gender} citizens`);
    } else if (profile.gender && scheme.eligibility.gender !== profile.gender) {
      // Incompatible gender
      continue;
    } else {
      missingCriteria.push(`Exclusively for ${scheme.eligibility.gender} applicants`);
    }

    // 3. Age check
    if (profile.age !== undefined) {
      const min = scheme.eligibility.minAge ?? 0;
      const max = scheme.eligibility.maxAge ?? 120;
      if (profile.age >= min && profile.age <= max) {
        score += 20;
        matchReasons.push(`Age ${profile.age} meets requirement (${min} to ${max} years)`);
      } else {
        // Age out of range
        continue;
      }
    }

    // 4. Occupation & status check
    if (scheme.eligibility.occupations && scheme.eligibility.occupations.length > 0) {
      if (profile.occupation) {
        if (scheme.eligibility.occupations.includes(profile.occupation)) {
          score += 30;
          matchReasons.push(`Directly targets your occupation: ${profile.occupation}`);
        } else if (
          (profile.isStudent && scheme.category === 'education') ||
          (profile.isFarmer && scheme.category === 'agriculture') ||
          (profile.occupation === 'Senior Citizen' && scheme.category === 'seniors') ||
          (profile.occupation === 'Artisan/Worker' && scheme.id === 'pm-vishwakarma-scheme')
        ) {
          score += 30;
          matchReasons.push(`Matches your active profession / status`);
        }
      }
    }

    // 5. Income check
    if (scheme.eligibility.maxAnnualIncome !== undefined) {
      if (profile.annualFamilyIncome !== undefined) {
        if (profile.annualFamilyIncome <= scheme.eligibility.maxAnnualIncome) {
          score += 25;
          const incLakh = (scheme.eligibility.maxAnnualIncome / 100000).toFixed(1);
          matchReasons.push(`Family income is within the ₹${incLakh} Lakh/year limit`);
        } else {
          // Exceeds income limit
          continue;
        }
      } else {
        missingCriteria.push(`Requires family income under ₹${(scheme.eligibility.maxAnnualIncome / 100000).toFixed(1)} Lakh/year`);
      }
    }

    // 6. Disability check
    if (scheme.eligibility.disabilityStatus || scheme.category === 'disability') {
      if (profile.hasDisability) {
        score += 40;
        matchReasons.push('Assistance for Divyangjan / Persons with Disabilities');
      } else if (profile.hasDisability === false) {
        continue;
      }
    }

    // 7. Category / Caste check
    if (scheme.eligibility.categories && scheme.eligibility.categories.length > 0 && !scheme.eligibility.categories.includes('All')) {
      if (profile.category) {
        if (scheme.eligibility.categories.includes(profile.category)) {
          score += 20;
          matchReasons.push(`Covers ${profile.category} category beneficiaries`);
        }
      }
    }

    // Only include if positive match score
    if (score >= 30) {
      results.push({
        scheme,
        score,
        matchReasons,
        missingCriteria
      });
    }
  }

  // Sort descending by match score
  results.sort((a, b) => b.score - a.score);
  return results;
}

export function calculateProfileCompleteness(profile: UserProfile): { percentage: number; missingFields: string[] } {
  const fields = [
    { key: 'age', label: 'Age' },
    { key: 'state', label: 'State' },
    { key: 'gender', label: 'Gender' },
    { key: 'occupation', label: 'Occupation' },
    { key: 'annualFamilyIncome', label: 'Family Income' },
    { key: 'category', label: 'Category' },
  ];

  let filledCount = 0;
  const missingFields: string[] = [];

  for (const field of fields) {
    if (profile[field.key as keyof UserProfile] !== undefined && profile[field.key as keyof UserProfile] !== '') {
      filledCount++;
    } else {
      missingFields.push(field.label);
    }
  }

  const percentage = Math.round((filledCount / fields.length) * 100);
  return { percentage, missingFields };
}

export function generateAssistantReply(
  userQuery: string,
  updatedProfile: UserProfile,
  matchedSchemes: Scheme[]
): {
  replyText: string;
  suggestedFollowUps: string[];
} {
  const lower = userQuery.toLowerCase();
  const { percentage, missingFields } = calculateProfileCompleteness(updatedProfile);

  // Greetings or general prompts
  if (matchedSchemes.length === 0) {
    if (lower.includes('hello') || lower.includes('hi') || lower.includes('namaste') || lower.includes('help')) {
      return {
        replyText: `Namaste! I am **GovAssist AI**, your dedicated digital government scheme assistant. \n\nTell me a little about yourself (e.g., your **age**, **state of residence**, **occupation/studies**, and **annual family income**), and I will identify verified Central and State government schemes you may be eligible for.`,
        suggestedFollowUps: [
          "I am a college student",
          "I am a farmer looking for support",
          "Show schemes for women entrepreneurs",
          "I need healthcare & medical coverage"
        ]
      };
    }

    return {
      replyText: `I have updated your profile details. However, to identify the most accurate schemes for you, could you share a bit more? For example, your **${missingFields.slice(0, 2).join('** or **')}**?`,
      suggestedFollowUps: [
        "My family income is under ₹2.5 Lakh",
        "I am looking for education scholarships",
        "I am self-employed running a small shop",
        "Show all Central Government schemes"
      ]
    };
  }

  // Schemes found
  const schemeCount = matchedSchemes.length;
  let replyText = `I have analyzed your profile against verified government databases and identified **${schemeCount} scheme${schemeCount > 1 ? 's' : ''}** that you may potentially be eligible for.`;

  if (percentage < 70 && missingFields.length > 0) {
    replyText += `\n\n*(Your profile is currently **${percentage}% complete**. Providing your **${missingFields[0]}** can help refine these recommendations further.)*`;
  }

  replyText += `\n\nPlease review the matched schemes below. You can click **View Details** for comprehensive eligibility checklists, required documents, and step-by-step guidance, or navigate directly to the **Official Portal** to apply.`;

  const suggestedFollowUps: string[] = [];
  if (!updatedProfile.annualFamilyIncome) {
    suggestedFollowUps.push("My annual family income is ₹2.5 Lakh");
  }
  if (!updatedProfile.state) {
    suggestedFollowUps.push("I live in Maharashtra");
    suggestedFollowUps.push("I live in Uttar Pradesh");
  }
  if (matchedSchemes.some(s => s.category === 'education')) {
    suggestedFollowUps.push("What documents are needed for scholarship?");
  }
  if (matchedSchemes.some(s => s.category === 'agriculture')) {
    suggestedFollowUps.push("How to complete PM-KISAN e-KYC?");
  }
  if (suggestedFollowUps.length < 3) {
    suggestedFollowUps.push("Check required documents list");
    suggestedFollowUps.push("How does the application process work?");
  }

  return {
    replyText,
    suggestedFollowUps: suggestedFollowUps.slice(0, 4)
  };
}
