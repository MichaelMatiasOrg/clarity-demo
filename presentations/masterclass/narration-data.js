// Clarity Narration Data — Single source of truth for presentation narration
// Used by narration-engine.js and generate_audio.sh (via Node.js)
//
// Entries are ordered to match HTML slide DOM order (data-slide-id).
// audioIndex maps each entry to its source audio file (slide-{audioIndex}.mp3).
// Entries without audioIndex use duration-based timing (no audio file).
window.NarrationData = {
  meta: {
    title: "Clarity - Masterclass: Hiring Identity Fraud",
    audioPathPattern: "audio/slide-{index}.mp3",
    voice: {
      provider: "elevenlabs",
      id: "WQcQveC0hbQNvI69FWyU",
      name: "Chad",
      model: "eleven_multilingual_v2",
      settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true }
    }
  },

  // Each entry maps to a slide via data-slide-id attribute in HTML
  // Format: { id, text, audioIndex (optional), duration (fallback ms) }
  entries: [
    // === Act 1: The Attack Story (slides 0-11) ===
    { id: "intro", audioIndex: 0, text: "I'm Michael Matias, Co-Founder and CEO of Clarity. In cybersecurity, we're used to thinking about breaking into companies through software. Vulnerabilities. Exploits. Zero-days. Today, I want to talk about a different threat: breaking in through the front door.", duration: 15000 },
    { id: "vero-hook", audioIndex: 1, text: "Last night, I wanted to test how easy this really is. I picked a target: Vero Financial. Let me show you how I got in.", duration: 8000 },
    { id: "vero-target", audioIndex: 2, text: "Vero Financial. Four point two billion dollars processed annually. One hundred eighty platform customers. A mature security perimeter. Regular penetration tests. They do everything right. Except for one thing.", duration: 12000 },
    { id: "entry-point", audioIndex: 3, text: "They're hiring. Six open roles. One stands out: Staff Software Engineer, Platform. Hiring isn't doing anything wrong. It's just an opportunity. This is my way in.", duration: 10000 },
    { id: "why-role", audioIndex: 4, text: "Why this role? Production access to systems processing billions in transactions. Customer data. Account numbers. Transaction history. Vault access. API keys. The keys to the kingdom. One hire. Complete access.", duration: 12000 },
    { id: "meet-marcus", audioIndex: 5, text: "So I created the perfect candidate. Meet Marcus Chen. Senior Software Engineer. Seven years of experience. Stripe. Plaid. UC Berkeley. Built in minutes. Tailored for this exact role.", duration: 10000 },
    { id: "linkedin", audioIndex: 6, text: "LinkedIn profile. Five hundred connections. Endorsements from former colleagues. Work history at companies that won't respond to verification requests. All fake. All built in an afternoon.", duration: 12000 },
    { id: "resume", audioIndex: 7, text: "A resume built specifically for Vero. Financial services background. Payment processing experience. The exact tech stack they use. Marcus isn't a generic candidate. He's designed to be irresistible to this specific company.", duration: 10000 },
    { id: "interview-deepfake", audioIndex: 9, text: "Here's where it gets scary. On a video call, anyone can be anyone. Real-time deepfakes. Or a mule — someone else interviewing on Marcus's behalf. Either way, the person you hire isn't the person you interviewed.", duration: 12000 },
    { id: "voice-quiz", audioIndex: 10, text: "It's becoming nearly impossible to tell if you're talking to a human or a synthetic voice. Do you think you could spot the difference? Most people can't.", duration: 8000 },
    { id: "background-check", audioIndex: 8, text: "Background check? All clear. Traditional checks look for bad records. Criminal history. Employment disputes. They don't verify the identity actually exists. And fake identities don't have bad records.", duration: 12000 },
    { id: "every-stage", audioIndex: 11, text: "Let's recap what Marcus can do. Fake identity that passes screening. Deepfake video for interviews. Cloned voice that sounds authentic. Background check comes back clean. Every single stage of your hiring process — bypassed.", duration: 15000 },

    // === Act 2: The Proof - GlobeLife (slides 13-16) ===
    { id: "proof-transition", audioIndex: 34, text: "That was Marcus Chen — a demonstration. But this isn't hypothetical. It's happening all around us.", duration: 5000 },
    { id: "globelife-intro", audioIndex: 35, text: "Globe Life — one of our partners here today — asked us to review twenty-eight candidate resumes from their pipeline. Real candidates. Real applications.", duration: 8000 },
    { id: "globelife-results", audioIndex: 36, text: "Twenty-eight resumes. Seven came back high risk. Five medium risk. That's twenty-five percent of their pipeline with serious fraud indicators. One in four.", duration: 10000 },
    { id: "globelife-findings", audioIndex: 37, text: "What did we find? Synthetic identity patterns. Burner phones. Employment history that doesn't match any database. Zero digital footprint. Email addresses created days before applying. These aren't bad candidates. These are fabricated people.", duration: 12000 },

    // === Act 3: The Scale (slides 17+) ===
    { id: "already-happening", audioIndex: 38, text: "And it's not just Globe Life. This is happening to companies around the world. North Korean operatives have infiltrated over three hundred US companies. KnowBe4 — a security company — hired one who started loading malware on day one. If it can happen to a security company, it can happen to anyone.", duration: 15000 },
    { id: "fortune-500", audioIndex: 14, text: "This is Charles Carmakal, CTO of Mandiant. He's talked to dozens of Fortune 500 CISOs. Almost every one has admitted they had a North Korean IT worker problem. Dozens. Fortune 500. Already compromised.", duration: 12000 },
    { id: "epidemic", audioIndex: 15, text: "The numbers are staggering. Amazon alone has blocked eighteen hundred suspected North Korean applicants. Infiltrations are up two hundred twenty percent in just twelve months. And by 2028, Gartner predicts one in four candidate profiles will be fake. This isn't slowing down. It's accelerating.", duration: 12000 },
    { id: "hr-attack-surface", audioIndex: 18, text: "HR is the new attack surface. You've secured your perimeter. Firewalls. Encryption. EDR. SIEM. But your employees? That's the vulnerability. And every open role is an invitation.", duration: 10000 },
    { id: "bad-hire-cost", audioIndex: 16, text: "What happens when a bad hire gets through? On average, two hundred forty thousand dollars. That's recruiting, onboarding, salary, severance, replacement. And it takes six months to detect. Six months of access. Six months of trust.", duration: 12000 },
    { id: "malicious", audioIndex: 17, text: "But that's just incompetence. What if they're malicious? An insider threat doesn't cost two hundred forty thousand. It costs five million. And it doesn't take six months to detect. It takes nearly ten months. Ten months of damage before you even know.", duration: 12000 },

    // === Act 3: The Solution (slides 20-25) ===
    { id: "clarity-intro", audioIndex: 20, text: "This is why we built Clarity. End-to-end identity validation for the entire employee lifecycle. From the first resume to their last day on the job. Know who you're hiring. And know it's still them.", duration: 10000 },
    { id: "pipeline", audioIndex: 19, text: "This is Clarity in action. Candidates flow through your existing pipeline — Greenhouse, Lever, Workday. Clarity validates every identity at every stage. Legitimate hires proceed. Threats get caught and blocked. No workflow changes required.", duration: 12000 },
    { id: "command-center", audioIndex: 22, text: "This is what your security team sees. The Clarity Command Center. Every candidate, every employee, every identity risk — in one place. Let me show you what happens at each stage.", duration: 10000 },
    { id: "pre-interview", audioIndex: 21, text: "Before the interview even starts, Clarity flags the risk. Synthetic identity patterns. AI-generated photos. Unverifiable employment history. Marcus gets blocked before he wastes a single minute of interviewer time.", duration: 10000 },
    { id: "during-interview", audioIndex: 23, text: "After the interview, Clarity analyzes the recording. Face manipulation detected. Voice doesn't match lip movements. Identity doesn't match the application. Flagged for expert review — a human confirms before any action is taken.", duration: 12000 },
    { id: "continuous", audioIndex: 24, text: "Security doesn't stop at hire. Clarity continuously verifies your employees. Periodic biometric checks. Voice pattern consistency. Day ninety, day three hundred — confirm it's still the same person you hired.", duration: 10000 },

    // === Act 4: Lifecycle & Two Pillars (slides 26-33) ===
    { id: "lifecycle", audioIndex: 29, text: "Here's the thing most companies miss. Identity verification isn't a hiring problem. It's a lifecycle problem. Onboarding. MFA resets. Privileged access. Sensitive transactions. Every one of these moments is a vulnerability. You need one system that knows your employee — and can verify them at every critical moment. That's Clarity.", duration: 15000 },
    { id: "architecture", audioIndex: 39, text: "Clarity is built to integrate with enterprise systems. Identity validation triggers flow in from ServiceNow, Workday, Okta — wherever access decisions happen. We validate the identity, then orchestrate the response back into your stack. Real-time. API-first. Zero workflow disruption.", duration: 14000 },
    { id: "two-pillars", audioIndex: 25, text: "So what does it actually take to solve this? First, the solution must integrate with the enterprise stack you already run — your ATS, your IDP, your SIEM. Second, it needs to leverage many signals: deepfake detection, voice biometrics, document verification, identity cross-referencing. But here's the catch — each of those signals alone is noisy. High false-positive rates. No single check is definitive. The real value? It's in fusing those signals into one clear, actionable verdict — pass or fail, a risk score — and pushing that insight directly into your workflow. You need an end-to-end player that connects all three.", duration: 18000 },
    { id: "integrations", audioIndex: 27, text: "Clarity integrates with the tools your teams already use. Greenhouse, Lever, Workday for recruiting. Okta, ServiceNow for security and IT. No new workflows to learn. No friction for recruiters. No disruption for candidates.", duration: 12000 },
    { id: "fraud-detection", audioIndex: 28, text: "Pillar B. Advanced fraud detection. Four layers working together. Deepfake detection catches face swaps and synthetic video. Voice analysis flags cloning and audio-visual mismatches. Biometric matching verifies it's the same person. And identity signals cross-reference patterns across our threat database. No blind spots.", duration: 14000 },

    // === Act 5: Comparison & Close (slides 34-37) ===
    { id: "vs-traditional", audioIndex: 40, text: "Traditional background checks look for bad records. Criminal history. Employment disputes. But fake identities don't have bad records — they're clean by design. IDV platforms verify documents at a single point in time. But what about the interview? What about day ninety? Clarity takes a different approach. We verify the human, not just the paperwork. And we do it continuously.", duration: 18000 },
    { id: "social-proof", audioIndex: 32, text: "Clarity protects hiring at scale for industry leaders like Deel — verifying candidates across 150 countries.", duration: 8000 },
    { id: "threat-intel", audioIndex: 41, text: "And with Clarity's threat intelligence, you can check your entire candidate pipeline against known threat actor patterns — in minutes. Over a thousand DPRK-linked identities in our database. Free to use.", duration: 10000 },
    { id: "closing", audioIndex: 33, text: "Your people are your greatest asset. Make sure they're actually your people.", duration: 5000 }
  ],

  // CSS selectors for elements whose animations should be restarted on slide entry
  animationSelectors: '.orbit-outer, .orbit-inner, .center-hub, .touchpoint, .flow-arrow, .check-station-1, .check-station-2, .check-station-3, .trusted-hire-circle, .verified-badge, .perimeter-ring, .person-icon'
};
