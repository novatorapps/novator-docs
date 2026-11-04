---
title: Jobs
sidebar_position: 2
description: "The job queue: what each job is, retries, merging, buttons and common Shopify errors."
---

import Jobs, {toc as partialToc} from '@site/src/partials/commerce/Jobs.mdx';

export const toc = [...partialToc, {value: 'Shopify errors you may see', id: 'shopify-errors-you-may-see', level: 2}];

# Jobs

Every sync with Shopify runs as a job: webhooks, scheduled checks, and the actions you start.

<Jobs platform="Shopify" img="/img/shopify-connector" />

## Shopify errors you may see

| Message in the job | Meaning and fix |
|---|---|
| *This app is not approved to access the Order object* (or Customer) | The app has no distribution method. Choose **Custom distribution** in the Dev Dashboard. |
| *Access denied for ... Required access: ...* | A scope is missing. Add it to a new app version, release it and approve the update in the store. |
| *Token request refused* | Wrong client ID or secret, or the app is not installed on the store. |
| *Shopify: ... [HTTP 401]* | The access token is no longer valid (app removed or token revoked). Reconnect. |
| *Throttled* | Shopify's rate limit. Odoo waits and retries by itself; only shows when it keeps failing. |
| *Products not found in Odoo: ...* | Link or import the product, then **Retry**. |
| *No Shopify location to send stock to* | Click **Test Connection** to read the locations, and map them. |
| *Shopify stock update: ...* | Shopify refused a quantity, for example for a location that no longer exists. Read the locations again. |
