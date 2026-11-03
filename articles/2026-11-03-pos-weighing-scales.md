---
slug: weighing-scales-in-odoo-point-of-sale
title: Connecting a weighing scale to Odoo Point of Sale
description: The ways a scale can feed weights into Odoo Point of Sale, what each needs, and what to check before buying a scale.
tags: [point-of-sale, hardware, scales]
date: 2026-11-03
---

Selling by weight means the cashier puts the item on the scale and the price follows from the weight. For that, the weight has to get from the scale into the Point of Sale. There are three common ways to do it, and the right one depends on your Odoo version, your scale and your counter.

{/* truncate */}

## Products sold by weight

Whatever the connection, start with the products. A product sold by weight has a unit of measure in weight (kg or lb) and, on the product's **Point of Sale** tab, the option **To Weigh**. Its sales price is the price per unit of weight. When the cashier adds it and a scale is connected, Point of Sale asks the scale for the weight.

## Option 1: an Odoo IoT system

Odoo's standard way to connect hardware is an **IoT Box** (or, for some devices, a virtual IoT system on a Windows computer). The scale is plugged into the IoT system, which talks to Odoo over the network. Odoo's documentation states that an IoT subscription is required for production use. Check Odoo's list of compatible IoT devices for your scale model before you buy.

## Option 2: the browser (Web Serial)

Chrome, Edge and Opera on a computer can talk to a USB or serial device directly through the **Web Serial** standard, with the user's permission. No box is needed: the scale is plugged into the computer that runs Point of Sale. A few things to know:

- The page must be opened over **HTTPS**, which is normal for Odoo.sh and for any properly set up server.
- The first time, the browser asks which port to use, and remembers the choice.
- Web Serial is not available in Safari or Firefox, or on phones and most tablets.
- **Odoo 20** includes this for scales that use the Toledo protocol, so on Odoo 20 with such a scale nothing extra is needed. Other scales send their weight in their own text format and need an app that understands it.

## Option 3: weight in the barcode

Many counter scales print a **label** with a barcode that contains the weight or the price. The cashier scans the label and Odoo reads the weight from the barcode, so the scale is never connected to Odoo at all. This is set up in the barcode nomenclature that Point of Sale uses (its settings show which one), with a rule that matches the label format of your scale. With developer mode on, nomenclatures are under **Inventory > Configuration > Products > Barcode Nomenclatures**. It suits shops where goods are weighed and packed before they reach the till.

## What to check before buying a scale

1. **Connection:** USB or RS-232 serial. USB scales usually appear as a serial port; some use a different USB mode and are not readable as a serial device.
2. **Output format:** whether the scale sends its weight continuously or answers a command, and in which text format. The manual or the dealer can tell you.
3. **Port settings:** speed (baud rate), data bits, parity and stop bits. Note them; you will need them.
4. **Legal for trade:** in many countries a scale used to sell by weight must be approved and verified by the authority for weights and measures. Check the rules where you sell.
5. **Test it** with your actual computer and browser before you rely on it at a busy counter, and keep a way to type a weight by hand if the scale is not available.

## Related

- [POS Scale Integration](https://docs.novatorapps.com/pos-scale) reads text-output scales in the browser with your own port settings, on Odoo 13 to 20, without an IoT Box. It is free and open source.
