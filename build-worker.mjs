import { readFileSync, writeFileSync } from 'node:fs';
const html = readFileSync(new URL('./index.html', import.meta.url), 'utf8');
writeFileSync(new URL('./worker.js', import.meta.url), `const html = ${JSON.stringify(html)};\nexport default { fetch(request) { if (new URL(request.url).pathname !== '/') return new Response('Not found', {status:404}); return new Response(html, {headers: {'content-type':'text/html; charset=utf-8','x-content-type-options':'nosniff','referrer-policy':'no-referrer'}}); } };\n`);
