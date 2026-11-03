---
title: Access profiles
sidebar_position: 2
description: Create profiles, hide menus, read-only users, no developer mode, import or export.
---

# Access profiles

Only Settings administrators manage profiles, and they are never restricted by them.

## Create a profile

1. Open **Access Manager > Access Profiles** and click **New**.
2. Name it, for example *Warehouse staff*, and add the **Users**.
3. Optional: limit it to some **Companies**. It then applies only while the user works in those companies.
4. Tick what applies under **Restrictions**:
   - **Read-Only User**: sees everything they are allowed to see, without New, Edit or Delete. The server refuses changes too, also through the API.
   - **No Developer Mode**
   - **No Import** and **No Export**
5. On the **Hidden Menus** tab, add the apps or menus to hide. Their sub-menus go with them.
6. Save. Users see the change at their next page load.

![Access profiles](/img/access-manager/profiles.png)

A user can have several profiles: their restrictions add up. Switch a profile off to suspend it, and use **Notes** to record why it exists.

## What users see

![The apps a warehouse user still sees](/img/access-manager/hidden_menus.png)

![A sales order for a read-only user](/img/access-manager/read_only_user.png)

## On the user form

Each user form has an **Access Profiles** tab showing the profiles that apply.

![Access profiles on the user form](/img/access-manager/user_profiles.png)
