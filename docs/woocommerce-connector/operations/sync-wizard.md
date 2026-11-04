---
title: Sync with store
sidebar_position: 1
description: "The Sync window: bulk imports of products, orders, customers and stock, and sending all stock or prices."
---

import SyncWizard, {toc as swToc} from '@site/src/partials/commerce/SyncWizard.mdx';

export const toc = [...swToc];

# Sync with store

Open it with **Sync...** on the store, or **Online Stores > Queue > Sync With Store**. Every operation runs in the background as jobs; nothing waits for WooCommerce in your browser.

<SyncWizard platform="WooCommerce" img="/img/woocommerce-connector" />

## WooCommerce details

| Operation | How WooCommerce is read or written |
|---|---|
| **Import products from the store** | Categories first, then products 25 per page, all statuses; variations of variable products |
| **Import orders from the store** | Orders modified after **Orders Changed Since**, 50 per page, oldest change first |
| **Import customers from the store** | Customers 50 per page, all roles |
| **Set Odoo stock from the store quantities** | Stock quantity of products and variations with **Manage stock** on |
| **Send stock to the store** / **Send prices to the store** | Batches of 100 products, or 100 variations per parent product |
