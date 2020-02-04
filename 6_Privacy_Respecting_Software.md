[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)

# Privacy & Securty-Focused Software and Services
> A curated list of privacy-respecting apps, software and providers 🔐

**Too long? 🦒** See the [TLDR version](https://github.com/Lissy93/personal-security-checklist/blob/master/2_TLDR_Short_List.md#open-source-privacy-focused-software) instead.


## Intro

If you want greatly increase your digital security, and protect your personal information, then
start migrating to encrypted, privacy-respecting open source software and services.
Using open-source applications with a strong emphasis on security, will help stop
large corporations, governments and hackers from logging, storing or selling your personal details.

#### Categories

- [Password Managers](#password-managers)
- [2-Factor Authentication](#2-factor-authentication)
- [File Encryption](#file-encryption)
- [Encrypted Messaging](#encrypted-messaging)
- [Encrypted Email](#encrypted-email)
- [Browsers](#browsers)
- [Search Engines](#search-engines)
- [Virtual Private Networks](#virtual-private-networks)
- [Operating Systems](#operating-systems)
- [Browser Extensions](#browser-extensions)
- [Mobile Apps](#mobile-apps)


#### See Also
- [Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist)


## Password Managers

| Provider | Description |
| --- | --- |
**[BitWarden](https://bitwarden.com)**  | Free and open source, cross-platform password manager with sync
**[1Password](https://1password.com)** | Open source, fully-featured cross-platform password manager with sync. Free for self-hosted (or $3/ month hosted)
**[KeePassXC](https://keepassxc.org)** | Open source, secure password manager, but without cloud-sync capabilities. KeePassXC is a community fork of [KeePass](https://keepass.info/)
**[LessPass](https://lesspass.com)** | LessPass is a little different, since it generates your passwords using a hash of the website name, your username and a single master-passphrase that you reuse. It ommits the need for you to ever need to store or sync your passwords. They have apps for all the common platforms and a CLI, but you can also self-host it.


## 2-Factor Authentication

| Provider | Description |
| --- | --- |
**[Aegis](https://getaegis.app)**  | Free, secure and open source app for manageing 2-step verification tokens, on Android
**[AndOTP](https://github.com/andOTP/andOTP)** | Another open source, secure authanticator app. AndOTP is well established with a strong large user base

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
**[KeyBase](https://keybase.io/)** | KeyBase allows encrypted real-time chat, group chats, and public and private file sharing. It also lets you cryptographically sign messages, and prove your ownership to other social identities (Twitter, Reddit, GitHub, etc), and send or receive Stella or BitCoin to other users. It's slightly more complex to use than Signal, but has some great cryptography features, and is good for group chats
**[Silence](https://silence.im/)** | If you're restricted to only sending SMS/MMS, then Silence makes it easy to encrypt messages between 2 devices. This is important since traditional text messaging is inherently insecure. It's easy-to-use, reliable and secure- but has fallen in popularity, now that internet-based messaging is often faster and more flexible
**[Matrix](https://matrix.org/)** | Matrix is a little different since it is a [federated](https://en.wikipedia.org/wiki/Federation_(information_technology)) messaging service, hence provides an open network for secure, decentralized, real-time communication. [Riot](https://riot.im/) is a popular cross-platform, feature-full open source Matrix client. You can host your Matrix own server, or use existing ones- it functions in a similar way to Slack, so is good for groups, projects, and organizations
**[Jami](https://jami.net/)** | Jami is a [peer-to-peer](https://en.wikipedia.org/wiki/Peer-to-peer) service, meaning it connects message recipients to each other directly. P2P services don't require a third-party server, expose minimal data to third parties, and usually E2E encrypted by default. Other P2P alternatives include [Briar](https://briarproject.org/), [Bit Message](https://bitmessage.org/), and [Tox](https://tox.chat/) (beta)
**[OpenPGP](https://www.openpgp.org/)** | Slightly harder to use, slower, but still widley used. Note that there are known issues in the PGP standard, but still considered secure for general purpose use. Using [GnuPG](https://gnupg.org/download/index.html), you can encrypt messages following the OpenPGP standard. OpenPGP was defined by the IETF, proposed in [RFC 4880](https://tools.ietf.org/html/rfc4880) and derived from the PGP software, (created by Phil Zimmermann, now owned by [Symantec](https://www.symantec.com/products/encryption)). There have been vulnrabilities found in the OpenPGP and S/MIME, defined in [EFAIL](https://efail.de/), so it is often better to use an encrypted messaging or email app instead.

#### Other Notable Mentions
[Chat Secure](https://chatsecure.org/) and [Status](https://status.im/), are private, encrypted, open source messenger apps. They are both still in early stages, so were'nt included in the main list

#### Word of Warning: Closed Source Messaging 
Many messaging apps claim to be secure, but if they are not open source, then this cannot be verified- and they **should not be trusted**. This applies to [Telegram](https://telegram.org), [Threema](https://threema.ch), [Cypher](https://www.goldenfrog.com/cyphr), [Wickr](https://wickr.com/), [Silent Phone](https://www.silentcircle.com/products-and-solutions/silent-phone/) and [Viber](https://www.viber.com/), to name a few- these apps should not be used to communicate any sensitive data.


## Encrypted Email

Email, is not secure- your messages can be easily intercepted and read. Coporations scan the content of your mail, to build up a profile of you, either to show you targeted ads or to sell onto third-parties. Through the [Prism Program](https://en.wikipedia.org/wiki/PRISM_(surveillance_program)), the government also has full access to the plain text and meta data of all sent and received emails. This applies to Gmail, Outlook Mail, Yahoo Mail, GMX, ZoHo, iCloud, AOL and more.

The below email providers are private, encrypted and safe

| Provider | Description |
| --- | --- |
**[ProtonMail](https://protonmail.com/)** | An open-source, end-to-end encrypted anonymous email service. ProtonMail has a modern easy-to-use and customizable UI, as well as fast, secure native mobile apps. ProtonMail has all the features that you'd expect from a modern email service and is based on simplicity without sacrificing security. It has a free plan or a premium option for using custom domains. ProtonMail requires no personally identifiable information for signup, they have a [.onion](https://protonirockerxow.onion) server, for access via Tor, and they accept anonymous payment: BTC and cash (as well as the normal credit card and PayPal).
**[Tutanota](https://tutanota.com/)** | Free and open source email service based in Germany. It has a basic intuitive UI, secure native mobile apps, anonymous signup, and a .onion site. Tutonota has a full-featured free plan or a premium subscription for businesses allowing for custom domains ($12/ month).
**[Mailfence](https://mailfence.com/)** | Mailfence supports OpenPGP so that you can manually exchange encryption keys independently from the Mailfence servers, putting you in full control. Mailfence has a simple UI, similar to that of Outlook, and it comes with bundled with calendar, address book, and files. All mail settings are highly customizable, yet still clear and easy to use. Sign up is not anonymous, since your name, and prior email address is required. There is a fully-featured free plan, or you can pay for premium, and use a custom domain ($2.50/ month, or $7.50/ month for 5 domains), where BitCoin, LiteCoin or credit card is accepted.

See [OpenTechFund- Secure Email](https://github.com/OpenTechFund/secure-email) for more details.


#### Other Notable Mentions
[HushMail](https://www.hushmail.com/tapfiliate/?tap_a=44784-d2adc0&tap_s=724845-260ce4&program=hushmail-for-small-business), [StartMail](https://www.startmail.com), [Kolab Now](https://kolabnow.com), [Posteo](https://posteo.de), and [Disroot](https://disroot.org/en)

#### Alias Services
Revealing your real email address online can put you at risk. Using something like [33Mail](http://33mail.com/Dg0gkEA), which is an aliasing service, allows you to use a different email address for each online account, with all emails landing in your real inbox. It lets you identify which provider leaked your email address, and block an allias. Email addresses are created automatically, the first time you use them, and the messages land in your normal inbox. You can even reply to mail, to hide your real email address.

[33mail.com](http://33mail.com/Dg0gkEA) is free, but there is a primium plan ($1/ month) if you'd like to use a custom domain. Alternativley you could host your own instance, or is you have ProtonMail you can manually create email alliases.

#### Self-Hosted Email
If you do not want to trust an email provider with your messages, you can host your own mail server. Without experience, this can be notoriously hard to correctly configure, especially when it comes to security. You may also find that cost, performance and features make it a less attractive optrion. If you do decide to go down this route, [Mail-in-a-box](https://mailinabox.email/), is an easy to deploy, open source mail server. It aims to promote decentralization, innovation, and privacy on the web, as well as have automated, auditable, and idempotent system configuration. Other ready-to-go self-hosted mail options include [Mailu](https://mailu.io/1.7/) and [Mail Cow](https://mailcow.email/), both of which are docker containers.

#### Mail Clients
Email clients are the programs used to interact with the mail server. For hosted email, then the web and mobile clients provided by your email service are usually adequate, and may be the most secure option. For self-hosted email, you will need to install and configure mail clients for web, desktop or mobile.

- **Dektop** - [Mozilla Thunderbird](https://www.thunderbird.net) is an open source, highly customizable, secure and private desktop email client, for Windows, macOS, and Linux. If you are using ProtonMail, then you can use the [ProtonMail Bridge](https://protonmail.com/bridge/thunderbird), to sync your emails to either Thunderbird or Microsoft Outlook. In terms of security, the disadvantage, is that most desktop clients do not support 2FA, so it is important to keep your computer secured, however they are not vulnrable to the common browser attacks, that a web client would be. 
- **Web** - If you are self-hosting your mail server, you will probably want a web-based email client. [RainLoop](http://www.rainloop.net) and [RoundCube](https://roundcube.net) are both good open source options.
- **Mobile** - the most secure option is usually to use the app provided by your mail provider. If your mail server is self-hosted, then consider [FairMail](https://email.faircode.eu/) which is a fully featured, open source, privacy oriented email app for Android. There is also [pretty Easy privacy p≡p](https://play.google.com/store/apps/details?id=security.pEp), which has OpenPGP built in. [K-9 Mail](https://play.google.com/store/apps/details?id=com.fsck.k9), which has been around almost as long as Android, has a solid reputation for privacy and security features.


## Browsers

| Provider | Description |
| --- | --- |
**[Brave Browser](https://brave.com/?ref=ali721)** | Brave Browser, is currently one of the most popular private browsers- it provides unmatched speed, security, and privacy by blocking trackers. It also pays you in [BAT tokens](https://basicattentiontoken.org/) for using it. The interface is very clear and simple and offers all the features of Chrome/ Chromium + more. Brave also has Tor built-in, when you open up a private tab/ window.
**[FireFox](https://www.mozilla.org/firefox)** | Compared to Chrome, Internet Explorer and Safari- Firefox is significantly more secure, and offers some nifty privacy features. After installing, there are a couple of small tweaks you will need to make, in order to secure Firefox. You can follow one of these guides by: [Restore Privacy](https://restoreprivacy.com/firefox-privacy/), [Security Gladiators](https://securitygladiators.com/firefox-privacy-tips/) or [12Bytes](https://12bytes.org/7750)
**[Bromite](https://www.bromite.org/)** | Bromite is Chromium (Chrome without Google) plus ad blocking and enhanced privacy. It provides a no-clutter browsing experience without privacy-invasive features- it's lightweight and minimal
**[Tor Browser](https://www.torproject.org/)** | Undoubtedly Tor is the king of secure browsers. It provides an extra layer of anonymity, by encrypting each of your requests, then routing it through several nodes, making it near-impossible for you to be tracked. It does make every-day browsing a little slower, and some sites will require you to complete a CAPTCHA, and others may not work at all on Tor

See also: [Recommended Browser Extensions](#browser-extensions)


## Search Engines

Google frequently modifies and manipulates search, and is in persuit of eliminating competition and promoting their own services above others. They also track, collect, use and sell detailed user search and meta data.

| Provider | Description |
| --- | --- |
**[DuckDuckGo](https://duckduckgo.com/)** | DuckDuckGo is a very user-friendly, fast and secure search engine. It's totally private, with no trackers, cookies or ads. It's also highly customisable, with dark-mode, many languages and features. They even have a [.onion](https://3g2upl4pq6kufc4m.onion ) URL, for use with Tor.
**[Start Page](https://www.startpage.com/)** | Start Page displays Googles results, through but through their servers- meaning Google can not track you, but you still see results similar to what you would with Google. (European users, see also [ixquick](http://ixquick.eu/))
**[Qwant](https://www.qwant.com/)** | French service that aggregates Bings results, with it's own results. Quant doesn't plant any cookies, nor have any trackers or third-party advertising. It returns non-biased search results, with no promotions. Quant has a uinique, but nice UI

Another option would be to host your own- [Searx](https://asciimoo.github.io/searx/) is a good option, since it is easy to set-up, secure, private and is backed by a strong community


## Virtual Private Networks

VPNs are good for getting round censorship, increasing protection on public WiFi, obscuring your IP address, and reducing what data your ISP can log. But for the most anonymity, you should use [Tor](https://www.torproject.org/). VPNs do not mean you are automatically protected, or anonymous (see below). You could host your own VPN, which would allow you to have full visibility and control over logs. 

| Provider | Description |
| --- | --- |
**[Mullvad](http://mullvad.net/en/)** | Mullvad is one of the best for privacy, they own all their own servers and have a totally anonymous sign up process, you don't need to provide any details at all, you can choose to pay annonymously too (with Monero, BTC or cash)
**[ProtonVPN](https://protonvpn.com/)** | From the creators of ProtonMail, ProtonVPN has a solid reputation. They have a full suit of user-friendly native mobile and desktop apps. ProtonVPN is one of the few "trustworthy" providers that also offer a free plan


#### Other VPN Options
[Perfect Privacy](https://www.perfect-privacy.com/) -- [TorGuard](https://torguard.net/aff.php?aff=6024) -- [VyperVPN](https://www.dpbolvw.net/click-9242873-13805759) -- [IVPN](https://www.ivpn.net/) -- [PureVPN](https://www.anrdoezrs.net/click-9242873-13842740) -- [NordVPN](https://www.kqzyfj.com/l5115shqnhp4E797DC8467D69A6D) -- [IVPN](https://www.ivpn.net/) -- [VirtualShield](https://virtualshield.com/?rfsn=3739717.4cba76) -- [VPN.ac](https://vpn.ac/aff.php?aff=2178) -- [WindScribe](https://windscribe.com/?affid=6nh59z1r)

**Full VPN Comparison**: [thatoneprivacysite.net](https://thatoneprivacysite.net/).

#### Word of Warning
- *A VPN does not make you anonymous- it merely chnages your IP accress to that of your VPN provider, instead of ISP. Your browsing session can still be linked back to your real identity either through your system details (such as user agent, screen resolution even typing patterns), cookies/ session storage, or by the identifiable data that you enter. [Read more about fingerprinting](https://pixelprivacy.com/resources/browser-fingerprinting/)*
- *Logging- If you choose to use a VPN because you do not agree with your ISP logging your full browsing history, then it is important to keep in mind that your VPN provider can see (and mess with) all your traffic. Many VPNs claim not to keep logs, but you cannot be certain of this. See [this article](https://gist.github.com/joepie91/5a9909939e6ce7d09e29) for more*
- [Tor](https://www.torproject.org/) is the best option for private browsing

#### Considerations
*While choosing a VPN, consider the following: Logging policy (logs are bad), Jurisdiction (avoid 5-eyes), Number of servers, availability and average load. Payment method (anonymous methods such as BTC, Monero or cash are better), Leak protection (1st-party DNS servers = good, and check if IPv6 is supported), protocols (OpenVPN and WireGuard = good). Finally, usability of their apps, user reviews and download speeds.*

#### Self-Hosted VPN
If you don't trust a VPN provider not to keep logs, then you could self-host your own VPN. This gives you you total control, but at the cost of anonymity (since your cloud provider, will require your billing info). See [Streisand](https://github.com/StreisandEffect/streisand), to learn more, and get started with running a VPN.
[Digital Ocean](https://m.do.co/c/3838338e7f79) provides flexible, secure and easy Linux VMs, (from $0.007/hour or $5/month), this guide explains how to set up VPN on: [CentOS 7](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-centos-7) or [Ubuntu 18.4+](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-configure-an-openvpn-server-on-centos-7). See more about configuring [OpenVPN](https://openvpn.net/vpn-server-resources/digital-ocean-quick-start-guide/) or [IKEv2](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-ikev2-vpn-server-with-strongswan-on-ubuntu-18-04-2). Alternativley, here is a [1-click install script](http://dovpn.carlfriess.com/)for  on [Digital Ocean](https://m.do.co/c/3838338e7f79), by Carl Friess.

## Operating Systems

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


## Browser Extensions

The following browser add-ons give you better controll over what content is able to be loaded and executed while your browsing.

| Provider | Description |
| --- | --- |
**[Privacy Badger](https://www.eff.org/privacybadger)** | Blocks invisible trackers, in order to stop advertisers and other third-parties from secretly tracking where you go and what pages you look at. **Download**: [Chrome][privacy-badger-chrome] \ [Firefox][privacy-badger-firefox]
**[HTTPS Everywhere](https://eff.org/https-everywhere)** | Forces sites to load in HTTPS, in order to encrypt your communications with websites, making your browsing more secure. **Download**: [Chrome][https-everywhere-chrome] \ [Firefox][https-everywhere-firefox]
**[uBlock Origin](https://github.com/gorhill/uBlock)** | Blocks ads, because ads track you. **Download**: [Chrome][ublock-chrome] \ [Firefox][ublock-firefox]
**[ScriptSafe](https://github.com/andryou/scriptsafe)** | Allows you yo block the execution of certain scripts. **Download**: [Chrome][script-safe-chrome] \ [Firefox][script-safe-firefox]
**[WebRTC-Leak-Prevent](https://github.com/aghorler/WebRTC-Leak-Prevent)** | Provides user control over WebRTC privacy settings in Chromium, in order to prevent WebRTC leaks. **Download**: [Chrome][web-rtc-chrome]. For Firefox users, you can do this through [browser settings](https://www.privacytools.io/browsers/#webrtc). Test for WebRTC leaks, with [browserleaks.com/webrtc](https://browserleaks.com/webrtc)
**[Vanilla Cookie Manager](https://github.com/laktak/vanilla-chrome)** | A Whitelist Manager that helps protect your privacy, through automatically removing unwanted cookies. **Download**: [Chrome][vanilla-cookie-chrome]
**[Privacy Essentials](https://duckduckgo.com/app)** | Simple extension by DuckDuckGo, which grades the security of each site. **Download**: [Chrome][privacy-essentials-chrome] \ [Firefox][privacy-essentials-firefox]

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
**[Daedalus]** | No root required Android DNS modifier and hosts/DNSMasq resolver, works by creating a VPN tunnel to modify the DNS settings. Useful if you want to change your resolver to a more secure/ private provider, or use DNS over HTTPS
**[Greenify]** | Stops certain apps from running in the background. Was intended to be used to speed up your phone, and prolong battery life, but it also stops certain apps from collecting data and tracking your actions while running in the background
**[Secure Task]** | Triggers actions, when certain security conditions are met, such as multiple failed login attempts or monitor settings changed. It does require [Tasker], and needs to be set up with ADB, device does not need to be rooted
**[Cryptomator]** | Encryptes files and folders client-side, before uploading them to cloud storage (such as Google Drive, One Drive or Dropbox), meaning none of your personal documents leave your device in plain text
**[1.1.1.1]** | Lets you use CloudFlares fast and secure 1.1.1.1 DNS, with DNS over HTTPS, and also has the option to enable CloudFlares WARP+ VPN
**[Fing App]** | A network scanner to help you monitor and secure your WiFi network. The app is totally free, but to use the advanced controlls, you will need a [Fing Box](https://amzn.to/2vFDF4n)
**[FlutterHole]** | Easy monitoring and controll over your [Pi Hole](https://pi-hole.net/) instance. Pi Hole is great for security, privacy and speed

#### Other Notable Mentions
For more open source security & privacy apps, check out [The Guardian Project], [The Tor Project], [Oasis Feng] and [Marcel Bokhorst]- all of which are trusted developers or organisations, who've done amazing work.

For *advanced* users, the following tools can be used to closely monitor your devise and networks, in order to detect any unusual activity. [PortDroid] for network analysis, [Packet Capture] to monitor network traffic, [SysLog] for viewing system logs, [Dexplorer] to read .dex or .apk files for your installed apps, and [Check and Test] to check status and details of devices hardware

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
