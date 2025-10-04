---
title: Home
layout: default
permalink: /
---
<!-- This homepage mirrors the repository README. Edit README.md to change site content. -->
{% include_relative README.md %}
    <li>Set Port to <code>22</code> and Connection Type to <code>SSH</code>.</li>
    <li>Click <strong>Open</strong> and enter your password when prompted.</li>
    <li>You now have terminal access to your Steam Deck.</li>
</ol>
</td>
</tr>
</table>

---

#### Adding Your Deck Storage as a Drive on Your PC or Mac

> [!NOTE]
> If you want to take this a step further and make it REALLY streamlined, add it to your device as a network drive. This will make it an accessible folder in Finder/Explorer. Just drag and drop and call it a day.

> **Guide: Add Steam Deck Storage as a Network Drive**
> 1. Ensure SSH is enabled and running on your Steam Deck (see SSH setup above).
> 2. Find your Steam Deck's IP address (Settings > Internet).
> 3. **Windows:**
>     * Open **File Explorer**.
>     * Right-click **This PC** &rarr; **Add a network location**.
>     * Choose **Choose a custom network location** &rarr; **Next**.
>     * Enter: `sftp://deck@<SteamDeck_IP>:/home/deck`
>     * Enter your Deck password when prompted.
>     * Your Deck's home folder will appear as a network drive in File Explorer.
> 4. **Mac:**
>     * Open **Finder**.
>     * Click **Go** &rarr; **Connect to Server...**.
>     * Enter: `sftp://deck@<SteamDeck_IP>/home/deck`
>     * Click **Connect** and enter your password.
>     * Your Deck's home folder will mount as a network drive in Finder.
> 5. **Linux:**
>     * Open your file manager (e.g., Nautilus, Dolphin, Thunar).
>     * Look for a **Connect to Server** or **Network** option.
>     * Enter: `sftp://deck@<SteamDeck_IP>/home/deck`
>     * Enter your Deck password when prompted.
>     * Your Deck's home folder will appear as a network location in your file manager.
> 6. For SD card access, navigate to `/run/media/mmcblk0p1` after connecting.
> 7. You can now drag and drop files between your PC/Mac/Linux and Steam Deck as if it were a local folder.
> 8. If you have trouble, use a graphical SFTP client like **WinSCP**, **Cyberduck**, or **FileZilla** with the same connection details.

#### Windows (10/11)

#### Warpinator (Still Network, Needs an App)

> [!NOTE]
> Warpinator is an app available for Windows, and Linux that makes a direct tunnel between your two devices. This is by far the highest speed option outside of SSH. This method requires the application to be running on your Steam Deck and your other device at the same time.

#### On Your Deck
> 1. Install **Warpinator** from the **Discover Store**.
> 2. Open **Preferences** and click **Connection** then set a unique PIN.
> 3. In the **General** tab, make sure you point the download folder to a place you can find. I chose my **Games** folder.
>     * If you don't have access to a certain location (like your SD card), use flatseal to give Warpinator Permissions.

#### On Your PC
> 1. Download (unofficial) Warpinator from this [github](https://warpinator.com/warpinator-download/). Install it.
> 2. Click **Options > Settings**.
> 3. Put the same PIN from your Deck in the **Group code** box.
> 4. Also make sure your **Receive into folder** is somewhere you can find it.
> 5. Click **Apply**, then click **OK**.

#### Transferring Files
> 1. Your Deck should show in the **Available Devices** area. If not, make sure you followed the steps above. Click on it to open its transfer window.
> 2. On Windows you can click the `+` button to add a folder, or the `Browse` button to add a singular file. You can also drag and drop multiple folders/into the window.
> 3. Accept the transfer on the deck.
> 4. Watch the files fly across your network onto your Deck.

> [!NOTE]
> The instructions for Deck>PC should be the same.
> You can go into settings and click **Automatically accept incoming transfers** if you don't want to accept every time.

> [!CAUTION]
> If you can't find your device, go into connection settings and select your specific Network device (wifi, ethernet, etc.).
>
> While Winpinator is often recommended, I myself had issues with it often not connecting or not finding my Deck. This was solved by using the unofficial app from the github linked above.

#### FTP (Slower Network Sharing, Needs an App)

> [!NOTE]
> We will be using Filezilla here, as it is available on every OS. Any combination of FTP clients should work, as FTP is a protocol that is being utilized by all of the apps that offer it. There should be almost no difference.

> 1. Download **[Filezilla](https://filezilla-project.org/)** on both devices.
> 2. Find your IP address on your Deck by going to **Settings>Internet** in either **Game Mode** or **Big Picture** in **Desktop Mode**
> 3. On your PC, in **Filezilla**:
>     * Enter the **Deck** IP address into the **Host** box.
>     * The Username is going to be `deck`.
>     * The password is blank unless you set it previously with the `passwd` command.
>     * The Port will be `22`
> 4. Click **Quickconnect**

> [!WARNING]
> You can add the connection to the app by clicking **File>Copy Current Connection to Site Manager**.

#### MTP (USB Sharing)

---

## Guides for Proton/Wine

> [!NOTE]
> This guide will be using ProtonTricks

### Finding Non-Steam Game Proton Folder

> [!NOTE]
> This only works for games added to steam already as a non steam game.
> This means you need to enable proton on the game and try to run it once so it can set up a prefix for it.
> * Open **ProtonTricks**.
> * In the list of games find the title you gave your game in Steam itself.
> * Next to the game name, there is a long number.
> * Open **Dolphin**.
> * Go to `/home/deck/.local/share/Steam/steamapps/compatdata` and find the number from earlier.
> * Enter the folder, then enter the `pfx` folder.
> * `drive_c` is the folder a lot of the "wine" aspect of things will happen.

> [!NOTE]
> Sometimes games will use either `Program Files` or `Program Files (x86)`. Check both.

> [!CAUTION]
> In ProtonTricks, your game will show as whatever it is titled in Steam upon opening. If you never changed the name from `setup.exe` then that's what it will be named.
>
> If you selected `C:` during an install (which you shouldn't have done!), your game may be installed in one of these folders.
> If you'd love to find out why that isn't a good idea, keep it installed there and see.

![Proton Folder Number](https://i.imgur.com/SCZqbXL.png)

### Installing Dependencies
#### What are dependencies?

> [!NOTE]
> Dependencies are other tools/apps that software relies on to work.
> These are often included in the game installers on official releases. When you add a non-steam game from a pirated package, they may include these in a separate folder, or they may not be included at all. Without them the games that were designed around these dependencies at best will work with issues, and at worst won't open at all. If you're situation is either of these, this is the section that *should* help.
>
> **Dependencies are needed if:**
> * [X] Video/audio is messed up or not working.
> * [X] Error at beginning stating a certain file or app cannot be found.
> * [X] The game doesn't start.

#### How to find what dependencies are needed for your game.

> [!NOTE]
> In the event that a game does not come with it's dependencies in the folder or you are not sure which they need, Steam actually has a database dedicated to every iteration of every game they have. Being the awesome company they are, they have a dedicated log of all things required through the history of a games life cycle on their server. This includes everything from prices up to dependencies, updates and DLC. In this instance, we're going to show you where to go on their database to get the info you need.

> **Steam Database**
> * Find your game on [SteamDB](https://steamdb.info) by searching it by title.
> * On the game's page, click the **Depots** section (in the same area as **Prices**, **Packages**, **DLCs**, etc.)
> * Look for anything with a **Windows** logo next to it. Anything else is specific to the game and can be ignored.
> * In this example, GTA V requires `VC 2012 Redist` and `DirectX Jun 2010 Redist`.
> * Proceed to the next portion to find out where to get them!
> * Proceed to the step after that step to install them!!

![GTA V Dependencies](https://i.imgur.com/adLTbwV.png)

#### Where to get dependencies.

> [!NOTE]
> Microsoft has everything you need.
> Because Microsoft has been around for ages, and they have been the main OS for many business and personal users for decades, they have to keep quite the extensive catalog of legacy software on their website. This means all dependencies should be available right there on the website itself.

> [!CAUTION]
> If it wasn't explicitly clear in the previous note, do not download these from places other than the Microsoft site or Wine/ProtonTricks. While they may not mess your Steam Deck up due to it being Linux, it's just good practice to not download official and freely available things that can harm your system from shady places or people. Repackers issue the same stuff and probably get them from Microsoft themselves. Just save yourself the trouble.

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
> **Method 1**
> * Click ok on the first screen with the radio button highlighted create new/default prefix
> * Click the radio button that says Uninstall
> * A new screen will pop up and on this will be a button that says Install
> * Install all the dependencies needed
> * Hit Ok at the bottom when you have finished
> * Verify they installed by going back to the Uninstall menu and at the bottom is will show all that is installed in the Wine Prefix
> **Method 2**
> 1. **Open Protontricks:** Launch Protontricks from your applications menu.
> 2. **Select the Game:** Protontricks will show a list of games installed on your Deck. Select the game for which you need to install dependencies.
> 3. **Choose “Select the default wineprefix”** to set up a unique configuration environment for that game.
> 4. **Install Specific Dependencies:**
>     * Here are common dependencies that games may need:
>         * **DirectX:** `d3dx9`, `d3dx10`, `d3dx11`
>         * **Visual C++ Redistributables:** `vcrun2005`, `vcrun2008`, `vcrun2010`, `vcrun2013`, `vcrun2019`
>         * **DotNet Frameworks:** `dotnet20`, `dotnet40`, `dotnet48`
>     * In Protontricks, select **Install a Windows DLL or component** and choose the required dependencies from the list.
> 5. **Verify Installations:**
>     * Once installed, Protontricks will confirm the installation of each component. Double-check that each required dependency is installed.

> [!CAUTION]
> This will likely show errors, that's okay, it's batch installing different types (including incompatible ones), the right ones will still be installed. Click through any installers that may show up.

#### Installing manually (with an installer, still in ProtonTricks)

> [!NOTE]
> This method is useful for when you find a `Redist` folder or similar in the copy you downloaded. Some repackers do this.
> Make sure ProtonTricks has access to your drives and SD card through Flatseal.

> 1. **Open Protontricks:** Launch Protontricks from your applications menu.
> 2. **Select the Game:** Protontricks will show a list of games installed on your Deck. Select the game for which you need to install dependencies.
> 3. **Choose “Select the default wineprefix”** to set up a unique configuration environment for that game.
> 4. **Choose "Run explorer** and click OK.
> 5. **Execute the dependency `.exe` file** navigate using the folder list on the side, then double click the `.exe` when you find it.
> 6. **Close all ProtonTricks windows**
> 7. **Test your game**

> [!CAUTION]
> If this didn't fix it, keep reading.

### Adding DLLs to Proton

> [!NOTE]
> Windows uses something called Dynamic Link Libraries (DLLs).
> These are used by applications/games to bind functions to each other and work with data inside of the folder they are made in. Linux does not use DLLs so it is sometimes required to point your Wine/Proton prefix to the ones games use. This especially applies when modding a game, as a lot of mods rely on DLLs. We will discuss here how to add them.

#### Steam Arguments

> [!NOTE]
> Steam arguments are entered through the game properties in the `Launch Options` box. These vary by the type of command, here we are going to cover `WINEDLLOVERRIDES`.

> 1. In **Game Mode/Desktop Mode**, select your game.
> 2. Click the **Settings** (gear) icon.
> 3. Click **Properties**.
> 4. The **Shortcut** tab should open automatically.
> 5. Let's say we're trying to point to `dinput8.dll`, in order to do this type `WINEDLLOVERRIDES="dinput8.dll=n,b" %command%` in the **Launch Options** box.
> 6. Do this same thing for any other DLL needed by replacing `dinput8.dll` in the command from *Step 5*. If adding multiple in one command, you can separate them with commas, making sure they fit within the first quotation mark and the equal sign. (Example: `WINEDLLOVERRIDES="dinput8.dll,d3d9.dll=n,b"`)

*from [r/SteamDeckTricks](https://www.reddit.com/r/SteamDeckTricks/comments/xnmm32/game_modding_guide/)*

> [!WARNING]
> These can also be added in Lutris by right-clicking your game, selecting **Configure**>**Runner options** and adding them in the DLL overrides section. Under **Key** you'll type (in this example) `dinput8.dll` and under **Value** enter `n,b`.

#### ProtonTricks

> [!NOTE]
> This method uses ProtonTricks interface to add DLL files to the prefix. This is my preferred method as I can see what is being entered, and not have to worry about typing things properly.

> 1. Open **ProtonTricks**.
> 2. Select your game in the list. Click **OK**.
> 3. Select **default wine prefix**, click **OK**.
> 4. Select **Run winecfg**, click **OK**.
> 5. In the **Wine Configuration** window, select the **Libraries** tab.
> 6. Type `dinput8` and click **Add** or hit *Enter* on your keyboard.
> 7. Scroll to the bottom of the list to make sure it is in the list.
> 8. Click **OK**, and exit out of all ProtonTricks windows.
> 9. Run your game and see if the intended outcome was achieved.

> [!NOTE]
> You do not need to include the `.dll` at the end.
> All items listed in here will run within the prefix.

> [!CAUTION]
> If any of them give you a pop-up or an error, do not add these.

---

## Guides for emulators and roms

> [!NOTE]
> The Deck is an amazing emulator machine.
> The sweet spot for performance is mostly in the Xbox/PS2 era, with the Switch being an exception for current gen. Anything before that should run flawlessly (on a per game basis). Do not expect to be emulating Xbox 360 (possible for some games) and definitely don't even for a second *think about* running PS4/Xbox One or later. There is a lot of info out there regarding emulation on the deck. We are going to gather the most frequently asked questions here. Here's a good [conversation](https://www.reddit.com/r/SteamDeck/comments/1ea1675/emudeck_vs_retrodeck/) on the differences between the two.
>
> Regardless of which one you use, the outcome will be the same.

### Emudeck
EmuDeck is a collection of scripts that allows you to autoconfigure your Steam Deck, it creates your roms directory structure and downloads all of the needed Emulators for you along with the best configurations for each of them. EmuDeck works great with [Steam Rom Manager](https://github.com/SteamGridDB/steam-rom-manager) or with [EmulationStation DE](https://es-de.org).

#### Installing EmuDeck
> 1. If you are using an SD Card, format your SD Card in Game Mode on SteamOS. SD Cards need to be formatted as ext4 (or btrfs) to be compatible with EmuDeck.
>     * **Skip** this step if you have already formatted your SD Card
> 2. Switch to Desktop Mode. Pressing the `STEAM` button, then select Power and choose `Switch to Desktop`.
> 3. Download the [EmuDeck Installer](https://www.emudeck.com/#download).
> 4. Copy the installer to your Steam Deck's desktop. Run the EmuDeck Installer.
> 5. Copy your games to the `Emulation/roms` folder created by the installer. Open Steam ROM Manager through EmuDeck. Each parser corresponds to an emulator or tool. Enable which parsers you would like to use.
>     * Copy your BIOS to `Emulation/bios`
>     * Refer to the [Cheat Sheet](https://emudeck.github.io/cheat-sheet/) for which folders correspond to which systems, a full list of ROM file types, and expected BIOS
> 6. After you have selected your parsers:
>     * Click on `Preview`
>     * Click `Parse`
>     * Wait for all the images to download
>     * Click `Save apps to Steam`. The first time may take a few moments, After it saves successfully, your selected ROMs and tools will be added to your Steam library.
> 7. Close Steam ROM Manager. Click `Return to Game Mode` on your desktop and your EmuDeck install is now complete!

*from [Emudeck wiki](https://emudeck.github.io/)*

### RetroDeck
RetroDECK is a [ES-DE Frontend](https://es-de.org/) powered Flatpak all-in-one game application that is still in development. Thanks to its RetroDECK Framework it builds-in a variety of software (that runs your games) like emulators and game engines in one package that is pre-configured.

#### Installing RetroDeck
> * Put the Steam Deck into **Desktop Mode**
> * Install **RetroDECK** from **Discover**
> * Start RetroDECK first time in **Desktop Mode**
> * Choose where RetroDECK should create the roms folders **Internal** or **SDCard**.
> * Put the **BIOS files** inside `~/retrodeck/bios/`.
> * Put the **ROMS** inside `~/retrodeck/roms/ or <sdcard>/retrodeck/roms/` or a custom location.
> * Choose to install **Steam Controller Layouts** for RetroDECK, it should be checked from the start.
> * In Steam desktop go to the tab **Games** press `Add non-Steam game to My library` and select **RetroDECK** to add it into your library. If that is not working, you can *right-click* on the RetroDECK desktop icon and press `Add to Steam` in the menu.
> * Switch over to **Game Mode** and go to **RetroDECK** on the Steam Grid under **Library > Non-Steam**
> * Add any of the the Official Layouts under **Controller Settings > Controller Layouts > Templates** in the Steam Deck called `RetroDECK: Steam Deck - Neptune SIMPLE or FULL` with a version number. Apply the layout.
> * Launch **RetroDECK** and enjoy.

*from [RetroDeck wiki](https://retrodeck.readthedocs.io/en/latest/wiki_devices/steamdeck/steamdeck-start/)*

### Individual emulators
Individual emulators can be installed as well. A lot of them are already on the **Discover Store**. While this is a perfectly viable method of setting up your emulation zone, we will not really be covering it here. The reason for this is that we want you to have the most straightforward and easy setup you can get. Also, quite frankly, if a lot of people follow the guides posted above and use the already-developed frontends we suggest, we get less questions and have an easier time supporting people. Should you choose to do things this way, you will manually have to set every emulator up, tweak them all to look right, organize the folder structure, and download so much extra stuff. By the time you're halfway done, you'll wonder why you didn't do RetroDeck/EmuDeck in the beginning.

### Switch Emulation

#### Recommended Emulators

> [!NOTE]
> As of 2024, the two main Switch emulators were taken down by the most ruthlessly litigious playing card game companies of all time. Taken down does not mean gone, though. Nothing is ever fully erased from the internet. **EVER**. With that being said, we are not going to risk having this guide taken down by linking but as of now the best and most reliable iterations are to find mirrors of **Yuzu** or **Ryujinx**. Those will have been last updated before the shutdowns. As of the time this guide was written that should not affect any of the current games that are out (at least the important ones). There is a fork of **Ryujinx** that is being maintained by *GreemDev*. The **Yuzu** forks are **Sudachi** or **Suyu**.

> [!CAUTION]
> All Switch emulators require prod.keys and firmware.
> We will not tell you where to find those.

#### Switch Emulator Performance
Some games will run perfectly fine on the Deck. Some will have occasional frame dips. Some will have bad audio. Some just won't work at all. This is the nature of emulation. The more popular games will have patches available for them. Someone has amazingly made a [compatibility list](https://docs.google.com/spreadsheets/d/1AhKo6rjQHXLuZEHPozA-F-YPejLPBrj0jbPNUyNDx78/edit?gid=77197668#gid=77197668).

### BIOS, ROMs, and other files
Some emulators will require BIOS files to operate. These are usually found in a multitude of places. This [reddit post](https://www.reddit.com/user/EmulationStranger/comments/11j09qc/idiots_guide_to_emudeck_where_to_find_bios_and/) should have you on the way to finding the right BIOS and ROMs for each emulator. Specifically the ROM Megathread. Again we will not link here for safety reasons.

### PC Ports
Some of the games you want to emulate may have PC ports. Always check to see what came out for PC and if it ran better that way. For example, Scarface has way better QoL mods and patches that make it a much better experience on the deck. The real benefit of these is that you can modify the games to run better, and also there is more documentation and development for them as the files are more accessible to those modding. The biggest benefit of emulation is in most cases. you will save battery. PC ports usually have FPS mods, widescreen fixes, and a slew of other enhancements that make it a better experience overall. There are even PC ports for old N64 games like Mario 64, Perfect Dark, and so on. We highly recommend looking into these options. When you do find a PC port, be sure to go to [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) to see what all should be added to the games to make them perform at their best.

---

## Cracks/DLC/Updates
> [!NOTE]
> Since a lot of cracks and updates are made for PC, it is often recommended to do whatever patching of files is required on your PC, then to transfer the fully patched game over to your Deck. This certainly applies in situations with CreamAPI, Goldberg Steam Emulator, and any cracked game updates. If you don't have the means to do that, or you like to do things in hard mode, then here is how you'd do that.
>
> This is not a blanket guide for all situations. This is just for the most common situations. Further tweaking may be needed depending on the game, the patch, or a plethora of other reasons.
> Make sure ProtonTricks has access to your drives and SD card through Flatseal.

> 1. **Open Protontricks:** Launch Protontricks from your applications menu.
> 2. **Select the Game:** Protontricks will show a list of games installed on your Deck. Select the game you intend to modify.
> 3. **Choose “Select the default wineprefix”** to set up a unique configuration environment for that game.
> 4. **Choose "Run explorer"** and click OK.
> 5. **Execute the patch/modloader/ `.exe` file** navigate using the folder list on the side, then double click the `.exe` when you find it.
> 6. **Close all ProtonTricks windows**
> 7. **Test your game**

> [!NOTE]
> Most modloaders really just modify and apply new files within the game folder. This can be done manually in most cases.
> Don't forget to add DLLs through one of the methods listed in the DLLs part of this guide.

> [!CAUTION]
> If you still have trouble and you don't own a PC, this may be the only time we recommend installing Windows on an SD card and doing the file operations there. There are not many situations where it can't be done all through the Deck.

---

## Common questions/Things you will encounter

### Compressed files (.rar, .zip, .7z, etc.)

> [!NOTE]
> A lot of games come in what are called *compressed* formats. These are used when a folder or file is too large and you want to shrink them down. Repackers and download sites do this so they can be downloaded faster. Sometimes they come with the file extensions listed above in parentheses, or they may come in something like `.001, .002` or `7z01, .7z02,`, etc. These can be handled using **PeaZip**

> 1. Install **PeaZip** from the **Discover Store**
> 2. Open **PeaZip**
> 3. Click *File* then click *Open*
> 4. Find and open your compresed files. If there are multiple select all or select the one that ends in `.7z` `.zip` or `.rar`.
> 5. Click *Extract*
> 6. Extract them to the same folder or another easy to find folder.
> 7. This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.

> [!NOTE]
> This will result in double the size of your download or more taking up space on your drive.
> If there were no errors in the extraction or the installation, you can delete the compressed files. If it was an installer, you may have triple the space taken up, once you are sure the game runs, delete the compressed files and the installer. Be sure to Empty your trash if you use that method.

### ISO Files

> [!NOTE]
> Some games (even after you extract them) will be in *ISO* format.
> These are digital disc images. In Windows, opening this would be the same thing as inserting a disc for your game to install from, except it's all digital. These will have a `.iso` extension, and will usually be rather large in size.
>
> In some cases, this functionality may be built into Dolphin's contect menu by `right-clicking>hovering over Mount/unmount iso image>clicking Mount`. If that option is not present read below.

> 1. Install **PeaZip**/**PowerISO** from the **Discover Store**
> 2. Open **PeaZip**/**PowerISO**
> 3. Click *File* then click *Open* (PeaZip will be *Open archive*).
> 4. Find and open your `.iso`.
> 5. Click *Extract*
> 6. Extract it to the same folder or another easy to find folder.
> 7. This will either extract as an installer, or as a complete game. From there you can follow any of our guides above.

### Install Locations
> [!NOTE]
> When installing games on PC, common practice is for it to install to the `C:` drive.
> This is put in place because the `C:` drive is usually the main drive that Windows lives and operates through. Since we are emulating the PC, the `C:` drive isn't really a drive at all. It's a folder inside of a prefix usually named `drive_c`. The nature of prefix is to emulate a Windows environment with the bare minimum. So when you work within this environment, it is limited. It is always recommended to install in a folder outside of the prefix that you can get a hold of easily.
>
> The drive letters are named arbitrarily on a per-game installer basis.
> Sometimes your memory card or hard drive may be under `D:` or `F:`. `Z:` seems to, more often than not, point to the root of SteamOS. This means you can always find both your connected drive and your main folder under `Z:\run\media\`
>
> Your SD card will usually be named `mmcblk0p1`.

### Can't see external HDD/SD Card/`home` Folder
- [X] Can't download/extract to to a certain folder.
- [X] Install location only showing 7 gigabytes when there are hundreds of gigabytes free
- [X] Lutris (or another app) can't see my folders

#### Flatseal

> [!NOTE]
> Most of the apps you are using will be installed in a package format named **Flatpak**. **Lutris** and **ProtonTricks** especially. These apps can be controlled by an app called **FlatSeal**. Here we will show you how to enable permissions for an app to see your other devices.

> * Install **FlatSeal** from the **Discover Store**
> * Open **FlatSeal**
> * On the left, select the app in question, in this example we'll use **Lutris**
> * Scroll down to **Filesystem**
>     * Turn on the switch for `All user files` to permit access to your internal SSD files.
>     * To see external devices
>         * In the **Discover** app, navigate to your external device.
>         * When the window is showing the root of the device, click the bar that says the title of the device (to the left of the **Split** button), this will reveal the path to your device
>         * Highlight the entire path, and **Copy** it.
>         * Click the *New Folder* icon next to `Other files`
>         * Paste the path into the new *text box*.
> * Close whatever app was having trouble seeing your folders and open it and try again

> [!NOTE]
> This should work for any folder you want your app to see, and any app that is a flatpak.

### Can't find save files.

> [!NOTE]
> There is also a cool app that is recommended called **[Shortix](https://github.com/Jannomag/shortix)**.
> Shortix creates user readable symlinks for Proton game prefixes. Once it is installed, you will have a folder created that provides shortcuts to your proton folders. All of the info is in that link and should kind of make things a little easier in the process of finding your mods, game saves, etc. If you'd like a manual method to find the folders, I have written a guide below.

> * Use the website [PCGamingWiki](https://www.pcgamingwiki.com/wiki/Home) to find the save path location.
> * Refer to our [Finding Non-Steam Game Proton Folder](#finding-non-steam-game-proton-folder) section.
> * Use the path on the website to navigate within `drive_c` and find your save file.

> [!NOTE]
> If there is no save file, check the **Install Locations** section above.

### How do I move/backup my save files?

> [!NOTE]
> Enter [ludasavi](https://github.com/mtkennerly/ludusavi).
> This app works to backup your saves and apply them to other installations/devices. All info can be found on the linked github. If this doesn't work for you, use the guide in the section right above this to figure out where they are then move them manually.

### Controller not working

> [!WARNING]
> Some games will load perfectly but won't have controller input. Prime examples are the new Spider Man games and Ghost of Tsushima. There are a few ways to solve this. Covered below:

#### Steam Input
In most cases you can disable Steam Input in the Game Menu and that alone should solve the issue.

> **In Desktop Mode:**
> * Select your game in Steam
> * Click on the gear icon to the right of the **Play** button
> * Click **Properties**
> * Select the **Controller** tab
> * Next to `Override for [Game Name]` click the dropdown
> * Select `Disable Steam Input`

#### Finding Community Layouts
There are also **Community Layouts**. These are layouts made by (you guessed it) the community on steam. These are searched through steam based on what they are named in the Steam Interface. Sometimes this yields results, but often for me it hasn't.

A couple of people have reported being able to pinpoint the search by changing the shortcut name to the Steam URL listing number:

> **In Desktop mode:**
> * Open [SteamDB](https://steamdb.info)
> * Search for your game and click on it's listing.
> * The number you're looking for will be either in the url after `/app/` or next to **App ID** in on the actual page.
> * Copy the number (no special characters).
> * Go to your game listing in the Steam app.
> * Click the gear to the right of the **Play** button.
> * Click **Properties**.
> * Change the title to the number you copied
> * Close the settings
> * Click on the Controller Icon next to the Gear Icon, click on the Layout Selector (above **View Layout** and **Edit Layout**)

### Game opens steam
Either your crack isnt applied properly or you need to change the number in `steamapp_id.txt` to `1` in the game folder.

### No licenses
If this shows it means your crack isn't working. Make sure you copied the files over properly, and that you have pointed to all of the relevent DLLs and dependencies.

### Games suddenly won't open or close
> More often than not, this is related to a plugin running in Decky. To verify this:
> * Disable Decky and test your game
> * Uninstall your plugins one by one, and see what changes it.
> * Uninstall them all, and add them back one by one until you see the error happen again.

### Game tries to load and immediately stops

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
> If you are here, then that means you haven't been <a href="#installing-dependencies">here</a>.

### Mods won't load
> [!WARNING]
> If your mods won't load, it could be a few things:
> * A lot of times, mods use/alter/interact with DLL files. Try adding them to the prefix per this [section](#adding-dlls-to-proton).
> * In some instances, there is a Linux version of the mod application you're trying to use, be sure to check into the source of the mod loader.
> * Check this [guide](https://www.reddit.com/r/SteamDeckTricks/comments/xnmm32/game_modding_guide/) from [r/SteamDeckTricks](https://www.reddit.com/r/SteamDeckTricks/).

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
