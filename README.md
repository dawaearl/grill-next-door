# Grill next Door — Quick README

Grill next Door is a single-page menu and reservation site with a small Node.js backend that generates booking references, QR codes, and sends confirmation emails.

website Link   
    https://grill-next-door.onrender.com/

Features
- Dynamic tabbed menu (Starters / Mains / Desserts / Cocktails)
- Session-aware reservation form with client-side validation and table assignment
- Backend generates styled confirmation emails with embedded QR codes
- Speakeasy theme toggle and small UI easter eggs

Tech
- Backend: Node.js, Express, nodemailer, qrcode
- Frontend: Vanilla JavaScript + CSS (single-page)
- Config: uses a `.env` for `GMAIL_USER` and `GMAIL_APP_PASSWORD`

Quick start
1. Install dependencies:
```bash
npm install
```
2. Create a `.env` file in the project root with at least:
```env
GMAIL_USER=you@example.com
GMAIL_APP_PASSWORD=your_app_password
PORT=3000
BASE_URL=http://localhost:3000
```
3. Run the server:
```bash
npm start
```
4. Open the site in your browser:
```
http://localhost:3000
```

API
- POST `/api/reserve` — JSON body: `name`, `email`, `location`, `date`, `time`, `guests` (optional: `phone`, `notes`)
- Returns `{ success: true, bookingRef, table }` on success

Notes
- Use an app password for Gmail or configure a test SMTP (Ethereal) to avoid sending real emails during development.
- Add a `.gitignore` before committing to exclude `node_modules/`, `.env`, and `package-lock.json`.

Commit & publish
```bash
git add README.md
git commit -m "chore: replace README with Quick README"
git push origin main
```

License
- Add your preferred license or state "All rights reserved" if proprietary.

