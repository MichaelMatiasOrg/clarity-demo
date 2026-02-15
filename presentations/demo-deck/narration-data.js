// Narration Data — Hiring & Identity Fraud Protection
// Skeleton only (no audio generated yet)
window.NarrationData = {
  meta: {
    title: "Hiring & Identity Fraud Protection",
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
    { id: "title", text: "Hiring and Identity Fraud Protection.", duration: 3000 },
    { id: "tagline", text: "An end-to-end solution to ensure you never hire and employ a bad actor.", duration: 5000 },
    { id: "e2e-overview", text: "End-to-end protection securing your hiring and workflow lifecycles. From candidate identity checks through resume deep research, deepfake detection, and identity verification, to workforce protection with continuous authentication, device trust, and biometric matching.", duration: 12000 },
    { id: "lifecycle", text: "The identity lifecycle covers every stage: application, interview, verification, hiring, and ongoing workforce monitoring. Clarity provides detection at each step.", duration: 8000 },
    { id: "case-fake-cv", text: "Case one: Michael Smith. A fake CV. Let's see how Clarity catches fabricated identities.", duration: 5000 },
    { id: "deep-research", text: "We perform a deep research on the resume. Every data point is cross-referenced and validated against multiple sources.", duration: 6000 },
    { id: "analysis-snapshot", text: "Here's a snapshot of what Clarity analyzes: reverse image search, LinkedIn profile analysis, phone number and email verification, address validation, company and work record checks, education background verification, and dark-web and blacklist scanning.", duration: 12000 },
    { id: "anomalies", text: "Three anomalies detected! An AI-generated photo, a fake employer whose domain was registered just two weeks ago, and no graduation record at the claimed university.", duration: 8000 },
    { id: "case-deepfake", text: "Case two: Alex Brown, the deepfake candidate. This person is using real-time face manipulation during the video interview.", duration: 6000 },
    { id: "deepfake-detection", text: "Clarity performs both audio and video deepfake detection. Audio analysis catches voice cloning through spectral anomalies and lip-sync mismatches. Video analysis detects face-swaps through facial landmark drift and rendering artifacts.", duration: 10000 },
    { id: "case-mule", text: "Case three: Jennifer Davis, the mule. A real person who fronts for someone else during the hiring process.", duration: 6000 },
    { id: "mule-detection", text: "Jennifer showed up to interview one and passed identity verification. But a different person appeared for the technical test. Clarity detected the biometric mismatch — different person, different stage.", duration: 8000 },
    { id: "case-stolen-id", text: "Case four: Anna Johnson, stolen identity. Someone using another person's credentials to get hired.", duration: 5000 },
    { id: "identity-verification", text: "Clarity verifies identity through liveness checks — confirming a real person is present, not a photo or mask — and document verification, cross-referencing government-issued ID with the person on camera.", duration: 8000 },
    { id: "case-workforce", text: "Case five: Tom Miller, workforce fraud. He was hired six months ago and now has admin access to critical systems.", duration: 5000 },
    { id: "workforce-threat", text: "The journey from hire to threat. Tom passed all interviews and background checks, but now has access to source code and customer data. This is the risk when identity verification stops at the hiring stage.", duration: 8000 },
    { id: "continuous-verify", text: "Workforce continuous identity verification — the full chain of trust. Two questions that must be answered continuously: Is this a trusted device? And is this a trusted person?", duration: 8000 },
    { id: "workforce-auth", text: "Compliant workforce authentication, seamlessly integrated into your org flows. The Clarity SAFE platform connects with IAM, ITSM, and HRIS systems, with biometric source of truth at the center.", duration: 8000 },
    { id: "closing", text: "Full protection against giving access to a bad actor.", duration: 3000 },
  ]
};
