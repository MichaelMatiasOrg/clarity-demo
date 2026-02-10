// Narration Data — Single source of truth for this presentation's narration
// Used by narration-engine.js and generate_audio.sh (via Node.js)
//
// Entries are ordered to match HTML slide DOM order (data-slide-id).
// audioIndex maps each entry to its source audio file (slide-{audioIndex}.mp3).
// Entries without audioIndex use duration-based timing (no audio file).
window.NarrationData = {
  meta: {
    title: "[Presentation Title]",
    audioPathPattern: "audio/slide-{index}.mp3",
    voice: {
      provider: "elevenlabs",
      id: "JBFqnCBsd6RMkjVDRZzb",
      name: "George",
      model: "eleven_multilingual_v2",
      settings: { stability: 0.5, similarity_boost: 0.75, style: 0.3, use_speaker_boost: true }
    }
  },

  entries: [
    { id: "title", text: "[Narration for title slide]", duration: 5000 },
    { id: "content-1", text: "[Narration for content slide]", duration: 5000 },
    { id: "closing", text: "[Narration for closing slide]", duration: 5000 },
  ]
};
