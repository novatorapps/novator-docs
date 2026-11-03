---
title: Bank Alfalah Payments
sidebar_label: Overview
sidebar_position: 1
description: Card payments for Odoo eCommerce, invoices and payment links through the Bank Alfalah Mastercard Payment Gateway, with verification and refunds.
---

<img className="app-icon" src="/img/bank-alfalah/icon.png" alt="" />

# Bank Alfalah Payments

Customers pay by card on the **Bank Alfalah hosted payment page** (Mastercard Payment Gateway Services, 3-D Secure included) from your Odoo shop, invoices and payment links. An order or invoice is marked paid **only after Odoo has checked the payment with the gateway**. Refunds go back from Odoo.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">PKR &amp; USD</span> <span className="version-pill">$99, one-time</span>

![Bank Alfalah at the shop checkout](/img/bank-alfalah/shop_payment.png)

- **Server-side verification**: forged return links and fake webhooks change nothing; amount and currency must match.
- **Orders confirm themselves**: a verified payment confirms the sales order and records the customer payment.
- **Full or partial refunds** from the customer payment.
- Card details never reach your Odoo.

[Bank Alfalah Payments on the Apps Store](https://apps.odoo.com/apps/modules/20.0/payment_bank_alfalah)

## Next steps

1. [Install the app](/getting-started/install).
2. [Set it up and take payments](./setup.md).
