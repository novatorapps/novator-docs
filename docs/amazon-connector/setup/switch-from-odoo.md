---
title: Switch from Odoo's Amazon connector
sidebar_position: 5
description: Take over the orders and SKUs imported by Odoo Enterprise's own Amazon connector, then disconnect it without importing anything twice.
---

# Switch from Odoo's Amazon connector

Odoo Enterprise has its own Amazon connector (**Sales > Amazon**, module `sale_amazon`). If you used it, follow these steps so that no order is imported twice.

1. Install this connector and [connect the store](./connect-store.md) with the same seller account. Leave **Send FBM Stock** and **Send Prices** off on the marketplaces for now.
2. On the store's **Fulfillment** tab, click **Take Over Orders and SKUs**. Odoo links the orders imported by Odoo's connector (by Amazon order number) and its SKUs (offers) to the new store. Several Amazon accounts in the company? Enter the **Seller ID** first: only the orders and SKUs of the matching account are taken over.
3. Open the Amazon accounts of Odoo's connector (**Sales > Configuration**, Amazon section) and archive the account, so it stops importing.
4. Click **Check Orders Now** on the new store and check that no order appears twice.
5. Switch on stock and prices on the marketplaces you want.
6. In Seller Central, **Apps and Services > Manage Your Apps**, click **Disable authorisation** next to *Odoo*.
7. After a week without problems, uninstall Odoo's Amazon connector if you like.

:::tip Test on a staging copy first
On Odoo.sh, run steps 1 to 4 on a staging build. A [test copy](../operations/test-databases.md) can read from Amazon but never sends anything, so it is safe.
:::
