Param(
  [string]$Url = ''
)

if(-not $Url){
  Write-Host "Usage: .\fetch-assets.ps1 -Url 'https://example.com'"
  exit 1
}

$outDir = 'assets/remote'
if(-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

Write-Host "Fetching HTML..."
$html = (Invoke-WebRequest -Uri $Url -UseBasicParsing).Content
$base = $Url.TrimEnd('/')
$matches = Select-String -InputObject $html -Pattern "(https?:\\/\\/[^"]+\.(png|jpg|jpeg|svg|webp|gif|glb|gltf))" -AllMatches

$urls = @()
foreach($m in $matches){
  foreach($g in $m.Matches){
    $urls += $g.Groups[1].Value
  }
}

$urls = $urls | Select-Object -Unique

foreach($u in $urls){
  try{
    $file = Split-Path $u -Leaf
    $out = Join-Path $outDir $file
    Write-Host "Downloading $u -> $out"
    Invoke-WebRequest -Uri $u -OutFile $out -UseBasicParsing -ErrorAction Stop
  } catch {
    Write-Host "Failed $u: $_"
  }
}

Write-Host "Done. Assets saved to $outDir"
