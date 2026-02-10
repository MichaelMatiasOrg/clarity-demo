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
    { id: "intro", text: "What I'm about to show you represents one of the most significant security blind spots in enterprise today. It's not your firewall. It's not your endpoints. It's your hiring process.", duration: 8000 },
    { id: "vero-hook", text: "Let me demonstrate with a real scenario. My target: Vero Financial. But I'm not going to hack their systems. I'm going to get hired.", duration: 7000 },
    { id: "vero-target", text: "Vero is a well-defended company. SOC 2 Type II certified. Regular penetration testing. Strong perimeter security. By traditional metrics, they're doing everything right.", duration: 6000 },
    { id: "entry-point", text: "But they're hiring. Six open roles. And that's my entry point.", duration: 4000 },
    { id: "why-role", text: "I'm targeting Platform Infrastructure. This role provides direct access to production systems, customer data, deployment pipelines, and internal credentials. One hire. Complete access.", duration: 7000 },
    { id: "meet-marcus", text: "So I built a candidate. Marcus Chen. Senior engineer, seven years experience, Berkeley graduate. Completely synthetic. Built in fifteen minutes.", duration: 6000 },
    { id: "linkedin", text: "His LinkedIn is indistinguishable from a real profile. Five hundred connections. Endorsements. Work history at companies that rarely verify references. Every detail engineered to pass scrutiny.", duration: 8000 },
    { id: "resume", text: "His resume aligns perfectly with the job requirements. Every date matches LinkedIn. Every reference is prepared to vouch for him.", duration: 5000 },
    { id: "interview-deepfake", text: "Marcus completes four video interviews. Recruiter screen. Technical round. Hiring manager. Executive review. All with glowing feedback. What they didn't know\u2014every interview used a real-time deepfake. Face and voice, completely synthetic.", duration: 11000 },
    { id: "voice-quiz", text: "Voice cloning is equally accessible. Three voices\u2014can you identify which is AI-generated? Most security professionals can't. And this technology is commercially available.", duration: 7000 },
    { id: "background-check", text: "The background check returns clean. No criminal history. No red flags. Because Marcus has no history at all. Synthetic identities don't have a past to discover.", duration: 7000 },
    { id: "every-stage", text: "Every stage of the hiring funnel\u2014bypassed. AI-generated identity for sourcing. Tailored resume. Deepfake interviews. Synthetic identity for background checks. Marcus now has an offer letter and access credentials.", duration: 9000 },
    { id: "already-happening", text: "This isn't theoretical. The Department of Justice confirmed North Korean operatives infiltrated over three hundred US companies using these exact techniques. KnowBe4\u2014a security awareness company\u2014hired a fake employee who began deploying malware on day one.", duration: 10000 },
    { id: "the-question", text: "If Marcus applied to dozens of companies last month, how many is he working at right now?", duration: 5000 },
    { id: "scale", text: "One operator. Fifteen minutes per identity. Twenty identities per week. Two hundred applications. Multiple job offers. Every week. This is industrial-scale infiltration.", duration: 8000 },
    { id: "fortune-500", text: "We've spoken directly with Fortune 500 security teams. This is happening now, at scale, across every industry.", duration: 5000 },
    { id: "epidemic", text: "Gartner projects one in four candidate profiles will be fraudulent by 2028. The DOJ identified three hundred plus compromised companies. Infiltration attempts increased two hundred twenty percent in twelve months.", duration: 8000 },
    { id: "hr-attack-surface", text: "Your perimeter is secure. Your firewall is hardened. But your hiring process? That's the vulnerability. HR is the new attack surface.", duration: 6000 },
    { id: "bad-hire-cost", text: "A standard bad hire costs over two hundred forty thousand dollars in recruiting, onboarding, and replacement. Detection takes an average of six months.", duration: 6000 },
    { id: "malicious", text: "But what if they're not just incompetent? Insider threat incidents average nearly five million dollars per breach. Detection and containment takes almost ten months.", duration: 7000 },
    { id: "clarity-intro", text: "Clarity provides end-to-end identity verification across the entire employee lifecycle. From first application to last day. Continuous assurance that your people are who they claim to be.", duration: 7000 },
    { id: "pipeline", text: "We integrate directly into your hiring workflow. Legitimate candidates pass through seamlessly. Threats are identified and blocked automatically.", duration: 6000 },
    { id: "command-center", text: "This is your security team's view. Complete visibility into workforce verification status. Real-time threat detection. Ninety-nine percent verification coverage.", duration: 7000 },
    { id: "pre-interview", text: "Before any interview, Clarity flags synthetic identities, AI-generated photos, and employment inconsistencies. Threats blocked before they waste anyone's time.", duration: 7000 },
    { id: "during-interview", text: "During live interviews, real-time detection identifies face manipulation, voice cloning, and identity mismatches. Interview paused. Security notified. Incident logged.", duration: 8000 },
    { id: "continuous", text: "Protection continues post-hire. Day ninety. Day one-eighty. Ongoing verification confirms it's still the same person who was hired.", duration: 6000 },
    { id: "lifecycle", text: "The complete identity lifecycle\u2014covered. Onboarding verification. Periodic checks. MFA resets. Privileged access requests. Identity confirmed at every critical moment.", duration: 7000 },
    { id: "two-pillars", text: "Clarity is built on two pillars: deep workflow integration and advanced fraud detection. Security tools fail when they create friction. We built for zero friction.", duration: 7000 },
    { id: "integrations", text: "Native integration with your existing stack. Okta. ServiceNow. Workday. Slack. Zoom. No workflow changes required.", duration: 5000 },
    { id: "fraud-detection", text: "Multi-layered fraud detection. Deepfake analysis. Voice biometrics. Document forensics. Identity signal correlation. High-confidence threat identification.", duration: 6000 },
    { id: "alerts", text: "When threats are detected, alerts route automatically to the right teams through existing tools. Full audit trail. Every action logged. Zero manual handoffs.", duration: 6000 },
    { id: "vs-traditional", text: "Traditional background checks verify history\u2014not identity. IDV platforms cover onboarding\u2014not interviews. Video platforms enable calls\u2014without deepfake detection. Clarity covers the complete surface.", duration: 9000 },
    { id: "social-proof", text: "Clarity protects hiring at scale for industry leaders like Deel\u2014verifying candidates across one hundred fifty countries.", duration: 5000 },
    { id: "closing", text: "Your people are your greatest asset. Make sure they're actually your people.", duration: 5000 }
  ],

  // CSS selectors for elements whose animations should be restarted on slide entry
  animationSelectors: '.orbit-outer, .orbit-inner, .center-hub, .touchpoint, .flow-arrow, .check-station-1, .check-station-2, .check-station-3, .trusted-hire-circle, .verified-badge, .perimeter-ring, .person-icon'
};
