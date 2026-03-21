const textbook = {
  title: "Agentic Systems Handbook",
  subtitle:
    "A practical interactive text for building reliable AI agents, from architecture to evaluation.",
  chapters: [
    {
      id: "foundations",
      title: "Foundations of Agentic Systems",
      description: "Mental models, capabilities, and limits.",
      readTime: "9 min",
      sections: [
        {
          heading: "What Makes a System Agentic?",
          body: [
            "An agentic system takes goals, observes context, chooses actions, and revises based on feedback. It is not only generating text; it is making decisions in a loop.",
            "The loop is typically: plan -> act -> observe -> reflect -> repeat. Durable agents make this loop explicit so behavior can be debugged and improved."
          ]
        },
        {
          heading: "Common Failure Modes",
          body: [
            "Most failures are not model failures. They are process failures: vague goals, no guardrails, missing retries, weak validation, or no fallback path.",
            "Your first design task is to define what success and failure mean before writing implementation code."
          ]
        }
      ],
      activity: {
        prompt:
          "Write one workflow in your business where a clear goal and a repeatable feedback loop already exist. That is your best candidate for your first agent."
      },
      quiz: [
        {
          question: "Which sequence best describes an agentic loop?",
          options: [
            "Prompt -> answer -> publish",
            "Plan -> act -> observe -> reflect",
            "Collect data -> train model -> deploy"
          ],
          answer: 1,
          explanation: "Agentic behavior depends on iterative action and feedback."
        },
        {
          question: "What usually causes the first production failures?",
          options: [
            "Model architecture alone",
            "Lack of process controls and validation",
            "Too many design colors"
          ],
          answer: 1,
          explanation: "Operational design issues drive most early failures."
        }
      ]
    },
    {
      id: "architecture",
      title: "Architecture and Scope",
      description: "Define boundaries, tools, and safety.",
      readTime: "11 min",
      sections: [
        {
          heading: "Start with a Narrow Slice",
          body: [
            "Do not begin with a broad autonomous assistant. Begin with one task and one measurable output. Scope should be narrow enough for deterministic evaluation.",
            "A single, reliable workflow beats a broad unreliable assistant every time."
          ]
        },
        {
          heading: "Tool Use and Permissions",
          body: [
            "Agents should call tools that have clear input and output contracts. Each tool should expose the minimum permissions needed.",
            "Separate read operations from write operations and always log write attempts."
          ]
        }
      ],
      activity: {
        prompt:
          "List one workflow where your agent only needs read access and one where it must write. Define a human-approval checkpoint for the write workflow."
      },
      quiz: [
        {
          question: "Why start with a narrow slice?",
          options: [
            "It helps create measurable outcomes and faster iteration",
            "Because agents cannot use tools",
            "Because narrow systems require no monitoring"
          ],
          answer: 0,
          explanation: "Narrow scope accelerates learning with fewer variables."
        },
        {
          question: "What is a core rule for tool permissions?",
          options: [
            "Grant all permissions by default",
            "Separate read/write and minimize privilege",
            "Hide tool outputs from logs"
          ],
          answer: 1,
          explanation: "Least privilege reduces blast radius and improves auditability."
        }
      ]
    },
    {
      id: "evaluation",
      title: "Evaluation and Iteration",
      description: "Measure quality and improve safely.",
      readTime: "10 min",
      sections: [
        {
          heading: "Define Rubrics Before Launch",
          body: [
            "Evaluation rubrics should be defined before deployment. Include precision, completeness, latency, and policy adherence.",
            "Rubrics should be understandable by both engineers and non-technical stakeholders."
          ]
        },
        {
          heading: "Close the Feedback Loop",
          body: [
            "Production logs are not enough. You need structured review: failed cases, root-cause labeling, and targeted prompt/tool updates.",
            "Iteration should be scheduled, not ad hoc."
          ]
        }
      ],
      activity: {
        prompt:
          "Design a 3-criterion rubric for one chapter of this textbook and define a pass threshold in percentage."
      },
      quiz: [
        {
          question: "When should evaluation rubrics be designed?",
          options: [
            "After major incidents",
            "Before deployment",
            "Only when users complain"
          ],
          answer: 1,
          explanation: "Predefined rubrics create consistent standards and faster debugging."
        },
        {
          question: "What makes iteration effective?",
          options: [
            "Random weekly prompt changes",
            "Structured reviews and targeted updates",
            "Ignoring low-confidence outputs"
          ],
          answer: 1,
          explanation: "A structured feedback loop creates durable gains."
        }
      ]
    }
  ]
};

const storageKey = "interactive_textbook_progress_v1";

const defaultState = {
  currentChapterId: textbook.chapters[0].id,
  completedChapters: [],
  quizScores: {},
  notes: {}
};

let state = loadState();

const chapterListEl = document.getElementById("chapterList");
const chapterContentEl = document.getElementById("chapterContent");
const overallProgressBarEl = document.getElementById("overallProgressBar");
const overallProgressLabelEl = document.getElementById("overallProgressLabel");
const chapterSearchEl = document.getElementById("chapterSearch");
const bookTitleEl = document.getElementById("bookTitle");
const bookSubtitleEl = document.getElementById("bookSubtitle");

init();

function init() {
  bookTitleEl.textContent = textbook.title;
  bookSubtitleEl.textContent = textbook.subtitle;

  const hashChapter = window.location.hash.replace("#", "").trim();
  if (hashChapter && textbook.chapters.some((c) => c.id === hashChapter)) {
    state.currentChapterId = hashChapter;
  }

  renderSidebar();
  renderCurrentChapter();
  updateProgress();

  chapterSearchEl.addEventListener("input", renderSidebar);
  window.addEventListener("hashchange", () => {
    const id = window.location.hash.replace("#", "").trim();
    if (textbook.chapters.some((c) => c.id === id)) {
      state.currentChapterId = id;
      saveState();
      renderSidebar();
      renderCurrentChapter();
      updateProgress();
    }
  });
}

function renderSidebar() {
  const searchValue = chapterSearchEl.value.trim().toLowerCase();

  const filtered = textbook.chapters.filter((chapter) => {
    if (!searchValue) return true;
    return (
      chapter.title.toLowerCase().includes(searchValue) ||
      chapter.description.toLowerCase().includes(searchValue)
    );
  });

  chapterListEl.innerHTML = "";

  if (!filtered.length) {
    const empty = document.createElement("li");
    empty.textContent = "No matching chapters.";
    empty.className = "chapter-meta";
    chapterListEl.appendChild(empty);
    return;
  }

  filtered.forEach((chapter, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.className = "chapter-link";
    if (chapter.id === state.currentChapterId) button.classList.add("active");

    const isComplete = state.completedChapters.includes(chapter.id);
    const score = state.quizScores[chapter.id];
    const scoreLabel = typeof score === "number" ? `Quiz ${score}%` : "Quiz not taken";

    button.innerHTML = `
      <span class="chapter-index">Chapter ${index + 1}</span>
      <span class="chapter-title">${escapeHtml(chapter.title)}</span>
      <span class="chapter-meta">${escapeHtml(chapter.readTime)} • ${escapeHtml(chapter.description)}</span>
      <span class="chapter-meta">${isComplete ? '<span class="tag">Completed</span>' : ""}${escapeHtml(scoreLabel)}</span>
    `;

    button.addEventListener("click", () => {
      state.currentChapterId = chapter.id;
      saveState();
      if (window.location.hash !== `#${chapter.id}`) {
        window.location.hash = chapter.id;
      }
      renderSidebar();
      renderCurrentChapter();
      updateProgress();
    });

    item.appendChild(button);
    chapterListEl.appendChild(item);
  });
}

function renderCurrentChapter() {
  const chapter = textbook.chapters.find((item) => item.id === state.currentChapterId) || textbook.chapters[0];

  const sectionsHtml = chapter.sections
    .map(
      (section) => `
      <section class="section-card">
        <h3>${escapeHtml(section.heading)}</h3>
        ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </section>
    `
    )
    .join("");

  chapterContentEl.innerHTML = `
    <header class="chapter-header">
      <div>
        <p class="eyebrow">${escapeHtml(chapter.readTime)} read</p>
        <h2>${escapeHtml(chapter.title)}</h2>
        <p>${escapeHtml(chapter.description)}</p>
      </div>
      <div class="chapter-actions">
        <button id="toggleCompleteBtn" class="primary-btn" type="button">
          ${state.completedChapters.includes(chapter.id) ? "Mark Incomplete" : "Mark Complete"}
        </button>
      </div>
    </header>

    ${sectionsHtml}

    <section class="activity-card">
      <h3>Try It</h3>
      <p>${escapeHtml(chapter.activity.prompt)}</p>
    </section>

    <section class="quiz-card">
      <h3>Knowledge Check</h3>
      <form id="quizForm" novalidate></form>
      <div class="quiz-footer">
        <button id="submitQuizBtn" class="secondary-btn" type="button">Check Answers</button>
        <strong class="quiz-score" id="quizScoreText"></strong>
      </div>
    </section>

    <section class="notes-card">
      <h3>Study Notes</h3>
      <textarea id="chapterNotes" placeholder="Add your notes for this chapter...">${escapeHtml(
        state.notes[chapter.id] || ""
      )}</textarea>
      <p class="tiny">Notes are saved locally in this browser.</p>
    </section>
  `;

  renderQuiz(chapter);
  bindChapterEvents(chapter);
}

function renderQuiz(chapter) {
  const quizForm = document.getElementById("quizForm");
  const template = document.getElementById("quizQuestionTemplate");

  quizForm.innerHTML = "";

  chapter.quiz.forEach((question, questionIndex) => {
    const fragment = template.content.cloneNode(true);
    const fieldset = fragment.querySelector("fieldset");
    const legend = fragment.querySelector("legend");
    const optionsContainer = fragment.querySelector(".options");

    fieldset.dataset.questionIndex = String(questionIndex);
    legend.textContent = `${questionIndex + 1}. ${question.question}`;

    question.options.forEach((optionText, optionIndex) => {
      const id = `q-${chapter.id}-${questionIndex}-${optionIndex}`;

      const row = document.createElement("label");
      row.className = "option-row";
      row.setAttribute("for", id);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q-${questionIndex}`;
      input.id = id;
      input.value = String(optionIndex);

      row.appendChild(input);
      row.appendChild(document.createTextNode(optionText));
      optionsContainer.appendChild(row);
    });

    quizForm.appendChild(fragment);
  });

  const existingScore = state.quizScores[chapter.id];
  const scoreText = document.getElementById("quizScoreText");
  scoreText.textContent = typeof existingScore === "number" ? `Previous score: ${existingScore}%` : "";
}

function bindChapterEvents(chapter) {
  const toggleCompleteBtn = document.getElementById("toggleCompleteBtn");
  const submitQuizBtn = document.getElementById("submitQuizBtn");
  const chapterNotes = document.getElementById("chapterNotes");

  toggleCompleteBtn.addEventListener("click", () => {
    const completed = state.completedChapters.includes(chapter.id);

    if (completed) {
      state.completedChapters = state.completedChapters.filter((id) => id !== chapter.id);
    } else {
      state.completedChapters.push(chapter.id);
    }

    saveState();
    renderSidebar();
    renderCurrentChapter();
    updateProgress();
  });

  submitQuizBtn.addEventListener("click", () => {
    gradeQuiz(chapter);
    saveState();
    renderSidebar();
    updateProgress();
  });

  chapterNotes.addEventListener("input", (event) => {
    state.notes[chapter.id] = event.target.value;
    saveState();
  });
}

function gradeQuiz(chapter) {
  const quizForm = document.getElementById("quizForm");
  const feedbackEls = chapterContentEl.querySelectorAll(".feedback");
  feedbackEls.forEach((el) => {
    el.hidden = true;
    el.textContent = "";
    el.className = "feedback";
  });

  let correct = 0;

  chapter.quiz.forEach((question, questionIndex) => {
    const selected = quizForm.querySelector(`input[name="q-${questionIndex}"]:checked`);
    const fieldset = quizForm.querySelector(`fieldset[data-question-index="${questionIndex}"]`);
    const feedback = fieldset.querySelector(".feedback");

    if (!selected) {
      feedback.hidden = false;
      feedback.classList.add("error");
      feedback.textContent = "Pick an answer before grading.";
      return;
    }

    const selectedIndex = Number(selected.value);
    if (selectedIndex === question.answer) {
      correct += 1;
      feedback.hidden = false;
      feedback.classList.add("success");
      feedback.textContent = `Correct. ${question.explanation}`;
    } else {
      feedback.hidden = false;
      feedback.classList.add("error");
      feedback.textContent = `Not quite. ${question.explanation}`;
    }
  });

  const score = Math.round((correct / chapter.quiz.length) * 100);
  state.quizScores[chapter.id] = score;

  const scoreText = document.getElementById("quizScoreText");
  scoreText.textContent = `Score: ${score}%`;
}

function updateProgress() {
  const completedWeight = (state.completedChapters.length / textbook.chapters.length) * 70;

  const quizScores = Object.values(state.quizScores);
  const avgQuiz = quizScores.length
    ? quizScores.reduce((sum, value) => sum + value, 0) / quizScores.length
    : 0;
  const quizWeight = (avgQuiz / 100) * 30;

  const overall = Math.round(completedWeight + quizWeight);

  overallProgressBarEl.style.width = `${overall}%`;
  overallProgressLabelEl.textContent = `${overall}%`;
  const progressTrack = overallProgressBarEl.parentElement;
  if (progressTrack) progressTrack.setAttribute("aria-valuenow", String(overall));
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return createDefaultState();

    const parsed = JSON.parse(raw);
    return {
      ...createDefaultState(),
      ...parsed,
      completedChapters: Array.isArray(parsed.completedChapters)
        ? parsed.completedChapters.filter((id) => textbook.chapters.some((c) => c.id === id))
        : [],
      quizScores: parsed.quizScores && typeof parsed.quizScores === "object" ? parsed.quizScores : {},
      notes: parsed.notes && typeof parsed.notes === "object" ? parsed.notes : {}
    };
  } catch (_error) {
    return createDefaultState();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createDefaultState() {
  return {
    currentChapterId: defaultState.currentChapterId,
    completedChapters: [],
    quizScores: {},
    notes: {}
  };
}
