// Prints the meme's post text and the picture's path. The entry is the X post itself; this file only records the post.
import { existsSync } from 'node:fs';

const picture = new URL('./meme/meme.png', import.meta.url).pathname;
const post = (await import('node:fs')).readFileSync(new URL('./post.txt', import.meta.url), 'utf8');

if (!existsSync(picture)) throw new Error('meme/meme.png is missing');
console.log(post.trim());
console.log(`picture: ${picture}`);
