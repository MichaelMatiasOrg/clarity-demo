// Narration Data — Deepfake Detection: The Manual Review Process
// Skeleton only (no audio generated yet)
window.NarrationData = {
  meta: {
    title: "Deepfake Detection: The Manual Review Process",
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
    { id: "title", text: "Deepfake Detection: The Manual Review Process. How human analysts verify what AI flags.", duration: 5000 },
    { id: "why-manual-review", text: "Every check produces one of three risk tiers. High means the platform is highly confident manipulation was detected. Low means the individual is genuine. Medium means the result is inconclusive and gets escalated to a human expert. Typically around ten percent of all checks are classified as medium.", duration: 10000 },
    { id: "detection-pipeline", text: "Here's the full detection pipeline, from event ingestion through to SIEM push. The critical step — expert review — is where a trained human analyst evaluates every flagged case before any action is taken.", duration: 8000 },
    { id: "post-hire-flow", text: "In the post-hiring flow, an executive video call is scored by Clarity's AI into three tiers. High-risk and low-risk results are returned immediately — real-time decisioning is critical when the worker is already in your workforce. Medium-risk results, about ten percent of checks, are routed to a human expert for review before a final decision is delivered. For high-risk results, if a subsequent human review determines the outcome should be reverted, a webhook update is sent automatically.", duration: 14000 },
    { id: "pre-hire-flow", text: "In the pre-hiring flow, the key difference is that both high and medium results are routed to human expert review before being shared with the hiring team. Only low-risk results are auto-cleared. There are two reasons for this approach: first, AI regulations require a human in the loop for hiring decisions — AI cannot make decisions that impact hiring potential in a closed loop. Second, the hiring workflow can tolerate a short delay as a tradeoff for a significantly reduced false-positive rate.", duration: 14000 },
    { id: "analyst-workbench", text: "The analyst workbench provides full forensic context: video playback with flagged timestamps, AI signal breakdowns, biometric baseline comparisons, device context, and threat database cross-references. No black-box decisions.", duration: 10000 },
    { id: "decision-flow", text: "Every review ends in one of three outcomes: confirmed threat triggers blocking and alerting, false positives clear the employee and feed back into the AI model, and uncertain cases escalate for additional verification. Average review time is forty-seven minutes.", duration: 10000 },
    { id: "quality-metrics", text: "Around ten percent of checks escalate to human review, with the exact rate driven by policy thresholds Clarity configures based on your direction, risk appetite, and active threat levels. Quality controls include dual-analyst review for confirmed threats, continuous AI feedback loops, and monthly calibration audits.", duration: 12000 },
    { id: "closing", text: "Questions?", duration: 3000 },
  ]
};
