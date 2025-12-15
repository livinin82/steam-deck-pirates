---
title: Guides for emulators and roms
id: emulation
nav_order: 5
---

# Guides for emulators and roms

Use the quick links below to jump to a topic:

- [Why Use Frontends](#why-use-frontends)
- [Installing EmuDeck](#installing-emudeck)
- [Installing RetroDeck](#installing-retrodeck)
- [Switch Emulation](#switch-emulation)
- [BIOS, ROMs, and Other Files](#bios-roms-and-other-files)
- [Individual Emulators vs Frontends](#individual-emulators-vs-frontends)
- [PC Ports vs Emulation](#pc-ports-vs-emulation)

---
## Why Use Frontends {#why-use-frontends}

> [!NOTE]
> The Deck is an amazing emulator machine.
> The sweet spot for performance is mostly in the Xbox/PS2 era, with the Switch being an exception for current gen. Anything before that should run flawlessly (on a per game basis). Do not expect to be emulating Xbox 360 (possible for some games) and definitely don't even for a second *think about* running PS4/Xbox One or later. There is a lot of info out there regarding emulation on the deck. We are going to gather the most frequently asked questions here. Here's a good [conversation](https://www.reddit.com/r/SteamDeck/comments/1ea1675/emudeck_vs_retrodeck/) on the differences between the two.
>
> Regardless of which one you use, the outcome will be the same.

Frontends like **EmuDeck** and **RetroDeck** automate folder structure, controller layouts, configuration, artwork scraping, and integration into Steam. They dramatically reduce time-to-play compared to hand‑rolling every emulator.

> [!TIP]
> Pick one frontend. Mixing both at the same time can lead to duplicate ROM folders, differing config expectations, and confusion when troubleshooting.

---
## Installing EmuDeck {#installing-emudeck}
EmuDeck is a collection of scripts that allows you to autoconfigure your Steam Deck, it creates your roms directory structure and downloads all of the needed Emulators for you along with the best configurations for each of them. EmuDeck works great with [Steam Rom Manager](https://github.com/SteamGridDB/steam-rom-manager) or with [EmulationStation DE](https://es-de.org).

<div class="panel panel--soft">
<strong>Installing EmuDeck (verbatim steps)</strong>
<ol>
  <li>If you are using an SD Card, format your SD Card in Game Mode on SteamOS. SD Cards need to be formatted as ext4 (or btrfs) to be compatible with EmuDeck.
    <ul><li><strong>Skip</strong> this step if you have already formatted your SD Card</li></ul>
  </li>
  <li>Switch to Desktop Mode. Pressing the <code>STEAM</code> button, then select Power and choose <code>Switch to Desktop</code>.</li>
  <li>Download the <a href="https://www.emudeck.com/#download">EmuDeck Installer</a>.</li>
  <li>Copy the installer to your Steam Deck's desktop. Run the EmuDeck Installer.</li>
  <li>Copy your games to the <code>Emulation/roms</code> folder created by the installer. Open Steam ROM Manager through EmuDeck. Each parser corresponds to an emulator or tool. Enable which parsers you would like to use.
    <ul>
      <li>Copy your BIOS to <code>Emulation/bios</code></li>
      <li>Refer to the <a href="https://emudeck.github.io/cheat-sheet/">Cheat Sheet</a> for which folders correspond to which systems, a full list of ROM file types, and expected BIOS</li>
    </ul>
  </li>
  <li>After you have selected your parsers:
    <ul>
      <li>Click on <code>Preview</code></li>
      <li>Click <code>Parse</code></li>
      <li>Wait for all the images to download</li>
      <li>Click <code>Save apps to Steam</code>. The first time may take a few moments, After it saves successfully, your selected ROMs and tools will be added to your Steam library.</li>
    </ul>
  </li>
  <li>Close Steam ROM Manager. Click <code>Return to Game Mode</code> on your desktop and your EmuDeck install is now complete!</li>
</ol>
<em>from <a href="https://emudeck.github.io/">EmuDeck wiki</a></em>
</div>

---
## Installing RetroDeck {#installing-retrodeck}
RetroDECK is a [ES-DE Frontend](https://es-de.org/) powered Flatpak all-in-one game application that is still in development. Thanks to its RetroDECK Framework it builds-in a variety of software (that runs your games) like emulators and game engines in one package that is pre-configured.

<div class="panel panel--soft">
<strong>Installing RetroDeck (verbatim steps)</strong>
<ul>
  <li>Put the Steam Deck into <strong>Desktop Mode</strong></li>
  <li>Install&nbsp;<strong>RetroDECK</strong> from <strong>Discover</strong></li>
  <li>Start RetroDECK first time in <strong>Desktop Mode</strong></li>
  <li>Choose where RetroDECK should create the roms folders <strong>Internal</strong> or <strong>SDCard</strong>.</li>
  <li>Put the <strong>BIOS files</strong> inside <code>~/retrodeck/bios/</code>.</li>
  <li>Put the <strong>ROMS</strong> inside <code>~/retrodeck/roms/ or &lt;sdcard&gt;/retrodeck/roms/</code> or a custom location.</li>
  <li>Choose to install&nbsp;<strong>Steam Controller Layouts</strong> for RetroDECK, it should be checked from the start.</li>
  <li>In Steam desktop go to the tab <strong>Games</strong> press <code>Add non-Steam game to My library</code> and select <strong>RetroDECK</strong> to add it into your library. If that is not working, you can <em>right-click</em> on the RetroDECK desktop icon and press <code>Add to Steam</code> in the menu.</li>
  <li>Switch over to <strong>Game Mode</strong> and go to <strong>RetroDECK</strong> on the Steam Grid under <strong>Library &gt; Non-Steam</strong></li>
  <li>Add any of the the Official Layouts under <strong>Controller Settings &gt; Controller Layouts &gt; Templates</strong> in the Steam Deck called <code>RetroDECK: Steam Deck - Neptune SIMPLE or FULL</code> with a version number. Apply the layout.</li>
  <li>Launch <strong>RetroDECK</strong> and enjoy.</li>
</ul>
<em>from <a href="https://retrodeck.readthedocs.io/en/latest/wiki_devices/steamdeck/steamdeck-start/">RetroDeck wiki</a></em>
</div>

---

## Switching the Default Emulator in RetroDeck and EmuDeck {#switching-default-emulator}


You can change which emulator is used for a given system in both EmuDeck and RetroDeck. This is useful if you want to use a different core or emulator for compatibility or performance reasons. Both tools also allow you to set the emulator on a per-game basis for even more control.

<blockquote class="admonition-tip">
  <strong>Tip:</strong> If a game isn't working as expected, try switching to a different emulator/core for that system.
</blockquote>


### EmuDeck
**To change the default emulator for a system:**
1. Open the EmuDeck application (Desktop Mode).
2. Go to the "Emulator Settings" or "Manage Emulators" section.
3. Find the system you want to change (e.g., SNES, PS2, etc.).
4. Select your preferred emulator/core from the dropdown or list.
5. Save your changes. The new emulator will be used the next time you launch a game for that system.

**To set the emulator on a per-game basis:**
1. Open Steam ROM Manager or EmulationStation DE (whichever frontend you use with EmuDeck).
2. Locate the game you want to change.
3. Edit the game’s launch configuration or metadata (look for an "Edit Game" or "Advanced" option).
4. Select the desired emulator/core for that specific game.
5. Save and launch. This override will apply only to that game.

> [!NOTE]
> Some systems have multiple emulator options (e.g., RetroArch cores, standalone emulators). Not all emulators are available for every system. Per-game overrides may require using EmulationStation DE or editing config files directly.


### RetroDeck
**To change the default emulator for a system:**
1. Launch RetroDeck and open the main menu.
2. Navigate to "Settings" > "Emulators".
3. Select the system you want to change.
4. Choose your preferred emulator/core from the available options.
5. Save and exit. The new emulator will be used for that system going forward.

**To set the emulator on a per-game basis:**
1. In RetroDeck, find the game in your ROM list.
2. Highlight the game and open its context menu (usually by pressing the menu/select button or right-clicking).
3. Choose "Edit Game" or "Advanced Settings".
4. Select the emulator/core override for that game.
5. Save and launch. This override will only affect the selected game.

> [!TIP]
> Per-game overrides are useful for titles with special compatibility needs or performance issues. You can always revert to the system default if needed.

---
## Switch Emulation {#switch-emulation}



#### Switch Emulator Overview

> [!NOTE]
> As of 2024, the two main Switch emulators were taken down by the most ruthlessly litigious playing card game companies of all time. Taken down does not mean gone, though. Nothing is ever fully erased from the internet. **EVER**. With that being said, we are not going to risk having this guide taken down by linking or naming specific emulators. As of now, the best and most reliable iterations are usually found by checking current community recommendations, forums, or compatibility lists. The landscape changes fast—do your research and you’ll find what you need.

> [!CAUTION]
> All Switch emulators require prod.keys and firmware.
> We will not tell you where to find those.

#### Switch Emulator Performance
Some games will run perfectly fine on the Deck. Some will have occasional frame dips. Some will have bad audio. Some just won't work at all. This is the nature of emulation. The more popular games will have patches available for them. Someone has amazingly made a [compatibility list](https://docs.google.com/spreadsheets/d/1AhKo6rjQHXLuZEHPozA-F-YPejLPBrj0jbPNUyNDx78/edit?gid=77197668#gid=77197668).

---
## BIOS, ROMs, and Other Files {#bios-roms-and-other-files}
Some emulators will require BIOS files to operate. These are usually found in a multitude of places. This [reddit post](https://www.reddit.com/user/EmulationStranger/comments/11j09qc/idiots_guide_to_emudeck_where_to_find_bios_and/) should have you on the way to finding the right BIOS and ROMs for each emulator. Specifically the ROM Megathread. Again we will not link here for safety reasons.

---
## Individual Emulators vs Frontends {#individual-emulators-vs-frontends}
Individual emulators can be installed as well. A lot of them are already on the **Discover Store**. While this is a perfectly viable method of setting up your emulation zone, we will not really be covering it here. The reason for this is that we want you to have the most straightforward and easy setup you can get. Also, quite frankly, if a lot of people follow the guides posted above and use the already-developed frontends we suggest, we get less questions and have an easier time supporting people. Should you choose to do things this way, you will manually have to set every emulator up, tweak them all to look right, organize the folder structure, and download so much extra stuff. By the time you're halfway done, you'll wonder why you didn't do RetroDeck/EmuDeck in the beginning.

---
## PC Ports vs Emulation {#pc-ports-vs-emulation}
Some of the games you want to emulate may have PC ports. Always check to see what came out for PC and if it ran better that way. For example, Scarface has way better QoL mods and patches that make it a much better experience on the deck. The real benefit of these is that you can modify the games to run better, and also there is more documentation and development for them as the files are more accessible to those modding. The biggest benefit of emulation is in most cases. you will save battery. PC ports usually have FPS mods, widescreen fixes, and a slew of other enhancements that make it a better experience overall. There are even PC ports for old N64 games like Mario 64, Perfect Dark, and so on. We highly recommend looking into these options. When you do find a PC port, be sure to go to <a href="https://www.pcgamingwiki.com/wiki/Home">PCGamingWiki</a> to see what all should be added to the games to make them perform at their best.

---
## Quick Comparison {#quick-comparison}

| Approach | Setup Speed | Maintenance | Features / Automation | Fine Control | Recommended For |
| -------- | ----------- | ----------- | --------------------- | ------------ | --------------- |
| EmuDeck  | Fast | Low | High (scripts, parsers, configs) | Moderate | Most users / broad libraries |
| RetroDeck | Fast | Low-Med | High (bundled stack) | Moderate | Users wanting integrated Flatpak pack |
| Individual Emulators | Slow | High | Low | High | Power tweakers, niche systems |
| PC / Source Ports | Varies | Varies | N/A | High | Best experience for specific titles |

---
## Housekeeping Checklist {#housekeeping-checklist}
- Keep SD card formatted ext4 or btrfs for case-sensitive paths & performance.
- Back up `Emulation/bios` and `Emulation/roms` regularly.
- Periodically refresh artwork cache if renamed ROMs appear blank.
- Audit shader caches if storage tight—they can grow large over time.
- Track fork vitality (especially Switch emulator forks) before updating.


