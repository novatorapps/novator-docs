---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Bank Alfalah Payments.
---

# FAQ and troubleshooting

### Bank Alfalah does not appear at checkout

Check that the provider is **Published**, not archived, and allowed for the currency of the order (PKR or USD) and the company. On Odoo 17 to 19 its state must be **Enabled** or **Test**; on Odoo 20 switch on **Live** for real payments.

### The customer paid but the order is still pending

The gateway may still be authenticating the card. The webhook confirms it as soon as the bank does; check that the webhook URL is set in the merchant portal.

### Payments are not confirmed by the webhook

The server log shows the webhook was refused because of a wrong notification secret. The **Webhook Notification Secret** in Odoo must match the one in the merchant portal.

### Can I take payments in other currencies?

The gateway accepts what your merchant account is set up for: PKR and USD.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the transaction reference and a screenshot.
