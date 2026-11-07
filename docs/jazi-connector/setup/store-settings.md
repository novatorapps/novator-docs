---
title: Store settings
sidebar_position: 3
description: Every setting of a Jazi store - orders, Jazi customer, brand, fulfilment and AWB, products, stock and prices.
---

import StoreFieldsOrders, {toc as ordersToc} from '@site/src/partials/commerce/StoreFieldsOrders.mdx';
import PaymentMethods, {toc as payToc} from '@site/src/partials/commerce/PaymentMethods.mdx';

# Store settings

Open the store in **Online Stores > Stores**. The settings below are on its tabs.

## Orders tab

![Orders tab of a Jazi store](/img/jazi-connector/store_orders_settings.png)

<StoreFieldsOrders platform="Jazi" prefix="JZ-" img="/img/jazi-connector" />

Jazi adds these fields:

| Field | Default | Use |
|---|---|---|
| **Jazi Customer** | Empty | Customer of the Odoo sales orders. Jazi buys from you, so its orders carry no buyer details. Empty: a company *Jazi* is created on the first order. |
| **Default Brand** | Empty | Brand for products that have none, for example *Unbranded*. |
| **Google Translate API Key** | Empty | For **Translate to Arabic**. See [Jazi products](../products/jazi-products.md#translate-to-arabic). Administrators only. |
| **Pickup Address ID** | Empty | Jazi pickup address used for fulfilment. Empty: the first pickup address of the order. |
| **Generate AWB After Fulfilment** | On | After the delivery is sent to Jazi, ask Jazi for the AWB and mark the order Ready to Ship. The AWB number is saved on the delivery. |

## Products tab

![Products tab](/img/jazi-connector/store_products_settings.png)

| Field | Use |
|---|---|
| **Match Products By** | How a Jazi seller SKU finds the Odoo product: internal reference, barcode, or one then the other. The SKU sent for new Jazi products follows the same choice. Stores that work with barcodes choose *Barcode*. |
| **Send Prices Automatically** | Send prices that changed, on the store's schedule. Daily (1440 minutes) suits Jazi review. |
| **Sale Price Pricelist** | A lower price from this pricelist is sent as Jazi's special price while it applies. |

## Stock tab

![Stock tab](/img/jazi-connector/store_stock_settings.png)

The warehouses whose stock is added up and sent to Jazi, the quantity (free, on hand or forecasted) and a buffer. See [Stock and prices](../products/stock-prices.md).

## Schedules and Alerts tabs

See [Schedules](../operations/schedules.md) and [Alerts](../operations/alerts.md).

## Payment methods

Jazi orders come in with the payment method *Jazi*. Its workflow decides what Odoo does with each order:

<PaymentMethods platform="Jazi" img="/img/jazi-connector" />
