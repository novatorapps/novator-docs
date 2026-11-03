---
title: AI Connector for Claude and MCP
sidebar_label: Overview
sidebar_position: 1
description: Connect Claude, ChatGPT and other AI apps to Odoo. Each user signs in with Odoo and keeps their own access rights.
---

<img className="app-icon" src="/img/ai-connector/icon.png" alt="" />

# AI Connector for Claude and MCP

Connect **Claude**, ChatGPT and other AI apps to your Odoo through a secure MCP server built into Odoo. Each person **signs in with Odoo** and the AI works with **their own access rights**: it can only see and change what that person can. Every action is logged.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span>

![Connect an AI app](/img/ai-connector/connect.png)

## Free and Pro

| | Free | Pro |
|---|:---:|:---:|
| MCP server inside Odoo, sign in with Odoo (no API keys to share) | ✓ | ✓ |
| Works with Claude (web, desktop, mobile, Claude Code), ChatGPT and other MCP apps | ✓ | ✓ |
| Each user's own access rights, tools on and off, activity log | ✓ | ✓ |
| Approvals before the AI changes sensitive data | | ✓ |
| Change history with one-click undo | | ✓ |
| Fields, document types and tools per team, daily limits | | ✓ |
| Ready-made workflows | | ✓ |

- Free app: [AI Connector on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_mcp)
- Pro: [AI Connector Pro on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_mcp_pro) ($149, one-time)

:::note
Your Odoo must be reachable over HTTPS from the internet for Claude on the web or mobile to connect (Odoo.sh always is).
:::

## Next steps

1. [Install the app](/getting-started/install).
2. [Connect your AI app](./connect.md).
3. [Control what the AI does](./control.md).
4. [Pro: approvals, undo and limits](./pro.md).
