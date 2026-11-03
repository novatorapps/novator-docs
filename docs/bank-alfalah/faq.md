---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Bank Alfalah Payments.
---

# FAQ and troubleshooting

### Bank Alfalah does not appear at checkout

Check that the provider is **Published**, set to **Enabled** (or Test), and allowed for the currency of the order (PKR or USD) and the company.

### The customer paid but the order is still pending

The gateway may still be authenticating the card. The webhook confirms it as soon as the bank does; check that the webhook URL is set in the merchant portal.

### "Webhook refused"

The notification secret in Odoo does not match the one in the merchant portal.

### Can I take payments in other currencies?

The gateway accepts what your merchant account is set up for: PKR and USD.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the transaction reference and a screenshot.
