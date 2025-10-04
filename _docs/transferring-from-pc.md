---
title: Transferring Installed Games from PC
parent_id: install-guides
nav_order: 4
---

## Transferring Installed Games from PC

> [!NOTE]
> There are a multitude of ways to transfer your files from any device you have over to your Deck.
> We won't mention USB drives here because it is easy to do and also the longest time out of any of the options seeing as how you have to transfer twice.

> [!WARNING]
> Speeds may vary based on a variety of things including network speed, network hardware, PC hardware, cable vs. WiFi, etc.


#### SSH (Network File Sharing)

Below are step-by-step guides for connecting to your Steam Deck via SSH from Linux, Mac, and Windows. Each guide assumes you have already enabled SSHD on your Steam Deck (see below).

---

#### Setting Up SSHD on Steam Deck
<div class="panel">
<strong>Enable SSH Daemon Service on your Deck:</strong>
<ol>
    <li>Switch to Desktop Mode (<strong>STEAM</strong> button > <strong>Power</strong> > <strong>Switch to Desktop</strong>).</li>
    <li>Open&nbsp;<strong>Konsole</strong> from <strong>All Applications</strong>.</li>
    <li>Set a password for your user: <code>passwd</code></li>
    <li>Enable SSHD: <code>sudo systemctl enable sshd</code></li>
    <li>Start SSHD: <code>sudo systemctl start sshd</code></li>
    <li>Check status: <code>sudo systemctl status sshd</code> (look for <code>enabled</code> and <code>running</code>).</li>
</ol>
</div>

>*from [GitHub](https://github.com/Matalus/steamdeck-tips/blob/main/wiki/ssh.md)*

> [!CAUTION]
> The password set in this tutorial will be your password across all Deck operations. Remember it!!

---

#### SSH Connection Guide: Linux
<div class="panel panel--soft panel--ssh" data-os="Linux">
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
</div>

#### SSH Connection Guide: Mac
<div class="panel panel--soft panel--ssh" data-os="MacOS">
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
</div>

---

#### SSH Connection Guide: Windows
<div class="panel panel--soft panel--ssh" data-os="Windows">
<strong>Connect to Steam Deck from Windows:</strong>
<ol>
    <li>Download and install <strong>PuTTY</strong> (or use Windows Terminal/PowerShell if OpenSSH is installed).</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li>Open PuTTY and enter <code>deck@&lt;SteamDeck_IP&gt;</code> as the Host Name.</li>
    <li>Set Port to <code>22</code> and Connection Type to <code>SSH</code>.</li>
    <li>Click <strong>Open</strong> and enter your password when prompted.</li>
    <li>You now have terminal access to your Steam Deck.</li>
</ol>
</div>

---

#### Adding Your Deck Storage as a Drive on Your PC or Mac

> [!NOTE]
> If you want to take this a step further and make it REALLY streamlined, add it to your device as a network drive. This will make it an accessible folder in Finder/Explorer. Just drag and drop and call it a day.

<div class="panel">
<strong>Guide: Add Steam Deck Storage as a Network Drive</strong>
<ol>
    <li>Ensure SSH is enabled and running on your Steam Deck (see SSH setup above).</li>
    <li>Find your Steam Deck's IP address (Settings > Internet).</li>
    <li><strong>Windows:</strong>
        <ul>
            <li>Open&nbsp;<strong>File Explorer</strong>.</li>
            <li>Right-click <strong>This PC</strong> &rarr; <strong>Add a network location</strong>.</li>
            <li>Choose <strong>Choose a custom network location</strong> &rarr; <strong>Next</strong>.</li>
            <li>Enter: <code>sftp://deck@&lt;SteamDeck_IP&gt;:/home/deck</code></li>
            <li>Enter your Deck password when prompted.</li>
            <li>Your Deck's home folder will appear as a network drive in File Explorer.</li>
        </ul>
    </li>
    <li><strong>Mac:</strong>
        <ul>
            <li>Open&nbsp;<strong>Finder</strong>.</li>
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
</div>

#### Windows (10/11)

#### Warpinator (Still Network, Needs an App)

> [!NOTE]
> Warpinator is an app available for Windows, and Linux that makes a direct tunnel between your two devices. This is by far the highest speed option outside of SSH. This method requires the application to be running on your Steam Deck and your other device at the same time.

#### On Your Deck
<div class="panel">
<ol>
    <li>Install&nbsp;<strong>Warpinator</strong> from the <strong>Discover Store</strong>.</li>
    <li>Open&nbsp;<strong>Preferences</strong> and click <strong>Connection</strong> then set a unique PIN.</li>
    <li>In the <strong>General</strong> tab, make sure you point the download folder to a place you can find. I chose my <strong>Games</strong> folder.
        <ul><li>If you don't have access to a certain location (like your SD card), use flatseal to give Warpinator Permissions.</li></ul>
    </li>
</ol>
</div>

#### On Your PC
<div class="panel">
<ol>
    <li>Download (unofficial) Warpinator from this <a href="https://warpinator.com/warpinator-download/">github</a>. Install it.</li>
    <li>Click <strong>Options > Settings</strong>.</li>
    <li>Put the same PIN from your Deck in the <strong>Group code</strong> box.</li>
    <li>Also make sure your <strong>Receive into folder</strong> is somewhere you can find it.</li>
    <li>Click <strong>Apply</strong>, then click <strong>OK</strong>.</li>
</ol>
</div>

#### Transferring Files
<div class="panel">
<ol>
    <li>Your Deck should show in the <strong>Available Devices</strong> area. If not, make sure you followed the steps above. Click on it to open its transfer window.</li>
    <li>On Windows you can click the <code>+</code> button to add a folder, or the <code>Browse</code> button to add a singular file. You can also drag and drop multiple folders/into the window.</li>
    <li>Accept the transfer on the deck.</li>
    <li>Watch the files fly across your network onto your Deck.</li>
</ol>
</div>

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

<div class="panel">
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
</div>

> [!WARNING]
> You can add the connection to the app by clicking **File>Copy Current Connection to Site Manager**.

#### MTP (USB Sharing)
