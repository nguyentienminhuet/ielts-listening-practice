/**
 * IELTS Reading Practice - Band 5.0 - 7.5
 * Interactive Computer-Delivered Reading Workspace Logic
 * 13 Lessons, 31 Passages/Sets, 137 Questions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if readingLessons data is available
  if (typeof readingLessons === 'undefined' || !Array.isArray(readingLessons)) {
    console.error('readingLessons data not found! Please check js/reading_data.js');
    return;
  }

  // Reading State
  const readingState = {
    lessons: readingLessons,
    currentLessonId: null,
    currentExampleIdx: 0,
    hubFilter: 'all',
    answers: {},       // { [exampleId]: { [qId]: string } }
    submissions: {},   // { [exampleId]: { submitted: boolean, score: number, total: number, details: {} } }
    fontSizeRem: 1.025,
    timerSeconds: 20 * 60,
    timerRunning: false,
    timerInterval: null,
    mobileTab: 'passage', // 'passage' | 'questions'
    storagePrefix: 'ielts_reading_'
  };

  // DOM Elements
  const rEl = {
    // Mode Switcher Buttons
    modeListeningBtn: document.getElementById('modeListeningBtn'),
    modeReadingBtn: document.getElementById('modeReadingBtn'),
    headerMainTitle: document.getElementById('headerMainTitle'),
    headerBandBadge: document.getElementById('headerBandBadge'),
    headerSubtitle: document.getElementById('headerSubtitle'),

    // Main Sections
    unitHubSection: document.getElementById('unitHubSection'),
    practiceWorkspaceSection: document.getElementById('practiceWorkspaceSection'),
    stickyAudioBar: document.getElementById('stickyAudioBar'),
    btnBackToMenu: document.getElementById('btnBackToMenu'),

    // Reading Hub
    readingHubSection: document.getElementById('readingHubSection'),
    readingHubCardsGrid: document.getElementById('readingHubCardsGrid'),
    hubReadingProgressText: document.getElementById('hubReadingProgressText'),
    hubReadingProgressBar: document.getElementById('hubReadingProgressBar'),
    readingHubFilters: document.querySelectorAll('.reading-hub-filter'),

    // Reading Workspace
    readingWorkspaceSection: document.getElementById('readingWorkspaceSection'),
    btnReadingBackToHub: document.getElementById('btnReadingBackToHub'),
    readingWorkspaceBadge: document.getElementById('readingWorkspaceBadge'),
    readingWorkspaceTitle: document.getElementById('readingWorkspaceTitle'),
    readingWorkspacePassageCount: document.getElementById('readingWorkspacePassageCount'),
    readingPassageTabsContainer: document.getElementById('readingPassageTabsContainer'),

    // Timer & Font Controls
    readingTimerDisplay: document.getElementById('readingTimerDisplay'),
    readingTimerToggleBtn: document.getElementById('readingTimerToggleBtn'),
    readingTimerResetBtn: document.getElementById('readingTimerResetBtn'),
    readingFontDecBtn: document.getElementById('readingFontDecBtn'),
    readingFontIncBtn: document.getElementById('readingFontIncBtn'),

    // Mobile Tabs
    mobileReadingTabPassage: document.getElementById('mobileReadingTabPassage'),
    mobileReadingTabQuestions: document.getElementById('mobileReadingTabQuestions'),
    readingLeftPanel: document.getElementById('readingLeftPanel'),
    readingRightPanel: document.getElementById('readingRightPanel'),

    // Workspace Panels
    readingPassageTitle: document.getElementById('readingPassageTitle'),
    readingPassageContent: document.getElementById('readingPassageContent'),
    readingQuestionsRange: document.getElementById('readingQuestionsRange'),
    readingQuestionTypeBadge: document.getElementById('readingQuestionTypeBadge'),
    readingQuestionsInstructions: document.getElementById('readingQuestionsInstructions'),
    readingQuestionsList: document.getElementById('readingQuestionsList'),
    readingSubmitBtn: document.getElementById('readingSubmitBtn'),
    readingResetBtn: document.getElementById('readingResetBtn'),
    readingQuickScorePill: document.getElementById('readingQuickScorePill'),

    // Results & Explanations
    readingResultCard: document.getElementById('readingResultCard'),
    readingScoreNumber: document.getElementById('readingScoreNumber'),
    readingScorePercent: document.getElementById('readingScorePercent'),
    readingResultFeedback: document.getElementById('readingResultFeedback'),
    readingExplanationsSection: document.getElementById('readingExplanationsSection'),
    readingExplanationsList: document.getElementById('readingExplanationsList'),

    // Vocabulary Notebook
    readingVocabSection: document.getElementById('readingVocabSection'),
    readingVocabList: document.getElementById('readingVocabList'),
    readingVocabToggleBtn: document.getElementById('readingVocabToggleBtn')
  };

  // =========================================================================
  // PERSISTENCE (localStorage)
  // =========================================================================
  function loadPersistedReadingData() {
    try {
      const savedAnswers = localStorage.getItem(readingState.storagePrefix + 'answers');
      if (savedAnswers) readingState.answers = JSON.parse(savedAnswers);

      const savedSubmissions = localStorage.getItem(readingState.storagePrefix + 'submissions');
      if (savedSubmissions) readingState.submissions = JSON.parse(savedSubmissions);

      const savedFontSize = localStorage.getItem(readingState.storagePrefix + 'font_size');
      if (savedFontSize) {
        readingState.fontSizeRem = parseFloat(savedFontSize);
        applyFontSize();
      }

      const savedLessonId = localStorage.getItem(readingState.storagePrefix + 'current_lesson');
      const savedExIdx = localStorage.getItem(readingState.storagePrefix + 'current_ex_idx');
      if (savedLessonId && readingLessonsRegistry[savedLessonId]) {
        readingState.currentLessonId = savedLessonId;
        readingState.currentExampleIdx = savedExIdx ? parseInt(savedExIdx, 10) : 0;
      }
    } catch (e) {
      console.warn('Could not load reading data from localStorage:', e);
    }
  }

  function persistAnswers() {
    try {
      localStorage.setItem(readingState.storagePrefix + 'answers', JSON.stringify(readingState.answers));
    } catch (e) {
      console.warn('Could not persist answers:', e);
    }
  }

  function persistSubmissions() {
    try {
      localStorage.setItem(readingState.storagePrefix + 'submissions', JSON.stringify(readingState.submissions));
    } catch (e) {
      console.warn('Could not persist submissions:', e);
    }
  }

  function persistCurrentLesson() {
    try {
      if (readingState.currentLessonId) {
        localStorage.setItem(readingState.storagePrefix + 'current_lesson', readingState.currentLessonId);
        localStorage.setItem(readingState.storagePrefix + 'current_ex_idx', String(readingState.currentExampleIdx));
      } else {
        localStorage.removeItem(readingState.storagePrefix + 'current_lesson');
        localStorage.removeItem(readingState.storagePrefix + 'current_ex_idx');
      }
    } catch (e) {
      console.warn('Could not persist current lesson:', e);
    }
  }

  // =========================================================================
  // SKILL MODE SWITCHING (Listening vs Reading)
  // =========================================================================
  window.switchSkillMode = function(mode) {
    if (mode === 'listening') {
      // Switch to Listening
      if (rEl.modeListeningBtn) {
        rEl.modeListeningBtn.className = "px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all bg-white text-blue-700 shadow-xs flex items-center gap-1.5 cursor-pointer select-none";
      }
      if (rEl.modeReadingBtn) {
        rEl.modeReadingBtn.className = "px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer select-none";
      }

      // Hide reading views
      if (rEl.readingHubSection) rEl.readingHubSection.classList.add('hidden');
      if (rEl.readingWorkspaceSection) rEl.readingWorkspaceSection.classList.add('hidden');
      pauseReadingTimer();

      // Show listening views (hub or workspace depending on state)
      const listeningViewMode = localStorage.getItem('ielts_listening_view_mode') || 'hub';
      if (listeningViewMode === 'workspace' && rEl.practiceWorkspaceSection) {
        rEl.practiceWorkspaceSection.classList.remove('hidden');
        if (rEl.unitHubSection) rEl.unitHubSection.classList.add('hidden');
        if (rEl.stickyAudioBar) rEl.stickyAudioBar.classList.remove('hidden');
        if (rEl.btnBackToMenu) rEl.btnBackToMenu.classList.remove('hidden');
      } else {
        if (rEl.unitHubSection) rEl.unitHubSection.classList.remove('hidden');
        if (rEl.practiceWorkspaceSection) rEl.practiceWorkspaceSection.classList.add('hidden');
        if (rEl.btnBackToMenu) rEl.btnBackToMenu.classList.add('hidden');
      }

      if (rEl.headerMainTitle) rEl.headerMainTitle.textContent = 'IELTS Listening Practice';
      if (rEl.headerBandBadge) {
        rEl.headerBandBadge.textContent = 'Band 5.0 - 6.5';
        rEl.headerBandBadge.className = 'px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300';
      }

      localStorage.setItem('ielts_active_mode', 'listening');
    } else {
      // Switch to Reading
      // Pause any playing audio
      const audioEl = document.getElementById('audioElement');
      if (audioEl && !audioEl.paused) {
        audioEl.pause();
      }

      if (rEl.modeReadingBtn) {
        rEl.modeReadingBtn.className = "px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all bg-white text-indigo-700 shadow-xs flex items-center gap-1.5 cursor-pointer select-none";
      }
      if (rEl.modeListeningBtn) {
        rEl.modeListeningBtn.className = "px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer select-none";
      }

      // Hide listening views
      if (rEl.stickyAudioBar) rEl.stickyAudioBar.classList.add('hidden');
      if (rEl.unitHubSection) rEl.unitHubSection.classList.add('hidden');
      if (rEl.practiceWorkspaceSection) rEl.practiceWorkspaceSection.classList.add('hidden');
      if (rEl.btnBackToMenu) rEl.btnBackToMenu.classList.add('hidden');

      if (rEl.headerMainTitle) rEl.headerMainTitle.textContent = 'IELTS Reading Practice';
      if (rEl.headerBandBadge) {
        rEl.headerBandBadge.textContent = 'Band 5.0 - 7.5';
        rEl.headerBandBadge.className = 'px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-900 border border-indigo-300';
      }

      // If a reading lesson is already active, show workspace, else show reading hub
      if (readingState.currentLessonId && readingLessonsRegistry[readingState.currentLessonId]) {
        showReadingWorkspace();
      } else {
        showReadingHub();
      }

      localStorage.setItem('ielts_active_mode', 'reading');
    }
  };

  // Wire mode switcher clicks
  if (rEl.modeListeningBtn) {
    rEl.modeListeningBtn.addEventListener('click', () => window.switchSkillMode('listening'));
  }
  if (rEl.modeReadingBtn) {
    rEl.modeReadingBtn.addEventListener('click', () => window.switchSkillMode('reading'));
  }

  // =========================================================================
  // READING HUB (Landing Menu)
  // =========================================================================
  function showReadingHub() {
    readingState.currentLessonId = null;
    persistCurrentLesson();

    if (rEl.readingWorkspaceSection) rEl.readingWorkspaceSection.classList.add('hidden');
    if (rEl.readingHubSection) rEl.readingHubSection.classList.remove('hidden');
    if (rEl.headerSubtitle) rEl.headerSubtitle.textContent = 'Trọn bộ 13 dạng bài Reading cốt lõi (31 bài đọc • 137 câu hỏi)';

    pauseReadingTimer();
    renderReadingHub(readingState.hubFilter);
    updateReadingOverallProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderReadingHub(filter = 'all') {
    readingState.hubFilter = filter;
    if (!rEl.readingHubCardsGrid) return;

    // Update filter button UI
    if (rEl.readingHubFilters) {
      rEl.readingHubFilters.forEach(btn => {
        const cat = btn.getAttribute('data-category');
        if (cat === filter) {
          btn.className = 'reading-hub-filter active px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all bg-indigo-700 text-white shadow-xs cursor-pointer';
        } else {
          btn.className = 'reading-hub-filter px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all bg-white hover:bg-slate-100 text-slate-700 border border-[#ded5c4] cursor-pointer';
        }
      });
    }

    // Filter lessons
    const filteredLessons = readingLessons.filter(lesson => {
      if (filter === 'all') return true;
      return lesson.category === filter;
    });

    let html = '';
    filteredLessons.forEach(lesson => {
      // Calculate lesson progress
      let totalEx = lesson.examples.length;
      let completedEx = 0;
      let totalQuestions = 0;
      let correctAnswers = 0;

      lesson.examples.forEach(ex => {
        totalQuestions += ex.questions.length;
        const sub = readingState.submissions[ex.id];
        if (sub && sub.submitted) {
          completedEx++;
          correctAnswers += (sub.score || 0);
        }
      });

      const percent = totalEx > 0 ? Math.round((completedEx / totalEx) * 100) : 0;
      const isCompleted = completedEx === totalEx && totalEx > 0;

      html += `
        <div class="group relative bg-[#fdfbf7] rounded-2xl border border-[#ded5c4] hover:border-indigo-400 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-3">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg text-xs font-extrabold bg-indigo-100 text-indigo-900 border border-indigo-200">
                ${escapeHtml(lesson.code)}
              </span>
              <span class="text-xs font-bold text-slate-500">
                ${lesson.examplesCount} bài đọc • ${lesson.totalQuestions} câu
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors line-clamp-1 mb-1.5">
              ${escapeHtml(lesson.title)}
            </h3>

            <p class="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
              ${escapeHtml(lesson.description)}
            </p>
          </div>

          <div>
            <!-- Progress Bar -->
            <div class="mb-4 pt-3 border-t border-[#ede8dc]">
              <div class="flex items-center justify-between text-xs mb-1.5">
                <span class="font-bold text-slate-500">Tiến độ bài học</span>
                <span class="font-extrabold ${isCompleted ? 'text-emerald-700' : 'text-indigo-700'}">
                  ${completedEx}/${totalEx} Bài (${percent}%)
                </span>
              </div>
              <div class="w-full h-2 bg-[#f0ece1] rounded-full overflow-hidden">
                <div class="h-full ${isCompleted ? 'bg-emerald-600' : 'bg-gradient-to-r from-indigo-600 to-blue-600'} rounded-full transition-all duration-300" style="width: ${percent}%;"></div>
              </div>
            </div>

            <!-- Action Button -->
            <button 
              type="button" 
              class="w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                isCompleted 
                  ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs' 
                  : 'bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 active:scale-98 text-white shadow-xs'
              }"
              onclick="selectAndEnterReadingLesson('${lesson.id}', 0)"
            >
              <span>${isCompleted ? '✓ Làm lại bài này' : 'Bắt đầu luyện tập'}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      `;
    });

    rEl.readingHubCardsGrid.innerHTML = html;
  }

  function updateReadingOverallProgress() {
    let totalEx = 0;
    let completedEx = 0;
    let totalQ = 0;

    readingLessons.forEach(l => {
      l.examples.forEach(ex => {
        totalEx++;
        totalQ += ex.questions.length;
        if (readingState.submissions[ex.id]?.submitted) {
          completedEx++;
        }
      });
    });

    const percent = totalEx > 0 ? Math.round((completedEx / totalEx) * 100) : 0;
    if (rEl.hubReadingProgressText) {
      rEl.hubReadingProgressText.textContent = `${completedEx}/${totalEx} Bài (${percent}%)`;
    }
    if (rEl.hubReadingProgressBar) {
      rEl.hubReadingProgressBar.style.width = `${percent}%`;
    }
  }

  // Make selectAndEnterReadingLesson globally callable
  window.selectAndEnterReadingLesson = function(lessonId, exIdx = 0) {
    readingState.currentLessonId = lessonId;
    readingState.currentExampleIdx = exIdx;
    persistCurrentLesson();
    showReadingWorkspace();
  };

  // Wire Reading Hub filter buttons
  if (rEl.readingHubFilters) {
    rEl.readingHubFilters.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        renderReadingHub(cat);
      });
    });
  }

  // Wire back button from workspace to hub
  if (rEl.btnReadingBackToHub) {
    rEl.btnReadingBackToHub.addEventListener('click', showReadingHub);
  }

  // =========================================================================
  // READING WORKSPACE (Split Screen Layout)
  // =========================================================================
  function showReadingWorkspace() {
    const lesson = readingLessonsRegistry[readingState.currentLessonId];
    if (!lesson) {
      showReadingHub();
      return;
    }

    if (rEl.readingHubSection) rEl.readingHubSection.classList.add('hidden');
    if (rEl.readingWorkspaceSection) rEl.readingWorkspaceSection.classList.remove('hidden');

    const exIdx = readingState.currentExampleIdx || 0;
    const example = lesson.examples[exIdx] || lesson.examples[0];

    // Header info
    if (rEl.headerSubtitle) rEl.headerSubtitle.textContent = `${lesson.title} – ${example.title}`;
    if (rEl.readingWorkspaceBadge) rEl.readingWorkspaceBadge.textContent = `${lesson.code} • ${lesson.title}`;
    if (rEl.readingWorkspaceTitle) rEl.readingWorkspaceTitle.textContent = example.title;
    if (rEl.readingWorkspacePassageCount) {
      rEl.readingWorkspacePassageCount.textContent = `(${lesson.examples.length} phần luyện tập)`;
    }

    // Render passage tabs
    renderPassageTabs(lesson, exIdx);

    // Reset timer to 20 mins for new passage
    resetReadingTimer();

    // Render passage and questions
    renderReadingPassage(example);
    renderReadingQuestions(example);
    renderReadingVocab(example);

    // Handle existing submission state
    const sub = readingState.submissions[example.id];
    if (sub && sub.submitted) {
      showSubmissionResults(example, sub);
    } else {
      hideSubmissionResults();
    }

    // Mobile view sync
    setMobileTab(readingState.mobileTab);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderPassageTabs(lesson, currentIdx) {
    if (!rEl.readingPassageTabsContainer) return;

    const wrapper = document.getElementById('readingPassageTabsWrapper');

    if (lesson.examples.length <= 1) {
      rEl.readingPassageTabsContainer.innerHTML = '';
      if (wrapper) wrapper.classList.add('hidden');
      return;
    }

    if (wrapper) wrapper.classList.remove('hidden');

    let tabsHtml = '';
    lesson.examples.forEach((ex, idx) => {
      const isCurrent = idx === currentIdx;
      const isDone = readingState.submissions[ex.id]?.submitted;
      tabsHtml += `
        <button 
          type="button" 
          class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
            isCurrent 
              ? 'bg-stone-800 text-white shadow-2xs' 
              : 'bg-white hover:bg-[#f6f3eb] text-stone-700 border border-[#ded7ca]'
          }"
          onclick="selectAndEnterReadingLesson('${lesson.id}', ${idx})"
          title="${escapeHtml(ex.title)}"
        >
          <span>Bài ${idx + 1}</span>
          ${isDone ? '<span class="text-emerald-400 font-bold text-[11px]">✓</span>' : ''}
        </button>
      `;
    });
    rEl.readingPassageTabsContainer.innerHTML = tabsHtml;
  }

  // =========================================================================
  // PASSAGE RENDERING & EVIDENCE HIGHLIGHTING
  // =========================================================================
  function renderReadingPassage(example) {
    if (!rEl.readingPassageContent) return;

    if (rEl.readingPassageTitle) {
      rEl.readingPassageTitle.textContent = example.passage.title || example.title;
    }

    const sub = readingState.submissions[example.id];
    const isSubmitted = sub && sub.submitted;

    let html = '';
    example.passage.paragraphs.forEach(para => {
      let paraText = escapeHtml(para.text);

      // If submitted, highlight evidence quotes in the text!
      if (isSubmitted) {
        example.questions.forEach(q => {
          if (q.evidence) {
            const evText = q.evidence.trim();
            const evEscaped = escapeHtml(evText);
            if (paraText.includes(evEscaped)) {
              paraText = paraText.replace(
                evEscaped,
                `<mark class="reading-evidence-mark" data-qid="${q.id}" title="Dẫn chứng câu ${q.id}: ${escapeHtml(evText)}">${evEscaped} <span class="text-[10px] font-bold px-1 bg-amber-200 rounded">[Q${q.id}]</span></mark>`
              );
            }
          }
        });
      }

      // Convert newlines to breaks
      paraText = paraText.replace(/\n/g, '<br/>');

      html += `
        <div class="p-3 sm:p-4 rounded-xl bg-white border border-[#ded5c4]/70 shadow-xs leading-relaxed text-slate-800">
          <div class="flex items-start gap-2">
            ${para.label ? `<span class="reading-paragraph-badge">${para.label}</span>` : ''}
            <div class="flex-1">${paraText}</div>
          </div>
        </div>
      `;
    });

    rEl.readingPassageContent.innerHTML = html;

    // Attach click handlers to evidence marks to jump to question
    rEl.readingPassageContent.querySelectorAll('.reading-evidence-mark').forEach(mark => {
      mark.addEventListener('click', () => {
        const qid = mark.getAttribute('data-qid');
        highlightQuestionElement(qid);
      });
    });
  }

  // =========================================================================
  // QUESTIONS RENDERING
  // =========================================================================
  function renderReadingQuestions(example) {
    if (!rEl.readingQuestionsList) return;

    if (!readingState.answers[example.id]) {
      readingState.answers[example.id] = {};
    }
    const currentAnswers = readingState.answers[example.id];
    const sub = readingState.submissions[example.id];
    const isSubmitted = sub && sub.submitted;

    if (rEl.readingQuestionsRange) {
      rEl.readingQuestionsRange.textContent = `Questions 1–${example.questions.length}`;
    }
    if (rEl.readingQuestionTypeBadge) {
      rEl.readingQuestionTypeBadge.textContent = example.questions[0]?.type?.toUpperCase() || 'PRACTICE';
    }
    if (rEl.readingQuestionsInstructions) {
      rEl.readingQuestionsInstructions.textContent = example.instructions || 'Trả lời các câu hỏi dưới đây:';
    }

    let html = '';
    example.questions.forEach((q) => {
      const userVal = currentAnswers[q.id] || '';
      const isCorrect = isSubmitted && checkAnswerMatch(userVal, q.acceptableAnswers);

      // Card with subtle left-border accent
      const leftBorder = isSubmitted
        ? (isCorrect ? 'border-l-[#40916c]' : 'border-l-[#d97768]')
        : 'border-l-[#d5cfc2]';

      html += `
        <div id="q_card_${q.id}" class="p-4 sm:p-5 rounded-xl bg-white border border-[#e8e3d9] border-l-[3px] ${leftBorder} shadow-2xs transition-all">
          <div class="flex items-start justify-between gap-3 mb-2">
            <div class="flex items-start gap-2.5">
              <span class="text-[11px] font-bold uppercase tracking-wider text-stone-400 mt-0.5 shrink-0">Câu ${q.id}</span>
              <div class="text-sm font-medium text-stone-800 leading-snug">
                ${escapeHtml(q.questionText || q.label || '')}
              </div>
            </div>

            ${isSubmitted ? `
              <span class="text-xs font-semibold px-2 py-0.5 rounded-md ${
                isCorrect 
                  ? 'bg-[#eef7f2] text-[#2d6a4f] border border-[#c3e6d3]' 
                  : 'bg-[#fdf0ee] text-[#a83226] border border-[#f5c6c0]'
              } shrink-0">
                ${isCorrect ? '✓ Đúng' : '✗ Chưa đúng'}
              </span>
            ` : ''}
          </div>
      `;

      // Render question input according to type
      const qType = (q.type || '').toLowerCase();

      if (qType === 'tfng' || qType === 'ynng') {
        const options = (qType === 'tfng') 
          ? ['TRUE', 'FALSE', 'NOT GIVEN'] 
          : ['YES', 'NO', 'NOT GIVEN'];

        html += `<div class="flex flex-wrap items-center gap-2 mt-3">`;
        options.forEach(opt => {
          const isSelected = (userVal.toUpperCase() === opt);
          let btnClass = 'reading-tfng-btn';
          if (isSelected) btnClass += ' selected';
          if (isSubmitted) {
            const isOptCorrect = checkAnswerMatch(opt, q.acceptableAnswers);
            if (isOptCorrect) btnClass += ' correct-btn';
            else if (isSelected && !isOptCorrect) btnClass += ' incorrect-btn';
          }

          html += `
            <button 
              type="button" 
              class="${btnClass}" 
              ${isSubmitted ? 'disabled' : ''} 
              onclick="handleSelectAnswer('${example.id}', '${q.id}', '${opt}')"
            >
              ${opt}
            </button>
          `;
        });
        html += `</div>`;
      } 
      else if (qType === 'mcq' && Array.isArray(q.options) && q.options.length > 0) {
        html += `<div class="space-y-2 mt-3">`;
        q.options.forEach(opt => {
          const optLetterMatch = opt.match(/^([A-E])[\.\:]\s*(.*)$/);
          const letter = optLetterMatch ? optLetterMatch[1] : '';
          const optText = optLetterMatch ? optLetterMatch[2] : opt;
          const valToCheck = letter || opt;
          const isSelected = (userVal.toUpperCase() === valToCheck.toUpperCase() || userVal === opt);

          let optClass = 'reading-mcq-option';
          if (isSelected) optClass += ' selected';
          if (isSubmitted) {
            const isOptCorrect = checkAnswerMatch(valToCheck, q.acceptableAnswers) || checkAnswerMatch(opt, q.acceptableAnswers);
            if (isOptCorrect) optClass += ' correct-option';
            else if (isSelected && !isOptCorrect) optClass += ' incorrect-option';
          }

          html += `
            <div 
              class="${optClass}" 
              onclick="${isSubmitted ? '' : `handleSelectAnswer('${example.id}', '${q.id}', '${escapeHtml(valToCheck)}')`}"
            >
              ${letter ? `<span class="reading-mcq-letter">${letter}</span>` : ''}
              <span class="text-xs sm:text-sm text-stone-700 leading-normal flex-1">${escapeHtml(optText)}</span>
            </div>
          `;
        });
        html += `</div>`;
      } 
      else if (Array.isArray(q.options) && q.options.length > 0) {
        html += `
          <div class="mt-3">
            <select 
              class="w-full p-2.5 rounded-xl border border-[#ded5c4] bg-white text-xs sm:text-sm font-semibold text-stone-700 focus:outline-none focus:border-stone-500 transition" 
              ${isSubmitted ? 'disabled' : ''} 
              onchange="handleSelectAnswer('${example.id}', '${q.id}', this.value)"
            >
              <option value="">-- Chọn đáp án phù hợp --</option>
              ${q.options.map(opt => `
                <option value="${escapeHtml(opt)}" ${userVal === opt ? 'selected' : ''}>
                  ${escapeHtml(opt)}
                </option>
              `).join('')}
            </select>
          </div>
        `;
      } 
      else {
        let inputClass = 'reading-gap-input w-full max-w-sm mt-3';
        if (isSubmitted) {
          inputClass += isCorrect ? ' correct' : ' incorrect';
        }

        html += `
          <div class="mt-3">
            <input 
              type="text" 
              class="${inputClass}" 
              placeholder="Nhập câu trả lời của bạn..." 
              value="${escapeHtml(userVal)}" 
              ${isSubmitted ? 'readonly' : ''} 
              oninput="handleInputAnswer('${example.id}', '${q.id}', this.value)"
            />
          </div>
        `;
      }

      // Inline explanation block after grading (inserted directly below each answer)
      if (isSubmitted) {
        const d = sub.details ? sub.details[q.id] : null;
        const explanation = d ? (d.explanation || '') : (q.explanation || '');
        const evidence = d ? (d.evidence || '') : (q.evidence || '');

        // Match vocabulary from example.vocabulary
        const vocabList = example.vocabulary || [];
        const textPool = [
          q.questionText || '',
          explanation,
          evidence,
          ...(q.acceptableAnswers || [])
        ].join(' ').toLowerCase();

        const matchedVocab = vocabList.filter(v => {
          const w = (v.word || '').toLowerCase().trim();
          if (!w) return false;
          if (textPool.includes(w)) return true;
          const root = w.split(/\s+/)[0];
          if (root.length >= 4 && textPool.includes(root.slice(0, Math.min(root.length - 1, 6)))) return true;
          return false;
        });

        html += `
          <div class="inline-explanation mt-3 pt-3 border-t border-dashed border-[#e4ded2] space-y-2 text-xs">
            <div class="flex items-baseline gap-2">
              <span class="text-stone-500 font-medium">Bạn trả lời:</span>
              <span class="font-semibold ${isCorrect ? 'text-stone-800' : 'text-[#a83226] line-through'}">${escapeHtml(userVal || '(Bỏ trống)')}</span>
            </div>

            ${!isCorrect ? `
              <div class="flex items-baseline gap-2">
                <span class="text-stone-500 font-medium">Đáp án đúng:</span>
                <span class="font-bold text-[#2d6a4f] text-[13px]">${q.acceptableAnswers.join(' / ')}</span>
              </div>
            ` : ''}

            ${explanation ? `
              <div class="text-stone-700 leading-relaxed pt-0.5">
                <span class="font-semibold text-stone-800">Giải thích:</span> ${escapeHtml(explanation)}
              </div>
            ` : ''}

            ${evidence ? `
              <div class="flex items-start gap-2.5 bg-[#fbf9f4] p-2.5 rounded-lg border-l-2 border-stone-400 border border-stone-200/80 leading-relaxed text-[12px]">
                <span class="font-semibold text-stone-800 shrink-0">Dẫn chứng:</span>
                <span class="text-stone-700 italic flex-1">"${escapeHtml(evidence)}"</span>
                <button type="button" class="text-[11px] font-semibold text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-50 px-2.5 py-1 rounded border border-stone-300 shadow-2xs whitespace-nowrap transition cursor-pointer shrink-0" onclick="scrollToEvidence('${q.id}')">
                  ↗ Vị trí trong bài
                </button>
              </div>
            ` : ''}

            ${matchedVocab.length > 0 ? `
              <div class="pt-2 border-t border-stone-200/60">
                <div class="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                  <span>Từ vựng trọng tâm:</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${matchedVocab.map(v => `
                    <div class="inline-flex items-baseline gap-1 px-2 py-0.5 rounded bg-[#f7f4ed] border border-[#e5dfd0] text-[11.5px]">
                      <span class="font-bold text-stone-900">${escapeHtml(v.word)}</span>
                      <span class="text-stone-600 font-normal">: ${escapeHtml(v.meaning)}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `;
      }

      html += `</div>`;
    });

    rEl.readingQuestionsList.innerHTML = html;
  }

  // Answer Handlers
  window.handleSelectAnswer = function(exId, qId, value) {
    if (!readingState.answers[exId]) readingState.answers[exId] = {};
    readingState.answers[exId][qId] = value;
    persistAnswers();

    const lesson = readingLessonsRegistry[readingState.currentLessonId];
    if (lesson) {
      const example = lesson.examples[readingState.currentExampleIdx];
      if (example) renderReadingQuestions(example);
    }
  };

  window.handleInputAnswer = function(exId, qId, value) {
    if (!readingState.answers[exId]) readingState.answers[exId] = {};
    readingState.answers[exId][qId] = value;
    persistAnswers();
  };

  // =========================================================================
  // SUBMISSION & GRADING
  // =========================================================================
  function checkAnswerMatch(userVal, acceptableAnswers) {
    if (!userVal || !acceptableAnswers || !acceptableAnswers.length) return false;
    const cleanUser = String(userVal).trim().toLowerCase().replace(/[\.\,\'\"\`]/g, '').replace(/\s+/g, ' ');
    
    return acceptableAnswers.some(ans => {
      const cleanAns = String(ans).trim().toLowerCase().replace(/[\.\,\'\"\`]/g, '').replace(/\s+/g, ' ');
      if (cleanUser === cleanAns) return true;
      if (cleanAns === 'true' && cleanUser === 't') return true;
      if (cleanAns === 'false' && cleanUser === 'f') return true;
      if (cleanAns === 'not given' && cleanUser === 'ng') return true;
      if (cleanAns === 'yes' && cleanUser === 'y') return true;
      if (cleanAns === 'no' && cleanUser === 'n') return true;
      return false;
    });
  }

  function submitCurrentReading() {
    const lesson = readingLessonsRegistry[readingState.currentLessonId];
    if (!lesson) return;
    const example = lesson.examples[readingState.currentExampleIdx];
    if (!example) return;

    const currentAnswers = readingState.answers[example.id] || {};
    let score = 0;
    const total = example.questions.length;
    const details = {};

    example.questions.forEach(q => {
      const userVal = currentAnswers[q.id] || '';
      const isCorrect = checkAnswerMatch(userVal, q.acceptableAnswers);
      if (isCorrect) score++;
      details[q.id] = {
        userAnswer: userVal,
        isCorrect: isCorrect,
        correctAnswers: q.acceptableAnswers,
        explanation: q.explanation || '',
        evidence: q.evidence || ''
      };
    });

    const sub = {
      submitted: true,
      score: score,
      total: total,
      timestamp: Date.now(),
      details: details
    };

    readingState.submissions[example.id] = sub;
    persistSubmissions();

    renderReadingPassage(example);
    renderReadingQuestions(example);
    showSubmissionResults(example, sub);
    updateReadingOverallProgress();
    pauseReadingTimer();
  }

  function resetCurrentReading() {
    const lesson = readingLessonsRegistry[readingState.currentLessonId];
    if (!lesson) return;
    const example = lesson.examples[readingState.currentExampleIdx];
    if (!example) return;

    if (!confirm('Bạn có chắc chắn muốn làm lại bài đọc này từ đầu không?')) return;

    if (readingState.answers[example.id]) {
      delete readingState.answers[example.id];
    }
    if (readingState.submissions[example.id]) {
      delete readingState.submissions[example.id];
    }
    persistAnswers();
    persistSubmissions();

    renderReadingPassage(example);
    renderReadingQuestions(example);
    hideSubmissionResults();
    resetReadingTimer();
    updateReadingOverallProgress();
  }

  function showSubmissionResults(example, sub) {
    if (!rEl.readingResultCard) return;

    rEl.readingResultCard.classList.remove('hidden');
    if (rEl.readingScoreNumber) rEl.readingScoreNumber.textContent = `${sub.score}/${sub.total}`;
    
    const pct = sub.total > 0 ? Math.round((sub.score / sub.total) * 100) : 0;
    if (rEl.readingScorePercent) rEl.readingScorePercent.textContent = `${pct}% chính xác`;

    if (rEl.readingQuickScorePill) {
      rEl.readingQuickScorePill.classList.remove('hidden');
      rEl.readingQuickScorePill.textContent = `Điểm: ${sub.score}/${sub.total} (${pct}%)`;
    }

    if (rEl.readingResultFeedback) {
      if (pct === 100) {
        rEl.readingResultFeedback.textContent = '🎉 Xuất sắc! Bạn đã trả lời đúng toàn bộ câu hỏi!';
      } else if (pct >= 75) {
        rEl.readingResultFeedback.textContent = '👏 Rất tốt! Bạn đã nắm vững các từ khóa và dẫn chứng quan trọng.';
      } else if (pct >= 50) {
        rEl.readingResultFeedback.textContent = '👍 Khá tốt! Xem giải thích ngay dưới từng câu hỏi để hiểu rõ hơn.';
      } else {
        rEl.readingResultFeedback.textContent = '💪 Cần cố gắng thêm! Giải thích chi tiết nằm ngay dưới từng câu hỏi.';
      }
    }

    // Hide separate explanations and bottom vocab section - explanations and vocab are now inline in each question card
    if (rEl.readingExplanationsSection) {
      rEl.readingExplanationsSection.classList.add('hidden');
    }
    if (rEl.readingVocabSection) {
      rEl.readingVocabSection.classList.add('hidden');
    }
  }

  function hideSubmissionResults() {
    if (rEl.readingResultCard) rEl.readingResultCard.classList.add('hidden');
    if (rEl.readingQuickScorePill) rEl.readingQuickScorePill.classList.add('hidden');
    if (rEl.readingExplanationsSection) rEl.readingExplanationsSection.classList.add('hidden');
  }

  window.scrollToEvidence = function(qid) {
    if (!rEl.readingPassageContent) return;
    const mark = rEl.readingPassageContent.querySelector(`.reading-evidence-mark[data-qid="${qid}"]`);
    if (mark) {
      rEl.readingPassageContent.querySelectorAll('.reading-evidence-mark').forEach(m => m.classList.remove('active-evidence'));
      mark.classList.add('active-evidence');
      mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (window.innerWidth < 1024) {
      setMobileTab('passage');
    }
  };

  function highlightQuestionElement(qid) {
    const card = document.getElementById(`q_card_${qid}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-2', 'ring-indigo-500');
      setTimeout(() => card.classList.remove('ring-2', 'ring-indigo-500'), 1500);
    }
    if (window.innerWidth < 1024) {
      setMobileTab('questions');
    }
  }

  // Wire Submit & Reset buttons
  if (rEl.readingSubmitBtn) {
    rEl.readingSubmitBtn.addEventListener('click', submitCurrentReading);
  }
  if (rEl.readingResetBtn) {
    rEl.readingResetBtn.addEventListener('click', resetCurrentReading);
  }

  // =========================================================================
  // VOCABULARY NOTEBOOK
  // =========================================================================
  function renderReadingVocab(example) {
    if (!rEl.readingVocabList) return;

    const sub = readingState.submissions[example.id];
    const isSubmitted = sub && sub.submitted;
    if (isSubmitted) {
      // After submission, vocabulary is already inlined in each question card
      if (rEl.readingVocabSection) rEl.readingVocabSection.classList.add('hidden');
      return;
    }

    const vocab = example.vocabulary || [];
    if (vocab.length === 0) {
      if (rEl.readingVocabSection) rEl.readingVocabSection.classList.add('hidden');
      return;
    }

    if (rEl.readingVocabSection) rEl.readingVocabSection.classList.remove('hidden');

    let html = '';
    vocab.forEach(item => {
      html += `
        <div class="p-3 rounded-xl bg-white border border-[#ded5c4] shadow-xs">
          <div class="flex items-baseline justify-between gap-1 mb-1">
            <span class="font-bold text-xs sm:text-sm text-stone-900">${escapeHtml(item.word)}</span>
            <span class="text-[11px] font-medium text-stone-600 italic">${escapeHtml(item.meaning)}</span>
          </div>
          ${item.example ? `
            <p class="text-[11px] text-stone-600 italic bg-[#faf8f4] p-1.5 rounded border border-[#eae4d5]">
              "${escapeHtml(item.example)}"
            </p>
          ` : ''}
        </div>
      `;
    });

    rEl.readingVocabList.innerHTML = html;
  }

  if (rEl.readingVocabToggleBtn) {
    rEl.readingVocabToggleBtn.addEventListener('click', () => {
      if (rEl.readingVocabList) {
        rEl.readingVocabList.classList.toggle('hidden');
      }
    });
  }

  // =========================================================================
  // TIMER (20-Minute IELTS Countdown)
  // =========================================================================
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  function updateTimerDisplay() {
    if (rEl.readingTimerDisplay) {
      rEl.readingTimerDisplay.textContent = formatTime(readingState.timerSeconds);
    }
  }

  function toggleReadingTimer() {
    if (readingState.timerRunning) {
      pauseReadingTimer();
    } else {
      startReadingTimer();
    }
  }

  function startReadingTimer() {
    if (readingState.timerRunning) return;
    readingState.timerRunning = true;
    updateTimerIcon(true);

    readingState.timerInterval = setInterval(() => {
      if (readingState.timerSeconds > 0) {
        readingState.timerSeconds--;
        updateTimerDisplay();
      } else {
        pauseReadingTimer();
        alert('⏰ Hết giờ làm bài đọc (20 phút)! Hãy kiểm tra lại và nộp bài để xem điểm.');
      }
    }, 1000);
  }

  function pauseReadingTimer() {
    readingState.timerRunning = false;
    updateTimerIcon(false);
    if (readingState.timerInterval) {
      clearInterval(readingState.timerInterval);
      readingState.timerInterval = null;
    }
  }

  function resetReadingTimer() {
    pauseReadingTimer();
    readingState.timerSeconds = 20 * 60;
    updateTimerDisplay();
  }

  function updateTimerIcon(isRunning) {
    if (!rEl.readingTimerToggleBtn) return;
    rEl.readingTimerToggleBtn.innerHTML = isRunning
      ? `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>`
      : `<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
  }

  if (rEl.readingTimerToggleBtn) {
    rEl.readingTimerToggleBtn.addEventListener('click', toggleReadingTimer);
  }
  if (rEl.readingTimerResetBtn) {
    rEl.readingTimerResetBtn.addEventListener('click', resetReadingTimer);
  }

  // =========================================================================
  // FONT RESIZING (A- / A+)
  // =========================================================================
  function applyFontSize() {
    document.documentElement.style.setProperty('--reading-font-size', `${readingState.fontSizeRem}rem`);
    localStorage.setItem(readingState.storagePrefix + 'font_size', String(readingState.fontSizeRem));
  }

  if (rEl.readingFontDecBtn) {
    rEl.readingFontDecBtn.addEventListener('click', () => {
      if (readingState.fontSizeRem > 0.85) {
        readingState.fontSizeRem = Math.round((readingState.fontSizeRem - 0.05) * 100) / 100;
        applyFontSize();
      }
    });
  }

  if (rEl.readingFontIncBtn) {
    rEl.readingFontIncBtn.addEventListener('click', () => {
      if (readingState.fontSizeRem < 1.35) {
        readingState.fontSizeRem = Math.round((readingState.fontSizeRem + 0.05) * 100) / 100;
        applyFontSize();
      }
    });
  }

  // =========================================================================
  // MOBILE TABS (Passage vs Questions)
  // =========================================================================
  function setMobileTab(tab) {
    readingState.mobileTab = tab;
    if (window.innerWidth >= 1024) {
      if (rEl.readingLeftPanel) rEl.readingLeftPanel.classList.remove('hidden');
      if (rEl.readingRightPanel) rEl.readingRightPanel.classList.remove('hidden');
      return;
    }

    if (tab === 'passage') {
      if (rEl.readingLeftPanel) rEl.readingLeftPanel.classList.remove('hidden');
      if (rEl.readingRightPanel) rEl.readingRightPanel.classList.add('hidden');
      if (rEl.mobileReadingTabPassage) {
        rEl.mobileReadingTabPassage.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-indigo-700 text-white shadow-xs text-center cursor-pointer';
      }
      if (rEl.mobileReadingTabQuestions) {
        rEl.mobileReadingTabQuestions.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-[#ded5c4] text-center cursor-pointer';
      }
    } else {
      if (rEl.readingLeftPanel) rEl.readingLeftPanel.classList.add('hidden');
      if (rEl.readingRightPanel) rEl.readingRightPanel.classList.remove('hidden');
      if (rEl.mobileReadingTabQuestions) {
        rEl.mobileReadingTabQuestions.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-indigo-700 text-white shadow-xs text-center cursor-pointer';
      }
      if (rEl.mobileReadingTabPassage) {
        rEl.mobileReadingTabPassage.className = 'flex-1 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 border border-[#ded5c4] text-center cursor-pointer';
      }
    }
  }

  if (rEl.mobileReadingTabPassage) {
    rEl.mobileReadingTabPassage.addEventListener('click', () => setMobileTab('passage'));
  }
  if (rEl.mobileReadingTabQuestions) {
    rEl.mobileReadingTabQuestions.addEventListener('click', () => setMobileTab('questions'));
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      if (rEl.readingLeftPanel) rEl.readingLeftPanel.classList.remove('hidden');
      if (rEl.readingRightPanel) rEl.readingRightPanel.classList.remove('hidden');
    } else {
      setMobileTab(readingState.mobileTab);
    }
  });

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

  // =========================================================================
  // INITIALIZATION
  // =========================================================================
  loadPersistedReadingData();

  // Check saved mode or default to Listening
  const activeMode = localStorage.getItem('ielts_active_mode') || 'listening';
  if (activeMode === 'reading') {
    window.switchSkillMode('reading');
  } else {
    // Keep listening as active mode
    window.switchSkillMode('listening');
  }
});
