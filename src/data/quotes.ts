export interface QuoteFile {
  carrier: string;
  filename: string;
  size: string;
  uploaded: string;
}

export const quoteFiles: QuoteFile[] = [
  {
    carrier: "Cigna Global",
    filename: "Cigna_Global_iRobot_2027_Quote.pdf",
    size: "2.4 MB",
    uploaded: "Apr 24, 2026 at 9:14 AM",
  },
  {
    carrier: "Allianz Care",
    filename: "Allianz_Care_iRobot_2027_Quote.pdf",
    size: "3.1 MB",
    uploaded: "Apr 24, 2026 at 9:22 AM",
  },
  {
    carrier: "MetLife International",
    filename: "MetLife_Intl_iRobot_2027_Quote.pdf",
    size: "1.8 MB",
    uploaded: "Apr 24, 2026 at 9:31 AM",
  },
];

export interface ComparisonRow {
  label: string;
  cigna: string;
  allianz: string;
  metlife: string;
  metlifeFlag?: boolean;
}

export const comparisonData: ComparisonRow[] = [
  { label: "Annual Premium", cigna: "$5,300,000", allianz: "$5,700,000", metlife: "$4,900,000" },
  { label: "Premium Per Life", cigna: "$4,417", allianz: "$4,750", metlife: "$4,083" },
  { label: "Network Breadth", cigna: "Broad — 197 countries", allianz: "Broad — 190 countries", metlife: "Moderate — 140 countries" },
  { label: "Mental Health Parity", cigna: "Full parity — all countries", allianz: "Full parity — all countries", metlife: "Carve-out — Germany", metlifeFlag: true },
  { label: "Maternity", cigna: "Covered, no waiting period", allianz: "Covered, 10-month wait", metlife: "Covered, 12-month wait" },
  { label: "Telehealth", cigna: "Included, global", allianz: "Included, EU + US only", metlife: "Included, US only" },
  { label: "Asia Coverage Strength", cigna: "Strong (JP, CN direct)", allianz: "Moderate (JP direct, CN partner)", metlife: "Limited (both via partner)" },
  { label: "Notable Exclusions", cigna: "Cosmetic, experimental", allianz: "Cosmetic, pre-existing 24mo", metlife: "Cosmetic, MH Germany, experimental" },
];

export const recommendationReasons = [
  "Broadest network across all four countries (US, DE, JP, CN), aligning with iRobot's distributed workforce",
  "No mental-health carve-outs — supports the wellness expansion priority surfaced in the FY26 renewal questionnaire",
  "$400K premium delta vs MetLife is offset by avoiding the Germany parity gap, which carries an estimated $180K in member out-of-pocket exposure based on FY25 utilization",
];

export const complianceChecklist = [
  "Broker of record confirmation verified",
  "Client authorization on file",
  "All carrier quotes within 90-day validity window",
  "Premium comparison normalized to common effective date",
  "Country-specific regulatory requirements reviewed",
  "Germany mental-health parity flagged per EU directive 2024/1689",
  "Japan FSA compliance requirements met",
  "China CBIRC filing requirements documented",
  "Network adequacy confirmed for all four countries",
  "Subrogation clauses reviewed",
  "Commission disclosure compliant with Aon policy",
  "Data privacy assessment completed (GDPR, APPI, PIPL)",
  "Conflict of interest check cleared",
  "RSR template version 4.2 — current as of Q1 2026",
];

export const countryPlans = [
  {
    country: "United States",
    cigna: { premium: "$2,800,000", network: "National PPO + EPO options", keyTerms: "Preventive 100%, Specialist $40 copay, Rx formulary Tier 1–4" },
    allianz: { premium: "$3,020,000", network: "National PPO", keyTerms: "Preventive 100%, Specialist $50 copay, Rx formulary Tier 1–3" },
    metlife: { premium: "$2,580,000", network: "National PPO", keyTerms: "Preventive 100%, Specialist $45 copay, Rx formulary Tier 1–4" },
  },
  {
    country: "Germany",
    cigna: { premium: "$1,200,000", network: "Direct — 340 providers", keyTerms: "Full parity incl. mental health, SGB V compliant" },
    allianz: { premium: "$1,280,000", network: "Direct — 420 providers", keyTerms: "Full parity incl. mental health, SGB V compliant" },
    metlife: { premium: "$1,100,000", network: "Partner — 280 providers", keyTerms: "Mental health carve-out §3.b, SGB V partial" },
  },
  {
    country: "Japan",
    cigna: { premium: "$820,000", network: "Direct — 190 providers", keyTerms: "APPI compliant, FSA registered, bilingual support" },
    allianz: { premium: "$880,000", network: "Direct — 160 providers", keyTerms: "APPI compliant, FSA registered" },
    metlife: { premium: "$790,000", network: "Partner — 120 providers", keyTerms: "APPI compliant, FSA registered" },
  },
  {
    country: "China",
    cigna: { premium: "$480,000", network: "Direct — 95 providers", keyTerms: "CBIRC filed, PIPL compliant, Mandarin support" },
    allianz: { premium: "$520,000", network: "Partner — 70 providers", keyTerms: "CBIRC filed, PIPL compliant" },
    metlife: { premium: "$430,000", network: "Partner — 55 providers", keyTerms: "CBIRC filed, PIPL compliant" },
  },
];
