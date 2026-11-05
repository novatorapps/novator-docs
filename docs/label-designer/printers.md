---
title: Printers and print quality
sidebar_position: 7
description: Resolution, darkness, speed, upside-down printing, fonts and how to fix labels that print too light, too small or shifted.
---

# Printers and print quality

## Which printers

- **ZPL**: Zebra desktop and industrial printers (ZD, GK, GX, ZT, ZQ and others), and printers with a ZPL mode: many Honeywell, TSC, SATO and Godex models. Check that ZPL (ZPL II) is the active printer language.
- **PDF**: any printer, including label printers without ZPL.

## Resolution

Set **Printer Resolution** on the design to the resolution of the printer: 203 dpi (8 dots/mm), 300 dpi (12 dots/mm) or 600 dpi (24 dots/mm). A wrong setting prints the label too small (design at 203, printer at 300) or too large and cut off (design at 300, printer at 203). The printer's configuration label shows its resolution: on most Zebra desktop printers, hold the feed button until the status light flashes once.

## Darkness and speed

**Darkness** (1 to 30) and **Print Speed** (inches per second) are sent with every ZPL label. Leave them at 0 to keep the printer's own settings, which is the best choice when one printer prints labels of several apps.

| Problem | Try |
|---|---|
| Barcodes do not scan, print looks grey | Darkness up by 3 to 5, or speed down |
| Bars run into each other, text is blurred | Darkness down, or a wider barcode element |
| Thin lines missing | Line thickness at least 0.3 mm |

## Labels come out upside down

Tick **Print Upside Down** on the design. The whole label is rotated by 180 degrees.

## Label position

The label starts at the top left corner of the label stock. If every label is shifted, run the printer's media calibration (on most Zebra desktop printers: hold the feed button until the light flashes twice), and check the label size set on the design.

## Fonts

- ZPL labels use the printer's scalable font (font 0), a clear condensed typeface. Special characters such as accents, the euro sign and other languages print as UTF-8.
- PDF labels use Lato.

If accents, umlauts or the euro sign print as wrong characters on an older printer, set **Character Set** on the design to *Windows-1252* (Western European languages) or *Code page 850*.

Text is measured with the font of each output, so it wraps at the same place on the canvas and on the label. Because the ZPL font is narrower, a long text may fit on fewer lines in ZPL than in PDF.

## Check a label without a printer

**Show ZPL** in the designer shows the exact ZPL. Online ZPL viewers draw it as a picture, which is handy to check a design before the printer arrives.
