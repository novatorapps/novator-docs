---
title: Privacy Policy
description: How Novator Technologies handles personal data in its website, its Odoo apps and its Amazon connection service.
---

# Privacy Policy

**Last updated: 5 November 2026**

This policy explains what personal data Novator Technologies (SMC-Private) Limited ("Novator", "we") handles, why, and how we protect it. It covers this website (novatorapps.com), our guides (docs.novatorapps.com), the Odoo apps we publish, and the Novator connection service used by the Amazon Connector for Odoo.

**Contact:** Novator Technologies (SMC-Private) Limited, Karachi-75300, Sindh, Pakistan. Email: [contact@novatorapps.com](mailto:contact@novatorapps.com).

## 1. Our Odoo apps run in your Odoo

Our apps are Odoo modules. They run inside the customer's own Odoo database (on Odoo.sh or the customer's own server). Data the apps read or create, such as orders, customers, products, stock and accounting entries, is stored in that database and is controlled by the customer. Novator does not receive, host or have access to it.

For this data the customer is the controller. Novator gives support only when the customer asks, and only with the access the customer grants for that case.

## 2. Amazon Connector and the Novator connection service

The Amazon Connector for Odoo exchanges data between a seller's Odoo database and Amazon through Amazon's Selling Partner API (SP-API). It can connect in two ways:

- **With the seller's own developer app.** The seller's Odoo talks to Amazon directly with the seller's own credentials. No Novator system is involved.
- **With "Link with Amazon".** The seller approves the Novator Odoo Connector app in Seller Central. The Novator connection service (hosted on Cloudflare) then handles only the authorization:
  - It receives the one-time authorization code from Amazon and exchanges it for the seller's refresh token.
  - It keeps that token for at most 5 minutes, encrypted at rest by the host, until the seller's Odoo collects it once with a single-use code. Then it is deleted.
  - Every hour, the seller's Odoo asks it for a new access token. It passes the request to Amazon and returns the answer; it does not store the token.
  - It stores the seller's Amazon selling partner ID and the dates of the subscription (trial, paid until).

**Orders, buyer names and addresses, products, stock, prices, financial and settlement data never pass through the Novator connection service.** The seller's Odoo database requests them from Amazon directly over HTTPS.

### Amazon buyer data (personally identifiable information)

Buyer names, delivery addresses, phone numbers and the Amazon-provided buyer email are stored only in the seller's Odoo database, to fulfil and invoice orders. In line with Amazon's Data Protection Policy:

- The connector removes buyer names, phone numbers, email addresses and street addresses from Amazon delivery records a set number of days after delivery (30 days by default for stores linked with the Novator app). Sellers who must keep records longer for tax or legal reasons are responsible for keeping them encrypted and offline.
- Buyer data is used only to fulfil orders, ship, invoice, process returns and refunds, and meet tax obligations. It is not used for marketing, not sold and not shared with third parties.
- Access inside Odoo follows Odoo's user rights. Store credentials are visible only to administrators of the Online Stores app.

## 3. This website and the guides

- **Analytics.** We count page views to see which pages help. We do not use advertising cookies.
- **Email.** When you write to us we keep your message and address to answer you and to handle support.
- **Hosting.** The website and guides are hosted on Cloudflare, which processes technical data such as IP addresses to deliver and protect the site.

## 4. Payments

Odoo apps are bought on the Odoo Apps Store; Odoo S.A. handles those payments. If you subscribe to "Link with Amazon", a payment processor handles your card or invoice details. We receive only what is needed to manage the subscription (name, company, email, Amazon selling partner ID, payment status).

## 5. Security

- HTTPS for every connection we operate; secrets of the Novator connection service are stored as encrypted platform secrets and are never written to logs.
- Access to our systems is limited to staff who need it, with individual accounts and two-factor authentication.
- We review our services and dependencies regularly and fix security issues with priority.
- **Incidents:** if we learn of a security incident affecting personal data, we notify affected customers without delay and Amazon within 24 hours where Amazon data is involved, and we take steps to contain and resolve it.

## 6. Retention

- Connection service: refresh tokens at most 5 minutes; subscription records while the subscription exists and up to 12 months after it ends.
- Support email: up to 3 years after the last message.
- Data in a customer's Odoo database is kept as long as the customer decides (see section 2 for Amazon buyer data).

## 7. Your rights

You can ask us for a copy of the personal data we hold about you, to correct it or to delete it, by writing to [contact@novatorapps.com](mailto:contact@novatorapps.com). For data in a seller's Odoo database, contact that seller, who controls it.

## 8. Changes

We update this policy when our services change. The date at the top shows the latest version.
