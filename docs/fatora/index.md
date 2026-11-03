---
title: Fatora Payments
sidebar_label: Overview
sidebar_position: 1
description: Card payments in Qatar, Saudi Arabia and the GCC through the Fatora hosted checkout, with verification and refunds.
---

<img className="app-icon" src="/img/fatora/icon.png" alt="" />

# Fatora Payments

Customers pay invoices, quotations and eCommerce orders on the **Fatora hosted checkout**. When they come back, Odoo asks Fatora to confirm the status, amount, currency and mode **before** the payment is posted and the invoice is marked paid. Full refunds go back to the card from Odoo. Free and open source.

<span className="version-pill">Odoo 18.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">Free (AGPL-3)</span>

![Paying an invoice with Fatora](/img/fatora/portal_pay_with_fatora.png)

- **No fake "paid" links**: returns and webhooks are checked with Fatora.
- **Invoices close themselves**: a confirmed payment creates the customer payment and reconciles the invoice.
- **Refund without logging in to Fatora**.
- QAR, SAR, AED, KWD, BHD, OMR, USD, EUR, GBP and more; checkout in English or Arabic.

[Fatora Payments on the Apps Store](https://apps.odoo.com/apps/modules/18.0/payment_fatora)

## Next steps

1. [Install the app](/getting-started/install).
2. [Set it up and take payments](./setup.md).
