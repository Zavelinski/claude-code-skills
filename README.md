# claude-code-skills

[![Awesome](https://img.shields.io/badge/Claude%20Code-marketplace-8A2BE2)](https://code.claude.com/docs/en/plugin-marketplaces)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Plugins](https://img.shields.io/badge/plugins-9-blue)](#the-skills)

A suite of focused, original [Claude Code](https://claude.com/claude-code) skills, distributed as a one-line plugin marketplace. Each skill does one thing well, is MIT licensed, and ships with cross-platform installers.

## Install the whole collection

```bash
/plugin marketplace add Zavelinski/claude-code-skills
```

Then install any skill:

```bash
/plugin install skill-security-scan@claude-code-skills
```

Update later with `/plugin marketplace update claude-code-skills`.

## The skills

| Skill | What it does | Repo |
|-------|--------------|------|
| **godmode** | One-word max-capability mode: best tool, exhaustive, verify-before-done, persist context. | [claude-code-godmode](https://github.com/Zavelinski/claude-code-godmode) |
| **adversarial-verify** | Proves a change works by trying to break it: runs falsification tests, returns PASS/FAIL/INCONCLUSIVE. | [claude-code-adversarial-verify](https://github.com/Zavelinski/claude-code-adversarial-verify) |
| **skill-security-scan** | Vets a third-party SKILL.md + its hooks + settings.json before install. ALLOW/REVIEW/BLOCK. | [claude-code-skill-security-scan](https://github.com/Zavelinski/claude-code-skill-security-scan) |
| **scheduled-sop-runner** | Turns an SOP into a quiet self-checking scheduled routine; pings only on failure. | [claude-code-scheduled-sop-runner](https://github.com/Zavelinski/claude-code-scheduled-sop-runner) |
| **docs-drift-sync** | Maps changed code to its doc mentions, detects drift, proposes minimal edits. | [claude-code-docs-drift-sync](https://github.com/Zavelinski/claude-code-docs-drift-sync) |
| **geo-aeo-audit** | Audits a page for citability by AI answer engines; outputs definition block + JSON-LD + FAQ. | [claude-code-geo-aeo-audit](https://github.com/Zavelinski/claude-code-geo-aeo-audit) |
| **content-repurpose-engine** | One source asset into 8-10 platform-native posts, source-faithful. | [claude-code-content-repurpose-engine](https://github.com/Zavelinski/claude-code-content-repurpose-engine) |
| **weekly-ai-digest** | Sourced, skimmable weekly AI roundup; every claim linked. | [claude-code-weekly-ai-digest](https://github.com/Zavelinski/claude-code-weekly-ai-digest) |
| **salve** | Ship and persist your work in one word: commit, push, PR+merge, deploy, report. | [claude-code-salve](https://github.com/Zavelinski/claude-code-salve) |

## Without the marketplace

Every skill is also a standalone repo with `install.sh` / `install.ps1`. Clone the one you want and run its installer; see each repo's README.

## License

MIT. Each skill is independently MIT licensed. See [LICENSE](LICENSE).
