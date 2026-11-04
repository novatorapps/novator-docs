---
title: Import customers
sidebar_position: 1
description: How WooCommerce customers reach Odoo, with orders or in bulk, and how existing contacts are found.
---

# Import customers

## Three ways customers reach Odoo

1. **With an order** (automatic). Every imported order brings its customer, invoice address and delivery address. This is how most customers arrive.
2. **Import all customers** (manual, once). Brings registered WooCommerce customers who have not ordered yet, for example to send them newsletters from Odoo.
3. **Guest orders.** A guest checkout has no WooCommerce customer account (customer ID 0). Odoo finds or creates the contact from the billing email and address, without a customer link.

## Import all customers

### Before you start

- The store is **Connected**.
- Decide whether you want all registered customers in Odoo. Guests are never imported this way (WooCommerce has no customer record for them).

### Steps

1. Open the store and click **Sync...**.
2. Choose **Import customers from the store** and click **Run in Background**.
3. Odoo reads the customers 50 per page (all roles). Each page is one job; follow them in **Queue > Jobs**.

### What changes in Odoo

- A contact (and its company and addresses, when given) for every customer that is not linked yet, found or created with the [matching rules](./customer-matching.md).
- A customer link in **Catalog > Customer Links**, so later orders of the customer find the contact directly.
- Customers already linked are skipped: their Odoo contact is not changed.

## What is read from WooCommerce

| WooCommerce | Odoo |
|---|---|
| Customer ID | Customer link (**Catalog > Customer Links**) |
| Billing first and last name (account name when billing is empty, then the username) | Contact name |
| Billing company | Parent company of the contact |
| Billing address 1 and 2, city, postcode, state, country | Address of the contact |
| Billing email (account email when billing has none) | Email |
| Billing phone | Phone |
| Shipping address | Delivery address under the customer, when it differs |

## How customers are matched

Every customer, from an order or from this import, goes through the same rules: customer link, then email, then a new contact. See [How customers are matched](./customer-matching.md).
