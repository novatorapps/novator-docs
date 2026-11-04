---
title: Order status
sidebar_position: 3
description: What Odoo does for each WooCommerce order status, on the first import and on later changes.
---

# Order status

The WooCommerce status of each order is kept on its **Online Store** tab (**Store Status**). Together with the payment method settings it decides what Odoo does.

| WooCommerce status | First import | Later change to this status |
|---|---|---|
| **Pending payment** | Skipped; with **Import Unpaid (Pending Payment) Orders**: quotation | Quotation stays a quotation |
| **Processing** | Confirmed, then the payment method workflow | Confirm (if still a quotation), then workflow |
| **On hold** (bank transfer, check) | Confirmed, then workflow | Same |
| **Completed** | Confirmed, then workflow; the invoice is created even if unpaid | Invoice when not invoiced yet |
| **Cancelled** | Skipped | Odoo order cancelled (see [Cancellations](./cancel.md)) |
| **Refunded** | Skipped | No status action; the refunds become credit notes ([Refunds from WooCommerce](./refunds.md)) |
| **Failed** | Skipped | No action |
| **Draft** (`checkout-draft`), **Trash** | Never imported | |

## Paid and unpaid

**Paid** comes from the WooCommerce payment date, not from the status. A *Processing* cash on delivery order is not paid; Odoo confirms it, and invoices and registers the payment only when WooCommerce gets a payment date (for example when you mark it *Completed*) and the payment method says so.

## Custom statuses

Statuses added by plugins (for example *Shipped* or *Awaiting pickup*) are not imported as new orders. When an imported order changes to such a status, Odoo updates the **Store Status** and applies the other changes of the order, but does not confirm or cancel it because of the status.

## Good to know

- Each status change is logged: *Order WC-1046: store status processing -> completed.*
- When Odoo completes an order after delivery, the Odoo order shows **Store Status** *completed* too.
