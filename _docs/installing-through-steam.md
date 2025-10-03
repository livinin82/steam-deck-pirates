---
title: Installing through Steam
parent: Installing Games
nav_order: 1
---

## Installing games through Steam

> [!NOTE]
> There are a few different ways to get cracked games on your system. They all for the most part end in the same results. Some games require one method over another. Part of piracy is experimenting and finding what works best. If you find a better method for a specific game let us know in the subreddit!

If your game is already in a preinstalled state, skip to **Part 3**.

#### Part 1: Running the setup.exe



<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 1: Using Wine</strong>
<ul>
    <li>Right-click setup.exe and select Wine.</li>
    <li>Limit the installer to 2GB of RAM.</li>
    <li>Install to your preferred location for games.</li>
</ul>
</td>
</tr>
</table>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 2: Using Steam Compatibility Tool</strong>
<ul>
    <li>Switch your Steam Deck to desktop mode (in the Power settings menu).</li>
    <li>Locate the downloaded game and the setup.exe file.</li>
    <li>Right-click on setup.exe and click “Add to Steam”.</li>
    <li>Open Steam, go to your Library, and click on setup.exe.</li>
    <li>Go to the Compatibility section and check the box for “Force the use of a specific compatibility tool.”</li>
    <li>Select Proton Experimental.</li>
    <li>Create a new folder called Games in <code>/home/deck/</code>.</li>
    <li>Go back to Steam, click on setup.exe, and press Play.</li>
</ul>
</td>
</tr>
</table>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Continued from either method:</strong>
<ul>
    <li>Wait for the installation to complete.</li>
    <li>Once done, check off all the radio boxes in the installer and close it.</li>
</ul>
</td>
</tr>
</table>

**Note:** FG repacks default to the D drive, and DoDi repacks default to the C drive.

#### Part 2: Installation

> [!WARNING]
> Be patient. Sometimes, it can take a while for the installer to appear.

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ul>
    <li>Once it does, select your preferred language (e.g., English) and click Next.</li>
    <li>Follow the installer steps. Make sure to:
        <ul>
            <li>Set the installation path to the <code>Games</code> folder in the Z drive (or your microSD card if installing there).</li>
            <li>Untick any options for additional installations (like DirectX and Visual C++).</li>
        </ul>
    </li>
    <li>Start the installation.
        <ul>
            <li>Optional step: Limit the installer to 2GB of RAM for installation stability.</li>
        </ul>
    </li>
</ul>
</td>
</tr>
</table>

> [!NOTE]
> Don’t worry if the installation is slow, especially for repacks. This is normal and can take hours depending on game size and compression.

#### Part 3: Running the Game
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 1: Using Wine</strong>
<ul>
    <li>Once the installation is complete, go to the installation folder and locate the game’s .exe file (e.g., <code>game.exe</code>).</li>
    <li>Right-click on the <code>game.exe</code>, select “Add to Steam” to add it as a non-Steam game.</li>
    <li>Open Steam, find <code>game.exe</code>, and go to the Compatibility section.</li>
    <li>Set the compatibility to Proton Experimental.</li>
    <li>Launch the game by pressing Play.</li>
    <li>If it shows an error or doesn’t run: Refer to the dependencies guide for help ([Dependencies Guide](#installing-dependencies)).</li>
    <li>Run the game in Desktop mode to verify it works correctly.</li>
    <li>Once verified, you can rename it in Steam to whatever you prefer, and then switch back to Gaming mode to play.</li>
</ul>
</td>
</tr>
</table>
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 2: Using Steam Compatibility Tool</strong>
<ul>
    <li>Once the installation is complete, go back to Steam and remove <code>setup.exe</code> (right-click > Manage > Remove non-Steam game).</li>
    <li>Go to the installation folder, find the <code>game.exe</code> file, right-click on it, and add it to Steam.</li>
    <li>Open Steam, find <code>game.exe</code>, and go to the Compatibility section. Repeat steps 5-7 from Part 1 (set the compatibility to Proton Experimental).</li>
    <li>Launch the game by pressing Play.</li>
    <li>Run the game in Desktop mode to make sure it works correctly.</li>
    <li>Exit the game. You can rename it in Steam to whatever you prefer (otherwise, it’ll show as <code>game.exe</code> in gaming mode).</li>
    <li>Switch back to Gaming mode and enjoy your game!</li>
</ul>
</td>
</tr>
</table>

> [!NOTE]
> If it shows an error or doesn’t run: Either the Proton version is incorrect (try different ones) or there’s a missing dependency. If it's the latter, refer to a dependencies guide ([Dependencies Guide](#installing-dependencies)).

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Additional Notes</strong>
<ul>
    <li>Some downloads may come in <code>.rar</code> files. Extract these using an app like PeaZip before proceeding to Step 2.</li>
    <li>Proton Experimental should usually work, but if it doesn’t, try the latest Proton version or Proton-GE.</li>
    <li>You may need to enable hidden files for this step.</li>
    <li>To install on a microSD card, create a folder named <code>Games</code> on the SD card root. Then, add the following to <code>setup.exe</code>’s launch options:
        <pre><code>STEAM_COMPAT_MOUNTS="/run/media/mmcblk0p1/Games/" %command%</code></pre>
    </li>
    <li>Avoid installing to the C drive to prevent issues later on.</li>
    <li>Some games may have a different <code>.exe</code> file for launching. Use Dolphin File Explorer to search for other <code>.exe</code> files in the game folder.</li>
    <li>Some games require specific Proton versions. Search Reddit for recommendations, and use ProtonUp-QT to download other Proton versions if needed.</li>
    <li>This guide should help you install and configure non-Steam games on your Steam Deck. Enjoy gaming!</li>
</ul>
</td>
</tr>
</table>
