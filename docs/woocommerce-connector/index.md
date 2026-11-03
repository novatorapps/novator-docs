---
title: WooCommerce Connector
sidebar_label: Overview
sidebar_position: 1
description: Orders, customers, products, stock, prices, refunds and tracking in sync between WooCommerce and Odoo.
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="woocommerce-connector" />

<img className="app-icon" src="/img/woocommerce-connector/icon.png" alt="" />

# WooCommerce Connector

Run your WooCommerce store from Odoo. New orders arrive in Odoo within seconds, with the right customer, taxes, coupons and shipping. Odoo confirms, invoices and registers the payment for you, sends stock and prices back to the store, and completes the store order with the tracking number when you deliver. Changes, cancellations and refunds follow in both directions.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">$399 one-time ($350 + $49 engine)</span>

![WooCommerce orders in Odoo with their store status](/img/woocommerce-connector/store_orders.png)

- **Orders stay in sync**, not only at the first import: quantities, addresses, payment, cancellations and refunds.
- **Nothing gets lost**: webhooks plus a check every 15 minutes, and a job queue you can see and retry.
- **Only your two systems**: Odoo talks to your store directly. No middleware and no subscription.
- **Free setup call** with every purchase: write to **support@novator.co**.

[WooCommerce Connector on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_woocommerce_connector)

## What is sent where

| From | To | What |
|---|---|---|
| WooCommerce | Odoo | Orders and their changes, customers, refunds, products, categories, images, stock (once, when you start) |
| Odoo | WooCommerce | Stock, prices, order completion and tracking, cancellations, refunds, products you choose to send |

Data only travels between your Odoo and your store. Nothing goes through Novator.

## Next steps

1. [Install the app](/getting-started/install). It installs the **Commerce Bridge** engine with it.
2. [Connect your store](./setup.md).
3. [Orders, invoices and payments](./orders.md).
4. [Products, stock and prices](./products-stock.md).
5. [Jobs, log and safety](./queue.md).
