---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about POS Scale Integration.
---

# FAQ and troubleshooting

### Connect scale does nothing, or the scale is not in the list

Check the browser (Chrome, Edge or Opera on desktop), that Odoo is opened over HTTPS, and that the scale's USB-serial driver is installed on the computer.

### The weight never appears

The port settings do not match the scale. Compare the baud rate, data bits, parity and stop bits in the scale profile with the scale manual. Send us the scale model and a sample of what it prints.

### Can two browser tabs use the scale?

No. A serial port can be open in one tab at a time. Close the other tab and click the scale button.

### Does it create IoT records?

No. It does not create any IoT Box or device record.

### Odoo 20 can already read USB scales. Why this app?

Odoo 20 reads scales that speak the Toledo protocol. This app reads every other text-output scale, with your port settings, manual weight and automatic add.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the scale model and a screenshot.
