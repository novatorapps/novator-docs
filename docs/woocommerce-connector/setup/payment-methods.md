---
title: Payment methods and order workflows
sidebar_label: Payment methods
sidebar_position: 5
description: "Decide per WooCommerce payment method what Odoo does with an order: confirm, deliver, invoice and register the payment."
---

import PaymentMethods, {toc as pmToc} from '@site/src/partials/commerce/PaymentMethods.mdx';

export const toc = [
  {value: 'Payment methods in WooCommerce', id: 'payment-methods-in-woocommerce', level: 2},
  {value: 'How the workflow works', id: 'how-the-workflow-works', level: 2},
  ...pmToc,
];

# Payment methods and order workflows

## Payment methods in WooCommerce

Each order carries its payment method code (`payment_method`) and title. The first order with a new method creates the payment method in **Online Stores > Configuration > Payment Methods**, with the store's **Default Payment Journal** and a log line *New payment method ... added. Check its settings.*

Common WooCommerce codes:

| Code | Gateway | Usually paid at checkout | Typical setup |
|---|---|---|---|
| `stripe` | Stripe (card) | Yes | Confirm, invoice, register payment in a *Stripe* journal |
| `ppcp-gateway` | PayPal Payments | Yes | Confirm, invoice, register payment in a *PayPal* journal |
| `woocommerce_payments` | WooPayments | Yes | Confirm, invoice, register payment |
| `bacs` | Direct bank transfer | No (order *On hold*) | Confirm only; payment when the money arrives |
| `cheque` | Check payments | No (order *On hold*) | Confirm only |
| `cod` | Cash on delivery | No (order *Processing*, unpaid) | Confirm; invoice and payment when the courier pays |

An order is *paid* for Odoo when WooCommerce has a payment date on it (`date_paid`). Bank transfer and cash on delivery orders get it when you mark them paid or completed in WooCommerce; Odoo then invoices and registers the payment on the next update.

## How the workflow works

<PaymentMethods platform="WooCommerce" img="/img/woocommerce-connector" />
