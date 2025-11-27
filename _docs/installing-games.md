---
title: Guides for installing games
id: install-guides
nav_order: 3
---

# Guides for installing games

```mermaid
    A[Source Game] --> B[Install Game on PC];
    A --> C[Pre-installed Game];
    A --> D[Install on SteamDeck];
    B --> E[Transfer to Deck];
    C --> E;
    E --> F[Add Non-Steam Game];
    D --> F;
    F --> G{Set up Windows Env};
    G -->|SteamOS| H[Configure (ProtonTricks)];
    G -->|Lutris| Z((Play));
    H --> Z;
```



Quick links:

- [Installing games through Steam](#installing-games-through-steam)
- [Installing games through Lutris](#installing-games-through-lutris)
- [Installing games through other launchers](#installing-games-through-other-launchers)
- [Transferring Installed Games from PC](#transferring-installed-games-from-pc)

> **Note:** The “Add Non-Steam Game” option is found in the Steam menu in Desktop Mode, not in the Deck UI or Gaming Mode. Switch to Desktop Mode to access this feature.

---
### Installing games through Steam {#installing-games-through-steam}
> [!NOTE]
> If the game is already fully installed (a pre‑installed repack) skip to Part 3.


### Part 1: Run the installer

<div class="panel"><strong>Method 1: Wine (simple) — For advanced users</strong>
<ol><li>Right‑click <code>setup.exe</code> → Open with Wine.</li><li><strong>Limit to 2GB RAM (required on Deck)</strong>.</li><li>Select external path (avoid prefix).</li></ol></div>

<div class="panel"><strong>Method 2: Steam + Proton — Recommended for most users</strong>
<ol><li>Add setup.exe to Steam (Desktop Mode).</li><li><strong>Force the latest GE-Proton version</strong> (recommended). <br><em>Right-click the entry in your Steam Library, choose “Properties” → “Compatibility,” and check “Force the use of a specific Steam Play compatibility tool.”</em> If that fails, try Proton Experimental. Only try other Proton versions if those do not work.</li><li>Create <code>~/Games</code> folder.</li><li>Play to launch installer.</li></ol></div>

> **Note:** FG repacks default to the D: drive, and DoDi repacks default to the C: drive. Be sure to manually set the install location to the <code>~/Games</code> folder you created earlier.


### Part 2: Installer flow
<div class="panel"><ol>
<li>Choose language.</li>
<li>Install to accessible folder (not inside prefix for big games).</li>
<li>Disable bundled DirectX/VC++ unless necessary (only install these if the game specifically requires them; otherwise, skip to avoid conflicts with system versions).</li>
<li>Expect slow repack decompression.</li>
</ol></div>


### Part 3: Running the game
<div class="panel"><strong>Wine path</strong><ol><li>Add game.exe to Steam.</li><li><strong>Set the latest GE-Proton version</strong> (recommended). <br><em>Right-click the entry in your Steam Library, choose “Properties” → “Compatibility,” and check “Force the use of a specific Steam Play compatibility tool.”</em> If that fails, try the latest official Proton version. Only try other Proton versions if those do not work.</li><li>Test in Desktop Mode first (launch the game from Steam while in Desktop Mode, not Gaming Mode).</li></ol></div>

> Launch errors = wrong Proton or missing dependencies. See the [dependencies guide](./installing-dependencies.md) for help installing required components.

> **Tip:** If your game is missing a DLL or needs extra components, you can use [ProtonTricks](./installing-dependencies.md#using-protontricks) to install them into the correct prefix.

<div class="panel"><strong>Tips</strong><ul><li>Extract multi‑part archives first (make sure to fully extract all <code>.zip</code>, <code>.rar</code>, or <code>.7z</code> parts before running the installer).</li><li>Start with the latest GE-Proton version. If that fails, try the latest official Proton version. Only try other Proton versions if those do not work.</li><li>Avoid prefix drive_c for storage (do NOT install large games inside the Wine prefix’s <code>drive_c</code> folder; use a separate folder like <code>~/Games</code> instead).</li></ul></div>

---

### Installing games through Lutris {#installing-games-through-lutris}
> [!CAUTION] Ensure Lutris has filesystem permission (Flatseal).
> [!NOTE] Some repacks need alternate runners; Lutris simplifies that.
<div class="panel"><ol><li>Open Lutris.</li><li>+ → Add Game.</li><li>Name; Runner: Wine.</li><li>Game Options → installer .exe.</li><li><strong>Prefix folder:</strong> In the Game Options tab, set the "Wine prefix" to a custom folder (e.g., <code>~/Games/game-name-prefix</code>). This keeps each game isolated and avoids cluttering the default prefix.</li><li>Save → entry appears.</li><li>Launch to install.</li><li>Configure → point executable to installed game.</li></ol></div>
> Use Advanced Options for custom Wine / Proton-GE versions.
> 
> **Tip:** Keeping each game in its own prefix folder makes troubleshooting and cleanup much easier. Avoid installing large games inside the default prefix (usually <code>~/.wine</code> or <code>~/.local/share/lutris/runners/wine</code>).

---
### Installing games through other launchers {#installing-games-through-other-launchers}
Use other launchers only if they add value (cloud saves, store integration).
<div class="launcher-icon-row">
    <a href="https://docs.usebottles.com/" title="Bottles" aria-label="Bottles"><img class="launcher-icon-btn-fixed" src="https://cdn2.steamgriddb.com/logo_thumb/b6971181414fe808396c6883eb262e8d.png" alt="Bottles" /></a>
    <a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/Steam-Deck" title="Heroic" aria-label="Heroic"><img class="launcher-icon-btn-fixed" src="https://cdn2.steamgriddb.com/icon_thumb/9f73f765160d33280216b73b6378c068.png" alt="Heroic" /></a>
</div>

---
### Transferring Installed Games from PC {#transferring-installed-games-from-pc}
> [!NOTE] Network transfer > USB (avoids double copy).
> [!WARNING] Speed depends on LAN + storage I/O.

### SSH Setup
<div class="panel"><ol><li>Desktop Mode.</li><li>Set password: <code>passwd</code>.</li><li><code>sudo systemctl enable --now sshd</code></li><li>Find IP (Settings > Internet).</li><li><code>ssh deck@IP</code> to test.</li></ol></div>
> Remember the password.

### Mount as network location
<div class="panel"><ol><li>Windows: <code>sftp://deck@IP:/home/deck</code></li><li>macOS: Connect to Server… same URL</li><li>Linux: File manager connect dialog</li><li>SD card: <code>/run/media/mmcblk0p1</code></li></ol></div>

### Warpinator
<div class="panel"><strong>Deck:</strong><ol><li>Install Warpinator.</li><li>Set PIN.</li><li>Select download folder.</li></ol><strong>PC:</strong><ol><li>Install Warpinator/Winpinator.</li><li>Match PIN.</li><li>Send files.</li></ol></div>

#### SSH (Network File Sharing) {#ssh-network-file-sharing}
Below are step-by-step platform examples—enable SSH first (see steps above or reuse SSH Setup section):
<div class="panel"><strong>Linux:</strong><ol><li>Terminal: <code>ssh deck@&lt;IP&gt;</code></li><li>Accept fingerprint.</li><li>Enter password.</li></ol><strong>Mac:</strong><ol><li>Open Terminal.</li><li><code>ssh deck@&lt;IP&gt;</code></li></ol><strong>Windows (PowerShell):</strong><ol><li><code>ssh deck@&lt;IP&gt;</code></li><li>Or use PuTTY GUI.</li></ol></div>
> [!TIP] Use <code>scp -r folder deck@&lt;IP&gt;:~/Games/</code> for direct transfers.

#### FTP (Slower Network Sharing, Needs an App) {#ftp-slower-network-sharing-needs-an-app}
> [!NOTE] SFTP already provides secure file transfer via SSH; plain FTP is not recommended. If an app demands FTP, prefer SFTP mode.
<div class="panel"><ol><li>Use an SFTP-capable client (FileZilla, WinSCP).</li><li>Host: Deck IP, Protocol: SFTP, User: <code>deck</code>.</li><li>Drag & drop game folder.</li></ol></div>

#### MTP (USB Sharing) {#mtp-usb-sharing}
> [!NOTE] Useful if network is slow/unreliable.
<div class="panel"><ol><li>Boot Desktop Mode.</li><li>Connect USB-C cable Deck ↔ PC.</li><li>On Deck, confirm file sharing (if prompt appears).</li><li>Deck storage mounts on host as media device.</li><li>Copy files into <code>/home/deck/Games</code> (create if missing).</li></ol></div>
> [!WARNING] Large single-file transfers may appear stalled; be patient—no compression.
