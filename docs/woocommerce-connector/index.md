---
title: Odoo WooCommerce Connector
sidebar_label: Overview
sidebar_position: 1
description: Orders, customers, products, stock, prices, refunds and tracking in sync between WooCommerce and Odoo.
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="woocommerce-connector" />

<img className="app-icon" src="/img/woocommerce-connector/icon.png" alt="" />

# Odoo WooCommerce Connector

Run your WooCommerce store from Odoo. New orders arrive in Odoo within seconds, with the right customer, taxes, coupons and shipping. Odoo confirms, invoices and registers the payment for you, sends stock and prices back to the store, and completes the store order with the tracking number when you deliver. Changes, cancellations and refunds follow in both directions.

<span className="version-pill">Odoo 13.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">$399 one-time ($350 + $49 engine)</span>

![WooCommerce orders in Odoo with their store status](/img/woocommerce-connector/store_orders.png)

- **Orders stay in sync**, not only at the first import: quantities, addresses, payment, cancellations and refunds.
- **Nothing gets lost**: webhooks plus a scheduled check (every 15 minutes by default, set per store), a job queue you can see and retry, and alerts to the users you choose when a job fails.
- **Only your two systems**: Odoo talks to your store directly. No middleware and no subscription.
- **Free setup call** with every purchase: write to **support@novator.co**.

[Odoo WooCommerce Connector on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_woocommerce_connector)

## What is sent where

| From | To | What |
|---|---|---|
| WooCommerce | Odoo | Orders and their changes, customers, refunds, products, variations, categories, images, stock (once, when you start) |
| Odoo | WooCommerce | Stock, regular and sale prices, order completion and tracking, cancellations, refunds, products you choose to send |

Data only travels between your Odoo and your store. Nothing goes through Novator.

## Features

| Area | Included |
|---|---|
| Connection | WooCommerce REST API v3; HTTP Basic, keys in the address or OAuth 1.0a signature; several stores and companies |
| Orders | Webhooks (*order.created*, *order.updated*) and a 15-minute check; updates after import; optional import of *Pending payment* orders |
| Order contents | Simple and variable products, coupons as discount lines per tax, shipping methods, fees, store taxes mapped to Odoo taxes, total check |
| Workflows | Per payment method: confirm, validate delivery, invoice, register payment, payment terms |
| Customers | Matching by customer link and email, companies, invoice and delivery addresses, guest orders, bulk import |
| Products | Import and export of simple and variable products, variations, attributes, categories, images (link or WordPress media upload), SKU and barcode |
| Stock | Free, on-hand or forecasted quantity of chosen warehouses, buffer, sent on every stock move |
| Prices | Regular price from a pricelist, sale price from a second pricelist |
| Deliveries | Order completed when delivered; tracking as order note, Shipment Tracking extension or meta field |
| Cancellations and refunds | Both ways; credit notes from WooCommerce refunds; refunds through the gateway and restock options |
| Operations | Job queue with retries, log, dashboard, test copies that never write to the live store, access rights |

Not included: WPML or other translations, coupon definitions (coupons used in orders are imported), WooCommerce Subscriptions and Bookings logic, Odoo 16.0 and older.

## Where to start

1. [Install the app](./install.md). It installs the **Commerce Bridge** engine with it.
2. [Create the API key](./setup/create-api-key.md) and [connect the store](./setup/connect-store.md).
3. Check the [store settings](./setup/store-settings.md), then [import your products](./products/import-products.md).
4. [Set up webhooks](./setup/webhooks.md) and the [payment methods](./setup/payment-methods.md).
5. Read how [orders are imported](./orders/import-orders.md) and [kept up to date](./orders/order-updates.md).
