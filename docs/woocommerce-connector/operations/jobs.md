---
title: Jobs
sidebar_position: 2
description: "The job queue: retries, failed jobs, merging and the most common errors."
---

import Jobs, {toc as partToc} from '@site/src/partials/commerce/Jobs.mdx';

export const toc = [...partToc, {value: 'A failed WooCommerce job', id: 'a-failed-woocommerce-job', level: 2}];

# Jobs

<Jobs platform="WooCommerce" img="/img/woocommerce-connector" />

## A failed WooCommerce job

The job form shows the full error returned by WooCommerce, with the HTTP status and the WooCommerce error code, for example `woocommerce_rest_product_invalid_id`.

![A failed job with its reason](/img/woocommerce-connector/job_failed.png)

| Error | Cause | Fix |
|---|---|---|
| *... (check the API keys and that they have Read/Write permission) [HTTP 401 ...]* | Wrong or revoked key, Read-only key, or the host drops the Authorization header | New key with Read/Write, or **Authentication** *Keys in the address* |
| *The store did not answer with JSON (HTTP ...)* | Wrong address, *Plain* permalinks, a security plugin or maintenance page | Check **Store Address** and permalinks |
| *Store not reachable* | DNS, firewall or the store is down | Retried automatically; check the store |
| *Products not found in Odoo: ...* | An order line has no linked product | Import or link the product, then **Retry** |
