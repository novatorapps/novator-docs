---
title: Import orders
sidebar_position: 1
description: How FBM and FBA orders come from Amazon into Odoo - timing, statuses, buyer and address, lines, VAT and what Odoo does next.
---

import ExtraLines, {toc as linesToc} from '@site/src/partials/commerce/ExtraLines.mdx';

export const toc = [{value: 'When orders arrive', id: 'when-orders-arrive', level: 2}, {value: 'Amazon statuses', id: 'amazon-statuses', level: 2}, {value: 'What an order contains', id: 'what-an-order-contains', level: 2}, ...linesToc];

# Import orders

![Amazon orders in Odoo](/img/amazon-connector/store_orders.png)

## When orders arrive

- Every 15 minutes Odoo asks Amazon for orders created or changed since the last check, on every active marketplace of the store. **Check Orders Now** on the store (or **Sync Orders** on its card) checks at once.
- The first check starts from **Import Orders From** on the **Orders** tab. To import older orders, set an earlier date and click **Check Orders Now**.
- Each order becomes a sales order named with the store prefix and the Amazon order number, for example **AMZ-403-4037056-8259392**, and keeps the date the buyer ordered.

## Amazon statuses

| Amazon status | In Odoo |
|---|---|
| *Pending* (payment not confirmed) | Waits, or imported as a quotation with **Import Pending Orders as Quotations** |
| *Unshipped*, *Partially shipped* (FBM) | Confirmed order, delivery ready in your warehouse |
| *Shipped* (FBM) | Invoiced and paid (with the default Amazon FBM payment method) |
| *Shipped* (FBA) | Delivered from the FBA warehouse and invoiced |
| *Canceled* | Cancelled in Odoo, see [Cancellations](./cancellations.md) |

Later changes (status, cancellation) update the same Odoo order.

## What an order contains

![Amazon order with VAT](/img/amazon-connector/order_lines.png)

- **Customer**: the buyer's name and Amazon's anonymised e-mail (for example `abc123@marketplace.amazon.sa`). Each buyer e-mail is one customer, so repeat buyers are found again.
- **Delivery address** from the order (FBM orders, with the restricted role *Direct-to-Consumer Shipping*). Removed after the days set in **Remove Buyer Addresses After**.
- **Product lines** by seller SKU, matched with [your listings](../products/listings.md). Unknown SKUs: with **Import Unknown Products With Orders** (on by default) Odoo creates the product from the Amazon listing; with it off, the order waits with *Products not found in Odoo*.
- **Shipping, gift wrap and promotions** as separate lines, with their VAT.
- **VAT** mapped to your Odoo taxes, see [Taxes and VAT](../setup/taxes.md). Odoo compares its total with Amazon and flags orders that differ.
- The **Online Store** tab shows the Amazon order number and status, the marketplace, FBM or FBA, and whether the shipment was sent.

![Amazon details of an order](/img/amazon-connector/order_store_tab.png)

<ExtraLines platform="Amazon" />
