# Rohit & Sneha Wedding RSVP

A simple, elegant wedding RSVP invitation hosted on GitHub Pages.

## Files

- `index.html` — RSVP page
- `style.css` — Styles
- `script.js` — Form handling
- `README.md` — This file

## Setup

1. **Edit the details** in `index.html`:
   - Couple names, date, and venue in the `<header>` section
   - Your email address in the footer `<a href="mailto:...">`

2. **Set up form submissions** in `script.js`:
   - Replace `https://formspree.io/f/YOUR_FORM_ID` with your own Formspree endpoint (free at [formspree.io](https://formspree.io)).
   - Or swap the `fetch` call for any form backend you prefer.

3. **Push to GitHub** and enable GitHub Pages:
   ```bash
   git init
   git add .
   git commit -m "Initial RSVP site"
   git branch -M main
   git remote add origin git@github.com:brohitech/wedding-rsvp.git
   git push -u origin main
   ```
   Then go to your repo on GitHub → Settings → Pages → select `main` branch → Save.

4. Your site will be live at:
   `https://brohitech.github.io/wedding-rsvp/`

## Local preview

Open `index.html` in your browser, or serve it locally:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```
