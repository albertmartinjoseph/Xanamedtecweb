const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function packageZip(sourceDir = 'out', targetZip = 'xanamedtec-static.zip') {
  console.log(`[package-zip] Packaging '${sourceDir}' into '${targetZip}'...`);

  const resolvedTarget = path.resolve(targetZip);
  const rootTarget = path.resolve('..', targetZip);

  const psScript = `
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zipPath = (Resolve-Path '${targetZip.replace(/'/g, "''")}').Path
if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)
$outItem = Get-Item '${sourceDir.replace(/'/g, "''")}'
$outDir = $outItem.FullName

Get-ChildItem -Path $outDir -Recurse -File -Force | ForEach-Object {
    $relPath = $_.FullName.Substring($outDir.Length + 1).Replace('\\', '/')
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $relPath, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
}

$zip.Dispose()
`;

  const tempPs = path.join(__dirname, 'temp_zip.ps1');
  fs.writeFileSync(tempPs, psScript);

  try {
    execSync(`powershell -ExecutionPolicy Bypass -File "${tempPs}"`, { stdio: 'inherit' });
  } finally {
    if (fs.existsSync(tempPs)) fs.unlinkSync(tempPs);
  }

  // Copy to root as well
  fs.copyFileSync(resolvedTarget, rootTarget);

  const stat = fs.statSync(resolvedTarget);
  console.log(`[package-zip] Successfully packaged ${resolvedTarget} (${(stat.size / (1024 * 1024)).toFixed(2)} MB)`);
  console.log(`[package-zip] Copied to ${rootTarget}`);
}

if (require.main === module) {
  packageZip();
}

module.exports = { packageZip };
