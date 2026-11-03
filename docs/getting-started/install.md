---
title: Installing an app
sidebar_position: 1
description: How to install a Novator app on Odoo.sh or your own server.
---

Novator apps work on Odoo Community and Enterprise, on Odoo.sh and on your own server. They are not available on Odoo Online (SaaS), because Odoo Online does not allow apps from the Apps Store.

## 1. Get the app

1. Open the app on the [Odoo Apps Store](https://apps.odoo.com/apps/browse?repo_maintainer_id=271577).
2. Choose your Odoo version at the top of the page (for example 20.0). It must match your database.
3. Free apps: click **Download**. Paid apps: click **Buy**, pay, then download from **My purchases**.

Some apps come in two parts: a free app and a Pro add-on. Pro needs the free app. The Pro download normally includes it; if it does not, download the free app too.

## 2. Add it to Odoo

**Odoo.sh**

1. Unzip the download into your repository, next to your other modules (each app is one folder, for example `novator_dashboard`).
2. Commit and push. Odoo.sh builds the branch.

**Your own server**

1. Unzip the folders into a directory listed in `addons_path` in your Odoo configuration.
2. Restart Odoo.

## 3. Install

1. Turn on [developer mode](https://www.odoo.com/documentation/master/applications/general/developer_mode.html).
2. Apps, then **Update Apps List**.
3. Remove the **Apps** filter in the search bar, search the app's name, and click **Activate**.

## Updating

Download the new version, replace the folders, restart Odoo (or push on Odoo.sh), then open Apps, find the app and click **Upgrade**. Your settings and data stay.

## Need help?

Write to [support@novator.co](mailto:support@novator.co). Include your Odoo version and edition, and where you host Odoo.
