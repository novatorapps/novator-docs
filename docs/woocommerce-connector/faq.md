---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions and fixes for the WooCommerce Connector.
---

# FAQ and troubleshooting

### Test Connection says the store did not answer with JSON

Check the store address, and that WordPress permalinks are not *Plain* (**Settings > Permalinks**).

### Test Connection says the key has no permission

Create the key again with **Permissions: Read/Write** for a user with the Administrator or Shop manager role.

### My host removes the Authorization header

Set **Authentication** to *Keys in the address*.

### Orders do not arrive within seconds

Click **Set Up Webhooks** again and check in WooCommerce (**Settings > Advanced > Webhooks**) that they are *Active*. The store must reach your Odoo address; with several databases on one server, set a database filter. Orders still arrive with the 15-minute check.

### An order is waiting in the queue with "Products not found in Odoo"

Import or link the product (**Sync... > Import products from the store**, or give the Odoo product the same SKU), then open the job and click **Retry**.

### The order total differs from the store total

Open **Configuration > Taxes** and check that each store tax points to the right Odoo tax (tax excluded, same rate).

### Are coupons synced?

Coupons used in orders are imported as discount lines with the coupon code. Coupon definitions stay in WooCommerce.

### Why is Commerce Bridge in my cart?

Commerce Bridge is the engine of Novator store connectors: job queue, log, product and customer links and order workflows. The Apps Store adds it to the cart with the connector: $350 for the connector and $49 for the engine, $399 in total. You buy the engine once; later Novator connectors use the same one.

### Does it work on Odoo Online?

No. Odoo Online does not allow custom apps. Use Odoo.sh or your own server.

### Can I connect several stores?

Yes, one store per WooCommerce site, in one or several companies.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (Apps, open the app) and a screenshot. Every purchase includes a free setup call.
