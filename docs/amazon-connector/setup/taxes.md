---
title: Taxes and VAT
sidebar_position: 4
description: How Amazon VAT is mapped to Odoo taxes per marketplace, price-included taxes, and marketplace facilitator tax.
---

import Taxes, {toc as partialToc} from '@site/src/partials/commerce/Taxes.mdx';

export const toc = [{value: 'Amazon VAT', id: 'amazon-vat', level: 2}, ...partialToc];

# Taxes and VAT

## Amazon VAT

Amazon sends the tax of each order line. Odoo turns it into a rate per marketplace, for example **amz-SA-15** (15% on Amazon.sa) or **amz-AE-5** (5% on Amazon.ae), and maps each rate to an Odoo tax once.

- **Map them before the first orders.** In **Online Stores > Configuration > Taxes**, create a line per marketplace and rate: **Store Tax ID** `amz-<country>-<rate>` (for example `amz-SA-15`), **Odoo Tax** your VAT tax. Orders then use your own tax, with its accounts and tax grids.
- **Price-included taxes work.** In Saudi Arabia and the UAE prices usually include VAT. If the mapped Odoo tax is *included in price*, Odoo puts the price with VAT on the line, so the Odoo total equals the Amazon total to the cent.
- Amazon rounds the tax of every line to the cent. Odoo recognises the real rate (4.57 on 30.43 is 15%, not 15.02%), so one mapping covers every order.
- **Marketplace facilitator tax**: where Amazon collects and pays the tax itself (most US states, and some other countries), choose **Amazon Taxes: No taxes** on the store's **Orders** tab. Orders then come in without tax.

<Taxes platform="Amazon" img="/img/amazon-connector" />
