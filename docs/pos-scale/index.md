---
title: POS Scale Integration
sidebar_label: Overview
sidebar_position: 1
description: Weigh products in Point of Sale with your own USB or serial scale, read by the browser. No IoT Box.
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="pos-scale" />

<img className="app-icon" src="/img/pos-scale/icon.png" alt="" />

# POS Scale Integration

Weigh products in the Point of Sale with your own USB or serial scale. Chrome, Edge or Opera read the scale directly through the Web Serial API. **No IoT Box, nothing to install.** Free and open source.

<span className="version-pill">Odoo 13.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">Free (AGPL-3)</span>

![Scale window with the live weight](/img/pos-scale/scale_window_live.png)

- **Live weight** in the standard POS scale window, refreshed several times per second.
- **No sale on a moving scale**: unstable readings are held back.
- **No scale? Keep selling**: the cashier can type a weight.
- **Works with your scale**: port settings come from a scale profile.

[POS Scale Integration on the Apps Store](https://apps.odoo.com/apps/modules/20.0/pos_scale_webserial)

## Next steps

1. [Install the app](/getting-started/install).
2. [Set up the scale](./setup.md).
