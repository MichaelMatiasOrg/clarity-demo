// Report data extracted from GlobeLife POC analysis
// Maps candidate name patterns to their analysis results

const REPORT_DATA = {
    "Oladipupo_Yusuf": {
        name: "Oladipupo Yusuf",
        personId: "6739e16a",
        risk: "HIGH",
        recommendation: "REJECT",
        summary: "HIGH-RISK profile with multiple critical red flags: NO PIPL person data, Trust Elephant DECLINE decision with very low score of 84/1000, email shows ZERO history (0 days age, 0 velocity, 0 sources), and very new phone (3 months). The email 'kayodeinbox@gmail.com' does not match the candidate name suggesting potential identity issues.",
        email: "kayodeinbox@gmail.com",
        emailStatus: "bad",
        phone: "(346) 668-9177",
        phoneStatus: "warn",
        location: "Houston, TX",
        trustScore: 84,
        emailAge: "0 days",
        phoneAge: "3 months",
        piplMatch: "NULL",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [
            { title: "CRITICAL: Trust Elephant DECLINE Decision", description: "Trust Elephant explicitly declined this candidate with a score of only 84/1000. This is a vendor-level rejection based on fraud risk assessment." },
            { title: "CRITICAL: Email Has Zero Digital History", description: "Email shows 0 days age, 0 velocity, and 0 sources in Trust Elephant data. This indicates the email has virtually no verifiable digital footprint." },
            { title: "CRITICAL: No PIPL Person Data", description: "PIPL search returned null - no person record found. Combined with email and phone issues, this suggests potential synthetic or very new identity." },
            { title: "Email/Name Mismatch", description: "Email 'kayodeinbox@gmail.com' contains 'kayode' but candidate name is 'Oladipupo Yusuf'. This discrepancy requires explanation." }
        ],
        employment: [
            { title: "Call Center Rep", company: "Envera Health", period: "Jan 2021 - Feb 2024" },
            { title: "Sales Support Specialist", company: "Altice USA", period: "Aug 2018 - Dec 2020" },
            { title: "Data Analyst", company: "Summit Financial LLC", period: "Dec 2016 - Aug 2018" }
        ]
    },
    
    "Dylan_Morris": {
        name: "Dylan Morris",
        personId: "e17607d1",
        risk: "HIGH",
        recommendation: "REJECT",
        summary: "HIGH-RISK profile: PIPL returned NULL, email 'zbonygg@gmail.com' doesn't match name pattern, very limited digital footprint. CV adds context but critical identity verification issues remain unresolved.",
        email: "zbonygg@gmail.com",
        emailStatus: "bad",
        phone: "(469) 300-8815",
        phoneStatus: "warn",
        location: "Dallas, TX",
        trustScore: 156,
        emailAge: "2 months",
        phoneAge: "4 months",
        piplMatch: "NULL",
        carrier: "MetroPCS",
        isVoip: false,
        redFlags: [
            { title: "CRITICAL: No PIPL Person Data", description: "PIPL search returned null - cannot verify this person exists in any identity database." },
            { title: "Email/Name Mismatch", description: "Email 'zbonygg@gmail.com' has no correlation to the name 'Dylan Morris' - appears to be random characters." },
            { title: "Very New Digital Footprint", description: "Both email and phone have less than 6 months of verifiable history." }
        ],
        employment: [
            { title: "Customer Service Representative", company: "AT&T", period: "Mar 2022 - Present" },
            { title: "Retail Associate", company: "Best Buy", period: "Jun 2020 - Feb 2022" }
        ]
    },
    
    "Joshua_WSawders": {
        name: "Joshua W. Sawders",
        personId: "7b56c9ad",
        risk: "HIGH",
        recommendation: "REJECT",
        summary: "HIGH-RISK profile: PIPL returned NULL, VoIP phone detected (Sinch Voice), CV shows 13+ years of unverifiable employment history. TX/AZ location mismatch between application and phone registration.",
        email: "jsawders@outlook.com",
        emailStatus: "warn",
        phone: "(602) 555-0147",
        phoneStatus: "bad",
        location: "Phoenix, AZ (claims TX)",
        trustScore: 203,
        emailAge: "8 months",
        phoneAge: "2 months",
        piplMatch: "NULL",
        carrier: "Sinch Voice (VoIP)",
        isVoip: true,
        redFlags: [
            { title: "CRITICAL: VoIP Phone Detected", description: "Phone is registered to Sinch Voice - a VoIP provider commonly associated with temporary/burner numbers." },
            { title: "CRITICAL: No PIPL Person Data", description: "PIPL search returned null despite claimed 13+ years of employment history - highly suspicious." },
            { title: "Location Mismatch", description: "Application indicates Texas but phone registration shows Arizona. Geographic inconsistency is a fraud indicator." },
            { title: "Unverifiable Employment", description: "13+ years of claimed employment cannot be cross-referenced in any employment database." }
        ],
        employment: [
            { title: "Senior Claims Adjuster", company: "State Farm", period: "2011 - Present" },
            { title: "Claims Processor", company: "USAA", period: "2008 - 2011" }
        ]
    },
    
    "Baba_Olaniyi": {
        name: "Baba Olaniyi",
        personId: "09a9798b",
        risk: "HIGH",
        recommendation: "REJECT",
        summary: "HIGH-RISK profile: VoIP phone detected (Bandwidth Inc.), no PIPL person data found. CV adds employment history but none can be verified. Pattern consistent with synthetic identity.",
        email: "bolaniyi@gmail.com",
        emailStatus: "warn",
        phone: "(214) 555-0198",
        phoneStatus: "bad",
        location: "Dallas, TX",
        trustScore: 178,
        emailAge: "1 month",
        phoneAge: "1 month",
        piplMatch: "NULL",
        carrier: "Bandwidth Inc. (VoIP)",
        isVoip: true,
        redFlags: [
            { title: "CRITICAL: VoIP Phone Detected", description: "Phone is registered to Bandwidth Inc. - a VoIP provider. Not a legitimate mobile carrier." },
            { title: "CRITICAL: No PIPL Person Data", description: "No identity records found in PIPL database." },
            { title: "Brand New Contact Details", description: "Both email and phone are less than 2 months old - characteristic of freshly created synthetic identity." }
        ],
        employment: [
            { title: "Customer Support", company: "Remote Services Inc", period: "2023 - Present" }
        ]
    },
    
    "Onuoha_Kenneth": {
        name: "Onuoha Kenneth",
        personId: "cf1b3e01",
        risk: "HIGH",
        recommendation: "REJECT",
        summary: "HIGH-RISK: Trust Elephant DECLINE with score 88/1000, VoIP phone detected. CV reveals Nigerian student status which explains invalid US phone - but this creates compliance and verification concerns.",
        email: "kennethonuoha@gmail.com",
        emailStatus: "warn",
        phone: "(832) 555-0176",
        phoneStatus: "bad",
        location: "Houston, TX",
        trustScore: 88,
        emailAge: "3 months",
        phoneAge: "1 month",
        piplMatch: "NULL",
        carrier: "VoIP Provider",
        isVoip: true,
        redFlags: [
            { title: "CRITICAL: Trust Elephant DECLINE", description: "Score of only 88/1000 triggered automatic decline decision." },
            { title: "VoIP Phone Number", description: "Phone is not registered to a legitimate mobile carrier." },
            { title: "International Student Status", description: "CV reveals Nigerian student - US employment eligibility and identity verification concerns." }
        ],
        employment: []
    },
    
    "Patrick_J_Finnerty": {
        name: "Patrick J. Finnerty",
        personId: "e53eddb9",
        risk: "HIGH",
        recommendation: "ESCALATE",
        summary: "CRITICAL IDENTITY MISMATCH: Trust Elephant DECLINE (64/1000), PIPL shows identity as 'Kelvin' not 'Patrick'. This is a potential identity theft or fraudulent application requiring immediate escalation.",
        email: "pjfinnerty@yahoo.com",
        emailStatus: "warn",
        phone: "(512) 555-0134",
        phoneStatus: "warn",
        location: "Austin, TX",
        trustScore: 64,
        emailAge: "2 years",
        phoneAge: "6 months",
        piplMatch: "MISMATCH - 'Kelvin'",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [
            { title: "CRITICAL: Identity Mismatch", description: "PIPL records show this phone/email associated with 'Kelvin', not 'Patrick J. Finnerty'. Possible identity theft." },
            { title: "Trust Elephant DECLINE", description: "Very low score of 64/1000 indicates high fraud probability." },
            { title: "Employment Unverified", description: "Claimed employment history cannot be verified in any database." }
        ],
        employment: [
            { title: "Insurance Agent", company: "Allstate", period: "2019 - Present" }
        ]
    },
    
    "Chidi_Samuel_Igweh": {
        name: "Chidi Samuel Igweh",
        personId: "ce35bdbc",
        risk: "HIGH",
        recommendation: "ESCALATE",
        summary: "CRITICAL: CV name 'Igweh' mismatches PIPL record 'Nwaigwe'. This name discrepancy was discovered during CV analysis and escalated the risk level from LOW to HIGH. Requires human review to determine if this is a typo or identity issue.",
        email: "chidiigweh@gmail.com",
        emailStatus: "good",
        phone: "(713) 555-0189",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 712,
        emailAge: "3 years",
        phoneAge: "2 years",
        piplMatch: "MISMATCH - 'Nwaigwe'",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [
            { title: "CRITICAL: Name Mismatch Discovered", description: "CV shows 'Chidi Samuel Igweh' but PIPL records show 'Chidi Samuel Nwaigwe'. This discrepancy requires explanation - could be typo, maiden name, or identity issue." }
        ],
        employment: [
            { title: "Data Entry Clerk", company: "Healthcare Solutions", period: "2021 - Present" },
            { title: "Administrative Assistant", company: "City of Houston", period: "2018 - 2021" }
        ]
    },
    
    "Ashley_Egan": {
        name: "Ashley Egan",
        personId: "7d642285",
        risk: "MEDIUM",
        recommendation: "REVIEW",
        summary: "MEDIUM RISK: Strong phone verification (940/1000) but brand new email address. CV confirms identity. Email shows enumeration pattern (ashleyegan1992@) suggesting multiple attempts. Recommend verification call.",
        email: "ashleyegan1992@gmail.com",
        emailStatus: "warn",
        phone: "(940) 555-0123",
        phoneStatus: "good",
        location: "Denton, TX",
        trustScore: 687,
        emailAge: "2 weeks",
        phoneAge: "4 years",
        piplMatch: "0.91",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [
            { title: "Brand New Email", description: "Email address created only 2 weeks ago despite candidate having established phone history." },
            { title: "Email Enumeration Pattern", description: "Email format 'ashleyegan1992@' suggests this may not be the first email attempted for this identity." }
        ],
        employment: [
            { title: "Claims Representative", company: "Progressive Insurance", period: "2020 - Present" },
            { title: "Customer Service", company: "Target", period: "2017 - 2020" }
        ]
    },
    
    "Michael_Owoeye": {
        name: "Michael Owoeye",
        personId: "542df8d6",
        risk: "MEDIUM",
        recommendation: "REVIEW",
        summary: "MEDIUM RISK: No PIPL person data found, but CV provides 6+ years of verifiable employment at Optum and Alignment Health. Phone and email check out. Recommend employment verification.",
        email: "mowoeye@outlook.com",
        emailStatus: "good",
        phone: "(281) 555-0156",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 534,
        emailAge: "1 year",
        phoneAge: "3 years",
        piplMatch: "NULL",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [
            { title: "No PIPL Data", description: "Cannot find person in identity databases, though contact details appear legitimate." }
        ],
        employment: [
            { title: "Claims Analyst", company: "Optum", period: "2020 - Present" },
            { title: "Healthcare Coordinator", company: "Alignment Health", period: "2017 - 2020" }
        ]
    },
    
    "Colins_Nwanne": {
        name: "Colins Nwanne",
        personId: "633978ee",
        risk: "MEDIUM",
        recommendation: "REVIEW",
        summary: "MEDIUM RISK: PIPL match at 0.83 confidence. CV shows slight date variance with PIPL employment records. Minor discrepancies but overall identity appears legitimate.",
        email: "colinsnwanne@gmail.com",
        emailStatus: "good",
        phone: "(469) 555-0167",
        phoneStatus: "good",
        location: "Dallas, TX",
        trustScore: 623,
        emailAge: "2 years",
        phoneAge: "3 years",
        piplMatch: "0.83",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [
            { title: "Employment Date Variance", description: "CV employment dates show slight variance from PIPL records - may be rounding or memory error." }
        ],
        employment: [
            { title: "Insurance Claims Specialist", company: "GEICO", period: "2019 - Present" }
        ]
    },
    
    "Christina_Espinoza": {
        name: "Christina Espinoza",
        personId: "c48cbcc7",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Strong verification - Trust Elephant 961/1000, CV employment at Rhino Pumping matches PIPL records exactly. All identity signals positive.",
        email: "cespinoza@gmail.com",
        emailStatus: "good",
        phone: "(956) 555-0145",
        phoneStatus: "good",
        location: "McAllen, TX",
        trustScore: 961,
        emailAge: "5 years",
        phoneAge: "8 years",
        piplMatch: "1.0",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Office Manager", company: "Rhino Pumping", period: "2018 - Present" },
            { title: "Administrative Assistant", company: "Valley Baptist Medical", period: "2014 - 2018" }
        ]
    },
    
    "John_P_Sokoloff": {
        name: "John Paul Sokoloff",
        personId: "84f82410",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Exceptional verification - PIPL perfect match (1.0), DOB verified (63 years old), CV employment at DST Systems (2019) matches PIPL exactly. Strong 20+ year identity history.",
        email: "jpsokoloff@sbcglobal.net",
        emailStatus: "good",
        phone: "(816) 555-0178",
        phoneStatus: "good",
        location: "Kansas City, MO",
        trustScore: 892,
        emailAge: "15+ years",
        phoneAge: "20+ years",
        piplMatch: "1.0",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Senior Analyst", company: "DST Systems", period: "2019 - Present" },
            { title: "IT Manager", company: "Sprint", period: "2005 - 2019" }
        ]
    },
    
    "Kennedy_Simon": {
        name: "Kennedy Simon",
        personId: "ec6e881d",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Trust Elephant 966/1000, CV shows Liberty Mutual employment plus Licensed Claims Adjuster certifications. All verification signals positive.",
        email: "kennedy.simon@gmail.com",
        emailStatus: "good",
        phone: "(504) 555-0134",
        phoneStatus: "good",
        location: "New Orleans, LA",
        trustScore: 966,
        emailAge: "7 years",
        phoneAge: "10 years",
        piplMatch: "0.97",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Claims Adjuster", company: "Liberty Mutual", period: "2016 - Present" }
        ]
    },
    
    "Questel_King": {
        name: "Questel Alexander King",
        personId: "6f177029",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Exceptional verification profile. PIPL DOB verified, 19-year phone history, 30-year address history. One of the strongest verification profiles in the batch.",
        email: "qking@hotmail.com",
        emailStatus: "good",
        phone: "(214) 555-0189",
        phoneStatus: "good",
        location: "Dallas, TX",
        trustScore: 934,
        emailAge: "18 years",
        phoneAge: "19 years",
        piplMatch: "1.0",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Insurance Underwriter", company: "Nationwide", period: "2010 - Present" }
        ]
    },
    
    "Simone_Minor": {
        name: "Simone Minor",
        personId: "0eb1eb96",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Trust Elephant 883/1000 APPROVE, 19-year phone history, strong verification across all signals. Recommended for hire.",
        email: "simoneminor@yahoo.com",
        emailStatus: "good",
        phone: "(713) 555-0156",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 883,
        emailAge: "12 years",
        phoneAge: "19 years",
        piplMatch: "0.95",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Claims Specialist", company: "Cigna", period: "2015 - Present" }
        ]
    },
    
    "Tracy_Nwanne": {
        name: "Tracy Nwanne",
        personId: "5505d82e",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Trust Elephant 831/1000 APPROVE, CV shows Brookdale/Synergy employment which fills gap in PIPL records. Verified identity.",
        email: "tracynwanne@gmail.com",
        emailStatus: "good",
        phone: "(832) 555-0134",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 831,
        emailAge: "4 years",
        phoneAge: "6 years",
        piplMatch: "0.88",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Healthcare Aide", company: "Brookdale Senior Living", period: "2020 - Present" },
            { title: "Caregiver", company: "Synergy HomeCare", period: "2018 - 2020" }
        ]
    },
    
    "Theresa_Skepnek": {
        name: "Theresa A. Skepnek",
        personId: "0790506d",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Verified 66 years old, CV Abbott QA employment matches PIPL exactly. Extensive verifiable history. Strong candidate.",
        email: "tskepnek@att.net",
        emailStatus: "good",
        phone: "(512) 555-0167",
        phoneStatus: "good",
        location: "Austin, TX",
        trustScore: 876,
        emailAge: "20+ years",
        phoneAge: "25+ years",
        piplMatch: "1.0",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "QA Specialist", company: "Abbott Laboratories", period: "2008 - Present" }
        ]
    },
    
    "Kristi_Walcott": {
        name: "Kristi Jo Walcott",
        personId: "309d5063",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: PIPL DOB verified (52 years old), 20+ year phone history, strong enrichment data. Excellent verification profile.",
        email: "kristiwalcott@gmail.com",
        emailStatus: "good",
        phone: "(405) 555-0145",
        phoneStatus: "good",
        location: "Oklahoma City, OK",
        trustScore: 901,
        emailAge: "10 years",
        phoneAge: "22 years",
        piplMatch: "1.0",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Senior Claims Examiner", company: "Blue Cross Blue Shield", period: "2005 - Present" }
        ]
    },
    
    "PATRICK_MADKINS": {
        name: "Patrick D. Madkins",
        personId: "5f63804c",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: PIPL DOB verified (54 years old), CV confirms Amazon/StateFarm employment matching PIPL records. Strong verification.",
        email: "pmadkins@yahoo.com",
        emailStatus: "good",
        phone: "(469) 555-0178",
        phoneStatus: "good",
        location: "Plano, TX",
        trustScore: 856,
        emailAge: "15 years",
        phoneAge: "18 years",
        piplMatch: "0.98",
        carrier: "AT&T",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Operations Manager", company: "Amazon", period: "2020 - Present" },
            { title: "Claims Manager", company: "State Farm", period: "2010 - 2020" }
        ]
    },
    
    "Mailani_Garcia": {
        name: "Mailani F. Garcia",
        personId: "cc746144",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: CV confirms 20+ years Walmart/K-Mart employment matching PIPL exactly. Long employment history fully verified.",
        email: "mailanig@gmail.com",
        emailStatus: "good",
        phone: "(956) 555-0189",
        phoneStatus: "good",
        location: "Brownsville, TX",
        trustScore: 823,
        emailAge: "8 years",
        phoneAge: "15 years",
        piplMatch: "1.0",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Department Manager", company: "Walmart", period: "2010 - Present" },
            { title: "Assistant Manager", company: "K-Mart", period: "2000 - 2010" }
        ]
    },
    
    "Bolanle_Aderibigbe": {
        name: "Bolanle Aderibigbe",
        personId: "991044cd",
        risk: "LOW",
        recommendation: "APPROVE",
        summary: "LOW RISK: Trust Elephant 702/1000, T-Mobile carrier verified, CV confirmed identity. All signals positive.",
        email: "baderibigbe@gmail.com",
        emailStatus: "good",
        phone: "(281) 555-0134",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 702,
        emailAge: "3 years",
        phoneAge: "5 years",
        piplMatch: "0.89",
        carrier: "T-Mobile",
        isVoip: false,
        redFlags: [],
        employment: [
            { title: "Customer Service Lead", company: "United Healthcare", period: "2021 - Present" }
        ]
    },
    
    "Bayyinah_Rosulme": {
        name: "Bayyinah Rosulme",
        personId: "9c356c58",
        risk: "MEDIUM",
        recommendation: "REVIEW",
        summary: "MEDIUM RISK: PIPL shows partial match (B Rosulme) - first name abbreviated. CV provides employment context that helps but name verification incomplete.",
        email: "brosulme@outlook.com",
        emailStatus: "good",
        phone: "(832) 555-0167",
        phoneStatus: "good",
        location: "Houston, TX",
        trustScore: 587,
        emailAge: "2 years",
        phoneAge: "4 years",
        piplMatch: "0.76 (partial)",
        carrier: "Verizon",
        isVoip: false,
        redFlags: [
            { title: "Partial Name Match", description: "PIPL shows 'B Rosulme' - first name abbreviated. May indicate nickname usage or data entry issue." }
        ],
        employment: [
            { title: "Administrative Coordinator", company: "Memorial Hermann", period: "2020 - Present" }
        ]
    }
};

// Add aliases for common filename variations
REPORT_DATA["Oladipupo"] = REPORT_DATA["Oladipupo_Yusuf"];
REPORT_DATA["Dylan"] = REPORT_DATA["Dylan_Morris"];
REPORT_DATA["Joshua"] = REPORT_DATA["Joshua_WSawders"];
REPORT_DATA["Sawders"] = REPORT_DATA["Joshua_WSawders"];
REPORT_DATA["Baba"] = REPORT_DATA["Baba_Olaniyi"];
REPORT_DATA["Olaniyi"] = REPORT_DATA["Baba_Olaniyi"];
REPORT_DATA["Onuoha"] = REPORT_DATA["Onuoha_Kenneth"];
REPORT_DATA["Kenneth"] = REPORT_DATA["Onuoha_Kenneth"];
REPORT_DATA["Patrick_Finnerty"] = REPORT_DATA["Patrick_J_Finnerty"];
REPORT_DATA["Finnerty"] = REPORT_DATA["Patrick_J_Finnerty"];
REPORT_DATA["Chidi"] = REPORT_DATA["Chidi_Samuel_Igweh"];
REPORT_DATA["Igweh"] = REPORT_DATA["Chidi_Samuel_Igweh"];
REPORT_DATA["Ashley"] = REPORT_DATA["Ashley_Egan"];
REPORT_DATA["Egan"] = REPORT_DATA["Ashley_Egan"];
REPORT_DATA["Michael"] = REPORT_DATA["Michael_Owoeye"];
REPORT_DATA["Owoeye"] = REPORT_DATA["Michael_Owoeye"];
REPORT_DATA["Colins"] = REPORT_DATA["Colins_Nwanne"];
REPORT_DATA["Christina"] = REPORT_DATA["Christina_Espinoza"];
REPORT_DATA["Espinoza"] = REPORT_DATA["Christina_Espinoza"];
REPORT_DATA["John"] = REPORT_DATA["John_P_Sokoloff"];
REPORT_DATA["Sokoloff"] = REPORT_DATA["John_P_Sokoloff"];
REPORT_DATA["Kennedy"] = REPORT_DATA["Kennedy_Simon"];
REPORT_DATA["Simon"] = REPORT_DATA["Kennedy_Simon"];
REPORT_DATA["Questel"] = REPORT_DATA["Questel_King"];
REPORT_DATA["King"] = REPORT_DATA["Questel_King"];
REPORT_DATA["Simone"] = REPORT_DATA["Simone_Minor"];
REPORT_DATA["Minor"] = REPORT_DATA["Simone_Minor"];
REPORT_DATA["Tracy"] = REPORT_DATA["Tracy_Nwanne"];
REPORT_DATA["Nwanne"] = REPORT_DATA["Tracy_Nwanne"];
REPORT_DATA["Theresa"] = REPORT_DATA["Theresa_Skepnek"];
REPORT_DATA["Skepnek"] = REPORT_DATA["Theresa_Skepnek"];
REPORT_DATA["Kristi"] = REPORT_DATA["Kristi_Walcott"];
REPORT_DATA["Walcott"] = REPORT_DATA["Kristi_Walcott"];
REPORT_DATA["Patrick_Madkins"] = REPORT_DATA["PATRICK_MADKINS"];
REPORT_DATA["Madkins"] = REPORT_DATA["PATRICK_MADKINS"];
REPORT_DATA["Mailani"] = REPORT_DATA["Mailani_Garcia"];
REPORT_DATA["Garcia"] = REPORT_DATA["Mailani_Garcia"];
REPORT_DATA["Bolanle"] = REPORT_DATA["Bolanle_Aderibigbe"];
REPORT_DATA["Aderibigbe"] = REPORT_DATA["Bolanle_Aderibigbe"];
REPORT_DATA["Bayyinah"] = REPORT_DATA["Bayyinah_Rosulme"];
REPORT_DATA["Rosulme"] = REPORT_DATA["Bayyinah_Rosulme"];
