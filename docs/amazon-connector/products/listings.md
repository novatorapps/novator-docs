---
title: Listings and offers
sidebar_position: 1
description: Import your Amazon listings, link SKUs to Odoo products by SKU or barcode, offers per marketplace.
---

import ProductMatching, {toc as partialToc} from '@site/src/partials/commerce/ProductMatching.mdx';

export const toc = [{value: 'Import the listings', id: 'import-the-listings', level: 2}, {value: 'Offers', id: 'offers', level: 2}, ...partialToc];

# Listings and offers

## Import the listings

Click **Import Listings** on the store. Odoo asks Amazon for the report of all your listings and, a few minutes later, reads it:

- each **seller SKU** is linked to an Odoo product: by an existing link, then by **Internal Reference** equal to the SKU, then by **Barcode** equal to the product ID (EAN, UPC, ISBN) of the listing;
- SKUs without a match create a product when **Import Unknown Products With Orders** is on, with the listing title and price;
- each SKU records its **ASIN**, **FBM or FBA** and its status.

One Odoo product can have several SKUs (for example a new and a used offer, or an FBM and an FBA SKU). Run **Import Listings** again after you add listings in Seller Central.

## Offers

**Online Stores > Amazon Offers** shows one line per SKU and marketplace, with its title, listing status, Amazon price and quantity, and the price Odoo sent last.

![Amazon offers](/img/amazon-connector/offers.png)

<ProductMatching platform="Amazon" img="/img/amazon-connector" />
