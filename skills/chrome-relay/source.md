Terminal to Chrome.

Your agent drives the Chrome you're already signed into. Nothing leaves the machine.

-
1

Add the extension

-
2

Paste this into Claude Code or Codex

I just added the Chrome Relay extension…
Copy

The 0.9 browser loop needs CLI and extension 0.9.0. The extension update is pending. Check your versions and use the compatible commands.

I just added the Chrome Relay extension (github.com/kiluazen/chrome-relay),
an open-source, fully local tool that drives my real browser from the terminal.

Set it up and verify the complete connection for me:
npm i -g chrome-relay@latest
chrome-relay install
chrome-relay --version
chrome-relay doctor
chrome-relay profile list
chrome-relay skills get core

The new browsing loop needs CLI/native host and extension 0.9.0.
Check hostVersion and extensionVersion in profile list. The extension update
is awaiting Chrome Web Store submission. With an older extension, use
navigate --wait none, then wait for the specific element/text before snapshotting.
Keep every action in the background.

The CLI must report 0.8.0 or newer. If it does not, find the stale binary on
PATH and fix it before continuing. Then run chrome-relay tabs. If several
profiles are connected, use the exact --profile choices from the error and
show me the tabs in each one.

terminal &rarr; your real Chrome