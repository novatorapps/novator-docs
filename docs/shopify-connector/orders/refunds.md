---
title: Refunds
sidebar_position: 7
description: Shopify refunds become Odoo credit notes, and Odoo credit notes become Shopify refunds, with items, restock and money.
---

import RefundImport from '@site/src/partials/commerce/RefundImport.mdx';
import RefundExportCommon from '@site/src/partials/commerce/RefundExportCommon.mdx';

# Refunds

![Refunds of the store](/img/shopify-connector/refund_list.png)

All refunds, in both directions, are listed in **Online Stores > Sales > Refunds**, and per order on the **Online Store** tab.

## From Shopify to Odoo

With **Import Refunds as Credit Notes** on, every refund made in Shopify that returned money becomes a credit note when the order is next updated (webhook or 15-minute check).

What Odoo reads from the Shopify refund:

| Shopify refund | Credit note |
|---|---|
| Refunded line items: quantity and amount before tax | One line per item, on the original product, with the taxes of the original order line |
| Tax of each refunded item | Included in the credit note through those taxes |
| Refunded shipping, adjustments, amounts not tied to items | One extra line for the rest of the refunded amount, without tax |
| Note | Line label of the extra line |
| A successful refund transaction | The refund is registered as paid when the payment method registers payments |

<RefundImport platform="Shopify" />

:::note Refunds without money
Refunds of zero (items marked refunded or restocked without returning money) are skipped: they do not create a credit note.
:::

## From Odoo to Shopify

<RefundExportCommon platform="Shopify" />

### What Shopify receives

1. **Items**: every product line of the credit note that belongs to a Shopify order line, with its quantity (rounded to whole units). Shipping and discount lines are not sent as items.
2. **Restock**: with **Restock Refunded Items in Shopify** on, the items go back to Shopify stock (*Return*); otherwise *No restock*.
3. **Money**: with **Refund the Money Through Shopify** on, Odoo refunds the credit note total through the order's captured payment (the capture, else the sale transaction), with the same gateway. Off: Shopify only records which items were refunded, and you refund the money yourself.
4. **Notify customer**: **Send Tracking Note to the Customer**.
5. Note: the credit note reference.

Each credit note has its own idempotency key, so if a job is retried after a network error Shopify does not refund twice.

### Cases

| Credit note | **Refund the Money Through Shopify** | Result |
|---|---|---|
| Product lines | On, order has a captured payment | Items and money refunded. |
| Product lines | On, order has no captured payment (for example cash on delivery not yet paid) | Items recorded, no money; warning *only the refunded items are recorded*. |
| Product lines | Off | Items recorded, no money. |
| Only shipping or other lines | On | Money refunded, no items. |
| Only shipping or other lines | Off | Not sent: *Credit note ... has no order products and no Shopify payment to refund. Refund it in Shopify instead.* |

## Good to know

- Partial quantities (0.5 of a unit) are rounded for Shopify.
- A credit note is sent once. Credit notes made from Shopify refunds are never sent back.
- Returns in Shopify (the returns feature) are not read in version 1.0; their refunds are.
