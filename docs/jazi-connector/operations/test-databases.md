---
title: Test copies of your database
sidebar_position: 5
description: "Staging and duplicated databases read from Jazi but never send anything to it."
---

import TestDatabases, {toc as partialToc} from '@site/src/partials/commerce/TestDatabases.mdx';

export const toc = [...partialToc];

# Test copies of your database

A copy of your database (an Odoo.sh staging build, a duplicate for tests) still has the Jazi token. The connector makes sure such a copy cannot change your live Jazi account: it can read orders and products, but it never creates or updates products, and never sends stock, prices or fulfilments.

<TestDatabases platform="Jazi" />

## Scheduled actions in staging

Odoo.sh switches off all scheduled actions in staging builds, so jobs you start there (Import products, Check Orders Now, ...) wait in **Pending Jobs**. The store then shows *Scheduled actions are switched off in this database* with a **Run Pending Jobs** button: click it to run them now.
