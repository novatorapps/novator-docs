---
title: What an order contains
sidebar_position: 2
description: How WooCommerce line items, coupons, shipping, fees, taxes and customer data become Odoo sales order lines.
---

import ExtraLines, {toc as elToc} from '@site/src/partials/commerce/ExtraLines.mdx';

export const toc = [
  {value: 'From WooCommerce to the sales order', id: 'from-woocommerce-to-the-sales-order', level: 2},
  {value: 'Product lines and discounts', id: 'product-lines-and-discounts', level: 2},
  {value: 'Shipping, discount and fee lines', id: 'shipping-discount-and-fee-lines', level: 2},
  ...elToc,
  {value: 'Total check', id: 'total-check', level: 2},
];

# What an order contains

## From WooCommerce to the sales order

| WooCommerce | Odoo |
|---|---|
| Order number | Order name with prefix (**WC-1046**), **Customer Reference**, store number |
| Created date (GMT) | Order date |
| Currency | Pricelist in that currency (see Orders tab) |
| Customer ID, billing and shipping address | Customer, invoice address, delivery address ([Customers](../customers/import-customers.md)) |
| Payment method and title | Payment method of the store |
| Date paid | **Paid** on the Online Store tab |
| Line items | Product lines |
| Coupons | Discount line(s) with the codes |
| Shipping lines | Shipping lines |
| Fee lines | Fee lines |
| Tax lines (rate ID, label, %) | Taxes on each line |
| Customer note | Chatter message and **Customer Note** |
| Total | **Store Total** |
| Refunds | Credit notes ([Refunds from WooCommerce](./refunds.md)) |

![An imported order](/img/woocommerce-connector/order_lines.png)

## Product lines and discounts

Each line item becomes one line with:

- the product found by variation ID, product ID or SKU ([How products are matched](../products/product-matching.md)),
- the quantity,
- the **unit price before discounts** (line subtotal divided by quantity),
- the line's taxes ([Taxes](../setup/taxes.md)).

The difference between the line subtotal (before coupons) and total (after coupons) of all lines becomes discount lines, one per tax combination, so taxes stay correct. They are labelled *Discount (CODE1, CODE2)* with the coupon codes.

## Shipping, discount and fee lines

<ExtraLines platform="WooCommerce" />

## Total check

After import Odoo compares its total with the WooCommerce total. A difference of more than one cent sets **Total Differs From Store** on the order, logs a warning and counts on the dashboard. The usual cause is a tax mapped to the wrong Odoo tax. See [Taxes](../setup/taxes.md).

![The Online Store tab](/img/woocommerce-connector/order_store_tab.png)
