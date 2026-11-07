---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions and fixes for the Odoo Jazi Connector, from the API token to AWB.
---

# FAQ and troubleshooting

## Connecting

### Test Connection says the token is not valid
Create a new token in the Jazi seller portal (**Developers > API Tokens > New Token**) and paste it again; Jazi shows each token only once. Check that the environment matches the token: a sandbox token only works with **Sandbox**.

### Can I connect two Jazi accounts?
Yes, one store per account, in one or several companies. The same account cannot be connected twice, so orders are never imported twice.

### Does it work on Odoo Online?
No. Odoo Online does not allow third-party apps. Use Odoo.sh or your own server.

## Products

### Import products linked nothing
The seller SKUs on Jazi must match the Odoo code chosen in **Match Products By** (internal reference or barcode). Check one variant in the Jazi seller portal against the Odoo product, change the setting or the codes, and import again. Unmatched variants are listed in **Queue > Log**.

### A product is not in List Products
**List Products** shows products with a photo and a weight that are not on Jazi yet. Add the missing photo or weight, or list the product from **Action > List on Jazi**.

### Submit for Review fails with INCOMPLETE
Jazi checks the content before review, usually the Arabic name and descriptions. Fill them on the Jazi product, **Update on Jazi** with **Details**, then submit again.

### Can Odoo write the Arabic text?
Yes, with **Translate to Arabic** and your own Google Cloud API key. Only empty fields are filled. Read the result before submitting.

### Jazi shows different stock than Odoo
Compare **Stock Now** and **Stock Sent** in **Product Links**. They differ until the next send (about a minute after a stock move). A refused batch item, for example *TOTAL_BELOW_RESERVED*, is in the log with its reason.

## Orders

### Orders arrive late
Set up [order notifications](./setup/order-notifications.md). Without them, orders come with the scheduled check (every 15 minutes by default).

### An order failed with Products not found
A Jazi item's seller SKU matches no Odoo product. Link the product, then **Retry** the job.

### No AWB on the delivery
Check that **Send Deliveries to the Store** and **Generate AWB After Fulfilment** are on, and look at the job of the delivery in **Queue > Jobs**. If Jazi refused the fulfilment, the job says why.

## Help

Write to support@novator.co with the store name, the job or log line and a screenshot. See [Support policy](./support-policy.md).
