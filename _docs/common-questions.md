---
title: Common Questions
id: common-questions
nav_order: 7
---# Common questions/Things you will encounter

Use the quick links below to jump to a topic:

- [Compressed Files](#compressed-files)
- [ISO Files](#iso-files)
- [Install Locations](#install-locations)
- [Can't see external HDD/SD Card/home Folder](#cant-see-external-hddsd-cardhome-folder)
- [Can't find save files](#cant-find-save-files)
- [How do I move/backup my save files?](#how-do-i-movebackup-my-save-files)
- [Controller not working](#controller-not-working)
- [Game opens steam](#game-opens-steam)
- [No licenses](#no-licenses)
- [Games suddenly won't open or close](#games-suddenly-wont-open-or-close)
- [Game tries to load and immediately stops](#game-tries-to-load-and-immediately-stops)
- [Mods won't load](#mods-wont-load)

---
## Compressed Files {#compressed-files}

> [!NOTE]
> A lot of games come in what are called *compressed* formats. These are used when a folder or file is too large and you want to shrink them down. Repackers and download sites do this so they can be downloaded faster. Sometimes they come with the file extensions listed above in parentheses, or they may come in something like `.001, .002` or `7z01, .7z02,`, etc. These can be handled using **PeaZip**

<div class="panel panel--soft">
<strong>Compressed files (.rar, .zip, .7z, etc.)</strong>
<ol>
    <li>Install&nbsp;<strong>PeaZip</strong> from the Discover Store</li>
    <li>Open&nbsp;<strong>PeaZip</strong></li>
    <li>Click <em>File</em> then click <em>Open</em></li>
    <li>Find and open your compresed files. If there are multiple select all or select the one that ends in <code>.7z</code> <code>.zip</code> or <code>.rar</code>.</li>
    <li>Click <em>Extract</em></li>
    <li>Extract them to the same folder or another easy to find folder.</li>
    <li>This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.</li>
</ol>
</div>

> [!NOTE]
> This will result in double the size of your download or more taking up space on your drive.
> If there were no errors in the extraction or the installation, you can delete the compressed files. If it was an installer, you may have triple the space taken up, once you are sure the game runs, delete the compressed files and the installer. Be sure to Empty your trash if you use that method.

---
## ISO Files {#iso-files}

> [!NOTE]
> Some games (even after you extract them) will be in *ISO* format.
> These are digital disc images. In Windows, opening this would be the same thing as inserting a disc for your game to install from, except it's all digital. These will have a `.iso` extension, and will usually be rather large in size.
>
> In some cases, this functionality may be built into Dolphin's contect menu by `right-clicking>hovering over Mount/unmount iso image>clicking Mount`. If that option is not present read below.

<div class="panel panel--soft">
<strong>ISO Files</strong>
<ol>
    <li>Install&nbsp;<strong>PeaZip</strong> or&nbsp;<strong>PowerISO</strong> from the Discover Store</li>
    <li>Open&nbsp;<strong>PeaZip</strong> or&nbsp;<strong>PowerISO</strong></li>
    <li>Click <em>File</em> then click <em>Open</em> (PeaZip will be <em>Open archive</em>).</li>
    <li>Find and open your <code>.iso</code>.</li>
    <li>Click <em>Extract</em></li>
    <li>Extract it to the same folder or another easy to find folder.</li>
    <li>This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.</li>
</ol>
</div>

---
## Install Locations {#install-locations}

> [!NOTE]
> When installing games on PC, common practice is for it to install to the `C:` drive.
> This is put in place because the `C:` drive is usually the main drive that Windows lives and operates through. Since we are emulating the PC, the `C:` drive isn't really a drive at all. It's a folder inside of a prefix usually named `drive_c`. The nature of prefix is to emulate a Windows environment with the bare minimum. So when you work within this environment, it is limited. It is always recommended to install in a folder outside of the prefix that you can get a hold of easily.
>
> The drive letters are named arbitrarily on a per-game installer basis.
> Sometimes your memory card or hard drive may be under `D:` or `F:`. `Z:` seems to, more often than not, point to the root of SteamOS. This means you can always find both your connected drive and your main folder under `Z:\run\media\`
>
> Your SD card will usually be named `mmcblk0p1`.

---
## Can't see external HDD/SD Card/home Folder {#cant-see-external-hddsd-cardhome-folder}
- [X] Can't download/extract to to a certain folder.
- [X] Install location only showing 7 gigabytes when there are hundreds of gigabytes free
- [X] Lutris (or another app) can't see my folders

#### Flatseal

> [!NOTE]
> Most of the apps you are using will be installed in a package format named **Flatpak**. **Lutris** and **ProtonTricks** especially. These apps can be controlled by an app called **FlatSeal**. Here we will show you how to enable permissions for an app to see your other devices.

<div class="panel panel--soft">
<strong>Flatseal permissions</strong>
<ul>
    <li>Install&nbsp;<strong>FlatSeal</strong> from the <strong>Discover Store</strong></li>
    <li>Open&nbsp;<strong>FlatSeal</strong></li>
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
</div>

> [!NOTE]
> This should work for any folder you want your app to see, and any app that is a flatpak.

---
## Can't find save files {#cant-find-save-files}

> [!NOTE]
> There is also a cool app that is recommended called **[Shortix](https://github.com/Jannomag/shortix)**.
> Shortix creates user readable symlinks for Proton game prefixes. Once it is installed, you will have a folder created that provides shortcuts to your proton folders. All of the info is in that link and should kind of make things a little easier in the process of finding your mods, game saves, etc. If you'd like a manual method to find the folders, I have written a guide below.

<div class="panel panel--soft">
<strong>Finding save files</strong>
<ul>
    <li>Use the website <a href="https://www.pcgamingwiki.com/wiki/Home">PCGamingWiki</a> to find the save path location.</li>
    <li>Refer to our <a href="/steam-deck-pirates/docs/finding-proton-folder">Finding Non-Steam Game Proton Folder</a> section.</li>
    <li>Use the path on the website to navigate within <code>drive_c</code> and find your save file.</li>
</ul>
</div>

> [!NOTE]
> If there is no save file, check the **Install Locations** section above.

---
## How do I move/backup my save files? {#how-do-i-movebackup-my-save-files}

> [!NOTE]
> Enter [ludasavi](https://github.com/mtkennerly/ludusavi).
> This app works to backup your saves and apply them to other installations/devices. All info can be found on the linked github. If this doesn't work for you, use the guide in the section right above this to figure out where they are then move them manually.

---
## Controller not working {#controller-not-working}

> [!WARNING]
> Some games will load perfectly but won't have controller input. Prime examples are the new Spider Man games and Ghost of Tsushima. There are a few ways to solve this. Covered below:

#### Steam Input
In most cases you can disable Steam Input in the Game Menu and that alone should solve the issue.

<div class="panel panel--soft">
<strong>In Desktop Mode:</strong>
<ul>
    <li>Select your game in Steam</li>
    <li>Click on the gear icon to the right of the <strong>Play</strong> button</li>
    <li>Click <strong>Properties</strong></li>
    <li>Select the <strong>Controller</strong> tab</li>
    <li>Next to <code>Override for [Game Name]</code> click the dropdown</li>
    <li>Select <code>Disable Steam Input</code></li>
</ul>
</div>

#### Finding Community Layouts
There are also **Community Layouts**. These are layouts made by (you guessed it) the community on steam. These are searched through steam based on what they are named in the Steam Interface. Sometimes this yields results, but often for me it hasn't.

A couple of people have reported being able to pinpoint the search by changing the shortcut name to the Steam URL listing number:

<div class="panel panel--soft">
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
</div>

---
## Game opens steam {#game-opens-steam}
Either your crack isnt applied properly or you need to change the number in `steamapp_id.txt` to `1` in the game folder.

---
## No licenses {#no-licenses}
If this shows it means your crack isn't working. Make sure you copied the files over properly, and that you have pointed to all of the relevent DLLs and dependencies.

---
## Games suddenly won't open or close {#games-suddenly-wont-open-or-close}

<div class="panel panel--soft">
<p>More often than not, this is related to a plugin running in Decky. To verify this:</p>
<ul>
    <li>Disable Decky and test your game</li>
    <li>Uninstall your plugins one by one, and see what changes it.</li>
    <li>Uninstall them all, and add them back one by one until you see the error happen again.</li>
</ul>
</div>

---
## Game tries to load and immediately stops {#game-tries-to-load-and-immediately-stops}

#### Is Proton Enabled?
> [!NOTE]
> In some instances, for some reason, Steam has turned off Proton in a non-steam game (not sure if widespread, but has happened to me)
> Always (before troubleshooting anything else) make sure you have a **Proton** version of some sort enabled.

#### Are there quotes around the target path?
> [!NOTE]
> Linux has trouble understanding file paths with spaces in them. It sees them as separate commands rather than folders.
> For example: `/home/deck/Games/Tomb Raider` would not work properly. So in the **Target Path** in your game's settings has quotes around it. This will make Linux treat it as one path by contatining it in quotes and specifying every character (including spaces). You need to type it as `"/home/deck/Games/Tomb Raider"`

#### Are dependencies installed?
> [!CAUTION]
> If you are here, then that means you haven't been <a href="/steam-deck-pirates/docs/installing-dependencies">here</a>.

---
## Mods won't load {#mods-wont-load}

> [!WARNING]
> If your mods won't load, it could be a few things:
> * A lot of times, mods use/alter/interact with DLL files. Try adding them to the prefix per this [section](/steam-deck-pirates/docs/adding-dlls).
> * In some instances, there is a Linux version of the mod application you're trying to use, be sure to check into the source of the mod loader.
> * Check this [guide](https://www.reddit.com/r/SteamDeckTricks/comments/xnmm32/game_modding_guide/) from [r/SteamDeckTricks](https://www.reddit.com/r/SteamDeckTricks/).
