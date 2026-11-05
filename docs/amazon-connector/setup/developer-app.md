---
title: Create your developer app
sidebar_position: 1
description: Register as a private developer in Seller Central, choose the roles, create the app client and get the client ID, client secret and refresh token for Odoo.
---

# Create your developer app

Odoo talks to Amazon through the Selling Partner API (SP-API) with a small app that you create in your own Seller Central account. It is free, takes about 15 minutes, and only your Odoo uses it. You do this once per seller account.

:::note Before you start
- Only the **primary user** of the seller account can register as a developer. Other users, even with full admin rights, see *Access Required* on **Develop Apps**: ask the account owner to do these steps, or to sit with you.
- You need a **Professional** selling plan.
- Amazon charges nothing for registering or for using the API.
- Prefer one click instead of keys? **Link with Amazon** is coming soon (see [Connect the store](./connect-store.md)).
:::

## 1. Register as a private developer

1. In Seller Central open **Apps and Services > Develop Apps** (on some marketplaces: **Partner Network > Develop Apps**).
2. Click **Proceed to Developer Profile** and choose **Private developer: I build applications that integrate my own company with Amazon APIs**.
3. Fill in the organisation and contact details.
4. Select the roles below. Amazon asks a few questions about how you protect data for some of them; suggested answers follow the table.

| Role | Why the connector needs it |
|---|---|
| Product Listing | Read your listings and offers; send prices. |
| Pricing | Read and send prices per marketplace. |
| Inventory and Order Tracking | Read orders; send FBM stock and shipment confirmations. |
| Amazon Fulfillment | Read FBA stock and FBA customer returns. |
| Finance and Accounting | Read refunds and settlements. |
| Selling Partner Insights | Read your marketplaces (Test Connection). |
| Direct-to-Consumer Shipping *(restricted)* | Read the buyer's name and delivery address of FBM orders, so you can ship them. |
| Tax Invoicing *(restricted)* | Read the buyer's billing details for invoices. |

The two restricted roles give access to buyer data. You need them for FBM orders with addresses. If you only sell FBA, you can leave them out: orders then come without the buyer's address.

**Suggested answers to Amazon's data protection questions** (adapt them to your company):

- Buyer data is stored only in our own Odoo database, which is protected by user logins and access rights, reached over HTTPS, and backed up by our hosting provider.
- Buyer addresses are removed from Odoo a set number of days after delivery (the store setting **Remove Buyer Addresses After**).
- No third party receives the data.
- Security incidents are reported to Amazon within 24 hours.

5. Submit. Amazon usually approves within a day; the restricted roles can take a few days and sometimes a follow-up question by email.

## 2. Add the app client

1. Back on **Develop Apps**, click **Add new app client**.
2. App name: for example *Odoo*. API type: **SP API**.
3. Select the same roles as in your profile and save.

## 3. Copy the keys

1. In the list of apps, next to your app, click **View** under *LWA credentials*: copy the **Client identifier** (starts with `amzn1.application-oa2-client.`) and the **Client secret**.
2. Click the arrow next to **Edit App** and choose **Authorize**, then **Authorize app**: copy the **refresh token** (starts with `Atzr|`).
3. Your **Seller ID**: Seller Central > **Settings > Account Info > Merchant Token**.

:::warning Keep the keys private
The client secret and the refresh token give access to your Amazon account. Paste them only into Odoo (only Online Stores administrators can see them), never into email or chat.
:::

## Rotating the client secret

Amazon asks you to rotate the client secret every 180 days and shows the deadline next to the app. When you rotate it:

1. In **Develop Apps**, generate the new secret.
2. In Odoo, open the store, paste the new **LWA Client Secret**, save and click **Test Connection**.

If the deadline passes, the old secret stops working and the jobs fail with *invalid_grant* until you paste the new one.

## Next step

[Connect the store](./connect-store.md) in Odoo.
