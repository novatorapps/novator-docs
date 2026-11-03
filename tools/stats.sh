#!/bin/bash
# Print the anonymous counters: "Was this helpful?" votes and Odoo Apps Store link clicks.
# Clicks are clicks, not purchases. Keys starting with "preview:" come from preview deployments.
# usage: tools/stats.sh   (needs wrangler signed in)
set -e
export PATH=/opt/homebrew/bin:/usr/local/bin:$PATH
NS=3fb735f1d2424ce688ffe9519c031638
for key in $(wrangler kv key list --namespace-id=$NS --remote | python3 -c 'import json,sys;[print(k["name"]) for k in json.load(sys.stdin)]'); do
  printf '%s\t%s\n' "$(wrangler kv key get "$key" --namespace-id=$NS --remote)" "$key"
done | sort -k2
