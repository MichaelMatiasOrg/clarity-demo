# Narration Mapping

This file documents the slide-to-narration mapping. Each slide has a unique ID that the narration script references.

## How It Works

1. Each `<section class="slide">` has a unique `data-slide-id` attribute
2. The narration script references slides by ID, not by index
3. If slides are reordered, narration still works correctly

## Slide Mapping

| data-slide-id | Display # | Title | Narration Text | Audio File |
|---------------|-----------|-------|----------------|------------|
| `intro` | 1 | Michael Matias | "I want to show you something important..." | slide-intro.mp3 |
| `vero-hook` | 2 | Last night, I wanted to break into Vero | "Here's the scenario. I want to infiltrate Vero..." | slide-vero-hook.mp3 |
| `vero-target` | 3 | Vero Financial | "Vero is strong. SOC 2 compliant..." | slide-vero-target.mp3 |
| `entry-point` | 4 | They're hiring | "But they're hiring. That's the entry point." | slide-entry-point.mp3 |
| `why-role` | 5 | Platform Infrastructure | "I'm targeting Platform Infrastructure Engineer..." | slide-why-role.mp3 |
| `meet-marcus` | 6 | Meet Marcus Chen | "So I created Marcus Chen..." | slide-meet-marcus.mp3 |
| `linkedin` | 7 | LinkedIn Profile | "His LinkedIn profile has 500 connections..." | slide-linkedin.mp3 |
| `resume` | 8 | Resume | "His resume matches perfectly..." | slide-resume.mp3 |
| `interview-deepfake` | 9 | Marcus aces every round | "Marcus passes four video interviews..." | slide-interview-deepfake.mp3 |
| `voice-quiz` | 9b | Voice Quiz | "The same applies to voice..." | slide-voice-quiz.mp3 |
| `background-check` | 10 | Background Check | "The background check comes back clean..." | slide-background-check.mp3 |
| `every-stage` | 11 | Every stage bypassed | "Every stage of the hiring process — bypassed..." | slide-every-stage.mp3 |
| `already-happening` | 12 | It's already happening | "This isn't hypothetical. It's already happening..." | slide-already-happening.mp3 |
| `scale` | 13 | Creating Marcus took 15 min | "Remember — Marcus took fifteen minutes..." | slide-scale.mp3 |
| `fortune-500` | 14 | Fortune 500 | "This isn't a future problem..." | slide-fortune-500.mp3 |
| `epidemic` | 15 | Hiring fraud epidemic | "The data confirms it. Gartner predicts..." | slide-epidemic.mp3 |
| `hr-attack-surface` | 16 | HR is the attack surface | "HR is the new attack surface..." | slide-hr-attack-surface.mp3 |
| `bad-hire-cost` | 17 | Bad hire cost | "When a bad hire gets through..." | slide-bad-hire-cost.mp3 |
| `malicious` | 18 | What if malicious | "What if they're malicious?..." | slide-malicious.mp3 |
| `clarity-intro` | 19 | End-to-end identity | "Clarity provides end-to-end identity validation..." | slide-clarity-intro.mp3 |
| `pipeline` | 20 | End-to-End Protection | "This is what we built..." | slide-pipeline.mp3 |
| `command-center` | 21 | Command Center | "This is your command center..." | slide-command-center.mp3 |
| `pre-interview` | 22 | Before interview | "Before the interview even starts..." | slide-pre-interview.mp3 |
| `during-interview` | 23 | During interview | "During the interview — real-time detection..." | slide-during-interview.mp3 |
| `continuous` | 24 | Continuous verification | "And protection continues after hiring..." | slide-continuous.mp3 |
| `lifecycle` | 25 | Employee Lifecycle | "The full employee identity lifecycle..." | slide-lifecycle.mp3 |
| `two-pillars` | 26 | Two pillars | "Clarity is built on two pillars..." | slide-two-pillars.mp3 |
| `integrations` | 27 | Integrations | "We integrate into the tools your teams..." | slide-integrations.mp3 |
| `fraud-detection` | 28 | Fraud Detection | "Our multi-layered fraud detection..." | slide-fraud-detection.mp3 |
| `alerts` | 29 | Threat Alerts | "When Clarity detects a threat..." | slide-alerts.mp3 |
| `vs-traditional` | 30 | Why existing solutions fall short | "Traditional solutions have gaps..." | slide-vs-traditional.mp3 |
| `social-proof` | 31 | Trusted by leaders | "Clarity is trusted by industry leaders..." | slide-social-proof.mp3 |
| `closing` | 32 | Closing | "Your people are your greatest asset..." | slide-closing.mp3 |

## Adding a New Slide

1. Add the slide HTML with `data-slide-id="your-id"`
2. Add an entry to the `narrationScript` array in presentation.html
3. Update this mapping table
4. Generate audio: `./generate-narration.sh your-id "Your narration text"`

## Reordering Slides

Just move the HTML. The narration script uses IDs, not positions, so it will still work.
