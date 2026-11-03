---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about AI Connector.
---

# FAQ and troubleshooting

### Can the AI see data the user cannot?

No. Every request runs as the signed-in user, with their access rights and record rules.

### Claude says it cannot reach the server

Claude on the web and mobile connects from the internet: your Odoo must be reachable over HTTPS with a valid certificate. Check the connector URL under **AI Connector > Connect an AI App**.

### Sign-in loops or "app not allowed"

Check **Allowed AI apps** in the settings, and that the user may connect (**Who can connect**).

### How do I stop an AI app?

Disconnect it under **My Connections** (or **Configuration > Connections** as administrator), or switch tools off.

### Does data go through Novator?

No. The AI app talks directly to your Odoo.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the AI app you use and a screenshot.
