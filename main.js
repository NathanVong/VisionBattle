/* =========================================================
   GAME DATA
   ========================================================= */
const STRUCTURE_TYPES = [
	{
		type: "cone",
		name: "視錐細胞",
		desc: "明亮光線下感應色彩",
		tags: ["強光", "色彩", "高解析度"],
	},
	{
		type: "rod",
		name: "視桿細胞",
		desc: "微弱光線下感應明暗",
		tags: ["弱光"],
	},
	{
		type: "pupil_small",
		name: "瞳孔(縮小)",
		desc: "強光時收縮以減光",
		tags: ["強光"],
	},
	{
		type: "pupil_large",
		name: "瞳孔(擴張)",
		desc: "暗處時放大以增光",
		tags: ["弱光"],
	},
	{
		type: "lens_thick",
		name: "晶體(較厚)",
		desc: "近距離聚焦用（睫狀肌收縮）",
		tags: ["近距"],
	},
	{
		type: "lens_thin",
		name: "晶體(較薄)",
		desc: "遠距離聚焦用（睫狀肌舒張）",
		tags: ["遠距"],
	},
	{
		type: "ciliary_contract",
		name: "睫狀肌(收縮)",
		desc: "使晶體變厚聚焦近物",
		tags: ["近距"],
	},
	{
		type: "ciliary_relax",
		name: "睫狀肌(舒張)",
		desc: "使晶體變薄聚焦遠物",
		tags: ["遠距"],
	},
	{
		type: "macula",
		name: "黃斑部",
		desc: "中央窩高解析度辨色",
		tags: ["高解析度"],
	},
	{
		type: "nerve",
		name: "視神經",
		desc: "傳遞訊號至大腦（百搭卡）",
		tags: ["wild"],
	},
	{
		type: "concave",
		name: "凹透鏡",
		desc: "矯正近視用",
		tags: ["lens"],
	},
	{
		type: "convex",
		name: "凸透鏡",
		desc: "矯正遠視用",
		tags: ["lens"],
	},
];

const IDENTITY_CARDS = [
	{
		type: "healthy",
		name: "健康明眸",
		desc: "開局抽4張手牌，無特殊限制",
	},
	{
		type: "myopia",
		name: "近視患者",
		desc: "手牌+1（開局抽5張）；面對任何有[遠距]標籤的場景，必須連同「凹透鏡」一起出牌，否則出牌無效得0分",
	},
	{
		type: "hyperopia",
		name: "遠視患者",
		desc: "手牌+1（開局抽5張）；面對任何有[近距]標籤的場景，必須連同「凸透鏡」一起出牌，否則出牌無效得0分",
	},
	{
		type: "night_blind",
		name: "夜盲症患者",
		desc: "手牌+1（開局抽5張）；[強光]成功得分時免費多抽1張牌；[弱光]強制不能出牌",
	},
];

const SCENE_CARDS = [
	/* 重複標籤場景（需出 2 張相同標籤的卡牌才能得 3 分） */
	{
		type: "close_reading",
		name: "近距閱讀書本",
		icon: "📖",
		tags: ["近距", "近距"],
		correct: ["lens_thick", "ciliary_contract"],
	},
	{
		type: "repair_watch",
		name: "修理精密手錶",
		icon: "⌚",
		tags: ["近距", "近距"],
		correct: ["lens_thick", "ciliary_contract"],
	},
	{
		type: "distant_tower",
		name: "遠方的旅遊塔",
		icon: "🗼",
		tags: ["遠距", "遠距"],
		correct: ["lens_thin", "ciliary_relax"],
	},
	{
		type: "distant_peak",
		name: "眺望對岸山峰",
		icon: "⛰️",
		tags: ["遠距", "遠距"],
		correct: ["lens_thin", "ciliary_relax"],
	},
	{
		type: "sunlight",
		name: "烈陽直射",
		icon: "☀️",
		tags: ["強光", "強光"],
		correct: ["pupil_small", "cone"],
	},
	{
		type: "snow_glare",
		name: "雪地刺眼反光",
		icon: "🏔️",
		tags: ["強光", "強光"],
		correct: ["pupil_small", "cone"],
	},
	{
		type: "dark_alley",
		name: "深夜無燈暗巷",
		icon: "🌙",
		tags: ["弱光", "弱光"],
		correct: ["pupil_large", "rod"],
	},
	{
		type: "blackout",
		name: "停電的密室",
		icon: "🕯️",
		tags: ["弱光", "弱光"],
		correct: ["pupil_large", "rod"],
	},
	/* 複合標籤場景（需出 2 張不同標籤的卡牌） */
	{
		type: "thread_needle",
		name: "穿針引線",
		icon: "🪡",
		tags: ["近距", "高解析度"],
		correct: ["lens_thick", "ciliary_contract", "macula"],
	},
	{
		type: "microscope",
		name: "顯微鏡看細胞",
		icon: "🔬",
		tags: ["近距", "高解析度"],
		correct: ["lens_thick", "ciliary_contract", "macula"],
	},
	{
		type: "dark_phone",
		name: "暗處滑手機",
		icon: "📱",
		tags: ["近距", "弱光"],
		correct: ["lens_thick", "ciliary_contract", "pupil_large", "rod"],
	},
	{
		type: "color_canvas",
		name: "繪製彩色畫布",
		icon: "🎨",
		tags: ["近距", "色彩"],
		correct: ["lens_thick", "ciliary_contract", "cone"],
	},
	{
		type: "sun_phone",
		name: "烈日下看手機",
		icon: "📲",
		tags: ["近距", "強光"],
		correct: ["lens_thick", "ciliary_contract", "pupil_small", "cone"],
	},
	{
		type: "starry_sky",
		name: "仰望滿天星空",
		icon: "🌌",
		tags: ["遠距", "弱光"],
		correct: ["lens_thin", "ciliary_relax", "pupil_large", "rod"],
	},
	{
		type: "far_sign",
		name: "辨識遠方路標",
		icon: "🪧",
		tags: ["遠距", "高解析度"],
		correct: ["lens_thin", "ciliary_relax", "macula", "cone"],
	},
	{
		type: "fireworks",
		name: "欣賞跨年煙火",
		icon: "🎆",
		tags: ["遠距", "色彩"],
		correct: ["lens_thin", "ciliary_relax", "cone"],
	},
	{
		type: "stage_light",
		name: "舞台聚光燈打臉",
		icon: "🎭",
		tags: ["強光", "色彩"],
		correct: ["pupil_small", "cone"],
	},
	{
		type: "diamond_inspect",
		name: "強光下檢查鑽石",
		icon: "💎",
		tags: ["強光", "高解析度"],
		correct: ["pupil_small", "macula", "cone"],
	},
	{
		type: "bush_chameleon",
		name: "尋找草叢變色龍",
		icon: "🦎",
		tags: ["高解析度", "色彩"],
		correct: ["macula", "cone"],
	},
	{
		type: "dusk_color",
		name: "黃昏微光看彩圖",
		icon: "🌆",
		tags: ["弱光", "色彩"],
		correct: ["pupil_large", "rod", "cone"],
	},
];

const SENSORY_CARDS = [
	{ type: "color_test", name: "色盲測試", icon: "🔴🟢" },
	{ type: "overlap_test", name: "重疊圖案分析", icon: "◯△□" },
];

/* Reshuffle discarded structure cards back into deck when empty */
function reshuffleStructureDeckIfEmpty() {
	if (G.structureDeck.length === 0 && G.structureDiscard.length > 0) {
		G.structureDeck = G.structureDiscard;
		G.structureDiscard = [];
		shuffle(G.structureDeck);
	}
}

/* Card SVG icons */
const CARD_ICONS = {
	cone: '<svg viewBox="0 0 100 80"><polygon points="18,68 33,14 48,68" fill="#e63946" opacity="0.85"/><polygon points="33,68 48,10 63,68" fill="#2a9d8f" opacity="0.85"/><polygon points="48,68 63,14 78,68" fill="#264653" opacity="0.85"/></svg>',
	rod: '<svg viewBox="0 0 100 80"><rect x="38" y="8" width="24" height="52" rx="12" fill="#7c6f9c"/><ellipse cx="50" cy="10" rx="12" ry="6" fill="#b5a8d5"/><rect x="41" y="58" width="18" height="14" rx="4" fill="#574f7d"/></svg>',
	pupil_small:
		'<svg viewBox="0 0 100 60"><path d="M5,30 Q50,-2 95,30 Q50,62 5,30Z" fill="white" stroke="#555" stroke-width="2"/><circle cx="50" cy="30" r="17" fill="#8B6914"/><circle cx="50" cy="30" r="5" fill="black"/><ellipse cx="44" cy="24" rx="3" ry="2" fill="rgba(255,255,255,0.5)"/></svg>',
	pupil_large:
		'<svg viewBox="0 0 100 60"><path d="M5,30 Q50,-2 95,30 Q50,62 5,30Z" fill="white" stroke="#555" stroke-width="2"/><circle cx="50" cy="30" r="17" fill="#8B6914"/><circle cx="50" cy="30" r="13" fill="black"/><ellipse cx="42" cy="23" rx="3" ry="2" fill="rgba(255,255,255,0.35)"/></svg>',
	lens_thick:
		'<svg viewBox="0 0 100 80"><ellipse cx="50" cy="40" rx="20" ry="32" fill="rgba(135,206,250,0.35)" stroke="#4a90d9" stroke-width="2"/><line x1="10" y1="40" x2="30" y2="40" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="70" y1="40" x2="90" y2="40" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="4,3"/></svg>',
	lens_thin:
		'<svg viewBox="0 0 100 80"><ellipse cx="50" cy="40" rx="8" ry="32" fill="rgba(135,206,250,0.35)" stroke="#4a90d9" stroke-width="2"/><line x1="10" y1="40" x2="42" y2="40" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="58" y1="40" x2="90" y2="40" stroke="#4a90d9" stroke-width="1.5" stroke-dasharray="4,3"/></svg>',
	nerve: '<svg viewBox="0 0 100 80"><path d="M12,42 L28,20 L44,52 L60,24 L72,44" fill="none" stroke="#e9c46a" stroke-width="3.5" stroke-linecap="round"/><circle cx="82" cy="38" r="13" fill="#f4a261" opacity="0.75"/><circle cx="82" cy="38" r="6" fill="#e76f51"/><circle cx="8" cy="42" r="5" fill="#2a9d8f"/></svg>',
	ciliary_contract:
		'<svg viewBox="0 0 100 80"><ellipse cx="50" cy="40" rx="20" ry="32" fill="rgba(135,206,250,0.3)" stroke="#4a90d9" stroke-width="2"/><path d="M10,20 Q30,10 10,60" fill="none" stroke="#e63946" stroke-width="2.5"/><path d="M90,20 Q70,10 90,60" fill="none" stroke="#e63946" stroke-width="2.5"/><text x="50" y="48" text-anchor="middle" font-size="14" font-weight="bold" fill="#e63946">收</text></svg>',
	ciliary_relax:
		'<svg viewBox="0 0 100 80"><ellipse cx="50" cy="40" rx="8" ry="32" fill="rgba(135,206,250,0.3)" stroke="#4a90d9" stroke-width="2"/><path d="M10,20 Q30,10 10,60" fill="none" stroke="#2a9d8f" stroke-width="2.5"/><path d="M90,20 Q70,10 90,60" fill="none" stroke="#2a9d8f" stroke-width="2.5"/><text x="50" y="48" text-anchor="middle" font-size="14" font-weight="bold" fill="#2a9d8f">舒</text></svg>',
	macula: '<svg viewBox="0 0 100 80"><circle cx="50" cy="40" r="28" fill="#f4a261" opacity="0.3" stroke="#e76f51" stroke-width="2"/><circle cx="50" cy="40" r="12" fill="#e76f51" opacity="0.5"/><circle cx="50" cy="40" r="4" fill="#c1121f"/></svg>',
	concave:
		'<svg viewBox="0 0 100 80"><path d="M20,20 Q50,10 80,20 L80,60 Q50,70 20,60 Z" fill="rgba(135,206,250,0.25)" stroke="#457b9d" stroke-width="2"/><path d="M20,20 Q50,30 80,20" fill="none" stroke="#457b9d" stroke-width="2"/><path d="M20,60 Q50,50 80,60" fill="none" stroke="#457b9d" stroke-width="2"/></svg>',
	convex: '<svg viewBox="0 0 100 80"><path d="M20,10 Q50,40 20,70 L80,70 Q50,40 80,10 Z" fill="rgba(231,111,81,0.25)" stroke="#e76f51" stroke-width="2"/><path d="M20,10 Q50,40 80,10" fill="none" stroke="#e76f51" stroke-width="2"/><path d="M20,70 Q50,40 80,70" fill="none" stroke="#e76f51" stroke-width="2"/></svg>',
};

/* Ishihara challenge presets */
const ISHIHARA_CHALLENGES = [
	{ number: 7, options: [3, 5, 7, 9] },
	{ number: 5, options: [2, 5, 8, 6] },
	{ number: 12, options: [8, 12, 17, 21] },
	{ number: 8, options: [3, 6, 8, 9] },
	{ number: 3, options: [1, 3, 8, 5] },
];

/* Overlap challenge presets */
const OVERLAP_CHALLENGES = [
	{
		count: 3,
		label: "圓形、三角形、正方形",
		options: [2, 3, 4, 5],
	},
	{
		count: 4,
		label: "圓形、三角形、正方形、菱形",
		options: [3, 4, 5, 6],
	},
	{
		count: 5,
		label: "圓形、三角形、正方形、菱形、五邊形",
		options: [3, 4, 5, 6],
	},
];

/* =========================================================
   GAME STATE
   ========================================================= */
let uid = 0;
const G = {
	phase: "menu",
	currentPlayer: 0,
	players: [],
	structureDeck: [],
	structureDiscard: [],
	sceneDeck: [],
	sceneDiscard: [],
	sensoryDeck: [],
	currentScene: null,
	selectedCardsIdx: [],
	/* 雙方暗蓋出牌用 */
	coverState: "idle", // 'idle' | 'p1_cover' | 'p2_cover' | 'reveal'
	coverCardsIdx: [[], []], // 雙方選中的卡牌索引
	coverPass: [false, false], // 雙方是否選擇不出牌
	identityDeck: [],
	duel: {
		buzzer: -1,
		challenge: null,
		sensoryCard: null,
		secondChance: false,
		canBuzz: false,
		buzzed: false,
		falseStart: null,
		countdownActive: true,
		questionStartTime: 0,
	},
	lastResult: null,
	skipTurn: [-1, -1],
};

/* =========================================================
   UTILITIES
   ========================================================= */
function genUID() {
	return ++uid;
}
function shuffle(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}
function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function showScreen(id) {
	document.querySelectorAll(".screen").forEach(function (s) {
		s.classList.remove("active");
	});
	document.getElementById("screen-" + id).classList.add("active");
	G.phase = id;
}

/* =========================================================
   GAME INIT
   ========================================================= */
function startGame() {
	G.structureDeck = [];
	STRUCTURE_TYPES.forEach(function (t) {
		/* 每種結構卡各2張（除了凹透鏡凸透鏡各1張） */
		let count = t.type === "concave" || t.type === "convex" ? 1 : 2;
		for (let ci = 0; ci < count; ci++) {
			G.structureDeck.push(Object.assign({}, t, { uid: genUID() }));
		}
	});
	shuffle(G.structureDeck);

	G.sceneDeck = SCENE_CARDS.map(function (c) {
		return Object.assign({}, c, { uid: genUID() });
	});
	shuffle(G.sceneDeck);

	G.sensoryDeck = SENSORY_CARDS.map(function (c) {
		return Object.assign({}, c, { uid: genUID() });
	});
	shuffle(G.sensoryDeck);

	G.structureDiscard = [];
	G.skipTurn = [-1, -1];

	/* 身份卡 */
	G.identityDeck = IDENTITY_CARDS.map(function (c) {
		return Object.assign({}, c, { uid: genUID() });
	});
	shuffle(G.identityDeck);

	G.players = [
		{
			name: "玩家一",
			score: 0,
			hand: [],
			usedDuel: false,
			identity: null,
			skipNext: false,
		},
		{
			name: "玩家二",
			score: 0,
			hand: [],
			usedDuel: false,
			identity: null,
			skipNext: false,
		},
	];

	/* 每人抽身份卡 */
	G.players[0].identity = G.identityDeck.pop();
	G.players[1].identity = G.identityDeck.pop();

	/* 發手牌：健康明眸抽4張，其他角色抽5張（手牌+1） */
	for (let pi = 0; pi < 2; pi++) {
		let handSize = G.players[pi].identity.type === "healthy" ? 4 : 5;
		for (let hi = 0; hi < handSize; hi++) {
			if (G.structureDeck.length > 0) {
				G.players[pi].hand.push(G.structureDeck.pop());
			}
		}
	}

	G.currentPlayer = 0;
	G.selectedCardsIdx = [];
	G.currentScene = null;
	showIdentityScreen();
}

/* =========================================================
   IDENTITY SCREEN
   ========================================================= */
function showIdentityScreen() {
	let html =
		'<h2 style="color:var(--optic-gold);font-size:1.3rem;margin-bottom:16px">🎭 身份卡</h2>';
	G.players.forEach(function (p, i) {
		html +=
			'<div style="background:var(--bg-surface);border-radius:12px;padding:16px;margin-bottom:12px;border:1px solid rgba(196,155,61,0.15);text-align:center">' +
			'<div style="font-size:0.9rem;color:var(--text-dim);margin-bottom:4px">' +
			p.name +
			"</div>" +
			'<div style="font-size:1.3rem;font-weight:900;color:' +
			(i === 0 ? "var(--p1-color)" : "var(--p2-color)") +
			'">' +
			p.identity.name +
			"</div>" +
			'<div style="font-size:0.8rem;color:var(--text-dim);margin-top:6px">' +
			p.identity.desc +
			"</div>" +
			"</div>";
	});
	html +=
		'<button class="btn btn-primary" onclick="showPassScreen()"><i class="fas fa-arrow-right"></i> 確認，開始遊戲</button>';
	document.getElementById("pass-content").innerHTML = html;
	showScreen("pass");
}

/* =========================================================
   PASS DEVICE
   ========================================================= */
function showPassScreen() {
	/* 檢查是否有人要跳過回合 */
	let p = G.players[G.currentPlayer];
	if (p.skipNext) {
		p.skipNext = false;
		G.currentPlayer = 1 - G.currentPlayer;
		/* 遞迴但要防止無限循環 */
	}

	let html =
		'<h2 style="color:var(--text-dim);font-size:1.1rem;">回合交替</h2>' +
		'<div class="pass-scores" id="pass-scores-dynamic"></div>' +
		'<div class="pass-hint">請將設備交給</div>' +
		'<h1 class="pass-player-name" id="pass-player-name-dynamic"></h1>' +
		'<button class="btn btn-primary" onclick="startTurn()"><i class="fas fa-eye"></i> 開始回合</button>';

	document.getElementById("pass-content").innerHTML = html;

	let scoresHtml = "";
	G.players.forEach(function (p, i) {
		let isCurrent = i === G.currentPlayer;
		scoresHtml +=
			'<div class="pass-score-item' +
			(isCurrent ? " current" : "") +
			'">' +
			'<div class="pass-score-label">' +
			p.name +
			"</div>" +
			'<div class="pass-score-num" style="color:' +
			(i === 0 ? "var(--p1-color)" : "var(--p2-color)") +
			'">' +
			p.score +
			"</div>" +
			"</div>";
	});
	document.getElementById("pass-scores-dynamic").innerHTML = scoresHtml;
	document.getElementById("pass-player-name-dynamic").textContent =
		G.players[G.currentPlayer].name;
	document.getElementById("pass-player-name-dynamic").style.color =
		G.currentPlayer === 0 ? "var(--p1-color)" : "var(--p2-color)";
	showScreen("pass");
}

function startTurn() {
	G.selectedCardsIdx = [];
	G.currentScene = null;
	G.coverState = "idle";
	G.coverCardsIdx = [[], []];
	G.coverPass = [false, false];
	/* 先顯示行動選擇（翻場景或發起決鬥） */
	renderGameScreen("chooseAction");
	showScreen("game");
}

/* =========================================================
   GAME SCREEN RENDERING
   ========================================================= */
function renderGameScreen(subPhase) {
	renderTopBar();
	renderCenter(subPhase);
	renderHandSection(subPhase);
}

function renderTopBar() {
	let opp = G.players[1 - G.currentPlayer];
	let oppIdx = 1 - G.currentPlayer;
	let topHtml =
		'<div class="player-bar-info">' +
		'<div class="player-avatar" style="background:' +
		(oppIdx === 0 ? "var(--p1-color)" : "var(--p2-color)") +
		'">' +
		(oppIdx + 1) +
		"</div>" +
		'<div><div class="player-name-bar">' +
		opp.name +
		"</div>" +
		'<div class="player-hand-count"><i class="fas fa-clone"></i> ' +
		opp.hand.length +
		" 張手牌</div></div>" +
		"</div>" +
		'<div style="display:flex;align-items:center;gap:8px">' +
		'<div class="player-score-bar"><i class="fas fa-star"></i> ' +
		opp.score +
		"</div>" +
		'<div style="font-size:0.65rem;background:var(--bg-elevated);padding:2px 6px;border-radius:6px;color:var(--text-dim)">' +
		opp.identity.name +
		"</div>" +
		"</div>";
	document.getElementById("game-top-bar").innerHTML = topHtml;
}

function renderCenter(subPhase) {
	let center = document.getElementById("game-center");
	let p = G.players[G.currentPlayer];

	if (subPhase === "chooseAction") {
		let duelDisabled = p.usedDuel;
		let canPlay = !p.skipNext;
		center.innerHTML =
			'<div style="font-size:0.75rem;background:var(--bg-elevated);padding:4px 12px;border-radius:20px;margin-bottom:4px;color:var(--optic-gold)">' +
			'<i class="fas fa-id-card"></i> ' +
			p.identity.name +
			"</div>" +
			'<div class="deck-row">' +
			'<div class="deck-indicator"><div class="deck-icon structure"><i class="fas fa-eye"></i></div><div class="deck-count">結構 ' +
			G.structureDeck.length +
			"</div></div>" +
			'<div class="deck-indicator"><div class="deck-icon scene"><i class="fas fa-image"></i></div><div class="deck-count">場景 ' +
			G.sceneDeck.length +
			"</div></div>" +
			'<div class="deck-indicator"><div class="deck-icon sensory"><i class="fas fa-bolt"></i></div><div class="deck-count">應用 ' +
			G.sensoryDeck.length +
			"</div></div>" +
			"</div>" +
			'<div class="action-prompt">' +
			'<div class="action-prompt-title">' +
			p.name +
			" 的回合</div>" +
			'<div class="action-prompt-sub">選擇本回合的行動</div>' +
			'<div class="action-buttons">' +
			'<button class="btn btn-primary" onclick="drawSceneCard()"' +
			(!canPlay ? " disabled" : "") +
			'><i class="fas fa-image"></i>&ensp;翻開場景卡</button>' +
			'<button class="btn btn-duel' +
			(duelDisabled ? "" : "") +
			'"' +
			(duelDisabled || !canPlay ? " disabled" : "") +
			' onclick="initiateDuel()">' +
			'<i class="fas fa-bolt"></i>&ensp;發起決鬥' +
			(duelDisabled
				? '<br><span style="font-size:0.7rem;font-family:Noto Sans TC,sans-serif;font-weight:400">（已使用過）</span>'
				: "") +
			"</button>" +
			"</div>" +
			"</div>";
	} else if (subPhase === "cover_p1" || subPhase === "cover_p2") {
		/* 暗蓋出牌階段 */
		let coverPlayerIdx = subPhase === "cover_p1" ? 0 : 1;
		let coverPlayer = G.players[coverPlayerIdx];
		let sc = G.currentScene;
		let hasNightBlindWeak =
			coverPlayer.identity.type === "night_blind" &&
			sc.tags.indexOf("弱光") !== -1;

		center.innerHTML =
			'<div class="scene-area">' +
			'<div class="scene-card-display">' +
			'<div class="scene-label">場景卡</div>' +
			'<div class="scene-icon">' +
			sc.icon +
			"</div>" +
			'<div class="scene-name">' +
			sc.name +
			"</div>" +
			"</div>" +
			'<div style="font-size:0.9rem;font-weight:700;color:var(--optic-gold);text-align:center;margin-top:6px">' +
			"🔒 " +
			coverPlayer.name +
			" 暗蓋出牌" +
			"</div>" +
			'<div style="font-size:0.75rem;color:var(--text-dim);text-align:center">' +
			"請從手牌挑選要打出的卡牌，面朝下蓋在桌面（最多2張）<br>凹/凸透鏡不計入此限制<br>" +
			(hasNightBlindWeak
				? '<span style="color:var(--error)">🌙 夜盲症：弱光環境無法出牌，請按「不出牌」</span>'
				: '<span style="color:var(--text-dim)">選好後按「確認暗蓋」</span>') +
			"</div>" +
			"</div>";
	}
}

function renderHandSection(subPhase) {
	let section = document.getElementById("hand-section");

	/* cover_p1/p2: 顯示正在蓋牌的玩家的手牌 */
	let coverPlayerIdx =
		subPhase === "cover_p1"
			? 0
			: subPhase === "cover_p2"
				? 1
				: G.currentPlayer;
	let p = G.players[coverPlayerIdx];
	let identity = p.identity;
	let sc = G.currentScene;
	/* 夜盲症 + [弱光]：手牌不可選取，只能按不出牌 */
	let nightBlindLock =
		identity.type === "night_blind" &&
		sc &&
		sc.tags.indexOf("弱光") !== -1;
	let canSelect =
		(subPhase === "cover_p1" || subPhase === "cover_p2") &&
		!nightBlindLock;

	let cardsHtml = "";
	p.hand.forEach(function (card, i) {
		let sel = G.selectedCardsIdx.indexOf(i) !== -1 ? " selected" : "";
		let dis = !canSelect ? " disabled" : "";
		cardsHtml +=
			'<div class="hand-card' +
			sel +
			dis +
			'" onclick="selectCoverCard(' +
			i +
			"," +
			coverPlayerIdx +
			')" data-idx="' +
			i +
			'">' +
			'<div class="hand-card-icon">' +
			CARD_ICONS[card.type] +
			"</div>" +
			'<div class="hand-card-name">' +
			card.name +
			"</div>" +
			"</div>";
	});

	let actionsHtml = "";
	if (subPhase === "cover_p1" || subPhase === "cover_p2") {
		let playDisabled =
			G.selectedCardsIdx.length === 0 || nightBlindLock
				? " disabled"
				: "";
		actionsHtml =
			'<div class="hand-actions">' +
			'<button class="btn btn-primary"' +
			playDisabled +
			' id="btn-confirm-cover" onclick="confirmCover(' +
			coverPlayerIdx +
			')"><i class="fas fa-check"></i> 確認暗蓋</button>' +
			'<button class="btn btn-secondary" onclick="passCover(' +
			coverPlayerIdx +
			')"><i class="fas fa-minus"></i> 不出牌</button>' +
			"</div>";
	}

	let identityTag =
		'<span style="display:inline-block;font-size:0.7rem;color:var(--optic-gold);margin-left:6px"><i class="fas fa-id-card"></i> ' +
		identity.name +
		"</span>";

	section.innerHTML =
		'<div class="hand-label"><i class="fas fa-hand-paper"></i> ' +
		p.name +
		" 的手牌 (" +
		p.hand.length +
		")" +
		identityTag +
		"</div>" +
		'<div class="hand-cards">' +
		cardsHtml +
		"</div>" +
		actionsHtml;

	/* Bottom bar */
	let cur = G.players[G.currentPlayer];
	let bottomInfo =
		'<div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;padding-top:6px;border-top:1px solid rgba(196,155,61,0.08)">' +
		'<div style="display:flex;align-items:center;gap:8px">' +
		'<div class="player-avatar" style="background:' +
		(G.currentPlayer === 0 ? "var(--p1-color)" : "var(--p2-color)") +
		';width:28px;height:28px;font-size:0.7rem">' +
		(G.currentPlayer + 1) +
		"</div>" +
		'<span style="font-size:0.85rem;font-weight:700">當前回合：' +
		cur.name +
		"</span>" +
		"</div>" +
		'<div class="player-score-bar" style="font-size:1rem"><i class="fas fa-star"></i> ' +
		cur.score +
		"</div>" +
		"</div>";
	section.innerHTML += bottomInfo;
}

/* =========================================================
   CARD SELECTION & PLAY (雙人暗蓋同時出牌制)
   ========================================================= */

/* 蓋牌階段：選擇卡牌 */
function selectCoverCard(idx, playerIdx) {
	if (G.phase !== "game") return;
	if (!G.currentScene) return;
	/* 確保是該玩家的蓋牌階段 */
	if (
		(G.coverState === "p1_cover" && playerIdx !== 0) ||
		(G.coverState === "p2_cover" && playerIdx !== 1)
	)
		return;

	/* 夜盲症 + [弱光]：禁止選牌 */
	let p = G.players[playerIdx];
	if (
		p.identity.type === "night_blind" &&
		G.currentScene.tags.indexOf("弱光") !== -1
	)
		return;

	let pos = G.selectedCardsIdx.indexOf(idx);
	if (pos !== -1) {
		G.selectedCardsIdx.splice(pos, 1);
	} else {
		/* 最多2張（凹/凸透鏡不計入此限制，但我們在 UI 上仍顯示最多2張） */
		let lensCount = 0;
		G.selectedCardsIdx.forEach(function (si) {
			if (G.players[playerIdx].hand[si].tags[0] === "lens") lensCount++;
		});
		let nonLensSelected = G.selectedCardsIdx.length - lensCount;
		let isLens = G.players[playerIdx].hand[idx].tags[0] === "lens";
		if (nonLensSelected >= 2 && !isLens) return;
		G.selectedCardsIdx.push(idx);
	}
	let subPhase = G.coverState === "p1_cover" ? "cover_p1" : "cover_p2";
	renderHandSection(subPhase);
}

/* 確認暗蓋：鎖定當前的蓋牌選擇 */
function confirmCover(playerIdx) {
	/* 確保是該玩家的回合 */
	if (
		(G.coverState === "p1_cover" && playerIdx !== 0) ||
		(G.coverState === "p2_cover" && playerIdx !== 1)
	)
		return;

	/* 夜盲症 + [弱光]：不能確認暗蓋 */
	let p = G.players[playerIdx];
	if (
		p.identity.type === "night_blind" &&
		G.currentScene &&
		G.currentScene.tags.indexOf("弱光") !== -1
	)
		return;

	G.coverCardsIdx[playerIdx] = G.selectedCardsIdx.slice();
	G.coverPass[playerIdx] = false;
	advanceCoverPhase();
}

/* 不出牌：該玩家跳過此回合 */
function passCover(playerIdx) {
	if (
		(G.coverState === "p1_cover" && playerIdx !== 0) ||
		(G.coverState === "p2_cover" && playerIdx !== 1)
	)
		return;

	G.coverPass[playerIdx] = true;
	G.coverCardsIdx[playerIdx] = [];
	G.selectedCardsIdx = [];
	advanceCoverPhase();
}

/* 推進蓋牌階段 */
function advanceCoverPhase() {
	if (G.coverState === "p1_cover") {
		/* 玩家1完成，短暫提示後換玩家2 */
		let center = document.getElementById("game-center");
		center.innerHTML =
			'<div style="font-size:1.3rem;color:var(--optic-gold);text-align:center;padding:20px">🔒 玩家一已暗蓋完成<br><span style="font-size:1rem;color:var(--text-dim)">請將設備交給玩家二</span></div>' +
			'<button class="btn btn-primary" onclick="startP2Cover()" style="margin-top:16px"><i class="fas fa-arrow-right"></i> 玩家二開始暗蓋</button>';
	} else if (G.coverState === "p2_cover") {
		/* 雙方都完成，進行同時結算 */
		G.coverState = "reveal";
		G.selectedCardsIdx = [];
		doSimultaneousReveal();
	}
}

function startP2Cover() {
	G.coverState = "p2_cover";
	G.selectedCardsIdx = [];
	renderGameScreen("cover_p2");
}

/* 雙方同時翻牌結算 */
function doSimultaneousReveal() {
	let sc = G.currentScene;
	let results = [];

	[0, 1].forEach(function (pi) {
		let p = G.players[pi];
		let result = {
			player: pi,
			score: 0,
			correct: false,
			passed: false,
			msg: "",
		};

		if (G.coverPass[pi]) {
			/* 不出牌：補1張 */
			let drawn = null;
			reshuffleStructureDeckIfEmpty();
			if (G.structureDeck.length > 0) {
				drawn = G.structureDeck.pop();
				p.hand.push(drawn);
				result.msg = "不出牌，補了1張牌";
			} else {
				result.msg = "不出牌（牌堆已空）";
			}
			result.passed = true;
			results.push(result);
			return;
		}

		let selectedCards = G.coverCardsIdx[pi].map(function (idx) {
			return p.hand[idx];
		});
		result.cards = selectedCards;

		/* 身份障礙檢查 */
		if (p.identity.type === "myopia" && sc.tags.indexOf("遠距") !== -1) {
			let hasConcave = selectedCards.some(function (c) {
				return c.type === "concave";
			});
			if (!hasConcave) {
				result.msg = "❌ 近視患者面對[遠距]場景需凹透鏡！";
				results.push(result);
				return;
			}
		}
		if (
			p.identity.type === "hyperopia" &&
			sc.tags.indexOf("近距") !== -1
		) {
			let hasConvex = selectedCards.some(function (c) {
				return c.type === "convex";
			});
			if (!hasConvex) {
				result.msg = "❌ 遠視患者面對[近距]場景需凸透鏡！";
				results.push(result);
				return;
			}
		}

		/* 檢查視神經百搭 */
		let hasWild = selectedCards.some(function (c) {
			return c.type === "nerve";
		});
		let playCards = selectedCards.filter(function (c) {
			return c.tags[0] !== "lens" && c.type !== "nerve";
		});

		if (hasWild) {
			let anyCorrect = playCards.some(function (c) {
				return sc.correct.indexOf(c.type) !== -1;
			});
			if (anyCorrect && playCards.length > 0) {
				/* 成功！得3分 */
				removePlayedCards(p, G.coverCardsIdx[pi]);
				p.score += 3;
				result.score = 3;
				result.correct = true;
				result.msg = "視神經百搭！+3分";
				if (
					p.identity.type === "night_blind" &&
					sc.tags.indexOf("強光") !== -1
				) {
					result.msg += doNightBlindBonus(p);
				}
				results.push(result);
				return;
			} else {
				result.msg = "❌ 視神經需搭配1張正確卡";
				results.push(result);
				return;
			}
		}

		/* 正常配對 */
		let matchedTags = 0;
		let usedTypes = [];
		sc.tags.forEach(function (tag) {
			for (let ci = 0; ci < playCards.length; ci++) {
				if (usedTypes.indexOf(ci) !== -1) continue;
				if (playCards[ci].tags.indexOf(tag) !== -1) {
					matchedTags++;
					usedTypes.push(ci);
					break;
				}
			}
		});

		let score = matchedTags === 2 ? 3 : matchedTags === 1 ? 1 : 0;

		if (score > 0) {
			removePlayedCards(p, G.coverCardsIdx[pi]);
			p.score += score;
			result.score = score;
			result.correct = true;
			result.msg =
				score === 3 ? "完美配對2個標籤！+3分" : "配對1個標籤！+1分";
			if (
				p.identity.type === "night_blind" &&
				sc.tags.indexOf("強光") !== -1
			) {
				result.msg += doNightBlindBonus(p);
			}
		} else {
			result.msg = "❌ 出牌與場景標籤不符（卡牌退回手牌）";
		}
		results.push(result);
	});

	showSimultaneousResult(sc, results);
}

/* 顯示雙方同時結算結果 */
function showSimultaneousResult(scene, results) {
	let html =
		'<h2 style="color:var(--optic-gold);font-size:1.2rem;margin-bottom:12px">⚔️ 雙方同時結算</h2>';

	html +=
		'<div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px">' +
		"<span>" +
		scene.icon +
		"</span> " +
		scene.name +
		"</div>";

	/* 顯示分數浮標動畫 */
	results.forEach(function (r) {
		if (r.score > 0) {
			showScorePopup("+" + r.score);
		}
	});

	/* 雙方結果 */
	results.forEach(function (r) {
		let p = G.players[r.player];
		let color = r.player === 0 ? "var(--p1-color)" : "var(--p2-color)";
		html +=
			'<div style="background:var(--bg-surface);border-radius:12px;padding:12px;margin-bottom:10px;border-left:4px solid ' +
			color +
			'">' +
			'<div style="display:flex;justify-content:space-between;align-items:center">' +
			'<span style="font-weight:700;color:' +
			color +
			'">' +
			p.name +
			"</span>";

		if (r.correct || r.passed) {
			html +=
				'<span style="font-size:1.2rem;font-weight:900;color:var(--optic-gold)">' +
				(r.score > 0 ? "+" + r.score : "") +
				"</span>";
		}
		html += "</div>";

		if (r.cards && r.cards.length > 0) {
			html +=
				'<div style="font-size:0.75rem;color:var(--text-dim);margin-top:4px">出牌：' +
				r.cards
					.map(function (c) {
						return c.name;
					})
					.join("、") +
				"</div>";
		}

		html +=
			'<div style="font-size:0.8rem;margin-top:4px;color:' +
			(r.correct
				? "var(--success)"
				: r.passed
					? "var(--text-dim)"
					: "var(--error)") +
			'">' +
			r.msg +
			"</div>";

		html += "</div>";
	});

	html +=
		'<button class="btn btn-primary" style="margin-top:12px" onclick="afterSimultaneousResult()"><i class="fas fa-arrow-right"></i> 繼續</button>';

	document.getElementById("result-container").innerHTML = html;
	showScreen("result");
}

function afterSimultaneousResult() {
	/* 場景卡進棄牌堆 */
	if (G.currentScene) {
		G.sceneDiscard.push(G.currentScene);
	}
	let p0 = G.players[0];
	let p1 = G.players[1];
	if (p0.score >= 10 || p1.score >= 10) {
		setTimeout(showGameOver, 600);
		return;
	}
	/* 重置蓋牌狀態 */
	G.coverState = "idle";
	G.coverCardsIdx = [[], []];
	G.coverPass = [false, false];
	G.currentScene = null;
	G.selectedCardsIdx = [];
	/* 換下一位玩家開始新回合 */
	G.currentPlayer = 1 - G.currentPlayer;
	showPassScreen();
}

function drawSceneCard() {
	if (G.sceneDeck.length === 0) {
		/* 場景牌堆耗盡：將棄牌堆重新洗勻成為新的抽牌堆 */
		if (G.sceneDiscard.length > 0) {
			G.sceneDeck = G.sceneDiscard;
			G.sceneDiscard = [];
			shuffle(G.sceneDeck);
		} else {
			/* 真的都沒牌了才重建 */
			G.sceneDeck = SCENE_CARDS.map(function (c) {
				return Object.assign({}, c, { uid: genUID() });
			});
			shuffle(G.sceneDeck);
		}
	}
	let sc = G.sceneDeck.shift();
	G.currentScene = sc;
	G.selectedCardsIdx = [];
	G.coverCardsIdx = [[], []];
	G.coverPass = [false, false];

	/* 顯示場景卡後進入玩家1暗蓋階段 */
	G.coverState = "p1_cover";
	renderGameScreen("cover_p1");
	showScreen("game");
}

function doNightBlindBonus(player) {
	reshuffleStructureDeckIfEmpty();
	if (G.structureDeck.length > 0) {
		let bonus = G.structureDeck.pop();
		player.hand.push(bonus);
		return " （夜盲症特權：免費多抽1張「" + bonus.name + "」）";
	}
	return " （夜盲症特權：牌堆已空無法抽牌）";
}

function removePlayedCards(player, indices) {
	/* 從大到小排序以避免index移位問題 */
	let sorted = indices.slice().sort(function (a, b) {
		return b - a;
	});
	sorted.forEach(function (idx) {
		let card = player.hand[idx];
		/* 透鏡放回牌堆？根據規則，出錯的退回手牌。出成功的進棄牌堆 */
		G.structureDiscard.push(card);
		player.hand.splice(idx, 1);
	});
}

/* =========================================================
   SCORE POPUP
   ========================================================= */
function showScorePopup(text) {
	let el = document.createElement("div");
	el.className = "score-popup";
	el.textContent = text;
	document.body.appendChild(el);
	setTimeout(function () {
		el.remove();
	}, 1100);
}

/* =========================================================
   DUEL
   ========================================================= */
function initiateDuel() {
	let p = G.players[G.currentPlayer];
	if (p.usedDuel) return;
	p.usedDuel = true;

	/* Reshuffle sensory deck if empty */
	if (G.sensoryDeck.length === 0) {
		G.sensoryDeck = SENSORY_CARDS.map(function (c) {
			return Object.assign({}, c, { uid: genUID() });
		});
		shuffle(G.sensoryDeck);
	}
	let sensory = G.sensoryDeck.shift();
	G.duel.sensoryCard = sensory;
	G.duel.buzzer = -1;
	G.duel.secondChance = false;
	G.duel.canBuzz = false;
	G.duel.buzzed = false;
	G.duel.falseStart = null;
	G.duel.countdownActive = true;

	if (sensory.type === "color_test") {
		G.duel.challenge = Object.assign({}, pick(ISHIHARA_CHALLENGES));
	} else {
		G.duel.challenge = Object.assign({}, pick(OVERLAP_CHALLENGES));
	}

	showDuelIntro();
}

function showDuelIntro() {
	let html =
		'<h1 class="duel-title">⚔️ 感覺應用卡決鬥</h1>' +
		'<div class="duel-subtitle">' +
		G.players[G.currentPlayer].name +
		" 發起了決鬥！</div>" +
		'<div style="font-size:3rem;margin:16px 0">' +
		G.duel.sensoryCard.icon +
		"</div>" +
		'<h3 style="margin-bottom:20px">' +
		G.duel.sensoryCard.name +
		"</h3>" +
		'<button class="btn btn-primary" onclick="startDuelCountdown()"><i class="fas fa-play"></i> 準備開始</button>';
	document.getElementById("duel-container").innerHTML = html;
	showScreen("duel");
}

function startDuelCountdown() {
	let count = 3;
	let container = document.getElementById("duel-container");
	function tick() {
		if (count > 0) {
			container.innerHTML =
				'<div class="duel-countdown" style="animation:countPulse 0.8s ease-in-out">' +
				count +
				"</div>";
			count--;
			setTimeout(tick, 900);
		} else {
			showDuelBuzz();
		}
	}
	tick();
}

function showDuelBuzz() {
	let container = document.getElementById("duel-container");
	let challengeHtml = "";
	let questionText = "";

	if (G.duel.sensoryCard.type === "color_test") {
		challengeHtml =
			'<canvas id="ishihara-canvas" width="220" height="220" style="border-radius:50%;margin:0 auto;display:block"></canvas>';
		questionText = "你看到什麼數字？";
	} else if (G.duel.sensoryCard.type === "overlap_test") {
		challengeHtml =
			'<canvas id="overlap-canvas" width="260" height="200" style="margin:0 auto;display:block;border-radius:12px"></canvas>';
		questionText = "圖中共有幾個獨立的幾何形狀？";
	}

	/* 初始化搶答狀態 */
	G.duel.canBuzz = false;
	G.duel.buzzed = false;
	G.duel.falseStart = null;
	G.duel.questionStartTime = Date.now();

	container.innerHTML =
		'<h2 class="duel-title" style="font-size:1.2rem">搶答！</h2>' +
		'<div class="duel-challenge">' +
		challengeHtml +
		"</div>" +
		'<div class="duel-question">' +
		questionText +
		"</div>" +
		'<div class="duel-keyboard-hint active">' +
		'<div class="key-hint p1"><span class="key">A</span> 玩家一</div>' +
		'<div class="key-hint p2"><span class="key">L</span> 玩家二</div>' +
		"</div>" +
		'<div class="duel-buzzers">' +
		'<button class="buzz-btn p1" onclick="duelBuzz(0)">🖐️ 玩家一 (A)</button>' +
		'<button class="buzz-btn p2" onclick="duelBuzz(1)">🖐️ 玩家二 (L)</button>' +
		"</div>";

	/* 題目顯示後馬上可以搶答 */
	G.duel.canBuzz = true;

	/* 綁定鍵盤事件 — 先移除舊的避免重複綁定 */
	document.removeEventListener("keydown", handleDuelKeydown);
	document.addEventListener("keydown", handleDuelKeydown);

	/* Draw challenge after DOM update */
	setTimeout(function () {
		if (G.duel.sensoryCard.type === "color_test") {
			drawIshihara(
				document.getElementById("ishihara-canvas"),
				G.duel.challenge.number
			);
		} else {
			drawOverlap(
				document.getElementById("overlap-canvas"),
				G.duel.challenge.count
			);
		}
	}, 50);
}

function handleDuelKeydown(e) {
	let key = e.key.toLowerCase();
	if (key !== "a" && key !== "l") return;

	let player = key === "a" ? 0 : 1;

	/* 檢查是否為違規（300ms 內按鍵視為過早搶答，為觸控與鍵盤緩衝） */
	if (!G.duel.buzzed) {
		let elapsed = Date.now() - G.duel.questionStartTime;
		if (elapsed < 300) {
			handleFalseStart(player);
			return;
		}
		duelBuzz(player);
	}
}

/* 處理搶答違規 */
function handleFalseStart(player) {
	/* 移除鍵盤事件監聽 */
	document.removeEventListener("keydown", handleDuelKeydown);

	G.duel.falseStart = player;
	let container = document.getElementById("duel-container");
	let otherPlayer = 1 - player;

	// 1. 先渲染 HTML (不包含 onclick)
	container.innerHTML =
		'<div class="result-icon">⚠️</div>' +
		'<div class="duel-result-text" style="color:var(--error)">違規！</div>' +
		'<div style="color:var(--text-dim);margin-bottom:16px">' +
		G.players[player].name +
		" 提前按鍵，搶答違規</div>" +
		'<div style="font-size:1.1rem;margin-bottom:20px">' +
		G.players[otherPlayer].name +
		" 獲得搶答機會</div>" +
		'<button id="btn-confirm-false-start" class="btn btn-primary">確定</button>';

	// 2. 綁定按鈕事件
	document.getElementById("btn-confirm-false-start").onclick = function () {
		G.duel.buzzed = true; // 標記已搶答（防止再觸發搶答）
		G.duel.buzzer = otherPlayer; // 將搶答權強制給予對手
		showDuelOptions(); // 進入作答畫面
	};
}

/* 處理正常搶答 */
function duelBuzz(playerIdx) {
	document.removeEventListener("keydown", handleDuelKeydown);
	G.duel.buzzed = true;
	G.duel.buzzer = playerIdx;
	showDuelOptions();
}

/* 顯示搶答選項 */
function showDuelOptions() {
	let container = document.getElementById("duel-container");
	let ch = G.duel.challenge;
	let playerName = G.players[G.duel.buzzer].name;
	let options = ch.options || [];
	let correctAnswer = ch.number !== undefined ? ch.number : ch.count;

	// 1. 渲染基礎結構
	container.innerHTML =
		'<h2 class="duel-title" style="font-size:1.2rem">⚡ 搶答中</h2>' +
		'<div class="duel-answerer">' +
		playerName +
		" 搶先作答！</div>" +
		'<div class="duel-question">' +
		(G.duel.sensoryCard.type === "color_test"
			? "你看到的數字是？"
			: "共有幾個幾何形狀？") +
		"</div>" +
		'<div class="duel-options" id="duel-options-container"></div>';

	// 2. 動態產生選項並綁定事件
	let optionsContainer = document.getElementById("duel-options-container");
	options.forEach(function (opt) {
		let btn = document.createElement("div");
		btn.className = "duel-option";
		btn.textContent = opt;
		btn.onclick = function () {
			duelAnswer(opt, correctAnswer);
		};
		optionsContainer.appendChild(btn);
	});
}

/* 處理作答結果 */
function duelAnswer(chosen, correct) {
	let container = document.getElementById("duel-container");
	let buzzer = G.duel.buzzer;
	let isCorrect = chosen === correct;

	if (isCorrect) {
		G.players[buzzer].score += 2;
		container.innerHTML =
			'<div class="result-icon">🎉</div>' +
			'<div class="duel-result-text" style="color:var(--success)">' +
			G.players[buzzer].name +
			" 答對了！+2 分</div>" +
			'<div style="color:var(--text-dim);margin-bottom:16px">正確答案：' +
			correct +
			"</div>" +
			'<button id="btn-continue-success" class="btn btn-primary">繼續</button>';

		document.getElementById("btn-continue-success").onclick = function () {
			afterDuel();
		};
		showScorePopup("+2");
	} else if (!G.duel.secondChance) {
		G.duel.secondChance = true;
		let other = 1 - buzzer;
		G.duel.buzzer = other;
		/* 答錯的玩家下一回合暫停出牌 */
		G.players[buzzer].skipNext = true;

		container.innerHTML =
			'<div class="result-icon">❌</div>' +
			'<div class="duel-result-text" style="color:var(--error)">' +
			G.players[buzzer].name +
			" 答錯了！</div>" +
			'<div style="color:var(--text-dim);margin-bottom:8px">' +
			G.players[buzzer].name +
			" 下一回合暫停出牌</div>" +
			'<div style="color:var(--text-dim);margin-bottom:16px">' +
			G.players[other].name +
			" 獲得答題機會</div>" +
			'<button id="btn-continue-retry" class="btn btn-primary">繼續作答</button>';

		document.getElementById("btn-continue-retry").onclick = function () {
			showDuelOptions();
		};
	} else {
		container.innerHTML =
			'<div class="result-icon">😅</div>' +
			'<div class="duel-result-text" style="color:var(--text-dim)">雙方皆答錯，無人得分</div>' +
			'<div style="color:var(--text-dim);margin-bottom:16px">正確答案：' +
			correct +
			"</div>" +
			'<button id="btn-continue-end" class="btn btn-primary">繼續</button>';

		document.getElementById("btn-continue-end").onclick = function () {
			afterDuel();
		};
	}
}

function afterDuel() {
	document.removeEventListener("keydown", handleDuelKeydown);
	/* 感覺應用卡使用後放回牌堆底部 */
	if (G.duel.sensoryCard) {
		G.sensoryDeck.push(G.duel.sensoryCard);
	}
	G.duel.sensoryCard = null;
	let p0 = G.players[0];
	let p1 = G.players[1];
	if (p0.score >= 10 || p1.score >= 10) {
		showGameOver();
		return;
	}
	G.currentPlayer = 1 - G.currentPlayer;
	G.currentScene = null;
	G.selectedCardsIdx = [];
	showPassScreen();
}

/* =========================================================
   ISHIHARA PLATE DRAWING
   ========================================================= */
function drawIshihara(canvas, number) {
	if (!canvas) return;
	let ctx = canvas.getContext("2d");
	let size = canvas.width;
	let cx = size / 2;
	let cy = size / 2;
	let radius = size / 2 - 4;

	/* Offscreen canvas to render number */
	let off = document.createElement("canvas");
	off.width = size;
	off.height = size;
	let offCtx = off.getContext("2d");
	offCtx.fillStyle = "black";
	offCtx.font = "bold " + size * 0.48 + "px sans-serif";
	offCtx.textAlign = "center";
	offCtx.textBaseline = "middle";
	offCtx.fillText(String(number), cx, cy);
	let imgData = offCtx.getImageData(0, 0, size, size);

	/* Background circle */
	ctx.clearRect(0, 0, size, size);
	ctx.save();
	ctx.beginPath();
	ctx.arc(cx, cy, radius, 0, Math.PI * 2);
	ctx.fillStyle = "#e8e0d0";
	ctx.fill();
	ctx.clip();

	/* Draw dots */
	let attempts = 0;
	let dots = [];
	while (dots.length < 700 && attempts < 5000) {
		attempts++;
		let angle = Math.random() * Math.PI * 2;
		let r = Math.random() * (radius - 3);
		let x = cx + r * Math.cos(angle);
		let y = cy + r * Math.sin(angle);
		let dotR = 2.5 + Math.random() * 4.5;

		/* Check overlap */
		let overlap = false;
		for (let d = 0; d < dots.length; d++) {
			let dx = dots[d].x - x;
			let dy = dots[d].y - y;
			if (Math.sqrt(dx * dx + dy * dy) < dots[d].r + dotR + 1) {
				overlap = true;
				break;
			}
		}
		if (overlap) continue;

		let px = Math.floor(x);
		let py = Math.floor(y);
		if (px < 0 || px >= size || py < 0 || py >= size) continue;
		let idx = (py * size + px) * 4;
		let isNum = imgData.data[idx + 3] > 100;

		let hue, sat, lit;
		if (isNum) {
			hue = 80 + Math.random() * 60;
			sat = 45 + Math.random() * 35;
			lit = 35 + Math.random() * 25;
		} else {
			hue = Math.random() * 35;
			sat = 45 + Math.random() * 40;
			lit = 35 + Math.random() * 25;
		}

		ctx.beginPath();
		ctx.arc(x, y, dotR, 0, Math.PI * 2);
		ctx.fillStyle = "hsl(" + hue + "," + sat + "%," + lit + "%)";
		ctx.fill();
		dots.push({ x: x, y: y, r: dotR });
	}
	ctx.restore();
}

/* =========================================================
   OVERLAP SHAPES DRAWING
   ========================================================= */
function drawOverlap(canvas, count) {
	if (!canvas) return;
	let ctx = canvas.getContext("2d");
	let w = canvas.width;
	let h = canvas.height;
	ctx.clearRect(0, 0, w, h);

	/* Background */
	ctx.fillStyle = "#faf6ee";
	ctx.fillRect(0, 0, w, h);

	let shapes = [];
	let colors = [
		{ fill: "rgba(230,57,70,0.45)", stroke: "#e63946" },
		{ fill: "rgba(42,157,143,0.45)", stroke: "#2a9d8f" },
		{ fill: "rgba(69,123,157,0.45)", stroke: "#457b9d" },
		{ fill: "rgba(244,162,97,0.45)", stroke: "#f4a261" },
		{ fill: "rgba(124,111,156,0.45)", stroke: "#7c6f9c" },
	];

	let cx = w / 2;
	let cy = h / 2;
	let baseR = 38;
	let spread = 40;

	for (let i = 0; i < count; i++) {
		let angle = (Math.PI * 2 * i) / count - Math.PI / 2;
		let sx = cx + Math.cos(angle) * spread * (count > 3 ? 0.8 : 0.7);
		let sy = cy + Math.sin(angle) * spread * 0.7;
		shapes.push({
			x: sx,
			y: sy,
			type: i,
			color: colors[i % colors.length],
		});
	}

	shapes.forEach(function (s, i) {
		ctx.fillStyle = s.color.fill;
		ctx.strokeStyle = s.color.stroke;
		ctx.lineWidth = 2.5;
		ctx.beginPath();
		if (s.type === 0) {
			/* Circle */
			ctx.arc(s.x, s.y, baseR, 0, Math.PI * 2);
		} else if (s.type === 1) {
			/* Triangle */
			ctx.moveTo(s.x, s.y - baseR);
			ctx.lineTo(s.x + baseR * 0.87, s.y + baseR * 0.5);
			ctx.lineTo(s.x - baseR * 0.87, s.y + baseR * 0.5);
			ctx.closePath();
		} else if (s.type === 2) {
			/* Square */
			let half = baseR * 0.75;
			ctx.rect(s.x - half, s.y - half, half * 2, half * 2);
		} else if (s.type === 3) {
			/* Diamond */
			ctx.moveTo(s.x, s.y - baseR);
			ctx.lineTo(s.x + baseR * 0.65, s.y);
			ctx.lineTo(s.x, s.y + baseR);
			ctx.lineTo(s.x - baseR * 0.65, s.y);
			ctx.closePath();
		} else if (s.type === 4) {
			/* Pentagon */
			for (let j = 0; j < 5; j++) {
				let pa = (Math.PI * 2 * j) / 5 - Math.PI / 2;
				let px = s.x + Math.cos(pa) * baseR * 0.8;
				let py = s.y + Math.sin(pa) * baseR * 0.8;
				if (j === 0) ctx.moveTo(px, py);
				else ctx.lineTo(px, py);
			}
			ctx.closePath();
		}
		ctx.fill();
		ctx.stroke();
	});
}

/* =========================================================
   GAME OVER
   ========================================================= */
function showGameOver() {
	let winner = G.players[0].score >= 10 ? 0 : 1;
	let container = document.getElementById("gameover-container");

	container.innerHTML =
		'<div class="gameover-trophy">🏆</div>' +
		'<h1 class="gameover-winner">' +
		G.players[winner].name +
		" 獲勝！</h1>" +
		'<p class="gameover-subtitle">恭喜達成 10 點積分</p>' +
		'<div class="gameover-scores">' +
		'<div class="gameover-score-item">' +
		'<div class="gameover-score-name">' +
		G.players[0].name +
		"</div>" +
		'<div class="gameover-score-num' +
		(winner === 0 ? " winner" : "") +
		'" style="color:' +
		(winner === 0 ? "var(--optic-gold)" : "var(--text-dim)") +
		'">' +
		G.players[0].score +
		"</div>" +
		"</div>" +
		'<div class="gameover-score-item">' +
		'<div class="gameover-score-name">' +
		G.players[1].name +
		"</div>" +
		'<div class="gameover-score-num' +
		(winner === 1 ? " winner" : "") +
		'" style="color:' +
		(winner === 1 ? "var(--optic-gold)" : "var(--text-dim)") +
		'">' +
		G.players[1].score +
		"</div>" +
		"</div>" +
		"</div>" +
		'<div style="display:flex;flex-direction:column;gap:10px">' +
		'<button class="btn btn-primary" onclick="startGame()"><i class="fas fa-redo"></i> 再來一局</button>' +
		'<button class="btn btn-secondary" onclick="showScreen(\'menu\')"><i class="fas fa-home"></i> 回到首頁</button>' +
		"</div>";

	showScreen("gameover");
	spawnConfetti();
}

/* =========================================================
   CONFETTI
   ========================================================= */
function spawnConfetti() {
	let container = document.createElement("div");
	container.className = "confetti-container";
	document.body.appendChild(container);

	let colors = [
		"#e63946",
		"#f4a261",
		"#2a9d8f",
		"#457b9d",
		"#e9c46a",
		"#7c6f9c",
		"#06d6a0",
	];
	for (let i = 0; i < 60; i++) {
		let piece = document.createElement("div");
		piece.className = "confetti-piece";
		piece.style.left = Math.random() * 100 + "%";
		piece.style.background =
			colors[Math.floor(Math.random() * colors.length)];
		piece.style.width = 6 + Math.random() * 8 + "px";
		piece.style.height = 6 + Math.random() * 8 + "px";
		piece.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
		piece.style.animationDuration = 2 + Math.random() * 3 + "s";
		piece.style.animationDelay = Math.random() * 2 + "s";
		container.appendChild(piece);
	}
	setTimeout(function () {
		container.remove();
	}, 6000);
}

/* =========================================================
   DARK MODE DETECTION
   ========================================================= */
if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	document.documentElement.classList.add("dark");
}
window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", function (event) {
		if (event.matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});

/* =========================================================
   INIT
   ========================================================= */
showScreen("menu");
