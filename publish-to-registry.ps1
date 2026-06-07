# ============================================================
# publish-to-registry.ps1
# Run this script on the CLOSED NETWORK machine.
# Copy the npm-tarballs folder here first, then run this script.
# ============================================================
param(
    [string]$Registry = "https://pkgs.dev.azure.com/YOUR_ORG/_packaging/YOUR_FEED/npm/registry/"
)

$tarballs = Get-ChildItem "npm-tarballs" -Filter "*.tgz"
$total = $tarballs.Count
$i = 0
$failed = @()

Write-Host "Publishing $total packages to: $Registry"
Write-Host ""

foreach ($tgz in $tarballs) {
    $i++
    Write-Host "[$i/$total] $($tgz.Name)"
    npm publish $tgz.FullName --registry $Registry 2>&1 | Out-Null
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "  FAILED: $($tgz.Name)"
        $failed += $tgz.Name
    }
}

Write-Host ""
Write-Host "Done! $($total - $failed.Count)/$total packages published."

if ($failed.Count -gt 0) {
    Write-Host "Failed ($($failed.Count)):" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    $failed | Set-Content "publish-failed.txt"
}
