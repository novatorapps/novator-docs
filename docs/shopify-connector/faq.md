---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions and fixes for the Odoo Shopify Connector, from connecting to payouts.
---

# FAQ and troubleshooting

## Connecting

### Test Connection says the token request was refused

Check **Shop Address**, **Client ID** and **Client Secret**. With **App in my Shopify organization**, the app must be installed on the store and belong to the same Shopify organization as the store. If the app belongs to your agency or another organization, use **Install link** ([Connect the store](./setup/connect-store.md)).

### Orders or customers fail with "This app is not approved to access the Order object"

The app has no distribution method yet. In the Dev Dashboard, open the app, **Distribution**, choose **Custom distribution** for your store. Shopify then gives the app access to protected customer data.

### "Access denied" for a field, with a scope name

The app misses that scope. Add it to a new version of the app, release it and approve the update in the store admin. All scopes are listed on [Create the Shopify app](./setup/create-app.md).

### The install link says the answer could not be verified

Start it again from the store in Odoo (**Authorize in Shopify**), from the address in **web.base.url**, and check that the redirect URL `https://<odoo>/cb/shopify/oauth/callback` is allowed in the app.

### The app was removed from the store

Odoo receives the *app uninstalled* webhook, sets the store to **Connection Error** and forgets the token. Install the app again, then click **Test Connection** and **Set Up Webhooks**.

## Orders

### Orders do not arrive within seconds

Click **Set Up Webhooks** again. Shopify needs a public **https** address for Odoo. Orders still arrive with the 15-minute check ([Webhooks](./setup/webhooks.md)).

### An order waits in the queue with "Products not found in Odoo"

Import or link the product (same SKU as **Internal Reference**), then open the job and click **Retry** ([How products are matched](./products/product-matching.md)).

### The order total differs from Shopify

Open **Configuration > Taxes** and check that each Shopify tax (`title|rate`) points to the right Odoo tax, tax excluded, same rate. One cent of rounding is accepted. Duties and tips are not imported in version 1.0 ([Taxes](./setup/taxes.md)).

### A cash on delivery order is confirmed but has no invoice

That is expected: the invoice is created when you mark the order paid in Shopify ([Order status](./orders/order-status.md)). To keep such orders as quotations, turn off **Unpaid: Confirm** on their payment method (**Configuration > Payment Methods**).

### I removed an item from a Shopify order and Odoo still has it

Order edits that remove items or lower quantities are not applied in version 1.0. Change the Odoo order by hand ([Changes after import](./orders/order-updates.md)).

### Can I import POS orders?

Shopify POS orders are orders like online ones, with their own payment gateway, and are imported with the others. Set up their payment methods separately.

## Products, stock and prices

### Stock does not change at one location

Give the location a warehouse in **Stock From Warehouses** on the **Stock** tab, and keep **Send Stock** on. Locations without warehouses are not touched ([Locations](./setup/locations.md)).

### Stock is sent but Shopify shows 0 for an item

The variant was not stocked at that location before. Odoo stocks it the first time it sends; if you stocked it out in Shopify since, click **Send All Stock**.

### Prices did not change in Shopify

**Send Prices Automatically** is off by default. Turn it on, or click **Sync... > Send prices to the store** ([Send prices](./products/export-prices.md)).

### A Market has no price list

The market has no catalog with a price list in Shopify. Add it in Shopify, then click **Read Locations and Markets Again** ([Markets](./products/markets.md)).

### Product images were not sent

With *Odoo uploads them to Shopify*, Odoo must reach Shopify's upload host on the internet. Check the job error; or switch **Product Images** to *Shopify downloads them from Odoo* when Odoo is public.

## Payouts

### No payouts are imported

Payouts exist only with Shopify Payments, and the app needs `read_shopify_payments_payouts` and `read_shopify_payments_accounts`. Only paid payouts are imported ([Payouts](./orders/payouts.md)).

### A payout shows Check

Its transactions do not add up to the payout amount, or an account is missing. The reason is on the payout; fix it and click **Create Journal Entry**.

## General

### Why is Commerce Bridge in my cart?

Commerce Bridge is the engine of Novator store connectors: job queue, log, product and customer links and order workflows. The Apps Store adds it to the cart with the connector: $350 for the connector and $49 for the engine, $399 in total. If you already use the Odoo WooCommerce Connector, you have the engine.

### Does it work on Odoo Online?

No. Odoo Online does not allow custom apps. Use Odoo.sh or your own server.

### Can I connect several stores?

Yes, one Odoo store per Shopify shop, in one or several companies, next to WooCommerce stores.

### Does a staging copy of my database touch the live shop?

No. A copy reads from Shopify but never writes to it ([Test copies](./operations/test-databases.md)).

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (**Apps**, open the app), the text of the failed job and a screenshot. Every purchase includes a free setup call. See the [Support policy](./support-policy.md).
