---
title: Store settings reference
sidebar_position: 3
description: Every field of a Shopify store in Odoo, tab by tab, with defaults and what each one changes.
---

import StoreFieldsOrders from '@site/src/partials/commerce/StoreFieldsOrders.mdx';
import StoreFieldsProducts from '@site/src/partials/commerce/StoreFieldsProducts.mdx';
import StoreFieldsStock from '@site/src/partials/commerce/StoreFieldsStock.mdx';

# Store settings reference

Open **Online Stores > Stores** and click the store. This page explains every field, tab by tab. Fields that only exist for Shopify stores are marked *Shopify*.

## Header and buttons

| Button | What it does |
|---|---|
| **Authorize in Shopify** | Only with *Install link*: opens Shopify to approve the app. |
| **Test Connection** | Gets a token, reads the shop, locations and Markets, sets **Connected**. |
| **Set Up Webhooks** | Creates the webhook subscriptions in Shopify. See [Webhooks](./webhooks.md). |
| **Sync...** | Bulk operations in the background. See [Sync With Store](../operations/sync-wizard.md). |
| **Check Orders Now** | Queues the order check at once instead of waiting for the next 15 minutes. |
| **Send All Stock** | Sends the quantity of every linked product to Shopify. |
| **Use in This Database** | Only in a copy of the database. See [Test copies](../operations/test-databases.md). |

The smart buttons show the store's **Orders**, **Products**, **Customers**, **Pending Jobs**, **Log** and, when payouts are on, **Payouts**.

## Connection tab

Only Online Stores administrators see this tab.

| Field | Default | What it does |
|---|---|---|
| **Shop Address** *Shopify* | | The `.myshopify.com` address. Odoo cleans what you paste (removes `https://` and paths, adds `.myshopify.com` to a bare name). |
| **Connect With** *Shopify* | App in my Shopify organization | How Odoo gets its access token. See [Connect the store](./connect-store.md#the-three-ways-to-connect). |
| **Client ID** *Shopify* | | Needed unless you connect with an access token. |
| **Client Secret** *Shopify* | | Always needed. Also checks webhook signatures. |
| **Access Token** *Shopify* | | Only shown with *Admin API access token*. |
| **API Version** *Shopify* | 2026-10 | API version of every request. |
| **Shop Name**, **Shopify Plan** *Shopify* | | Read by **Test Connection**. |

### Webhooks group

| Field | Default | What it does |
|---|---|---|
| **Status** | Not set up | *N active* after **Set Up Webhooks**. |
| **Import New Products Instantly** *Shopify* | Off | Also subscribe to new products: a product created in Shopify is imported about 30 seconds later. Click **Set Up Webhooks** again after changing it. |
| **Remove Webhooks** | | Deletes the subscriptions Odoo created for this store. |

## Orders tab

<StoreFieldsOrders platform="Shopify" img="/img/shopify-connector" prefix="SH-" />

### Shopify fields on the Orders tab

| Field | Default | What it does |
|---|---|---|
| **Refund the Payment When Cancelling** *Shopify* | Off | Under **Cancel in the Store When Cancelled in Odoo**. When Odoo cancels the order in Shopify, Shopify also refunds the payment to the original payment method. Off: the order is cancelled without a refund. |
| **Refund the Money Through Shopify** *Shopify* | Off | Under **Send Credit Notes to the Store as Refunds**. On: the Shopify refund moves the money back through the original payment. Off: Shopify only records which items were refunded. See [Refunds](../orders/refunds.md). |
| **Restock Refunded Items in Shopify** *Shopify* | Off | Refunded items are put back in Shopify stock (restock type *Return*). Off: no restock in Shopify. Odoo stock is not changed by this setting. |

## Products tab

![The Products tab of a Shopify store](/img/shopify-connector/store_products_settings.png)

<StoreFieldsProducts platform="Shopify" />

### Shopify fields on the Products tab

| Field | Default | What it does |
|---|---|---|
| **Product Images** *Shopify* | Odoo uploads them to Shopify | How the main image and variant images of products sent from Odoo reach Shopify. *Odoo uploads them to Shopify*: Odoo uploads the file itself (works when Odoo is not public). *Shopify downloads them from Odoo*: Shopify fetches a signed link (Odoo must be reachable from the internet). *Do not send images*. |
| **Status of New Products** *Shopify* | Draft | Status of a product created in Shopify from Odoo when you send it as *Draft*. Choose *Active* to publish new products directly. Sending with *Published* always makes the product Active. See [Send products](../products/export-products.md). |

## Stock tab

<StoreFieldsStock platform="Shopify" />

### Shopify locations

Below the stock fields, the **Shopify locations** list shows every active location read from Shopify, with **Fulfills Online Orders**, **Stock From Warehouses**, **Send Stock** and **Active**. **Read Locations and Markets Again** reads them again. How quantities go to each location is explained in [Locations](./locations.md).

## Markets tab *Shopify*

| Column | What it does |
|---|---|
| **Name**, **Status**, **Currency** | Read from Shopify. |
| **Shopify Price List** | The price list of the market's catalog. Empty: the market has no catalog with a price list, so Odoo cannot send fixed prices to it. |
| **Odoo Pricelist** | The prices sent to this market. Must be in the market currency. Empty: Shopify keeps converting your store price. |
| **Compare-at Pricelist** | Optional. When it gives a higher price, that price is sent as compare-at (crossed out). |
| **Send Prices** | Switch off to stop sending to this market. |
| **Last Sent** | When prices were last sent. |

**Send Market Prices Now** sends all linked products to every market with a pricelist. See [Markets](../products/markets.md).

## Payouts tab *Shopify*

| Field | Default | What it does |
|---|---|---|
| **Import Shopify Payments Payouts** | Off | Import paid payouts once a day and on demand. |
| **Payout Journal** | | Required when imports are on. Journal of the payout entries, usually the bank journal the payouts reach. |
| **Fees Account** | | Required when imports are on. Expense account for Shopify Payments fees. |
| **Payments Clearing Account** | Empty | Optional. Where order payments wait for the payout. Empty: the account of each order's own payment. |
| **Last Payout Check** | | Read only. The next import reads payouts issued on or after this date. Odoo sets it two days before the last run, so a payout that Shopify marks paid late is not missed. |

**Import Payouts Now** queues the import at once. See [Payouts](../orders/payouts.md).
