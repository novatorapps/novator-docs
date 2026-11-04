---
title: Refunds from Odoo
sidebar_position: 8
description: Post a credit note in Odoo and have WooCommerce record the refund, optionally refunding the payment.
---

import RefundExportCommon from '@site/src/partials/commerce/RefundExportCommon.mdx';

# Refunds from Odoo

Refund in Odoo with a credit note, and WooCommerce records the refund on the order.

## Before you start

- **Send Credit Notes to the Store as Refunds** is on (Orders tab).
- Decide on the two WooCommerce options on the Orders tab:
  - **Refund Through the Payment Gateway**: on, WooCommerce asks the payment gateway (Stripe, PayPal, ...) to return the money. Only gateways that support refunds do this; others record the refund only.
  - **Restock in WooCommerce on Refund**: on, WooCommerce adds the refunded items back to its stock. Leave it off when Odoo manages stock: Odoo sends the right quantity after the return.

## Steps

1. Open the invoice of the order and click **Credit Note** (or **Reverse**).
2. Adjust the lines and amounts to what you refund, and enter a reason.
3. Post the credit note.

<RefundExportCommon platform="WooCommerce" />

## What changes in WooCommerce

- A refund on the order with the credit note total (tax included) and the credit note reference or number as reason.
- With **Refund Through the Payment Gateway**, the money goes back to the customer through the gateway.
- When the refunds reach the order total, WooCommerce sets the order to **Refunded**.

## Good to know

- WooCommerce receives the amount only, not the individual lines.
- The refund is linked to the credit note in **Online Stores > Sales > Refunds** (direction *Sent to the store*). It is never imported back as a second credit note.
- A credit note that is cancelled or reset to draft after sending does not remove the WooCommerce refund. Correct it in WooCommerce.

## FAQ

**The job fails with an invalid refund amount.** WooCommerce refuses refunds above what is left to refund on the order. Check earlier refunds of the order in WooCommerce.

**The gateway refund did not happen.** The gateway does not support API refunds, or **Refund Through the Payment Gateway** is off. Refund in the gateway's dashboard.
