---
title: Jobs
sidebar_position: 2
description: "The job queue: what each job is, retries, buttons and common Jazi errors."
---

import Jobs, {toc as partialToc} from '@site/src/partials/commerce/Jobs.mdx';

export const toc = [...partialToc, {value: 'Jazi errors you may see', id: 'jazi-errors-you-may-see', level: 2}];

# Jobs

Every sync with Jazi runs as a job: scheduled checks and the actions you start.

<Jobs platform="Jazi" img="/img/jazi-connector" />

## Jazi errors you may see

| Message in the job | Meaning and fix |
|---|---|
| *UNAUTHORIZED* (HTTP 401) | The API token was revoked or mistyped. Create a new token in the Jazi seller portal and paste it on the store. |
| *Products not found in Odoo: ...* | A Jazi item's seller SKU matches no Odoo product. Give the product that code (or link it), then **Retry**. |
| *INCOMPLETE* on Submit for Review | Jazi's content check failed, usually a missing Arabic name or description. Fill them on the Jazi product (or **Translate to Arabic**), **Update on Jazi**, then submit again. |
| *TOTAL_BELOW_RESERVED* in a stock batch | Jazi holds more units for open orders than the quantity sent. Ship or cancel those orders, then send stock again. |
| *Could not reach Jazi* | Network problem or Jazi unavailable. The job retries by itself. |
