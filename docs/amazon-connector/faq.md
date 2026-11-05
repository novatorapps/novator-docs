---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions and fixes for the Odoo Amazon Connector, from the developer app to settlements.
---

# FAQ and troubleshooting

## Connecting

### Develop Apps says Access Required

Only the **primary user** of the seller account (the person who created it) can register as a developer. Ask the account owner to sign in and follow [Create your developer app](./setup/developer-app.md). Other users can still use the connector once the keys are in Odoo.

### Test Connection says the token request was refused (invalid_grant or invalid_client)

Check the **LWA Client ID** and **LWA Client Secret** (copy them again with **View** in Develop Apps) and the **Refresh Token**. A refresh token stops working when the app is authorized again or its secret is rotated: authorize again and paste the new token.

### Test Connection works, but orders fail with Access denied

A role is missing on the app. Add it in the developer profile and on the app client, wait for Amazon's approval, then **Authorize** the app again and paste the new refresh token.

### FBM orders come without the buyer's address

The app has no *Direct-to-Consumer Shipping* role (restricted). Ask for it in the developer profile; until then you can ship from Seller Central.

### Which region do I choose?

The region of your **home marketplace** (Odoo fills it in). One seller account in Saudi Arabia that also sells on Amazon.ae stays one store in the Europe, Middle East, India and Africa region.

### Can I connect several Amazon accounts?

Yes: one store per seller account, in one or several companies. The same seller account cannot be connected twice in one company.

## Orders

### An order is missing

- Is it still *Pending* at Amazon? It comes when Amazon confirms the payment (or turn on **Import Pending Orders as Quotations**).
- Is its marketplace **Active** on the Marketplaces tab, and are **Import FBM Orders** / **Import FBA Orders** on?
- Look at **Online Stores > Queue > Jobs** for a failed job, for example *Products not found in Odoo*.
- Orders older than **Import Orders From** are not read: set an earlier date and click **Check Orders Now**.

### The Odoo total differs from Amazon

Usually a tax mapping: the Amazon rate is mapped to an Odoo tax that is not included in the price (or the other way round). Fix the tax in **Online Stores > Configuration > Taxes** and click **Update From Store** on the order. See [Taxes and VAT](./setup/taxes.md).

### A new tax "Amazon SA tax 15%" appeared

Amazon used a rate that had no mapping and **Create Missing Taxes** was on. Map the rate to your VAT tax in **Online Stores > Configuration > Taxes**, then archive the created tax.

### The shipment did not reach Amazon

Open **Online Stores > Amazon Feeds**: the feed of the delivery shows Amazon's result. Common causes: the order was already shipped in Seller Central, or a test copy of the database (which never sends).

## Money

### The settlement is in state Check

The transactions do not add up to the deposit, often because the report was still being written by Amazon. Delete the settlement and click **Import Settlements Now** the next day.

### Do I need to enter Amazon fees by hand?

No. Settlements book commissions, FBA and storage fees on your fees account, per charge type.

## Other

### Does it work with Odoo Community?

Yes, Community and Enterprise, on Odoo.sh or your own server. Not on Odoo Online, which does not allow custom apps.

### Does Amazon charge for the API?

No. Developer registration and the Selling Partner API are free.

### Is my data sent to Novator?

No. With your own developer app your Odoo talks to Amazon directly. Link with Amazon (coming soon) will only use Novator's service for signing in and renewing the access token; orders and other data will still go directly between Odoo and Amazon.
