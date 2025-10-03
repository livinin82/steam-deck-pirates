---
title: Game immediately stops
parent: Common Questions
nav_order: 11
---

## Game tries to load and immediately stops

#### Is Proton Enabled?
> [!NOTE]
> In some instances, for some reason, Steam has turned off Proton in a non-steam game (not sure if widespread, but has happened to me)
> Always (before troubleshooting anything else) make sure you have a **Proton** version of some sort enabled.

#### Are there quotes around the target path?
> [!NOTE]
> Linux has trouble understanding file paths with spaces in them. It sees them as separate commands rather than folders.
> For example: `/home/deck/Games/Tomb Raider` would not work properly. So in the **Target Path** in your game's settings has quotes around it. This will make Linux treat it as one path by contatining it in quotes and specifying every character (including spaces). You need to type it as `"/home/deck/Games/Tomb Raider"`

#### Are dependencies installed?
> [!CAUTION]
> If you are here, then that means you haven't been <a href="#installing-dependencies">here</a>.
