---
title: Install and set up
sidebar_position: 2
---

## Install

1. Get the app from the Odoo Apps Store and add it to Odoo (see [Installing an app](/getting-started/install)).
2. Install **Dashboard Builder**. For Pro, install **Dashboard Builder Pro**: Odoo installs the free app with it.
3. A new **Dashboards** app appears on the home screen, with a sample *Contacts overview* dashboard.

## Your first dashboard

1. Open **Dashboards**. Click the dashboard name at the top left, then **New dashboard**.
2. Give it a name and, if you like, a default period (for example *This year*). Save.
3. Click **Add** and choose **Tile**.
4. Choose the **Model** (for example *Sales Order*), the **Aggregate** (for example *Sum*) and the **Measure** (for example *Untaxed Amount*). Save.
5. Click **Add** again and choose **Bar**. Pick the same model, then a **Group by** field, for example *Order Date* by *Month*. Save.

Your dashboard now shows a KPI tile and a monthly chart. Read [Building dashboards](features.md) for everything an item can do.

## Who can use it

| Group | Can |
|---|---|
| **Dashboards / User: view shared dashboards** | Open the dashboards shared with them. Every internal user is in this group. |
| **Dashboards / Administrator: create and edit dashboards** | Create, change and delete dashboards and items, and see all dashboards. Settings administrators have it. |
| **Dashboards / SQL items: write SQL queries** (Pro) | Create and change SQL items. Nobody is in this group until you add them. |

Set these on the user form, under **Access Rights**.

:::tip Figures follow each person's access rights
Every number is computed as the person looking at the dashboard, with their record rules. A sales rep who may only see their own orders sees totals of their own orders on the same dashboard.
:::
