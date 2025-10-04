---
title: EmuDeck
parent: Emulators and ROMs
nav_order: 1
---

## Emudeck
EmuDeck is a collection of scripts that allows you to autoconfigure your Steam Deck, it creates your roms directory structure and downloads all of the needed Emulators for you along with the best configurations for each of them. EmuDeck works great with [Steam Rom Manager](https://github.com/SteamGridDB/steam-rom-manager) or with [EmulationStation DE](https://es-de.org).

#### Installing EmuDeck
<div class="panel">
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
</div>

*from [Emudeck wiki](https://emudeck.github.io/)*
