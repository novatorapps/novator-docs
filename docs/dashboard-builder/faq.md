---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Dashboard Builder.
---

# FAQ and troubleshooting

### Does it need Odoo Enterprise?

No. It works on Community and Enterprise, on Odoo.sh and on your own server.

### Will people see figures they should not see?

No. Every figure is computed with the user's own access rights and record rules. The only exception is Pro's SQL items, which read the database directly; only the people you put in *SQL items: write SQL queries* can create them.

### An item shows "You cannot read ..."

The person viewing the dashboard has no access to that model or field. The rest of the dashboard still works. Share the dashboard with a narrower group, or give the access in Odoo.

### An item shows "No data for this period"

Check the period at the top, the item's **Date field** and **Period** (Data tab), and its filter.

### A chart shows "Choose a field to group by"

Every chart needs a **Group by** field. Tiles, gauges and record lists don't.

### The menu entry of a dashboard does not appear for some users

Menu entries follow the dashboard's **Groups**. Users added one by one (field **Users**) open the dashboard from the Dashboards app.

### Can I use data from my own apps?

Yes. Any stored field of any model, including custom models and fields.

### The AI answers "invalid x-api-key" or similar

The key in **Configuration > Settings** is wrong or has no credit with the provider. Check it on the provider's site.

### Where is "Create with AI" or TV mode?

They are Pro features. See [Pro features](./pro.md).

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (Apps, open the app) and a screenshot.
