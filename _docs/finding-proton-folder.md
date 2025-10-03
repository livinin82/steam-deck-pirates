---
title: Finding Proton Folder
parent: Proton and Wine
nav_order: 1
---

## Finding Non-Steam Game Proton Folder

> [!NOTE]
> This only works for games added to steam already as a non steam game.
> This means you need to enable proton on the game and try to run it once so it can set up a prefix for it.
> * Open **ProtonTricks**.
> * In the list of games find the title you gave your game in Steam itself.
> * Next to the game name, there is a long number.
> * Open **Dolphin**.
> * Go to `/home/deck/.local/share/Steam/steamapps/compatdata` and find the number from earlier.
> * Enter the folder, then enter the `pfx` folder.
> * `drive_c` is the folder a lot of the "wine" aspect of things will happen.

> [!NOTE]
> Sometimes games will use either `Program Files` or `Program Files (x86)`. Check both.

> [!CAUTION]
> In ProtonTricks, your game will show as whatever it is titled in Steam upon opening. If you never changed the name from `setup.exe` then that's what it will be named.
>
> If you selected `C:` during an install (which you shouldn't have done!), your game may be installed in one of these folders.
> If you'd love to find out why that isn't a good idea, keep it installed there and see.

![Proton Folder Number](https://i.imgur.com/SCZqbXL.png)
