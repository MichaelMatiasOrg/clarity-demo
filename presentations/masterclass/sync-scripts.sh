#!/bin/bash
# sync-scripts.sh - Sync approved scripts from SCRIPT.md to narration-data.js
# Usage: ./sync-scripts.sh [--generate-audio]

set -e
cd "$(dirname "$0")"

SCRIPT_FILE="SCRIPT.md"
DATA_FILE="narration-data.js"
GENERATE_AUDIO=false

if [[ "$1" == "--generate-audio" ]]; then
  GENERATE_AUDIO=true
fi

echo "📖 Reading approved scripts from $SCRIPT_FILE..."

# Parse SCRIPT.md and extract slide scripts using node
node -e '
const fs = require("fs");
const script = fs.readFileSync("SCRIPT.md", "utf8");
const dataFile = fs.readFileSync("narration-data.js", "utf8");

// Parse slides from SCRIPT.md
const slideRegex = /### Slide \d+: (\w+[-\w]*)\n\*\*Core message:.*?\n\*\*Duration:.*?~(\d+) seconds.*?\n\*\*Script:\*\*\n```\n([\s\S]*?)```\n\*\*Status:\*\* \[x\] Approved/g;

const approvedSlides = [];
let match;
while ((match = slideRegex.exec(script)) !== null) {
  const [, id, duration, text] = match;
  approvedSlides.push({
    id,
    duration: parseInt(duration) * 1000,
    text: text.trim().replace(/\n\n/g, " ").replace(/\n/g, " ")
  });
}

console.log(`Found ${approvedSlides.length} approved slides`);

// Update narration-data.js entries
let updatedData = dataFile;
for (const slide of approvedSlides) {
  // Match the entry for this slide id and update its text
  const entryRegex = new RegExp(
    `(\\{ id: "${slide.id}"[^}]*text: )"[^"]*"`,
    "g"
  );
  updatedData = updatedData.replace(entryRegex, `$1"${slide.text.replace(/"/g, "\\\"")}"`);
  
  // Also update duration
  const durationRegex = new RegExp(
    `(\\{ id: "${slide.id}"[^}]*duration: )\\d+`,
    "g"
  );
  updatedData = updatedData.replace(durationRegex, `$1${slide.duration}`);
  
  console.log(`  ✅ ${slide.id}: "${slide.text.substring(0, 50)}..."`);
}

fs.writeFileSync("narration-data.js", updatedData);
console.log("\n✨ narration-data.js updated!");

// Output slide IDs for audio generation
if (process.env.GENERATE_AUDIO === "true") {
  fs.writeFileSync("/tmp/slides-to-generate.json", JSON.stringify(approvedSlides));
}
' 

if $GENERATE_AUDIO; then
  echo ""
  echo "🎙️ Generating audio for approved slides..."
  
  API_KEY=$(cat ~/.config/elevenlabs/api_key)
  VOICE_ID="WQcQveC0hbQNvI69FWyU"
  
  node -e '
  const slides = require("/tmp/slides-to-generate.json");
  const audioIndexMap = {
    "intro": 0, "vero-hook": 1, "vero-target": 2, "entry-point": 3,
    "why-role": 4, "meet-marcus": 5, "linkedin": 6, "resume": 7,
    "background-check": 8, "interview-deepfake": 9, "voice-quiz": 10, "every-stage": 11
  };
  
  for (const slide of slides) {
    const idx = audioIndexMap[slide.id];
    if (idx !== undefined) {
      console.log(JSON.stringify({ idx, id: slide.id, text: slide.text }));
    }
  }
  ' | while read -r line; do
    idx=$(echo "$line" | jq -r '.idx')
    id=$(echo "$line" | jq -r '.id')
    text=$(echo "$line" | jq -r '.text')
    
    echo "  Generating slide-$idx.mp3 ($id)..."
    curl -s -X POST "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
      -H "xi-api-key: $API_KEY" \
      -H "Content-Type: application/json" \
      -d "{\"text\": $(echo "$text" | jq -Rs .), \"model_id\": \"eleven_multilingual_v2\"}" \
      -o "audio/slide-$idx.mp3"
    
    # Also save named version
    printf -v num "%02d" $((idx + 1))
    cp "audio/slide-$idx.mp3" "audio/$num-$id.mp3"
    echo "  ✅ slide-$idx.mp3 / $num-$id.mp3"
  done
  
  echo ""
  echo "🎉 Audio generation complete!"
fi

echo ""
echo "Done! Run with --generate-audio to also regenerate audio files."
