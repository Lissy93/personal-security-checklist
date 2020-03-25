[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)

# Privacy & Security-Focused Software and Services
A curated list of privacy-respecting apps, software, and providers 🔐

**Too long? 🦒** See the [TLDR version](/2_TLDR_Short_List.md#open-source-privacy-focused-software) instead.

[⏬ Skip to Content ⏬](#password-managers)

---

## Intro

Large data-hungry corporations dominate the digital world but with little, or no respect for your privacy.
Migrating to open-source applications with a strong emphasis on security will help stop
corporations, governments, and hackers from logging, storing or selling your personal data.

Be aware that no software is perfect- there will always be bugs and vulnerabilities. Also, applications can only as secure as the system they are running on. You keep your system up-to-date and [follow good security practices](https://github.com/Lissy93/personal-security-checklist).

### Categories

- **Basics**
  - [Password Managers](#password-managers)
  - [2-Factor Authentication](#2-factor-authentication)
  - [File Encryption](#file-encryption)
  - [Encrypted Messaging](#encrypted-messaging)
  - [P2P Messaging](#p2p-messaging)
  - [Encrypted Email](#encrypted-email)
  - [Private Browsers](#browsers)
  - [Non-Tracking Search Engines](#search-engines)
- **Security**
  - [Browser Extensions](#browser-extensions)
  - [Mobile Apps](#mobile-apps)
  - [Online Tools](#online-tools)
- **Networking**
  - [Virtual Private Networks](#virtual-private-networks)
  - [Self-Hosted Network Security](#self-hosted-network-security)
  - [Mix Networks](#mix-networks)
  - [Proxies](#proxies)
  - [DNS Providers](#dns)
  - [Firewalls](#firewalls)
  - [Firewall Analysis](#firewall-analysis)
  - [Cloud Hosting](#cloud-hosting)
  - [Domain Registrars](#domain-registrars)
- **Productivity**
  - [Digital Notes](#digital-notes)
  - [Cloud Productivity Suits](#cloud-productivity-suits)
  - [Backup and Sync](#backup-and-sync)
  - [File Drop](#file-drop)
- **Social**
  - [Social Networks](#social-networks)
  - [Video Platforms](#video-platforms)
  - [Blogging Platforms](#blogging-platforms)
  - [News Readers](#news-readers-and-aggregation)
- **Operating Systems**
  - [Mobile Operating Systems](#mobile-operating-systems)
  - [PC Operating Systems](#pc-operating-systems)
  - [Windows Defences](#windows-defences)
  - [Mac OS Defences](#mac-os-defences)
- **Home/ IoT**
  - [Home Automation](#home-automation)
  - [Voice Assistants](#ai-voice-assistants)
- **Misc**
  - [Payment Methods](#payment-methods)
- **Bonus**
  - [Alternatives to Google](#bonus-1---alternatives-to-google)
  - [Self-Hosted Services](#bonus-2---self-hosted-services)
  - [Self-Hosted Sys-Admin](#bonus-3---self-hosted-sysadmin)
  - [Self-Hosted Dev Tools](#bonus-4---self-hosted-development-tools)
- **See Also**
  - [Personal Security Checklist](/README.md)
  - [Gadgets for Privacy & Security](/6_Privacy_and-Security_Gadgets.md)
  - [The Importance of Digital Security & Privacy](/0_Why_It_Matters.md)
  - [Further Links: Privacy & Security](/4_Privacy_And_Security_Links.md)


## Password Managers

| Provider | Description |
| --- | --- |
**[BitWarden](https://bitwarden.com)**  | Fully-featured, open source password manager with cloud-sync. BitWarden is easy-to-use with a clean UI and client apps for desktop, web and mobile.
**[KeePass](https://keepass.info)** | Hardened open source, secure password manager, without cloud-sync capabilities. See also [KeePassXC](https://keepassxc.org), [KeePassX](https://www.keepassx.org) and [KeePass Web](https://keeweb.info) which are popular community forks of KeePass, with additional features and UI refinements
**[LessPass](https://lesspass.com)** *(Self-Hosted)* | LessPass is a little different, since it generates your passwords using a hash of the website name, your username and a single master-passphrase that you reuse. It omits the need for you to ever need to store or sync your passwords. They have apps for all the common platforms and a CLI, but you can also self-host it.
**[1Password](https://1password.com)** | Fully-featured cross-platform password manager with sync. Free for self-hosted data (or $3/ month hosted). Be aware that 1Password is not fully open source, but they do regularly publish results of their indepentand security [audits](https://support.1password.com/security-assessments)

#### Notable Mentions

[Passbolt](https://www.passbolt.com), [Buttercup](https://buttercup.pw), [Firefox Loxkwise](https://www.mozilla.org/en-US/firefox/lockwise), [Clipperz](https://clipperz.is), [Password Safe](https://pwsafe.org), [Pass](https://www.passwordstore.org), [Encryptr](https://spideroak.com/encryptr), [Padloc](https://padloc.app), [TeamPass](https://teampass.net), [PSONO](https://psono.com), [UPM](http://upm.sourceforge.net), [Gorilla](https://github.com/zdia/gorilla/wiki), [Pass](https://www.passwordstore.org) (UNIX), [Seahorse](https://gitlab.gnome.org/GNOME/seahorse) (for GNOME), [GNOME Keyring](https://wiki.gnome.org/Projects/GnomeKeyring), [KDE Wallet Manager](https://userbase.kde.org/KDE_Wallet_Manager).

If you are using a depricated PM, you should migrate to something activley maintained. This includes: [Mitro](https://www.mitro.co), [Rattic](https://spideroak.com/encryptr), [JPasswords](http://jpws.sourceforge.net/jpasswords.html), [Passopolis](https://passopolis.com), [KYPS](https://en.wikipedia.org/wiki/KYPS), [Factotum](http://man.9front.org/4/factotum).

Choose an open source option if possible. Use a very strong master password.

**See also** [Password Management Checklist](/README.md#passwords)


## 2-Factor Authentication

| Provider | Description |
| --- | --- |
**[Aegis](https://getaegis.app)**  | Free, secure and open source app for managing 2-step verification tokens, on Android
**[AndOTP](https://github.com/andOTP/andOTP)** | Another open source, secure authenticator app. AndOTP is well established with a strong large user base

*Check which websites support multi-factor authentication: [twofactorauth.org](https://twofactorauth.org)*

**Note:** Don't use your password manager to also store your 2-FA tokens- use a separate application.


## File Encryption

| Provider | Description |
| --- | --- |
**[VeraCrypt](https://www.veracrypt.fr)** | VeraCrypt is open source cross-platform disk encryption software. You can use it to either encrypt a specific file or directory, or an entire disk or partition. VeraCrypt is incredibly feature-rich, with comprehnsive encryption options, yet the GUI makes it easy to use. It has a CLI version, and a portable eddition. VeraCrypt is the successor of (the now depricated) TrueCrypt.
**[Cryptomator](https://cryptomator.org)** | Open source client-side encryption for cloud files- Cryptomator is geared towards using alongside cloud-backup solutions, and hence preserves individual file structure, so that they can be uploaded. It too is easy to use, but has fewer technical customizations for how the data is encrypted, compared with VeraCrypt. Cryptomator works on Windows, Linux and Mac- but also has excellant mobile apps.

If you need to create a compressed archive, prior to encrypting your files, then [PeaZip](https://www.peazip.org/) is a great little cross-platform open source file archiver utility. It allows you to create, open, and extract RAR TAR ZIP archives.


## Encrypted Messaging

Without using a secure app for instant messaging, all your conversations, meta data and more is unprotected. Signal one of the best options- it's easy, yet also highly secure and privacy-centric.

| Provider | Description |
| --- | --- |
**[Signal](https://signal.org/)** | Probably one of the most popular, secure private messaging apps that combines strong encryption (see [Signal Protocol](https://en.wikipedia.org/wiki/Signal_Protocol)) with a simple UI and plenty of features. It's widely used across the world, and easy-to-use, functioning similar to WhatsApp - with instant messaging, read-receipts, support for media attachments and allows for high-quality voice and video calls. It's cross-platform, open-source and totally free. Signal is [recommended](https://twitter.com/Snowden/status/661313394906161152) by Edward Snowden, and is a perfect solution for most users
**[KeyBase](keybase.io/inv/6d7deedbc1)** | KeyBase allows encrypted real-time chat, group chats, and public and private file sharing. It also lets you cryptographically sign messages, and prove your ownership to other social identities (Twitter, Reddit, GitHub, etc), and send or receive Stella or BitCoin to other users. It's slightly more complex to use than Signal, but has some great cryptography features, and is good for group chats
**[Silence](https://silence.im/)** | If you're restricted to only sending SMS/MMS, then Silence makes it easy to encrypt messages between 2 devices. This is important since traditional text messaging is inherently insecure. It's easy-to-use, reliable and secure- but has fallen in popularity, now that internet-based messaging is often faster and more flexible
**[OpenPGP](https://www.openpgp.org/)** |  Provides cryptographic privacy and authentication, PGP is used to encrypt messages sent over existing chat networks (such as email or message boards). Slightly harder to use (than IM apps), slower, but still widley used. Using [GnuPG](https://gnupg.org/download/index.html), encrypts messages following the OpenPGP standard, defined by the IETF, proposed in [RFC 4880](https://tools.ietf.org/html/rfc4880) (originally derived from the PGP software, created by Phil Zimmermann, now owned by [Symantec](https://www.symantec.com/products/encryption)). **Note**  there have been vulnrabilities found in the OpenPGP and S/MIME, defined in [EFAIL](https://efail.de/), so althogh it still considered secure for general purpose use, it may be better to use an encrypted messaging or email app instead- especially for sensetive communications.

#### Other Notable Mentions
[Chat Secure](https://chatsecure.org/) and [Status](https://status.im/), are private, encrypted, open source messenger apps. They are both still in early stages, so were'nt included in the main list. Note that [Tor Messenger](https://blog.torproject.org/category/tags/tor-messenger)s been removed from the list, since development has halted.

#### Word of Warning: Proprietary Messaging Platforms
Many messaging apps claim to be secure, but if they are not open source, then this cannot be verified- and they **should not be trusted**. This applies to [Telegram](https://telegram.org), [Threema](https://threema.ch), [Cypher](https://www.goldenfrog.com/cyphr), [Wickr](https://wickr.com/), [Silent Phone](https://www.silentcircle.com/products-and-solutions/silent-phone/) and [Viber](https://www.viber.com/), to name a few- these apps should not be used to communicate any sensitive data.

## P2P Messaging

With [Peer-to-Peer](https://en.wikipedia.org/wiki/Peer-to-peer) networks, there are no central server, so there is nothing that can be raided, shut-down or forced to turn over data. There are P2P networks available that are open source, E2E encrypted, routed through Tor services, totally anonymous and operate without the collection of meta data.

| Provider | Description |
| --- | --- |
**[Session](https://getsession.org)** + **[LokiNet](https://loki.network)** client | Loki is an open source set of tools that allow users to transact and communicate anonymously and privately, though a decentralised, encrypted, onion-based network. Session is a desktop and mobile app that uses these private routing protocols to secure messages, media and metadata.
**[Briar](https://briarproject.org)** | Tor-based Android app for P2P encrypted messaging and forums. Where content is stored securely on your device (not in the cloud). It also allows you to connect directly with nearby contacts, without internet access (using Bluetooth or WiFi).
**[Matrix](https://matrix.org)** + **[Riot](https://about.riot.im)** client | Matrix is a decentralized open network for secure communications, with E2E encryption with Olm and Megolm. Along with the Riot client, it supports VOIP + video calling and IM + group chats. Since Matrix has an open specification and Simple pragmatic RESTful HTTP/JSON API it makes it easy to integrates with existing 3rd party IDs to authenticate and discover users, as well as to build apps on top of it.
**[Riochet](https://ricochet.im)** | Desktop instant messenger, that uses the Tor network to rendezvous with your contacts without revealing your identity, location/ IP or meta data. There are no servers to monitor, censor, or hack so Ricochet is secure, automatic and easy to use.
**[Jami](https://jami.net)** | P2P encrypted chat network with cross-platform GNU client apps. Jami supports audio and vidio calls, screen sharing, conference hosting and instant messaging.
**[Tox](https://tox.chat)** + **[qTox](https://qtox.github.io)** client | Open source, encrypted, distributed chat network, with clients for desktop and mobile- see [supported clients](https://tox.chat/clients.html). Clearly documented code and multiple language bindings make it easy for developers to integrate with Tox.

#### Other Notable Mentions
[Cwtch](https://cwtch.im), [BitMessage](https://github.com/Bitmessage/PyBitmessage), [Tor Messenger](https://blog.torproject.org/sunsetting-tor-messenger) *(deprecated)*, [TorChat2](https://github.com/prof7bit/TorChat) *(deprecated)*


## Encrypted Email

Email, is not secure- your messages can be easily intercepted and read. Coporations scan the content of your mail, to build up a profile of you, either to show you targeted ads or to sell onto third-parties. Through the [Prism Program](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)), the government also has full access to the plain text and meta data of all sent and received emails. This applies to Gmail, Outlook Mail, Yahoo Mail, GMX, ZoHo, iCloud, AOL and more.

The below email providers are private, encrypted and safe

| Provider | Description |
| --- | --- |
**[ProtonMail](https://protonmail.com/)** | An open-source, end-to-end encrypted anonymous email service. ProtonMail has a modern easy-to-use and customizable UI, as well as fast, secure native mobile apps. ProtonMail has all the features that you'd expect from a modern email service and is based on simplicity without sacrificing security. It has a free plan or a premium option for using custom domains. ProtonMail requires no personally identifiable information for signup, they have a [.onion](https://protonirockerxow.onion) server, for access via Tor, and they accept anonymous payment: BTC and cash (as well as the normal credit card and PayPal).
**[Tutanota](https://tutanota.com/)** | Free and open source email service based in Germany. It has a basic intuitive UI, secure native mobile apps, anonymous signup, and a .onion site. Tutonota has a full-featured free plan or a premium subscription for businesses allowing for custom domains ($12/ month).
**[Mailfence](https://mailfence.com?src=digitald)** | Mailfence supports OpenPGP so that you can manually exchange encryption keys independently from the Mailfence servers, putting you in full control. Mailfence has a simple UI, similar to that of Outlook, and it comes with bundled with calendar, address book, and files. All mail settings are highly customizable, yet still clear and easy to use. Sign up is not anonymous, since your name, and prior email address is required. There is a fully-featured free plan, or you can pay for premium, and use a custom domain ($2.50/ month, or $7.50/ month for 5 domains), where BitCoin, LiteCoin or credit card is accepted.

See [OpenTechFund- Secure Email](https://github.com/OpenTechFund/secure-email) for more details.


#### Other Notable Mentions
[HushMail](https://www.hushmail.com/tapfiliate/?tap_a=44784-d2adc0&tap_s=724845-260ce4&program=hushmail-for-small-business), [StartMail](https://www.startmail.com), [Kolab Now](https://kolabnow.com), [Posteo](https://posteo.de), and [Disroot](https://disroot.org/en)

#### Alias Services
Revealing your real email address online can put you at risk. Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in your primary inbox. This protects your real email address from being revealed. Aliases are generated automatically, the first time they are used. This approach lets you identify which provider leaked your email address, and block an alias with 1-click.

- **[Anonaddy](https://anonaddy.com)** - An open source anonymous email forwarding service, allowing you to create unlimited email aliases. Has a free plan.
- **[33Mail](http://33mail.com/Dg0gkEA)** - A long-standing aliasing service. As well as recieving, 33Mail also lets you reply to forwarded addresses anonymously. Free plan, as well as Premium plan ($1/ month) if you'd like to use a custom domain 
- **[ProtonMail](https://protonmail.com/pricing) Visionary** - If you already have ProtonMail's Visionary package, then an implementation of this feature is available. However not the most price-effective, and does not include dashboard

Alternativley you could host your own service


#### Self-Hosted Email
If you do not want to trust an email provider with your messages, you can host your own mail server. Without experience, this can be notoriously hard to correctly configure, especially when it comes to security. You may also find that cost, performance and features make it a less attractive optrion. If you do decide to go down this route, [Mail-in-a-box](https://mailinabox.email/), is an easy to deploy, open source mail server. It aims to promote decentralization, innovation, and privacy on the web, as well as have automated, auditable, and idempotent system configuration. Other ready-to-go self-hosted mail options include [Mailu](https://mailu.io/1.7/) and [Mail Cow](https://mailcow.email/), both of which are docker containers.

#### Mail Clients
Email clients are the programs used to interact with the mail server. For hosted email, then the web and mobile clients provided by your email service are usually adequate, and may be the most secure option. For self-hosted email, you will need to install and configure mail clients for web, desktop or mobile.

- **Desktop** - [Mozilla Thunderbird](https://www.thunderbird.net) is an open source, highly customizable, secure and private desktop email client, for Windows, macOS, and Linux. If you are using ProtonMail, then you can use the [ProtonMail Bridge](https://protonmail.com/bridge/thunderbird), to sync your emails to either Thunderbird or Microsoft Outlook. In terms of security, the disadvantage, is that most desktop clients do not support 2FA, so it is important to keep your computer secured, however they are not vulnrable to the common browser attacks, that a web client would be. 
- **Web** - If you are self-hosting your mail server, you will probably want a web-based email client. [RainLoop](http://www.rainloop.net) and [RoundCube](https://roundcube.net) are both good open source options.
- **Mobile** - the most secure option is usually to use the app provided by your mail provider. If your mail server is self-hosted, then consider [FairMail](https://email.faircode.eu/) which is a fully featured, open source, privacy oriented email app for Android. There is also [pretty Easy privacy p≡p](https://play.google.com/store/apps/details?id=security.pEp), which has OpenPGP built in. [K-9 Mail](https://play.google.com/store/apps/details?id=com.fsck.k9), which has been around almost as long as Android, has a solid reputation for privacy and security features.


## Browsers

| Provider | Description |
| --- | --- |
**[Brave Browser](https://brave.com/?ref=ali721)** | Brave Browser, currently one of the most popular private browsers- it provides speed, security, and privacy by blocking trackers with a clean, yet fully-featured UI. It also pays you in [BAT tokens](https://basicattentiontoken.org/) for using it. Brave also has Tor built-in, when you open up a private tab/ window.
**[FireFox](https://www.mozilla.org/firefox)** | Significantly more private, and offers some nifty privacy features than Chrome, Internet Explorer and Safari. After installing, there are a couple of small tweaks you will need to make, in order to secure Firefox. You can follow one of these guides by: [Restore Privacy](https://restoreprivacy.com/firefox-privacy/), [Security Gladiators](https://securitygladiators.com/firefox-privacy-tips/) or [12Bytes](https://12bytes.org/7750)
**[Bromite](https://www.bromite.org/)** | Bromite is Chromium (Chrome without Google) plus ad blocking and enhanced privacy. It provides a no-clutter browsing experience without privacy-invasive features- it's lightweight and minimal
**[Tor Browser](https://www.torproject.org/)** | Tor provides an extra layer of anonymity, by encrypting each of your requests, then routing it through several nodes, making it near-impossible for you to be tracked by your ISP/ provider. It does make every-day browsing a little slower, and some sites may not work correctly. As with everything there are [trade-offs](https://github.com/Lissy93/personal-security-checklist/issues/19)

See also: [Recommended Browser Extensions](#browser-extensions)


## Search Engines

Google frequently modifies and manipulates search, and is in persuit of eliminating competition and promoting their own services above others. They also track, collect, use and sell detailed user search and meta data.

| Provider | Description |
| --- | --- |
**[DuckDuckGo](https://duckduckgo.com/)** | DuckDuckGo is a very user-friendly, fast and secure search engine. It's totally private, with no trackers, cookies or ads. It's also highly customisable, with dark-mode, many languages and features. They even have a [.onion](https://3g2upl4pq6kufc4m.onion ) URL, for use with Tor.
**[Qwant](https://www.qwant.com/)** | French service that aggregates Bings results, with it's own results. Quant doesn't plant any cookies, nor have any trackers or third-party advertising. It returns non-biased search results, with no promotions. Quant has a uinique, but nice UI

Another option would be to host your own- [Searx](https://asciimoo.github.io/searx/) is a good option for self-hosting, since it is easy to set-up, secure, private and is backed by a strong community



## Browser Extensions

The following browser add-ons give you better control over what content is able to be loaded and executed while your browsing.

| Provider | Description |
| --- | --- |
**[Privacy Badger](https://www.eff.org/privacybadger)** | Blocks invisible trackers, in order to stop advertisers and other third-parties from secretly tracking where you go and what pages you look at. **Download**: [Chrome][privacy-badger-chrome] \ [Firefox][privacy-badger-firefox]
**[HTTPS Everywhere](https://eff.org/https-everywhere)** | Forces sites to load in HTTPS, in order to encrypt your communications with websites, making your browsing more secure. **Download**: [Chrome][https-everywhere-chrome] \ [Firefox][https-everywhere-firefox]
**[uBlock Origin](https://github.com/gorhill/uBlock)** | Blocks ads, because ads track you. **Download**: [Chrome][ublock-chrome] \ [Firefox][ublock-firefox]
**[ScriptSafe](https://github.com/andryou/scriptsafe)** | Allows you yo block the execution of certain scripts. **Download**: [Chrome][script-safe-chrome] \ [Firefox][script-safe-firefox]
**[WebRTC-Leak-Prevent](https://github.com/aghorler/WebRTC-Leak-Prevent)** | Provides user control over WebRTC privacy settings in Chromium, in order to prevent WebRTC leaks. **Download**: [Chrome][web-rtc-chrome]. For Firefox users, you can do this through [browser settings](https://www.privacytools.io/browsers/#webrtc). Test for WebRTC leaks, with [browserleaks.com/webrtc](https://browserleaks.com/webrtc)
**[Vanilla Cookie Manager](https://github.com/laktak/vanilla-chrome)** | A Whitelist Manager that helps protect your privacy, through automatically removing unwanted cookies. **Download**: [Chrome][vanilla-cookie-chrome]
**[Privacy Essentials](https://duckduckgo.com/app)** | Simple extension by DuckDuckGo, which grades the security of each site. **Download**: [Chrome][privacy-essentials-chrome] \ [Firefox][privacy-essentials-firefox]
**[Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)** | Firefox Multi-Account Containers lets you keep parts of your online life separated into color-coded tabs that preserve your privacy. Cookies are separated by container, allowing you to use the web with multiple identities or accounts simultaneously. **Download**: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/)
**[Temporary Containers](https://github.com/stoically/temporary-containers)** | This Extension, combined with Firefox Multi-Account Containers, let's you isolate cookies and other private data for each web site. **Download**: [Firefox](https://github.com/stoically/temporary-containers)

#### Word of Warning
*Be careful when installing unfamiliar browser add-ons, since some can compromise your security and privacy. The above list however are all open source, verified and safe extensions*


## Mobile Apps

| Provider | Description |
| --- | --- |
**[Orbot]** | System-wide Tor proxy, which encrypts your connection through multiple nodes. You can also use it alongside [Tor Browser] to access .onion sites
**[NetGaurd]** | A firewall app for Android, which does not require root. NetGuard provides simple and advanced ways to block access to the internet, where applications and addresses can individually be allowed or denied access to your Wi-Fi and/or mobile connection
**[Island]** | A sandbox environment, allowing you to clone selected apps and run them in an isolated box, preventing it from accessing your personal data, or devicce information
**[Exodus]** | Shows which trackers, each of your installed apps is using, so that you can better understand how your data is being collected. Uses data from the  Exodus database of scanned APKs.
**[Bouncer]** | Gives you the ability to grant permissions temporarily, so that you could for example use the camera to take a profile picture, but when you close the given app, those permissions will be revoked
**[Haven]** | Allows you to protect yourself, your personal space and your posessions- without compromising on security. Leveraging device sensors to monitor nearby space, Haven was developed by [The Guardian Project](https://guardianproject.info/), in partnership with [Edward Snowden](https://techcrunch.com/2017/12/24/edward-snowden-haven-app/)
**[XUMI Security]** |  Checks for, and resolves known security vulnerabilities. Useful to ensure that certain apps, or device settings are not putting your security or privacy at risk
**[SuperFreezZ]** | Makes it possible to entirely freeze all background activities on a per-app basis. Intended purpose is to to speed up your phone, and prolong battery life, but this app is also a great utility to stop certain apps from collecting data and tracking your actions while running in the background
**[Daedalus]** | No root required Android DNS modifier and hosts/DNSMasq resolver, works by creating a VPN tunnel to modify the DNS settings. Useful if you want to change your resolver to a more secure/ private provider, or use DNS over HTTPS
**[Secure Task]** | Triggers actions, when certain security conditions are met, such as multiple failed login attempts or monitor settings changed. It does require [Tasker], and needs to be set up with ADB, device does not need to be rooted
**[Cryptomator]** | Encryptes files and folders client-side, before uploading them to cloud storage (such as Google Drive, One Drive or Dropbox), meaning none of your personal documents leave your device in plain text
**[1.1.1.1]** | Lets you use CloudFlares fast and secure 1.1.1.1 DNS, with DNS over HTTPS, and also has the option to enable CloudFlares WARP+ VPN
**[Fing App]** | A network scanner to help you monitor and secure your WiFi network. The app is totally free, but to use the advanced controlls, you will need a [Fing Box](https://amzn.to/2vFDF4n)
**[FlutterHole]** | Easy monitoring and controll over your [Pi Hole](https://pi-hole.net/) instance. Pi Hole is great for security, privacy and speed
**[DPI Tunnel](https://github.com/zhenyolka/DPITunnel)** | An application for Android that uses various techniques to bypass DPI (Deep Packet Inspection) systems, which are used to block some sites (not availible on Play store)
**[Blokada](https://blokada.org/)** | This application blocks ads and trackers, doesn't require root and works for all the apps on your Android phone. Check out how it works [here](https://block.blokada.org/post/2018/06/17/how-does-blokada-work/).

#### Other Notable Mentions
For more open source security & privacy apps, check out [The Guardian Project], [The Tor Project], [Oasis Feng] and [Marcel Bokhorst]- all of which are trusted developers or organisations, who've done amazing work.

For *advanced* users, the following tools can be used to closely monitor your devise and networks, in order to detect any unusual activity. [PortDroid] for network analysis, [Packet Capture] to monitor network traffic, [SysLog] for viewing system logs, [Dexplorer] to read .dex or .apk files for your installed apps, and [Check and Test] to check status and details of devices hardware.

For offensive and defensive security applications, see [The Nethunter Catalogue](https://store.nethunter.com/en/packages)


## Online Tools

A selection of free online tools and utilities, to check, test and protect

| Provider | Description |
| --- | --- |
**[';--have i been pwned?](https://haveibeenpwned.com)** | Check if your credentials (Email address or Password) have been compromised in a data breach
**[εxodus](https://reports.exodus-privacy.eu.org)** | Check how many, and which trackers any Android app has. Useful to understand how data is being collected before you install a certain APK, it also shows which permssions the app asks for
**[Panopticlick](https://panopticlick.eff.org/)** | Check if your browser safe against tracking. Analyzes how well your browser and add-ons protect you against online tracking techniques, and if your system is uniquely configured—and thus identifiable
**[Browser Leak Test](https://browserleaks.com)** | Shows which of personal identity data is being leaked through your browser, so you can better protect yourself against fingerprinting
**[IP Leak Test](https://ipleak.net)** | Shows your IP address, and other associated details (location, ISP, WebRTC check, DNS, and lots more)
**[EXIF Remove](https://www.exifremove.com)** | Displays, and removes Meta and EXIF data from an uploaded photo or document
**[Redirect Detective](https://redirectdetective.com)** | Check where a suspicious URL redirects to (without having to click it). Lets you avoid being tracked by not being redirected via adware/tracking sites, or see if a shortened link  actually resolves a legitimate site, or see if link is an affiliate ad
**[Blocked.org](https://www.blocked.org.uk)** | Checks if a given website is blocked by filters applied by your mobile and broadband Internet Service Providers (ISP)
**[Virus Total](https://www.virustotal.com)** | Analyse a potentially-suspicious web resources (by URL, IP, domain or file hash) to detect types of malware (*note: files are scanned publicly*)
**[Is Legit?](https://www.islegitsite.com/)** | Check if a website or business is a scam, before buying something from it
**[Deseat Me](https://www.deseat.me)** | Tool to help you clean up your online presence- Instantly get a list of all your accounts, delete the ones you are not using
**[10 Minute Mail](https://10minemail.com/)** | Generate temporary disposable email address, to avoid giving your real details
**[33Mail](http://33mail.com/Dg0gkEA)** | Automatically generates new email alliases, the first time you use them, to avoid revealing your real email address. Unlike 10 Minute Mail, these email addresses are permant, and get forwarded to your real email inbox

#### Word of Warning
*Browsers are inherintly insecure, be careful when uploading, or entering personal details*


## Virtual Private Networks

VPNs are good for getting round censorship, increasing protection on public WiFi, obscuring your IP address, and reducing what data your ISP can log. But for the most anonymity, you should use [Tor](https://www.torproject.org/). VPNs do not mean you are automatically protected, or anonymous (see below). 

| Provider | Description |
| --- | --- |
**[Mullvad](http://mullvad.net/en/)** | Mullvad is one of the best for privacy, they own all their own servers and have a totally anonymous sign up process, you don't need to provide any details at all, you can choose to pay annonymously too (with Monero, BTC or cash)
**[ProtonVPN](https://protonvpn.com/)** | From the creators of ProtonMail, ProtonVPN has a solid reputation. They have a full suit of user-friendly native mobile and desktop apps. ProtonVPN is one of the few "trustworthy" providers that also offer a free plan


#### Other VPN Options

[AirVPN](https://airvpn.org) has advanced fatures and is highly customizable, [WindScribe](https://windscribe.com/?affid=6nh59z1r) also has a ton of features as well as anonymous sign up, yet is very easy to use for all audiences with excellant cross-platform apps. See also:
[Perfect Privacy](https://www.perfect-privacy.com/en/features?a_aid=securitychecklist) -- [TorGuard](https://torguard.net/aff.php?aff=6024) -- [IVPN](https://www.ivpn.net/) -- [PureVPN](https://www.anrdoezrs.net/click-9242873-13842740) -- [NordVPN](https://www.kqzyfj.com/l5115shqnhp4E797DC8467D69A6D) -- [SwitchVPN](https://secure.switchkonnect.com/aff.php?aff=1374) -- [Safer VPN](https://safervpn.com/?a_aid=1413) -- [VirtualShield](https://virtualshield.com/?rfsn=3739717.4cba76) -- [Private Internet Access](https://www.privateinternetaccess.com/pages/cafe/digidef) -- [VPN.ac](https://vpn.ac/aff.php?aff=2178) -- [VyperVPN](https://www.dpbolvw.net/click-9242873-13805759)

**Full VPN Comparison**: [thatoneprivacysite.net](https://thatoneprivacysite.net/).

#### Word of Warning
- *A VPN does not make you anonymous- it merely chnages your IP accress to that of your VPN provider, instead of ISP. Your browsing session can still be linked back to your real identity either through your system details (such as user agent, screen resolution even typing patterns), cookies/ session storage, or by the identifiable data that you enter. [Read more about fingerprinting](https://pixelprivacy.com/resources/browser-fingerprinting/)*
- *Logging- If you choose to use a VPN because you do not agree with your ISP logging your full browsing history, then it is important to keep in mind that your VPN provider can see (and mess with) all your traffic. Many VPNs claim not to keep logs, but you cannot be certain of this. See [this article](https://gist.github.com/joepie91/5a9909939e6ce7d09e29) for more*
- *Many reviews are sponsored, and hense biased. Do your own research, or go with one of the above options*
- [Tor](https://www.torproject.org/) is the best option for private browsing

#### Considerations
*While choosing a VPN, consider the following: Logging policy (logs are bad), Jurisdiction (avoid 5-eyes), Number of servers, availability and average load. Payment method (anonymous methods such as BTC, Monero or cash are better), Leak protection (1st-party DNS servers = good, and check if IPv6 is supported), protocols (OpenVPN and WireGuard = good). Finally, usability of their apps, user reviews and download speeds.*

#### Self-Hosted VPN
If you don't trust a VPN provider not to keep logs, then you could self-host your own VPN. This gives you you total control, but at the cost of anonymity (since your cloud provider, will require your billing info). See [Streisand](https://github.com/StreisandEffect/streisand), to learn more, and get started with running a VPN.
[Digital Ocean](https://m.do.co/c/3838338e7f79) provides flexible, secure and easy Linux VMs, (from $0.007/hour or $5/month), this guide explains how to set up VPN on: [CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-centos-7) or [Ubuntu 18.4+](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-centos-7). See more about configuring [OpenVPN](https://openvpn.net/vpn-server-resources/digital-ocean-quick-start-guide/) or [IKEv2](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-ikev2-vpn-server-with-strongswan-on-ubuntu-18-04-2). Alternativley, here is a [1-click install script](http://dovpn.carlfriess.com/)for  on [Digital Ocean](https://m.do.co/c/3838338e7f79), by Carl Friess.


## Self-Hosted Network Security

Fun little projects that you can run on a Raspberry Pi, or other low-powered computer. In order to help detect and prevent threats, monitor network and filter content

| Provider | Description |
| --- | --- |
**[Pi-Hole](https://pi-hole.net)** | Network-level advertisement and Internet tracker blocking application which acts as a DNS sinkhole. Pi-Hole can significantly speed up your internet, remove ads and block malware. It comes with a nice web interface and a mobile app with monitoring features, it's open source, easy to install and very widley used
**[IPFire](https://www.ipfire.org)** | A hardened, versatile, state-of-the-art open source firewall based on Linux. Its ease of use, high performance and extensibility make it usable for everyone
**[PiVPN](https://pivpn.io)** | A simple way to set up a home VPN on a any Debian server. Supports OpenVPN and WireGuard with elliptic curve encryption keys up to 512 bit. Supports multiple DNS providers and custom DNS provividers- works nicley along-side PiHole
**[E2guardian](http://e2guardian.org)** | Powerful open source web content filter
**[SquidGuard](http://www.squidguard.org)** | A URL redirector software, which can be used for content control of websites users can access. It is written as a plug-in for Squid and uses blacklists to define sites for which access is redirected
**[PF Sense](https://www.pfsense.org)** | Widley used, open source firewall/router
**[Zeek](https://www.zeek.org)** |  Detect if you have a malware-infected computer on your network, and powerful network analysis framework and monitor

Don't want to build? See also: [Pre-configured security boxes](https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_and-Security_Gadgets.md#network-security)


## Mix Networks
[Mix networks](https://en.wikipedia.org/wiki/Mix_network) are routing protocols, that create hard-to-trace communications, by encrypting and routing traffic through a series of nodes. They help keep you anonymous online, and unlike VPNs -there are no logs

| Provider | Description |
| --- | --- |
**[Tor](https://www.torproject.org)** | Tor provides robust anonymity, allowing you to defend against surveillance, circumvent censorship and reduce tracking. It blocks trackers, resists fingerprinting and implements multi-layered encryption by default, meaning you can browse freely. Tor also allows access to OnionLand: hidden services
**[I2P](https://geti2p.net)** | I2P offers great generic transports, it is well geared towards accessing hidden services, and has a couple of technical benefits over Tor: P2P friendly with unidirectional short-lived tunnels, it is packet-switched (instead of circuit-switched) with TCP and UDP, and continuiosly profiles peers, in order to select the best performing ones. <br>I2P is less mature, but fully-distributed and self-organising, it's smaller size means that it hasn't yet been blocked or DOSed much
**[Freenet]()** | Freenet is easy to setup, provides excelland friend To Friend Sharing vs I2P, and is great for publishing content anonymously. It's quite large in size, and very slow so not the best choice for casual browsing

Tor, I2P and Freenet are all anonimity networks- but they work very differently and each is good for specific purposes. So a good and viable solution would be to use all of them, for different tasks.
*You can read more about how I2P compares to Tor, [here](https://blokt.com/guides/what-is-i2p-vs-tor-browser)*

#### Notable Mentions
[Panoramix](https://panoramix-project.eu) is a European project, aiming to use mix-networks to provide anonymity.
[Nym](https://nymtech.neteu) uses Blockchain, to reward node operators in order to keep the network sustainable.

#### Word of Warning
To provide low-latency browsing, Tor does not not mix packets or generate cover traffic. If an adversary is powerful enough, theoretically they could either observe the entire network, or just the victims entry and exit nodes. It's worth mentioning, that even though your ISP can not see what you are doing, they will be able determine that you are using a mix net, to hide this- a VPN could be used. If you are doing anything which could put you at risk, then good OpSec is essential, as the authoroties have traced criminals through the Tor network before, and [made arrests](https://techcrunch.com/2019/05/03/how-german-and-us-authorities-took-down-the-owners-of-darknet-drug-emporium-wall-street-market). Don't let Tor provide a possible false sense of security- be aware of information leaks through DNS or other programs, and Tor-supported browsers may might lag behind their upstream forks, allowing for unpatched issues. See [#19](https://github.com/Lissy93/personal-security-checklist/issues/19)

Note: The Tor netowrk is run by the community. If you benifit from using it, and would like to help sustain uncensored internet access for all- consider [running a Tor relay](https://trac.torproject.org/projects/tor/wiki/TorRelayGuide).

## Proxies
A proxy acts as a gateway between you and the internet, they can be used to act as a firewall or web filter, improves privacy and can also be used to provide shared network connections and cache data to speed up common requests. Never use a [free](https://whatismyipaddress.com/free-proxies) proxy.

| Provider | Description |
| --- | --- |
**[ShadowSocks](https://shadowsocks.org)** | Secure socks5 proxy, designed to protect your Internet traffic. Open source, superfast, cross-platform and easy to deploy, see [GitHub repo](https://github.com/shadowsocks)
**[Privoxy](https://www.privoxy.org)** | Non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, and removing ads and other obnoxious Internet junk

#### Notable Mentions
[V2ray-core](https://github.com/v2ray/v2ray-core) is a platform for building proxies to bypass network restrictions and protect your privacy. See [more](https://github.com/hugetiny/awesome-vpn)

#### Word of Warning
[Malicious Proxies](https://www.defcon.org/images/defcon-17/dc-17-presentations/defcon-17-edward_zaborowski-doppelganger.pdf) are all too common. Always use open source software, host it yourself or pay for a reputable cloud service. Never use a free proxy; it can monitor your connection, steal cookies and contain malware. VPNs are a better option, better still- use the Tor network.

## DNS
Without using a secure, privacy-centric DNS all your web requests can be seen in the clear. You should configure your DNS queries to be managed by a service that respects privacy and supports DNS-over-TLS, DNS-over-HTTPS or DNSCrypt.

| Provider | Description |
| --- | --- |
**[CloudFlare](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1)** | One of the most performant options, Cloudflare's DNS supports DoH and DoT, and has a Tor implementation, providing world-class protection. They have native cross-platform apps, for easy set-up.
**[AdGuard](https://adguard.com/en/adguard-dns/overview.html)** | Open-source DNS provider, specialising in the blocking of ads, trackers and malicious domains. They have been independently audited and do not keep logs
**[SecureDNS](https://securedns.eu)** | An open source DNS provider, with built-in ad block and additional privacy features. Supports DoH, DoT and DNSCrypt. It is not as performant as some of the bigger players, but still a good option in terms of security
**[NextDNS](https://nextdns.io/)** | An ad-blocking, privacy-protecting, censorship-bypassing DNS. Also comes with analytics, and the ability to shield kids from adult content

See also this [Full List of Public DoH Servers](https://github.com/curl/curl/wiki/DNS-over-HTTPS), you can then check the performance of your chosen server with [DNSPerf](https://www.dnsperf.com/). To read more about choosing secure DNS servers, see [this article](https://medium.com/@nykolas.z/dns-security-and-privacy-choosing-the-right-provider-61fc6d54b986), and [this article](https://geekwire.co.uk/privacy-and-security-focused-dns-resolver/).

#### DNS Protocols
DNS-over-TLS was proposed in [RTC-7858](https://tools.ietf.org/html/rfc7858) by the IETF, then 2 years later, the DNS-over-HTTPS specification was outlined in [RFC8484](https://tools.ietf.org/html/rfc8484) in October '18. [DNSCrypt](https://dnscrypt.info/), is a protocol that authenticates communications between a DNS client and a DNS resolver. It prevents DNS spoofing, through using cryptographic signatures to verify that responses originate from the chosen DNS resolver, and haven’t been tampered with. DNSCrypt is a well battle-tested protocol, that has been in use since 2013, and is still widely used.

#### Notable Mentions
- [Quad9](https://www.quad9.net) is a well-funded, performant DNS with a strong focus on privacy and security and easy set-up, however questions have been raised about the motivation of some of the financial backers.
- [BlahDNS](https://blahdns.com) (Japan, Finland or Germany) is an excellant security-focused DNS
- [OpenNIC](https://www.opennic.org/), [NixNet DNS](https://nixnet.services/dns) and [UncensoredDNS](https://blog.uncensoreddns.org) are open source and democratic, privacy-focused DNS
- [Clean Browsing](https://cleanbrowsing.org/), is a good option for protecting kids,  they offer comprehensive DNS-based Content Filtering

#### Word of Warning
Using an encrypted DNS resolver will not make you anonymous, it just makes it harder for third-partied to discover your domain history. If you are using a VPN, take a [DNS leak test](https://www.dnsleaktest.com/), to ensure that some requests are not being exposed.


## Firewalls
A firewall is a program which monitors the incoming and outgoing traffic on your network, and blocks requests based on rules set during its configuration. Properly configured, a firewall can help protect against attempts to remotely access your computer, as well as controll which applictions can access which IPs


| Provider | Description |
| --- | --- |
**[NetGuard](https://play.google.com/store/apps/details?id=eu.faircode.netguard)** <br>(Android) | Provides simple and advanced ways to block access to the internet. Applications and addresses can individually be allowed or denied access to Wi-Fi and/or mobile connection
**[NoRoot Firewall](https://play.google.com/store/apps/details?id=app.greyshirts.firewall)** <br>(Android) | Notifies you when an app is trying to access the Internet, so all you need to do is just Allow or Deny. Allows you to create filter rules based on IP address, host name or domain name, and you can allow or deny only specific connections of an app
**[Lockdown](https://apps.apple.com/in/app/lockdown-apps/id1469783711)** <br>(iOS) | Firewall app for iPhone, allowing you to block any connection to any domain
**[SimpleWall](https://github.com/henrypp/simplewall)** <br>(Windows) | Tool to control Windows Filtering Platform (WFP), in order to configure detailed network activity on your PC
**[OpenSnitch](https://github.com/evilsocket/opensnitch)** <br>(Linux) | Makes internet connections from all apps visible, allowing you to block or manage traffic on a per-app basis. GNU/Linux port of the Little Snitch application firewall
**[LuLu](https://objective-see.com/products/lulu.html)** <br>(Mac OS) | Free, open source macOS firewall. It aims to block unknown outgoing connections, unless explicitly approved by the user
**[Little Snitch](https://obdev.at/products/littlesnitch/index.html)** <br>(Mac OS) | A very polished application firewall, allowing you to easily manage internet connections on a per-app basis
**[IPFire](https://www.ipfire.org)** <br>(hardware) | IPFire is a hardened, versatile, state-of-the-art Open Source firewall based on Linux. Easy to install on a raspberry Pi, since it is lightweight and heavily customizable
**[Shorewall](https://shorewall.org)** <br>(hardware) | An open source firewall tool for Linux that builds upon the [Netfilter](https://www.netfilter.org) system built into the Linux kernel, making it easier to manage more complex configuration schemes with [iptables](https://linux.die.net/man/8/iptables)
**[OpenSense](https://opnsense.org)** <br>(hardware)  | Enterprise firewall and router for protecting networks, built on the FreeBSD system 


#### Word of Warning
There are different [types](https://www.networkstraining.com/different-types-of-firewalls) of firewalls, that are used in different circumstances. This does not ommit the need to configure your operating systems defenses. Follow these instructions to enable your firewall in [Windows](https://support.microsoft.com/en-us/help/4028544/windows-10-turn-windows-defender-firewall-on-or-off), [Mac OS](https://support.apple.com/en-us/HT201642), [Ubuntu](https://wiki.ubuntu.com/UncomplicatedFirewall) and other [Linux ditros](https://www.tecmint.com/start-stop-disable-enable-firewalld-iptables-firewall).
Even when properly configured, having a firewall enabled does not gaurantee bad network traffic can not get through

## Network Analysis

Weather you live in a country behind a firewall, or accessing the internet through a proxy- these tools will help you better understand the extent of blocking, deep packet inspection and what data is being analysed


| Provider | Description |
| --- | --- |
**[OONI](https://ooni.org)** | Open Observatory of Network Interference- A free tool and global observation network, for detecting censorship, surveillance and traffic manipulation on the internet. Developed by The Tor Project, and available for [Android](https://play.google.com/store/apps/details?id=org.openobservatory.ooniprobe), [iOS](https://apps.apple.com/us/app/id1199566366) and [Linux](https://ooni.org/install/ooniprobe)
**[Mongol](https://github.com/mothran/mongol)** | A Python script, to pinpoint the IP address of machines working for the The Great Firewall of China. See also [gfwlist](https://github.com/gfwlist/gfwlist) which is the Chinese ban list, and [gfw_whitelist](https://github.com/n0wa11/gfw_whitelist). For a list of Russian government IP addresses, see [antizapret](https://github.com/AntiZapret/antizapret)
**[Goodbye DPI](https://github.com/ValdikSS/GoodbyeDPI)** | Passive Deep Packet Inspection blocker and Active DPI circumvention utility, for Windows
**[DPITunnel](https://github.com/zhenyolka/DPITunnel)** | An Android app to bypass deep packet inspection
**[Proxy Checker](https://ping.eu/proxy/)** | You can quickly check if a given IP is using a proxy, this can also be done through the [command line](https://superuser.com/questions/346372/how-do-i-know-what-proxy-server-im-using)


## Cloud Hosting

Weather you are hosting a website/ app and want to keep your users data safe, or if you are hosting your own file backup, cloud productivity suit or VPN- then choosing a provider that respects your privacy and allows you to sign up anonymously, and will keep your files and data safe will be important.

| Provider | Description |
| --- | --- |
**[Njalla](https://njal.la)** | Njalla is privacy and security-focused a domain registrar and VPN hosting provider. They own and manage all their own servers, which are based in Sweden. They accept crypto, for anonymous payments, and allow you to sign up with OTR XMPP if you do not want to provide an email address. Both VPS and domain name pricing is reasonable, with packages starting at $15/ month
**[Vindo](https://www.vindohosting.com)** | Provides anonymous shared hosting, semi-managed virtual private servers and domain registration
**[Private Layer](https://www.privatelayer.com)** | Offers enterprise-grade, high-speed offshore dedicated servers, they own their own data centers, have a solid privacy policy and accept anonymous payment

#### Notable Mentions
See also: [1984](https://www.1984.is) based in Iceland. [Shinjiru](http://shinjiru.com?a_aid=5e401db24a3a4), which offers off-shore dedicated servers. [Orange Website](https://www.orangewebsite.com) specialises in protecting online privacy and free speech, hosted in Iceland. [RackBone](https://rackbone.ch) (previously [DataCell](https://datacell.is)) provides secure and ethical hosting, based in Switzerland. And [Bahnhof](https://www.bahnhof.net) offers high-security and ethical hosting, with their data centres locates in Sweden. Finally [Simafri](https://www.simafri.com/anonymous) has a range of packages, that support Tor out of the box


#### Word of Warning
The country that your data is hosted in, will be subject to local laws and regulations. It is therefore important to avoid a jurasdiction that is part of the [5 eyes](https://en.wikipedia.org/wiki/Five_Eyes) (Australia, Canada, New Zealand, US and UK) and [other international cooperatives](https://en.wikipedia.org/wiki/Five_Eyes#Other_international_cooperatives) who have legal right to view your data

## Domain Registrars

| Provider | Description |
| --- | --- |
**[Njal.la](https://njal.la)** | Privacy-aware domain service with anonymous sign-up and accepts crypto currency
**[Orange Website](https://www.orangewebsite.com/domain-registration.php)** | Anonymous domain registration, with low online censorship since they are based outside the 14-eyes jurisdiction (in Iceland)


## Digital Notes

| Provider | Description |
| --- | --- |
**[Cryptee](https://crypt.ee/)** | Private & encrypted rich-text documents. Cryptee has encryption and anonymity at it's core, it also has a beautiful and minimalistic UI. You can use Cryptee from the browser, or download native Windows, Mac OS, Linux, Android and iOS apps. Comes with many additional features, such as support for photo albums and file storage. The disadvantage is that only the frontend is open source. Pricing is free for starter plan, $3/ month for 10GB, additional plans go up-to 2TB
**[Standard Notes](https://standardnotes.org/?s=chelvq36)** | S.Notes is a free, open-source, and completely encrypted private notes app. It has a simple UI, yet packs in a lot of features, thanks to the [Extensions Store](https://standardnotes.org/extensions), allowing for: To-Do lists, Spreadsheets, Rich Text, Markdown, Math Editor, Code Editor and many more. You can choose between a number of themes (yay, dark mode!), and it features built-in secure file store, tags/ folders, fast search and more. There is a web app as well as native Windows, Mac OS, Linux, Android and iOS apps. Standard Notes is actively developed, and fully open-source, so you can host it yourself, or use their hosted version: free without using plug-ins or $3/ month for access to all features
**[Turtle](https://turtlapp.com/)** | A secure, collaborative notebook. Self-host it yourself (see [repo](https://github.com/turtl)), or use their hosted plan (free eddition or $3/ month for premium)
**[Joplin](https://joplinapp.org)** | Cross-platform desktop and mobile note-taking and todo app. Easy organisation into notebooks and sections, revision history and a simple UI. Allows for easy import and export of notes to or from other services. Supports syncronisation with cloud services, implemented with E2EE- however it is only the backed up data that is encrypted
**[Notable](https://notable.md)** | Markdown-based note editior for desktop, with a simple, yet feature-rich UI. All notes are saved individually as .md files, making them easy to manage. No mobile app, or built-in cloud-sync or encryption

#### Notable Mentions
If you are already tied into Evernote, One Note etc, then [SafeRoom](https://www.getsaferoom.com) is a utility that encrypts your entire notebook, before it is uploaded to the cloud. [Org Mode](https://orgmode.org) is a very comprehnsive CLI tool for keeping notes, maintaining todo lists, planning projects, and authoring documents -based on a fast and effective plain-text system, from the command line. For a simple plain text note taking app, with strong encryption, see [Protected Text](https://www.protectedtext.com), which works well with the [Safe Notes](https://play.google.com/store/apps/details?id=com.protectedtext.android) Android app


## Cloud Productivity Suits

| Provider | Description |
| --- | --- |
**[CryptPad](https://cryptpad.fr)** | A zero knowledge cloud productivity suit. Provides Rich Text, Presentations, Spreadsheets, Kanban, Paint a code editor and file drive. All notes and user content, are encrypted by default, and can only be accessed with specific URL. The main disadvantage, is a lack of Android, iOS and desktop apps- CryptPad is entirely web-based. You can use their web service, or you can host your own instance (see [CryptPad GitHub](https://github.com/xwiki-labs/cryptpad) repo). Price for hosted: free for 50mb or $5/ month for premium
**[NextCloud](https://nextcloud.com/)** | A complete self-hosted productivity platform, with a strong community and growing [app store](https://apps.nextcloud.com). NextCloud is similar to (but arguably more complete than) Google Drive, Office 365 and Dropbox, origionally it was a fork from [OwnCloud](https://owncloud.org/), but since have diverged. Clear UI and stable native apps across all platforms, and also supports file sync. Supports encrypted files, but you need to configure this yourself. Fully open source, so you can self-host it yourself (or use a hosted solution, starting from $5/ month)
**[Disroot](https://disroot.org)** | A platform providing online services based on principles of freedom, privacy, federation and decentralization. It is an implementation of NextCloud, with strong encryption configured- it is widely used by journalists, activists and whistle-blowers. It is fre to use, but there have been reported reliability issues of the cloud services
**[Sandstorm](https://sandstorm.io/)** | An open source platform for self-hosting web apps. Once you've set it up, you can install items from the Sandstorm [App Market](https://apps.sandstorm.io/) with -click, similar to NextCloud in terms of flexibility



## Backup and Sync

| Provider | Description |
| --- | --- |
**[SeaFile](https://www.seafile.com)** | An open source cloud storage and sync solution. Files are grouped into Libraries, which can be individually encrypted, shared of synced. Docker image available for easy deployment, and native clients for Windows, Mac, Linux, Android and iOS
**[Syncthing](https://syncthing.net)** | Continuous file synchronization between 2 or more clients. It is simple, yet powerful, and fully-encrypted and private. Syncthing can be deployed with Docker, and there are native clients for Windows, Mac, Linux, BSD and Android
**[NextCloud](https://nextcloud.com)** | Feature-rich productivity platform, that can be used to backup and selectively sync encrypted files and folders between 1 or more clients. See [setting up sync](https://docs.nextcloud.com/desktop/2.3/installing.html). A key benifit the wide range of plug-ins in the [NextCloud App Store](https://apps.nextcloud.com), maintained by the community.  NextCloud was a hard fork off [OwnCloud](https://owncloud.org).


#### Notable Mentions
Alternatively, consider a headless utility such as [Duplicacy](https://duplicacy.com) or [Duplicity](http://duplicity.nongnu.org). Both of offer an encrypted and efficient sync between 2 or more locations, using the [rsync](https://linux.die.net/man/1/rsync) algorithm.

[SpiderOak](https://spideroak.com), [Tresorit](https://tresorit.com) and [Resilio](https://www.resilio.com/individuals) are good enterprise solutions, all with solid encryption baked-in

[FileRun](https://filerun.com) and [Pydio](https://pydio.com) are self-hosted file explorers, with cross-platform sync capabilities.

#### Word of Warning
You should always ensure that any data stored in the cloud is encrypted. If you are hosting your own server, then take the necissary precautions to [secure the server](https://med.stanford.edu/irt/security/servers.html). For hosted solutions- use a strong password, keep your credentials safe and enable 2FA.


## File Drop

| Provider | Description |
| --- | --- |
**[Firefox Send](https://send.firefox.com)** | Simple, private file sharing. Files are encrypted, client-side, stored on Mozilla servers, can be password-protected, and are deleted either after a specified time frame or specific number of downloads. Can also be self-hosted, [repo](https://github.com/mozilla/send)
**[FilePizza](https://file.pizza)** | Peer-to-peer based file transfer from the browser, using [Web Torrent](https://webtorrent.io/). It's quick and easy to use, and doesn't require any software to be installed. Can also be self-hosted: [repo](https://github.com/kern/filepizza)
**[FileSend](https://filesend.standardnotes.org)** | Simple, encrypted file sharing, with a 500mb limit and 5-day retention. Files are secured with client-side AES-256 encryption and no IP address or device info is logged. Files are permanently deleted after download or after specified duration. Developed by [StandardNotes](https://standardnotes.org/?s=chelvq36), and has built-in integration with the SN app.
**[OnionShare](https://onionshare.org/)** | An open source tool that lets you securely and anonymously share a file of any size, via Tor servers. OnionShare does require installing (compatible with Windows, Mac OS and Linux), but the benefit is that your files are transferred directly to the recipient, without needing to be hosted on an interim server. The host needs to remain connected for the duration of the transfer, but once it is complete, the process will be terminated. Source code: [repo](https://github.com/micahflee/onionshare)

#### Notable Suggestions
[Instant.io](https://github.com/webtorrent/instant.io), is another peer-to-peer based solution, using [Web Torrent](https://webtorrent.io). For specifically transferring images, [Up1](https://github.com/Upload/Up1) is a good self-hosted option, with client-side encryption. Finally [PsiTransfer](https://github.com/psi-4ward/psitransfer) is a feature-rich, self-hosted file drop, using streams.


## Social Networks

Over the past decade, social networks have revolutionized the way we communicate and bought the world closer together- but it came at the [cost of our privacy](https://en.wikipedia.org/wiki/Privacy_concerns_with_social_networking_services). Social networks are built on the principle of sharing- but you, the user should be able to choose with whom you share what, and that is what the following sites  aim to do

| Provider | Description |
| --- | --- |
**[Aether](https://getaether.net)** | Self-governing communities with auditable moderation- a similar concept to Reddit, but more privacy-sensitive, democratic and transparent. Aether is open source and peer-to-peer, it runs on Windows, Mac and Linux
**[Mastodon](https://mastodon.social/invite/A5JwL72F)** | A shameless Twitter clone, but open-source, distributed across independent servers, and with no algorithms that mess with users timelines
**[Minds](https://www.minds.com/register?referrer=as93)** | A social media site, which aims to bring people together and support open conversations. Get paid for creating content
**[Vero](https://vero.co/)** | (closed-source) A mobile-based social network, whose USP is that they have "No Ads. No Data Mining. No Algorithms." Since Vero is not open source, it is not possible to verify the validity of these claims

#### Other Notable Mentions
- [diaspora*](https://diasporafoundation.org), [Pleroma](https://pleroma.social) and [Friendica](https://friendi.ca) - distributed, decentralized social networks, built on open protocols
- [Tildes](https://tildes.net), [Lemmy](https://dev.lemmy.ml) and [notabug.io](https://notabug.io) - bulletin boards and news aggregators (similar to Reddit)
- [Pixelfed](https://pixelfed.org) - photo sharing (similar to Instagram)

#### Main-stream networks
The content on many of these smaller sites tends to be more *niche*. To continue using Twitter, there are a couple of [tweaks](https://www.offensiveprivacy.com/blog/twitter-privacy), that will improve security. For Reddit, use a privacy-respecting client- such as [Reditr](http://reditr.com/). Other main-stream social networking sites do not respect your privacy, so should be avoided, but if you choose to keep using them see [this guide](https://proprivacy.com/guides/social-media-privacy-guide) for tips on protecting your privacy


## Video Platforms

| Provider | Description |
| --- | --- |
**[PeerTube](https://joinpeertube.org)** |  And open source, federated network of inter-connected small videos hosters. You can [self-host](https://docs.joinpeertube.org/#/install-any-os), or [find an instance](https://joinpeertube.org/instances#instances-list), and then watch videos from any PeerTube server
**[DTube](https://d.tube)** | A decentralized video platform with little to no moderation that uses cryptocurrency and blockchain technology to pay its users, and it ad-free
**[BitTube](https://bittube.tv)** | A peer-to-peer, decentralized, censorship-free, ad-free video sharing and live streaming platform based on IPFS and blockchain technology
**[BitChute](https://www.bitchute.com/)** | A video hosting platform, that was founded in 2017 to allow uploaders to avoid content rules enforced on other platforms, such as YouTube

#### Word of Warning
Without moderation, some of these platforms accommodate video creators, who content may not be appropriate for all audiences

#### YouTube Proxies
The content on many of the smaller video sites, often just doesn't compare to YouTube. So another alternative, is to access YouTube through a proxy client, which reduces what Google can track).
- Good options are: [Invidio](https://invidio.us/) (web), [FreeTube](https://freetubeapp.io/) (Windows, Mac OS, Linux), [NewPipe](https://newpipe.schabi.org/) (Android), [YouTube++](https://iosninja.io/ipa-library/download-youtube-plus-ipa-ios) (iOS)
- Or download videos with [youtube-dl](https://ytdl-org.github.io/youtube-dl/) (cli) or [youtube-dl-gui](https://github.com/MrS0m30n3/youtube-dl-gui) (gui). For just audio, there is [PodSync](https://podsync.net/)


## Blogging Platforms

| Provider | Description |
| --- | --- |
**[Write Freely](https://writefreely.org)** | Free and open source software with a clian UI, for creating a minimalist, federated blog. For premium or enterprise hosted plans, see [Write.as](https://write.as), or to host your own, check out the [repo on GitHub](https://github.com/writeas/writefreely)
**[Telegraph](https://telegra.ph)** | Created by [Telegraph](https://www.theverge.com/2016/11/23/13728726/telegram-anonymous-blogging-platform-telegraph), Telegram is fast, anonymous and simple

#### Notable Mentions

If you use [Standard Notes](https://standardnotes.org/?s=chelvq36), then [Listed.to](https://listed.to) is a public blogging platform with strong privacy features, it lets you publish posts directly through the Standard Notes app or web interface. Other minimilistic platforms include [Notepin.co](https://notepin.co) and [Pen.io](http://pen.io)

Want to write a simple text post and promote it yourself? Check out [telegra.ph](https://telegra.ph), [txt.fyi](https://txt.fyi) and [NotePin](https://notepin.co). For seriously anonymous platforms, aimed at activists, see [noblogs](https://noblogs.org/) and [autistici](https://www.autistici.org). It is also possible to host a normal [WordPress](https://wordpress.com) site, without it being linked to your real identity, although WP does not have the best reputation when it comes to privacy.

Of course you could also host your blog on your own server, using a standard open source blog platform, such as [Ghost](https://ghost.org) and configure it to disable all trackers, ads and analytics


## News Readers and Aggregation

| Provider | Description |
| --- | --- |
**[Tiny RSS](https://tt-rss.org)** | A free and open source web-based news feed (RSS/Atom) reader and aggregator
**[RSSOwl](http://www.rssowl.org)** | A desktop-based RSS reader, with powerful organisation features
**[Feedly](https://feedly.com)** | A more premium option, Feedly displays news from your selected sources in an easy-to-digest clean and modern interface. It works with more than just RSS feeds, since it is well integrated with many major news outlets. It does not manipulate the stories you see, and is mostly open source

#### Notable Mentions
For iPhone users in the US, [Tonic](https://canopy.cr/tonic) is a great little app that provides you with a selection of personalized new stories and articles daily. It is possible to us [Reddit](https://www.reddit.com) anonymously too- you can use throwaway accounts for posting.

#### Word of Warning
News reader apps don't have a good [reputation](https://vpnoverview.com/privacy/apps/privacy-risks-news-apps) when it comes to protecting users privacy, and often display biased content. Many have revenue models based on making recommendations, with the aim of trying to get you to click on sponsored articles- and for that a lot of data needs to have been collected about you, your habits, interests and routines. 


## Payment Methods

Paying for goods and services is a good example of where privacy and security conflict; the most secure option would be to pay with credit card, since most providers include fraud protection, whereas the most private option would be to pay using crypto currency or cash, since neither can be easily tied back to your identity

| Provider | Description |
| --- | --- |
**[Monero](https://www.getmonero.org)** | One of the most private cryptocurrencies, since no meta data is available (not even the transaction amount). It uses complex on-chain cryptographic methods such as Ring signatures, RingCT, Kovri, and Stealth addresses all of which help protect the privacy of users
**[ZCash](https://z.cash)** | Uses zero-knowledge proofs to protect privacy cryptographic technique, that allow two users to transact without ever revealing their true identity or address. The Zcash blockchain doesn't record any send or receive addresses


#### Notable Mentions
Cash is still the most private option, with no chance of leaving any transactional  records. See also PIVX, Bitcoin Private and Verge. Also Pirate, Komodo and ZenCash which are hard-forks off of ZCash, with some additional privacy features built-in.


#### Word of Warning
Not all cryptocurrencies are anonymous, and without using a privacy-focused coin, a record of your transaction will live on a publicly available distributed ledger, forever. If you send of receive multiple payments, ensure you switch up addresses or use a mixer, to make it harder for anyone trying to trace your transactions. Store private keys somewhere safe, but offline and preferably cold.


## Anti-Virus and Malware Prevention

| Provider | Description |
| --- | --- |
**[CalmAV](https://www.clamav.net)** | An open source  cross-platform antivirus engine for detecting viruses, malware & other malicious threats. It is versatile, performant and very effective
**[Windows Spy Blocker](https://github.com/crazy-max/WindowsSpyBlocker)** | Capture and interprets network traffic based on a set of rules, and depending on the interactions certain assignments are blocked. Open source, written in Go and delivered as a single executable
**[Cylance](https://www.cylance.com)** | Takes more of an application whitelisting approach, where it generates the list of trusted software through machine learning. So instead of identifying bad software to block, it identifies good software instead, and blocks the rest by default
**[MalwareBytes](https://www.malwarebytes.com)** | If you think your computer may be infected, or have malicious files, then Malware Bytes is a good option for running 1-off scans. It is thorough in identifying threats, with minimum data collection- however it is [not open source](https://forums.malwarebytes.com/topic/5495-open-source), so should be used with caution

#### Notable Mentions
Your operating system's built-in protection is probably adequate for detecting 99% of threats. Installing additional software can introduce more vulnerabilities, so downloading AV may actually increase your attack surface.

Windows, by default is not very private. There are several packages that can be used to quickly tweak privacy settings. Such as [Simple Wall](https://github.com/henrypp/simplewall), [priv10](https://github.com/DavidXanatos/priv10), [Fix-Windows-Privacy](https://modzero.github.io/fix-windows-privacy/) and [W10 Privacy](https://www.w10privacy.de/english-home) (see [Video Tutorial](https://www.youtube.com/watch?v=qttbd2Ouxmc)). Use at your own risk, disabling sore OS features can cause unintended consequences. See also, this [Windows 10 Privacy Guide](https://github.com/adolfintel/Windows10-Privacy) for manual steps


#### Word of Warning
Many anti virus products have a history of introducing bad vulnerabilities themselves, and several of them seriously degrade the performance of your computer, as well as decrease your privacy. Never use a free anti-virus, and never trust the companies that offer free solutions, even if you pay for the premium package. This includes (but not limited to) Avast, AVG, McAfee and Kasperky. For AV to be effective, it needs intermate access to all areas of your PC, so it is important to go with a trusted vendor, and monitor it's activity closley. Read more about why you shouldn't use [Anti-Spy Tools, on Windows](https://as93.link/gjlj4).


## Mobile Operating Systems

If you are an Android user, your device has Google built-in at it's core. [Google tracks you](https://digitalcontentnext.org/blog/2018/08/21/google-data-collection-research/),
collecting a wealth of information, and logging your every move. A [custom ROM](https://www.xda-developers.com/what-is-custom-rom-android/), is an open source, usually Google-free mobile OS that can be [flashed](https://www.xda-developers.com/how-to-install-custom-rom-android/) to your device.


| Provider | Description |
| --- | --- |
**[LineageOS](https://www.lineageos.org/)** | A free and open-source operating system for various devices, based on the Android mobile platform- Lineage is light-weight, well maintained, supports a wide range of devices, and comes bundled with [Privacy Guard](https://en.wikipedia.org/wiki/Android_Privacy_Guard)
**[GrapheneOS](https://grapheneos.org/)** | GrapheneOS is an open source privacy and security focused mobile OS with Android app compatibility. Developed by the team behind [CoperheadOS](https://copperhead.co/android/). Graphene is a young project, and currently only supports Pixel devices, partially due to their strong hardware security

#### Other Notable Mentions
[Replicant OS](https://www.replicant.us/) is a fully-featured distro, with an emphasis on freedom, privacy and security. [MmniRom](https://www.omnirom.org/), [Recursion Remix](https://forum.xda-developers.com/remix), and [Paranoid Android](http://paranoidandroid.co/) are also popular options. Alternativley, [Ubuntu Touch](https://ubports.com/) is a Linux (Ubuntu)- based OS. It is secure by design and runs on almost any device, - but it does fall short when it comes to the app store.

To install apps, without Play Store- see [F-Droid](https://f-droid.org/en/). For Google Play Service see [MicroG](https://microg.org/)


#### Word of Warning
It is not recommended to root, or flash your device with a custom ROM if you are not an advanced user. There are risks involved
- Although the above ROMs omit Google, they do open up other security issues: Without DM-verity on the system partition, the file system *could* be tampered with, and no verified boot stack, the kernel/initramfs also *could* be edited. You should understand the risks, before proceeding to flash a custom ROM to your device
- You will need to rely on updates from the community, which could be slower to be released- this may be an issue for a time-urgent, security-critical patch
- It is also possible to brick your device, through interrupted install or bad software
- Finally, rooting and flashing your device, will void your warranty


## PC Operating Systems

Windows 10 has many features, that violate your privacy. Microsoft and Apple are able to collect all your data (including, but not limited to: keystrokes, searches and mic input, calendar data, music, photos, credit card information and purchases. Identity, passwords, contacts, conversations and location data). Microsoft Windows is also more suseptible to malware and viruses, than alternative systems.

| Provider | Description |
| --- | --- |
**[Qubes OS](https://www.qubes-os.org/)** (containerized apps) | Open-source security-oriented operating system for single-user desktop computing. It uses virtualisation, to run each application in it's own compartment to avoid data being leaked. It features [Split GPG](https://www.qubes-os.org/doc/split-gpg/), [U2F Proxy](https://www.qubes-os.org/doc/u2f-proxy/), and [Whonix integration](https://www.qubes-os.org/doc/whonix/). Qubes makes is easy to create [disposable VMs](https://www.qubes-os.org/doc/disposablevm/) which are spawned quickly and destroyed when closed. Qubes is [recommended](https://twitter.com/Snowden/status/781493632293605376) by Edward Snowden
**[Whonix](https://www.whonix.org/)** (VM) | Whonix is an anonymous operating system, which can run in a VM, inside your current OS. It is the best way to use Tor, and provides very strong protection for your IP address. It comes bundled with other features too: Keystroke Anonymization, Time Attack Defences, Stream Isolation, Kernel Self Protection Settings and an Advanced Firewall. Open source, well audited, and with a strong community- Whonix is based on Debian, [KickSecure](https://www.whonix.org/wiki/Kicksecure) and [Tor](https://www.whonix.org/wiki/Whonix_and_Tor)
**[Tails](https://tails.boum.org/)** (live) | Tails is a live operating system (so you boot into it from a USB, instead of installing). It preserves your privacy and anonymity through having no persistent memory/ leaving no trace on the computer. Tails has Tor built-in system-wide, and uses state-of-the-art cryptographic tools to encrypt your files, emails and instant messaging. Open source, and built on top of Debian
**[Parrot](https://parrotlinux.org/)** (security)| Parrot Linux, is a full Debian-based operating system, that is geared towards security, privacy and development. It is fully-featured yet light-weight, very open. There are 3 edditions: General Purpose, Security and Forensic. The Secure distribution includes its own sandbox system obtained with the combination of [Firejail](https://firejail.wordpress.com/) and [AppArmor](https://en.wikipedia.org/wiki/AppArmor) with custom security profiles. While the Forensics Edition is bundled with a comprehensive suit of security/ pen-testing tools, similar to Kali and Black Arch
**[Discreete Linux](https://www.privacy-cd.org/)** (offline)| Aimed at journalists, activists and whistle-blowers, Discreete Linux is similar to Tails, in that it is booted live from external media, and leaves no/ minimal trace on the system. The aim of the project, was to provide all required cryptographic tools offline, to protect against Trojan-based surveillance


#### General Purpose Linux Distros
If you do not want to use a specalist security-based distro, or you are new to Unix- then just switching to any well-maintained Linux distro, is going to be significantly more secure and private than Windows or Mac OS. Since it is open source, majour distros are constantly being audited by members of the community. Also Linux does not give users admin rights by default- this makes is much less likley that your system could become infected with malware.  There is no proprietary Microsoft or Apple software constantly monitoring everything you do, and building up a data profile on you. Some good distros to consider would be: **[Fedora](https://getfedora.org/)**, **[Debian](https://www.debian.org/)**, or **[Arch](https://www.archlinux.org/)**- all of which have a large community behind them. **[Manjaro](https://manjaro.org/)** (based of Arch), is also a good option, with a simple install process. Used by new comers, and expers alike. See [comparison](https://en.wikipedia.org/wiki/Comparison_of_Linux_distributions).

#### Improve the Security and Privacy of your current OS
If you want to stick with your current OS, then see this [Windows 10 guide](https://heimdalsecurity.com/en/windows-10-security-guide/privacy), by Heimdal Security- it will guide you through the settings that you should update, to minimise the amount that Microsoft and other third-parties track you. For Apple users, this [Mac OS guide](https://spreadprivacy.com/mac-privacy-tips/), will walk you through the equivalent steps. For Linux, you are far more secure by default, but there are a few steps to take, as seen in this [Linux guide](https://spreadprivacy.com/linux-privacy-tips/).


## Windows Defences

| Provider | Description |
| --- | --- |
**[HardenTools]** | A utility that disables a number of risky Windows features. These "features" are exposed by the OS and primary consumer applications, and very commonly abused by attackers, to execute malicious code on a victim's computer. So this tool just reduces the attack surface by disabling the low-hanging fruit
**[Sticky-Keys-Slayer]** | Scans for accessibility tools backdoors via RDP
**[SigCheck]** | Audit a Windows host's root certificate store against Microsoft's Certificate Trust List (CTL)
**[Windows Secure Baseline]** | Group Policy objects, compliance checks, and configuration tools that provide an automated and flexible approach for securely deploying and maintaining the latest releases of Windows 10
**[IIS Crypto]** | A utility for configuring encryption protocols, cyphers, hashing methods, and key exchanges for Windows components 
**[NetLimiter]** | Internet traffic control and monitoring tool

**See Also**:
- [github.com/Awesome-Windows/Awesome#security]
- [github.com/PaulSec/awesome-windows-domain-hardening]
- [github.com/meitar/awesome-cybersecurity-blueteam#windows-based-defenses]

[HardenTools]: https://github.com/securitywithoutborders/hardentools
[Sticky-Keys-Slayer]: https://github.com/linuz/Sticky-Keys-Slayer
[SigCheck]: https://docs.microsoft.com/en-us/sysinternals/downloads/sigcheck
[Windows Secure Baseline]: https://github.com/nsacyber/Windows-Secure-Host-Baseline
[IIS Crypto]: https://www.nartac.com/Products/IISCrypto
[NetLimiter]: https://www.netlimiter.com
[github.com/Awesome-Windows/Awesome#security]: https://github.com/Awesome-Windows/Awesome#security
[github.com/PaulSec/awesome-windows-domain-hardening]: https://github.com/PaulSec/awesome-windows-domain-hardening
[github.com/meitar/awesome-cybersecurity-blueteam#windows-based-defenses]: https://github.com/meitar/awesome-cybersecurity-blueteam#windows-based-defenses


## Mac OS Defences

| Provider | Description |
| --- | --- |
**[LuLu]** | Free, open source macOS firewall. It aims to block unknown outgoing connections, unless explicitly approved by the user
**[Stronghold]** | Easily configure macOS security settings from the terminal
**[Fortress]** | Kernel-level, OS-level, and client-level security for macOS. With a Firewall, Blackhole, and Privatizing Proxy for Trackers, Attackers, Malware, Adware, and Spammers; with On-Demand and On-Access Anti-Virus Scanning


[LuLu]: https://objective-see.com/products/lulu.html
[Stronghold]: https://github.com/alichtman/stronghold
[Fortress]: https://github.com/essandess/macOS-Fortress



## Home Automation

If you have smart devices within your home, you should consider running the automation locally, rather than using a cloud service. This will reduce the amount of exploits you could potentially be vulnrable to. It is also important to have network monitoring and firewalls enabled, to ensure suspicious activity is flagged or blocked. The following projects will make controlling and monitoring IoT devices within your home easier, safer and more private

| Provider | Description |
| --- | --- |
**[Home Assistant](https://www.home-assistant.io)** | Open source home automation that puts local control and privacy first- 1500+ integrations. Runs well on a Raspberry Pi, accessible though a web interface and CLI, as well as several controller apps (such as [HassKit](https://play.google.com/store/apps/details?id=com.thhkstudio.hasskit) and the official [Home Assistant App](https://play.google.com/store/apps/details?id=io.homeassistant.companion.android))
**[OpenHAB](https://www.openhab.org)** | A vendor and technology agnostic open source automation software for your home, with 2000+ supported devices and addons. Works well on a Raspberry Pi, or low-powerd home server, and again there are some great apps for, such as the official [OpenHabb App](https://play.google.com/store/apps/details?id=org.openhab.habdroid) and the [HomeHabit](https://play.google.com/store/apps/details?id=app.homehabit.view) wall dashboard
**[Domoticz](https://www.domoticz.com)** | Another home automation system, Domoticz is more geared towards connecting and monitoring sensors within your space. Allows you to monitor your environment without anyone but you having access to the data
**[Node-RED](https://nodered.org)** | Node-RED is a programming tool for wiring together hardware devices, APIs and online services, it provides a browser-based editor that makes it easy to build flows with a wide range of supported nodes, and it is easy to deploy locally in your network

#### Notable Mentions 
For creating dashboard from IoT devices, see [ThingsBoard](https://thingsboard.io). Another home automation tool is [FHEM](https://fhem.de/fhem.html), which has been around for a while and needs a bit more work to get up and running, but is still a popular option

#### Word of Warning
IoT smart home devices can open you up to many security risks and exploits. It is really important that you configure them correctly, setting strong unique passwords, turn off data sharing, and if possible restrict internet access so devices can only communicate within your local network. See [Smart Home Security Checklist](https://github.com/Lissy93/personal-security-checklist#smart-home) for more tips


## AI Voice Assistants

Google Assistant, Alexa and Siri don't have the best [reputation](https://srlabs.de/bites/smart-spies) when it comses to protecting consumers privacy, there have been [many recent breached](https://www.theverge.com/2019/10/21/20924886/alexa-google-home-security-vulnerability-srlabs-phishing-eavesdropping). For that reason it is recommended not to have these devices in your house. The following are open source AI voice assistants, that aim to provide a human voice interface while also protecting your privacy and security

| Provider | Description |
| --- | --- |
**[Mycroft](https://mycroft.ai)** | An open source privacy-respecting AI platform, that runs on many platforms (Raspberry Pi, desktop, or dedicated Mycroft device). It is in active development, with thorough documentation and a broad range of available skills, but also Mycroft makes it really easy to develop new skills
**[Kalliope](https://kalliope-project.github.io)** | An open source, modular always-on voice controlled personal assistant designed for home automation. It runs well on Raspberry Pi, Debian or Ubuntu and is easy to program with simple YAML-based skills, but does not have a wide library of pre-built add-ons

#### Notable Mentions
For a desktop-based assistant, see [Dragonfire](https://github.com/DragonComputer/Dragonfire) for Ubunto, and [Jarvis](https://github.com/sukeesh/Jarvis) for MacOS.  [LinTO](https://linto.ai), [Jovo](https://www.jovo.tech) and [Snips](https://snips.ai) are private-by-design voice assistant frameworks that can be built on by developers, or used by enterprises. [Jasper](https://jasperproject.github.io), [Stephanie](https://github.com/SlapBot/stephanie-va) and [Hey Athena](https://github.com/rcbyron/hey-athena-client) are Python-based voice assistant, but neither is under active development anymore. See also [OpenAssistant](https://openassistant.org).

#### Word of Warning
If you are building your own assistant, you may want to consider a hardware-switch for disabling the microphone. Keep tabs on issues and check the code, to ensure you are happy with how it works, from a privacy perspective


## Bonus #1 - Alternatives to Google

Moving away from Google, and using multiple alternative apps will mean there is no single source of tracking. Open source and privacy-focused software is best

- Academic: [RefSeek](https://www.refseek.com), [Microsoft Academic](https://academic.microsoft.com), [More Academic Search Engines](https://en.wikipedia.org/wiki/List_of_academic_databases_and_search_engines)
- Analytics: [Matomo](https://matomo.org), [Privalytics](https://www.privalytics.io)
- Assistant: [Mycroft](https://mycroft.ai), [Kalliope](https://kalliope-project.github.io)
- Authenticator: [Aegis](https://getaegis.app), [AndOTP](https://github.com/andOTP/andOTP), [FreeOTP](https://freeotp.github.io), [Authenticator (ios)](https://github.com/mattrubin/authenticator)
- Blogging: [Write Freely](https://writefreely.org), [Telegraph](https://telegra.ph), [Ghost](https://ghost.org)
- Browsers: [Brave](https://brave.com/?ref=ali721), [Firefox](https://www.mozilla.org/firefox) (with some [tweaks](https://restoreprivacy.com/firefox-privacy/)), [Vivaldi](https://vivaldi.com/)
- Calendar: [EteSync](https://www.etesync.com/accounts/signup/?referrer=QK6g), [ProtonCalendar](https://protonmail.com/blog/protoncalendar-beta-announcement)
- Cloud: [Njalla](https://njal.la), [Vindo](https://www.vindohosting.com), [Private Layer](https://www.privatelayer.com)
- DNS: [Cloudflare](https://blog.cloudflare.com/announcing-1111), [Quad9](https://www.quad9.net) 
- Docs: [NextCloud](https://nextcloud.com), [CryptPad](https://cryptpad.fr)
- Finance: [Wallmine](https://wallmine.com), [MarketWatch](https://www.marketwatch.com/tools/quotes/lookup.asp), [Nasdaq Lookup](https://www.nasdaq.com/market-activity/stocks)
- Flights: [SkyScanner](https://www.skyscanner.net), [Kayak](https://www.kayak.co.uk) (Note: Beware of tracking, use Tor)
- Mail: [ProtonMail](https://protonmail.com), [MailFence](https://mailfence.com?src=digitald), [HushMail](https://www.hushmail.com/tapfiliate/?tap_a=44784-d2adc0&tap_s=724845-260ce4&program=hushmail-for-small-business), [33Mail](http://33mail.com/Dg0gkEA)
- Maps: [OpenStreetMaps](https://www.openstreetmap.org)
- Messaging: [Signal](https://signal.org), [KeyBase](https://keybase.io)
- Mobile OS: [LineageOS](https://www.lineageos.org), [GrapheneOS](https://grapheneos.org), [Ubuntu Touch](https://ubports.com)
- Notes: [Cryptee](https://crypt.ee), [Joplin](https://joplinapp.org), [Standard Notes](https://standardnotes.org/?s=chelvq36), [Joplin](https://joplinapp.org)
- Passwords: [BitWarden](https://bitwarden.com), [1Password](https://1password.com), [KeePassXC](https://keepassxc.org), [LessPass](https://lesspass.com) 
- Pay: [Privacy.com](https://privacy.com/join/VW7WC), [Revolut](https://revolut.ngih.net/Q9jdx) (disposable virtual credit cards)
- Play Store: [F-Droid](https://f-droid.org), [APK Mirror](https://www.apkmirror.com)
- Search: [DuckDuckGo](https://duckduckgo.com), [Start Page](https://www.startpage.com), [Qwant](https://www.qwant.com)
- Sync: [SeaFile](https://www.seafile.com), [Syncthing](https://syncthing.net), [NextCloud](https://nextcloud.com), [Duplicacy](https://duplicacy.com)
- Translate: [Apertium](https://www.apertium.org)
- Videos: [PeerTube](https://joinpeertube.org), [BitChute](https://www.bitchute.com) (Caution: Not moderated)
- Weather: [Open Weather Map](https://openweathermap.org)



## Bonus #2 - Self-Hosted Services

- Analytics: [Matomo](https://matomo.org), [Fathom](https://github.com/usefathom/fathom), [GoatCounter](https://www.goatcounter.com), [Rudder](https://github.com/rudderlabs)
- Blogging: [Hexo](https://hexo.io), [Noddity](http://noddity.com), [Plume](https://joinplu.me), [Ghost](https://github.com/TryGhost/Ghost), [Write.as](https://github.com/writeas)
- Bookmarks: [Shiori](https://github.com/go-shiori/shiori), [Geek Marks](https://geekmarks.dmitryfrank.com), [Ymarks](https://bitbucket.org/ymarks), [xBrowserSync](https://www.xbrowsersync.org), [reminiscence](https://github.com/kanishka-linux/reminiscence), [unmark](https://github.com/cdevroe/unmark)
- Chat Networks: [Gotify](https://gotify.net), [GNU:net](https://gnunet.org), [Centrifugo](https://github.com/centrifugal/centrifugo), [Mumble](https://www.mumble.info), [Tox](https://tox.chat), [Matrix](https://matrix.org) + [Riot](https://riot.im), [Retroshare](https://retroshare.cc)
- CMS: [Strapi](https://strapi.io) (headless), [ApostropheCMS](https://github.com/apostrophecms/apostrophe), [Plone](https://github.com/plone), [Publify](https://publify.github.io), [Pico](http://picocms.org)
- Conference: [BigBlueButton](https://github.com/bigbluebutton/bigbluebutton), [Osem](https://github.com/openSUSE/osem), [Dialogs](https://github.com/dialogs), [Spectrum](https://github.com/withspectrum/spectrum), [Mattermost](https://github.com/mattermost), [OpenMeetings](https://openmeetings.apache.org), [Jitsu](https://github.com/jitsi)
- Document Management: [Paperless](https://github.com/the-paperless-project/paperless)
- E-Commerce: [Qor](https://getqor.com), [Magento](https://github.com/magento), [Grandnode](https://github.com/grandnode/grandnode)
- Email Clients: [Rainloop](http://www.rainloop.net), [RoundCube](https://roundcube.net)
- Email Setup: [Mailu](https://mailu.io), [MailCow](https://mailcow.email), [Mail-in-a-Box](https://mailinabox.email)
- File Drop: [PsiTransfer](https://github.com/psi-4ward/psitransfer), [Up1](https://github.com/Upload/Up1), [FilePizza](https://file.pizza)
- File Explorer: [FileRun](https://filerun.com), [Pydio](https://pydio.com)
- Groupware: [SoGo](https://github.com/inverse-inc/sogo), [SuitCRM](https://github.com/salesagility/SuiteCRM)
- News Letters: [LewsNetter](https://github.com/bborn/lewsnetter), [PHP List](https://www.phplist.com), [Dada Mail](https://github.com/justingit/dada-mail)
- Office Suits: [CryptPad](https://cryptpad.fr), [LibreOffice](https://www.libreoffice.org), [onlyoffice](https://github.com/ONLYOFFICE), [NextCloud](https://nextcloud.com)
- Paste Bins: [Snibox](https://snibox.github.io), [PrivateBin](https://github.com/PrivateBin/PrivateBin), [0bin](https://github.com/sametmax/0bin), [Stikked](https://github.com/claudehohl/Stikked)
- Search Engine: [Searx](https://asciimoo.github.io/searx)
- Social Networks: [Mastodon](https://mastodon.social), [Pixelfed](https://pixelfed.org), [diaspora](https://diasporafoundation.org)
- Ticketing: [Zammad](https://github.com/zammad/zammad), [osTicket](https://github.com/osTicket/osTicket), [Helpy](https://github.com/helpyio/helpy)
- URL Shortners: [Shlink](https://shlink.io), [Polr](https://polrproject.org), [Istu](https://github.com/ldidry/lstu), [Linkr](https://github.com/LINKIWI/linkr)
- WiKi/ Knowledge Sharing: [Gollum](https://github.com/gollum/gollum), [Outline](https://github.com/outline/outline), [Wiki JS](https://github.com/Requarks/wiki), [Gitit](https://github.com/jgm/gitit), [TidyWiki5](https://github.com/Jermolene/TiddlyWiki5), [Cowyo](https://github.com/schollz/cowyo)
- XMP: Server: [ejabberd](https://github.com/processone/ejabberd), [MongooseIM](https://github.com/esl/MongooseIM), [OpenFire](https://github.com/igniterealtime/Openfire). Clients: [Candy](https://github.com/candy-chat/candy), [Converse](https://github.com/conversejs/converse.js)


## Bonus #3 - Self-Hosted Sysadmin

- Ad-Block (network-wide): [PiHole](https://pi-hole.net)
- Content Filter: [E2Guardian](http://e2guardian.org), [Squid Guard](http://www.squidguard.org)
- Cron Jobs: [HealthChecks](https://healthchecks.io)
- Dashboards: [Homer](https://github.com/bastienwirtz/homer), [Heimdall](https://heimdall.site), [SWMP](https://swmp.ml), [Uchiwa](https://uchiwa.io) (for Sensu), [Linux Dash](https://github.com/afaqurk/linux-dash)
- DNS: [CoreDNS](https://coredns.io), [KnotDNS](https://www.knot-dns.cz), [Bind 9](https://www.isc.org/bind), [PowerDNS](https://www.powerdns.com)
- Domain Control: [DomainMod](https://domainmod.org), [OctoDNS](https://github.com/github/octodns), [DNSControl](https://stackexchange.github.io/dnscontrol)
- Firewall: [IPFire](https://www.ipfire.org), [PFSense](https://www.pfsense.org), [OpenSense](https://opnsense.org), [ShoreWall](https://shorewall.org)
- Log Management: [GoAccess](https://goaccess.io)
- Monitoring: [Alerta](https://github.com/alerta/alerta), [Cabot](https://github.com/arachnys/cabot), [Cadvisor](https://github.com/google/cadvisor), [CheckMK](https://checkmk.com), [Linux Dash](https://github.com/afaqurk/linux-dash). [NetData](https://www.netdata.cloud), [PS Dash](https://github.com/Jahaja/psdash)
- Proxy: [ShaddowSocks](https://shadowsocks.org), [Privoxy](https://www.privoxy.org)
- Server Status: [Statup](https://github.com/hunterlong/statping), [BotoX / ServerStatus](https://github.com/BotoX/ServerStatus), [Mojeda / ServerStatus](https://github.com/mojeda/ServerStatus), [Statusfy](https://statusfy.co), [Cachet](https://cachethq.io)
- SSH Tools: [RTop](https://github.com/rapidloop/rtop) (sts stats), [Fiche](https://github.com/solusipse/fiche) (cli pastepin)
- Storage DB: [OpenTSBD](http://opentsdb.net), [KairosDB](https://github.com/kairosdb/kairosdb), [InfluxData](https://www.influxdata.com)
- VPN: [OpenVPN](https://community.openvpn.net), [Pritunl](https://pritunl.com)
- Web Servers: [NGINX](https://nginx.org), [Caddy](https://caddyserver.com), [Light TPD](https://www.lighttpd.net)

## Bonus #4 - Self-Hosted Development Tools

- API Management: [Kong](https://github.com/Kong/kong), [Krakend](https://github.com/devopsfaith/krakend), [tyk](https://github.com/TykTechnologies/tyk), [Hasura](https://hasura.io)
- Browser-based IDE: [Code Server](https://github.com/cdr/code-server) (VS Code), [Che](https://github.com/eclipse/che) (Eclipse), [ICEcoder](https://github.com/icecoder/ICEcoder), [ml-workspace](https://github.com/ml-tooling/ml-workspace) (for Data science and ML), [r-studio](https://github.com/rstudio/rstudio) (for R programming)
- Code Reviews: [Phabricator](https://github.com/phacility/phabricator). See also: Git Servers, most of which have CR features
- Containers: [Docker](https://github.com/docker), [LXC](https://github.com/lxc/lxc), [OpenVZ](https://github.com/OpenVZ)
- Continuous Integration: [Drone](https://github.com/drone/drone), [Concourse](https://github.com/concourse/concourse), [BuildBot](https://github.com/buildbot/buildbot), [Strider](https://github.com/Strider-CD/strider), [Jenkins](https://github.com/jenkinsci/jenkins)
- Deployment Automation: [Capustrano](https://github.com/capistrano/capistrano), [Fabric](https://github.com/fabric/fabric), [Mina](https://github.com/mina-deploy/mina), [Munki](https://github.com/munki/munki), [Rocketeer](https://github.com/rocketeers/rocketeer), [Sup](https://github.com/pressly/sup)
- Doc Generators: [FlatDoc](https://github.com/rstacruz/flatdoc), [Docsify](https://github.com/docsifyjs/docsify), [Sphinx](https://github.com/sphinx-doc/sphinx), [ReadTheDocs](https://github.com/readthedocs/readthedocs.org), [Docusarus](https://github.com/facebook/docusaurus), [mkdocs](https://github.com/mkdocs/mkdocs)
- Git Server: [GitBucket](https://gitbucket.github.io), [GitTea](https://gitea.io), [GitLab](https://gitlab.com/gitlab-org/gitlab-foss), [Gogs](https://gogs.io)
- Localization: [Weblate](https://github.com/WeblateOrg/weblate), [Translate/ Pootle](https://github.com/translate/pootle), [Accent](https://github.com/mirego/accent)
- Serverless: [OpenFaas](https://www.openfaas.com), [IronFunctions](https://github.com/iron-io/functions), [LocalStack](https://github.com/localstack/localstack), [fx](https://github.com/metrue/fx)
- Static Site Gen: See [StaticGen.com](https://www.staticgen.com)
- UI Testing: [Selenoid](https://github.com/aerokube/selenoid), [Zalenium](https://github.com/zalando/zalenium), [Selenium](https://github.com/SeleniumHQ/selenium)
- More Tools:
	- [Request Bin](https://github.com/Runscope/requestbin) - Inspect HTTP requests and Debug webhooks
	- [Regexr](https://github.com/gskinner/regexr) - Web tool for for creating, testing, and learning about Regular Expressions
	- [JS Bin](https://github.com/jsbin/jsbin) - Collaborative JavaScript Debugging App, create, test, run and send web code snippets
	- [Koding](https://github.com/koding/koding) - A development platform to orchestrates your project-specific dev environment
	- [Judge0](https://github.com/judge0) - A web compiler accessed through either an API of web-IDE, for executing trusted or untrusted code
	- [SourceGraph](https://github.com/sourcegraph/sourcegraph) - Self-hosted universal code search and navigation engine


## Final Notes


### Conclusion

Many coporations that put profit before people, collecting data and exploiting privacy, many claim to to secure but without being open source it can't be verified, and it is always too late once there has been a breach. Switching to privacy-respecting, open souece software will drastically help inmprove your security, privacy and anonimity online.

However, that's not all you need to do- it is important to also: Use strong and unique passwords, 2-factor authentication,
adopt good networking practices and be mindful of data that is collected when browsing the web. You can see the full
**[personal security checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md)** for more tips to staying safe 🔐

### See Also

- [Personal Security Checklist](/README.md)
- [Gadgets for Privacy & Security](/6_Privacy_and-Security_Gadgets.md)
- [Further Links: Privacy & Security](/4_Privacy_And_Security_Links.md)
- [The Importance of Digital Security & Privacy](/0_Why_It_Matters.md)

This page is just one in this repository of open source privacy & security resources.
So while your here, why not also check out the files linked to above 😉

### Disclaimer

No piece of software is truly secure or private. 

Software is only as secure as the system it is running on. You keep your devices up-to-date and follow good security practices.

It is a good idea to keep your trusted software base small, to reduce potential attack surface. At the same time trusting a single application for too many tasks could be a weakness in your system. So you will need to judge the situation according to your threat model, and carefully plan which software and applications you trust with each segment of your data.

There is often a trade-off between convenience and security. Construct a threat model, and choose a balance that is right for you. In a similar way in some situations there is privacy and security conflict (e.g. Find My Phone is great for security, but terrible for privacy, and anonymous payments may be good for privacy but less secure than insured fiat currency). Again it is about assessing your situation, understanding the risks and making an informed decision.

Open source software has long had a reputation of being more secure than its closed source counterparts. Since bugs are raised transparently, fixed quickly, the code can be checked by experts in the community and there is usually little or no data collection or analytics. That being said, there is no piece of software that it totally bug free, and hence never truly secure or private. Being open source, is in no way a guarantee that something is safe. There is no shortage of poorly-written, obsolete or sometimes plain malicious open source projects on the internet.

When using a hosted or property solution- always check the privacy policy, research the reputation of the organisation, and be weary about which data you trust them with. Where possible choose open source software for security-critical situations.

This list contains packages that range from entry-level to advanced, a lot of the software here will not be appropriate for all audiences.

It is in no way a definitive list of secure applications, and aims only to be a guide, a collection of software and services that myself and others have used, and would recommend. There will always be new vulnerabilities discovered or introduced, bugs and poorly configured systems. It is up to you to do your research, and decide where and how your data is managed.


### Contributing

*Thanks for visiting! If you have suggestions, then you [open an issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose), or [submit a PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master), see: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md). Contributions are welcome, and much appreciated* ☺️


### License 

[![Attribution 4.0 International](https://licensebuttons.net/l/by/3.0/88x31.png)](https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE.md)

*Licensed under [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © [Alicia Sykes](https://aliciasykes.com) 2020*


### Thank you

Thank you for checking out this project- I hope you found it somewhat useful 😊

This list was started by myself- Alicia, with a lot of help + contributions from the community. You can get in contact with me below:

[![Alicia Sykes on Twitter](https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter)](https://twitter.com/Lissy_Sykes)
[![Alicia Sykes on GitHub](https://img.shields.io/github/followers/lissy93?label=Lissy93&style=social)](https://github.com/Lissy93)
[![Alicia Sykes on Mastodon](https://img.shields.io/mastodon/follow/1032965?domain=https%3A%2F%2Fmastodon.social)](https://mastodon.social/web/accounts/1032965)
[![Alicia Sykes on Keybase](https://img.shields.io/badge/aliciasykes--lightgrey?style=social&logo=Keybase)](https://keybase.io/aliciasykes)
[![Alicia Sykes's PGP](https://img.shields.io/badge/PGP--lightgrey?style=social&logo=Let%E2%80%99s%20Encrypt)](https://keybase.io/aliciasykes/pgp_keys.asc)
[![Alicia Sykes's Website](https://img.shields.io/badge/aliciasykes.com--lightgrey?style=social&logo=Tencent%20QQ)](https://aliciasykes.com)

---

Found this helpful? Consider sharing it with others, to help them also improve their digital security 😇

[![Share on Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=for-the-badge&logo=Twitter)](http://twitter.com/share?text=Improve%20your%20personal%20cyber%20security%2C%20check%20out%20this%20ultimate%20list%20of%20privacy-respecting%20software%20on%20GitHub%0Ahttps%3A%2F%2Fgit.io%2FJv66u%20%F0%9F%94%90%20%E2%9C%A8%20%40Lissy_Sykes)
[![Share on LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=for-the-badge&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://git.io/Jv66u&title=The%20Ultimate%20List%20of%20Privacy-Respecting%20Software&summary=Improve%20your%20personal%20cyber%20security%2C%20check%20out%20this%20ultimate%20list%20of%20privacy-respecting%20software%20on%20GitHub%0Ahttps%3A%2F%2Fgit.io%2FJv66u%20%F0%9F%94%90%20%E2%9C%A8&source=https://github.com/Lissy93)
[![Share on Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=for-the-badge&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![Share on Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=for-the-badge&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Improve%20your%20personal%20cyber%20security%2C%20check%20out%20this%20ultimate%20list%20of%20privacy-respecting%20software%20on%20GitHub%0Ahttps%3A%2F%2Fgit.io%2FJv66u%20by%20%40lissy93%20%20%F0%9F%94%90%20%E2%9C%A8)




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
[SuperFreezZ]: https://f-droid.org/en/packages/superfreeze.tool.android
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
