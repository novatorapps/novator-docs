---
title: Barcode Label Designer
sidebar_label: Overview
sidebar_position: 1
description: "Design ZPL and PDF labels inside Odoo: fields, formulas, barcodes, QR codes and line tables for any model."
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="label-designer" />

<img className="app-icon" src="/img/label-designer/icon.png" alt="" />

# Barcode Label Designer

Draw your own labels **inside Odoo**: product, lot, package, location and shipping labels, or labels for any other model. Add fields, Python formulas, barcodes, QR codes, images and line tables on a real-size canvas, then print the same design as **ZPL** on Zebra printers or as **PDF** on any printer.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">$99 Community edition</span> <span className="version-pill">$149 Enterprise edition</span>

![The label designer with a product label](/img/label-designer/designer_product.png)

- **No ZPL to write**: you draw the label, the app writes clean ZPL II and a PDF of the same layout.
- **Stays in your Odoo**: no outside designer website, no API key, no change to `odoo.conf`. It works behind a firewall and on Odoo.sh.
- **Real data while you design**: pick a record and see its values, barcodes and tables on the canvas.
- **Prints where you already print**: each design adds its actions to the **Print** menu of its model, and product designs appear in Odoo's **Print Labels** window.

## Two editions

| | Community edition | Enterprise edition |
|---|---|---|
| Module | `novator_label_designer` | `novator_label_designer_mrp` (installs the Community edition with it) |
| Runs on | Odoo Community and Enterprise | Odoo Enterprise with Manufacturing work orders |
| Everything on this page | Yes | Yes |
| Labels in work order **Print Labels** steps | No | Yes, see [Work orders](/label-designer/printing#work-orders-odoo-enterprise) |
| Price | $99 one-time | $149 one-time ($50 if you own the Community edition) |

[Community edition on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_label_designer) · [Enterprise edition on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_label_designer_mrp)

## What you can put on a label

| Element | What it prints |
|---|---|
| Text | Fixed text, fields in braces like `{default_code}`, or a Python formula |
| Barcode | Code 128, EAN-13, EAN-8, UPC-A, Code 39, with or without the readable value |
| QR code, Data Matrix | Lot numbers, serials, links, any text or field |
| Box, line, circle | Frames, separators, filled blocks |
| Image | A logo you upload, or an image field such as the product image |
| Lines table | One row per line of a list field: package contents, delivery lines, components |

## Next steps

1. [Install the app](./install.md).
2. [Create your first design](./setup.md).
3. [Learn the designer](./designer.md), then the [elements](./elements.md) and [formulas](./formulas.md).
4. [Print your labels](./printing.md) and [tune them for your printer](./printers.md).
