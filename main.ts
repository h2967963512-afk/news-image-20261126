// A working news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and 1024 by 1024
// pixels, and the judge sees exactly the bytes copied.
//
// Revision note (2026-11-26): verified the copy reproduces entry.png byte-identically; no code change, comment only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) throw new Error('news-image entry: entry.png missing beside main.ts');
copyFileSync(source, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
