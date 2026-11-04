---
title: Refunds from WooCommerce
sidebar_position: 7
description: How refunds made in WooCommerce become credit notes in Odoo.
---

import RefundImport, {toc as riToc} from '@site/src/partials/commerce/RefundImport.mdx';

export const toc = [
  {value: 'What Odoo reads from a WooCommerce refund', id: 'what-odoo-reads-from-a-woocommerce-refund', level: 2},
  {value: 'From refund to credit note', id: 'from-refund-to-credit-note', level: 2},
  ...riToc,
];

# Refunds from WooCommerce

You refund in WooCommerce (**Orders > the order > Refund**). Odoo turns each refund into a credit note.

## What Odoo reads from a WooCommerce refund

When the order is updated, Odoo reads each new refund of the order (`orders/<id>/refunds/<id>`):

| WooCommerce refund | Odoo credit note |
|---|---|
| Refunded line items (quantity, total, taxes) | One credit note line per item, on the original order line, with its taxes |
| Refund amount | Total of the credit note; anything not covered by item lines (shipping, a manual amount) becomes one line with the refund reason |
| Reason | Line label and **Reason** on the refund |
| *Refunded payment* (money returned through the gateway) | The refund payment is registered, when the payment method registers payments |

The refund is listed on the order's **Online Store** tab and in **Online Stores > Sales > Refunds**.

## From refund to credit note

<RefundImport platform="WooCommerce" />

## FAQ

**I refunded in WooCommerce but no credit note appeared.** The order had no posted invoice yet: the refund is recorded on the order only. Or **Import Refunds as Credit Notes** is off.

**The order status became Refunded.** Odoo keeps the sales order confirmed and adds the credit notes. A full refund does not cancel the Odoo order.
