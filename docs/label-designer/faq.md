---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Barcode Label Designer.
---

# FAQ and troubleshooting

### Does anything leave our Odoo?

No. The designer, the preview and the printing all run in your Odoo. There is no outside designer website, no API key and no account.

### Do I need to change odoo.conf?

No. Install the app like any other; it works on Odoo.sh and on your own server.

### My design is not in the Print menu

Check **Show in Print Menu** and **Output** on the design, and that the design is for the model you print from. Reload the page after saving.

### The product label window does not show my design

Only designs for *Product Variant* or *Product* are offered in **Print Labels**. Choose the format **Label Designer** first.

### A field shows nothing

The field is empty on that record, or the path is wrong. Pick it again from **Insert a field...** and check with **Preview with**.

### The label shows `#ERR`

A formula failed. See [When a formula fails](./formulas.md#when-a-formula-fails).

### The label prints too small or too large

The design's **Printer Resolution** does not match the printer. See [Resolution](./printers.md#resolution).

### Accents or symbols print wrongly

Set **Character Set** on the design to *Windows-1252* or *Code page 850*. See [Fonts](./printers.md#fonts).

### Text is cut with "..."

It does not fit in its element. Make the element wider, raise **Lines**, or lower the font size.

### A formula element prints nothing

Python formulas are switched off. See [Switch formulas on](./formulas.md#switch-formulas-on), or use a [format](./elements.md#formats) instead.

### Can I use custom and Studio fields?

Yes. Every stored and computed field of the model appears in the field list, including fields added with Studio or by other apps.

### Can I print labels for my own models?

Yes. Choose any model in **Print From**.

### Can several companies use different designs?

Yes. Set the **Company** on a design; designs without a company are shared.

### Does it work on Odoo Online?

No. Odoo Online does not allow custom apps. Use Odoo.sh or your own server.

### Is it a one-time payment?

Yes, once for your Odoo version, with free updates for that version: $99 for the Community edition, $149 for the Enterprise edition.

### Community or Enterprise edition?

The Community edition has everything except labels in work orders and runs on Odoo Community and Enterprise. The Enterprise edition adds labels in the Print Labels steps of work orders and needs Odoo Enterprise with Manufacturing work orders. If you already own the Community edition, the Enterprise edition costs the $50 difference.
