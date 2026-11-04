---
title: Create the WooCommerce API key
sidebar_label: Create the API key
sidebar_position: 1
description: Prepare WordPress and WooCommerce and create the REST API key Odoo uses to connect.
---

# Create the WooCommerce API key

Odoo talks to your store through the WooCommerce REST API (version 3). It needs one API key: a **consumer key** and a **consumer secret**.

## Before you start

- **WooCommerce 5.8 or newer**, with WordPress 5.6 or newer.
- **Pretty permalinks.** In WordPress, open **Settings > Permalinks** and choose anything but *Plain*. With *Plain* permalinks the address `/wp-json/` does not exist and Odoo gets an HTML page instead of an API answer.
- **A WordPress user with the Administrator or Shop manager role.** The key acts with the rights of this user. A Shop manager can read and change products, orders, customers, coupons and webhooks, which is all Odoo needs. Many shops create a dedicated user (for example *odoo@yourshop.com*) so the API activity is easy to recognize in WooCommerce.
- **HTTPS is recommended.** On plain `http://` stores the key is still safe (Odoo signs every request with OAuth 1.0a), but webhooks and images work best over HTTPS.

## Create the key

1. In WordPress, go to **WooCommerce > Settings > Advanced > REST API**.
2. Click **Add key**.
3. Fill in:
   - **Description**: for example *Odoo*.
   - **User**: the Administrator or Shop manager user.
   - **Permissions**: **Read/Write**. *Read* is not enough: Odoo sends stock, prices, order statuses, refunds and webhooks.
4. Click **Generate API key**.
5. Copy the **Consumer key** (starts with `ck_`) and the **Consumer secret** (starts with `cs_`). The secret is shown only once; if you lose it, revoke the key and create a new one.

:::warning
Treat the key like a password. Anyone with it can read and change your store data. In Odoo only users with the **Online Stores / Administrator** right see the keys.
:::

## Optional: application password for image uploads

If your store cannot reach your Odoo server (for example Odoo runs on a private network), Odoo can upload product images to the WordPress media library instead of letting the store download them. That needs a WordPress **application password**:

1. In WordPress, open **Users > Profile** of the user that will own the uploaded images.
2. Under **Application Passwords**, enter a name (for example *Odoo*) and click **Add New Application Password**.
3. Copy the password (four groups of letters). Spaces do not matter.

You enter it later in the store settings, see [Store settings](./store-settings.md#product-images).

## Good to know

- One key per store. If you connect a staging store too, create a separate key there.
- Revoking the key in WooCommerce stops all syncing at once: Odoo then reports *check the API keys and that they have Read/Write permission* on the next job.
- The key does not expire. Rotate it when the WordPress user leaves your team.

## Next step

[Connect the store in Odoo](./connect-store.md).
