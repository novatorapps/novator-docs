---
title: Taxes
sidebar_position: 6
description: How WooCommerce tax rates map to Odoo taxes, and what to check when totals differ.
---

import Taxes, {toc as taxesToc} from '@site/src/partials/commerce/Taxes.mdx';

export const toc = [
  {value: 'WooCommerce tax rates', id: 'woocommerce-tax-rates', level: 2},
  ...taxesToc,
];

# Taxes

## WooCommerce tax rates

Each WooCommerce order line lists the tax rates applied to it by **rate ID** (the rate in **WooCommerce > Settings > Tax > Standard rates**, for example *US CA 7.25% - Sales tax*). The order's tax lines give each rate's label and percentage. Odoo keeps one tax mapping per store and rate ID.

- Only rates that actually charged something on the line are used.
- Shipping lines and fee lines carry their own rates and are mapped the same way.
- Prices sent from WooCommerce are tax excluded, also when the shop shows prices including tax, so Odoo's taxes must be *tax excluded* (the mapping looks for and creates those).

<Taxes platform="WooCommerce" img="/img/woocommerce-connector" />
