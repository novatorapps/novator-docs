---
title: Settlements
sidebar_position: 5
description: Each Amazon settlement becomes one journal entry with the deposit, sales, fees and reimbursements, and the order payments reconciled.
---

# Settlements

Amazon pays you in **settlements**, usually every two weeks: the sales of the period minus Amazon's commissions, FBA fees, storage and other fees, plus reimbursements, minus refunds. Odoo books each settlement as one journal entry, so your bank and receivables reconcile without typing.

![Amazon settlement in Odoo](/img/amazon-connector/settlement_form.png)

## Set up

On the store's **Settlements** tab:

![Settlement settings](/img/amazon-connector/store_settlements_settings.png)

| Field | Use |
|---|---|
| **Import Settlements** | Read settlement reports once a day (or **Import Settlements Now**). |
| **Settlement Journal** | Usually the bank account the Amazon deposits reach. |
| **Amazon Payments Journal** | Order payments are registered here and wait for the settlement. |
| **Amazon Clearing Account** | Where order payments wait for the settlement. Empty: the outstanding receipts account of the payments journal. Must allow reconciliation. |
| **Fees Account** | Expense account for Amazon fees (commission, FBA fees, storage...). |
| **Reimbursements Account** | Income account for FBA reimbursements. Empty: the fees account. |
| **Charge Types** | Each kind of amount Amazon uses (for example *Commission*, *FBAPerUnitFulfillmentFee*, *Storage Fee*) with its kind and account. New types are added when they first appear; give one its own account to see it apart. |

## What the entry contains

| Line | Account |
|---|---|
| Deposit (the amount Amazon pays) | Settlement journal |
| One line per order (sales minus refunds of that order) | Clearing account, **reconciled with the order's payment** |
| Fees, grouped per charge type | Fees account or the charge type's account |
| Reimbursements | Reimbursements account |
| Other amounts | Fees account |

**Online Stores > Amazon Settlements** lists them with the period, deposit date and totals: **Sales**, **Refunds**, **Fees**, **Reimbursements**, **Other** and **Deposit**. Each settlement is imported once.

![Amazon settlements](/img/amazon-connector/settlements.png)

## States

| State | Meaning |
|---|---|
| **To Post** | Read, not booked yet, for example because the settlement journal or fees account was missing. Fill in the Settlements tab, open the settlement and click **Post Journal Entry**; a missing account is named in the message. |
| **Posted** | The journal entry is posted. |
| **Check** | The transactions do not add up to the deposit; the note shows both amounts. Nothing is booked. |
