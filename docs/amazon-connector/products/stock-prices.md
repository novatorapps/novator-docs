---
title: FBM stock and prices
sidebar_position: 2
description: Odoo sends the stock of FBM SKUs; prices per marketplace pricelist, with Amazon or Odoo as price source.
---

import StockRules, {toc as stockToc} from '@site/src/partials/commerce/StockRules.mdx';

export const toc = [{value: 'Stock', id: 'stock', level: 2}, ...stockToc, {value: 'Prices', id: 'prices', level: 2}, {value: 'Price source', id: 'price-source', level: 3}, {value: 'One pricelist per marketplace', id: 'one-pricelist-per-marketplace', level: 3}, {value: 'What is sent', id: 'what-is-sent', level: 3}, {value: 'Copying Amazon prices into Odoo', id: 'copying-amazon-prices-into-odoo', level: 3}];

# FBM stock and prices

## Stock

Odoo is the master of the stock of your **FBM** SKUs. It sends the quantity with a listings feed when stock moves (about a minute later) and every hour, to each marketplace where **Send FBM Stock** is ticked. FBA SKUs are never sent: Amazon holds and counts that stock (see [FBA](./fba.md)).

<StockRules platform="Amazon" />

## Prices

### Price source

**Price Source** on the store's **Products** tab says where your Amazon prices are kept:

- **Amazon** (default): you set prices in Seller Central, or a repricer does. Odoo never sends prices. Importing listings with **Update prices in the Amazon pricelists** copies them into Odoo, so quotations and reports use them.
- **Odoo**: the pricelist of each marketplace is your Amazon price. With **Send Prices Automatically** on, a change in that pricelist is sent within a minute (only the products whose rule changed), and every hour Odoo checks all prices.

:::warning Repricers
If a repricer or Amazon's Automate Pricing changes your prices, keep **Amazon** as price source. With **Odoo**, both would keep overwriting each other.
:::

### One pricelist per marketplace

Each active marketplace has a **Pricelist** in its own currency (Marketplaces tab). When you switch a marketplace on, Odoo uses the store pricelist if it has the same currency, or creates one, for example *Amazon.ae (AED)*. A new pricelist without rules gives the product's **Sales Price** converted at Odoo's exchange rate; add fixed prices or rules to it as you like.

Prices are only sent from a pricelist in the marketplace's currency: a marketplace without one stops the sending with a message, so a price in riyals is never sent as dirhams.

### What is sent

With **Odoo** as price source, for linked products with **Send Prices** on the marketplace:

- the price for one unit from the marketplace pricelist;
- a lower price from the **Sale Price Pricelist** (same currency) while it applies, for a sale;
- rounded to two decimals, as the offer's price;
- only prices that changed since they were last sent (**Price Sent** on the offer), or every price with **Sync... > Send prices to the store**.

Imported orders always keep the prices the buyer paid on Amazon: pricelists never change an order.

### Copying Amazon prices into Odoo

**Import Listings** with **Update prices in the Amazon pricelists** writes each Amazon price as a fixed price for that product in the marketplace pricelist. To protect your own pricing, Odoo only writes into pricelists it created or that hold fixed prices per product only. A pricelist with formulas, percentages or category rules is never changed: the **Log** lists the products whose Amazon price differs from it. The product's **Sales Price** is never changed.

:::tip Start carefully
Switch on stock and prices once the listings are linked and the first orders look right. Send a test on one SKU first: select it in **Product Links**, then **Action > Send Stock to Store**.
:::
