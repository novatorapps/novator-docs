---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions and fixes for the Odoo WooCommerce Connector.
---

# FAQ and troubleshooting

## Connection

### Test Connection says the store did not answer with JSON

Check the **Store Address**, and that WordPress permalinks are not *Plain* (**Settings > Permalinks**). A security plugin or a maintenance page can also answer with HTML. See [Connect the store](./setup/connect-store.md).

### Test Connection says the key has no permission (HTTP 401)

Create the key again with **Permissions: Read/Write** for a user with the Administrator or Shop manager role. If the key is right, your host probably removes the Authorization header: set **Authentication** to *Keys in the address*.

### SSL certificate problem

The store's certificate is invalid or self-signed. Fix the certificate. For a test store only, turn **Check SSL Certificate** off.

## Orders

### Orders do not arrive within seconds

Click **Set Up Webhooks** again and check in WooCommerce (**Settings > Advanced > Webhooks**) that they are *Active*. The store must reach your Odoo address; with several databases on one server, set a database filter. Orders still arrive with the 15-minute check. See [Webhooks](./setup/webhooks.md).

### An order is not in Odoo

Look in **Queue > Jobs** for *Import order ...*. No job: the order is *Pending payment* (see **Import Unpaid (Pending Payment) Orders**), *Failed*, *Cancelled*, or changed before **Import Orders From**. Import it with **Sync... > Import orders from the store**.

### An order is waiting in the queue with "Products not found in Odoo"

Import or link the product (**Sync... > Import products from the store**, or give the Odoo product the same SKU), then open the job and click **Retry**.

### The order total differs from the store total

Open **Configuration > Taxes** and check that each store tax points to the right Odoo tax (tax excluded, same rate). See [Taxes](./setup/taxes.md).

### I changed an imported order in Odoo and my change disappeared

While the order is not delivered or invoiced, the next change in WooCommerce updates the lines again. Change the order in WooCommerce, or deliver or invoice it first. See [Updates after import](./orders/order-updates.md).

### Bank transfer orders are confirmed but not invoiced

That is the default: they are unpaid. When you mark them paid or completed in WooCommerce, the next update invoices them and registers the payment. See [Order status](./orders/order-status.md).

## Products, stock and prices

### The import created products I already had

Their Internal Reference or barcode did not match the SKU. See [How products are matched](./products/product-matching.md).

### Stock in WooCommerce is lower than in Odoo

Check **Stock Source** (free to use subtracts reserved quantities), **Stock From Warehouses** and the **Stock Buffer** on the Stock tab. See [Send stock](./products/stock-export.md).

### Are coupons synced?

Coupons used in orders are imported as discount lines with the coupon code. Coupon definitions stay in WooCommerce.

### Is WPML supported?

No. Products are read and sent in the store's default language.

## Accounting

### Why is Commerce Bridge in my cart?

Commerce Bridge is the engine of Novator store connectors: job queue, log, product and customer links and order workflows. The Apps Store adds it to the cart with the connector: $350 for the connector and $49 for the engine, $399 in total. You buy the engine once; the Odoo Shopify Connector uses the same one.

### A refund in WooCommerce did not create a credit note

The order had no posted invoice yet, or **Import Refunds as Credit Notes** is off. See [Refunds from WooCommerce](./orders/refunds.md).

## General

### Does it work on Odoo Online?

No. Odoo Online does not allow custom apps. Use Odoo.sh or your own server.

### Can I connect several stores?

Yes, one store per WooCommerce site, in one or several companies, next to Shopify stores.

### Is my test database safe?

Yes. A copied database reads from WooCommerce but never sends anything. See [Test copies](./operations/test-databases.md).

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (Apps, open the app), the job error and a screenshot. Every purchase includes a free setup call. See the [support policy](./support-policy.md).
