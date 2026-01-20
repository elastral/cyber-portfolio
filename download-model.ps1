Param(
  [string]$Url = '',
  [string]$Out = "assets/models/hero.glb"
)

if(-not $Url){
  Write-Host "No URL provided. Edit this script or pass -Url with the model URL to download."
  exit 1
}

if(-not (Test-Path -Path (Split-Path $Out))){
  New-Item -ItemType Directory -Path (Split-Path $Out) -Force | Out-Null
}

Write-Host "Downloading $Url -> $Out"
Invoke-WebRequest -Uri $Url -OutFile $Out
Write-Host "Done."
