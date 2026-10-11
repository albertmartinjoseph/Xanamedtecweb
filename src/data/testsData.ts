export interface TestDetail {
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  price: string;
  turnaround: string;
  sampleType: string;
  fasting: string;
  overview: string;
  whatItMeasures: string[];
  whoShouldTake: string[];
  preparation: string[];
}

export const testsData: Record<string, TestDetail> = {
  'hepatitis-b-profile': {
    slug: 'hepatitis-b-profile',
    name: 'Hepatitis B Profile',
    subtitle: 'Immunity Status & Viral Infection Screening',
    category: 'Popular Health Tests',
    price: '£49.00',
    turnaround: '24-48 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: 'No fasting required',
    overview:
      'The Hepatitis B Profile evaluates both immunity levels following vaccination and screens for active or past Hepatitis B viral infection. Suitable for healthcare workers, occupational health certifications, or general wellness checks.',
    whatItMeasures: [
      'Hepatitis B Surface Antigen (HBsAg) – Detects active acute or chronic infection',
      'Hepatitis B Surface Antibody (Anti-HBs) – Assesses protective immunity post-vaccination',
      'Hepatitis B Core Antibody (Anti-HBc) – Differentiates natural previous exposure from vaccination response',
    ],
    whoShouldTake: [
      'Healthcare workers and clinical professionals requiring occupational health clearance',
      'Individuals who have received the Hepatitis B vaccine series wanting to confirm immunity titers',
      'Anyone experiencing unexplained fatigue, jaundice, or suspected viral exposure',
    ],
    preparation: [
      'No fasting is needed prior to this test.',
      'Drink plenty of water before your appointment to facilitate a smooth phlebotomy draw.',
      'Results are delivered securely via email with doctor commentary.',
    ],
  },
  biochemistry: {
    slug: 'biochemistry',
    name: 'Biochemistry Profile',
    subtitle: 'Kidney, Liver, Bone & Vital Biomarker Profile',
    category: 'Popular Health Tests',
    price: '£69.00',
    turnaround: '24-48 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: 'Fasting recommended for 8 hours (water permitted)',
    overview:
      'A comprehensive biochemical panel providing vital insights into renal (kidney) function, hepatic (liver) enzyme activity, electrolyte balance, bone health, and glucose metabolism.',
    whatItMeasures: [
      'Kidney Function: Urea, Creatinine, estimated Glomerular Filtration Rate (eGFR)',
      'Liver Function: ALT, AST, Alkaline Phosphatase (ALP), Bilirubin, Albumin, Total Protein',
      'Electrolytes: Sodium, Potassium, Chloride, Bicarbonate',
      'Metabolic & Bone: Calcium, Phosphate, Uric Acid, Fasting Glucose',
    ],
    whoShouldTake: [
      'Individuals seeking a comprehensive health baseline of vital organ performance',
      'Patients monitoring medication side effects that impact liver or kidney clearance',
      'Those experiencing unexplained weight changes, fatigue, or fluid retention',
    ],
    preparation: [
      'Fasting for 8-10 hours prior to the draw is recommended for optimal glucose and lipid accuracy.',
      'Stay well hydrated with plain water.',
      'Take regular prescription medications unless advised otherwise by your GP.',
    ],
  },
  'testosterone-monitoring': {
    slug: 'testosterone-monitoring',
    name: 'Testosterone Monitoring',
    subtitle: 'Endocrine & Androgen Optimization Profile',
    category: 'Popular Health Tests',
    price: '£59.00',
    turnaround: '24-48 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: 'Morning sample required (before 10:00 AM)',
    overview:
      'Accurate quantification of circulating total testosterone and related androgens. Essential for monitoring hormone replacement therapy (TRT), athletic recovery, libido concerns, and endocrine balance.',
    whatItMeasures: [
      'Total Testosterone – Quantitative serum androgen measurement',
      'Sex Hormone Binding Globulin (SHBG) – Carrier protein determining bioavailable hormone',
      'Free Androgen Index (FAI) / Calculated Free Testosterone',
      'Albumin – Secondary protein binder',
    ],
    whoShouldTake: [
      'Men experiencing reduced energy, decreased muscle recovery, or low libido',
      'Individuals on testosterone replacement therapy (TRT) tracking target therapeutic levels',
      'Women undergoing investigations for polycystic ovary syndrome (PCOS) or androgen excess',
    ],
    preparation: [
      'Blood should be collected in the early morning (ideally between 8:00 AM and 10:00 AM) when testosterone peaks.',
      'Avoid intense strenuous weightlifting 24 hours prior to the blood draw.',
      'Stay well hydrated.',
    ],
  },
  'thyroid-profile': {
    slug: 'thyroid-profile',
    name: 'Thyroid Function Profile',
    subtitle: 'Comprehensive Thyroid & Metabolic Health',
    category: 'Popular Health Tests',
    price: '£55.00',
    turnaround: '24 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: 'Morning sample recommended; no strict fasting',
    overview:
      'Evaluates thyroid gland efficiency by testing Thyroid Stimulating Hormone (TSH) alongside Free T4 and Free T3. Identifies both overactive (hyperthyroidism) and underactive (hypothyroidism) thyroid conditions.',
    whatItMeasures: [
      'Thyroid Stimulating Hormone (TSH) – Primary pituitary messenger controlling thyroid output',
      'Free Thyroxine (FT4) – Unbound active thyroid hormone circulating in the bloodstream',
      'Free Triiodothyronine (FT3) – Cellularly active metabolic thyroid hormone',
    ],
    whoShouldTake: [
      'Anyone experiencing unexplained weight gain/loss, persistent fatigue, brain fog, or hair thinning',
      'Patients on Levothyroxine or thyroid medication verifying correct dosage efficacy',
      'Individuals with a personal or family history of thyroid or autoimmune conditions',
    ],
    preparation: [
      'Morning appointment recommended for consistent TSH readings.',
      'If taking thyroid hormone medication (e.g. Levothyroxine), consult whether to delay morning dose until after the blood draw.',
      'Avoid high-dose Biotin supplements for 48 hours beforehand.',
    ],
  },
  'hormone-profile': {
    slug: 'hormone-profile',
    name: 'Comprehensive Hormone Profile',
    subtitle: 'Female & Male Reproductive Endocrinology',
    category: 'Popular Health Tests',
    price: '£85.00',
    turnaround: '24-48 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: 'No fasting required',
    overview:
      'Detailed endocrinology assessment measuring key reproductive hormones. Ideal for exploring fertility, menstrual irregularities, menopause transition, or hormonal imbalances.',
    whatItMeasures: [
      'Oestradiol (E2) – Key estrogen biomarker for follicular health and bone integrity',
      'Progesterone – Luteal phase and ovulation confirmation marker',
      'Luteinising Hormone (LH) & Follicle-Stimulating Hormone (FSH)',
      'Prolactin – Pituitary hormone regulating reproductive function',
      'Total Testosterone & DHEA-Sulphate',
    ],
    whoShouldTake: [
      'Women investigating irregular menstrual cycles, perimenopause, or fertility health',
      'Men investigating pituitary hormone suppression or gynecomastia',
      'Anyone seeking an in-depth hormonal overview for wellness and longevity',
    ],
    preparation: [
      'For menstruating females, testing on Day 2–5 of the menstrual cycle is often recommended for baseline fertility assessment (or Day 21 for ovulation confirmation).',
      'Drink plenty of water before attending.',
    ],
  },
  'lipids-hba1c': {
    slug: 'lipids-hba1c',
    name: 'Lipids & HbA1C Profile',
    subtitle: 'Cardiovascular Risk & Glycemic Control MOT',
    category: 'Popular Health Tests',
    price: '£65.00',
    turnaround: '24 Hours',
    sampleType: 'Venous Blood Sample',
    fasting: '8 to 10 hours fasting recommended',
    overview:
      'Combines a complete lipid profile with Glycated Haemoglobin (HbA1c) to provide an authoritative assessment of cardiovascular risk, arterial health, and pre-diabetes / diabetes status.',
    whatItMeasures: [
      'Total Cholesterol & Triglycerides',
      'High-Density Lipoprotein (HDL) – "Protective" cholesterol',
      'Low-Density Lipoprotein (LDL) & Non-HDL Cholesterol – Atherogenic lipoproteins',
      'Cholesterol / HDL Risk Ratio',
      'HbA1c (Glycated Haemoglobin) – 3-month average blood glucose control',
    ],
    whoShouldTake: [
      'Anyone assessing cardiovascular disease or heart attack risk',
      'Individuals screening for pre-diabetes, insulin resistance, or metabolic syndrome',
      'Patients monitoring lifestyle or statin/metformin interventions',
    ],
    preparation: [
      'Fast for 8 to 10 hours prior to the blood draw (water is encouraged).',
      'Avoid high-fat meals and alcohol for 24 hours prior.',
    ],
  },
  'well-man-well-woman': {
    slug: 'well-man-well-woman',
    name: 'Well Man & Well Woman MOT',
    subtitle: 'Our Most Comprehensive Full-Body Health Check',
    category: 'Popular Health Tests',
    price: '£149.00',
    turnaround: '48 Hours',
    sampleType: 'Venous Blood Sample (Multi-vial)',
    fasting: 'Fasting 8-10 hours recommended',
    overview:
      'The premier comprehensive diagnostic assessment. Combines full blood count, biochemistry, liver and kidney function, lipid panel, diabetes screening, thyroid markers, and key vitamins and minerals for complete peace of mind.',
    whatItMeasures: [
      'Full Blood Count (FBC): Red cells, white cells, hemoglobin, platelets',
      'Biochemistry & Organ Function: Kidney, Liver, Bone, Uric Acid, Electrolytes',
      'Cardiovascular & Metabolic: Full Lipids fraction & HbA1c Glycemic status',
      'Endocrine: Thyroid Stimulating Hormone (TSH) & Free T4',
      'Vital Vitamins & Minerals: Vitamin D (25-OH), Vitamin B12, Serum Ferritin & Iron',
    ],
    whoShouldTake: [
      'Anyone wanting a complete 360-degree health overview and preventive health check',
      'Busy professionals seeking an annual proactive health MOT',
      'Individuals experiencing general fatigue, low energy, or unexplained malaise',
    ],
    preparation: [
      'Fast for 8 to 10 hours prior to your morning appointment (water permitted).',
      'Avoid strenuous exercise 24 hours before.',
      'Results are delivered with comprehensive doctor review notes.',
    ],
  },
};
