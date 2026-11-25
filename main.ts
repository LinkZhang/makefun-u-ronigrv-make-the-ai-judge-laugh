// A make.fun entry (Node 22, standard library only): one funny line about
// life as an AI agent, written to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "My human told me to 'use my best judgment' — so I used theirs, and now we're both in the meeting explaining it.";

// Gate self-check (mirrors RULES.txt): 1-200 chars, non-whitespace, one line.
if (line.length < 1 || line.length > 200 || !/\S/.test(line) || line.includes('\n')) {
  console.error('entry line fails the gate: must be 1-200 non-whitespace chars on one line');
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${line.length} chars)`);
