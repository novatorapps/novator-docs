#!/bin/bash
# Publish the user guides: commit to novatorapps/novator-docs and deploy to Cloudflare Pages (docs.novator.co).
# Runs on Hasan's Mac (gh and wrangler signed in). usage: tools/publish.sh "<commit message>" [site.zip]
set -e
export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
MSG=${1:-"Update guides"}
ZIP=$2
REPO=~/Code/novator-docs
PROJECT=novator-docs
DOMAIN=novatorapps.com
if [ ! -d $REPO/.git ]; then git clone -q https://github.com/novatorapps/novator-docs.git $REPO; fi
cd $REPO
git fetch -q origin && git checkout -q -B main origin/main 2>/dev/null || git checkout -q -B main
if [ -n "$ZIP" ]; then
  find . -mindepth 1 -maxdepth 1 ! -name .git ! -name node_modules -exec rm -rf {} +
  unzip -q -o "$ZIP"
fi
python3 tools/sync_app.py check
git add -A
if ! git diff --cached --quiet; then
  git -c user.name='Hasan Qureshi' -c user.email=novatorapps@users.noreply.github.com commit -q -m "$MSG"
fi
git push -q -u origin main
npm ci --silent
npm run build --silent
wrangler pages project create $PROJECT --production-branch=main >/dev/null 2>&1 || true
wrangler pages deploy build --project-name=$PROJECT --branch=main --commit-message="$MSG" --commit-dirty=true
echo "deployed: https://$PROJECT.pages.dev and https://$DOMAIN"
