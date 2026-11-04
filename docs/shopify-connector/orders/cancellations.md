---
title: Cancellations
sidebar_position: 6
description: Cancel in Odoo and the Shopify order is cancelled and restocked, optionally refunded; cancel in Shopify and the Odoo order follows.
---

import CancelExportCommon from '@site/src/partials/commerce/CancelExportCommon.mdx';

# Cancellations

## From Odoo to Shopify

<CancelExportCommon platform="Shopify" />

What Shopify receives:

| Shopify cancel option | Value |
|---|---|
| Reason | *Other* |
| Restock | Yes: the items go back to Shopify stock |
| Refund | The payment is refunded to the original payment method when **Refund the Payment When Cancelling** is on; otherwise no refund |
| Notify customer | **Send Tracking Note to the Customer** |
| Staff note | *Cancelled in Odoo (SH-1001)* |

Shopify cancels in the background: the order shows cancelled in Shopify a few seconds after the job. When Shopify says the order is already cancelled, the job ends with *Already cancelled in Shopify.* Shopify refuses some cancellations, for example of orders that are already fulfilled; the job then fails with Shopify's message.

## From Shopify to Odoo

With **Cancel Orders Cancelled in the Store** on:

| Odoo order | Result |
|---|---|
| Quotation, or confirmed and not delivered nor invoiced | Cancelled (draft invoices are cancelled too). Log: *Order SH-1001 cancelled (cancelled in the store).* |
| Already delivered or with a posted invoice | Not cancelled. Warning in the log and a to-do for the salesperson: create the return and the credit note by hand. |

Orders cancelled before their first import are not imported at all.

## Good to know

- The stock is restocked in Shopify; in Odoo, cancelling the order cancels its open deliveries.
- If you want the money back to the customer and the order cancelled, turn on **Refund the Payment When Cancelling**, or refund first in Shopify.
