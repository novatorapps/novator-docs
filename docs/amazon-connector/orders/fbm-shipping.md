---
title: Shipping FBM orders
sidebar_position: 2
description: Validate the delivery in Odoo and Amazon gets the shipment confirmation with carrier and tracking number; feeds and their results.
---

import FulfillmentCommon, {toc as partialToc} from '@site/src/partials/commerce/FulfillmentCommon.mdx';

export const toc = [...partialToc, {value: 'Carriers', id: 'carriers', level: 2}, {value: 'Feeds', id: 'feeds', level: 2}];

# Shipping FBM orders

For orders you ship yourself (FBM), Amazon needs a shipment confirmation, usually within its handling time. Odoo sends it when you validate the delivery.

<FulfillmentCommon platform="Amazon" />

Amazon then marks the order *Shipped*, tells the buyer, and with the default **Amazon FBM** payment method Odoo invoices and pays the order.

## Carriers

Odoo sends the carrier of the delivery (**Carrier** on the transfer) with its tracking number. Carriers Amazon knows (Aramex, SMSA, DHL, UPS, FedEx, Royal Mail, DPD, GLS and many more) are sent with Amazon's carrier code; any other carrier is sent as *Other* with its name. Use the carrier name as Amazon lists it, for example *SMSA Express* or *Aramex*.

## Feeds

Shipments, cancellations, stock and prices go to Amazon as **feeds**. **Online Stores > Amazon Feeds** lists them with the number of messages, errors and their state.

![Amazon feeds](/img/amazon-connector/feeds.png)

Odoo checks the result of each feed a few minutes later (or **Check Feed Results Now** on the Fulfillment tab). An error, for example an unknown order item, is shown on the feed and in the log.
