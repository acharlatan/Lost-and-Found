# The Lost & Found Department

A fictional, browser-only office for making personal Lost Item Reports. Answers stay in the page's memory: they are never sent to a server and disappear on reload or close. The report can be edited, downloaded as a PNG, printed, or cleared. The sample reports are fictional.

## Run locally

Open `index.html` in a modern browser, or serve it with `python3 -m http.server 8000` and visit `http://localhost:8000`. No dependencies or build step are required.

## Deployment

`worker.js` serves the same self-contained HTML using a Cloudflare Worker. After editing `index.html`, regenerate the Worker with `node build-worker.mjs`, then deploy the Worker with Wrangler or the Cloudflare dashboard. `wrangler.jsonc` targets the existing `lost-and-found` Worker.

## Sister department

The Unfinished Things destination is intentionally plain text until a real URL is available. Replace the text in `index.html` with a verified link when ready, then rebuild the Worker.
