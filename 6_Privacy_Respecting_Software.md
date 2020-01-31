[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# Privacy & Securty-Focused Software and Services
> A curated list of privacy-respecting apps, software and providers 🔐

## Intro

You can greatly increase your digital security, by switching to privacy-respecting software. 
Using open-source applications with a strong emphasis on security, will help stop
large corporations profiting from your data, through logging, storing and selling your personal details.


## Password Managers

| Provider |Description |
| --- | --- |
**[BitWarden](https://bitwarden.com)**  | Free and open source, cross-platform password manager with sync
**[1Password](https://1password.com)** | Open source, fully-featured cross-platform password manager with sync. Free for self-hosted (or $3/ month hosted)
**[KeePassXC](https://keepassxc.org)** | Open source, secure password manager, but without cloud-sync capabilities. KeePassXC is a community fork of [KeePass](https://keepass.info/)
**[LessPass](https://lesspass.com)** | LessPass is a little different, since it generates your passwords using a hash of the website name, your username and a single master-passphrase that you reuse. It ommits the need for you to ever need to store or sync your passwords. They have apps for all the common platforms and a CLI, but you can also self-host it.


## 2-Factor Authentication

| Provider |Description |
| --- | --- |
**[Aegis](https://getaegis.app)**  | Free, secure and open source app for manageing 2-step verification tokens, on Android
**[AndOTP](https://github.com/andOTP/andOTP)** | Another open source, secure authanticator app. AndOTP is well established with a strong large user base

**Note:** Don't use your password manager to also store your 2-FA tokens- use a separate application.


## File Encryption

| Provider |Description |
| --- | --- |
**[VeraCrypt](https://www.veracrypt.fr)** | VeraCrypt is open source cross-platform disk encryption software. You can use it to either encrypt a specific file or directory, or an entire disk or partition. VeraCrypt is incredibly feature-rich, with comprehnsive encryption options, yet the GUI makes it easy to use. It has a CLI version, and a portable eddition. VeraCrypt is the successor of (the now depricated) TrueCrypt.
**[Cryptomator](https://cryptomator.org)** | Open source client-side encryption for cloud files- Cryptomator is geared towards using alongside cloud-backup solutions, and hence preserves individual file structure, so that they can be uploaded. It too is easy to use, but has fewer technical customizations for how the data is encrypted, compared with VeraCrypt. Cryptomator works on Windows, Linux and Mac- but also has excellant mobile apps.

If you need to create a compressed archive, prior to encrypting your files, then [PeaZip](https://www.peazip.org/) is a great little cross-platform open source file archiver utility. It allows you to create, open, and extract RAR TAR ZIP archives.


## Virtual Private Networks

VPNs are good for getting round censorship, increasing protection on public WiFi, obscuring your IP address, and reducing what data your ISP can log. But for the most anonymity, you should use [Tor](https://www.torproject.org/).

Before jumping in and signing up for a VPN, there's a couple of things to note:
- A VPN does not make you anonymous- it merely chnages your IP accress to that of your VPN provider, instead of ISP. Your browsing session can still be linked back to your real identity either through your system details (such as user agent, screen resolution even typing patterns), cookies/ session storage, or by the identifiable data that you enter. [Read more about fingerprinting](https://pixelprivacy.com/resources/browser-fingerprinting/).
- VPNs and logging- If you choose to use a VPN because you do not agree with your ISP logging your full browsing history, then it is important to keep in mind that your VPN provider will have access to these logs. Many VPNs claim not to keep logs, but you cannot be certain of this. See [this article](https://gist.github.com/joepie91/5a9909939e6ce7d09e29) for more

You could host your own VPN, which would allow you to have full visibility and control over logs. See [Streisand](https://github.com/StreisandEffect/streisand)

| Provider |Description |
| --- | --- |
**[Mullvad](http://mullvad.net/en/)** | Mullvad is one of the best for privacy, they own all their own servers and have a totally anonymous sign up process, you don't need to provide any details at all, you can choose to pay annonymously too (with Monero, BTC or cash)
**[ProtonVPN](https://protonvpn.com/)** | From the creators of ProtonMail, ProtonVPN has a solid reputation. They have a full suit of user-friendly native mobile and desktop apps. ProtonVPN is one of the few "trustworthy" providers that also offer a free plan

For a full-comparison, see: [thatoneprivacysite.net](https://thatoneprivacysite.net/).


## Browser Extensions

The following browser add-ons give you better controll over what content is able to be loaded and executed while your browsing.

| Provider |Description |
| --- | --- |
**[Privacy Badger](https://www.eff.org/privacybadger)** | Blocks invisible trackers, in order to stop advertisers and other third-parties from secretly tracking where you go and what pages you look at. **Download**: [Chrome][privacy-badger-chrome] \ [Firefox][privacy-badger-firefox]
**[HTTPS Everywhere](https://eff.org/https-everywhere)** | Forces sites to load in HTTPS, in order to encrypt your communications with websites, making your browsing more secure. **Download**: [Chrome][https-everywhere-chrome] \ [Firefox][https-everywhere-firefox]
**[uBlock Origin](https://github.com/gorhill/uBlock)** | Blocks ads, because ads track you. **Download**: [Chrome][ublock-chrome] \ [Firefox][ublock-firefox]
**[ScriptSafe](https://github.com/andryou/scriptsafe)** | Allows you yo block the execution of certain scripts. **Download**: [Chrome][script-safe-chrome] \ [Firefox][script-safe-firefox]
**[WebRTC-Leak-Prevent](https://github.com/aghorler/WebRTC-Leak-Prevent)** | Provides user control over WebRTC privacy settings in Chromium, in order to prevent WebRTC leaks. **Download**: [Chrome][web-rtc-chrome]. For Firefox users, you can do this through [browser settings](https://www.privacytools.io/browsers/#webrtc). Test for WebRTC leaks, with [browserleaks.com/webrtc](https://browserleaks.com/webrtc)
**[Vanilla Cookie Manager](https://github.com/laktak/vanilla-chrome)** | A Whitelist Manager that helps protect your privacy, through automatically removing unwanted cookies. **Download**: [Chrome][vanilla-cookie-chrome]
**[Privacy Essentials](https://duckduckgo.com/app)** | Simple extension by DuckDuckGo, which grades the security of each site. **Download**: [Chrome][privacy-essentials-chrome] \ [Firefox][privacy-essentials-firefox]

*Note: Be careful when installing unfamiliar browser add-ons, since some can compromise your security and privacy. The above list however are all open source, verified and safe extensions*


## Mobile Apps
| Provider |Description |
| --- | --- |
**[Orbot]** | System-wide Tor proxy, which encrypts your connection through multiple nodes. You can also use it alongside [Tor Browser] to access .onion sites
**[NetGaurd]** | A firewall app for Android, which does not require root. NetGuard provides simple and advanced ways to block access to the internet, where applications and addresses can individually be allowed or denied access to your Wi-Fi and/or mobile connection
**[Island]** | A sandbox environment, allowing you to clone selected apps and run them in an isolated box, preventing it from accessing your personal data, or devicce information
**[Exodus]** | Shows which trackers, each of your installed apps is using, so that you can better understand how your data is being collected. Uses data from the  Exodus database of scanned APKs.
**[Bouncer]** | Gives you the ability to grant permissions temporarily, so that you could for example use the camera to take a profile picture, but when you close the given app, those permissions will be revoked
**[XUMI Security]** |  Checks for, and resolves known security vulnerabilities. Useful to ensure that certain apps, or device settings are not putting your security or privacy at risk
**[Daedalus]** | No root required Android DNS modifier and hosts/DNSMasq resolver, works by creating a VPN tunnel to modify the DNS settings. Useful if you want to change your resolver to a more secure/ private provider, or use DNS over HTTPS
**[Greenify]** | Stops certain apps from running in the background. Was intended to be used to speed up your phone, and prolong battery life, but it also stops certain apps from collecting data and tracking your actions while running in the background
**[Secure Task]** | Triggers actions, when certain security conditions are met, such as multiple failed login attempts or monitor settings changed. It does require [Tasker], and needs to be set up with ADB, device does not need to be rooted
**[Cryptomator]** | Encryptes files and folders client-side, before uploading them to cloud storage (such as Google Drive, One Drive or Dropbox), meaning none of your personal documents leave your device in plain text
**[1.1.1.1]** | Lets you use CloudFlares fast and secure 1.1.1.1 DNS, with DNS over HTTPS, and also has the option to enable CloudFlares WARP+ VPN
**[Fing App]** | A network scanner to help you monitor and secure your WiFi network. The app is totally free, but to use the advanced controlls, you will need a [Fing Box](https://amzn.to/2vFDF4n)
**[FlutterHole]** | Easy monitoring and controll over your [Pi Hole](https://pi-hole.net/) instance. Pi Hole is great for security, privacy and speed

*For advanced users, the following tools can be used to closely monitor your devise and networks, in order to detect any unusual activity. [PortDroid] for network analysis, [Packet Capture] to monitor network traffic, [SysLog] for viewing system logs, [Dexplorer] to read .dex or .apk files for your installed apps, and [Check and Test] to check status and details of devices hardware*

---

**Note**: In order to stay protected, it is important to also: Use strong and unique passwords, 2-factor authentication,
adopt good networking practices and be mindful of data that is collected when browsing the web. See the full
**[personal security checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md)** for all the details 🔐

*Contributions are welcome, and appreciated - to propose an edit [open an issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose),
or [open a PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master).
See: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md).*

*Licensed under [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/),© [Alicia Sykes](https://aliciasykes.com) 2020*

[![Attribution 4.0 International](https://licensebuttons.net/l/by/3.0/88x31.png)](https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE.md)



[//]: # (BROWSER EXTENSION LINKS)
[privacy-badger-chrome]: https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp
[privacy-badger-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/privacy-badger17/
[https-everywhere-chrome]: https://chrome.google.com/webstore/detail/https-everywhere/gcbommkclmclpchllfjekcdonpmejbdp?hl=en
[https-everywhere-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/https-everywhere/
[ublock-chrome]: https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en-GB
[ublock-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/ublock-origin/
[script-safe-chrome]: https://chrome.google.com/webstore/detail/scriptsafe/oiigbmnaadbkfbmpbfijlflahbdbdgdf?hl=en-GB
[script-safe-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/script-safe/
[web-rtc-chrome]: https://chrome.google.com/webstore/detail/webrtc-leak-prevent/eiadekoaikejlgdbkbdfeijglgfdalml?hl=en-GB
[vanilla-cookie-chrome]: https://chrome.google.com/webstore/detail/vanilla-cookie-manager/gieohaicffldbmiilohhggbidhephnjj?hl=en-GB
[privacy-essentials-chrome]: https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg?hl=en-GB
[privacy-essentials-firefox]: https://addons.mozilla.org/en-GB/firefox/addon/duckduckgo-for-firefox/

[//]: # (ANDROID APP LINKS)
[Island]: https://play.google.com/store/apps/details?id=com.oasisfeng.island
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
[Bouncer]: https://play.google.com/store/apps/details?id=com.samruston.permission
[Crypto]: https://play.google.com/store/apps/details?id=com.kokoschka.michael.crypto
[Cryptomator]: https://play.google.com/store/apps/details?id=org.cryptomator
[Daedalus]: https://play.google.com/store/apps/details?id=org.itxtech.daedalus
[Brevent]: https://play.google.com/store/apps/details?id=me.piebridge.brevent
[Greenify]: https://play.google.com/store/apps/details?id=com.oasisfeng.greenify
[Secure Task]: https://play.google.com/store/apps/details?id=com.balda.securetask
[Tor Browser]: https://play.google.com/store/apps/details?id=org.torproject.torbrowser 
[PortDroid]: https://play.google.com/store/apps/details?id=com.stealthcopter.portdroid
[Packet Capture]: https://play.google.com/store/apps/details?id=app.greyshirts.sslcapture
[SysLog]: https://play.google.com/store/apps/details?id=com.tortel.syslog
[Dexplorer]: https://play.google.com/store/apps/details?id=com.dexplorer
[Check and Test]: https://play.google.com/store/apps/details?id=com.inpocketsoftware.andTest
[Tasker]: https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm
[NetGaurd]: https://www.netguard.me/
[Exodus]: https://exodus-privacy.eu.org/en/page/what/#android-app
[XUMI Security]: https://xumi.ca/xumi-security/
[Fing App]: https://www.fing.com/products/fing-app
[FlutterHole]: https://github.com/sterrenburg/flutterhole
[1.1.1.1]: https://1.1.1.1/

