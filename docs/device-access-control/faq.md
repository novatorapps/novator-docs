---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Login Audit and Device Access Control.
---

# FAQ and troubleshooting

### What identifies a device?

A random token stored in the browser at registration, checked against its hash in Odoo, plus a browser fingerprint recorded for review. The token is what grants access. Odoo only keeps a hash, so a copy of the database cannot be used to impersonate a device.

### A user cleared their browser data or changed browser

The token is gone, so that browser counts as a new device. Generate a new code; registering again takes a few seconds. Each browser on a computer is registered separately.

### Our integration stopped working

API access is refused for restricted users. Use a separate, unrestricted user for integrations.

### Does it work with two-factor authentication?

Yes. Device Access Control adds a check; two-factor still works as usual.

### Does it need anything installed on the computers?

No. No agent, proxy or certificate. It works on Odoo.sh too.

### Does Login Audit slow down sign-in?

No. It writes one line per attempt.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (Apps, open the app) and a screenshot.
