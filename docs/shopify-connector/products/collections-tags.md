---
title: Collections, tags and selling rules
sidebar_position: 8
description: "Import Shopify collections, put products in collections and send tags from Odoo, and set keep selling and taxable per product."
---

# Collections, tags and selling rules

Shopify groups products in **collections** and labels them with **tags**. Odoo can read your collections, put the products it sends into the right ones, and send Odoo product tags as Shopify tags. All of this is off until you switch it on.

## Import the collections

1. Open **Online Stores > Stores**, click the store, then the **Products** tab.
2. Click **Import Collections**.
3. Open **Online Stores > Listings > Store Categories**: every Shopify collection is listed, with **Smart Collection** ticked for automated collections.

| Collection in Shopify | In Odoo | Can Odoo put products in it? |
|---|---|---|
| Manual (you pick the products) | A store category | Yes |
| Automated (Shopify adds products by rules: tag, price, type...) | A store category with **Smart Collection** | No: Shopify fills it by its rules. Send tags or product types that match the rules instead. |

Click **Import Collections** again after creating or renaming collections in Shopify.

## Map collections to Odoo categories

On each store category, set the **Odoo Category**. A product goes to the collection of its Odoo category. When its own category has no collection, Odoo takes the collection of the parent category (for example *Kitchen / Pans* uses the collection of *Kitchen*).

## Send collections and tags

![Collections, tags and selling settings on the Products tab](/img/shopify-connector/store_products_collections.png)

On the store's **Products** tab:

| Field | Default | What it does |
|---|---|---|
| **Send Collections** | Off | Products sent to Shopify are put in the manual collection mapped to their Odoo category. Shopify then keeps the product only in that manual collection: it is taken out of other manual collections. Automated collections are never touched. |
| **Create Missing Collections** | Off | Shown with **Send Collections**. When a product's Odoo category (and its parents) has no collection, Odoo creates a manual collection with the category name and maps it. |
| **Send Product Tags** | Off | The Odoo **Tags** of the product become its Shopify tags. Shopify keeps only these: tags added in Shopify by hand are removed on the next update. |

Collections and tags are sent with the product: when you click **Send to Store** / **Update in Store**, or when products are sent automatically. The store product shows its collections under **Store Categories**.

:::warning Before switching on
Both settings make Odoo the master. If your team manages collections or tags in Shopify by hand, leave them off, or move that work to Odoo first.
:::

## Keep selling when out of stock

| Where | Field | What it does |
|---|---|---|
| Store, **Products** tab | **Keep Selling When Out of Stock** | Default for products sent to Shopify. Off: Shopify stops selling a variant at 0 (inventory policy *Deny*). On: customers can still order it (*Continue*), for backorders or made-to-order products. |
| Product, **Sales** tab, *Shopify* group | **Shopify: When Out of Stock** | *Store Setting* (default): the store field above. *Stop Selling* or *Keep Selling*: this product only. |

## Taxable

| Field | Default | What it does |
|---|---|---|
| **Taxable From Odoo Taxes** | On | A product without customer taxes in Odoo is sent as *not taxable* in Shopify, so Shopify charges no tax on it (for example gift wrap or exempt items). Off: Odoo does not change Shopify's taxable flag. |

## FAQ

**I sent a product but it is not in the collection.** Check that the collection is manual (not **Smart Collection**), that it is mapped to the product's Odoo category or a parent, and that **Send Collections** is on. Then **Update in Store**.

**Why did a product leave a collection I added in Shopify?** With **Send Collections** on, Shopify keeps only the collection Odoo sends. Map that collection to an Odoo category instead.
