---
title: Send stock
sidebar_position: 5
description: How Odoo computes the quantity for each Shopify location and when it sends it, automatically or by hand.
---

import StockRules from '@site/src/partials/commerce/StockRules.mdx';

# Send stock

Odoo is the master of stock: it sends the quantity of every linked variant to each mapped Shopify location.

:::note Before you start
- Products are linked.
- [Locations](../setup/locations.md) are mapped (or the main location got the store's warehouses on the first connection).
- On the **Stock** tab, check **Stock Source**, **Stock Buffer** and **Send Stock Automatically**.
:::

## Method 1: automatic

With **Send Stock Automatically** on (default), stock is sent when stock moves in Odoo (about a minute later) and every hour as a safety net. Only quantities that changed since the last send are sent.

## Method 2: by hand

| Button | What is sent |
|---|---|
| **Send All Stock** (store header) | Every linked variant, also when nothing changed. |
| **Sync... > Send stock to the store** | Same as **Send All Stock**. |
| **Product Links**, select lines, **Action > Send Stock to Store** | The selected variants. |

<StockRules platform="Shopify" />

## Per location

The rules above give one quantity per warehouse set. Each Shopify location gets the quantity of its own **Stock From Warehouses**, computed with the same **Stock Source** and **Stock Buffer**. **Stock Sent** in **Product Links** shows the quantity of the store's own warehouses (the main location in the fallback case).

## What changes in Shopify

1. For variants that miss it, Odoo looks up the inventory item, and switches on quantity tracking when it is off.
2. The first time a variant is sent to a location where it is not stocked, Odoo stocks it there with the quantity in the same call.
3. Then Odoo sets the **available** quantity, up to 250 items per call, with reason *correction* and Odoo as the reference document. Shopify shows these changes in the inventory history.

Odoo does not compare with the quantity Shopify had before: Odoo's quantity wins.

## Good to know

- Sending stock from Odoo replaces the quantity in Shopify. Do not also adjust stock by hand in Shopify for the same location.
- Odoo sends quantities to locations; the available quantity that Shopify shows customers is the sum over locations that fulfill online orders.
- A variant without inventory item is logged as *no Shopify inventory item found*. Import products again.
- A test copy of the database never sends stock.
