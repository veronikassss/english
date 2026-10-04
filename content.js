// Generated content for English Kids static prototype v28
const XP_RULES = {
  "correctAnswer": 10,
  "sceneCompleted": 30,
  "perfectSceneBonus": 20
};
const grammarSkills = [
  {
    "id": "articles",
    "order": 1,
    "title": "Articles: a / an",
    "shortTitle": "A / An",
    "xpThreshold": 0,
    "description": "A и an ставим, когда предмет один: a banana, an apple, a pizza.",
    "cardId": "card-articles"
  },
  {
    "id": "plural",
    "order": 2,
    "title": "Plural: grape → grapes",
    "shortTitle": "Plural -s",
    "xpThreshold": 190,
    "description": "Когда предметов много, добавляем -s: grapes, oranges, pears.",
    "cardId": "card-plural"
  },
  {
    "id": "to_be",
    "order": 3,
    "title": "I am",
    "shortTitle": "I am",
    "xpThreshold": 430,
    "description": "I am говорим, когда рассказываем о себе.",
    "cardId": "card-to-be"
  },
  {
    "id": "is_intro",
    "order": 4,
    "title": "is: she is / he is / it is",
    "shortTitle": "is",
    "xpThreshold": 560,
    "description": "Is помогает говорить про девочку, мальчика или предмет.",
    "cardId": "card-is"
  },
  {
    "id": "are_intro",
    "order": 5,
    "title": "are: we are / they are / you are",
    "shortTitle": "are",
    "xpThreshold": 850,
    "description": "Are говорим с we, they и you.",
    "cardId": "card-are"
  }
];
const grammarCards = [
  {
    "id": "card-articles",
    "skillId": "articles",
    "title": "A / An",
    "rule": "Слово a или an ставим, если предмет один. An ставим, когда слово начинается с буквы, которую можно петь: a, e, i, o, u.",
    "items": [
      {
        "label": "It is a banana",
        "image": "🍌",
        "sentence": "a banana",
        "speak": "It is a banana"
      },
      {
        "label": "It is an apple",
        "image": "🍎",
        "sentence": "an apple",
        "speak": "It is an apple"
      },
      {
        "label": "It is a pizza",
        "image": "🍕",
        "sentence": "a pizza",
        "speak": "It is a pizza"
      }
    ],
    "examples": [
      "It is a banana.",
      "It is an apple.",
      "It is a pizza."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-zoo-articles",
    "skillId": "articles",
    "title": "A / An",
    "rule": "Слово a или an ставим, если предмет один. An ставим, когда слово начинается с буквы, которую можно петь: a, e, i, o, u.",
    "items": [
      {
        "label": "It is a lion",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "a lion",
        "speak": "a lion"
      },
      {
        "label": "It is a giraffe",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "a giraffe",
        "speak": "a giraffe"
      },
      {
        "label": "It is an octopus",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "an octopus",
        "speak": "an octopus"
      },
      {
        "label": "It is an elephant",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "an elephant",
        "speak": "an elephant"
      }
    ],
    "examples": [
      "It is a lion.",
      "It is a giraffe.",
      "It is an octopus.",
      "It is an elephant."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-plural",
    "skillId": "plural",
    "title": "Множественное число: +s",
    "rule": "Когда предметов много, добавляем s в конце слова.",
    "layout": "pairs",
    "pairs": [
      {
        "singular": {
          "image": "🍇",
          "label": "a grape",
          "sentence": "It is a grape.",
          "speak": "a grape"
        },
        "plural": {
          "image": "🍇🍇",
          "label": "two grapes",
          "sentence": "two grapes.",
          "speak": "two grapes"
        }
      },
      {
        "singular": {
          "image": "🍊",
          "label": "an orange",
          "sentence": "It is an orange.",
          "speak": "an orange"
        },
        "plural": {
          "image": "🍊🍊🍊",
          "label": "three oranges",
          "sentence": "three oranges.",
          "speak": "three oranges"
        }
      },
      {
        "singular": {
          "image": "🍐",
          "label": "a pear",
          "sentence": "It is a pear.",
          "speak": "a pear"
        },
        "plural": {
          "image": "🍐🍐",
          "label": "two pears",
          "sentence": "two pears.",
          "speak": "two pears"
        }
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-zoo-plural",
    "skillId": "plural",
    "title": "Множественное число: +s",
    "rule": "А ты слышал, что смотритель решил подселить животных? Когда животных много, добавляем s в конце слова. И ещё новое животное — a snake.",
    "layout": "pairs",
    "pairs": [
      {
        "singular": {
          "image": "🐍",
          "label": "a snake",
          "sentence": "It is a snake.",
          "speak": "a snake"
        },
        "plural": {
          "image": "🐍🐍🐍",
          "label": "three snakes",
          "sentence": "three snakes.",
          "speak": "three snakes"
        }
      },
      {
        "singular": {
          "image": "🦁",
          "label": "a lion",
          "sentence": "It is a lion.",
          "speak": "a lion"
        },
        "plural": {
          "image": "🦁🦁",
          "label": "two lions",
          "sentence": "two lions.",
          "speak": "two lions"
        }
      },
      {
        "singular": {
          "image": "🦒",
          "label": "a giraffe",
          "sentence": "It is a giraffe.",
          "speak": "a giraffe"
        },
        "plural": {
          "image": "🦒🦒🦒🦒",
          "label": "four giraffes",
          "sentence": "four giraffes.",
          "speak": "four giraffes"
        }
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Нам так просто смотрителю не помочь, но у меня есть карточка, которая поможет!"
  },
  {
    "id": "card-zoo-is",
    "skillId": "is_intro",
    "title": "is",
    "rule": "Смотри, если хочешь рассказать про одного человека, один предмет или одно животное, используем is. She is — про девочку. He is — про мальчика. It is — про предмет.",
    "items": [
      {
        "label": "She is",
        "ru": "она",
        "image": "👧",
        "sentence": "She is a girl.",
        "speak": "she is"
      },
      {
        "label": "He is",
        "ru": "он",
        "image": "👦",
        "sentence": "He is a boy.",
        "speak": "he is"
      },
      {
        "label": "It is",
        "ru": "это",
        "image": "🐍",
        "sentence": "It is a snake.",
        "speak": "it is"
      }
    ],
    "examples": [
      "She is a girl.",
      "He is a boy.",
      "It is a snake."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-to-be",
    "skillId": "to_be",
    "title": "I am",
    "rule": "Когда хотим рассказать о себе, мы говорим I am: I am Lex, I am five, I am a boy или I am a girl.",
    "items": [
      {
        "label": "I am Lex",
        "image": "🦊",
        "sentence": "I am Lex.",
        "speak": "I am Lex"
      },
      {
        "label": "I am five",
        "image": "🎂",
        "sentence": "I am five.",
        "speak": "I am five"
      },
      {
        "label": "I am a boy",
        "image": "👦",
        "sentence": "I am a boy.",
        "speak": "I am a boy"
      },
      {
        "label": "I am a girl",
        "image": "👧",
        "sentence": "I am a girl.",
        "speak": "I am a girl"
      }
    ],
    "examples": [
      "I am Lex.",
      "I am 8.",
      "I am a boy.",
      "I am a girl."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Смотри, я знаю как рассказывать о себе. Мы говорим I am."
  },
  {
    "id": "card-is",
    "skillId": "is_intro",
    "title": "is",
    "rule": "Смотри, если хочешь рассказать про одного человека, один предмет или одно животное, используем is. She is — про девочку. He is — про мальчика. It is — про предмет.",
    "items": [
      {
        "label": "She is",
        "ru": "она",
        "image": "👧",
        "sentence": "She is Katya.",
        "speak": "she is"
      },
      {
        "label": "He is",
        "ru": "он",
        "image": "👦",
        "sentence": "He is Misha.",
        "speak": "he is"
      },
      {
        "label": "It is",
        "ru": "это",
        "image": "🍕",
        "sentence": "It is a pizza.",
        "speak": "it is"
      }
    ],
    "examples": [
      "She is Katya.",
      "He is Misha.",
      "It is a pizza."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-are",
    "skillId": "are_intro",
    "title": "are",
    "rule": "Смотри, когда говорим про тебя или про много людей и предметов, используем are: we are, they are, you are.",
    "items": [
      {
        "label": "We are",
        "ru": "мы",
        "image": "👧👦",
        "sentence": "We are hungry.",
        "speak": "we are"
      },
      {
        "label": "They are",
        "ru": "они",
        "image": "👨‍👩‍👧‍👦",
        "sentence": "They are visitors.",
        "speak": "they are"
      },
      {
        "label": "You are",
        "ru": "ты / вы",
        "image": "👉",
        "sentence": "You are tall.",
        "speak": "you are"
      }
    ],
    "examples": [
      "We are hungry.",
      "They are happy.",
      "You are tall."
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-school-articles",
    "skillId": "articles",
    "title": "A / An",
    "rule": "Слово a или an ставим, если предмет один. An ставим, когда слово начинается с буквы, которую можно петь: a, e, i, o, u.",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:",
    "items": [
      {
        "label": "It is a bag",
        "image": "🎒",
        "imageFile": "/images/school/school-bag.png",
        "sentence": "a bag",
        "speak": "a bag"
      },
      {
        "label": "It is a pen",
        "image": "🖊️",
        "imageFile": "/images/school/school-pen.png",
        "sentence": "a pen",
        "speak": "a pen"
      },
      {
        "label": "It is a pencil",
        "image": "✏️",
        "imageFile": "/images/school/school-pencil.png",
        "sentence": "a pencil",
        "speak": "a pencil"
      },
      {
        "label": "It is an eraser",
        "image": "⬜",
        "imageFile": "/images/school/school-eraser.png",
        "sentence": "an eraser",
        "speak": "an eraser"
      }
    ],
    "examples": [
      "It is a bag.",
      "It is a pen.",
      "It is a pencil.",
      "It is an eraser."
    ],
    "buttonLabel": "Try it"
  },
  {
    "id": "card-school-plural",
    "skillId": "plural",
    "title": "Множественное число: +s",
    "rule": "Когда школьных предметов много, добавляем s в конце слова. Цифры можно читать словами: two, four, five.",
    "layout": "pairs",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:",
    "pairs": [
      {
        "singular": {
          "image": "🎒",
          "label": "a bag",
          "sentence": "It is a bag.",
          "speak": "a bag"
        },
        "plural": {
          "image": "🎒🎒",
          "label": "two bags",
          "sentence": "two bags.",
          "speak": "two bags"
        }
      },
      {
        "singular": {
          "image": "🖊️",
          "label": "a pen",
          "sentence": "It is a pen.",
          "speak": "a pen"
        },
        "plural": {
          "image": "🖊️🖊️🖊️🖊️",
          "label": "four pens",
          "sentence": "four pens.",
          "speak": "four pens"
        }
      },
      {
        "singular": {
          "image": "🧽",
          "label": "an eraser",
          "sentence": "It is an eraser.",
          "speak": "an eraser"
        },
        "plural": {
          "image": "🧽🧽🧽🧽🧽",
          "label": "five erasers",
          "sentence": "five erasers.",
          "speak": "five erasers"
        }
      }
    ],
    "buttonLabel": "Try it"
  },
  {
    "id": "card-playground-articles",
    "skillId": "articles",
    "title": "A / An",
    "rule": "Слово a или an ставим, если предмет один. An ставим, когда слово начинается с буквы, которую можно петь: a, e, i, o, u.",
    "items": [
      {
        "label": "It is a car",
        "image": "🚗",
        "sentence": "a car",
        "speak": "a car"
      },
      {
        "label": "It is a train",
        "image": "🚂",
        "sentence": "a train",
        "speak": "a train"
      },
      {
        "label": "It is a doll",
        "image": "🪆",
        "sentence": "a doll",
        "speak": "a doll"
      },
      {
        "label": "It is an airplane",
        "image": "✈️",
        "sentence": "an airplane",
        "speak": "an airplane"
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-playground-plural",
    "skillId": "plural",
    "title": "Множественное число: +s",
    "rule": "Когда игрушек много, добавляем s в конце слова.",
    "layout": "pairs",
    "pairs": [
      {
        "singular": {
          "image": "🚗",
          "label": "a car",
          "sentence": "It is a car.",
          "speak": "a car"
        },
        "plural": {
          "image": "🚗🚗",
          "label": "two cars",
          "sentence": "two cars.",
          "speak": "two cars"
        }
      },
      {
        "singular": {
          "image": "🚂",
          "label": "a train",
          "sentence": "It is a train.",
          "speak": "a train"
        },
        "plural": {
          "image": "🚂🚂🚂🚂🚂",
          "label": "five trains",
          "sentence": "five trains.",
          "speak": "five trains"
        }
      },
      {
        "singular": {
          "image": "🪆",
          "label": "a doll",
          "sentence": "It is a doll.",
          "speak": "a doll"
        },
        "plural": {
          "image": "🪆🪆🪆",
          "label": "three dolls",
          "sentence": "three dolls.",
          "speak": "three dolls"
        }
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Смотри, у ребят есть такие игрушки как у нас! Давай поймём, как говорить, когда их много."
  },
  {
    "id": "card-playground-colors",
    "skillId": "is_intro",
    "title": "Colors",
    "rule": "Чтобы описать цвет одного предмета, говорим it is: It is red. It is blue.",
    "items": [
      {
        "label": "red",
        "ru": "красный",
        "image": "🔴",
        "sentence": "It is red.",
        "speak": "red"
      },
      {
        "label": "green",
        "ru": "зелёный",
        "image": "🟢",
        "sentence": "It is green.",
        "speak": "green"
      },
      {
        "label": "blue",
        "ru": "голубой",
        "image": "🔵",
        "sentence": "It is blue.",
        "speak": "blue"
      },
      {
        "label": "pink",
        "ru": "розовый",
        "image": "🌸",
        "sentence": "It is pink.",
        "speak": "pink"
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Скажу по сикрету: я не различаю цвета. У меня есть карточка, которая поможет!"
  },
  {
    "id": "card-park-articles",
    "skillId": "articles",
    "title": "A / An",
    "rule": "Слово a или an ставим, если предмет один. An ставим, когда слово начинается с буквы, которую можно петь: a, e, i, o, u.",
    "items": [
      {
        "label": "It is a tree",
        "image": "🌳",
        "sentence": "a tree",
        "speak": "a tree"
      },
      {
        "label": "It is an ice cream",
        "image": "🍦",
        "sentence": "an ice cream",
        "speak": "an ice cream"
      },
      {
        "label": "It is a dog",
        "image": "🐶",
        "sentence": "a dog",
        "speak": "a dog"
      },
      {
        "label": "It is a flower",
        "image": "🌸",
        "sentence": "a flower",
        "speak": "a flower"
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "О, у меня есть карточка, которая поможет нам разобраться, и тут написано:"
  },
  {
    "id": "card-park-plural",
    "skillId": "plural",
    "title": "Множественное число: +s",
    "rule": "Когда предметов много, добавляем s в конце слова.",
    "layout": "pairs",
    "pairs": [
      {
        "singular": {
          "image": "🐶",
          "label": "a dog",
          "sentence": "It is a dog.",
          "speak": "a dog"
        },
        "plural": {
          "image": "🐶🐶🐶",
          "label": "three dogs",
          "sentence": "three dogs.",
          "speak": "three dogs"
        }
      },
      {
        "singular": {
          "image": "🍦",
          "label": "an ice cream",
          "sentence": "It is an ice cream.",
          "speak": "an ice cream"
        },
        "plural": {
          "image": "🍦🍦🍦🍦🍦",
          "label": "five ice creams",
          "sentence": "five ice creams.",
          "speak": "five ice creams"
        }
      },
      {
        "singular": {
          "image": "🌳",
          "label": "a tree",
          "sentence": "It is a tree.",
          "speak": "a tree"
        },
        "plural": {
          "image": "🌳🌳",
          "label": "two trees",
          "sentence": "two trees.",
          "speak": "two trees"
        }
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Смотри, предметов стало много. У меня есть карточка, которая поможет!"
  },
  {
    "id": "card-park-weather",
    "skillId": "is_intro",
    "title": "What is the weather?",
    "rule": "Чтобы спросить про погоду, говорим What is the weather? Чтобы ответить, говорим It is: It is sunny. It is rainy.",
    "items": [
      {
        "label": "sunny",
        "ru": "солнечно",
        "image": "☀️",
        "sentence": "It is sunny.",
        "speak": "sunny"
      },
      {
        "label": "rainy",
        "ru": "дождливо",
        "image": "🌧️",
        "sentence": "It is rainy.",
        "speak": "rainy"
      },
      {
        "label": "hot",
        "ru": "жарко",
        "image": "🥵",
        "sentence": "It is hot.",
        "speak": "hot"
      },
      {
        "label": "cold",
        "ru": "холодно",
        "image": "🥶",
        "sentence": "It is cold.",
        "speak": "cold"
      }
    ],
    "buttonLabel": "Try it",
    "buddyIntro": "Погода в этом мире непредсказуемая. У меня есть карточка про weather!"
  }
];
const vocabCards = [
  {
    "id": "vocab-garden-card",
    "title": "Vocabulary Garden",
    "rule": "Новые слова можно услышать и увидеть в предложении. Нажми на карточку, чтобы послушать.",
    "items": [
      {
        "id": "beautiful",
        "word": "beautiful",
        "ru": "красивый",
        "image": "🌸",
        "sentence": "It is beautiful."
      },
      {
        "id": "ugly",
        "word": "ugly",
        "ru": "некрасивый / страшненький",
        "image": "🧌",
        "sentence": "It is ugly."
      },
      {
        "id": "tall",
        "word": "tall",
        "ru": "высокий",
        "image": "🦒",
        "sentence": "It is tall."
      },
      {
        "id": "short",
        "word": "short",
        "ru": "маленький / низкий",
        "image": "🐭",
        "sentence": "It is short."
      }
    ]
  },
  {
    "id": "vocab-food-card",
    "title": "Vocabulary Garden",
    "rule": "Новые слова про еду и настроение. Нажми на карточку, чтобы послушать.",
    "items": [
      {
        "id": "hungry",
        "word": "hungry",
        "ru": "голодный",
        "image": "😺🍽️",
        "imageFile": "/images/cafe/hungry-cat.png",
        "sentence": "I am hungry."
      },
      {
        "id": "yum",
        "word": "yum",
        "ru": "ням / вкусно",
        "image": "😋",
        "imageFile": "/images/cafe/yum-boy.png",
        "sentence": "Yum! It is yummy."
      },
      {
        "id": "yuck",
        "word": "yuck",
        "ru": "фу / невкусно",
        "image": "🤢",
        "imageFile": "/images/cafe/yuck-girl.png",
        "sentence": "Yuck! It is bad."
      }
    ]
  },
  {
    "id": "vocab-zoo-animals-card",
    "typeLabel": "Vocabulary card",
    "title": "Zoo animals",
    "rule": "Животные хотят с тобой познакомиться. Посмотри слова в Vocabulary Garden.",
    "items": [
      {
        "id": "lion",
        "word": "a lion",
        "ru": "лев",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "It is a lion."
      },
      {
        "id": "giraffe",
        "word": "a giraffe",
        "ru": "жираф",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "It is a giraffe."
      },
      {
        "id": "octopus",
        "word": "an octopus",
        "ru": "осьминог",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "It is an octopus."
      },
      {
        "id": "elephant",
        "word": "an elephant",
        "ru": "слон",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "It is an elephant."
      }
    ]
  },
  {
    "id": "vocab-zoo-adjectives-card",
    "typeLabel": "Vocabulary card",
    "title": "Zoo animals",
    "rule": "Мы знаем стольких животных, а даже не знаем как их описать. Давай исправлять это.",
    "items": [
      {
        "id": "fat",
        "word": "fat",
        "ru": "толстый",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "It is fat."
      },
      {
        "id": "old",
        "word": "old",
        "ru": "старый",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "It is old."
      },
      {
        "id": "young",
        "word": "young",
        "ru": "молодой",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "It is young."
      },
      {
        "id": "cute",
        "word": "cute",
        "ru": "милый",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "It is cute."
      }
    ]
  },
  {
    "id": "vocab-school-supplies-card",
    "typeLabel": "Vocabulary card",
    "title": "School things",
    "rule": "Нажми на карточку, чтобы послушать школьное слово.",
    "items": [
      {
        "id": "bag",
        "word": "a bag",
        "ru": "рюкзак",
        "image": "🎒",
        "imageFile": "/images/school/school-bag.png",
        "sentence": "It is a bag."
      },
      {
        "id": "pen",
        "word": "a pen",
        "ru": "ручка",
        "image": "🖊️",
        "imageFile": "/images/school/school-pen.png",
        "sentence": "It is a pen."
      },
      {
        "id": "pencil",
        "word": "a pencil",
        "ru": "карандаш",
        "image": "✏️",
        "imageFile": "/images/school/school-pencil.png",
        "sentence": "It is a pencil."
      },
      {
        "id": "eraser",
        "word": "an eraser",
        "ru": "ластик",
        "image": "🧽",
        "imageFile": "/images/school/school-eraser.png",
        "sentence": "It is an eraser."
      }
    ]
  },
  {
    "id": "vocab-school-numbers-card",
    "typeLabel": "Vocabulary card",
    "title": "Numbers 1–5",
    "rule": "Цифры можно нажать и послушать.",
    "items": [
      {
        "id": "one",
        "word": "one",
        "ru": "один",
        "image": "1",
        "sentence": "Number one."
      },
      {
        "id": "two",
        "word": "two",
        "ru": "два",
        "image": "2",
        "sentence": "Number two."
      },
      {
        "id": "three",
        "word": "three",
        "ru": "три",
        "image": "3",
        "sentence": "Number three."
      },
      {
        "id": "four",
        "word": "four",
        "ru": "четыре",
        "image": "4",
        "sentence": "Number four."
      },
      {
        "id": "five",
        "word": "five",
        "ru": "пять",
        "image": "5",
        "sentence": "Number five."
      }
    ]
  },
  {
    "id": "vocab-school-classroom-card",
    "typeLabel": "Vocabulary card",
    "title": "School things",
    "rule": "Учитель выдал ещё предметы. Нажми на карточку, чтобы послушать слово.",
    "items": [
      {
        "id": "book",
        "word": "a book",
        "ru": "книга",
        "image": "📕",
        "sentence": "It is a book."
      },
      {
        "id": "notebook",
        "word": "a notebook",
        "ru": "тетрадь",
        "image": "📓",
        "sentence": "It is a notebook."
      },
      {
        "id": "ruler",
        "word": "a ruler",
        "ru": "линейка",
        "image": "📏",
        "sentence": "It is a ruler."
      }
    ]
  },
  {
    "id": "vocab-playground-toys-card",
    "typeLabel": "Vocabulary card",
    "title": "Playground toys",
    "rule": "Нажми на игрушку, чтобы услышать слово.",
    "items": [
      {
        "id": "car",
        "word": "a car",
        "ru": "машинка",
        "image": "🚗",
        "sentence": "It is a car."
      },
      {
        "id": "train",
        "word": "a train",
        "ru": "поезд",
        "image": "🚂",
        "sentence": "It is a train."
      },
      {
        "id": "doll",
        "word": "a doll",
        "ru": "кукла",
        "image": "🪆",
        "sentence": "It is a doll."
      },
      {
        "id": "airplane",
        "word": "an airplane",
        "ru": "самолёт",
        "image": "✈️",
        "sentence": "It is an airplane."
      }
    ]
  },
  {
    "id": "vocab-playground-colors-card",
    "typeLabel": "Vocabulary card",
    "title": "Playground colors",
    "rule": "Цвета можно слушать и видеть в предложении.",
    "items": [
      {
        "id": "red",
        "word": "red",
        "ru": "красный",
        "image": "🔴",
        "sentence": "It is red."
      },
      {
        "id": "green",
        "word": "green",
        "ru": "зелёный",
        "image": "🟢",
        "sentence": "It is green."
      },
      {
        "id": "blue",
        "word": "blue",
        "ru": "голубой",
        "image": "🔵",
        "sentence": "It is blue."
      },
      {
        "id": "pink",
        "word": "pink",
        "ru": "розовый",
        "image": "🌸",
        "sentence": "It is pink."
      }
    ]
  },
  {
    "id": "vocab-playground-new-toys-card",
    "typeLabel": "Vocabulary card",
    "title": "More toys",
    "rule": "Новые игрушки на площадке. Нажми на карточку, чтобы послушать.",
    "items": [
      {
        "id": "ball",
        "word": "a ball",
        "ru": "мячик",
        "image": "🏀",
        "sentence": "It is a ball."
      },
      {
        "id": "truck",
        "word": "a truck",
        "ru": "грузовик",
        "image": "🚚",
        "sentence": "It is a truck."
      },
      {
        "id": "kite",
        "word": "a kite",
        "ru": "воздушный змей",
        "image": "🪁",
        "sentence": "It is a kite."
      },
      {
        "id": "bike",
        "word": "a bike",
        "ru": "велосипед",
        "image": "🚲",
        "sentence": "It is a bike."
      }
    ]
  },
  {
    "id": "vocab-park-nature-card",
    "title": "Park words",
    "description": "Новые слова парка можно услышать и увидеть в предложении.",
    "items": [
      {
        "id": "tree",
        "word": "a tree",
        "ru": "дерево",
        "image": "🌳",
        "sentence": "It is a tree.",
        "speak": "a tree"
      },
      {
        "id": "icecream",
        "word": "an ice cream",
        "ru": "мороженое",
        "image": "🍦",
        "sentence": "It is an ice cream.",
        "speak": "an ice cream"
      },
      {
        "id": "dog",
        "word": "a dog",
        "ru": "собачка",
        "image": "🐶",
        "sentence": "It is a dog.",
        "speak": "a dog"
      },
      {
        "id": "flower",
        "word": "a flower",
        "ru": "цветок",
        "image": "🌸",
        "sentence": "It is a flower.",
        "speak": "a flower"
      }
    ]
  },
  {
    "id": "vocab-park-weather-card",
    "title": "Weather",
    "description": "Какая погода? Нажми Listen и послушай.",
    "items": [
      {
        "id": "sunny",
        "word": "sunny",
        "ru": "солнечно",
        "image": "☀️",
        "sentence": "It is sunny.",
        "speak": "sunny"
      },
      {
        "id": "rainy",
        "word": "rainy",
        "ru": "дождливо",
        "image": "🌧️",
        "sentence": "It is rainy.",
        "speak": "rainy"
      },
      {
        "id": "hot",
        "word": "hot",
        "ru": "жарко",
        "image": "🥵",
        "sentence": "It is hot.",
        "speak": "hot"
      },
      {
        "id": "cold",
        "word": "cold",
        "ru": "холодно",
        "image": "🥶",
        "sentence": "It is cold.",
        "speak": "cold"
      }
    ]
  }
];
const achievements = [
  {
    "id": "zoo-guide-license",
    "title": "Zoo Guide License",
    "titleRu": "Лицензия на проведение экскурсий",
    "image": "/images/zoo/zoo-guide-license.png",
    "description": "You can guide visitors around the zoo.",
    "descriptionRu": "Теперь ты можешь водить посетителей по зоопарку и показывать им животных.",
    "stamps": [
      "Snake stamp",
      "Lion stamp",
      "Giraffe stamp",
      "Elephant stamp",
      "Zoo Guide Badge"
    ]
  },
  {
    "id": "friendship-notebook",
    "title": "Friendship Notebook",
    "titleRu": "Тетрадь друзей",
    "image": "/images/school/friendship-notebook.png",
    "description": "Your classmates gave it to you. It helps you remember school words and ask friends for help.",
    "descriptionRu": "Одноклассники подарили её тебе. Она помогает вспоминать школьные слова и получать подсказки.",
    "phrase": "Welcome to our class! This is for you!",
    "phraseRu": "Добро пожаловать в наш класс! Это для тебя."
  },
  {
    "id": "cafe-helper-pad",
    "title": "Training Order Pad",
    "titleRu": "Блокнот первых заказов",
    "image": "/images/cafe/cafe-helper-pad.png",
    "description": "It helps you remember café words and simple orders.",
    "descriptionRu": "Он помогает запоминать слова кафе и простые заказы гостей.",
    "phrase": "Great job today! This is your first order pad.",
    "phraseRu": "Отличная работа сегодня! Это блокнот для твоих первых заказов."
  },
  {
    "id": "play-buddy-bracelet",
    "title": "Play Buddy Bracelet",
    "titleRu": "Браслет игрового друга",
    "image": "/images/playground/play-buddy-bracelet.png",
    "description": "It helps you invite friends to games and remember playground toys.",
    "descriptionRu": "Он помогает звать друзей в игры и вспоминать игрушки на площадке.",
    "phrase": "You played with us today! This is for you.",
    "phraseRu": "Ты играл с нами сегодня! Это для тебя."
  },
  {
    "id": "word-seeds-pouch",
    "title": "Word Seeds Pouch",
    "titleRu": "Мешочек словесных семян",
    "image": "/images/park/word-seeds-pouch.jpg",
    "description": "Plant word seeds and grow new words in Vocabulary Garden.",
    "descriptionRu": "С его помощью можно выращивать новые слова в Vocabulary Garden.",
    "phrase": "Great job! These are word seeds. Plant them and grow new words!",
    "phraseRu": "Отличная работа! Это словесные семена. Посади их и вырасти новые слова!"
  }
];
const worlds = [
  {
    "id": "school",
    "title": "School",
    "emoji": "🏫",
    "description": "Backpack, breakfast, numbers, timetable and classmates.",
    "sceneIds": [
      "school-pack-bag",
      "school-breakfast",
      "school-pack-again",
      "school-get-to-school",
      "school-schedule",
      "school-collision",
      "school-desk-supplies",
      "school-meet-classmates",
      "school-class-nonsense",
      "school-team",
      "school-phone-game",
      "school-meet-teams",
      "school-describe-teams",
      "school-final-review"
    ]
  },
  {
    "id": "cafe",
    "title": "Café",
    "emoji": "☕",
    "description": "Food, menu, waiter and small café quests.",
    "sceneIds": [
      "cafe-find-snack",
      "cafe-clean-table",
      "cafe-fridge-snacks",
      "cafe-make-fruit-pizza",
      "cafe-prepare-counter",
      "cafe-meet-visitors",
      "cafe-sort-snacks",
      "cafe-look-visitors",
      "cafe-notice-visitors",
      "cafe-serve-tables",
      "cafe-notice-groups",
      "cafe-talk-waiter",
      "cafe-choose-food",
      "cafe-close-day"
    ]
  },
  {
    "id": "vocabulary",
    "title": "Vocabulary Garden",
    "emoji": "🌷",
    "description": "Сад слов: здесь появляются слова из разных миров.",
    "sceneIds": [
      "vocab-garden-adjectives",
      "vocab-garden-food",
      "vocab-garden-zoo-animals",
      "vocab-garden-zoo-adjectives",
      "vocab-garden-school-supplies",
      "vocab-garden-school-numbers",
      "vocab-garden-school-classroom",
      "vocab-garden-playground-toys",
      "vocab-garden-playground-colors",
      "vocab-garden-playground-new-toys",
      "vocab-garden-park-nature",
      "vocab-garden-park-weather"
    ]
  },
  {
    "id": "park",
    "title": "Park",
    "emoji": "🌳",
    "description": "Nature, weather and park games.",
    "sceneIds": [
      "park-walk",
      "park-hide-seek",
      "park-many-things",
      "park-meet-ben",
      "park-help-ben",
      "park-describe-helpers",
      "park-weather",
      "park-lex-weather",
      "park-team",
      "park-describe-teams",
      "park-final"
    ]
  },
  {
    "id": "playground",
    "title": "Playground",
    "emoji": "🛝",
    "description": "Toys, colors, friends and games.",
    "sceneIds": [
      "playground-look-toys",
      "playground-choose-toy",
      "playground-count-toys",
      "playground-sandbox",
      "playground-colors",
      "playground-describe-kids",
      "playground-about-me",
      "playground-meet-kids",
      "playground-blocks",
      "playground-new-toys",
      "playground-toy-shop",
      "playground-draw-groups",
      "playground-color-easy",
      "playground-color-medium",
      "playground-color-hard",
      "playground-go-home"
    ]
  },
  {
    "id": "zoo",
    "title": "Zoo",
    "emoji": "🦁",
    "description": "Animals, enclosures and feeding time.",
    "sceneIds": [
      "zoo-open-enclosures",
      "zoo-escaped-animals",
      "zoo-feed-animals",
      "zoo-animal-pairs",
      "zoo-hungry-animals",
      "zoo-meet-keeper",
      "zoo-look-keeper",
      "zoo-guide-stage-1",
      "zoo-look-animal-groups",
      "zoo-guide-stage-2",
      "zoo-talk-keeper",
      "zoo-guide-final"
    ]
  }
];
const scenes = [
  {
    "id": "cafe-find-snack",
    "worldId": "cafe",
    "title": "Find a snack",
    "titleRu": "Найди перекус",
    "emoji": "🍌",
    "description": "найди чем можно перекусить в кафе",
    "descriptionRu": "найди чем можно перекусить в кафе",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "taskIds": [
      "task-cafe-lex-a-an",
      "task-cafe-snack-1",
      "task-cafe-snack-2",
      "task-cafe-snack-3"
    ],
    "completionImage": "/images/cafe/snack-display.jpg",
    "completionTitle": "Scene completed!",
    "completionText": "На витрине: an apple, a banana, a pizza.",
    "grammarCardBeforeId": "card-articles",
    "lexAfter": "Ну всё, за работу! А то мы так никогда не откроемся. Для начала давай приберёмся со столов.",
    "lexBefore": "Так, так, готовить кафе к посетителям интересно, но сначала давай найдём чем перекусить.",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "cafe-clean-table",
    "worldId": "cafe",
    "title": "Clean the table",
    "titleRu": "Убери стол",
    "emoji": "🧽",
    "description": "уберите стол после перекуса",
    "descriptionRu": "уберите стол после перекуса",
    "requiredXp": 70,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "taskIds": [
      "task-cafe-clean-1",
      "task-cafe-clean-apple",
      "task-cafe-clean-pizza",
      "task-cafe-clean-2"
    ],
    "completionImage": "/images/cafe/snacks-on-plate.png",
    "completionTitle": "Snacks are on the plate!",
    "completionText": "Снеки на тарелке.",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [
      "cafe-find-snack",
      "school-pack-again"
    ],
    "lexAfter": "Ухх, было трудно, я так устал. Можешь сам положить в холодильник, а я пойду куплю нам чего-нибудь."
  },
  {
    "id": "cafe-fridge-snacks",
    "worldId": "cafe",
    "title": "Put snacks in the fridge",
    "titleRu": "Положи перекус в холодильник",
    "emoji": "🧊",
    "description": "нужно положить всё в холодильник, пока не испортилось",
    "descriptionRu": "нужно положить всё в холодильник, пока не испортилось",
    "requiredXp": 120,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "taskIds": [
      "task-cafe-fridge-1",
      "task-cafe-fridge-2",
      "task-cafe-fridge-3",
      "task-cafe-fridge-4",
      "task-cafe-fridge-5",
      "task-cafe-fridge-6"
    ],
    "completionImage": "/images/cafe/snacks-on-plate.png",
    "completionTitle": "Snacks are ready!",
    "completionText": "Снеки в холодильнике.",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [
      "cafe-clean-table",
      "school-schedule"
    ],
    "lexAfter": "Да, я такая дырявая голова, мы же в кафе! Давай сами приготовим чего-нибудь."
  },
  {
    "id": "cafe-make-fruit-pizza",
    "worldId": "cafe",
    "title": "Make a fruit pizza",
    "titleRu": "Сделай фруктовую пиццу",
    "emoji": "🍕",
    "description": "приготовить пиццу для всех",
    "descriptionRu": "приготовить пиццу для всех",
    "requiredXp": 190,
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "taskIds": [
      "task-cafe-pizza-1",
      "task-cafe-pizza-2",
      "task-cafe-pizza-3",
      "task-cafe-pizza-4",
      "task-cafe-pizza-5",
      "task-cafe-pizza-6"
    ],
    "completionImage": "/images/cafe/fruit-pizza.png",
    "completionTitle": "Fruit pizza!",
    "completionText": "Ты выбрала фрукты и сделала пиццу. Круто!",
    "grammarCardBeforeId": "card-plural",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [],
    "lexAfter": "МММ, как пахнет! Как я люблю фруктовые пиццы, а ты?",
    "requiredVocabCardIds": []
  },
  {
    "id": "cafe-prepare-counter",
    "worldId": "cafe",
    "title": "Prepare café to open",
    "titleRu": "Подготовь кафе к открытию",
    "emoji": "🧺",
    "description": "кафе скоро откроется, а прилавки пустые — нужно заполнить их",
    "descriptionRu": "кафе скоро откроется, а прилавки пустые — нужно заполнить их",
    "requiredXp": 300,
    "requiredGrammarSkillIds": [
      "articles",
      "plural"
    ],
    "taskIds": [
      "task-cafe-counter-1",
      "task-cafe-counter-2",
      "task-cafe-counter-3",
      "task-cafe-counter-4",
      "task-cafe-counter-5",
      "task-cafe-counter-6",
      "task-cafe-counter-7",
      "task-cafe-counter-8",
      "task-cafe-counter-9",
      "task-cafe-counter-10",
      "task-cafe-counter-11",
      "task-cafe-counter-12"
    ],
    "completionImage": "/images/cafe/counter-pears.jpg",
    "completionTitle": "Café is ready!",
    "completionText": "Прилавки готовы к открытию.",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [
      "cafe-make-fruit-pizza",
      "school-desk-supplies"
    ],
    "lexAfter": "Ух, я так устал раскладывать прилавки, их так много! Главный по кафе хочет проверить, сможем ли мы приветствовать посетителей."
  },
  {
    "id": "cafe-meet-visitors",
    "worldId": "cafe",
    "title": "Meet café visitors",
    "titleRu": "Представься посетителям",
    "emoji": "👋",
    "description": "потренируйся как представляться посетителям",
    "descriptionRu": "потренируйся как представляться посетителям",
    "requiredXp": 430,
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "taskIds": [
      "task-cafe-visitors-1",
      "task-cafe-visitors-2",
      "task-cafe-visitors-3",
      "task-cafe-visitors-4",
      "task-cafe-visitors-5",
      "task-cafe-visitors-6"
    ],
    "completionImage": "/images/cafe/cafe-visitors.jpg",
    "completionTitle": "Nice to meet you!",
    "completionText": "Теперь посетители знают тебя.",
    "grammarCardBeforeId": "card-to-be",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [],
    "lexAfter": "Пока мы тут балякали, некоторые продукты испортились! Чёрт, это я не доглядел, наверное.",
    "requiredVocabCardIds": []
  },
  {
    "id": "cafe-sort-snacks",
    "worldId": "cafe",
    "title": "Sort fresh snacks",
    "titleRu": "Срочно: перебери фрукты",
    "emoji": "🛎️",
    "description": "ой-ой-ой, Лекс накосячил, выкинь испорченные продукты",
    "descriptionRu": "ой-ой-ой, Лекс накосячил, выкинь испорченные продукты",
    "requiredXp": 520,
    "requiredGrammarSkillIds": [
      "articles",
      "plural",
      "to_be"
    ],
    "requiredCompletedSceneIds": [
      "cafe-meet-visitors"
    ],
    "taskIds": [
      "task-cafe-sort-1",
      "task-cafe-sort-2",
      "task-cafe-sort-3",
      "task-cafe-sort-4",
      "task-cafe-sort-5"
    ],
    "completionImage": "/images/cafe/fresh-snacks.jpg",
    "completionTitle": "Thanks, helper!",
    "completionTitleFromName": true,
    "completionText": "Свежие фрукты выбраны.",
    "lexAfter": "Ух, спасибо за помощь и что не рассказала главному по кафе. Ну что, мы же не можем только про себя рассказать, а про посетителей нет. Пойдём посмотрим, как с ними общаться."
  },
  {
    "id": "cafe-look-visitors",
    "worldId": "cafe",
    "title": "Look at café visitors",
    "titleRu": "Посмотри на посетителей",
    "emoji": "👀",
    "description": "а как вообще про покупателей говорить?",
    "descriptionRu": "а как вообще про покупателей говорить?",
    "requiredXp": 620,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "taskIds": [
      "task-cafe-look-1",
      "task-cafe-look-2",
      "task-cafe-look-3",
      "task-cafe-look-4"
    ],
    "completionImage": "/images/cafe/cafe-visitors.jpg",
    "completionTitle": "Visitors are ready!",
    "completionText": "Ты различаешь she is, he is и it is.",
    "vocabCardAfterId": "vocab-garden-card",
    "grammarCardBeforeId": "card-is",
    "requiredCompletedSceneIds": [],
    "lexAfter": "Мы теперь знаем как их описать. Пойдём посмотрим на посетителей и скажем о них что-нибудь! Чур, ты первая.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "cafe-notice-visitors",
    "worldId": "cafe",
    "title": "Notice café visitors",
    "titleRu": "Приглядись к посетителям",
    "emoji": "🔎",
    "description": "потренируйся в диалоге с людьми",
    "descriptionRu": "потренируйся в диалоге с людьми",
    "requiredXp": 820,
    "requiredGrammarSkillIds": [
      "to_be",
      "is_intro"
    ],
    "requiredVocabCardIds": [],
    "taskIds": [
      "task-cafe-adj-1",
      "task-cafe-adj-2",
      "task-cafe-adj-3",
      "task-cafe-adj-4",
      "task-cafe-adj-5",
      "task-cafe-adj-6",
      "task-cafe-adj-7",
      "task-cafe-adj-8",
      "task-cafe-adj-9"
    ],
    "completionImage": "/images/cafe/cafe-visitors.jpg",
    "completionTitle": "Good eye!",
    "completionText": "Ты описываешь людей и снеки.",
    "requiredCompletedSceneIds": [
      "cafe-look-visitors"
    ],
    "lexAfter": "Да ты хороша! Я тоже так могу, но потом покажу. А давай лучше проведём тренировку обслуживания столиков, где несколько людей, тут я асс!",
    "vocabCardBeforeId": "vocab-cafe-adjectives-card"
  },
  {
    "id": "cafe-serve-tables",
    "worldId": "cafe",
    "title": "Serve the tables",
    "titleRu": "Обслужи столики",
    "emoji": "🍽️",
    "description": "люди приходят группами, а как с ними говорить?",
    "descriptionRu": "люди приходят группами, а как с ними говорить?",
    "requiredXp": 960,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "taskIds": [
      "task-cafe-are-1",
      "task-cafe-are-2",
      "task-cafe-are-3",
      "task-cafe-are-4"
    ],
    "completionImage": "/images/cafe/cafe-visitors.jpg",
    "completionTitle": "Tables are ready!",
    "completionText": "Теперь ты знаешь we are, they are и you are.",
    "grammarCardBeforeId": "card-are",
    "requiredCompletedSceneIds": [],
    "lexAfter": "Да, молодец! У нас отлично получается. Давай теперь опишем компании людей, которые будут сидеть у нас в кафе.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "cafe-notice-groups",
    "worldId": "cafe",
    "title": "Notice groups",
    "titleRu": "Приглядись к компаниям",
    "emoji": "👥",
    "description": "давай научимся описывать много людей",
    "descriptionRu": "давай научимся описывать много людей",
    "requiredXp": 1020,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredVocabCardIds": [
      "vocab-garden-card"
    ],
    "taskIds": [
      "task-cafe-group-adj-1",
      "task-cafe-group-adj-2",
      "task-cafe-group-adj-3",
      "task-cafe-group-adj-4",
      "task-cafe-group-adj-5",
      "task-cafe-group-adj-6"
    ],
    "completionImage": "/images/cafe/cafe-visitors.jpg",
    "completionTitle": "Groups are ready!",
    "completionText": "Ты используешь are с группами.",
    "requiredCompletedSceneIds": [
      "cafe-serve-tables"
    ],
    "lexAfter": "Мы так много умеем, но давай узнаем какой-нибудь мудрости от официанта, который тут дольше работает. Давай, иди, не стесняйся, я прямо за тобой!"
  },
  {
    "id": "cafe-talk-waiter",
    "worldId": "cafe",
    "title": "Talk to waiter",
    "titleRu": "Поговори с официантом",
    "emoji": "🧑‍🍳",
    "description": "тренируемся общаться с клиентами, чур ты клиент",
    "descriptionRu": "тренируемся общаться с клиентами, чур ты клиент",
    "requiredXp": 1120,
    "requiredGrammarSkillIds": [
      "to_be",
      "is_intro"
    ],
    "taskIds": [
      "task-cafe-waiter-1",
      "task-cafe-waiter-2",
      "task-cafe-waiter-3",
      "task-cafe-waiter-4",
      "task-cafe-waiter-5"
    ],
    "completionImage": "/images/cafe/waiter-counter.png",
    "completionTitle": "The waiter knows you!",
    "completionText": "Теперь можно выбрать еду.",
    "vocabCardAfterId": "vocab-food-card",
    "requiredCompletedSceneIds": [
      "cafe-notice-groups"
    ],
    "lexAfter": "Том такой крутой! Он предложил нам представить себя посетителями и выбрать еду, а он покажет, как правильно их обслуживать."
  },
  {
    "id": "cafe-choose-food",
    "worldId": "cafe",
    "title": "Choose food",
    "titleRu": "Выбери еду",
    "emoji": "🍽️",
    "description": "ты всё ещё клиент, закажи еду",
    "descriptionRu": "ты всё ещё клиент, закажи еду",
    "requiredXp": 1220,
    "requiredGrammarSkillIds": [
      "to_be",
      "is_intro"
    ],
    "requiredVocabCardIds": [
      "vocab-food-card"
    ],
    "taskIds": [
      "task-cafe-food-1",
      "task-cafe-food-2",
      "task-cafe-food-3",
      "task-cafe-food-4"
    ],
    "completionImage": "/images/cafe/fruit-pizza.png",
    "completionTitle": "Bon appétit!",
    "completionText": "Ты выбрала еду. Yum!",
    "requiredCompletedSceneIds": [
      "cafe-talk-waiter"
    ],
    "lexAfter": "Да, приятно побыть посетителем и вкусно покушать, но уже так поздно. Давай покажем Тому, чему мы научились, а то я хочу баеньки."
  },
  {
    "id": "cafe-close-day",
    "worldId": "cafe",
    "title": "Close the café",
    "titleRu": "Закрой кафе",
    "emoji": "🌙",
    "description": "тренировка окончена, Том хочет понять, можно ли нам официантничать",
    "descriptionRu": "тренировка окончена, Том хочет понять, можно ли нам официантничать",
    "requiredXp": 1290,
    "requiredGrammarSkillIds": [
      "articles",
      "plural",
      "to_be",
      "is_intro",
      "are_intro"
    ],
    "taskIds": [
      "task-cafe-final-1",
      "task-cafe-final-2",
      "task-cafe-final-3",
      "task-cafe-final-4",
      "task-cafe-final-5",
      "task-cafe-final-6",
      "task-cafe-final-7",
      "task-cafe-final-8",
      "task-cafe-final-9",
      "task-cafe-final-10",
      "task-cafe-final-11",
      "task-cafe-final-12"
    ],
    "completionImage": "/images/cafe/cafe-helper-pad.png",
    "completionTitle": "Great job today!",
    "completionText": "Отличная работа сегодня! Это блокнот для твоих первых заказов.",
    "requiredCompletedSceneIds": [
      "cafe-choose-food"
    ],
    "achievementAfterId": "cafe-helper-pad",
    "lexAfter": "Блин, наша стажировка уже закончилась, и мы даже получили блокнотики! Это так круто, но у меня ноги так устали — пора передохнуть."
  },
  {
    "id": "vocab-garden-adjectives",
    "worldId": "vocabulary",
    "title": "Garden words",
    "titleRu": "Сад слов",
    "emoji": "🌷",
    "description": "beautiful, ugly, tall, short",
    "descriptionRu": "beautiful, ugly, tall, short",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-garden-card"
    ],
    "taskIds": [
      "task-vocab-garden-1",
      "task-vocab-garden-2"
    ],
    "completionImage": "/images/cafe/vocab-garden-basic.png",
    "completionTitle": "Words are ready!",
    "completionText": "Теперь эти слова живут в саду лексики."
  },
  {
    "id": "vocab-garden-food",
    "worldId": "vocabulary",
    "title": "Food mood words",
    "titleRu": "Слова про еду",
    "emoji": "😋",
    "description": "hungry, yum, yuck",
    "descriptionRu": "hungry, yum, yuck",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-food-card"
    ],
    "taskIds": [
      "task-vocab-food-1",
      "task-vocab-food-2"
    ],
    "completionImage": "/images/cafe/vocab-garden-full.png",
    "completionTitle": "Food words are ready!",
    "completionText": "Ты знаешь hungry, yum и yuck."
  },
  {
    "id": "zoo-open-enclosures",
    "worldId": "zoo",
    "title": "Open the zoo",
    "titleRu": "Открой зоопарк",
    "emoji": "🦁",
    "description": "The zoo is opening. Choose a or an for zoo animals.",
    "descriptionRu": "Первый день работы зоопарка! Помоги смотрителю распределить животных по вольерам.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "grammarCardBeforeId": "card-zoo-articles",
    "taskIds": [
      "task-zoo-lex-a-an",
      "task-zoo-open-1",
      "task-zoo-open-2",
      "task-zoo-open-3",
      "task-zoo-open-4"
    ],
    "completionImage": "/images/zoo/zoo-happy.png",
    "completionTitle": "Animals are at home!",
    "completionText": "Животные в вольерах: a lion, a giraffe, an elephant, an octopus.",
    "lexBefore": "Первый день работы зоопарка! Как же нам помочь зверюшкам?",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "zoo-escaped-animals",
    "worldId": "zoo",
    "title": "Find escaped animals",
    "titleRu": "Найди животных",
    "emoji": "🔎",
    "description": "The animals ran around the zoo. Call them and bring them home.",
    "descriptionRu": "Животные убежали по зоопарку. Позови их и верни домой.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "requiredVocabCardIds": [],
    "taskIds": [
      "task-zoo-find-1",
      "task-zoo-find-2",
      "task-zoo-find-3",
      "task-zoo-find-4",
      "task-zoo-find-5"
    ],
    "completionImage": "/images/zoo/zoo-happy.png",
    "completionTitle": "Zoo is calm again!",
    "completionText": "Все животные вернулись домой.",
    "requiredAnyCompletedSceneIds": []
  },
  {
    "id": "zoo-feed-animals",
    "worldId": "zoo",
    "title": "Feed the animals",
    "titleRu": "Покорми животных",
    "emoji": "🍽️",
    "description": "The animals are hungry. Feed them with café snacks.",
    "descriptionRu": "Пока животные бегали, они так сильно проголодались! Покорми их. Ты можешь сходить в мир Café и узнать про лакомства для животных.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "requiredVocabCardIds": [],
    "taskIds": [
      "task-zoo-feed-elephant-1",
      "task-zoo-feed-elephant-2",
      "task-zoo-feed-lion-1",
      "task-zoo-feed-lion-2",
      "task-zoo-feed-giraffe-1",
      "task-zoo-feed-giraffe-2",
      "task-zoo-feed-octopus-1",
      "task-zoo-feed-octopus-2"
    ],
    "completionImage": "/images/zoo/zoo-resting-new.png",
    "completionTitle": "Animals are resting!",
    "completionText": "Животные набегались, наелись и легли спать.",
    "requiredAnyCompletedSceneIds": [],
    "toastAfter": "Животные набегались, наелись и устали. Они легли спать! Дождись второго дня в зоопарке, можешь пока исследовать другой мир",
    "lexAfter": "Да, первый день в зоопарке прошёл не так гладко! Надеюсь завтра мы лучше справимся... ну я... ты-то отлично справился. Пойдём может в другой мир пока?"
  },
  {
    "id": "zoo-animal-pairs",
    "worldId": "zoo",
    "title": "Every animal needs a friend",
    "titleRu": "Каждому животному нужен друг",
    "emoji": "🦁",
    "description": "Add more animals to the enclosures.",
    "descriptionRu": "Животным грустно без друзей. Смотритель решил привести побольше животных.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "requiredCompletedSceneIds": [
      "zoo-feed-animals"
    ],
    "requiredZooRestComplete": true,
    "grammarCardBeforeId": "card-zoo-plural",
    "taskIds": [
      "task-zoo-pairs-0",
      "task-zoo-pairs-1",
      "task-zoo-pairs-2",
      "task-zoo-pairs-3",
      "task-zoo-pairs-4",
      "task-zoo-pairs-5"
    ],
    "completionImage": "/images/zoo/zoo-pairs-final.png",
    "completionTitle": "More animals!",
    "completionText": "В зоопарке стало больше животных.",
    "lexAfter": "Отлично, мы их расселили, и все счастливы. Мы такие молодцы!"
  },
  {
    "id": "zoo-hungry-animals",
    "worldId": "zoo",
    "title": "Check hungry animals",
    "titleRu": "Проверь голодных животных",
    "emoji": "🍽️",
    "description": "Choose only the hungry animals.",
    "descriptionRu": "У нас так много животных. Нужно посмотреть, не проголодался ли кто-то.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "requiredCompletedSceneIds": [
      "zoo-animal-pairs"
    ],
    "taskIds": [
      "task-zoo-hungry-1"
    ],
    "completionImage": "/images/zoo/zoo-hungry-new.png",
    "completionTitle": "Hungry animals found!",
    "completionText": "Смотритель теперь знает, кого кормить.",
    "lexAfter": "Какие же они проглоты! Вечно хотят кушать. Мы уже второй день работаем в зоопарке, а так и не представились смотрителю."
  },
  {
    "id": "zoo-meet-keeper",
    "worldId": "zoo",
    "title": "Meet the keeper",
    "titleRu": "Представься смотрителю",
    "emoji": "👋",
    "description": "Introduce yourself to the zoo keeper.",
    "descriptionRu": "Мы уже второй день работаем в зоопарке, а так и не представились смотрителю. Давай уже знакомиться!",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "requiredCompletedSceneIds": [],
    "taskIds": [
      "task-zoo-keeper-1",
      "task-zoo-keeper-2",
      "task-zoo-keeper-3",
      "task-zoo-keeper-4",
      "task-zoo-keeper-5",
      "task-zoo-keeper-6"
    ],
    "completionImage": "/images/zoo/zoo-keeper-new.png",
    "completionTitle": "Nice to meet you!",
    "completionText": "Теперь смотритель знает тебя.",
    "grammarCardBeforeId": "card-to-be",
    "lexAfter": "Отлично, теперь мы по-настоящему знакомы со смотрителем. Но нам-то и с другими знакомиться надо.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "zoo-look-keeper",
    "worldId": "zoo",
    "title": "Look at the keeper and animals",
    "titleRu": "Посмотри на смотрителя и животных",
    "emoji": "👀",
    "description": "Use she is, he is and it is with people and animals.",
    "descriptionRu": "Говорим про девочку, мальчика и животное.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "zoo-talk-keeper"
    ],
    "grammarCardBeforeId": "card-zoo-is",
    "taskIds": [
      "task-zoo-is-1",
      "task-zoo-is-2",
      "task-zoo-is-3",
      "task-zoo-is-4"
    ],
    "completionImage": "/images/zoo/zoo-keeper-new.png",
    "completionTitle": "Zoo words are ready!",
    "completionText": "Теперь можно описывать животных.",
    "vocabCardAfterId": "vocab-zoo-adjectives-card",
    "lexAfter": "Мне по секрету рассказали, что проходит конкурс на получение лицензии экскурсовода! Давай запишемся и тоже попробуем!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "zoo-guide-stage-1",
    "worldId": "zoo",
    "title": "Describe animals",
    "titleRu": "1 этап обучения на экскурсовода. Опиши зверей!",
    "emoji": "🎤",
    "description": "Use fat, old, young and cute with it is.",
    "descriptionRu": "Если хочешь работать дальше в зоопарке, нужно научиться всех описывать — тогда получишь лицензию на проведение экскурсий!",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredVocabCardIds": [
      "vocab-zoo-adjectives-card"
    ],
    "requiredCompletedSceneIds": [
      "zoo-look-keeper"
    ],
    "taskIds": [
      "task-zoo-stage1-match",
      "task-zoo-stage1-adj-1",
      "task-zoo-stage1-adj-2",
      "task-zoo-stage1-adj-3",
      "task-zoo-stage1-adj-4",
      "task-zoo-stage1-phrase-1",
      "task-zoo-stage1-phrase-2",
      "task-zoo-stage1-phrase-3",
      "task-zoo-stage1-phrase-4",
      "task-zoo-stage1-animal-1",
      "task-zoo-stage1-animal-2",
      "task-zoo-stage1-animal-3",
      "task-zoo-stage1-animal-4"
    ],
    "completionImage": "/images/zoo/zoo-adjectives-final.png",
    "completionTitle": "Stage 1 complete!",
    "completionText": "Ты научилась описывать одного зверя.",
    "lexAfter": "Отлично, первый этап обучения пройден! Мне так нравится, правда я так много напутал, надеюсь, я дальше лучше справлюсь."
  },
  {
    "id": "zoo-look-animal-groups",
    "worldId": "zoo",
    "title": "Look at animal groups",
    "titleRu": "Приглядись к животным",
    "emoji": "👥",
    "description": "Use we are, they are and you are.",
    "descriptionRu": "Теперь смотрим на группы животных и людей.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "zoo-guide-stage-1"
    ],
    "grammarCardBeforeId": "card-are",
    "taskIds": [
      "task-zoo-are-1",
      "task-zoo-are-2",
      "task-zoo-are-3",
      "task-zoo-are-4"
    ],
    "completionImage": "/images/zoo/zoo-pairs-final.png",
    "completionTitle": "Groups are ready!",
    "completionText": "Ты различаешь we are, they are и you are.",
    "lexAfter": "Молодец, ты почти получила лицензию! Смотритель разрешил тебе подходить сразу к группе животных для их описания!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "zoo-guide-stage-2",
    "worldId": "zoo",
    "title": "Describe animal groups",
    "titleRu": "2 этап получения лицензии. Опиши группы животных",
    "emoji": "🎤",
    "description": "Use adjectives with they are, we are and you are.",
    "descriptionRu": "Опиши группы животных и повтори новую лексику.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredVocabCardIds": [
      "vocab-zoo-adjectives-card"
    ],
    "requiredCompletedSceneIds": [
      "zoo-look-animal-groups"
    ],
    "taskIds": [
      "task-zoo-stage2-match",
      "task-zoo-stage2-adj-1",
      "task-zoo-stage2-adj-2",
      "task-zoo-stage2-adj-3",
      "task-zoo-stage2-phrase-1",
      "task-zoo-stage2-phrase-2",
      "task-zoo-stage2-phrase-3"
    ],
    "completionImage": "/images/zoo/zoo-adjectives-final.png",
    "completionTitle": "Stage 2 complete!",
    "completionText": "Ты умеешь описывать группы животных.",
    "lexAfter": "Молодец! Смотритель теперь уверен, что мы можем описать животных, но давай научимся разговаривать с посетителями."
  },
  {
    "id": "zoo-talk-keeper",
    "worldId": "zoo",
    "title": "Talk to the keeper",
    "titleRu": "Поговори со смотрителем",
    "emoji": "🧑‍🌾",
    "description": "A short dialogue with the zoo keeper.",
    "descriptionRu": "Потренируй диалог со смотрителем перед экскурсией.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "to_be",
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "zoo-look-keeper"
    ],
    "taskIds": [
      "task-zoo-talk-1",
      "task-zoo-talk-2",
      "task-zoo-talk-3",
      "task-zoo-talk-4",
      "task-zoo-talk-5"
    ],
    "completionImage": "/images/zoo/zoo-keeper-new.png",
    "completionTitle": "Keeper is ready!",
    "completionText": "Теперь можно говорить с посетителями зоопарка.",
    "grammarCardBeforeId": null,
    "lexAfter": "Ну всё, тренировка окончена! Теперь нас ждёт экзамен. Давай, мы справимся, я точно знаю."
  },
  {
    "id": "zoo-guide-final",
    "worldId": "zoo",
    "title": "Get the Zoo Guide License",
    "titleRu": "Получить лицензию экскурсовода",
    "emoji": "🎫",
    "description": "Show what you know.",
    "descriptionRu": "Докажи смотрителю, что можешь помогать на экскурсии.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles",
      "plural",
      "to_be",
      "is_intro",
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "zoo-talk-keeper"
    ],
    "taskIds": [
      "task-zoo-final-1",
      "task-zoo-final-2",
      "task-zoo-final-3",
      "task-zoo-final-4",
      "task-zoo-final-5",
      "task-zoo-final-6",
      "task-zoo-final-7",
      "task-zoo-final-8",
      "task-zoo-final-9",
      "task-zoo-final-10",
      "task-zoo-final-11",
      "task-zoo-final-12"
    ],
    "completionImage": "/images/zoo/zoo-guide-license.png",
    "completionTitle": "Zoo Guide License",
    "completionText": "Второй день закончен! Все получили лицензию, теперь нужно хорошенько отдохнуть.",
    "achievementAfterId": "zoo-guide-license",
    "lexAfter": "Вау! Ты это видела! Мы теперь реальные экскурсоводы и можем сами их проводить. Сколько мы сделали за второй день!",
    "toastAfter": "Второй день закончен! Все получили лицензию, теперь нужно хорошенько отдохнуть"
  },
  {
    "id": "vocab-garden-zoo-animals",
    "worldId": "vocabulary",
    "title": "Zoo animal words",
    "titleRu": "Слова зоопарка",
    "emoji": "🦁",
    "description": "a lion, a giraffe, an octopus, an elephant",
    "descriptionRu": "a lion, a giraffe, an octopus, an elephant",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-zoo-animals-card"
    ],
    "taskIds": [
      "task-vocab-zoo-1",
      "task-vocab-zoo-2"
    ],
    "completionImage": "/images/zoo/zoo-happy.png",
    "completionTitle": "Zoo words are ready!",
    "completionText": "Животные теперь живут в саду лексики."
  },
  {
    "id": "vocab-garden-zoo-adjectives",
    "worldId": "vocabulary",
    "title": "Zoo animals",
    "titleRu": "Зоопарк: животные и описания",
    "emoji": "🦁",
    "description": "a lion, a giraffe, a snake, an octopus, an elephant + fat, old, young, cute",
    "descriptionRu": "a lion, a giraffe, a snake, an octopus, an elephant + fat, old, young, cute",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-zoo-adjectives-card"
    ],
    "taskIds": [
      "task-vocab-zoo-adj-1",
      "task-vocab-zoo-adj-2"
    ],
    "completionImage": "/images/zoo/zoo-adjectives-final.png",
    "completionTitle": "Zoo adjectives are ready!",
    "completionText": "Ты узнала как описывать зверушек!"
  },
  {
    "id": "school-pack-bag",
    "worldId": "school",
    "title": "Pack the bag",
    "titleRu": "Собираем рюкзак",
    "emoji": "🎒",
    "description": "Choose a/an for school things.",
    "descriptionRu": "Первый день в новой школе. Собери рюкзак.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "grammarCardBeforeId": "card-school-articles",
    "taskIds": [
      "task-school-lex-a-an",
      "task-school-bag-1",
      "task-school-bag-2",
      "task-school-bag-3",
      "task-school-bag-4"
    ],
    "completionImage": "/images/school/school-bag-packed.png",
    "completionTitle": "Backpack is ready!",
    "completionText": "Рюкзак собран.",
    "lexAfter": "Отлично, мы собрались, пойдём завтракать!",
    "lexBefore": "Это же наш первый день в школе! Нам нужно срочно собрать портфель, позавтракать и бежать в школу.",
    "requiredCompletedSceneIds": [],
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-breakfast",
    "worldId": "school",
    "title": "Breakfast",
    "titleRu": "Завтрак",
    "emoji": "🍽️",
    "description": "Choose breakfast before school.",
    "descriptionRu": "Выбери, чем будешь завтракать сегодня. Можно сходить в Café и узнать больше про лакомства.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-pack-bag"
    ],
    "requiredGrammarSkillIds": [],
    "taskIds": [
      "task-school-breakfast-1"
    ],
    "completionImage": "/images/school/breakfast-food.png",
    "completionTitle": "Breakfast done!",
    "completionText": "Выбран завтрак.",
    "lexAfter": "Прости, пока ты кушал, я пролил кофе на рюкзак. Положи всё обратно, пожалуйста! Я бы и сам положил, но понимаешь, мне надо... ну это самое... по делам..."
  },
  {
    "id": "school-pack-again",
    "worldId": "school",
    "title": "Pack again",
    "titleRu": "Положи вещи снова в рюкзак",
    "emoji": "🎒",
    "description": "Find what is near the snacks.",
    "descriptionRu": "Пока Лекс отмывал рюкзак, вещи снова оказались на столе.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-breakfast"
    ],
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "taskIds": [
      "task-school-near-1",
      "task-school-near-2",
      "task-school-near-3",
      "task-school-near-4"
    ],
    "completionImage": "/images/school/school-table.jpg",
    "completionTitle": "Everything is back!",
    "completionText": "Everything is back!",
    "lexAfter": "О! Ты уже всё! Но я-то собирался тебе обязательно помочь. Побежали в школу! А, я так плохо считаю, скажи сколько куда шагов сделать, а? Ну пожалуйста..."
  },
  {
    "id": "school-get-to-school",
    "worldId": "school",
    "title": "Get to school",
    "titleRu": "Доберись до школы",
    "emoji": "🚶",
    "description": "Listen to numbers 1–5.",
    "descriptionRu": "До школы добираемся через шаги, остановки и цифры.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [],
    "taskIds": [
      "task-school-numbers-123",
      "task-school-numbers-1234",
      "task-school-numbers-12345",
      "task-school-numbers-match"
    ],
    "completionImage": "/images/school/numbers-12345.jpg",
    "completionTitle": "We are at school!",
    "completionText": "Теперь найдём кабинет английского языка.",
    "lexAfter": "Так получается: three до остановки, four остановки надо проехать и five шагов до школы. Постараюсь запомнить! Так, а в какой кабинет нам вообще надо?",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-schedule",
    "worldId": "school",
    "title": "Find English class",
    "titleRu": "Найди кабинет английского языка",
    "emoji": "📅",
    "description": "Use numbers to read the timetable.",
    "descriptionRu": "Посмотри расписание и нажми правильное слово-цифру на английском.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [],
    "taskIds": [
      "task-school-schedule-ru",
      "task-school-schedule-math",
      "task-school-schedule-art",
      "task-school-schedule-music",
      "task-school-schedule-english"
    ],
    "completionImage": "/images/school/school-schedule.jpg",
    "completionTitle": "English room found!",
    "completionText": "Ты нашла кабинет английского языка.",
    "lexAfter": "Five кабинет, английский язык! Вперёд наперегонки. А ой, осторожно! Там девочка!",
    "requiredAnyCompletedSceneIds": []
  },
  {
    "id": "vocab-garden-school-supplies",
    "worldId": "vocabulary",
    "title": "School things",
    "titleRu": "Школьные вещи",
    "emoji": "🎒",
    "description": "a bag, a pen, a pencil, an eraser",
    "descriptionRu": "Слова школы: рюкзак, ручка, карандаш, ластик.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-school-supplies-card"
    ],
    "taskIds": [
      "task-vocab-school-supplies-1",
      "task-vocab-school-supplies-2"
    ],
    "completionImage": "/images/school/school-supplies.jpg",
    "completionTitle": "School words are ready!",
    "completionText": "Ты повторила школьные вещи."
  },
  {
    "id": "vocab-garden-school-numbers",
    "worldId": "vocabulary",
    "title": "Numbers 1–5",
    "titleRu": "Цифры 1–5",
    "emoji": "🔢",
    "description": "one, two, three, four, five",
    "descriptionRu": "Послушай и повтори цифры.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-school-numbers-card"
    ],
    "taskIds": [
      "task-vocab-school-numbers-1",
      "task-vocab-school-numbers-2"
    ],
    "completionImage": "/images/school/numbers-12345.jpg",
    "completionTitle": "Numbers are ready!",
    "completionText": "Ты повторила цифры 1–5."
  },
  {
    "id": "school-collision",
    "worldId": "school",
    "title": "Collect school things",
    "titleRu": "Собери вещи и извинись",
    "emoji": "🧺",
    "description": "You bumped into a classmate. Collect school things.",
    "descriptionRu": "По пути к классу мы врезались в одноклассника. Нужно собрать вещи и извиниться!",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "grammarCardBeforeId": "card-school-plural",
    "taskIds": [
      "task-school-collision-1",
      "task-school-collision-2",
      "task-school-collision-bags",
      "task-school-collision-erasers",
      "task-school-collision-pencils",
      "task-school-collision-3",
      "task-school-collision-4"
    ],
    "completionImage": "/images/school/school-collision.jpg",
    "completionTitle": "Things collected!",
    "completionText": "Теперь мы умеем говорить про много школьных предметов.",
    "lexAfter": "Ну наконец мы и в классе. Надо разложиться на парту. Какую парту выбираем?",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-desk-supplies",
    "worldId": "school",
    "title": "Set up the desk",
    "titleRu": "Разложи предметы на парту",
    "emoji": "🪑",
    "description": "Choose a desk and put school things on it.",
    "descriptionRu": "Учитель выдает ещё школьные предметы. Выбирай и раскладывай предметы на парту.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-collision"
    ],
    "requiredGrammarSkillIds": [
      "articles",
      "plural"
    ],
    "vocabCardBeforeId": "vocab-school-classroom-card",
    "taskIds": [
      "task-school-desk-choice",
      "task-school-desk-books",
      "task-school-desk-notebook",
      "task-school-desk-pens",
      "task-school-desk-eraser",
      "task-school-desk-pencils"
    ],
    "completionImage": "/images/school/desk-final.jpg",
    "completionTitle": "Desk is ready!",
    "completionText": "На парте всё готово к уроку.",
    "lexAfter": "Мы уже полностью подготовились. Время знакомиться с одноклассниками. Я так стесняюсь."
  },
  {
    "id": "school-meet-classmates",
    "worldId": "school",
    "title": "Meet classmates",
    "titleRu": "Познакомься с одноклассниками",
    "emoji": "👋",
    "description": "Use I am to introduce yourself.",
    "descriptionRu": "Время знакомиться с одноклассниками.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "grammarCardBeforeId": "card-to-be",
    "taskIds": [
      "task-school-meet-1",
      "task-school-meet-2",
      "task-school-meet-3",
      "task-school-meet-4",
      "task-school-meet-5"
    ],
    "completionImage": "/images/school/girl-reader.png",
    "completionTitle": "Nice to meet you!",
    "completionText": "Ты познакомилась с одноклассниками.",
    "lexAfter": "Наша классная решила провести несколько игр для знакомства, она такая классная! Ну же, давай играть!",
    "lexBefore": "Я правильно говорю I am Lex?",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-class-nonsense",
    "worldId": "school",
    "title": "Class nonsense game",
    "titleRu": "Класс играет в белиберду",
    "emoji": "🎧",
    "description": "Listen and choose what is true or false.",
    "descriptionRu": "Послушай, что говорят дети про себя, и определи, где правда, а где ложь.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-meet-classmates"
    ],
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "taskIds": [
      "task-school-nonsense-1",
      "task-school-nonsense-2",
      "task-school-nonsense-3",
      "task-school-nonsense-4",
      "task-school-nonsense-5",
      "task-school-nonsense-6"
    ],
    "completionImage": "/images/school/girl-reader.png",
    "completionTitle": "Nonsense sorted!",
    "completionText": "Ты отличаешь правду от белиберды.",
    "lexAfter": "О, ты смог отличить белеберду. Давай скорее, нас собрали в команду."
  },
  {
    "id": "school-team",
    "worldId": "school",
    "title": "Meet the team",
    "titleRu": "Познакомься с командой",
    "emoji": "👧",
    "description": "Use she is, he is, it is.",
    "descriptionRu": "Нас собрали в команду. Нужно познакомиться с командой.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "grammarCardBeforeId": "card-is",
    "taskIds": [
      "task-school-is-1",
      "task-school-is-2",
      "task-school-is-3",
      "task-school-is-4"
    ],
    "completionImage": "/images/school/class-circle.png",
    "completionTitle": "Team is ready!",
    "completionText": "Теперь можно говорить про других.",
    "lexAfter": "Какие интересные ребята в нашей команде.",
    "lexBefore": "Так, я прослушал, а чтобы про кого-то рассказать, мы говорим she am?",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-phone-game",
    "worldId": "school",
    "title": "Telephone game",
    "titleRu": "Игра “Телефон”",
    "emoji": "☎️",
    "description": "Tell another person what you heard.",
    "descriptionRu": "Тебе рассказывают информацию, а ты передаёшь её другому.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-team"
    ],
    "requiredGrammarSkillIds": [
      "to_be",
      "is_intro"
    ],
    "taskIds": [
      "task-school-phone-1",
      "task-school-phone-2",
      "task-school-phone-3",
      "task-school-phone-4",
      "task-school-phone-5"
    ],
    "completionImage": "/images/school/class-circle.png",
    "completionTitle": "Message passed!",
    "completionText": "Ты передала информацию правильно.",
    "lexAfter": "Мы отлично вписались в команду! Давай также узнаем и других, мы же хотим быть популярными."
  },
  {
    "id": "school-meet-teams",
    "worldId": "school",
    "title": "Meet teams",
    "titleRu": "Познакомься с другими командами",
    "emoji": "👥",
    "description": "Use we are, they are, you are.",
    "descriptionRu": "Нужно познакомиться и с другими командами.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [],
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "grammarCardBeforeId": "card-are",
    "taskIds": [
      "task-school-are-1",
      "task-school-are-2",
      "task-school-are-3",
      "task-school-are-4"
    ],
    "completionImage": "/images/school/class-circle.png",
    "completionTitle": "Teams are ready!",
    "completionText": "Теперь можно говорить про группы.",
    "lexAfter": "Теперь знаем как описывать других! Послушай и скажи про них, а потом я повторю.",
    "lexBefore": "Когда говорим про много людей, то говорим are. Хмм, как много я подзабыл оказывается.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "school-describe-teams",
    "worldId": "school",
    "title": "Describe teams",
    "titleRu": "Опиши другие команды",
    "emoji": "🎤",
    "description": "Use are with descriptions.",
    "descriptionRu": "Пора описать другие команды. В мире Café есть интересные слова для описаний.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-meet-teams"
    ],
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "taskIds": [
      "task-school-desc-1",
      "task-school-desc-2",
      "task-school-desc-3",
      "task-school-desc-4",
      "task-school-desc-5"
    ],
    "completionImage": "/images/school/class-circle.png",
    "completionTitle": "Teams described!",
    "completionText": "Ты умеешь описывать команды.",
    "lexAfter": "Yes! Мы отлично справились и познакомились со всеми, мы такие дружные! Ой-ой, учитель хочет проверить, насколько хорошо мы поиграли и что мы запомнили."
  },
  {
    "id": "school-final-review",
    "worldId": "school",
    "title": "Show the teacher",
    "titleRu": "Покажи учителю, что всё запомнила",
    "emoji": "⭐",
    "description": "Final school review.",
    "descriptionRu": "Учитель хочет проверить, что ты запомнила за день.",
    "requiredXp": 0,
    "requiredCompletedSceneIds": [
      "school-describe-teams"
    ],
    "requiredGrammarSkillIds": [
      "articles",
      "to_be",
      "is_intro",
      "are_intro"
    ],
    "taskIds": [
      "task-school-final-1",
      "task-school-final-2",
      "task-school-final-3",
      "task-school-final-4",
      "task-school-final-5",
      "task-school-final-6",
      "task-school-final-7",
      "task-school-final-8"
    ],
    "completionImage": "/images/school/class-circle.png",
    "completionTitle": "Welcome to our class!",
    "completionText": "Добро пожаловать в наш класс! Это для тебя.",
    "achievementAfterId": "friendship-notebook",
    "lexAfter": "Да, это был насыщенный первый день! Мы столько всего сделали и всех узнали. Пойдём лучше на площадку поиграем, а то я устал."
  },
  {
    "id": "vocab-garden-school-classroom",
    "worldId": "vocabulary",
    "title": "School desk words",
    "titleRu": "Школьная парта",
    "emoji": "📚",
    "description": "a book, a notebook, a ruler + school things",
    "descriptionRu": "Новые школьные предметы.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-school-classroom-card"
    ],
    "taskIds": [
      "task-vocab-school-classroom-1",
      "task-vocab-school-classroom-2"
    ],
    "completionImage": "/images/school/school-supplies-full.jpg",
    "completionTitle": "Desk words are ready!",
    "completionText": "Ты повторила школьные предметы."
  },
  {
    "id": "vocab-garden-playground-toys",
    "worldId": "vocabulary",
    "title": "Playground toys",
    "titleRu": "Игрушки площадки",
    "emoji": "🛝",
    "description": "Послушай игрушки Лекса.",
    "descriptionRu": "Послушай игрушки Лекса.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "requiredVocabCardIds": [
      "vocab-playground-toys-card"
    ],
    "taskIds": [
      "task-vocab-playground-toys"
    ]
  },
  {
    "id": "vocab-garden-playground-colors",
    "worldId": "vocabulary",
    "title": "Playground colors",
    "titleRu": "Цвета площадки",
    "emoji": "🎨",
    "description": "Послушай цвета.",
    "descriptionRu": "Послушай цвета.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-playground-colors-card"
    ],
    "taskIds": [
      "task-vocab-playground-colors"
    ]
  },
  {
    "id": "vocab-garden-playground-new-toys",
    "worldId": "vocabulary",
    "title": "More playground toys",
    "titleRu": "Новые игрушки",
    "emoji": "🪁",
    "description": "Послушай новые игрушки.",
    "descriptionRu": "Послушай новые игрушки.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-playground-new-toys-card"
    ],
    "taskIds": [
      "task-vocab-playground-new-toys"
    ]
  },
  {
    "id": "playground-look-toys",
    "worldId": "playground",
    "title": "Look at Lex's toys",
    "titleRu": "Посмотри на игрушки Лекса",
    "emoji": "🧸",
    "description": "Нельзя идти на площадку без игрушек. Посмотри, что у Лекса с собой.",
    "descriptionRu": "Нельзя идти на площадку без игрушек. Посмотри, что у Лекса с собой.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "requiredCompletedSceneIds": [],
    "taskIds": [
      "task-playground-article-car",
      "task-playground-article-train",
      "task-playground-article-doll",
      "task-playground-article-airplane"
    ],
    "grammarCardBeforeId": "card-playground-articles",
    "vocabCardAfterId": "vocab-playground-toys-card",
    "completionImage": "/images/playground/toys-basic.png",
    "completionTitle": "Toys are ready!",
    "completionText": "Игрушки Лекса готовы.",
    "lexBefore": "Нельзя идти на площадку без своих игрушек, давай посмотрим что у меня с собой!",
    "lexAfter": "И как будем делить их?"
  },
  {
    "id": "playground-choose-toy",
    "worldId": "playground",
    "title": "Choose a toy",
    "titleRu": "Выбери игрушку",
    "emoji": "🪆",
    "description": "Лекс делится игрушками. Выберите, чем играть.",
    "descriptionRu": "Лекс делится игрушками. Выберите, чем играть.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-look-toys"
    ],
    "taskIds": [
      "task-playground-toy-doll",
      "task-playground-toy-doll-fill",
      "task-playground-toy-train",
      "task-playground-toy-train-fill",
      "task-playground-toy-airplane",
      "task-playground-toy-airplane-fill",
      "task-playground-toy-car",
      "task-playground-toy-car-fill"
    ],
    "completionImage": "/images/playground/toys-basic.png",
    "completionTitle": "Toys shared!",
    "completionText": "Вы поделили игрушки.",
    "lexAfter": "Не переживай! Если захочешь поиграть моими игрушками, я с тобой поделюсь. Смотри, у ребят есть такие игрушки как у нас! Давай посмотрим сколько чего."
  },
  {
    "id": "playground-count-toys",
    "worldId": "playground",
    "title": "Count toys",
    "titleRu": "Посчитай игрушки",
    "emoji": "🚂",
    "description": "Сколько игрушек на площадке? Потренируй множественное число.",
    "descriptionRu": "Сколько игрушек на площадке? Потренируй множественное число.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "requiredCompletedSceneIds": [
      "playground-choose-toy"
    ],
    "taskIds": [
      "task-playground-count-cars",
      "task-playground-count-cars-s",
      "task-playground-count-trains",
      "task-playground-count-trains-s",
      "task-playground-count-dolls",
      "task-playground-count-dolls-s",
      "task-playground-count-airplanes",
      "task-playground-count-airplanes-s"
    ],
    "grammarCardBeforeId": "card-playground-plural",
    "completionImage": "/images/playground/playground-sandbox-scene.png",
    "completionTitle": "Toys counted!",
    "completionText": "Игрушки посчитаны.",
    "lexAfter": "Давай поиграем в песочнице. Я договорился с ребятами, выложим туда все наши игрушки.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-sandbox",
    "worldId": "playground",
    "title": "Put toys in the sandbox",
    "titleRu": "Положи игрушки в песочницу",
    "emoji": "🏖️",
    "description": "Выкладывайте игрушки в песочницу по очереди.",
    "descriptionRu": "Выкладывайте игрушки в песочницу по очереди.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-count-toys"
    ],
    "taskIds": [
      "task-playground-sandbox-plane1",
      "task-playground-sandbox-planes",
      "task-playground-sandbox-trains2",
      "task-playground-sandbox-train1",
      "task-playground-sandbox-doll",
      "task-playground-sandbox-cars3"
    ],
    "completionImage": "/images/playground/sandbox-final.png",
    "completionTitle": "Sandbox is full!",
    "completionText": "Игрушки в песочнице.",
    "lexAfter": "Ну, так, отлично! Скажу по сикрету, я не различаю цвета :( можешь помочь мне и рассказать, какие игрушки?",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-colors",
    "worldId": "playground",
    "title": "Describe toy colors",
    "titleRu": "Опиши цвета игрушек",
    "emoji": "🎨",
    "description": "Лекс не различает цвета. Помоги ему.",
    "descriptionRu": "Лекс не различает цвета. Помоги ему.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-sandbox"
    ],
    "taskIds": [
      "task-playground-color-doll",
      "task-playground-color-car-red",
      "task-playground-color-car-blue",
      "task-playground-color-car-green",
      "task-playground-color-train",
      "task-playground-color-airplane"
    ],
    "grammarCardBeforeId": "card-playground-colors",
    "completionImage": "/images/playground/sandbox-final.png",
    "completionTitle": "Colors helped!",
    "completionText": "Лекс узнал цвета игрушек.",
    "lexAfter": "Спасибо, я теперь как будто вижу цвета сам. Но давай опишем и ребят, хочу уже подружиться с кем-нибудь.",
    "vocabCardBeforeId": "vocab-playground-colors-card",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-describe-kids",
    "worldId": "playground",
    "title": "Describe playground kids",
    "titleRu": "Опиши ребят",
    "emoji": "👧",
    "description": "Опиши ребят, с которыми играешь. Можно узнать слова для описания в Café и Zoo.",
    "descriptionRu": "Опиши ребят, с которыми играешь. Можно узнать слова для описания в Café и Zoo.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "playground-colors"
    ],
    "taskIds": [
      "task-playground-pronoun-she",
      "task-playground-pronoun-it",
      "task-playground-pronoun-he",
      "task-playground-kid-alena",
      "task-playground-kid-age-boy",
      "task-playground-kid-she-beautiful",
      "task-playground-kid-he-short",
      "task-playground-kid-she-four",
      "task-playground-kid-he-five",
      "task-playground-kid-she-tall",
      "task-playground-kid-he-beautiful"
    ],
    "grammarCardBeforeId": "card-is",
    "completionImage": "/images/playground/kids-sandbox.png",
    "completionTitle": "Kids described!",
    "completionText": "Ребята на площадке описаны.",
    "lexAfter": "Ребята вообще классные, но надо же про себя тоже рассказать, чего мы молчим.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-about-me",
    "worldId": "playground",
    "title": "Tell about yourself",
    "titleRu": "Расскажи о себе",
    "emoji": "🙋",
    "description": "Познакомься с ребятами и расскажи о себе.",
    "descriptionRu": "Познакомься с ребятами и расскажи о себе.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "requiredCompletedSceneIds": [
      "playground-describe-kids"
    ],
    "taskIds": [
      "task-playground-me-age",
      "task-playground-me-boy",
      "task-playground-me-girl",
      "task-playground-me-name"
    ],
    "grammarCardBeforeId": "card-to-be",
    "completionTitle": "Nice to meet you!",
    "completionText": "Ты рассказал о себе.",
    "lexAfter": "Отлично! Мы познакомились, у нас появились новые друзья. Но давай пойдем поиграем в другое место. Я уже весь в песке.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-meet-kids",
    "worldId": "playground",
    "title": "Meet new kids",
    "titleRu": "Познакомься с ребятами",
    "emoji": "👋",
    "description": "Познакомься с ребятами на пледе.",
    "descriptionRu": "Познакомься с ребятами на пледе.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-about-me"
    ],
    "taskIds": [
      "task-playground-hi",
      "task-playground-i",
      "task-playground-meet-name",
      "task-playground-lex",
      "task-playground-kate",
      "task-playground-kate-age",
      "task-playground-kate-beautiful",
      "task-playground-max",
      "task-playground-max-age",
      "task-playground-max-tall"
    ],
    "completionImage": "/images/playground/playground-groups.png",
    "completionTitle": "New friends!",
    "completionText": "Вы познакомились с ребятами.",
    "lexAfter": "Эти ребята тоже классные! Давай поиграем с ними в кубики! Кстати, кубик — это a cube.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-blocks",
    "worldId": "playground",
    "title": "Build a cube tower",
    "titleRu": "Игра в кубики",
    "emoji": "🧱",
    "description": "Построй башню нужного цвета.",
    "descriptionRu": "Построй башню нужного цвета.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-meet-kids"
    ],
    "taskIds": [
      "task-playground-block-pink",
      "task-playground-block-red",
      "task-playground-block-blue1",
      "task-playground-block-green",
      "task-playground-block-blue2"
    ],
    "completionImage": "/images/playground/blocks-final.png",
    "completionTitle": "Tower is ready!",
    "completionText": "Башня из кубиков готова.",
    "lexAfter": "Блин, это прикольная игра, но я не могу в неё играть, я же не отличаю цвета. Пойдем лучше найдем новые игрушки для игры.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-new-toys",
    "worldId": "playground",
    "title": "Find new toys",
    "titleRu": "Найди новые игрушки",
    "emoji": "🪁",
    "description": "Найди новые игрушки для игры.",
    "descriptionRu": "Найди новые игрушки для игры.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-blocks"
    ],
    "taskIds": [
      "task-playground-new-ball",
      "task-playground-new-ball-fill",
      "task-playground-new-kite",
      "task-playground-new-kite-fill",
      "task-playground-new-loop",
      "task-playground-new-loop-fill",
      "task-playground-new-bike",
      "task-playground-new-bike-fill"
    ],
    "vocabCardBeforeId": "vocab-playground-new-toys-card",
    "completionImage": "/images/playground/toys-full-truck.png",
    "completionTitle": "New toys found!",
    "completionText": "Новые игрушки найдены.",
    "lexAfter": "А давай поиграем в магазин! Пойдём обменивать игрушки с ребятами и посмотрим, что у нас в конце останется!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-toy-shop",
    "worldId": "playground",
    "title": "Toy shop",
    "titleRu": "Сыграй в магазин",
    "emoji": "🛒",
    "description": "Обменивай игрушки с ребятами. Правильного ответа нет.",
    "descriptionRu": "Обменивай игрушки с ребятами. Правильного ответа нет.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-new-toys"
    ],
    "taskIds": [
      "task-playground-shop-1",
      "task-playground-shop-2",
      "task-playground-shop-3",
      "task-playground-shop-4",
      "task-playground-shop-5",
      "task-playground-shop-6",
      "task-playground-shop-7",
      "task-playground-shop-8"
    ],
    "completionImage": "/images/playground/toys-full-truck.png",
    "completionTitle": "Toy trade!",
    "completionText": "О, ты получил новую игрушку!",
    "lexAfter": "Да уж, в итоге у меня a red car, но я доволен! Все ребята такие разные и все по группам, я хочу нарисовать их.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-draw-groups",
    "worldId": "playground",
    "title": "Describe playground kids",
    "titleRu": "Опиши ребят",
    "emoji": "👥",
    "description": "Лекс хочет нарисовать ребят по группам.",
    "descriptionRu": "Лекс хочет нарисовать ребят по группам.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "playground-toy-shop"
    ],
    "taskIds": [
      "task-playground-groups-they",
      "task-playground-groups-we",
      "task-playground-groups-you",
      "task-playground-groups-children-they",
      "task-playground-groups-children-we",
      "task-playground-groups-age-you",
      "task-playground-groups-tall-they",
      "task-playground-groups-beautiful-we",
      "task-playground-groups-short-you"
    ],
    "grammarCardBeforeId": "card-are",
    "completionImage": "/images/playground/playground-drawing-colored.png",
    "completionTitle": "Picture is ready!",
    "completionText": "Лекс нарисовал площадку.",
    "lexAfter": "Вот такая картинка получилась, надеюсь тебе понравилась. Теперь ты тоже раскрась что-то.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-color-easy",
    "worldId": "playground",
    "title": "Color the picture: easy",
    "titleRu": "Раскрась картинку: easy",
    "emoji": "🖍️",
    "description": "Нажимай на подходящий вариант к предложению.",
    "descriptionRu": "Нажимай на подходящий вариант к предложению.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-draw-groups"
    ],
    "taskIds": [
      "task-playground-coloring-easy-1",
      "task-playground-coloring-easy-2",
      "task-playground-coloring-easy-3",
      "task-playground-coloring-easy-4",
      "task-playground-coloring-easy-5",
      "task-playground-coloring-easy-6",
      "task-playground-coloring-easy-7"
    ],
    "completionImage": "/images/playground/coloring-easy-final.png",
    "completionTitle": "Picture colored!",
    "completionText": "Ты аккуратно раскрасил картинку.",
    "lexAfter": "Вау, ты так аккуратно раскрасил, очень красиво!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-color-medium",
    "worldId": "playground",
    "title": "Color the picture: medium",
    "titleRu": "Раскрась картинку: medium",
    "emoji": "🖍️",
    "description": "Дополнительная сложная раскраска с частичными подсказками.",
    "descriptionRu": "Дополнительная сложная раскраска с частичными подсказками.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-color-easy"
    ],
    "taskIds": [
      "task-playground-coloring-medium-1",
      "task-playground-coloring-medium-2",
      "task-playground-coloring-medium-3",
      "task-playground-coloring-medium-4",
      "task-playground-coloring-medium-5",
      "task-playground-coloring-medium-6"
    ],
    "completionImage": "/images/playground/coloring-medium-final.png",
    "completionTitle": "Medium picture colored!",
    "completionText": "Ты справился со сложной раскраской.",
    "lexAfter": "Тебе пришлось потрудиться, и получилось очень красиво!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-color-hard",
    "worldId": "playground",
    "title": "Color the picture: hard",
    "titleRu": "Раскрась картинку: hard",
    "emoji": "🖍️",
    "description": "Дополнительная раскраска без подсказок.",
    "descriptionRu": "Дополнительная раскраска без подсказок.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-color-medium"
    ],
    "taskIds": [
      "task-playground-coloring-hard-1",
      "task-playground-coloring-hard-2",
      "task-playground-coloring-hard-3",
      "task-playground-coloring-hard-4",
      "task-playground-coloring-hard-5",
      "task-playground-coloring-hard-6"
    ],
    "completionImage": "/images/playground/coloring-hard-final.png",
    "completionTitle": "Hard picture colored!",
    "completionText": "Ты сделал сложную раскраску.",
    "lexAfter": "Как ты это сделал, я в шоке, и сложно и красиво. Ты такой умничка!",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "playground-go-home",
    "worldId": "playground",
    "title": "Time to go home",
    "titleRu": "Пора домой",
    "emoji": "🌙",
    "description": "Поздно, пора домой. Повтори всё, что изучали на площадке.",
    "descriptionRu": "Поздно, пора домой. Повтори всё, что изучали на площадке.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredCompletedSceneIds": [
      "playground-color-easy"
    ],
    "taskIds": [
      "task-playground-final-1",
      "task-playground-final-2",
      "task-playground-final-3",
      "task-playground-final-4",
      "task-playground-final-5",
      "task-playground-final-6",
      "task-playground-final-7",
      "task-playground-final-8"
    ],
    "completionImage": "/images/playground/play-buddy-bracelet.png",
    "completionTitle": "LET'S PLAY!",
    "completionText": "Ты получил Браслет игрового друга! Он помогает звать друзей в игры и вспоминать игрушки на площадке.",
    "achievementAfterId": "play-buddy-bracelet",
    "lexBefore": "Ой, мы так наигрались и набегались, я бы ещё и ещё, но ребята расходятся, нам тоже пора. Давай последний раз посмотрим, что делали сегодня.",
    "lexAfter": "Ну ладно, всё на сегодня. Спасибо за этот день, он был шикарный.",
    "requiredAnyCompletedSceneIds": [],
    "requiredVocabCardIds": []
  },
  {
    "id": "vocab-garden-park-nature",
    "worldId": "vocabulary",
    "title": "Park words",
    "titleRu": "Слова парка",
    "emoji": "🌳",
    "description": "Слова парка: tree, ice cream, dog, flower.",
    "descriptionRu": "Нажми слова и послушай.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-park-nature-card"
    ],
    "taskIds": [
      "task-vocab-park-nature"
    ]
  },
  {
    "id": "vocab-garden-park-weather",
    "worldId": "vocabulary",
    "title": "Weather",
    "titleRu": "Погода",
    "emoji": "☀️",
    "description": "sunny, rainy, hot, cold.",
    "descriptionRu": "Нажми слова и послушай.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [],
    "requiredVocabCardIds": [
      "vocab-park-weather-card"
    ],
    "taskIds": [
      "task-vocab-park-weather"
    ]
  },
  {
    "id": "park-walk",
    "worldId": "park",
    "title": "Walk in the park",
    "titleRu": "Пойдём пройдёмся по парку",
    "emoji": "🌳",
    "description": "Learn park words with a / an.",
    "descriptionRu": "Дерево, мороженое, собачка и цветок.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "taskIds": [
      "task-park-choose-dog",
      "task-park-fill-dog",
      "task-park-choose-icecream",
      "task-park-fill-icecream",
      "task-park-choose-tree",
      "task-park-fill-tree",
      "task-park-choose-flower",
      "task-park-fill-flower",
      "task-park-match-nature"
    ],
    "grammarCardBeforeId": "card-park-articles",
    "vocabCardAfterId": "vocab-park-nature-card",
    "completionImage": "/images/park/park-vocab-nature.jpg",
    "completionTitle": "Park words!",
    "completionText": "Ты узнала первые слова парка.",
    "lexAfter": "Какая классная прогулка! Столько всего нового! Но давай лучше поиграем, чур ты ищешь."
  },
  {
    "id": "park-hide-seek",
    "worldId": "park",
    "title": "Hide and seek",
    "titleRu": "Сыграем в прятки",
    "emoji": "🦊",
    "description": "Find where Lex is hiding.",
    "descriptionRu": "Найди, где прячется Лекс.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles"
    ],
    "requiredCompletedSceneIds": [
      "park-walk"
    ],
    "taskIds": [
      "task-park-hide-flower",
      "task-park-hide-tree",
      "task-park-hide-icecream",
      "task-park-hide-dog"
    ],
    "completionImage": "/images/park/lex-dog.jpg",
    "completionTitle": "Found Lex!",
    "completionText": "Ты нашла Лекса в парке.",
    "lexAfter": "О, ты нашёл меня где бы я ни спрятался! Пока мы бегали, так много предметов появилось. Давай посмотрим."
  },
  {
    "id": "park-many-things",
    "worldId": "park",
    "title": "Look how many!",
    "titleRu": "Ой, посмотри как их много",
    "emoji": "🌸",
    "description": "Practise plural -s with park words.",
    "descriptionRu": "Собачки, мороженые, деревья и цветочки.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "plural"
    ],
    "requiredCompletedSceneIds": [
      "park-hide-seek"
    ],
    "taskIds": [
      "task-park-count-dogs",
      "task-park-fill-dogs",
      "task-park-count-icecreams",
      "task-park-fill-icecreams",
      "task-park-count-trees",
      "task-park-fill-trees",
      "task-park-count-flowers",
      "task-park-fill-flowers"
    ],
    "grammarCardBeforeId": "card-park-plural",
    "completionImage": "/images/park/park-many-things.jpg",
    "completionTitle": "Many things!",
    "completionText": "В парке стало больше предметов.",
    "lexAfter": "Смотри, кто это там! Так это садовник Ben, мой старый друг. Пойдём, ты познакомишься с ним."
  },
  {
    "id": "park-meet-ben",
    "worldId": "park",
    "title": "Meet gardener Ben",
    "titleRu": "Познакомься с садовником",
    "emoji": "👨‍🌾",
    "description": "Introduce yourself to Ben.",
    "descriptionRu": "Скажи имя и возраст.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "to_be"
    ],
    "requiredCompletedSceneIds": [
      "park-many-things"
    ],
    "taskIds": [
      "task-park-hi",
      "task-park-i-am-lex",
      "task-park-i-am",
      "task-park-name",
      "task-park-age-pick",
      "task-park-age-fill",
      "task-park-boy-girl"
    ],
    "grammarCardBeforeId": "card-to-be",
    "completionImage": "/images/park/gardener-ben.jpg",
    "completionTitle": "Nice to meet Ben!",
    "completionText": "Ты познакомилась с садовником.",
    "lexAfter": "Он такой прикольный, пойдём поможем ему по парку."
  },
  {
    "id": "park-help-ben",
    "worldId": "park",
    "title": "Help Ben",
    "titleRu": "Помоги Бену",
    "emoji": "🪴",
    "description": "Use she is, he is, it is and plural.",
    "descriptionRu": "Назови помощников Бена.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-meet-ben"
    ],
    "taskIds": [
      "task-park-pronoun-girl",
      "task-park-pronoun-boy",
      "task-park-pronoun-dog",
      "task-park-flowers-fill"
    ],
    "grammarCardBeforeId": "card-is",
    "completionImage": "/images/park/ben-helpers.jpg",
    "completionTitle": "Ben has helpers!",
    "completionText": "Ты помогла Бену назвать помощников.",
    "lexAfter": "Блин, такая погода хорошая, а как сказать какая погода-то... подожди, у меня было что-то об этом."
  },
  {
    "id": "park-describe-helpers",
    "worldId": "park",
    "title": "Describe Ben's helpers",
    "titleRu": "Опиши помощников Бена",
    "emoji": "👧",
    "description": "Describe Kate, Max and the dog.",
    "descriptionRu": "Она Катя, он Макс, это собачка.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-help-ben"
    ],
    "taskIds": [
      "task-park-kate",
      "task-park-kate-age",
      "task-park-kate-beautiful",
      "task-park-max",
      "task-park-max-age",
      "task-park-max-tall",
      "task-park-dog-it",
      "task-park-dog-age",
      "task-park-dog-short"
    ],
    "completionImage": "/images/park/ben-helpers.jpg",
    "completionTitle": "Helpers described!",
    "completionText": "Ты описала помощников Бена.",
    "lexAfter": "Такие классные помощники у Бена. Может и с ними подружимся?"
  },
  {
    "id": "park-weather",
    "worldId": "park",
    "title": "Learn the weather",
    "titleRu": "Узнай погоду",
    "emoji": "☀️",
    "description": "sunny, rainy, hot, cold.",
    "descriptionRu": "Учимся говорить про погоду.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-describe-helpers"
    ],
    "taskIds": [
      "task-park-weather-sunny",
      "task-park-weather-rainy",
      "task-park-weather-hot",
      "task-park-weather-cold"
    ],
    "grammarCardBeforeId": "card-park-weather",
    "completionImage": "/images/park/weather-collage.jpg",
    "completionTitle": "Weather words!",
    "completionText": "Ты узнала слова про погоду.",
    "lexAfter": "Моя любимая weather это sunny. А у тебя?"
  },
  {
    "id": "park-lex-weather",
    "worldId": "park",
    "title": "Look at Lex",
    "titleRu": "Посмотри на Лекса",
    "emoji": "🦊",
    "description": "Say what the weather is.",
    "descriptionRu": "Посмотри на Лекса и скажи погоду.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "is_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-weather"
    ],
    "taskIds": [
      "task-park-lex-sunny",
      "task-park-lex-rainy",
      "task-park-lex-hot",
      "task-park-lex-cold"
    ],
    "completionImage": "/images/park/lex-cold.jpg",
    "completionTitle": "Lex weather!",
    "completionText": "Ты поняла, какая погода у Лекса.",
    "lexAfter": "Смотри, проходят соревнования по обустройству парка. Давай запишемся в команду."
  },
  {
    "id": "park-team",
    "worldId": "park",
    "title": "Park competition team",
    "titleRu": "Соревнования по обустройству парка",
    "emoji": "🏆",
    "description": "Use we are, they are, you are.",
    "descriptionRu": "Собираем команду для конкурса.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-lex-weather"
    ],
    "taskIds": [
      "task-park-are-they",
      "task-park-are-we",
      "task-park-are-you",
      "task-park-are-match"
    ],
    "grammarCardBeforeId": "card-are",
    "completionImage": "/images/park/park-competition.jpg",
    "completionTitle": "Team ready!",
    "completionText": "У нас есть команда.",
    "lexAfter": "Отлично, у нас есть команда и мы знаем как описывать. Го на конкурс!"
  },
  {
    "id": "park-describe-teams",
    "worldId": "park",
    "title": "Describe teams",
    "titleRu": "1 этап соревнования. Описывание команд",
    "emoji": "👥",
    "description": "Describe teams in the park.",
    "descriptionRu": "Они дети, мы дети, ты Бен.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-team"
    ],
    "taskIds": [
      "task-park-team-children-they",
      "task-park-team-age-they",
      "task-park-team-short-they",
      "task-park-team-children-we",
      "task-park-team-age-we",
      "task-park-team-beautiful-we",
      "task-park-team-you-ben",
      "task-park-team-ben-age",
      "task-park-team-he-gardener"
    ],
    "completionImage": "/images/park/park-competition.jpg",
    "completionTitle": "Stage 1 done!",
    "completionText": "Команды описаны.",
    "lexAfter": "1 этап прошёл отлично! Давай также круто и на 2."
  },
  {
    "id": "park-final",
    "worldId": "park",
    "title": "Describe the park",
    "titleRu": "Финал соревнования. Описывание парка",
    "emoji": "🌱",
    "description": "Review park words and grammar.",
    "descriptionRu": "Повтори парк: a/an, plural, am, is, are, weather.",
    "requiredXp": 0,
    "requiredGrammarSkillIds": [
      "articles",
      "plural",
      "to_be",
      "is_intro",
      "are_intro"
    ],
    "requiredCompletedSceneIds": [
      "park-describe-teams"
    ],
    "taskIds": [
      "task-park-final-1",
      "task-park-final-2",
      "task-park-final-3",
      "task-park-final-4",
      "task-park-final-5",
      "task-park-final-6",
      "task-park-final-7",
      "task-park-final-8"
    ],
    "completionImage": "/images/park/park-competition.jpg",
    "completionTitle": "Park winners!",
    "completionText": "Ты получил Мешочек словесных семян! С его помощью можно выращивать новые слова в Vocabulary Garden.",
    "achievementAfterId": "word-seeds-pouch",
    "toastAfter": "В мирах появились новые задания, посмотри!",
    "lexAfter": "Отлично! Мы победили! Мы такие крутые, смотри что нам дал Gardener Ben."
  }
];
const tasks = [
  {
    "id": "task-cafe-snack-1",
    "sceneId": "cafe-find-snack",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: банан",
    "instruction": "Выбери: банан.",
    "choices": [
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "emoji": "🍌",
      "title": "",
      "caption": "Выполни задание и получи XP."
    }
  },
  {
    "id": "task-cafe-snack-2",
    "sceneId": "cafe-find-snack",
    "type": "click_object",
    "skillId": "articles",
    "prompt": "Choose: яблоко",
    "instruction": "Выбери: яблоко.",
    "objects": [
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕"
      },
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎"
      },
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌"
      }
    ],
    "correctObjectId": "apple",
    "visual": {
      "emoji": "🍎",
      "title": "",
      "caption": "Выполни задание и получи XP."
    }
  },
  {
    "id": "task-cafe-snack-3",
    "sceneId": "cafe-find-snack",
    "type": "click_object",
    "skillId": "articles",
    "prompt": "Choose: пицца",
    "instruction": "Выбери: пицца.",
    "objects": [
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌"
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕"
      },
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎"
      }
    ],
    "correctObjectId": "pizza",
    "visual": {
      "emoji": "🍕",
      "title": "",
      "caption": "Выполни задание и получи XP."
    }
  },
  {
    "id": "task-cafe-clean-1",
    "sceneId": "cafe-clean-table",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ banana.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "banana. 🍌",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-table.png"
    }
  },
  {
    "id": "task-cafe-clean-apple",
    "sceneId": "cafe-clean-table",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ apple.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "apple. 🍎",
    "acceptedAnswers": [
      "an"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-table.png"
    }
  },
  {
    "id": "task-cafe-clean-pizza",
    "sceneId": "cafe-clean-table",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ pizza.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "pizza. 🍕",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-table.png"
    }
  },
  {
    "id": "task-cafe-clean-2",
    "sceneId": "cafe-clean-table",
    "type": "match_word_image",
    "skillId": "articles",
    "prompt": "Match words and pictures",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "banana",
        "word": "It is a banana",
        "image": "🍌"
      },
      {
        "id": "apple",
        "word": "It is an apple",
        "image": "🍎"
      },
      {
        "id": "pizza",
        "word": "It is a pizza",
        "image": "🍕"
      }
    ],
    "visual": {
      "image": "/images/cafe/snacks-on-table.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-cafe-fridge-1",
    "sceneId": "cafe-fridge-snacks",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ apple.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "apple. 🍎",
    "acceptedAnswers": [
      "an"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-fridge-2",
    "sceneId": "cafe-fridge-snacks",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: яблоко",
    "instruction": "Выбери: яблоко.",
    "choices": [
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-fridge-3",
    "sceneId": "cafe-fridge-snacks",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ banana.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "banana. 🍌",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-fridge-4",
    "sceneId": "cafe-fridge-snacks",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: банан",
    "instruction": "Выбери: банан.",
    "choices": [
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-fridge-5",
    "sceneId": "cafe-fridge-snacks",
    "type": "fill_blank",
    "skillId": "articles",
    "prompt": "It is ___ pizza.",
    "instruction": "Впиши a или an.",
    "sentenceBefore": "It is",
    "sentenceAfter": "pizza. 🍕",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-fridge-6",
    "sceneId": "cafe-fridge-snacks",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: пицца",
    "instruction": "Выбери: пицца.",
    "choices": [
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/snacks-on-plate.png",
      "title": "Snacks on the plate",
      "caption": "Снеки на тарелке."
    }
  },
  {
    "id": "task-cafe-pizza-1",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 2 винограда",
    "instruction": "Выбери 2 винограда.",
    "choices": [
      {
        "id": "one-grape",
        "label": "It is a grape",
        "image": "🍇",
        "isCorrect": false
      },
      {
        "id": "two-grapes",
        "label": "2 grapes",
        "image": "🍇🍇",
        "isCorrect": true
      },
      {
        "id": "two-pears",
        "label": "2 pears",
        "image": "🍐🍐",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-cafe-pizza-2",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "fill_blank",
    "skillId": "plural",
    "prompt": "2 grape___",
    "instruction": "Сделай множественное число.",
    "sentenceBefore": "2 grape",
    "sentenceAfter": "🍇🍇",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": ""
  },
  {
    "id": "task-cafe-pizza-3",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 3 апельсина",
    "instruction": "Выбери 3 апельсина.",
    "choices": [
      {
        "id": "one-orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": false
      },
      {
        "id": "three-oranges",
        "label": "3 oranges",
        "image": "🍊🍊🍊",
        "isCorrect": true
      },
      {
        "id": "three-apples",
        "label": "3 apples",
        "image": "🍎🍎🍎",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-cafe-pizza-4",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "fill_blank",
    "skillId": "plural",
    "prompt": "3 orange___",
    "instruction": "Сделай множественное число.",
    "sentenceBefore": "3 orange",
    "sentenceAfter": "🍊🍊🍊",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": ""
  },
  {
    "id": "task-cafe-pizza-5",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 2 груши",
    "instruction": "Выбери 2 груши.",
    "choices": [
      {
        "id": "two-bananas",
        "label": "2 bananas",
        "image": "🍌🍌",
        "isCorrect": false
      },
      {
        "id": "one-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      },
      {
        "id": "two-pears",
        "label": "2 pears",
        "image": "🍐🍐",
        "isCorrect": true
      }
    ]
  },
  {
    "id": "task-cafe-pizza-6",
    "sceneId": "cafe-make-fruit-pizza",
    "type": "fill_blank",
    "skillId": "plural",
    "prompt": "2 pear___",
    "instruction": "Сделай множественное число.",
    "sentenceBefore": "2 pear",
    "sentenceAfter": "🍐🍐",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": ""
  },
  {
    "id": "task-cafe-counter-1",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: яблоко",
    "instruction": "Прилавок пустой. Выбери 1 яблоко.",
    "choices": [
      {
        "id": "an-apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "two-apples",
        "label": "They are 2 apples",
        "image": "🍎🍎",
        "isCorrect": false
      },
      {
        "id": "a-banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-empty.jpg",
      "title": "Empty counter",
      "caption": "Прилавок пустой."
    }
  },
  {
    "id": "task-cafe-counter-2",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 2 яблока",
    "instruction": "Добавь 2 яблока.",
    "choices": [
      {
        "id": "an-apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "two-apples",
        "label": "They are 2 apples",
        "image": "🍎🍎",
        "isCorrect": true
      },
      {
        "id": "two-oranges",
        "label": "They are 2 oranges",
        "image": "🍊🍊",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-apple.jpg",
      "title": "Counter",
      "caption": "На прилавке 1 яблоко."
    }
  },
  {
    "id": "task-cafe-counter-3",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: апельсин",
    "instruction": "Выбери 1 апельсин.",
    "choices": [
      {
        "id": "a-orange",
        "label": "It is a orange",
        "image": "🍊",
        "isCorrect": false
      },
      {
        "id": "an-orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "oranges",
        "label": "They are oranges",
        "image": "🍊🍊🍊",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-apples.jpg",
      "title": "Counter",
      "caption": "На прилавке яблоки."
    }
  },
  {
    "id": "task-cafe-counter-4",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 4 апельсина",
    "instruction": "Добавь 4 апельсина.",
    "choices": [
      {
        "id": "an-orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": false
      },
      {
        "id": "four-oranges",
        "label": "They are 4 oranges",
        "image": "🍊🍊🍊🍊",
        "isCorrect": true
      },
      {
        "id": "four-apples",
        "label": "They are 4 apples",
        "image": "🍎🍎🍎🍎",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-orange.jpg",
      "title": "Counter",
      "caption": "Добавляем апельсин."
    }
  },
  {
    "id": "task-cafe-counter-5",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: банан",
    "instruction": "Выбери 1 банан.",
    "choices": [
      {
        "id": "a-banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "bananas",
        "label": "They are bananas",
        "image": "🍌🍌🍌",
        "isCorrect": false
      },
      {
        "id": "an-apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-oranges.jpg",
      "title": "Counter",
      "caption": "Апельсины на месте."
    }
  },
  {
    "id": "task-cafe-counter-6",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 3 банана",
    "instruction": "Добавь 3 банана.",
    "choices": [
      {
        "id": "a-banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      },
      {
        "id": "three-bananas",
        "label": "They are 3 bananas",
        "image": "🍌🍌🍌",
        "isCorrect": true
      },
      {
        "id": "three-pears",
        "label": "They are 3 pears",
        "image": "🍐🍐🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-banana.jpg",
      "title": "Counter",
      "caption": "Добавляем банан."
    }
  },
  {
    "id": "task-cafe-counter-7",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: виноград",
    "instruction": "Выбери 1 виноградину.",
    "choices": [
      {
        "id": "a-grape",
        "label": "It is a grape",
        "image": "🍇",
        "isCorrect": true
      },
      {
        "id": "grapes",
        "label": "They are grapes",
        "image": "🍇🍇🍇",
        "isCorrect": false
      },
      {
        "id": "a-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-bananas.jpg",
      "title": "Counter",
      "caption": "Бананы на месте."
    }
  },
  {
    "id": "task-cafe-counter-8",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 3 виноградины",
    "instruction": "Добавь 3 виноградины.",
    "choices": [
      {
        "id": "a-grape",
        "label": "It is a grape",
        "image": "🍇",
        "isCorrect": false
      },
      {
        "id": "three-grapes",
        "label": "They are 3 grapes",
        "image": "🍇🍇🍇",
        "isCorrect": true
      },
      {
        "id": "three-oranges",
        "label": "They are 3 oranges",
        "image": "🍊🍊🍊",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-grape.jpg",
      "title": "Counter",
      "caption": "Добавляем виноград."
    }
  },
  {
    "id": "task-cafe-counter-9",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: пицца",
    "instruction": "Выбери 1 пиццу.",
    "choices": [
      {
        "id": "a-pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "pizzas",
        "label": "They are pizzas",
        "image": "🍕🍕",
        "isCorrect": false
      },
      {
        "id": "a-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-grapes.jpg",
      "title": "Counter",
      "caption": "Виноград на месте."
    }
  },
  {
    "id": "task-cafe-counter-10",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 4 пиццы",
    "instruction": "Добавь 4 пиццы.",
    "choices": [
      {
        "id": "a-pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      },
      {
        "id": "four-pizzas",
        "label": "They are 4 pizzas",
        "image": "🍕🍕🍕🍕",
        "isCorrect": true
      },
      {
        "id": "four-pears",
        "label": "They are 4 pears",
        "image": "🍐🍐🍐🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-pizza.jpg",
      "title": "Counter",
      "caption": "Добавляем пиццу."
    }
  },
  {
    "id": "task-cafe-counter-11",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Put: груша",
    "instruction": "Выбери 1 грушу.",
    "choices": [
      {
        "id": "a-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": true
      },
      {
        "id": "pears",
        "label": "They are pears",
        "image": "🍐🍐",
        "isCorrect": false
      },
      {
        "id": "an-orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-pizzas.jpg",
      "title": "Counter",
      "caption": "Пицца на месте."
    }
  },
  {
    "id": "task-cafe-counter-12",
    "sceneId": "cafe-prepare-counter",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Put: 5 груш",
    "instruction": "Добавь 5 груш.",
    "choices": [
      {
        "id": "a-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      },
      {
        "id": "five-pears",
        "label": "They are 5 pears",
        "image": "🍐🍐🍐🍐🍐",
        "isCorrect": true
      },
      {
        "id": "five-bananas",
        "label": "They are 5 bananas",
        "image": "🍌🍌🍌🍌🍌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/counter-pear.jpg",
      "title": "Counter",
      "caption": "Добавляем грушу."
    }
  },
  {
    "id": "task-cafe-visitors-1",
    "sceneId": "cafe-meet-visitors",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ Misha.",
    "instruction": "Чтобы рассказать о себе, говорим I am.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-visitors-2",
    "sceneId": "cafe-meet-visitors",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "How old are you?",
    "instruction": "How old are you? Сколько тебе лет?",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "minLength": 1,
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-visitors-3",
    "sceneId": "cafe-meet-visitors",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "prompt": "Choose: Я мальчик",
    "instruction": "Выбери: Я мальчик.",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "pizza",
        "label": "I am a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-visitors-4",
    "sceneId": "cafe-meet-visitors",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "prompt": "Choose: Я девочка",
    "instruction": "Выбери: Я девочка.",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "pear",
        "label": "I am a pear",
        "image": "🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-visitors-5",
    "sceneId": "cafe-meet-visitors",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ a girl.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-visitors-6",
    "sceneId": "cafe-meet-visitors",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "What is your name?",
    "instruction": "Thanks! What is your name? Спасибо! Как тебя зовут?",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 2,
    "successMessagePrefix": "Thanks, ",
    "storeAs": "helperName",
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-sort-1",
    "sceneId": "cafe-sort-snacks",
    "type": "multi_select",
    "skillId": "plural",
    "prompt": "Choose bad snacks",
    "instruction": "Некоторые фрукты испортились. Выбери только испорченные!",
    "choices": [
      {
        "id": "a-apple",
        "label": "It is a apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "an-apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "apples",
        "label": "They are apples",
        "image": "🍎🍎",
        "isCorrect": false
      },
      {
        "id": "an-orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": false
      },
      {
        "id": "oranges",
        "label": "They are oranges",
        "image": "🍊🍊🍊",
        "isCorrect": false
      },
      {
        "id": "a-banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      },
      {
        "id": "bananas",
        "label": "They are bananas",
        "image": "🍌🍌🍌",
        "isCorrect": true
      },
      {
        "id": "a-grape",
        "label": "It is a grape",
        "image": "🍇",
        "isCorrect": false
      },
      {
        "id": "grapes",
        "label": "They are grapes",
        "image": "🍇🍇🍇",
        "isCorrect": false
      },
      {
        "id": "a-pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      },
      {
        "id": "pizzas",
        "label": "They are pizzas",
        "image": "🍕🍕",
        "isCorrect": false
      },
      {
        "id": "a-pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      },
      {
        "id": "pears",
        "label": "They are pears",
        "image": "🍐🍐🍐",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/spoiled-snacks.jpg",
      "title": "Urgent task",
      "caption": "Срочное задание: некоторые фрукты испортились."
    }
  },
  {
    "id": "task-cafe-sort-2",
    "sceneId": "cafe-sort-snacks",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "Thanks! What is your name?",
    "instruction": "Thanks! What is your name? Спасибо! Как тебя зовут?",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 2,
    "successMessagePrefix": "Thanks, ",
    "storeAs": "helperName",
    "visual": {
      "image": "/images/cafe/spoiled-snacks.jpg",
      "title": "Urgent task",
      "caption": "Срочное задание: некоторые фрукты испортились."
    }
  },
  {
    "id": "task-cafe-sort-3",
    "sceneId": "cafe-sort-snacks",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___.",
    "instruction": "How old are you? Сколько тебе лет?",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/spoiled-snacks.jpg",
      "title": "Urgent task",
      "caption": "Срочное задание: некоторые фрукты испортились."
    }
  },
  {
    "id": "task-cafe-sort-4",
    "sceneId": "cafe-sort-snacks",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "I am ___.",
    "instruction": "Теперь напиши свой возраст цифрой.",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "minLength": 1,
    "visual": {
      "image": "/images/cafe/spoiled-snacks.jpg",
      "title": "Urgent task",
      "caption": "Срочное задание: некоторые фрукты испортились."
    }
  },
  {
    "id": "task-cafe-sort-5",
    "sceneId": "cafe-sort-snacks",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "prompt": "Choose: Я мальчик / Я девочка",
    "instruction": "Выбери фразу про себя.",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/spoiled-snacks.jpg",
      "title": "Urgent task",
      "caption": "Срочное задание: некоторые фрукты испортились."
    }
  },
  {
    "id": "task-cafe-look-1",
    "sceneId": "cafe-look-visitors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "Choose: девочку",
    "instruction": "Выбери девочку.",
    "choices": [
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "pizza",
        "label": "It is",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-look-2",
    "sceneId": "cafe-look-visitors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "Choose: мальчика",
    "instruction": "Выбери мальчика.",
    "choices": [
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "pear",
        "label": "It is",
        "image": "🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-look-3",
    "sceneId": "cafe-look-visitors",
    "type": "multi_select",
    "skillId": "is_intro",
    "prompt": "Choose: как скажем про пиццу, грушу и виноград",
    "instruction": "Выбери, как говорим про разные предметы: пиццу, грушу и виноград.",
    "choices": [
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": true
      },
      {
        "id": "grape",
        "label": "It is a grape",
        "image": "🍇",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-look-4",
    "sceneId": "cafe-look-visitors",
    "type": "match_word_image",
    "skillId": "is_intro",
    "prompt": "Match: she / he / it",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "she",
        "word": "She is",
        "image": "👧"
      },
      {
        "id": "he",
        "word": "He is",
        "image": "👦"
      },
      {
        "id": "it",
        "word": "It is",
        "image": "🍕"
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    },
    "shufflePictures": true
  },
  {
    "id": "task-cafe-adj-1",
    "sceneId": "cafe-notice-visitors",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "beautiful",
        "word": "beautiful",
        "image": "🌸"
      },
      {
        "id": "ugly",
        "word": "ugly",
        "image": "🧌"
      },
      {
        "id": "tall",
        "word": "tall",
        "image": "🦒"
      },
      {
        "id": "short",
        "word": "short",
        "image": "🐭"
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-basic.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short"
    },
    "shufflePictures": true
  },
  {
    "id": "task-cafe-adj-2",
    "sceneId": "cafe-notice-visitors",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "She is ___.",
    "instruction": "Выбери: она красивая.",
    "choices": [
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-adj-3",
    "sceneId": "cafe-notice-visitors",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "I am ___.",
    "instruction": "Выбери: я высокий.",
    "choices": [
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-adj-4",
    "sceneId": "cafe-notice-visitors",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "He is ___.",
    "instruction": "Выбери: он некрасивый.",
    "choices": [
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": true
      },
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-adj-5",
    "sceneId": "cafe-notice-visitors",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: оно маленькое.",
    "choices": [
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-adj-6",
    "sceneId": "cafe-notice-visitors",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "She ___.",
    "instruction": "Выбери правильную часть фразы.",
    "choices": [
      {
        "id": "am-tall",
        "label": "am tall",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "is-tall",
        "label": "is tall",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "am-beautiful",
        "label": "am beautiful",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "is-beautiful",
        "label": "is beautiful",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-adj-7",
    "sceneId": "cafe-notice-visitors",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "An apple ___ beautiful.",
    "instruction": "Опиши снек покупателю.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/apple-beautiful.png"
    }
  },
  {
    "id": "task-cafe-adj-8",
    "sceneId": "cafe-notice-visitors",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "A pear ___ ugly.",
    "instruction": "Опиши снек покупателю.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/pear-ugly.png"
    }
  },
  {
    "id": "task-cafe-adj-9",
    "sceneId": "cafe-notice-visitors",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "A banana ___ tall. A grape ___ short.",
    "instruction": "Выбери слово, которое подходит в оба пропуска.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/banana-tall.png"
    }
  },
  {
    "id": "task-cafe-are-1",
    "sceneId": "cafe-serve-tables",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: они",
    "instruction": "Выбери: они.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": true
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-are-2",
    "sceneId": "cafe-serve-tables",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: мы",
    "instruction": "Выбери: мы.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": true
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-are-3",
    "sceneId": "cafe-serve-tables",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: ты / вы",
    "instruction": "Выбери: ты / вы.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-are-4",
    "sceneId": "cafe-serve-tables",
    "type": "match_word_image",
    "skillId": "are_intro",
    "prompt": "Match: we / they / you",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "we",
        "word": "We are",
        "image": "👧👦"
      },
      {
        "id": "they",
        "word": "They are",
        "image": "👨‍👩‍👧‍👦"
      },
      {
        "id": "you",
        "word": "You are",
        "image": "👉"
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    },
    "shufflePictures": true
  },
  {
    "id": "task-cafe-group-adj-1",
    "sceneId": "cafe-notice-groups",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "beautiful",
        "word": "beautiful",
        "image": "🌸"
      },
      {
        "id": "ugly",
        "word": "ugly",
        "image": "🧌"
      },
      {
        "id": "tall",
        "word": "tall",
        "image": "🦒"
      },
      {
        "id": "short",
        "word": "short",
        "image": "🐭"
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-basic.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short"
    },
    "shufflePictures": true
  },
  {
    "id": "task-cafe-group-adj-2",
    "sceneId": "cafe-notice-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "They are ___.",
    "instruction": "Выбери: они красивые.",
    "choices": [
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-group-adj-3",
    "sceneId": "cafe-notice-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "We are ___.",
    "instruction": "Выбери: мы высокие.",
    "choices": [
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-group-adj-4",
    "sceneId": "cafe-notice-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "You are ___.",
    "instruction": "Выбери: вы маленькие.",
    "choices": [
      {
        "id": "short",
        "label": "short",
        "image": "🐭",
        "isCorrect": true
      },
      {
        "id": "tall",
        "label": "tall",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "ugly",
        "label": "ugly",
        "image": "🧌",
        "isCorrect": false
      },
      {
        "id": "beautiful",
        "label": "beautiful",
        "image": "🌸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-group-adj-5",
    "sceneId": "cafe-notice-groups",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "prompt": "They ___.",
    "instruction": "Выбери правильную часть фразы.",
    "choices": [
      {
        "id": "is-beautiful",
        "label": "is beautiful",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are-beautiful",
        "label": "are beautiful",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "is-tall",
        "label": "is tall",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are-tall",
        "label": "are tall",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-group-adj-6",
    "sceneId": "cafe-notice-groups",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "prompt": "We ___ tall.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-waiter-1",
    "sceneId": "cafe-talk-waiter",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "Официант: Hello! I ___ Tom.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-waiter-2",
    "sceneId": "cafe-talk-waiter",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "You: Hello! I ___ .",
    "instruction": "Ответь официанту.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-waiter-3",
    "sceneId": "cafe-talk-waiter",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "I am ___.",
    "instruction": "Напиши своё имя.",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 2,
    "successMessagePrefix": "Nice, ",
    "storeAs": "helperName",
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-waiter-4",
    "sceneId": "cafe-talk-waiter",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "Waiter: I ___ a waiter!",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-waiter-5",
    "sceneId": "cafe-talk-waiter",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "Tom ___ a waiter.",
    "instruction": "Теперь скажи про Tom.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-food-1",
    "sceneId": "cafe-choose-food",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ hungry.",
    "instruction": "Скажи, что ты голодна.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/hungry-cat.png",
      "title": "Hungry",
      "caption": "I am hungry."
    }
  },
  {
    "id": "task-cafe-food-2",
    "sceneId": "cafe-choose-food",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "Tom: Oh, no. Let's eat!",
    "instruction": "Выбери еду.",
    "choices": [
      {
        "id": "apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "orange",
        "label": "It is an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-food-3",
    "sceneId": "cafe-choose-food",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "Choose: вкусно",
    "instruction": "Выбери слово: вкусно.",
    "choices": [
      {
        "id": "yum",
        "label": "yum",
        "image": "😋",
        "isCorrect": true
      },
      {
        "id": "yuck",
        "label": "yuck",
        "image": "🤢",
        "isCorrect": false
      },
      {
        "id": "hungry",
        "label": "hungry",
        "image": "😺",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/yum-boy.png",
      "title": "Yum",
      "caption": "Yum!"
    }
  },
  {
    "id": "task-cafe-food-4",
    "sceneId": "cafe-choose-food",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "Choose: фу / невкусно",
    "instruction": "Выбери слово: фу / невкусно.",
    "choices": [
      {
        "id": "yum",
        "label": "yum",
        "image": "😋",
        "isCorrect": false
      },
      {
        "id": "yuck",
        "label": "yuck",
        "image": "🤢",
        "isCorrect": true
      },
      {
        "id": "hungry",
        "label": "hungry",
        "image": "😺",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/yuck-girl.png",
      "title": "Yuck",
      "caption": "Yuck!"
    }
  },
  {
    "id": "task-cafe-final-1",
    "sceneId": "cafe-close-day",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: яблоко",
    "instruction": "Выбери: яблоко.",
    "choices": [
      {
        "id": "a-apple",
        "label": "It is a apple",
        "image": "🍎",
        "isCorrect": false
      },
      {
        "id": "an-apple",
        "label": "It is an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "apples",
        "label": "They are apples",
        "image": "🍎🍎",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-final-2",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "It ___ an apple.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/apple-beautiful.png"
    }
  },
  {
    "id": "task-cafe-final-3",
    "sceneId": "cafe-close-day",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 3 банана",
    "instruction": "Выбери: 3 банана.",
    "choices": [
      {
        "id": "banana",
        "label": "It is a banana",
        "image": "🍌",
        "isCorrect": false
      },
      {
        "id": "bananas",
        "label": "They are 3 bananas",
        "image": "🍌🍌🍌",
        "isCorrect": true
      },
      {
        "id": "pears",
        "label": "They are 3 pears",
        "image": "🍐🍐🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/banana-tall.png"
    }
  },
  {
    "id": "task-cafe-final-4",
    "sceneId": "cafe-close-day",
    "type": "fill_blank",
    "skillId": "plural",
    "prompt": "They are 3 banana___",
    "instruction": "Сделай множественное число.",
    "sentenceBefore": "They are 3 banana",
    "sentenceAfter": "🍌🍌🍌",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "...",
    "visual": {
      "image": "/images/cafe/banana-tall.png"
    }
  },
  {
    "id": "task-cafe-final-5",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ hungry.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/hungry-cat.png",
      "title": "Hungry",
      "caption": "I am hungry."
    }
  },
  {
    "id": "task-cafe-final-6",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "Tom ___ a waiter.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-final-7",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "prompt": "They ___ hungry.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-final-8",
    "sceneId": "cafe-close-day",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: они голодные",
    "instruction": "Представь, что услышала фразу. Выбери правильную картинку.",
    "choices": [
      {
        "id": "they",
        "label": "They are hungry",
        "image": "👧👦🍽️",
        "isCorrect": true
      },
      {
        "id": "he",
        "label": "He is hungry",
        "image": "👦🍽️",
        "isCorrect": false
      },
      {
        "id": "it",
        "label": "It is hungry",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/cafe-visitors.jpg",
      "title": "Café visitors",
      "caption": "Посетители кафе."
    }
  },
  {
    "id": "task-cafe-final-9",
    "sceneId": "cafe-close-day",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: пицца",
    "instruction": "Выбери: пицца.",
    "choices": [
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "pizzas",
        "label": "They are pizzas",
        "image": "🍕🍕",
        "isCorrect": false
      },
      {
        "id": "pear",
        "label": "It is a pear",
        "image": "🍐",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    }
  },
  {
    "id": "task-cafe-final-10",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "An orange ___ beautiful.",
    "instruction": "Опиши снек.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/cafe/apple-beautiful.png"
    }
  },
  {
    "id": "task-cafe-final-11",
    "sceneId": "cafe-close-day",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "prompt": "They ___ 2 pears.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/cafe/pear-ugly.png"
    }
  },
  {
    "id": "task-cafe-final-12",
    "sceneId": "cafe-close-day",
    "type": "match_word_image",
    "skillId": "articles",
    "prompt": "Match final snacks",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "banana",
        "word": "It is a banana",
        "image": "🍌"
      },
      {
        "id": "orange",
        "word": "It is an orange",
        "image": "🍊"
      },
      {
        "id": "pears",
        "word": "They are 2 pears",
        "image": "🍐🍐"
      }
    ],
    "visual": {
      "image": "/images/cafe/waiter-counter.png",
      "title": "Waiter",
      "caption": "Официант стоит за прилавком."
    },
    "shufflePictures": true
  },
  {
    "id": "task-vocab-garden-1",
    "sceneId": "vocab-garden-adjectives",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми слова: beautiful, ugly, tall, short.",
    "gardenImage": "/images/cafe/vocab-garden-basic.png",
    "gardenVariant": "basic-garden",
    "requiredWordList": "beautiful, ugly, tall, short",
    "items": [
      {
        "id": "beautiful",
        "word": "beautiful",
        "ru": "красивый",
        "image": "🌸",
        "sentence": "It is beautiful."
      },
      {
        "id": "ugly",
        "word": "ugly",
        "ru": "некрасивый / страшненький",
        "image": "🧌",
        "sentence": "It is ugly."
      },
      {
        "id": "tall",
        "word": "tall",
        "ru": "высокий",
        "image": "🦒",
        "sentence": "It is tall."
      },
      {
        "id": "short",
        "word": "short",
        "ru": "маленький / низкий",
        "image": "🐭",
        "sentence": "It is short."
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-basic.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short"
    }
  },
  {
    "id": "task-vocab-garden-2",
    "sceneId": "vocab-garden-adjectives",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "beautiful",
        "word": "beautiful",
        "image": "🌸"
      },
      {
        "id": "ugly",
        "word": "ugly",
        "image": "🧌"
      },
      {
        "id": "tall",
        "word": "tall",
        "image": "🦒"
      },
      {
        "id": "short",
        "word": "short",
        "image": "🐭"
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-basic.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short"
    },
    "shufflePictures": true
  },
  {
    "id": "task-vocab-food-1",
    "sceneId": "vocab-garden-food",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми слова: hungry, yum, yuck.",
    "gardenImage": "/images/cafe/vocab-garden-full.png",
    "gardenVariant": "full-garden",
    "requiredWordList": "hungry, yum, yuck",
    "items": [
      {
        "id": "hungry",
        "word": "hungry",
        "ru": "голодный",
        "image": "😺🍽️",
        "sentence": "I am hungry."
      },
      {
        "id": "yum",
        "word": "yum",
        "ru": "ням / вкусно",
        "image": "😋",
        "sentence": "Yum! It is yummy."
      },
      {
        "id": "yuck",
        "word": "yuck",
        "ru": "фу / невкусно",
        "image": "🤢",
        "sentence": "Yuck! It is bad."
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-full.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short, hungry, yum, yuck"
    }
  },
  {
    "id": "task-vocab-food-2",
    "sceneId": "vocab-garden-food",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match food words",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "hungry",
        "word": "hungry",
        "image": "😺🍽️"
      },
      {
        "id": "yum",
        "word": "yum",
        "image": "😋"
      },
      {
        "id": "yuck",
        "word": "yuck",
        "image": "🤢"
      }
    ],
    "visual": {
      "image": "/images/cafe/vocab-garden-full.png",
      "title": "Vocabulary Garden",
      "caption": "beautiful, ugly, tall, short, hungry, yum, yuck"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-open-1",
    "sceneId": "zoo-open-enclosures",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ lion.",
    "instruction": "Выбери правильный артикль.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-start.png"
    }
  },
  {
    "id": "task-zoo-open-2",
    "sceneId": "zoo-open-enclosures",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ giraffe.",
    "instruction": "Выбери правильный артикль.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-start.png"
    }
  },
  {
    "id": "task-zoo-open-3",
    "sceneId": "zoo-open-enclosures",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ octopus.",
    "instruction": "Выбери правильный артикль.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-start.png"
    }
  },
  {
    "id": "task-zoo-open-4",
    "sceneId": "zoo-open-enclosures",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ elephant.",
    "instruction": "Выбери правильный артикль.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-start.png"
    }
  },
  {
    "id": "task-zoo-find-1",
    "sceneId": "zoo-escaped-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: льва",
    "instruction": "Выбери льва.",
    "choices": [
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-find-2",
    "sceneId": "zoo-escaped-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: жирафа",
    "instruction": "Выбери жирафа.",
    "choices": [
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-find-3",
    "sceneId": "zoo-escaped-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: слона",
    "instruction": "Выбери слона.",
    "choices": [
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-find-4",
    "sceneId": "zoo-escaped-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: осьминога",
    "instruction": "Выбери осьминога.",
    "choices": [
      {
        "id": "a-elephant",
        "label": "It is a elephant",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "a-octopus",
        "label": "It is a octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-find-5",
    "sceneId": "zoo-escaped-animals",
    "type": "match_word_image",
    "skillId": "articles",
    "prompt": "Match zoo animals",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "lion",
        "word": "It is a lion",
        "image": "🦁"
      },
      {
        "id": "giraffe",
        "word": "It is a giraffe",
        "image": "🦒"
      },
      {
        "id": "octopus",
        "word": "It is an octopus",
        "image": "🐙"
      },
      {
        "id": "elephant",
        "word": "It is an elephant",
        "image": "🐘"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-happy.png",
      "title": "",
      "caption": ""
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-feed-elephant-1",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: слона",
    "instruction": "Слоник хочет кушать. Сначала выбери, как сказать слон по-английски.",
    "choices": [
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-elephant-2",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "An elephant eats... choose!",
    "instruction": "Слоник кушает... выбери угощение! Правильного ответа здесь нет.",
    "choices": [
      {
        "id": "an-apple",
        "label": "an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "an-orange",
        "label": "an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "a-banana",
        "label": "a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "a-grape",
        "label": "a grape",
        "image": "🍇",
        "isCorrect": true
      },
      {
        "id": "a-pizza",
        "label": "a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "a-pear",
        "label": "a pear",
        "image": "🍐",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-lion-1",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: льва",
    "instruction": "Лев хочет кушать. Сначала выбери, как сказать лев по-английски.",
    "choices": [
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-lion-2",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "A lion eats... choose!",
    "instruction": "Лев кушает... выбери угощение! Правильного ответа здесь нет.",
    "choices": [
      {
        "id": "an-apple",
        "label": "an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "an-orange",
        "label": "an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "a-banana",
        "label": "a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "a-grape",
        "label": "a grape",
        "image": "🍇",
        "isCorrect": true
      },
      {
        "id": "a-pizza",
        "label": "a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "a-pear",
        "label": "a pear",
        "image": "🍐",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-giraffe-1",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: жирафа",
    "instruction": "Жираф хочет кушать. Сначала выбери, как сказать жираф по-английски.",
    "choices": [
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-giraffe-2",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "A giraffe eats... choose!",
    "instruction": "Жираф кушает... выбери угощение! Правильного ответа здесь нет.",
    "choices": [
      {
        "id": "an-apple",
        "label": "an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "an-orange",
        "label": "an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "a-banana",
        "label": "a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "a-grape",
        "label": "a grape",
        "image": "🍇",
        "isCorrect": true
      },
      {
        "id": "a-pizza",
        "label": "a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "a-pear",
        "label": "a pear",
        "image": "🍐",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-octopus-1",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: осьминога",
    "instruction": "Осьминог хочет кушать. Сначала выбери, как сказать осьминог по-английски.",
    "choices": [
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": true
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-feed-octopus-2",
    "sceneId": "zoo-feed-animals",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "An octopus eats... choose!",
    "instruction": "Осьминог кушает... выбери угощение! Правильного ответа здесь нет.",
    "choices": [
      {
        "id": "an-apple",
        "label": "an apple",
        "image": "🍎",
        "isCorrect": true
      },
      {
        "id": "an-orange",
        "label": "an orange",
        "image": "🍊",
        "isCorrect": true
      },
      {
        "id": "a-banana",
        "label": "a banana",
        "image": "🍌",
        "isCorrect": true
      },
      {
        "id": "a-grape",
        "label": "a grape",
        "image": "🍇",
        "isCorrect": true
      },
      {
        "id": "a-pizza",
        "label": "a pizza",
        "image": "🍕",
        "isCorrect": true
      },
      {
        "id": "a-pear",
        "label": "a pear",
        "image": "🍐",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-zoo-pairs-0",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: змею",
    "instruction": "Посели новое животное. Выбери змею.",
    "choices": [
      {
        "id": "one-snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": true
      },
      {
        "id": "one-lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "one-giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-start.png"
    }
  },
  {
    "id": "task-zoo-pairs-1",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: льва",
    "instruction": "Досели животных в клетки. Выбери льва.",
    "choices": [
      {
        "id": "one-lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "two-lions",
        "label": "2 lions",
        "image": "🦁🦁",
        "isCorrect": false
      },
      {
        "id": "two-snakes",
        "label": "2 snakes",
        "image": "🐍🐍",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-snake.png"
    }
  },
  {
    "id": "task-zoo-pairs-2",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 2 змеи",
    "instruction": "Досели ещё двух змей. Выбери 2 змеи.",
    "choices": [
      {
        "id": "one-snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": false
      },
      {
        "id": "two-snakes",
        "label": "2 snakes",
        "image": "🐍🐍",
        "isCorrect": true
      },
      {
        "id": "three-snakes",
        "label": "3 snakes",
        "image": "🐍🐍🐍",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-lion.png"
    }
  },
  {
    "id": "task-zoo-pairs-3",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 2 осьминога",
    "instruction": "Досели ещё двух осьминогов. Выбери 2 осьминога.",
    "choices": [
      {
        "id": "one-octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "two-octopuses",
        "label": "2 octopuses",
        "image": "🐙🐙",
        "isCorrect": true
      },
      {
        "id": "three-octopuses",
        "label": "3 octopuses",
        "image": "🐙🐙🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-snakes.png"
    }
  },
  {
    "id": "task-zoo-pairs-4",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 3 жирафа",
    "instruction": "Досели ещё трех жирафов. Выбери 3 жирафа.",
    "choices": [
      {
        "id": "one-giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "three-giraffes",
        "label": "3 giraffes",
        "image": "🦒🦒🦒",
        "isCorrect": true
      },
      {
        "id": "four-giraffes",
        "label": "4 giraffes",
        "image": "🦒🦒🦒🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-octopuses.png"
    }
  },
  {
    "id": "task-zoo-pairs-5",
    "sceneId": "zoo-animal-pairs",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: 1 слона",
    "instruction": "Слоник так сильно подружился с жирафиком, и смотритель решил оставить его с ним! Выбери 1 слона.",
    "choices": [
      {
        "id": "one-elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "two-elephants",
        "label": "2 elephants",
        "image": "🐘🐘",
        "isCorrect": false
      },
      {
        "id": "three-giraffes",
        "label": "3 giraffes",
        "image": "🦒🦒🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-hungry-1",
    "sceneId": "zoo-hungry-animals",
    "type": "multi_select",
    "skillId": "plural",
    "prompt": "Choose: голодных животных",
    "instruction": "Некоторые животные голодные. Выбери только голодных!",
    "choices": [
      {
        "id": "one-lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "two-lions",
        "label": "They are 2 lions",
        "image": "🦁🦁",
        "isCorrect": true
      },
      {
        "id": "one-giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "four-giraffes",
        "label": "They are 4 giraffes",
        "image": "🦒🦒🦒🦒",
        "isCorrect": true
      },
      {
        "id": "one-snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": false
      },
      {
        "id": "three-snakes",
        "label": "They are 3 snakes",
        "image": "🐍🐍🐍",
        "isCorrect": true
      },
      {
        "id": "one-octopus",
        "label": "It is an octopus",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "three-octopuses",
        "label": "They are 3 octopuses",
        "image": "🐙🐙🐙",
        "isCorrect": false
      },
      {
        "id": "one-elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-hungry-new.png",
      "title": "Hungry animals",
      "caption": "Некоторые животные проголодались."
    }
  },
  {
    "id": "task-zoo-keeper-1",
    "sceneId": "zoo-meet-keeper",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ Misha.",
    "instruction": "Чтобы рассказать о себе, говорим I am.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-keeper-2",
    "sceneId": "zoo-meet-keeper",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "How old are you?",
    "instruction": "How old are you? Сколько тебе лет?",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "minLength": 1,
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-keeper-3",
    "sceneId": "zoo-meet-keeper",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "prompt": "Choose: Я мальчик",
    "instruction": "Выбери: Я мальчик.",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-keeper-4",
    "sceneId": "zoo-meet-keeper",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "prompt": "Choose: Я девочка",
    "instruction": "Выбери: Я девочка.",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "giraffe",
        "label": "It is a giraffe",
        "image": "🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-keeper-5",
    "sceneId": "zoo-meet-keeper",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ a zoo helper.",
    "instruction": "Я помощник зоопарка! Выбери, как это правильно сказать.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-keeper-6",
    "sceneId": "zoo-meet-keeper",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "What is your name?",
    "instruction": "Keeper: What is your name? Смотритель: Как тебя зовут?",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 2,
    "successMessagePrefix": "Nice to meet you, ",
    "storeAs": "helperName",
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-is-1",
    "sceneId": "zoo-look-keeper",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "Choose: девочку",
    "instruction": "Выбери девочку.",
    "choices": [
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-is-2",
    "sceneId": "zoo-look-keeper",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "Choose: мальчика",
    "instruction": "Выбери мальчика.",
    "choices": [
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-is-3",
    "sceneId": "zoo-look-keeper",
    "type": "multi_select",
    "skillId": "is_intro",
    "prompt": "Choose: как скажем про животных",
    "instruction": "Выбери, как говорим про разных животных.",
    "choices": [
      {
        "id": "snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": true
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "girl",
        "label": "She is",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "boy",
        "label": "He is",
        "image": "👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-is-4",
    "sceneId": "zoo-look-keeper",
    "type": "match_word_image",
    "skillId": "is_intro",
    "prompt": "Match: she / he / it",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "she",
        "word": "She is",
        "image": "👧"
      },
      {
        "id": "he",
        "word": "He is",
        "image": "👦"
      },
      {
        "id": "it",
        "word": "It is",
        "image": "🦁"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-stage1-match",
    "sceneId": "zoo-guide-stage-1",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "young",
        "word": "young",
        "image": "🦁"
      },
      {
        "id": "old",
        "word": "old",
        "image": "🦒"
      },
      {
        "id": "fat",
        "word": "fat",
        "image": "🐘"
      },
      {
        "id": "cute",
        "word": "cute",
        "image": "🐙"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-adjectives-final.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-stage1-adj-1",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: лев молодой.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png"
    }
  },
  {
    "id": "task-zoo-stage1-adj-2",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: жираф старый.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png"
    }
  },
  {
    "id": "task-zoo-stage1-adj-3",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: слон толстый.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png"
    }
  },
  {
    "id": "task-zoo-stage1-adj-4",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: осьминог милый.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png"
    }
  },
  {
    "id": "task-zoo-stage1-phrase-1",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "It ___.",
    "instruction": "Выбери правильную часть фразы: оно молодое.",
    "choices": [
      {
        "id": "am-young",
        "label": "am young",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "is-fat",
        "label": "is fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "is-young",
        "label": "is young",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "am-fat",
        "label": "am fat",
        "image": "🧒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png"
    }
  },
  {
    "id": "task-zoo-stage1-phrase-2",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "It ___.",
    "instruction": "Выбери правильную часть фразы: оно старое.",
    "choices": [
      {
        "id": "is-cute",
        "label": "is cute",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "is-old",
        "label": "is old",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "am-cute",
        "label": "am cute",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "am-old",
        "label": "am old",
        "image": "🧒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png"
    }
  },
  {
    "id": "task-zoo-stage1-phrase-3",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "It ___.",
    "instruction": "Выбери правильную часть фразы: оно толстое.",
    "choices": [
      {
        "id": "am-young",
        "label": "am young",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "am-fat",
        "label": "am fat",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "is-fat",
        "label": "is fat",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "is-young",
        "label": "is young",
        "image": "🦁",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png"
    }
  },
  {
    "id": "task-zoo-stage1-phrase-4",
    "sceneId": "zoo-guide-stage-1",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "prompt": "It ___.",
    "instruction": "Выбери правильную часть фразы: оно милое.",
    "choices": [
      {
        "id": "am-cute",
        "label": "am cute",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "am-old",
        "label": "am old",
        "image": "🧒",
        "isCorrect": false
      },
      {
        "id": "is-old",
        "label": "is old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "is-cute",
        "label": "is cute",
        "image": "🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png"
    }
  },
  {
    "id": "task-zoo-stage1-animal-1",
    "sceneId": "zoo-guide-stage-1",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "A lion ___ young.",
    "instruction": "Опиши животное посетителю.",
    "choices": [
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png"
    }
  },
  {
    "id": "task-zoo-stage1-animal-2",
    "sceneId": "zoo-guide-stage-1",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "A giraffe ___ old.",
    "instruction": "Опиши животное посетителю.",
    "choices": [
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png"
    }
  },
  {
    "id": "task-zoo-stage1-animal-3",
    "sceneId": "zoo-guide-stage-1",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "An elephant ___ fat.",
    "instruction": "Опиши животное посетителю.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png"
    }
  },
  {
    "id": "task-zoo-stage1-animal-4",
    "sceneId": "zoo-guide-stage-1",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "An octopus ___ cute.",
    "instruction": "Опиши животное посетителю.",
    "choices": [
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      },
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png"
    }
  },
  {
    "id": "task-zoo-are-1",
    "sceneId": "zoo-look-animal-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: они",
    "instruction": "Выбери: они.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": true
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-are-2",
    "sceneId": "zoo-look-animal-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: мы",
    "instruction": "Выбери: мы.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": true
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-are-3",
    "sceneId": "zoo-look-animal-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "Choose: ты / вы",
    "instruction": "Выбери: ты / вы.",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-are-4",
    "sceneId": "zoo-look-animal-groups",
    "type": "match_word_image",
    "skillId": "are_intro",
    "prompt": "Match: we / they / you",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "we",
        "word": "We are",
        "image": "👧👦"
      },
      {
        "id": "they",
        "word": "They are",
        "image": "👨‍👩‍👧‍👦"
      },
      {
        "id": "you",
        "word": "You are",
        "image": "👉"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-stage2-match",
    "sceneId": "zoo-guide-stage-2",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "young",
        "word": "young",
        "image": "🦁"
      },
      {
        "id": "old",
        "word": "old",
        "image": "🦒"
      },
      {
        "id": "fat",
        "word": "fat",
        "image": "🐘"
      },
      {
        "id": "cute",
        "word": "cute",
        "image": "🐙"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-adjectives-final.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-stage2-adj-1",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "They are ___.",
    "instruction": "Выбери: они молодые.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁🦁",
        "isCorrect": true
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-stage2-adj-2",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "We are ___.",
    "instruction": "Выбери: мы милые.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-stage2-adj-3",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "You are ___.",
    "instruction": "Выбери: ты милый / милая.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-stage2-phrase-1",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "They ___.",
    "instruction": "Выбери правильную часть фразы: они молодые.",
    "choices": [
      {
        "id": "is-young",
        "label": "is young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "is-fat",
        "label": "is fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "are-young",
        "label": "are young",
        "image": "🦁🦁",
        "isCorrect": true
      },
      {
        "id": "are-fat",
        "label": "are fat",
        "image": "🐘🐘",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-stage2-phrase-2",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "We ___.",
    "instruction": "Выбери правильную часть фразы: мы милые.",
    "choices": [
      {
        "id": "is-old",
        "label": "is old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "is-cute",
        "label": "is cute",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "are-old",
        "label": "are old",
        "image": "🦒🦒",
        "isCorrect": false
      },
      {
        "id": "are-cute",
        "label": "are cute",
        "image": "🐙🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-stage2-phrase-3",
    "sceneId": "zoo-guide-stage-2",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "prompt": "You ___.",
    "instruction": "Выбери правильную часть фразы: ты / вы милый или милая.",
    "choices": [
      {
        "id": "are-old",
        "label": "are old",
        "image": "🦒🦒",
        "isCorrect": false
      },
      {
        "id": "are-cute",
        "label": "are cute",
        "image": "🐙🐙",
        "isCorrect": true
      },
      {
        "id": "is-cute",
        "label": "is cute",
        "image": "🐙",
        "isCorrect": false
      },
      {
        "id": "is-old",
        "label": "is old",
        "image": "🦒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-talk-1",
    "sceneId": "zoo-talk-keeper",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "Keeper: Hello! I ___ Tom.",
    "instruction": "Смотритель: Hello! I ___ Tom.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-talk-2",
    "sceneId": "zoo-talk-keeper",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "You: Hello! I ___.",
    "instruction": "Ты отвечаешь смотрителю.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-talk-3",
    "sceneId": "zoo-talk-keeper",
    "type": "free_text",
    "skillId": "to_be",
    "prompt": "I am ___",
    "instruction": "Введи своё имя.",
    "sentenceBefore": "I am",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 2,
    "successMessagePrefix": "Hello, ",
    "storeAs": "helperName",
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-talk-4",
    "sceneId": "zoo-talk-keeper",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "Keeper: I ___ a keeper!",
    "instruction": "Смотритель рассказывает о себе.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-talk-5",
    "sceneId": "zoo-talk-keeper",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "Tom ___ a keeper!",
    "instruction": "Теперь скажи про смотрителя Tom.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-final-1",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ lion.",
    "instruction": "Вставь a или an.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "isCorrect": true
      },
      {
        "id": "an",
        "label": "an",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/lion.png"
    }
  },
  {
    "id": "task-zoo-final-2",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "It is ___ elephant.",
    "instruction": "Вставь a или an.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png"
    }
  },
  {
    "id": "task-zoo-final-3",
    "sceneId": "zoo-guide-final",
    "type": "fill_blank",
    "skillId": "plural",
    "prompt": "They are 3 snake___",
    "instruction": "Сделай множественное число.",
    "sentenceBefore": "They are 3 snake",
    "sentenceAfter": ". 🐍🐍🐍",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-final-4",
    "sceneId": "zoo-guide-final",
    "type": "choose_correct_image",
    "skillId": "plural",
    "prompt": "Choose: 2 льва",
    "instruction": "Выбери 2 льва.",
    "choices": [
      {
        "id": "one-lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "two-lions",
        "label": "They are 2 lions",
        "image": "🦁🦁",
        "isCorrect": true
      },
      {
        "id": "three-snakes",
        "label": "They are 3 snakes",
        "image": "🐍🐍🐍",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-final-5",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "prompt": "I ___ a zoo guide.",
    "instruction": "Скажи о себе.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-keeper-new.png"
    }
  },
  {
    "id": "task-zoo-final-6",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "A giraffe ___ old.",
    "instruction": "Опиши животное.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/giraffe.png"
    }
  },
  {
    "id": "task-zoo-final-7",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "prompt": "An elephant ___ fat.",
    "instruction": "Опиши животное.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/elephant.png"
    }
  },
  {
    "id": "task-zoo-final-8",
    "sceneId": "zoo-guide-final",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "They are ___.",
    "instruction": "Выбери: львы молодые.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁🦁",
        "isCorrect": true
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-final-9",
    "sceneId": "zoo-guide-final",
    "type": "choose_correct_image",
    "skillId": "vocabulary",
    "prompt": "It is ___.",
    "instruction": "Выбери: осьминог милый.",
    "choices": [
      {
        "id": "young",
        "label": "young",
        "image": "🦁",
        "isCorrect": false
      },
      {
        "id": "old",
        "label": "old",
        "image": "🦒",
        "isCorrect": false
      },
      {
        "id": "fat",
        "label": "fat",
        "image": "🐘",
        "isCorrect": false
      },
      {
        "id": "cute",
        "label": "cute",
        "image": "🐙",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/octopus.png"
    }
  },
  {
    "id": "task-zoo-final-10",
    "sceneId": "zoo-guide-final",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "prompt": "They ___ 4 giraffes.",
    "instruction": "Выбери правильное слово.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-zoo-final-11",
    "sceneId": "zoo-guide-final",
    "type": "match_word_image",
    "skillId": "are_intro",
    "prompt": "Match: we / they / you",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "we",
        "word": "We are",
        "image": "👧👦"
      },
      {
        "id": "they",
        "word": "They are",
        "image": "🦁🦁"
      },
      {
        "id": "you",
        "word": "You are",
        "image": "👉"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-final-12",
    "sceneId": "zoo-guide-final",
    "type": "multi_select",
    "skillId": "articles",
    "prompt": "Choose: animals for the tour",
    "instruction": "Выбери животных для экскурсии: змею, льва и слона.",
    "choices": [
      {
        "id": "snake",
        "label": "It is a snake",
        "image": "🐍",
        "isCorrect": true
      },
      {
        "id": "lion",
        "label": "It is a lion",
        "image": "🦁",
        "isCorrect": true
      },
      {
        "id": "elephant",
        "label": "It is an elephant",
        "image": "🐘",
        "isCorrect": true
      },
      {
        "id": "pizza",
        "label": "It is a pizza",
        "image": "🍕",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-pairs-final.png"
    }
  },
  {
    "id": "task-vocab-zoo-adj-1",
    "sceneId": "vocab-garden-zoo-adjectives",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми слова: a lion, a giraffe, a snake, an octopus, an elephant, fat, old, young, cute.",
    "gardenImage": "/images/zoo/zoo-adjectives-final.png",
    "gardenVariant": "zoo-adjectives-garden",
    "requiredWordList": "a lion, a giraffe, a snake, an octopus, an elephant, fat, old, young, cute",
    "items": [
      {
        "id": "lion",
        "word": "a lion",
        "ru": "лев",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "It is a lion."
      },
      {
        "id": "giraffe",
        "word": "a giraffe",
        "ru": "жираф",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "It is a giraffe."
      },
      {
        "id": "octopus",
        "word": "an octopus",
        "ru": "осьминог",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "It is an octopus."
      },
      {
        "id": "elephant",
        "word": "an elephant",
        "ru": "слон",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "It is an elephant."
      },
      {
        "id": "fat",
        "word": "fat",
        "ru": "толстый",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "It is fat."
      },
      {
        "id": "old",
        "word": "old",
        "ru": "старый",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "It is old."
      },
      {
        "id": "young",
        "word": "young",
        "ru": "молодой",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "It is young."
      },
      {
        "id": "cute",
        "word": "cute",
        "ru": "милый",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "It is cute."
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-adjectives-final.png",
      "title": "Zoo animals",
      "caption": "fat, old, young, cute."
    }
  },
  {
    "id": "task-vocab-zoo-adj-2",
    "sceneId": "vocab-garden-zoo-adjectives",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match zoo adjectives",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "fat",
        "word": "fat",
        "image": "🐘"
      },
      {
        "id": "old",
        "word": "old",
        "image": "🦒"
      },
      {
        "id": "young",
        "word": "young",
        "image": "🦁"
      },
      {
        "id": "cute",
        "word": "cute",
        "image": "🐙"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-adjectives-final.png",
      "title": "Zoo animals",
      "caption": "fat, old, young, cute."
    },
    "shufflePictures": true
  },
  {
    "id": "task-vocab-zoo-1",
    "sceneId": "vocab-garden-zoo-animals",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми слова: a lion, a giraffe, an octopus, an elephant.",
    "gardenImage": "/images/zoo/zoo-happy.png",
    "gardenVariant": "zoo-garden",
    "requiredWordList": "a lion, a giraffe, an octopus, an elephant",
    "items": [
      {
        "id": "lion",
        "word": "a lion",
        "ru": "лев",
        "image": "🦁",
        "imageFile": "/images/zoo/lion.png",
        "sentence": "It is a lion."
      },
      {
        "id": "giraffe",
        "word": "a giraffe",
        "ru": "жираф",
        "image": "🦒",
        "imageFile": "/images/zoo/giraffe.png",
        "sentence": "It is a giraffe."
      },
      {
        "id": "octopus",
        "word": "an octopus",
        "ru": "осьминог",
        "image": "🐙",
        "imageFile": "/images/zoo/octopus.png",
        "sentence": "It is an octopus."
      },
      {
        "id": "elephant",
        "word": "an elephant",
        "ru": "слон",
        "image": "🐘",
        "imageFile": "/images/zoo/elephant.png",
        "sentence": "It is an elephant."
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-happy.png",
      "title": "Zoo",
      "caption": "Животные в зоопарке."
    }
  },
  {
    "id": "task-vocab-zoo-2",
    "sceneId": "vocab-garden-zoo-animals",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match zoo animals",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "lion",
        "word": "a lion",
        "image": "🦁"
      },
      {
        "id": "giraffe",
        "word": "a giraffe",
        "image": "🦒"
      },
      {
        "id": "octopus",
        "word": "an octopus",
        "image": "🐙"
      },
      {
        "id": "elephant",
        "word": "an elephant",
        "image": "🐘"
      }
    ],
    "visual": {
      "image": "/images/zoo/zoo-happy.png",
      "title": "Zoo",
      "caption": "Животные в зоопарке."
    },
    "shufflePictures": true
  },
  {
    "id": "task-zoo-lex-a-an",
    "sceneId": "zoo-open-enclosures",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "Мы говорим a lion?",
    "instruction": "Лисёнок опять запутался. Помоги ему вспомнить правило.",
    "choices": [
      {
        "id": "yes",
        "label": "Yes",
        "image": "✅",
        "isCorrect": true
      },
      {
        "id": "no",
        "label": "No",
        "image": "❌",
        "isCorrect": false
      }
    ],
    "visual": {
      "emoji": "🦊",
      "title": "Buddy",
      "caption": "Проверь правило a / an."
    }
  },
  {
    "id": "task-cafe-lex-a-an",
    "sceneId": "cafe-find-snack",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "Лекс: мы говорим a apple?",
    "instruction": "Лисёнок проверяет правило a / an.",
    "choices": [
      {
        "id": "yes",
        "label": "Да",
        "image": "🟢",
        "isCorrect": false
      },
      {
        "id": "no",
        "label": "Нет",
        "image": "🔴",
        "isCorrect": true
      }
    ],
    "visual": {
      "emoji": "🦊"
    }
  },
  {
    "id": "task-school-lex-a-an",
    "sceneId": "school-pack-bag",
    "type": "simple_dialogue",
    "skillId": "articles",
    "prompt": "Лекс: an eraser?",
    "instruction": "Так-так-так, мы же говорим an eraser?",
    "choices": [
      {
        "id": "yes",
        "label": "Yes",
        "image": "✅",
        "isCorrect": true
      },
      {
        "id": "no",
        "label": "No",
        "image": "❌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/school-bag-packed.png"
    }
  },
  {
    "id": "task-school-bag-1",
    "sceneId": "school-pack-bag",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: рюкзак",
    "instruction": "Выбери рюкзак.",
    "choices": [
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false
      },
      {
        "id": "bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": true
      },
      {
        "id": "pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false
      },
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "⬜",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/school-bag-packed.png"
    }
  },
  {
    "id": "task-school-bag-2",
    "sceneId": "school-pack-bag",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: ручку",
    "instruction": "Выбери ручку.",
    "choices": [
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "⬜",
        "isCorrect": false
      },
      {
        "id": "pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false
      },
      {
        "id": "bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": false
      },
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/school-bag-packed.png"
    }
  },
  {
    "id": "task-school-bag-3",
    "sceneId": "school-pack-bag",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: карандаш",
    "instruction": "Выбери карандаш.",
    "choices": [
      {
        "id": "bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": false
      },
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false
      },
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "⬜",
        "isCorrect": false
      },
      {
        "id": "pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/school-bag-packed.png"
    }
  },
  {
    "id": "task-school-bag-4",
    "sceneId": "school-pack-bag",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "Choose: ластик",
    "instruction": "Выбери ластик.",
    "choices": [
      {
        "id": "pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false
      },
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "⬜",
        "isCorrect": true
      },
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false
      },
      {
        "id": "bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/school-bag-packed.png"
    }
  },
  {
    "id": "task-school-breakfast-1",
    "sceneId": "school-breakfast",
    "type": "multi_select",
    "skillId": "vocabulary",
    "prompt": "Choose breakfast",
    "instruction": "Выбери завтрак. Правильного ответа здесь нет.",
    "choices": [
      {
        "id": "apple",
        "label": "an apple",
        "image": "🍎",
        "isCorrect": true,
        "speak": "an apple"
      },
      {
        "id": "orange",
        "label": "an orange",
        "image": "🍊",
        "isCorrect": true,
        "speak": "an orange"
      },
      {
        "id": "banana",
        "label": "a banana",
        "image": "🍌",
        "isCorrect": true,
        "speak": "a banana"
      },
      {
        "id": "grape",
        "label": "a grape",
        "image": "🍇",
        "isCorrect": true,
        "speak": "a grape"
      },
      {
        "id": "pizza",
        "label": "a pizza",
        "image": "🍕",
        "isCorrect": true,
        "speak": "a pizza"
      },
      {
        "id": "pear",
        "label": "a pear",
        "image": "🍐",
        "isCorrect": true,
        "speak": "a pear"
      }
    ],
    "visual": {
      "image": "/images/school/breakfast-food.png",
      "title": "Breakfast",
      "caption": "Выбери завтрак."
    },
    "noWrongAnswer": true
  },
  {
    "id": "task-school-near-1",
    "sceneId": "school-pack-again",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "What is near a banana?",
    "instruction": "Что находится возле банана?",
    "choices": [
      {
        "id": "bag",
        "label": "a bag",
        "image": "🎒",
        "isCorrect": true,
        "speak": "a bag"
      },
      {
        "id": "eraser",
        "label": "an eraser",
        "image": "🧽",
        "isCorrect": false,
        "speak": "an eraser"
      }
    ],
    "visual": {
      "image": "/images/school/school-table.jpg",
      "title": "Backpack and snacks",
      "caption": "Положи вещи обратно."
    }
  },
  {
    "id": "task-school-near-2",
    "sceneId": "school-pack-again",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "What is near an orange?",
    "instruction": "Что находится возле апельсина?",
    "choices": [
      {
        "id": "pen",
        "label": "a pen",
        "image": "🖊️",
        "isCorrect": true,
        "speak": "a pen"
      },
      {
        "id": "bag",
        "label": "a bag",
        "image": "🎒",
        "isCorrect": false,
        "speak": "a bag"
      }
    ],
    "visual": {
      "image": "/images/school/school-table.jpg",
      "title": "Backpack and snacks",
      "caption": "Положи вещи обратно."
    }
  },
  {
    "id": "task-school-near-3",
    "sceneId": "school-pack-again",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "What is near an apple?",
    "instruction": "Что находится возле яблока?",
    "choices": [
      {
        "id": "eraser",
        "label": "an eraser",
        "image": "🧽",
        "isCorrect": false,
        "speak": "an eraser"
      },
      {
        "id": "pencil",
        "label": "a pencil",
        "image": "✏️",
        "isCorrect": true,
        "speak": "a pencil"
      }
    ],
    "visual": {
      "image": "/images/school/school-table.jpg",
      "title": "Backpack and snacks",
      "caption": "Положи вещи обратно."
    }
  },
  {
    "id": "task-school-near-4",
    "sceneId": "school-pack-again",
    "type": "choose_correct_image",
    "skillId": "articles",
    "prompt": "What is near a pizza?",
    "instruction": "Что находится возле пиццы?",
    "choices": [
      {
        "id": "bag",
        "label": "a bag",
        "image": "🎒",
        "isCorrect": false,
        "speak": "a bag"
      },
      {
        "id": "eraser",
        "label": "an eraser",
        "image": "🧽",
        "isCorrect": true,
        "speak": "an eraser"
      }
    ],
    "visual": {
      "image": "/images/school/school-table.jpg",
      "title": "Backpack and snacks",
      "caption": "Положи вещи обратно."
    }
  },
  {
    "id": "task-school-numbers-123",
    "sceneId": "school-get-to-school",
    "type": "interactive_garden",
    "skillId": "numbers",
    "prompt": "Listen: one, two, three",
    "instruction": "До автобусной остановки вообще недалеко! Давай посчитаем количество наших шагов.",
    "gardenImage": "/images/school/numbers-123.jpg",
    "gardenVariant": "numbers-garden numbers-3",
    "requiredWordList": "one, two, three",
    "items": [
      {
        "id": "one",
        "word": "one",
        "ru": "один",
        "image": "1",
        "sentence": "Number one."
      },
      {
        "id": "two",
        "word": "two",
        "ru": "два",
        "image": "2",
        "sentence": "Number two."
      },
      {
        "id": "three",
        "word": "three",
        "ru": "три",
        "image": "3",
        "sentence": "Number three."
      }
    ],
    "visual": {
      "image": "/images/school/numbers-123.jpg",
      "title": "Numbers",
      "caption": "one, two, three"
    }
  },
  {
    "id": "task-school-numbers-1234",
    "sceneId": "school-get-to-school",
    "type": "interactive_garden",
    "skillId": "numbers",
    "prompt": "Listen: one, two, three, four",
    "instruction": "До остановки всего three шага! А сколько остановок нам нужно проехать до школы? Давай посчитаем.",
    "gardenImage": "/images/school/numbers-1234.jpg",
    "gardenVariant": "numbers-garden numbers-4",
    "requiredWordList": "one, two, three, four",
    "items": [
      {
        "id": "one",
        "word": "one",
        "ru": "один",
        "image": "1",
        "sentence": "Number one."
      },
      {
        "id": "two",
        "word": "two",
        "ru": "два",
        "image": "2",
        "sentence": "Number two."
      },
      {
        "id": "three",
        "word": "three",
        "ru": "три",
        "image": "3",
        "sentence": "Number three."
      },
      {
        "id": "four",
        "word": "four",
        "ru": "четыре",
        "image": "4",
        "sentence": "Number four."
      }
    ],
    "visual": {
      "image": "/images/school/numbers-1234.jpg",
      "title": "Numbers",
      "caption": "one, two, three, four"
    }
  },
  {
    "id": "task-school-numbers-12345",
    "sceneId": "school-get-to-school",
    "type": "interactive_garden",
    "skillId": "numbers",
    "prompt": "Listen: one, two, three, four, five",
    "instruction": "О, а вот и наша школа! Сколько шагов до двери?",
    "gardenImage": "/images/school/numbers-12345.jpg",
    "gardenVariant": "numbers-garden numbers-5",
    "requiredWordList": "one, two, three, four, five",
    "items": [
      {
        "id": "one",
        "word": "one",
        "ru": "один",
        "image": "1",
        "sentence": "Number one."
      },
      {
        "id": "two",
        "word": "two",
        "ru": "два",
        "image": "2",
        "sentence": "Number two."
      },
      {
        "id": "three",
        "word": "three",
        "ru": "три",
        "image": "3",
        "sentence": "Number three."
      },
      {
        "id": "four",
        "word": "four",
        "ru": "четыре",
        "image": "4",
        "sentence": "Number four."
      },
      {
        "id": "five",
        "word": "five",
        "ru": "пять",
        "image": "5",
        "sentence": "Number five."
      }
    ],
    "visual": {
      "image": "/images/school/numbers-12345.jpg",
      "title": "Numbers",
      "caption": "one, two, three, four, five"
    }
  },
  {
    "id": "task-school-numbers-match",
    "sceneId": "school-get-to-school",
    "type": "match_word_image",
    "skillId": "numbers",
    "prompt": "Match numbers",
    "instruction": "Соедини цифру и слово. Можно нажать 🔊.",
    "pairs": [
      {
        "id": "one",
        "word": "1",
        "image": "one",
        "speak": "one"
      },
      {
        "id": "two",
        "word": "2",
        "image": "two",
        "speak": "two"
      },
      {
        "id": "three",
        "word": "3",
        "image": "three",
        "speak": "three"
      },
      {
        "id": "four",
        "word": "4",
        "image": "four",
        "speak": "four"
      },
      {
        "id": "five",
        "word": "5",
        "image": "five",
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/numbers-12345.jpg",
      "title": "Numbers",
      "caption": "one, two, three, four, five"
    },
    "shufflePictures": true
  },
  {
    "id": "task-school-schedule-ru",
    "sceneId": "school-schedule",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "prompt": "Русский язык — 2 кабинет",
    "instruction": "Нажми на правильную цифру. Можно послушать.",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": false,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": true,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": false,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/school-schedule.jpg",
      "title": "Расписание",
      "caption": "Найди кабинет английского языка."
    }
  },
  {
    "id": "task-school-schedule-math",
    "sceneId": "school-schedule",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "prompt": "Математика — 3 кабинет",
    "instruction": "Нажми на правильную цифру. Можно послушать.",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": false,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": false,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": true,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": false,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/school-schedule.jpg",
      "title": "Расписание",
      "caption": "Найди кабинет английского языка."
    }
  },
  {
    "id": "task-school-schedule-art",
    "sceneId": "school-schedule",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "prompt": "Рисование — 1 кабинет",
    "instruction": "Нажми на правильную цифру. Можно послушать.",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": true,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": false,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": false,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/school-schedule.jpg",
      "title": "Расписание",
      "caption": "Найди кабинет английского языка."
    }
  },
  {
    "id": "task-school-schedule-music",
    "sceneId": "school-schedule",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "prompt": "Пение — 4 кабинет",
    "instruction": "Нажми на правильную цифру. Можно послушать.",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": false,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": false,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": true,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/school-schedule.jpg",
      "title": "Расписание",
      "caption": "Найди кабинет английского языка."
    }
  },
  {
    "id": "task-school-schedule-english",
    "sceneId": "school-schedule",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "prompt": "Английский язык — 5 кабинет",
    "instruction": "Нажми на правильную цифру. Можно послушать.",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": false,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": false,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": false,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": true,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/school-schedule.jpg",
      "title": "Расписание",
      "caption": "Найди кабинет английского языка."
    }
  },
  {
    "id": "task-vocab-school-supplies-1",
    "sceneId": "vocab-garden-school-supplies",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми слова: a bag, a pen, a pencil, an eraser.",
    "gardenImage": "/images/school/school-supplies.jpg",
    "gardenVariant": "school-supplies-garden",
    "requiredWordList": "a bag, a pen, a pencil, an eraser",
    "items": [
      {
        "id": "bag",
        "word": "a bag",
        "ru": "рюкзак",
        "image": "🎒",
        "imageFile": "/images/school/school-bag.png",
        "sentence": "It is a bag."
      },
      {
        "id": "pencil",
        "word": "a pencil",
        "ru": "карандаш",
        "image": "✏️",
        "imageFile": "/images/school/school-pencil.png",
        "sentence": "It is a pencil."
      },
      {
        "id": "pen",
        "word": "a pen",
        "ru": "ручка",
        "image": "🖊️",
        "imageFile": "/images/school/school-pen.png",
        "sentence": "It is a pen."
      },
      {
        "id": "eraser",
        "word": "an eraser",
        "ru": "ластик",
        "image": "🧽",
        "imageFile": "/images/school/school-eraser.png",
        "sentence": "It is an eraser."
      }
    ],
    "visual": {
      "image": "/images/school/school-supplies.jpg"
    }
  },
  {
    "id": "task-vocab-school-supplies-2",
    "sceneId": "vocab-garden-school-supplies",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match school things",
    "instruction": "Соедини слово и картинку.",
    "pairs": [
      {
        "id": "bag",
        "word": "a bag",
        "image": "🎒",
        "speak": "a bag"
      },
      {
        "id": "pen",
        "word": "a pen",
        "image": "🖊️",
        "speak": "a pen"
      },
      {
        "id": "pencil",
        "word": "a pencil",
        "image": "✏️",
        "speak": "a pencil"
      },
      {
        "id": "eraser",
        "word": "an eraser",
        "image": "🧽",
        "speak": "an eraser"
      }
    ],
    "visual": {
      "image": "/images/school/school-supplies.jpg"
    },
    "shufflePictures": true
  },
  {
    "id": "task-vocab-school-numbers-1",
    "sceneId": "vocab-garden-school-numbers",
    "type": "interactive_garden",
    "skillId": "vocabulary",
    "prompt": "Listen and look",
    "instruction": "Нажми цифры: one, two, three, four, five.",
    "gardenImage": "/images/school/numbers-12345.jpg",
    "gardenVariant": "numbers-garden numbers-5",
    "requiredWordList": "one, two, three, four, five",
    "items": [
      {
        "id": "one",
        "word": "one",
        "ru": "один",
        "image": "1",
        "sentence": "Number one."
      },
      {
        "id": "two",
        "word": "two",
        "ru": "два",
        "image": "2",
        "sentence": "Number two."
      },
      {
        "id": "three",
        "word": "three",
        "ru": "три",
        "image": "3",
        "sentence": "Number three."
      },
      {
        "id": "four",
        "word": "four",
        "ru": "четыре",
        "image": "4",
        "sentence": "Number four."
      },
      {
        "id": "five",
        "word": "five",
        "ru": "пять",
        "image": "5",
        "sentence": "Number five."
      }
    ],
    "visual": {
      "image": "/images/school/numbers-12345.jpg",
      "title": "Numbers",
      "caption": "one, two, three, four, five"
    }
  },
  {
    "id": "task-vocab-school-numbers-2",
    "sceneId": "vocab-garden-school-numbers",
    "type": "match_word_image",
    "skillId": "vocabulary",
    "prompt": "Match numbers",
    "instruction": "Соедини цифру и слово.",
    "pairs": [
      {
        "id": "one",
        "word": "1",
        "image": "one",
        "speak": "one"
      },
      {
        "id": "two",
        "word": "2",
        "image": "two",
        "speak": "two"
      },
      {
        "id": "three",
        "word": "3",
        "image": "three",
        "speak": "three"
      },
      {
        "id": "four",
        "word": "4",
        "image": "four",
        "speak": "four"
      },
      {
        "id": "five",
        "word": "5",
        "image": "five",
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/numbers-12345.jpg",
      "title": "Numbers",
      "caption": "one, two, three, four, five"
    },
    "shufflePictures": true
  },
  {
    "id": "task-school-collision-1",
    "sceneId": "school-collision",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Собери вещи. Выбери 2 ручки.",
    "prompt": "Choose: 2 ручки",
    "choices": [
      {
        "id": "onePen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "It is a pen"
      },
      {
        "id": "twoPens",
        "label": "two pens",
        "image": "🖊️🖊️",
        "isCorrect": true,
        "speak": "two pens"
      },
      {
        "id": "threePens",
        "label": "three pens",
        "image": "🖊️🖊️🖊️",
        "isCorrect": false,
        "speak": "three pens"
      },
      {
        "id": "twoPencils",
        "label": "two pencils",
        "image": "✏️✏️",
        "isCorrect": false,
        "speak": "two pencils"
      }
    ],
    "visual": {
      "image": "/images/school/school-collision.jpg",
      "title": "School things",
      "caption": "Собери вещи и извинись."
    }
  },
  {
    "id": "task-school-collision-2",
    "sceneId": "school-collision",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "two pen___",
    "sentenceBefore": "two pen",
    "sentenceAfter": "",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/school/school-collision.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-collision-3",
    "sceneId": "school-collision",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Собери вещи. Выбери три карандаша.",
    "prompt": "Choose: 3 карандаша",
    "choices": [
      {
        "id": "two",
        "label": "two pencils",
        "image": "✏️✏️",
        "isCorrect": false,
        "speak": "two pencils"
      },
      {
        "id": "three",
        "label": "three pencils",
        "image": "✏️✏️✏️",
        "isCorrect": true,
        "speak": "three pencils"
      },
      {
        "id": "one",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false,
        "speak": "It is a pencil"
      }
    ],
    "visual": {
      "image": "/images/school/school-collision.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-collision-4",
    "sceneId": "school-collision",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "three pencil___",
    "sentenceBefore": "three pencil",
    "sentenceAfter": "",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/school/school-collision.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-desk-choice",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "instruction": "Выбери, за какую парту хочешь сесть.",
    "prompt": "Choose your desk",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": true,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": true,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": true,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": true,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": true,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/desk-empty.jpg",
      "title": "Empty desk",
      "caption": "Выбери парту."
    },
    "noWrongAnswer": true,
    "noWrongChoice": true
  },
  {
    "id": "task-school-desk-books",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Учитель выдал предметы. Выбери 2 книги.",
    "prompt": "Choose: 2 книги",
    "choices": [
      {
        "id": "oneBook",
        "label": "It is a book",
        "image": "📕",
        "isCorrect": false,
        "speak": "It is a book"
      },
      {
        "id": "twoBooks",
        "label": "They are two books",
        "image": "📕📗",
        "isCorrect": true,
        "speak": "They are two books"
      },
      {
        "id": "twoPens",
        "label": "They are two pens",
        "image": "🖊️🖊️",
        "isCorrect": false,
        "speak": "They are two pens"
      }
    ],
    "visual": {
      "image": "/images/school/desk-empty.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-desk-notebook",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери 1 тетрадку.",
    "prompt": "Choose: тетрадь",
    "choices": [
      {
        "id": "notebook",
        "label": "It is a notebook",
        "image": "📓",
        "isCorrect": true,
        "speak": "It is a notebook"
      },
      {
        "id": "book",
        "label": "It is a book",
        "image": "📕",
        "isCorrect": false,
        "speak": "It is a book"
      },
      {
        "id": "ruler",
        "label": "It is a ruler",
        "image": "📏",
        "isCorrect": false,
        "speak": "It is a ruler"
      }
    ],
    "visual": {
      "image": "/images/school/desk-books.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-desk-pens",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 3 ручки.",
    "prompt": "Choose: 3 ручки",
    "choices": [
      {
        "id": "threePens",
        "label": "They are three pens",
        "image": "🖊️🖊️🖊️",
        "isCorrect": true,
        "speak": "They are three pens"
      },
      {
        "id": "onePen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "It is a pen"
      },
      {
        "id": "fivePencils",
        "label": "They are five pencils",
        "image": "✏️✏️✏️✏️✏️",
        "isCorrect": false,
        "speak": "They are five pencils"
      }
    ],
    "visual": {
      "image": "/images/school/desk-notebook.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-desk-eraser",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери 1 ластик.",
    "prompt": "Choose: ластик",
    "choices": [
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "🧽",
        "isCorrect": true,
        "speak": "It is an eraser"
      },
      {
        "id": "pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false,
        "speak": "It is a pencil"
      },
      {
        "id": "ruler",
        "label": "It is a ruler",
        "image": "📏",
        "isCorrect": false,
        "speak": "It is a ruler"
      }
    ],
    "visual": {
      "image": "/images/school/desk-pens.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-desk-pencils",
    "sceneId": "school-desk-supplies",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 5 карандашей.",
    "prompt": "Choose: 5 карандашей",
    "choices": [
      {
        "id": "fivePencils",
        "label": "They are five pencils",
        "image": "✏️✏️✏️✏️✏️",
        "isCorrect": true,
        "speak": "They are five pencils"
      },
      {
        "id": "fourPens",
        "label": "They are four pens",
        "image": "🖊️🖊️🖊️🖊️",
        "isCorrect": false,
        "speak": "They are four pens"
      },
      {
        "id": "onePencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false,
        "speak": "It is a pencil"
      }
    ],
    "visual": {
      "image": "/images/school/desk-eraser.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-meet-1",
    "sceneId": "school-meet-classmates",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "instruction": "Как сказать: Я новенький.",
    "prompt": "I ___ new.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "Classmate",
      "caption": "Познакомься."
    }
  },
  {
    "id": "task-school-meet-2",
    "sceneId": "school-meet-classmates",
    "type": "free_text",
    "skillId": "to_be",
    "instruction": "What is your name? Как тебя зовут?",
    "prompt": "I am ___.",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "name",
    "minLength": 1,
    "storeAs": "helperName",
    "successMessagePrefix": "Nice to meet you, ",
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-meet-3",
    "sceneId": "school-meet-classmates",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери: мне 5 лет.",
    "prompt": "Choose: мне 5 лет",
    "choices": [
      {
        "id": "five",
        "label": "I am five",
        "image": "",
        "isCorrect": true,
        "speak": "I am five"
      },
      {
        "id": "three",
        "label": "I am three",
        "image": "",
        "isCorrect": false,
        "speak": "I am three"
      },
      {
        "id": "pen",
        "label": "I am a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "I am a pen"
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-meet-4",
    "sceneId": "school-meet-classmates",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери: я девочка.",
    "prompt": "Choose: я девочка",
    "choices": [
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true,
        "speak": "I am a girl"
      },
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": false,
        "speak": "I am a boy"
      },
      {
        "id": "bag",
        "label": "I am a bag",
        "image": "🎒",
        "isCorrect": false,
        "speak": "I am a bag"
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-meet-5",
    "sceneId": "school-meet-classmates",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери: я мальчик.",
    "prompt": "Choose: я мальчик",
    "choices": [
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": false,
        "speak": "I am a girl"
      },
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true,
        "speak": "I am a boy"
      },
      {
        "id": "pen",
        "label": "I am a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "I am a pen"
      }
    ],
    "visual": {
      "image": "/images/school/boy-close-v18.png"
    }
  },
  {
    "id": "task-school-nonsense-1",
    "sceneId": "school-class-nonsense",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Посмотри на девочку. Это правда или ложь?",
    "prompt": "I am a pen.",
    "choices": [
      {
        "id": "true",
        "label": "True / правда",
        "image": "✅",
        "isCorrect": false
      },
      {
        "id": "false",
        "label": "False / ложь",
        "image": "❌",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "Girl",
      "caption": "Она не ручка."
    }
  },
  {
    "id": "task-school-nonsense-2",
    "sceneId": "school-class-nonsense",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Посмотри на девочку. Это правда или ложь?",
    "prompt": "I am a girl.",
    "choices": [
      {
        "id": "true",
        "label": "True / правда",
        "image": "✅",
        "isCorrect": true
      },
      {
        "id": "false",
        "label": "False / ложь",
        "image": "❌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-nonsense-3",
    "sceneId": "school-class-nonsense",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Посмотри на мальчика. Это правда или ложь?",
    "prompt": "I am a boy.",
    "choices": [
      {
        "id": "true",
        "label": "True / правда",
        "image": "✅",
        "isCorrect": true
      },
      {
        "id": "false",
        "label": "False / ложь",
        "image": "❌",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/boy-close-v18.png"
    }
  },
  {
    "id": "task-school-nonsense-4",
    "sceneId": "school-class-nonsense",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Посмотри на мальчика. Это правда или ложь?",
    "prompt": "I am an eraser.",
    "choices": [
      {
        "id": "true",
        "label": "True / правда",
        "image": "✅",
        "isCorrect": false
      },
      {
        "id": "false",
        "label": "False / ложь",
        "image": "❌",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/boy-close-v18.png"
    }
  },
  {
    "id": "task-school-nonsense-5",
    "sceneId": "school-class-nonsense",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "instruction": "Выбери правильное слово.",
    "prompt": "I ___ a girl.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader.png",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-nonsense-6",
    "sceneId": "school-class-nonsense",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "instruction": "Выбери правильное слово.",
    "prompt": "I ___ a boy.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/boy-close.png"
    }
  },
  {
    "id": "task-school-is-1",
    "sceneId": "school-team",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери: она.",
    "prompt": "Choose: она",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🎒",
        "isCorrect": false,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-is-2",
    "sceneId": "school-team",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери: он.",
    "prompt": "Choose: он",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🎒",
        "isCorrect": false,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-is-3",
    "sceneId": "school-team",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери: предмет.",
    "prompt": "Choose: предмет",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "📕",
        "isCorrect": true,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-is-4",
    "sceneId": "school-team",
    "type": "match_word_image",
    "skillId": "is_intro",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match: she / he / it",
    "pairs": [
      {
        "id": "she",
        "word": "She is",
        "image": "👧",
        "speak": "She is"
      },
      {
        "id": "he",
        "word": "He is",
        "image": "👦",
        "speak": "He is"
      },
      {
        "id": "it",
        "word": "It is",
        "image": "📕",
        "speak": "It is"
      }
    ],
    "shufflePictures": true,
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-phone-1",
    "sceneId": "school-phone-game",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Девочка говорит: мне 5 лет. Выбери, как передать это другому.",
    "prompt": "Choose: ей 5 лет",
    "choices": [
      {
        "id": "she5",
        "label": "She is five",
        "image": "",
        "isCorrect": true,
        "speak": "She is five"
      },
      {
        "id": "he5",
        "label": "He is five",
        "image": "",
        "isCorrect": false,
        "speak": "He is five"
      },
      {
        "id": "i5",
        "label": "I am five",
        "image": "",
        "isCorrect": false,
        "speak": "I am five"
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader-v18.png"
    }
  },
  {
    "id": "task-school-phone-2",
    "sceneId": "school-phone-game",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Мальчик говорит: я Артём. Выбери, как передать это другому.",
    "prompt": "Choose: он Артём",
    "choices": [
      {
        "id": "he",
        "label": "He is Artem",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is Artem"
      },
      {
        "id": "she",
        "label": "She is Artem",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is Artem"
      },
      {
        "id": "it",
        "label": "It is Artem",
        "image": "📕",
        "isCorrect": false,
        "speak": "It is Artem"
      }
    ],
    "visual": {
      "image": "/images/school/boy-close-v18.png"
    }
  },
  {
    "id": "task-school-phone-3",
    "sceneId": "school-phone-game",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Девочка говорит: я девочка.",
    "prompt": "Choose: она девочка",
    "choices": [
      {
        "id": "she",
        "label": "She is a girl",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is a girl"
      },
      {
        "id": "he",
        "label": "He is a girl",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is a girl"
      },
      {
        "id": "i",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": false,
        "speak": "I am a girl"
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader-v18.png"
    }
  },
  {
    "id": "task-school-phone-4",
    "sceneId": "school-phone-game",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Кот сказал: я мяу.",
    "prompt": "Choose: оно мяу",
    "choices": [
      {
        "id": "it",
        "label": "It is meow",
        "image": "🐱",
        "isCorrect": true,
        "speak": "It is meow"
      },
      {
        "id": "she",
        "label": "She is meow",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is meow"
      },
      {
        "id": "he",
        "label": "He is meow",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is meow"
      }
    ],
    "visual": {
      "image": "/images/school/girl-reader-v18.png"
    }
  },
  {
    "id": "task-school-phone-5",
    "sceneId": "school-phone-game",
    "type": "free_text",
    "skillId": "to_be",
    "instruction": "Я сказал: моё имя ___. Введи имя.",
    "prompt": "I am ___.",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "name",
    "minLength": 1,
    "storeAs": "helperName",
    "successMessagePrefix": "Great, ",
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-are-1",
    "sceneId": "school-meet-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они.",
    "prompt": "Choose: они",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": true,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/school/class-team-play.png"
    }
  },
  {
    "id": "task-school-are-2",
    "sceneId": "school-meet-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы.",
    "prompt": "Choose: мы",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-are-3",
    "sceneId": "school-meet-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: ты / вы.",
    "prompt": "Choose: ты / вы",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": true,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/school/two-kids-v18.png"
    }
  },
  {
    "id": "task-school-are-4",
    "sceneId": "school-meet-teams",
    "type": "match_word_image",
    "skillId": "are_intro",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match: we / they / you",
    "pairs": [
      {
        "id": "we",
        "word": "We are",
        "image": "👧👦",
        "speak": "We are"
      },
      {
        "id": "they",
        "word": "They are",
        "image": "👨‍👩‍👧‍👦",
        "speak": "They are"
      },
      {
        "id": "you",
        "word": "You are",
        "image": "👉",
        "speak": "You are"
      }
    ],
    "shufflePictures": true,
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-desc-1",
    "sceneId": "school-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они красивые.",
    "prompt": "Choose: они красивые",
    "choices": [
      {
        "id": "five",
        "label": "They are five",
        "image": "",
        "isCorrect": false,
        "speak": "They are five"
      },
      {
        "id": "is3",
        "label": "They is three",
        "image": "",
        "isCorrect": false,
        "speak": "They is three"
      },
      {
        "id": "beautiful",
        "label": "They are beautiful",
        "image": "",
        "isCorrect": true,
        "speak": "They are beautiful"
      },
      {
        "id": "we1",
        "label": "We are one",
        "image": "",
        "isCorrect": false,
        "speak": "We are one"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-desc-2",
    "sceneId": "school-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы высокие.",
    "prompt": "Choose: мы высокие",
    "choices": [
      {
        "id": "youShort",
        "label": "You are short",
        "image": "",
        "isCorrect": false,
        "speak": "You are short"
      },
      {
        "id": "weFour",
        "label": "We are four",
        "image": "",
        "isCorrect": false,
        "speak": "We are four"
      },
      {
        "id": "theyTall",
        "label": "They is tall",
        "image": "",
        "isCorrect": false,
        "speak": "They is tall"
      },
      {
        "id": "weTall",
        "label": "We are tall",
        "image": "",
        "isCorrect": true,
        "speak": "We are tall"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-desc-3",
    "sceneId": "school-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: тебе 4 года.",
    "prompt": "Choose: тебе 4 года",
    "choices": [
      {
        "id": "you4",
        "label": "You are four",
        "image": "",
        "isCorrect": true,
        "speak": "You are four"
      },
      {
        "id": "they4",
        "label": "They are four",
        "image": "",
        "isCorrect": false,
        "speak": "They are four"
      },
      {
        "id": "she4",
        "label": "She is four",
        "image": "",
        "isCorrect": false,
        "speak": "She is four"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-desc-4",
    "sceneId": "school-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они ручки.",
    "prompt": "Choose: они ручки",
    "choices": [
      {
        "id": "we",
        "label": "We are pens",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "We are pens"
      },
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "It is a pen"
      },
      {
        "id": "pens",
        "label": "They are pens",
        "image": "🖊️🖊️",
        "isCorrect": true,
        "speak": "They are pens"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-desc-5",
    "sceneId": "school-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы ластики.",
    "prompt": "Choose: мы ластики",
    "choices": [
      {
        "id": "erasers",
        "label": "We are erasers",
        "image": "🧽🧽",
        "isCorrect": true,
        "speak": "We are erasers"
      },
      {
        "id": "it",
        "label": "It is an eraser",
        "image": "🧽",
        "isCorrect": false,
        "speak": "It is an eraser"
      },
      {
        "id": "they",
        "label": "They is erasers",
        "image": "🧽🧽",
        "isCorrect": false,
        "speak": "They is erasers"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-final-1",
    "sceneId": "school-final-review",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери правильный артикль.",
    "prompt": "___ eraser",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/school-supplies-final1.png"
    }
  },
  {
    "id": "task-school-final-2",
    "sceneId": "school-final-review",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: рюкзак.",
    "prompt": "Choose: рюкзак",
    "choices": [
      {
        "id": "bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": true,
        "speak": "It is a bag"
      },
      {
        "id": "pen",
        "label": "It is a pen",
        "image": "🖊️",
        "isCorrect": false,
        "speak": "It is a pen"
      },
      {
        "id": "eraser",
        "label": "It is an eraser",
        "image": "🧽",
        "isCorrect": false,
        "speak": "It is an eraser"
      }
    ],
    "visual": {
      "image": "/images/school/school-supplies-final1.png"
    }
  },
  {
    "id": "task-school-final-3",
    "sceneId": "school-final-review",
    "type": "choose_correct_image",
    "skillId": "numbers",
    "instruction": "Английский язык — 5 кабинет.",
    "prompt": "Choose: five",
    "choices": [
      {
        "id": "one",
        "label": "one",
        "image": "",
        "isCorrect": false,
        "speak": "one"
      },
      {
        "id": "two",
        "label": "two",
        "image": "",
        "isCorrect": false,
        "speak": "two"
      },
      {
        "id": "three",
        "label": "three",
        "image": "",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "four",
        "label": "four",
        "image": "",
        "isCorrect": false,
        "speak": "four"
      },
      {
        "id": "five",
        "label": "five",
        "image": "",
        "isCorrect": true,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/school/numbers-clean-12345.png"
    }
  },
  {
    "id": "task-school-final-4",
    "sceneId": "school-final-review",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "They are three pen___.",
    "sentenceBefore": "They are three pen",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/school/school-supplies-final1.png"
    }
  },
  {
    "id": "task-school-final-5",
    "sceneId": "school-final-review",
    "type": "simple_dialogue",
    "skillId": "to_be",
    "instruction": "Как сказать: я ученик.",
    "prompt": "I ___ a pupil.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-final-6",
    "sceneId": "school-final-review",
    "type": "simple_dialogue",
    "skillId": "is_intro",
    "instruction": "Выбери правильное слово.",
    "prompt": "She ___ a girl.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": true
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-final-7",
    "sceneId": "school-final-review",
    "type": "simple_dialogue",
    "skillId": "are_intro",
    "instruction": "Выбери правильное слово.",
    "prompt": "They ___ beautiful.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "is",
        "label": "is",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-school-final-8",
    "sceneId": "school-final-review",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы готовы.",
    "prompt": "Choose: мы готовы",
    "choices": [
      {
        "id": "we",
        "label": "We are ready",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are ready"
      },
      {
        "id": "they",
        "label": "They are ready",
        "image": "👨‍👩‍👧‍👦",
        "isCorrect": false,
        "speak": "They are ready"
      },
      {
        "id": "she",
        "label": "She is ready",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is ready"
      }
    ],
    "visual": {
      "image": "/images/school/class-circle.png"
    }
  },
  {
    "id": "task-vocab-school-classroom-1",
    "sceneId": "vocab-garden-school-classroom",
    "type": "interactive_garden",
    "skillId": "vocab",
    "instruction": "Нажми слова: a bag, a book, a notebook, a ruler, a pen, a pencil, an eraser.",
    "prompt": "Listen and look",
    "gardenImage": "/images/school/school-supplies-full.jpg",
    "gardenVariant": "school-supplies-garden school-supplies-full",
    "requiredWordList": "a bag, a book, a notebook, a ruler, a pen, a pencil, an eraser",
    "items": [
      {
        "id": "bag",
        "word": "a bag",
        "ru": "рюкзак",
        "image": "🎒",
        "sentence": "It is a bag."
      },
      {
        "id": "book",
        "word": "a book",
        "ru": "книга",
        "image": "📕",
        "sentence": "It is a book."
      },
      {
        "id": "notebook",
        "word": "a notebook",
        "ru": "тетрадь",
        "image": "📓",
        "sentence": "It is a notebook."
      },
      {
        "id": "ruler",
        "word": "a ruler",
        "ru": "линейка",
        "image": "📏",
        "sentence": "It is a ruler."
      },
      {
        "id": "pen",
        "word": "a pen",
        "ru": "ручка",
        "image": "🖊️",
        "sentence": "It is a pen."
      },
      {
        "id": "pencil",
        "word": "a pencil",
        "ru": "карандаш",
        "image": "✏️",
        "sentence": "It is a pencil."
      },
      {
        "id": "eraser",
        "word": "an eraser",
        "ru": "ластик",
        "image": "🧽",
        "sentence": "It is an eraser."
      }
    ],
    "visual": {
      "image": "/images/school/school-supplies-full.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-vocab-school-classroom-2",
    "sceneId": "vocab-garden-school-classroom",
    "type": "match_word_image",
    "skillId": "vocab",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match school things",
    "pairs": [
      {
        "id": "book",
        "word": "a book",
        "image": "📕",
        "speak": "a book"
      },
      {
        "id": "notebook",
        "word": "a notebook",
        "image": "📓",
        "speak": "a notebook"
      },
      {
        "id": "ruler",
        "word": "a ruler",
        "image": "📏",
        "speak": "a ruler"
      },
      {
        "id": "pen",
        "word": "a pen",
        "image": "🖊️",
        "speak": "a pen"
      },
      {
        "id": "eraser",
        "word": "an eraser",
        "image": "🧽",
        "speak": "an eraser"
      }
    ],
    "shufflePictures": true,
    "visual": {
      "image": "/images/school/school-supplies-full.jpg",
      "title": "",
      "caption": ""
    }
  },
  {
    "id": "task-school-collision-bags",
    "sceneId": "school-collision",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Собери вещи. Выбери два рюкзака.",
    "prompt": "Choose: 2 рюкзака",
    "visual": {
      "image": "/images/school/school-collision.jpg"
    },
    "choices": [
      {
        "id": "one-bag",
        "label": "It is a bag",
        "image": "🎒",
        "isCorrect": false
      },
      {
        "id": "two-bags",
        "label": "two bags",
        "image": "🎒🎒",
        "isCorrect": true
      },
      {
        "id": "three-bags",
        "label": "three bags",
        "image": "🎒🎒🎒",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-school-collision-erasers",
    "sceneId": "school-collision",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Собери вещи. Выбери 3 ластика.",
    "prompt": "Choose: 3 ластика",
    "visual": {
      "image": "/images/school/school-collision.jpg"
    },
    "choices": [
      {
        "id": "one-eraser",
        "label": "It is an eraser",
        "image": "⬜",
        "isCorrect": false
      },
      {
        "id": "three-erasers",
        "label": "three erasers",
        "image": "⬜⬜⬜",
        "isCorrect": true
      },
      {
        "id": "two-erasers",
        "label": "two erasers",
        "image": "⬜⬜",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-school-collision-pencils",
    "sceneId": "school-collision",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Собери вещи. Выбери три карандаша.",
    "prompt": "Choose: 3 карандаша",
    "visual": {
      "image": "/images/school/school-collision.jpg"
    },
    "choices": [
      {
        "id": "four-pencils",
        "label": "four pencils",
        "image": "✏️✏️✏️✏️",
        "isCorrect": true
      },
      {
        "id": "three-pencils",
        "label": "three pencils",
        "image": "✏️✏️✏️",
        "isCorrect": false
      },
      {
        "id": "one-pencil",
        "label": "It is a pencil",
        "image": "✏️",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-vocab-playground-toys",
    "sceneId": "vocab-garden-playground-toys",
    "type": "interactive_garden",
    "skillId": "articles",
    "instruction": "Нажми слова: a car, a train, a doll, an airplane.",
    "prompt": "Listen and look",
    "gardenImage": "/images/playground/toys-basic.png",
    "gardenVariant": "playground-toys",
    "requiredWordList": "a car, a train, a doll, an airplane",
    "items": [
      {
        "id": "car",
        "word": "a car",
        "ru": "машинка",
        "image": "",
        "sentence": "It is a car."
      },
      {
        "id": "train",
        "word": "a train",
        "ru": "поезд",
        "image": "",
        "sentence": "It is a train."
      },
      {
        "id": "doll",
        "word": "a doll",
        "ru": "кукла",
        "image": "",
        "sentence": "It is a doll."
      },
      {
        "id": "airplane",
        "word": "an airplane",
        "ru": "самолёт",
        "image": "",
        "sentence": "It is an airplane."
      }
    ]
  },
  {
    "id": "task-vocab-playground-colors",
    "sceneId": "vocab-garden-playground-colors",
    "type": "interactive_garden",
    "skillId": "articles",
    "instruction": "Нажми цвета: red, green, blue, pink.",
    "prompt": "Listen and look",
    "gardenImage": "/images/playground/colors.png",
    "gardenVariant": "playground-colors",
    "requiredWordList": "red, green, blue, pink",
    "items": [
      {
        "id": "red",
        "word": "red",
        "ru": "красный",
        "image": "🔴",
        "sentence": "It is red."
      },
      {
        "id": "green",
        "word": "green",
        "ru": "зелёный",
        "image": "🟢",
        "sentence": "It is green."
      },
      {
        "id": "blue",
        "word": "blue",
        "ru": "голубой",
        "image": "🔵",
        "sentence": "It is blue."
      },
      {
        "id": "pink",
        "word": "pink",
        "ru": "розовый",
        "image": "🌸",
        "sentence": "It is pink."
      }
    ]
  },
  {
    "id": "task-vocab-playground-new-toys",
    "sceneId": "vocab-garden-playground-new-toys",
    "type": "interactive_garden",
    "skillId": "articles",
    "instruction": "Нажми слова: a car, a train, a doll, an airplane, a ball, a truck, a kite, a bike.",
    "prompt": "Listen and look",
    "gardenImage": "/images/playground/toys-full-truck.png",
    "gardenVariant": "playground-toys-full",
    "requiredWordList": "a car, a train, a doll, an airplane, a ball, a truck, a kite, a bike",
    "items": [
      {
        "id": "car",
        "word": "a car",
        "ru": "машинка",
        "image": "",
        "sentence": "It is a car."
      },
      {
        "id": "train",
        "word": "a train",
        "ru": "поезд",
        "image": "",
        "sentence": "It is a train."
      },
      {
        "id": "doll",
        "word": "a doll",
        "ru": "кукла",
        "image": "",
        "sentence": "It is a doll."
      },
      {
        "id": "airplane",
        "word": "an airplane",
        "ru": "самолёт",
        "image": "",
        "sentence": "It is an airplane."
      },
      {
        "id": "ball",
        "word": "a ball",
        "ru": "мячик",
        "image": "",
        "sentence": "It is a ball."
      },
      {
        "id": "truck",
        "word": "a truck",
        "ru": "грузовик",
        "image": "",
        "sentence": "It is a truck."
      },
      {
        "id": "kite",
        "word": "a kite",
        "ru": "воздушный змей",
        "image": "",
        "sentence": "It is a kite."
      },
      {
        "id": "bike",
        "word": "a bike",
        "ru": "велосипед",
        "image": "",
        "sentence": "It is a bike."
      }
    ]
  },
  {
    "id": "task-playground-article-car",
    "sceneId": "playground-look-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери артикль для слова car.",
    "prompt": "___ car",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": false,
        "speak": "an car"
      }
    ],
    "visual": {
      "emoji": "🚗",
      "title": "car",
      "caption": "машинка"
    }
  },
  {
    "id": "task-playground-article-train",
    "sceneId": "playground-look-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери артикль для слова train.",
    "prompt": "___ train",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": false,
        "speak": "an train"
      }
    ],
    "visual": {
      "emoji": "🚂",
      "title": "train",
      "caption": "поезд"
    }
  },
  {
    "id": "task-playground-article-doll",
    "sceneId": "playground-look-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери артикль для слова doll.",
    "prompt": "___ doll",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": false,
        "speak": "an doll"
      }
    ],
    "visual": {
      "emoji": "🪆",
      "title": "doll",
      "caption": "кукла"
    }
  },
  {
    "id": "task-playground-article-airplane",
    "sceneId": "playground-look-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери артикль для слова airplane.",
    "prompt": "___ airplane",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": false,
        "speak": "a airplane"
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": true,
        "speak": "an airplane"
      }
    ],
    "visual": {
      "emoji": "✈️",
      "title": "airplane",
      "caption": "самолётик"
    }
  },
  {
    "id": "task-playground-toys-garden",
    "sceneId": "playground-look-toys",
    "type": "interactive_garden",
    "skillId": "articles",
    "instruction": "Нажми игрушки и послушай слова.",
    "prompt": "Listen and look",
    "gardenImage": "/images/playground/toys-basic.png",
    "gardenVariant": "playground-toys",
    "requiredWordList": "a car, a train, a doll, an airplane",
    "items": [
      {
        "id": "car",
        "word": "a car",
        "ru": "машинка",
        "image": "",
        "sentence": "It is a car."
      },
      {
        "id": "train",
        "word": "a train",
        "ru": "поезд",
        "image": "",
        "sentence": "It is a train."
      },
      {
        "id": "doll",
        "word": "a doll",
        "ru": "кукла",
        "image": "",
        "sentence": "It is a doll."
      },
      {
        "id": "airplane",
        "word": "an airplane",
        "ru": "самолёт",
        "image": "",
        "sentence": "It is an airplane."
      }
    ]
  },
  {
    "id": "task-playground-toys-match",
    "sceneId": "playground-look-toys",
    "type": "match_word_image",
    "skillId": "articles",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match toys",
    "pairs": [
      {
        "id": "car",
        "word": "a car",
        "image": "🚗",
        "speak": "a car"
      },
      {
        "id": "train",
        "word": "a train",
        "image": "🚂",
        "speak": "a train"
      },
      {
        "id": "doll",
        "word": "a doll",
        "image": "🪆",
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "word": "an airplane",
        "image": "✈️",
        "speak": "an airplane"
      }
    ],
    "shufflePictures": true,
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Lex toys",
      "caption": "Игрушки Лекса."
    }
  },
  {
    "id": "task-playground-lex-car",
    "sceneId": "playground-look-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Лекс проверяет правило.",
    "prompt": "Мы говорим a car?",
    "choices": [
      {
        "id": "yes",
        "label": "Yes / да",
        "image": "✅",
        "isCorrect": true
      },
      {
        "id": "no",
        "label": "No / нет",
        "image": "❌",
        "isCorrect": false
      }
    ],
    "visual": {
      "emoji": "🦊",
      "title": "Лекс",
      "caption": "Проверь a / an."
    }
  },
  {
    "id": "task-playground-toy-doll",
    "sceneId": "playground-choose-toy",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: куклу.",
    "prompt": "Choose: куклу",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-doll-fill",
    "sceneId": "playground-choose-toy",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " doll.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-train",
    "sceneId": "playground-choose-toy",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: поезд.",
    "prompt": "Choose: поезд",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "It is a train"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-train-fill",
    "sceneId": "playground-choose-toy",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " train.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-airplane",
    "sceneId": "playground-choose-toy",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: самолётик.",
    "prompt": "Choose: самолётик",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "It is an airplane"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-airplane-fill",
    "sceneId": "playground-choose-toy",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " airplane.",
    "acceptedAnswers": [
      "an"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-car",
    "sceneId": "playground-choose-toy",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: машинку.",
    "prompt": "Choose: машинку",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "It is a car"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-toy-car-fill",
    "sceneId": "playground-choose-toy",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " car.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-basic.png",
      "title": "Toys",
      "caption": "Выберите игрушку."
    }
  },
  {
    "id": "task-playground-count-cars",
    "sceneId": "playground-count-toys",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 2 машинки.",
    "prompt": "Choose: 2 машинки",
    "choices": [
      {
        "id": "one",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "two",
        "label": "2 cars",
        "image": "🚗 🚗",
        "isCorrect": true,
        "speak": "two cars"
      },
      {
        "id": "three",
        "label": "3 cars",
        "image": "🚗 🚗 🚗",
        "isCorrect": false,
        "speak": "three cars"
      },
      {
        "id": "four",
        "label": "4 cars",
        "image": "🚗 🚗 🚗 🚗",
        "isCorrect": false,
        "speak": "four cars"
      },
      {
        "id": "five",
        "label": "5 cars",
        "image": "🚗 🚗 🚗 🚗 🚗",
        "isCorrect": false,
        "speak": "five cars"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-cars-s",
    "sceneId": "playground-count-toys",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "2 car",
    "sentenceAfter": "___",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-trains",
    "sceneId": "playground-count-toys",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 5 поездов.",
    "prompt": "Choose: 5 поездов",
    "choices": [
      {
        "id": "one",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "two",
        "label": "2 trains",
        "image": "🚂 🚂",
        "isCorrect": false,
        "speak": "two trains"
      },
      {
        "id": "three",
        "label": "3 trains",
        "image": "🚂 🚂 🚂",
        "isCorrect": false,
        "speak": "three trains"
      },
      {
        "id": "four",
        "label": "4 trains",
        "image": "🚂 🚂 🚂 🚂",
        "isCorrect": false,
        "speak": "four trains"
      },
      {
        "id": "five",
        "label": "5 trains",
        "image": "🚂 🚂 🚂 🚂 🚂",
        "isCorrect": true,
        "speak": "five trains"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-trains-s",
    "sceneId": "playground-count-toys",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "5 train",
    "sentenceAfter": "___",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-dolls",
    "sceneId": "playground-count-toys",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 3 куклы.",
    "prompt": "Choose: 3 куклы",
    "choices": [
      {
        "id": "one",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "two",
        "label": "2 dolls",
        "image": "🪆 🪆",
        "isCorrect": false,
        "speak": "two dolls"
      },
      {
        "id": "three",
        "label": "3 dolls",
        "image": "🪆 🪆 🪆",
        "isCorrect": true,
        "speak": "three dolls"
      },
      {
        "id": "four",
        "label": "4 dolls",
        "image": "🪆 🪆 🪆 🪆",
        "isCorrect": false,
        "speak": "four dolls"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-dolls-s",
    "sceneId": "playground-count-toys",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "3 doll",
    "sentenceAfter": "___",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-airplanes",
    "sceneId": "playground-count-toys",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 4 самолёта.",
    "prompt": "Choose: 4 самолёта",
    "choices": [
      {
        "id": "one",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "two",
        "label": "2 airplanes",
        "image": "✈️ ✈️",
        "isCorrect": false,
        "speak": "two airplanes"
      },
      {
        "id": "three",
        "label": "3 airplanes",
        "image": "✈️ ✈️ ✈️",
        "isCorrect": false,
        "speak": "three airplanes"
      },
      {
        "id": "four",
        "label": "4 airplanes",
        "image": "✈️ ✈️ ✈️ ✈️",
        "isCorrect": true,
        "speak": "four airplanes"
      },
      {
        "id": "five",
        "label": "5 airplanes",
        "image": "✈️ ✈️ ✈️ ✈️ ✈️",
        "isCorrect": false,
        "speak": "five airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-count-airplanes-s",
    "sceneId": "playground-count-toys",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "4 airplane",
    "sentenceAfter": "___",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/playground/playground-sandbox-scene.png",
      "title": "Playground",
      "caption": "Посчитай игрушки."
    }
  },
  {
    "id": "task-playground-sandbox-plane1",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Добавь 1 самолёт.",
    "prompt": "Choose: 1 самолёт",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": false,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": false,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": false,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-empty.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-sandbox-planes",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Добавь ещё 4 самолёта.",
    "prompt": "Choose: 4 самолёта",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": false,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": false,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": true,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-plane1.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-sandbox-trains2",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Положи 2 поезда.",
    "prompt": "Choose: 2 поезда",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": false,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": true,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": false,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-planes5.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-sandbox-train1",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Добавь ещё 1 поезд.",
    "prompt": "Choose: 1 поезд",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": false,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": false,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": false,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-trains2.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-sandbox-doll",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Добавь 1 куклу.",
    "prompt": "Choose: 1 куклу",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": false,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": false,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": false,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-trains3.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-sandbox-cars3",
    "sceneId": "playground-sandbox",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Добавь 3 машинки.",
    "prompt": "Choose: 3 машинки",
    "choices": [
      {
        "id": "car",
        "label": "It is a car",
        "image": "🚗",
        "isCorrect": false,
        "speak": "It is a car"
      },
      {
        "id": "cars",
        "label": "They are 3 cars",
        "image": "🚗🚗🚗",
        "isCorrect": true,
        "speak": "They are 3 cars"
      },
      {
        "id": "train",
        "label": "It is a train",
        "image": "🚂",
        "isCorrect": false,
        "speak": "It is a train"
      },
      {
        "id": "trains",
        "label": "They are 2 trains",
        "image": "🚂🚂",
        "isCorrect": false,
        "speak": "They are 2 trains"
      },
      {
        "id": "doll",
        "label": "It is a doll",
        "image": "🪆",
        "isCorrect": false,
        "speak": "It is a doll"
      },
      {
        "id": "airplane",
        "label": "It is an airplane",
        "image": "✈️",
        "isCorrect": false,
        "speak": "It is an airplane"
      },
      {
        "id": "airplanes",
        "label": "They are 4 airplanes",
        "image": "✈️✈️✈️✈️",
        "isCorrect": false,
        "speak": "They are 4 airplanes"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-doll.png",
      "title": "Sandbox",
      "caption": "Песочница."
    }
  },
  {
    "id": "task-playground-color-doll",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Кукла розовая. Выбери кукла розовая.",
    "prompt": "Choose: кукла розовая",
    "choices": [
      {
        "id": "blue",
        "label": "It is blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "It is blue"
      },
      {
        "id": "green",
        "label": "It is green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "It is green"
      },
      {
        "id": "pink",
        "label": "It is pink",
        "image": "🌸",
        "isCorrect": true,
        "speak": "It is pink"
      },
      {
        "id": "red",
        "label": "It is red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "It is red"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-color-car-red",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Машина красная. Выбери машина красная.",
    "prompt": "Choose: машина красная",
    "choices": [
      {
        "id": "blue",
        "label": "It is blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "It is blue"
      },
      {
        "id": "green",
        "label": "It is green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "It is green"
      },
      {
        "id": "pink",
        "label": "It is pink",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is pink"
      },
      {
        "id": "red",
        "label": "It is red",
        "image": "🔴",
        "isCorrect": true,
        "speak": "It is red"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-color-car-blue",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Машина голубая. Выбери машина голубая.",
    "prompt": "Choose: машина голубая",
    "choices": [
      {
        "id": "blue",
        "label": "It is blue",
        "image": "🔵",
        "isCorrect": true,
        "speak": "It is blue"
      },
      {
        "id": "green",
        "label": "It is green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "It is green"
      },
      {
        "id": "pink",
        "label": "It is pink",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is pink"
      },
      {
        "id": "red",
        "label": "It is red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "It is red"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-color-car-green",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Машина зелёная. Выбери машина зелёная.",
    "prompt": "Choose: машина зелёная",
    "choices": [
      {
        "id": "blue",
        "label": "It is blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "It is blue"
      },
      {
        "id": "green",
        "label": "It is green",
        "image": "🟢",
        "isCorrect": true,
        "speak": "It is green"
      },
      {
        "id": "pink",
        "label": "It is pink",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is pink"
      },
      {
        "id": "red",
        "label": "It is red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "It is red"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-color-train",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Поезд голубой, красный и зелёный. Выбери поезд голубой, красный и зелёный.",
    "prompt": "Choose: поезд голубой, красный, зелёный",
    "choices": [
      {
        "id": "a",
        "label": "It is blue, green and pink",
        "image": "🔵🟢🌸",
        "isCorrect": false,
        "speak": "It is blue, green and pink"
      },
      {
        "id": "b",
        "label": "It is green and red",
        "image": "🟢🔴",
        "isCorrect": false,
        "speak": "It is green and red"
      },
      {
        "id": "c",
        "label": "It is pink, green and blue",
        "image": "🌸🟢🔵",
        "isCorrect": false,
        "speak": "It is pink, green and blue"
      },
      {
        "id": "d",
        "label": "It is blue, red and green",
        "image": "🔵🔴🟢",
        "isCorrect": true,
        "speak": "It is blue, red and green"
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-color-airplane",
    "sceneId": "playground-colors",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Самолёт зелёный, красный и синий. Выбери самолёт зелёный, красный и синий.",
    "prompt": "Choose: самолёт зелёный, красный, синий",
    "choices": [
      {
        "id": "d",
        "label": "It is blue, red and green",
        "image": "🔵🔴🟢",
        "isCorrect": false
      },
      {
        "id": "a",
        "label": "It is green, red and blue",
        "image": "🟢🔴🔵",
        "isCorrect": true
      },
      {
        "id": "b",
        "label": "It is green and red",
        "image": "🟢🔴",
        "isCorrect": false
      },
      {
        "id": "c",
        "label": "It is pink, green and blue",
        "image": "🌸🟢🔵",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/sandbox-final.png",
      "title": "Toy colors",
      "caption": "Опиши цвета."
    }
  },
  {
    "id": "task-playground-pronoun-she",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим про девочку?",
    "prompt": "Choose: девочку",
    "choices": [
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is"
      },
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-pronoun-it",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим про предмет или животное?",
    "prompt": "Choose: предмет",
    "choices": [
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": true,
        "speak": "It is"
      },
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-pronoun-he",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим про мальчика?",
    "prompt": "Choose: мальчика",
    "choices": [
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is"
      },
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-alena",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: она Алёна.",
    "prompt": "Choose: она Алёна",
    "choices": [
      {
        "id": "he",
        "label": "He is Alena",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "she",
        "label": "She is Alena",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "it",
        "label": "It is Alena",
        "image": "🧸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-age-boy",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: ему 5 лет.",
    "prompt": "Choose: ему 5 лет",
    "choices": [
      {
        "id": "she5",
        "label": "She is 5",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is five"
      },
      {
        "id": "i5",
        "label": "I am 5",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am five"
      },
      {
        "id": "he5",
        "label": "He is 5",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is five"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-she-beautiful",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Она красивая.",
    "prompt": "She ___.",
    "choices": [
      {
        "id": "c0",
        "label": "is beautiful",
        "image": "🌸",
        "isCorrect": true,
        "speak": "is beautiful"
      },
      {
        "id": "c1",
        "label": "am Alena",
        "image": "👧",
        "isCorrect": false,
        "speak": "am Alena"
      },
      {
        "id": "c2",
        "label": "is 5",
        "image": "5",
        "isCorrect": false,
        "speak": "is 5"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-he-short",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Он низкий.",
    "prompt": "He ___.",
    "choices": [
      {
        "id": "c0",
        "label": "is short",
        "image": "👦",
        "isCorrect": true,
        "speak": "is short"
      },
      {
        "id": "c1",
        "label": "am Max",
        "image": "🧸",
        "isCorrect": false,
        "speak": "am Max"
      },
      {
        "id": "c2",
        "label": "is 5",
        "image": "5",
        "isCorrect": false,
        "speak": "is 5"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-she-four",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Ей 4 года.",
    "prompt": "She ___.",
    "choices": [
      {
        "id": "he4",
        "label": "He is 4",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is four"
      },
      {
        "id": "she4",
        "label": "She is 4",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is four"
      },
      {
        "id": "i4",
        "label": "I am 4",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am four"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-he-five",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Ему 5 лет.",
    "prompt": "He ___.",
    "choices": [
      {
        "id": "she5",
        "label": "She is 5",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is five"
      },
      {
        "id": "i5",
        "label": "I am 5",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am five"
      },
      {
        "id": "he5",
        "label": "He is 5",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is five"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-she-tall",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери часть фразы: она высокая.",
    "prompt": "She ___.",
    "choices": [
      {
        "id": "c0",
        "label": "is tall",
        "image": "🦒",
        "isCorrect": true,
        "speak": "is tall"
      },
      {
        "id": "c1",
        "label": "am Alena",
        "image": "👧",
        "isCorrect": false,
        "speak": "am Alena"
      },
      {
        "id": "c2",
        "label": "is 4",
        "image": "🧸",
        "isCorrect": false,
        "speak": "is 4"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-kid-he-beautiful",
    "sceneId": "playground-describe-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери часть фразы: он красивый.",
    "prompt": "He ___.",
    "choices": [
      {
        "id": "c0",
        "label": "is beautiful",
        "image": "🌸",
        "isCorrect": true,
        "speak": "is beautiful"
      },
      {
        "id": "c1",
        "label": "am Max",
        "image": "🧸",
        "isCorrect": false,
        "speak": "am Max"
      },
      {
        "id": "c2",
        "label": "is 5",
        "image": "5",
        "isCorrect": false,
        "speak": "is 5"
      }
    ],
    "visual": {
      "image": "/images/playground/kids-sandbox.png",
      "title": "Playground kids",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-me-age",
    "sceneId": "playground-about-me",
    "type": "fill_blank",
    "skillId": "to_be",
    "instruction": "Сколько тебе лет?",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "acceptedAnswers": [],
    "answerPlaceholder": "age",
    "visual": {
      "emoji": "🎂",
      "title": "Age",
      "caption": "Можно вписать свой возраст."
    },
    "allowAnyNumber": true
  },
  {
    "id": "task-playground-me-boy",
    "sceneId": "playground-about-me",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери: я мальчик.",
    "prompt": "Choose: я мальчик",
    "choices": [
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-playground-me-girl",
    "sceneId": "playground-about-me",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери: я девочка.",
    "prompt": "Choose: я девочка",
    "choices": [
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": false
      }
    ]
  },
  {
    "id": "task-playground-me-name",
    "sceneId": "playground-about-me",
    "type": "free_text",
    "skillId": "to_be",
    "instruction": "What is your name? Как тебя зовут?",
    "prompt": "What is your name?",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 1
  },
  {
    "id": "task-playground-hi",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери, как сказать привет.",
    "prompt": "Choose: привет",
    "choices": [
      {
        "id": "hi",
        "label": "Hi!",
        "image": "👋",
        "isCorrect": true,
        "speak": "Hi"
      },
      {
        "id": "bye",
        "label": "Bye!",
        "image": "👋",
        "isCorrect": false,
        "speak": "Bye"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-i",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери, как сказать я.",
    "prompt": "Choose: я",
    "choices": [
      {
        "id": "iam",
        "label": "I am",
        "image": "🙋",
        "isCorrect": true,
        "speak": "I am"
      },
      {
        "id": "heis",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "sheis",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-lex",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери, как сказать: он Лекс.",
    "prompt": "Choose: он Лекс",
    "choices": [
      {
        "id": "he",
        "label": "He is Lex",
        "image": "🦊",
        "isCorrect": true
      },
      {
        "id": "she",
        "label": "She is Lex",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "i",
        "label": "I am Lex",
        "image": "🙋",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-kate",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Девочка говорит: Hi, I am Kate. Запомни и расскажи Лексу: она Катя.",
    "prompt": "Choose: она Катя",
    "choices": [
      {
        "id": "she",
        "label": "She is Kate",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "he",
        "label": "He is Kate",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "i",
        "label": "I am Kate",
        "image": "🙋",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-kate-age",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Катя говорит: I am 3. Как сказать: ей 3?",
    "prompt": "Choose: ей 3",
    "choices": [
      {
        "id": "she3",
        "label": "She is 3",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is three"
      },
      {
        "id": "he3",
        "label": "He is 3",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "i3",
        "label": "I am 3",
        "image": "🙋",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-kate-beautiful",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: она красивая?",
    "prompt": "Choose: она красивая",
    "choices": [
      {
        "id": "she",
        "label": "She is beautiful",
        "image": "🌸",
        "isCorrect": true
      },
      {
        "id": "he",
        "label": "He is beautiful",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "it",
        "label": "It is beautiful",
        "image": "🧸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-max",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Мальчик говорит: Hi, I am Max. Как сказать: он Максим?",
    "prompt": "Choose: он Максим",
    "choices": [
      {
        "id": "he",
        "label": "He is Max",
        "image": "👦",
        "isCorrect": true
      },
      {
        "id": "she",
        "label": "She is Max",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "i",
        "label": "I am Max",
        "image": "🙋",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-max-age",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Макс говорит: I am 5. Как сказать: ему 5?",
    "prompt": "Choose: ему 5",
    "choices": [
      {
        "id": "he5",
        "label": "He is 5",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is five"
      },
      {
        "id": "she5",
        "label": "She is 5",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "it5",
        "label": "It is 5",
        "image": "🧸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-max-tall",
    "sceneId": "playground-meet-kids",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: он высокий?",
    "prompt": "Choose: он высокий",
    "choices": [
      {
        "id": "he",
        "label": "He is tall",
        "image": "🦒",
        "isCorrect": true
      },
      {
        "id": "she",
        "label": "She is tall",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "we",
        "label": "We are tall",
        "image": "👧👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-playground-block-pink",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Добавь кубик, которого не хватает. У нас уже красный, голубой, зелёный, а остался?",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": true,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-start.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-block-red",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Давай заново построим замок. Какой первый кубик?",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": false,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": true,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-pink.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-block-blue1",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Теперь нужно снова положить кубик.",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": false,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": true,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-red.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-block-green",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Теперь нужно снова положить кубик.",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": false,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": true,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-blue1.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-block-blue2",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Теперь нужно снова положить кубик.",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": true,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-green.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-block-pink2",
    "sceneId": "playground-blocks",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Теперь нужно снова положить кубик.",
    "prompt": "Choose a cube",
    "choices": [
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": true,
        "speak": "pink"
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false,
        "speak": "green"
      },
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": false,
        "speak": "red"
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false,
        "speak": "blue"
      }
    ],
    "visual": {
      "image": "/images/playground/blocks-final.png",
      "title": "Cube tower",
      "caption": "Выбери цвет кубика."
    }
  },
  {
    "id": "task-playground-new-ball",
    "sceneId": "playground-new-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: мячик.",
    "prompt": "Choose: мячик",
    "choices": [
      {
        "id": "ball",
        "label": "It is a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "It is a ball"
      },
      {
        "id": "truck",
        "label": "It is a truck",
        "image": "🚚",
        "isCorrect": false,
        "speak": "It is a truck"
      },
      {
        "id": "kite",
        "label": "It is a kite",
        "image": "🪁",
        "isCorrect": false,
        "speak": "It is a kite"
      },
      {
        "id": "bike",
        "label": "It is a bike",
        "image": "🚲",
        "isCorrect": false,
        "speak": "It is a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-ball-fill",
    "sceneId": "playground-new-toys",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " ball.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-kite",
    "sceneId": "playground-new-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: воздушный змей.",
    "prompt": "Choose: воздушный змей",
    "choices": [
      {
        "id": "ball",
        "label": "It is a ball",
        "image": "🏀",
        "isCorrect": false,
        "speak": "It is a ball"
      },
      {
        "id": "truck",
        "label": "It is a truck",
        "image": "🚚",
        "isCorrect": false,
        "speak": "It is a truck"
      },
      {
        "id": "kite",
        "label": "It is a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "It is a kite"
      },
      {
        "id": "bike",
        "label": "It is a bike",
        "image": "🚲",
        "isCorrect": false,
        "speak": "It is a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-kite-fill",
    "sceneId": "playground-new-toys",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " kite.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-truck",
    "sceneId": "playground-new-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: грузовик.",
    "prompt": "Choose: грузовик",
    "choices": [
      {
        "id": "ball",
        "label": "It is a ball",
        "image": "🏀",
        "isCorrect": false,
        "speak": "It is a ball"
      },
      {
        "id": "truck",
        "label": "It is a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "It is a truck"
      },
      {
        "id": "kite",
        "label": "It is a kite",
        "image": "🪁",
        "isCorrect": false,
        "speak": "It is a kite"
      },
      {
        "id": "bike",
        "label": "It is a bike",
        "image": "🚲",
        "isCorrect": false,
        "speak": "It is a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-truck-fill",
    "sceneId": "playground-new-toys",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " truck.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-bike",
    "sceneId": "playground-new-toys",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери: велосипед.",
    "prompt": "Choose: велосипед",
    "choices": [
      {
        "id": "ball",
        "label": "It is a ball",
        "image": "🏀",
        "isCorrect": false,
        "speak": "It is a ball"
      },
      {
        "id": "truck",
        "label": "It is a truck",
        "image": "🚚",
        "isCorrect": false,
        "speak": "It is a truck"
      },
      {
        "id": "kite",
        "label": "It is a kite",
        "image": "🪁",
        "isCorrect": false,
        "speak": "It is a kite"
      },
      {
        "id": "bike",
        "label": "It is a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "It is a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-new-bike-fill",
    "sceneId": "playground-new-toys",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " bike.",
    "acceptedAnswers": [
      "a"
    ],
    "answerPlaceholder": "a / an",
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "More toys",
      "caption": "Новые игрушки."
    }
  },
  {
    "id": "task-playground-shop-1",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери игрушку для обмена. Правильного ответа нет.",
    "prompt": "Trade: выбери игрушку",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-2",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-3",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-4",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-5",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-6",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-7",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-shop-8",
    "sceneId": "playground-toy-shop",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Trade: меняем игрушку на новую.",
    "prompt": "Trade: ___ on",
    "choices": [
      {
        "id": "car",
        "label": "a car",
        "image": "🚗",
        "isCorrect": true,
        "speak": "a car"
      },
      {
        "id": "train",
        "label": "a train",
        "image": "🚂",
        "isCorrect": true,
        "speak": "a train"
      },
      {
        "id": "doll",
        "label": "a doll",
        "image": "🪆",
        "isCorrect": true,
        "speak": "a doll"
      },
      {
        "id": "airplane",
        "label": "an airplane",
        "image": "✈️",
        "isCorrect": true,
        "speak": "an airplane"
      },
      {
        "id": "ball",
        "label": "a ball",
        "image": "🏀",
        "isCorrect": true,
        "speak": "a ball"
      },
      {
        "id": "truck",
        "label": "a truck",
        "image": "🚚",
        "isCorrect": true,
        "speak": "a truck"
      },
      {
        "id": "kite",
        "label": "a kite",
        "image": "🪁",
        "isCorrect": true,
        "speak": "a kite"
      },
      {
        "id": "bike",
        "label": "a bike",
        "image": "🚲",
        "isCorrect": true,
        "speak": "a bike"
      }
    ],
    "visual": {
      "image": "/images/playground/toys-full.png",
      "title": "Toy shop",
      "caption": "Обмен игрушками."
    },
    "noWrongChoice": true
  },
  {
    "id": "task-playground-groups-they",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим они?",
    "prompt": "Choose: они",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is"
      },
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": true,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      },
      {
        "id": "i",
        "label": "I am",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-we",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим мы?",
    "prompt": "Choose: мы",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is"
      },
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      },
      {
        "id": "i",
        "label": "I am",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-you",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как говорим ты / вы?",
    "prompt": "Choose: ты / вы",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is"
      },
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": true,
        "speak": "You are"
      },
      {
        "id": "i",
        "label": "I am",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am"
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-children-they",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они дети.",
    "prompt": "Choose: они дети",
    "choices": [
      {
        "id": "a",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": true
      },
      {
        "id": "b",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "c",
        "label": "You are children",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-children-we",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы дети.",
    "prompt": "Choose: мы дети",
    "choices": [
      {
        "id": "a",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": false
      },
      {
        "id": "b",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": true
      },
      {
        "id": "c",
        "label": "You are children",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-age-you",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: тебе 5.",
    "prompt": "Choose: тебе 5",
    "choices": [
      {
        "id": "a",
        "label": "You are 5",
        "image": "👉",
        "isCorrect": true,
        "speak": "You are five"
      },
      {
        "id": "b",
        "label": "They are 5",
        "image": "👧👦👧",
        "isCorrect": false
      },
      {
        "id": "c",
        "label": "We are 5",
        "image": "👧👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-tall-they",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери часть фразы: они высокие.",
    "prompt": "They ___.",
    "choices": [
      {
        "id": "are-tall",
        "label": "are tall",
        "image": "🦒",
        "isCorrect": true,
        "speak": "They are tall"
      },
      {
        "id": "are-cars",
        "label": "are cars",
        "image": "🚗",
        "isCorrect": false
      },
      {
        "id": "are-five",
        "label": "are 5",
        "image": "👧👦👧",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-beautiful-we",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери часть фразы: мы красивые.",
    "prompt": "We ___.",
    "choices": [
      {
        "id": "are-beautiful",
        "label": "are beautiful",
        "image": "🌸",
        "isCorrect": true,
        "speak": "We are beautiful"
      },
      {
        "id": "are-cars",
        "label": "are cars",
        "image": "🚗",
        "isCorrect": false
      },
      {
        "id": "are-five",
        "label": "are 5",
        "image": "👧👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-groups-short-you",
    "sceneId": "playground-draw-groups",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери часть фразы: ты низкий.",
    "prompt": "You ___.",
    "choices": [
      {
        "id": "are-short",
        "label": "are short",
        "image": "🐭",
        "isCorrect": true,
        "speak": "You are short"
      },
      {
        "id": "are-bikes",
        "label": "are bikes",
        "image": "🚲",
        "isCorrect": false
      },
      {
        "id": "are-five",
        "label": "are 5",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "Playground groups",
      "caption": "Ребята на площадке."
    }
  },
  {
    "id": "task-playground-coloring-easy-1",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "She is red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "she",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-easy-2",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "I am pink.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "i",
    "color": "pink",
    "colorRu": "розовый"
  },
  {
    "id": "task-playground-coloring-easy-3",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "You are pink.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "you",
    "color": "pink",
    "colorRu": "розовый"
  },
  {
    "id": "task-playground-coloring-easy-4",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "It is blue.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "it",
    "color": "blue",
    "colorRu": "голубой"
  },
  {
    "id": "task-playground-coloring-easy-5",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "We are blue.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "we",
    "color": "blue",
    "colorRu": "голубой"
  },
  {
    "id": "task-playground-coloring-easy-6",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "They are red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "they",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-easy-7",
    "sceneId": "playground-color-easy",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "He is red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-easy.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "he",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-medium-1",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "He is pink.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "he",
    "color": "pink",
    "colorRu": "розовый"
  },
  {
    "id": "task-playground-coloring-medium-2",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "I am red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "i",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-medium-3",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "You are pink.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "you",
    "color": "pink",
    "colorRu": "розовый"
  },
  {
    "id": "task-playground-coloring-medium-4",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "It is green.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "it",
    "color": "green",
    "colorRu": "зелёный"
  },
  {
    "id": "task-playground-coloring-medium-5",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "We are green.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "we",
    "color": "green",
    "colorRu": "зелёный"
  },
  {
    "id": "task-playground-coloring-medium-6",
    "sceneId": "playground-color-medium",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "She is blue.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-medium.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "she",
    "color": "blue",
    "colorRu": "голубой"
  },
  {
    "id": "task-playground-coloring-hard-1",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "He is green.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "he",
    "color": "green",
    "colorRu": "зелёный"
  },
  {
    "id": "task-playground-coloring-hard-2",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "I am red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "i",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-hard-3",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "You are green.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "you",
    "color": "green",
    "colorRu": "зелёный"
  },
  {
    "id": "task-playground-coloring-hard-4",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "It is green.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "it",
    "color": "green",
    "colorRu": "зелёный"
  },
  {
    "id": "task-playground-coloring-hard-5",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "We are red.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "we",
    "color": "red",
    "colorRu": "красный"
  },
  {
    "id": "task-playground-coloring-hard-6",
    "sceneId": "playground-color-hard",
    "type": "coloring_click",
    "skillId": "is_intro",
    "instruction": "Нажми на подходящего ребёнка, группу или предмет на картинке.",
    "prompt": "She is blue.",
    "visual": {
      "emoji": "🖍️",
      "title": "Coloring",
      "caption": "Нажми на картинку."
    },
    "image": "/images/playground/coloring-hard.png",
    "targets": [
      {
        "id": "i",
        "label": "I",
        "left": 18,
        "top": 19,
        "width": 12,
        "height": 34
      },
      {
        "id": "you",
        "label": "you",
        "left": 34,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "he",
        "label": "he",
        "left": 52,
        "top": 19,
        "width": 13,
        "height": 35
      },
      {
        "id": "she",
        "label": "she",
        "left": 72,
        "top": 18,
        "width": 14,
        "height": 36
      },
      {
        "id": "it",
        "label": "it",
        "left": 8,
        "top": 61,
        "width": 14,
        "height": 28
      },
      {
        "id": "we",
        "label": "we",
        "left": 34,
        "top": 61,
        "width": 23,
        "height": 35
      },
      {
        "id": "they",
        "label": "they",
        "left": 62,
        "top": 60,
        "width": 29,
        "height": 36
      }
    ],
    "correctTargetId": "she",
    "color": "blue",
    "colorRu": "голубой"
  },
  {
    "id": "task-playground-final-1",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Вставь a или an.",
    "prompt": "It is ___ airplane.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "image": "",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-2",
    "sceneId": "playground-go-home",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "They are 3 car",
    "sentenceAfter": "",
    "acceptedAnswers": [
      "s"
    ],
    "answerPlaceholder": "",
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-3",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Кукла розовая.",
    "prompt": "It ___.",
    "choices": [
      {
        "id": "pink",
        "label": "is pink",
        "image": "🩷",
        "isCorrect": true
      },
      {
        "id": "blue",
        "label": "is blue",
        "image": "🔵",
        "isCorrect": false
      },
      {
        "id": "red",
        "label": "is red",
        "image": "🔴",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-4",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Как сказать: я здесь?",
    "prompt": "I ___.",
    "choices": [
      {
        "id": "am",
        "label": "am",
        "image": "🙋",
        "isCorrect": true
      },
      {
        "id": "is",
        "label": "is",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "are",
        "image": "👧👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-5",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери: она красивая.",
    "prompt": "Choose: она красивая",
    "choices": [
      {
        "id": "a",
        "label": "She is beautiful",
        "image": "👧",
        "isCorrect": true
      },
      {
        "id": "b",
        "label": "He is beautiful",
        "image": "👦",
        "isCorrect": false
      },
      {
        "id": "c",
        "label": "They are beautiful",
        "image": "👧👦👧",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-6",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они дети.",
    "prompt": "Choose: они дети",
    "choices": [
      {
        "id": "a",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": true
      },
      {
        "id": "b",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "c",
        "label": "It is a child",
        "image": "🧸",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-7",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери новую игрушку: велосипед.",
    "prompt": "Choose: велосипед",
    "choices": [
      {
        "id": "bike",
        "label": "It is a bike",
        "image": "🚲",
        "isCorrect": true
      },
      {
        "id": "kite",
        "label": "It is a kite",
        "image": "🪁",
        "isCorrect": false
      },
      {
        "id": "ball",
        "label": "It is a ball",
        "image": "🏀",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-final-8",
    "sceneId": "playground-go-home",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери цвет: красный.",
    "prompt": "Choose: красный",
    "choices": [
      {
        "id": "red",
        "label": "red",
        "image": "🔴",
        "isCorrect": true
      },
      {
        "id": "green",
        "label": "green",
        "image": "🟢",
        "isCorrect": false
      },
      {
        "id": "pink",
        "label": "pink",
        "image": "🩷",
        "isCorrect": false
      },
      {
        "id": "blue",
        "label": "blue",
        "image": "🔵",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/playground/playground-drawing-colored.png",
      "title": "Playground day",
      "caption": "Повторение дня."
    }
  },
  {
    "id": "task-playground-meet-name",
    "sceneId": "playground-meet-kids",
    "type": "free_text",
    "skillId": "to_be",
    "instruction": "What is your name? Как тебя зовут?",
    "prompt": "What is your name?",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 1,
    "visual": {
      "image": "/images/playground/playground-groups.png",
      "title": "New kids",
      "caption": "Познакомься с ребятами."
    }
  },
  {
    "id": "task-vocab-park-nature",
    "sceneId": "vocab-garden-park-nature",
    "type": "interactive_garden",
    "skillId": "articles",
    "instruction": "Нажми слова: a tree, an ice cream, a dog, a flower.",
    "prompt": "Listen and look",
    "gardenImage": "/images/park/park-vocab-nature.jpg",
    "gardenVariant": "park-nature-garden",
    "requiredWordList": "a tree, an ice cream, a dog, a flower",
    "items": [
      {
        "id": "tree",
        "word": "a tree",
        "ru": "дерево",
        "image": "🌳",
        "sentence": "It is a tree.",
        "speak": "a tree"
      },
      {
        "id": "icecream",
        "word": "an ice cream",
        "ru": "мороженое",
        "image": "🍦",
        "sentence": "It is an ice cream.",
        "speak": "an ice cream"
      },
      {
        "id": "dog",
        "word": "a dog",
        "ru": "собачка",
        "image": "🐶",
        "sentence": "It is a dog.",
        "speak": "a dog"
      },
      {
        "id": "flower",
        "word": "a flower",
        "ru": "цветок",
        "image": "🌸",
        "sentence": "It is a flower.",
        "speak": "a flower"
      }
    ]
  },
  {
    "id": "task-vocab-park-weather",
    "sceneId": "vocab-garden-park-weather",
    "type": "interactive_garden",
    "skillId": "is_intro",
    "instruction": "Нажми слова: sunny, rainy, hot, cold.",
    "prompt": "What is the weather?",
    "gardenImage": "/images/park/weather-collage.jpg",
    "gardenVariant": "park-weather-garden",
    "requiredWordList": "sunny, rainy, hot, cold",
    "items": [
      {
        "id": "sunny",
        "word": "sunny",
        "ru": "солнечно",
        "image": "☀️",
        "sentence": "It is sunny.",
        "speak": "sunny"
      },
      {
        "id": "rainy",
        "word": "rainy",
        "ru": "дождливо",
        "image": "🌧️",
        "sentence": "It is rainy.",
        "speak": "rainy"
      },
      {
        "id": "hot",
        "word": "hot",
        "ru": "жарко",
        "image": "🥵",
        "sentence": "It is hot.",
        "speak": "hot"
      },
      {
        "id": "cold",
        "word": "cold",
        "ru": "холодно",
        "image": "🥶",
        "sentence": "It is cold.",
        "speak": "cold"
      }
    ]
  },
  {
    "id": "task-park-choose-dog",
    "sceneId": "park-walk",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери собачку.",
    "prompt": "Choose: собачку",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": true,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Выбери слово."
    }
  },
  {
    "id": "task-park-fill-dog",
    "sceneId": "park-walk",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an для dog.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " dog.",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "a"
    ],
    "visual": {
      "emoji": "✏️",
      "title": "Write",
      "caption": "Впиши ответ."
    }
  },
  {
    "id": "task-park-choose-icecream",
    "sceneId": "park-walk",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери мороженое.",
    "prompt": "Choose: мороженое",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": true,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Выбери слово."
    }
  },
  {
    "id": "task-park-fill-icecream",
    "sceneId": "park-walk",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an для ice cream.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " ice cream.",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "an"
    ],
    "visual": {
      "emoji": "✏️",
      "title": "Write",
      "caption": "Впиши ответ."
    }
  },
  {
    "id": "task-park-choose-tree",
    "sceneId": "park-walk",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери дерево.",
    "prompt": "Choose: дерево",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": true,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Выбери слово."
    }
  },
  {
    "id": "task-park-fill-tree",
    "sceneId": "park-walk",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an для tree.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " tree.",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "a"
    ],
    "visual": {
      "emoji": "✏️",
      "title": "Write",
      "caption": "Впиши ответ."
    }
  },
  {
    "id": "task-park-choose-flower",
    "sceneId": "park-walk",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Выбери цветочек.",
    "prompt": "Choose: цветочек",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": true,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Выбери слово."
    }
  },
  {
    "id": "task-park-fill-flower",
    "sceneId": "park-walk",
    "type": "fill_blank",
    "skillId": "articles",
    "instruction": "Впиши a или an для flower.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "It is ",
    "sentenceAfter": " flower.",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "a"
    ],
    "visual": {
      "emoji": "✏️",
      "title": "Write",
      "caption": "Впиши ответ."
    }
  },
  {
    "id": "task-park-match-nature",
    "sceneId": "park-walk",
    "type": "match_word_image",
    "skillId": "articles",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match park words",
    "shufflePictures": true,
    "pairs": [
      {
        "id": "tree",
        "word": "a tree",
        "image": "🌳",
        "speak": "a tree"
      },
      {
        "id": "icecream",
        "word": "an ice cream",
        "image": "🍦",
        "speak": "an ice cream"
      },
      {
        "id": "dog",
        "word": "a dog",
        "image": "🐶",
        "speak": "a dog"
      },
      {
        "id": "flower",
        "word": "a flower",
        "image": "🌸",
        "speak": "a flower"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Соедини слова."
    }
  },
  {
    "id": "task-park-hide-flower",
    "sceneId": "park-hide-seek",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "За чем прячется Лекс?",
    "prompt": "Choose where is Lex?",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": true,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/lex-flower.jpg",
      "title": "Where is Lex?",
      "caption": "Найди Лекса."
    }
  },
  {
    "id": "task-park-hide-tree",
    "sceneId": "park-hide-seek",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "За чем прячется Лекс?",
    "prompt": "Choose where is Lex?",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": true,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/lex-tree.jpg",
      "title": "Where is Lex?",
      "caption": "Найди Лекса."
    }
  },
  {
    "id": "task-park-hide-icecream",
    "sceneId": "park-hide-seek",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "За чем прячется Лекс?",
    "prompt": "Choose where is Lex?",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": true,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/lex-icecream.jpg",
      "title": "Where is Lex?",
      "caption": "Найди Лекса."
    }
  },
  {
    "id": "task-park-hide-dog",
    "sceneId": "park-hide-seek",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "За чем прячется Лекс?",
    "prompt": "Choose where is Lex?",
    "choices": [
      {
        "id": "tree",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "icecream",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "dog",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": true,
        "speak": "It is a dog"
      },
      {
        "id": "flower",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      }
    ],
    "visual": {
      "image": "/images/park/lex-dog.jpg",
      "title": "Where is Lex?",
      "caption": "Найди Лекса."
    }
  },
  {
    "id": "task-park-count-dogs",
    "sceneId": "park-many-things",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 3 собачки.",
    "prompt": "Choose: 3 собачки",
    "choices": [
      {
        "id": "one",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "2",
        "label": "2 dogs",
        "image": "🐶 🐶",
        "isCorrect": false,
        "speak": "2 dogs"
      },
      {
        "id": "3",
        "label": "3 dogs",
        "image": "🐶 🐶 🐶",
        "isCorrect": true,
        "speak": "3 dogs"
      },
      {
        "id": "4",
        "label": "4 dogs",
        "image": "🐶 🐶 🐶 🐶",
        "isCorrect": false,
        "speak": "4 dogs"
      },
      {
        "id": "5",
        "label": "5 dogs",
        "image": "🐶 🐶 🐶 🐶 🐶",
        "isCorrect": false,
        "speak": "5 dogs"
      }
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Many things",
      "caption": "Выбери количество."
    }
  },
  {
    "id": "task-park-fill-dogs",
    "sceneId": "park-many-things",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "3 dog",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Plural -s",
      "caption": "Сделай множественное число."
    }
  },
  {
    "id": "task-park-count-icecreams",
    "sceneId": "park-many-things",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 5 мороженых.",
    "prompt": "Choose: 5 мороженых",
    "choices": [
      {
        "id": "one",
        "label": "It is an ice cream",
        "image": "🍦",
        "isCorrect": false,
        "speak": "It is an ice cream"
      },
      {
        "id": "2",
        "label": "2 ice creams",
        "image": "🍦 🍦",
        "isCorrect": false,
        "speak": "2 ice creams"
      },
      {
        "id": "3",
        "label": "3 ice creams",
        "image": "🍦 🍦 🍦",
        "isCorrect": false,
        "speak": "3 ice creams"
      },
      {
        "id": "4",
        "label": "4 ice creams",
        "image": "🍦 🍦 🍦 🍦",
        "isCorrect": false,
        "speak": "4 ice creams"
      },
      {
        "id": "5",
        "label": "5 ice creams",
        "image": "🍦 🍦 🍦 🍦 🍦",
        "isCorrect": true,
        "speak": "5 ice creams"
      }
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Many things",
      "caption": "Выбери количество."
    }
  },
  {
    "id": "task-park-fill-icecreams",
    "sceneId": "park-many-things",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "5 ice cream",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Plural -s",
      "caption": "Сделай множественное число."
    }
  },
  {
    "id": "task-park-count-trees",
    "sceneId": "park-many-things",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 2 дерева.",
    "prompt": "Choose: 2 дерева",
    "choices": [
      {
        "id": "one",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a tree"
      },
      {
        "id": "2",
        "label": "2 trees",
        "image": "🌳 🌳",
        "isCorrect": true,
        "speak": "2 trees"
      },
      {
        "id": "3",
        "label": "3 trees",
        "image": "🌳 🌳 🌳",
        "isCorrect": false,
        "speak": "3 trees"
      },
      {
        "id": "4",
        "label": "4 trees",
        "image": "🌳 🌳 🌳 🌳",
        "isCorrect": false,
        "speak": "4 trees"
      },
      {
        "id": "5",
        "label": "5 trees",
        "image": "🌳 🌳 🌳 🌳 🌳",
        "isCorrect": false,
        "speak": "5 trees"
      }
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Many things",
      "caption": "Выбери количество."
    }
  },
  {
    "id": "task-park-fill-trees",
    "sceneId": "park-many-things",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "2 tree",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Plural -s",
      "caption": "Сделай множественное число."
    }
  },
  {
    "id": "task-park-count-flowers",
    "sceneId": "park-many-things",
    "type": "choose_correct_image",
    "skillId": "plural",
    "instruction": "Выбери 3 цветочка.",
    "prompt": "Choose: 3 цветочка",
    "choices": [
      {
        "id": "one",
        "label": "It is a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "It is a flower"
      },
      {
        "id": "2",
        "label": "2 flowers",
        "image": "🌸 🌸",
        "isCorrect": false,
        "speak": "2 flowers"
      },
      {
        "id": "3",
        "label": "3 flowers",
        "image": "🌸 🌸 🌸",
        "isCorrect": true,
        "speak": "3 flowers"
      },
      {
        "id": "4",
        "label": "4 flowers",
        "image": "🌸 🌸 🌸 🌸",
        "isCorrect": false,
        "speak": "4 flowers"
      },
      {
        "id": "5",
        "label": "5 flowers",
        "image": "🌸 🌸 🌸 🌸 🌸",
        "isCorrect": false,
        "speak": "5 flowers"
      }
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Many things",
      "caption": "Выбери количество."
    }
  },
  {
    "id": "task-park-fill-flowers",
    "sceneId": "park-many-things",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "3 flower",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/park-many-things.jpg",
      "title": "Plural -s",
      "caption": "Сделай множественное число."
    }
  },
  {
    "id": "task-park-hi",
    "sceneId": "park-meet-ben",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Выбери, как сказать привет.",
    "prompt": "Choose: привет",
    "choices": [
      {
        "id": "hi",
        "label": "Hi!",
        "image": "👋",
        "isCorrect": true,
        "speak": "Hi"
      },
      {
        "id": "dog",
        "label": "a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "a dog"
      },
      {
        "id": "five",
        "label": "5",
        "image": "5️⃣",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "Gardener Ben",
      "caption": "Познакомься с Беном."
    }
  },
  {
    "id": "task-park-i-am-lex",
    "sceneId": "park-meet-ben",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Как сказать: я Лекс.",
    "prompt": "Choose: я Лекс",
    "choices": [
      {
        "id": "iam",
        "label": "I am Lex",
        "image": "🦊",
        "isCorrect": true,
        "speak": "I am Lex"
      },
      {
        "id": "itis",
        "label": "It is Lex",
        "image": "🧸",
        "isCorrect": false,
        "speak": "It is Lex"
      },
      {
        "id": "heis",
        "label": "He is Lex",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is Lex"
      }
    ],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "Gardener Ben",
      "caption": "I am Lex."
    }
  },
  {
    "id": "task-park-i-am",
    "sceneId": "park-meet-ben",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Садовник: Hi! What is your name? Выбери: меня зовут.",
    "prompt": "Choose: меня зовут",
    "choices": [
      {
        "id": "iam",
        "label": "I am",
        "image": "🙋",
        "isCorrect": true,
        "speak": "I am"
      },
      {
        "id": "flower",
        "label": "a flower",
        "image": "🌸",
        "isCorrect": false,
        "speak": "a flower"
      },
      {
        "id": "five",
        "label": "5",
        "image": "5️⃣",
        "isCorrect": false,
        "speak": "five"
      }
    ],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "What is your name?",
      "caption": "Ответь Бену."
    }
  },
  {
    "id": "task-park-name",
    "sceneId": "park-meet-ben",
    "type": "free_text",
    "skillId": "to_be",
    "instruction": "What is your name? Как тебя зовут?",
    "prompt": "What is your name?",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "Name",
    "minLength": 1,
    "storeAs": "helperName",
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "I am...",
      "caption": "Введи имя."
    }
  },
  {
    "id": "task-park-age-pick",
    "sceneId": "park-meet-ben",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Садовник: How old are you? Выбери, как начать ответ.",
    "prompt": "Choose: мне лет",
    "choices": [
      {
        "id": "three",
        "label": "3",
        "image": "3️⃣",
        "isCorrect": false,
        "speak": "three"
      },
      {
        "id": "dog",
        "label": "a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "a dog"
      },
      {
        "id": "iam",
        "label": "I am",
        "image": "🙋",
        "isCorrect": true,
        "speak": "I am"
      }
    ],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "How old are you?",
      "caption": "Ответь про возраст."
    }
  },
  {
    "id": "task-park-age-fill",
    "sceneId": "park-meet-ben",
    "type": "fill_blank",
    "skillId": "to_be",
    "instruction": "How old are you? Сколько тебе лет?",
    "prompt": "I am ___.",
    "sentenceBefore": "I am ",
    "sentenceAfter": ".",
    "answerPlaceholder": "age",
    "allowAnyNumber": true,
    "acceptedAnswers": [],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "Age",
      "caption": "Введи возраст цифрой."
    }
  },
  {
    "id": "task-park-boy-girl",
    "sceneId": "park-meet-ben",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Ben: I am a boy. А ты? Выбери, что подходит тебе.",
    "prompt": "Choose: about you",
    "choices": [
      {
        "id": "girl",
        "label": "I am a girl",
        "image": "👧",
        "isCorrect": true,
        "speak": "I am a girl"
      },
      {
        "id": "tree",
        "label": "I am a tree",
        "image": "🌳",
        "isCorrect": false,
        "speak": "I am a tree"
      },
      {
        "id": "boy",
        "label": "I am a boy",
        "image": "👦",
        "isCorrect": true,
        "speak": "I am a boy"
      }
    ],
    "visual": {
      "image": "/images/park/gardener-ben.jpg",
      "title": "I am...",
      "caption": "Выбери про себя."
    }
  },
  {
    "id": "task-park-pronoun-girl",
    "sceneId": "park-help-ben",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Назови помощников Бена. Как говорим про девочку?",
    "prompt": "Choose: девочку",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "She / he / it."
    }
  },
  {
    "id": "task-park-pronoun-boy",
    "sceneId": "park-help-ben",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Назови помощников Бена. Как говорим про мальчика?",
    "prompt": "Choose: мальчика",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "She / he / it."
    }
  },
  {
    "id": "task-park-pronoun-dog",
    "sceneId": "park-help-ben",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Назови помощников Бена. Как говорим про собачку?",
    "prompt": "Choose: собачку",
    "choices": [
      {
        "id": "she",
        "label": "She is",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is"
      },
      {
        "id": "he",
        "label": "He is",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is"
      },
      {
        "id": "it",
        "label": "It is",
        "image": "🐶",
        "isCorrect": true,
        "speak": "It is"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "She / he / it."
    }
  },
  {
    "id": "task-park-flowers-fill",
    "sceneId": "park-help-ben",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Как сказать цветочки? Впиши s.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "flower",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "flowers",
      "caption": "Сделай множественное число."
    }
  },
  {
    "id": "task-park-kate",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: она Катя.",
    "prompt": "Choose: она Катя",
    "choices": [
      {
        "id": "she",
        "label": "She is Kate",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is Kate"
      },
      {
        "id": "he",
        "label": "He is Kate",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is Kate"
      },
      {
        "id": "it",
        "label": "It is Kate",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is Kate"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-kate-age",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: ей 6.",
    "prompt": "Choose: ей 6",
    "choices": [
      {
        "id": "he6",
        "label": "He is 6",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is six"
      },
      {
        "id": "she6",
        "label": "She is 6",
        "image": "👧",
        "isCorrect": true,
        "speak": "She is six"
      },
      {
        "id": "i6",
        "label": "I am 6",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am six"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-kate-beautiful",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: она красивая.",
    "prompt": "She ___.",
    "choices": [
      {
        "id": "age",
        "label": "is 6",
        "image": "6️⃣",
        "isCorrect": false,
        "speak": "She is six"
      },
      {
        "id": "beautiful",
        "label": "is beautiful",
        "image": "🌸",
        "isCorrect": true,
        "speak": "She is beautiful"
      },
      {
        "id": "name",
        "label": "is Kate",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is Kate"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-max",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: он Макс.",
    "prompt": "Choose: он Макс",
    "choices": [
      {
        "id": "he",
        "label": "He is Max",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is Max"
      },
      {
        "id": "she",
        "label": "She is Max",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is Max"
      },
      {
        "id": "it",
        "label": "It is Max",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is Max"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-max-age",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: ему 3.",
    "prompt": "Choose: ему 3",
    "choices": [
      {
        "id": "she3",
        "label": "She is 3",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is three"
      },
      {
        "id": "he3",
        "label": "He is 3",
        "image": "👦",
        "isCorrect": true,
        "speak": "He is three"
      },
      {
        "id": "i3",
        "label": "I am 3",
        "image": "🙋",
        "isCorrect": false,
        "speak": "I am three"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-max-tall",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: он высокий.",
    "prompt": "He ___.",
    "choices": [
      {
        "id": "name",
        "label": "is Max",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is Max"
      },
      {
        "id": "tall",
        "label": "is tall",
        "image": "🦒",
        "isCorrect": true,
        "speak": "He is tall"
      },
      {
        "id": "age",
        "label": "is 3",
        "image": "3️⃣",
        "isCorrect": false,
        "speak": "He is three"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-dog-it",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: это собачка.",
    "prompt": "Choose: это собачка",
    "choices": [
      {
        "id": "she",
        "label": "She is a dog",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is a dog"
      },
      {
        "id": "it",
        "label": "It is a dog",
        "image": "🐶",
        "isCorrect": true,
        "speak": "It is a dog"
      },
      {
        "id": "he",
        "label": "He is a dog",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is a dog"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-dog-age",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: ему 4.",
    "prompt": "Choose: ему 4",
    "choices": [
      {
        "id": "it4",
        "label": "It is 4",
        "image": "🐶",
        "isCorrect": true,
        "speak": "It is four"
      },
      {
        "id": "he4",
        "label": "He is 4",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is four"
      },
      {
        "id": "she4",
        "label": "She is 4",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is four"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-dog-short",
    "sceneId": "park-describe-helpers",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: она маленькая.",
    "prompt": "It ___.",
    "choices": [
      {
        "id": "name",
        "label": "is a dog",
        "image": "🐶",
        "isCorrect": false,
        "speak": "It is a dog"
      },
      {
        "id": "short",
        "label": "is short",
        "image": "🐭",
        "isCorrect": true,
        "speak": "It is short"
      },
      {
        "id": "age",
        "label": "is 4",
        "image": "4️⃣",
        "isCorrect": false,
        "speak": "It is four"
      }
    ],
    "visual": {
      "image": "/images/park/ben-helpers.jpg",
      "title": "Ben's helpers",
      "caption": "Выбери фразу."
    }
  },
  {
    "id": "task-park-weather-sunny",
    "sceneId": "park-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери как сказать солнечно.",
    "prompt": "Choose: солнечно",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": true,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/park-sunny.jpg",
      "title": "Weather",
      "caption": "Выбери как сказать солнечно."
    }
  },
  {
    "id": "task-park-weather-rainy",
    "sceneId": "park-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери как сказать дождливо.",
    "prompt": "Choose: дождливо",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": true,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/park-rainy.jpg",
      "title": "Weather",
      "caption": "Выбери как сказать дождливо."
    }
  },
  {
    "id": "task-park-weather-hot",
    "sceneId": "park-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери как сказать жарко.",
    "prompt": "Choose: жарко",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": true,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/park-hot.jpg",
      "title": "Weather",
      "caption": "Выбери как сказать жарко."
    }
  },
  {
    "id": "task-park-weather-cold",
    "sceneId": "park-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери как сказать холодно.",
    "prompt": "Choose: холодно",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": true,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/park-cold.jpg",
      "title": "Weather",
      "caption": "Выбери как сказать холодно."
    }
  },
  {
    "id": "task-park-lex-sunny",
    "sceneId": "park-lex-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Посмотри на Лекса. Какая погода?",
    "prompt": "Choose: солнечно",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": true,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/lex-sunny.jpg",
      "title": "Lex weather",
      "caption": "Посмотри на Лекса. Какая погода?"
    }
  },
  {
    "id": "task-park-lex-rainy",
    "sceneId": "park-lex-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Посмотри на Лекса. Какая погода?",
    "prompt": "Choose: дождливо",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": true,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/lex-rainy.jpg",
      "title": "Lex weather",
      "caption": "Посмотри на Лекса. Какая погода?"
    }
  },
  {
    "id": "task-park-lex-hot",
    "sceneId": "park-lex-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Посмотри на Лекса. Какая погода?",
    "prompt": "Choose: жарко",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": true,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/lex-hot.jpg",
      "title": "Lex weather",
      "caption": "Посмотри на Лекса. Какая погода?"
    }
  },
  {
    "id": "task-park-lex-cold",
    "sceneId": "park-lex-weather",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Посмотри на Лекса. Какая погода?",
    "prompt": "Choose: холодно",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false,
        "speak": "It is sunny"
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false,
        "speak": "It is rainy"
      },
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false,
        "speak": "It is hot"
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": true,
        "speak": "It is cold"
      }
    ],
    "visual": {
      "image": "/images/park/lex-cold.jpg",
      "title": "Lex weather",
      "caption": "Посмотри на Лекса. Какая погода?"
    }
  },
  {
    "id": "task-park-are-they",
    "sceneId": "park-team",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: они.",
    "prompt": "Choose: они",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": true,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park team",
      "caption": "we / they / you"
    }
  },
  {
    "id": "task-park-are-we",
    "sceneId": "park-team",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: мы.",
    "prompt": "Choose: мы",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park team",
      "caption": "we / they / you"
    }
  },
  {
    "id": "task-park-are-you",
    "sceneId": "park-team",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Выбери: ты / вы.",
    "prompt": "Choose: ты / вы",
    "choices": [
      {
        "id": "we",
        "label": "We are",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are"
      },
      {
        "id": "they",
        "label": "They are",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are"
      },
      {
        "id": "you",
        "label": "You are",
        "image": "👉",
        "isCorrect": true,
        "speak": "You are"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park team",
      "caption": "we / they / you"
    }
  },
  {
    "id": "task-park-are-match",
    "sceneId": "park-team",
    "type": "match_word_image",
    "skillId": "are_intro",
    "instruction": "Соедини слово и картинку.",
    "prompt": "Match: we / they / you",
    "shufflePictures": true,
    "pairs": [
      {
        "id": "we",
        "word": "We are",
        "image": "👧👦",
        "speak": "we are"
      },
      {
        "id": "they",
        "word": "They are",
        "image": "👧👦👧",
        "speak": "they are"
      },
      {
        "id": "you",
        "word": "You are",
        "image": "👉",
        "speak": "you are"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park team",
      "caption": "Соедини."
    }
  },
  {
    "id": "task-park-team-children-they",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: они дети.",
    "prompt": "Choose: они дети",
    "choices": [
      {
        "id": "they",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": true,
        "speak": "They are children"
      },
      {
        "id": "we",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are children"
      },
      {
        "id": "you",
        "label": "You are children",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are children"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-age-they",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: им 6.",
    "prompt": "Choose: им 6",
    "choices": [
      {
        "id": "they6",
        "label": "They are 6",
        "image": "👧👦👧",
        "isCorrect": true,
        "speak": "They are six"
      },
      {
        "id": "we6",
        "label": "We are 6",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are six"
      },
      {
        "id": "you6",
        "label": "You are 6",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are six"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-short-they",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: они низкие.",
    "prompt": "They ___.",
    "choices": [
      {
        "id": "short",
        "label": "are short",
        "image": "🐭",
        "isCorrect": true,
        "speak": "They are short"
      },
      {
        "id": "dogs",
        "label": "are dogs",
        "image": "🐶",
        "isCorrect": false,
        "speak": "They are dogs"
      },
      {
        "id": "six",
        "label": "are 6",
        "image": "6️⃣",
        "isCorrect": false,
        "speak": "They are six"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-children-we",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: мы дети.",
    "prompt": "Choose: мы дети",
    "choices": [
      {
        "id": "we",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are children"
      },
      {
        "id": "they",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are children"
      },
      {
        "id": "you",
        "label": "You are children",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are children"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-age-we",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: нам 4.",
    "prompt": "Choose: нам 4",
    "choices": [
      {
        "id": "you4",
        "label": "You are 4",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are four"
      },
      {
        "id": "we4",
        "label": "We are 4",
        "image": "👧👦",
        "isCorrect": true,
        "speak": "We are four"
      },
      {
        "id": "they4",
        "label": "They are 4",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are four"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-beautiful-we",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: мы красивые.",
    "prompt": "We ___.",
    "choices": [
      {
        "id": "age",
        "label": "are 4",
        "image": "4️⃣",
        "isCorrect": false,
        "speak": "We are four"
      },
      {
        "id": "beautiful",
        "label": "are beautiful",
        "image": "🌸",
        "isCorrect": true,
        "speak": "We are beautiful"
      },
      {
        "id": "dogs",
        "label": "are dogs",
        "image": "🐶",
        "isCorrect": false,
        "speak": "We are dogs"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-you-ben",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: ты Бен.",
    "prompt": "Choose: ты Бен",
    "choices": [
      {
        "id": "you",
        "label": "You are Ben",
        "image": "👨‍🌾",
        "isCorrect": true,
        "speak": "You are Ben"
      },
      {
        "id": "he",
        "label": "He is Ben",
        "image": "👦",
        "isCorrect": false,
        "speak": "He is Ben"
      },
      {
        "id": "we",
        "label": "We are Ben",
        "image": "👧👦",
        "isCorrect": false,
        "speak": "We are Ben"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-ben-age",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: ему 33.",
    "prompt": "Choose: ему 33",
    "choices": [
      {
        "id": "he",
        "label": "He is 33",
        "image": "👨‍🌾",
        "isCorrect": true,
        "speak": "He is thirty three"
      },
      {
        "id": "they",
        "label": "They are 33",
        "image": "👧👦👧",
        "isCorrect": false,
        "speak": "They are thirty three"
      },
      {
        "id": "you",
        "label": "You are 33",
        "image": "👉",
        "isCorrect": false,
        "speak": "You are thirty three"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-team-he-gardener",
    "sceneId": "park-describe-teams",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: он садовник.",
    "prompt": "Choose: он садовник",
    "choices": [
      {
        "id": "he",
        "label": "He is a gardener",
        "image": "👨‍🌾",
        "isCorrect": true,
        "speak": "He is a gardener"
      },
      {
        "id": "it",
        "label": "It is a gardener",
        "image": "🌳",
        "isCorrect": false,
        "speak": "It is a gardener"
      },
      {
        "id": "she",
        "label": "She is a gardener",
        "image": "👧",
        "isCorrect": false,
        "speak": "She is a gardener"
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Park competition",
      "caption": "Опиши команду."
    }
  },
  {
    "id": "task-park-final-1",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "articles",
    "instruction": "Вставь a или an.",
    "prompt": "It is ___ ice cream.",
    "choices": [
      {
        "id": "a",
        "label": "a",
        "image": "a",
        "isCorrect": false
      },
      {
        "id": "an",
        "label": "an",
        "image": "an",
        "isCorrect": true
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Review",
      "caption": "a / an"
    }
  },
  {
    "id": "task-park-final-2",
    "sceneId": "park-final",
    "type": "fill_blank",
    "skillId": "plural",
    "instruction": "Сделай множественное число.",
    "prompt": "Впиши ответ.",
    "sentenceBefore": "They are 3 dog",
    "sentenceAfter": ".",
    "answerPlaceholder": "",
    "acceptedAnswers": [
      "s"
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Review",
      "caption": "plural -s"
    }
  },
  {
    "id": "task-park-final-3",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "to_be",
    "instruction": "Как сказать: я Лекс.",
    "prompt": "Choose: я Лекс",
    "choices": [
      {
        "id": "iam",
        "label": "I am Lex",
        "image": "🦊",
        "isCorrect": true
      },
      {
        "id": "itis",
        "label": "It is Lex",
        "image": "🧸",
        "isCorrect": false
      },
      {
        "id": "are",
        "label": "They are Lex",
        "image": "👧👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Review",
      "caption": "I am"
    }
  },
  {
    "id": "task-park-final-4",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Как сказать: это дерево.",
    "prompt": "Choose: это дерево",
    "choices": [
      {
        "id": "it",
        "label": "It is a tree",
        "image": "🌳",
        "isCorrect": true
      },
      {
        "id": "she",
        "label": "She is a tree",
        "image": "👧",
        "isCorrect": false
      },
      {
        "id": "he",
        "label": "He is a tree",
        "image": "👦",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Review",
      "caption": "It is"
    }
  },
  {
    "id": "task-park-final-5",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери погоду: солнечно.",
    "prompt": "Choose: солнечно",
    "choices": [
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": true
      },
      {
        "id": "rainy",
        "label": "It is rainy",
        "image": "🌧️",
        "isCorrect": false
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/park/park-sunny.jpg",
      "title": "Weather",
      "caption": "sunny"
    }
  },
  {
    "id": "task-park-final-6",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "are_intro",
    "instruction": "Как сказать: они дети.",
    "prompt": "Choose: они дети",
    "choices": [
      {
        "id": "they",
        "label": "They are children",
        "image": "👧👦👧",
        "isCorrect": true
      },
      {
        "id": "we",
        "label": "We are children",
        "image": "👧👦",
        "isCorrect": false
      },
      {
        "id": "you",
        "label": "You are children",
        "image": "👉",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/park/park-competition.jpg",
      "title": "Review",
      "caption": "They are"
    }
  },
  {
    "id": "task-park-final-7",
    "sceneId": "park-final",
    "type": "match_word_image",
    "skillId": "articles",
    "instruction": "Соедини слова парка.",
    "prompt": "Match park words",
    "shufflePictures": true,
    "pairs": [
      {
        "id": "tree",
        "word": "a tree",
        "image": "🌳"
      },
      {
        "id": "icecream",
        "word": "an ice cream",
        "image": "🍦"
      },
      {
        "id": "dog",
        "word": "a dog",
        "image": "🐶"
      },
      {
        "id": "flower",
        "word": "a flower",
        "image": "🌸"
      }
    ],
    "visual": {
      "image": "/images/park/park-vocab-nature.jpg",
      "title": "Park words",
      "caption": "Match."
    }
  },
  {
    "id": "task-park-final-8",
    "sceneId": "park-final",
    "type": "choose_correct_image",
    "skillId": "is_intro",
    "instruction": "Выбери погоду: холодно.",
    "prompt": "Choose: холодно",
    "choices": [
      {
        "id": "hot",
        "label": "It is hot",
        "image": "🥵",
        "isCorrect": false
      },
      {
        "id": "cold",
        "label": "It is cold",
        "image": "🥶",
        "isCorrect": true
      },
      {
        "id": "sunny",
        "label": "It is sunny",
        "image": "☀️",
        "isCorrect": false
      }
    ],
    "visual": {
      "image": "/images/park/park-cold.jpg",
      "title": "Weather",
      "caption": "cold"
    }
  }
];
