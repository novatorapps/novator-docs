# Commerce Bridge partials

Shared engine content for the store connector guides (Shopify, WooCommerce). Facts checked against `commerce_bridge` 1.0.2 (17.0 source). Import in a guide page:

```mdx
import CustomerMatching from '@site/src/partials/commerce/CustomerMatching.mdx';

## How customers are matched

<CustomerMatching platform="Shopify" img="/img/shopify-connector" />
```

Props: `platform` (display name, all partials), `img` (image folder, partials with screenshots), `prefix` (StoreFieldsOrders only, "SH-" / "WC-"), `versions` (SupportPolicy only, e.g. "17.0 - 20.0").

Headings inside partials start at `###`; give each a `##` heading in the page. Docusaurus does not add partial headings to the page TOC; if you need them there: `import X, {toc as xToc} from '...'` and `export const toc = [...xToc];` (see Docusaurus "Importing Markdown").

Images used: only files present in both `static/img/shopify-connector` and `static/img/woocommerce-connector`.

| Partial | Props | Content |
|---|---|---|
| StoreFieldsOrders.mdx | platform, img, prefix | Every engine field of the store Orders tab (Import, Sales, Taxes and Extra Lines, Status Changes), defaults, other-currency pricelists |
| StoreFieldsProducts.mdx | platform | Products tab: Match Products By, Import Unknown Products With Orders, Category for New Products, Import Images, prices fields |
| StoreFieldsStock.mdx | platform | Stock tab: Send Stock Automatically, Stock Source, Stock From Warehouses, Stock Buffer, Buffer Value |
| CustomerMatching.mdx | platform | Customer link, email, creation; companies; invoice/delivery addresses; scenario table; edge cases (archived, duplicates, guests); FAQ |
| ProductMatching.mdx | platform, img | Order line lookup (link, SKU/barcode, auto import); product import (link, SKU, create); new product fields; variants and variant prices; scenarios; SKU clash; FAQ |
| PaymentMethods.mdx | platform, img | Payment method fields, workflow order (confirm, deliver, invoice once, payment), failed steps, recommended setups, FAQ |
| Taxes.mdx | platform, img | Tax Mode, tax mapping, auto-created taxes (warning: set accounts/grids), totals that differ, FAQ |
| ExtraLines.mdx | platform | Shipping methods and product, discount lines per tax with codes, fee product |
| OrderUpdates.mdx | platform | Fingerprint, update steps, change -> effect table, cancellations from the store, Update From Store |
| RefundImport.mdx | platform | Store refund -> credit note (lines, taxes, remainder line, refund payment), no-invoice case |
| RefundExportCommon.mdx | platform | Credit note post -> refund job, once only (connector page adds platform specifics) |
| CancelExportCommon.mdx | platform | Odoo cancel -> cancel job (connector page adds specifics) |
| FulfillmentCommon.mdx | platform | Delivery validated -> delivery job (30 s delay), tracking reference, Send Delivery to Store, filter |
| StockRules.mdx | platform | Quantity formula with buffer examples, 1.0.2 note for 18+, when stock is sent, Product Links columns, set Odoo stock from store |
| PriceRules.mdx | platform | Regular and sale price, when sent, columns, sale tip |
| SyncWizard.mdx | platform, img | Every Sync With Store operation and option |
| Jobs.mdx | platform, img | Job fields, retry schedule, buttons, merging, priorities, cleanup, common errors |
| Log.mdx | platform, img | Log columns and what to look at |
| Dashboard.mdx | img | Store card counters, form buttons, Sales Analysis |
| TestDatabases.mdx | platform | Database UUID, read-only copies, neutralized copies, Use in This Database, webhooks after a move |
| AccessRights.mdx | (none) | User vs Administrator table, salespeople, OdooBot, multi-company |
| SupportPolicy.mdx | platform, versions | Included, not included, what to include when writing |

Connector pages still have to cover: connection and keys, platform status mapping, which store fields map to the neutral order, webhooks, platform-specific options (for example Shopify locations, Markets, payouts; WooCommerce tracking modes, images), and the platform side of refunds, cancellations and deliveries.
| Schedules.mdx | platform | Schedules tab: intervals, last run, Run Now, the 5-minute scheduler, test copies |
| Alerts.mdx | platform | Alerts tab: alert users, activity, log level; what to do with an alert |
| StoreText.mdx | platform | Store Text tab of a store product: title and description for one store |
