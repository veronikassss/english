const STORAGE_KEY = "english-kids-mvp-static-progress-v28-day1-final";

const defaultProgress = {
  userId: "local-user",
  userName: "Kid",
  avatar: { id: "avatar-1", name: "Kid", image: "🧒" },
  xp: 0,
  completedTaskIds: [],
  completedSceneIds: [],
  seenGrammarCardSkillIds: [],
  seenVocabCardIds: [],
  helperName: "",
  zooRestUntil: 0,
  zooRestStartXp: 0,
  zooRestStarted: false,
  zooWakeToastShown: false,
  zooRestStartNonZooTaskCount: 0,
  achievementIds: [],
  buddyItemIds: ["fast-travel-backpack", "kindergarten-certificate"],
  lexMessages: [],
  lexSeenEventIds: [],
  seenSceneGrammarFlowIds: [],
};

const loadedProgress = loadProgress();

const state = {
  progress: loadedProgress,
  selectedWorldId: "cafe",
  selectedScene: null,
  currentTaskIndex: 0,
  sceneMistakes: 0,
  feedback: "",
  modalSkillId: null,
  modalGrammarCardId: null,
  modalVocabCardId: null,
  modalAchievementId: null,
  showAchievementsModal: false,
  showBuddyModal: false,
  toastMessage: "",
  pendingScene: null,
  pendingWorldId: null,
  selectedMulti: [],
  freeTextValue: "",
  fillValue: "",
  selectedMatchWordId: null,
  matchedPairIds: [],
  selectedVocabWordId: null,
  exploredVocabIds: [],
  sceneCompletedView: null,
  helperName: loadedProgress.helperName || "",
  lexChoices: [],
  lexPending: null,
  skipLexAfterGrammar: false,
  showAudioCheck: false,
  lastAudioCheckResult: "",
};

function loadProgress() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return { ...defaultProgress };
    return { ...defaultProgress, ...JSON.parse(saved) };
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hasLearnedNumberWords() {
  return state.progress.completedSceneIds.includes("school-schedule") || state.progress.seenVocabCardIds.includes("vocab-school-numbers-card");
}

function displayText(value) {
  return String(value ?? "");
}

function displayChoiceText(value) {
  let text = String(value ?? "");
  if (!hasLearnedNumberWords()) return text;
  return text
    .replace(/\b1\b/g, "one")
    .replace(/\b2\b/g, "two")
    .replace(/\b3\b/g, "three")
    .replace(/\b4\b/g, "four")
    .replace(/\b5\b/g, "five");
}


function cleanLexText(value) {
  return String(value || "")
    .replace(/^🦊\s*/u, "")
    .replace(/^🦁\s*/u, "")
    .trim();
}

function ensureLexArrays() {
  if (!Array.isArray(state.progress.lexMessages)) state.progress.lexMessages = [];
  if (!Array.isArray(state.progress.lexSeenEventIds)) state.progress.lexSeenEventIds = [];
  if (!Array.isArray(state.progress.seenSceneGrammarFlowIds)) state.progress.seenSceneGrammarFlowIds = [];
}

function addLexMessage(text, options = {}) {
  ensureLexArrays();
  const cleanText = cleanLexText(text);
  if (!cleanText) return;

  if (options.eventId) {
    if (state.progress.lexSeenEventIds.includes(options.eventId)) return;
    state.progress.lexSeenEventIds.push(options.eventId);
  }

  state.progress.lexMessages.push({
    speaker: options.speaker || "lex",
    text: cleanText,
    at: Date.now(),
  });

  // Keep the dialog useful, not endless.
  if (state.progress.lexMessages.length > 80) {
    state.progress.lexMessages = state.progress.lexMessages.slice(-80);
  }

  if (options.choices) state.lexChoices = options.choices;
  saveProgress();
}

function addUserLexReply(text) {
  addLexMessage(text, { speaker: "user" });
}

function setLexChoices(choices = [], pending = null) {
  state.lexChoices = choices;
  state.lexPending = pending;
}

function ensureLexIntro() {
  ensureLexArrays();
  if (state.progress.lexSeenEventIds.includes("lex-intro")) return;
  addLexMessage("Привет! Меня зовут Лекс.", { eventId: "lex-intro" });
  addLexMessage("Я путешествую по разным мирам и собираю английские слова. Но одному мне не справиться. Поможешь?");
  setLexChoices([
    { id: "intro-yes", label: "Помогу!", correct: true, response: "Ура! Я так хотел найти друга, который поможет мне! Пойдём скорее." },
    { id: "intro-later", label: "Потом", correct: true, response: "Хорошо. Я буду ждать здесь справа, когда понадоблюсь." },
  ]);
}

function consumeToastAsLex() {
  if (!state.toastMessage) return;
  const cleanText = cleanLexText(state.toastMessage);
  if (cleanText) {
    const eventId = `toast:${cleanText.slice(0, 80)}`;
    addLexMessage(cleanText, { eventId });
  }
  state.toastMessage = "";
}

function getLexQuizForGrammarCard(cardId) {
  const quizzes = {
    "card-articles": {
      question: "Если я правильно понял, мы говорим a apple?",
      correct: "no",
      right: "А да! Точно, нужно an apple. Ну всё, пойдём искать перекус, а то я сильно голодный.",
      wrong: "Погоди-погоди, я снова перечитал: всё-таки an apple, оно же с поющейся буковки начинается.",
    },
    "card-zoo-articles": {
      question: "Погоди, наше перемещение меня запутало. Мы говорим a elephant?",
      correct: "no",
      right: "Да, точно! Нужно an elephant. Спасибо!",
      wrong: "Почти. Elephant начинается со звука e, поэтому говорим an elephant.",
    },
    "card-school-articles": {
      question: "Ух, ну и ну, время 6 утра, у меня мозги набекрень. Мы говорим a bag правильно?",
      correct: "yes",
      right: "Да, мы такие умные! Это, наверное, вчерашний пирог дал нам сил.",
      wrong: "Почти. Bag начинается не с a/e/i/o/u, значит говорим a bag.",
    },
    "card-playground-articles": {
      question: "Так, игрушки с собой. Мы говорим a airplane?",
      correct: "no",
      right: "Да, точно! Airplane начинается со звука a, значит an airplane.",
      wrong: "Почти. Airplane начинается со звука a, поэтому нужно an airplane.",
    },
    "card-school-plural": {
      question: "Если школьных предметов много, я добавляю s?",
      correct: "yes",
      right: "Точно! Много предметов — добавляем s. Собираем вещи!",
      wrong: "Почти. Когда предметов много, обычно добавляем s: pens, books, pencils.",
    },
    "card-playground-plural": {
      question: "Если игрушек много, мы добавляем s?",
      correct: "yes",
      right: "Да! Toys стало много — добавляем s: cars, trains, dolls.",
      wrong: "Почти. Когда игрушек много, добавляем s в конце слова.",
    },
    "card-playground-colors": {
      question: "Если машинка красная, можно сказать It is red?",
      correct: "yes",
      right: "Верно! It is red. Теперь поможем мне с цветами.",
      wrong: "Почти. Про один предмет говорим it is: It is red.",
    },
    "card-plural": {
      question: "Если предметов много, мы добавляем s в конце слова?",
      correct: "yes",
      right: "Точно! Много предметов — добавляем s. Пойдём пробовать.",
      wrong: "Почти. Когда предметов много, обычно добавляем s в конце слова.",
    },
    "card-zoo-plural": {
      question: "Если животных много, мы добавляем s в конце слова?",
      correct: "yes",
      right: "Точно! Много животных — добавляем s. Зоопарк становится больше!",
      wrong: "Почти. Когда животных много, добавляем s: snakes, lions, giraffes.",
    },
    "card-to-be": {
      question: "Чтобы рассказать о себе, мы говорим I am?",
      correct: "yes",
      right: "Да! I am Lex. А теперь ты попробуешь рассказать о себе.",
      wrong: "Почти. Когда говорим о себе, используем I am.",
    },
    "card-is": {
      question: "Про мальчика мы говорим he is?",
      correct: "yes",
      right: "Верно! He is — про мальчика, she is — про девочку, it is — про предмет.",
      wrong: "Почти. Про мальчика говорим he is.",
    },
    "card-zoo-is": {
      question: "Про одно животное тоже можно сказать it is?",
      correct: "yes",
      right: "Верно! It is подходит для одного животного или предмета.",
      wrong: "Почти. Про одно животное можно сказать it is.",
    },
    "card-are": {
      question: "Если говорим про they, нужно are?",
      correct: "yes",
      right: "Да! They are. Теперь можно говорить про группы.",
      wrong: "Почти. С they говорим are.",
    },
  };
  return quizzes[cardId] || null;
}

function getGrammarFollowUp(cardId, scene) {
  if (["card-articles", "card-zoo-articles", "card-school-articles", "card-playground-articles"].includes(cardId)) {
    return {
      message: cardId === "card-zoo-articles"
        ? "Животные хотят с тобой познакомиться. Перейди в Vocabulary Garden и узнай их получше."
        : cardId === "card-school-articles"
          ? "Давай заглянем в Vocabulary Garden и посмотрим школьные слова поближе."
          : cardId === "card-playground-articles"
            ? "Давай заглянем в Vocabulary Garden и посмотрим мои игрушки поближе."
            : "Можно сначала заглянуть в Vocabulary Garden и повторить слова.",
      vocab: true,
    };
  }
  return null;
}

function askLexGrammarQuestion(cardId, scene) {
  const quiz = getLexQuizForGrammarCard(cardId);
  if (!quiz) return false;

  addLexMessage(quiz.question, { eventId: `grammar-quiz:${cardId}:${scene?.id || "free"}` });
  setLexChoices([
    { id: "yes", label: "Yes / да", correct: quiz.correct === "yes", right: quiz.right, wrong: quiz.wrong },
    { id: "no", label: "No / нет", correct: quiz.correct === "no", right: quiz.right, wrong: quiz.wrong },
  ], scene ? { type: "grammar-answer", sceneId: scene.id, cardId } : null);
  return true;
}

function handleLexChoice(choiceId) {
  const choice = state.lexChoices.find((item) => item.id === choiceId);
  if (!choice) return;

  addUserLexReply(choice.label);
  const pending = state.lexPending;
  setLexChoices([], null);


  if (pending?.type === "unlock-scene") {
    addLexMessage(choice.right || choice.response || "Договорились!");
    if (pending.eventId && !state.progress.lexSeenEventIds.includes(pending.eventId)) {
      state.progress.lexSeenEventIds.push(pending.eventId);
      saveProgress();
    }
    render();
    return;
  }

  if (pending?.type === "start-scene") {
    const scene = scenes.find((item) => item.id === pending.sceneId);
    if (scene) {
      addLexMessage(choice.right || choice.response || "Отлично!");
      startScene(scene);
      return;
    }
  }

  if (pending?.type === "go-world") {
    addLexMessage(choice.right || choice.response || "Пойдём!");
    state.selectedWorldId = pending.worldId;
    state.selectedScene = null;
    state.sceneCompletedView = null;
    render();
    return;
  }

  if (pending?.type === "grammar-answer") {
    const scene = scenes.find((item) => item.id === pending.sceneId);
    addLexMessage(choice.correct ? (choice.right || "Верно!") : (choice.wrong || "Почти, вот правильнее."));
    const follow = getGrammarFollowUp(pending.cardId, scene);
    if (follow?.vocab && scene) {
      addLexMessage(follow.message);
      setLexChoices([
        { id: "to-vocab", label: "В Vocabulary Garden", response: "Пойдём посмотрим слова!" },
        { id: "start-task", label: "Начать задание", response: "Хорошо, начинаем!" },
      ], { type: "vocab-or-scene", sceneId: scene.id });
      render();
      return;
    }
    if (scene) { startScene(scene); return; }
  }

  if (pending?.type === "vocab-or-scene") {
    const scene = scenes.find((item) => item.id === pending.sceneId);
    addLexMessage(choice.response || "Пойдём!");
    if (choice.id === "to-vocab") {
      state.selectedWorldId = "vocabulary";
      state.selectedScene = null;
      state.sceneCompletedView = null;
      render();
      return;
    }
    if (scene) { startScene(scene); return; }
  }

  addLexMessage(choice.right || choice.response || "Отлично!");
  if (choice.id === "intro-yes") {
    addLexMessage("Смотри, возле меня есть значок динамика 🔊. Проверь, пожалуйста, что мир хорошо тебя принял и ты его слышишь!", { eventId: "lex-audio-check-intro" });
  }
  render();
}

function clearLexDialog() {
  state.progress.lexMessages = [];
  state.progress.lexSeenEventIds = [];
  state.lexChoices = [];
  state.lexPending = null;
  saveProgress();
  ensureLexIntro();
  render();
}

function asset(path) {
  if (!path) return "";
  return path.replace(/^\/images\//, "assets/images/").replace(/^\//, "");
}

function getSkill(skillId) {
  return grammarSkills.find((skill) => skill.id === skillId);
}

function getCardBySkill(skillId) {
  const skill = getSkill(skillId);
  return grammarCards.find((card) => card.id === skill?.cardId);
}

function getGrammarCardById(cardId) {
  return grammarCards.find((card) => card.id === cardId);
}

function getVocabCard(cardId) {
  return vocabCards.find((card) => card.id === cardId);
}

function canShowWorld(world) {
  if (world.id !== "vocabulary") return true;
  return state.progress.seenVocabCardIds.length > 0 ||
    state.progress.completedSceneIds.includes("cafe-look-visitors");
}

let speechTimer = null;
function getEnglishVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return voices.find((voice) => /^en[-_]?us/i.test(voice.lang)) ||
    voices.find((voice) => /^en[-_]?gb/i.test(voice.lang)) ||
    voices.find((voice) => /^en/i.test(voice.lang)) ||
    null;
}

function normalizeSpeechPhrase(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  // Short browser TTS phrases can clip the last sound on local HTML files.
  // A final punctuation mark gives the speech engine a tiny natural pause.
  return /[.!?]$/.test(raw) ? raw : `${raw}.`;
}

function speakEnglish(text, attempt = 0) {
  const phrase = normalizeSpeechPhrase(text);
  if (!phrase) return;

  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    state.feedback = "В этом браузере нет озвучки. Лучше открыть в Chrome или Edge.";
    render();
    return;
  }

  try {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices?.() || [];

    // Some browsers load voices only after the first user click. Retry once voices appear.
    if (!voices.length && attempt < 5) {
      setTimeout(() => speakEnglish(phrase, attempt + 1), 120);
      return;
    }

    if (speechTimer) clearInterval(speechTimer);
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "en-US";
    utterance.rate = 0.58;
    utterance.pitch = 1.02;
    utterance.volume = 1;

    const voice = getEnglishVoice();
    if (voice) utterance.voice = voice;

    utterance.onstart = () => { state.feedback = `🔊 ${phrase}`; };
    utterance.onerror = () => { state.feedback = "Озвучка не запустилась. Попробуй Chrome или Edge."; render(); };

    synth.resume?.();
    setTimeout(() => {
      synth.speak(utterance);
      synth.resume?.();
    }, 90);

    // Chrome sometimes pauses speechSynthesis on local files; this keeps it alive.
    let ticks = 0;
    speechTimer = setInterval(() => {
      ticks += 1;
      synth.resume?.();
      if (!synth.speaking || ticks > 20) {
        clearInterval(speechTimer);
        speechTimer = null;
      }
    }, 200);
  } catch (error) {
    state.feedback = "Озвучка не запустилась. Лучше открыть в Chrome или Edge.";
    render();
  }
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function hasCompletedAny(sceneIds) {
  return sceneIds.some((id) => state.progress.completedSceneIds.includes(id));
}

function isGrammarSkillUnlocked(skillId) {
  if (skillId === "articles") return true;
  if (skillId === "plural") {
    return hasCompletedAny([
      "cafe-fridge-snacks", "cafe-make-fruit-pizza",
      "school-schedule", "school-collision",
      "zoo-feed-animals", "zoo-animal-pairs",
      "playground-count-toys", "playground-sandbox"
    ]);
  }
  if (skillId === "to_be") {
    return hasCompletedAny([
      "cafe-prepare-counter", "cafe-meet-visitors",
      "school-desk-supplies", "school-meet-classmates",
      "zoo-hungry-animals", "zoo-meet-keeper",
      "playground-about-me", "playground-meet-kids"
    ]);
  }
  if (skillId === "is_intro") {
    return hasCompletedAny([
      "cafe-sort-snacks", "cafe-look-visitors",
      "school-class-nonsense", "school-team",
      "zoo-meet-keeper", "zoo-look-keeper",
      "playground-colors", "playground-describe-kids"
    ]);
  }
  if (skillId === "are_intro") {
    return hasCompletedAny([
      "cafe-notice-visitors", "cafe-serve-tables",
      "school-phone-game", "school-meet-teams",
      "zoo-guide-stage-1", "zoo-look-animal-groups",
      "playground-draw-groups"
    ]);
  }
  const skill = getSkill(skillId);
  return Boolean(skill && state.progress.xp >= skill.xpThreshold);
}

function getSceneByTaskId(taskId) {
  const task = tasks.find((item) => item.id === taskId);
  return task ? scenes.find((scene) => scene.id === task.sceneId) : null;
}

function countCompletedNonZooTasks() {
  return state.progress.completedTaskIds.filter((taskId) => {
    const scene = getSceneByTaskId(taskId);
    return scene && scene.worldId !== "zoo";
  }).length;
}

function isZooRestReady() {
  if (!state.progress.zooRestStarted) return true;
  const enoughTimePassed = Date.now() >= Number(state.progress.zooRestUntil || 0);
  const startCount = Number(state.progress.zooRestStartNonZooTaskCount || 0);
  const enoughPracticeDone = countCompletedNonZooTasks() >= startCount + 3;
  return enoughTimePassed || enoughPracticeDone;
}

function maybeShowZooWakeToast() {
  if (!state.progress.zooRestStarted || state.progress.zooWakeToastShown || !isZooRestReady()) return;
  state.progress.zooWakeToastShown = true;
  state.toastMessage = "🦁 Животные проснулись, наступил второй день подготовки к открытию зоопарка. Приходи помогать смотрителю.";
  saveProgress();
}

function canShowScene(scene) {
  const hasEnoughXp = state.progress.xp >= scene.requiredXp;
  const hasGrammar = scene.requiredGrammarSkillIds.every((skillId) => isGrammarSkillUnlocked(skillId));
  const hasVocab = (scene.requiredVocabCardIds || []).every((cardId) => state.progress.seenVocabCardIds.includes(cardId));
  const hasCompletedScenes = (scene.requiredCompletedSceneIds || []).every((sceneId) => state.progress.completedSceneIds.includes(sceneId));
  const anyCompletedList = scene.requiredAnyCompletedSceneIds || [];
  const hasAnyCompleted = !anyCompletedList.length || anyCompletedList.some((sceneId) => state.progress.completedSceneIds.includes(sceneId));
  const hasZooRest = !scene.requiredZooRestComplete || isZooRestReady();
  const hasLexFlag = !scene.requiredLexEventId || state.progress.lexSeenEventIds.includes(scene.requiredLexEventId);
  return hasEnoughXp && hasGrammar && hasVocab && hasCompletedScenes && hasAnyCompleted && hasZooRest && hasLexFlag;
}

function getVisibleScenesForWorld(worldId) {
  return scenes.filter((scene) => scene.worldId === worldId && canShowScene(scene));
}

function getTasksForScene(scene) {
  return scene.taskIds.map((id) => tasks.find((task) => task.id === id)).filter(Boolean);
}

function getNextSkill() {
  return grammarSkills.find((skill) => state.progress.xp < skill.xpThreshold);
}

function getCurrentTask() {
  if (!state.selectedScene) return null;
  const sceneTasks = getTasksForScene(state.selectedScene);
  return sceneTasks[state.currentTaskIndex] || null;
}

function addXpOnceForTask(taskId) {
  if (state.progress.completedTaskIds.includes(taskId)) return;
  state.progress.completedTaskIds.push(taskId);
  state.progress.xp += XP_RULES.correctAnswer;
  saveProgress();
}

function completeScene(scene) {
  let sceneXp = 0;
  let bonusXp = 0;

  if (!state.progress.completedSceneIds.includes(scene.id)) {
    state.progress.completedSceneIds.push(scene.id);
    state.progress.xp += XP_RULES.sceneCompleted;
    sceneXp = XP_RULES.sceneCompleted;

    if (state.sceneMistakes === 0) {
      state.progress.xp += XP_RULES.perfectSceneBonus;
      bonusXp = XP_RULES.perfectSceneBonus;
    }

    saveProgress();
  }

  state.sceneCompletedView = { scene, sceneXp, bonusXp };
  state.selectedScene = null;
  state.currentTaskIndex = 0;
  state.sceneMistakes = 0;
  state.feedback = "";
  state.selectedMulti = [];
  state.freeTextValue = "";
  state.fillValue = "";
  state.selectedMatchWordId = null;
  state.matchedPairIds = [];
  state.selectedVocabWordId = null;
  state.exploredVocabIds = [];

  if (scene.id === "zoo-feed-animals") {
    state.progress.zooRestStarted = true;
    state.progress.zooRestStartXp = state.progress.xp;
    state.progress.zooRestStartNonZooTaskCount = countCompletedNonZooTasks();
    state.progress.zooRestUntil = Date.now() + 5 * 60 * 1000;
    state.progress.zooWakeToastShown = false;
    state.toastMessage = "🦁 Животные набегались, наелись и устали. Они легли спать! Дождись второго дня в зоопарке, можешь пока исследовать другой мир.";
    saveProgress();
  } else if (scene.toastAfter) {
    state.toastMessage = scene.toastAfter;
  }

  if (scene.lexAfter) {
    addLexMessage(scene.lexAfter, { eventId: `scene-done:${scene.id}` });
    if (scene.id === "zoo-look-keeper") {
      setLexChoices([
        { id: "zoo-guide-sign", label: "Давай!", response: "Записались! Теперь можно пройти первый этап обучения." }
      ], { type: "unlock-scene", eventId: "zoo-guide-registered" });
    }
    if (scene.id === "cafe-make-fruit-pizza") {
      setLexChoices([
        { id: "pizza-yes", label: "Да", response: "О, мы так похожи! Пойдём дальше готовить кафе к открытию." },
        { id: "pizza-no", label: "Нет", response: "Ну и ладно! А мне вот нравится. Пойдём дальше готовить кафе к открытию." },
        { id: "pizza-never", label: "Не пробовала", response: "Обязательно попробуй! А теперь пойдём дальше готовить кафе к открытию." }
      ]);
    }
  }

  if (scene.id === "school-get-to-school" && !state.progress.seenVocabCardIds.includes("vocab-school-numbers-card")) {
    state.progress.seenVocabCardIds.push("vocab-school-numbers-card");
    saveProgress();
  }

  if (scene.achievementAfterId && !state.progress.achievementIds.includes(scene.achievementAfterId)) {
    state.progress.achievementIds.push(scene.achievementAfterId);
    state.modalAchievementId = scene.achievementAfterId;
    saveProgress();
  }

  if (scene.vocabCardAfterId && !state.progress.seenVocabCardIds.includes(scene.vocabCardAfterId)) {
    state.modalVocabCardId = scene.vocabCardAfterId;
    state.pendingWorldId = "vocabulary";
  }

  render();
}

function answerTask(isCorrect, successText) {
  const task = getCurrentTask();
  if (!task || !state.selectedScene) return;

  if (!isCorrect) {
    state.sceneMistakes += 1;
    state.feedback = "Почти! Попробуй ещё раз.";
    render();
    return;
  }

  addXpOnceForTask(task.id);

  const sceneTasks = getTasksForScene(state.selectedScene);
  const isLastTask = state.currentTaskIndex >= sceneTasks.length - 1;

  if (isLastTask) {
    completeScene(state.selectedScene);
    return;
  }

  state.feedback = successText || "+10 XP! Отлично.";
  state.currentTaskIndex += 1;
  state.selectedMulti = [];
  state.freeTextValue = "";
  state.fillValue = "";
  state.selectedMatchWordId = null;
  state.matchedPairIds = [];
  state.selectedVocabWordId = null;
  state.exploredVocabIds = [];
  render();
}

function openScene(sceneId) {
  const scene = scenes.find((item) => item.id === sceneId);
  if (!scene) return;

  // If the child presses Начать on a scene card, this direct action cancels
  // old Lex choices, then starts the normal flow: grammar card → Lex check →
  // Vocabulary Garden / Начать задание choice.
  state.lexChoices = [];
  state.lexPending = null;
  state.skipLexAfterGrammar = false;

  const isCompleted = state.progress.completedSceneIds.includes(scene.id);

  if (!isCompleted && scene.lexBefore) {
    addLexMessage(scene.lexBefore, { eventId: `scene-before:${scene.id}` });
  }

  // Show grammar+Lex intro only once for a scene. If the child first chooses
  // Vocabulary Garden and later presses “Начать” on the scene card, start the
  // scene directly instead of asking the old Yes/No question again.
  ensureLexArrays();
  const grammarFlowSeen = state.progress.seenSceneGrammarFlowIds.includes(scene.id);
  if (!isCompleted && scene.grammarCardBeforeId && !grammarFlowSeen) {
    state.modalGrammarCardId = scene.grammarCardBeforeId;
    state.pendingScene = scene;
    render();
    return;
  }


  if (scene.vocabCardBeforeId && !state.progress.seenVocabCardIds.includes(scene.vocabCardBeforeId)) {
    state.modalVocabCardId = scene.vocabCardBeforeId;
    state.pendingScene = scene;
    render();
    return;
  }

  startScene(scene);
}

function startScene(scene) {
  state.selectedScene = scene;
  state.currentTaskIndex = 0;
  state.sceneMistakes = 0;
  state.feedback = "";
  state.selectedMulti = [];
  state.freeTextValue = "";
  state.fillValue = "";
  state.selectedMatchWordId = null;
  state.matchedPairIds = [];
  state.selectedVocabWordId = null;
  state.exploredVocabIds = [];
  state.sceneCompletedView = null;
  state.helperName = "";
  state.progress.helperName = "";
  state.lexChoices = [];
  state.lexPending = null;
  state.skipLexAfterGrammar = false;
  render();
}

function closeGrammarCard() {
  const seenId = state.modalGrammarCardId || state.modalSkillId;
  const idsToMark = [];
  if (seenId) idsToMark.push(seenId);

  const skillByCustomCard = {
    "card-zoo-articles": "articles",
    "card-school-articles": "articles",
    "card-playground-articles": "articles",
    "card-zoo-plural": "plural",
    "card-school-plural": "plural",
    "card-playground-plural": "plural",
    "card-playground-colors": "is_intro",
    "card-zoo-is": "is_intro",
    "card-to-be": "to_be",
    "card-is": "is_intro",
    "card-are": "are_intro",
    "card-plural": "plural",
    "card-articles": "articles",
  };
  const mappedSkill = skillByCustomCard[seenId];
  if (mappedSkill) idsToMark.push(mappedSkill);

  idsToMark.forEach((id) => {
    if (id && !state.progress.seenGrammarCardSkillIds.includes(id)) {
      state.progress.seenGrammarCardSkillIds.push(id);
    }
  });

  if (state.modalGrammarCardId === "card-zoo-articles" && !state.progress.seenVocabCardIds.includes("vocab-zoo-animals-card")) {
    state.progress.seenVocabCardIds.push("vocab-zoo-animals-card");
  }

  if (state.modalGrammarCardId === "card-school-articles" && !state.progress.seenVocabCardIds.includes("vocab-school-supplies-card")) {
    state.progress.seenVocabCardIds.push("vocab-school-supplies-card");
  }

  if (state.modalGrammarCardId === "card-playground-articles" && !state.progress.seenVocabCardIds.includes("vocab-playground-toys-card")) {
    state.progress.seenVocabCardIds.push("vocab-playground-toys-card");
  }

  if (state.modalGrammarCardId === "card-articles" && !state.progress.seenVocabCardIds.includes("vocab-garden-card")) {
    state.progress.seenVocabCardIds.push("vocab-garden-card");
  }

  saveProgress();

  const scene = state.pendingScene;
  if (scene && seenId && scene.grammarCardBeforeId === seenId) {
    ensureLexArrays();
    if (!state.progress.seenSceneGrammarFlowIds.includes(scene.id)) {
      state.progress.seenSceneGrammarFlowIds.push(scene.id);
      saveProgress();
    }
  }
  state.modalSkillId = null;
  state.modalGrammarCardId = null;
  state.pendingScene = null;

  if (scene) {
    const skipLex = state.skipLexAfterGrammar;
    state.skipLexAfterGrammar = false;
    if (!skipLex && askLexGrammarQuestion(seenId, scene)) {
      render();
      return;
    }
    startScene(scene);
  }
  else render();
}

function closeVocabCard() {
  if (state.modalVocabCardId && !state.progress.seenVocabCardIds.includes(state.modalVocabCardId)) {
    state.progress.seenVocabCardIds.push(state.modalVocabCardId);
    saveProgress();
  }

  const scene = state.pendingScene;
  const worldId = state.pendingWorldId;
  state.modalVocabCardId = null;
  state.pendingScene = null;
  state.pendingWorldId = null;
  state.sceneCompletedView = null;

  if (scene) {
    startScene(scene);
    return;
  }

  if (worldId) state.selectedWorldId = worldId;
  render();
}

function goBackToWorld() {
  state.selectedScene = null;
  state.sceneCompletedView = null;
  state.currentTaskIndex = 0;
  state.sceneMistakes = 0;
  state.feedback = "";
  state.selectedMulti = [];
  state.freeTextValue = "";
  state.fillValue = "";
  state.selectedMatchWordId = null;
  state.matchedPairIds = [];
  state.selectedVocabWordId = null;
  state.exploredVocabIds = [];
  render();
}

function resetProgress() {
  if (!confirm("Сбросить XP и прогресс?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state.progress = { ...defaultProgress, completedTaskIds: [], completedSceneIds: [], seenGrammarCardSkillIds: [], seenVocabCardIds: [], zooRestUntil: 0, zooRestStartXp: 0, zooRestStarted: false, zooWakeToastShown: false, zooRestStartNonZooTaskCount: 0, achievementIds: [], buddyItemIds: ["fast-travel-backpack", "kindergarten-certificate"], lexMessages: [], lexSeenEventIds: [], seenSceneGrammarFlowIds: [] };
  state.selectedWorldId = "cafe";
  state.selectedScene = null;
  state.currentTaskIndex = 0;
  state.sceneMistakes = 0;
  state.feedback = "";
  state.modalSkillId = null;
  state.modalGrammarCardId = null;
  state.modalVocabCardId = null;
  state.modalAchievementId = null;
  state.showAchievementsModal = false;
  state.showBuddyModal = false;
  state.toastMessage = "";
  state.pendingScene = null;
  state.pendingWorldId = null;
  state.sceneCompletedView = null;
  state.selectedMatchWordId = null;
  state.matchedPairIds = [];
  state.selectedVocabWordId = null;
  state.exploredVocabIds = [];
  state.helperName = "";
  state.progress.helperName = "";
  state.lexChoices = [];
  state.lexPending = null;
  state.skipLexAfterGrammar = false;
  render();
}

function render() {
  ensureLexIntro();
  maybeShowZooWakeToast();
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="shell">
      ${renderTopBar()}
      ${renderLexDialog()}
      ${state.toastMessage ? renderToast() : ""}
      ${state.sceneCompletedView ? renderSceneCompleted() : state.selectedScene ? renderSceneScreen() : renderWorldScreen()}
      ${(state.modalSkillId || state.modalGrammarCardId) ? renderGrammarModal() : ""}
      ${state.modalVocabCardId ? renderVocabModal() : ""}
      ${state.modalAchievementId ? renderAchievementModal(state.modalAchievementId) : ""}
      ${state.showAchievementsModal ? renderAchievementsModal() : ""}
      ${state.showBuddyModal ? renderBuddyModal() : ""}
      ${state.showAudioCheck ? renderAudioCheckModal() : ""}
    </div>
  `;
  bindEvents();
  const lexScroll = document.getElementById("lexDialogScroll");
  if (lexScroll) lexScroll.scrollTop = lexScroll.scrollHeight;
}

function renderToast() {
  const cleanMessage = String(state.toastMessage || "").replace(/^🦊\s*/u, "").replace(/^🦁\s*/u, "");
  return `<aside class="toast-card buddy-toast"><p><strong>Оповещение:</strong> ${escapeHtml(cleanMessage)}</p><button data-action="close-toast">×</button></aside>`;
}


function renderLexDialog() {
  ensureLexArrays();
  const messages = state.progress.lexMessages || [];
  const visibleMessages = messages.slice(-8);
  return `
    <section class="lex-dialog-panel" aria-label="Lex dialog">
      <div class="lex-dialog-head">
        <div class="lex-face">🦊</div>
        <div>
          <p class="small-label">Buddy dialog</p>
          <h2>Лекс рядом</h2>
        </div>
        <div class="lex-head-actions">
          <button class="lex-sound-button" data-action="open-audio-check" title="Проверить звук">🔊</button>
          <button class="lex-clear-button" data-action="clear-lex" title="Очистить диалог">↺</button>
        </div>
      </div>
      <div class="lex-dialog-scroll" id="lexDialogScroll">
        ${visibleMessages.map((message) => `
          <div class="lex-message ${message.speaker === "user" ? "from-user" : "from-lex"}">
            <span>${message.speaker === "user" ? "Ты" : "🦊 Лекс"}</span>
            <p>${escapeHtml(message.text)}</p>
          </div>
        `).join("")}
      </div>
      ${state.lexChoices.length ? `
        <div class="lex-choice-row">
          ${state.lexChoices.map((choice) => `<button class="lex-choice-button" data-lex-choice-id="${escapeHtml(choice.id)}">${escapeHtml(choice.label)}</button>`).join("")}
        </div>
      ` : ``}
    </section>
  `;
}

function renderAudioCheckModal() {
  return `
    <div class="modal-backdrop">
      <section class="modal-card audio-check-card">
        <p class="small-label">Sound check</p>
        <h2>Проверка звука</h2>
        <p class="rule-text">Нажми «Listen» и выбери, что услышала. Если слово обрезается, нажми «Перезапустить голос» и попробуй ещё раз.</p>
        <div class="audio-check-word">
          <button class="listen-button" data-speak="kitten">🔊 Listen: kitten</button>
        </div>
        <div class="choice-grid audio-check-grid">
          <button class="choice-card" data-action="audio-check-correct"><span class="choice-image">🐱</span><strong>kitten</strong><small>котёнок</small></button>
          <button class="choice-card" data-action="audio-check-wrong"><span class="choice-image">🐶</span><strong>dog</strong><small>собака</small></button>
        </div>
        ${state.lastAudioCheckResult ? `<p class="feedback-line">${escapeHtml(state.lastAudioCheckResult)}</p>` : ""}
        <div class="modal-actions">
          <button class="secondary-button" data-action="audio-reset">Перезапустить голос</button>
          <button class="primary-button" data-action="close-audio-check">Готово</button>
        </div>
      </section>
    </div>
  `;
}

function resetAudioEngine() {
  try {
    if (speechTimer) { clearInterval(speechTimer); speechTimer = null; }
    window.speechSynthesis?.cancel?.();
    window.speechSynthesis?.resume?.();
    window.speechSynthesis?.getVoices?.();
    state.lastAudioCheckResult = "Голос перезапущен. Сейчас попробуй Listen ещё раз. Если звук пропал, обнови страницу и нажми 🔊 снова.";
  } catch {
    state.lastAudioCheckResult = "Не получилось перезапустить голос. Лучше открыть в Chrome или Edge.";
  }
  render();
}

function renderTopBar() {
  return `
    <header class="topbar">
      <button class="avatar-card avatar-button" data-action="open-achievements">
        <div class="avatar-face">${escapeHtml(state.progress.avatar.image)}</div>
        <div>
          <p class="small-label">Avatar</p>
          <h1>${escapeHtml(state.progress.avatar.name)}</h1>
          <small>${state.progress.achievementIds.length ? `${state.progress.achievementIds.length} item` : "Items"}</small>
        </div>
      </button>
      <section class="xp-card">
        ${renderXPBar()}
      </section>
      <button class="avatar-card buddy-button" data-action="open-buddy">
        <div class="avatar-face buddy-face">🦊</div>
        <div>
          <p class="small-label">Buddy</p>
          <h1>Buddy</h1>
          <small>Lex items</small>
        </div>
      </button>
    </header>
    <button class="ghost-button reset-floating" data-action="reset">Сбросить прогресс</button>
  `;
}

function renderXPBar() {
  const nextSkill = getNextSkill();
  const currentXp = state.progress.xp;
  const previousThresholds = grammarSkills
    .filter((skill) => skill.xpThreshold <= currentXp)
    .map((skill) => skill.xpThreshold);
  const from = previousThresholds.length ? Math.max(...previousThresholds) : 0;
  const to = nextSkill ? nextSkill.xpThreshold : Math.max(currentXp, 1);
  const progress = nextSkill ? Math.min(100, Math.round(((currentXp - from) / Math.max(to - from, 1)) * 100)) : 100;

  return `
    <div class="xp-head">
      <span>XP: <strong>${currentXp}</strong></span>
      <span>${nextSkill ? `До ${escapeHtml(nextSkill.shortTitle)}: ${Math.max(nextSkill.xpThreshold - currentXp, 0)} XP` : "Все skills открыты"}</span>
    </div>
    <div class="xp-track"><div class="xp-fill" style="width:${progress}%"></div></div>
    <div class="skill-row">
      ${grammarSkills.map((skill) => `<span class="skill-pill ${isGrammarSkillUnlocked(skill.id) ? "on" : ""}">${escapeHtml(skill.shortTitle)}</span>`).join("")}
    </div>
  `;
}

function renderWorldScreen() {
  const visibleWorlds = worlds.filter(canShowWorld);
  const selectedWorld = visibleWorlds.find((world) => world.id === state.selectedWorldId) || worlds.find((world) => world.id === "cafe") || visibleWorlds[0];
  if (selectedWorld && state.selectedWorldId !== selectedWorld.id) state.selectedWorldId = selectedWorld.id;
  if (selectedWorld?.id === "zoo") maybeShowZooWakeToast();
  const visibleScenes = getVisibleScenesForWorld(selectedWorld.id);

  return `
    <section class="hero">
      <div>
        <h2>${selectedWorld.id === "cafe" ? "Мы в мире Café." : selectedWorld.id === "zoo" ? "Это же Zoo!" : selectedWorld.id === "school" ? "Мы в School." : selectedWorld.id === "playground" ? "Мы на Playground!" : `Ты в мире ${escapeHtml(selectedWorld.title)}!`}</h2>
        <p>${selectedWorld.id === "cafe" ? "Интересно, что нам покажет первый день." : selectedWorld.id === "zoo" ? "Я уже слышу, как рычит лев. Пойдём скорее к нему." : selectedWorld.id === "school" ? "Жду не дождусь, что же будет в этом мире." : selectedWorld.id === "playground" ? "Пойдём поиграем и познакомимся с этим миром и его обитателями." : "Выбирай сцены и исследуй мир."}</p>
      </div>
      <div class="hero-badge">${escapeHtml(selectedWorld.emoji)}</div>
    </section>

    <section class="world-grid">
      ${visibleWorlds.map(renderWorldCard).join("")}
    </section>

    <section class="scene-section">
      <div class="section-title">
        <div>
          <p class="small-label">${escapeHtml(selectedWorld.title)}</p>
          <h2>${escapeHtml(selectedWorld.emoji)} ${escapeHtml(selectedWorld.title)}</h2>
        </div>
        <span>${visibleScenes.length} сцен доступно</span>
      </div>
      ${selectedWorld.id === "vocabulary" ? renderVocabularyWorldIntro() : ""}
      <div class="scene-grid">
        ${visibleScenes.length ? visibleScenes.map(renderSceneCard).join("") : `<article class="empty-card">Скоро здесь появятся задания.</article>`}
      </div>
    </section>
  `;
}

function renderVocabularyWorldIntro() {
  const seen = state.progress.seenVocabCardIds;
  const sections = [];

  if (seen.includes("vocab-food-card")) {
    sections.push({
      image: "/images/cafe/vocab-garden-full.png",
      title: "Café words",
      text: "beautiful, ugly, tall, short + hungry, yum, yuck.",
      words: ["beautiful", "ugly", "tall", "short", "hungry", "yum", "yuck"],
    });
  } else if (seen.includes("vocab-garden-card")) {
    sections.push({
      image: "/images/cafe/vocab-garden-basic.png",
      title: "Café words",
      text: "beautiful, ugly, tall, short.",
      words: ["beautiful", "ugly", "tall", "short"],
    });
  }

  if (seen.includes("vocab-zoo-adjectives-card")) {
    sections.push({
      image: "/images/zoo/zoo-adjectives-final.png",
      title: "Zoo animals",
      text: "a lion, a giraffe, a snake, an octopus, an elephant + fat, old, young, cute.",
      words: ["a lion", "a giraffe", "a snake", "an octopus", "an elephant", "fat", "old", "young", "cute"],
    });
  } else if (seen.includes("vocab-zoo-animals-card")) {
    const zooHasSnake = state.progress.seenGrammarCardSkillIds.includes("card-zoo-plural") || state.progress.completedSceneIds.includes("zoo-animal-pairs");
    sections.push({
      image: zooHasSnake ? "/images/zoo/zoo-day2-new.png" : "/images/zoo/zoo-happy.png",
      title: "Zoo animals",
      text: zooHasSnake ? "a lion, a giraffe, a snake, an octopus, an elephant." : "a lion, a giraffe, an octopus, an elephant.",
      words: zooHasSnake ? ["a lion", "a giraffe", "a snake", "an octopus", "an elephant"] : ["a lion", "a giraffe", "an octopus", "an elephant"],
    });
  }

  if (seen.includes("vocab-school-classroom-card")) {
    sections.push({
      image: "/images/school/school-supplies-full.jpg",
      title: "School desk words",
      text: "a bag, a book, a notebook, a ruler, a pen, a pencil, an eraser.",
      words: ["a bag", "a book", "a notebook", "a ruler", "a pen", "a pencil", "an eraser"],
    });
  } else if (seen.includes("vocab-school-supplies-card")) {
    sections.push({
      image: "/images/school/school-supplies.jpg",
      title: "School things",
      text: "a bag, a pen, a pencil, an eraser.",
      words: ["a bag", "a pen", "a pencil", "an eraser"],
    });
  }

  if (seen.includes("vocab-school-numbers-card")) {
    sections.push({
      image: "/images/school/numbers-12345.jpg",
      title: "Numbers 1–5",
      text: "one, two, three, four, five.",
      words: ["one", "two", "three", "four", "five"],
    });
  }


  if (seen.includes("vocab-playground-new-toys-card")) {
    sections.push({
      image: "/images/playground/toys-full.png",
      title: "Playground toys",
      text: "a car, a train, a doll, an airplane, a ball, a loop, a kite, a bike.",
      words: ["a car", "a train", "a doll", "an airplane", "a ball", "a loop", "a kite", "a bike"],
    });
  } else if (seen.includes("vocab-playground-toys-card")) {
    sections.push({
      image: "/images/playground/toys-basic.png",
      title: "Playground toys",
      text: "a car, a train, a doll, an airplane.",
      words: ["a car", "a train", "a doll", "an airplane"],
    });
  }

  if (seen.includes("vocab-playground-colors-card")) {
    sections.push({
      image: "/images/playground/colors.png",
      title: "Playground colors",
      text: "red, green, blue, pink.",
      words: ["red", "green", "blue", "pink"],
    });
  }

  if (!sections.length) return "";

  return sections.map((section) => `
    <article class="vocab-world-intro">
      <img src="${escapeHtml(asset(section.image))}" alt="${escapeHtml(section.title)}" />
      <div>
        <h3>${escapeHtml(section.title)}</h3>
        <p>${escapeHtml(section.text)}</p>
        <div class="word-pill-row">
          ${section.words.map((word) => `<button class="word-pill-button" data-speak="${escapeHtml(word)}">🔊 ${escapeHtml(word)}</button>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function renderWorldCard(world) {
  const count = getVisibleScenesForWorld(world.id).length;
  const active = world.id === state.selectedWorldId;
  return `
    <button class="world-card ${active ? "active" : ""}" data-world-id="${escapeHtml(world.id)}">
      <span class="world-emoji">${escapeHtml(world.emoji)}</span>
      <strong>${escapeHtml(world.title)}</strong>
      <small>${escapeHtml(world.description)}</small>
      <em>${count ? `${count} сцен` : "скоро"}</em>
    </button>
  `;
}

function renderSceneCard(scene) {
  const completed = state.progress.completedSceneIds.includes(scene.id);
  return `
    <article class="scene-card ${completed ? "completed" : ""}">
      <div class="scene-emoji">${escapeHtml(scene.emoji)}</div>
      <div>
        <h3>${escapeHtml(scene.title)}</h3>
        ${scene.titleRu ? `<p class="ru-title">${escapeHtml(scene.titleRu)}</p>` : ""}
        <p>${escapeHtml(scene.descriptionRu || scene.description)}</p>
        <div class="tag-row">
          ${scene.requiredGrammarSkillIds.map((id) => `<span>${escapeHtml(getSkill(id)?.shortTitle || id)}</span>`).join("")}
          ${completed ? `<span>готово</span>` : ""}
        </div>
      </div>
      <button class="primary-button" data-scene-id="${escapeHtml(scene.id)}">${completed ? "Повторить" : "Начать"}</button>
    </article>
  `;
}

function renderSceneScreen() {
  const scene = state.selectedScene;
  const sceneTasks = getTasksForScene(scene);
  const task = sceneTasks[state.currentTaskIndex];
  const step = state.currentTaskIndex + 1;

  return `
    <section class="task-layout">
      <div class="task-main">
        ${(() => { const world = worlds.find((item) => item.id === scene.worldId); return `<button class="back-link" data-action="back">← Назад в ${escapeHtml(world?.title || "мир")}</button>`; })()}
        <div class="task-header">
          <div>
            <p class="small-label">${escapeHtml(scene.titleRu || scene.title)}</p>
            <h2>${escapeHtml(scene.emoji)} ${escapeHtml(scene.title)}</h2>
          </div>
          <span class="step-pill">${step} / ${sceneTasks.length}</span>
        </div>
        <div class="task-progress"><div style="width:${Math.round((step / sceneTasks.length) * 100)}%"></div></div>
        ${renderTask(task)}
        ${state.feedback ? `<p class="feedback">${escapeHtml(state.feedback)}</p>` : ""}
      </div>
      <aside class="task-side">
        ${renderTaskVisual(task)}
      </aside>
    </section>
  `;
}

function renderTaskVisual(task) {
  if (task?.type === "coloring_click") {
    return `
      <div class="visual-card soft">
        <div class="big-emoji">🖍️</div>
        <h3>Coloring</h3>
        <p>Нажми на подходящего персонажа на картинке.</p>
      </div>
    `;
  }

  if (task?.type === "interactive_garden") {
    return renderVocabSide(task);
  }

  if (!task?.visual) {
    return `
      <div class="visual-card soft">
        <div class="big-emoji">${escapeHtml(state.selectedScene?.emoji || "☕")}</div>
        <p>Выполни задание и получи XP.</p>
      </div>
    `;
  }

  if (task.visual.emoji) {
    return `
      <div class="visual-card soft">
        <div class="big-emoji">${escapeHtml(task.visual.emoji)}</div>
        ${task.visual.title ? `<h3>${escapeHtml(task.visual.title)}</h3>` : ""}
        ${task.visual.caption ? `<p>${escapeHtml(task.visual.caption)}</p>` : ""}
      </div>
    `;
  }

  return `
    <div class="visual-card">
      <img src="${escapeHtml(asset(task.visual.image))}" alt="${escapeHtml(task.visual.title || "visual")}" />
      ${task.visual.title ? `<h3>${escapeHtml(task.visual.title)}</h3>` : ""}
      ${task.visual.caption ? `<p>${escapeHtml(task.visual.caption)}</p>` : ""}
    </div>
  `;
}

function renderTask(task) {
  if (!task) return `<article class="task-card">Задание не найдено.</article>`;

  const base = `
    <article class="task-card">
      <p class="instruction">${escapeHtml(displayText(task.instruction))}</p>
      <h3>${escapeHtml(displayText(task.prompt))}</h3>
      ${renderTaskBody(task)}
    </article>
  `;
  return base;
}

function renderTaskBody(task) {
  if (task.type === "coloring_click") {
    return renderColoringClickTask(task);
  }

  if (["choose_correct_image", "simple_dialogue", "listen_and_choose"].includes(task.type)) {
    return `<div class="choice-grid">${task.choices.map((choice) => renderChoiceButton(choice)).join("")}</div>`;
  }

  if (["click_object", "find_object"].includes(task.type)) {
    return `<div class="choice-grid">${task.objects.map((object) => `
      <button class="choice-card" data-object-id="${escapeHtml(object.id)}">
        <span class="choice-image">${escapeHtml(object.image)}</span>
        <strong>${escapeHtml(object.label)}</strong>
      </button>
    `).join("")}</div>`;
  }

  if (task.type === "fill_blank") {
    return `
      <div class="fill-row">
        <span>${escapeHtml(displayText(task.sentenceBefore))}</span>
        <input class="answer-input" id="fillInput" value="${escapeHtml(state.fillValue)}" placeholder="${escapeHtml(task.answerPlaceholder || "answer")}" />
        <span>${escapeHtml(displayText(task.sentenceAfter))}</span>
      </div>
      <button class="primary-button wide" data-action="check-fill">Проверить</button>
    `;
  }

  if (task.type === "free_text") {
    return `
      <div class="fill-row">
        <span>${escapeHtml(displayText(task.sentenceBefore))}</span>
        <input class="answer-input" id="freeTextInput" value="${escapeHtml(state.freeTextValue)}" placeholder="${escapeHtml(task.answerPlaceholder ?? "Name")}" />
        <span>${escapeHtml(task.sentenceAfter || "")}</span>
      </div>
      <button class="primary-button wide" data-action="check-free-text">Готово</button>
    `;
  }

  if (task.type === "multi_select") {
    return `
      <div class="choice-grid multi">
        ${task.choices.map((choice) => {
          const active = state.selectedMulti.includes(choice.id);
          return `
            <button class="choice-card ${active ? "selected" : ""}" data-multi-id="${escapeHtml(choice.id)}">
              <strong>${escapeHtml(displayChoiceText(choice.label))}</strong>
              ${choice.image ? `<span class="choice-image">${escapeHtml(choice.image)}</span>` : ""}
            </button>
          `;
        }).join("")}
      </div>
      <button class="primary-button wide" data-action="check-multi">Проверить</button>
    `;
  }

  if (task.type === "interactive_garden") {
    const selected = getSelectedVocabItem(task);
    const exploredCount = task.items.filter((item) => state.exploredVocabIds.includes(item.id)).length;
    const imageStyle = task.gardenImage ? ` style="background-image: url('${escapeHtml(asset(task.gardenImage))}')"` : "";
    const gardenClasses = ["garden-scene", task.gardenImage ? "image-garden" : "", task.gardenVariant || ""].filter(Boolean).join(" ");
    return `
      <div class="${escapeHtml(gardenClasses)}" aria-label="Vocabulary Garden"${imageStyle}>
        ${task.items.map((item) => `
          <button
            class="garden-word garden-${escapeHtml(item.id)} ${state.exploredVocabIds.includes(item.id) ? "seen" : ""} ${state.selectedVocabWordId === item.id ? "active" : ""}"
            data-vocab-word="${escapeHtml(item.id)}"
            aria-label="${escapeHtml(item.word)}"
          >
            <span class="garden-emoji">${escapeHtml(item.image || "")}</span>
            <strong>${escapeHtml(item.word)}</strong>
          </button>
        `).join("")}
      </div>
      <div class="garden-detail-mobile">
        ${selected ? renderVocabDetail(selected) : `<p>Нажми на слово: оно прозвучит, и появится пример.</p>`}
      </div>
      <p class="mini-progress">Посмотрено слов: ${exploredCount} / ${task.items.length}</p>
      <button class="primary-button wide" data-action="check-vocab">Готово</button>
    `;
  }

  if (task.type === "vocab_card") {
    return `
      <div class="vocab-grid">
        ${task.items.map((item) => `
          <button class="vocab-item" data-speak="${escapeHtml(item.word)}">
            <span>${escapeHtml(item.image)}</span>
            <strong>${escapeHtml(item.word)}</strong>
            <em>${escapeHtml(item.ru)}</em>
            <p>${escapeHtml(item.sentence)}</p>
          </button>
        `).join("")}
      </div>
      <button class="primary-button wide" data-action="complete-match">Готово</button>
    `;
  }

  if (task.type === "match_word_image") {
    return `
      <div class="match-columns interactive-match">
        <div class="match-col">
          <h4>Words</h4>
          ${task.pairs.map((pair) => {
            const matched = state.matchedPairIds.includes(pair.id);
            const selected = state.selectedMatchWordId === pair.id;
            return `<button class="match-chip ${selected ? "selected" : ""} ${matched ? "matched" : ""}" data-match-word="${escapeHtml(pair.id)}" ${matched ? "disabled" : ""}>${escapeHtml(displayText(pair.word))}${pair.speak ? `<span class="mini-listen" data-speak="${escapeHtml(pair.speak)}">🔊</span>` : ""}</button>`;
          }).join("")}
        </div>
        <div class="match-col">
          <h4>Pictures</h4>
          ${(task.shufflePictures ? [...task.pairs].reverse() : task.pairs).map((pair) => {
            const matched = state.matchedPairIds.includes(pair.id);
            return `<button class="match-chip picture-chip ${matched ? "matched" : ""}" data-match-picture="${escapeHtml(pair.id)}" ${matched ? "disabled" : ""}>${escapeHtml(pair.image)}${pair.pictureSpeak ? `<span class="mini-listen" data-speak="${escapeHtml(pair.pictureSpeak)}">🔊</span>` : ""}</button>`;
          }).join("")}
        </div>
      </div>
      <p class="match-help">Сначала нажми слово, потом подходящую картинку.</p>
    `;
  }

  return `<p>Этот тип задания будет добавлен позже.</p>`;
}


function getCompletedColoringTasksForScene(sceneId) {
  return tasks.filter((entry) =>
    entry.type === "coloring_click" &&
    entry.sceneId === sceneId &&
    state.progress.completedTaskIds.includes(entry.id)
  );
}

function colorToCss(color) {
  const map = {
    red: "rgba(239, 68, 68, 0.42)",
    pink: "rgba(236, 72, 153, 0.42)",
    blue: "rgba(59, 130, 246, 0.42)",
    green: "rgba(34, 197, 94, 0.42)"
  };
  return map[color] || "rgba(249, 115, 22, 0.35)";
}

function renderColoringClickTask(task) {
  const completed = getCompletedColoringTasksForScene(task.sceneId);
  const completedOverlays = completed.map((doneTask) => {
    const target = (task.targets || []).find((item) => item.id === doneTask.correctTargetId);
    if (!target) return "";
    return `<div class="coloring-overlay done" style="left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;background:${colorToCss(doneTask.color)};border-color:${escapeHtml(doneTask.color)};"><span>${escapeHtml(doneTask.color)}</span></div>`;
  }).join("");

  return `
    <div class="coloring-workspace">
      <p class="coloring-help">Нажми на того, кто подходит к фразе. Если выберешь правильно, место окрасится.</p>
      <div class="coloring-image-wrap">
        <img src="${escapeHtml(asset(task.image))}" alt="Coloring picture" />
        ${completedOverlays}
        ${(task.targets || []).map((target) => `
          <button class="coloring-target" data-color-target="${escapeHtml(target.id)}" style="left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;" aria-label="${escapeHtml(target.label)}">
            <span>${escapeHtml(target.label)}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function handleColoringClick(targetId) {
  const task = getCurrentTask();
  if (!task || task.type !== "coloring_click") return;
  if (targetId === task.correctTargetId) {
    answerTask(true, `+10 XP! ${task.colorRu || "Цвет выбран"}.`);
    return;
  }
  state.sceneMistakes += 1;
  state.feedback = "Почти! Выбери другого ребёнка или предмет, который подходит к фразе.";
  render();
}

function renderChoiceButton(choice) {
  const label = displayChoiceText(choice.label);
  return `
    <button class="choice-card" data-choice-id="${escapeHtml(choice.id)}">
      <strong>${escapeHtml(label)}</strong>
      ${choice.image ? `<span class="choice-image">${escapeHtml(choice.image)}</span>` : ""}
      ${choice.speak ? `<span class="mini-listen" data-speak="${escapeHtml(choice.speak)}">🔊 Listen</span>` : ""}
    </button>
  `;
}

function renderGrammarModal() {
  const card = state.modalGrammarCardId ? getGrammarCardById(state.modalGrammarCardId) : getCardBySkill(state.modalSkillId);
  if (!card) return "";
  const buddyText = card.buddyIntro || "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:";
  const body = card.layout === "pairs"
    ? `<div class="grammar-pair-grid">
        ${card.pairs.map((pair) => `
          <article class="grammar-pair">
            <div class="grammar-mini">
              <div class="grammar-image">${escapeHtml(pair.singular.image)}</div>
              <strong>${escapeHtml(pair.singular.label)}</strong>
              <p>${escapeHtml(pair.singular.sentence)}</p>
              ${pair.singular.speak ? `<button class="listen-button grammar-listen" data-speak="${escapeHtml(pair.singular.speak)}">🔊 Listen</button>` : ""}
            </div>
            <div class="pair-arrow">↓</div>
            <div class="grammar-mini">
              <div class="grammar-image">${escapeHtml(pair.plural.image)}</div>
              <strong>${escapeHtml(pair.plural.label)}</strong>
              <p>${escapeHtml(pair.plural.sentence)}</p>
              ${pair.plural.speak ? `<button class="listen-button grammar-listen" data-speak="${escapeHtml(pair.plural.speak)}">🔊 Listen</button>` : ""}
            </div>
          </article>
        `).join("")}
      </div>`
    : `<div class="grammar-items">
        ${(card.items || []).map((item) => `
          <article>
            ${item.imageFile ? `<img class="grammar-thumb" src="${escapeHtml(asset(item.imageFile))}" alt="${escapeHtml(item.label)}" />` : `<div class="grammar-image">${escapeHtml(item.image)}</div>`}
            <strong>${escapeHtml(item.label)}</strong>
            ${item.ru ? `<em class="grammar-ru">${escapeHtml(item.ru)}</em>` : ""}
            <p>${escapeHtml(item.sentence)}</p>
            ${item.speak ? `<button class="listen-button grammar-listen" data-speak="${escapeHtml(item.speak)}">🔊 Listen</button>` : ""}
          </article>
        `).join("")}
      </div>`;

  return `
    <div class="modal-backdrop">
      <section class="modal-card">
        <p class="small-label">Grammar card</p>
        <div class="buddy-speech grammar-buddy-speech"><div class="buddy-speech-face">🦊</div><p>${escapeHtml(buddyText)}</p></div>
        <h2>${escapeHtml(card.title)}</h2>
        <p class="rule-text">${escapeHtml(card.rule)}</p>
        ${body}
        <button class="primary-button wide" data-action="close-card">${escapeHtml(card.buttonLabel || "Try it")}</button>
      </section>
    </div>
  `;
}

function renderVocabModal() {
  const card = getVocabCard(state.modalVocabCardId);
  if (!card) return "";

  return `
    <div class="modal-backdrop">
      <section class="modal-card vocab-modal-card">
        <p class="small-label">${escapeHtml(card.typeLabel || "Vocabulary card")}</p>
        <h2>${escapeHtml(card.title)}</h2>
        <p class="rule-text">${escapeHtml(card.rule)}</p>
        <div class="vocab-grid modal-vocab-grid">
          ${card.items.map((item) => `
            <button class="vocab-item" data-speak="${escapeHtml(item.word)}">
              ${item.imageFile ? `<img class="vocab-thumb" src="${escapeHtml(asset(item.imageFile))}" alt="${escapeHtml(item.word)}" />` : `<span>${escapeHtml(item.image)}</span>`}
              <strong>${escapeHtml(item.word)}</strong>
              <em>${escapeHtml(item.ru)}</em>
              <p>${escapeHtml(item.sentence)}</p>
              <small>🔊 Listen</small>
            </button>
          `).join("")}
        </div>
        <button class="primary-button wide" data-action="close-vocab-card">${state.pendingScene ? "Try it" : "Перейти в Vocabulary Garden"}</button>
      </section>
    </div>
  `;
}

function getAchievement(id) {
  return achievements.find((item) => item.id === id);
}

function renderAchievementModal(id) {
  const item = getAchievement(id);
  if (!item) return "";
  const defaultPhrase = item.id === "zoo-guide-license" ? "Now you can help me with the zoo tour!" : (item.phrase || item.title);
  const defaultPhraseRu = item.id === "zoo-guide-license" ? "Теперь ты можешь помогать мне проводить экскурсии! Пока только по этим животным. Учись у смотрителя и получай новые возможности." : (item.phraseRu || item.descriptionRu || "Новый item получен!");
  return `
    <div class="modal-backdrop">
      <section class="modal-card achievement-card">
        <p class="small-label">Achievement</p>
        <h2>🎫 ${escapeHtml(item.title)}</h2>
        <img class="achievement-image" src="${escapeHtml(asset(item.image))}" alt="${escapeHtml(item.title)}" />
        <h3>${escapeHtml(item.titleRu)}</h3>
        <p><strong>${escapeHtml(defaultPhrase)}</strong></p>
        <p>${escapeHtml(defaultPhraseRu)}</p>
        <button class="primary-button wide" data-action="close-achievement">Забрать item</button>
      </section>
    </div>
  `;
}

function renderBuddyModal() {
  const items = [
    { emoji: "🎒", title: "Ранец", en: "Fast travel backpack", text: "Лекс носит быстрые переходы между мирами." },
    { emoji: "🎓", title: "Аттестат из садика", en: "Kindergarten certificate", text: "Лекс уже учился и знает правила, но всё ещё часто путает." },
  ];
  return `
    <div class="modal-backdrop">
      <section class="modal-card achievement-card">
        <p class="small-label">Buddy items</p>
        <h2>🦊 Buddy / Lex</h2>
        <p class="rule-text">Лисёнок путешествует вместе с аватаром: иногда подсказывает, а иногда сам путается.</p>
        ${items.map((item) => `
          <article class="buddy-inventory-item">
            <div class="buddy-item-emoji">${escapeHtml(item.emoji)}</div>
            <div><h3>${escapeHtml(item.title)}</h3><strong>${escapeHtml(item.en)}</strong><p>${escapeHtml(item.text)}</p></div>
          </article>
        `).join("")}
        <button class="primary-button wide" data-action="close-buddy">Закрыть</button>
      </section>
    </div>
  `;
}

function renderAchievementsModal() {
  const items = state.progress.achievementIds.map(getAchievement).filter(Boolean);
  return `
    <div class="modal-backdrop">
      <section class="modal-card achievement-card">
        <p class="small-label">Avatar items</p>
        <h2>🎒 Достижения и items</h2>
        ${items.length ? items.map((item) => `
          <article class="inventory-item">
            <img src="${escapeHtml(asset(item.image))}" alt="${escapeHtml(item.title)}" />
            <div>
              <h3>${escapeHtml(item.title)}</h3>
              <p><strong>${escapeHtml(item.titleRu)}</strong></p>
              <p>${escapeHtml(item.descriptionRu)}</p>
              <small>${escapeHtml(item.description)}</small>
            </div>
          </article>
        `).join("") : `<p>Пока items нет. Исследуй миры и проходи большие задания, чтобы получать достижения.</p>`}
        <button class="primary-button wide" data-action="close-achievements">Закрыть</button>
      </section>
    </div>
  `;
}

function getSelectedVocabItem(task) {
  return task?.items?.find((item) => item.id === state.selectedVocabWordId) || null;
}

function renderVocabDetail(item) {
  return `
    <article class="vocab-detail-card">
      ${item.imageFile ? `<img class="detail-image" src="${escapeHtml(asset(item.imageFile))}" alt="${escapeHtml(item.word)}" />` : `<div class="detail-emoji">${escapeHtml(item.image)}</div>`}
      <h3>${escapeHtml(item.word)}</h3>
      <p class="translation">${escapeHtml(item.ru)}</p>
      <p>${escapeHtml(item.sentence)}</p>
      <button class="listen-button" data-speak="${escapeHtml(item.word)}">🔊 Listen</button>
    </article>
  `;
}

function renderVocabSide(task) {
  const selected = getSelectedVocabItem(task);
  return `<div class="visual-card vocab-side">${selected ? renderVocabDetail(selected) : `<div class="vocab-detail-card"><div class="detail-emoji">🌷</div><h3>Tap a word</h3><p class="translation">Нажми слово на картинке.</p><p>Ты услышишь его и увидишь пример.</p></div>`}</div>`;
}

function renderSceneCompleted() {
  const { scene, sceneXp, bonusXp } = state.sceneCompletedView;
  const completionTitle = scene.completionTitleFromName && state.helperName ? `Thanks, ${state.helperName}!` : (scene.completionTitle || "Scene completed!");
  return `
    <section class="completion-card">
      ${scene.completionImage ? `<img src="${escapeHtml(asset(scene.completionImage))}" alt="${escapeHtml(completionTitle)}" />` : `<div class="big-emoji">${escapeHtml(scene.emoji)}</div>`}
      <p class="small-label">${escapeHtml(scene.titleRu || scene.title)}</p>
      <h2>You did it!</h2>
      <h3>${escapeHtml(completionTitle)}</h3>
      ${scene.completionText ? `<p>${escapeHtml(displayText(scene.completionText))}</p>` : ""}
      <div class="reward-row">
        <span>+${sceneXp} XP</span>
        ${bonusXp ? `<span>No mistakes +${bonusXp} XP</span>` : ""}
      </div>
      <p class="hint-text">Посмотри мир! Там могли появиться новые сцены.</p>
      ${(() => { const world = worlds.find((item) => item.id === scene.worldId); return `<button class="primary-button" data-action="back">Вернуться в ${escapeHtml(world?.title || "мир")}</button>`; })()}
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-world-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedWorldId = button.dataset.worldId;
      state.selectedScene = null;
      state.sceneCompletedView = null;
      if (button.dataset.worldId === "zoo" && !state.progress.completedSceneIds.includes("zoo-open-enclosures")) {
        state.toastMessage = "Первый день работы зоопарка! Помоги смотрителю.";
      }
      if (button.dataset.worldId === "school" && !state.progress.completedSceneIds.includes("school-pack-bag")) {
        state.toastMessage = "Первый день в школе!";
      }
      if (button.dataset.worldId === "cafe" && !state.progress.completedSceneIds.includes("cafe-find-snack")) {
        state.toastMessage = "Нужно подготовить кафе к первым посетителям.";
      }
      if (button.dataset.worldId === "playground" && !state.progress.completedSceneIds.includes("playground-look-toys")) {
        state.toastMessage = "О ура, Playground! Пойдём поиграем.";
      }
      render();
    });
  });

  document.querySelectorAll("[data-scene-id]").forEach((button) => {
    button.addEventListener("click", () => openScene(button.dataset.sceneId));
  });

  document.querySelectorAll("[data-lex-choice-id]").forEach((button) => {
    button.addEventListener("click", () => handleLexChoice(button.dataset.lexChoiceId));
  });


  document.querySelectorAll("[data-choice-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = getCurrentTask();
      const choice = task?.choices?.find((item) => item.id === button.dataset.choiceId);
      answerTask(Boolean(choice?.isCorrect));
    });
  });

  document.querySelectorAll("[data-object-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const task = getCurrentTask();
      answerTask(task?.correctObjectId === button.dataset.objectId);
    });
  });

  document.querySelectorAll("[data-multi-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.multiId;
      if (state.selectedMulti.includes(id)) {
        state.selectedMulti = state.selectedMulti.filter((item) => item !== id);
      } else {
        state.selectedMulti.push(id);
      }
      render();
    });
  });
  document.querySelectorAll("[data-match-word]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMatchWordId = button.dataset.matchWord;
      state.feedback = "Теперь выбери картинку.";
      render();
    });
  });

  document.querySelectorAll("[data-match-picture]").forEach((button) => {
    button.addEventListener("click", () => checkMatchPicture(button.dataset.matchPicture));
  });

  document.querySelectorAll("[data-vocab-word]").forEach((button) => {
    button.addEventListener("click", () => selectVocabWord(button.dataset.vocabWord));
  });

  document.querySelectorAll("[data-color-target]").forEach((button) => {
    button.addEventListener("click", () => handleColoringClick(button.dataset.colorTarget));
  });

  document.querySelectorAll("[data-speak]").forEach((button) => {
    const speakHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const now = Date.now();
      if (button.dataset.lastSpeakAt && now - Number(button.dataset.lastSpeakAt) < 350) return;
      button.dataset.lastSpeakAt = String(now);
      speakEnglish(button.dataset.speak);
    };
    button.addEventListener("pointerdown", speakHandler);
    button.addEventListener("click", speakHandler);
  });

  const fillInput = document.getElementById("fillInput");
  if (fillInput) {
    fillInput.addEventListener("input", (event) => {
      state.fillValue = event.target.value;
    });
    fillInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkFill();
    });
    fillInput.focus();
  }

  const freeTextInput = document.getElementById("freeTextInput");
  if (freeTextInput) {
    freeTextInput.addEventListener("input", (event) => {
      state.freeTextValue = event.target.value;
    });
    freeTextInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkFreeText();
    });
    freeTextInput.focus();
  }

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "close-toast") { state.toastMessage = ""; render(); }
      if (action === "clear-lex") clearLexDialog();
      if (action === "back") goBackToWorld();
      if (action === "reset") resetProgress();
      if (action === "close-card") closeGrammarCard();
      if (action === "close-vocab-card") closeVocabCard();
      if (action === "open-achievements") { state.showAchievementsModal = true; render(); }
      if (action === "close-achievements") { state.showAchievementsModal = false; render(); }
      if (action === "open-buddy") { state.showBuddyModal = true; render(); }
      if (action === "close-buddy") { state.showBuddyModal = false; render(); }
      if (action === "open-audio-check") { state.showAudioCheck = true; state.lastAudioCheckResult = ""; render(); }
      if (action === "close-audio-check") { state.showAudioCheck = false; render(); }
      if (action === "audio-reset") resetAudioEngine();
      if (action === "audio-check-correct") { state.lastAudioCheckResult = "Звук понятный: ты услышала kitten."; render(); }
      if (action === "audio-check-wrong") { state.lastAudioCheckResult = "Похоже, звук был непонятный. Нажми «Перезапустить голос» и попробуй ещё раз."; render(); }
      if (action === "close-achievement") { state.modalAchievementId = null; render(); }
      if (action === "check-fill") checkFill();
      if (action === "check-free-text") checkFreeText();
      if (action === "complete-match") answerTask(true);
      if (action === "check-multi") checkMulti();
      if (action === "check-vocab") checkVocabExplored();
    });
  });
}

function checkMatchPicture(pictureId) {
  const task = getCurrentTask();
  if (!task || task.type !== "match_word_image") return;

  if (!state.selectedMatchWordId) {
    state.feedback = "Сначала выбери слово слева.";
    render();
    return;
  }

  if (state.selectedMatchWordId === pictureId) {
    if (!state.matchedPairIds.includes(pictureId)) state.matchedPairIds.push(pictureId);
    state.selectedMatchWordId = null;

    if (state.matchedPairIds.length >= task.pairs.length) {
      answerTask(true, "+10 XP! Все пары собраны.");
      return;
    }

    state.feedback = "Правильно! Найди следующую пару.";
    render();
    return;
  }

  state.sceneMistakes += 1;
  state.selectedMatchWordId = null;
  state.feedback = "Почти! Это другая картинка.";
  render();
}

function selectVocabWord(wordId) {
  const task = getCurrentTask();
  if (!task || task.type !== "interactive_garden") return;
  const item = task.items.find((entry) => entry.id === wordId);
  if (!item) return;

  state.selectedVocabWordId = wordId;
  if (!state.exploredVocabIds.includes(wordId)) state.exploredVocabIds.push(wordId);
  state.feedback = `${item.word}: ${item.ru}`;
  speakEnglish(item.word);
  render();
}

function checkVocabExplored() {
  const task = getCurrentTask();
  if (!task || task.type !== "interactive_garden") return;
  const allSeen = task.items.every((item) => state.exploredVocabIds.includes(item.id));
  if (!allSeen) {
    state.feedback = `Нажми на все слова в саду: ${task.requiredWordList || task.items.map((item) => item.word).join(", ")}.`;
    render();
    return;
  }
  answerTask(true, "+10 XP! Все слова посмотрели.");
}

function checkFill() {
  const task = getCurrentTask();
  const value = (document.getElementById("fillInput")?.value || state.fillValue).trim().toLowerCase();
  state.fillValue = value;
  answerTask(task?.acceptedAnswers?.map((answer) => answer.toLowerCase()).includes(value));
}

function checkFreeText() {
  const task = getCurrentTask();
  const value = (document.getElementById("freeTextInput")?.value || state.freeTextValue).trim();
  state.freeTextValue = value;
  const isCorrect = value.length >= (task?.minLength || 1);
  if (isCorrect && task?.storeAs === "helperName") {
    state.helperName = value;
    state.progress.helperName = value;
    saveProgress();
  }
  const successText = task?.successMessagePrefix ? `${task.successMessagePrefix}${value}! +10 XP` : undefined;
  answerTask(isCorrect, successText);
}

function checkMulti() {
  const task = getCurrentTask();
  if (task?.noWrongAnswer) {
    if (!state.selectedMulti.length) {
      state.feedback = "Выбери хотя бы один вариант.";
      render();
      return;
    }
    answerTask(true, "+10 XP! Выбор принят.");
    return;
  }
  const correctIds = task.choices.filter((choice) => choice.isCorrect).map((choice) => choice.id).sort();
  const selectedIds = [...state.selectedMulti].sort();
  const isCorrect = correctIds.length === selectedIds.length && correctIds.every((id, index) => id === selectedIds[index]);
  answerTask(isCorrect, isCorrect ? "+10 XP! Всё правильно." : undefined);
}

document.addEventListener("DOMContentLoaded", render);


// v24 app patch: stable audio reset, world grammar links, vocab-card routing, coloring palette.
(function applyV24AppPatch(){
  const originalResetAudioEngine = resetAudioEngine;
  resetAudioEngine = function resetAudioEngineV24() {
    try {
      if (speechTimer) { clearInterval(speechTimer); speechTimer = null; }
      window.speechSynthesis?.resume?.();
      window.speechSynthesis?.getVoices?.();
      state.lastAudioCheckResult = 'Голос проверен. Нажми Listen ещё раз. Если звука нет, обнови страницу.';
    } catch {
      state.lastAudioCheckResult = 'Не получилось проверить голос. Лучше открыть в Chrome или Edge.';
    }
    render();
  };

  const originalSpeakEnglish = speakEnglish;
  speakEnglish = function speakEnglishV24(text, attempt = 0) {
    const cleaned = String(text || '').trim();
    if (!cleaned) return;
    originalSpeakEnglish(cleaned + (/[.!?]$/.test(cleaned) ? '' : ' '), attempt);
  };

  // A fill-blank task can accept any numeric age.
  checkFill = function checkFillV24() {
    const task = getCurrentTask();
    const value = (document.getElementById('fillInput')?.value || state.fillValue).trim().toLowerCase();
    state.fillValue = value;
    if (task?.allowAnyNumber) {
      answerTask(/^\d+$/.test(value));
      return;
    }
    answerTask(task?.acceptedAnswers?.map((answer) => String(answer).toLowerCase()).includes(value));
  };

  // Choice tasks marked noWrongChoice accept any option and remember toy-shop selection.
  const originalBindEvents = bindEvents;
  bindEvents = function bindEventsV24() {
    originalBindEvents();
    document.querySelectorAll('[data-color-choice]').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedColorForColoring = button.dataset.colorChoice;
        render();
      });
    });
  };

  // Replace click behavior for choices after original handlers are attached by using capture phase.
  document.addEventListener('click', function(event) {
    const button = event.target.closest?.('[data-choice-id]');
    if (!button) return;
    const task = getCurrentTask();
    if (!task?.noWrongChoice) return;
    event.stopImmediatePropagation();
    event.preventDefault();
    const choice = task.choices?.find((item) => item.id === button.dataset.choiceId);
    if (task.sceneId === 'playground-toy-shop' && choice) {
      state.progress.lastToyTrade = displayChoiceText(choice.label || 'a toy');
      saveProgress();
      task.prompt = `Trade: ${state.progress.lastToyTrade} on`;
    }
    answerTask(true, '+10 XP! Обмен принят.');
  }, true);

  // Route the playground colors vocab card to Vocabulary Garden before the scene practice.
  const originalCloseVocabCard = closeVocabCard;
  closeVocabCard = function closeVocabCardV24() {
    const cardId = state.modalVocabCardId;
    const scene = state.pendingScene;
    if (cardId === 'vocab-playground-colors-card' && scene?.id === 'playground-colors') {
      if (!state.progress.seenVocabCardIds.includes(cardId)) state.progress.seenVocabCardIds.push(cardId);
      state.modalVocabCardId = null;
      state.pendingScene = null;
      state.pendingWorldId = null;
      state.selectedWorldId = 'vocabulary';
      state.sceneCompletedView = null;
      saveProgress();
      render();
      return;
    }
    originalCloseVocabCard();
  };

  // Grammar unlocks are global across worlds.
  isGrammarSkillUnlocked = function isGrammarSkillUnlockedV24(skillId) {
    if (skillId === 'articles') return true;
    const completed = state.progress.completedSceneIds;
    const any = (ids) => ids.some((id) => completed.includes(id));
    if (skillId === 'plural') return any(['cafe-make-fruit-pizza','school-collision','zoo-animal-pairs','playground-count-toys','playground-sandbox']);
    if (skillId === 'to_be') return any(['cafe-meet-visitors','school-meet-classmates','zoo-meet-keeper','playground-about-me','playground-meet-kids']);
    if (skillId === 'is_intro') return any(['cafe-look-visitors','cafe-notice-visitors','school-team','school-phone-game','zoo-look-keeper','zoo-guide-stage-1','playground-colors','playground-describe-kids']);
    if (skillId === 'are_intro') return any(['cafe-serve-tables','cafe-notice-groups','school-meet-teams','school-describe-teams','zoo-look-animal-groups','zoo-guide-stage-2','playground-draw-groups']);
    const skill = getSkill(skillId);
    return Boolean(skill && state.progress.xp >= skill.xpThreshold);
  };

  const orderByWorld = {
    zoo: ['zoo-open-enclosures','zoo-escaped-animals','zoo-feed-animals','zoo-animal-pairs','zoo-hungry-animals','zoo-meet-keeper','zoo-talk-keeper','zoo-look-keeper','zoo-guide-stage-1','zoo-look-animal-groups','zoo-guide-stage-2','zoo-guide-final'],
    cafe: ['cafe-find-snack','cafe-clean-table','cafe-fridge-snacks','cafe-make-fruit-pizza','cafe-prepare-counter','cafe-meet-visitors','cafe-sort-snacks','cafe-look-visitors','cafe-notice-visitors','cafe-serve-tables','cafe-notice-groups','cafe-talk-waiter','cafe-choose-food','cafe-close-day'],
    school: ['school-pack-bag','school-breakfast','school-pack-again','school-get-to-school','school-schedule','school-collision','school-desk-supplies','school-meet-classmates','school-class-nonsense','school-team','school-phone-game','school-meet-teams','school-describe-teams','school-final-review'],
    playground: ['playground-look-toys','playground-choose-toy','playground-count-toys','playground-sandbox','playground-colors','playground-describe-kids','playground-about-me','playground-meet-kids','playground-blocks','playground-new-toys','playground-toy-shop','playground-draw-groups','playground-color-easy','playground-color-medium','playground-color-hard','playground-go-home']
  };
  const originalGetVisible = getVisibleScenesForWorld;
  getVisibleScenesForWorld = function getVisibleScenesForWorldV24(worldId) {
    return originalGetVisible(worldId).sort((a,b) => {
      const order = orderByWorld[worldId] || [];
      const ai = order.indexOf(a.id), bi = order.indexOf(b.id);
      return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
    });
  };

  // Completion text for toy shop can mention the last chosen toy.
  const originalRenderSceneCompleted = renderSceneCompleted;
  renderSceneCompleted = function renderSceneCompletedV24() {
    if (state.sceneCompletedView?.scene?.id === 'playground-toy-shop' && state.progress.lastToyTrade) {
      state.sceneCompletedView.scene.completionText = `О, ты получил новую игрушку, и это ${state.progress.lastToyTrade}!`;
    }
    return originalRenderSceneCompleted();
  };

  function colorToRu(color) {
    return {red:'красный', pink:'розовый', blue:'голубой', green:'зелёный'}[color] || color;
  }
  function colorCircle(color) {
    return `<button class="color-pick ${state.selectedColorForColoring === color ? 'selected' : ''}" data-color-choice="${escapeHtml(color)}" aria-label="${escapeHtml(colorToRu(color))}"><span class="color-dot ${escapeHtml(color)}"></span></button>`;
  }
  renderColoringClickTask = function renderColoringClickTaskV24(task) {
    const completed = getCompletedColoringTasksForScene(task.sceneId);
    const completedOverlays = completed.map((doneTask) => {
      const target = (task.targets || []).find((item) => item.id === doneTask.correctTargetId);
      if (!target) return '';
      return `<div class="coloring-overlay done" style="left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;background:${colorToCss(doneTask.color)};border-color:${escapeHtml(doneTask.color)};"><span>${escapeHtml(doneTask.color)}</span></div>`;
    }).join('');
    return `
      <div class="coloring-workspace">
        <p class="coloring-help">Сначала выбери цвет, потом нажми на подходящего ребёнка, группу или предмет.</p>
        <div class="color-palette">${['red','blue','green','pink'].map(colorCircle).join('')}</div>
        <div class="coloring-image-wrap">
          <img src="${escapeHtml(asset(task.image))}" alt="Coloring picture" />
          ${completedOverlays}
          ${(task.targets || []).map((target) => `
            <button class="coloring-target" data-color-target="${escapeHtml(target.id)}" style="left:${target.left}%;top:${target.top}%;width:${target.width}%;height:${target.height}%;" aria-label="${escapeHtml(target.label)}">
              <span>${escapeHtml(target.label)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  };
  const originalHandleColoringClick = handleColoringClick;
  handleColoringClick = function handleColoringClickV24(targetId) {
    const task = getCurrentTask();
    if (!task || task.type !== 'coloring_click') return;
    if (!state.selectedColorForColoring) {
      state.feedback = 'Сначала выбери цвет.';
      render();
      return;
    }
    if (state.selectedColorForColoring !== task.color) {
      state.sceneMistakes += 1;
      state.feedback = `Почти! ${task.color} - ${task.colorRu || colorToRu(task.color)} цвет! Выбери нужный цвет и подходящего ребёнка или предмет.`;
      render();
      return;
    }
    if (targetId === task.correctTargetId) {
      const selected = state.selectedColorForColoring;
      state.selectedColorForColoring = null;
      answerTask(true, `+10 XP! ${task.colorRu || colorToRu(task.color)}.`);
      return;
    }
    state.sceneMistakes += 1;
    state.feedback = `Почти! ${task.color} - ${task.colorRu || colorToRu(task.color)} цвет! Выбери другого ребёнка или предмет, который подходит к фразе.`;
    render();
  };
  const originalAnswerTask = answerTask;
  answerTask = function answerTaskV24(isCorrect, successText) {
    if (isCorrect) state.selectedColorForColoring = null;
    originalAnswerTask(isCorrect, successText);
  };
})();

// v24b: show Playground color vocab card after the color grammar card, before practice.
(function applyV24BColorVocabFlow(){
  const previousCloseGrammarCard = closeGrammarCard;
  closeGrammarCard = function closeGrammarCardV24B() {
    const seenId = state.modalGrammarCardId || state.modalSkillId;
    const scene = state.pendingScene;
    if (scene?.id === 'playground-colors' && seenId === 'card-playground-colors') {
      ['card-playground-colors','is_intro'].forEach((id) => {
        if (!state.progress.seenGrammarCardSkillIds.includes(id)) state.progress.seenGrammarCardSkillIds.push(id);
      });
      ensureLexArrays();
      if (!state.progress.seenSceneGrammarFlowIds.includes(scene.id)) state.progress.seenSceneGrammarFlowIds.push(scene.id);
      state.modalSkillId = null;
      state.modalGrammarCardId = null;
      state.modalVocabCardId = 'vocab-playground-colors-card';
      state.pendingScene = scene;
      saveProgress();
      render();
      return;
    }
    previousCloseGrammarCard();
  };
})();

// v25: deterministic world progression + global grammar anchors.
(function applyV25UnlockPatch(){
  const orderByWorldV25 = {
    cafe: [
      'cafe-find-snack','cafe-clean-table','cafe-fridge-snacks','cafe-make-fruit-pizza','cafe-prepare-counter','cafe-meet-visitors','cafe-sort-snacks','cafe-look-visitors','cafe-notice-visitors','cafe-serve-tables','cafe-notice-groups','cafe-talk-waiter','cafe-choose-food','cafe-close-day'
    ],
    school: [
      'school-pack-bag','school-breakfast','school-pack-again','school-get-to-school','school-schedule','school-collision','school-desk-supplies','school-meet-classmates','school-class-nonsense','school-team','school-phone-game','school-meet-teams','school-describe-teams','school-final-review'
    ],
    zoo: [
      'zoo-open-enclosures','zoo-escaped-animals','zoo-feed-animals','zoo-animal-pairs','zoo-hungry-animals','zoo-meet-keeper','zoo-talk-keeper','zoo-look-keeper','zoo-guide-stage-1','zoo-look-animal-groups','zoo-guide-stage-2','zoo-guide-final'
    ],
    playground: [
      'playground-look-toys','playground-choose-toy','playground-count-toys','playground-sandbox','playground-colors','playground-describe-kids','playground-about-me','playground-meet-kids','playground-blocks','playground-new-toys','playground-toy-shop','playground-draw-groups','playground-color-easy','playground-color-medium','playground-color-hard','playground-go-home'
    ],
  };

  const firstSceneByWorld = {
    cafe: 'cafe-find-snack',
    school: 'school-pack-bag',
    zoo: 'zoo-open-enclosures',
    playground: 'playground-look-toys',
  };

  const stageAnchorsBySkill = {
    articles: {
      cafe: ['cafe-find-snack'],
      school: ['school-pack-bag'],
      zoo: ['zoo-open-enclosures'],
      playground: ['playground-look-toys'],
    },
    plural: {
      cafe: ['cafe-make-fruit-pizza'],
      school: ['school-collision'],
      zoo: ['zoo-animal-pairs'],
      playground: ['playground-count-toys'],
    },
    to_be: {
      cafe: ['cafe-meet-visitors'],
      school: ['school-meet-classmates'],
      zoo: ['zoo-meet-keeper'],
      playground: ['playground-about-me'],
    },
    is_intro: {
      cafe: ['cafe-look-visitors'],
      school: ['school-team'],
      zoo: ['zoo-look-keeper'],
      playground: ['playground-describe-kids'],
    },
    are_intro: {
      cafe: ['cafe-serve-tables'],
      school: ['school-meet-teams'],
      zoo: ['zoo-look-animal-groups'],
      playground: ['playground-draw-groups'],
    },
  };

  const skillMasteryScenes = {
    articles: ['cafe-find-snack','school-pack-bag','zoo-open-enclosures','playground-look-toys'],
    plural: ['cafe-make-fruit-pizza','school-collision','zoo-animal-pairs','playground-count-toys'],
    to_be: ['cafe-meet-visitors','school-meet-classmates','zoo-meet-keeper','playground-about-me'],
    is_intro: ['cafe-look-visitors','school-team','zoo-look-keeper','playground-describe-kids'],
    are_intro: ['cafe-serve-tables','school-meet-teams','zoo-look-animal-groups','playground-draw-groups'],
  };

  const extraArticlePracticeAfterFirst = {
    cafe: ['cafe-clean-table','cafe-fridge-snacks'],
    zoo: ['zoo-escaped-animals','zoo-feed-animals'],
    playground: ['playground-choose-toy'],
    school: [],
  };

  const schoolNumberScenes = ['school-get-to-school','school-schedule'];

  function sceneByIdV25(id) {
    return scenes.find((scene) => scene.id === id);
  }

  function completedV25(id) {
    return state.progress.completedSceneIds.includes(id);
  }

  function anyCompletedV25(ids) {
    return ids.some((id) => completedV25(id));
  }

  function hasAnyCompletedSceneV25() {
    return state.progress.completedSceneIds.length > 0;
  }

  function skillMasteredV25(skillId) {
    if (skillId === 'articles') return anyCompletedV25(skillMasteryScenes.articles);
    return anyCompletedV25(skillMasteryScenes[skillId] || []);
  }

  isGrammarSkillUnlocked = function isGrammarSkillUnlockedV25(skillId) {
    if (skillId === 'articles') return true;
    if (skillMasteryScenes[skillId]) return skillMasteredV25(skillId);
    const skill = getSkill(skillId);
    return Boolean(skill && state.progress.xp >= skill.xpThreshold);
  };

  function canRevealSpecialV25(sceneId) {
    if (sceneId === 'zoo-animal-pairs') {
      return completedV25('zoo-feed-animals') && isZooRestReady();
    }
    if (sceneId === 'zoo-hungry-animals') return completedV25('zoo-animal-pairs');
    if (sceneId === 'zoo-guide-stage-1') return completedV25('zoo-look-keeper');
    if (sceneId === 'zoo-talk-keeper') return completedV25('zoo-meet-keeper');
    if (sceneId === 'zoo-look-keeper') return completedV25('zoo-talk-keeper') || skillMasteredV25('is_intro');
    if (sceneId === 'zoo-look-animal-groups') return completedV25('zoo-guide-stage-1') || skillMasteredV25('are_intro');
    return true;
  }

  function addIfExistsV25(set, sceneId) {
    if (sceneByIdV25(sceneId) && canRevealSpecialV25(sceneId)) set.add(sceneId);
  }

  getVisibleScenesForWorld = function getVisibleScenesForWorldV25(worldId) {
    if (worldId === 'vocabulary') {
      return scenes.filter((scene) => scene.worldId === worldId && canShowScene(scene));
    }

    const order = orderByWorldV25[worldId] || [];
    const visibleIds = new Set();

    // Initial rule: when progress is empty, each main world shows only its first scene.
    addIfExistsV25(visibleIds, firstSceneByWorld[worldId]);

    // Completed scenes always remain visible for repeat.
    order.forEach((sceneId) => {
      if (completedV25(sceneId)) addIfExistsV25(visibleIds, sceneId);
    });

    // Local progression: finishing a scene opens the next scene in the same world.
    order.forEach((sceneId, index) => {
      if (completedV25(sceneId)) {
        const nextSceneId = order[index + 1];
        if (nextSceneId) addIfExistsV25(visibleIds, nextSceneId);
      }
    });

    // After the child has completed any first a/an scene, show extra a/an practice in other worlds.
    if (skillMasteredV25('articles')) {
      (extraArticlePracticeAfterFirst[worldId] || []).forEach((sceneId) => addIfExistsV25(visibleIds, sceneId));
      // Numbers are a small cross-world tool. They appear after the first real progress, but not at game start.
      if (worldId === 'school' && hasAnyCompletedSceneV25()) {
        schoolNumberScenes.forEach((sceneId) => addIfExistsV25(visibleIds, sceneId));
      }
    }

    // Global grammar anchors: completing a grammar topic in any world opens the matching anchor scene in every world.
    ['plural','to_be','is_intro','are_intro'].forEach((skillId) => {
      if (!skillMasteredV25(skillId)) return;
      (stageAnchorsBySkill[skillId]?.[worldId] || []).forEach((sceneId) => addIfExistsV25(visibleIds, sceneId));
    });

    return order
      .filter((sceneId) => visibleIds.has(sceneId))
      .map((sceneId) => sceneByIdV25(sceneId))
      .filter(Boolean);
  };

  // Keep scene cards ordered by story, even when grammar anchors are unlocked globally.
  const previousCanShowSceneV25 = canShowScene;
  canShowScene = function canShowSceneV25(scene) {
    if (!scene || !orderByWorldV25[scene.worldId]) return previousCanShowSceneV25(scene);
    return getVisibleScenesForWorld(scene.worldId).some((visible) => visible.id === scene.id);
  };
})();

// v26: refined cross-world grammar unlocking.
// Start with only the first scene in each world. Local story can continue inside the same world,
// while cross-world unlocks happen only at grammar milestones: plural, I am, is, are.
(function applyV26WorldUnlockPatch(){
  try { window.localStorage?.removeItem?.('english-kids-mvp-static-progress-v25-unlock-fix'); } catch {}

  const orderByWorldV26 = {
    cafe: [
      'cafe-find-snack','cafe-clean-table','cafe-fridge-snacks','cafe-make-fruit-pizza','cafe-prepare-counter','cafe-meet-visitors','cafe-sort-snacks','cafe-look-visitors','cafe-notice-visitors','cafe-serve-tables','cafe-notice-groups','cafe-talk-waiter','cafe-choose-food','cafe-close-day'
    ],
    school: [
      'school-pack-bag','school-breakfast','school-pack-again','school-get-to-school','school-schedule','school-collision','school-desk-supplies','school-meet-classmates','school-class-nonsense','school-team','school-phone-game','school-meet-teams','school-describe-teams','school-final-review'
    ],
    zoo: [
      'zoo-open-enclosures','zoo-escaped-animals','zoo-feed-animals','zoo-animal-pairs','zoo-hungry-animals','zoo-meet-keeper','zoo-look-keeper','zoo-guide-stage-1','zoo-look-animal-groups','zoo-guide-stage-2','zoo-talk-keeper','zoo-guide-final'
    ],
    playground: [
      'playground-look-toys','playground-choose-toy','playground-count-toys','playground-sandbox','playground-colors','playground-describe-kids','playground-about-me','playground-meet-kids','playground-blocks','playground-new-toys','playground-toy-shop','playground-draw-groups','playground-color-easy','playground-color-medium','playground-color-hard','playground-go-home'
    ],
  };

  const firstSceneByWorldV26 = {
    cafe: 'cafe-find-snack',
    school: 'school-pack-bag',
    zoo: 'zoo-open-enclosures',
    playground: 'playground-look-toys',
  };

  const firstScenesV26 = Object.values(firstSceneByWorldV26);
  const numberScenesV26 = ['school-get-to-school','school-schedule'];

  const skillMasteryScenesV26 = {
    articles: firstScenesV26,
    plural: ['school-collision','cafe-make-fruit-pizza','playground-count-toys','zoo-animal-pairs'],
    to_be: ['school-meet-classmates','cafe-meet-visitors','playground-about-me','zoo-meet-keeper'],
    is_intro: ['school-team','cafe-look-visitors','playground-describe-kids','zoo-look-keeper'],
    are_intro: ['school-meet-teams','cafe-serve-tables','playground-draw-groups','zoo-look-animal-groups'],
  };

  const grammarAnchorsV26 = {
    plural: {
      school: ['school-collision'],
      cafe: ['cafe-make-fruit-pizza'],
      playground: ['playground-count-toys'],
      zoo: ['zoo-animal-pairs'],
    },
    to_be: {
      school: ['school-meet-classmates'],
      cafe: ['cafe-meet-visitors'],
      playground: ['playground-about-me'],
      zoo: ['zoo-meet-keeper'],
    },
    is_intro: {
      school: ['school-team'],
      cafe: ['cafe-look-visitors'],
      playground: ['playground-describe-kids'],
      zoo: ['zoo-look-keeper'],
    },
    are_intro: {
      school: ['school-meet-teams'],
      cafe: ['cafe-serve-tables'],
      playground: ['playground-draw-groups'],
      zoo: ['zoo-look-animal-groups'],
    },
  };

  const baseCanShowSceneV26 = canShowScene;

  function sceneByIdV26(sceneId) {
    return scenes.find((scene) => scene.id === sceneId);
  }

  function completedSceneV26(sceneId) {
    return state.progress.completedSceneIds.includes(sceneId);
  }

  function completedAnyV26(sceneIds) {
    return sceneIds.some((sceneId) => completedSceneV26(sceneId));
  }

  function hasCompletedAnyFirstSceneV26() {
    return completedAnyV26(firstScenesV26);
  }

  function masteredSkillV26(skillId) {
    if (skillId === 'articles') return completedAnyV26(skillMasteryScenesV26.articles);
    return completedAnyV26(skillMasteryScenesV26[skillId] || []);
  }

  isGrammarSkillUnlocked = function isGrammarSkillUnlockedV26(skillId) {
    if (skillId === 'articles') return true;
    if (Object.prototype.hasOwnProperty.call(skillMasteryScenesV26, skillId)) return masteredSkillV26(skillId);
    const skill = getSkill(skillId);
    return Boolean(skill && state.progress.xp >= skill.xpThreshold);
  };

  function canRevealSpecialV26(sceneId) {
    // Zoo rest still applies only to the local story path after Feed the animals.
    // If plural has already been learned in another world, the plural Zoo anchor may appear globally.
    if (sceneId === 'zoo-animal-pairs') {
      return (completedSceneV26('zoo-feed-animals') && isZooRestReady()) || masteredSkillV26('plural');
    }
    if (sceneId === 'zoo-hungry-animals') return completedSceneV26('zoo-animal-pairs');
    if (sceneId === 'zoo-guide-stage-1') return completedSceneV26('zoo-look-keeper');
    if (sceneId === 'zoo-look-animal-groups') return completedSceneV26('zoo-guide-stage-1') || masteredSkillV26('are_intro');
    if (sceneId === 'zoo-guide-stage-2') return completedSceneV26('zoo-look-animal-groups');
    if (sceneId === 'zoo-talk-keeper') return completedSceneV26('zoo-guide-stage-2');
    if (sceneId === 'zoo-guide-final') return completedSceneV26('zoo-talk-keeper');
    return true;
  }

  function addVisibleSceneV26(set, sceneId) {
    if (sceneByIdV26(sceneId) && canRevealSpecialV26(sceneId)) set.add(sceneId);
  }

  getVisibleScenesForWorld = function getVisibleScenesForWorldV26(worldId) {
    if (worldId === 'vocabulary') {
      return scenes.filter((scene) => scene.worldId === worldId && baseCanShowSceneV26(scene));
    }

    const order = orderByWorldV26[worldId] || [];
    const visibleIds = new Set();

    // 1) At a clean start every main world shows exactly one first scene.
    addVisibleSceneV26(visibleIds, firstSceneByWorldV26[worldId]);

    // 2) Completed scenes remain visible for replay.
    order.forEach((sceneId) => {
      if (completedSceneV26(sceneId)) addVisibleSceneV26(visibleIds, sceneId);
    });

    // 3) Local story progression: completing a scene opens the next scene only in that same world.
    order.forEach((sceneId, index) => {
      if (!completedSceneV26(sceneId)) return;
      const nextSceneId = order[index + 1];
      if (nextSceneId) addVisibleSceneV26(visibleIds, nextSceneId);
    });

    // 4) Numbers are a School tool. They can appear after any first scene, but do not unlock extra a/an scenes elsewhere.
    if (worldId === 'school' && hasCompletedAnyFirstSceneV26()) {
      numberScenesV26.forEach((sceneId) => addVisibleSceneV26(visibleIds, sceneId));
    }

    // 5) Cross-world grammar anchors unlock only when that grammar topic was completed in any world.
    ['plural','to_be','is_intro','are_intro'].forEach((skillId) => {
      if (!masteredSkillV26(skillId)) return;
      (grammarAnchorsV26[skillId]?.[worldId] || []).forEach((sceneId) => addVisibleSceneV26(visibleIds, sceneId));
    });

    return order
      .filter((sceneId) => visibleIds.has(sceneId))
      .map((sceneId) => sceneByIdV26(sceneId))
      .filter(Boolean);
  };

  canShowScene = function canShowSceneV26(scene) {
    if (!scene || !orderByWorldV26[scene.worldId]) return baseCanShowSceneV26(scene);
    return getVisibleScenesForWorld(scene.worldId).some((visibleScene) => visibleScene.id === scene.id);
  };
})();


// v27: Park world unlocking + Lex park grammar flow.
(function applyV27ParkAppPatch(){
  try {
    ['english-kids-mvp-static-progress-v26-world-unlock-flow','english-kids-mvp-static-progress-v25-unlock-fix','english-kids-mvp-static-progress-v22-playground-fix'].forEach((key) => window.localStorage?.removeItem?.(key));
  } catch {}

  const previousGetLexQuizForGrammarCard = getLexQuizForGrammarCard;
  getLexQuizForGrammarCard = function getLexQuizForGrammarCardV27(cardId) {
    if (cardId === 'card-park-articles') {
      return {
        question: 'Так, парк большой. Мы говорим an dog?',
        correct: 'no',
        right: 'Да, точно! Dog начинается не с a/e/i/o/u, значит a dog.',
        wrong: 'Почти. Dog начинается не с a/e/i/o/u, поэтому говорим a dog.',
      };
    }
    if (cardId === 'card-park-plural') {
      return {
        question: 'Если цветочков много, добавляем s?',
        correct: 'yes',
        right: 'Верно! Много предметов — добавляем s: flowers, dogs, trees.',
        wrong: 'Почти. Когда предметов много, обычно добавляем s.',
      };
    }
    if (cardId === 'card-park-weather') {
      return {
        question: 'Если солнечно, можно сказать It is sunny?',
        correct: 'yes',
        right: 'Да! It is sunny. Теперь узнаем погоду в парке.',
        wrong: 'Почти. Про погоду говорим It is: It is sunny.',
      };
    }
    return previousGetLexQuizForGrammarCard(cardId);
  };

  const previousGetGrammarFollowUp = getGrammarFollowUp;
  getGrammarFollowUp = function getGrammarFollowUpV27(cardId, scene) {
    if (cardId === 'card-park-articles') {
      return { message: 'Давай заглянем в Vocabulary Garden и посмотрим слова парка поближе.', vocab: true };
    }
    if (cardId === 'card-park-weather') {
      return { message: 'Погода новая и важная. Можно сначала посмотреть weather-слова в Vocabulary Garden.', vocab: true };
    }
    return previousGetGrammarFollowUp(cardId, scene);
  };

  const previousCompleteSceneV27 = completeScene;
  completeScene = function completeSceneV27(scene) {
    previousCompleteSceneV27(scene);
    if (scene?.id === 'park-weather') {
      setLexChoices([
        { id:'weather-sunny', label:'sunny', response:'Ой, ну мы так похожи!' },
        { id:'weather-rainy', label:'rainy', response:'Не люблю мокнуть, только если с зонтиком!' },
        { id:'weather-hot', label:'hot', response:'Ну в такую погоду только на пляж загорать!' },
        { id:'weather-cold', label:'cold', response:'Ух ты! Ну кстати да, там же Новый год.' },
      ]);
      render();
    }
  };

  const orderByWorldV27 = {
    cafe: ['cafe-find-snack','cafe-clean-table','cafe-fridge-snacks','cafe-make-fruit-pizza','cafe-prepare-counter','cafe-meet-visitors','cafe-sort-snacks','cafe-look-visitors','cafe-notice-visitors','cafe-serve-tables','cafe-notice-groups','cafe-talk-waiter','cafe-choose-food','cafe-close-day'],
    school: ['school-pack-bag','school-breakfast','school-pack-again','school-get-to-school','school-schedule','school-collision','school-desk-supplies','school-meet-classmates','school-class-nonsense','school-team','school-phone-game','school-meet-teams','school-describe-teams','school-final-review'],
    zoo: ['zoo-open-enclosures','zoo-escaped-animals','zoo-feed-animals','zoo-animal-pairs','zoo-hungry-animals','zoo-meet-keeper','zoo-look-keeper','zoo-guide-stage-1','zoo-look-animal-groups','zoo-guide-stage-2','zoo-talk-keeper','zoo-guide-final'],
    playground: ['playground-look-toys','playground-choose-toy','playground-count-toys','playground-sandbox','playground-colors','playground-describe-kids','playground-about-me','playground-meet-kids','playground-blocks','playground-new-toys','playground-toy-shop','playground-draw-groups','playground-color-easy','playground-color-medium','playground-color-hard','playground-go-home'],
    park: ['park-walk','park-hide-seek','park-many-things','park-meet-ben','park-help-ben','park-describe-helpers','park-weather','park-lex-weather','park-team','park-describe-teams','park-final'],
  };

  const firstSceneByWorldV27 = {
    cafe: 'cafe-find-snack',
    school: 'school-pack-bag',
    zoo: 'zoo-open-enclosures',
    playground: 'playground-look-toys',
    park: 'park-walk',
  };

  const firstScenesV27 = Object.values(firstSceneByWorldV27);
  const numberScenesV27 = ['school-get-to-school','school-schedule'];

  const skillMasteryScenesV27 = {
    articles: firstScenesV27,
    plural: ['school-collision','cafe-make-fruit-pizza','playground-count-toys','zoo-animal-pairs','park-many-things'],
    to_be: ['school-meet-classmates','cafe-meet-visitors','playground-about-me','zoo-meet-keeper','park-meet-ben'],
    is_intro: ['school-team','cafe-look-visitors','playground-describe-kids','zoo-look-keeper','park-help-ben','park-describe-helpers','park-weather','park-lex-weather'],
    are_intro: ['school-meet-teams','cafe-serve-tables','playground-draw-groups','zoo-look-animal-groups','park-team'],
  };

  const grammarAnchorsV27 = {
    plural: {
      school: ['school-collision'],
      cafe: ['cafe-make-fruit-pizza'],
      playground: ['playground-count-toys'],
      zoo: ['zoo-animal-pairs'],
      park: ['park-many-things'],
    },
    to_be: {
      school: ['school-meet-classmates'],
      cafe: ['cafe-meet-visitors'],
      playground: ['playground-about-me'],
      zoo: ['zoo-meet-keeper'],
      park: ['park-meet-ben'],
    },
    is_intro: {
      school: ['school-team'],
      cafe: ['cafe-look-visitors'],
      playground: ['playground-describe-kids'],
      zoo: ['zoo-look-keeper'],
      park: ['park-help-ben'],
    },
    are_intro: {
      school: ['school-meet-teams'],
      cafe: ['cafe-serve-tables'],
      playground: ['playground-draw-groups'],
      zoo: ['zoo-look-animal-groups'],
      park: ['park-team'],
    },
  };

  const baseCanShowSceneV27 = canShowScene;

  function sceneByIdV27(sceneId) { return scenes.find((scene) => scene.id === sceneId); }
  function completedSceneV27(sceneId) { return state.progress.completedSceneIds.includes(sceneId); }
  function completedAnyV27(sceneIds) { return sceneIds.some((sceneId) => completedSceneV27(sceneId)); }
  function hasCompletedAnyFirstSceneV27() { return completedAnyV27(firstScenesV27); }
  function masteredSkillV27(skillId) {
    if (skillId === 'articles') return completedAnyV27(skillMasteryScenesV27.articles);
    return completedAnyV27(skillMasteryScenesV27[skillId] || []);
  }

  isGrammarSkillUnlocked = function isGrammarSkillUnlockedV27(skillId) {
    if (skillId === 'articles') return true;
    if (Object.prototype.hasOwnProperty.call(skillMasteryScenesV27, skillId)) return masteredSkillV27(skillId);
    const skill = getSkill(skillId);
    return Boolean(skill && state.progress.xp >= skill.xpThreshold);
  };

  function canRevealSpecialV27(sceneId) {
    if (sceneId === 'zoo-animal-pairs') {
      return (completedSceneV27('zoo-feed-animals') && isZooRestReady()) || masteredSkillV27('plural');
    }
    if (sceneId === 'zoo-hungry-animals') return completedSceneV27('zoo-animal-pairs');
    if (sceneId === 'zoo-guide-stage-1') return completedSceneV27('zoo-look-keeper');
    if (sceneId === 'zoo-look-animal-groups') return completedSceneV27('zoo-guide-stage-1') || masteredSkillV27('are_intro');
    if (sceneId === 'zoo-guide-stage-2') return completedSceneV27('zoo-look-animal-groups');
    if (sceneId === 'zoo-talk-keeper') return completedSceneV27('zoo-guide-stage-2');
    if (sceneId === 'zoo-guide-final') return completedSceneV27('zoo-talk-keeper');
    return true;
  }

  function addVisibleSceneV27(set, sceneId) {
    if (sceneByIdV27(sceneId) && canRevealSpecialV27(sceneId)) set.add(sceneId);
  }

  getVisibleScenesForWorld = function getVisibleScenesForWorldV27(worldId) {
    if (worldId === 'vocabulary') {
      return scenes.filter((scene) => scene.worldId === worldId && baseCanShowSceneV27(scene));
    }

    const order = orderByWorldV27[worldId] || [];
    const visibleIds = new Set();

    addVisibleSceneV27(visibleIds, firstSceneByWorldV27[worldId]);

    order.forEach((sceneId) => {
      if (completedSceneV27(sceneId)) addVisibleSceneV27(visibleIds, sceneId);
    });

    order.forEach((sceneId, index) => {
      if (!completedSceneV27(sceneId)) return;
      const nextSceneId = order[index + 1];
      if (nextSceneId) addVisibleSceneV27(visibleIds, nextSceneId);
    });

    if (worldId === 'school' && hasCompletedAnyFirstSceneV27()) {
      numberScenesV27.forEach((sceneId) => addVisibleSceneV27(visibleIds, sceneId));
    }

    ['plural','to_be','is_intro','are_intro'].forEach((skillId) => {
      if (!masteredSkillV27(skillId)) return;
      (grammarAnchorsV27[skillId]?.[worldId] || []).forEach((sceneId) => addVisibleSceneV27(visibleIds, sceneId));
    });

    return order
      .filter((sceneId) => visibleIds.has(sceneId))
      .map((sceneId) => sceneByIdV27(sceneId))
      .filter(Boolean);
  };

  canShowScene = function canShowSceneV27(scene) {
    if (!scene || !orderByWorldV27[scene.worldId]) return baseCanShowSceneV27(scene);
    return getVisibleScenesForWorld(scene.worldId).some((visibleScene) => visibleScene.id === scene.id);
  };
})();

// v27b: after Park weather grammar card, show weather vocab card before starting practice.
(function applyV27BParkWeatherVocabBefore(){
  const previousCloseGrammarCardV27 = closeGrammarCard;
  closeGrammarCard = function closeGrammarCardV27B() {
    const seenId = state.modalGrammarCardId || state.modalSkillId;
    const scene = state.pendingScene;
    if (scene?.id === 'park-weather' && seenId === 'card-park-weather') {
      ['card-park-weather','is_intro'].forEach((id) => {
        if (!state.progress.seenGrammarCardSkillIds.includes(id)) state.progress.seenGrammarCardSkillIds.push(id);
      });
      ensureLexArrays();
      if (!state.progress.seenSceneGrammarFlowIds.includes(scene.id)) state.progress.seenSceneGrammarFlowIds.push(scene.id);
      state.modalSkillId = null;
      state.modalGrammarCardId = null;
      state.modalVocabCardId = 'vocab-park-weather-card';
      state.pendingScene = scene;
      saveProgress();
      render();
      return;
    }
    previousCloseGrammarCardV27();
  };
})();


// v28: final day 1 flow, bidirectional match, day-required highlighting, and stricter zoo rest.
(function applyV28DayOneFinalFixes(){
  if (typeof state.selectedMatchPictureId === 'undefined') state.selectedMatchPictureId = null;
  if (!Array.isArray(state.progress.completedDayWorldIds)) state.progress.completedDayWorldIds = [];

  const dayOneRequiredByWorldV28 = {
    school: ['school-pack-bag','school-get-to-school','school-schedule','school-collision','school-meet-classmates','school-team','school-final-review'],
    cafe: ['cafe-find-snack','cafe-make-fruit-pizza','cafe-meet-visitors','cafe-look-visitors','cafe-serve-tables'],
    park: ['park-walk','park-many-things','park-meet-ben','park-help-ben','park-team'],
    playground: ['playground-look-toys','playground-count-toys','playground-colors','playground-describe-kids','playground-about-me','playground-draw-groups','playground-go-home'],
    zoo: ['zoo-open-enclosures','zoo-animal-pairs','zoo-meet-keeper','zoo-look-keeper','zoo-look-animal-groups'],
  };
  const worldRuV28 = {school:'School', cafe:'Café', park:'Park', playground:'Playground', zoo:'Zoo'};
  const firstSceneByWorldV28 = {
    cafe: 'cafe-find-snack', school: 'school-pack-bag', zoo: 'zoo-open-enclosures', playground: 'playground-look-toys', park: 'park-walk',
  };
  const orderByWorldV28 = {
    cafe: ['cafe-find-snack','cafe-clean-table','cafe-fridge-snacks','cafe-make-fruit-pizza','cafe-prepare-counter','cafe-meet-visitors','cafe-sort-snacks','cafe-look-visitors','cafe-notice-visitors','cafe-serve-tables','cafe-notice-groups','cafe-talk-waiter','cafe-choose-food','cafe-close-day'],
    school: ['school-pack-bag','school-breakfast','school-pack-again','school-get-to-school','school-schedule','school-collision','school-desk-supplies','school-meet-classmates','school-class-nonsense','school-team','school-phone-game','school-meet-teams','school-describe-teams','school-final-review'],
    zoo: ['zoo-open-enclosures','zoo-escaped-animals','zoo-feed-animals','zoo-animal-pairs','zoo-hungry-animals','zoo-meet-keeper','zoo-look-keeper','zoo-talk-keeper','zoo-guide-stage-1','zoo-look-animal-groups','zoo-guide-stage-2','zoo-guide-final'],
    playground: ['playground-look-toys','playground-choose-toy','playground-count-toys','playground-sandbox','playground-colors','playground-describe-kids','playground-about-me','playground-meet-kids','playground-blocks','playground-new-toys','playground-toy-shop','playground-draw-groups','playground-color-easy','playground-color-medium','playground-color-hard','playground-go-home'],
    park: ['park-walk','park-hide-seek','park-many-things','park-meet-ben','park-help-ben','park-describe-helpers','park-weather','park-lex-weather','park-team','park-describe-teams','park-final'],
  };
  const firstScenesV28 = Object.values(firstSceneByWorldV28);
  const numberScenesV28 = ['school-get-to-school','school-schedule'];
  const skillMasteryScenesV28 = {
    articles: firstScenesV28,
    plural: ['school-collision','cafe-make-fruit-pizza','playground-count-toys','zoo-animal-pairs','park-many-things'],
    to_be: ['school-meet-classmates','cafe-meet-visitors','playground-about-me','zoo-meet-keeper','park-meet-ben'],
    is_intro: ['school-team','cafe-look-visitors','playground-describe-kids','zoo-look-keeper','park-help-ben','park-describe-helpers','park-weather','park-lex-weather'],
    are_intro: ['school-meet-teams','cafe-serve-tables','playground-draw-groups','zoo-look-animal-groups','park-team'],
  };
  const grammarAnchorsV28 = {
    plural: {school:['school-collision'], cafe:['cafe-make-fruit-pizza'], playground:['playground-count-toys'], zoo:['zoo-animal-pairs'], park:['park-many-things']},
    to_be: {school:['school-meet-classmates'], cafe:['cafe-meet-visitors'], playground:['playground-about-me'], zoo:['zoo-meet-keeper'], park:['park-meet-ben']},
    is_intro: {school:['school-team'], cafe:['cafe-look-visitors'], playground:['playground-describe-kids'], zoo:['zoo-look-keeper'], park:['park-help-ben']},
    are_intro: {school:['school-meet-teams'], cafe:['cafe-serve-tables'], playground:['playground-draw-groups'], zoo:['zoo-look-animal-groups'], park:['park-team']},
  };
  function sceneByIdV28(sceneId){ return scenes.find((scene)=>scene.id===sceneId); }
  function completedSceneV28(sceneId){ return state.progress.completedSceneIds.includes(sceneId); }
  function completedAnyV28(sceneIds){ return sceneIds.some(completedSceneV28); }
  function masteredSkillV28(skillId){
    if (skillId === 'articles') return completedAnyV28(skillMasteryScenesV28.articles);
    return completedAnyV28(skillMasteryScenesV28[skillId] || []);
  }
  isGrammarSkillUnlocked = function isGrammarSkillUnlockedV28(skillId){
    if (skillId === 'articles') return true;
    if (Object.prototype.hasOwnProperty.call(skillMasteryScenesV28, skillId)) return masteredSkillV28(skillId);
    const skill = getSkill(skillId);
    return Boolean(skill && state.progress.xp >= skill.xpThreshold);
  };
  isZooRestReady = function isZooRestReadyV28(){
    if (!state.progress.zooRestStarted) return true;
    const startCount = Number(state.progress.zooRestStartNonZooTaskCount || 0);
    return countCompletedNonZooTasks() >= startCount + 3;
  };
  maybeShowZooWakeToast = function maybeShowZooWakeToastV28(){
    if (!state.progress.zooRestStarted || state.progress.zooWakeToastShown || !isZooRestReady()) return;
    state.progress.zooWakeToastShown = true;
    state.toastMessage = 'Животные выспались и наконец проснулись. Приходи помогать смотрителю.';
    saveProgress();
  };
  function canRevealSpecialV28(sceneId){
    if (sceneId === 'zoo-animal-pairs') return (completedSceneV28('zoo-feed-animals') && isZooRestReady()) || masteredSkillV28('plural');
    if (sceneId === 'zoo-hungry-animals') return completedSceneV28('zoo-animal-pairs');
    if (sceneId === 'zoo-talk-keeper') return completedSceneV28('zoo-look-keeper');
    if (sceneId === 'zoo-guide-stage-1') return completedSceneV28('zoo-look-keeper') && (state.progress.lexSeenEventIds.includes('zoo-guide-registered') || completedSceneV28('zoo-talk-keeper'));
    if (sceneId === 'zoo-look-animal-groups') return completedSceneV28('zoo-guide-stage-1') || masteredSkillV28('are_intro');
    if (sceneId === 'zoo-guide-stage-2') return completedSceneV28('zoo-look-animal-groups');
    if (sceneId === 'zoo-guide-final') return completedSceneV28('zoo-talk-keeper') && completedSceneV28('zoo-guide-stage-2');
    return true;
  }
  function addVisibleV28(set, sceneId){ if (sceneByIdV28(sceneId) && canRevealSpecialV28(sceneId)) set.add(sceneId); }
  getVisibleScenesForWorld = function getVisibleScenesForWorldV28(worldId){
    if (worldId === 'vocabulary') return scenes.filter((scene)=>scene.worldId===worldId && canShowScene(scene));
    const order = orderByWorldV28[worldId] || [];
    const visibleIds = new Set();
    addVisibleV28(visibleIds, firstSceneByWorldV28[worldId]);
    order.forEach((sceneId)=>{ if (completedSceneV28(sceneId)) addVisibleV28(visibleIds, sceneId); });
    order.forEach((sceneId, index)=>{
      if (!completedSceneV28(sceneId)) return;
      const nextSceneId = order[index+1];
      if (nextSceneId) addVisibleV28(visibleIds, nextSceneId);
    });
    if (completedAnyV28(firstScenesV28)) numberScenesV28.forEach((sceneId)=>addVisibleV28(visibleIds, sceneId));
    ['plural','to_be','is_intro','are_intro'].forEach((skillId)=>{
      if (!masteredSkillV28(skillId)) return;
      (grammarAnchorsV28[skillId]?.[worldId] || []).forEach((sceneId)=>addVisibleV28(visibleIds, sceneId));
    });
    // After Look at the keeper, both dialogue practice and guide registration can appear in their correct place.
    if (worldId === 'zoo' && completedSceneV28('zoo-look-keeper')) {
      addVisibleV28(visibleIds, 'zoo-talk-keeper');
      if (state.progress.lexSeenEventIds.includes('zoo-guide-registered')) addVisibleV28(visibleIds, 'zoo-guide-stage-1');
    }
    return order.filter((sceneId)=>visibleIds.has(sceneId)).map(sceneByIdV28).filter(Boolean);
  };
  canShowScene = function canShowSceneV28(scene){
    if (!scene || !orderByWorldV28[scene.worldId]) return true;
    return getVisibleScenesForWorld(scene.worldId).some((visible)=>visible.id===scene.id);
  };

  function hashStringV28(value){
    let h=2166136261;
    for (let i=0;i<String(value).length;i++){ h ^= String(value).charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function shuffledV28(items, salt){
    return [...(items || [])].sort((a,b)=>hashStringV28(`${salt}:${a.id || a.word || a.label}`)-hashStringV28(`${salt}:${b.id || b.word || b.label}`));
  }
  const previousRenderTaskBodyV28 = renderTaskBody;
  renderTaskBody = function renderTaskBodyV28(task){
    if (task?.type === 'match_word_image') {
      const wordPairs = shuffledV28(task.pairs, `${task.id}:words`);
      const picturePairs = shuffledV28(task.pairs, `${task.id}:pictures`);
      return `
        <div class="match-columns interactive-match">
          <div class="match-col">
            <h4>Words</h4>
            ${wordPairs.map((pair)=>{
              const matched = state.matchedPairIds.includes(pair.id);
              const selected = state.selectedMatchWordId === pair.id;
              return `<button class="match-chip ${selected ? 'selected' : ''} ${matched ? 'matched' : ''}" data-match-word="${escapeHtml(pair.id)}" ${matched ? 'disabled' : ''}>${escapeHtml(displayText(pair.word))}${pair.speak ? `<span class="mini-listen" data-speak="${escapeHtml(pair.speak)}">🔊</span>` : ''}</button>`;
            }).join('')}
          </div>
          <div class="match-col">
            <h4>Pictures</h4>
            ${picturePairs.map((pair)=>{
              const matched = state.matchedPairIds.includes(pair.id);
              const selected = state.selectedMatchPictureId === pair.id;
              return `<button class="match-chip picture-chip ${selected ? 'selected' : ''} ${matched ? 'matched' : ''}" data-match-picture="${escapeHtml(pair.id)}" ${matched ? 'disabled' : ''}>${escapeHtml(pair.image)}${pair.pictureSpeak ? `<span class="mini-listen" data-speak="${escapeHtml(pair.pictureSpeak)}">🔊</span>` : ''}</button>`;
            }).join('')}
          </div>
        </div>
        <p class="match-help">Можно начать со слова или с картинки: выбери пару.</p>`;
    }
    if (['choose_correct_image','simple_dialogue','listen_and_choose'].includes(task?.type)) {
      return `<div class="choice-grid">${shuffledV28(task.choices, task.id).map((choice)=>renderChoiceButton(choice)).join('')}</div>`;
    }
    return previousRenderTaskBodyV28(task);
  };
  function checkMatchPairV28(wordId, pictureId){
    const task = getCurrentTask();
    if (!task || task.type !== 'match_word_image') return;
    if (wordId === pictureId) {
      if (!state.matchedPairIds.includes(wordId)) state.matchedPairIds.push(wordId);
      state.selectedMatchWordId = null;
      state.selectedMatchPictureId = null;
      if (state.matchedPairIds.length >= task.pairs.length) { answerTask(true, '+10 XP! Все пары собраны.'); return; }
      state.feedback = 'Правильно! Найди следующую пару.';
      render();
      return;
    }
    state.sceneMistakes += 1;
    state.selectedMatchWordId = null;
    state.selectedMatchPictureId = null;
    state.feedback = 'Почти! Это другая пара.';
    render();
  }
  checkMatchPicture = function checkMatchPictureV28(pictureId){
    if (!state.selectedMatchWordId) { state.selectedMatchPictureId = pictureId; state.feedback = 'Теперь выбери слово.'; render(); return; }
    checkMatchPairV28(state.selectedMatchWordId, pictureId);
  };
  const previousBindEventsV28 = bindEvents;
  bindEvents = function bindEventsV28(){
    previousBindEventsV28();
    document.querySelectorAll('[data-match-word]').forEach((button)=>{
      button.addEventListener('pointerdown', (event)=>{
        if (!state.selectedMatchPictureId) return;
        event.preventDefault(); event.stopPropagation();
        checkMatchPairV28(button.dataset.matchWord, state.selectedMatchPictureId);
      }, {capture:true});
    });
    document.querySelectorAll('[data-match-picture]').forEach((button)=>{
      button.addEventListener('pointerdown', (event)=>{
        if (state.selectedMatchWordId) return;
        event.preventDefault(); event.stopPropagation();
        state.selectedMatchPictureId = button.dataset.matchPicture;
        state.feedback = 'Теперь выбери слово.';
        render();
      }, {capture:true});
    });
  };
  const previousStartSceneV28 = startScene;
  startScene = function startSceneV28(scene){ state.selectedMatchPictureId = null; previousStartSceneV28(scene); };
  const previousAnswerTaskV28 = answerTask;
  answerTask = function answerTaskV28(isCorrect, successText){ if (isCorrect) state.selectedMatchPictureId = null; previousAnswerTaskV28(isCorrect, successText); };

  const previousRenderSceneCardV28 = renderSceneCard;
  renderSceneCard = function renderSceneCardV28(scene){
    const completed = state.progress.completedSceneIds.includes(scene.id);
    const isRequired = (dayOneRequiredByWorldV28[scene.worldId] || []).includes(scene.id);
    return `
      <article class="scene-card ${completed ? 'completed' : ''} ${isRequired ? 'day-one-required' : ''}">
        <div class="scene-emoji">${escapeHtml(scene.emoji)}</div>
        <div>
          <h3>${escapeHtml(scene.title)}</h3>
          ${scene.titleRu ? `<p class="ru-title">${escapeHtml(scene.titleRu)}</p>` : ''}
          <p>${escapeHtml(scene.descriptionRu || scene.description)}</p>
          <div class="tag-row">
            ${isRequired ? `<span class="day-tag">день 1</span>` : ''}
            ${scene.requiredGrammarSkillIds.map((id)=>`<span>${escapeHtml(getSkill(id)?.shortTitle || id)}</span>`).join('')}
            ${completed ? `<span>готово</span>` : ''}
          </div>
        </div>
        <button class="primary-button" data-scene-id="${escapeHtml(scene.id)}">${completed ? 'Повторить' : 'Начать'}</button>
      </article>`;
  };
  function isWorldDayOneCompleteV28(worldId){
    const required = dayOneRequiredByWorldV28[worldId] || [];
    return required.length > 0 && required.every((sceneId)=>state.progress.completedSceneIds.includes(sceneId));
  }
  const previousCompleteSceneV28 = completeScene;
  completeScene = function completeSceneV28(scene){
    previousCompleteSceneV28(scene);
    const worldId = scene?.worldId;
    if (!worldId || !dayOneRequiredByWorldV28[worldId]) return;
    if (!Array.isArray(state.progress.completedDayWorldIds)) state.progress.completedDayWorldIds = [];
    if (isWorldDayOneCompleteV28(worldId) && !state.progress.completedDayWorldIds.includes(worldId)) {
      state.progress.completedDayWorldIds.push(worldId);
      state.toastMessage = `Поздравляю! Ты прожил целый день в ${worldRuV28[worldId] || worldId}, чтобы начать новый день нужно пройти первые дни во всех мирах. Удачи!`;
      saveProgress();
      render();
    }
  };
})();

// v29 redesign: map UI, side profile, Lex sidebar, scene hotspots instead of card lists.
(function applyV29MapInterface(){
  const WORLD_COPY_V29 = {
    school: { title: 'School', ru: 'Мы в мире School', text: 'Жду не дождусь, что же будет в этом мире.', icon: '🏫', cls: 'world-school' },
    cafe: { title: 'Café', ru: 'Мы в мире Café', text: 'Интересно, что нам покажет первый день.', icon: '☕', cls: 'world-cafe' },
    playground: { title: 'Playground', ru: 'Мы на Playground', text: 'Пойдём поиграем и познакомимся с этим миром и его обитателями.', icon: '🛝', cls: 'world-playground' },
    park: { title: 'Park', ru: 'Мы в мире Park', text: 'Природа, прогулки и погода ждут нас.', icon: '🌳', cls: 'world-park' },
    zoo: { title: 'Zoo', ru: 'Это же Zoo!', text: 'Я уже слышу, как рычит лев. Пойдём скорее к нему.', icon: '🦁', cls: 'world-zoo' },
    vocabulary: { title: 'Vocabulary Garden', ru: 'Vocabulary Garden', text: 'Сад слов: здесь появляются слова из разных миров.', icon: '🌷', cls: 'world-vocabulary' },
  };

  const REQUIRED_DAY_ONE_V29 = {
    school: ['school-pack-bag','school-get-to-school','school-schedule','school-collision','school-meet-classmates','school-team','school-final-review'],
    cafe: ['cafe-find-snack','cafe-make-fruit-pizza','cafe-meet-visitors','cafe-look-visitors','cafe-serve-tables'],
    park: ['park-walk','park-many-things','park-meet-ben','park-help-ben','park-team'],
    playground: ['playground-look-toys','playground-count-toys','playground-colors','playground-describe-kids','playground-about-me','playground-draw-groups','playground-go-home'],
    zoo: ['zoo-open-enclosures','zoo-animal-pairs','zoo-meet-keeper','zoo-look-keeper','zoo-look-animal-groups'],
  };

  const SCENE_POSITIONS_V29 = [
    [10, 18], [42, 10], [72, 18], [22, 42], [57, 42], [84, 48],
    [8, 68], [38, 68], [68, 70], [22, 90], [52, 92], [78, 94],
    [12, 116], [42, 118], [72, 118], [28, 140], [60, 142]
  ];

  function achievementByIdV29(id){ return achievements.find((item)=>item.id===id); }

  function renderKidPanelV29(){
    const earned = (state.progress.achievementIds || []).map(achievementByIdV29).filter(Boolean);
    const fallbackItems = [
      { title: 'Backpack', emoji: '🎒' },
      { title: 'Notebook', emoji: '📘' },
      { title: 'Star', emoji: '⭐' },
      { title: 'Brush', emoji: '🖌️' },
    ];
    const items = earned.length ? earned.map((item)=>({ title: item.titleRu || item.title, image: item.image, emoji: '🏆' })) : fallbackItems;
    return `
      <aside class="kid-panel app-side-panel">
        <button class="avatar-display avatar-button" data-action="open-achievements">
          <span class="side-label">Kid avatar</span>
          <span class="kid-avatar-face">${escapeHtml(state.progress.avatar?.image || '🧒')}</span>
          <strong>${escapeHtml(state.progress.avatar?.name || 'Kid')}</strong>
        </button>
        <div class="items-preview">
          <p>Items</p>
          <div class="items-mini-grid">
            ${items.slice(0, 6).map((item)=>`
              <span class="item-mini" title="${escapeHtml(item.title)}">
                ${item.image ? `<img src="${escapeHtml(asset(item.image))}" alt="${escapeHtml(item.title)}" />` : `<span>${escapeHtml(item.emoji)}</span>`}
              </span>
            `).join('')}
          </div>
        </div>
      </aside>
    `;
  }

  function renderLexSidebarV29(){
    return `
      <aside class="lex-side app-side-panel">
        <button class="lex-avatar-card" data-action="open-buddy">
          <span class="side-label">Lex avatar</span>
          <span class="lex-avatar-big">🦊</span>
          <strong>Buddy</strong>
          <small>Lex items</small>
        </button>
        ${renderLexDialog()}
      </aside>
    `;
  }

  function renderWorldMapButtonV29(world){
    const meta = WORLD_COPY_V29[world.id] || { title: world.title, icon: world.emoji, cls: `world-${world.id}` };
    return `
      <button class="world-region ${escapeHtml(meta.cls)}" data-world-id="${escapeHtml(world.id)}" aria-label="${escapeHtml(world.title)}">
        <span class="world-region-icon">${escapeHtml(meta.icon || world.emoji)}</span>
        <strong>${escapeHtml(meta.title || world.title)}</strong>
      </button>
    `;
  }

  function renderMapHomeV29(){
    const allWorlds = ['school','cafe','playground','park','zoo','vocabulary']
      .map((id)=>worlds.find((world)=>world.id===id))
      .filter(Boolean);
    return `
      <section class="map-home-panel">
        <div class="map-home-head">
          <div>
            <p class="small-label">World map</p>
            <h2>Карта миров</h2>
            <p>Выбирай любой мир и проходи первый день приключения.</p>
          </div>
          <span class="all-open-badge">✨ Все миры открыты</span>
        </div>
        <div class="world-blob-map" aria-label="Карта миров">
          ${allWorlds.map(renderWorldMapButtonV29).join('')}
          <span class="map-cloud cloud-one">☁️</span>
          <span class="map-cloud cloud-two">☁️</span>
          <span class="map-cloud cloud-three">☁️</span>
        </div>
      </section>
    `;
  }

  function renderSceneNodeV29(scene, index){
    const completed = state.progress.completedSceneIds.includes(scene.id);
    const required = (REQUIRED_DAY_ONE_V29[scene.worldId] || []).includes(scene.id);
    const pos = SCENE_POSITIONS_V29[index % SCENE_POSITIONS_V29.length];
    const rowOffset = Math.floor(index / SCENE_POSITIONS_V29.length) * 28;
    return `
      <button class="scene-hotspot ${completed ? 'completed' : ''} ${required ? 'day-one-node' : ''}" data-scene-id="${escapeHtml(scene.id)}" style="left:${pos[0]}%; top:${pos[1] + rowOffset}%;">
        <span class="scene-hotspot-icon">${escapeHtml(scene.emoji || '⭐')}</span>
        <span class="scene-hotspot-card">
          <strong>${escapeHtml(scene.title)}</strong>
          ${scene.titleRu ? `<em>${escapeHtml(scene.titleRu)}</em>` : ''}
          <small>${escapeHtml(scene.descriptionRu || scene.description || '')}</small>
          <span class="node-tags">
            ${required ? '<b>день 1</b>' : ''}
            ${completed ? '<b class="done">готово</b>' : ''}
          </span>
        </span>
      </button>
    `;
  }

  function renderSelectedWorldV29(world){
    if (!world) return renderMapHomeV29();
    const meta = WORLD_COPY_V29[world.id] || { title: world.title, ru: `Мы в мире ${world.title}`, text: world.description, icon: world.emoji, cls: `world-${world.id}` };
    const visibleScenes = getVisibleScenesForWorld(world.id);
    const boardHeight = Math.max(540, 430 + Math.ceil(visibleScenes.length / 6) * 140);
    return `
      <section class="world-adventure-panel ${escapeHtml(meta.cls)}-panel">
        <div class="world-adventure-head">
          <button class="back-to-map-button" data-action="back-to-map">← Назад к карте</button>
          <div>
            <p class="small-label">${escapeHtml(world.title)}</p>
            <h2>${escapeHtml(meta.icon || world.emoji)} ${escapeHtml(meta.ru || world.title)}</h2>
            <p>${escapeHtml(meta.text || world.description || '')}</p>
          </div>
          <span class="scene-count-pill">${visibleScenes.length} сцен доступно</span>
        </div>
        ${world.id === 'vocabulary' ? renderVocabularyWorldIntro() : ''}
        <div class="world-scene-map ${escapeHtml(meta.cls)}-scene-map" style="min-height:${boardHeight}px;">
          <div class="dotted-path path-one"></div>
          <div class="dotted-path path-two"></div>
          <div class="dotted-path path-three"></div>
          ${visibleScenes.length ? visibleScenes.map(renderSceneNodeV29).join('') : `<article class="empty-card map-empty-card">Скоро здесь появятся задания.</article>`}
        </div>
        <p class="scene-map-note">Сцены — не списком, а как точки действия на поле мира.</p>
      </section>
    `;
  }

  function renderCenterContentV29(){
    if (state.sceneCompletedView) return renderSceneCompleted();
    if (state.selectedScene) return renderSceneScreen();
    if (!state.selectedWorldId || state.selectedWorldId === 'map') return renderMapHomeV29();
    const visibleWorlds = worlds.filter(canShowWorld);
    const selectedWorld = visibleWorlds.find((world)=>world.id===state.selectedWorldId) || worlds.find((world)=>world.id===state.selectedWorldId);
    return renderSelectedWorldV29(selectedWorld);
  }

  function renderV29(){
    ensureLexIntro();
    maybeShowZooWakeToast();
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="adventure-shell">
        ${renderKidPanelV29()}
        <main class="adventure-main">
          ${state.toastMessage ? renderToast() : ''}
          ${renderCenterContentV29()}
        </main>
        ${renderLexSidebarV29()}
        ${(state.modalSkillId || state.modalGrammarCardId) ? renderGrammarModal() : ''}
        ${state.modalVocabCardId ? renderVocabModal() : ''}
        ${state.modalAchievementId ? renderAchievementModal(state.modalAchievementId) : ''}
        ${state.showAchievementsModal ? renderAchievementsModal() : ''}
        ${state.showBuddyModal ? renderBuddyModal() : ''}
        ${state.showAudioCheck ? renderAudioCheckModal() : ''}
        <button class="ghost-button reset-floating" data-action="reset">Сбросить прогресс</button>
      </div>
    `;
    bindEvents();
    const lexScroll = document.getElementById('lexDialogScroll');
    if (lexScroll) lexScroll.scrollTop = lexScroll.scrollHeight;
  }

  render = renderV29;

  const previousBindEventsV29 = bindEvents;
  bindEvents = function bindEventsV29(){
    previousBindEventsV29();
    document.querySelectorAll('[data-action="back-to-map"]').forEach((button)=>{
      button.addEventListener('click', ()=>{
        state.selectedWorldId = 'map';
        state.selectedScene = null;
        state.sceneCompletedView = null;
        render();
      });
    });
  };

  const previousResetProgressV29 = resetProgress;
  resetProgress = function resetProgressV29(){
    previousResetProgressV29();
    state.selectedWorldId = 'map';
    render();
  };

  const previousGoBackToWorldV29 = goBackToWorld;
  goBackToWorld = function goBackToWorldV29(){
    previousGoBackToWorldV29();
    if (!state.selectedWorldId && state.selectedScene?.worldId) state.selectedWorldId = state.selectedScene.worldId;
  };

  document.addEventListener('DOMContentLoaded', ()=>{
    if (!state.selectedScene && !state.sceneCompletedView) state.selectedWorldId = 'map';
    render();
  });
})();
