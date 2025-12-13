
<p class="hero-sub">A consolidated single-page reference for running Windows games, emulation, and tweaks on Steam Deck.</p>
<p class="updated-inline">Updated: {{ site.time | date: "%Y-%m-%d" }}</p>



## Info About Steam Deck


### Game Mode

Game Mode is essentially an overlay running Big Picture Mode, allowing you to access the Quick Access Menu and the Steam Menu and control everything in one easy to use interface. This is the preferred method to play games as it allows you to set hardware limits, change settings on the fly, enable a fps counter, and many other things on the fly. This is what the Deck boots into by default.

### Desktop Mode

Desktop Mode is what Game Mode is installed over. It is the real computer behind everything. Built on Arch Linux with KDE Desktop Environment. It can be accessed through Game Mode by opening the Steam Menu and clicking **Power > Switch to Desktop**.

### Wine

Wine (originally an acronym for "Wine Is Not an Emulator") is a compatibility layer capable of running Windows applications on several POSIX-compliant operating systems, such as Linux, macOS, & BSD. Instead of simulating internal Windows logic like a virtual machine or emulator, Wine translates Windows API calls into POSIX calls on-the-fly, eliminating the performance and memory penalties of other methods and allowing you to cleanly integrate Windows applications into your desktop.


*from [WineHQ](https://www.winehq.org/)*


> To simplify: Wine Makes Linux run Windows apps

### Proton

Proton is a compatibility layer for Windows games to run on Linux-based operating systems. Proton is developed by Valve in cooperation with developers from CodeWeavers. It is a collection of software and libraries combined with a patched version of Wine to improve performance and compatibility with Windows games. Proton is designed for integration into the Steam client as "Steam Play". It is officially distributed through the client, although third-party forks can be manually installed. Proton incorporates several libraries that improve 3D performance. These include Direct3D-to-Vulkan translation layers, namely DXVK for Direct3D 9, 10 and 11, and VKD3D-Proton for Direct3D 12.


*from [Wikipedia](https://www.wikipedia.org)*


***There are two different Proton iterations right now:***

#### Steam's Official Proton

This is what comes baked into the system more or less. These are selectable by going into the game Properties and clicking the Compatibility tab. From there you'll click the checkbox next to "Force the use of a specific Steam Play compatibility tool". Here you will be able to select any Proton available through steam as well as any others you have installed. Sometimes different games work with different Proton versions. More often than not Proton Experimental is the most up to date and has the best compatibility rate. All games are different, some may not have working sound unless you go to an old version. Mess with this first if you have issues running games.

#### GE-Proton

GE Proton (or Glorious Eggroll Proton) is an open source variant of Steams Proton that is user developed and maintained. It usually has faster support for games and also includes additional features and fixes, some which Steam can't include for licensing reasons. It's usually installed through ProtonUpQt, and can be selected the same as any other Proton version once installed, in the compatibility section of any game's properties.

### Prefixes

A (Wine/Proton) prefix is what makes Proton able to run a Windows app on Linux "natively". Inside of any prefix you'll usually find a series of folders and files, one being `drive_c`. The reason for all of this is the folder structure and other dependencies and files emulates a Windows environment. Essentially a prefix pretends to be a Windows hard drive, pretends Windows is installed on it, and translates Linux commands/operations into Windows specific versions. This combined with Wine/Proton are the most major components of playing a Windows game on a Linux device.

### Launchers

Launchers are apps built for Linux that allow you to play games from other Launcher based game companies. Heroic, Bottles, and Lutris are the mainly discussed ones. These add a few more things some games may need to run efficiently or properly at all. While these are a preferred method for ease of use, keep in mind this is another layer between your game and SteamOS so at times troubleshooting it may be a little more difficult. These also usually come with Wine configuration, login support for launchers, the option to add shortcuts to Steam, and a whole slew of other features allowing you to do less tinkering and kind of just get going.



### Decky Loader

<blockquote class="admonition-warning">
    <strong>Warning:</strong> <b>Decky Loader</b> is a third-party plugin loader for the Steam Deck. It allows you to add custom features and tweaks to your Deck, but it has been known to break after SteamOS or plugin updates. <b>Support for Decky Loader is not offered here. Use at your own risk.</b>
</blockquote>

#### Installing Decky Loader
1. Go to the <a href="https://github.com/SteamDeckHomebrew/decky-loader">Decky Loader GitHub</a> and follow the installation instructions for your Steam Deck.
2. After installation, Decky will appear as a plug icon in the Steam Deck's quick access menu.
3. You can browse and install plugins directly from the Decky interface.

#### Disabling or Uninstalling Decky Loader
1. Open the Decky menu (plug icon).
2. Use the settings or options menu to disable or uninstall Decky Loader or any installed plugins.

If you experience issues with games or SteamOS after installing Decky Loader or plugins, try disabling or uninstalling Decky Loader first.

## Commonly Used Apps




<blockquote class="admonition-note">
    <strong>Note:</strong> Items in <em>Italics</em> are available on the Discover Store.
</blockquote>

| Name/Link | Description |
| :--- | :---: |
| *[ProtonUpQt](https://davidotek.github.io/protonup-qt/)* | This allows you to install unofficial Proton versions for Steam, Lutris, and other specialty situations. Highly recommended whether you're sailing the seas or not. |
| *[Flatseal](https://github.com/tchx84/Flatseal)* | Use this app to give extra permission to Flatpak apps. Flatpak is the method of installation used when you download apps in Discover. Most often in this scenario you would use this to allow an app to see all of the filesystem (if your other drives or folders aren't showing in an app like Lutris, this is how you would make it available). |
| *[ProtonTricks](https://github.com/Matoking/protontricks)* | Similar to WineTricks, this allows you to manipulate the prefixes for your individual Windows based games. You can install dependencies, set the prefix up to use DLL files (for mods), set the Windows versions compatibility, install game updates or other exe files, and so much more. This is like the control panel in Windows for each individual games prefix. This is also where you can find the **compatdata** folder number for any non steam games you have installed (if you installed through steam). The folder number will be in parentheses next to whatever the entry is titled in steam. |
| *[Bottles](https://usebottles.com)/[Lutris](https://lutris.net)/[Heroic Launcher](https://heroicgameslauncher.com)* | These are the launchers that are mentioned in the previous section. Bottles, Lutris, and Heroic have varied access to the stupid launchers all AAA publishers insist on using. Thing of these as mega launcher that allows you to organize and work with a multitude of launcher-based games without having to jump from launcher to launcher. These can all be found on the discover store. |
| [EmuDeck](https://www.emudeck.com)/[RetroDeck](https://retrodeck.net) | If it isn't obvious from the name, these are the most commonly recommended methods of playing emulators and retro games. The advantages of these methods rather than setting up every emulator individually are: better folder structure, custom settings tailored to the Deck itself, a frontend that brings everything into view easily, and a bunch of other included tools that make getting on the road to emulation a lot easier. There is a larger section about emulation below. |
| *[Warpinator](https://warpinator.com/warpinator-download/)* | <span class="modern-link">Warpinator</span> is a recommended file transfer service for your local network. This application works with all OS options. It will need to be running on both your Steam Deck and the device you are transferring files from/to. For Windows there are two options, <span class="modern-link">Winpinator</span> and <span class="modern-link">Warpinator</span>. I have personally had more luck with the actual Warpinator. Sometimes if there are connection issues it is best to manually set the network device in settings. This is the fastest and easiest to set up method for transferring files. |
| *[JDownloader](https://jdownloader.org)* | A download manager that I myself swear by. It can handle multi part links, fill captchas for you, store account info for sites you have a login with, and it usually finds the highest speed it can. Any type of DL link works here for the most part. It is recommend downloading one or two files at a time through settings so you can maximize speed. |
| *[qBittorrent](https://www.qbittorrent.org)* | For downloading torrents. |
| *[AnyDesk](https://anydesk.com/en)/[RustDesk](https://rustdesk.com)* | These are Remote Desktop applications. Use this to access your desktop mode from another PC or Device that can install these apps. This is great in the absence of a keyboard and mouse, you can also send files to yourself (albeit small ones). This is really useful also if you don't wanna keep switching between monitor inputs while docked, etc. If you want real ease of use be sure to set up unattended access with a password for the remote app so you don't have to use the Deck to accept every session. |
| *[PeaZip](https://peazip.github.io)* | Application for handling compressed files. This includes .rar, .7z, .zip, etc. This is especially useful for multipart zip files (repacks/large games) as Dolphin seems to have issues with them. Open PeaZip, click Open, find where your multipart compressed files are, and select one. It should open all of the data inside the window, then click extract and make sure you extract to a place you can find easily! |



<blockquote class="admonition-caution">
    <strong>Caution:</strong> Do not use BitTorrent or uTorrent as they have been known to be shady in the past.
</blockquote>


---


## Guides for installing games

<p align="center">
    <img class="install-flow-img install-flow-light" src="{{ site.baseurl }}/assets/img/Light.png" alt="Install flow overview (light)" />
    <img class="install-flow-img install-flow-dark" src="{{ site.baseurl }}/assets/img/Dark.png" alt="Install flow overview (dark)" />
</p>



Quick links:

- [Installing games through Steam](#installing-games-through-steam)
- [Installing games through Lutris](#installing-games-through-lutris)
- [Installing games through other launchers](#installing-games-through-other-launchers)
- [Transferring Installed Games from PC](#transferring-installed-games-from-pc)


<blockquote class="admonition-note">
    <strong>Note:</strong> The “Add Non-Steam Game” option is found in the Steam menu in Desktop Mode, not in the Deck UI or Gaming Mode. Switch to Desktop Mode to access this feature.
</blockquote>

---
### Installing games through Steam {#installing-games-through-steam}


<blockquote class="admonition-note">
    <strong>Note:</strong> If the game is already fully installed (a pre‑installed repack) skip to Part 3.
</blockquote>

### Part 1: Run the installer

<div class="panel"><strong>Steam + Proton — Recommended for most users</strong>
<ol>
    <li>Add <code>setup.exe</code> to Steam (Desktop Mode).</li>
    <li><strong>Force the latest GE-Proton version</strong> (recommended). <br><em>Right-click the entry in your Steam Library, choose “Properties” → “Compatibility,” and check “Force the use of a specific Steam Play compatibility tool.”</em> If that fails, try Proton Experimental. Only try other Proton versions if those do not work.</li>
    <li>Create a <code>~/Games</code> folder if you don't already have one, or use your existing <code>~/Games</code> folder if you've set one up previously.</li>
    <li>Click <strong>Play</strong> to launch the installer.</li>
</ol></div>


<blockquote class="admonition-note">
    <strong>Note:</strong> FG repacks default to the D: drive, and DoDi repacks default to the C: drive. Be sure to manually set the install location to the <code>~/Games</code> folder you created earlier.
</blockquote>


### Part 2: Installing the Game
<div class="panel"><ol>
    <li>Choose language.</li>
    <li>Install to your <code>~/Games</code> folder (created previously or in Part 1), not inside the prefix, especially for big games.</li>
    <li>Disable bundled DirectX/VC++ unless necessary (only install these if the game specifically requires them; otherwise, skip to avoid conflicts with system versions).</li>
    <li>Close the installer after it has successfully finished. Once decompression is complete and the installer finishes, close the installer completely before proceeding.</li>
</ol></div>
<blockquote class="admonition-caution">
    <strong>Caution:</strong> Some repacks can take a long time to decompress, and the installer may appear unresponsive during this process. This is normal.
</blockquote>


### Part 3: Running the game

<blockquote class="admonition-warning">
    <strong>Before you run the game:</strong><br>
    <b>Launch errors</b> are often caused by using the wrong Proton version or missing dependencies. See the <a href="#installing-dependencies">Dependencies section</a> for help installing required components.<br><br>
    <b>Missing DLLs or extra components</b> may be required for mods or other enhancements. See the <a href="#adding-dlls-to-proton">Adding DLLs to Proton</a> section for details on how to add them using ProtonTricks or Steam launch options.
</blockquote>

<blockquote class="admonition-caution">
    <strong>Caution:</strong> <b>Do NOT install to the C: drive or inside the Wine prefix’s <code>drive_c</code> folder.</b> Always install your games to a separate folder like <code>~/Games</code> to prevent issues with storage, access, and future troubleshooting.
</blockquote>


<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>In Steam, right-click the non-Steam shortcut you added (or add a new one if needed), and change the <strong>Target</strong> path to point to the correct <code>game.exe</code> where it was installed. Sometimes the main exe is in a subfolder—check for launchers and game-specific exes alike.</li>
    <li>Change the <strong>Start In</strong> folder to match the folder where the <code>game.exe</code> is located. This helps the game find its files and run correctly.</li>
    <li>Go to the Compatibility section and <strong>Force Compatibility</strong>.<br>
        <ul><li>Start with the latest GE-Proton version. If that fails, try the latest official Proton version. Only try other Proton versions if those do not work.</li></ul>
    </li>
    <li>Click <strong>Play</strong> to launch the game.</li>
    <li>If it shows an error or doesn’t run: Refer to the <a href="https://livinin82.github.io/steam-deck-pirates/#installing-dependencies">Dependencies section</a> for help.</li>
    <li>Run the game in Desktop mode to verify it works correctly.</li>
    <li>Once verified, you can rename it in Steam to whatever you prefer, and then switch back to Gaming mode to play.</li>
</ol>
</td>
</tr>
</table>

<blockquote class="admonition-tip">
    <strong>Tips:</strong>
    <ul>
        <li>Linux does not play well with spaces in file paths. Always wrap the path in quotes, e.g. <code>"/home/deck/Games/My Game/game.exe"</code>.</li>
        <li>Extract multi‑part archives first (make sure to fully extract all <code>.zip</code>, <code>.rar</code>, or <code>.7z</code> parts before running the installer). <a href="#compressed-files">See the compressed files guide below.</a></li>
        <li>To install on a microSD card, create a folder named <code>Games</code> on the SD card root. Then, add its path in Part 3.</li>
        <li>Some games may have a different <code>.exe</code> file for launching. Use Dolphin File Explorer to search for other <code>.exe</code> files in the game folder.</li>
        <li>Some games require specific Proton versions. Search Reddit or protondb (Link) for recommendations, and use ProtonUp-QT to download other Proton versions if needed.</li>
    </ul>
</blockquote>


### Installing games through Lutris

> [!CAUTION]
> Make sure Lutris has access to the filesystem. This can be done through Flatseal.
> If your Lutris games aren't saving, this is probably why.

> [!NOTE]
> It's not necessary to install a game using Lutris as described here. But for some (cracked) games it works better or as described below is necessary insofar as you need a different runner for e. g. the installation of FitGirl repacks. So if you have an already installed game, skip steps 6 to 12.

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Obtain your desired game from a respected source.</li>
    <li>Install Lutris and open it.</li>
    <li>Click on to top left "+"-button to add a game.</li>
    <li>Enter the name of the game and select the Runner "Wine".</li>
    <li>Change to the tab "Game options".</li>
    <li>Click on the top right button "Browse.." to select the game's executable.</li>
    <li>Browse to the directory of your downloaded game and select the installer's <code>*.exe</code>.</li>
    <li>Click "Save", you'll see your game's installation has been added to Lutris.</li>
    <li>Double-click on it or use the bottom-left button "Play".</li>
    <li>The installation should start, follow the on-screen instructions.</li>
    <li>After the installation is done, right-click the game in Lutris and click "Configure".</li>
    <li>Go to "Game options" and click the top right button "Browse..".</li>
    <li>Browse to the directory in which you've installed the game.</li>
    <li>Select the game's executable and click the bottom right "Save".</li>
    <li>Double-click the game in Lutris to start it or use the bottom left button "Play".</li>
</ol>
</td>
</tr>
</table>

> [!NOTE]
> If a game doesn't work or has poor performance, click "Configure" on the game and tick the bottom left box "Show advanced options". Now you can edit the game's options, change the runner, etc.

*from [r/LinuxCrackSupport](https://www.reddit.com/r/LinuxCrackSupport/wiki/index/howto/#wiki_3.2_using_lutris)*

### Installing Games through other launchers

> [!NOTE]
> While we highly recommend using Lutris, there may be situations where you have to use another launcher. This section has links to guides that will help with them.

<div align="center">
<a href="https://docs.usebottles.com/"><img src="https://cdn2.steamgriddb.com/logo_thumb/b6971181414fe808396c6883eb262e8d.png" alt="Bottles" width="125"></a>
<a href="https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki/Steam-Deck"><img src="https://cdn2.steamgriddb.com/icon_thumb/9f73f765160d33280216b73b6378c068.png" alt="Heroic" width="150"></a>
</div>

### Transferring Installed Games from PC

> [!NOTE]
> There are a multitude of ways to transfer your files from any device you have over to your Deck.
> We won't mention USB drives here because it is easy to do and also the longest time out of any of the options seeing as how you have to transfer twice.

> [!WARNING]
> Speeds may vary based on a variety of things including network speed, network hardware, PC hardware, cable vs. WiFi, etc.


#### SSH (Network File Sharing)

Below are step-by-step guides for connecting to your Steam Deck via SSH from Linux, Mac, and Windows. Each guide assumes you have already enabled SSHD on your Steam Deck (see below).

---

#### Setting Up SSHD on Steam Deck
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Enable SSH Daemon Service on your Deck:</strong>
<ol>
    <li>Switch to Desktop Mode (<strong>STEAM</strong> button > <strong>Power</strong> > <strong>Switch to Desktop</strong>).</li>
    <li>Open <strong>Konsole</strong> from <strong>All Applications</strong>.</li>
    <li>Set a password for your user: <code>passwd</code></li>
    <li>Enable SSHD: <code>sudo systemctl enable sshd</code></li>
    <li>Start SSHD: <code>sudo systemctl start sshd</code></li>
    <li>Check status: <code>sudo systemctl status sshd</code> (look for <code>enabled</code> and <code>running</code>).</li>
</ol>
</td>
</tr>
</table>

>*from [GitHub](https://github.com/Matalus/steamdeck-tips/blob/main/wiki/ssh.md)*


<blockquote class="admonition-caution">
    <strong>Caution:</strong> The password set in this tutorial will be your password across all Deck operations. Remember it!!
</blockquote>

---

#### SSH Connection Guide: Linux
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Connect to Steam Deck from Linux:</strong>
<ol>
    <li>Open a terminal window.</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li>Connect using SSH:
        <pre><code>ssh deck@&lt;SteamDeck_IP&gt;</code></pre>
    </li>
    <li>Enter your password when prompted.</li>
    <li>You now have terminal access to your Steam Deck.</li>
</ol>
</td>
</tr>
</table>

#### SSH Connection Guide: Mac
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Connect to Steam Deck from Mac:</strong>
<ol>
    <li>Open the <strong>Terminal</strong> app (Applications > Utilities > Terminal).</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li>Connect using SSH:
        <pre><code>ssh deck@&lt;SteamDeck_IP&gt;</code></pre>
    </li>
    <li>Enter your password when prompted.</li>
    <li>You now have terminal access to your Steam Deck.</li>
</ol>
</td>
</tr>
</table>

---


#### SSH Connection Guide: Windows

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Connect to Steam Deck from Windows:</strong>
<ol>
    <li>Download and install <strong>PuTTY</strong> (or use Windows Terminal/PowerShell if OpenSSH is installed).</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li>Open PuTTY and enter <code>deck@&lt;SteamDeck_IP&gt;</code> as the Host Name.</li>
    <li>Set Port to <code>22</code> and Connection Type to <code>SSH</code>.</li>
    <li>Click <strong>Open</strong> and enter your password when prompted.</li>
    <li>You now have terminal access to your Steam Deck.</li>
</ol>
</td>
</tr>
</table>


---


#### Adding Your Deck Storage as a Drive on Your PC or Mac


<blockquote class="admonition-note">
    <strong>Note:</strong> If you want to take this a step further and make it REALLY streamlined, add it to your device as a network drive. This will make it an accessible folder in Finder/Explorer. Just drag and drop and call it a day.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Guide: Add Steam Deck Storage as a Network Drive</strong>
<ol>
    <li>Ensure SSH is enabled and running on your Steam Deck (see SSH setup above).</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li><strong>Windows:</strong>
        <ul>
            <li>Open <strong>File Explorer</strong>.</li>
            <li>Right-click <strong>This PC</strong> &rarr; <strong>Add a network location</strong>.</li>
            <li>Choose <strong>Choose a custom network location</strong> &rarr; <strong>Next</strong>.</li>
            <li>Enter: <code>sftp://deck@&lt;SteamDeck_IP&gt;:/home/deck</code></li>
            <li>Enter your Deck password when prompted.</li>
            <li>Your Deck's home folder will appear as a network drive in File Explorer.</li>
        </ul>
    </li>
    <li><strong>Mac:</strong>
        <ul>
            <li>Open <strong>Finder</strong>.</li>
            <li>Click <strong>Go</strong> &rarr; <strong>Connect to Server...</strong></li>
            <li>Enter: <code>sftp://deck@&lt;SteamDeck_IP&gt;/home/deck</code></li>
            <li>Click <strong>Connect</strong> and enter your password.</li>
            <li>Your Deck's home folder will mount as a network drive in Finder.</li>
        </ul>
    </li>
    <li><strong>Linux:</strong>
        <ul>
            <li>Open your file manager (e.g., Nautilus, Dolphin, Thunar).</li>
            <li>Look for a <strong>Connect to Server</strong> or <strong>Network</strong> option.</li>
            <li>Enter: <code>sftp://deck@&lt;SteamDeck_IP&gt;/home/deck</code></li>
            <li>Enter your Deck password when prompted.</li>
            <li>Your Deck's home folder will appear as a network location in your file manager.</li>
        </ul>
    </li>
    <li>For SD card access, navigate to <code>/run/media/mmcblk0p1</code> after connecting.</li>
    <li>You can now drag and drop files between your PC/Mac/Linux and Steam Deck as if it were a local folder.</li>
    <li>If you have trouble, use a graphical SFTP client like <strong>WinSCP</strong>, <strong>Cyberduck</strong>, or <strong>FileZilla</strong> with the same connection details.</li>
</ol>
</td>
</tr>
</table>


#### Windows (10/11)

#### Warpinator (Still Network, Needs an App)


<blockquote class="admonition-note">
    <strong>Note:</strong> Warpinator is an app available for Windows, and Linux that makes a direct tunnel between your two devices. This is by far the highest speed option outside of SSH. This method requires the application to be running on your Steam Deck and your other device at the same time.
</blockquote>

#### On Your Deck
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Install <strong>Warpinator</strong> from the <strong>Discover Store</strong>.</li>
    <li>Open <strong>Preferences</strong> and click <strong>Connection</strong> then set a unique PIN.</li>
    <li>In the <strong>General</strong> tab, make sure you point the download folder to a place you can find. I chose my <strong>Games</strong> folder.
        <ul><li>If you don't have access to a certain location (like your SD card), use flatseal to give Warpinator Permissions.</li></ul>
    </li>
</ol>
</td>
</tr>
</table>

#### On Your PC
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Download (unofficial) Warpinator from this <a href="https://warpinator.com/warpinator-download/">github</a>. Install it.</li>
    <li>Click <strong>Options > Settings</strong>.</li>
    <li>Put the same PIN from your Deck in the <strong>Group code</strong> box.</li>
    <li>Also make sure your <strong>Receive into folder</strong> is somewhere you can find it.</li>
    <li>Click <strong>Apply</strong>, then click <strong>OK</strong>.</li>
</ol>
</td>
</tr>
</table>

#### Transferring Files
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Your Deck should show in the <strong>Available Devices</strong> area. If not, make sure you followed the steps above. Click on it to open its transfer window.</li>
    <li>On Windows you can click the <code>+</code> button to add a folder, or the <code>Browse</code> button to add a singular file. You can also drag and drop multiple folders/into the window.</li>
    <li>Accept the transfer on the deck.</li>
    <li>Watch the files fly across your network onto your Deck.</li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-note">
    <strong>Note:</strong> The instructions for Deck&gt;PC should be the same.<br>
    You can go into settings and click <b>Automatically accept incoming transfers</b> if you don't want to accept every time.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> If you can't find your device, go into connection settings and select your specific Network device (wifi, ethernet, etc.).<br>
    <br>
    While Winpinator is often recommended, I myself had issues with it often not connecting or not finding my Deck. This was solved by using the unofficial app from the github linked above.
</blockquote>

#### FTP (Slower Network Sharing, Needs an App)


<blockquote class="admonition-note">
    <strong>Note:</strong> We will be using Filezilla here, as it is available on every OS. Any combination of FTP clients should work, as FTP is a protocol that is being utilized by all of the apps that offer it. There should be almost no difference.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Download <strong><a href="https://filezilla-project.org/">Filezilla</a></strong> on both devices.</li>
    <li>Find your IP address on your Deck by going to <strong>Settings>Internet</strong> in either <strong>Game Mode</strong> or <strong>Big Picture</strong> in <strong>Desktop Mode</strong></li>
    <li>On your PC, in <strong>Filezilla</strong>:
        <ul>
            <li>Enter the <strong>Deck</strong> IP address into the <strong>Host</strong> box.</li>
            <li>The Username is going to be <code>deck</code>.</li>
            <li>The password is blank unless you set it previously with the <code>passwd</code> command.</li>
            <li>The Port will be <code>22</code></li>
        </ul>
    </li>
    <li>Click <strong>Quickconnect</strong></li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-warning">
    <strong>Warning:</strong> You can add the connection to the app by clicking <b>File&gt;Copy Current Connection to Site Manager</b>.
</blockquote>

#### MTP (USB Sharing)

---

## Guides for Proton/Wine


<blockquote class="admonition-note">
    <strong>Note:</strong> This guide will be using ProtonTricks
</blockquote>

### Finding Non-Steam Game Proton Folder


<blockquote class="admonition-note">
    <strong>Note:</strong> This only works for games added to steam already as a non steam game.<br>
    This means you need to enable proton on the game and try to run it once so it can set up a prefix for it.<br>
    <ul>
        <li>Open <b>ProtonTricks</b>.</li>
        <li>In the list of games find the title you gave your game in Steam itself.</li>
        <li>Next to the game name, there is a long number.</li>
        <li>Open <b>Dolphin</b>.</li>
        <li>Go to <code>/home/deck/.local/share/Steam/steamapps/compatdata</code> and find the number from earlier.</li>
        <li>Enter the folder, then enter the <code>pfx</code> folder.</li>
        <li><code>drive_c</code> is the folder a lot of the "wine" aspect of things will happen.</li>
    </ul>
</blockquote>


<blockquote class="admonition-note">
    <strong>Note:</strong> Sometimes games will use either <code>Program Files</code> or <code>Program Files (x86)</code>. Check both.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> In ProtonTricks, your game will show as whatever it is titled in Steam upon opening. If you never changed the name from <code>setup.exe</code> then that's what it will be named.<br>
    <br>
    If you selected <code>C:</code> during an install (which you shouldn't have done!), your game may be installed in one of these folders.<br>
    If you'd love to find out why that isn't a good idea, keep it installed there and see.
</blockquote>

![Proton Folder Number](https://i.imgur.com/SCZqbXL.png)

### Installing Dependencies
#### What are dependencies?


<blockquote class="admonition-note">
    <strong>Note:</strong> Dependencies are other tools/apps that software relies on to work.<br>
    These are often included in the game installers on official releases. When you add a non-steam game from a pirated package, they may include these in a separate folder, or they may not be included at all. Without them the games that were designed around these dependencies at best will work with issues, and at worst won't open at all. If you're situation is either of these, this is the section that <em>should</em> help.<br>
    <br>
    <b>Dependencies are needed if:</b>
    <ul>
        <li>[X] Video/audio is messed up or not working.</li>
        <li>[X] Error at beginning stating a certain file or app cannot be found.</li>
        <li>[X] The game doesn't start.</li>
    </ul>
</blockquote>

#### How to find what dependencies are needed for your game.


<blockquote class="admonition-note">
    <strong>Note:</strong> In the event that a game does not come with its dependencies in the folder or you are not sure which they need, Steam actually has a database dedicated to every iteration of every game they have. Being the awesome company they are, they have a dedicated log of all things required through the history of a game's life cycle on their server. This includes everything from prices up to dependencies, updates and DLC. In this instance, we're going to show you where to go on their database to get the info you need.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Steam Database</strong>
<ul>
    <li>Find your game on <a href="https://steamdb.info">SteamDB</a> by searching it by title.</li>
    <li>On the game's page, click the <strong>Depots</strong> section (in the same area as <strong>Prices</strong>, <strong>Packages</strong>, <strong>DLCs</strong>, etc.)</li>
    <li>Look for anything with a <strong>Windows</strong> logo next to it. Anything else is specific to the game and can be ignored.</li>
    <li>In this example, GTA V requires <code>VC 2012 Redist</code> and <code>DirectX Jun 2010 Redist</code>.</li>
    <li>Proceed to the next portion to find out where to get them!</li>
    <li>Proceed to the step after that step to install them!!</li>
</ul>
</td>
</tr>
</table>

![GTA V Dependencies](https://i.imgur.com/adLTbwV.png)

#### Where to get dependencies.


<blockquote class="admonition-note">
    <strong>Note:</strong> Microsoft has everything you need.<br>
    Because Microsoft has been around for ages, and they have been the main OS for many business and personal users for decades, they have to keep quite the extensive catalog of legacy software on their website. This means all dependencies should be available right there on the website itself.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> If it wasn't explicitly clear in the previous note, do not download these from places other than the Microsoft site or Wine/ProtonTricks. While they may not mess your Steam Deck up due to it being Linux, it's just good practice to not download official and freely available things that can harm your system from shady places or people. Repackers issue the same stuff and probably get them from Microsoft themselves. Just save yourself the trouble.
</blockquote>

#### DirectX
- [DirectX 9 (2010)](https://www.microsoft.com/en-us/download/details.aspx?id=8109)
- [DirectX 10/11](https://www.microsoft.com/en-us/download/details.aspx?id=35)

#### VC Runtime Redist
- [VC Redist 2005](https://www.microsoft.com/en-us/download/details.aspx?id=26347)
- [VC Redist 2008](https://www.microsoft.com/en-us/download/details.aspx?id=26368)
- [VC Redist 2010](https://www.microsoft.com/en-us/download/details.aspx?id=26999)
- [VC Redist 2012](https://www.microsoft.com/en-us/download/details.aspx?id=30679)
- [VC Redist 2013](https://support.microsoft.com/en-us/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10) (Choose English)
- [VC Redist - All](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

#### .NET Framework
- [All](https://dotnet.microsoft.com/en-us/download/dotnet-framework)

#### Physx
- [NVIDIA Site](https://www.nvidia.com/en-us/drivers/physx/physx-9-19-0218-driver/)


#### Installing with ProtonTricks

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 1</strong>
<ul>
    <li>Click ok on the first screen with the radio button highlighted create new/default prefix</li>
    <li>Click the radio button that says Uninstall</li>
    <li>A new screen will pop up and on this will be a button that says Install</li>
    <li>Install all the dependencies needed</li>
    <li>Hit Ok at the bottom when you have finished</li>
    <li>Verify they installed by going back to the Uninstall menu and at the bottom is will show all that is installed in the Wine Prefix</li>
</ul>
</td>
</tr>
</table>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>Method 2</strong>
<ol>
    <li><strong>Open Protontricks:</strong> Launch Protontricks from your applications menu.</li>
    <li><strong>Select the Game:</strong> Protontricks will show a list of games installed on your Deck. Select the game for which you need to install dependencies.</li>
    <li><strong>Choose “Select the default wineprefix”</strong> to set up a unique configuration environment for that game.</li>
    <li><strong>Install Specific Dependencies:</strong>
        <ul>
            <li>Here are common dependencies that games may need:
                <ul>
                    <li><strong>DirectX:</strong> <code>d3dx9</code>, <code>d3dx10</code>, <code>d3dx11</code></li>
                    <li><strong>Visual C++ Redistributables:</strong> <code>vcrun2005</code>, <code>vcrun2008</code>, <code>vcrun2010</code>, <code>vcrun2013</code>, <code>vcrun2019</code></li>
                    <li><strong>DotNet Frameworks:</strong> <code>dotnet20</code>, <code>dotnet40</code>, <code>dotnet48</code></li>
                </ul>
            </li>
            <li>In Protontricks, select <strong>Install a Windows DLL or component</strong> and choose the required dependencies from the list.</li>
        </ul>
    </li>
    <li><strong>Verify Installations:</strong>
        <ul><li>Once installed, Protontricks will confirm the installation of each component. Double-check that each required dependency is installed.</li></ul>
    </li>
</ol>
</td>
</tr>
</table>


> [!CAUTION]
> This will likely show errors, that's okay, it's batch installing different types (including incompatible ones), the right ones will still be installed. Click through any installers that may show up.

#### Installing manually (with an installer, still in ProtonTricks)

> [!NOTE]
> This method is useful for when you find a `Redist` folder or similar in the copy you downloaded. Some repackers do this.
> Make sure ProtonTricks has access to your drives and SD card through Flatseal.

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li><strong>Open Protontricks:</strong> Launch Protontricks from your applications menu.</li>
    <li><strong>Select the Game:</strong> Protontricks will show a list of games installed on your Deck. Select the game for which you need to install dependencies.</li>
    <li><strong>Choose “Select the default wineprefix”</strong> to set up a unique configuration environment for that game.</li>
    <li><strong>Choose "Run explorer</strong> and click OK.</li>
    <li><strong>Execute the dependency <code>.exe</code> file</strong> navigate using the folder list on the side, then double click the <code>.exe</code> when you find it.</li>
    <li><strong>Close all ProtonTricks windows</strong></li>
    <li><strong>Test your game</strong></li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> If this didn't fix it, keep reading.
</blockquote>

### Adding DLLs to Proton


<blockquote class="admonition-note">
    <strong>Note:</strong> Windows uses something called Dynamic Link Libraries (DLLs).<br>
    These are used by applications/games to bind functions to each other and work with data inside of the folder they are made in. Linux does not use DLLs so it is sometimes required to point your Wine/Proton prefix to the ones games use. This especially applies when modding a game, as a lot of mods rely on DLLs. We will discuss here how to add them.
</blockquote>

#### Steam Arguments


<blockquote class="admonition-note">
    <strong>Note:</strong> Steam arguments are entered through the game properties in the <code>Launch Options</code> box. These vary by the type of command, here we are going to cover <code>WINEDLLOVERRIDES</code>.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>In <strong>Game Mode/Desktop Mode</strong>, select your game.</li>
    <li>Click the <strong>Settings</strong> (gear) icon.</li>
    <li>Click <strong>Properties</strong>.</li>
    <li>The <strong>Shortcut</strong> tab should open automatically.</li>
    <li>Let's say we're trying to point to <code>dinput8.dll</code>, in order to do this type <code>WINEDLLOVERRIDES="dinput8.dll=n,b" %command%</code> in the <strong>Launch Options</strong> box.</li>
    <li>Do this same thing for any other DLL needed by replacing <code>dinput8.dll</code> in the command from <em>Step 5</em>. If adding multiple in one command, you can separate them with commas, making sure they fit within the first quotation mark and the equal sign. (Example: <code>WINEDLLOVERRIDES="dinput8.dll,d3d9.dll=n,b"</code>)</li>
</ol>
</td>
</tr>
</table>

*from [r/SteamDeckTricks](https://www.reddit.com/r/SteamDeckTricks/comments/xnmm32/game_modding_guide/)*


<blockquote class="admonition-warning">
    <strong>Warning:</strong> These can also be added in Lutris by right-clicking your game, selecting <b>Configure</b>&gt;<b>Runner options</b> and adding them in the DLL overrides section. Under <b>Key</b> you'll type (in this example) <code>dinput8.dll</code> and under <b>Value</b> enter <code>n,b</code>.
</blockquote>

#### ProtonTricks


<blockquote class="admonition-note">
    <strong>Note:</strong> This method uses ProtonTricks interface to add DLL files to the prefix. This is my preferred method as I can see what is being entered, and not have to worry about typing things properly.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Open <strong>ProtonTricks</strong>.</li>
    <li>Select your game in the list. Click <strong>OK</strong>.</li>
    <li>Select <strong>default wine prefix</strong>, click <strong>OK</strong>.</li>
    <li>Select <strong>Run winecfg</strong>, click <strong>OK</strong>.</li>
    <li>In the <strong>Wine Configuration</strong> window, select the <strong>Libraries</strong> tab.</li>
    <li>Type <code>dinput8</code> and click <strong>Add</strong> or hit <em>Enter</em> on your keyboard.</li>
    <li>Scroll to the bottom of the list to make sure it is in the list.</li>
    <li>Click <strong>OK</strong>, and exit out of all ProtonTricks windows.</li>
    <li>Run your game and see if the intended outcome was achieved.</li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-note">
    <strong>Note:</strong> You do not need to include the <code>.dll</code> at the end.<br>
    All items listed in here will run within the prefix.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> If any of them give you a pop-up or an error, do not add these.
</blockquote>

---

## Guides for emulators and roms


<blockquote class="admonition-note">
    <strong>Note:</strong> The Deck is an amazing emulator machine.<br>
    The sweet spot for performance is mostly in the Xbox/PS2 era, with the Switch being an exception for current gen. Anything before that should run flawlessly (on a per game basis). Do not expect to be emulating Xbox 360 (possible for some games) and definitely don't even for a second <em>think about</em> running PS4/Xbox One or later. There is a lot of info out there regarding emulation on the deck. We are going to gather the most frequently asked questions here. Here's a good <a href="https://www.reddit.com/r/SteamDeck/comments/1ea1675/emudeck_vs_retrodeck/">conversation</a> on the differences between the two.<br>
    <br>
    Regardless of which one you use, the outcome will be the same.
</blockquote>

### Emudeck
EmuDeck is a collection of scripts that allows you to autoconfigure your Steam Deck, it creates your roms directory structure and downloads all of the needed Emulators for you along with the best configurations for each of them. EmuDeck works great with [Steam Rom Manager](https://github.com/SteamGridDB/steam-rom-manager) or with [EmulationStation DE](https://es-de.org).


#### Installing EmuDeck

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
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
</td>
</tr>
</table>


*from [Emudeck wiki](https://emudeck.github.io/)*

### RetroDeck
RetroDECK is a [ES-DE Frontend](https://es-de.org/) powered Flatpak all-in-one game application that is still in development. Thanks to its RetroDECK Framework it builds-in a variety of software (that runs your games) like emulators and game engines in one package that is pre-configured.

#### Installing RetroDeck
<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Put the Steam Deck into <strong>Desktop Mode</strong></li>
    <li>Install <strong>RetroDECK</strong> from <strong>Discover</strong></li>
    <li>Start RetroDECK first time in <strong>Desktop Mode</strong></li>
    <li>Choose where RetroDECK should create the roms folders <strong>Internal</strong> or <strong>SDCard</strong>.</li>
    <li>Put the <strong>BIOS files</strong> inside <code>~/retrodeck/bios/</code>.</li>
    <li>Put the <strong>ROMS</strong> inside <code>~/retrodeck/roms/ or &lt;sdcard&gt;/retrodeck/roms/</code> or a custom location.</li>
    <li>Choose to install <strong>Steam Controller Layouts</strong> for RetroDECK, it should be checked from the start.</li>
    <li>In Steam desktop go to the tab <strong>Games</strong> press <code>Add non-Steam game to My library</code> and select <strong>RetroDECK</strong> to add it into your library. If that is not working, you can <em>right-click</em> on the RetroDECK desktop icon and press <code>Add to Steam</code> in the menu.</li>
    <li>Switch over to <strong>Game Mode</strong> and go to <strong>RetroDECK</strong> on the Steam Grid under <strong>Library > Non-Steam</strong></li>
    <li>Add any of the the Official Layouts under <strong>Controller Settings > Controller Layouts > Templates</strong> in the Steam Deck called <code>RetroDECK: Steam Deck - Neptune SIMPLE or FULL</code> with a version number. Apply the layout.</li>
    <li>Launch <strong>RetroDECK</strong> and enjoy.</li>
</ol>
</td>
</tr>
</table>

*from [RetroDeck wiki](https://retrodeck.readthedocs.io/en/latest/wiki_devices/steamdeck/steamdeck-start/)*

### Individual emulators
Individual emulators can be installed as well. A lot of them are already on the **Discover Store**. While this is a perfectly viable method of setting up your emulation zone, we will not really be covering it here. The reason for this is that we want you to have the most straightforward and easy setup you can get. Also, quite frankly, if a lot of people follow the guides posted above and use the already-developed frontends we suggest, we get less questions and have an easier time supporting people. Should you choose to do things this way, you will manually have to set every emulator up, tweak them all to look right, organize the folder structure, and download so much extra stuff. By the time you're halfway done, you'll wonder why you didn't do RetroDeck/EmuDeck in the beginning.

### Switch Emulation

#### Recommended Emulators


<blockquote class="admonition-note">
    <strong>Note:</strong> As of 2024, the two main Switch emulators were taken down by the most ruthlessly litigious playing card game companies of all time. Taken down does not mean gone, though. Nothing is ever fully erased from the internet. <b>EVER</b>. With that being said, we are not going to risk having this guide taken down by linking but as of now the best and most reliable iterations are to find mirrors of <b>Yuzu</b> or <b>Ryujinx</b>. Those will have been last updated before the shutdowns. As of the time this guide was written that should not affect any of the current games that are out (at least the important ones). There is a fork of <b>Ryujinx</b> that is being maintained by <em>GreemDev</em>. The <b>Yuzu</b> forks are <b>Sudachi</b> or <b>Suyu</b>.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> All Switch emulators require prod.keys and firmware.<br>
    We will not tell you where to find those.
</blockquote>

#### Switch Emulator Performance
Some games will run perfectly fine on the Deck. Some will have occasional frame dips. Some will have bad audio. Some just won't work at all. This is the nature of emulation. The more popular games will have patches available for them. Someone has amazingly made a [compatibility list](https://docs.google.com/spreadsheets/d/1AhKo6rjQHXLuZEHPozA-F-YPejLPBrj0jbPNUyNDx78/edit?gid=77197668#gid=77197668).

### BIOS, ROMs, and other files
Some emulators will require BIOS files to operate. These are usually found in a multitude of places. This [reddit post](https://www.reddit.com/user/EmulationStranger/comments/11j09qc/idiots_guide_to_emudeck_where_to_find_bios_and/) should have you on the way to finding the right BIOS and ROMs for each emulator. Specifically the ROM Megathread. Again we will not link here for safety reasons.

### PC Ports
Some of the games you want to emulate may have PC ports. Always check to see what came out for PC and if it ran better that way. For example, Scarface has way better QoL mods and patches that make it a much better experience on the deck. The real benefit of these is that you can modify the games to run better, and also there is more documentation and development for them as the files are more accessible to those modding. The biggest benefit of emulation is in most cases. you will save battery. PC ports usually have FPS mods, widescreen fixes, and a slew of other enhancements that make it a better experience overall. There are even PC ports for old N64 games like Mario 64, Perfect Dark, and so on. We highly recommend looking into these options. When you do find a PC port, be sure to go to [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) to see what all should be added to the games to make them perform at their best.

---

## Cracks/DLC/Updates

<blockquote class="admonition-note">
    <strong>Note:</strong> Since a lot of cracks and updates are made for PC, it is often recommended to do whatever patching of files is required on your PC, then to transfer the fully patched game over to your Deck. This certainly applies in situations with CreamAPI, Goldberg Steam Emulator, and any cracked game updates. If you don't have the means to do that, or you like to do things in hard mode, then here is how you'd do that.<br>
    <br>
    This is not a blanket guide for all situations. This is just for the most common situations. Further tweaking may be needed depending on the game, the patch, or a plethora of other reasons.<br>
    Make sure ProtonTricks has access to your drives and SD card through Flatseal.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li><strong>Open Protontricks:</strong> Launch Protontricks from your applications menu.</li>
    <li><strong>Select the Game:</strong> Protontricks will show a list of games installed on your Deck. Select the game you intend to modify.</li>
    <li><strong>Choose “Select the default wineprefix”</strong> to set up a unique configuration environment for that game.</li>
    <li><strong>Choose "Run explorer"</strong> and click OK.</li>
    <li><strong>Execute the patch/modloader/ <code>.exe</code> file</strong> navigate using the folder list on the side, then double click the <code>.exe</code> when you find it.</li>
    <li><strong>Close all ProtonTricks windows</strong></li>
    <li><strong>Test your game</strong></li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-note">
    <strong>Note:</strong> Most modloaders really just modify and apply new files within the game folder. This can be done manually in most cases.<br>
    Don't forget to add DLLs through one of the methods listed in the DLLs part of this guide.
</blockquote>


<blockquote class="admonition-caution">
    <strong>Caution:</strong> If you still have trouble and you don't own a PC, this may be the only time we recommend installing Windows on an SD card and doing the file operations there. There are not many situations where it can't be done all through the Deck.
</blockquote>

---


## Common questions/Things you will encounter

### Uninstalling a Non-Steam Game

To uninstall a game that was added as a non-Steam shortcut:

1. Open Steam in Desktop Mode.
2. Go to your Library and find the non-Steam game you want to remove.
3. Right-click the game and select <strong>Manage</strong> &gt; <strong>Remove non-Steam game from Library</strong>.
4. <strong>Important:</strong> This only removes the shortcut from Steam. If you want to delete the actual game files, you must manually delete the game folder from your storage.


<blockquote class="admonition-warning">
    <strong>Warning:</strong> Uninstalling a non-Steam game or deleting its folder can also delete the entire prefix, including your game saves and configuration files.<br>
    <b>Before removing anything, <a href="#backing-up-save-files">back up your save files</a> and any important data.</b><br>
    If you delete the prefix, all data inside (including saves) will be lost and cannot be recovered.
</blockquote>

### Compressed files (.rar, .zip, .7z, etc.)


<blockquote class="admonition-note">
    <strong>Note:</strong> A lot of games come in what are called <em>compressed</em> formats. These are used when a folder or file is too large and you want to shrink them down. Repackers and download sites do this so they can be downloaded faster. Sometimes they come with the file extensions listed above in parentheses, or they may come in something like <code>.001, .002</code> or <code>7z01, .7z02,</code>, etc. These can be handled using <b>PeaZip</b>
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Install <strong>PeaZip</strong> from the <strong>Discover Store</strong></li>
    <li>Open <strong>PeaZip</strong></li>
    <li>Click <em>File</em> then click <em>Open</em></li>
    <li>Find and open your compresed files. If there are multiple select all or select the one that ends in <code>.7z</code> <code>.zip</code> or <code>.rar</code>.</li>
    <li>Click <em>Extract</em></li>
    <li>Extract them to the same folder or another easy to find folder.</li>
    <li>This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.</li>
</ol>
</td>
</tr>
</table>


<blockquote class="admonition-note">
    <strong>Note:</strong> This will result in double the size of your download or more taking up space on your drive.<br>
    If there were no errors in the extraction or the installation, you can delete the compressed files. If it was an installer, you may have triple the space taken up, once you are sure the game runs, delete the compressed files and the installer. Be sure to Empty your trash if you use that method.
</blockquote>

### ISO Files


<blockquote class="admonition-note">
    <strong>Note:</strong> Some games (even after you extract them) will be in <em>ISO</em> format.<br>
    These are digital disc images. In Windows, opening this would be the same thing as inserting a disc for your game to install from, except it's all digital. These will have a <code>.iso</code> extension, and will usually be rather large in size.<br>
    <br>
    In some cases, this functionality may be built into Dolphin's context menu by <code>right-clicking&gt;hovering over Mount/unmount iso image&gt;clicking Mount</code>. If that option is not present read below.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ol>
    <li>Install <strong>PeaZip</strong>/<strong>PowerISO</strong> from the <strong>Discover Store</strong></li>
    <li>Open <strong>PeaZip</strong>/<strong>PowerISO</strong></li>
    <li>Click <em>File</em> then click <em>Open</em> (PeaZip will be <em>Open archive</em>).</li>
    <li>Find and open your <code>.iso</code>.</li>
    <li>Click <em>Extract</em></li>
    <li>Extract it to the same folder or another easy to find folder.</li>
    <li>This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.</li>
</ol>
</td>
</tr>
</table>

### Install Locations

<blockquote class="admonition-note">
    <strong>Note:</strong> When installing games on PC, common practice is for it to install to the <code>C:</code> drive.<br>
    This is put in place because the <code>C:</code> drive is usually the main drive that Windows lives and operates through. Since we are emulating the PC, the <code>C:</code> drive isn't really a drive at all. It's a folder inside of a prefix usually named <code>drive_c</code>. The nature of prefix is to emulate a Windows environment with the bare minimum. So when you work within this environment, it is limited. It is always recommended to install in a folder outside of the prefix that you can get a hold of easily.<br>
    <br>
    The drive letters are named arbitrarily on a per-game installer basis.<br>
    Sometimes your memory card or hard drive may be under <code>D:</code> or <code>F:</code>. <code>Z:</code> seems to, more often than not, point to the root of SteamOS. This means you can always find both your connected drive and your main folder under <code>Z:\run\media\</code><br>
    <br>
    Your SD card will usually be named <code>mmcblk0p1</code>.
</blockquote>

### Can't see external HDD/SD Card/`home` Folder
- [X] Can't download/extract to to a certain folder.
- [X] Install location only showing 7 gigabytes when there are hundreds of gigabytes free
- [X] Lutris (or another app) can't see my folders

#### Flatseal


<blockquote class="admonition-note">
    <strong>Note:</strong> Most of the apps you are using will be installed in a package format named <b>Flatpak</b>. <b>Lutris</b> and <b>ProtonTricks</b> especially. These apps can be controlled by an app called <b>FlatSeal</b>. Here we will show you how to enable permissions for an app to see your other devices.
</blockquote>


<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ul>
    <li>Install <strong>FlatSeal</strong> from the <strong>Discover Store</strong></li>
    <li>Open <strong>FlatSeal</strong></li>
    <li>On the left, select the app in question, in this example we'll use <strong>Lutris</strong></li>
    <li>Scroll down to <strong>Filesystem</strong>
        <ul>
            <li>Turn on the switch for <code>All user files</code> to permit access to your internal SSD files.</li>
            <li>To see external devices
                <ul>
                    <li>In the <strong>Discover</strong> app, navigate to your external device.</li>
                    <li>When the window is showing the root of the device, click the bar that says the title of the device (to the left of the <strong>Split</strong> button), this will reveal the path to your device</li>
                    <li>Highlight the entire path, and <strong>Copy</strong> it.</li>
                    <li>Click the <em>New Folder</em> icon next to <code>Other files</code></li>
                    <li>Paste the path into the new <em>text box</em>.</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Close whatever app was having trouble seeing your folders and open it and try again</li>
</ul>
</td>
</tr>
</table>



<blockquote class="admonition-note">
    <strong>Note:</strong> This should work for any folder you want your app to see, and any app that is a flatpak.
</blockquote>

### Can't find save files (moving between installs)


<blockquote class="admonition-note">
    <strong>Note:</strong> There is also a cool app that is recommended called <a href="https://github.com/Jannomag/shortix"><b>Shortix</b></a>.<br>
    Shortix creates user readable symlinks for Proton game prefixes. Once it is installed, you will have a folder created that provides shortcuts to your proton folders. All of the info is in that link and should kind of make things a little easier in the process of finding your mods, game saves, etc. If you'd like a manual method to find the folders, I have written a guide below.
</blockquote>

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<ul>
    <li>Use the website <a href="https://www.pcgamingwiki.com/wiki/Home">PCGamingWiki</a> to find the save path location. <br><strong>Tip:</strong> On PCGamingWiki, you are looking for the <em>Windows</em> save path, because Proton creates a Windows-like environment inside its prefix.</li>
    <li>Use <strong>ProtonTricks</strong> to help identify the correct <code>compatdata</code> folder for your game. This will show you which prefix is being used.</li>
    <li>Refer to our <a href="#finding-non-steam-game-proton-folder">Finding Non-Steam Game Proton Folder</a> section for more details.</li>
    <li>Use the path from PCGamingWiki to navigate within <code>drive_c</code> in your game's prefix and find your save file.</li>
    <li>To back up your saves, see the <a href="#backing-up-save-files">Backing Up Save Files</a> section below.</li>
</ul>
</td>
</tr>
</table>


<blockquote class="admonition-note">
    <strong>Note:</strong> If there is no save file, check the <b>Install Locations</b> section above.
</blockquote>

### Backing Up Save Files {#backing-up-save-files}

There are two main ways to back up your save files:

#### 1. Manual Copy & Paste

1. Find your save file using the steps above.
2. Copy the save file or folder to a safe location (external drive, cloud storage, etc.).
3. To restore, copy it back to the same location in the correct prefix.

#### 2. Using Ludusavi

**[Ludusavi](https://github.com/mtkennerly/ludusavi)** is an open-source tool that automatically backs up and restores save data for hundreds of games, including Steam, GOG, and emulators.

**How to use Ludusavi:**
1. Download and install Ludusavi from the [official GitHub page](https://github.com/mtkennerly/ludusavi).
2. Run Ludusavi and select the games/platforms you want to back up.
3. Choose your backup location (local folder, cloud, etc.).
4. Click “Backup” to save your files. Use “Restore” to put them back later.


<blockquote class="admonition-tip">
    <strong>Tip:</strong> Ludusavi is great for regular backups and for moving saves between different systems or installs.
</blockquote>

#### 3. Using EmuSync (emulator saves)

**[EmuSync](https://github.com/emu-sync/EmuSync)** is a tool that helps you automatically back up and sync your emulator save files, save states, and configuration files across devices or to cloud storage. It supports a wide range of emulators and platforms, making it easy to keep your progress safe and portable.

**How to use EmuSync:**
1. Visit the [EmuSync GitHub page](https://github.com/emu-sync/EmuSync) and download the latest release for your platform (Linux, Windows, etc.).
2. Extract the archive and follow the installation instructions in the README.
3. Configure EmuSync:
    - Run the EmuSync executable or script.
    - Add your emulator save folders and choose your sync/backup destination (local folder, cloud, etc.).
    - You can set up profiles for different emulators or systems.
4. Sync or back up:
    - Use the EmuSync interface or command to start syncing or backing up your files.
    - You can automate this process or run it manually as needed.

> [!TIP]
> EmuSync is especially useful if you play on multiple devices or want an easy way to back up all your emulator saves at once. See the [official EmuSync documentation](https://github.com/emu-sync/EmuSync) for advanced options and troubleshooting.

> [!NOTE]
> There is also a cool app called **[Shortix](https://github.com/Jannomag/shortix)**. Shortix creates user-readable symlinks for Proton game prefixes, making it much easier to find your mods, game saves, etc. Once installed, you'll have a folder with shortcuts to your Proton folders. All info is in the link. This is optional, but can make the process easier.

> [!NOTE]
> If there is no save file, check the **Install Locations** section above.

### Controller not working

> [!WARNING]
> Some games will load perfectly but won't have controller input. Prime examples are the new Spider Man games and Ghost of Tsushima. There are a few ways to solve this. Covered below:

#### Steam Input
In most cases you can disable Steam Input in the Game Menu and that alone should solve the issue.

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>In Desktop Mode:</strong>
<ul>
    <li>Select your game in Steam</li>
    <li>Click on the gear icon to the right of the <strong>Play</strong> button</li>
    <li>Click <strong>Properties</strong></li>
    <li>Select the <strong>Controller</strong> tab</li>
    <li>Next to <code>Override for [Game Name]</code> click the dropdown</li>
    <li>Select <code>Disable Steam Input</code></li>
</ul>
</td>
</tr>
</table>

#### Finding Community Layouts
There are also **Community Layouts**. These are layouts made by (you guessed it) the community on steam. These are searched through steam based on what they are named in the Steam Interface. Sometimes this yields results, but often for me it hasn't.

A couple of people have reported being able to pinpoint the search by changing the shortcut name to the Steam URL listing number:

<table>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">
<strong>In Desktop mode:</strong>
<ul>
    <li>Open <a href="https://steamdb.info">SteamDB</a></li>
    <li>Search for your game and click on it's listing.</li>
    <li>The number you're looking for will be either in the url after <code>/app/</code> or next to <strong>App ID</strong> in on the actual page.</li>
    <li>Copy the number (no special characters).</li>
    <li>Go to your game listing in the Steam app.</li>
    <li>Click the gear to the right of the <strong>Play</strong> button.</li>
    <li>Click <strong>Properties</strong>.</li>
    <li>Change the title to the number you copied</li>
    <li>Close the settings</li>
    <li>Click on the Controller Icon next to the Gear Icon, click on the Layout Selector (above <strong>View Layout</strong> and <strong>Edit Layout</strong>)</li>

</ul>
</td>
</tr>
</table>


### Game opens steam

Either your crack isn't applied properly or you need to change the number in `steamapp_id.txt` to `1` in the game folder.


### No licenses

If this shows it means your crack isn't working. Make sure you copied the files over properly, and that you have pointed to all of the relevant DLLs and dependencies.


### Games suddenly won't open or close

<table>
<tr>
<td bgcolor="#E3F2FD" width="100%" style="padding:15px; border-radius:5px;">

More often than not, this is related to a plugin running in Decky. To verify this:

<ul>
    <li>Disable Decky and test your game</li>
    <li>Uninstall your plugins one by one, and see what changes it.</li>
    <li>Uninstall them all, and add them back one by one until you see the error happen again.</li>
</ul>

</td>
</tr>
</table>


### Game tries to load and immediately stops



#### Is Proton Enabled?

<blockquote class="admonition-note">
    <strong>Note:</strong><br>
    In some instances Steam may silently disable your forced Proton version for a non‑Steam shortcut.<br>
    Before doing anything else: open the shortcut's Properties and re‑enable a Proton version (start with Proton Experimental).
</blockquote>



#### Are there quotes around the target path?

<blockquote class="admonition-note">
    <strong>Note:</strong><br>
    Paths containing spaces must be wrapped in quotes in Launch Options / Target field.<br>
    Example (GOOD): <code>"/home/deck/Games/Tomb Raider/game.exe"</code><br>
    Example (BAD): <code>/home/deck/Games/Tomb Raider/game.exe</code>
</blockquote>



#### Are dependencies installed?

<blockquote class="admonition-caution">
    <strong>Caution:</strong><br>
    Missing DirectX / VC++ / .NET components will cause silent exits. See the <a href="#installing-dependencies">Installing Dependencies</a> section above and install what your game needs.
</blockquote>



### Mods won't load

<blockquote class="admonition-warning">
    <strong>Warning:</strong><br>
    Possible causes:
    <ul>
        <li>Required DLL overrides not applied (see <a href="#adding-dlls-to-proton">Adding DLLs to Proton</a>).</li>
        <li>Using a Windows-only mod manager when a native / alternative method exists.</li>
        <li>Mod loader files placed in wrong prefix path.</li>
        <li>Incompatible Proton version (test Proton-GE or older Proton).</li>
        <li>Incorrect case-sensitive filenames on Linux.</li>
    </ul>
</blockquote>


---

## Other subreddits/groups

#### Piracy Related

- [Linux Crack Tips](https://www.reddit.com/r/LinuxCrackSupport/)
- [Piracy](https://www.reddit.com/r/Piracy)
- [FreeMediaHeckYeah](https://www.reddit.com/r/FREEMEDIAHECKYEAH)

---

## Useful Links

- [ProtonDB](https://protondb.com/)
- [SteamDB](https://steamdb.info/)
- [SteamDeckHQ](https://steamdeckhq.com/)
- [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home)
