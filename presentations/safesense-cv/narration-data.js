// Narration Data — SafeSense CV Fraud Analysis
// Used by narration-engine.js and generate_audio.sh (via Node.js)
//
// Entries are ordered to match HTML slide DOM order (data-slide-id).
// audioIndex maps each entry to its source audio file (slide-{audioIndex}.mp3).
// Entries without audioIndex use duration-based timing (no audio file).
window.NarrationData = {
  meta: {
    title: "SafeSense: CV Fraud Analysis",
    audioPathPattern: "audio/slide-{index}.mp3",
    voice: {
      provider: "elevenlabs",
      id: "JBFqnCBsd6RMkjVDRZzb",
      name: "George",
      model: "eleven_multilingual_v2",
      settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true }
    }
  },

  entries: [
    {
      id: "title",
      text: "Welcome to SafeSense — Clarity's autonomous CV fraud analysis platform. Today we'll walk through how SafeSense analyzes candidates to detect hiring fraud before a new employee starts.",
      duration: 10000
    },
    {
      id: "the-problem",
      text: "Here's the reality: eighty-five percent of resumes contain misrepresentations. Gartner predicts that by 2028, one in four candidate profiles will be fake. And when a fraudulent hire turns into a malicious insider, the average breach costs four point nine million dollars. Your next hire may not be who they claim to be.",
      duration: 18000
    },
    {
      id: "meet-safesense",
      text: "SafeSense is an AI-powered autonomous analysis platform built for comprehensive candidate investigation. It combines CV and resume parsing — including OCR for scanned documents — with multi-source cross-referencing, secure Docker-isolated execution, and a real-time chat interface for interactive investigation.",
      duration: 18000
    },
    {
      id: "how-it-works",
      text: "The workflow is straightforward. First, upload the candidate's CV along with their LinkedIn URL and any enrichment data. SafeSense parses and extracts structured data — name, employment history, education, skills, and contacts. Then it performs a three-way cross-reference: CV versus LinkedIn versus enrichment vendors. Finally, it generates a scored risk report with findings, recommendations, and full explainability.",
      duration: 22000
    },
    {
      id: "data-sources",
      text: "SafeSense pulls intelligence from three key sources. The CV or resume provides employment history, education, skills, and contact information. LinkedIn profile data reveals work timelines, connection depth, account age, and engagement patterns. And multi-vendor enrichment adds fraud risk scoring, email and phone validation, identity verification, and dark web exposure checks. The power is in the three-way comparison — discrepancies invisible to any single source become clear.",
      duration: 25000
    },
    {
      id: "eight-detectors",
      text: "Every candidate is scored across eight specialized fraud detectors. Threat intelligence checks IP reputation and dark web exposure. Device fingerprint analyzes browser consistency and emulator detection. Online presence evaluates LinkedIn age and professional platform engagement. Cross-reference integrity compares CV, LinkedIn, and application data. Contact authenticity validates phone and email channels. Document integrity examines CV metadata and editing patterns. Geographic consistency verifies location claims. And network depth assesses connection quality and endorsement patterns. Each detector scores the candidate from zero to five.",
      duration: 30000
    },
    {
      id: "risk-scoring",
      text: "Detector scores combine into a clear risk verdict. Low risk — zero to thirty-three — means a verified candidate who can proceed with standard onboarding. Medium risk — thirty-four to sixty-six — requires enhanced verification: request government ID, verify employment, conduct a video interview. High risk — sixty-seven to one hundred — means do not proceed. Strong fraud or identity theft indicators have been detected.",
      duration: 22000
    },
    {
      id: "sample-analysis",
      text: "Here's what a real analysis looks like. This candidate scored medium risk overall. Network depth flagged at four out of five — their LinkedIn connections appear shallow with minimal endorsements. Contact authenticity scored three — the phone number traces to a VoIP service and the email domain was recently registered. Online presence also scored three — sparse professional footprint relative to their claimed experience. However, document integrity verified clean — the resume metadata is consistent with legitimate creation. The recommendation: enhanced verification required before proceeding.",
      duration: 28000
    },
    {
      id: "batch-reporting",
      text: "For large-scale screening, SafeSense processes up to twenty candidates in parallel using dedicated subagents. Reports are professionally formatted — an overview page with risk distribution, a detection categories legend, and per-candidate pages sorted by risk level with score cards and actionable recommendations. All reports are IP-protected — they show findings, not methodology — making them safe for client delivery. Full version control tracks every revision.",
      duration: 24000
    },
    {
      id: "cta",
      text: "SafeSense brings together eight fraud detectors, parallel batch analysis, and three verified data sources into one autonomous platform. See what it reveals about your candidates. Request a demo today.",
      duration: 12000
    }
  ]
};
