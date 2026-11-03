---
slug: odoo-user-permissions-explained
title: "Odoo user permissions explained: groups, access rights and record rules"
description: How Odoo decides what a user can see and do, and why hiding a menu or a field is not the same as securing it.
tags: [security, permissions, administration]
date: 2026-11-03
---

When a user can see something they should not, or cannot do something they need, the answer is almost always in one of four layers: groups, access rights, record rules and the interface itself. Knowing which layer does what saves a lot of trial and error.

{/* truncate */}

## Groups

A **group** is a role, such as *Sales / User: Own Documents Only* or *Inventory / Administrator*. Users get rights only through their groups. On the user form you pick a level for each app, and each level is a group that usually includes the levels below it. From Odoo 19 the user form organizes these groups by *privilege*, but the principle is the same.

## Access rights: which models

**Access rights** (`ir.model.access`) say whether a group may **read, write, create or delete** records of a model, for example sales orders. They add up: if any of the user's groups grants an operation, the user has it. If no group grants read access to a model, the user cannot open its records at all and gets an access error.

You find them in **Settings > Technical > Security > Access Rights** (developer mode).

## Record rules: which records

**Record rules** (`ir.rule`) narrow access down to specific records with a domain, for example "only orders where I am the salesperson" or "only records of my companies". Two kinds combine differently:

- **Global rules** (rules without a group) apply to everyone and are combined with AND. A record must pass all of them.
- **Group rules** apply to the user's groups and are combined with OR. A record must pass at least one of them, and also all global rules.

This is why adding a user to a broader group (for example *All Documents*) widens what they see: its rule is added with OR. You find them in **Settings > Technical > Security > Record Rules**.

## The interface: menus, buttons and fields

Groups can also be set on menus, buttons and fields in views. This only changes **what is displayed**:

- A hidden menu does not stop a user from opening the same records through a link, a related field or an export, if their access rights allow it.
- A field hidden in a view can still be read through other views or the API, unless the field itself is restricted to a group in its definition.

So the rule of thumb is: use access rights and record rules to **secure** data, and use the interface to **simplify** what people see. Doing only the second leaves the data reachable.

## The superuser

Odoo has an internal superuser that bypasses access rights and record rules. It is used by the system itself and by the *become superuser* option in developer mode. The regular *Administrator* user is not the superuser: record rules still apply to it, which is why an administrator may not see records of a company that is not selected.

## Multi-company

In a multi-company database, most models have a global record rule that limits records to the companies the user has selected in the company switcher. A user who "cannot find" a record often only needs to select the right company.

## Checking a change safely

1. Make the change on a test user that has exactly the groups of the real user.
2. Sign in as that user in a private browser window and try the actual task: open the menu, open a record, export, print.
3. Try the paths around the interface too, such as a direct link to a record, to confirm the data is protected and not only hidden.

## Related

- [Access Manager](https://docs.novatorapps.com/access-manager) builds profiles that hide menus, set read-only users and turn off developer mode; Pro adds rules for fields, buttons, records, chatter and filters.
