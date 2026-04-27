# 👁️ VisionBattle - 成像大作戰

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**視覺教具卡牌桌遊 — 認識眼球成像的奧秘**

這是一款雙人回合制卡牌遊戲，透過「場景卡」與「結構卡」的配對，讓玩家在遊戲中學習眼睛的構造與光學原理。遊戲更包含了「感覺應用卡決鬥」機制，以互動問答強化學習體驗。

![遊戲預覽](https://github.com/user-attachments/assets/3195735d-c85a-4403-8818-82e2f24ca515)

---

## 📖 遊戲簡介

在《成像大作戰》中，兩位玩家輪流進行回合，透過選取場景卡並出對應的結構卡來獲得積分。率先獲得 **5 分** 的玩家獲勝！

### 🎯 教育目標

- ✅ 認識眼球構造（視錐細胞、視桿細胞、瞳孔、晶體、視神經）
- ✅ 理解不同光線環境下的視覺適應機制
- ✅ 學習近視、遠視的光學原理
- ✅ 透過決鬥關卡增強觀察與分析能力

---

## 🃏 卡牌類型

| 類型 | 數量 | 說明 |
|------|------|------|
| **結構卡** | 14 張 | 眼睛的組成構造，每類各 2 張（視錐細胞、視桿細胞、瞳孔縮小/放大、晶體厚/薄、視神經） |
| **場景卡** | 7 張 | 不同的環境場景，如烈陽直射、深夜暗巷、近距閱讀等 |
| **感覺應用卡** | 2 張 | 色盲測試（石原氏色盲圖）、重疊圖案分析 |

---

## 🎮 遊戲規則

### 回合流程

| 行動 | 結果 |
|------|------|
| **翻開場景卡** | 從手牌出對應的結構卡 |
| ✅ 出牌正確 | +1 分，卡牌歸還牌堆 |
| ❌ 出牌錯誤 | 不得分，卡牌返回手牌 |
| 🃏 不出牌 | 從結構卡牌堆抽 1 張 |
| ⚔️ 發起決鬥 | 使用感覺應用卡進行搶答（每場僅限一次） |

### 決鬥機制

1. 玩家發起決鬥後，系統隨機抽取一張感覺應用卡（色盲測試 / 重疊圖案分析）
2. 畫面顯示題目，**兩位玩家搶答**
3. **搶答快捷鍵**：玩家一按 `A`，玩家二按 `L`
4. 答對者獲得 1 分；答錯則由對手補答
5. 雙方皆答錯則無人得分

---

## 🖥️ 遊玩方式

### 線上遊玩

直接開啟瀏覽器即可遊玩，無需安裝任何軟體！

🔗 **立即試玩**：[VisionBattle Demo](https://nathanvong.github.io/VisionBattle)

### 本地遊玩

```bash
# 1. 複製專案
git clone https://github.com/你的帳號/VisionBattle.git

# 2. 進入目錄
cd VisionBattle

# 3. 使用瀏覽器開啟 index.html
open index.html   # macOS
start index.html  # Windows
