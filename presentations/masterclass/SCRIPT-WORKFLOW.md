# Script Building Workflow
## How Michael & Genie Collaborate on Narration Scripts

*Last updated: 2026-02-11*

---

## Overview

We build narration scripts slide-by-slide for the Clarity masterclass presentation. Michael reviews and approves each script before audio generation.

## Files

| File | Purpose |
|------|---------|
| `SCRIPT.md` | **Source of truth** — All approved scripts live here |
| `NARRATIVE.md` | High-level story structure and core messages per slide |
| `narration-data.js` | Technical file that the presentation reads (synced from SCRIPT.md) |
| `audio/` | Generated MP3 files |
| `sync-scripts.sh` | Script to sync SCRIPT.md → narration-data.js and optionally generate audio |

## Workflow

### 1. Review Slide Content
- Genie shows Michael the slide (screenshot or description)
- Identifies the core message from NARRATIVE.md

### 2. Draft Script
- Genie proposes a script for narration
- Format:
  ```
  ### Slide N: slide-id
  **Core message:** What this slide communicates
  **Duration:** ~X seconds
  **Script:**
  \```
  The actual narration text.
  Written as spoken word.
  \```
  **Status:** [ ] Needs approval
  ```

### 3. Michael Reviews
- Michael approves, tweaks, or rejects
- Feedback is usually quick and specific
- Once approved, status changes to `[x] Approved`

### 4. Batch Processing
- We typically work in batches (e.g., slides 7-12)
- Once a batch is approved, Genie:
  1. Updates SCRIPT.md with approved scripts
  2. Runs `./sync-scripts.sh` to update narration-data.js
  3. Generates audio via ElevenLabs API
  4. Commits and pushes to GitHub

### 5. Audio Generation
Voice: **Chad** (ElevenLabs ID: `WQcQveC0hbQNvI69FWyU`)
Model: `eleven_multilingual_v2`

```bash
# Sync scripts only
./sync-scripts.sh

# Sync AND regenerate audio
./sync-scripts.sh --generate-audio

# Or manually via curl:
API_KEY=$(cat ~/.config/elevenlabs/api_key)
curl -X POST "https://api.elevenlabs.io/v1/text-to-speech/WQcQveC0hbQNvI69FWyU" \
  -H "xi-api-key: $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"text": "Script text here", "model_id": "eleven_multilingual_v2"}' \
  -o "audio/slide-N.mp3"
```

## Style Guidelines

### Script Writing
- **Conversational but authoritative** — Michael is presenting to CISOs
- **Short sentences** — Easier to deliver, more impactful
- **Pauses matter** — Line breaks indicate natural pauses
- **Numbers spoken out** — "four point two billion" not "$4.2B"
- **No filler** — Skip "I'd like to" or "Let me tell you about"

### Michael's Preferences
- **Story-first** — WHY → WHAT → HOW
- **Realistic details** — Job descriptions should look real, not call out "access to API keys"
- **Keep it tight** — Each slide should have ONE key message
- **Implied not explicit** — Let the audience connect dots (e.g., job responsibilities imply access)

## Example Iteration

**Genie proposes:**
```
Traditional checks look for bad records. They don't verify the identity exists.
```

**Michael feedback:**
> "We can say traditional checks look for bad records. Criminal history. Employment disputes. They don't verify the identity actually exists. Fake identities don't have bad records."

**Genie updates:**
```
Background check? All clear.

Traditional checks look for bad records. Criminal history. Employment disputes.

They don't verify the identity actually exists. And fake identities don't have bad records.
```

## Current Progress

- **Act 1 (slides 1-12):** ✅ Complete — scripts approved, audio generated
- **Act 2 (slides 13-16):** 🔄 In progress
- **Act 3-5:** ⏳ Pending

## Related Files

- Vero Financial mockups: `mockups/vero-*.html`
- Screenshots: `assets/vero/`
- Brand guidelines: `../../docs/BRAND.md`
- Vero website repo: `~/clawd/repos/verofintech-demo/`

## Important: Visual Changes

**When script changes require visual updates, always provide Claude Code prompts for Michael.**

Format:
```
**Claude Code Prompt:**

**File:** `path/to/file.html`

**Slide:** `data-slide-id="slide-name"`

**Change:** [Describe what to change]

**Details:** [Specific implementation notes]
```

For assets (images, logos):
1. Genie finds and downloads the assets first
2. Commit them to the repo
3. Claude Code prompt references the local paths
