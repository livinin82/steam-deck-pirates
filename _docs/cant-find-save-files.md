---

## Using EmuSync to Sync or Back Up Save Files

**[EmuSync](https://github.com/emu-sync/EmuSync)** is a tool that helps you automatically back up and sync your emulator save files, save states, and configuration files across devices or to cloud storage. It supports a wide range of emulators and platforms, making it easy to keep your progress safe and portable.

### How to Use EmuSync

1. **Visit the [EmuSync GitHub page](https://github.com/emu-sync/EmuSync) and download the latest release** for your platform (Linux, Windows, etc.).
2. **Extract the archive** and follow the installation instructions in the README.
3. **Configure EmuSync:**
    - Run the EmuSync executable or script.
    - Add your emulator save folders and choose your sync/backup destination (local folder, cloud, etc.).
    - You can set up profiles for different emulators or systems.
4. **Sync or back up:**
    - Use the EmuSync interface or command to start syncing or backing up your files.
    - You can automate this process or run it manually as needed.

> [!TIP]
> EmuSync is especially useful if you play on multiple devices or want an easy way to back up all your emulator saves at once. See the [official EmuSync documentation](https://github.com/emu-sync/EmuSync) for advanced options and troubleshooting.
---
title: Can't find save files
parent_id: common-questions
nav_order: 5
---


## Can't find save files (moving between installs)



<div class="panel">
<ul>
    <li>Use the website <a href="https://www.pcgamingwiki.com/wiki/Home">PCGamingWiki</a> to find the save path location. <br><strong>Tip:</strong> On PCGamingWiki, you are looking for the <em>Windows</em> save path, because Proton creates a Windows-like environment inside its prefix.</li>
    <li>Use <strong>ProtonTricks</strong> to help identify the correct <code>compatdata</code> folder for your game. This will show you which prefix is being used.</li>
    <li>Refer to our <a href="#finding-non-steam-game-proton-folder">Finding Non-Steam Game Proton Folder</a> section for more details.</li>
    <li>Use the path from PCGamingWiki to navigate within <code>drive_c</code> in your game's prefix and find your save file.</li>
    <li>To back up your saves, see the <a href="#backing-up-save-files">Backing Up Save Files</a> section below.</li>
</ul>
</div>
## Backing Up Save Files {#backing-up-save-files}

There are two main ways to back up your save files:

### 1. Manual Copy & Paste

1. Find your save file using the steps above.
2. Copy the save file or folder to a safe location (external drive, cloud storage, etc.).
3. To restore, copy it back to the same location in the correct prefix.

### 2. Using Ludusavi

**[Ludusavi](https://github.com/mtkennerly/ludusavi)** is an open-source tool that automatically backs up and restores save data for hundreds of games, including Steam, GOG, and emulators.

**How to use Ludusavi:**
1. Download and install Ludusavi from the [official GitHub page](https://github.com/mtkennerly/ludusavi).
2. Run Ludusavi and select the games/platforms you want to back up.
3. Choose your backup location (local folder, cloud, etc.).
4. Click “Backup” to save your files. Use “Restore” to put them back later.

> [!TIP]
> Ludusavi is great for regular backups and for moving saves between different systems or installs.

> [!NOTE]
> There is also a cool app called **[Shortix](https://github.com/Jannomag/shortix)**. Shortix creates user-readable symlinks for Proton game prefixes, making it much easier to find your mods, game saves, etc. Once installed, you'll have a folder with shortcuts to your Proton folders. All info is in the link. This is optional, but can make the process easier.

> [!NOTE]
> If there is no save file, check the **Install Locations** section above.