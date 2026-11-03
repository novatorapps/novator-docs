---
slug: dashboards-in-odoo
title: "Dashboards in Odoo: what is built in, and when you need more"
description: The reporting tools that come with Odoo Community and Enterprise, what each one is good at, and the questions to ask before adding a dashboard app.
tags: [reporting, dashboards]
date: 2026-11-03
---

Most teams ask for "a dashboard" when what they need is one number they can trust, seen every morning. Odoo already has several tools for that. This article walks through them, from the simplest, so you can pick the lightest one that does the job.

{/* truncate */}

## 1. Graph and pivot views

Almost every list in Odoo can switch to a **graph** or **pivot** view with the icons at the top right. Choose the measure (amount, quantity, count), group by up to several fields, and filter. Save the result as a favorite so it opens the same way next time, and share the favorite with other users if they need it.

This answers most one-off questions ("sales by salesperson this quarter") without any setup.

## 2. My Dashboard

The **Dashboards** module of Odoo Community adds a personal **My Dashboard** page. From a graph, pivot or list view, choose **Add to my dashboard** in the search options; the view then appears as a block on your own dashboard. It is simple and personal: each user builds their own.

## 3. The Dashboards app (spreadsheet dashboards)

The **Dashboards** app shows ready-made dashboards that come with the apps you install, such as Sales, Accounting or Point of Sale. In Odoo Community you can open and filter them. Building or editing dashboards in the spreadsheet editor, and inserting your own pivots and charts into them, uses Odoo Spreadsheet, which is part of Odoo Enterprise.

## 4. Reports built for a purpose

Several apps have their own analysis menus (for example **Sales > Reporting**), with the right measures already chosen. Check them before building something new; they often already contain the number you are after.

## When the built-in tools are not enough

You may need more when:

- **Several sources on one screen.** Sales, cash and stock side by side, for a meeting or a wall screen.
- **Numbers compared to a target or a previous period**, with a clear up or down.
- **Many users who should see the same dashboard**, defined once by someone else.
- **A dashboard that refreshes on its own** on a screen in the office or the warehouse.
- **A summary by email** for people who do not open Odoo every day.

## Questions to ask before adding a dashboard app

1. **Does it respect access rights?** A dashboard should show each user only the records they are allowed to see. Totals computed with elevated rights can leak information.
2. **Does it read live data or copies?** Live data is always current; copied data needs a schedule and can be out of date.
3. **Who maintains it?** Dashboards built with point-and-click settings survive upgrades better than custom code or SQL written for one version.
4. **What does it cost to run?** Heavy dashboards that refresh often on large tables can slow the database for everyone.

Start with one dashboard and three to five numbers that drive a decision. It is easier to add a chart later than to get people to trust a crowded screen.

## Related

- [Dashboard Builder](https://docs.novatorapps.com/dashboard-builder) adds KPI tiles, charts and lists from any Odoo data, computed with each user's own access rights. Pro adds drill-down, TV mode, SQL items (which read the database directly, so they are limited to the people you allow) and email digests.
