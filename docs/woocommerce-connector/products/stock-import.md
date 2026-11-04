---
title: Import stock from WooCommerce
sidebar_label: Import stock
sidebar_position: 6
description: Set Odoo on-hand quantities once from the WooCommerce stock quantities when you start.
---

# Import stock from WooCommerce

Use this once, when you start with Odoo and WooCommerce has the correct quantities. After that, Odoo is the master and [sends stock](./stock-export.md) to the store.

## Before you start

- Products are imported and linked ([Import products](./import-products.md)).
- Products are storable in Odoo (*Track Inventory* on). Others are skipped.
- No deliveries or receipts are waiting to be validated, or the quantities will be counted twice.

## Steps

1. Open the store and click **Sync...**.
2. Choose **Set Odoo stock from the store quantities**.
3. Choose the **Stock Location** (default: the stock location of the **Order Warehouse**).
4. Click **Run in Background**.

## What changes in Odoo

- For every linked product and variation with **Manage stock** on in WooCommerce, the on-hand quantity in the chosen location is set to the WooCommerce quantity (an inventory adjustment, visible in **Inventory > Moves History**). Negative quantities become 0.
- Products without **Manage stock** in WooCommerce are left alone.
- The log has a line *Stock set from the store for N products.*

## Good to know

- It is an inventory adjustment: it replaces the quantity in that location, it does not add to it.
- Right after, Odoo sends stock back to the store with its own rules (stock source, buffer). With a buffer, the store then shows less than before. That is expected.
- With several warehouses, run it once per location only if WooCommerce quantities really belong to that location. WooCommerce has one quantity per product.
