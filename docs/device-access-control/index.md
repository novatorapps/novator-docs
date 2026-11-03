---
title: Login Audit and Device Access Control
sidebar_label: Overview
sidebar_position: 1
description: Record every Odoo sign-in attempt, then lock chosen users to registered computers and browsers.
---

<img className="app-icon" src="/img/device-access-control/icon_pro.png" alt="" />

# Login Audit and Device Access Control

Two apps for sign-in security.

- **Login Audit** (free) records every sign-in attempt with user, IP address, browser, operating system and device type. Failed attempts stand out, and the first sign-in from a new IP or a new browser is flagged.
- **Device Access Control** ($299, one-time) lets chosen users sign in **only from computers and browsers you registered**, on every sign-in path: the login page, JSON-RPC and XML-RPC, passwords and API keys. A stolen password alone no longer opens their account.

<span className="version-pill">Odoo 17.0 - 20.0</span> <span className="version-pill">Community &amp; Enterprise</span> <span className="version-pill">Odoo.sh &amp; On-Premise</span>

![Login page asking for a device registration code](/img/device-access-control/login_registration.png)

## Which one do I need?

| | Login Audit | Device Access Control |
|---|:---:|:---:|
| History of every sign-in attempt with IP, browser and device | ✓ | ✓ |
| Failed sign-ins with the reason | ✓ | ✓ |
| New IP and new browser flags, statistics | ✓ | |
| Restrict chosen users to registered devices | | ✓ |
| Registration codes, sign out lost devices at once | | ✓ |
| Enforced on the login page, JSON-RPC and XML-RPC | | ✓ |

Start with Login Audit to see who signs in from where, then restrict the accounts that matter. Both install side by side: sign-ins refused by Device Access Control appear in Login Audit with the reason.

- [Login Audit on the Apps Store](https://apps.odoo.com/apps/modules/20.0/novator_login_audit)
- [Device Access Control on the Apps Store](https://apps.odoo.com/apps/modules/20.0/device_access_control)

## Next steps

1. [Install the app](/getting-started/install).
2. [Review sign-ins with Login Audit](./login-audit.md).
3. [Restrict users to their devices](./devices.md).
