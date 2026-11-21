// Copies POST.json, the address of the X post this entry names, to /output. The house reads the post itself.
import { copyFileSync, mkdirSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(new URL('./POST.json', import.meta.url).pathname, `${OUTPUT_DIR}/POST.json`);
