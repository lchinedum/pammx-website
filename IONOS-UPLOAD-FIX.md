# Fix: Site Not Loading on IONOS

Your site isn't loading because the files are likely in the **wrong folder**. IONOS serves websites from a folder called **htdocs** (or **public_html**), not from the root where you landed.

## Step 1: Find the htdocs Folder in FileZilla

1. Connect to IONOS in FileZilla
2. In the **Remote site** panel (right side), look at the folder structure
3. Navigate until you find **htdocs** (or **public_html**)
   - You might need to open: `/` → `kunden` → `homepages` → (number) → (your ID) → **htdocs**
   - Or it might be visible right away when you connect

## Step 2: Move or Re-upload Files into htdocs

**Option A: If you see your files in the wrong place**
- Select all your uploaded files (index.html, _next, images, etc.)
- Drag them INTO the **htdocs** folder

**Option B: Fresh upload**
1. Open the **htdocs** folder (double-click to enter it)
2. On the left, go to your project’s `out` folder (where the built site lives)
3. Select all files and folders
4. Drag them into **htdocs**

## Step 3: Verify Structure

Inside htdocs you should have:
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

## Find Your Document Root in IONOS

1. Log in to [IONOS](https://www.ionos.com)
2. Go to **Hosting** → **Webspace** → **Use Webspace**
3. Click the **path** shown (e.g. `/` or the folder name)
4. A popup shows the **absolute path** — it will end with `htdocs` or similar
5. In FileZilla, navigate to that exact folder and upload there
