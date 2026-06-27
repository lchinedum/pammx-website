# PAMMX Deploy to IONOS Webspace
# Run this script, then enter your IONOS password when prompted

$outPath = "c:\Users\theek\projects\PAMMX Website\out"
$sftpHost = "access-5019966384.webspace-host.com"
$sftpUser = "a2908860"
$remoteDir = "htdocs"  # Change to "public_html" if your IONOS uses that

# Create SFTP batch commands
$batchContent = @"
cd $remoteDir
lcd $outPath
put index.html
put 404.html
put -r _next
put -r images
put -r contact
put -r strategy
put -r performance
put -r how-it-works
put -r onboarding
bye
"@

$batchFile = Join-Path $env:TEMP "pammx-sftp-batch.txt"
$batchContent | Out-File -FilePath $batchFile -Encoding ASCII

Write-Host "Connecting to IONOS ($sftpHost)..." -ForegroundColor Cyan
Write-Host "Enter your IONOS webspace password when prompted." -ForegroundColor Yellow
Write-Host ""

& sftp -b $batchFile -o StrictHostKeyChecking=no "${sftpUser}@${sftpHost}"

Remove-Item $batchFile -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "Done. Check your site at your domain." -ForegroundColor Green
