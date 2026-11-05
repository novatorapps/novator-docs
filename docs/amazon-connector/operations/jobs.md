---
title: Jobs
sidebar_position: 2
description: "The job queue: what each job is, retries, buttons and common Amazon errors."
---

import Jobs, {toc as partialToc} from '@site/src/partials/commerce/Jobs.mdx';

export const toc = [...partialToc, {value: 'Amazon errors you may see', id: 'amazon-errors-you-may-see', level: 2}];

# Jobs

Every sync with Amazon runs as a job: scheduled checks and the actions you start.

<Jobs platform="Amazon" img="/img/amazon-connector" />

## Amazon errors you may see

| Message in the job | Meaning and fix |
|---|---|
| *Amazon: Unauthorized* or *Access to requested resource is denied* | A role is missing on the developer app, or the app was not authorized again after adding it. Add the role in Seller Central (**Develop Apps**), then click **Authorize** again and paste the new refresh token. |
| *invalid_grant* (token refresh) | The refresh token was revoked or the client secret changed. Authorize the app again and paste the new keys. Amazon makes you rotate the client secret every 180 days. |
| *QuotaExceeded* (HTTP 429) | Amazon's rate limit. Odoo waits and retries by itself; it only shows when it keeps failing. |
| *InvalidInput* | Amazon refused the request, for example an unknown marketplace. Check **Test Connection** and the Marketplaces tab. |
| *Products not found in Odoo: ...* | Import the listings or link the SKU, then **Retry**. |
| Feed with errors | Open **Online Stores > Amazon Feeds**: each feed shows the messages Amazon accepted and the errors it found (for example an unknown SKU). |
