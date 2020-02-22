# Personal Security | TLDR [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)

- [Personal Security Checklist](#personal-security-checklist)
- [Privacy-focused Software](#open-source-privacy-focused-software)

## PERSONAL SECURITY CHECKLIST

> This is the shortened version of [The Complete Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md). 
It lays out the 20 most essential security + privacy tips, that you should complete to protect your digital life.


### ACCOUNT LOGINS
- Use strong, unique passphrases for each of your accounts (12+ alpha-numeric upper and lower-case letters + symbols). Avoid predicitable patterns, dictionary words and names.
- Use a password manager: It is going to be almost impossible to remember hundreds of unique passwords. A password manager will generate strong passwords, securly store and auto-fill them, with a browser extension and mobile app. All you will need to do, is remember 1 master password. [1Password](https://1password.com/) and [BitWarden](https://bitwarden.com/) are great password managers. [KeePass XC](https://keepassxc.org/) is more secure, but without any cloud-sync functionality.
- Use 2-factor authentication for all secure accounts (email, cloud storage, financial accounts and social media). You can do this with [Authy](https://authy.com/) which will also let you back up and sync your tokens across multiple devices. Or you can use [Aegis](https://getaegis.app/) or [AndOTP](https://github.com/andOTP/andOTP) which are both open source.
- Be cautious when logging into your accounts on someone elses device, as you cannot be sure that it is free of malware. If you do need to access one of your accounts, use incognito mode (Ctrl+Shift+N) so your credentials don't get cached.


### BROWSING
- Don't enter any personal details on websites that are not HTTPS
- Switch to [Firefox](https://www.mozilla.org/en-GB/firefox/new/) or [Brave Browser](https://brave.com/?ref=ali721), both of which have strong privacy and security configurations by default, and will also make loading websites faster. Consider using [Tor](https://www.torproject.org/) for the greatest privacy.
- Consider using search engine that doesn't track you, such as [DuckDuckGo](https://duckduckgo.com/) or [StartPage](https://www.startpage.com/), which show unbiased results and don't keep logs.
- Install [PrivacyBadger](https://www.eff.org/privacybadger) extension to block invisible trackers, and [HTTPS Everywhere](https://www.eff.org/https-everywhere) to force sites to load via HTTPS. You can use [Panopticlick](https://panopticlick.eff.org/) to quickly check if your browser is safe against tracking.


### PHONE
- Have a strong pin/ password on your mobile device.
- Turn of WiFi when your not using it, and delete saved networks that you no longer need (Settings --> WiFi --> Saved Networks).
- Don't grant apps permissions that they don't need. For Android, you can use [Exodus](https://exodus-privacy.eu.org/en/) to quickly see the permissions and trackers for each of your installed apps.


### EMAIL
- It's important to protect your email account, as if a hacker gains access to it they will be able to reset the passwords for all your other accounts. Ensure you have a strong and unique password, and enablle 2FA.
- Emails are not encrypted by default, meaning they are able to be read by anyone who intercepts them as well as your email provider (Google, Microsoft, Apple, Yahoo etc all monitor emails). Consider switching to a secure mail provider, such as [ProtonMail](https://protonmail.com/).


### NETWORKING
- Use a reputible VPN, to keep your IP protected, and reduce the amount of browsing data your ISP can log. (Note, VPN's do not provide ultimate protection as advertisers commonly state). See [thatoneprivacysite.net](https://thatoneprivacysite.net/) for a detailed comparison chart. [ProtonVPN](https://protonvpn.com/) has a free starter plan, [Mullvad](https://mullvad.net/) is great for anonimity. Other good all-rounders include [IVPN](https://www.ivpn.net/), NordVPN, TorGaurd and AirVPN.
- Change your routers default password. Anyone connected to your WiFi is able to listen to network traffic, so in order to prevent people you don't know from connecting, use WPA2 and set a strong password.
- Update your router settings to use a secure DNS, such as [Cloudflare's 1.1.1.1](https://1.1.1.1/dns/), this should also speed up your internet. If you cannot modify your roters settings, you can set the DNS on your phone (with the [1.1.1.1. app](https://1.1.1.1/)), or [Windows](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/windows/), [Mac](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/mac/) or [Linux](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/linux/). DNS is the system used to resolve URL's to their server addresses, many DNS providers collect data on your browsing habbits and use it to target you with ads or sell it on. 


### DEVICES
- Keep software up-to-date. Security fixes and patches are released as updates, so it is important to install updates when prompted, for your phone, PC, router, IoT devices and all software/ apps.

----


## OPEN-SOURCE, PRIVACY-FOCUSED SOFTWARE

Switch to alternative open-source, privacy-respecting apps and services, which won't collect your data, track you or show targetted ads

- Password Managers: [BitWarden] | [1Password] | [KeePassXC] *(offline, no-sync)*
- 2-Factor Authentication: [Aegis] *(Android)* | [Authenticator] *(iOS)* | [AndOTP] *(Android)*
- File Encryption: [VeraCrypt] | [Cryptomator] *(for cloud)*
- Encrypted Messaging: [Signal] | [KeyBase] *(for groups/ communities)*
- Encrypted Email: [ProtonMail] | [MailFence] | [Tutanota] | (+ also [33Mail] for aliasing)
- Private Browsers: [Brave Browser] | [Firefox] *with [some tweaks](https://restoreprivacy.com/firefox-privacy/)*
- Non-Tracking Search Engines: [DuckDuckGo] | [StartPage] | [SearX] *(self-hosted)* | [Quant]
- VPN: [Mullvad] | [ProtonVPN]  *(better still, use [Tor])*
- Mobile Firewall: [NetGuard] (Android) | [Lockdown] (iOS)

**Browser Extensions**: [Privacy Badger] - Blocks trackers. [HTTPS Everywhere] - Upgrates requests to HTTPS. [uBlock] - Blocks ads. [ScriptSafe] - Block execution of certain scripts. [WebRTC Leak Prevent] - Prevents IP leaks. [Vanilla Cookie Manager] - Auto-removes unwanted cookies. [Privacy Essentials] - Shows which sites are insecure

**Mobile Apps**: [Exodus] - Shows which trackers are on your device. [Orbot]- System-wide Tor Proxy. [Island] - Sand-box environment for apps. [NetGaurd] - Controll which apps have network access. [Bouncer] - Grant temporary permissions. [Greenify] - Controll which apps can run in the background. [1.1.1.1] - Use CloudFlares DNS over HTTPS. [Fing App] - Monitor your home WiFi network for intruders

**Online Tools**: [εxodus] - Shows which trackers an app has. [';--have i been pwned?] - Check if your details have been exposed in a breach. [EXIF Remover] - Removes meta data from image or file. [Redirect Detective] - Shows where link redirects to. [Virus Total] - Scans file or URL for malware. [Panopticlick], [Browser Leak Test] and [IP Leak Test] - Check for system and browser leaks

**Productivity Tools**: File Storage: [NextCloud]. File Sync: [Syncthing]. File Drop: [Firefox Send]. Notes: [Standard Notes], [Cryptee], [Joplin]. Blogging: [Write Freely]. Calendar/ Contacts Sync: [ETE Sync]

**See More**: [Complete List of Privacy-Respecing Sofware](https://github.com/Lissy93/personal-security-checklist/blob/master/6_Privacy_Respecting_Software.md)

[//]: # (SECURITY SOFTWARE LINKS)
[BitWarden]: https://bitwarden.com
[1Password]: https://1password.com
[KeePassXC]: https://keepassxc.org
[Aegis]: https://getaegis.app
[AndOTP]: https://github.com/andOTP/andOTP
[Authenticator]: https://mattrubin.me/authenticator
[VeraCrypt]: https://www.veracrypt.fr
[Cryptomator]: https://cryptomator.org
[Tor]: https://www.torproject.org
[Pi-Hole]: https://pi-hole.net
[Mullvad]: https://mullvad.net
[ProtonVPN]: https://protonvpn.com
[NetGuard]: https://www.netguard.me
[Lockdown]: https://lockdownhq.com
[33Mail]: http://33mail.com/Dg0gkEA
[Signal]: https://signal.org
[KeyBase]: https://keybase.io
[ProtonMail]: https://protonmail.com
[MailFence]: https://mailfence.com?src=digitald
[Tutanota]: https://tutanota.com
[Brave Browser]: https://brave.com/?ref=ali721
[Firefox]: https://www.mozilla.org/en-GB/firefox/browsers
[DuckDuckGo]: https://duckduckgo.com
[StartPage]: https://www.startpage.com
[Quant]: https://www.qwant.com
[SearX]: https://asciimoo.github.io/searx

[//]: # (PRODUCTIVITY SOFTWARE LINKS)
[NextCloud]: https://nextcloud.com
[Standard Notes]: https://standardnotes.org/?s=chelvq36
[Cryptee]: https://crypt.ee
[Joplin]: https://joplinapp.org
[ETE Sync]: https://www.etesync.com/accounts/signup/?referrer=QK6g
[Firefox Send]: https://send.firefox.com
[Syncthing]: https://syncthing.net
[Write Freely]: https://writefreely.org

[//]: # (BROWSER EXTENSION LINKS)
[Privacy Badger]: https://www.eff.org/privacybadger
[HTTPS Everywhere]: https://eff.org/https-everywhere
[uBlock]: https://github.com/gorhill/uBlock
[ScriptSafe]: https://github.com/andryou/scriptsafe
[WebRTC Leak Prevent]: https://github.com/aghorler/WebRTC-Leak-Prevent
[Vanilla Cookie Manager]: https://github.com/laktak/vanilla-chrome
[Privacy Essentials]: https://duckduckgo.com/app

[//]: # (ONLINE SECURITY TOOLS)
[';--have i been pwned?]: https://haveibeenpwned.com
[εxodus]: https://reports.exodus-privacy.eu.org
[Panopticlick]: https://panopticlick.eff.org
[Browser Leak Test]: https://browserleaks.com
[IP Leak Test]: https://ipleak.net
[EXIF Remover]: https://www.exifremove.com
[Redirect Detective]: https://redirectdetective.com
[Virus Total]: https://www.virustotal.com

[//]: # (ANDROID APP LINKS)
[Island]: https://play.google.com/store/apps/details?id=com.oasisfeng.island
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
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
[Haven]: https://play.google.com/store/apps/details?id=org.havenapp.main
[NetGaurd]: https://www.netguard.me/
[Exodus]: https://exodus-privacy.eu.org/en/page/what/#android-app
[XUMI Security]: https://xumi.ca/xumi-security/
[Fing App]: https://www.fing.com/products/fing-app
[FlutterHole]: https://github.com/sterrenburg/flutterhole
[1.1.1.1]: https://1.1.1.1/
[The Guardian Project]: https://play.google.com/store/apps/dev?id=6502754515281796553
[The Tor Project]: https://play.google.com/store/apps/developer?id=The+Tor+Project
[Oasis Feng]: https://play.google.com/store/apps/dev?id=7664242523989527886
[Marcel Bokhorst]: https://play.google.com/store/apps/dev?id=8420080860664580239
