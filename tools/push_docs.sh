#!/bin/bash
# Publish the user guides: source to main, built site to gh-pages, served at docs.novator.co.
# usage (on the Mac, in ~/Code/docs_stage): bash push_docs.sh "<commit message>"
set -e
export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
STAGE=$(cd "$(dirname "$0")" && pwd)
MSG=${1:-"Update guides"}
REPO=novator-docs
commit() { git add -A; if ! git diff --cached --quiet; then git -c user.name='Hasan Qureshi' -c user.email=novatorapps@users.noreply.github.com commit -q -m "$1"; fi; }
if ! gh repo view novatorapps/$REPO >/dev/null 2>&1; then
  gh repo create novatorapps/$REPO --public --disable-issues --disable-wiki \
     --description "User guides for Novator apps for Odoo: https://docs.novator.co"
  gh api -X PATCH repos/novatorapps/$REPO -F has_projects=false -F has_discussions=false >/dev/null || true
fi
if [ ! -d ~/Code/$REPO/.git ]; then
  mkdir -p ~/Code/$REPO && cd ~/Code/$REPO && git init -q && git remote add origin https://github.com/novatorapps/$REPO.git
fi
cd ~/Code/$REPO
git fetch -q origin 2>/dev/null || true
publish() {  # branch zip
  if git ls-remote --exit-code --heads origin $1 >/dev/null 2>&1; then git checkout -q -B $1 origin/$1
  else git checkout -q --orphan $1 2>/dev/null || git checkout -q $1; git rm -rq --cached . 2>/dev/null || true; fi
  find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
  unzip -q -o "$STAGE/$2"
  commit "$MSG"; git push -q -u origin $1
}
publish main source.zip
publish gh-pages site.zip
# GitHub Pages from the gh-pages branch, custom domain (first run creates, later runs keep it)
gh api -X POST repos/novatorapps/$REPO/pages -f "source[branch]=gh-pages" -f "source[path]=/" >/dev/null 2>&1 || true
gh api -X PUT repos/novatorapps/$REPO/pages -f cname=docs.novator.co -f "source[branch]=gh-pages" -f "source[path]=/" >/dev/null 2>&1 \
  && echo "pages: gh-pages, docs.novator.co" || echo "pages: set by hand (Settings, Pages)"
gh api repos/novatorapps/$REPO/pages -q '"pages url: " + .html_url + "  status: " + (.status // "pending") + "  https: " + (.https_enforced|tostring)' || true
for b in main gh-pages; do echo "$REPO $b $(git log -1 --format='%h %an %s' origin/$b)"; done
