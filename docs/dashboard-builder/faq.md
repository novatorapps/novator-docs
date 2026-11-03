---
title: FAQ and troubleshooting
sidebar_position: 9
---

## Questions

**Does it need Odoo Enterprise?**
No. It works on Community and Enterprise, on Odoo.sh and on your own server.

**Will people see figures they should not?**
No. Every figure is computed as the person looking, with their access rights and record rules. The exception is SQL items (Pro), which read the database directly; only people you choose can write them.

**Can I use data from my own apps?**
Yes. Any stored field of any model, including custom models and fields.

**Is there a limit on dashboards or items?**
No.

**Is Pro a subscription?**
No. You pay once.

## Troubleshooting

**An item shows an error instead of a chart**
Read the message on the item. The usual causes: the item has no **Group by** (charts need one), a field was removed by an upgrade, or the person has no access to that model. One broken item never stops the rest of the dashboard.

**A tile says nothing about the previous period**
The comparison needs a **Date field** and **Follow the dashboard period**, and a period other than *All time*. If there was no data in the previous period, there is nothing to compare.

**The chart is empty**
Check the period: switch to *All time*. Then check the item's **Domain**.

**I cannot see Edit layout or Add**
You need **Dashboards / Administrator** on your user.

**AI says the key is missing or invalid** (Pro)
Check Dashboards, Configuration, Settings. The message under the AI dialog shows what the provider answered.

**An SQL item says "read-only" or "timeout"** (Pro)
SQL items cannot change data, and stop after 15 seconds. Add a `LIMIT` or a tighter `WHERE`.

## Still stuck?

Write to [support@novator.co](mailto:support@novator.co) with your Odoo version, the app version (Apps, open the app) and a screenshot.
