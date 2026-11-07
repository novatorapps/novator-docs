---
title: Test copies of your database
sidebar_position: 5
description: "Staging and duplicated databases read from Amazon but never send anything to it."
---

import TestDatabases, {toc as partialToc} from '@site/src/partials/commerce/TestDatabases.mdx';

export const toc = [...partialToc];

# Test copies of your database

A copy of your database (an Odoo.sh staging build, a duplicate for tests) still has the Amazon keys. The connector makes sure such a copy cannot change your live Amazon account: it can read orders and listings, but it never sends shipments, stock, prices or cancellations.

<TestDatabases platform="Amazon" />

## Scheduled actions in staging

Odoo.sh switches off all scheduled actions in staging builds, so jobs you start there (Import Listings, Check Orders Now, ...) wait in **Pending Jobs**. The store then shows *Scheduled actions are switched off in this database* with a **Run Pending Jobs** button: click it to run them now.
