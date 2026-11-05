---
title: Fulfillment by Amazon (FBA)
sidebar_position: 3
description: The FBA warehouse in Odoo, FBA stock read every 6 hours, FBA orders delivered from it, and customer returns.
---

# Fulfillment by Amazon (FBA)

Odoo keeps your FBA stock in its own warehouse, so stock value, reports and reorder rules see what is at Amazon.

## Create the FBA warehouse

On the store's **Fulfillment** tab, click **Create FBA Warehouse**. Odoo creates a warehouse **Amazon FBA** (code AFBA) with an **Unsellable** location for damaged returns. Several Amazon stores get one FBA warehouse each (AFB2, AFB3...).

## FBA stock

With **Read FBA Stock** on, Odoo reads Amazon's FBA inventory every 6 hours (or **Read FBA Stock Now**) and sets the quantity of each FBA SKU in the FBA warehouse to Amazon's available plus reserved units. The product link also shows the **unsellable** and **inbound** (on the way to Amazon) quantities.

## FBA orders

FBA orders are delivered from the FBA warehouse and validated at once (Amazon has shipped them), then invoiced. Odoo does not send anything to Amazon for them.

## Returns

See [Refunds and returns](../orders/refunds-returns.md#fba-customer-returns).

:::note Sending stock to Amazon
Move stock to Amazon with a normal internal transfer from your warehouse to the FBA warehouse when you ship an inbound shipment. The next FBA stock read corrects any difference.
:::
