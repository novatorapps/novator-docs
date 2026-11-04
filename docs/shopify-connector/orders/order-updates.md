---
title: Changes after import
sidebar_position: 4
description: What happens in Odoo when a Shopify order is paid, edited, fulfilled, cancelled or refunded after it was imported.
---

import OrderUpdates from '@site/src/partials/commerce/OrderUpdates.mdx';

# Changes after import

An order keeps syncing after its first import. Shopify sends a webhook (or the 15-minute check finds the change), Odoo reads the order again and applies what changed.

<OrderUpdates platform="Shopify" />

## Shopify examples

| In Shopify | In Odoo |
|---|---|
| You click **Mark as paid** on a cash on delivery order | **Paid in the Store** is set; invoice and payment follow the payment method. |
| Payment captured on an authorized order | Status *processing* to *paid*; invoice and payment. |
| You edit the order before Odoo delivered or invoiced it | Added items become new lines. Removed items and lowered quantities are **not** applied in version 1.0 (Odoo reads the ordered quantity): change them in Odoo by hand. |
| You edit the order after Odoo delivered or invoiced it | Lines are not changed; adjust in Odoo by hand. |
| You change the shipping address | The delivery address of the order and of its open deliveries is updated. |
| You fulfill in Shopify | Status becomes *completed* when paid. Odoo does not validate its delivery from that. |
| You refund | A credit note ([Refunds](./refunds.md)). |
| You cancel | The Odoo order is cancelled, or a to-do is created when it is already delivered or invoiced ([Cancellations](./cancellations.md)). |
