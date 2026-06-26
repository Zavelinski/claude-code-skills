#!/usr/bin/env node
// Validates .claude-plugin/marketplace.json for the claude-code-skills catalog.
// Enforces: top-level name/owner/metadata, 9 plugins each pinned via source.ref
// (v-tag) plus a matching top-level version, no duplicate names/repos, MIT license.
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const mpPath = path.join(root, '.claude-plugin', 'marketplace.json');
let raw;
try { raw = fs.readFileSync(mpPath, 'utf8'); } catch (e) { console.error('FAIL: marketplace.json not found:', e.message); process.exit(1); }
let mp;
try { mp = JSON.parse(raw); } catch (e) { console.error('FAIL: marketplace.json invalid JSON:', e.message); process.exit(1); }

const f = [];
if (mp.name !== 'claude-code-skills') f.push('top-level name != claude-code-skills');
if (!mp.owner || !mp.owner.name || !mp.owner.url || !/^https:\/\/github\.com\//.test(mp.owner.url)) f.push('owner.{name,url} invalid');
if (!mp.metadata || typeof mp.metadata.description !== 'string' || !/^\d+\.\d+\.\d+$/.test(mp.metadata.version || '')) f.push('metadata.{description,version} invalid');
if (!Array.isArray(mp.plugins) || mp.plugins.length === 0) f.push('plugins not a non-empty array');

const names = new Set();
const repos = new Set();
(mp.plugins || []).forEach((p, i) => {
  const where = `[${i}] ${p.name || '?'}`;
  if (!p.name || !/^[a-z0-9-]+$/.test(p.name)) f.push(`${where}: name invalid`);
  if (names.has(p.name)) f.push(`${where}: duplicate name ${p.name}`);
  names.add(p.name);
  if (typeof p.description !== 'string' || !p.description) f.push(`${where}: missing description`);
  if (typeof p.category !== 'string' || !p.category) f.push(`${where}: missing category`);
  if (p.license !== 'MIT') f.push(`${where}: license != MIT (got ${p.license})`);
  if (!p.author || !p.author.name) f.push(`${where}: missing author.name`);
  if (!p.source || p.source.source !== 'github') f.push(`${where}: source.source != github`);
  if (!p.source.repo || !/^Zavelinski\/claude-code-[a-z0-9-]+$/.test(p.source.repo)) f.push(`${where}: source.repo invalid`);
  if (!p.source.ref || !/^v\d+\.\d+\.\d+$/.test(p.source.ref)) f.push(`${where}: source.ref missing or not v-tag`);
  if (typeof p.version !== 'string' || !/^\d+\.\d+\.\d+$/.test(p.version)) f.push(`${where}: version invalid`);
  if (p.source.ref && p.version && p.source.ref.replace(/^v/, '') !== p.version) f.push(`${where}: version (${p.version}) != ref without v (${p.source.ref})`);
  if (repos.has(p.source.repo)) f.push(`${where}: duplicate repo ${p.source.repo}`);
  repos.add(p.source.repo);
});

if (f.length) {
  console.error('FAIL validate-marketplace:');
  f.forEach((x) => console.error('  - ' + x));
  process.exit(1);
}
console.log(`OK validate-marketplace: ${mp.plugins.length} plugins pinned`);
mp.plugins.forEach((p) => console.log(`  ${p.name} v${p.version} <- ${p.source.ref} (${p.source.repo})`));