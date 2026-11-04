---
title: Taxes
sidebar_position: 7
description: How Shopify tax lines become Odoo taxes, the tax mapping, prices with tax included and orders whose total differs.
---

import Taxes from '@site/src/partials/commerce/Taxes.mdx';

# Taxes

Shopify calculates the tax of every order line and shipping line. Odoo can use exactly those taxes (recommended), or ignore them and apply the taxes of the Odoo products.

## How Shopify taxes are recognised

Shopify has no tax IDs on order lines: each tax line has a **title** and a **rate**, for example *HST* at 13%. Odoo identifies a store tax by both, written `title|rate`:

| Shopify tax line | Store tax in Odoo | Mapped to (example) |
|---|---|---|
| HST 13% | `HST|13` | *HST 13%* (sales, tax excluded) |
| GST 5% | `GST|5` | *GST 5%* |
| PST 7% | `PST|7` | *PST 7%* |
| Sales Tax 8.875% | `Sales Tax|8.875` | *Sales Tax 8.875%* |

A line with several taxes (GST and PST) gets both Odoo taxes. The same title with another rate is another store tax, so a rate change in Shopify shows up as a new line in **Configuration > Taxes**.

![Tax mapping](/img/shopify-connector/taxes.png)

## Prices that include tax

If your shop shows prices with tax included (Shopify **Settings > Taxes and duties**, *Include sales tax in product price and shipping rate*), each order says so. Odoo then removes the tax from every line and shipping amount before creating the order, because the mapped Odoo taxes are tax excluded. The discount of a line is reduced in the same proportion. The order total stays the same as in Shopify.

## Tax settings and mapping

<Taxes platform="Shopify" img="/img/shopify-connector" />

## Good to know for Shopify

- Totals can differ by one cent because Shopify rounds tax per line and Odoo, depending on the company setting, per line or globally. A difference of one cent is accepted; larger differences flag the order.
- Duties and tips are not imported as order lines in version 1.0. An order with one of them shows a total difference; adjust it by hand.
- Shipping tax follows the tax lines Shopify put on the shipping line, the same way as for products.
