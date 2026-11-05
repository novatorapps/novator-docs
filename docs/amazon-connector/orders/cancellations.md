---
title: Cancellations
sidebar_position: 3
description: Orders cancelled on Amazon are cancelled in Odoo; cancelling in Odoo before shipment cancels on Amazon.
---

import CancelExportCommon, {toc as partialToc} from '@site/src/partials/commerce/CancelExportCommon.mdx';

export const toc = [{value: 'Cancelled on Amazon', id: 'cancelled-on-amazon', level: 2}, {value: 'Cancelled in Odoo', id: 'cancelled-in-odoo', level: 2}, ...partialToc];

# Cancellations

## Cancelled on Amazon

When the buyer or Amazon cancels an order, the next order check cancels it in Odoo. If it was already delivered or invoiced, Odoo does not cancel it but schedules an activity for the salesperson to look at it.

## Cancelled in Odoo

You can cancel an FBM order in Odoo before it is shipped (for example when an item is out of stock). Odoo tells Amazon with an order acknowledgement feed, and Amazon cancels the order and refunds the buyer. FBA orders are handled by Amazon and cannot be cancelled from Odoo.

<CancelExportCommon platform="Amazon" />
