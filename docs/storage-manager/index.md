---
title: Storage Analyzer and Storage Manager
sidebar_label: Overview
sidebar_position: 1
description: See what fills your Odoo database and filestore, then move old attachments to Google Drive, Cloudflare R2 or any S3 storage.
---

import AppSchema from '@site/src/components/AppSchema';

<AppSchema slug="storage-manager" />

<img className="app-icon" src="/img/storage-manager/icon_pro.png" alt="" />

# Storage Analyzer and Storage Manager

Two apps that work together to keep your Odoo storage under control.

- **Storage Analyzer** (free) shows what fills your database and filestore: by table, company, document type, file type and age, with the largest files, orphan and missing files, and a weekly growth trend.
- **Storage Manager** ($299, one-time) does everything the Analyzer does and moves old attachments to **Google Drive, Cloudflare R2, AWS S3, Wasabi, Backblaze B2 or MinIO**. Users keep opening those files from Odoo exactly as before.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">Odoo.sh &amp; On-Premise</span>

![Storage analysis](/img/storage-manager/storage_analysis.png)

## Which one do I need?

| | Storage Analyzer | Storage Manager |
|---|:---:|:---:|
| Database, largest tables and filestore size | ✓ | ✓ |
| Attachments by company, document type, file type and age | ✓ | ✓ |
| Largest attachments, orphan and missing files | ✓ | ✓ |
| Weekly analysis and growth trend | ✓ | ✓ |
| Offload to Google Drive, Cloudflare R2, S3 and others | | ✓ |
| Offload rules with preview, background runs | | ✓ |
| Files open as usual, fetch tracking, logs | | ✓ |

Start with the free Analyzer to see how much you could save. Both apps can be installed together.

- [Storage Analyzer on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_storage_analyzer)
- [Storage Manager on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_storage_manager)

## Next steps

1. [Install the app](/getting-started/install).
2. [Analyze your storage](./analyzer.md).
3. [Move old files to the cloud](./offload.md) with Storage Manager.
