---
title: Import products
sidebar_position: 1
description: Import Shopify products and variants into Odoo, what is read, how simple and variant products are told apart, and what is created.
---

# Import products

Importing links every Shopify product to an Odoo product, creating the Odoo product when no match exists. Once linked, Odoo can send stock and prices, and orders find their products at once.

:::note Before you start
- The store is connected.
- Give your Odoo products the same **Internal Reference** (or **Barcode**) as the Shopify SKU when they already exist in Odoo. That is how they are matched instead of duplicated. See [How products are matched](./product-matching.md).
- Optional: set **Category for New Products** on the **Products** tab, and switch **Import Images** off if you do not want Shopify images in Odoo.
:::

## Method 1: Sync

1. Open the store and click **Sync...**.
2. Choose **Import products from the store**.
3. Leave **Update Already Linked Products** off for a first import. Switch it on to run the import again over products that are already linked (to link new variants, or to include archived products).
4. Click **Run in Background**.

Odoo reads the product list 25 at a time and queues one job per product (*Import product Snowboard*), then the next page. Jobs run in the background; follow them in **Online Stores > Queue > Jobs**.

## Method 2: automatic

| When | What happens |
|---|---|
| An order contains a product that is not linked yet | With **Import Unknown Products With Orders** on (default), Odoo imports that product during the order import. |
| A product is created in Shopify | With **Import New Products Instantly** on and webhooks set up, the product is imported about 30 seconds later. |

## Simple or with variants

Shopify always has at least one variant. Odoo treats a product as:

- **Simple** when Shopify says it has only the default variant (option *Title* / *Default Title*), or it has a single variant. The SKU, barcode, price and weight of that variant go to the Odoo product.
- **With variants** otherwise. Each Shopify option (Size, Color) becomes an Odoo attribute with its values, and each variant is matched to an Odoo variant.

## What is read from Shopify

| Shopify | Odoo |
|---|---|
| Title | **Name** |
| Options and their values | Attributes and values (product with variants). Odoo reuses an attribute with the same name that creates variants instantly, or creates one. |
| Variant SKU | **Internal Reference** of the variant (new products only) |
| Variant barcode | **Barcode** (new products only, and only when no other product has it) |
| Variant price | **Sales Price**. With variants: the lowest price goes to the product, higher prices become fixed prices in the store's **Pricelist**. |
| Weight and its unit (g, kg, oz, lb) | **Weight**, converted to kilograms |
| Collections (up to 10) | Store categories (**Online Stores > Catalog > Store Categories**); an Odoo product category mapped on a store category is used for new products |
| Images (first image of the product, and the first image of each variant) | **Image** of the product and of the variants, when **Import Images** is on |
| Status (active, draft, archived) | **Store Status** of the store product |
| Online store URL | **Store Link** of the store product |
| Product and variant IDs, inventory item IDs | Product links (**Online Stores > Catalog > Product Links**) |

New products are storable goods, can be sold, and belong to no company.

## What changes in Odoo

- A store product (**Online Stores > Catalog > Store Products**) per Shopify product, and a product link per variant.
- New Odoo products, attributes and values for products that did not match.
- For existing products only the links are created. Name, price, SKU and image of an existing Odoo product are not changed.

## Good to know

- **Archived** Shopify products are skipped, unless **Update Already Linked Products** is on.
- The product description (HTML) is not imported in version 1.0.
- Products with more than 100 variants: only the first 100 variants are read in version 1.0. The others stay unlinked, and an order for one of them waits with *Products not found in Odoo* until you link it by SKU.
- Import Images downloads the image from Shopify's CDN; if Odoo cannot reach it, the product is created without image.

## FAQ

**The log says *store variations not matched in Odoo*.** The Odoo product exists but has no variant with these option values (or SKU). Add the missing attribute values in Odoo, then import again with **Update Already Linked Products** on.

**Can I import only some products?** Not from Shopify. Import all, or send the products you want from Odoo instead ([Send products to Shopify](./export-products.md)).
