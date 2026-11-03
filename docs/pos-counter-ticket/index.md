---
title: POS Counter Ticket
sidebar_label: Overview
sidebar_position: 1
description: Print an order slip at any counter, scan it and pay at the checkout.
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="pos-counter-ticket" />

<img className="app-icon" src="/img/pos-counter-ticket/icon.png" alt="" />

# POS Counter Ticket

Counter staff build the customer's order in the Point of Sale and **print a barcode ticket** instead of taking payment. The customer carries on shopping, and the cashier **scans the ticket** to add every item with the same prices. A ticket is marked paid only when the order that contains it is paid.

For bakeries, delis, butchers, fish and cheese counters, sweet shops, pharmacies, electronics and hardware stores: any shop where one person prepares the order and another takes the money.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">$299, one-time</span>

![Counter Point of Sale with the Print Ticket button](/img/pos-counter-ticket/counter_cart.png)

- **Shorter queues**: counter staff serve the next customer while payment happens once, at the checkout.
- **No unpaid goods**: each ticket is *Printed*, *Scanned* or *Paid*; only the order that pays for it can mark it paid.
- **Same price on the slip and the till**: tickets keep the counter prices, discounts and taxes.

No special hardware: any Odoo receipt printer (or a normal printer through the browser) and any barcode scanner that types like a keyboard.

[POS Counter Ticket on the Apps Store](https://apps.odoo.com/apps/modules/20.0/pos_bakery_ticket)

## Next steps

1. [Install the app](/getting-started/install).
2. [Set up your counters and use tickets](./use.md).
