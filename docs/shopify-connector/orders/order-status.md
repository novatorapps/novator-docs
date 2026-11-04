---
title: Order status
sidebar_position: 2
description: How each Shopify payment and fulfillment status maps to an Odoo status, including cash on delivery and other unpaid orders.
---

# Order status

Shopify has a payment status (financial status), a fulfillment status and a cancelled date. Odoo turns them into one store status, shown on the order's **Online Store** tab, which decides what Odoo does.

![The Online Store tab of an order](/img/shopify-connector/order_store_tab.png)

## Mapping

| Shopify | Store status in Odoo | Paid | What Odoo does |
|---|---|---|---|
| Cancelled (any payment status) | *cancelled* | | Cancels the Odoo order if it is not delivered or invoiced yet; otherwise creates a to-do. Not imported when cancelled before the first import. |
| Paid, partially refunded, refunded; fulfilled | *completed* | Yes | Confirm, invoice, register payment (per payment method). |
| Paid, partially refunded, refunded; not (fully) fulfilled | *paid* | Yes | Confirm, invoice, register payment (per payment method). |
| Authorized (captured later) | *processing* | No | Confirm. Invoice and payment follow when Shopify marks it paid. |
| Partially paid | *processing* | No | Confirm. |
| Pending, **Confirm Unpaid Orders** on | *on-hold* | No | Confirm, so it can be shipped. |
| Pending, **Confirm Unpaid Orders** off | *pending* | No | Stays a quotation until paid. |
| Voided, expired | *voided*, *expired* | No | Not imported. Already imported orders are left as they are. |

**Paid** is the **Paid in the Store** box of the order. Once set, it stays set even if Shopify later refunds the order.

## Cash on delivery and other unpaid orders

Shopify marks orders paid with a manual method (cash on delivery, bank deposit, money order) as *pending* until you mark them paid in Shopify.

![A cash on delivery order](/img/shopify-connector/order_cod_pending.png)

| Step | What happens |
|---|---|
| Order placed | Imported with status *on-hold* and confirmed (with **Confirm Unpaid Orders** on). The warehouse can deliver it. No invoice yet. |
| You deliver it in Odoo | Fulfilled in Shopify with the tracking number. |
| The courier pays, you click **Mark as paid** in Shopify | Shopify sends an update; Odoo sets **Paid in the Store**, creates and posts the invoice, and registers the payment if the payment method says so. |

If you prefer to register cash yourself, turn off **Register Payment When Paid** on that payment method and register the payment in Odoo when the money arrives.

## Good to know

- The store status is updated on every change in Shopify and logged (*Order SH-1001: store status paid -> completed*).
- *completed* only adds the invoice for payment methods that invoice; it does not validate the Odoo delivery. Use **Validate Delivery** on the payment method for that.
- Shopify's *refunded* status does not cancel the Odoo order: the refunds become credit notes.
