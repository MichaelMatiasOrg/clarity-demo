// Narration script for each slide
// Format: { slideIndex: 0-based, text: "narration", duration: ms (optional override) }
const narrationScript = [
  {
    slide: 0, // Hero - Michael Matias
    text: "Hi, I'm Michael Matias, CEO of Clarity. I'm going to show you something that will change how you think about hiring security.",
    duration: 6000
  },
  {
    slide: 1, // The Hook
    text: "Last night, I wanted to break into Vero Financial. Not physically. I wanted to become one of their employees.",
    duration: 7000
  },
  {
    slide: 2, // The Target
    text: "Vero Financial. A mid-size financial services company. Good security posture. SOC 2 compliant. The works.",
    duration: 7000
  },
  {
    slide: 3, // They're hiring
    text: "But they're hiring. And that's all I need.",
    duration: 4000
  },
  {
    slide: 4, // Platform Infrastructure
    text: "Platform Infrastructure Engineer. This role gets me access to cloud infrastructure, deployment pipelines, and internal systems. Perfect.",
    duration: 8000
  },
  {
    slide: 5, // Meet Marcus
    text: "Meet Marcus Chen. He doesn't exist. I created him in about an hour.",
    duration: 5000
  },
  {
    slide: 6, // LinkedIn
    text: "A LinkedIn profile that looks perfect. 500 plus connections. Endorsements. Work history at companies that won't respond to verification requests.",
    duration: 8000
  },
  {
    slide: 7, // Resume
    text: "A resume that matches perfectly. Every detail cross-references. Every date aligns.",
    duration: 6000
  },
  {
    slide: 8, // Background Check
    text: "Background check? All clear. Because Marcus Chen's identity is built on real patterns. Just not a real person.",
    duration: 7000
  },
  {
    slide: 9, // Deepfake Reality
    text: "And here's where it gets scary. On a video call, anyone can be anyone. Real-time deepfakes are no longer science fiction.",
    duration: 8000
  },
  {
    slide: 10, // Voice Quiz
    text: "Can you tell which voice is real? Go ahead, take a guess. The technology to clone voices is now available to anyone.",
    duration: 8000
  },
  {
    slide: 11, // Recap
    text: "So let's recap what Marcus can do. Fake identity that passes screening. Deepfake video for interviews. Cloned voice that sounds authentic. Background check comes back clean.",
    duration: 10000
  },
  {
    slide: 12, // The Question
    text: "So here's my question: How would you have caught him?",
    duration: 5000
  },
  {
    slide: 13, // The Scale
    text: "This was one target. One hour of work. Now imagine threat actors doing this at scale. Automated. Against hundreds of companies.",
    duration: 8000
  },
  {
    slide: 14, // Fortune 500 Quote
    text: "This isn't theoretical. Fortune 500 CISOs are telling us this is happening. Right now.",
    duration: 6000
  },
  {
    slide: 15, // Stats
    text: "The hiring fraud epidemic is real. Billions lost. And most companies have zero detection capabilities.",
    duration: 6000
  },
  {
    slide: 16, // Bad Hire Impact
    text: "What happens when a bad hire gets in? Average cost: over 240,000 dollars. But that's just incompetence.",
    duration: 7000
  },
  {
    slide: 17, // Malicious Insider
    text: "What if they're malicious? Insider threats cause the most devastating breaches. And you just hired one.",
    duration: 7000
  },
  {
    slide: 18, // Attack Surface
    text: "This is the new attack surface. Your perimeter is secure. But your employees? That's the vulnerability.",
    duration: 7000
  },
  {
    slide: 19, // End-to-End Protection (Animated)
    text: "This is why we built Clarity. End-to-end protection, built into your existing hiring flow. Watch as candidates move through your pipeline. Legitimate hires proceed. Threats get caught and blocked. No workflow changes required.",
    duration: 14000
  },
  {
    slide: 20, // Clarity Solution
    text: "Clarity provides end-to-end identity validation for the entire hiring lifecycle. From the first resume to their last day on the job.",
    duration: 8000
  },
  {
    slide: 21, // Pre-Interview
    text: "Before the interview even starts, Clarity flags synthetic identities. AI-generated photos. Unverifiable employment. Blocked before wasting interviewer time.",
    duration: 9000
  },
  {
    slide: 22, // Mid-Interview Detection
    text: "Mid-interview, real-time alerts. 23 minutes in, we detect face manipulation, voice sync mismatch, and biometric anomalies. Interviewer notified immediately.",
    duration: 10000
  },
  {
    slide: 23, // Detection Report
    text: "Here's how we detected it. Face analysis shows swap artifacts. Voice analysis catches cloning signatures. Identity match confirms it's not the same person. High confidence deepfake. Interview terminated.",
    duration: 12000
  },
  {
    slide: 24, // Continuous Verification
    text: "Day 90, still the same person. Hired employees are continuously verified. Periodic biometric checks. Voice pattern consistency. Confirm it's still them, not a replacement.",
    duration: 10000
  },
  {
    slide: 25, // Practical Reality
    text: "But here's the practical reality. A solution that doesn't fit into your existing workflow is a solution that won't get used.",
    duration: 7000
  },
  {
    slide: 26, // Two Pillars
    text: "That's why Clarity is built on two pillars. Deep workflow integration. And deep security in the background.",
    duration: 7000
  },
  {
    slide: 27, // Pillar A
    text: "Pillar A: We integrate into the tools you already use. Greenhouse, Lever, Workday, Okta, Zoom, Slack. No new workflows to learn.",
    duration: 9000
  },
  {
    slide: 28, // Pillar B
    text: "Pillar B: Full visibility for your security team. SIEM integration. Real-time alerts. Threat correlation. No blind spots.",
    duration: 8000
  },
  {
    slide: 29, // Employee Lifecycle
    text: "The employee identity lifecycle. From onboarding to MFA resets to privileged access to periodic checks. Every critical moment, verified.",
    duration: 9000
  },
  {
    slide: 30, // Promise
    text: "Your people are your greatest asset. Make sure they're really your people.",
    duration: 6000
  },
  {
    slide: 31, // Close
    text: "Every hire, verified. Every identity, trusted. That's Clarity.",
    duration: 6000
  }
];

// Export for use
if (typeof module !== 'undefined') {
  module.exports = narrationScript;
}
