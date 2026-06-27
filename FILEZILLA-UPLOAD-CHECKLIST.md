# FileZilla Upload Checklist – PAMMX to IONOS

Use this checklist while FileZilla is open.

---

## 1. Connect (if not already)

- **Host:** `access-5019966384.webspace-host.com`
- **Username:** `a2908860`
- **Password:** your IONOS webspace password
- **Port:** `22`
- **Protocol:** SFTP

---

## 2. Go to the correct remote folder

In the **Remote site** panel (right side):

1. Find the **htdocs** folder (or **public_html**).
2. If you don’t see it, try:
   - `kunden` → `homepages` → (number) → (your ID) → **htdocs**
3. Double‑click **htdocs** so you are inside it.
4. The path bar should show something like: `.../htdocs` or `.../htdocs/`

---

## 3. Go to your local `out` folder

In the **Local site** panel (left side):

1. Go to: `C:\Users\theek\projects\PAMMX Website\out`
2. You should see: `index.html`, `404.html`, `_next`, `images`, `contact`, `strategy`, `performance`, `how-it-works`, `onboarding`

---

## 4. Upload everything

1. In the **Local** panel, select all files and folders (Ctrl+A).
2. Right‑click → **Upload**, or drag them into the **Remote** panel.
3. Wait until all transfers finish (no queued items).

---

## 5. Check the structure in htdocs

Inside **htdocs** you should have:

```
htdocs/
├── index.html
├── 404.html
├── _next/
├── images/
├── contact/
├── strategy/
├── performance/
├── how-it-works/
└── onboarding/
```

---

## 6. Test the site

Open: **https://www.pammx.com**

---

## If htdocs is empty or wrong

- Delete any old files in **htdocs** before uploading.
- Make sure you are inside **htdocs**, not in the home root.
- In IONOS: Hosting → Webspace → Use Webspace → check the path shown for the document root.
