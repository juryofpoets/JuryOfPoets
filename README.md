# Jury of Poets

A literary magazine where poets read poets. Written, read, and curated by poets.

**Live at [juryofpoets.com](https://juryofpoets.com)**

## Structure

```
index.html          — Landing page
poems/index.html    — Poems listing
poems/*.html        — Individual poem pages
CNAME               — Custom domain config
```

## Local Development

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Hosted on GitHub Pages. Any push to `main` triggers automatic deployment.
