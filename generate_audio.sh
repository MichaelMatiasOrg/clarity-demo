#!/bin/bash

API_KEY="sk_6f6bbbcc42bffe9ffb6bc715ac2879c66c2718a37905649a"
VOICE_ID="JBFqnCBsd6RMkjVDRZzb"  # George - Warm, Captivating Storyteller
OUTPUT_DIR="audio/narration"

mkdir -p "$OUTPUT_DIR"

# Array of narration texts (one per slide)
declare -a NARRATIONS=(
  "What I'm about to show you represents one of the most significant security blind spots in enterprise today. It's not your firewall. It's not your endpoints. It's your hiring process."
  "Let me demonstrate with a real scenario. My target: Vero Financial. But I'm not going to hack their systems. I'm going to get hired."
  "Vero is a well-defended company. SOC 2 Type II certified. Regular penetration testing. Strong perimeter security. By traditional metrics, they're doing everything right."
  "But they're hiring. Six open roles. And that's my entry point."
  "I'm targeting Platform Infrastructure. This role provides direct access to production systems, customer data, deployment pipelines, and internal credentials. One hire. Complete access."
  "So I built a candidate. Marcus Chen. Senior engineer, seven years experience, Berkeley graduate. Completely synthetic. Built in fifteen minutes."
  "His LinkedIn is indistinguishable from a real profile. Five hundred connections. Endorsements. Work history at companies that rarely verify references. Every detail engineered to pass scrutiny."
  "His resume aligns perfectly with the job requirements. Every date matches LinkedIn. Every reference is prepared to vouch for him."
  "Marcus completes four video interviews. Recruiter screen. Technical round. Hiring manager. Executive review. All with glowing feedback. What they didn't know—every interview used a real-time deepfake. Face and voice, completely synthetic."
  "Voice cloning is equally accessible. Three voices—can you identify which is AI-generated? Most security professionals can't. And this technology is commercially available."
  "The background check returns clean. No criminal history. No red flags. Because Marcus has no history at all. Synthetic identities don't have a past to discover."
  "Every stage of the hiring funnel—bypassed. AI-generated identity for sourcing. Tailored resume. Deepfake interviews. Synthetic identity for background checks. Marcus now has an offer letter and access credentials."
  "This isn't theoretical. The Department of Justice confirmed North Korean operatives infiltrated over three hundred US companies using these exact techniques. KnowBe4—a security awareness company—hired a fake employee who began deploying malware on day one."
  "If Marcus applied to dozens of companies last month, how many is he working at right now?"
  "One operator. Fifteen minutes per identity. Twenty identities per week. Two hundred applications. Multiple job offers. Every week. This is industrial-scale infiltration."
  "We've spoken directly with Fortune 500 security teams. This is happening now, at scale, across every industry."
  "Gartner projects one in four candidate profiles will be fraudulent by 2028. The DOJ identified three hundred plus compromised companies. Infiltration attempts increased two hundred twenty percent in twelve months."
  "Your perimeter is secure. Your firewall is hardened. But your hiring process? That's the vulnerability. HR is the new attack surface."
  "A standard bad hire costs over two hundred forty thousand dollars in recruiting, onboarding, and replacement. Detection takes an average of six months."
  "But what if they're not just incompetent? Insider threat incidents average nearly five million dollars per breach. Detection and containment takes almost ten months."
  "Clarity provides end-to-end identity verification across the entire employee lifecycle. From first application to last day. Continuous assurance that your people are who they claim to be."
  "We integrate directly into your hiring workflow. Legitimate candidates pass through seamlessly. Threats are identified and blocked automatically."
  "This is your security team's view. Complete visibility into workforce verification status. Real-time threat detection. Ninety-nine percent verification coverage."
  "Before any interview, Clarity flags synthetic identities, AI-generated photos, and employment inconsistencies. Threats blocked before they waste anyone's time."
  "During live interviews, real-time detection identifies face manipulation, voice cloning, and identity mismatches. Interview paused. Security notified. Incident logged."
  "Protection continues post-hire. Day ninety. Day one-eighty. Ongoing verification confirms it's still the same person who was hired."
  "The complete identity lifecycle—covered. Onboarding verification. Periodic checks. MFA resets. Privileged access requests. Identity confirmed at every critical moment."
  "Clarity is built on two pillars: deep workflow integration and advanced fraud detection. Security tools fail when they create friction. We built for zero friction."
  "Native integration with your existing stack. Okta. ServiceNow. Workday. Slack. Zoom. No workflow changes required."
  "Multi-layered fraud detection. Deepfake analysis. Voice biometrics. Document forensics. Identity signal correlation. High-confidence threat identification."
  "When threats are detected, alerts route automatically to the right teams through existing tools. Full audit trail. Every action logged. Zero manual handoffs."
  "Traditional background checks verify history—not identity. IDV platforms cover onboarding—not interviews. Video platforms enable calls—without deepfake detection. Clarity covers the complete surface."
  "Clarity protects hiring at scale for industry leaders like Deel—verifying candidates across one hundred fifty countries."
  "Your people are your greatest asset. Make sure they're actually your people."
)

echo "Generating ${#NARRATIONS[@]} audio files..."

for i in "${!NARRATIONS[@]}"; do
  TEXT="${NARRATIONS[$i]}"
  OUTPUT_FILE="$OUTPUT_DIR/slide-$i.mp3"
  
  echo "[$((i+1))/${#NARRATIONS[@]}] Generating slide-$i.mp3..."
  
  curl -s "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
    -H "xi-api-key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"text\": \"$TEXT\",
      \"model_id\": \"eleven_multilingual_v2\",
      \"voice_settings\": {
        \"stability\": 0.5,
        \"similarity_boost\": 0.75,
        \"style\": 0.3,
        \"use_speaker_boost\": true
      }
    }" \
    --output "$OUTPUT_FILE"
  
  # Check if file was created successfully
  if [ -f "$OUTPUT_FILE" ] && [ -s "$OUTPUT_FILE" ]; then
    SIZE=$(ls -lh "$OUTPUT_FILE" | awk '{print $5}')
    echo "    ✓ Created $OUTPUT_FILE ($SIZE)"
  else
    echo "    ✗ Failed to create $OUTPUT_FILE"
  fi
  
  # Small delay to avoid rate limiting
  sleep 0.5
done

echo ""
echo "Done! Generated audio files in $OUTPUT_DIR/"
ls -la "$OUTPUT_DIR/"
