---
title: Can't see external HDD/SD Card/home Folder
parent: Common Questions
nav_order: 4
---

## Can't see external HDD/SD Card/`home` Folder
- [X] Can't download/extract to to a certain folder.
- [X] Install location only showing 7 gigabytes when there are hundreds of gigabytes free
- [X] Lutris (or another app) can't see my folders

#### Flatseal

> [!NOTE]
> Most of the apps you are using will be installed in a package format named **Flatpak**. **Lutris** and **ProtonTricks** especially. These apps can be controlled by an app called **FlatSeal**. Here we will show you how to enable permissions for an app to see your other devices.

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

> [!NOTE]
> This should work for any folder you want your app to see, and any app that is a flatpak.
