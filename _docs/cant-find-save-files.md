
---
title: Can't find save files
parent_id: common-questions
nav_order: 5
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
## Running the game

1. In Steam, right-click the non-Steam shortcut you added (or add a new one if needed), and change the **Target** path to point to the correct `game.exe` where it was installed. Sometimes the main exe is in a subfolder—check for launchers and game-specific exes alike.  
2. Change the **Start In** folder to match the folder where the `game.exe` is located. This helps the game find its files and run correctly.
3. Go to the Compatibility section and **Force Compatibility**. 
        - Start with the latest GE-Proton version. If that fails, try the latest official Proton version. Only try other Proton versions if those do not work.
4. Click **Play** to launch the game.
5. If it shows an error or doesn’t run: Refer to the [Dependencies section](https://livinin82.github.io/steam-deck-pirates/#installing-dependencies) for help.
6. Run the game in Desktop mode to verify it works correctly.
7. Once verified, you can rename it in Steam to whatever you prefer, and then switch back to Gaming mode to play.

<blockquote class="admonition tip">
<strong>Tips</strong>
<ul>
    <li>Linux does not play well with spaces in file paths. Always wrap the path in quotes, e.g. <code>"/home/deck/Games/My Game/game.exe"</code>.</li>
    <li>Extract multi‑part archives first (make sure to fully extract all <code>.zip</code>, <code>.rar</code>, or <code>.7z</code> parts before running the installer). (Link to Peazip Guide)</li>
    <li>To install on a microSD card, create a folder named <code>Games</code> on the SD card root. Then, add its path in Part 3.</li>
    <li>Some games may have a different <code>.exe</code> file for launching. Use Dolphin File Explorer to search for other <code>.exe</code> files in the game folder.</li>
    <li>Some games require specific Proton versions. Search Reddit or protondb (Link) for recommendations, and use ProtonUp-QT to download other Proton versions if needed.</li>
</ul>
</blockquote>