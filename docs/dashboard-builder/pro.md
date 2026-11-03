---
title: Pro features
sidebar_position: 4
---

Dashboard Builder Pro installs on top of the free app. Everything you built stays.

![The ready-made Sales dashboard](/img/dashboard-builder/pro-sales.png)

## AI

Pro uses **your own** Anthropic (Claude) or OpenAI key. Odoo calls the provider directly; nothing goes through Novator.

### Connect your AI

1. Dashboards, Configuration, **Settings**.
2. In **AI**, choose the **AI provider** and paste your **AI key**.
3. Optional: the **AI model** (empty uses the default), and for OpenAI compatible services (Azure OpenAI, OpenRouter, a local model) the **API address**.

![AI settings](/img/dashboard-builder/pro-ai_settings.png)

### Create a dashboard with AI

1. Click **AI** at the top of any dashboard (or Configuration, **Create with AI**).
2. Describe what you want to see, for example *Purchases this year: spend by vendor and by month, open RFQs and the products we buy most*.
3. Choose **New dashboard** or **Add to** the current one, then **Create**.

The AI picks the models and fields and proposes tiles and charts. Odoo checks every proposal against your database and skips what does not fit. Change the result like any other item.

![Creating a dashboard with AI](/img/dashboard-builder/pro-ai_builder.png)

:::info What the AI receives
To create a dashboard: your sentence and the names of your models and fields. Never your records.
To explain a chart: the title and the numbers shown on that chart.
:::

### Explain a chart

Open an item's **&#8942;** menu and click **Explain with AI**. You get three to five short points in your language: the trend, the biggest contributors, anything unusual and a suggestion.

## Drill-down

Click a bar to see what is inside it: a month by salesperson, then a salesperson by customer. A breadcrumb above the chart takes you back. At the last level a click opens the records.

![Revenue for one month, by salesperson](/img/dashboard-builder/pro-drill_down.png)

To set it up, edit the item and open the **Drill-down** tab. Add the levels in order (for example *Salesperson*, then *Customer*). Dates can drill by day, week, month, quarter or year. Drill-down works on bar, line, area, pie, doughnut, polar, radar and funnel charts and on grouped lists.

## TV mode

Click the **TV** button at the top of a dashboard. The dashboard goes full screen without menus and rotates through the dashboards that have **Show in TV mode** ticked, each for its **TV mode: seconds on screen** (both in Dashboard settings). Figures refresh at each turn.

Use the right arrow key to skip to the next dashboard and **Escape** to leave.

![TV mode](/img/dashboard-builder/pro-tv_mode.png)

## SQL items

For data that is not in one model. Only users in **Dashboards / SQL items: write SQL queries** can create or change them; nobody is in this group until you add them.

1. Add an item, set **Source** to **SQL query**.
2. Write a `SELECT` query. First column: the labels. Next columns: the values (one series per column). Tiles use the first number.
3. Use these placeholders for the dashboard period and the user: `%(date_from)s`, `%(date_to)s`, `%(uid)s`, `%(company_id)s`, `%(company_ids)s`. Write `%%` for a percent sign.

![A chart from an SQL query](/img/dashboard-builder/pro-sql_item.png)

```sql
SELECT c.name->>'en_US' AS country, sum(m.amount_untaxed_signed) AS revenue
FROM account_move m
JOIN res_partner p ON p.id = m.commercial_partner_id
JOIN res_country c ON c.id = p.country_id
WHERE m.move_type = 'out_invoice' AND m.state = 'posted'
  AND m.invoice_date >= %(date_from)s AND m.invoice_date < %(date_to)s
GROUP BY 1 ORDER BY 2 DESC LIMIT 8
```

:::caution
SQL items read the database directly, without record rules: everyone who can open the dashboard sees the result. Queries run read-only, stop after 15 seconds, return at most 500 rows, and cannot read passwords, keys or tokens.
:::

## Spreadsheet items

Set **Source** to **Spreadsheet (CSV or Excel)** and upload a file. First row: column titles. First column: labels. Next columns: numbers. Upload a new file to update the chart. Excel files need the Python package `openpyxl` on the server; CSV always works.

## Email digests

Send a dashboard every day, week or month. Open **&#8942;**, then **Email digest** (or Configuration, **Email digests**).

1. Choose the **Recipients**, how often (**Interval**) and the **Period**.
2. Click **Send me a test** to see it.

Each recipient gets the figures they are allowed to see: tiles with the change, the top values of each chart and the first rows of each list, with a button to open the dashboard.

![A weekly digest](/img/dashboard-builder/pro-digest_email.png)

## Ready-made dashboards

**&#8942;**, then **Ready-made dashboards** (or Configuration). Pick one of the dashboards offered for the apps you have installed: Sales, CRM pipeline, Invoicing, Inventory, Purchases, Projects, Employees. It is created in one click; then it is yours to change.

![Ready-made dashboards](/img/dashboard-builder/pro-templates.png)

## Export and import

- **&#8942;**, **Export this dashboard** downloads a `.json` file.
- **&#8942;**, **Import dashboards** (or Configuration, **Export / import**) creates dashboards from a file.

Files use model and field names, not record IDs, so a dashboard built on a test database works in production, or after an upgrade. Items that do not fit the target database are listed and skipped.
