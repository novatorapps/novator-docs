---
title: Fulfillment and tracking
sidebar_position: 5
description: When you deliver in Odoo, the Shopify order is fulfilled with the delivered quantities and the tracking number.
---

import FulfillmentCommon from '@site/src/partials/commerce/FulfillmentCommon.mdx';

# Fulfillment and tracking

Ship from Odoo, and Shopify shows the order as fulfilled, with the tracking number, and can email the customer.

:::note Before you start
- **Send Deliveries to the Store** is on (Orders tab, **Status Changes**). It is on by default.
- For tracking numbers, install Odoo's **delivery** app (it adds **Tracking Reference** and carriers to deliveries), or a shipping connector that fills the tracking reference.
- **Send Tracking Note to the Customer** decides whether Shopify emails the customer.
:::

## Method 1: automatic

<FulfillmentCommon platform="Shopify" />

## Method 2: by hand

Open the order and click **Send Delivery to Store**. Odoo fulfills every quantity still open in Shopify.

## What is sent to Shopify

Shopify splits each order into **fulfillment orders**, one per location that will ship. Odoo:

1. Reads the open fulfillment orders of the order (status open, in progress or scheduled).
2. Works out the quantities to fulfill:
   - After a delivery was validated: the quantities of that delivery, per order line, up to what is still open in Shopify.
   - By hand (no delivery given): everything still open.
3. Creates one Shopify fulfillment for these quantities, over all fulfillment orders, with:

| Shopify field | From Odoo |
|---|---|
| Tracking number | **Tracking Reference** of the delivery |
| Tracking company | The delivery's **Carrier** name |
| Tracking URL | The carrier's tracking link, when the carrier has one |
| Notify customer | **Send Tracking Note to the Customer** |

When the order is fully delivered in Odoo, **Delivery Sent to Store** is set.

## Partial deliveries

Each validated delivery (including backorders) sends its own quantities, so Shopify shows *partially fulfilled* until the last one. A delivery that only contains items Shopify already fulfilled sends nothing, and the job says *Nothing left to fulfill in Shopify.*

## Good to know

- Odoo fulfills what Shopify assigned, whatever Shopify location the fulfillment order belongs to.
- Several tracking numbers: the last delivery with a tracking reference is used.
- Returns (deliveries back to stock) are not sent to Shopify; refund them with a credit note.
- A test copy of the database never sends fulfillments.

## FAQ

**The order shows fulfilled in Shopify but not delivered in Odoo.** Someone fulfilled it in Shopify. Odoo does not validate its own delivery from Shopify; validate it in Odoo, the job then finds nothing left and stops.

**No tracking number in Shopify.** The delivery had no **Tracking Reference** when it was validated. Without the delivery app the field does not exist.
