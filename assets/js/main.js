// =====================
// DATA — 22 letras base (Bet e Vet são a MESMA letra)
// audio: /media/sound/<audio>.mp3
// =====================
const letters = [
  {
    id: 1,
    heb: "א",
    name: "Alef",
    alt: null,
    translit: "ʾ",
    num: 1,
    sofit: null,
    hasDagesh: false,
    audio: "alef",
    desc: "Consoante gutural quiescente. Funciona como suporte de vogal, sendo essencialmente muda na maioria dos contextos bíblicos.",
  },

  {
    id: 2,
    heb: "ב",
    name: "Bet",
    alt: "בּ",
    translit: "b / v",
    num: 2,
    sofit: null,
    hasDagesh: true,
    audio: "bet",
    altAudio: "vet",
    desc: 'Com Dagesh (בּ): som "b" oclusivo bilabial. Sem Dagesh (ב): som "v" fricativo. Uma das seis letras BeGaDKePhaT.',
    dageshInfo:
      '<strong>Com Dagesh (בּ) — Bet:</strong> "b" como em bola<br><strong>Sem Dagesh (ב) — Vet:</strong> "v" como em vela',
  },

  {
    id: 3,
    heb: "ג",
    name: "Gimel",
    alt: "גּ",
    translit: "g",
    num: 3,
    sofit: null,
    hasDagesh: true,
    audio: "gimel",
    desc: 'Pronuncia-se "g" como em gato. Com dagesh é sempre oclusiva. Uma das letras BeGaDKePhaT.',
    dageshInfo:
      '<strong>Com Dagesh (גּ):</strong> "g" oclusivo<br><strong>Sem Dagesh (ג):</strong> fricativo velar em algumas tradições',
  },

  {
    id: 4,
    heb: "ד",
    name: "Dalet",
    alt: "דּ",
    translit: "d",
    num: 4,
    sofit: null,
    hasDagesh: true,
    audio: "dalet",
    desc: 'Pronuncia-se "d". Com dagesh é oclusiva; sem dagesh pode soar como "dh". Uma das letras BeGaDKePhaT.',
    dageshInfo:
      '<strong>Com Dagesh (דּ):</strong> "d" oclusivo<br><strong>Sem Dagesh (ד):</strong> fricativo dental em tradições conservadoras',
  },

  {
    id: 5,
    heb: "ה",
    name: "He",
    alt: null,
    translit: "h",
    num: 5,
    sofit: null,
    hasDagesh: false,
    audio: "he",
    desc: 'Pronuncia-se como "h" aspirado. No final de palavras frequentemente é muda. Mater lectionis para vogal "a".',
  },

  {
    id: 6,
    heb: "ו",
    name: "Vav",
    alt: null,
    translit: "v / w",
    num: 6,
    sofit: null,
    hasDagesh: false,
    audio: "vav",
    desc: 'Pronuncia-se "v" (tradição asquenazita) ou "w" (tradição sefaradita/acadêmica). Mater lectionis para "o" e "u".',
  },

  {
    id: 7,
    heb: "ז",
    name: "Zayin",
    alt: null,
    translit: "z",
    num: 7,
    sofit: null,
    hasDagesh: false,
    audio: "zayin",
    desc: 'Pronuncia-se "z" como em zebra. Consoante fricativa alveolar sonora.',
  },

  {
    id: 8,
    heb: "ח",
    name: "Chet",
    alt: null,
    translit: "ḥ",
    num: 8,
    sofit: null,
    hasDagesh: false,
    audio: "chet",
    desc: 'Fricativa gutural forte, pronunciada na faringe. Semelhante ao "ch" alemão em "Bach". Distinta do He e do Ayin.',
  },

  {
    id: 9,
    heb: "ט",
    name: "Tet",
    alt: null,
    translit: "ṭ",
    num: 9,
    sofit: null,
    hasDagesh: false,
    audio: "tet",
    desc: 'T enfático/faringalizado. Distinto do Tav por sinal diacrítico. No hebraico moderno soa como "t" simples.',
  },

  {
    id: 10,
    heb: "י",
    name: "Yod",
    alt: null,
    translit: "y",
    num: 10,
    sofit: null,
    hasDagesh: false,
    audio: "yod",
    desc: 'Pronuncia-se "y" como em "yes". A menor letra do alfabeto. Mater lectionis para vogal "i".',
  },

  {
    id: 11,
    heb: "כ",
    name: "Kaf",
    alt: "כּ",
    translit: "k / kh",
    num: 20,
    sofit: "ך",
    hasDagesh: true,
    audio: "kaf",
    sofitAudio: "final-kaf",
    desc: 'Com Dagesh (כּ): "k". Sem Dagesh (כ): "kh" como "ch" em Bach. BeGaDKePhaT. Tem forma final Sofit (ך).',
    dageshInfo:
      '<strong>Com Dagesh (כּ) — Kaf:</strong> "k" oclusivo<br><strong>Sem Dagesh (כ) — Khaf:</strong> "kh" fricativo velar<br><strong>Sofit (ך):</strong> usada ao final de palavras',
  },

  {
    id: 12,
    heb: "ל",
    name: "Lamed",
    alt: null,
    translit: "l",
    num: 30,
    sofit: null,
    hasDagesh: false,
    audio: "lamed",
    desc: 'Pronuncia-se "l". É a letra mais alta do alfabeto hebraico. Consoante lateral alveolar.',
  },

  {
    id: 13,
    heb: "מ",
    name: "Mem",
    alt: null,
    translit: "m",
    num: 40,
    sofit: "ם",
    hasDagesh: false,
    audio: "mem",
    sofitAudio: "final-mem",
    desc: 'Pronuncia-se "m". Tem forma final Sofit (ם) usada ao final de palavras. Consoante nasal bilabial.',
  },

  {
    id: 14,
    heb: "נ",
    name: "Nun",
    alt: null,
    translit: "n",
    num: 50,
    sofit: "ן",
    hasDagesh: false,
    audio: "nun",
    sofitAudio: "final-nun",
    desc: 'Pronuncia-se "n". Tem forma final Sofit (ן) usada ao final de palavras. Consoante nasal alveolar.',
  },

  {
    id: 15,
    heb: "ס",
    name: "Samekh",
    alt: null,
    translit: "s",
    num: 60,
    sofit: null,
    hasDagesh: false,
    audio: "samekh",
    desc: 'Pronuncia-se "s". Consoante fricativa alveolar surda. Distinta do Sin.',
  },

  {
    id: 16,
    heb: "ע",
    name: "Ayin",
    alt: null,
    translit: "ʿ",
    num: 70,
    sofit: null,
    hasDagesh: false,
    audio: "ayin",
    desc: "Consoante gutural faríngea. No hebraico moderno frequentemente muda, mas originalmente era oclusiva faríngea sonora.",
  },

  {
    id: 17,
    heb: "פ",
    name: "Pe",
    alt: "פּ",
    translit: "p / f",
    num: 80,
    sofit: "ף",
    hasDagesh: true,
    audio: "pe",
    altAudio: "fe",
    sofitAudio: "final-pe",
    desc: 'Com Dagesh (פּ): "p". Sem Dagesh (פ): "f". Uma das BeGaDKePhaT. Tem forma final Sofit (ף).',
    dageshInfo:
      '<strong>Com Dagesh (פּ) — Pe:</strong> "p" oclusivo<br><strong>Sem Dagesh (פ) — Feh:</strong> "f" fricativo labiodental<br><strong>Sofit (ף):</strong> usada ao final de palavras',
  },

  {
    id: 18,
    heb: "צ",
    name: "Tsade",
    alt: null,
    translit: "ṣ",
    num: 90,
    sofit: "ץ",
    hasDagesh: false,
    audio: "tsade",
    sofitAudio: "final-tsade",
    desc: 'Pronuncia-se "ts" (como em "tsarévich"). Africado alveolar surdo. Tem forma final Sofit (ץ).',
  },

  {
    id: 19,
    heb: "ק",
    name: "Qof",
    alt: null,
    translit: "q",
    num: 100,
    sofit: null,
    hasDagesh: false,
    audio: "qof",
    desc: 'Pronuncia-se como "k" uvular. No hebraico moderno indistinguível do Kaf, mas distinto na escrita.',
  },

  {
    id: 20,
    heb: "ר",
    name: "Resh",
    alt: null,
    translit: "r",
    num: 200,
    sofit: null,
    hasDagesh: false,
    audio: "resh",
    desc: 'Pronuncia-se "r". No hebraico bíblico era vibrante alveolar; no moderno é uvular (como o "r" francês).',
  },

  {
    id: 21,
    heb: "שׁ",
    name: "Shin",
    alt: "שׂ",
    translit: "š / ś",
    num: 300,
    sofit: null,
    hasDagesh: false,
    audio: "shin",
    altAudio: "sin",
    desc: 'Shin (שׁ) tem ponto à DIREITA: som "sh". Sin (שׂ) tem ponto à ESQUERDA: som "s". Mesma forma, dois sons distintos.',
    dageshInfo:
      '<strong>Shin (שׁ) — ponto direito:</strong> "sh" como em "show"<br><strong>Sin (שׂ) — ponto esquerdo:</strong> "s" como em "sol"',
  },

  {
    id: 22,
    heb: "ת",
    name: "Tav",
    alt: "תּ",
    translit: "t / th",
    num: 400,
    sofit: null,
    hasDagesh: true,
    audio: "tav",
    desc: 'Com Dagesh (תּ): "t". Sem Dagesh (ת): "th" (como inglês "thin") em tradições conservadoras. Última letra do alfabeto.',
    dageshInfo:
      '<strong>Com Dagesh (תּ):</strong> "t" oclusivo<br><strong>Sem Dagesh (ת):</strong> "th" fricativo dental em tradições conservadoras',
  },
];

// Arquivos de áudio necessários em /media/sound/:
// alef.mp3, bet.mp3, vet.mp3, gimel.mp3, dalet.mp3, he.mp3, vav.mp3,
// zayin.mp3, chet.mp3, tet.mp3, yod.mp3, kaf.mp3, final-kaf.mp3,
// lamed.mp3, mem.mp3, final-mem.mp3, nun.mp3, final-nun.mp3,
// samekh.mp3, ayin.mp3, pe.mp3, feh.mp3, final-pe.mp3,
// tsade.mp3, final-tsade.mp3, qof.mp3, resh.mp3, shin.mp3, sin.mp3, tav.mp3
// vogais: qamats.mp3, tsere.mp3, hiriq.mp3, holam.mp3, shuruq.mp3,
//         patah.mp3, segol.mp3, qibbuts.mp3, sheva.mp3,
//         hataf-patah.mp3, hataf-segol.mp3, hataf-qamats.mp3

const vowels = {
  long: [
    {
      sym: "בָ",
      name: "Qamats",
      translit: "ā",
      desc: "A longa. Traço vertical sob a letra.",
      audio: "qamats",
    },
    {
      sym: "בֵ",
      name: "Tsere",
      translit: "ē",
      desc: "E longa. Dois pontos horizontais.",
      audio: "tsere",
    },
    {
      sym: "בִי",
      name: "Hiriq Gadol",
      translit: "ī",
      desc: "I longa. Ponto com Yod seguinte.",
      audio: "hiriq",
    },
    {
      sym: "בֹ",
      name: "Holam",
      translit: "ō",
      desc: "O longa. Ponto acima da letra.",
      audio: "holam",
    },
    {
      sym: "בוּ",
      name: "Shuruq",
      translit: "ū",
      desc: "U longa. Vav com dagesh no centro.",
      audio: "shuruq",
    },
  ],
  short: [
    {
      sym: "בַ",
      name: "Patah",
      translit: "a",
      desc: "A curta. Traço horizontal simples.",
      audio: "patah",
    },
    {
      sym: "בֶ",
      name: "Segol",
      translit: "e",
      desc: "E curta. Três pontos em triângulo.",
      audio: "segol",
    },
    {
      sym: "בִ",
      name: "Hiriq Qatan",
      translit: "i",
      desc: "I curta. Ponto simples sem Yod.",
      audio: "hiriq",
    },
    {
      sym: "בֻ",
      name: "Qibbuts",
      translit: "u",
      desc: "U curta. Três pontos diagonais.",
      audio: "qibbuts",
    },
  ],
  sheva: [
    {
      sym: "בְ",
      name: "Sheva",
      translit: "ə/—",
      desc: "Mudo (final/após longa) ou móvel (início de sílaba). Dois pontos verticais.",
      audio: "sheva",
    },
    {
      sym: "בֱ",
      name: "Hataf Patah",
      translit: "ă",
      desc: "A ultracurta. Sheva + Patah. Em letras guturais.",
      audio: "hataf-patah",
    },
    {
      sym: "בֲ",
      name: "Hataf Segol",
      translit: "ĕ",
      desc: "E ultracurta. Sheva + Segol. Em letras guturais.",
      audio: "hataf-segol",
    },
    {
      sym: "בֳ",
      name: "Hataf Qamats",
      translit: "ŏ",
      desc: "O ultracurta. Sheva + Qamats. Raro.",
      audio: "hataf-qamats",
    },
  ],
  other: [
    {
      sym: "בּ",
      name: "Dagesh Forte",
      translit: "—",
      desc: "Ponto no interior da letra. Dagesh Forte duplica a consoante. Dagesh Leve muda o som nas BeGaDKePhaT.",
      audio: null,
    },
    {
      sym: "בֽ",
      name: "Meteg",
      translit: "—",
      desc: "Traço vertical lateral esquerdo. Marca sílaba secundária ou vogal longa em sílaba aberta.",
      audio: null,
    },
    {
      sym: "שׁ",
      name: "Shin Dot",
      translit: "—",
      desc: 'Ponto à direita sobre o Shin → som "sh".',
      audio: "shin",
    },
    {
      sym: "שׂ",
      name: "Sin Dot",
      translit: "—",
      desc: 'Ponto à esquerda sobre o Shin → som "s".',
      audio: "sin",
    },
  ],
};

const dageshLetters = [
  {
    heb: "ב",
    hebD: "בּ",
    name: "Bet / Vet",
    rule: 'Sem dagesh: "v". Com dagesh: "b".',
    sofit: null,
  },
  {
    heb: "ג",
    hebD: "גּ",
    name: "Gimel",
    rule: 'Sem dagesh: fricativo. Com dagesh: "g" oclusivo.',
    sofit: null,
  },
  {
    heb: "ד",
    hebD: "דּ",
    name: "Dalet",
    rule: 'Sem dagesh: fricativo dental. Com dagesh: "d".',
    sofit: null,
  },
  {
    heb: "כ",
    hebD: "כּ",
    name: "Kaf / Khaf",
    rule: 'Sem dagesh: "kh". Com dagesh: "k". Tem sofit ך.',
    sofit: "ך",
  },
  {
    heb: "פ",
    hebD: "פּ",
    name: "Pe / Feh",
    rule: 'Sem dagesh: "f". Com dagesh: "p". Tem sofit ף.',
    sofit: "ף",
  },
  {
    heb: "ת",
    hebD: "תּ",
    name: "Tav",
    rule: 'Sem dagesh: "th" (conservador). Com dagesh: "t".',
    sofit: null,
  },
];

const sofitLetters = [
  {
    heb: "כ",
    sofit: "ך",
    name: "Kaf Sofit",
    desc: "Forma de Kaf ao final de palavra.",
  },
  {
    heb: "מ",
    sofit: "ם",
    name: "Mem Sofit",
    desc: "Forma fechada de Mem ao final de palavra.",
  },
  { heb: "נ", sofit: "ן", name: "Nun Sofit", desc: "Nun ao final de palavra." },
  {
    heb: "פ",
    sofit: "ף",
    name: "Pe Sofit",
    desc: "Pe/Feh ao final de palavra.",
  },
  {
    heb: "צ",
    sofit: "ץ",
    name: "Tsade Sofit",
    desc: "Tsade ao final de palavra.",
  },
];

const diacriticLetters = [
  {
    heb: "ש",
    hebD: "שׁ / שׂ",
    name: "Shin / Sin",
    desc: "Mesmo caractere, dois sons. Ponto à direita = Shin (sh). Ponto à esquerda = Sin (s). Distinção essencial no hebraico bíblico.",
  },
];

// =====================
// ÁUDIO — usa arquivos locais com fallback
// =====================
function playAudio(filename) {
  if (!filename) return;
  const audio = new Audio(`/media/sound/${filename}.mp3`);
  audio.play().catch(() => {
    // arquivo não encontrado — silencia sem erro visível
    console.warn(`Áudio não encontrado: /media/sound/${filename}.mp3`);
  });
}

let currentAudioFile = null;

function speakLetter() {
  playAudio(currentAudioFile);
}

function speakText(name) {
  const found = letters.find((l) => l.name === name);
  if (found) playAudio(found.audio);
  else {
    const allVowels = [
      ...vowels.long,
      ...vowels.short,
      ...vowels.sheva,
      ...vowels.other,
    ];
    const v = allVowels.find((v) => v.name === name);
    if (v) playAudio(v.audio);
  }
}

// =====================
// RENDER
// =====================
let alphabetMode = "complete"; // 'complete' | 'withvowels'

// 31 cards: cada linha = uma entrada independente na grade
// Para letras com variante (dagesh/sin), cada variante tem card próprio
// Para letras com sofit, a forma sofit tem card próprio
function buildAllCards() {
  const cards = [];

  letters.forEach((l) => {
    // Carta principal: se tem dagesh (BeGaDKePhaT), mostra a forma COM dagesh (alt)
    // exceto Shin/Sin que tem lógica própria
    if (l.id === 21) {
      // Shin
      cards.push({
        heb: "שׁ",
        name: "Shin",
        translit: "š",
        num: 300,
        audio: "shin",
        badge: "Shin/Sin",
        badgeColor: "#64a0ff",
        sofit: false,
        isSofit: false,
        letter: l,
        desc: l.desc,
      });
      // Sin
      cards.push({
        heb: "שׂ",
        name: "Sin",
        translit: "ś",
        num: 300,
        audio: "sin",
        badge: "Shin/Sin",
        badgeColor: "#64a0ff",
        sofit: false,
        isSofit: false,
        letter: l,
        desc: l.desc,
      });
    } else if (l.hasDagesh && l.alt) {
      // Forma com dagesh (alt)
      cards.push({
        heb: l.alt,
        name: l.name,
        translit: l.translit.split(" / ")[0],
        num: l.num,
        audio: l.audio,
        badge: "BeGaDKePhaT",
        badgeColor: "var(--accent)",
        sofit: false,
        isSofit: false,
        letter: l,
        desc: l.desc,
      });
      // Forma sem dagesh: nome especial para Bet/Vet, Kaf/Chaf, Pe/Fe
      const altNames = {
        2: "Vet",
        3: "Gimel",
        4: "Dalet",
        11: "Chaf",
        17: "Fe",
        22: "Tav",
      };
      const altTranslits = {
        2: "v",
        3: "g",
        4: "d",
        11: "kh",
        17: "f",
        22: "th",
      };
      const altAudios = { 2: "vet", 11: "chaf", 17: "fe" };
      cards.push({
        heb: l.heb,
        name: altNames[l.id] || l.name,
        translit: altTranslits[l.id] || l.translit,
        num: l.num,
        audio: altAudios[l.id] || l.audio,
        badge: "BeGaDKePhaT",
        badgeColor: "var(--accent)",
        sofit: false,
        isSofit: false,
        letter: l,
        desc: l.desc,
      });
    } else {
      // Letra simples
      cards.push({
        heb: l.heb,
        name: l.name,
        translit: l.translit,
        num: l.num,
        audio: l.audio,
        badge: null,
        sofit: false,
        isSofit: false,
        letter: l,
        desc: l.desc,
      });
    }

    // Forma sofit: card separado
    if (l.sofit) {
      const sofitNames = {
        11: "Chaf Sofit",
        13: "Mem Sofit",
        14: "Nun Sofit",
        17: "Pe Sofit",
        18: "Tsade Sofit",
      };
      const sofitAudioMap = {
        11: "chaf",
        13: "mem",
        14: "nun",
        17: "fe",
        18: "tsade",
      };
      cards.push({
        heb: l.sofit,
        name: sofitNames[l.id] || l.name + " Sofit",
        translit: "—",
        num: l.num,
        audio: sofitAudioMap[l.id] || l.audio,
        badge: "Sofit",
        badgeColor: "#7aaef5",
        isSofit: true,
        letter: l,
        desc: `Forma final (sofit) do ${l.name}, usada quando a letra aparece no final de uma palavra.`,
      });
    }
  });

  return cards;
}

// =====================
// QUIZ LETTERS — todas as variantes (31 entradas) para flashcards e quiz
// =====================
function buildQuizLetters() {
  return buildAllCards().map((c) => ({
    id: c.letter.id + "_" + c.name, // ID único por variante
    heb: c.heb,
    name: c.name,
    translit: c.translit,
    num: c.num,
    audio: c.audio,
    badge: c.badge,
    isSofit: c.isSofit,
  }));
}

const quizLetters = buildQuizLetters();

function renderAlphabet(filter = "all") {
  const grid = document.getElementById("alphabet-grid");
  grid.innerHTML = "";
  const allCards = buildAllCards();

  allCards.forEach((c) => {
    // Filtros
    if (filter === "sofit" && !c.isSofit) return;
    if (filter === "dagesh" && c.badge !== "BeGaDKePhaT") return;
    if (filter === "diacritic" && c.badge !== "Shin/Sin") return;

    const div = document.createElement("div");
    div.className =
      "letter-card" +
      (c.badge === "BeGaDKePhaT" ? " dagesh" : "") +
      (c.badge === "Shin/Sin" ? " diacritic" : "") +
      (c.isSofit ? " sofit" : "");

    let badgeHtml = "";
    if (c.badge) {
      let bg, color, border;
      if (c.badge === "Sofit") {
        bg = "rgba(122,174,245,0.1)";
        color = "#7aaef5";
        border = "rgba(122,174,245,0.2)";
      } else if (c.badge === "BeGaDKePhaT") {
        bg = "rgba(42,109,217,0.1)";
        color = "var(--accent)";
        border = "rgba(42,109,217,0.2)";
      } else {
        bg = "rgba(100,160,255,0.1)";
        color = "#64a0ff";
        border = "rgba(100,160,255,0.2)";
      }
      badgeHtml = `<div style="margin-top:0.3rem"><span class="letter-badge" style="background:${bg};color:${color};border:1px solid ${border}">${c.badge}</span></div>`;
    }

    div.innerHTML = `
          <span class="letter-num">${c.num}</span>
          <span class="letter-heb">${c.heb}</span>
          <span class="letter-name">${c.name}</span>
          <span class="letter-translit">${c.translit}</span>
          ${badgeHtml}
          <button class="sound-btn" onclick="event.stopPropagation(); playAudio('${c.audio}')">
            <svg class="icon-speak" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            Ouvir
          </button>
        `;
    div.onclick = () => openModal(c.letter);
    grid.appendChild(div);
  });
}

function renderVowels() {
  renderVowelGroup("vowels-long", vowels.long);
  renderVowelGroup("vowels-short", vowels.short);
  renderVowelGroup("vowels-sheva", vowels.sheva);
  renderVowelGroup("vowels-other", vowels.other);
  renderVowelTable();
}

function renderVowelGroup(id, list) {
  const wrap = document.getElementById(id);
  wrap.innerHTML = list
    .map(
      (v) => `
    <div class="vowel-card" onclick="${v.audio ? `playAudio('${v.audio}')` : ""}">
      <span class="vowel-symbol">${v.sym}</span>
      <span class="vowel-name">${v.name}</span>
      <span class="vowel-translit">${v.translit}</span>
      <span class="vowel-desc">${v.desc}</span>
      ${
        v.audio
          ? `<button class="sound-btn" style="margin-top:0.4rem" onclick="event.stopPropagation();playAudio('${v.audio}')">
        <svg class="icon-speak" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> Ouvir
      </button>`
          : ""
      }
    </div>
  `,
    )
    .join("");
}

function renderVowelTable() {
  const all = [
    ...vowels.long,
    ...vowels.short,
    ...vowels.sheva,
    ...vowels.other,
  ];
  const table = document.getElementById("vowels-table");
  table.innerHTML = `
    <thead><tr>
      <th>Símbolo</th><th>Nome</th><th>Translit.</th><th>Descrição</th><th>Ouvir</th>
    </tr></thead>
    <tbody>${all
      .map(
        (v) => `
      <tr>
        <td class="td-heb">${v.sym}</td>
        <td style="font-family:'Playfair Display',serif;font-weight:700">${v.name}</td>
        <td><span style="font-family:'DM Mono',monospace;font-size:0.8rem;color:var(--accent)">${v.translit}</span></td>
        <td style="font-size:0.8rem;color:rgba(240,243,248,0.5)">${v.desc}</td>
        <td>${
          v.audio
            ? `<button class="sound-btn" onclick="playAudio('${v.audio}')">
          <svg class="icon-speak" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
        </button>`
            : "—"
        }</td>
      </tr>
    `,
      )
      .join("")}</tbody>
  `;
}

function renderDagesh() {
  const g = document.getElementById("dagesh-grid");
  g.innerHTML = dageshLetters
    .map(
      (l) => `
    <div class="dagesh-card">
      <div class="dagesh-pair">
        <span class="with">${l.hebD}</span>
        <span class="arrow">←</span>
        <span class="without">${l.heb}</span>
      </div>
      <div class="dagesh-card-name">${l.name}</div>
      <div class="dagesh-card-rule">${l.rule}</div>
    </div>
  `,
    )
    .join("");

  const sg = document.getElementById("sofit-grid");
  sg.innerHTML = sofitLetters
    .map(
      (l) => `
    <div class="dagesh-card">
      <div class="dagesh-pair">
        <span class="with" style="color:#7aaef5">${l.sofit}</span>
        <span class="arrow">←</span>
        <span class="without">${l.heb}</span>
      </div>
      <div class="dagesh-card-name">${l.name}</div>
      <div class="dagesh-card-rule">${l.desc}</div>
    </div>
  `,
    )
    .join("");

  const dg = document.getElementById("diacritic-grid");
  dg.innerHTML = diacriticLetters
    .map(
      (l) => `
    <div class="dagesh-card" style="border-color:rgba(100,160,255,0.2)">
      <div style="text-align:center;font-size:2.2rem;direction:rtl;margin-bottom:0.75rem;color:#64a0ff">${l.hebD}</div>
      <div class="dagesh-card-name">${l.name}</div>
      <div class="dagesh-card-rule">${l.desc}</div>
    </div>
  `,
    )
    .join("");
}

// =====================
// MODAL
// =====================
function openModal(l) {
  document.getElementById("m-letter").textContent = l.alt ? l.alt : l.heb;
  document.getElementById("m-name").textContent =
    l.name + (l.id === 21 ? " / Sin" : "");
  currentAudioFile = l.audio;

  const sofitWrap = document.getElementById("m-sofit-wrap");
  if (l.sofit) {
    sofitWrap.style.display = "block";
    document.getElementById("m-sofit-char").textContent = l.sofit;
  } else {
    sofitWrap.style.display = "none";
  }

  // Variante (alt) block no modal
  const altWrap = document.getElementById("m-alt-wrap");
  if (l.alt) {
    altWrap.style.display = "flex";
    document.getElementById("m-alt-without").textContent = l.heb;
    document.getElementById("m-alt-with").textContent = l.alt;
    document.getElementById("m-alt-without-label").textContent =
      l.id === 21 ? "Sin (שׂ)" : "sem dagesh";
    document.getElementById("m-alt-with-label").textContent =
      l.id === 21 ? "Shin (שׁ)" : "com dagesh";
  } else {
    altWrap.style.display = "none";
  }

  const meta = document.getElementById("m-meta");
  meta.innerHTML = `
    <span class="meta-tag blue">Valor numérico: ${l.num}</span>
    <span class="meta-tag light">/${l.translit}/</span>
    ${l.hasDagesh ? '<span class="meta-tag muted">BeGaDKePhaT</span>' : ""}
    ${l.sofit ? '<span class="meta-tag muted">Tem forma Sofit</span>' : ""}
  `;

  document.getElementById("m-desc").textContent = l.desc;

  const dagesh = document.getElementById("m-dagesh");
  if (l.dageshInfo) {
    dagesh.style.display = "block";
    dagesh.innerHTML = l.dageshInfo;
  } else {
    dagesh.style.display = "none";
  }

  document.getElementById("modal").classList.add("open");
}

function closeModal(e) {
  if (e.target === document.getElementById("modal")) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById("modal").classList.remove("open");
}

// =====================
// NAVEGAÇÃO
// =====================
function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav-tabs button").forEach((b) => {
    b.classList.remove("active");
    if (
      (id === "home" && b.textContent === "Início") ||
      (id === "alef-bet" && b.textContent === "Alef-Bet") ||
      (id === "vogais" && b.textContent === "Vogais") ||
      (id === "dagesh" && b.textContent === "Dagesh") ||
      (id === "flashcards" && b.textContent === "Flashcards") ||
      (id === "quiz" && b.textContent === "Quiz") ||
      (id === "tabela" && b.textContent === "Tabela")
    )
      b.classList.add("active");
  });
  document.querySelectorAll(".bottom-nav button").forEach((b) => {
    b.classList.remove("active");
    const label = b.textContent.trim();
    if (
      (id === "home" && label === "Início") ||
      (id === "alef-bet" && label === "Alef-Bet") ||
      (id === "vogais" && label === "Vogais") ||
      (id === "dagesh" && label === "Dagesh") ||
      (id === "flashcards" && label === "Cards") ||
      (id === "quiz" && label === "Quiz") ||
      (id === "tabela" && label === "Tabela")
    )
      b.classList.add("active");
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterLetters(type, btn) {
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAlphabet(type);
}

function setAlphabetMode(mode, btn) {
  alphabetMode = mode;
  document
    .querySelectorAll(".mode-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderAlphabet();
}

// =====================
// FLASHCARDS
// =====================
let fcMode = "heb-to-name";
let fcIndex = 0;

function setFCMode(mode, btn) {
  fcMode = mode;
  document
    .querySelectorAll("#flashcards .quiz-mode-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  fcIndex = 0;
  renderFlashcard();
}

function renderFlashcard() {
  const l = quizLetters[fcIndex];
  const card = document.getElementById("flashcard");
  card.classList.remove("flipped");
  document.getElementById("fc-back-answer").classList.remove("is-heb");

  if (fcMode === "heb-to-name") {
    document.getElementById("fc-front-letter").textContent = l.heb;
    document.getElementById("fc-back-answer").innerHTML = `<em>${l.name}</em>`;
    document.getElementById("fc-back-details").innerHTML =
      `/${l.translit}/ · Valor: ${l.num}${l.badge ? ` · ${l.badge}` : ""}`;
  } else if (fcMode === "name-to-heb") {
    document.getElementById("fc-front-letter").textContent = l.name;
    const answerEl = document.getElementById("fc-back-answer");
    answerEl.innerHTML = `<em>${l.heb}</em>`;
    answerEl.classList.add("is-heb");
    document.getElementById("fc-back-details").innerHTML =
      `/${l.translit}/ · Valor: ${l.num}`;
  } else {
    document.getElementById("fc-front-letter").textContent = l.heb;
    document.getElementById("fc-back-answer").innerHTML =
      `<em>/${l.translit}/</em>`;
    document.getElementById("fc-back-details").textContent = l.name;
  }

  const fill = ((fcIndex + 1) / quizLetters.length) * 100;
  document.getElementById("fc-progress-fill").style.width = fill + "%";
  document.getElementById("fc-progress-text").textContent =
    `${fcIndex + 1} / ${quizLetters.length}`;
}

function flipCard() {
  document.getElementById("flashcard").classList.toggle("flipped");
}

function fcNav(dir) {
  fcIndex = (fcIndex + dir + quizLetters.length) % quizLetters.length;
  renderFlashcard();
}

// =====================
// QUIZ
// =====================
let quizMode = "name";
let quizScore = 0,
  quizTotal = 0,
  quizStreak = 0;
let quizCurrent = null,
  quizAnswered = false;

function setQuizMode(mode, btn) {
  quizMode = mode;
  document
    .querySelectorAll("#quiz .quiz-mode-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  nextQuestion();
}

function nextQuestion() {
  quizAnswered = false;
  document.getElementById("quiz-next").style.display = "none";
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "feedback-msg";

  const shuffled = [...quizLetters].sort(() => Math.random() - 0.5);
  quizCurrent = shuffled[0];
  const options = [quizCurrent, ...shuffled.slice(1, 4)].sort(
    () => Math.random() - 0.5,
  );

  if (quizMode === "name") {
    document.getElementById("quiz-question-letter").textContent =
      quizCurrent.heb;
    document.getElementById("quiz-question-letter").style.fontSize = "";
    document.getElementById("quiz-question-text").textContent =
      "Qual é o nome desta letra?";
    renderOptions(
      options.map((o) => ({ val: o.name, correct: o.id === quizCurrent.id })),
    );
  } else if (quizMode === "translit") {
    document.getElementById("quiz-question-letter").textContent =
      quizCurrent.heb;
    document.getElementById("quiz-question-letter").style.fontSize = "";
    document.getElementById("quiz-question-text").textContent =
      "Qual é a transliteração desta letra?";
    renderOptions(
      options.map((o) => ({
        val: `/${o.translit}/`,
        correct: o.id === quizCurrent.id,
      })),
    );
  } else {
    document.getElementById("quiz-question-letter").textContent =
      quizCurrent.name;
    document.getElementById("quiz-question-letter").style.fontSize = "2rem";
    document.getElementById("quiz-question-text").textContent =
      "Qual é a letra hebraica?";
    renderOptions(
      options.map((o) => ({
        val: o.heb,
        correct: o.id === quizCurrent.id,
      })),
      true,
    );
  }
}

function renderOptions(opts, isHeb = false) {
  const wrap = document.getElementById("quiz-options");
  wrap.innerHTML = "";
  opts.forEach((o) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt" + (isHeb ? " heb-opt" : "");
    btn.textContent = o.val;
    btn.onclick = () => checkAnswer(btn, o.correct, opts);
    wrap.appendChild(btn);
  });
}

function checkAnswer(btn, correct, opts) {
  if (quizAnswered) return;
  quizAnswered = true;
  quizTotal++;
  const feedback = document.getElementById("quiz-feedback");
  if (correct) {
    btn.classList.add("correct");
    quizScore++;
    quizStreak++;
    feedback.textContent = "✓ Correto!";
    feedback.className = "feedback-msg ok";
    playAudio(quizCurrent.audio);
  } else {
    btn.classList.add("wrong");
    quizStreak = 0;
    feedback.textContent = `✗ Errado. Era: ${quizCurrent.name} (${quizCurrent.heb})`;
    feedback.className = "feedback-msg err";
    document.querySelectorAll(".quiz-opt").forEach((b, i) => {
      if (opts[i] && opts[i].correct) b.classList.add("correct");
    });
  }
  document.querySelectorAll(".quiz-opt").forEach((b) => (b.disabled = true));
  document.getElementById("q-score").textContent = quizScore;
  document.getElementById("q-total").textContent = quizTotal;
  document.getElementById("q-streak").textContent = quizStreak;
  document.getElementById("quiz-next").style.display = "inline-flex";
}

// =====================
// TABELA MASSORÉTICA
// =====================

// Letras base exibidas nas colunas (as 22 letras canônicas, sem sofit)
const vtBaseLetters = [
  { heb: "א", name: "Alef", unicode: "\u05D0" },
  { heb: "ב", name: "Bet", unicode: "\u05D1" },
  { heb: "ג", name: "Gimel", unicode: "\u05D2" },
  { heb: "ד", name: "Dalet", unicode: "\u05D3" },
  { heb: "ה", name: "He", unicode: "\u05D4" },
  { heb: "ו", name: "Vav", unicode: "\u05D5" },
  { heb: "ז", name: "Zayin", unicode: "\u05D6" },
  { heb: "ח", name: "Chet", unicode: "\u05D7" },
  { heb: "ט", name: "Tet", unicode: "\u05D8" },
  { heb: "י", name: "Yod", unicode: "\u05D9" },
  { heb: "כ", name: "Kaf", unicode: "\u05DB" },
  { heb: "ל", name: "Lamed", unicode: "\u05DC" },
  { heb: "מ", name: "Mem", unicode: "\u05DE" },
  { heb: "נ", name: "Nun", unicode: "\u05E0" },
  { heb: "ס", name: "Samekh", unicode: "\u05E1" },
  { heb: "ע", name: "Ayin", unicode: "\u05E2" },
  { heb: "פ", name: "Pe", unicode: "\u05E4" },
  { heb: "צ", name: "Tsade", unicode: "\u05E6" },
  { heb: "ק", name: "Qof", unicode: "\u05E7" },
  { heb: "ר", name: "Resh", unicode: "\u05E8" },
  { heb: "שׁ", name: "Shin", unicode: "\u05E9\u05C1" },
  { heb: "ת", name: "Tav", unicode: "\u05EA" },
];

// Vogais das linhas: sinal unicode + nome + translit + categoria
// O sinal é aplicado diretamente sobre o unicode da letra base
const vtVowelRows = [
  // Longas
  {
    name: "Qamats",
    translit: "ā",
    mark: "\u05B8",
    cat: "long",
    note: "A longa",
  },
  {
    name: "Tsere",
    translit: "ē",
    mark: "\u05B5",
    cat: "long",
    note: "E longa",
  },
  {
    name: "Hiriq Gadol",
    translit: "ī",
    mark: "\u05B4\u05D9",
    cat: "long",
    note: "I longa (com Yod)",
  },
  {
    name: "Holam",
    translit: "ō",
    mark: "\u05B9",
    cat: "long",
    note: "O longa",
  },
  {
    name: "Shuruq",
    translit: "ū",
    mark: null,
    cat: "long",
    note: "U longa (Vav+Dagesh)",
    special: "shuruq",
  },
  // Curtas
  {
    name: "Patah",
    translit: "a",
    mark: "\u05B7",
    cat: "short",
    note: "A curta",
  },
  {
    name: "Segol",
    translit: "e",
    mark: "\u05B6",
    cat: "short",
    note: "E curta",
  },
  {
    name: "Hiriq Qatan",
    translit: "i",
    mark: "\u05B4",
    cat: "short",
    note: "I curta",
  },
  {
    name: "Qibbuts",
    translit: "u",
    mark: "\u05BB",
    cat: "short",
    note: "U curta",
  },
  // Shevas / ultracurtas
  {
    name: "Sheva",
    translit: "ə",
    mark: "\u05B0",
    cat: "sheva",
    note: "Mudo ou móvel",
  },
  {
    name: "Hataf Patah",
    translit: "ă",
    mark: "\u05B2",
    cat: "sheva",
    note: "A ultracurta (guturais)",
  },
  {
    name: "Hataf Segol",
    translit: "ĕ",
    mark: "\u05B1",
    cat: "sheva",
    note: "E ultracurta (guturais)",
  },
  {
    name: "Hataf Qamats",
    translit: "ŏ",
    mark: "\u05B3",
    cat: "sheva",
    note: "O ultracurta (raro)",
  },
];

// Letras guturais — só aceitam Hataf, não sheva simples
const gutturals = new Set(["א", "ה", "ח", "ע"]);
// Letras que não recebem certas vogais abaixo
const noSubVowel = new Set(["ו"]); // Vav é mater lectionis

let vtFilter = "all";

function setVTFilter(cat, btn) {
  vtFilter = cat;
  document
    .querySelectorAll(".vt-filter-bar .filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderVocalTable();
}

function buildCellChar(letter, vowel) {
  // Shuruq é sempre ו + dagesh — não varia por letra base
  if (vowel.special === "shuruq") return "וּ";
  if (!vowel.mark) return "—";

  // Hiriq Gadol: letra + hiriq + yod
  if (vowel.name === "Hiriq Gadol") {
    return letter.unicode + "\u05B4\u05D9";
  }

  return letter.unicode + vowel.mark;
}

function isCellValid(letter, vowel) {
  const isGuttural = gutturals.has(letter.heb.charAt(0));

  // Hataf só em guturais
  if (vowel.cat === "sheva" && vowel.name.startsWith("Hataf") && !isGuttural)
    return false;

  // Shuruq: exibir apenas uma célula de referência (coluna Vav)
  if (vowel.special === "shuruq" && letter.heb !== "ו") return false;

  return true;
}

function renderVocalTable() {
  const table = document.getElementById("vt-table");
  if (!table) return;

  const rows =
    vtFilter === "all"
      ? vtVowelRows
      : vtVowelRows.filter((v) => v.cat === vtFilter);

  // Cabeçalho — letras base
  const headerCells = vtBaseLetters
    .map(
      (l) =>
        `<th class="vt-th-letter" title="${l.name}">
      <span class="vt-col-heb">${l.heb}</span>
      <span class="vt-col-name">${l.name}</span>
    </th>`,
    )
    .join("");

  const thead = `<thead><tr>
    <th class="vt-th-vowel">Vogal</th>
    <th class="vt-th-translit">/ /</th>
    ${headerCells}
  </tr></thead>`;

  // Corpo — uma linha por vogal
  const tbody = rows
    .map((vowel) => {
      const catClass = `vt-row-${vowel.cat}`;

      const cells = vtBaseLetters
        .map((letter) => {
          const valid = isCellValid(letter, vowel);
          const char = valid ? buildCellChar(letter, vowel) : "";
          const cellClass = valid
            ? `vt-cell vt-cell-${vowel.cat}`
            : "vt-cell vt-cell-empty";
          const audio = valid
            ? `onclick="playAudio('${vowel.name === "Hiriq Gadol" || vowel.name === "Hiriq Qatan" ? "hiriq" : vowel.name.toLowerCase().replace(/ /g, "-")}')"`
            : "";
          return `<td class="${cellClass}" title="${valid ? letter.name + " + " + vowel.name : ""}" ${audio}>
        <span class="vt-char">${char}</span>
      </td>`;
        })
        .join("");

      return `<tr class="${catClass}">
      <td class="vt-td-vowel">
        <span class="vt-vowel-name">${vowel.name}</span>
        <span class="vt-vowel-note">${vowel.note}</span>
      </td>
      <td class="vt-td-translit">/${vowel.translit}/</td>
      ${cells}
    </tr>`;
    })
    .join("");

  table.innerHTML = thead + `<tbody>${tbody}</tbody>`;
}

// =====================
// INIT
// =====================
renderAlphabet();
renderVowels();
renderDagesh();
renderFlashcard();
nextQuestion();
renderVocalTable();
