---
title: Installing an app
sidebar_position: 1
description: Install a Novator app on Odoo Online, Odoo.sh or your own server.
---

# Installing an app

Every Novator app installs like any other Odoo app. Pick the way your Odoo is hosted.

## Odoo.sh

1. Open the app page on the [Odoo Apps Store](https://apps.odoo.com/apps/browse?repo_maintainer_id=271577) and choose your Odoo version.
2. Free apps: click **Download**. Paid apps: buy the app, then download it from your Odoo account.
3. Unzip it into your Odoo.sh repository (the folder that holds your custom apps), commit and push.
4. When the build is ready, open **Apps**, click **Update Apps List**, search for the app and click **Activate**.

## Your own server (on-premise)

1. Download the app as above and unzip it in a folder that is in your `addons_path`.
2. Restart Odoo.
3. Turn on developer mode, open **Apps**, click **Update Apps List**, search for the app and click **Activate**.

## Odoo Online

Odoo Online only runs apps that Odoo hosts itself, so third-party apps cannot be installed there. Move to Odoo.sh or your own server, or ask us at support@novator.co.

## Free and Pro apps

Many Novator apps come as a free app and a **Pro** add-on. Pro installs on top of the free app and Odoo adds the free app automatically. Everything you set up with the free app stays when you add Pro.

Two pairs work differently: Storage Manager and Device Access Control are complete apps of their own, and Storage Analyzer and Login Audit are free companions you can add or leave out. The **Installation** page of each guide lists exactly what an app needs.

## Updating

Download the new version, replace the app folder, restart Odoo (Odoo.sh: push), then open **Apps**, find the app and click **Upgrade**.

## Need help?

See [Support](../support.md) for what to include so we can help quickly.
