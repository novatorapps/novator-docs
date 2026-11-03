#!/bin/bash
# Build the site and stage it for push_docs.sh: source.zip (main branch) and site.zip (gh-pages branch).
# usage: tools/stage.sh [stage_dir=/mnt/user-data/outputs/docs_stage]
set -e
cd "$(dirname "$0")/.."
STAGE=${1:-/mnt/user-data/outputs/docs_stage}
python3 tools/sync.py
npm run build >/tmp/docs_build.log 2>&1 || { tail -30 /tmp/docs_build.log; exit 1; }
touch build/.nojekyll
rm -rf "$STAGE"; mkdir -p "$STAGE"
zip -qr "$STAGE/source.zip" . -x 'node_modules/*' 'build/*' '.docusaurus/*' '.git/*'
(cd build && zip -qr "$STAGE/site.zip" .)
cp tools/push_docs.sh "$STAGE/"
ls -la "$STAGE"
