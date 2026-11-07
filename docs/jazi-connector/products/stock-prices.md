---
title: Stock and prices
sidebar_position: 5
description: "Stock from the warehouses you choose, sent when it moves; prices from the store pricelist on a schedule; Jazi batch results checked."
---

import StockRules, {toc as stockToc} from '@site/src/partials/commerce/StockRules.mdx';

export const toc = [{value: 'Stock', id: 'stock', level: 2}, ...stockToc, {value: 'Prices', id: 'prices', level: 2}, {value: 'Batch results', id: 'batch-results', level: 2}];

# Stock and prices

## Stock

Odoo is the master of your Jazi stock. It sends the quantity of each linked variant about a minute after stock moves in Odoo, and checks every variant on the store's schedule (every hour by default). Jazi receives the total available, not a change.

<StockRules platform="Jazi" />

**Stock From Warehouses** on the **Stock** tab: the quantities of all chosen warehouses are added up. Orders are still delivered from the store's **Order Warehouse**, or the warehouse you pick on the order before confirming it.

## Prices

- The price is the store **Pricelist** price for one unit, in SAR, rounded to two decimals.
- A lower price from the **Sale Price Pricelist** is sent as Jazi's special price while it applies.
- With **Send Prices Automatically**, prices that changed since they were last sent go out on the store's schedule. Jazi may review price changes, so once a day (1440 minutes on the [Schedules](../operations/schedules.md) tab) is a good choice.
- **Sync... > Send prices to the store** sends every price now; **Change Price** on a product link sets and sends one.

Imported orders keep the price of the store pricelist when they were imported; changing the pricelist later does not change them.

## Batch results

Jazi applies stock and prices in batches of up to 1,000 items and reports a result per item. Odoo reads the result back:

| Result | In Odoo |
|---|---|
| Applied | **Stock Sent** / **Price Sent** updated on the product link. |
| *TOTAL_BELOW_RESERVED* | Jazi has more units reserved for open orders than the quantity sent. Ship or cancel those orders, then send again. |
| *STOCK_UNAVAILABLE*, unknown seller SKU | The variant is no longer on Jazi under that SKU. Check the link. |
| Special price above the price | Fix the Sale Price Pricelist. |

Refused items are written to the log; the other items of the batch are applied.
