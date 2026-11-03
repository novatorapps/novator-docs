---
title: Set up and use
sidebar_position: 2
description: Merchant portal values, provider configuration, taking payments, verification and refunds.
---

# Set up and use

## At Bank Alfalah

1. Get your sandbox (and later production) merchant account.
2. In the merchant portal, note the **Merchant ID** and create an **API password**.
3. Under **Webhook Notifications**, generate the notification secret.

## In Odoo

1. Open the payment providers and click **Bank Alfalah**:
   - Odoo 20: **Invoicing > Configuration > Online Payments**, or **Website > Configuration > Payments**.
   - Odoo 17 to 19: **Invoicing (or Website) > Configuration > Payment Providers**.
2. Enter the **Merchant ID**, the **API password** and, in **Webhook Notification Secret**, the notification secret.
3. Copy the **Webhook URL** shown on the form into the merchant portal (Webhook Notifications).
4. Test with sandbox credentials first, then switch to your production credentials and publish the provider:
   - Odoo 20: with **Live** switched off the sandbox gateway is used; switch on **Live** for real payments.
   - Odoo 17 to 19: set the state to **Test** for the sandbox and **Enabled** for real payments.

![Provider configuration](/img/bank-alfalah/provider_configuration.png)

Credentials are visible to administrators only. In multi-company databases, set up one provider per company.

## Taking payments

### eCommerce

Bank Alfalah appears as **Card** on the payment step of your shop. The shopper pays on the bank's page and comes back to the order confirmation, with the sales order already confirmed. If they close the browser, the webhook still confirms the order; a declined card leaves the cart open to try again.

![Order confirmation](/img/bank-alfalah/shop_confirmation.png)

### Invoices and payment links

Send an invoice or a payment link; the customer clicks **Pay Now**, pays on the Bank Alfalah page and the invoice is marked **Paid**.

![Paying an invoice in the portal](/img/bank-alfalah/portal_pay_with_bank_alfalah.png)

## How payments are confirmed

On every return and webhook, Odoo asks the gateway for the order's real status:

| Gateway answer | In Odoo |
|---|---|
| Captured | Payment confirmed, invoice paid |
| Declined or failed | Error with the bank's reason |
| Still authenticating | Pending until the webhook arrives |
| Wrong amount or currency | Refused |
| Gateway unreachable | Nothing changes until it answers |

Webhooks without your notification secret are refused.

**Invoicing > Customers > Payments**, or the provider's **Transactions**, list every payment with its gateway result.

![Transactions](/img/bank-alfalah/transactions.png)

![Transaction detail](/img/bank-alfalah/transaction_detail.png)

## Refunds

Open the customer payment, click **Refund** and enter the amount. Odoo sends the refund to the gateway and records the refund transaction with the gateway's ID. Full and partial refunds, several per payment; a refusal shows the gateway's reason.

![Refund from Odoo](/img/bank-alfalah/refund_from_odoo.png)
