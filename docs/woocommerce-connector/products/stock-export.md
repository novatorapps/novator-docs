---
title: Send stock to WooCommerce
sidebar_label: Send stock
sidebar_position: 5
description: How Odoo computes and sends stock quantities to WooCommerce, when, and how to read what was sent.
---

import StockRules, {toc as srToc} from '@site/src/partials/commerce/StockRules.mdx';

export const toc = [
  {value: 'What WooCommerce receives', id: 'what-woocommerce-receives', level: 2},
  ...srToc,
];

# Send stock to WooCommerce

## What WooCommerce receives

For each linked product or variation Odoo sets **Manage stock** on and sends the **Stock quantity**. WooCommerce then shows *In stock* or *Out of stock* and applies its own backorder settings. Simple products are sent 100 per request, variations 100 per request per parent product. A product WooCommerce refuses is logged with its reason and sent again next time.

![Stock settings](/img/woocommerce-connector/store_stock_settings.png)

<StockRules platform="WooCommerce" />
