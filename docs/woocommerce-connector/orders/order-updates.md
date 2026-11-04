---
title: Updates after import
sidebar_position: 4
description: What happens in Odoo when a WooCommerce order changes after it was imported.
---

import OrderUpdates, {toc as ouToc} from '@site/src/partials/commerce/OrderUpdates.mdx';

export const toc = [
  {value: 'What WooCommerce sends', id: 'what-woocommerce-sends', level: 2},
  {value: 'How updates are applied', id: 'how-updates-are-applied', level: 2},
  ...ouToc,
];

# Updates after import

## What WooCommerce sends

WooCommerce fires *order.updated* every time an order is saved: a status change, a note, an edited line, a payment, a refund. With webhooks set up, Odoo receives the whole order within seconds. Without webhooks, the [15-minute check](./import-orders.md#how-the-check-works) finds the order through its modification date.

Each change in WooCommerce becomes one job *Import order ...*. When several changes arrive before the job runs, they merge into one job with the latest data.

## How updates are applied

<OrderUpdates platform="WooCommerce" />
