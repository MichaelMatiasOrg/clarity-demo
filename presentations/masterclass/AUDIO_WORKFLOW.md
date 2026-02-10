# Audio Narration Workflow

## Overview
This document describes the process for generating audio narration from the presentation narrative.

## Roles
- **Michael + Genie:** Collaborate on NARRATIVE.md (core messages per slide)
- **Genie:** Converts narrative to spoken script, generates audio via ElevenLabs, commits to git
- **Michael:** Reviews and approves scripts before audio generation

## Files
- `NARRATIVE.md` - Source of truth for core messages
- `SCRIPT.md` - Spoken scripts for each slide (derived from narrative)
- `audio/` - Generated audio files
- `narration-data.js` - Maps slide IDs to audio files

## Workflow

### Step 1: Finalize Narrative
Edit NARRATIVE.md with the core message for each slide.

### Step 2: Generate Script
Genie creates SCRIPT.md with natural spoken text for each slide:
```markdown
### Slide: vero-hook
**Duration:** ~10 seconds
**Script:**
"Last night, I wanted to break into Vero Financial. Let me show you how I did it."
```

### Step 3: Review Script
Michael reviews SCRIPT.md and provides feedback. Iterate until approved.

### Step 4: Generate Audio
Genie runs each script through ElevenLabs:
- **Voice:** Chad (WQcQveC0hbQNvI69FWyU)
- **Model:** eleven_multilingual_v2
- **Output:** MP3 files in `audio/` folder

### Step 5: Commit & Push
Genie commits audio files to git:
```
audio/
├── 01-intro.mp3
├── 02-vero-hook.mp3
├── 03-vero-target.mp3
└── ...
```

### Step 6: Update narration-data.js
Map slide IDs to audio files so the presentation can play them.

## Voice Settings
- **Voice ID:** WQcQveC0hbQNvI69FWyU (Chad)
- **Style:** Professional, confident, clear
- **Pacing:** Measured, with pauses for emphasis

## Naming Convention
Audio files: `{##}-{slide-id}.mp3`
- `01-intro.mp3`
- `02-vero-hook.mp3`
- etc.

## When to Regenerate
- When NARRATIVE.md core message changes
- When SCRIPT.md text is edited
- Mark changed slides in SCRIPT.md with `[NEEDS AUDIO]`
