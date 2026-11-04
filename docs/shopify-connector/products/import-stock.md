---
title: Import stock
sidebar_position: 4
description: Set Odoo on-hand quantities from the Shopify quantities of each location, once, when you start.
---

# Import stock

When you start with the connector, the right quantities may only be in Shopify. Importing stock sets Odoo's on-hand quantity of every linked product from Shopify, as an inventory adjustment. Afterwards Odoo is the master and sends its quantities to Shopify.

:::note Before you start
- Products are imported and linked ([Import products](./import-products.md)).
- [Locations](../setup/locations.md) are mapped to warehouses. Each mapped location is read into the stock location of its **first** warehouse.
- Only storable products get quantities. Services and consumables are skipped.
:::

:::warning Use it once
Importing overwrites Odoo's on-hand quantities in the chosen locations. Running it later, after Odoo has sent stock, can undo stock moves made in Odoo in between.
:::

## Steps

1. Open the store and click **Sync...**.
2. Choose **Set Odoo stock from the store quantities**.
3. Choose the **Stock Location**. It is used for the main location (the one that fulfills online orders) when that location has no warehouse; mapped locations use their own warehouse.
4. Click **Run in Background**.

## What happens

For every active Shopify location:

| Location | Odoo location that is set |
|---|---|
| Has warehouses in **Stock From Warehouses** | The stock location of the first of those warehouses (for example *WH/Stock*) |
| No warehouse, but **Fulfills Online Orders** | The **Stock Location** you chose |
| No warehouse, does not fulfill online orders | Skipped |

For each linked variant stocked at that location, Odoo reads Shopify's *available* quantity and sets the on-hand quantity to it (negative quantities become 0). All changes are applied as one inventory adjustment, and the log says *Stock set from Shopify for N products.*

## Good to know

- Shopify's *available* quantity is what can be sold: committed (ordered, not yet fulfilled) units are not included. If you have open Shopify orders that are not in Odoo yet, import them first.
- Two locations mapped to the same first warehouse overwrite each other; the last one read wins.
- Variants without a known inventory item are skipped. Import products again if that happens.
