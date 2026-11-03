---
title: Set up a kiosk
sidebar_position: 2
description: Create a kiosk, choose price lists and branding, open it on the tablet and lock it.
---

# Set up a kiosk

## Create the kiosk

1. Go to **Price Checker > Configuration > Kiosks** and click **New**.
2. Choose the **price lists** it offers and the default one.
3. Choose what to show: barcode, reference, category, description, stock.
4. Add your logo, colours, background image, welcome and promotional messages. Clock and sound effects are optional.

![Kiosk settings](/img/price-checker-kiosk/backend_kiosk_form.png)

Create one kiosk per store, entrance or department, each with its own settings. In multi-company databases each kiosk shows its own company's products.

![Kiosks](/img/price-checker-kiosk/backend_kiosks.png)

## Price lists

Customers can switch between the price lists you add, for example *Retail* and *Business Members*, and see the price that applies to them. Price lists you do not add stay hidden.

![Business Members price list on the kiosk](/img/price-checker-kiosk/kiosk_members_price.png)

## Open it on the tablet

Each kiosk has its own private link. Click **Open Kiosk**, or copy the **Kiosk Link** and open it once on the tablet, then bookmark it. Anyone without the link sees nothing. If a link gets out, click **New Link**: the old one stops working at once.

Plug in the barcode scanner. Any USB or Bluetooth scanner that types like a keyboard works; customers can also type a barcode or internal reference.

## Idle screen

After a period without scans, the kiosk shows your logo and message. The next scan or tap brings the price checker back.

![Idle screen](/img/price-checker-kiosk/kiosk_idle.png)

## Lock mode

**Kiosk Lock Mode** keeps the kiosk in fullscreen so customers cannot leave it. Staff tap a hidden icon five times and enter the PIN to open the admin menu: refresh, open Odoo or exit kiosk mode.

![Lock mode settings](/img/price-checker-kiosk/backend_kiosk_lock.png)

![Admin PIN on the kiosk](/img/price-checker-kiosk/kiosk_pin.png)

New kiosks get a random 6-digit PIN. The PIN is checked by Odoo and never sent to the screen; after five wrong attempts the kiosk waits a minute. Kiosks with an easy PIN such as 1234 show a warning until it is changed.

![Weak PIN warning](/img/price-checker-kiosk/backend_weak_pin.png)

:::tip
For a fully locked device, also use the tablet's own kiosk or guided-access mode.
:::
