---
title: Cancellations
sidebar_position: 6
description: Cancel orders in WooCommerce from Odoo, and what Odoo does when an order is cancelled in WooCommerce.
---

import CancelExportCommon from '@site/src/partials/commerce/CancelExportCommon.mdx';

# Cancellations

Cancellations go both ways: an order cancelled in WooCommerce is cancelled in Odoo, and an order cancelled in Odoo is cancelled in WooCommerce.

## Cancelled in WooCommerce

When an imported order changes to **Cancelled** in WooCommerce, the next update cancels it in Odoo, if **Cancel Orders Cancelled in the Store** is on (Orders tab):

- **Not delivered and not invoiced**: draft invoices are cancelled, then the order. Nothing is sent back to WooCommerce.
- **Delivered or invoiced**: Odoo does not cancel it. It logs a warning and creates a to-do *Cancelled in the store* for the salesperson: return the goods and make a credit note yourself.

An order that is already *Cancelled* when Odoo first sees it is not imported.

## Cancelled in Odoo

<CancelExportCommon platform="WooCommerce" />

### What changes in WooCommerce

- The order status becomes **Cancelled**. WooCommerce sends its own *Cancelled order* email (if enabled) and puts the stock of the items back when it manages stock.
- No money is refunded. Refund the payment in WooCommerce or post a credit note in Odoo ([Refunds from Odoo](./refunds-from-odoo.md)).

## Good to know

- Cancelling a quotation that was never confirmed also cancels the WooCommerce order.
- To cancel only in Odoo, turn **Cancel in the Store When Cancelled in Odoo** off first, or cancel in a test copy.
- A job that finds the order no longer cancelled in Odoo (you set it back to quotation) sends nothing.

## FAQ

**I cancelled in WooCommerce, but the Odoo order is still confirmed.** It was delivered or invoiced. Open the to-do on the order and handle the return and credit note.
