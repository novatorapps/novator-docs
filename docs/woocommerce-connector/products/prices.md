---
title: Prices
sidebar_position: 4
description: Send regular and sale prices from Odoo pricelists to WooCommerce.
---

import PriceRules, {toc as prToc} from '@site/src/partials/commerce/PriceRules.mdx';

export const toc = [
  {value: 'Regular and sale price in WooCommerce', id: 'regular-and-sale-price-in-woocommerce', level: 2},
  {value: 'Send prices', id: 'send-prices', level: 2},
  ...prToc,
];

# Prices

## Regular and sale price in WooCommerce

WooCommerce has two prices per product or variation: the **Regular price** and an optional **Sale price** (shown with the regular price crossed out). Odoo sends both: the regular price from the store **Pricelist**, the sale price from the **Sale Price Pricelist** when it is lower. When there is no lower price, the sale price is cleared.

## Send prices

**Automatic:** tick **Send Prices Automatically** on the Products tab. Every hour Odoo sends the prices that changed.

**Manual, all products:** **Sync... > Send prices to the store**.

**Manual, some products:** select them in **Catalog > Product Links** and choose **Actions > Send Price to Store**.

Simple products are sent 100 per request, variations 100 per request per parent product. A product WooCommerce refuses is logged with the reason; the others are sent.

<PriceRules platform="WooCommerce" />
