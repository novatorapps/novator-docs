---
title: Amazon Connector for Odoo
description: Connect Amazon Seller Central to Odoo Community or Enterprise. FBA and FBM orders, listings, stock, prices, shipments, returns, refunds and settlements. One-time price.
---

# Amazon Connector for Odoo

By **Novator Technologies (SMC-Private) Limited**, Official Odoo Partner, Karachi, Pakistan.

The Amazon Connector brings an Amazon seller account into Odoo, for **Odoo Community and Enterprise**, versions 17.0 to 20.0. It is sold on the Odoo Apps Store for a one-time price.

## What it does

- **Orders:** imports FBA and FBM orders from every active marketplace with items, shipping, gift wrap, promotions and taxes; follows status changes and cancellations.
- **Shipments:** when an FBM delivery is validated in Odoo, sends the carrier and tracking number to Amazon.
- **Listings:** imports the seller's listings and links each SKU to its Odoo product (by reference or barcode), or creates the product.
- **Stock and prices:** sends FBM stock and prices per marketplace from Odoo.
- **FBA inventory:** keeps an Odoo FBA warehouse in line with the quantities Amazon holds.
- **Returns and refunds:** FBA customer returns become receipts; Amazon refunds become credit notes.
- **Settlements:** each Amazon settlement becomes a journal entry with sales, fees, reimbursements and the deposit, matched with the order payments.

## How it connects

| | Link with Amazon | Your own developer app |
|---|---|---|
| Setup | One click in Odoo, then approve in Seller Central | Register a private developer app in Seller Central and paste its keys |
| Amazon app used | Novator Odoo Connector | Yours |
| Price | 3 months free, then $9 per month or $79 per year | Included |

## Where the data goes

Orders, buyer details, products, stock, prices and financial data go **directly between the seller's Odoo database and Amazon** over HTTPS. They are stored only in the seller's Odoo.

With "Link with Amazon", the Novator connection service handles only the authorization: it exchanges Amazon's authorization code for the seller's token, hands it once to the seller's Odoo, and renews access tokens. It stores no order or buyer data.

Buyer names and addresses are kept only as long as needed to fulfil and invoice orders; the connector removes them from delivery records after a set number of days (30 by default for linked stores), in line with Amazon's Data Protection Policy.

Details: [Privacy Policy](/privacy) and [Terms of Service](/terms).

## Contact

Questions about the connector or about data protection: [contact@novatorapps.com](mailto:contact@novatorapps.com).
