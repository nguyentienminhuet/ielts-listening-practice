/**
 * IELTS Listening Practice - Band 5.0-6.0
 * Multi-Unit Single Page Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Registry of all available units
  const unitsData = (typeof unitsRegistry !== 'undefined') ? unitsRegistry : {
    unit2: {
      id: 'unit2',
      unitNum: 2,
      title: 'Unit 2: Form / Note / Table Completion',
      shortTitle: 'Unit 2: Form/Note Completion',
      type: 'completion',
      description: 'Luyện tập dạng bài điền từ vào biểu mẫu, ghi chú và bảng thông tin (20 bài).',
      badge: 'Band 5.0 - 6.0',
      tracksCount: (typeof unit2Data !== 'undefined') ? unit2Data.length : 0,
      tracks: (typeof unit2Data !== 'undefined') ? unit2Data : []
    }
  };

  // Determine initial Unit ID from localStorage or default to 'unit1'
  let initialUnitId = 'unit1';
  try {
    const savedUnitId = localStorage.getItem('ielts_current_unit');
    if (savedUnitId && unitsData[savedUnitId]) {
      initialUnitId = savedUnitId;
    }
  } catch (e) {
    console.warn('Could not read saved unit:', e);
  }

  // Application State
  const state = {
    units: unitsData,
    currentUnitId: initialUnitId,
    tracks: unitsData[initialUnitId] ? unitsData[initialUnitId].tracks : [],
    currentIndex: 0,
    userAnswers: {}, // { [trackId]: { [qId]: string } }
    submissions: {}, // { [trackId]: { submitted: boolean, score: number, total: number, details: {} } }
    activeTab: 'exercise', // 'exercise' | 'review' | 'vocab'
    viewMode: 'hub', // 'hub' (initial unit menu) | 'workspace' (active practice)
    hubFilter: 'all', // 'all' | 'foundation' | 'maps_mcq' | 'advanced'
    bilingual: true,
    vocabSearch: '',
    audioSpeed: 1.0,
    audioMuted: false,
    audioVolume: 0.9,
    storagePrefix: 'ielts_listening_unit_'
  };

  // DOM Elements
  const el = {
    // Header & Navigation to Hub
    headerSubtitle: document.getElementById('headerSubtitle'),
    btnBackToMenu: document.getElementById('btnBackToMenu'),
    mobileBtnBackToMenu: document.getElementById('mobileBtnBackToMenu'),
    mobileUnitOptionsList: document.getElementById('mobileUnitOptionsList'),

    // Unit Hub Landing View
    unitHubSection: document.getElementById('unitHubSection'),
    practiceWorkspaceSection: document.getElementById('practiceWorkspaceSection'),
    unitHubCardsGrid: document.getElementById('unitHubCardsGrid'),
    hubOverallTracksDone: document.getElementById('hubOverallTracksDone'),
    hubOverallProgressBar: document.getElementById('hubOverallProgressBar'),
    hubFilterButtons: document.querySelectorAll('.hub-filter-btn'),


    // Sidebar & Navigation
    sidebarUnitTitle: document.getElementById('sidebarUnitTitle'),
    sidebarTrackCount: document.getElementById('sidebarTrackCount'),
    trackNavList: document.getElementById('trackNavList'),
    mobileTrackNavList: document.getElementById('mobileTrackNavList'),
    mobileSidebarUnitTitle: document.getElementById('mobileSidebarUnitTitle'),
    prevTrackBtn: document.getElementById('prevTrackBtn'),
    nextTrackBtn: document.getElementById('nextTrackBtn'),
    currentTrackTitle: document.getElementById('currentTrackTitle'),
    currentTrackBadge: document.getElementById('currentTrackBadge'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    sidebarDrawer: document.getElementById('sidebarDrawer'),
    closeSidebarBtn: document.getElementById('closeSidebarBtn'),

    // Audio Player
    stickyAudioBar: document.getElementById('stickyAudioBar'),
    audioElement: document.getElementById('audioElement'),
    playPauseBtn: document.getElementById('playPauseBtn'),
    playPauseIcon: document.getElementById('playPauseIcon'),
    soundWave: document.getElementById('soundWave'),
    seekBackwardBtn: document.getElementById('seekBackwardBtn'),
    seekForwardBtn: document.getElementById('seekForwardBtn'),
    audioProgress: document.getElementById('audioProgress'),
    audioCurrentTime: document.getElementById('audioCurrentTime'),
    audioDuration: document.getElementById('audioDuration'),
    speedButtons: document.querySelectorAll('.speed-btn'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumeBtn: document.getElementById('volumeBtn'),
    volumeIcon: document.getElementById('volumeIcon'),
    playerTrackTitle: document.getElementById('playerTrackTitle'),
    shortcutsBtn: document.getElementById('shortcutsBtn'),

    // Shortcuts Modal
    shortcutsModal: document.getElementById('shortcutsModal'),
    closeShortcutsModalBtn: document.getElementById('closeShortcutsModalBtn'),
    understoodShortcutsBtn: document.getElementById('understoodShortcutsBtn'),

    // Tabs
    tabExerciseBtn: document.getElementById('tabExerciseBtn'),
    tabReviewBtn: document.getElementById('tabReviewBtn'),
    tabVocabBtn: document.getElementById('tabVocabBtn'),
    tabExerciseContent: document.getElementById('tabExerciseContent'),
    tabReviewContent: document.getElementById('tabReviewContent'),
    tabVocabContent: document.getElementById('tabVocabContent'),

    // Exercise Workspace
    exerciseHeader: document.getElementById('exerciseHeader'),
    exerciseInstructionBox: document.getElementById('exerciseInstructionBox'),
    exerciseFormContainer: document.getElementById('exerciseFormContainer'),
    filledCounter: document.getElementById('filledCounter'),
    submitBtn: document.getElementById('submitBtn'),
    resetBtn: document.getElementById('resetBtn'),
    resetUnitBtn: document.getElementById('resetUnitBtn'),
    reviewShortcutBtn: document.getElementById('reviewShortcutBtn'),
    scoreBanner: document.getElementById('scoreBanner'),

    // Review Tab
    transcriptContainer: document.getElementById('transcriptContainer'),
    bilingualToggleBtn: document.getElementById('bilingualToggleBtn'),
    bilingualStatusText: document.getElementById('bilingualStatusText'),

    // Vocabulary Tab
    vocabCountBadge: document.getElementById('vocabCountBadge'),
    vocabSearchInput: document.getElementById('vocabSearchInput'),
    vocabListContainer: document.getElementById('vocabListContainer')
  };

  // Helper storage key for current unit
  function getUnitStorageKey(unitId) {
    return state.storagePrefix + unitId;
  }

  // Load Persisted State from LocalStorage
  function loadPersistedState() {
    try {
      const key = getUnitStorageKey(state.currentUnitId);
      let raw = localStorage.getItem(key);

      // Backward compatibility for unit 2 legacy key
      if (!raw && state.currentUnitId === 'unit2') {
        raw = localStorage.getItem('ielts_listening_unit2_v1');
      }

      state.userAnswers = {};
      state.submissions = {};
      state.currentIndex = 0;

      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.userAnswers) state.userAnswers = saved.userAnswers;
        if (saved.submissions) state.submissions = saved.submissions;
        if (typeof saved.lastIndex === 'number' && saved.lastIndex >= 0 && saved.lastIndex < state.tracks.length) {
          state.currentIndex = saved.lastIndex;
        }
      }
    } catch (e) {
      console.warn('Could not load localStorage state:', e);
    }
  }

  function savePersistedState() {
    try {
      const key = getUnitStorageKey(state.currentUnitId);
      const dataToSave = {
        userAnswers: state.userAnswers,
        submissions: state.submissions,
        lastIndex: state.currentIndex
      };
      localStorage.setItem(key, JSON.stringify(dataToSave));
      localStorage.setItem('ielts_current_unit', state.currentUnitId);
      updateOverallProgress();
    } catch (e) {
      console.warn('Could not save localStorage state:', e);
    }
  }

  // Switch Active Unit
  function switchUnit(newUnitId) {
    if (!state.units[newUnitId] || newUnitId === state.currentUnitId) return;

    // Save existing unit state before switching
    savePersistedState();

    // Switch unit in state
    state.currentUnitId = newUnitId;
    state.tracks = state.units[newUnitId].tracks || [];

    // Load new unit's answers and index
    loadPersistedState();

    // Pause audio
    if (el.audioElement) {
      el.audioElement.pause();
      updatePlayPauseUI(false);
    }

    // Update Unit Selector & Navigation
    updateUnitSelectorUI();
    updateOverallProgress();
    loadCurrentTrack();

    // Close Mobile Drawer if open
    if (el.sidebarDrawer && !el.sidebarDrawer.classList.contains('hidden')) {
      el.sidebarDrawer.classList.add('hidden');
    }
  }

  // Unit Classification for Filtering in Hub
  const unitCategories = {
    unit1: 'foundation',
    unit2: 'foundation',
    unit3: 'foundation',
    unit4: 'foundation',
    unit5: 'foundation',
    unit6: 'maps_mcq',
    unit7: 'maps_mcq',
    unit8: 'maps_mcq',
    unit9: 'advanced',
    unit10: 'advanced'
  };

  // Helper to read saved submissions of any unit
  function getUnitSavedSubmissions(unitId) {
    try {
      const key = state.storagePrefix + unitId;
      let raw = localStorage.getItem(key);
      if (!raw && unitId === 'unit2') {
        raw = localStorage.getItem('ielts_listening_unit2_v1');
      }
      if (raw) {
        const parsed = JSON.parse(raw);
        return parsed.submissions || {};
      }
    } catch (e) {
      console.warn('Error reading unit submissions:', unitId, e);
    }
    return {};
  }

  // Render the Unit Selection Hub Screen
  function renderUnitHub(filterCategory = state.hubFilter) {
    if (!el.unitHubCardsGrid) return;
    state.hubFilter = filterCategory;

    // Update filter buttons
    if (el.hubFilterButtons) {
      el.hubFilterButtons.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === filterCategory) {
          btn.className = 'hub-filter-btn active px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-blue-700 text-white shadow-xs cursor-pointer';
        } else {
          btn.className = 'hub-filter-btn px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-white hover:bg-slate-100 text-slate-700 border border-[#ded5c4] cursor-pointer';
        }
      });
    }

    let totalTracksAllUnits = 0;
    let totalCompletedAllUnits = 0;

    const cardsHtml = Object.values(state.units).map(u => {
      totalTracksAllUnits += u.tracksCount;
      const category = unitCategories[u.id] || 'foundation';
      const isVisible = filterCategory === 'all' || category === filterCategory;

      // Completed tracks
      const unitSubs = getUnitSavedSubmissions(u.id);
      let completedInUnit = 0;
      u.tracks.forEach(t => {
        if (unitSubs[t.id] && unitSubs[t.id].submitted) completedInUnit++;
      });
      totalCompletedAllUnits += completedInUnit;

      const percent = u.tracksCount > 0 ? Math.round((completedInUnit / u.tracksCount) * 100) : 0;
      const isStarted = completedInUnit > 0;
      const isDone = completedInUnit === u.tracksCount;

      // Count questions
      let totalQ = 0;
      u.tracks.forEach(t => { totalQ += (t.questions ? t.questions.length : 0); });

      // Color scheme
      const colorSchemes = {
        1: { border: 'hover:border-blue-400', badgeBg: 'bg-blue-600', text: 'text-blue-700', bgSoft: 'bg-blue-50' },
        2: { border: 'hover:border-emerald-400', badgeBg: 'bg-emerald-600', text: 'text-emerald-700', bgSoft: 'bg-emerald-50' },
        3: { border: 'hover:border-cyan-400', badgeBg: 'bg-cyan-600', text: 'text-cyan-700', bgSoft: 'bg-cyan-50' },
        4: { border: 'hover:border-teal-400', badgeBg: 'bg-teal-600', text: 'text-teal-700', bgSoft: 'bg-teal-50' },
        5: { border: 'hover:border-indigo-400', badgeBg: 'bg-indigo-600', text: 'text-indigo-700', bgSoft: 'bg-indigo-50' },
        6: { border: 'hover:border-amber-400', badgeBg: 'bg-amber-600', text: 'text-amber-700', bgSoft: 'bg-amber-50' },
        7: { border: 'hover:border-orange-400', badgeBg: 'bg-orange-600', text: 'text-orange-700', bgSoft: 'bg-orange-50' },
        8: { border: 'hover:border-purple-400', badgeBg: 'bg-purple-600', text: 'text-purple-700', bgSoft: 'bg-purple-50' },
        9: { border: 'hover:border-violet-400', badgeBg: 'bg-violet-600', text: 'text-violet-700', bgSoft: 'bg-violet-50' },
        10: { border: 'hover:border-rose-400', badgeBg: 'bg-rose-600', text: 'text-rose-700', bgSoft: 'bg-rose-50' }
      };
      const scheme = colorSchemes[u.unitNum] || colorSchemes[1];

      return `
        <div class="unit-hub-card ${isVisible ? '' : 'hidden'} bg-white rounded-2xl border border-[#ded5c4] ${scheme.border} p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer group" onclick="selectAndEnterUnit('${u.id}')">
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-xl ${scheme.badgeBg} text-white flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform shrink-0">
                  U${u.unitNum}
                </div>
                <div>
                  <span class="inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ${scheme.bgSoft} ${scheme.text} border border-current/20 mb-1">
                    ${u.badge || 'Band 5.0 - 6.0'}
                  </span>
                  <h3 class="font-extrabold text-base text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    ${u.shortTitle || u.title}
                  </h3>
                </div>
              </div>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
              ${u.description}
            </p>
          </div>

          <div class="pt-3 border-t border-[#ede5d5] mt-auto">
            <div class="flex items-center justify-between text-xs font-semibold text-slate-600 mb-1.5">
              <span>${u.tracksCount} bài nghe • ${totalQ} câu hỏi</span>
              <span class="${isDone ? 'text-emerald-700 font-bold' : isStarted ? 'text-blue-700 font-bold' : 'text-slate-400'}">
                ${completedInUnit}/${u.tracksCount} bài (${percent}%)
              </span>
            </div>

            <div class="w-full h-2 bg-[#f0ece1] rounded-full overflow-hidden mb-3.5">
              <div class="h-full rounded-full transition-all duration-300 ${isDone ? 'bg-emerald-600' : 'bg-blue-600'}" style="width: ${percent}%;"></div>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-[11px] font-medium text-slate-500">
                ${isDone ? '✅ Đã hoàn thành' : isStarted ? '🔄 Đang học dở' : '⚪ Chưa bắt đầu'}
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-700 text-white group-hover:bg-blue-800 text-xs font-bold transition shadow-xs">
                ${isStarted ? 'Tiếp tục học' : 'Vào học ngay'}
                <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    el.unitHubCardsGrid.innerHTML = cardsHtml;

    // Update Overall Hub stats
    const totalPercent = totalTracksAllUnits > 0 ? Math.round((totalCompletedAllUnits / totalTracksAllUnits) * 100) : 0;
    if (el.hubOverallTracksDone) {
      el.hubOverallTracksDone.textContent = `${totalCompletedAllUnits}/${totalTracksAllUnits} Tracks (${totalPercent}%)`;
    }
    if (el.hubOverallProgressBar) {
      el.hubOverallProgressBar.style.width = `${totalPercent}%`;
    }
  }

  // Switch to Unit Hub Screen
  function showUnitHub() {
    state.viewMode = 'hub';
    if (el.unitHubSection) el.unitHubSection.classList.remove('hidden');
    if (el.practiceWorkspaceSection) el.practiceWorkspaceSection.classList.add('hidden');
    if (el.stickyAudioBar) el.stickyAudioBar.classList.add('hidden');
    if (el.btnBackToMenu) el.btnBackToMenu.classList.add('hidden');

    if (el.audioElement) {
      el.audioElement.pause();
      updatePlayPauseUI(false);
    }

    document.title = 'Lộ Trình Tự Học IELTS Listening - 10 Units (Tracks 1 - 100)';
    if (el.headerSubtitle) {
      el.headerSubtitle.textContent = 'Trọn bộ 10 Units • 100 Tracks luyện nghe Band 5.0 - 7.0';
    }

    renderUnitHub();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Choose a Unit from Hub and enter practice workspace
  window.selectAndEnterUnit = function(unitId) {
    if (!state.units[unitId]) return;

    if (unitId !== state.currentUnitId) {
      switchUnit(unitId);
    }

    state.viewMode = 'workspace';
    if (el.unitHubSection) el.unitHubSection.classList.add('hidden');
    if (el.practiceWorkspaceSection) el.practiceWorkspaceSection.classList.remove('hidden');
    if (el.stickyAudioBar) el.stickyAudioBar.classList.remove('hidden');
    if (el.btnBackToMenu) el.btnBackToMenu.classList.remove('hidden');

    loadCurrentTrack();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render & Update Unit UI (Titles, Progress labels, Mobile Switcher)
  function updateUnitSelectorUI() {
    const currentUnit = state.units[state.currentUnitId];
    if (!currentUnit) return;

    // Update Header Subtitle
    if (el.headerSubtitle) {
      el.headerSubtitle.textContent = currentUnit.title;
    }


    // Update Sidebar Titles
    if (el.sidebarUnitTitle) {
      el.sidebarUnitTitle.textContent = `Mục Lục Unit ${currentUnit.unitNum}`;
    }
    if (el.sidebarTrackCount) {
      el.sidebarTrackCount.textContent = `${state.tracks.length} Tracks`;
    }
    if (el.mobileSidebarUnitTitle) {
      el.mobileSidebarUnitTitle.textContent = `Unit ${currentUnit.unitNum} - Chọn Bài`;
    }

    // Render Mobile Drawer Unit Switcher Buttons
    if (el.mobileUnitOptionsList) {
      el.mobileUnitOptionsList.innerHTML = '';
      Object.values(state.units).forEach(u => {
        const isActive = u.id === state.currentUnitId;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `p-2 rounded-xl text-center border font-bold text-xs transition-all ${
          isActive
            ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
            : 'bg-white text-slate-700 border-[#ded5c4] hover:bg-[#faf7f0]'
        }`;
        btn.onclick = () => {
          switchUnit(u.id);
          if (el.sidebarDrawer) el.sidebarDrawer.classList.add('hidden');
        };
        btn.innerHTML = `
          <div class="font-black text-sm">Unit ${u.unitNum}</div>
          <div class="text-[10px] opacity-80 truncate">${u.tracksCount} bài</div>
        `;
        el.mobileUnitOptionsList.appendChild(btn);
      });
    }
  }

  // Update Overall Header Progress
  function updateOverallProgress() {
    let completedCount = 0;
    let totalScore = 0;
    let totalQuestions = 0;

    state.tracks.forEach(track => {
      const sub = state.submissions[track.id];
      if (sub && sub.submitted) {
        completedCount++;
        totalScore += sub.score;
        totalQuestions += sub.total;
      }
    });

    const percent = state.tracks.length > 0 ? Math.round((completedCount / state.tracks.length) * 100) : 0;
    if (el.overallProgressBadge) {
      el.overallProgressBadge.textContent = `${completedCount}/${state.tracks.length} Tracks (${percent}%)`;
    }
    if (el.overallProgressBar) {
      el.overallProgressBar.style.width = `${percent}%`;
    }
  }

  // Smart Answer Matching Engine
  const numberWords = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine',
    '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen',
    '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen',
    '18': 'eighteen', '19': 'nineteen', '20': 'twenty'
  };
  const wordNumbers = Object.entries(numberWords).reduce((acc, [k, v]) => { acc[v] = k; return acc; }, {});

  function normalizeAnswer(str) {
    if (!str) return '';
    let s = str.toLowerCase().trim();
    // Normalize currency symbols
    s = s.replace(/[$£€]/g, '');
    // Normalize spaces and hyphens
    s = s.replace(/[-_]/g, ' ');
    s = s.replace(/[,;:]/g, ' ');
    s = s.replace(/\s+/g, ' ').trim();
    return s;
  }

  function generateVariations(text) {
    const list = new Set();
    const base = normalizeAnswer(text);
    if (!base) return [];

    list.add(base);

    // Expand slash alternatives: "1/one" -> ["1", "one"]
    if (base.includes('/')) {
      base.split('/').forEach(p => {
        const norm = normalizeAnswer(p);
        if (norm) list.add(norm);
      });
    }

    // Expand parentheses: "(the) animals" -> ["animals", "the animals"]
    const parenMatch = text.match(/\((.*?)\)/);
    if (parenMatch) {
      const withParen = text.replace(/[()]/g, '');
      const withoutParen = text.replace(/\(.*?\)/g, '');
      list.add(normalizeAnswer(withParen));
      list.add(normalizeAnswer(withoutParen));
    }

    // Handle numbers & words
    Object.entries(numberWords).forEach(([num, word]) => {
      const regexNum = new RegExp(`\\b${num}\\b`, 'g');
      if (regexNum.test(base)) {
        list.add(base.replace(regexNum, word));
      }
      const regexWord = new RegExp(`\\b${word}\\b`, 'g');
      if (regexWord.test(base)) {
        list.add(base.replace(regexWord, num));
      }
    });

    // Handle digits with spaces removed for phone, codes, thousands
    const noSpace = base.replace(/\s+/g, '');
    if (noSpace) {
      list.add(noSpace);
    }

    // Handle date variations: "15th march", "15 march", "march 15", "march 15th"
    const dateMatch = base.match(/^(\d{1,2}(?:st|nd|rd|th)?)\s+([a-z]+)$/) || base.match(/^([a-z]+)\s+(\d{1,2}(?:st|nd|rd|th)?)$/);
    if (dateMatch) {
      const p1 = dateMatch[1].toLowerCase();
      const p2 = dateMatch[2].toLowerCase();
      let day, month;
      if (/^\d+/.test(p1)) {
        day = p1.replace(/\D/g, '');
        month = p2;
      } else {
        day = p2.replace(/\D/g, '');
        month = p1;
      }
      const dayNum = parseInt(day, 10);
      const suffixes = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };
      const suf = suffixes[dayNum] || 'th';
      list.add(`${dayNum} ${month}`);
      list.add(`${dayNum}${suf} ${month}`);
      list.add(`${month} ${dayNum}`);
      list.add(`${month} ${dayNum}${suf}`);
    }

    // Handle time variations: "3.30" vs "3:30"
    if (base.includes('.') && /\d+\.\d+/.test(base)) {
      list.add(base.replace(/\./g, ':'));
    }
    if (base.includes(':') && /\d+:\d+/.test(base)) {
      list.add(base.replace(/:/g, '.'));
    }

    return Array.from(list).filter(Boolean);
  }

  function checkAnswerMatch(userVal, acceptableAnswers) {
    if (!userVal) return false;
    const normUser = normalizeAnswer(userVal);
    if (!normUser) return false;
    const normUserNoSpace = normUser.replace(/\s+/g, '');

    // Check directly or through variations
    for (const rawAns of acceptableAnswers) {
      const variations = generateVariations(rawAns);
      for (const v of variations) {
        if (normUser === v) return true;
        // Check without spaces for phone/postcode/large numbers
        const vNoSpace = v.replace(/\s+/g, '');
        if (normUserNoSpace === vNoSpace) return true;
      }
    }
    return false;
  }

  // Load Track Data into UI
  function loadCurrentTrack() {
    const track = state.tracks[state.currentIndex];
    if (!track) return;

    // Save index
    savePersistedState();

    // Reset Audio & Set Fallback Handler
    el.audioElement.pause();
    el.audioElement.onerror = () => {
      if (track && track.audioFallbackSrc && el.audioElement.src !== track.audioFallbackSrc) {
        console.warn('Primary audio failed, switching to fallback:', track.audioFallbackSrc);
        el.audioElement.src = track.audioFallbackSrc;
        el.audioElement.load();
      } else if (el.playerTrackTitle) {
        el.playerTrackTitle.textContent = `${track.title} (⚠️ Lỗi tải file âm thanh)`;
      }
    };
    el.audioElement.src = track.audioSrc;
    el.audioElement.playbackRate = state.audioSpeed;
    el.audioElement.load();
    updatePlayPauseUI(false);
    el.audioProgress.value = 0;
    el.audioCurrentTime.textContent = '00:00';
    el.audioDuration.textContent = '--:--';
    if (el.playerTrackTitle) {
      el.playerTrackTitle.textContent = track.title;
    }

    // Header info & Dynamic Page Title
    const currentUnit = state.units[state.currentUnitId];
    if (currentUnit) {
      document.title = `${currentUnit.shortTitle || currentUnit.title} • Track ${track.trackNum} | IELTS Listening Practice`;
    }
    if (el.currentTrackTitle) {
      el.currentTrackTitle.textContent = track.title;
    }
    if (el.currentTrackBadge) {
      const unitLabel = currentUnit ? (currentUnit.shortTitle ? currentUnit.shortTitle.split(':')[0] : `Unit ${currentUnit.unitNum}`) : 'Unit';
      el.currentTrackBadge.textContent = `${unitLabel} • Track ${track.trackNum} (${state.currentIndex + 1}/${state.tracks.length})`;
    }

    // Render Navigation List
    renderTrackNavigation();

    // Render Exercise View
    renderExercise(track);

    // Render Transcript & Review
    renderTranscript(track);

    // Render Vocabulary
    renderVocabulary(track);

    // Render Score banner if already submitted
    const sub = state.submissions[track.id];
    if (sub && sub.submitted) {
      showScoreBanner(sub.score, sub.total);
    } else {
      hideScoreBanner();
    }

    // Switch to active tab
    switchTab(state.activeTab);
  }

  // Render Track Navigation (Both Desktop Sidebar and Mobile Drawer)
  function renderTrackNavigation() {
    const containers = [el.trackNavList, el.mobileTrackNavList].filter(Boolean);
    containers.forEach(container => {
      container.innerHTML = '';
      state.tracks.forEach((track, idx) => {
        const isActive = idx === state.currentIndex;
        const sub = state.submissions[track.id];
        const isCompleted = sub && sub.submitted;

        const item = document.createElement('button');
        item.type = 'button';
        item.className = `w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between border ${
          isActive
            ? 'bg-blue-700 text-white border-blue-700 shadow-md shadow-blue-900/10'
            : 'bg-[#fdfbf7] hover:bg-[#f5f1e8] text-slate-700 border-[#e2ddd3] hover:border-[#d2cab9]'
        }`;

        item.onclick = () => {
          state.currentIndex = idx;
          loadCurrentTrack();
          if (el.sidebarDrawer && !el.sidebarDrawer.classList.contains('hidden')) {
            el.sidebarDrawer.classList.add('hidden');
          }
        };

        const titleDiv = document.createElement('div');
        titleDiv.className = 'flex items-center gap-2.5 truncate';

        const icon = document.createElement('span');
        icon.className = `w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
          isActive
            ? 'bg-white/20 text-white'
            : isCompleted
            ? 'bg-emerald-100 text-emerald-700'
            : 'bg-slate-100 text-slate-500'
        }`;
        icon.textContent = track.trackNum;

        const nameSpan = document.createElement('span');
        nameSpan.className = 'font-semibold text-sm truncate';
        nameSpan.textContent = track.title.replace(`Track ${track.trackNum}: `, '');

        titleDiv.appendChild(icon);
        titleDiv.appendChild(nameSpan);

        const statusBadge = document.createElement('div');
        statusBadge.className = 'shrink-0 ml-2';

        if (isCompleted) {
          const scorePercent = Math.round((sub.score / sub.total) * 100);
          statusBadge.innerHTML = `
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
              isActive
                ? 'bg-white/20 text-white'
                : scorePercent >= 80
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-amber-100 text-amber-800'
            }">
              ${sub.score}/${sub.total}
            </span>
          `;
        } else {
          statusBadge.innerHTML = `
            <span class="inline-block w-2 h-2 rounded-full ${isActive ? 'bg-white/60' : 'bg-slate-300'}"></span>
          `;
        }

        item.appendChild(titleDiv);
        item.appendChild(statusBadge);
        container.appendChild(item);
      });
    });

    // Update prev/next buttons
    if (el.prevTrackBtn) el.prevTrackBtn.disabled = state.currentIndex === 0;
    if (el.nextTrackBtn) el.nextTrackBtn.disabled = state.currentIndex === state.tracks.length - 1;
  }

  // Render Exercise Form
  function renderExercise(track) {
    if (!el.exerciseInstructionBox || !el.exerciseFormContainer) return;

    // Type Badge formatting
    let typeBadgeLabel = 'COMPLETION';
    if (track.type === 'short-answer') {
      typeBadgeLabel = 'SHORT ANSWER';
    } else if (track.type === 'gap-filling') {
      typeBadgeLabel = 'GAP-FILLING';
    } else if (track.type === 'map-labelling') {
      typeBadgeLabel = 'MAP LABELLING';
    } else if (track.type === 'multiple-choice') {
      typeBadgeLabel = 'MULTIPLE CHOICE';
    } else if (track.type === 'matching') {
      typeBadgeLabel = 'MATCHING';
    } else if (track.type === 'diagram-labelling') {
      typeBadgeLabel = 'DIAGRAM LABELLING';
    } else if (track.type === 'flow-chart') {
      typeBadgeLabel = 'FLOW-CHART';
    } else if (track.type === 'summary') {
      typeBadgeLabel = 'SUMMARY COMPLETION';
    } else if (track.type === 'note-completion') {
      typeBadgeLabel = 'NOTE COMPLETION';
    } else if (track.type) {
      typeBadgeLabel = track.type.replace(/-/g, ' ').toUpperCase();
    }

    // Instructions
    el.exerciseInstructionBox.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="flex-1">
          <div class="flex flex-wrap items-center gap-2 mb-1">
            <span class="font-bold text-slate-800 text-base">${track.exerciseTitle || track.title}</span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">${typeBadgeLabel}</span>
          </div>
          <p class="text-slate-600 font-medium text-sm leading-relaxed">${track.instructions}</p>
        </div>
      </div>
    `;

    // Retrieve saved user answers and submission
    const currentSavedAnswers = state.userAnswers[track.id] || {};
    const sub = state.submissions[track.id];
    const isSubmitted = sub && sub.submitted;

    // Process layout HTML and replace {{input_X}} with interactive input element
    let htmlContent = track.layoutHtml;

    track.questions.forEach(q => {
      const userVal = currentSavedAnswers[q.id] || '';
      const isCorrect = isSubmitted && sub.details && sub.details[q.id] ? sub.details[q.id].isCorrect : null;

      let inputClass = 'ielts-input';
      if (isSubmitted) {
        inputClass += isCorrect ? ' correct' : ' incorrect';
      }

      const inputMarkup = `
        <span class="inline-flex flex-col relative my-1">
          <span class="inline-flex items-center relative">
            <input
              type="text"
              id="input_${track.id}_${q.id}"
              data-q="${q.id}"
              class="${inputClass}"
              placeholder="[${q.id}]"
              value="${escapeHtml(userVal)}"
              autocomplete="off"
              spellcheck="false"
              ${isSubmitted ? 'readonly' : ''}
            />
            ${
              isSubmitted
                ? isCorrect
                  ? `<span class="ml-1.5 text-emerald-600 font-bold" title="Chính xác">✓</span>`
                  : `<span class="ml-1.5 text-rose-600 font-bold" title="Chưa đúng">✗</span>`
                : ''
            }
          </span>
          ${
            isSubmitted && !isCorrect
              ? `<span class="answer-correction">Đáp án đúng: <strong>${escapeHtml(q.acceptableAnswers[0])}</strong></span>`
              : ''
          }
        </span>
      `;

      htmlContent = htmlContent.replace(new RegExp(`\\{\\{input_${q.id}\\}\\}`, 'g'), inputMarkup);
    });

    el.exerciseFormContainer.innerHTML = htmlContent;

    // Attach listeners to newly created input fields
    const inputs = el.exerciseFormContainer.querySelectorAll('input[data-q]');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const qId = e.target.getAttribute('data-q');
        if (!state.userAnswers[track.id]) {
          state.userAnswers[track.id] = {};
        }
        state.userAnswers[track.id][qId] = e.target.value;
        savePersistedState();
        updateFilledCounter(track);
      });
    });

    // Initialize interactive Multiple Choice buttons
    initMultipleChoiceInteractivity(track, isSubmitted, sub);

    // Initialize interactive Matching Drag & Drop / Click-to-Pick
    initMatchingInteractivity(track, isSubmitted, sub);

    updateFilledCounter(track);

    // Update submit / reset button states
    if (el.submitBtn) {
      el.submitBtn.textContent = isSubmitted ? 'Đã Nộp Bài (Xem Điểm)' : 'Nộp Bài & Chấm Điểm';
      el.submitBtn.disabled = false;
    }
  }

  // Interactive Multiple Choice Handler
  function initMultipleChoiceInteractivity(track, isSubmitted, sub) {
    // 1. Single Choice (.mc-option-btn with data-mc-q)
    const singleButtons = el.exerciseFormContainer.querySelectorAll('.mc-option-btn[data-mc-q]');
    if (singleButtons.length > 0) {
      singleButtons.forEach(btn => {
        const qId = btn.getAttribute('data-mc-q');
        const val = (btn.getAttribute('data-mc-val') || '').trim().toUpperCase();
        const currentSaved = (state.userAnswers[track.id] && state.userAnswers[track.id][qId] || '').trim().toUpperCase();
        const questionObj = track.questions.find(q => String(q.id) === String(qId));
        const acceptableUpper = questionObj ? questionObj.acceptableAnswers.map(a => a.trim().toUpperCase()) : [];

        if (currentSaved === val) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }

        if (isSubmitted) {
          btn.disabled = true;
          btn.style.cursor = 'default';
          const isCorrectChoice = acceptableUpper.includes(val);
          if (isCorrectChoice) {
            if (currentSaved === val) {
              btn.classList.add('correct');
            } else {
              btn.classList.add('missed-correct');
            }
          } else if (currentSaved === val) {
            btn.classList.add('incorrect');
          }
        } else {
          btn.addEventListener('click', () => {
            if (!state.userAnswers[track.id]) state.userAnswers[track.id] = {};
            const nowSaved = (state.userAnswers[track.id][qId] || '').trim().toUpperCase();
            if (nowSaved === val) {
              state.userAnswers[track.id][qId] = '';
            } else {
              state.userAnswers[track.id][qId] = val;
            }

            const hiddenInp = el.exerciseFormContainer.querySelector(`#input_${track.id}_${qId}`);
            if (hiddenInp) hiddenInp.value = state.userAnswers[track.id][qId];

            const groupBtns = el.exerciseFormContainer.querySelectorAll(`.mc-option-btn[data-mc-q="${qId}"]`);
            groupBtns.forEach(b => {
              const bVal = (b.getAttribute('data-mc-val') || '').trim().toUpperCase();
              if (bVal === state.userAnswers[track.id][qId]) {
                b.classList.add('selected');
              } else {
                b.classList.remove('selected');
              }
            });

            savePersistedState();
            updateFilledCounter(track);
          });
        }
      });
    }

    // 2. Multi Choice (.mc-option-btn with data-mc-multi)
    const multiButtons = el.exerciseFormContainer.querySelectorAll('.mc-option-btn[data-mc-multi]');
    if (multiButtons.length > 0) {
      const multiGroups = new Set();
      multiButtons.forEach(btn => multiGroups.add(btn.getAttribute('data-mc-multi')));

      multiGroups.forEach(groupAttr => {
        const qIds = groupAttr.split(',').map(s => s.trim());
        const groupBtns = el.exerciseFormContainer.querySelectorAll(`.mc-option-btn[data-mc-multi="${groupAttr}"]`);
        const counterEl = el.exerciseFormContainer.querySelector(`[data-mc-counter="${groupAttr}"]`);
        const maxChoices = parseInt(groupBtns[0]?.getAttribute('data-max') || qIds.length, 10);

        const getSelectedLetters = () => {
          const res = [];
          qIds.forEach(qid => {
            const v = (state.userAnswers[track.id] && state.userAnswers[track.id][qid] || '').trim().toUpperCase();
            if (v && !res.includes(v)) res.push(v);
          });
          return res;
        };

        const allAcceptableUpper = new Set();
        qIds.forEach(qid => {
          const qObj = track.questions.find(q => String(q.id) === String(qid));
          if (qObj) {
            qObj.acceptableAnswers.forEach(a => allAcceptableUpper.add(a.trim().toUpperCase()));
          }
        });

        const refreshGroupUI = () => {
          const currentSelected = getSelectedLetters();
          if (counterEl) {
            counterEl.textContent = `Đã chọn ${currentSelected.length}/${maxChoices}`;
            if (currentSelected.length === maxChoices) {
              counterEl.classList.remove('bg-amber-200');
              counterEl.classList.add('bg-emerald-200', 'text-emerald-900');
            } else {
              counterEl.classList.remove('bg-emerald-200', 'text-emerald-900');
              counterEl.classList.add('bg-amber-200', 'text-amber-900');
            }
          }

          groupBtns.forEach(b => {
            const bVal = (b.getAttribute('data-mc-val') || '').trim().toUpperCase();
            const checkCircle = b.querySelector('.mc-check-circle');
            const isChosen = currentSelected.includes(bVal);

            if (isChosen) {
              b.classList.add('selected');
              if (checkCircle) {
                checkCircle.innerHTML = '✓';
                checkCircle.className = 'mc-check-circle w-5 h-5 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs';
              }
            } else {
              b.classList.remove('selected');
              if (checkCircle) {
                checkCircle.innerHTML = '';
                checkCircle.className = 'mc-check-circle w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-xs';
              }
            }

            if (isSubmitted) {
              b.disabled = true;
              b.style.cursor = 'default';
              const isCorrectOpt = allAcceptableUpper.has(bVal);
              if (isCorrectOpt) {
                if (isChosen) {
                  b.classList.add('correct');
                } else {
                  b.classList.add('missed-correct');
                }
              } else if (isChosen) {
                b.classList.add('incorrect');
              }
            }
          });
        };

        refreshGroupUI();

        if (!isSubmitted) {
          groupBtns.forEach(btn => {
            btn.addEventListener('click', () => {
              if (!state.userAnswers[track.id]) state.userAnswers[track.id] = {};
              const val = (btn.getAttribute('data-mc-val') || '').trim().toUpperCase();
              let selected = getSelectedLetters();

              if (selected.includes(val)) {
                selected = selected.filter(x => x !== val);
              } else {
                if (selected.length >= maxChoices) {
                  selected.shift();
                }
                selected.push(val);
              }

              qIds.forEach((qid, idx) => {
                const ans = selected[idx] || '';
                state.userAnswers[track.id][qid] = ans;
                const hiddenInp = el.exerciseFormContainer.querySelector(`#input_${track.id}_${qid}`);
                if (hiddenInp) hiddenInp.value = ans;
              });

              refreshGroupUI();
              savePersistedState();
              updateFilledCounter(track);
            });
          });
        }
      });
    }
  }

  // Interactive Matching (Drag & Drop + Click-to-Pick)
  function initMatchingInteractivity(track, isSubmitted, sub) {
    const slots = el.exerciseFormContainer.querySelectorAll('.matching-drop-slot[data-drop-q]');
    const optCards = el.exerciseFormContainer.querySelectorAll('.matching-opt-card[data-matching-opt]');

    if (slots.length === 0 || optCards.length === 0) return;

    let pickedOpt = null;

    const getOptDesc = (letter) => {
      const card = el.exerciseFormContainer.querySelector(`.matching-opt-card[data-matching-opt="${letter}"]`);
      return card ? (card.getAttribute('data-opt-desc') || '') : '';
    };

    const renderSlot = (slot) => {
      const qId = slot.getAttribute('data-drop-q');
      const savedVal = (state.userAnswers[track.id] && state.userAnswers[track.id][qId] || '').trim().toUpperCase();

      if (savedVal) {
        const desc = getOptDesc(savedVal);
        slot.classList.add('has-value');
        slot.innerHTML = `
          <div class="matching-pill-placed">
            <span class="matching-pill-badge">${savedVal}</span>
            <span class="matching-pill-text" title="${escapeHtml(desc)}">${escapeHtml(desc)}</span>
            ${!isSubmitted ? `<button type="button" class="matching-pill-remove" data-remove-q="${qId}" title="Xóa lựa chọn">✕</button>` : ''}
          </div>
        `;

        if (!isSubmitted) {
          const removeBtn = slot.querySelector(`[data-remove-q="${qId}"]`);
          if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              state.userAnswers[track.id][qId] = '';
              const hiddenInp = el.exerciseFormContainer.querySelector(`#input_${track.id}_${qId}`);
              if (hiddenInp) hiddenInp.value = '';
              renderSlot(slot);
              savePersistedState();
              updateFilledCounter(track);
            });
          }
        }
      } else {
        slot.classList.remove('has-value');
        slot.innerHTML = `<span class="text-xs text-slate-400 italic slot-placeholder">Kéo hoặc chạm đáp án vào đây</span>`;
      }

      if (isSubmitted) {
        slot.style.cursor = 'default';
        const qObj = track.questions.find(q => String(q.id) === String(qId));
        const acceptableUpper = qObj ? qObj.acceptableAnswers.map(a => a.trim().toUpperCase()) : [];
        const isCorrect = acceptableUpper.includes(savedVal);

        if (isCorrect) {
          slot.classList.add('slot-correct');
          slot.insertAdjacentHTML('beforeend', `<span class="ml-2 text-emerald-600 font-bold shrink-0" title="Chính xác">✓</span>`);
        } else {
          slot.classList.add('slot-incorrect');
          const correctLetter = acceptableUpper[0] || '';
          slot.insertAdjacentHTML('beforeend', `
            <span class="ml-2 text-rose-600 font-bold shrink-0" title="Chưa đúng">✗</span>
            <span class="answer-correction ml-2 font-semibold shrink-0">Đáp án: <strong>${escapeHtml(correctLetter)}</strong></span>
          `);
        }
      }
    };

    slots.forEach(slot => renderSlot(slot));

    if (isSubmitted) {
      optCards.forEach(card => {
        card.draggable = false;
        card.style.cursor = 'default';
      });
      return;
    }

    optCards.forEach(card => {
      card.addEventListener('click', () => {
        const letter = card.getAttribute('data-matching-opt');
        const desc = card.getAttribute('data-opt-desc') || '';

        if (pickedOpt && pickedOpt.letter === letter) {
          card.classList.remove('picked');
          pickedOpt = null;
        } else {
          optCards.forEach(c => c.classList.remove('picked'));
          card.classList.add('picked');
          pickedOpt = { letter, desc, card };
        }
      });

      card.addEventListener('dragstart', (e) => {
        const letter = card.getAttribute('data-matching-opt');
        const desc = card.getAttribute('data-opt-desc') || '';
        e.dataTransfer.setData('text/plain', JSON.stringify({ letter, desc }));
        e.dataTransfer.effectAllowed = 'copy';
        card.classList.add('is-dragging');
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('is-dragging');
      });
    });

    slots.forEach(slot => {
      const qId = slot.getAttribute('data-drop-q');

      slot.addEventListener('click', () => {
        if (pickedOpt) {
          if (!state.userAnswers[track.id]) state.userAnswers[track.id] = {};
          state.userAnswers[track.id][qId] = pickedOpt.letter;
          const hiddenInp = el.exerciseFormContainer.querySelector(`#input_${track.id}_${qId}`);
          if (hiddenInp) hiddenInp.value = pickedOpt.letter;

          if (pickedOpt.card) pickedOpt.card.classList.remove('picked');
          pickedOpt = null;

          renderSlot(slot);
          savePersistedState();
          updateFilledCounter(track);
        }
      });

      slot.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        slot.classList.add('drag-over');
      });

      slot.addEventListener('dragleave', () => {
        slot.classList.remove('drag-over');
      });

      slot.addEventListener('drop', (e) => {
        e.preventDefault();
        slot.classList.remove('drag-over');

        try {
          const raw = e.dataTransfer.getData('text/plain');
          const data = JSON.parse(raw);
          if (data && data.letter) {
            if (!state.userAnswers[track.id]) state.userAnswers[track.id] = {};
            state.userAnswers[track.id][qId] = data.letter;
            const hiddenInp = el.exerciseFormContainer.querySelector(`#input_${track.id}_${qId}`);
            if (hiddenInp) hiddenInp.value = data.letter;

            if (pickedOpt && pickedOpt.card) {
              pickedOpt.card.classList.remove('picked');
              pickedOpt = null;
            }

            renderSlot(slot);
            savePersistedState();
            updateFilledCounter(track);
          }
        } catch (err) {
          console.warn('Drag drop parse error:', err);
        }
      });
    });
  }


  // Update counter of filled inputs
  function updateFilledCounter(track) {
    if (!el.filledCounter) return;
    const answers = state.userAnswers[track.id] || {};
    const filled = track.questions.filter(q => (answers[q.id] || '').trim().length > 0).length;
    el.filledCounter.textContent = `${filled}/${track.questions.length} đã điền`;
  }

  // Submit and Score
  function submitCurrentTrack() {
    const track = state.tracks[state.currentIndex];
    if (!track) return;

    const answers = state.userAnswers[track.id] || {};
    let correctCount = 0;
    const details = {};

    track.questions.forEach(q => {
      const userVal = (answers[q.id] || '').trim();
      const isMatch = checkAnswerMatch(userVal, q.acceptableAnswers);
      if (isMatch) correctCount++;
      details[q.id] = {
        userVal,
        isCorrect: isMatch,
        acceptableAnswers: q.acceptableAnswers
      };
    });

    state.submissions[track.id] = {
      submitted: true,
      score: correctCount,
      total: track.questions.length,
      details
    };

    savePersistedState();
    renderTrackNavigation();
    renderExercise(track);
    showScoreBanner(correctCount, track.questions.length);

    // Scroll smoothly to score banner
    if (el.scoreBanner) {
      el.scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Reset current track answers
  function resetCurrentTrack() {
    const track = state.tracks[state.currentIndex];
    if (!track) return;

    if (confirm('Bạn có chắc muốn làm lại Track này không? Toàn bộ câu trả lời hiện tại sẽ được xóa.')) {
      delete state.userAnswers[track.id];
      delete state.submissions[track.id];
      savePersistedState();
      renderTrackNavigation();
      renderExercise(track);
      hideScoreBanner();
    }
  }

  // Reset entire unit progress and answers
  function resetEntireUnit() {
    const currentUnit = state.units[state.currentUnitId];
    const unitTitle = currentUnit ? (currentUnit.shortTitle || currentUnit.title) : 'Unit này';
    if (confirm(`Bạn có chắc muốn làm lại toàn bộ ${unitTitle} không?\n\nToàn bộ điểm số và câu trả lời của tất cả ${state.tracks.length} bài nghe trong Unit sẽ được xóa để bạn làm lại từ đầu.`)) {
      state.userAnswers = {};
      state.submissions = {};
      savePersistedState();
      renderTrackNavigation();
      updateOverallProgress();
      const track = state.tracks[state.currentIndex];
      if (track) {
        renderExercise(track);
        hideScoreBanner();
      }
    }
  }

  // Score Banner UI
  function showScoreBanner(score, total) {
    if (!el.scoreBanner) return;
    const percent = Math.round((score / total) * 100);

    let bandText = 'Band 6.5+ (Xuất sắc)';
    let bannerColor = 'bg-emerald-50 border-emerald-300 text-emerald-900';
    let iconSvg = `
      <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    `;

    if (percent < 50) {
      bandText = 'Cần luyện tập thêm (Dưới Band 5.0)';
      bannerColor = 'bg-rose-50 border-rose-300 text-rose-900';
      iconSvg = `
        <svg class="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
      `;
    } else if (percent < 75) {
      bandText = 'Đạt mục tiêu cơ bản (Band 5.0 - 6.0)';
      bannerColor = 'bg-amber-50 border-amber-300 text-amber-900';
      iconSvg = `
        <svg class="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      `;
    }

    el.scoreBanner.className = `rounded-2xl p-5 border shadow-sm mb-6 ${bannerColor}`;
    el.scoreBanner.innerHTML = `
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3.5 text-center sm:text-left">
          <div class="p-2 bg-white rounded-xl shadow-xs shrink-0">
            ${iconSvg}
          </div>
          <div>
            <div class="text-xs font-bold uppercase tracking-wider opacity-75">Kết quả bài làm</div>
            <div class="text-xl sm:text-2xl font-black">
              Đúng ${score} / ${total} câu (${percent}%)
            </div>
            <div class="text-xs sm:text-sm font-semibold mt-0.5">${bandText}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button
            type="button"
            onclick="document.getElementById('tabReviewBtn').click()"
            class="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold text-slate-800 shadow-xs transition"
          >
            Xem Giải Thích Chi Tiết ➔
          </button>
        </div>
      </div>
    `;
    el.scoreBanner.classList.remove('hidden');
  }

  function hideScoreBanner() {
    if (!el.scoreBanner) return;
    el.scoreBanner.classList.add('hidden');
    el.scoreBanner.innerHTML = '';
  }

  // Calculate seek time for a highlighted answer in audioscript
  function getHighlightSeekTime(highlightEl, track, duration) {
    if (!duration || isNaN(duration) || duration <= 0) {
      duration = (el.audioElement && !isNaN(el.audioElement.duration) && el.audioElement.duration > 0)
        ? el.audioElement.duration
        : 0;
    }
    if (!duration || duration <= 0) return 0;

    const qId = highlightEl.getAttribute('data-q');
    // 1. Direct explicit timestamp attribute or track timestamp mapping
    if (highlightEl.dataset.time) return Math.max(0, parseFloat(highlightEl.dataset.time));
    if (highlightEl.dataset.start) return Math.max(0, parseFloat(highlightEl.dataset.start));
    if (track && track.timestamps && qId && track.timestamps[qId] !== undefined) {
      return Math.max(0, parseFloat(track.timestamps[qId]));
    }

    // 2. Dynamic character position in audioscript
    const script = (track && track.audioscript) ? track.audioscript : '';
    const plainTotal = script.replace(/<[^>]*>/g, '');
    if (!plainTotal.length) return 0;

    let charIndex = -1;
    if (qId) {
      const re = new RegExp(`<span[^>]*data-q=["']?${qId}["']?[^>]*>`, 'i');
      const match = re.exec(script);
      if (match) {
        charIndex = script.slice(0, match.index).replace(/<[^>]*>/g, '').length;
      }
    }
    if (charIndex === -1) {
      const text = (highlightEl.textContent || '').trim();
      if (text) {
        charIndex = plainTotal.indexOf(text);
      }
    }
    if (charIndex === -1) return 0;

    const ratio = Math.max(0, Math.min(1, charIndex / plainTotal.length));

    // Audio recordings in this dataset start dialogue directly from beginning (~0.3s - 1.5s)
    const tStart = 0.5;
    const tEnd = Math.max(duration - 0.5, tStart + 1);
    const dialogueDuration = tEnd - tStart;
    // Pre-roll buffer: start ~1.6s before the answer word so the question context is heard clearly
    const estTime = Math.max(0, tStart + ratio * dialogueDuration - 1.6);
    return estTime;
  }

  // Seek audio to highlighted segment and start playing
  function seekAndPlayHighlight(highlightEl, track) {
    if (!el.audioElement) return;

    const performSeek = () => {
      const dur = el.audioElement.duration || 0;
      const targetTime = getHighlightSeekTime(highlightEl, track, dur);

      el.audioElement.currentTime = targetTime;
      const playPromise = el.audioElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Playback error or blocked by browser:', err);
        });
      }
      updatePlayPauseUI(true);

      // Immediately update time display and progress bar for responsive feedback
      if (el.audioCurrentTime) {
        el.audioCurrentTime.textContent = formatTime(targetTime);
      }
      if (el.audioProgress && dur > 0) {
        el.audioProgress.value = (targetTime / dur) * 100;
      }
    };

    if (isNaN(el.audioElement.duration) || el.audioElement.duration === 0) {
      el.audioElement.addEventListener('loadedmetadata', performSeek, { once: true });
      el.audioElement.load();
    } else {
      performSeek();
    }
  }

  // Render Audioscript & Review Tab
  function renderTranscript(track) {
    if (!el.transcriptContainer) return;

    const enScript = track.audioscript || 'Không có bản audioscript.';
    const viTranslation = track.translation || '';

    // Segment audioscript and translation into dialogue turns / paragraphs
    const enParas = enScript.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    const viParas = viTranslation ? viTranslation.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean) : [];

    const plainTotal = enScript.replace(/<[^>]*>/g, '').length || 1;
    let accumulatedChars = 0;
    const enParasWithRatio = enParas.map((paraText, idx) => {
      const paraPlain = paraText.replace(/<[^>]*>/g, '');
      const startRatio = accumulatedChars / plainTotal;
      accumulatedChars += paraPlain.length;
      const endRatio = accumulatedChars / plainTotal;
      return {
        html: paraText,
        startRatio,
        endRatio,
        index: idx
      };
    });

    const enScriptHtml = enParasWithRatio.map(item => `
      <div class="transcript-line" data-index="${item.index}" data-start="${item.startRatio.toFixed(3)}" data-end="${item.endRatio.toFixed(3)}">
        ${item.html}
      </div>
    `).join('');

    const viScriptHtml = viParas.map((paraText, idx) => `
      <div class="transcript-line-vi" data-index="${idx}">
        ${paraText}
      </div>
    `).join('');

    let contentHtml = '';

    if (state.bilingual && viTranslation) {
      contentHtml = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="bg-[#fdfbf7] p-5 sm:p-6 rounded-2xl border border-[#e2ddd3] shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#e5dfd2]">
              <div class="flex items-center gap-2 font-bold text-slate-800 text-base">
                <span class="w-3 h-3 rounded-full bg-blue-600"></span>
                Audioscript (Tiếng Anh có Highlight Bằng Chứng)
              </div>
              <span class="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-300 rounded-full px-2.5 py-0.5 inline-flex items-center gap-1.5 shadow-xs">
                <svg class="w-3.5 h-3.5 text-amber-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                Click vào phần bôi vàng để nghe đoạn đó
              </span>
            </div>
            <div class="leading-relaxed text-slate-700 space-y-2 font-sans text-base whitespace-pre-line">
              ${enScriptHtml}
            </div>
          </div>
          <div class="bg-[#f8f5ed] p-5 sm:p-6 rounded-2xl border border-[#e2ddd3] shadow-sm">
            <div class="flex items-center gap-2 pb-3 mb-4 border-b border-[#e5dfd2] font-bold text-slate-800 text-base">
              <span class="w-3 h-3 rounded-full bg-amber-500"></span>
              Bản Dịch Nghĩa Tiếng Việt
            </div>
            <div class="leading-relaxed text-slate-700 space-y-2 font-sans text-base whitespace-pre-line">
              ${viScriptHtml}
            </div>
          </div>
        </div>
      `;
    } else {
      contentHtml = `
        <div class="bg-[#fdfbf7] p-6 sm:p-8 rounded-2xl border border-[#e2ddd3] shadow-sm max-w-3xl mx-auto">
          <div class="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#e5dfd2]">
            <div class="flex items-center gap-2 font-bold text-slate-800 text-base">
              <span class="w-3 h-3 rounded-full bg-blue-600"></span>
              Audioscript (Tiếng Anh)
            </div>
            <span class="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-300 rounded-full px-2.5 py-0.5 inline-flex items-center gap-1.5 shadow-xs">
              <svg class="w-3.5 h-3.5 text-amber-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
              Click vào phần bôi vàng để nghe đoạn đó
            </span>
          </div>
          <div class="leading-relaxed text-slate-700 space-y-2 font-sans text-base whitespace-pre-line">
            ${enScriptHtml}
          </div>
        </div>
      `;
    }

    el.transcriptContainer.innerHTML = contentHtml;

    // Attach click event to highlighted answers so they seek audio, play, and pulse
    const highlights = el.transcriptContainer.querySelectorAll('.highlight-answer');
    highlights.forEach(h => {
      const qNum = h.getAttribute('data-q') || '';
      h.setAttribute('title', `Click để nghe đoạn này${qNum ? ' (Câu ' + qNum + ')' : ''}`);

      h.addEventListener('click', () => {
        highlights.forEach(item => item.classList.remove('playing-now', 'target-pulse'));
        h.classList.add('playing-now', 'target-pulse');
        setTimeout(() => h.classList.remove('target-pulse'), 3000);

        seekAndPlayHighlight(h, track);
      });
    });

    // Run initial transcript follower position if audio is already active
    if (el.audioElement && !isNaN(el.audioElement.currentTime) && el.audioElement.currentTime > 0) {
      updateTranscriptFollower(el.audioElement.currentTime, el.audioElement.duration || 0);
    }
  }

  // Update transcript follower indicator based on current audio time
  function updateTranscriptFollower(cur, dur) {
    if (!el.transcriptContainer) return;
    const lines = el.transcriptContainer.querySelectorAll('.transcript-line');
    if (!lines.length || !dur || dur <= 0) return;

    const tStart = 0.5;
    const tEnd = Math.max(dur - 0.5, tStart + 1);
    const dialogueDuration = tEnd - tStart;
    const ratio = Math.max(0, Math.min(1, (cur - tStart) / dialogueDuration));

    let activeLine = null;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const start = parseFloat(line.dataset.start || 0);
      const end = parseFloat(line.dataset.end || 1);
      if (ratio >= start && ratio <= end) {
        activeLine = line;
        break;
      }
    }
    if (!activeLine) {
      if (ratio < parseFloat(lines[0].dataset.start || 0)) {
        activeLine = lines[0];
      } else {
        activeLine = lines[lines.length - 1];
      }
    }

    if (activeLine && !activeLine.classList.contains('is-active')) {
      lines.forEach(l => l.classList.remove('is-active'));
      activeLine.classList.add('is-active');

      const viLines = el.transcriptContainer.querySelectorAll('.transcript-line-vi');
      if (viLines.length) {
        const activeIdx = activeLine.dataset.index;
        viLines.forEach(vl => {
          if (vl.dataset.index === activeIdx) {
            vl.classList.add('is-active');
          } else {
            vl.classList.remove('is-active');
          }
        });
      }
    }
  }

  // Render Vocabulary Tab
  function renderVocabulary(track) {
    if (!el.vocabListContainer) return;

    const vocab = track.vocabulary || [];
    if (el.vocabCountBadge) {
      el.vocabCountBadge.textContent = `${vocab.length} từ trọng tâm`;
    }

    const query = state.vocabSearch.toLowerCase().trim();
    const filtered = query
      ? vocab.filter(v => v.word.toLowerCase().includes(query) || v.meaning.toLowerCase().includes(query))
      : vocab;

    if (filtered.length === 0) {
      el.vocabListContainer.innerHTML = `
        <div class="text-center py-12 bg-white rounded-2xl border border-[#e2ddd3] text-slate-500">
          <svg class="w-12 h-12 mx-auto text-slate-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
          <p class="font-semibold text-sm">Không tìm thấy từ vựng phù hợp</p>
        </div>
      `;
      return;
    }

    function highlightSearch(text, q) {
      if (!q || !text) return escapeHtml(text);
      const escaped = escapeHtml(text);
      const safeQ = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${safeQ})`, 'gi');
      return escaped.replace(regex, '<mark class="bg-amber-200 text-amber-900 rounded px-0.5 font-bold">$1</mark>');
    }

    el.vocabListContainer.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${filtered.map(v => `
          <div class="bg-white p-4 rounded-xl border border-[#e2ddd3] shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between gap-2 mb-1.5">
                <div class="flex items-center gap-2">
                  <h4 class="font-bold text-base text-slate-900">${highlightSearch(v.word, query)}</h4>
                  ${v.type ? `<span class="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">${v.type}</span>` : ''}
                </div>
                <button
                  type="button"
                  onclick="speakWord('${v.word.replace(/'/g, "\\'")}')"
                  class="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition cursor-pointer"
                  title="Phát âm từ vựng"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
                  </svg>
                </button>
              </div>
              <p class="text-sm text-slate-600 leading-relaxed">${highlightSearch(v.meaning, query)}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Pronunciation Text to Speech with British Voice Selection
  let cachedEnglishVoices = [];
  function updateEnglishVoices() {
    if ('speechSynthesis' in window) {
      cachedEnglishVoices = window.speechSynthesis.getVoices().filter(v => v.lang && v.lang.startsWith('en'));
    }
  }
  if ('speechSynthesis' in window) {
    updateEnglishVoices();
    window.speechSynthesis.onvoiceschanged = updateEnglishVoices;
  }

  window.speakWord = function(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      if (cachedEnglishVoices.length === 0) {
        updateEnglishVoices();
      }
      const gbVoice = cachedEnglishVoices.find(v => v.lang === 'en-GB' || v.lang.includes('GB')) ||
                      cachedEnglishVoices.find(v => v.lang.startsWith('en'));
      if (gbVoice) {
        utterance.voice = gbVoice;
        utterance.lang = gbVoice.lang;
      } else {
        utterance.lang = 'en-GB';
      }
      window.speechSynthesis.speak(utterance);
    }
  };

  // Tab Switching
  function switchTab(tabName) {
    state.activeTab = tabName;

    const tabs = [
      { id: 'exercise', btn: el.tabExerciseBtn, content: el.tabExerciseContent },
      { id: 'review', btn: el.tabReviewBtn, content: el.tabReviewContent },
      { id: 'vocab', btn: el.tabVocabBtn, content: el.tabVocabContent }
    ];

    tabs.forEach(t => {
      if (!t.btn || !t.content) return;
      if (t.id === tabName) {
        t.btn.className = 'px-4 py-2 font-bold text-sm rounded-xl bg-blue-700 text-white shadow-md shadow-blue-900/10 transition';
        t.content.classList.remove('hidden');
      } else {
        t.btn.className = 'px-4 py-2 font-semibold text-sm rounded-xl text-slate-600 hover:text-slate-900 hover:bg-[#f3ede1] transition';
        t.content.classList.add('hidden');
      }
    });
  }

  // Audio Controls Logic
  function updatePlayPauseUI(isPlaying) {
    if (!el.playPauseIcon || !el.soundWave) return;
    if (isPlaying) {
      el.playPauseIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      `;
      el.soundWave.classList.remove('paused');
    } else {
      el.playPauseIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      `;
      el.soundWave.classList.add('paused');
    }
  }

  function formatTime(secs) {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  if (el.audioElement) {
    el.audioElement.addEventListener('play', () => updatePlayPauseUI(true));
    el.audioElement.addEventListener('pause', () => updatePlayPauseUI(false));
    el.audioElement.addEventListener('ended', () => updatePlayPauseUI(false));

    el.audioElement.addEventListener('timeupdate', () => {
      const cur = el.audioElement.currentTime;
      const dur = el.audioElement.duration || 0;
      if (el.audioCurrentTime) el.audioCurrentTime.textContent = formatTime(cur);
      if (el.audioProgress && dur > 0) {
        el.audioProgress.value = (cur / dur) * 100;
      }
      updateTranscriptFollower(cur, dur);
    });

    el.audioElement.addEventListener('loadedmetadata', () => {
      if (el.audioDuration) {
        el.audioDuration.textContent = formatTime(el.audioElement.duration);
      }
    });
  }

  if (el.playPauseBtn) {
    el.playPauseBtn.addEventListener('click', () => {
      if (!el.audioElement) return;
      if (el.audioElement.paused) {
        el.audioElement.play().catch(e => console.warn('Audio play prevented:', e));
      } else {
        el.audioElement.pause();
      }
    });
  }

  if (el.seekBackwardBtn) {
    el.seekBackwardBtn.addEventListener('click', () => {
      if (!el.audioElement) return;
      el.audioElement.currentTime = Math.max(0, el.audioElement.currentTime - 5);
    });
  }

  if (el.seekForwardBtn) {
    el.seekForwardBtn.addEventListener('click', () => {
      if (!el.audioElement) return;
      el.audioElement.currentTime = Math.min(el.audioElement.duration || 9999, el.audioElement.currentTime + 5);
    });
  }

  if (el.audioProgress) {
    el.audioProgress.addEventListener('input', (e) => {
      if (!el.audioElement || !el.audioElement.duration) return;
      const pct = e.target.value;
      el.audioElement.currentTime = (pct / 100) * el.audioElement.duration;
    });
  }

  // Speed selector
  function applyAudioSpeed(speed) {
    state.audioSpeed = speed;
    if (el.audioElement) el.audioElement.playbackRate = speed;
    el.speedButtons.forEach(b => {
      const bSpeed = parseFloat(b.getAttribute('data-speed'));
      if (Math.abs(bSpeed - speed) < 0.01) {
        b.className = 'speed-btn px-2 py-0.5 text-xs font-bold rounded bg-blue-600 text-white transition';
      } else {
        b.className = 'speed-btn px-2 py-0.5 text-xs font-semibold rounded bg-white text-slate-800 transition hover:bg-slate-100';
      }
    });
  }

  el.speedButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const speed = parseFloat(e.target.getAttribute('data-speed'));
      applyAudioSpeed(speed);
    });
  });

  // Volume
  if (el.volumeSlider && el.audioElement) {
    el.volumeSlider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.audioVolume = val;
      el.audioElement.volume = val;
      if (val === 0) {
        state.audioMuted = true;
        updateVolumeIcon(true);
      } else {
        state.audioMuted = false;
        updateVolumeIcon(false);
      }
    });
  }

  if (el.volumeBtn && el.audioElement) {
    el.volumeBtn.addEventListener('click', () => {
      state.audioMuted = !state.audioMuted;
      el.audioElement.muted = state.audioMuted;
      updateVolumeIcon(state.audioMuted);
    });
  }

  function updateVolumeIcon(isMuted) {
    if (!el.volumeIcon) return;
    if (isMuted) {
      el.volumeIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"></path>
      `;
    } else {
      el.volumeIcon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path>
      `;
    }
  }

  // Shortcuts Modal Logic
  function openShortcutsModal() {
    if (el.shortcutsModal) el.shortcutsModal.classList.remove('hidden');
  }

  function closeShortcutsModal() {
    if (el.shortcutsModal) el.shortcutsModal.classList.add('hidden');
  }

  if (el.shortcutsBtn) {
    el.shortcutsBtn.addEventListener('click', openShortcutsModal);
  }
  if (el.closeShortcutsModalBtn) {
    el.closeShortcutsModalBtn.addEventListener('click', closeShortcutsModal);
  }
  if (el.understoodShortcutsBtn) {
    el.understoodShortcutsBtn.addEventListener('click', closeShortcutsModal);
  }
  if (el.shortcutsModal) {
    el.shortcutsModal.addEventListener('click', (e) => {
      if (e.target === el.shortcutsModal) closeShortcutsModal();
    });
  }

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isTyping = activeEl && (
      activeEl.tagName === 'INPUT' ||
      activeEl.tagName === 'TEXTAREA' ||
      activeEl.isContentEditable
    );

    // Escape always closes open modals, drawers
    if (e.key === 'Escape') {
      closeShortcutsModal();
      if (el.sidebarDrawer && !el.sidebarDrawer.classList.contains('hidden')) {
        el.sidebarDrawer.classList.add('hidden');
      }
      return;
    }

    if (isTyping) return;

    if (e.code === 'Space') {
      e.preventDefault();
      if (el.playPauseBtn) el.playPauseBtn.click();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (el.seekBackwardBtn) el.seekBackwardBtn.click();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (el.seekForwardBtn) el.seekForwardBtn.click();
    } else if (e.key === '[' || e.key === '{') {
      e.preventDefault();
      const speeds = [0.75, 1.0, 1.25];
      const curIdx = speeds.findIndex(s => Math.abs(s - state.audioSpeed) < 0.01);
      if (curIdx > 0) applyAudioSpeed(speeds[curIdx - 1]);
    } else if (e.key === ']' || e.key === '}') {
      e.preventDefault();
      const speeds = [0.75, 1.0, 1.25];
      const curIdx = speeds.findIndex(s => Math.abs(s - state.audioSpeed) < 0.01);
      if (curIdx !== -1 && curIdx < speeds.length - 1) applyAudioSpeed(speeds[curIdx + 1]);
    } else if (e.key === 'm' || e.key === 'M') {
      e.preventDefault();
      if (el.volumeBtn) el.volumeBtn.click();
    } else if (e.key === '?' || (e.shiftKey && e.key === '/')) {
      e.preventDefault();
      if (el.shortcutsModal && el.shortcutsModal.classList.contains('hidden')) {
        openShortcutsModal();
      } else {
        closeShortcutsModal();
      }
    }
  });

  // Track Prev / Next Buttons
  if (el.prevTrackBtn) {
    el.prevTrackBtn.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex--;
        loadCurrentTrack();
      }
    });
  }
  if (el.nextTrackBtn) {
    el.nextTrackBtn.addEventListener('click', () => {
      if (state.currentIndex < state.tracks.length - 1) {
        state.currentIndex++;
        loadCurrentTrack();
      }
    });
  }

  // Action Buttons
  if (el.submitBtn) {
    el.submitBtn.addEventListener('click', submitCurrentTrack);
  }
  if (el.resetBtn) {
    el.resetBtn.addEventListener('click', resetCurrentTrack);
  }
  if (el.resetUnitBtn) {
    el.resetUnitBtn.addEventListener('click', resetEntireUnit);
  }
  if (el.reviewShortcutBtn) {
    el.reviewShortcutBtn.addEventListener('click', () => switchTab('review'));
  }

  // Tab Navigation Buttons
  if (el.tabExerciseBtn) el.tabExerciseBtn.addEventListener('click', () => switchTab('exercise'));
  if (el.tabReviewBtn) el.tabReviewBtn.addEventListener('click', () => switchTab('review'));
  if (el.tabVocabBtn) el.tabVocabBtn.addEventListener('click', () => switchTab('vocab'));

  // Bilingual Toggle in Review
  if (el.bilingualToggleBtn) {
    el.bilingualToggleBtn.addEventListener('click', () => {
      state.bilingual = !state.bilingual;
      if (el.bilingualStatusText) {
        el.bilingualStatusText.textContent = state.bilingual ? 'Song ngữ Anh - Việt' : 'Chỉ hiển thị Tiếng Anh';
      }
      const track = state.tracks[state.currentIndex];
      if (track) renderTranscript(track);
    });
  }

  // Vocabulary Search Input
  if (el.vocabSearchInput) {
    el.vocabSearchInput.addEventListener('input', (e) => {
      state.vocabSearch = e.target.value;
      const track = state.tracks[state.currentIndex];
      if (track) renderVocabulary(track);
    });
  }

  // Mobile Drawer Toggle
  if (el.mobileMenuBtn && el.sidebarDrawer) {
    el.mobileMenuBtn.addEventListener('click', () => {
      el.sidebarDrawer.classList.toggle('hidden');
    });
  }
  if (el.closeSidebarBtn && el.sidebarDrawer) {
    el.closeSidebarBtn.addEventListener('click', () => {
      el.sidebarDrawer.classList.add('hidden');
    });
  }

  // Back to Menu button in Header
  if (el.btnBackToMenu) {
    el.btnBackToMenu.addEventListener('click', () => {
      showUnitHub();
    });
  }

  // Back to Menu button in Mobile Drawer
  if (el.mobileBtnBackToMenu) {
    el.mobileBtnBackToMenu.addEventListener('click', () => {
      if (el.sidebarDrawer) el.sidebarDrawer.classList.add('hidden');
      showUnitHub();
    });
  }

  // Hub Filter Buttons
  if (el.hubFilterButtons) {
    el.hubFilterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        renderUnitHub(cat);
      });
    });
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initialize
  loadPersistedState();
  updateUnitSelectorUI();
  updateOverallProgress();

  // On initial entrance to the web app, show the 10-Unit Selection Menu!
  showUnitHub();
});
