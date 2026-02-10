// Clarity Narration Data — Single source of truth for presentation narration
// Used by narration-engine.js and generate_audio.sh (via Node.js)
window.NarrationData = {
  meta: {
    title: "Clarity - Masterclass: Hiring Identity Fraud",
    audioPathPattern: "audio/narration/slide-{index}.mp3",
    voice: {
      provider: "elevenlabs",
      id: "JBFqnCBsd6RMkjVDRZzb",
      name: "George",
      model: "eleven_multilingual_v2",
      settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true }
    }
  },

  // Each entry maps to a slide via data-slide-id attribute in HTML
  // Format: { id: "slide-id", text: "narration", duration: ms (fallback if audio fails) }
  entries: [
    { id: "intro", text: "Hi, I'm Michael Matias, CEO of Clarity. I'm going to show you something that will change how you think about hiring security.", duration: 8000 },
    { id: "vero-hook", text: "Last night, I wanted to break into Vero Financial. Not physically — I wanted to become one of their employees.", duration: 6000 },
    { id: "vero-target", text: "Vero Financial. A mid-size financial services company. Good security posture. SOC 2 compliant. The works.", duration: 8000 },
    { id: "entry-point", text: "But they're hiring, and that's all I need.", duration: 3000 },
    { id: "why-role", text: "Platform Infrastructure Engineer. This role gets me access to cloud infrastructure, deployment pipelines, and internal systems. Perfect.", duration: 9000 },
    { id: "meet-marcus", text: "Meet Marcus Chen. He doesn't exist. I created him in about an hour.", duration: 4000 },
    { id: "linkedin", text: "A LinkedIn profile that looks perfect. 500-plus connections, endorsements, work history at companies that won't respond to verification requests.", duration: 11000 },
    { id: "resume", text: "A resume that matches perfectly. Every detail cross-references, every date aligns.", duration: 5000 },
    { id: "interview-deepfake", text: "Background check? All clear. Because Marcus Chen's identity is built on real patterns — just not a real person.", duration: 7000 },
    { id: "voice-quiz", text: "And here's where it gets scary. On a video call, anyone can be anyone. Real-time deepfakes are no longer science fiction.", duration: 8000 },
    { id: "background-check", text: "Can you tell which voice is real? Go ahead, take a guess. The technology to clone voices is now available to anyone.", duration: 8000 },
    { id: "every-stage", text: "So let's recap what Marcus can do. Fake identity that passes screening. Deepfake video for interviews. Cloned voice that sounds authentic. Background check comes back clean.", duration: 13000 },
    { id: "already-happening", text: "So here's my question. How would you have caught him?", duration: 4000 },
    { id: "the-question", text: "This was one target, one hour of work. Now imagine threat actors doing this at scale, automated, against hundreds of companies.", duration: 8000 },
    { id: "scale", text: "This isn't theoretical. Fortune 500 CISOs are telling us this is happening right now.", duration: 5000 },
    { id: "fortune-500", text: "The hiring fraud epidemic is real. Billions lost, and most companies have zero detection capabilities.", duration: 7000 },
    { id: "epidemic", text: "What happens when a bad hire gets in? Average cost? Over $240,000. But that's just incompetence.", duration: 7000 },
    { id: "hr-attack-surface", text: "What if they're malicious? Insider threats cause the most devastating breaches — and you just hired one.", duration: 6000 },
    { id: "bad-hire-cost", text: "This is the new attack surface. Your perimeter is secure, but your employees — that's the vulnerability.", duration: 6000 },
    { id: "malicious", text: "This is why we built Clarity — end-to-end protection built into your existing hiring flow. Watch as candidates move through your pipeline. Legitimate hires proceed, threats get caught and blocked. No workflow changes required.", duration: 16000 },
    { id: "clarity-intro", text: "Clarity provides end-to-end identity validation for the entire hiring lifecycle — from the first resume to their last day on the job.", duration: 9000 },
    { id: "pipeline", text: "Before the interview even starts, Clarity flags synthetic identities, AI-generated photos, unverifiable employment. Blocked before wasting interviewer time.", duration: 9000 },
    { id: "command-center", text: "Mid-interview, real-time alerts. 23 minutes in, we detect face manipulation, voice sync mismatch, and biometric anomalies. Interviewer notified immediately.", duration: 11000 },
    { id: "pre-interview", text: "Here's how we detected it. Face analysis shows swap artifacts. Voice analysis catches cloning signatures. Identity match confirms it's not the same person. High-confidence deepfake — interview terminated.", duration: 16000 },
    { id: "during-interview", text: "Day 90 — still the same person. Hired employees are continuously verified. Periodic biometric checks, voice pattern consistency, confirm it's still them — not a replacement.", duration: 12000 },
    { id: "continuous", text: "But here's the practical reality — a solution that doesn't fit into your existing workflow is a solution that won't get used.", duration: 8000 },
    { id: "lifecycle", text: "That's why Clarity is built on two pillars — deep workflow integration, and deep security in the background.", duration: 7000 },
    { id: "two-pillars", text: "Pillar A. We integrate into the tools you already use. Greenhouse, Lever, Workday, Okta, Zoom, Slack. No new workflows to learn.", duration: 10000 },
    { id: "integrations", text: "Pillar B. Full visibility for your security team. SIEM integration. Real-time alerts. Threat correlation. No blind spots.", duration: 8000 },
    { id: "fraud-detection", text: "The employee identity lifecycle — from onboarding to MFA resets, to privileged access, to periodic checks. Every critical moment, verified.", duration: 10000 },
    { id: "alerts", text: "Your people are your greatest asset. Make sure they're really your people.", duration: 5000 },
    { id: "vs-traditional", text: "Every hire verified. Every identity trusted. That's Clarity.", duration: 4000 },
    { id: "social-proof", text: "Clarity protects hiring at scale for industry leaders like Deel — verifying candidates across 150 countries.", duration: 8000 },
    { id: "closing", text: "Your people are your greatest asset. Make sure they're actually your people.", duration: 5000 }
  ],

  // CSS selectors for elements whose animations should be restarted on slide entry
  animationSelectors: '.orbit-outer, .orbit-inner, .center-hub, .touchpoint, .flow-arrow, .check-station-1, .check-station-2, .check-station-3, .trusted-hire-circle, .verified-badge, .perimeter-ring, .person-icon'
};
