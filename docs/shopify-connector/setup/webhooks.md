---
title: Webhooks
sidebar_position: 5
description: Let Shopify send new and changed orders to Odoo within seconds, how the calls are checked, and the 15-minute safety net.
---

# Webhooks

A webhook is a call Shopify makes to Odoo the moment something happens, for example a new order. Without webhooks Odoo still finds every change with its check every 15 minutes; with them, orders arrive within seconds.

:::note Before you start
- The store is **Connected** and the **Client Secret** is filled in. Shopify signs every webhook with the app's client secret, and Odoo refuses calls it cannot verify.
- Odoo must be reachable from the internet over **https**. The address comes from the **web.base.url** system parameter. A local address (`http://localhost`, an IP without a certificate) is refused with *Shopify only sends webhooks to https addresses*.
- With several databases on one server, set a database filter so the webhook address opens the right database.
:::

## Set up

1. Open the store and click **Set Up Webhooks** (in the header, shown when the store is connected).
2. Odoo first removes the subscriptions it created before for this store, then subscribes to the topics below.
3. The chatter lists the topics and **Status** on the **Connection** tab shows *N active*.

Click **Set Up Webhooks** again whenever you change **Product Changes Instantly** or **Import New Customers Instantly**, move Odoo to another address, or reconnect the app.

| Topic | Subscribed | What Odoo does |
|---|---|---|
| Order created (`ORDERS_CREATE`) | Always | Queues the import of that order. |
| Order updated (`ORDERS_UPDATED`) | Always | Queues an update of that order. Shopify sends it for payments, fulfillments, cancellations, refunds and edits too. |
| App uninstalled (`APP_UNINSTALLED`) | Always | Sets the store to **Connection Error**, removes the access token and the webhook list, and posts *The app was uninstalled from the Shopify store. Reconnect to resume syncing.* |
| Product created (`PRODUCTS_CREATE`) | When **Product Changes Instantly** is on | Queues the import of the product about 30 seconds later, so Shopify has saved its variants and images. |
| Product updated (`PRODUCTS_UPDATE`) | When **Product Changes Instantly** is on | When the status changed (active, draft, archived) or a variant is not linked yet, Odoo refreshes the link: status, variants, collections. Shopify also sends this after every stock change, including Odoo's own; those are ignored. The Odoo product itself is never overwritten. |
| Product deleted (`PRODUCTS_DELETE`) | When **Product Changes Instantly** is on | Removes the links of the product (store product and variant links). The Odoo product is kept, with a note in its chatter. |
| Customer created (`CUSTOMERS_CREATE`) | When **Import New Customers Instantly** is on | Queues the import of the customer, so new accounts are in Odoo before their first order. |

Odoo also accepts the topics orders paid, orders cancelled, orders fulfilled and refunds created if you add them yourself; each queues an update of the order.

## What happens when a webhook arrives

1. Shopify posts to `https://<odoo>/cb/shopify/webhook/<store id>/<token>`. The token is a random secret of the store.
2. Odoo checks, in this order: the store exists, is active and is a Shopify store, and the token matches (otherwise *404*); the `X-Shopify-Hmac-Sha256` signature of the body matches the client secret (otherwise *401*); the shop domain in the call is this store's **Shop Address** (otherwise *401*).
3. Odoo answers *200* at once and queues a job. It does not use the order data of the webhook: the job reads the order again through the API, so it always works with the latest version.
4. Several webhooks for the same order before the job runs are merged into one job.

:::tip Nothing is lost when Odoo is offline
Shopify retries a failed webhook for a while and removes subscriptions that fail for days. Independently, Odoo's scheduled check (**Import Orders Automatically**, every 15 minutes by default, see [Schedules](../operations/schedules.md)) imports every order changed since the last check. If you see *Not set up* after a long outage, click **Set Up Webhooks** again.
:::

## Remove webhooks

Click **Remove Webhooks** on the **Connection** tab. Odoo deletes every subscription of this store, including old ones that point to this store's address. Orders keep arriving with the scheduled check.

## Good to know

- In a copy of the database (staging), do not click **Set Up Webhooks**: it would move the webhooks of the live store to the copy. See [Test copies of your database](../operations/test-databases.md).
- Webhook calls run as the superuser inside Odoo; the token and the signature are the authorization.
- The client secret signs webhooks for every authentication method, including *Admin API access token* (use the custom app's API secret key there).

## FAQ

**Status shows active, but orders still take 15 minutes.** Shopify cannot reach Odoo. Check that the address in **web.base.url** opens Odoo from outside your network over https, then click **Set Up Webhooks** again.

**The log shows nothing for a webhook.** Rejected calls are not logged as jobs. Look at the Odoo server log for *Shopify webhook for store N refused: bad signature*: the client secret in Odoo is not the app's current secret.
