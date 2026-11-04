---
title: How customers are matched
sidebar_position: 2
description: How Odoo finds or creates the customer, company, invoice and delivery address of a WooCommerce order.
---

import CustomerMatching, {toc as cmToc} from '@site/src/partials/commerce/CustomerMatching.mdx';

export const toc = [
  {value: 'What WooCommerce provides', id: 'what-woocommerce-provides', level: 2},
  {value: 'Matching rules', id: 'matching-rules', level: 2},
  ...cmToc,
];

# How customers are matched

## What WooCommerce provides

| WooCommerce order field | Used for |
|---|---|
| `customer_id` | The customer link. `0` means a guest checkout: no link, matching by email only. |
| Billing first name, last name, company, address, email, phone | The customer and the invoice address |
| Shipping first name, last name, company, address | The delivery address (WooCommerce has no email or phone on the shipping address) |
| State code (for example `CA`) and country code (`US`) | Odoo state and country, looked up by code, then by name |

WooCommerce sends the addresses as they are on the order, so a customer who changes their account address later does not change old orders.

## Matching rules

<CustomerMatching platform="WooCommerce" />
