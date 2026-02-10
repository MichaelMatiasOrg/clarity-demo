#!/bin/bash

# Generate narration audio files from clarity-narration-data.js (single source of truth)
# Requires: node, curl

cd "$(dirname "$0")/.."

API_KEY="sk_6f6bbbcc42bffe9ffb6bc715ac2879c66c2718a37905649a"
OUTPUT_DIR="audio/narration"

mkdir -p "$OUTPUT_DIR"

# Read narration data from clarity-narration-data.js via Node.js
DATA_JSON=$(node -e "
  const vm = require('vm');
  const fs = require('fs');
  const code = fs.readFileSync('js/clarity-narration-data.js', 'utf8');
  const window = {};
  vm.runInNewContext(code, { window });
  const data = window.NarrationData;
  console.log(JSON.stringify({
    voiceId: data.meta.voice.id,
    model: data.meta.voice.model,
    settings: data.meta.voice.settings,
    entries: data.entries.map(e => e.text)
  }));
")

VOICE_ID=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.voiceId)")
MODEL=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.model)")
TOTAL=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.entries.length)")

echo "Voice ID: $VOICE_ID"
echo "Model: $MODEL"
echo "Generating $TOTAL audio files..."

for i in $(seq 0 $((TOTAL - 1))); do
  TEXT=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.entries[$i])")
  OUTPUT_FILE="$OUTPUT_DIR/slide-$i.mp3"

  echo "[$((i+1))/$TOTAL] Generating slide-$i.mp3..."

  # Read voice settings from data
  STABILITY=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.settings.stability)")
  SIM_BOOST=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.settings.similarity_boost)")
  STYLE=$(echo "$DATA_JSON" | node -e "const d=JSON.parse(require('fs').readFileSync('/dev/stdin','utf8')); console.log(d.settings.style)")

  curl -s "https://api.elevenlabs.io/v1/text-to-speech/$VOICE_ID" \
    -H "xi-api-key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"text\": $(echo "$TEXT" | node -e "console.log(JSON.stringify(require('fs').readFileSync('/dev/stdin','utf8').trim()))"),
      \"model_id\": \"$MODEL\",
      \"voice_settings\": {
        \"stability\": $STABILITY,
        \"similarity_boost\": $SIM_BOOST,
        \"style\": $STYLE,
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
