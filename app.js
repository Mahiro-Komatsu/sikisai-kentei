/**
 * 色彩検定2級 予想問題＆模擬テスト 学習サイト メインロジック（4段階ステージ制・全125問・JIS慣用色名63色・記述対応版）
 */

const STORAGE_KEY = 'aft_color_2kyu_study_v2';

const state = {
  currentTab: 'dashboard', // 'dashboard' | 'practice' | 'exam' | 'jis' | 'lab'
  progress: {
    answered: {},   // { [qId]: { isCorrect: boolean, count: number, wrongCount: number, lastTime: number } }
    bookmarks: [],
    examHistory: []
  },
  practice: {
    filterStage: 'all',    // 'all' | '1' | '2' | '3' | '4'
    filterCategory: 'all', // 'all' | 'visual' | 'input' | 'wrong' | 'unanswered' | categoryId
    blindSwatchCode: false,
    shuffle: false,
    forceChoiceOnInput: false, // 記述問題を4択ヒントで表示するか
    queue: [],
    currentIndex: 0,
    selectedOption: null,
    typedAnswer: '',
    isInputCorrect: false,
    isRevealed: false
  },
  exam: {
    status: 'setup', // 'setup' | 'running' | 'result'
    preset: 'real50', // 'real50' | 'stage1' | 'stage2' | 'stage3' | 'stage4' | 'visual25'
    questions: [],
    answers: {},     // { [index]: optionIndex }
    flags: {},
    currentIndex: 0,
    remainingSec: 4200,
    totalSec: 4200,
    timerId: null,
    blindSwatchCode: false
  },
  jis: {
    filterType: 'all', // 'all' | '和色' | '外来色'
    hideNames: false,  // 暗記赤シートモード
    searchQuery: ''
  },
  lab: {
    selectedHue: 8,
    selectedTone: 'v',
    harmonyType: 'natural'
  }
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.progress.answered = parsed.answered || {};
      state.progress.bookmarks = parsed.bookmarks || [];
      state.progress.examHistory = parsed.examHistory || [];
    }
  } catch (e) {}
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  } catch (e) {}
}

function resetAllProgress() {
  state.progress = { answered: {}, bookmarks: [], examHistory: [] };
  saveProgress();
  renderDashboard();
}

function switchTab(tabId, opts = {}) {
  state.currentTab = tabId;
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.toggle('active', sec.id === `view-${tabId}`);
  });

  if (tabId === 'dashboard') {
    renderDashboard();
  } else if (tabId === 'practice') {
    if (opts.filterStage !== undefined) {
      state.practice.filterStage = String(opts.filterStage);
    }
    if (opts.filterCategory !== undefined) {
      state.practice.filterCategory = opts.filterCategory;
      const sel = document.getElementById('practice-category-select');
      if (sel) sel.value = opts.filterCategory;
    }
    if (opts.filterStage !== undefined || opts.filterCategory !== undefined || state.practice.queue.length === 0) {
      buildPracticeQueue();
    }
    renderPracticeView();
  } else if (tabId === 'exam') {
    if (opts.preset) {
      state.exam.preset = opts.preset;
      state.exam.status = 'setup';
    }
    renderExamView();
  } else if (tabId === 'jis') {
    renderJisView();
  } else if (tabId === 'lab') {
    renderLabView();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 1. ダッシュボード（4段階ステージ＋8章進捗）
// ==========================================
function renderDashboard() {
  const totalQ = QUESTIONS_DB.length;
  const answeredKeys = Object.keys(state.progress.answered);
  const answeredCount = answeredKeys.filter(id => QUESTIONS_DB.some(q => q.id === id)).length;
  const correctCount = answeredKeys.filter(id => state.progress.answered[id]?.isCorrect && QUESTIONS_DB.some(q => q.id === id)).length;
  const wrongIds = answeredKeys.filter(id => state.progress.answered[id] && !state.progress.answered[id].isCorrect);
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const bestExam = state.progress.examHistory.reduce((max, item) => Math.max(max, item.pct), 0);

  document.getElementById('stat-progress').textContent = `${answeredCount} / ${totalQ} 問`;
  document.getElementById('stat-progress-bar').style.width = `${Math.round((answeredCount / totalQ) * 100)}%`;
  document.getElementById('stat-accuracy').textContent = `${accuracy}%`;
  document.getElementById('stat-wrong-count').textContent = `${wrongIds.length} 問`;
  document.getElementById('stat-best-exam').textContent = state.progress.examHistory.length > 0 ? `${bestExam}% (200点中${Math.round(bestExam * 2)}点)` : '未受験';

  // 難易度別4ステージカード描画
  const stageGrid = document.getElementById('dashboard-stage-grid');
  stageGrid.innerHTML = Object.values(STAGES).map(st => {
    const stQs = QUESTIONS_DB.filter(q => q.stage === st.stage);
    const stCorrect = stQs.filter(q => state.progress.answered[q.id]?.isCorrect).length;
    const pct = stQs.length > 0 ? Math.round((stCorrect / stQs.length) * 100) : 0;
    const isCleared = pct >= st.targetAccuracy;

    return `
      <div class="stage-card stage-card-${st.stage}">
        <div class="stage-card-top">
          <span class="stage-pill ${st.badgeClass}">${st.shortName}</span>
          ${isCleared
            ? `<span class="stage-clear-badge">🏆 STAGE CLEAR!</span>`
            : `<span class="stage-goal-tag">目標習得率 ${st.targetAccuracy}%</span>`
          }
        </div>
        <h4 class="stage-card-title">${st.name}</h4>
        <p class="stage-card-desc">${st.description}</p>
        <div class="cat-progress-wrap" style="margin-bottom: 12px;">
          <div class="cat-progress-bar">
            <div class="cat-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span class="cat-pct">${stCorrect}/${stQs.length} (${pct}%)</span>
        </div>
        <div class="stage-card-actions">
          <button class="btn-primary btn-sm" onclick="switchTab('practice', { filterStage: '${st.stage}', filterCategory: 'all' })">このステージを演習 ▶</button>
          <button class="btn-secondary btn-sm" onclick="switchTab('exam', { preset: 'stage${st.stage}' })">昇格テスト</button>
        </div>
      </div>
    `;
  }).join('');

  // 公式テキスト全8章・分野別カード描画
  const catGrid = document.getElementById('dashboard-category-grid');
  catGrid.innerHTML = Object.values(CATEGORIES).map(cat => {
    const catQs = QUESTIONS_DB.filter(q => q.category === cat.id);
    const catCorrect = catQs.filter(q => state.progress.answered[q.id]?.isCorrect).length;
    const pct = catQs.length > 0 ? Math.round((catCorrect / catQs.length) * 100) : 0;
    return `
      <div class="cat-card" onclick="switchTab('practice', { filterStage: 'all', filterCategory: '${cat.id}' })">
        <div class="cat-card-header">
          <span class="cat-icon">${cat.icon}</span>
          <div>
            <h4 class="cat-title">${cat.name}</h4>
            <span class="cat-count">全 ${catQs.length} 問（習得 ${catCorrect}/${catQs.length}）</span>
          </div>
        </div>
        <p class="cat-desc">${cat.description}</p>
        <div class="cat-progress-wrap">
          <div class="cat-progress-bar">
            <div class="cat-progress-fill" style="width: ${pct}%"></div>
          </div>
          <span class="cat-pct">${pct}%</span>
        </div>
      </div>
    `;
  }).join('');

  // 模試履歴
  const historyContainer = document.getElementById('dashboard-exam-history');
  if (state.progress.examHistory.length === 0) {
    historyContainer.innerHTML = `<p class="empty-note">まだ予想模擬テストの受験記録がありません。「⏱️ 予想模擬テスト」タブから本番70分模試やステージ別テストに挑戦しましょう！</p>`;
  } else {
    const rows = state.progress.examHistory.slice().reverse().slice(0, 6).map(item => {
      const badge = item.passed
        ? `<span class="badge-pass">合格圏達成 (${item.scaled200}点/200点)</span>`
        : `<span class="badge-fail">あと少し (${item.scaled200}点/200点)</span>`;
      return `
        <tr>
          <td>${item.date}</td>
          <td>${item.modeName}</td>
          <td><strong>${item.score} / ${item.total} 問</strong> (${item.pct}%)</td>
          <td>${badge}</td>
        </tr>
      `;
    }).join('');
    historyContainer.innerHTML = `
      <table class="history-table">
        <thead>
          <tr><th>日時</th><th>コース</th><th>正答数</th><th>200点換算・合否判定</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }
}

// ==========================================
// 2. ステージ＆分野別 演習モード（125問）
// ==========================================
function buildPracticeQueue() {
  const stageFilter = state.practice.filterStage;
  const catFilter = state.practice.filterCategory;

  let list = QUESTIONS_DB.filter(q => {
    if (stageFilter !== 'all' && String(q.stage) !== String(stageFilter)) return false;
    if (catFilter === 'all') return true;
    if (catFilter === 'visual') return q.hasVisual || Boolean(q.spectralCurve);
    if (catFilter === 'input') return Boolean(q.isInputQuestion);
    if (catFilter === 'wrong') {
      const rec = state.progress.answered[q.id];
      return (rec && !rec.isCorrect) || state.progress.bookmarks.includes(q.id);
    }
    if (catFilter === 'unanswered') return !state.progress.answered[q.id];
    return q.category === catFilter;
  });

  if (state.practice.shuffle) {
    list = shuffleArray([...list]);
  }

  state.practice.queue = list;
  state.practice.currentIndex = 0;
  resetPracticeQuestionState();
}

function resetPracticeQuestionState() {
  state.practice.selectedOption = null;
  state.practice.typedAnswer = '';
  state.practice.isInputCorrect = false;
  state.practice.isRevealed = false;
  state.practice.forceChoiceOnInput = false;
}

function selectPracticeStage(stageVal) {
  state.practice.filterStage = String(stageVal);
  buildPracticeQueue();
  renderPracticeView();
}

function onPracticeFilterChange() {
  const sel = document.getElementById('practice-category-select');
  const blindToggle = document.getElementById('practice-blind-toggle');
  const shuffleToggle = document.getElementById('practice-shuffle-toggle');
  if (sel) state.practice.filterCategory = sel.value;
  if (blindToggle) state.practice.blindSwatchCode = blindToggle.checked;
  if (shuffleToggle) state.practice.shuffle = shuffleToggle.checked;
  buildPracticeQueue();
  renderPracticeView();
}

function togglePracticeBlindOnly() {
  const blindToggle = document.getElementById('practice-blind-toggle');
  state.practice.blindSwatchCode = blindToggle.checked;
  renderPracticeView();
}

function renderPracticeView() {
  // ステージボタンのアクティブ状態を更新
  document.querySelectorAll('.stage-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.stage === String(state.practice.filterStage));
  });

  const container = document.getElementById('practice-question-container');
  const queue = state.practice.queue;

  if (queue.length === 0) {
    container.innerHTML = `
      <div class="empty-card">
        <h3>条件に一致する問題がありません 🎉</h3>
        <p>ステージや出題範囲フィルターを変更して演習を続けましょう。</p>
        <button class="btn-primary" onclick="switchTab('practice', { filterStage: 'all', filterCategory: 'all' })">全125問を表示する</button>
      </div>
    `;
    return;
  }

  const q = queue[state.practice.currentIndex];
  const cat = CATEGORIES[q.category];
  const stObj = STAGES[q.stage] || STAGES[1];
  const isBookmarked = state.progress.bookmarks.includes(q.id);
  const pastRec = state.progress.answered[q.id];
  const showCodeNow = !state.practice.blindSwatchCode || state.practice.isRevealed;

  // 分光反射率グラフSVGがある場合は描画
  let spectralHtml = '';
  if (q.spectralCurve) {
    spectralHtml = renderSpectralCurveSVG(q.spectralCurve);
  }

  // プロンプト内の配色スウォッチ描画
  let promptSwatchesHtml = '';
  if (q.promptSwatches && q.promptSwatches.length > 0) {
    promptSwatchesHtml = `
      <div class="prompt-swatch-box">
        ${q.promptSwatches.map(group => `
          <div class="prompt-swatch-group">
            <span class="prompt-swatch-label">${group.label}</span>
            ${renderSwatchGroupHTML(group.codes, { showCode: showCodeNow, showDetail: state.practice.isRevealed, size: 'lg' })}
          </div>
        `).join('')}
      </div>
    `;
  }

  // 記述式（直接入力）モードか4択モードかの分岐
  let interactionHtml = '';
  if (q.isInputQuestion && !state.practice.forceChoiceOnInput) {
    interactionHtml = `
      <div class="input-question-box">
        <div class="input-label-row">
          <span>✍️ <strong>本試験・記述式対策：</strong>解答を直接入力してください（漢字・ひらがな・カタカナ対応）</span>
          ${!state.practice.isRevealed ? `
            <button class="btn-secondary btn-sm" onclick="state.practice.forceChoiceOnInput=true; renderPracticeView();">💡 ヒント（4択に切り替える）</button>
          ` : ''}
        </div>
        <div class="input-action-row">
          <input type="text" id="practice-direct-input" class="text-answer-input"
            placeholder="例：テラコッタ、新橋色、メタメリズム..."
            value="${state.practice.typedAnswer}"
            ${state.practice.isRevealed ? 'disabled' : ''}
            onkeydown="if(event.key==='Enter') submitDirectInputAnswer()" />
          ${!state.practice.isRevealed ? `
            <button class="btn-primary" onclick="submitDirectInputAnswer()">解答を判定する ✓</button>
          ` : ''}
        </div>
      </div>
    `;
  } else {
    const optionsHtml = q.options.map((opt, idx) => {
      let statusClass = '';
      let iconBadge = `<span class="opt-num">${['ア', 'イ', 'ウ', 'エ'][idx]}</span>`;
      if (state.practice.isRevealed) {
        if (idx === q.answer) {
          statusClass = 'opt-correct';
          iconBadge = `<span class="opt-num opt-num-correct">✓</span>`;
        } else if (idx === state.practice.selectedOption) {
          statusClass = 'opt-wrong';
          iconBadge = `<span class="opt-num opt-num-wrong">✕</span>`;
        } else {
          statusClass = 'opt-dimmed';
        }
      }
      const optSwatches = opt.swatches
        ? renderSwatchGroupHTML(opt.swatches, { showCode: showCodeNow, showDetail: state.practice.isRevealed, size: 'md' })
        : '';
      let displayText = opt.text;
      if (state.practice.blindSwatchCode && !state.practice.isRevealed && opt.swatches) {
        displayText = displayText.replace(/\b(ltg|dkg|dp|lt|sf|dk|v|b|s|d|p|g)\d{1,2}\b/g, ' [？] ');
      }
      return `
        <button class="option-btn ${statusClass}" onclick="selectPracticeOption(${idx})" ${state.practice.isRevealed ? 'disabled' : ''}>
          <div class="option-main">
            ${iconBadge}
            <span class="option-text">${displayText}</span>
          </div>
          ${optSwatches}
        </button>
      `;
    }).join('');

    interactionHtml = `<div class="options-list">${optionsHtml}</div>`;
  }

  // 解説ボックス
  let explanationHtml = '';
  if (state.practice.isRevealed) {
    const isCorrect = q.isInputQuestion && !state.practice.forceChoiceOnInput
      ? state.practice.isInputCorrect
      : state.practice.selectedOption === q.answer;

    explanationHtml = `
      <div class="explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
        <div class="exp-header">
          <span class="exp-result-badge">
            ${isCorrect ? '⭕ 正解！素晴らしい！' : `❌ 不正解（模範解答：「${q.options[q.answer].text}」）`}
          </span>
          <button class="btn-bookmark ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${q.id}')">
            ${isBookmarked ? '★ 復習リスト登録済' : '☆ 復習リストに追加'}
          </button>
        </div>
        <div class="exp-body">${q.explanation}</div>
        <div class="exp-actions">
          <button class="btn-secondary" onclick="prevPracticeQuestion()" ${state.practice.currentIndex === 0 ? 'disabled' : ''}>← 前の問題</button>
          <button class="btn-primary" onclick="nextPracticeQuestion()">
            ${state.practice.currentIndex < queue.length - 1 ? '次の問題へ進む →' : '最初の問題へ戻る ↺'}
          </button>
        </div>
      </div>
    `;
  }

  let pastStatusBadge = `<span class="q-status-tag tag-new">未解答</span>`;
  if (pastRec) {
    pastStatusBadge = pastRec.isCorrect
      ? `<span class="q-status-tag tag-ok">習得済 ✓</span>`
      : `<span class="q-status-tag tag-ng">要復習 !</span>`;
  }

  container.innerHTML = `
    <div class="question-card">
      <div class="question-meta">
        <div class="q-meta-left">
          <span class="stage-pill ${stObj.badgeClass}">${stObj.shortName}</span>
          <span class="q-cat-badge">${cat.icon} ${cat.shortName}</span>
          ${q.freq ? `<span class="q-freq-badge">🔥 ${q.freq}</span>` : ''}
          ${pastStatusBadge}
        </div>
        <div class="q-meta-right">
          <button class="btn-bookmark-sm ${isBookmarked ? 'active' : ''}" onclick="toggleBookmark('${q.id}')">
            ${isBookmarked ? '★ ブックマーク中' : '☆ ブックマーク'}
          </button>
          <span class="q-counter">問題 <strong>${state.practice.currentIndex + 1}</strong> / ${queue.length}</span>
        </div>
      </div>

      <h3 class="question-title"><span class="q-id-pill">${q.id.toUpperCase()}</span> ${q.question}</h3>
      ${spectralHtml}
      ${promptSwatchesHtml}
      ${interactionHtml}
      ${explanationHtml}

      ${!state.practice.isRevealed ? `
        <div class="practice-nav-footer">
          <button class="btn-secondary" onclick="prevPracticeQuestion()" ${state.practice.currentIndex === 0 ? 'disabled' : ''}>← 前の問題</button>
          <span class="hint-text">問題番号をクリックまたは前後のボタンで自由に移動できます</span>
          <button class="btn-secondary" onclick="nextPracticeQuestion()">スキップ →</button>
        </div>
      ` : ''}
    </div>
  `;
}

function submitDirectInputAnswer() {
  if (state.practice.isRevealed) return;
  const inputEl = document.getElementById('practice-direct-input');
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;

  const q = state.practice.queue[state.practice.currentIndex];
  const normalized = val.toLowerCase().replace(/\s+/g, '');
  const isOk = (q.acceptedAnswers || []).some(ans => normalized === ans.toLowerCase() || normalized.includes(ans.toLowerCase()));

  state.practice.typedAnswer = val;
  state.practice.isInputCorrect = isOk;
  state.practice.isRevealed = true;

  recordAnswerProgress(q.id, isOk);
  renderPracticeView();
}

function selectPracticeOption(idx) {
  if (state.practice.isRevealed) return;
  const q = state.practice.queue[state.practice.currentIndex];
  const isCorrect = idx === q.answer;
  state.practice.selectedOption = idx;
  state.practice.isRevealed = true;
  recordAnswerProgress(q.id, isCorrect);
  renderPracticeView();
}

function recordAnswerProgress(qId, isCorrect) {
  const prev = state.progress.answered[qId] || { count: 0, wrongCount: 0 };
  state.progress.answered[qId] = {
    isCorrect: isCorrect,
    count: prev.count + 1,
    wrongCount: prev.wrongCount + (isCorrect ? 0 : 1),
    lastTime: Date.now()
  };
  saveProgress();
}

function nextPracticeQuestion() {
  if (state.practice.currentIndex < state.practice.queue.length - 1) {
    state.practice.currentIndex++;
  } else {
    state.practice.currentIndex = 0;
  }
  resetPracticeQuestionState();
  renderPracticeView();
}

function prevPracticeQuestion() {
  if (state.practice.currentIndex > 0) {
    state.practice.currentIndex--;
    resetPracticeQuestionState();
    renderPracticeView();
  }
}

function toggleBookmark(qId) {
  const idx = state.progress.bookmarks.indexOf(qId);
  if (idx >= 0) state.progress.bookmarks.splice(idx, 1);
  else state.progress.bookmarks.push(qId);
  saveProgress();
  if (state.currentTab === 'practice') renderPracticeView();
}

// ==========================================
// 3. 本番形式・予想模擬テストモード（70分本試験準拠＋ステージ昇格テスト）
// ==========================================
function renderExamView() {
  const container = document.getElementById('exam-container');
  if (state.exam.status === 'setup') {
    const presets = [
      { id: 'real50', badge: '👑 本試験完全想定（70分・200点満点換算）', title: '本番形式・総合予想模試（50問）', specs: ['📝 全50問（全8章＋Stage1〜4バランス出題）', '⏳ 制限時間 70分（本試験と同じ）', '🏆 合格基準：200点満点中 140点（70%）以上'] },
      { id: 'visual25', badge: '🎨 実技・図版・慣用色名特化', title: '配色カード・分光グラフ・色名模試（25問）', specs: ['🎨 全25問（視覚スウォッチ・グラフ問題のみ）', '⏳ 制限時間 30分', '🏆 合格基準：70%（18問）以上'] },
      { id: 'stage1', badge: '🟢 Stage 1 昇格テスト', title: 'Lv.1 必修基礎 認定テスト（20問）', specs: ['📝 Stage 1 から20問出題', '⏳ 制限時間 25分', '🏆 クリア基準：80%（16問）以上'] },
      { id: 'stage2', badge: '🔵 Stage 2 昇格テスト', title: 'Lv.2 頻出標準 認定テスト（25問）', specs: ['📝 Stage 2 から25問出題', '⏳ 制限時間 30分', '🏆 クリア基準：75%（19問）以上'] },
      { id: 'stage3', badge: '🟠 Stage 3 昇格テスト', title: 'Lv.3 実戦応用 認定テスト（25問）', specs: ['📝 Stage 3 から25問出題（計算・複合問題）', '⏳ 制限時間 35分', '🏆 クリア基準：70%（18問）以上'] },
      { id: 'stage4', badge: '🔴 Stage 4 昇格テスト', title: 'Lv.4 発展・記述＆穴埋めテスト（25問）', specs: ['📝 Stage 4 全25問出題', '⏳ 制限時間 35分', '🏆 クリア基準：70%（18問）以上'] }
    ];

    container.innerHTML = `
      <div class="exam-setup-card">
        <div class="exam-setup-header">
          <h2>⏱️ 色彩検定2級 本番形式 予想模擬テスト＆ステージ認定試験</h2>
          <p>過去問の出題比率・試験時間（70分）・200点満点換算（140点以上で合格）を忠実に再現した模擬テストです。</p>
        </div>
        <div class="exam-preset-grid">
          ${presets.map(p => `
            <label class="preset-card ${state.exam.preset === p.id ? 'selected' : ''}" onclick="selectExamPreset('${p.id}')">
              <div class="preset-badge">${p.badge}</div>
              <h3>${p.title}</h3>
              <div class="preset-specs">
                ${p.specs.map(s => `<span>${s}</span>`).join('')}
              </div>
            </label>
          `).join('')}
        </div>
        <div class="exam-options-row">
          <label class="checkbox-label">
            <input type="checkbox" ${state.exam.blindSwatchCode ? 'checked' : ''} onchange="state.exam.blindSwatchCode = this.checked">
            <span><strong>実技ブラインドモード：</strong>配色カード内のPCCS記号（lt8等）を隠し、色の見た目だけで判断する本番実技モード</span>
          </label>
        </div>
        <div>
          <button class="btn-primary" onclick="startExam()">選択したコースで試験を開始する ▶</button>
        </div>
      </div>
    `;
    return;
  }
  if (state.exam.status === 'running') {
    renderExamRunning(container);
    return;
  }
  if (state.exam.status === 'result') {
    renderExamResult(container);
  }
}

function selectExamPreset(preset) {
  state.exam.preset = preset;
  renderExamView();
}

function startExam() {
  let selectedQs = [];
  let durationSec = 4200;

  if (state.exam.preset === 'real50') {
    // 全8章から本試験比率で計50問を抽出
    const quotas = {
      ch1_system: 6, ch1_names: 8, ch2_light: 7, ch3_harmony: 10,
      ch4_image: 4, ch5_perception: 7, ch6_visual: 3, ch78_design: 5
    };
    Object.keys(quotas).forEach(catId => {
      const pool = shuffleArray(QUESTIONS_DB.filter(q => q.category === catId));
      selectedQs.push(...pool.slice(0, quotas[catId]));
    });
    durationSec = 70 * 60;
  } else if (state.exam.preset === 'visual25') {
    selectedQs = shuffleArray(QUESTIONS_DB.filter(q => q.hasVisual || q.spectralCurve)).slice(0, 25);
    durationSec = 30 * 60;
  } else if (state.exam.preset.startsWith('stage')) {
    const stNum = parseInt(state.exam.preset.replace('stage', ''), 10);
    const count = stNum === 1 ? 20 : 25;
    selectedQs = shuffleArray(QUESTIONS_DB.filter(q => q.stage === stNum)).slice(0, count);
    durationSec = (stNum <= 2 ? 25 : 35) * 60;
  }

  state.exam.questions = selectedQs;
  state.exam.answers = {};
  state.exam.flags = {};
  state.exam.currentIndex = 0;
  state.exam.totalSec = durationSec;
  state.exam.remainingSec = durationSec;
  state.exam.status = 'running';

  if (state.exam.timerId) clearInterval(state.exam.timerId);
  state.exam.timerId = setInterval(() => {
    state.exam.remainingSec--;
    const timerEl = document.getElementById('exam-timer-display');
    if (timerEl) timerEl.textContent = formatTime(state.exam.remainingSec);
    if (state.exam.remainingSec <= 0) finishExam();
  }, 1000);

  renderExamView();
}

function renderExamRunning(container) {
  const qs = state.exam.questions;
  const idx = state.exam.currentIndex;
  const q = qs[idx];
  const cat = CATEGORIES[q.category];
  const stObj = STAGES[q.stage] || STAGES[1];
  const answeredCount = Object.keys(state.exam.answers).length;
  const showCode = !state.exam.blindSwatchCode;

  const paletteHtml = qs.map((_, i) => {
    const isCurrent = i === idx ? 'pal-current' : '';
    const isAnswered = state.exam.answers[i] !== undefined ? 'pal-answered' : '';
    const isFlagged = state.exam.flags[i] ? 'pal-flagged' : '';
    return `<button class="pal-btn ${isCurrent} ${isAnswered} ${isFlagged}" onclick="jumpExamQuestion(${i})">${i + 1}</button>`;
  }).join('');

  const spectralHtml = q.spectralCurve ? renderSpectralCurveSVG(q.spectralCurve) : '';

  let promptSwatchesHtml = '';
  if (q.promptSwatches && q.promptSwatches.length > 0) {
    promptSwatchesHtml = `
      <div class="prompt-swatch-box">
        ${q.promptSwatches.map(group => `
          <div class="prompt-swatch-group">
            <span class="prompt-swatch-label">${group.label}</span>
            ${renderSwatchGroupHTML(group.codes, { showCode: showCode, size: 'lg' })}
          </div>
        `).join('')}
      </div>
    `;
  }

  const optionsHtml = q.options.map((opt, optIdx) => {
    const isSelected = state.exam.answers[idx] === optIdx;
    const optSwatches = opt.swatches
      ? renderSwatchGroupHTML(opt.swatches, { showCode: showCode, size: 'md' })
      : '';
    let displayText = opt.text;
    if (state.exam.blindSwatchCode && opt.swatches) {
      displayText = displayText.replace(/\b(ltg|dkg|dp|lt|sf|dk|v|b|s|d|p|g)\d{1,2}\b/g, ' [？] ');
    }
    return `
      <button class="option-btn ${isSelected ? 'opt-selected' : ''}" onclick="selectExamAnswer(${optIdx})">
        <div class="option-main">
          <span class="opt-num ${isSelected ? 'opt-num-selected' : ''}">${['ア', 'イ', 'ウ', 'エ'][optIdx]}</span>
          <span class="option-text">${displayText}</span>
        </div>
        ${optSwatches}
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div class="exam-running-layout">
      <div class="exam-top-bar">
        <div>解答済み: <strong>${answeredCount} / ${qs.length} 問</strong></div>
        <div class="exam-timer-box">⏳ 残り時間: <strong id="exam-timer-display">${formatTime(state.exam.remainingSec)}</strong></div>
        <button class="btn-submit-exam" onclick="finishExam()">採点・提出する ✓</button>
      </div>
      <div class="exam-palette-bar">
        <span class="pal-label">問題番号パレット（青＝解答済 / 黄＝見直しフラグ）：</span>
        <div class="pal-grid">${paletteHtml}</div>
      </div>
      <div class="question-card">
        <div class="question-meta">
          <div class="q-meta-left">
            <span class="q-cat-badge">第 ${idx + 1} 問 / ${qs.length}</span>
            <span class="stage-pill ${stObj.badgeClass}">${stObj.shortName}</span>
            <span class="q-cat-badge">${cat.icon} ${cat.shortName}</span>
          </div>
          <label class="checkbox-label">
            <input type="checkbox" ${state.exam.flags[idx] ? 'checked' : ''} onchange="toggleExamFlag(${idx}, this.checked)">
            <span>🚩 後で見直す</span>
          </label>
        </div>
        <h3 class="question-title">${q.question}</h3>
        ${spectralHtml}
        ${promptSwatchesHtml}
        <div class="options-list">${optionsHtml}</div>
        <div class="exam-question-nav">
          <button class="btn-secondary" onclick="jumpExamQuestion(${idx - 1})" ${idx === 0 ? 'disabled' : ''}>← 前の問題</button>
          ${idx < qs.length - 1
            ? `<button class="btn-primary" onclick="jumpExamQuestion(${idx + 1})">次の問題 →</button>`
            : `<button class="btn-submit-exam" onclick="finishExam()">全問終了・採点する ✓</button>`
          }
        </div>
      </div>
    </div>
  `;
}

function selectExamAnswer(optIdx) { state.exam.answers[state.exam.currentIndex] = optIdx; renderExamView(); }
function toggleExamFlag(idx, checked) { state.exam.flags[idx] = checked; renderExamView(); }
function jumpExamQuestion(idx) {
  if (idx < 0 || idx >= state.exam.questions.length) return;
  state.exam.currentIndex = idx;
  renderExamView();
}

function finishExam() {
  if (state.exam.timerId) {
    clearInterval(state.exam.timerId);
    state.exam.timerId = null;
  }
  const qs = state.exam.questions;
  let correct = 0;
  qs.forEach((q, idx) => {
    const isOk = state.exam.answers[idx] === q.answer;
    if (isOk) correct++;
    recordAnswerProgress(q.id, isOk);
  });

  const pct = Math.round((correct / qs.length) * 100);
  const scaled200 = Math.round((correct / qs.length) * 200);
  const passed = scaled200 >= 140;
  const modeNames = {
    real50: '本番総合模試(50問/70分)',
    visual25: '実技・色名模試(25問)',
    stage1: 'Stage1 必修基礎テスト',
    stage2: 'Stage2 頻出標準テスト',
    stage3: 'Stage3 実戦応用テスト',
    stage4: 'Stage4 発展・記述テスト'
  };
  const now = new Date();
  const dateStr = `${now.getMonth() + 1}/${now.getDate()} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  state.progress.examHistory.push({
    date: dateStr,
    modeName: modeNames[state.exam.preset] || '模試',
    score: correct,
    total: qs.length,
    pct: pct,
    scaled200: scaled200,
    passed: passed
  });
  saveProgress();
  state.exam.status = 'result';
  renderExamView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderExamResult(container) {
  const qs = state.exam.questions;
  let correct = 0;
  const catStats = {};
  Object.keys(CATEGORIES).forEach(catId => { catStats[catId] = { total: 0, correct: 0 }; });
  qs.forEach((q, idx) => {
    const isOk = state.exam.answers[idx] === q.answer;
    if (isOk) correct++;
    catStats[q.category].total++;
    if (isOk) catStats[q.category].correct++;
  });

  const pct = Math.round((correct / qs.length) * 100);
  const scaled200 = Math.round((correct / qs.length) * 200);
  const passed = scaled200 >= 140;

  const catBreakdownHtml = Object.values(CATEGORIES).filter(cat => catStats[cat.id].total > 0).map(cat => {
    const st = catStats[cat.id];
    const cPct = Math.round((st.correct / st.total) * 100);
    return `
      <div class="result-cat-row">
        <span class="result-cat-name">${cat.icon} ${cat.shortName}</span>
        <div class="result-cat-bar-wrap">
          <div class="result-cat-bar ${cPct >= 70 ? 'bar-good' : 'bar-weak'}" style="width: ${cPct}%"></div>
        </div>
        <span class="result-cat-score">${st.correct}/${st.total} (${cPct}%)</span>
      </div>
    `;
  }).join('');

  const reviewListHtml = qs.map((q, idx) => {
    const userAns = state.exam.answers[idx];
    const isOk = userAns === q.answer;
    const userChoiceText = userAns !== undefined ? `${['ア', 'イ', 'ウ', 'エ'][userAns]}：${q.options[userAns].text}` : '未回答';
    const correctChoiceText = `${['ア', 'イ', 'ウ', 'エ'][q.answer]}：${q.options[q.answer].text}`;
    return `
      <div class="review-item">
        <div class="review-item-header">
          <span class="rev-badge ${isOk ? 'rev-badge-ok' : 'rev-badge-ng'}">${isOk ? '⭕ 正解' : '❌ 不正解'}</span>
          <span class="rev-q-num">第${idx + 1}問 [${STAGES[q.stage].shortName} / ${CATEGORIES[q.category].shortName}]</span>
        </div>
        <p class="rev-question">${q.question}</p>
        <div class="rev-choices-compare">
          <div>あなたの解答：<strong>${userChoiceText}</strong></div>
          <div>正解：<strong>${correctChoiceText}</strong></div>
        </div>
        <div class="rev-explanation">${q.explanation}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="exam-result-card">
      <div class="result-hero ${passed ? 'hero-pass' : 'hero-fail'}">
        <div class="result-badge-lg">${passed ? '🎉 合格基準（140点/200点）達成！' : '💪 あと少しで合格ライン（140点）！'}</div>
        <div><span class="score-num">${scaled200}</span> 点 / 200点満点換算（正答率 ${pct}%）</div>
        <p>正解数：<strong>${correct} / ${qs.length} 問</strong></p>
        <div class="result-hero-actions">
          <button class="btn-primary" onclick="state.exam.status='setup'; renderExamView();">別の模擬テスト・昇格試験を選ぶ</button>
          <button class="btn-secondary" onclick="switchTab('practice', { filterStage: 'all', filterCategory: 'wrong' })">間違えた問題を復習する →</button>
        </div>
      </div>
      <div class="result-section">
        <h3>📊 章・分野別 正答率診断（70%未満は重点復習分野）</h3>
        <div>${catBreakdownHtml}</div>
      </div>
      <div class="result-section">
        <h3>📝 全${qs.length}問の解答・解説振り返り</h3>
        <div class="review-list">${reviewListHtml}</div>
      </div>
    </div>
  `;
}

// ==========================================
// 4. 2級 JIS慣用色名 全63色 完全暗記帳＆赤シート
// ==========================================
function renderJisView() {
  const container = document.getElementById('jis-container');
  const filtered = JIS_COLORS_2KYU.filter(item => {
    if (state.jis.filterType !== 'all' && item.type !== state.jis.filterType) return false;
    if (state.jis.searchQuery) {
      const q = state.jis.searchQuery.toLowerCase();
      return item.name.toLowerCase().includes(q) || item.reading.includes(q) || item.sys.includes(q) || item.desc.includes(q);
    }
    return true;
  });

  const cardsHtml = filtered.map(c => {
    const isDark = isHexDark(c.hex);
    const hideClass = state.jis.hideNames ? 'jis-masked' : '';
    return `
      <div class="jis-color-card" onclick="this.classList.toggle('jis-revealed')">
        <div class="jis-swatch-banner" style="background:${c.hex}; color:${isDark ? '#FFF' : '#1E293B'};">
          <span class="jis-type-tag">${c.type}</span>
          <span class="jis-pccs-tag">近似: ${c.pccs}</span>
        </div>
        <div class="jis-card-body ${hideClass}">
          <div class="jis-name-row">
            <h4 class="jis-name">${c.name}</h4>
            <span class="jis-reading">（${c.reading}）</span>
          </div>
          <div class="jis-sys-badge">系統色名：<strong>${c.sys}</strong></div>
          <p class="jis-desc">${c.desc}</p>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="practice-toolbar">
      <div class="toolbar-group">
        <button class="stage-filter-btn ${state.jis.filterType === 'all' ? 'active' : ''}" onclick="state.jis.filterType='all'; renderJisView();">全63色（和色31＋外来32）</button>
        <button class="stage-filter-btn ${state.jis.filterType === '和色' ? 'active' : ''}" onclick="state.jis.filterType='和色'; renderJisView();">🌸 和色名（31色）</button>
        <button class="stage-filter-btn ${state.jis.filterType === '外来色' ? 'active' : ''}" onclick="state.jis.filterType='外来色'; renderJisView();">🌍 外来色名（32色）</button>
      </div>
      <div class="toolbar-group">
        <label class="checkbox-label">
          <input type="checkbox" ${state.jis.hideNames ? 'checked' : ''} onchange="state.jis.hideNames = this.checked; renderJisView();">
          <span>🟥 <strong>赤シート暗記モード</strong>（色名と系統色名を隠す・カードクリックで表示）</span>
        </label>
        <button class="btn-primary btn-sm" onclick="switchTab('practice', { filterStage: 'all', filterCategory: 'ch1_names' })">慣用色名の問題を解く ▶</button>
      </div>
    </div>
    <div class="jis-grid">${cardsHtml}</div>
  `;
}

// ==========================================
// 5. PCCS 24色相環＆12トーン シミュレーター
// ==========================================
function renderLabView() {
  const hueNum = state.lab.selectedHue;
  const toneCode = state.lab.selectedTone;
  const hueObj = PCCS_HUES[hueNum];
  const currentCode = `${toneCode}${hueNum}`;
  const currentColor = getPCCSColor(currentCode);

  const size = 340;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 132;
  const harmonyInfo = computeHarmonyCards(hueNum, toneCode, state.lab.harmonyType);
  const highlightHues = harmonyInfo.cards.map(c => getPCCSColor(c).hueNum).filter(Boolean);

  let wheelNodes = '';
  for (let i = 1; i <= 24; i++) {
    const angleDeg = (i - 8) * 15 - 90;
    const rad = (angleDeg * Math.PI) / 180;
    const x = cx + rOuter * Math.cos(rad);
    const y = cy + rOuter * Math.sin(rad);
    const chipColor = getPCCSColor(`${toneCode}${i}`);
    const isSelected = i === hueNum;
    const isPartner = highlightHues.includes(i) && !isSelected;
    const rCircle = isSelected ? 19 : (isPartner ? 17 : 14);
    const stroke = isSelected ? '#111827' : (isPartner ? '#2563EB' : '#FFFFFF');
    const strokeW = isSelected ? 3.5 : (isPartner ? 3 : 1.5);
    wheelNodes += `
      <g onclick="selectLabHue(${i})" style="cursor:pointer;">
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rCircle}" fill="${chipColor.hex}" stroke="${stroke}" stroke-width="${strokeW}" />
        <text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="11" font-weight="700" fill="${chipColor.isDark ? '#FFF' : '#111'}">${i}</text>
      </g>
    `;
  }

  let harmonyLines = '';
  if (highlightHues.length >= 2) {
    const pts = highlightHues.map(hIdx => {
      const angleDeg = (hIdx - 8) * 15 - 90;
      const rad = (angleDeg * Math.PI) / 180;
      return `${(cx + (rOuter - 18) * Math.cos(rad)).toFixed(1)},${(cy + (rOuter - 18) * Math.sin(rad)).toFixed(1)}`;
    });
    harmonyLines = `<polygon points="${pts.join(' ')}" fill="rgba(37, 99, 235, 0.12)" stroke="#2563EB" stroke-width="2.5" stroke-dasharray="4 2" />`;
  }

  const wheelSvg = `
    <svg viewBox="0 0 ${size} ${size}" class="pccs-wheel-svg">
      <circle cx="${cx}" cy="${cy}" r="${rOuter}" fill="none" stroke="#E2E8F0" stroke-width="1" />
      ${harmonyLines}
      ${wheelNodes}
      <text x="${cx}" y="${cy - 8}" text-anchor="middle" font-size="13" font-weight="700" fill="#334155">${hueObj.code}</text>
      <text x="${cx}" y="${cy + 10}" text-anchor="middle" font-size="12" fill="#64748B">${hueObj.name}</text>
      <text x="${cx}" y="${cy + 26}" text-anchor="middle" font-size="12" fill="#94A3B8">マンセル: ${hueObj.munsell}</text>
    </svg>
  `;

  const toneButtonsHtml = Object.values(PCCS_TONES).map(t => {
    const c = getPCCSColor(`${t.code}${hueNum}`);
    const isSel = t.code === toneCode;
    return `
      <button class="tone-circle-btn ${isSel ? 'tone-selected' : ''}"
        style="background:${c.hex}; color:${c.isDark ? '#FFF' : '#111'}; grid-column:${t.x}; grid-row:${Math.round(t.y * 2)};"
        onclick="selectLabTone('${t.code}')">
        <span class="t-code">${t.code}</span>
        <span class="t-mod">${t.modifier}</span>
      </button>
    `;
  }).join('');

  document.getElementById('lab-container').innerHTML = `
    <div class="lab-grid">
      <div class="lab-panel">
        <h3>1. PCCS 24色相環（クリックで基準色相を変更）</h3>
        <p class="lab-hint">真上が最も高明度な「8:Y（黄）」、真下が最も低明度な「20:V（青紫）」です。</p>
        <div class="wheel-wrap">${wheelSvg}</div>
      </div>
      <div class="lab-panel">
        <h3>2. PCCS 12トーン図（クリックでトーンを変更）</h3>
        <p class="lab-hint">純色（v）に白を混ぜた明清色（p, lt, b）、黒を混ぜた暗清色（dp, dk）、灰色を混ぜた中間色。</p>
        <div class="tone-map-grid">${toneButtonsHtml}</div>
        <div class="selected-color-detail">
          <div class="detail-chip" style="background:${currentColor.hex}; color:${currentColor.isDark ? '#FFF' : '#111'}">
            <strong>${currentCode}</strong>
          </div>
          <div class="detail-meta">
            <div><strong>色名：</strong>${currentColor.name}</div>
            <div><strong>PCCS色相：</strong>${hueObj.code}（${hueObj.name}） / マンセル近似：<code>${hueObj.munsell}</code></div>
            <div><strong>トーン分類：</strong>${PCCS_TONES[toneCode].category}（${PCCS_TONES[toneCode].name}）</div>
          </div>
        </div>
      </div>
    </div>
    <div class="lab-harmony-panel">
      <h3>3. 選択した色（${currentCode}）を基準にした配色技法シミュレーター</h3>
      <div class="harmony-tabs">
        ${[
          { id: 'natural', label: 'ナチュラルハーモニー' },
          { id: 'complex', label: 'コンプレックスハーモニー' },
          { id: 'camaieu', label: 'フォカマイユ' },
          { id: 'split', label: 'スプリットコンプリメンタリー' },
          { id: 'triad', label: 'トライアド (3等分)' },
          { id: 'tetrad', label: 'テトラード (4等分)' },
          { id: 'toneOnTone', label: 'トーンオントーン' }
        ].map(tab => `
          <button class="harmony-tab-btn ${state.lab.harmonyType === tab.id ? 'active' : ''}" onclick="selectLabHarmony('${tab.id}')">
            ${tab.label}
          </button>
        `).join('')}
      </div>
      <div class="harmony-showcase">
        <div>${renderSwatchGroupHTML(harmonyInfo.cards, { showCode: true, showDetail: true, size: 'xl' })}</div>
        <div class="harmony-desc-box">
          <h4>${harmonyInfo.title}</h4>
          <p>${harmonyInfo.desc}</p>
        </div>
      </div>
    </div>
  `;
}

function selectLabHue(h) { state.lab.selectedHue = h; renderLabView(); }
function selectLabTone(t) { state.lab.selectedTone = t; renderLabView(); }
function selectLabHarmony(type) { state.lab.harmonyType = type; renderLabView(); }
function wrapHue(h) { return ((h - 1 + 24) % 24) + 1; }

function computeHarmonyCards(hueNum, toneCode, type) {
  const neighborHue = wrapHue(hueNum + 2);
  const isBaseHigher = V_BASE_LIGHTNESS[hueNum] >= V_BASE_LIGHTNESS[neighborHue];
  if (type === 'natural') {
    const c1 = `${isBaseHigher ? 'lt' : 'd'}${hueNum}`;
    const c2 = `${isBaseHigher ? 'd' : 'lt'}${neighborHue}`;
    return {
      title: `ナチュラルハーモニー（${c1} × ${c2}）`,
      cards: [c1, c2],
      desc: `黄色（8:Y）に近い方の色相を高明度トーン（lt）、青紫（20:V）に近い方の色相を低明度トーン（d）にした自然調和配色です。`
    };
  }
  if (type === 'complex') {
    const c1 = `${isBaseHigher ? 'd' : 'lt'}${hueNum}`;
    const c2 = `${isBaseHigher ? 'lt' : 'd'}${neighborHue}`;
    return {
      title: `コンプレックスハーモニー（${c1} × ${c2}）`,
      cards: [c1, c2],
      desc: `自然の明度順列を逆転させ、黄色（8:Y）に近い側を暗いトーン（d）、青紫（20:V）に近い側を明るいトーン（lt）にした個性的な配色です。`
    };
  }
  if (type === 'camaieu') {
    const f1 = `${toneCode}${hueNum}`;
    const f2 = `${toneCode}${wrapHue(hueNum + 2)}`;
    return {
      title: `フォカマイユ配色（${f1} × ${f2}）`,
      cards: [f1, f2],
      desc: `同一トーン（${toneCode}）で類似色相（色相差2）を組み合わせた上品な配色です。`
    };
  }
  if (type === 'split') {
    const comp = wrapHue(hueNum + 12);
    const s1 = wrapHue(comp - 1);
    const s2 = wrapHue(comp + 1);
    return {
      title: `スプリットコンプリメンタリー（色相 ${hueNum} - ${s1} - ${s2}）`,
      cards: [`${toneCode}${hueNum}`, `${toneCode}${s1}`, `${toneCode}${s2}`],
      desc: `基準色（${hueNum}番）の補色（${comp}番）の両隣（${s1}番・${s2}番）を組み合わせた分裂補色3色配色です。`
    };
  }
  if (type === 'triad') {
    const h2 = wrapHue(hueNum + 8);
    const h3 = wrapHue(hueNum + 16);
    return {
      title: `トライアド（色相差8：${hueNum} - ${h2} - ${h3}）`,
      cards: [`${toneCode}${hueNum}`, `${toneCode}${h2}`, `${toneCode}${h3}`],
      desc: `24色相環を3等分（8色相間隔）して正三角形を結ぶ3色配色です。`
    };
  }
  if (type === 'tetrad') {
    const h2 = wrapHue(hueNum + 6);
    const h3 = wrapHue(hueNum + 12);
    const h4 = wrapHue(hueNum + 18);
    return {
      title: `テトラード（色相差6：${hueNum} - ${h2} - ${h3} - ${h4}）`,
      cards: [`${toneCode}${hueNum}`, `${toneCode}${h2}`, `${toneCode}${h3}`, `${toneCode}${h4}`],
      desc: `24色相環を4等分（6色相間隔）して正方形を結ぶ4色配色です。`
    };
  }
  return {
    title: `トーンオントーン配色（lt${hueNum} × dk${hueNum}）`,
    cards: [`lt${hueNum}`, `dk${hueNum}`],
    desc: `同一色相（${PCCS_HUES[hueNum].code}）の中で明度差を大きくとった濃淡2色配色です。`
  };
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatTime(sec) {
  const s = Math.max(0, sec);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
}

window.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  buildPracticeQueue();
  renderDashboard();
});
