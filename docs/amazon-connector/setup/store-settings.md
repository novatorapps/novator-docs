---
title: Store settings
sidebar_position: 3
description: Every setting of an Amazon store - orders, FBM and FBA, marketplaces, stock, prices, settlements and buyer data.
---

import StoreFieldsOrders, {toc as ordersToc} from '@site/src/partials/commerce/StoreFieldsOrders.mdx';
import PaymentMethods, {toc as payToc} from '@site/src/partials/commerce/PaymentMethods.mdx';

# Store settings

Open the store in **Online Stores > Stores**. The settings below are on its tabs.

## Orders tab

<StoreFieldsOrders platform="Amazon" prefix="AMZ-" img="/img/amazon-connector" />

Amazon adds these fields:

| Field | Use |
|---|---|
| **Import FBM Orders** | Orders you ship yourself. On by default. |
| **Import FBA Orders** | Orders Amazon ships from its warehouses. On by default. |
| **Import Pending Orders as Quotations** | Amazon lists an order as *Pending* until the payment is confirmed, and gives no address yet. Off (default): Odoo waits and imports the order once Amazon confirms it. On: the order comes in as a quotation and is confirmed later. |
| **Amazon Taxes** | *Taxes charged by Amazon on the order* (default): the VAT on each order is mapped to Odoo taxes, see [Taxes](./taxes.md). *No taxes*: for marketplaces where Amazon collects and pays the tax itself (marketplace facilitator, for example most US states), the order comes in without tax. |

## Marketplaces tab

![Amazon marketplaces](/img/amazon-connector/store_marketplaces.png)

One line per marketplace of the seller account, read by **Test Connection**.

| Column | Use |
|---|---|
| **Participating** | Amazon says the account sells on this marketplace. |
| **Pricelist** | Prices sent to this marketplace and used for its orders, in the marketplace currency. Empty: the store pricelist. |
| **Send Prices** | Send prices to this marketplace. |
| **Send FBM Stock** | Send FBM quantities to this marketplace. |
| **Active** | Untick to leave this marketplace out of Odoo: no orders, stock or prices. |

## Stock tab

The warehouses whose stock is sent for FBM SKUs, the quantity (free, on hand or forecasted) and a buffer. FBA SKUs are never sent: Amazon holds that stock. See [Stock and prices](../products/stock-prices.md).

## Fulfillment tab

![FBA and FBM settings](/img/amazon-connector/store_fulfillment.png)

| Section | Fields |
|---|---|
| **FBA (Amazon ships)** | **FBA Warehouse** and **FBA Unsellable Location** (**Create FBA Warehouse** makes both), **Read FBA Stock**, **Import FBA Customer Returns**. See [FBA](../products/fba.md). |
| **FBM (you ship)** | Last refunds check, **Import Refunds Now**, **Check Feed Results Now**. Shipments are sent when you validate a delivery, see [Shipping FBM orders](../orders/fbm-shipping.md). |
| **Buyer data** | **Remove Buyer Addresses After (days)**: delivery addresses of Amazon orders are cleared this many days after delivery. 0 keeps them. Amazon asks you to keep buyer data only as long as needed; 30 days is a common choice. |
| **Coming from Odoo's Amazon connector?** | **Take Over Orders and SKUs**, see [Switch from Odoo's connector](./switch-from-odoo.md). |

## Settlements tab

See [Settlements](../orders/settlements.md).

## Payment methods

Odoo creates two payment methods for each Amazon store: **Amazon FBM** and **Amazon FBA**. Their settings decide what Odoo does after importing an order.

<PaymentMethods platform="Amazon" img="/img/amazon-connector" />

The defaults fit most sellers: FBA orders are delivered from the FBA warehouse and invoiced at once; FBM orders are confirmed, then invoiced and paid when Amazon reports them shipped.
