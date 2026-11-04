---
title: Create the Shopify app
sidebar_position: 1
description: Create the app in the Shopify Dev Dashboard, choose its Admin API scopes, release it with Custom distribution and install it on your store.
---

# Create the Shopify app

Odoo talks to Shopify through an app that you create for your store. The app decides what Odoo may read and change (its *scopes*). You do this once per store.

:::note Before you start
- You need the store owner, or a staff account that may develop apps, in the Shopify organization of the store.
- Since January 2026 Shopify no longer lets you create custom apps in the store admin (**Settings > Apps > Develop apps**). New apps are created in the **Shopify Dev Dashboard** at dev.shopify.com. A custom app you created in the admin before keeps working: see [Existing custom app](#existing-custom-app) below.
- Decide how Odoo will connect (see [Connect the store](./connect-store.md)): if the app and the store are in the same Shopify organization, you only need the client ID and secret. If the app belongs to another organization (for example your agency), you also need an install link.
:::

## 1. Create the app

1. Open **dev.shopify.com** and sign in with the account of the store's organization.
2. Go to **Apps** and click **Create app**. Choose to start from the Dev Dashboard (not from the Shopify CLI).
3. Name it, for example *Odoo*. The name is shown to staff in the store admin.

## 2. Choose the Admin API scopes

Create a version of the app. Under **Access**, select these Admin API scopes. The connector asks for exactly this list when you use the install link. Shopify rejects a request when a scope is missing, so give the app the whole list even if you do not use every feature yet.

| Scope | Why the connector needs it |
|---|---|
| `read_products`, `write_products` | Import products and variants; send products, prices and compare-at prices from Odoo. |
| `read_inventory`, `write_inventory` | Read quantities (Set Odoo stock from the store); send quantities to each location; stock an item at a location; switch on quantity tracking. |
| `read_locations` | Read your Shopify locations so you can map them to Odoo warehouses. |
| `read_orders`, `write_orders` | Import orders, refunds and transactions; cancel orders and create refunds from Odoo. |
| `read_customers`, `write_customers` | Read the customer of each order and import customers. Odoo does not change customers in Shopify. |
| `read_fulfillments`, `write_fulfillments` | Create fulfillments with tracking when you deliver in Odoo. |
| `read_merchant_managed_fulfillment_orders`, `write_merchant_managed_fulfillment_orders` | Read and fulfill the fulfillment orders of your own locations. |
| `read_assigned_fulfillment_orders`, `write_assigned_fulfillment_orders` | Fulfillment orders assigned to a location managed by an app. |
| `read_returns` | Asked for now so later releases can read returns without a new approval. Version 1.0 does not read returns. |
| `read_markets`, `write_markets` | Read your Markets and their price lists; send fixed prices per market. |
| `read_publications`, `write_publications` | Asked for now for sales channel publishing in a later release. Version 1.0 does not change publications: a product sent from Odoo is published by Shopify's own rules. |
| `read_shipping` | Asked for now for delivery settings in a later release. Version 1.0 does not read them. |
| `read_shopify_payments_payouts`, `read_shopify_payments_accounts` | Only for [payouts](../orders/payouts.md): read Shopify Payments payouts and their transactions. |

:::tip
If you add a scope later, create a new version with it, release it, and approve the update in the store admin. Until then Shopify answers *Access denied* for the new feature, and the job in Odoo shows that message.
:::

## 3. Redirect URL (install link only)

If Odoo will connect with the **Install link** method, add this URL to the app's allowed redirection URLs:

`https://<your-odoo-address>/cb/shopify/oauth/callback`

Use the public address of your Odoo (the **web.base.url** system parameter). Skip this step for the other methods.

## 4. Release the version and choose Custom distribution

1. Release the version.
2. Open the app's **Distribution** and choose **Custom distribution**, for the store's domain. Shopify asks you to confirm because the choice cannot be changed later.

:::warning
Without a distribution method, Shopify does not let the app read protected customer data. Order and customer imports then fail with *This app is not approved to access the Order object*. Custom distribution gives the access automatically. Public distribution (the Shopify App Store) needs a review by Shopify and is not needed for this connector.
:::

## 5. Install the app and copy the credentials

1. Install the app on the store (from the Dev Dashboard, **Install app**, or with the custom distribution link).
2. In the app's **Settings** (or **Overview > Credentials**), copy the **Client ID** and the **Client secret**. Keep the secret private: it also signs the webhooks Shopify sends to Odoo.

Continue with [Connect the store](./connect-store.md).

## Existing custom app

A custom app created in the store admin before 2026 still works:

1. In the store admin, open the app and check its Admin API scopes against the table above.
2. Copy the **Admin API access token** (starts with `shpat_`) and the **API secret key**.
3. In Odoo choose **Connect With: Admin API access token**, paste the token in **Access Token** and the API secret key in **Client Secret**.

## Good to know

- One app can serve one store (Custom distribution) or all stores of one Shopify Plus organization. For several unrelated stores, create one app per store.
- Removing the app from the store stops the sync at once: Odoo marks the store **Connection Error** and removes the token (see [Webhooks](./webhooks.md)).
- Do not reuse an app that another system already uses for webhooks to Odoo: each Odoo store manages its own webhook subscriptions.

## FAQ

**Can I use the Shopify CLI instead of the Dev Dashboard?** Yes, as long as the app has the scopes above and is installed on the store. Odoo only needs the client ID and secret.

**Do I need a Shopify Partner account?** No. The Dev Dashboard of your own organization is enough.

**Which API version should the app use?** Any current version. Odoo chooses the version per request (the store's **API Version**, default 2026-10).
