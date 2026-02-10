#!/bin/bash
# Generate narration audio using OpenAI TTS

VOICE="onyx"  # Deep, authoritative
MODEL="tts-1-hd"  # High quality
OUTPUT_DIR="audio/narration"

mkdir -p "$OUTPUT_DIR"

# Narration texts (from the presentation)
declare -a NARRATIONS=(
  "I want to show you something important. There's a major blind spot in how companies hire people — and it's being exploited right now."
  "Here's the scenario. I want to infiltrate Vero Financial. Not by hacking their systems — by getting hired."
  "Vero is a strong company. SOC 2 compliant, regular penetration testing, solid perimeter security."
  "But they're hiring. And that's the entry point."
  "I'm targeting Platform Infrastructure Engineer. That role gets access to production systems, deployment pipelines, customer data — everything."
  "So I created Marcus Chen. It took about fifteen minutes. He's completely synthetic — but indistinguishable from a real candidate."
  "His LinkedIn profile has 500 connections, endorsements, work history at companies that rarely respond to reference checks. It looks entirely legitimate."
  "His resume matches perfectly. Every date aligns. Every detail cross-references with the LinkedIn."
  "The background check comes back clean. Because Marcus is built on real patterns — he's just not a real person."
  "Now consider the video interview. With real-time deepfakes, I can appear as anyone. This technology exists today."
  "The same applies to voice. Can you tell which one is real? Most people can't. This technology is freely available."
  "So let's recap what Marcus can do. A synthetic identity that passes screening. Deepfake video for interviews. Cloned voice. Clean background check."
  "Here's my question: How would you have caught him?"
  "Remember — Marcus took fifteen minutes to create. One person could generate twenty identities per week, apply to hundreds of companies, and land multiple job offers. Every week."
  "This isn't a future problem. We've heard directly from Fortune 500 security teams — this is happening now."
  "The data confirms it. Gartner predicts one in four candidate profiles will be fake by 2028. The Department of Justice identified over 300 companies that unknowingly hired North Korean operatives."
  "When a bad hire gets through, the average cost is over 240,000 dollars. And that's assuming they're just incompetent."
  "What if they're malicious? Insider threats cause the most damaging breaches. And you've just handed them credentials and access."
  "This is the new attack surface. Your firewall is solid. Your hiring process is the vulnerability."
  "This is what we built. Clarity integrates into your existing hiring workflow. Legitimate candidates pass through seamlessly. Threats are identified and blocked."
  "It covers the entire employee journey — from first application through offboarding."
  "Before the interview, we flag synthetic identities, AI-generated photos, and inconsistent employment history. Threats are blocked before anyone invests time."
  "During the interview, real-time detection. We identify face manipulation, voice anomalies, and biometric inconsistencies — alerting the interviewer immediately."
  "Here's what the analysis looks like. Face verification, voice analysis, identity matching. When something doesn't add up, we flag it with high confidence."
  "And protection continues after hiring. Day 90, day 180 — we verify it's still the same person who was hired. Continuous identity assurance."
  "We understand the reality of enterprise security. If a tool creates friction, it doesn't get used. Clarity fits into your existing processes."
  "Two priorities: seamless workflow integration, and full visibility for your security team."
  "On the workflow side — Greenhouse, Lever, Workday, Okta, Zoom, Slack. Native integrations with the tools you already use."
  "On the security side — SIEM integration, real-time alerts, threat correlation. Complete visibility for your team."
  "It's the full employee identity lifecycle. Onboarding, MFA resets, privileged access requests, periodic verification. Every critical moment."
  "Your people are your greatest asset. Make sure they're actually your people."
  "Every hire, verified. Every identity, trusted. That's Clarity."
)

echo "Generating ${#NARRATIONS[@]} audio files with OpenAI TTS (voice: $VOICE)..."

for i in "${!NARRATIONS[@]}"; do
  SLIDE_NUM=$i
  OUTPUT_FILE="$OUTPUT_DIR/slide-${SLIDE_NUM}.mp3"
  
  if [ -f "$OUTPUT_FILE" ]; then
    echo "Skipping slide $SLIDE_NUM (already exists)"
    continue
  fi
  
  echo "Generating slide $SLIDE_NUM..."
  
  curl -s https://api.openai.com/v1/audio/speech \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"$MODEL\",
      \"input\": \"${NARRATIONS[$i]}\",
      \"voice\": \"$VOICE\",
      \"response_format\": \"mp3\"
    }" \
    --output "$OUTPUT_FILE"
  
  # Small delay to avoid rate limits
  sleep 0.5
done

echo "Done! Files in $OUTPUT_DIR/"
ls -la "$OUTPUT_DIR/"
