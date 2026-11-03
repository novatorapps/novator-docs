---
title: FAQ and troubleshooting
sidebar_position: 90
description: Common questions about Storage Analyzer and Storage Manager.
---

# FAQ and troubleshooting

### Will users notice that a file was moved?

No. They open, preview and download it from the same place. The first open after a move fetches the file from the cloud, which takes a moment longer.

### Does it work on Odoo.sh?

Yes. Analysis and offloading run in small background batches within Odoo.sh time limits, with no configuration changes.

### What happens when I duplicate my database for testing?

The copy can open offloaded files but cannot upload or delete anything, so a test database can never damage production's archive.

### Can I get files back into Odoo?

Yes. **Keep in Odoo** on a file, or move all files to another connection.

### The analysis shows "missing files"

Those attachments point to files that are no longer in the filestore, usually after a partial restore. Restore the filestore from a backup, or ask us.

### Does the free Analyzer change anything?

No. It only reads and measures.

## Still stuck?

Write to **support@novator.co** with your Odoo version, the app version (Apps, open the app) and a screenshot.
