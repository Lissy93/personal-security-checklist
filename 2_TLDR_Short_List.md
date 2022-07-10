# Personal Cyber Security | TLDR [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)[![Contributors](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](/ATTRIBUTIONS.md#contributors-)

#### Contents
- [Personal Security Checklist](#personal-security-checklist)
- [Privacy-focused Software](#open-source-privacy-focused-software)
- [Security Hardware](#security-hardware)

## PERSONAL SECURITY CHECKLIST

> This checklist of privacy and security tips, is a summarized version of [The Complete Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md). It lays out the most essential steps you should take to protect your digital life.

### Authentication
- Use a long, strong and unique password for each of your accounts (see [HowSecureIsMyPassword.net](https://howsecureismypassword.net))
- Use a secure [password manager](https://github.com/Lissy93/awesome-privacy#password-managers), to encrypt, store and fill credentials, such as [BitWarden](https://bitwarden.com) or [KeePass](https://keepass.info) / [KeePassXC](https://keepassxc.org)
- Enable 2-Factor authentication where available, and use an [authenticator app](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) or [hardware token](/6_Privacy_and-Security_Gadgets.md#fido-u2f-keys)
- When you enable multi-factor authentication, you will usually be given several codes that you can use if your 2FA method is lost, broken or unavailable. You should store these on paper or in a safe place on disk (e.g. in offline storage or as in an encrypted file/drive).
- Sign up for breach alerts (with [Firefox Monitor](https://monitor.firefox.com) or [HaveIBeenPwned](https://haveibeenpwned.com)), and update passwords of compromised accounts


### Browsing
- Use a Privacy-Respecting Browser, [Brave](https://brave.com) and [Firefox](https://www.mozilla.org/en-US/exp/firefox/new) are good options. Set your default search to a non-tracking engine, such as [DuckDuckGo](https://duckduckgo.com)
- Do not enter any information on a non-HTTPS website (look for the lock icon). Firefox, Chrome, Edge and Safari now have integrated HTTPS security features; if you do not know if it's enabled, check out this [guide](https://www.eff.org/deeplinks/2021/09/https-actually-everywhere) to learn where to look.
- Block invasive 3rd-party trackers and ads using an extension like [Privacy Badger](https://privacybadger.org) or [uBlock](https://github.com/gorhill/uBlock)
- Keep your browser up-to-date, explore the privacy settings and remove unnecessary add-ons/ extensions
- Consider using compartmentalization to separate different areas of your browsing (such as work, social, shopping etc), in order to reduce tracking. This can be done with [Firefox Containers](https://support.mozilla.org/en-US/kb/containers), or by using separate browsers or browser profiles
- Don't allow your browser to save your passwords or auto-fill personal details (instead use a [password manager](https://github.com/Lissy93/awesome-privacy#password-managers), and [disable your browsers own auto-fill](https://www.computerhope.com/issues/ch001377.htm))
- Clear your cookies, session data and cache regularly. An extension such as [Cookie-Auto-Delete](https://github.com/Cookie-AutoDelete/Cookie-AutoDelete) can be used to automate this
- Don't sign into your browser, as it can link further data to your identity. If you need to, you can use an open source [bookmark sync](https://github.com/Lissy93/awesome-privacy#browser-sync) app
- Consider using [Decentraleyes](https://decentraleyes.org) to decrease the number of trackable CDN requests your device makes
- Test your browser using a tool like [Panopticlick](https://panopticlick.eff.org) to ensure there are no major issues. [BrowserLeaks](https://browserleaks.com) and [Am I Unique](https://amiunique.org/fp) are also useful for exploring what device info you are exposing to websites
- For anonymous browsing use [The Tor Browser](https://www.torproject.org/), and avoid logging into any of your personal accounts


### Phone
- Set a device PIN, ideally use a long passcode. If supported, configure fingerprint authentication, but avoid face unlock
- Encrypt your device, in order to keep your data safe from physical access. To enable, for Android: `Settings --> Security --> Encryption`, or for iOS: `Settings --> TouchID & Passcode --> Data Protection`
- Keep device up-to-date. System updates often contain patches for recently-discovered security vulnerabilities. You should install updates when prompted
- Review application permissions. Don't grant access permissions to apps that do not need it. (For Android, see also [Bouncer](https://play.google.com/store/apps/details?id=com.samruston.permission&hl=en_US) - an app that allows you to grant temporary permissions)
- Disable connectivity features that aren't being used, and 'forget' WiFi networks that you no longer need
- Disable location tracking. By default, both Android and iOS logs your GPS location history. You can disable this, for Android: `Maps --> Settings --> Location History`, and iOS: `Settings --> Privacy --> Location Services --> System Services --> Places`. Be aware that third-party apps may still log your position, and that there are other methods of determining your location other than GPS (Cell tower, WiFi, Bluetooth etc)
- Use an application firewall to block internet connectivity for apps that shouldn't need it. Such as [NetGuard](https://www.netguard.me/) (Android) or [Lockdown](https://apps.apple.com/in/app/lockdown-apps/id1469783711) (iOS)
- Understand that apps contain trackers that collect, store and sometimes share your data. For Android, you could use [Exodus](https://exodus-privacy.eu.org/en/page/what/) to reveal which trackers your installed apps are using.


### Email
It's important to protect your email account, as if a hacker gains access to it they will be able to pose as you, and reset the passwords for your other online accounts. One of the biggest threats to digital security is still phishing, and it can sometimes be incredibly convincing, so remain vigilant, and understand [how to spot malicious emails](https://heimdalsecurity.com/blog/abcs-detecting-preventing-phishing), and avoid publicly sharing your email address

- Use a long, strong and unique password and enable 2FA
- Consider switching to a secure and encrypted mail provider using, such as [ProtonMail](https://protonmail.com) or [Tutanota](https://tutanota.com)
- Use email aliasing to protect your real mail address, with a provider such as [Anonaddy](https://anonaddy.com) or [SimpleLogin](https://simplelogin.io/?slref=bridsqrgvrnavso). This allows you to keep your real address private, yet still have all messages land in your primary inbox
- Disable automatic loading of remote content, as it is often used for detailed tracking but can also be malicious
- Using a custom domain, will mean you will not lose access to your email address if your current provider disappears. If you need to back up messages, use a secure IMAP client [Thunderbird](https://www.thunderbird.net)


### Secure Messaging
- Use a [secure messaging app](https://github.com/Lissy93/awesome-privacy#encrypted-messaging) that is both fully open source and end-to-end encrypted with perfect forward secrecy (e.g. [Signal](https://www.signal.org/))
- Ensure that both your device, and that of your recipient(s) is secure (free from malware, encrypted and has a strong password)
- Disable cloud services, such as web app companion or cloud backup feature, both of which increases attack surface
- Strip meta data from media before sharing, as this can lead to unintentionally revealing more data than you intended
- Verify your recipient is who they claim to be, either physically or cryptographically by using an app that offers contact verification
- Avoid SMS, but if you must use it then encrypt your messages, e.g. using the [Silence](https://silence.im/) app
- Opt for a stable and actively maintained messaging platform, that is backed by reputable developers and have a transparent revenue model or are able to account for where funding has originated from. It should ideally be based in a friendly jurisdiction and have undergone an independent security audit. 
- In some situations, it may be appropriate to use an app that supports disappearing messages, and/ or allows for anonymous sign up (without any PII: phone number, email address etc). A [decentralized platform](https://github.com/Lissy93/awesome-privacy#p2p-messaging) can offer additional security and privacy benefits in some circumstances, as there is no single entity governing it, e.g. [Matrix](https://matrix.org/), [Session](https://getsession.org/), [Tox](https://tox.chat/) or [Briar](https://briarproject.org/)


### Networking
- Use a reputable VPN to keep your IP protected and reduce the amount of browsing data your ISP can log, but understand their [limitations](5_Privacy_Respecting_Software.md#word-of-warning-4).  Good options include [ProtonVPN](https://protonvpn.com) and [Mullvad](https://mullvad.net), see [thatoneprivacysite.net](https://thatoneprivacysite.net/) for detailed comparisons
- Change your routers default password. Anyone connected to your WiFi is able to listen to network traffic, so in order to prevent people you don't know from connecting, use WPA2 and set a strong password.
- Use a [secure DNS](https://github.com/Lissy93/awesome-privacy#dns) provider, (such as [Cloudflare's 1.1.1.1](https://1.1.1.1/dns/)) to reduce tracking. Ideally configure this on your router, but if that's not possible, then it can be done on each device. 


**📜 See More**: [The Complete Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md)

----


## OPEN-SOURCE, PRIVACY-FOCUSED SOFTWARE
Switch to alternative open-source, privacy-respecting apps and services, which won't collect your data, track you or show targetted ads.

#### Security
- Password Managers: [BitWarden] | [1Password] *(proprietary)* | [KeePassXC] *(offline)* | [LessPass] *(stateless)*
- 2-Factor Authentication: [Aegis] *(Android)* | [Authenticator] *(iOS)* | [AndOTP] *(Android)*
- File Encryption: [VeraCrypt] | [Cryptomator] *(for cloud)*
- Encrypted Messaging: [Signal] | [KeyBase] *(for groups/ communities)*
- Encrypted Email: [ProtonMail] | [MailFence] | [Tutanota] | (+ also [33Mail] | [anonaddy] for aliasing)
- Private Browsers: [Brave Browser] | [Firefox] *with [some tweaks](https://restoreprivacy.com/firefox-privacy/)* | [Tor]
- Non-Tracking Search Engines: [DuckDuckGo] | [StartPage] | [SearX] *(self-hosted)* | [Qwant]
- VPN: [Mullvad] | [ProtonVPN]  | [Windscribe] | [IVPN] *(better still, use [Tor] for anonimity)*. See also [VPN Warning Note]
- App Firewall: [NetGuard] (Android) | [Lockdown] (iOS) | [OpenSnitch] (Linux) | [LuLu] (MacOS)

#### Browser Extensions
- [Privacy Badger] - Blocks trackers.
- [HTTPS Everywhere] - Upgrades requests to HTTPS.
- [uBlock Origin] - Blocks ads, trackers and malwares.
- [ScriptSafe] - Block execution of certain scripts.
- [WebRTC Leak Prevent] - Prevents IP leaks.
- [Vanilla Cookie Manager] - Auto-removes unwanted cookies.
- [Privacy Essentials] - Shows which sites are insecure

#### Mobile Apps
- [Exodus] - Shows which trackers are on your device.
- [Orbot]- System-wide Tor Proxy.
- [Island] - Sand-box environment for apps.
- [NetGuard] - Controll which apps have network access.
- [Bouncer] - Grant temporary permissions.
- [Greenify] - Control which apps can run in the background.
- [1.1.1.1] - Use CloudFlare's DNS over HTTPS.
- [Fing App] - Monitor your home WiFi network for intruders

#### Online Tools
- [εxodus] - Shows which trackers an app has.
- [';--have i been pwned?] - Check if your details have been exposed in a breach.
- [EXIF Remover] - Removes meta data from image or file.
- [Redirect Detective] - Shows where link redirects to.
- [Virus Total] - Scans file or URL for malware.
- [Panopticlick], [Browser Leak Test] and [IP Leak Test] - Check for system and browser leaks

#### Productivity Tools
- File Storage: [NextCloud].
- File Sync: [Syncthing].
- File Drop: [FilePizza].
- Notes: [Standard Notes], [Cryptee], [Joplin].
- Blogging: [Write Freely].
- Calendar/ Contacts Sync: [ETE Sync]

📜 **See More**: [Complete List of Privacy-Respecting Sofware](https://github.com/Lissy93/awesome-privacy)

----

## SECURITY HARDWARE

There are also some gadgets that can help improve your physical and digital security.

- **Blockers & Shields**: [PortaPow] - USB Data Blocker | [Mic Block] - Physically disables microphone | [Silent-Pocket] - Signal-blocking faraday pouches | [Lindy] - Physical port blockers | [RFID Shields] | [Webcam Covers] | [Privacy Screen]
- **Crypto Wallets**: [Trezor] - Hardware wallet | [CryptoSteel] - Indestructible steel crypto wallet
- **FIDO U2F Keys**: [Solo Key] | [Nitro Key] | [Librem Key]
- **Data Blockers**: [PortaPow] - Blocks data to protect against malware upload attacks, enables FastCharge.
- **Hardware-encrypted storage**:  [iStorage]- PIN-authenticated 256-bit hardware encrypted storage | [Encrypted Drive Enclosure]
- **Networking**: [Anonabox] - Plug-and-play Tor router | [FingBox] - Easy home network automated security monitoring
- **Paranoid Gadgets!** [Orwl]- Self-destroying PC | [Hunter-Cat]- Card-skim detector | [Adversarial Fashion]- Anti-facial-recognition clothing | [DSTIKE Deauth Detector] - Detect deauth attacks, from [Spacehuhn] | [Reflectacles]- Anti-surveillance glasses | [Armourcard]- Active RFID jamming | [Bug-Detector]- Check for RF-enabled eavesdropping equipment | [Ultrasonic Microphone Jammer] - Emits signals that's silent to humans, but interfere with recording equipment.


There's no need to spend money - Most of these products can be made at home with open source software. Here's a list of [DIY Security Gadgets](/6_Privacy_and-Security_Gadgets.md#diy-security-products).

📜 **See More**: [Privacy and Security Gadgets](/6_Privacy_and-Security_Gadgets.md)

----

*Thanks for visiting, hope you found something useful here :) Contributions are welcome, and much appreciated - to propose an edit [raise an issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose), or [open a PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master). See: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md).*

----

Found this helpful? Consider sharing, to help others improve their digital security 😇

[![Share on Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=flat-square&logo=Twitter)](http://twitter.com/share?text=Check%20out%20the%20Personal%20Cyber%20Security%20Checklist-%20an%20ultimate%20list%20of%20tips%20for%20protecting%20your%20digital%20security%20and%20privacy%20in%202020%2C%20with%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![Share on LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=flat-square&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=https://github.com/Lissy93)
[![Share on Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=flat-square&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![Share on Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=flat-square&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Check%20out%20the%20Ultimate%20Personal%20Cyber%20Security%20Checklist%20by%20%40Lissy93%20on%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)





*Licensed under [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © [Alicia Sykes](https://aliciasykes.com) 2020*

<a href="https://twitter.com/intent/follow?screen_name=Lissy_Sykes">
  <img src="https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter" alt="Follow Alicia Sykes on Twitter">
</a>


[//]: # (SECURITY SOFTWARE LINKS)
[BitWarden]: https://bitwarden.com
[1Password]: https://1password.com
[KeePassXC]: https://keepassxc.org
[LessPass]: https://lesspass.com
[Aegis]: https://getaegis.app
[AndOTP]: https://github.com/andOTP/andOTP
[Authenticator]: https://mattrubin.me/authenticator
[VeraCrypt]: https://www.veracrypt.fr
[Cryptomator]: https://cryptomator.org
[Tor]: https://www.torproject.org
[Pi-Hole]: https://pi-hole.net
[Mullvad]: https://mullvad.net
[ProtonVPN]: https://protonvpn.com
[Windscribe]: https://windscribe.com/?affid=6nh59z1r
[IVPN]: https://www.ivpn.net
[NetGuard]: https://www.netguard.me
[Lockdown]: https://lockdownhq.com
[OpenSnitch]: https://github.com/evilsocket/opensnitch
[LuLu]: https://objective-see.com/products/lulu.html
[SimpleWall]: https://github.com/henrypp/simplewall
[33Mail]: http://33mail.com/Dg0gkEA
[anonaddy]: https://anonaddy.com
[Signal]: https://signal.org
[KeyBase]: https://keybase.io
[ProtonMail]: https://protonmail.com
[MailFence]: https://mailfence.com
[Tutanota]: https://tutanota.com
[Brave Browser]: https://brave.com/?ref=ali721
[Firefox]: https://www.mozilla.org/
[DuckDuckGo]: https://duckduckgo.com
[StartPage]: https://www.startpage.com
[Qwant]: https://www.qwant.com
[SearX]: https://asciimoo.github.io/searx

[VPN Warning Note]: https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_Respecting_Software.md#word-of-warning-8

[//]: # (PRODUCTIVITY SOFTWARE LINKS)
[NextCloud]: https://nextcloud.com
[Standard Notes]: https://standardnotes.org/?s=chelvq36
[Cryptee]: https://crypt.ee
[Joplin]: https://joplinapp.org
[ETE Sync]: https://www.etesync.com/accounts/signup/?referrer=QK6g
[FilePizza]: https://file.pizza/
[Syncthing]: https://syncthing.net
[Write Freely]: https://writefreely.org

[//]: # (BROWSER EXTENSION LINKS)
[Privacy Badger]: https://www.eff.org/privacybadger
[HTTPS Everywhere]: https://eff.org/https-everywhere
[uBlock Origin]: https://github.com/gorhill/uBlock
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

[//]: # (SECURITY HARDWARE LINKS)
[Encrypted Drive Enclosure]: https://www.startech.com/HDD/Enclosures/encrypted-sata-enclosure-2-5in-hdd-ssd-usb-3~S2510BU33PW
[iStorage]: https://istorage-uk.com
[PortaPow]: https://portablepowersupplies.co.uk/product/usb-data-blocker
[Lindy]: https://lindy.com/en/technology/port-blockers
[Mic Block]: https://www.aliexpress.com/item/4000542324471.html
[RFID Shields]: https://www.aliexpress.com/item/32976382478.html
[Webcam Covers]: https://www.aliexpress.com/item/4000393683866.html
[Privacy Screen]: https://www.aliexpress.com/item/32906889317.html
[Trezor]: https://trezor.io
[CryptoSteel]: https://cryptosteel.com/product/cryptosteel/?v=79cba1185463
[Solo Key]: https://solokeys.com
[Nitro Key]: https://www.nitrokey.com
[Librem Key]: https://puri.sm/products/librem-key
[Anonabox]: https://www.anonabox.com
[FingBox]: https://www.fing.com/products/fingbox
[Orwl]: https://orwl.org
[Hunter-Cat]: https://lab401.com/products/hunter-cat-card-skimmer-detector
[DSTIKE Deauth Detector]: https://www.tindie.com/products/lspoplove/dstike-deauth-detector-pre-flashed-with-detector
[Bug-Detector]: https://www.brickhousesecurity.com/counter-surveillance/multi-bug
[Ultrasonic Microphone Jammer]: https://uspystore.com/silent-ultrasonic-microphone-defeater
[Silent-Pocket]: https://silent-pocket.com
[Armourcard]: https://armourcard.com
[Adversarial Fashion]: https://adversarialfashion.com
[Reflectacles]: https://www.reflectacles.com
[Spacehuhn]: https://github.com/spacehuhn/DeauthDetector

