# ============================================================
# download-all-packages.ps1
# Run this script on the INTERNET-CONNECTED machine.
# It downloads all packages from all-packages-unique.txt as .tgz files.
# Then copy the npm-tarballs folder to the closed network.
# ============================================================

$outDir = "npm-tarballs"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

$packages = Get-Content "all-packages-unique.txt"
$total = $packages.Count
$i = 0
$failed = @()

foreach ($pkg in $packages) {
    $i++
    Write-Host "[$i/$total] $pkg"
    $result = npm pack $pkg --pack-destination $outDir 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "  FAILED: $pkg"
        $failed += $pkg
    }
}

Write-Host ""
Write-Host "Done! $($total - $failed.Count)/$total packages downloaded to: $outDir"

if ($failed.Count -gt 0) {
    Write-Host "Failed packages ($($failed.Count)):" -ForegroundColor Red
    $failed | ForEach-Object { Write-Host "  $_" -ForegroundColor Red }
    $failed | Set-Content "download-failed.txt"
    Write-Host "Failed list saved to: download-failed.txt"
}
