---
title: Guides for installing games
id: install-guides
nav_order: 3
---

# Guides for installing games

```mermaid
graph TD
    A[Source Game] --> B[Install Game on PC]
    A --> C[Pre-installed Game]
    A --> D[Install on SteamDeck]
    B --> E[Transfer to Deck]
    C --> E
    E --> F[Add Non-Steam Game]
    D --> F
    F --> G{Set up Windows Env}
    G -->|SteamOS| H[Configure (ProtonTricks)]
    G -->|Lutris| Z((Play))
    H --> Z
```

Quick links:

- [Steam install](#installing-games-through-steam)
- [Lutris install](#installing-games-through-lutris)
- [Other launchers](#installing-games-through-other-launchers)
- [Transfer from PC](#transferring-installed-games-from-pc)

---
## Installing games through Steam {#installing-games-through-steam}
> [!NOTE]
> If the game is already fully installed (a pre‑installed repack) skip to Part 3.

### Part 1: Run the installer
<div class="panel"><strong>Method 1: Wine (simple)</strong>
<ul><li>Right‑click setup.exe → Open with Wine.</li><li>Limit to 2GB RAM (optional).</li><li>Select external path (avoid prefix).</li></ul></div>
<div class="panel"><strong>Method 2: Steam + Proton</strong>
<ul><li>Add setup.exe to Steam (Desktop Mode).</li><li>Force Proton Experimental.</li><li>Create <code>~/Games</code> folder.</li><li>Play to launch installer.</li></ul></div>
<div class="panel"><strong>After either method</strong><ul><li>Let installer finish; uncheck extra runtimes.</li></ul></div>
> FG repacks default to D:, DoDi to C: — adjust path.

### Part 2: Installer flow
<div class="panel"><ul>
<li>Choose language.</li>
<li>Install to accessible folder (not inside prefix for big games).</li>
<li>Disable bundled DirectX/VC++ unless necessary.</li>
<li>Expect slow repack decompression.</li>
</ul></div>

### Part 3: Running the game
<div class="panel"><strong>Wine path</strong><ul><li>Add game.exe to Steam.</li><li>Set Proton Experimental.</li><li>Test in Desktop Mode first.</li></ul></div>
<div class="panel"><strong>Proton path</strong><ul><li>Remove setup.exe entry.</li><li>Add game.exe instead.</li><li>Rename entry after success.</li></ul></div>
> Launch errors = wrong Proton or missing dependencies.

<div class="panel"><strong>Tips</strong><ul><li>Extract multi‑part archives first.</li><li>Try Proton-GE if stock versions fail.</li><li>Avoid prefix drive_c for storage.</li></ul></div>

---
## Installing games through Lutris {#installing-games-through-lutris}
> [!CAUTION] Ensure Lutris has filesystem permission (Flatseal).
> [!NOTE] Some repacks need alternate runners; Lutris simplifies that.
<div class="panel"><ol><li>Open Lutris.</li><li>+ → Add Game.</li><li>Name; Runner: Wine.</li><li>Game Options → installer .exe.</li><li>Save → entry appears.</li><li>Launch to install.</li><li>Configure → point executable to installed game.</li></ol></div>
> Use Advanced Options for custom Wine / Proton-GE versions.

---
## Installing games through other launchers {#installing-games-through-other-launchers}
Use other launchers only if they add value (cloud saves, store integration).
<div align="center">
<a href="https://docs.usebottles.com/"><img src="https://cdn2.steamgriddb.com/logo_thumb/b6971181414fe808396c6883eb262e8d.png" alt="Bottles" width="110"></a>
<a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/Steam-Deck"><img src="https://cdn2.steamgriddb.com/icon_thumb/9f73f765160d33280216b73b6378c068.png" alt="Heroic" width="130"></a>
</div>

---
## Transferring Installed Games from PC {#transferring-installed-games-from-pc}
> [!NOTE] Network transfer > USB (avoids double copy).
> [!WARNING] Speed depends on LAN + storage I/O.

### SSH Setup
<div class="panel"><ol><li>Desktop Mode.</li><li>Set password: <code>passwd</code>.</li><li><code>sudo systemctl enable --now sshd</code></li><li>Find IP (Settings > Internet).</li><li><code>ssh deck@IP</code> to test.</li></ol></div>
> Remember the password.

### Mount as network location
<div class="panel"><ul><li>Windows: <code>sftp://deck@IP:/home/deck</code></li><li>macOS: Connect to Server… same URL</li><li>Linux: File manager connect dialog</li><li>SD card: <code>/run/media/mmcblk0p1</code></li></ul></div>

### Warpinator
<div class="panel"><strong>Deck:</strong><ol><li>Install Warpinator.</li><li>Set PIN.</li><li>Select download folder.</li></ol><strong>PC:</strong><ol><li>Install Warpinator/Winpinator.</li><li>Match PIN.</li><li>Send files.</li></ol></div>
