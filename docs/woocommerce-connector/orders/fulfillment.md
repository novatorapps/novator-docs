---
title: Deliveries and tracking
sidebar_position: 5
description: How a validated delivery in Odoo completes the WooCommerce order and sends the tracking number.
---

import FulfillmentCommon from '@site/src/partials/commerce/FulfillmentCommon.mdx';

# Deliveries and tracking

When you ship an order from Odoo, WooCommerce should show it as *Completed* and the customer should get the tracking number. The connector does both.

## Before you start

- **Send Deliveries to the Store** is on (store, **Orders** tab, **Status Changes**).
- Choose **Send Tracking As** on the **Orders** tab (see below).
- For tracking numbers, install Odoo's **Delivery** app (`stock_delivery`): it adds the **Tracking Reference** and **Carrier** fields to deliveries. Without it, the order is completed without a tracking number.

## Method 1: automatic, when the delivery is validated

<FulfillmentCommon platform="WooCommerce" />

## Method 2: manual, from the order

Open the sales order and click **Send Delivery to Store**. Use it when the automatic send failed (fix the cause, then send again) or for orders delivered before the store was connected. The list filter **Delivered, Not Sent to Store** shows orders waiting for this.

## What changes in WooCommerce

| Odoo | WooCommerce |
|---|---|
| All deliveries of the order done | Status **Completed** (WooCommerce emails the customer its *Completed order* message) |
| Partial delivery (some items still to deliver) | Status unchanged; only the tracking number is sent |
| Tracking Reference and Carrier of the delivery | Depends on **Send Tracking As**, below |
| **Send Tracking Note to the Customer** on | With **Order note** or **Order meta field**: a note visible to the customer (WooCommerce emails it), also without a tracking number when the order is completed |
| **Send Tracking Note to the Customer** off | With **Order note** or **Order meta field**: a private note, only when there is a tracking number |

## Send Tracking As

| Choice | What Odoo does | Use it when |
|---|---|---|
| **Order note** (default) | Adds an order note *Your order has shipped. Tracking: Carrier 1Z...* | You have no tracking plugin. The customer sees the note in their account and in the note email. |
| **WooCommerce Shipment Tracking extension** | Creates a tracking entry through the extension's API (`wc-shipment-tracking/v3`) with the carrier as provider | The official *Shipment Tracking* extension is installed. Its tracking box then appears in emails and in the customer account. |
| **Order meta field** | Writes the tracking numbers (comma separated) to the order meta key in **Tracking Meta Key** (default `_tracking_number`), and adds the order note | Another plugin (for example a shipping or email plugin) reads tracking numbers from a meta field. |

:::warning
With **WooCommerce Shipment Tracking extension** and the extension not installed, the job fails with *Shipment Tracking extension: ...*. Install the extension or choose another option, then click **Send Delivery to Store**.
:::

## Good to know

- One order can have several deliveries (backorders). A validated delivery sends its own tracking number; the status changes to *Completed* when everything is delivered. After that, later deliveries of the order are not sent again.
- An order already *Completed* in WooCommerce is not set again; only the tracking is added.
- In a test copy of the database, nothing is sent.
- If **Validate Delivery** is on for the payment method, Odoo validates the delivery itself at import ([Payment methods](../setup/payment-methods.md)). That delivery is sent like any other, so WooCommerce marks the order *Completed* about 30 seconds after the import. Use **Validate Delivery** only for orders you do not ship from Odoo (for example digital goods), or turn **Send Deliveries to the Store** off.

## FAQ

**The order is delivered in Odoo but still Processing in WooCommerce.** Look for a failed *Send delivery of ...* job in **Queue > Jobs**. Check that **Send Deliveries to the Store** is on, then use **Send Delivery to Store** on the order.

**The customer did not get the tracking number.** Check **Send Tracking Note to the Customer** and that the delivery has a **Tracking Reference** before you validate it.
