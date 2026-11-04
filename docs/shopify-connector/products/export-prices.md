---
title: Send prices
sidebar_position: 6
description: Send regular and sale prices to Shopify as price and compare-at price, by hand or every hour.
---

import PriceRules from '@site/src/partials/commerce/PriceRules.mdx';

# Send prices

Odoo can send the price of every linked variant to Shopify. Prices for other currencies go to [Shopify Markets](./markets.md).

:::note Before you start
- Set the store **Pricelist** (Orders tab), in the shop currency. Without it, the product's **Sales Price** is sent.
- Optional: a **Sale Price Pricelist** with your reduced prices.
- Decide whether **Send Prices Automatically** (Products tab) should be on. It is off by default, so a first connection does not change your Shopify prices.
:::

<PriceRules platform="Shopify" />

## How prices appear in Shopify

| Odoo | Shopify price | Shopify compare-at price |
|---|---|---|
| Regular price only | Regular price | Cleared |
| Sale price lower than the regular price | Sale price | Regular price (shown crossed out) |

Prices of all variants of one product go in one call. When Shopify refuses a product, the log shows the variant and Shopify's message, and the other products are still sent.

After the shop prices, Odoo also sends the prices of these variants to every Market that has an Odoo pricelist (see [Markets](./markets.md)).

## Good to know

- Prices are sent in the shop currency. Use Markets for other currencies.
- A test copy of the database never sends prices.
