const STORAGE_KEY = "sinnesphysio_state_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { chapters: {} };
    return JSON.parse(raw);
  } catch {
    return { chapters: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getChapterState(chapterId) {
  const state = loadState();
  if (!state.chapters[chapterId]) {
    state.chapters[chapterId] = {
      watched: false,
      mastered: false,
      bestScore: 0,
      lastScore: 0,
      wrongIds: []
    };
    saveState(state);
  }
  return state.chapters[chapterId];
}

function patchChapterState(chapterId, patch) {
  const state = loadState();
  state.chapters[chapterId] = { ...(state.chapters[chapterId] || {}), ...patch };
  saveState(state);
  return state.chapters[chapterId];
}

function qs(name) {
  return new URLSearchParams(location.search).get(name);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[s]));
}
