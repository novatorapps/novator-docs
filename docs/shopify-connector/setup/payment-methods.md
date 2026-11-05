---
title: Payment methods and workflows
sidebar_position: 6
description: What Odoo does with each imported order, per Shopify payment gateway, and how Shopify gateway names become payment methods.
---

import PaymentMethods from '@site/src/partials/commerce/PaymentMethods.mdx';

# Payment methods and workflows

Each imported order carries the Shopify payment gateway that was used. In Odoo every gateway is a **payment method** of the store, and the payment method decides what happens next: confirm, deliver, invoice, register the payment.

## Which gateway an order gets

Odoo takes the first successful (or pending) *sale*, *capture* or *authorization* transaction of the order and uses its gateway. Without such a transaction it uses the first name in the order's payment gateway list, and otherwise `manual`.

| Customer paid with | Payment method code in Odoo (examples) |
|---|---|
| Shopify Payments (cards, Shop Pay, Apple Pay) | `shopify_payments` |
| PayPal | `paypal` |
| Manual methods you created in Shopify | the method name, for example `Cash on Delivery (COD)` or `Bank Deposit` |
| Orders created by staff and marked paid | `manual` |
| Gift card | `gift_card` |
| Test orders on a development store | `bogus` |

A new code creates a payment method automatically, using the store's **Default Payment Journal**, and the log says *New payment method "..." added. Check its settings.* Open **Online Stores > Configuration > Payment Methods** after the first orders.

## Payment method settings and workflow

<PaymentMethods platform="Shopify" img="/img/shopify-connector" />

## Recommended setups for Shopify

| Gateway | Confirm Order | Validate Delivery | Create and Post Invoice | Register Payment When Paid, Payment Journal |
|---|---|---|---|---|
| `shopify_payments` | On | Off | On | On, a *Shopify Payments* bank journal. [Payouts](../orders/payouts.md) then clear it. |
| `paypal` | On | Off | On | On, a *PayPal* bank journal. |
| `Cash on Delivery (COD)` | On | Off | On | Off. Register the payment when the courier pays you. |
| `Bank Deposit` | On | Off | On | Off, or on once your bank shows the money. |
| `manual` | On | Off | On | Your choice. |

Unpaid orders (cash on delivery, bank deposit) are confirmed only when **Unpaid: Confirm** is on for their payment method. Their invoice is created when Shopify marks them paid, on the next update of the order. See [Order status](../orders/order-status.md).
