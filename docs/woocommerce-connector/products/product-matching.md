---
title: How products are matched
sidebar_position: 2
description: How order lines and imported WooCommerce products find the right Odoo product, and what a new product looks like.
---

import ProductMatching, {toc as pmToc} from '@site/src/partials/commerce/ProductMatching.mdx';

export const toc = [
  {value: 'WooCommerce IDs', id: 'woocommerce-ids', level: 2},
  ...pmToc,
];

# How products are matched

## WooCommerce IDs

Every WooCommerce product has an ID, and every variation of a variable product has its own ID. Order lines carry both: `product_id` (the product) and `variation_id` (the variation, or 0). Odoo links:

- a simple product by its product ID,
- each variant of a variable product by its variation ID, with the parent product ID kept as **Store Parent ID**.

So an order line is found by its variation ID first, then by its product ID, then by SKU.

<ProductMatching platform="WooCommerce" img="/img/woocommerce-connector" />
