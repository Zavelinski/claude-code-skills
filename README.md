# claude-code-skills

[![Awesome](https://img.shields.io/badge/Claude%20Code-marketplace-8A2BE2)](https://code.claude.com/docs/en/plugin-marketplaces)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Plugins](https://img.shields.io/badge/plugins-14-blue)](#the-skills)

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

> **Security note.** The `/plugin` flow is the trusted path: it registers any hooks through the Claude Code consent UI. The per-skill `install.sh` scripts in each repo are a manual fallback that mutates `~/.claude/settings.json` directly and is blocked by auto-mode. Review and run them yourself only if you cannot use `/plugin`. See each skill's README.

### Pinned versions

Every plugin is pinned to a release tag for reproducible installs. Updates land only when a new tag is published and this marketplace pin is bumped, then you run `/plugin marketplace update claude-code-skills`.

| Skill | Version | Tag |
|-------|---------|-----|
| godmode | 1.1.1 | v1.1.1 |
| adversarial-verify | 1.0.1 | v1.0.1 |
| skill-security-scan | 1.0.1 | v1.0.1 |
| scheduled-sop-runner | 1.0.1 | v1.0.1 |
| docs-drift-sync | 1.0.1 | v1.0.1 |
| geo-aeo-audit | 1.0.1 | v1.0.1 |
| content-repurpose-engine | 1.0.1 | v1.0.1 |
| weekly-ai-digest | 1.0.1 | v1.0.1 |
| salve | 1.0.1 | v1.0.1 |
| safety-net | 1.0.0 | v1.0.0 |
| testsmith | 0.1.0 | v0.1.0 |
| model-router | 0.1.0 | v0.1.0 |
| context-warden | 0.1.0 | v0.1.0 |
| sync | 1.0.0 | v1.0.0 |

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
| **safety-net** | Automatic reversible git checkpoints around Claude's edits: snapshots before each edit so you can say 'undo' and roll back. | [claude-code-safety-net](https://github.com/Zavelinski/claude-code-safety-net) |
| **testsmith** | Adversarial test generation: failing test first, then a test-vs-mutant loop yields FEW high-value tests, not many shallow ones. | [testsmith](https://github.com/Zavelinski/testsmith) |
| **model-router** | Cost-aware model routing: cheap subtasks to Sonnet/Haiku, Opus reserved for design, hard debugging, and verification. | [model-router](https://github.com/Zavelinski/model-router) |
| **context-warden** | Runtime context-rot defense: observation masking, ACE-style compaction playbook, lean session overlay. | [context-warden](https://github.com/Zavelinski/context-warden) |
| **sync** | Check installed skills against the latest published GitHub version, report drift, and sync the outdated public ones. | [claude-code-sync](https://github.com/Zavelinski/claude-code-sync) |

## Without the marketplace

Every skill is also a standalone repo with `install.sh` / `install.ps1`. Clone the one you want and run its installer; see each repo's README. Note: the manual installer mutates `~/.claude/settings.json` and is blocked by Claude Code auto-mode, so prefer the `/plugin` flow above.

## License

MIT. Each skill is independently MIT licensed. See [LICENSE](LICENSE).