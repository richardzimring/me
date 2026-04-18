#!/usr/bin/env node
import { execSync, spawnSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const allStaged = execSync('git diff --cached --name-only --diff-filter=ACMR', {
  encoding: 'utf8',
})
  .split('\n')
  .filter(Boolean);

const isDraft = (source) => {
  const fm = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return fm ? /^\s*draft\s*:\s*true\s*$/m.test(fm[1]) : false;
};

const readStaged = (file) => {
  const r = spawnSync('git', ['show', `:${file}`], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout : null;
};

const readHead = (file) => {
  const r = spawnSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8' });
  return r.status === 0 ? r.stdout : null;
};

const draftSlugs = new Set();
const offendingPosts = [];

for (const file of allStaged) {
  const m = file.match(/^src\/content\/posts\/(.+)\.mdx?$/);
  if (!m) continue;
  const contents = readStaged(file);
  if (contents && isDraft(contents)) {
    draftSlugs.add(m[1]);
    offendingPosts.push(file);
  }
}

const postFiles = execSync('git ls-files src/content/posts', { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean);
for (const file of postFiles) {
  const m = file.match(/^src\/content\/posts\/(.+)\.mdx?$/);
  if (!m) continue;
  if (draftSlugs.has(m[1])) continue;
  const onDisk = existsSync(file) ? readFileSync(file, 'utf8') : null;
  const source = onDisk ?? readHead(file);
  if (source && isDraft(source)) draftSlugs.add(m[1]);
}

const offendingImages = [];
for (const file of allStaged) {
  const m = file.match(/^public\/images\/posts\/([^/]+)\//);
  if (m && draftSlugs.has(m[1])) offendingImages.push(file);
}

if (offendingPosts.length || offendingImages.length) {
  console.error('\n\u2717 Refusing to commit draft content:\n');
  const all = [...offendingPosts, ...offendingImages];
  for (const f of all) console.error(`  - ${f}`);
  console.error(
    '\nSet `draft: false` in the post frontmatter to publish, or unstage with:\n  git restore --staged ' +
      all.join(' ') +
      '\n',
  );
  process.exit(1);
}
