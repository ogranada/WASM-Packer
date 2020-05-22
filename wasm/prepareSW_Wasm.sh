#!/bin/bash

echo "Building..."
wasm-pack build
pkgName=$(cat pkg/package.json | grep name | awk '{split($2,n,"\""); print n[2]}')
echo "Preparing $pkgName"
mkdir -p ../webapp/public
node ./transform.js
cp "pkg/$pkgName""_bg.wasm" "../webapp/public/$pkgName"".wasm"
mv ./worker-extension.js ../webapp
echo "Done..."

