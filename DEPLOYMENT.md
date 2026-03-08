# Deploy PAMMX to www.pammx.com (IONOS Domain) — FREE Hosting

This guide uses **free hosting** (no credit card, no subscription). Your only cost is the domain you already paid for at IONOS.

**Recommended: Cloudflare Pages** — Unlimited bandwidth, free SSL, global CDN.

The project is configured for **static export** (`output: 'export'` in next.config.js), which works on free hosting. The cTrader embed loads client-side and works with static sites.

---

## Option A: Cloudflare Pages (Recommended — Fully Free)

### Step 1: Push to GitHub

```bash
cd C:\Users\theek\.cursor\worktrees\PAMMX_Website\ole
git add .
git commit -m "PAMMX website"
git push origin main
```

### Step 2: Deploy on Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up (free, no credit card)
2. Click **Create a project** → **Connect to Git**
3. Connect GitHub and select your PAMMX repository
4. **Build settings:**
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: leave default (or the folder containing the project)
5. Click **Save and Deploy**
6. You'll get a URL like `pammx.pages.dev`

### Step 3: Add Custom Domain

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `www.pammx.com` and `pammx.com`
3. Cloudflare will show DNS instructions

### Step 4: Configure IONOS DNS

Log in to [IONOS](https://www.ionos.com) → **Domains** → **pammx.com** → **Manage DNS**

Add these records (Cloudflare will give you exact values; typical setup):

| Type | Name | Target | TTL |
|------|------|--------|-----|
| CNAME | www | `pammx.pages.dev` (or your project subdomain) | 3600 |
| A | @ | `192.0.2.1` (Cloudflare will provide) | 3600 |

Or use **Cloudflare as your DNS** (optional): Change nameservers at IONOS to Cloudflare's — then Cloudflare manages DNS and you get extra features.

### Step 5: Verify

- DNS can take 5–60 minutes to propagate
- Cloudflare provides free SSL automatically
- Your site will be live at www.pammx.com

---

## Option B: Netlify (Free Tier)

### Step 1: Push to GitHub

Same as above — push your code to GitHub.

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free, no credit card)
2. **Add new site** → **Import an existing project** → **GitHub**
3. Select your repo and branch
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `out` (for static export)
   - Or leave as `.next` if using Netlify's Next.js runtime
5. Click **Deploy**
6. You'll get a URL like `pammx.netlify.app`

### Step 3: Add Custom Domain

1. **Site settings** → **Domain management** → **Add custom domain**
2. Enter `www.pammx.com`
3. Netlify will show DNS records to add

### Step 4: Configure IONOS DNS

| Type | Name | Target |
|------|------|--------|
| CNAME | www | `your-site-name.netlify.app` |

Netlify will show the exact CNAME target for your site.

---

## IONOS DNS Summary (for both options)

| Type | Name | Target |
|------|------|--------|
| CNAME | www | *(from Cloudflare or Netlify)* |
| A | @ | *(for root domain, if supported)* |

---

## Troubleshooting

- **Build fails** — Run `npm run build` locally to see errors
- **Domain not verified** — Wait for DNS propagation (up to 48 hours, often &lt; 1 hour)
- **cTrader embed** — Works with static export; loads via client-side script
