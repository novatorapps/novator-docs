---
title: What an order contains
sidebar_position: 3
description: How Shopify line items, discounts, shipping, taxes, notes and totals become the lines of the Odoo sales order.
---

import ExtraLines from '@site/src/partials/commerce/ExtraLines.mdx';

# What an order contains

![An imported Shopify order](/img/shopify-connector/order_lines.png)

## Header

| Odoo | From Shopify |
|---|---|
| **Order Reference** | **Order Prefix** + order number without `#` (`SH-1001`) |
| **Customer**, **Invoice Address**, **Delivery Address** | Customer, billing and shipping address ([How customers are matched](../customers/customer-matching.md)) |
| **Order Date** | Processed date (else created date), in UTC |
| **Customer Reference** | Order number |
| **Pricelist** | The store **Pricelist**, or a pricelist in the order currency |
| **Warehouse** | The store's **Order Warehouse** |
| **Sales Team**, **Salesperson**, **Payment Terms**, **Fiscal Position** | From the store (payment terms of the payment method win) |
| **Online Store** tab | **Store Order Number**, **Store Status**, **Store Payment Method**, **Paid in the Store**, **Coupons** (discount codes), **Customer Note**, Shopify total |

The order note from Shopify is also posted in the chatter (*Customer note: ...*).

## Product lines

One line per Shopify line item:

| Odoo line | From Shopify |
|---|---|
| **Product** | The linked variant ([How products are matched](../products/product-matching.md)) |
| **Description** | Line name (product and variant title) |
| **Quantity** | Ordered quantity |
| **Unit Price** | Original line total divided by the quantity (before discounts) |
| **Taxes** | The Odoo taxes mapped to the line's Shopify tax lines ([Taxes](../setup/taxes.md)) |

## Discounts

Shopify spreads discount codes and automatic discounts over the line items (*discount allocations*). Odoo adds them up per set of taxes and adds one discount line per set, labelled *Discount (WELCOME10)* with the codes used. So the discount carries the same taxes as the products it applies to.

Example, 10% code on two products with HST 13%:

| Line | Unit Price | Taxes |
|---|---|---|
| The Complete Snowboard x 2 | 699.95 | HST 13% |
| The Minimal Snowboard x 1 | 885.95 | HST 13% |
| Standard shipping | 1,500.00 | HST 13% |
| Discount (WELCOME10) | -228.58 | HST 13% |

## Shipping

One line per Shopify shipping line, at the price after shipping discounts, with its own tax lines. The shipping code (or title) becomes a shipping method in **Configuration > Shipping Methods**, where you can give it its own product.

<ExtraLines platform="Shopify" />

## Prices with tax included

When the shop includes tax in prices, Odoo removes the tax from line and shipping amounts first, so the tax-excluded Odoo taxes give the same total. See [Taxes](../setup/taxes.md#prices-that-include-tax).

## The total check

After creating the order Odoo compares its total with Shopify's. A difference over one cent sets **Total Differs From Store**, logs a warning and counts on the dashboard. Common causes: a tax mapped to the wrong Odoo tax, a tax included in price in Odoo, duties or tips (not imported in version 1.0).

## Not imported in version 1.0

Duties, tips, order tags, metafields, sales channel, staff notes, risk analysis, and the presentment (customer) currency amounts.
