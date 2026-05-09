# 👁️ VisionBattle - 成像大作戰

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**視覺教具卡牌桌遊 — 認識眼球成像的奧秘**

這是一款雙人回合制卡牌遊戲，透過「場景卡」與「結構卡」的配對，讓玩家在遊戲中學習眼睛的構造與光學原理。遊戲更包含了「感覺應用卡決鬥」機制，以互動問答強化學習體驗。

---

## 📖 遊戲簡介

在《成像大作戰》中，兩位玩家輪流進行回合，透過選取場景卡並出對應的結構卡來獲得積分。率先獲得 **10 分** 的玩家獲勝！

### 🎯 教育目標

- ✅ 認識眼球構造（視錐細胞、視桿細胞、瞳孔、晶體、睫狀肌、黃斑部、視神經）
- ✅ 理解不同光線環境下的視覺適應機制
- ✅ 學習近視、遠視的光學原理（凹透鏡/凸透鏡矯正）
- ✅ 透過決鬥關卡增強觀察與分析能力

---

## 🃏 主要機制

### 🎭 身份卡
遊戲開始前每人隨機抽取身份卡：
- **健康明眸**：開局僅抽3張手牌
- **近視患者**：面對[遠距]場景必須連同凹透鏡出牌
- **遠視患者**：面對[近距]場景必須連同凸透鏡出牌
- **夜盲症患者**：[強光]得分時免費多抽1張；[弱光]強制不能出牌

### 📋 回合流程
| 行動 | 結果 |
|------|------|
| 翻開場景卡 | 確認該場景的2個標籤 |
| 玩家一暗蓋選牌 | 面朝下選取結構卡（最多2張，透鏡不限） |
| 玩家二暗蓋選牌 | 面朝下選取結構卡（最多2張，透鏡不限） |
| 雙方同時翻牌結算 | 根據配對計算雙方得分 |
| 出牌配對1個標籤 | +1分 |
| 出牌配對2個標籤 | +3分 |
| 視神經百搭（+1正確卡） | 直升3分 |
| 出牌錯誤 | 0分，退回手牌 |
| 不出牌 | 抽1張結構卡 |

### ⚔️ 決鬥機制
1. 玩家發起決鬥後，系統隨機抽取感覺應用卡（色盲測試 / 重疊圖案分析 / 視覺錯覺破解）
2. 雙方搶答，答對最快者得 **2 分**
3. 答錯者下一回合暫停出牌
4. 先答錯則對手獲得補答機會

---

## 🖥️ 遊玩方式

### 線上遊玩（推薦）
直接開啟瀏覽器即可遊玩，無需安裝任何軟體！

🔗 **立即試玩**：[VisionBattle Demo](https://nathanvong.github.io/VisionBattle)

### 本地遊玩
```bash
# 1. 複製專案
git clone https://github.com/nathanvong/VisionBattle.git

# 2. 進入目錄
cd VisionBattle

# 3. 使用瀏覽器開啟 index.html
open index.html   # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

或在專案目錄下啟動一個簡易伺服器：
```bash
# Python 3
python3 -m http.server 8080
# 然後開啟 http://localhost:8080

# 或使用 Node.js
npx serve .
```

---

## 🛠️ 開發

本專案為純前端應用，僅需一個 HTML 檔案即可運作。所有樣式、邏輯與素材皆內嵌於 `index.html` 中。

### 專案結構
```
VisionBattle/
├── index.html    # 完整遊戲（HTML + CSS + JavaScript）
├── README.md     # 本檔案
└── LICENSE       # MIT License
```

---

## 📄 License

MIT License — 詳見 [LICENSE](LICENSE) 檔案。
