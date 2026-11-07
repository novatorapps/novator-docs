---
title: Listings and offers
sidebar_position: 1
description: Import your Amazon listings, link SKUs to Odoo products by SKU, barcode or ASIN, copy Amazon prices, offers per marketplace.
---

import ProductMatching, {toc as partialToc} from '@site/src/partials/commerce/ProductMatching.mdx';

export const toc = [{value: 'Import the listings', id: 'import-the-listings', level: 2}, {value: 'ASIN on the product', id: 'asin-on-the-product', level: 2}, {value: 'Offers', id: 'offers', level: 2}, ...partialToc];

# Listings and offers

## Import the listings

Click **Import Listings** on the store. A small window opens:

- **Update prices in the Amazon pricelists**: copies each listing's Amazon price into the pricelist of its marketplace (see [Prices](./stock-prices.md#prices)). Ticked by default when the store's **Price Source** is Amazon.
- **Import Unknown Products With Orders**: SKUs without a matching product create one (with the listing title and price). Leave it off for the first import: unmatched SKUs are then only listed in the **Log**, so you can link them by hand.

Click **Import**. Odoo asks Amazon for the report of all your listings and, a few minutes later, reads it. Nothing is sent to Amazon:

- each **seller SKU** is linked to an Odoo product: by an existing link, then by **Internal Reference** equal to the SKU, then by **Barcode** equal to the product ID (EAN, UPC, ISBN) of the listing, then by **ASIN**;
- each SKU records its **ASIN**, **FBM or FBA** and its status; the ASIN is also written on the product.

One Odoo product can have several SKUs (for example a new and a used offer, or an FBM and an FBA SKU). Run **Import Listings** again after you add listings in Seller Central.

## ASIN on the product

The product form shows the **ASIN** under the barcode (per variant for products with variants). It is filled by the listings import and by [List on Amazon](./list-on-amazon.md), and you can type it yourself: products are searchable by ASIN, and the import uses it to link a listing whose SKU and barcode do not match. When Amazon reports another ASIN for a product that has one, the product keeps its ASIN and the **Log** shows the difference.

## Offers

**Online Stores > Amazon Offers** shows one line per SKU and marketplace, with its title, listing status, Amazon price and quantity, and the price Odoo sent last.

![Amazon offers](/img/amazon-connector/offers.png)

<ProductMatching platform="Amazon" img="/img/amazon-connector" />
