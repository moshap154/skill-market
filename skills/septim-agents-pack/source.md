DISPATCH/AGENTS-V2.4
# 12 agents online · last invocation 14s ago · 8,402 jobs completed lifetime
--:--:-- UTC
BUILD 2.4.7
● UP

/ tools › 02 · agents · developer

Twelve agents.
One indie founder.

A pre-wired Claude Code roster: triage, research, ship. Each agent is a markdown file you can read, edit, and version. No platform, no console, no $200/seat/mo . Drop the folder into ~/.claude/agents/ and call them by name.

Format
.md folder

Agents
12

Runtime
Claude Code

Price
$49

Buy · $49 once →
See the roster

~/work/saas-app — claude

EXHIBIT A The roster PG. 02 / 06

Twelve specialists, one founder. No standing meetings.

Each agent is a single markdown file: system prompt + tool whitelist + cost limit . They can be read in plain text. They can be edited in plain text. They version-control like any other file.

A-01 ACTIVE
Triage Inbox · 3 tools
Reads new GitHub issues, drafts a reply, sets labels, files them in the right project.
1,402 jobs avg 14s

A-02 ACTIVE
Sweep Codebase · 6 tools
Walks the repo, surfaces dead code, unused exports, and missing tests in a markdown report.
946 jobs avg 2m 8s

A-03 ACTIVE
Patch Diff · 4 tools
Picks up an issue, opens a branch, writes the fix and the test, opens the PR, tags you.
2,180 jobs avg 4m 21s

A-04 ACTIVE
Brief Research · 3 tools
Reads the docs you point at, outputs a one-page summary with citations and open questions.
638 jobs avg 1m 02s

A-05 ACTIVE
Recall Notes · 2 tools
Searches your obsidian vault, returns a stitched answer with file paths and line refs.
1,802 jobs avg 11s

A-06 STANDBY
Forge Migrate · 5 tools
Writes safe Postgres migrations, dry-runs them on a clone, posts the diff, waits for approval.
312 jobs avg 6m 40s

A-07 ACTIVE
Reply Support · 3 tools
Drafts customer support replies in your voice. Always opens a draft — never sends.
2,940 jobs avg 22s

A-08 ACTIVE
Receipt Spend · 4 tools
Watches a CSV folder, classifies expenses, flags anything that looks like a duplicate charge.
418 jobs avg 34s

A-09 ACTIVE
Cinder Newsletter · 3 tools
Ingests last week's writing, drafts a newsletter, slots in three quotes from your inbox.
92 jobs avg 3m 12s

A-10 ACTIVE
Beacon Outreach · 4 tools
Researches a list of prospects, drafts custom plain-text emails, never auto-sends.
284 jobs avg 2m 04s

A-11 ACTIVE
Stand-up Daily · 2 tools
Reads your git log + ticket activity, writes the standup you'd write if you had time.
1,206 jobs avg 9s

A-12 STANDBY
Bench Plan · 3 tools
Takes a list of features, sequences them, drops them on the Bench tracker with estimates.
148 jobs avg 1m 38s

EXHIBIT B Installation PG. 03 / 06

Three commands. One folder.

There is no "platform". The agents are markdown files. They live in a folder. Claude Code already knows where to find them.

01
Unzip into your home directory.
Drop the folder into ~/.claude/agents/ . That's the install. There is no log-in, no SSO, no env file.
$ unzip septim-agents.zip -d ~/.claude/
✓ 12 agents installed

02
Verify with one command.
Claude Code reads the folder on next launch. Confirm with /agents from any session.
$ claude /agents
triage, sweep, patch, brief,
recall, forge, reply, receipt,
cinder, beacon, standup, bench

03
Call any agent by name.
Mention the agent in your prompt — Claude Code dispatches the right one. They run in parallel when it makes sense. They share context when it doesn't.
$ @triage handle issue #404
✓ labeled · drafted · assigned

EXHIBIT C How a job runs PG. 04 / 06

One prompt becomes four agents.

When you mention a job that crosses domains, the dispatcher fans it out. Each agent does its piece, returns a structured result. The orchestrator stitches them. You see one answer.

YOU prompt

Dispatcher routing

Triage A-01

Sweep A-02

Patch A-03

Recall A-05

DISPATCH LOG · #4892

14:02:17 prompt "issue 404, broken signup, email me a fix plan"

14:02:18 @triage read issue · 8 comments · 2 reproductions

14:02:19 @recall "signup" → 3 prior bugs found

14:02:21 @sweep grepping auth/* · 14 files

14:02:24 @patch reproduces locally · 1 broken regex

14:02:31 @patch fix branch fix/404-signup · 4 lines

14:02:33 @patch tests added · suite green

14:02:34 ✓ pr #621 opened — awaiting review

14:02:35 total 18s · $0.07 · 4 agents

EXHIBIT D From the field PG. 05 / 06

Real founders. Real calendars.

"I shipped four features last week and answered every customer email. There is one of me. The agents handle the connective tissue I used to do at 11pm."
Mara V. Solo SaaS · MRR $14k

"@triage replaced a virtual assistant I was paying $1,800/mo. The agents file is forty kilobytes. I read it on the plane."
Devon J. Two-person studio · Brooklyn

"The thing nobody tells you about LLM agents is that 90% of the value is good prompts. These are good prompts. The wrapper around them is forty lines."
Ash K. Indie dev · Lisbon

"I edit them. I add to them. They live in my dotfiles repo. That is what I wanted from agent infrastructure all along."
Tomás R. Founder · Bench customer

Forty-nine dollars.
Yours forever.

Twelve markdown files. Source you can read. No subscription. No telemetry. No login. Updates are optional and free for the first year.

Buy Agents · $49 once →

$49 ONCE · NO SEAT TAX · MIT-LIKE LICENSE

Agents

$49

Buy · $49 once →