# Deploy PAMMX to www.pammx.com (IONOS Domain)

The project is configured for **static export** (`output: 'export'` in next.config.js). The cTrader embed loads client-side and works with static sites.

---

## Option 1: IONOS Deploy Now (Host on IONOS)

Deploy directly on IONOS using your GitHub repo. **30-day free trial**, then ~$4/month.

### Step 1: Push to GitHub

Ensure your code is on GitHub (e.g. `github.com/lchinedum/pammx-website`).

### Step 2: Connect IONOS Deploy Now

1. Log in to [IONOS](https://www.ionos.com)
2. Go to **Hosting** → **Deploy Now** (or [ionos.com/hosting/deploy-now](https://www.ionos.com/hosting/deploy-now))
3. Click **Create project** → **Connect GitHub**
4. Authorize the IONOS Deploy Now GitHub App
5. Select your `pammx-website` repository and branch (`pammx-website` or `main`)

### Step 3: Build Settings

IONOS auto-detects Next.js. If needed, set:

- **Build command:** `npm run build`
- **Output directory:** `out`
- **Root directory:** `/` (repository root — website files are no longer in a subfolder)

### Step 4: Deploy

1. Click **Deploy** — IONOS builds and deploys
2. You get a URL like `your-project.ionos.space`
3. Go to **Settings** → **Custom domain** → Add `www.pammx.com`
4. IONOS will configure DNS for your IONOS domain automatically (or show you what to add)

### Step 5: IONOS DNS (if not auto-configured)

In IONOS → **Domains** → **pammx.com** → **Manage DNS**:

| Type | Name | Target |
|------|------|--------|
| CNAME | www | *(value from Deploy Now)* |

---

## Option 2: IONOS Web Hosting (FTP Upload)

If you have IONOS Web Hosting (e.g. with your domain):

### Step 1: Build locally

```bash
cd "c:\Users\theek\projects\PAMMX Website"
npm install
npm run build
```

This creates the `out` folder with static files.

### Step 2: Upload via SFTP

1. Get your SFTP credentials from IONOS (Hosting → Webspace → FTP access)
2. Use FileZilla or similar: connect via **SFTP** (port 22)
3. Upload **all contents** of the `out` folder to your web root (`/` or `htdocs` or `public_html`)

### Step 3: Domain

Your domain should already point to your IONOS hosting. If not, set the A record in IONOS DNS to your hosting IP.

---

## Option 3: Cloudflare Pages (Fully Free)

### Step 1: Push to GitHub

Ensure your code is on GitHub (same as Option 1).

### Step 2: Deploy on Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up (free, no credit card)
2. Click **Create a project** → **Connect to Git**
3. Connect GitHub and select your PAMMX repository
4. **Build settings:**
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (repository root)
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

## Option 4: Netlify (Free Tier)

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

## IONOS DNS Summary (for Options 3 & 4)

| Type | Name | Target |
|------|------|--------|
| CNAME | www | *(from Cloudflare or Netlify)* |
| A | @ | *(for root domain, if supported)* |

---

## Troubleshooting

- **Build fails** — Run `npm run build` locally to see errors
- **Domain not verified** — Wait for DNS propagation (up to 48 hours, often &lt; 1 hour)
- **cTrader embed** — Works with static export; loads via client-side script
