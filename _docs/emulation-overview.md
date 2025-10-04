---
title: Emulation & ROMs Overview
parent: Emulators and ROMs
nav_order: 1
---

# Emulation & ROMs Overview

This single page consolidates guidance that was previously split across multiple smaller pages (EmuDeck, RetroDeck, Switch Emulation, Individual Emulators, BIOS/ROMs, PC Ports). Use the sectional links below to jump where you need:

- [Why Use Frontends (EmuDeck / RetroDeck)](#why-use-frontends)
- [Installing EmuDeck](#installing-emudeck)
- [Installing RetroDeck](#installing-retrodeck)
- [Switch Emulation](#switch-emulation)
- [BIOS, ROMs, and Other Files](#bios-roms-and-other-files)
- [Individual Emulators vs Frontends](#individual-emulators-vs-frontends)
- [PC Ports vs Emulation](#pc-ports-vs-emulation)

---
## Why Use Frontends
Frontends like **EmuDeck** and **RetroDeck** automate folder structure, controller layouts, configuration, artwork scraping, and integration into Steam. They dramatically reduce time-to-play compared to hand‑rolling every emulator. Unless you enjoy low-level tweaking, start with one of these.

> [!TIP]
> Pick one frontend. Mixing both at the same time can lead to duplicate ROM folders, differing config expectations, and confusion when troubleshooting.

---
## Installing EmuDeck
EmuDeck is a collection of scripts that auto-configures your Steam Deck, creates the `Emulation/roms` directory structure, installs emulators, and applies sane defaults. It also pairs well with **Steam ROM Manager** or **EmulationStation DE (ES‑DE)**.

<div class="panel panel--soft">
<strong>Step‑by‑step (EmuDeck)</strong>
<ol>
  <li>If using a microSD, format it in <strong>Game Mode</strong> (ext4 or btrfs). Skip if already formatted.</li>
  <li>Switch to <strong>Desktop Mode</strong> (Steam Button → Power → Switch to Desktop).</li>
  <li>Download the <a href="https://www.emudeck.com/#download">EmuDeck Installer</a>.</li>
  <li>Move the installer to the desktop and run it.</li>
  <li>Copy your ROMs into <code>Emulation/roms</code>. (BIOS go in <code>Emulation/bios</code>.)</li>
  <li>Open Steam ROM Manager via EmuDeck and enable the parsers you want.</li>
  <li>Click <code>Preview</code> → <code>Parse</code> → wait for images → <code>Save apps to Steam</code>.</li>
  <li>Return to Game Mode and enjoy your newly added library entries.</li>
</ol>
<em>Reference: <a href="https://emudeck.github.io/">EmuDeck wiki</a> &amp; <a href="https://emudeck.github.io/cheat-sheet/">Cheat Sheet</a></em>
</div>

---
## Installing RetroDeck
RetroDeck (RetroDECK) bundles a curated set of emulators and engines behind the ES‑DE frontend with a unified update path.

<div class="panel panel--soft">
<strong>Step‑by‑step (RetroDeck)</strong>
<ul>
  <li>Enter <strong>Desktop Mode</strong>.</li>
  <li>Install <strong>RetroDECK</strong> from <strong>Discover</strong>.</li>
  <li>Launch it once in Desktop Mode and choose ROM folder location (Internal or SD).</li>
  <li>Place BIOS in <code>~/retrodeck/bios/</code>.</li>
  <li>Place ROMs under <code>~/retrodeck/roms/</code> (or chosen SD/custom path).</li>
  <li>(Optional) Install Steam Controller Layouts when prompted.</li>
  <li>Add RetroDECK to Steam (<em>Add Non-Steam Game</em> or right-click desktop icon → Add to Steam).</li>
  <li>Switch to Game Mode, apply a RetroDECK layout template, and launch.</li>
</ul>
<em>Reference: <a href="https://retrodeck.readthedocs.io/en/latest/wiki_devices/steamdeck/steamdeck-start/">RetroDeck wiki</a></em>
</div>

---
## Switch Emulation

> [!NOTE]
> The original mainline Switch emulator projects had takedowns, but working builds and maintained forks (e.g., fork of Ryujinx by GreemDev; Sudachi / Suyu for former Yuzu builds) still circulate. We won’t link direct binaries.

> [!CAUTION]
> All Switch emulators require <code>prod.keys</code> and firmware. We will not tell you where to obtain them.

Performance varies: some games run flawlessly, others stutter or have audio issues. Community compatibility spreadsheets and patches help—see the widely shared Google Sheet (search “Steam Deck Switch compatibility spreadsheet” if the link changes).

---
## BIOS, ROMs, and Other Files
Some systems refuse to boot without correct BIOS. A commonly referenced community “ROM Megathread” plus the EmuDeck Cheat Sheet help map required BIOS filenames. We do not mirror or deep-link BIOS content.

> [!TIP]
> Verify BIOS validity by checking emulator logs—many will report missing or bad checksums.

---
## Individual Emulators vs Frontends
You can install individual emulators from Discover (Dolphin, PPSSPP, etc.). This grants maximal control but increases setup time: per-emulator configs, shader caches, layouts, artwork, and folder conventions. Frontends batch those chores. If you enjoy tweaking, go manual; if you want “it just works”, stay with EmuDeck/RetroDeck.

> [!IMPORTANT]
> Don’t run both frontends and a parallel maze of individually configured stand‑alone emulators unless you have a specific reason—duplication complicates troubleshooting.

---
## PC Ports vs Emulation
Some classics have modern PC ports or source ports (e.g., Mario 64, Perfect Dark fan ports, Scarface). Benefits:

- Higher potential performance and battery life versus heavyweight emulation layers.
- Mods (widescreen, FPS unlocks, bug fixes) often easier and richer.
- Better documentation & active modding communities.

Always check a title on <a href="https://www.pcgamingwiki.com/wiki/Home">PCGamingWiki</a> and relevant communities before settling for an emulated version.

> [!WARNING]
> Source/PC port projects vary in legality by included assets. Follow each project’s instructions—most require you to supply original game data.

---
## Quick Comparison

| Approach | Setup Speed | Maintenance | Features / Automation | Fine Control | Recommended For |
| -------- | ----------- | ----------- | --------------------- | ------------ | --------------- |
| EmuDeck  | Fast | Low | High (scripts, parsers, configs) | Moderate | Most users / broad libraries |
| RetroDeck | Fast | Low-Med | High (bundled stack) | Moderate | Users wanting integrated Flatpak pack |
| Individual Emulators | Slow | High | Low | High | Power tweakers, niche systems |
| PC / Source Ports | Varies | Varies | N/A | High | Best experience for specific titles |

---
## Housekeeping Checklist
- Keep SD card formatted ext4 or btrfs for case-sensitive paths & performance.
- Back up `Emulation/bios` and `Emulation/roms` regularly.
- Periodically refresh artwork cache if renamed ROMs appear blank.
- Audit shader caches if storage tight—they can grow large over time.
- Track fork vitality (especially Switch emulator forks) before updating.

> [!NOTE]
> This page replaces: EmuDeck, RetroDeck, Switch Emulation, BIOS/ROMs, Individual Emulators, PC Ports.
