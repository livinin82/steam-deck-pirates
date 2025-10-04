---
title: Installing Dependencies
parent: Proton and Wine
nav_order: 2
---

## Installing Dependencies
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

<div class="panel">
<strong>Steam Database</strong>
<ul>
    <li>Find your game on <a href="https://steamdb.info">SteamDB</a> by searching it by title.</li>
    <li>On the game's page, click the <strong>Depots</strong> section (in the same area as <strong>Prices</strong>, <strong>Packages</strong>, <strong>DLCs</strong>, etc.)</li>
    <li>Look for anything with a <strong>Windows</strong> logo next to it. Anything else is specific to the game and can be ignored.</li>
    <li>In this example, GTA V requires <code>VC 2012 Redist</code> and <code>DirectX Jun 2010 Redist</code>.</li>
    <li>Proceed to the next portion to find out where to get them!</li>
    <li>Proceed to the step after that step to install them!!</li>
</ul>
</div>

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
<div class="panel">
<strong>Method 1</strong>
<ul>
    <li>Click ok on the first screen with the radio button highlighted create new/default prefix</li>
    <li>Click the radio button that says Uninstall</li>
    <li>A new screen will pop up and on this will be a button that says Install</li>
    <li>Install all the dependencies needed</li>
    <li>Hit Ok at the bottom when you have finished</li>
    <li>Verify they installed by going back to the Uninstall menu and at the bottom is will show all that is installed in the Wine Prefix</li>
</ul>
</div>
<div class="panel">
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
</div>

> [!CAUTION]
> This will likely show errors, that's okay, it's batch installing different types (including incompatible ones), the right ones will still be installed. Click through any installers that may show up.

#### Installing manually (with an installer, still in ProtonTricks)

> [!NOTE]
> This method is useful for when you find a `Redist` folder or similar in the copy you downloaded. Some repackers do this.
> Make sure ProtonTricks has access to your drives and SD card through Flatseal.

<div class="panel">
<ol>
    <li><strong>Open Protontricks:</strong> Launch Protontricks from your applications menu.</li>
    <li><strong>Select the Game:</strong> Protontricks will show a list of games installed on your Deck. Select the game for which you need to install dependencies.</li>
    <li><strong>Choose “Select the default wineprefix”</strong> to set up a unique configuration environment for that game.</li>
    <li><strong>Choose "Run explorer"</strong> and click OK.</li>
    <li><strong>Execute the dependency <code>.exe</code> file</strong>: navigate using the folder list on the side, then double click the <code>.exe</code> when you find it.</li>
    <li><strong>Close all ProtonTricks windows</strong></li>
    <li><strong>Test your game</strong></li>
</ol>
</div>

> [!CAUTION]
> If this didn't fix it, keep reading.
