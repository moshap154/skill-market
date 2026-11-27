# ASD-STE100 繁體中文風格

這個專案提供一個繁體中文對話風格 skill：`asd-ste100-zh-tw`。設計目標是讓 AI Agent 的回覆更直接、易於掃讀。

skill 是 Agent 會讀取的文字指令資料夾。它隨套件（plugin）`asd-ste100-style` 發行，支援 Claude Code、Codex 與 Google Antigravity。

風格參考 ASD-STE100（Simplified Technical English，一套英文技術寫作規範）的部分清楚表達原則。適用情境：

- 日常問答、概念解釋、建議與討論。
- 進度回報。
- 文件撰寫、改寫與檢查（延伸用途）。

使用者不必先貼一段文字請 Agent 改寫。Agent 先回應當前問題，再補必要的理由與限制。

## 使用前請先知道

- 這是非官方的中文表達指引。它沒有實作 ASD-STE100 的英文受控詞典與句長檢查。它不提供 STE 合規，也不保證消除歧義。
- 與不載入 skill 的盲評比較，量測的是 1.1.1，且生成時都明確呼叫 skill：
  - Antigravity CLI（`agy`）與 Claude Code：回覆變短。
  - Codex：沒有觀察到好處。
- 1.3.0 以 1.1.1 為本，另有三處修改：`description`、篇幅限制的句子，以及修正後的參考文件。這個組合沒有與不載入 skill 比較過。
- 自動觸發時的回覆效果，與常駐規則模式（把規則寫進指令檔，每次對話都載入）的效果，沒有量測。
- 沒有做過人類讀者測試，所以沒有證據證明它改善理解。

資料與限制見[評測資料](#評測資料)。

## 範例

以下是自製示例，不代表真實測試結果。

**簡短問答**

使用者：「暫存和備份差在哪裡？簡單說就好。」

> 暫存用來暫時保留工作中的內容；備份用來在原始資料遺失或損毀時還原資料。兩者用途不同，暫存不一定能取代備份。

**進度回報**

已知情境：升級套件後，既有測試 `test_export` 失敗，升級前通過。原因尚未查證，但懷疑是新版預設值改變。使用者問：「升級做完了嗎？」

> 還沒有。升級已套用，但一項既有測試失敗。
>
> - 已完成：套件升級與安裝。
> - 失敗：既有測試 `test_export` 失敗，升級前通過。
> - 待查證：我懷疑新版預設值改變是原因，尚未驗證。
> - 下一步：把該設定改回升級前的值，重跑 `test_export`，確認假設。

更多情境見[對話與改寫範例](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/examples.md)。

## 風格重點

規則摘要：

- 先回應當前問題，再補理由、條件與限制。
- 一句處理一個主要意思。主體與動作要清楚。
- 同一概念使用同一個名稱。
- 保留數值、條件、否定、時序、引用與不確定性。已知、推論與尚未驗證，分開寫。
- 專案已定義的術語、介面名稱、命令、識別字、引文與指定輸出格式，保持原樣。
- 中文句長依語意處理。英文單字上限不換算成中文字數。

結構依交付內容決定，不固定套用模板：

| 內容           | 寫法                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------- |
| 簡短問答       | 幾句即可，不固定加標題。                                                                           |
| 概念解釋與討論 | 連貫段落，一段一主題。並列資訊再用條列。                                                           |
| 建議與選擇     | 寫出依據，以及會改變判斷的條件。                                                                   |
| 進度回報       | 三項以上獨立狀態用條列，一至兩項寫進句子。使用者問「是否完成」等是非問題時，列表前先用一句寫結論。 |
| 工作中的更新   | 只寫新結果或阻礙，一句即可。                                                                       |
| 操作步驟       | 先寫必要條件，再寫操作。只在操作段落使用編號。同步動作保留「同時」。                               |

使用者可以指定模式，Agent 沿用其選擇：

- 自然模式：用連貫段落，少用編號與小標。
- 嚴格模式：依序用編號列出動作，前提與警告在動作之前。

文件處理是延伸用途：

- 一般潤飾：只更正可由已提供資訊唯一判定的錯誤，並說明更正處。
- 指定純成品或固定格式：只交付正確內容。
- 資訊不足的主張：先釐清，或標為待確認。
- 忠實保留：使用者明確要求時，才保存原錯誤。要清楚標示，避免將其當成可發布成品。

## 安裝

### 選擇安裝範圍

先決定這個風格只在目前專案生效，還是跨專案生效。「跨專案」指寫入使用者層級的設定，所有專案共用。下文的「使用者層級」與「全域」同義。只允許變更目前專案時，不要使用跨專案的選項。

| 範圍         | Claude Code                                                                            | Codex                               | Antigravity                                       |
| ------------ | -------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------- |
| 只限目前專案 | 套件 `--scope local`（只影響自己）或 `--scope project`（團隊共用）。或單一 skill。 | 單一 skill。                        | 單一 skill。或把套件複製到 `.agents/plugins/`。 |
| 跨專案       | 套件不加 `--scope`（預設為 `user`）。或單一 skill 放在使用者目錄。                 | 套件。或單一 skill 放在使用者目錄。 | 套件。或單一 skill 放在使用者目錄。               |

說明：

- Codex 的 `codex plugin add` 沒有 `--scope` 選項。它安裝在使用者層級，並更新該機器的 Codex 套件設定。
- Codex 官方文件載明，專案的 `.codex/config.toml` 可控制套件是否啟用。本專案沒有測。
- Antigravity 的 `agy plugin install` 沒有專案範圍選項。它安裝在使用者層級的 `~/.gemini/config/plugins/`。
- 安裝 skill 不等於每則回覆都採用此風格。要預設採用，見[設為預設風格](#設為預設風格)。

### 方法一：請 Agent 代為安裝

1. 展開下方的安裝 Prompt，複製全文。
2. 確認 Prompt 內的來源網址，是你要安裝的儲存庫。
3. 把全文貼給要協助安裝的 Agent。
4. 回答 Agent 提出的範圍與形式問題。Agent 應先詢問，取得你的選擇後才寫入設定。
5. 檢查 Agent 的完成報告。Prompt 要求它列出變更位置、作用範圍、啟用方式，以及實際完成與尚未完成的驗證。

<details>
<summary>展開安裝 Prompt</summary>

```text
請協助我安裝 ASD-STE100 繁體中文風格套件（asd-ste100-style），其中的 skill 名稱是 asd-ste100-zh-tw。
用途：調整 AI Agent 在日常問答、解釋、建議與進度回報中的表達風格，也可延伸至文件表達。
來源：https://github.com/felimet/asd-ste100-style

先閱讀來源的 README、套件描述檔與 SKILL.md，確認支援的安裝方式。
開始修改檔案或設定前，主動詢問我：
1. 要用在哪些 AI Agent？例如 Claude Code、Codex、Google Antigravity（agy CLI 或 IDE）、Gemini CLI，或其他工具。
2. 使用範圍是目前專案，還是跨專案的全域範圍？
3. 希望以什麼形式存在？請提供下列選項並說明差異：
   A. 僅安裝套件或 skill，按需使用。
   B. 加入 rules 或指令檔，作為所選範圍的常駐預設風格；例如全域常駐或專案常駐。
   C. 納入工具的個人化設定或自訂指令。
   D. 其他方式，先提出方案再由我選擇。
如果我已明確指定某項選擇，就沿用，不要重複詢問。其餘選項尚未確定時，先等待我的回答，不自行假定全域安裝或修改個人化設定。

收到選擇後：
- Claude Code 與 Codex 優先使用本專案的套件與 marketplace；Antigravity 的專案範圍優先使用 `.agents/skills/` 單一 skill。安裝方式必須符合我選定的作用範圍。若工具無法在該範圍安裝套件，先說明限制，讓我選擇該範圍的單一 skill 或其他方案，不自行改為全域安裝。
- 列出實際安裝位置與規則檔位置，保留既有內容，僅合併相關設定；遇到衝突時指出差異。
- 若要設為預設風格，將精簡規則加入工具支援的 rules、CLAUDE.md、AGENTS.md、GEMINI.md 或個人化指令。以套件安裝時，用 skill 名稱引用完整規則，因為套件的快取路徑會隨版本改變；只有單一 skill 放在固定位置時，才寫實際的 SKILL.md 路徑。
- 若目標工具不能讀取本機檔案，改提供可直接貼上的自足規則；無法代為操作設定介面時，提供文字與步驟，不宣稱已套用。
- 三項以上獨立的進度狀態或操作步驟用條列；有先後順序的步驟用編號，並列狀態、條件與檢查項目用項目符號，同時保留數值、條件、否定、時序、引用及不確定性。
- 完成後列出變更位置、作用範圍、啟用方式，以及實際完成與尚未完成的驗證。

請區分「全域可用」與「預設風格常駐」：只安裝套件或 skill，不代表每次回覆都會自動套用。
```

</details>

### 方法二：套件

套件含 skill 與套件描述檔（manifest）。本儲存庫的根目錄是 marketplace（列出可安裝套件的來源）。套件本身在 `plugins/asd-ste100-style/`。

[套件 ZIP](dist/asd-ste100-style-plugin.zip) 解壓後有 `asd-ste100-style/` 資料夾。下文稱它為「套件資料夾」。它含 marketplace 檔案與 `plugins/asd-ste100-style/`，不含 `tests/` 與維護者檔案。

**Claude Code，從 GitHub**：`--scope project` 與 `--scope local` 都已用 Claude Code 2.1.323 實測安裝，結果是 1.3.0（commit `456b281`）。測試使用獨立的 `CLAUDE_CONFIG_DIR` 與空專案，沒有實際呼叫 skill。見[安裝測試紀錄](tests/install-validation-2026-11-14.md)。在目標專案的根目錄，依序執行下列兩條命令。

```powershell
claude plugin marketplace add felimet/asd-ste100-style --scope project
claude plugin install asd-ste100-style@asd-ste100-local --scope project
```

`--scope project` 寫進專案的 `.claude/settings.json`。這個檔案可提交，隨專案共用。協作者仍須各自執行 install（依官方文件，沒有實測）。`--scope` 只決定啟用設定記在哪個專案檔。marketplace 的 clone 與套件快取寫在使用者層級的設定目錄。

**Claude Code，從套件資料夾**：執行前完成下列三項。

- 在目標專案的根目錄執行。
- 把 `<套件資料夾>` 換成絕對路徑。
- 安裝後不要刪除套件資料夾，因為 Claude Code 直接從該資料夾讀取套件。

本機路徑只對這台電腦有效，所以使用 `--scope local`。它寫進 `.claude/settings.local.json`，只對你、這個專案有效。安裝不會寫入 `.gitignore`，提交前確認它沒有被加入版本控制。依序執行：

```powershell
claude plugin marketplace add <套件資料夾> --scope local
claude plugin install asd-ste100-style@asd-ste100-local --scope local
```

`asd-ste100-local` 只是 marketplace 識別名稱。它不表示套件必須在本機。

**Codex CLI**：依序執行。這會寫入使用者層級的設定。

```powershell
codex plugin marketplace add <套件資料夾>
codex plugin add asd-ste100-style@asd-ste100-local
```

**Antigravity CLI**：直接安裝套件本身（`<套件資料夾>/plugins/asd-ste100-style`），不經過 marketplace。第一條命令驗證套件。第二條命令安裝套件。這會寫入使用者層級的設定。

```powershell
agy plugin validate <套件資料夾>/plugins/asd-ste100-style --strict
agy plugin install <套件資料夾>/plugins/asd-ste100-style
```

只限目前專案時，把 `<套件資料夾>/plugins/asd-ste100-style` 複製為目標專案的 `.agents/plugins/asd-ste100-style/`。Antigravity 官方文件載明這個做法，且已實測可載入。

Antigravity 官方文件只列出 `plugin.json` 與 `.antigravity-plugin/plugin.json` 兩種描述檔位置，也沒有記載 marketplace 檔案格式。因此本專案沒有為 Antigravity 另建描述檔或 marketplace。

### 方法三：單一 skill

單一 skill 是複製一個資料夾。範圍由放置位置決定。

| 工具        | 專案內的位置                                              | 使用者目錄                                                                                                                 |
| ----------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Claude Code | `.claude/skills/asd-ste100-zh-tw/`                      | `~/.claude/skills/asd-ste100-zh-tw/`                                                                                     |
| Codex       | `.agents/skills/asd-ste100-zh-tw/`                      | `~/.agents/skills/asd-ste100-zh-tw/`                                                                                     |
| Antigravity | `.agents/skills/asd-ste100-zh-tw/`（與 Codex 同一路徑） | `~/.gemini/config/skills/asd-ste100-zh-tw/`（Antigravity 官方文件仍列出 IDE 舊版路徑 `~/.gemini/antigravity/skills/`） |

Antigravity 官方文件未列出 `~/.agents/skills/`。本專案沒有確認 Antigravity 是否讀取該路徑。要在 Antigravity 跨專案使用，請放在上表的官方路徑。

來源有兩個，擇一：

- 本儲存庫的 `plugins/asd-ste100-style/skills/asd-ste100-zh-tw` 資料夾。複製整個資料夾，保留其中的參考文件。
- [skill ZIP](dist/asd-ste100-zh-tw.zip)。解壓後，複製其中的 `asd-ste100-zh-tw` 資料夾。`SKILL.md` 應直接位於該資料夾內，避免多放一層同名資料夾。

下列 PowerShell 範例會同時安裝到 Claude Code 與 Codex 的專案目錄。Antigravity 官方文件列出 `.agents/skills/`，與 Codex 同一路徑，因此不需要第三個目的地。這個路徑的探索沒有在 agy 上實測。執行前完成下列兩項。

- 切換到本儲存庫根目錄。
- 把 `../target-project` 改為既有專案的路徑。

同名目的地已存在時會停止。

```powershell
$skillSource = (Resolve-Path './plugins/asd-ste100-style/skills/asd-ste100-zh-tw').Path
$targetProject = (Resolve-Path '../target-project').Path
$skillTargets = @(
    (Join-Path $targetProject '.claude/skills/asd-ste100-zh-tw')
    (Join-Path $targetProject '.agents/skills/asd-ste100-zh-tw')
)
foreach ($skillTarget in $skillTargets) {
    if (Test-Path -LiteralPath $skillTarget) { throw "目的地已存在：$skillTarget" }
}
foreach ($skillTarget in $skillTargets) {
    New-Item -ItemType Directory -Path (Split-Path $skillTarget) -Force | Out-Null
    Copy-Item -LiteralPath $skillSource -Destination $skillTarget -Recurse
}
```

此 skill 是文字指令，不需要額外的 API 金鑰，也不需要另外安裝執行期的程式庫。各工具的 skill 格式見 [Claude Code 文件](https://code.claude.com/docs/en/skills)、[Codex 文件](https://learn.chatgpt.com/docs/build-skills)與 [Antigravity Skills 文件](https://antigravity.google/docs/skills)。

## 呼叫 skill

在目標專案開啟工作階段。輸入 skill 名稱，後接任務。範例任務：「請用此風格回答：為什麼把工作拆成小步驟比較容易開始？」

| 工具與安裝形式          | 呼叫方式                                                                                                             |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Claude Code，套件       | `/asd-ste100-style:asd-ste100-zh-tw <任務>`（套件使用命名空間）                                                    |
| Claude Code，單一 skill | `/asd-ste100-zh-tw <任務>`                                                                                         |
| Antigravity CLI         | `/asd-ste100-zh-tw <任務>`                                                                                         |
| Antigravity IDE         | 官方文件未說明斜線呼叫。由 Agent 依 `description` 判斷，或在 Prompt 中指名此 skill。                               |
| Codex，套件             | Codex 官方文件的做法是在 Prompt 中輸入 `@`，提及套件或其內含的 skill。`$` 選單是否列出套件內的 skill，沒有驗證。 |
| Codex，單一 skill       | `$asd-ste100-zh-tw <任務>`                                                                                         |

- 需要固定格式、讀者背景或專案術語時，直接在同一個請求中說明。
- 工具未列出新安裝的 skill 時，重新開啟工作階段後再確認。
- Antigravity CLI 可執行 `/skills reload`，或開新的工作階段。
- Codex 套件安裝後的叫用字串沒有實測。需要穩定叫用時，改用單一 skill 安裝。

更多 Prompt 範例。下列範例使用 `$asd-ste100-zh-tw`，適用 Codex 單一 skill 安裝。其他情況改用上表的呼叫方式。

```text
$asd-ste100-zh-tw 用一個生活中的例子，說明「必要條件」和「充分條件」有什麼差別。

$asd-ste100-zh-tw 我有兩個選項：A 成本較低但需要手動整理，B 成本較高但能自動整理。每週只用一次，你會怎麼判斷？

$asd-ste100-zh-tw 目前只完成設定，測試還沒開始。請幫我向同事說明現在的進度。

$asd-ste100-zh-tw 說明以下操作順序：先確認檔案存在，再開啟檔案；不存在時回報錯誤並停止。
```

也可要求以圖解、HTML 或影片腳本說明內容：

```text
$asd-ste100-zh-tw 用簡短文字與 Mermaid 說明以下資料流程，區分處理順序與統計相關。

$asd-ste100-zh-tw 將以下內容寫成單檔 HTML 解說頁，清楚標示假設，讓核心說明在不操作互動元件時也能閱讀。

$asd-ste100-zh-tw 為以下主題撰寫解說影片腳本，分列畫面、旁白與字幕，保留必要條件及限制。
```

各種形式共用語意保留原則。實際圖像、網頁互動、影片渲染與配音，取決於執行環境提供的工具。腳本或程式碼本身，不代表成品已完成或通過驗證。

### 自動觸發

自動觸發的載入情況取決於 Prompt 內容。下列次數是現行 `description` 的結果（2026-11-13 第三組保留題的 A 部分，[紀錄](tests/heldout3-eval-2026-11-13.md)）：不加 `/` 或 `$` 呼叫前綴，每題每個工具取樣 1 次。

- 使用者點名 STE，或要求設為預設：三個 CLI 合計 21 次中載入 20 次。
- 只描述風格、沒有點名（例如「寫得清楚精確、一句一重點」）：Antigravity CLI 與 Claude Code 合計 10 次中載入 4 次，Codex 5 次全部載入。
- 上一項只有 5 題，而且是事後分組，不能推論整體載入率。

需要穩定使用時，明確呼叫 skill。也可設為常駐規則，但該模式的效果沒有評測過。

Codex 在 skill 很多的環境，會把每則 `description` 截短。作者機器有 249 個 skill 時，只顯示前 77 字。因此自動觸發的條件放在 `description` 的最前面。

## 設為預設風格

只安裝 skill，不會讓每則回覆都採用此風格。要預設採用，需要把規則加到該工具的個人化設定、rules 或指令檔。全域安裝只讓 skill 在所有專案可用。要在所有專案常駐採用，須把規則寫進該工具的全域指令檔（見下表）。

效果的評測只涵蓋明確呼叫 skill，沒有涵蓋常駐規則模式。明確呼叫時，Codex 上沒有觀察到好處，見[評測資料](#評測資料)。

### 規則檔位置

| Agent              | 專案預設規則                                                | 全域預設規則                                        |
| ------------------ | ----------------------------------------------------------- | --------------------------------------------------- |
| Claude Code        | `CLAUDE.md` 或 `.claude/rules/*.md`                     | `~/.claude/CLAUDE.md` 或 `~/.claude/rules/*.md` |
| Codex              | `AGENTS.md`                                               | `~/.codex/AGENTS.md`                              |
| Antigravity        | `AGENTS.md` 或 `GEMINI.md`（或 `.agents/rules/*.md`） | `~/.gemini/AGENTS.md` 或 `~/.gemini/GEMINI.md`  |
| Gemini CLI（舊版） | `GEMINI.md`                                               | `~/.gemini/GEMINI.md`                             |
| 其他 Agent         | 工具支援的專案 rules 或指令                                 | 工具支援的個人化設定、自訂指令或全域 rules          |

表列是預設位置。自訂設定目錄、override 檔與載入規則，仍以目標工具為準。依據的文件：

- [Claude Code 指令與 rules 文件](https://code.claude.com/docs/en/memory)
- [Codex AGENTS.md 文件](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
- [Gemini CLI GEMINI.md 文件](https://geminicli.com/docs/cli/gemini-md/)
- [Antigravity Rules 文件](https://antigravity.google/docs/rules)

### 容易出錯的地方

- Codex 的標準檔名是 `AGENTS.md`（複數），不是 `AGENT.md`。
- 專案的 `AGENTS.md` 同時被 Codex 與 Antigravity 讀取，寫入它會影響兩個工具。
- `~/.gemini/GEMINI.md` 同時是 Gemini CLI 的全域檔。寫入它會影響兩個工具。

以下 Antigravity 載入行為只比對了官方文件，沒有在 agy 實測：

- `AGENTS.md` 或 `GEMINI.md`：不需要 frontmatter，載入後常駐。
- `.agents/rules/*.md`：需要有效的 `trigger` frontmatter。設為 `always_on` 才每回合注入。
- 只想讓 Antigravity 常駐此風格時：改用 `.agents/rules/` 下的規則檔，並設 `trigger: always_on`。
- 規則會累加，不互相覆寫。官方文件未定義 `AGENTS.md` 與 `GEMINI.md` 的優先順序。
- 單檔上限是 24 KB。全域規則與 `always_on` 規則共用 20,000 token 預算。

Google 於 2026-05-19 公告以 Antigravity CLI 接替 Gemini CLI（[轉換公告](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)）。影響範圍如下：

- Google AI Pro、Ultra 與免費個人版：Google 自 2026-06-18 停止提供 Gemini CLI 服務。
- Standard 或 Enterprise 授權的組織，與使用付費 API key 者：不受此影響。

上表保留 Gemini CLI 一列，供舊環境參考。本專案沒有測試其他 Agent 是否原生支援此套件格式。請查閱該工具的文件，或改用單一 skill 或規則檔。

### 可複製的預設規則

將下列文字合併到所選範圍的設定中。最後一行由安裝 Agent 依安裝方式填寫：

- 以套件安裝：寫帶套件命名空間的名稱 `asd-ste100-style:asd-ste100-zh-tw`（Claude Code 與 Codex 的安裝測試紀錄都是這個名稱）。原因是套件的快取路徑會隨版本改變。
- 單一 skill 放在固定位置：可改寫成實際的 SKILL.md 路徑。
- 只能使用設定介面的工具：保留自足規則，省略最後一行。

```text
對話預設採用 ASD-STE100 繁體中文風格（非官方改編），適用於問答、解釋、建議、討論與進度回報；依當次指定語言、語氣及格式調整。
使用者自己的指令（CLAUDE.md、AGENTS.md、persona 或當次要求）規定回覆順序、必備內容或語氣時，以其為準；數值、否定、條件、時序與不確定性的規則仍然適用。
未被上述指令規定時，先回答當前問題，再補必要理由、條件與限制。簡單問題直接回答，複雜問題保留足以支持判斷的細節。
使用清楚的主體、動作與一致術語；一句處理一個主要意思，依中文語意拆句，不套用英文 STE 的字數上限。保留數值、條件、否定、時序、引用及不確定性，區分已知、推論與尚未驗證；比較百分比時區分百分點與相對變化。
三項以上獨立的進度狀態或操作步驟用條列，進度狀態只有一至兩項時用句子；使用者問是非判斷時，列表前先用一句寫結論。有先後順序的步驟用編號，並列狀態、條件與檢查項目用項目符號。機制與推理保留連貫段落，短答不固定加標題或清單。使用者限定篇幅（例如「一句話」「簡單說」「50 字內」）時，整則回覆都要符合限制，附註、免責說明與「此處省略……」之類的句子也算在內。放不下的補充就刪除。少了它答案會變成錯的限定，壓縮主答案後放進限制內；使用者限定句數時，併入既有句子，不另起一句。「省略了什麼」「未檢查什麼」不算這類限定。
此風格可延伸至文件表達：一般潤飾只更正可由已提供資訊唯一判定的錯誤並說明（指定純成品或固定格式時只交付正確內容）；無法唯一判定時詢問或標為待確認；保留指定創作文體；不把風格調整當成事實查核或外部操作的授權。
需要完整規則時，載入 asd-ste100-zh-tw skill。
```

設定後，依序確認：

1. 在相同範圍開啟新的工作階段。
2. 確認 Agent 讀到的規則來源。
3. 以日常問答、接續提問及操作指引，各試一題。

只完成檔案安裝，不能當作預設規則已載入的證據。跨回合及跨工作階段的預設效果，仍取決於目標工具實際載入規則的方式。

## 評測資料

評測紀錄在 [`tests/`](tests/README.md)。三個生成者（產生回覆的工具）：Antigravity CLI（`agy`，模型為 Gemini 3.8 Flash）、Codex 與 Claude Code（Sonnet）。每個生成者的回覆，由另外兩家模型交叉評審。保留題由看不到 skill 的人撰寫。修改 skill 的人在評測結束前沒有讀題目內容。

評審與生成者來自同三個模型家族。agy 與 Codex 在作者的個人環境執行，載入了作者自己的全域指令。Claude Code 以隔離設定執行。

結論（量測對象是 1.1.1 對不載入 skill，且都明確呼叫 skill；CI 指 95% 信賴區間）：

- 支持：agy 與 Claude Code 的回覆變短。
- 未確定：評審對這兩者的可讀性評分較高。但 agy 的提高無法與縮短分開，Claude Code 的提高是否獨立於縮短，也未確定。
- 沒有證據顯示改變：必備內容滿足率。三個生成者的差，CI 都包含 0。Codex 的點估計為負，不能排除小幅退步。
- 沒有觀察到好處：Codex。
- 沒有做：人類讀者測試。

完整紀錄與限制見 [`tests/README.md`](tests/README.md) 的索引。重跑評測判定需要完整的儲存庫，因為套件 ZIP 不含 `tests/`。從結果檔重跑判定：

```powershell
python -I -B -X utf8 tests/eval/heldout2_decide.py tests/heldout2-eval-2026-11-12.json --sensitivity
python -I -B -X utf8 tests/eval/heldout3_decide.py tests/heldout3-eval-2026-11-13.json
```

## 規範依據、範圍與授權

### 規範依據與範圍

本 skill 參考 [ASD-STE100 Issue 9](https://www.asd-ste100.org/assets/files/ASD-STE100_ISSUE9.pdf) 的部分寫作原則。

- 英文詞典、詞性與句長限制，不直接套用於中文。
- 中文規則、讀檔條件與編輯界線，均為本專案設計。它們不是正式 STE 合規依據。
- 媒介延伸與無障礙要求的來源，另列於[來源與規則對照](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/sources.md)。

文風調整不等於事實查核、專業審查或實際測試。一般潤飾只更正可由已提供資訊唯一判定的錯誤，並說明更正處。需要查證外部事實，或修正其他內容時，請在任務中明確說明。

### 授權

本專案採用 [MIT License](LICENSE)，著作權人為 Jia-Ming Zhou（Felimet）。單一 skill 亦附有 [LICENSE](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/LICENSE)，下載 ZIP 內均包含授權文件。

此授權適用於本專案內容，不變更外部 ASD-STE100 標準文件的著作權或授權條件。

ASD-STE100 Simplified Technical English 是 ASD 的註冊商標。本專案為獨立的第三方、受 STE 啟發的中文表達指引，與 ASD、STEMG 無隸屬、合作、認證或背書關係，也不提供 STE 合規。

## 文件導覽

| 文件                                                                                        | 內容                                                     |
| ------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [SKILL.md](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/SKILL.md)                        | 對話風格、情境調整與回覆檢查。                           |
| [文件與操作指引](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/documents.md)   | 文件改寫、審查與操作步驟的處理界線。僅在這類任務時讀取。 |
| [對話與改寫範例](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/examples.md)    | 問答、建議、接續討論、進度回報，以及文件延伸示例。       |
| [術語與語意控制](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/terminology.md) | 情態、量詞、領域術語及量值比較。                         |
| [媒介規則](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/formats.md)           | 圖解、HTML 與解說影片的表達原則。                        |
| [來源與規則對照](plugins/asd-ste100-style/skills/asd-ste100-zh-tw/references/sources.md)     | 來源連結與英文標準原則的中文改編對照。                   |
| [評測紀錄索引](tests/README.md)                                                              | 各版本的盲評、保留題、安裝測試與勘誤。                   |
| [AGENTS.md](AGENTS.md)                                                                       | 維護者的驗證命令、重建 ZIP 與評測慣例。                  |