---
title: Order notifications
sidebar_position: 2
description: "Jazi tells Odoo about new and changed orders within seconds; the signature is checked and a scheduled check catches anything missed."
---

# Order notifications

With notifications set up, Jazi calls Odoo when an order is created or changes, and the order is imported within seconds.

1. Open the store and click **Set Up Order Notifications**. Odoo registers its address with Jazi for the events *order created* and *order updated*, and keeps the signing secret.
2. Click **Send Test Notification**: **Last Notification Received** shows the time and *webhook.test*.

| Field or button | What it does |
|---|---|
| **Status** | *Not set up* or *Active*. |
| **Last Notification Received** / **Last Notification** | When Jazi last called Odoo, and for what. |
| **Send Test Notification** | Asks Jazi to send a test call now. |
| **Remove Notifications** | Removes the notification from Jazi. Orders still arrive with the scheduled check. |

## Safety

- Every call is signed by Jazi. Odoo checks the signature and the time, and refuses calls older than 5 minutes or sent twice.
- A notification only says which order changed: Odoo then reads the order from Jazi, so the data always comes from Jazi itself.
- Jazi needs a public https address for your Odoo. On a local test server without one, rely on the scheduled check.
- On a test copy of the database, notifications are not set up: see [Test copies](../operations/test-databases.md).

## Without notifications

The scheduled check reads open Jazi orders every 15 minutes by default (change it on the store's [Schedules](../operations/schedules.md) tab), so orders still arrive, only later.
