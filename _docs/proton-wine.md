---
title: Guides for Proton/Wine
id: proton-wine
nav_order: 4
---

# Guides for Proton/Wine

Quick links:

- [Finding Proton Folder](#finding-proton-folder)
- [Installing Dependencies](#installing-dependencies)
- [Adding DLLs](#adding-dlls-to-proton)

---
## Finding Proton Folder {#finding-proton-folder}
Run the game once so a prefix is created so a Wine/Proton prefix directory exists.
<div class="panel panel--soft"><ol><li>Open <strong>ProtonTricks</strong>.</li><li>Find the game entry; note the long numeric ID.</li><li>Navigate to <code>~/.local/share/Steam/steamapps/compatdata/&lt;ID&gt;/pfx/drive_c</code>.</li></ol></div>

![Proton Folder Number](https://i.imgur.com/SCZqbXL.png)

> [!NOTE]
> Sometimes games will use either <code>Program Files</code> or <code>Program Files (x86)</code>. Check both if you can't find installed data.

---
## Installing Dependencies {#installing-dependencies}
Missing DirectX / VC++ / .NET / PhysX often cause crashes or silent failure.

### Identify dependencies
Use SteamDB → Depots (rows with the Windows logo) to see which redistributables shipped historically.

![GTA V Dependencies](https://i.imgur.com/adLTbwV.png)

### Official sources
DX9 (2010): https://www.microsoft.com/en-us/download/details.aspx?id=8109  
DX10/11: https://www.microsoft.com/en-us/download/details.aspx?id=35  
VC 2005: https://www.microsoft.com/en-us/download/details.aspx?id=26347  
VC 2008: https://www.microsoft.com/en-us/download/details.aspx?id=26368  
VC 2010: https://www.microsoft.com/en-us/download/details.aspx?id=26999  
VC 2012: https://www.microsoft.com/en-us/download/details.aspx?id=30679  
VC 2013: https://support.microsoft.com/en-us/topic/update-for-visual-c-2013-redistributable-package-d8ccd6a5-4e26-c290-517b-8da6cfdf4f10  
Latest VC++ bundle: https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist  
.NET Framework: https://dotnet.microsoft.com/en-us/download/dotnet-framework  
PhysX: https://www.nvidia.com/en-us/drivers/physx/physx-9-19-0218-driver/

### ProtonTricks batch install
<div class="panel"><ul><li>ProtonTricks → select game → <em>default wineprefix</em> → Install a Windows DLL/component.</li><li>Select needed items (<code>d3dx*</code>, <code>vcrun*</code>, <code>dotnet*</code>).</li><li>Ignore benign errors; confirm via Uninstall list afterwards.</li></ul></div>

### Manual installer
<div class="panel"><ol><li>ProtonTricks → game → default prefix → Run explorer.</li><li>Execute dependency installer (<code>.exe</code> in repack / Redist folder).</li><li>Test the game after each major group (DX, VC++) to isolate issues.</li></ol></div>

> [!CAUTION]
> Only download these from Microsoft / official sources or via ProtonTricks. Avoid shady mirrors.

#### What are dependencies? {#what-are-dependencies}
> [!NOTE] They are shared runtime components (VC++, DirectX, .NET, PhysX, Media Foundation) a game expects to exist. Without them: crashes, missing audio/video, or silent exit.

#### How to find what dependencies are needed for your game {#how-to-find-what-dependencies-are-needed-for-your-game}
<div class="panel"><ol><li>Open <a href="https://steamdb.info">SteamDB</a>.</li><li>Search the game.</li><li>Click <strong>Depots</strong>.</li><li>Note Windows-logo items referencing redistributables.</li><li>Match them to Official sources list above.</li></ol></div>

#### Where to get dependencies {#where-to-get-dependencies}
Official Microsoft links (listed above) or ProtonTricks components list. Avoid third-party aggregators.

#### Installing with ProtonTricks {#installing-with-protontricks}
Batch method shown above; repeat for any missing runtime after testing launch.

#### Installing manually (with an installer, still in ProtonTricks) {#installing-manually-with-an-installer-still-in-protontricks}
Use “Run explorer” to execute vendor-provided redistributable .exe inside the prefix when a repack bundles a Redist folder.

---
## Adding DLLs to Proton {#adding-dlls-to-proton}
Used for mod loaders / API hooks (e.g., <code>dinput8.dll</code>, custom DirectX wrappers) when a project injects or overrides behavior.

### Steam Launch Options {#steam-arguments}
<pre><code>WINEDLLOVERRIDES="dinput8.dll=n,b" %command%</code></pre>
Multiple DLLs: <pre><code>WINEDLLOVERRIDES="dinput8.dll,d3d9.dll=n,b" %command%</code></pre>

> [!WARNING]
> In Lutris: Configure → Runner options → DLL overrides (Key: <code>dinput8.dll</code>, Value: <code>n,b</code>).

### ProtonTricks winecfg {#protontricks}
<div class="panel"><ol><li>Open <strong>ProtonTricks</strong>.</li><li>Select game → OK.</li><li><strong>default wineprefix</strong> → OK.</li><li><strong>Run winecfg</strong> → OK.</li><li>Libraries tab → type <code>dinput8</code> → Add.</li><li>Repeat for additional DLL names (no <code>.dll</code> suffix needed).</li><li>Click OK to save.</li></ol></div>

> [!NOTE]
> Avoid DLLs that produce persistent error popups; remove problematic overrides to restore stability.
