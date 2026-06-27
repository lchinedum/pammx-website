# Deploy PAMMX to IONOS

## Quick Deploy (PowerShell)

1. **Build** (if not already done):
   ```powershell
   cd "c:\Users\theek\projects\PAMMX Website"
   npm run build
   ```

2. **Run the deploy script**:
   ```powershell
   .\deploy-to-ionos.ps1
   ```
   Enter your IONOS webspace password when prompted.

3. If the script fails with "htdocs: No such file", edit `deploy-to-ionos.ps1` and change `$remoteDir = "htdocs"` to `$remoteDir = "public_html"` (or your actual web root from IONOS).

---

## Manual Deploy (FileZilla)

1. Build: `npm run build`
2. Open FileZilla, connect to `access-5019966384.webspace-host.com` (SFTP, port 22)
3. Local: go to `c:\Users\theek\projects\PAMMX Website\out`
4. Remote: go to `htdocs` (or `public_html`)
5. Select all files/folders in `out`, drag to remote panel

---

## Find Your Web Root

In IONOS: **Hosting** → **Webspace** → **Use Webspace** → check the path shown (often `htdocs` or `public_html`).
