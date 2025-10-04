---
title: Adding DLLs
parent_id: proton-wine
nav_order: 3
---

## Adding DLLs to Proton

> [!NOTE]
> Windows uses something called Dynamic Link Libraries (DLLs).
> These are used by applications/games to bind functions to each other and work with data inside of the folder they are made in. Linux does not use DLLs so it is sometimes required to point your Wine/Proton prefix to the ones games use. This especially applies when modding a game, as a lot of mods rely on DLLs. We will discuss here how to add them.

#### Steam Arguments

> [!NOTE]
> Steam arguments are entered through the game properties in the `Launch Options` box. These vary by the type of command, here we are going to cover `WINEDLLOVERRIDES`.

<div class="panel">
<ol>
    <li>In <strong>Game Mode/Desktop Mode</strong>, select your game.</li>
    <li>Click the <strong>Settings</strong> (gear) icon.</li>
    <li>Click <strong>Properties</strong>.</li>
    <li>The <strong>Shortcut</strong> tab should open automatically.</li>
    <li>Let's say we're trying to point to <code>dinput8.dll</code>, in order to do this type <code>WINEDLLOVERRIDES="dinput8.dll=n,b" %command%</code> in the <strong>Launch Options</strong> box.</li>
    <li>Do this same thing for any other DLL needed by replacing <code>dinput8.dll</code> in the command from <em>Step 5</em>. If adding multiple in one command, you can separate them with commas, making sure they fit within the first quotation mark and the equal sign. (Example: <code>WINEDLLOVERRIDES="dinput8.dll,d3d9.dll=n,b"</code>)</li>
</ol>
</div>

*from [r/SteamDeckTricks](https://www.reddit.com/r/SteamDeckTricks/comments/xnmm32/game_modding_guide/)*

> [!WARNING]
> These can also be added in Lutris by right-clicking your game, selecting **Configure**>**Runner options** and adding them in the DLL overrides section. Under **Key** you'll type (in this example) `dinput8.dll` and under **Value** enter `n,b`.

#### ProtonTricks

> [!NOTE]
> This method uses ProtonTricks interface to add DLL files to the prefix. This is my preferred method as I can see what is being entered, and not have to worry about typing things properly.

<div class="panel">
<ol>
    <li>Open&nbsp;<strong>ProtonTricks</strong>.</li>
    <li>Select your game in the list. Click <strong>OK</strong>.</li>
    <li>Select <strong>default wine prefix</strong>, click <strong>OK</strong>.</li>
    <li>Select <strong>Run winecfg</strong>, click <strong>OK</strong>.</li>
    <li>In the <strong>Wine Configuration</strong> window, select the <strong>Libraries</strong> tab.</li>
    <li>Type <code>dinput8</code> and click <strong>Add</strong> or hit <em>Enter</em> on your keyboard.</li>
    <li>Scroll to the bottom of the list to make sure it is in the list.</li>
    <li>Click <strong>OK</strong>, and exit out of all ProtonTricks windows.</li>
    <li>Run your game and see if the intended outcome was achieved.</li>
</ol>
</div>

> [!NOTE]
> You do not need to include the `.dll` at the end.
> All items listed in here will run within the prefix.

> [!CAUTION]
> If any of them give you a pop-up or an error, do not add these.
