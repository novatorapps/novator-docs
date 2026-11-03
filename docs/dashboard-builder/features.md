---
title: Building dashboards
sidebar_position: 3
---

## The dashboard screen

- **Dashboard name** (top left): click it to switch to another dashboard or create one.
- **Period**: the dates every item follows, unless an item has its own period.
- **Refresh**: reload the figures. A dashboard can also refresh on its own (see [Dashboard settings](#dashboard-settings)).
- **Edit layout**, **Add** and the **&#8942;** menu: for dashboard administrators.

![A dashboard with KPI tiles, charts and a list](/img/dashboard-builder/dashboard.png)

## Item types

| Type | Use it for |
|---|---|
| Tile | One number: revenue, open tickets, stock value. Shows the change against the previous period and progress towards a goal. |
| Bar, Horizontal bar | Comparing groups: revenue by month, top customers. |
| Stacked bar | Groups split by a second field: opportunities by salesperson and stage. |
| Line, Area | Trends over time. |
| Pie, Doughnut, Polar area | Shares of a whole. |
| Radar | Comparing a few groups on one value. |
| Scatter | Two measures per group: revenue against number of orders per customer. |
| Funnel | Stages in order: pipeline by stage. |
| Gauge | One number against a goal. |
| List | Records (latest orders) or totals per group. |

![Thirteen chart types on one dashboard](/img/dashboard-builder/chart_types.png)

## Setting up an item

Click **Add** and choose a type, or open an item's **&#8942;** menu and click **Edit**.

![The item form](/img/dashboard-builder/item_form.png)

**Data tab**

- **Model**: where the data comes from, for example *Sales Order* or *Invoice*.
- **Domain**: which records count, for example *Status is Sales Order*. In the code editor (developer mode) you can write `%UID` for the current user and `%MYCOMPANY` for the current company.
- **Date field** and **Period**: the date the period filter applies to. *Follow the dashboard period*, an *Own period* (for example always *This year*), or *All time*.
- **Aggregate** and **Measure**: *Count* the records, or *Sum*, *Average*, *Minimum* or *Maximum* of a number.
- **Second measure**: a second value drawn as a line on bar charts, with its own axis (for example revenue as bars, number of orders as a line). On a scatter chart it is the vertical axis.
- **Group by**: one bar or slice per value. Dates group by day, week, month, quarter or year.
- **Then by (series)**: a second grouping, for stacked bars and multi-line charts.
- **Sort** and **Limit**: for example *Largest first* and *8*, with **Group the rest as Others**.
- **Cumulative**: a running total, each point adds the previous ones.

**Look tab**: prefix and suffix, currency symbol, short numbers (1.2K, 3.4M), decimals, icon and color for tiles, palette, values on the chart, legend, and whether a click opens the records.

**Position tab**: column, row, width and height. Dragging in edit mode is easier.

### Lists

A **List** shows either **Records** (choose the columns in order, the sort order and how many rows) or **Grouped totals** (one row per group, like a bar chart in table form). Click a row to open the record or the records of the group.

## The item menu

Every item has a **&#8942;** menu.

![The menu of a chart](/img/dashboard-builder/item_menu.png)

- **Edit**, **Duplicate**, **Delete**.
- **Switch the type** with the small chart buttons. The data stays the same.
- **Open records**: the list of records behind the item.
- **Export CSV**, **Export image** (PNG).
- **Copy to** or **Move to** another dashboard.

Clicking a bar, slice, point, funnel step or tile also opens the records behind it.

## Edit layout

Click **Edit layout**. Drag an item by its title, and resize it from the bottom right corner. Other items make room, and the layout is saved as soon as you let go. Click **Done** when finished.

![Editing the layout](/img/dashboard-builder/edit_layout.png)

The dashboard uses 12 columns. On a phone, items are shown one under the other.

## Dashboard settings

Open **&#8942;**, then **Dashboard settings** (or Dashboards, Configuration, Dashboards).

![Dashboard access settings](/img/dashboard-builder/dashboard_settings.png)

- **Default period**, **Auto refresh** (every 30 seconds to every hour) and **Palette**.
- **Show in menu** and **Under menu**: add a menu entry for this dashboard anywhere in Odoo, for example under Sales.
- **Access**: groups and users who can open it. Leave both empty to share it with everyone.

**Set as my home page** (in the **&#8942;** menu) opens this dashboard when you sign in.

## Periods

All time, today, yesterday, tomorrow, this, last and next week, month and quarter, this and last year, month, quarter and year to date, the last 7, 30, 90 and 365 days, the next 7 and 30 days, and custom dates.

When the period is a month, quarter or year, tiles compare with the same length of time just before (this month against last month). Other periods compare with the same number of days before.
