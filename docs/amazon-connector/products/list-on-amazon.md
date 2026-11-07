---
title: List on Amazon (beta)
sidebar_position: 4
description: Create Amazon listings from Odoo products, as an offer on an existing ASIN (found by barcode) or as a new product from Amazon's own requirements, checked with Amazon before anything is created.
---

# List on Amazon (beta)

Create Amazon listings from your Odoo products. Two cases are handled in one window:

- **The product is already on Amazon** (it has an ASIN): you only add your offer, with your SKU, condition, price and quantity. Odoo finds it by **ASIN**, or by **Barcode** (EAN, UPC).
- **The product is not on Amazon yet**: Odoo loads Amazon's requirements for the product type and shows them as a form, filled in from the product where it can.

Every listing is first **checked with Amazon** in preview mode: Amazon answers with any problem and creates nothing. Only **Submit to Amazon** creates listings.

:::note Beta
This feature is new. Check the first listings in Seller Central after submitting. Tell us about anything Amazon refuses that the form did not show.
:::

## 1. Select the products

In **Inventory** or **Sales > Products**, select the products (up to 100), then **Action > List on Amazon (beta)**. Choose the **Amazon store**, the **Marketplace** and the **Condition** (New by default).

## 2. Check on Amazon

Click **Check on Amazon**. Each line shows what Amazon knows:

| Amazon | Meaning |
|---|---|
| **On Amazon: add my offer** | Found by ASIN or barcode. The **Amazon Title** and **Amazon Product Type** come from Amazon's catalogue. |
| **Not on Amazon: new product** | Click **Describe** to give Amazon the product details. |
| **Already listed** | The product is already linked to an SKU of this store. |

Adjust the **SKU** (the product's Internal Reference by default), the **Price** (empty: the marketplace pricelist) and the **Quantity** (the FBM stock Odoo would send). Untick **List** on lines to skip.

## 3. Describe new products

**Describe** opens the details Amazon needs for a new product:

1. **Amazon Product Type**: Odoo suggests one from the product name (**Suggest Product Type**); you can type another, for example `HOME_BED_AND_BATH`.
2. **Load Amazon Details** reads Amazon's requirements for that type and marketplace. Required details are in bold. Name, description, bullet point, weight, model number and manufacturer are filled in from the product.
3. Fill in the rest. Where Amazon has a list of values, **Allowed Values** shows them: type the code or the label. Some details have several parts (for example dimensions); they show as a small JSON block with the parts to fill.

Price, quantity, condition, barcode and the main image are added for you. The image is sent as a link to the product picture in your Odoo, so your Odoo must be reachable from the internet.

:::tip Barcode
Amazon needs a GTIN (EAN or UPC) for most new products. Without one, request a GTIN exemption for your brand in Seller Central first.
:::

## 4. Check with Amazon, then submit

Click **Check with Amazon**. Lines turn green (**Checked: OK**) or red (**Needs changes**) with Amazon's messages. When Amazon asks for a detail that was not in the form, it is added to the product's **Describe** form: fill it and check again.

When the lines are green, click **Submit to Amazon**. Each listing is linked to its product (with the ASIN when known), and the **Log** records it. Amazon then processes the listing; new products usually show in Seller Central within 15 minutes, with their ASIN. Run **Import Listings** later to read the final status and ASIN.

A [test copy](../operations/test-databases.md) of your database can check listings with Amazon but cannot submit them.
