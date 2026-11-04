---
title: Store settings reference
sidebar_label: Store settings
sidebar_position: 3
description: Every field of a WooCommerce store in Odoo, tab by tab, with defaults and when to change them.
---

import StoreFieldsOrders, {toc as ordersToc} from '@site/src/partials/commerce/StoreFieldsOrders.mdx';
import StoreFieldsProducts, {toc as productsToc} from '@site/src/partials/commerce/StoreFieldsProducts.mdx';
import StoreFieldsStock from '@site/src/partials/commerce/StoreFieldsStock.mdx';

export const toc = [
  {value: 'Header and buttons', id: 'header-and-buttons', level: 2},
  {value: 'Connection tab', id: 'connection-tab', level: 2},
  {value: 'Orders tab', id: 'orders-tab', level: 2},
  ...ordersToc,
  {value: 'WooCommerce options on the Orders tab', id: 'woocommerce-options-on-the-orders-tab', level: 2},
  {value: 'Products tab', id: 'products-tab', level: 2},
  ...productsToc,
  {value: 'Product images', id: 'product-images', level: 2},
  {value: 'Stock tab', id: 'stock-tab', level: 2},
];

# Store settings reference

Open **Online Stores**, click the store. This page explains every field, tab by tab. Fields not mentioned here are standard Odoo fields.

## Header and buttons

| Button | What it does |
|---|---|
| **Test Connection** | Reads the WooCommerce system status and sets the store to **Connected** or **Connection Error**. See [Connect the store](./connect-store.md). |
| **Set Up Webhooks** | Creates the webhooks in WooCommerce (visible when connected, administrators only). See [Webhooks](./webhooks.md). |
| **Sync...** | Opens the bulk operations window: import products, orders, customers, stock; send stock or prices. See [Sync with store](../operations/sync-wizard.md). |
| **Check Orders Now** | Queues the order check that otherwise runs every 15 minutes. |
| **Send All Stock** | Sends the quantity of every linked product again, also unchanged ones. |
| **Use in This Database** | Shown in a copied database. Makes this database the live one. See [Test copies](../operations/test-databases.md). |

At the top: **Store Currency** and **Store Details** are read from the store by **Test Connection**. The smart buttons open the store's orders, linked products, customers, jobs, failed jobs and log.

## Connection tab

Only administrators see this tab.

### WooCommerce

| Field | Default | What it does |
|---|---|---|
| **Store Address** | | Address of the shop, for example `https://shop.example.com`. Odoo adds `/wp-json/wc/v3/` to it. |
| **Consumer Key**, **Consumer Secret** | | The REST API key, see [Create the API key](./create-api-key.md). Hidden as passwords. |
| **Authentication** | Automatic (recommended) | How the key is sent: Automatic, HTTP Basic (https), Keys in the address (https, when the host removes the Authorization header), OAuth 1.0a signature (http). See [Authentication modes](./connect-store.md#authentication-modes). |
| **Check SSL Certificate** | On | Refuse stores with an invalid certificate. Turn off only for test stores. |
| **WooCommerce Version** | | Read only, filled by **Test Connection**. |

### Webhooks

| Field | Default | What it does |
|---|---|---|
| **Status** | Not set up | *N active* after **Set Up Webhooks**. |
| **Import New Products Instantly** | Off | Also creates a *product created* webhook, so new store products are imported within a minute. Click **Set Up Webhooks** again after changing it. |
| **Remove Webhooks** | | Deletes the webhooks this Odoo created in WooCommerce. |

## Orders tab

<StoreFieldsOrders platform="WooCommerce" img="/img/woocommerce-connector" prefix="WC-" />

## WooCommerce options on the Orders tab

| Field | Default | What it does |
|---|---|---|
| **Import Unpaid (Pending Payment) Orders** | Off | WooCommerce creates a *Pending payment* order as soon as a buyer reaches the payment page, so many of them are abandoned checkouts. Off: they are skipped until they become *Processing* or *On hold*. On: they are imported as quotations (not confirmed). |
| **Send Tracking As** | Order note | How the tracking number reaches WooCommerce when a delivery is sent: **Order note**, **WooCommerce Shipment Tracking extension**, or **Order meta field**. See [Deliveries and tracking](../orders/fulfillment.md). |
| **Tracking Meta Key** | `_tracking_number` | With **Order meta field**: the meta key that receives the tracking numbers (comma separated). Use the key your shipping or email plugin reads. |
| **Refund Through the Payment Gateway** | Off | When Odoo sends a credit note, ask WooCommerce to refund the money through the payment gateway (if the gateway supports it). Off: the refund is only recorded in WooCommerce. |
| **Restock in WooCommerce on Refund** | Off | When Odoo sends a credit note, put the items back in WooCommerce stock. Leave it off when Odoo manages your stock (Odoo sends the right quantity anyway). |

![Order settings](/img/woocommerce-connector/store_orders_settings.png)

## Products tab

<StoreFieldsProducts platform="WooCommerce" />

## Product images

**Product Images** decides how Odoo sends images when you send products to the store:

| Choice | How it works | Needs |
|---|---|---|
| **Store downloads them from Odoo (Odoo must be reachable from the store)** (default) | Odoo sends a signed link to the image. WooCommerce downloads it into its media library. | The store must reach your Odoo address (**web.base.url**). |
| **Odoo uploads them to the WordPress media library (application password)** | Odoo uploads the image file itself, then attaches it to the product. | **WordPress User** and **Application Password** (see [Create the API key](./create-api-key.md#optional-application-password-for-image-uploads)). |
| **Do not send images** | Products are sent without images. | |

An image that did not change since the last send is not sent again (Odoo compares a checksum).

## Stock tab

<StoreFieldsStock platform="WooCommerce" />

![Stock settings](/img/woocommerce-connector/store_stock_settings.png)

More detail: [Send stock to the store](../products/stock-export.md).
