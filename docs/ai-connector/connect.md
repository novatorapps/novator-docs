---
title: Connect your AI app
sidebar_position: 2
description: Add Odoo to Claude, Claude Code, ChatGPT or a script, and sign in with Odoo.
---

# Connect your AI app

Open **AI Connector > Connect an AI App**. The page shows your **connector URL** and the steps for each AI app.

![Connect an AI app](/img/ai-connector/connect.png)

## Claude (web, desktop and mobile)

1. In Claude, open **Settings > Connectors > Add custom connector**.
2. Name it *Odoo*, paste the connector URL and click **Add**.
3. Click **Connect**, sign in to Odoo if asked and click **Allow**.

![Sign in with Odoo and allow access](/img/ai-connector/sign_in.png)

Once added on the web or desktop, the connector also works in the Claude mobile app. Now ask Claude things like *"Which quotations are waiting for a reply?"* or *"Create a quotation for Gemini Furniture with 4 office chairs"*.

## Claude Code

Run in a terminal, then type `/mcp` in Claude Code and sign in:

```bash
claude mcp add --transport http odoo <connector URL>
```

## ChatGPT and other AI apps

Any app that supports MCP connectors with sign-in works the same way: add a connector with the URL and sign in with Odoo.

## Scripts and agents without a sign-in screen

Create an API key in your Odoo user preferences and send it as `Authorization: Bearer <key>`. The key works with your access rights. An administrator can switch API keys off.

## My connections

**AI Connector > My Connections** lists the AI apps you connected. Disconnect one at any time; it then has to sign in again.

![Connected AI apps](/img/ai-connector/connections.png)
