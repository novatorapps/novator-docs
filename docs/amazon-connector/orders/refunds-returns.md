---
title: Refunds and returns
sidebar_position: 4
description: Amazon refunds become credit notes; FBA customer returns come back to the FBA warehouse or its Unsellable location.
---

# Refunds and returns

## Refunds

Refunds are made in Seller Central (or by Amazon for FBA orders). Every 6 hours Odoo reads the refunds Amazon posted (or **Import Refunds Now** on the Fulfillment tab) and creates a credit note for each, with the refunded products and VAT, linked to the order. Each refund is imported once.

Refunds started from Odoo are not sent to Amazon: refund in Seller Central, and the credit note follows.

## FBA customer returns

When **Import FBA Customer Returns** is on, Odoo reads Amazon's returns report once a day.

![FBA customer returns](/img/amazon-connector/fba_returns.png)

- Each returned unit becomes a line in **Online Stores > FBA Returns** with the order, SKU, quantity, reason (for example *Unwanted item*) and condition.
- Sellable units go back into the **FBA Warehouse**; damaged units (customer, carrier or warehouse damaged, defective) go to the **FBA Unsellable Location**.
- A receipt is validated for each return, so the FBA stock in Odoo stays right. Each return is imported once.

FBM returns come back to you; handle them with a normal Odoo return on the delivery.
