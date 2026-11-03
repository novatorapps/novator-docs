---
slug: where-odoo-storage-goes
title: Where does the storage of an Odoo database go?
description: How Odoo stores files and data, how to measure what takes the space, and how to reduce it safely.
tags: [storage, odoo-sh, administration]
date: 2026-11-03
---

An Odoo database is two things: a PostgreSQL database with the records, and a **filestore** with the files. When a hosting plan or an Odoo.sh project says the database is too big, it is usually the filestore. This article explains where the space goes and how to measure it before you change anything.

{/* truncate */}

## Records and files are stored separately

Every file in Odoo is an **attachment** (the `ir.attachment` model): email attachments, PDF reports, product images, documents uploaded to a chatter, and also files Odoo generates for itself. By default the attachment record is in the database and the file content is in the filestore, a folder on disk at `<data directory>/filestore/<database name>`. The system parameter `ir_attachment.location` decides this; its default value is `file`.

Two details matter when you look at sizes:

- **Identical files are stored once.** The file name in the filestore is derived from the content, so the same PDF attached to ten records takes the space of one file.
- **Deleting an attachment does not free the space immediately.** Odoo marks the file and removes it later, during the scheduled clean-up, once nothing refers to it any more.

## Measure before you delete

If you can run SQL on the database (your own server, or the shell of an Odoo.sh build), three queries give a clear picture.

Size of the PostgreSQL database:

```sql
SELECT pg_size_pretty(pg_database_size(current_database()));
```

Biggest tables, including their indexes:

```sql
SELECT relname, pg_size_pretty(pg_total_relation_size(relid))
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 15;
```

Files by the kind of record they belong to:

```sql
SELECT res_model, count(*), pg_size_pretty(sum(file_size))
FROM ir_attachment
GROUP BY res_model
ORDER BY sum(file_size) DESC NULLS LAST
LIMIT 20;
```

The last query reads the `file_size` stored on each attachment, so it measures the files without touching the disk.

## The usual suspects

- **Email and chat attachments.** Every incoming email with attachments adds files to the record it is linked to, and to the discussion it belongs to.
- **Saved PDF reports.** Some reports, invoices for example, are kept as an attachment the first time they are printed, so the document stays identical later.
- **Images.** An image field keeps the original and several resized copies.
- **Message history.** Chatter messages and field tracking (`mail_message`, `mail_tracking_value`) grow with every change on every tracked record. This is database space, not filestore.
- **Generated files.** Odoo also stores its own compiled web assets as attachments. They are rebuilt when needed and are not something to clean by hand.

## Reduce it safely

1. **Never delete files from the filestore folder directly.** The attachment record would point to a missing file and the document would no longer open. Always delete through Odoo, which also handles files shared by several records.
2. **Back up first**, and test a clean-up on a copy of the database.
3. **Decide what may go.** Old email attachments on closed records are often safe to remove; posted invoices and their PDFs usually have to be kept for legal reasons. Check the rules that apply to your company.
4. **Move instead of delete.** Files you must keep but rarely open can live in cheaper storage, such as Amazon S3, Cloudflare R2 or Google Drive, while Odoo keeps the record and opens the file from there.

## Why it matters on Odoo.sh

On Odoo.sh the storage used by a project is part of what you pay for, and the database is copied for every staging build and every backup. A large filestore makes backups, restores and staging builds slower as well as more expensive. Check the current limits of your plan on odoo.sh.

## Related

- [Storage Analyzer](https://docs.novatorapps.com/storage-manager/analyzer) shows the same breakdown inside Odoo, with growth over time, without SQL.
- [Storage Manager](https://docs.novatorapps.com/storage-manager/offload) moves old files to S3, R2 or Google Drive with rules.
