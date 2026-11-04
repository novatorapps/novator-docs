---
title: How products are matched
sidebar_position: 2
description: How Shopify order lines and imported products find their Odoo products, by link, SKU or barcode, and what happens when nothing matches.
---

import ProductMatching from '@site/src/partials/commerce/ProductMatching.mdx';

# How products are matched

Every order line and every imported product has to land on one Odoo product variant. This page gives the rules.

## What Shopify sends on an order line

| Shopify | Used as |
|---|---|
| Variant ID | First lookup: the product link of that variant. |
| Product ID | Second lookup: the link of a simple product (simple products are linked by their product ID). |
| SKU of the line | Third lookup: Odoo **Internal Reference**, then **Barcode** (with **Match Products By** *Internal Reference, then Barcode = SKU*). |

A line whose product was deleted in Shopify has no variant and no product ID; only its SKU can match it.

<ProductMatching platform="Shopify" img="/img/shopify-connector" />

## Shopify specifics

- Many Shopify shops have variants without SKU. They are still matched on import by their option values (Size *M*, Color *Blue*) and linked by ID, so later orders find them without SKU.
- Odoo remembers each variant's Shopify variant ID and inventory item ID on the product link. The inventory item ID is what stock updates need; it is filled again automatically if it is missing.
