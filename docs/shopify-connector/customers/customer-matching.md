---
title: How customers are matched
sidebar_position: 2
description: The exact rules Odoo uses to find or create the customer, company, invoice address and delivery address of a Shopify order.
---

import CustomerMatching from '@site/src/partials/commerce/CustomerMatching.mdx';

# How customers are matched

When an order or a customer comes from Shopify, Odoo decides which contact to use. This page gives the rules, step by step, with examples.

## What Shopify sends

| Shopify field | Used for |
|---|---|
| Customer ID | The customer link. Missing on guest checkouts and on orders created without a customer. |
| Order email, else the customer's email | Matching by email, and the contact's **Email**. |
| Billing address (else the shipping address) | The customer and the invoice address. When the billing address has no name, the customer's first and last name are used. |
| Shipping address | The delivery address. Orders without shipping (digital goods, pickup) have none, and the delivery address is the customer. |
| Phone of the address, else of the order, else of the customer | **Phone** |
| Province code and country code (ISO, for example `ON`, `CA`, `PK`) | **State** and **Country** |

<CustomerMatching platform="Shopify" />
