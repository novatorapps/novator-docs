---
title: FBM stock and prices
sidebar_position: 2
description: Odoo sends the stock of FBM SKUs and the price per marketplace; FBA stock stays with Amazon.
---

import StockRules, {toc as stockToc} from '@site/src/partials/commerce/StockRules.mdx';

export const toc = [{value: 'Stock', id: 'stock', level: 2}, ...stockToc, {value: 'Prices', id: 'prices', level: 2}];

# FBM stock and prices

## Stock

Odoo is the master of the stock of your **FBM** SKUs. It sends the quantity with a listings feed when stock moves (about a minute later) and every hour, to each marketplace where **Send FBM Stock** is ticked. FBA SKUs are never sent: Amazon holds and counts that stock (see [FBA](./fba.md)).

<StockRules platform="Amazon" />

## Prices

Prices are sent per marketplace, in its currency, for linked products with **Send Price** on:

- the price for one unit from the marketplace's **Pricelist** (Marketplaces tab), or the store pricelist, or the product's **Sales Price**;
- for marketplaces using the store pricelist: a lower price from the **Sale Price Pricelist** is sent instead while it applies (for a sale);
- rounded to two decimals, as the offer's price;
- every hour with **Send Prices Automatically** on (only changed prices), or for every product with **Sync... > Send prices to the store**, or for selected lines in **Product Links** with **Action > Send Price to Store**.

Untick **Send Prices** on a marketplace to manage its prices in Seller Central. **Price Sent** on the offer shows the price Odoo sent last.

:::tip Start carefully
Switch on stock and prices once the listings are linked and the first orders look right. Send a test on one SKU first: select it in **Product Links**, then **Action > Send Stock to Store**.
:::
