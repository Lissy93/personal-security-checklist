
[![Awesome](https://awesome.re/badge-flat2.svg)](https://github.com/zbetcheckin/Security_list)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)
[![Contributors](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](https://github.com/Lissy93/personal-security-checklist/graphs/contributors)

<p align="center"><img src="https://i.ibb.co/rGQK71g/personal-security-checklist-6.png" /></p>

*<p align="center">A curated checklist of tips to protect your digital security and privacy</p>*

### Contents

[<img src="https://i.ibb.co/XbyGTrP/1-authentication-2-36x36.png" width="28" height="28" /> Authentication](#authentication)<br>
[<img src="https://i.ibb.co/8KMrdbX/2-internet-36x36.png" width="28" height="28" /> Browsing the Web](#web-browsing)<br>
[<img src="https://i.ibb.co/7NrXW3L/5-email-36x36.png" width="28" height="28" /> Email](#emails)<br>
[<img src="https://i.ibb.co/DrWJBT9/13-messaging-36x36.png" width="28" height="28" /> Secure Messaging](#secure-messaging)<br>
[<img src="https://i.ibb.co/GFYyXMd/6-social-media-36x36.png" width="28" height="28" /> Social Media](#social-media)<br>
[<img src="https://i.ibb.co/0VTZQpH/3-networking-36x36.png" width="28" height="28" /> Networks](#networking)<br>
[<img src="https://i.ibb.co/F3WwqsV/7-phones-36x36.png" width="28" height="28" /> Mobile Phones](#mobile-devices)<br>
[<img src="https://i.ibb.co/ZftcgJq/8-computers-36x36.png" width="28" height="28" /> Personal Computers](#personal-computers)<br>
[<img src="https://i.ibb.co/b2S9372/9-smart-home-36x36.png" width="28" height="28" /> Smart Home](#smart-home)<br>
[<img src="https://i.ibb.co/4JTqL5y/12-finance-36x36.png" width="28" height="28" /> Personal Finance](#personal-finance)<br>
[<img src="https://i.ibb.co/KVPV1Lk/10-human-36x36.png" width="28" height="28" /> Human Aspect](#sensible-computing)<br>
[<img src="https://i.ibb.co/9NbhBww/11-physical-36x36.png" width="28" height="28" /> Physical Security](#physical-security)<br>

Too long? 🦒 See the [TLDR version](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/articles/2_TLDR_Short_List.md) instead.

For a list of privacy-respecting software, check out [Awesome-Privacy](https://github.com/lissy93/awesome-privacy).

A mirror of this repo is available at [codeberg.org/alicia/personal-security-checklist](https://codeberg.org/alicia/personal-security-checklist).

---

<!-- checklist-start -->
## Authentication

Most reported data breaches are caused by the use of weak, default or stolen passwords (according to [this Verizon report](http://www.verizonenterprise.com/resources/reports/rp_dbir-2016-executive-summary_xg_en.pdf)). Use long, strong and unique passwords, manage them in a secure password manager, enable 2-factor authentication, keep on top of breaches and take care while logging into your accounts.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Use a Strong Password** | Essential | If your password is too short, or contains dictionary words, places or names- then it can be easily cracked through brute force, or guessed by someone. The easiest way to make a strong password, is by making it long (12+ characters)- consider using a 'passphrase', made up of many words. Alternatively, use a password generator to create a long, strong random password. Have a play with [Security.org's How Secure Is My Password?](https://www.security.org/how-secure-is-my-password/), to get an idea of how quickly common passwords can be cracked. Read more about creating strong passwords: [securityinabox.org](https://securityinabox.org/en/passwords/passwords-and-2fa/)
**Don't reuse Passwords** | Essential | If someone was to reuse a password, and one site they had an account with suffered a leak, then a criminal could easily gain unauthorized access to their other accounts. This is usually done through large-scale automated login requests, and it is called Credential Stuffing. Unfortunately this is all too common, but it's simple to protect against- use a different password for each of your online accounts
**Use a Secure Password Manager** | Essential | For most people it is going to be near-impossible to remember hundreds of strong and unique passwords. A password manager is an application that generates, stores and auto-fills your login credentials for you. All your passwords will be encrypted against 1 master passwords (which you must remember, and it should be very strong). Most password managers have browser extensions and mobile apps, so whatever device you are on, your passwords can be auto-filled. A good all-rounder is [Bitwarden](https://awesome-privacy.xyz/essentials/password-managers/bitwarden), or see [Recommended Password Managers](https://awesome-privacy.xyz/essentials/password-managers)
**Avoid sharing passwords** | Essential | While there may be times that you need to share access to an account with another person, you should generally avoid doing this because it makes it easier for the account to become compromised. If you absolutely do need to share a password for example when working on a team with a shared account this should be done via features built into a password manager.
**Enable 2-Factor Authentication** | Essential | 2FA is where you must provide both something you know (a password) and something you have (such as a code on your phone) to log in. This means that if anyone has got your password (e.g. through phishing, malware or a data breach), they will not be able to log into your account. It's easy to get started, download [an authenticator app](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) onto your phone, and then go to your account security settings and follow the steps to enable 2FA. Next time you log in on a new device, you will be prompted for the code that displays in the app on your phone (it works without internet, and the code usually changes every 30-seconds)
**Keep Backup Codes Safe** | Essential | When you enable multi-factor authentication, you will usually be given several codes that you can use if your 2FA method is lost, broken or unavailable. Keep these codes somewhere safe to prevent loss or unauthorized access. You should store these on paper or in a safe place on disk (e.g. in offline storage or in an encrypted file/drive). Don't store these in your Password Manager as 2FA sources and passwords and should be kept separately.
**Sign up for Breach Alerts** | Optional | After a website suffers a significant data breach, the leaked data often ends up on the internet. There are several websites that collect these leaked records, and allow you to search your email address to check if you are in any of their lists. [Firefox Monitor](https://monitor.firefox.com), [Have I been pwned](https://haveibeenpwned.com) and [DeHashed](https://dehashed.com) allow you to sign up for monitoring, where they will notify you if your email address appears in any new data sets. It is useful to know as soon as possible when this happens, so that you can change your passwords for the affected accounts. [Have i been pwned](https://awesome-privacy.xyz/security-tools/online-tools/have-i-been-pwned) also has domain-wide notification, where you can receive alerts if any email addresses under your entire domain appear (useful if you use aliases for [anonymous forwarding](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding))
**Shield your Password/ PIN** | Optional | When typing your password in public places, ensure you are not in direct line of site of a CCTV camera and that no one is able to see over your shoulder. Cover your password or pin code while you type, and do not reveal any plain text passwords on screen
**Update Critical Passwords Periodically** | Optional | Database leaks and breaches are common, and it is likely that several of your passwords are already somewhere online. Occasionally updating passwords of security-critical accounts can help mitigate this. But providing that all your passwords are long, strong and unique, there is no need to do this too often- annually should be sufficient. Enforcing mandatory password changes within organisations is [no longer recommended](https://duo.com/decipher/microsoft-will-no-longer-recommend-forcing-periodic-password-changes), as it encourages colleagues to select weaker passwords
**Don’t save your password in browsers** | Optional | Most modern browsers offer to save your credentials when you log into a site. Don’t allow this, as they are not always encrypted, hence could allow someone to gain access into your accounts. Instead use a dedicated password manager to store (and auto-fill) your passwords
**Avoid logging in on someone else’s device** | Optional | Avoid logging on other people's computer, since you can't be sure their system is clean. Be especially cautious of public machines, as malware and tracking is more common here. Using someone else's device is especially dangerous with critical accounts like online banking. When using someone else's machine, ensure that you're in a private/ incognito session (Use Ctrl+Shift+N/ Cmd+Shift+N). This will request browser to not save your credentials, cookies and browsing history.
**Avoid password hints** | Optional | Some sites allow you to set password hints. Often it is very easy to guess answers. In cases where password hints are mandatory use random answers and record them in password manager (`Name of the first school: 6D-02-8B-!a-E8-8F-81`)
**Never answer online security questions truthfully** | Optional | If a site asks security questions (such as place of birth, mother's maiden name or first car etc), don't provide real answers. It is a trivial task for hackers to find out this information online or through social engineering. Instead, create a fictitious answer, and store it inside your password manager. Using real-words is better than random characters, [explained here](https://news.ycombinator.com/item?id=29244870)
**Don’t use a 4-digit PIN** | Optional | Don’t use a short PIN to access your smartphone or computer. Instead, use a text password or much longer pin. Numeric passphrases are easy crack, (A 4-digit pin has 10,000 combinations, compared to 7.4 million for a 4-character alpha-numeric code)
**Avoid using SMS for 2FA** | Optional | When enabling multi-factor authentication, opt for app-based codes or a hardware token, if supported. SMS is susceptible to a number of common threats, such as [SIM-swapping](https://www.maketecheasier.com/sim-card-hijacking) and [interception](https://secure-voice.com/ss7_attacks). There's also no guarantee of how securely your phone number will be stored, or what else it will be used for. From a practical point of view, SMS will only work when you have signal, and can be slow. If a website or service requires the usage of a SMS number for recovery consider purchasing a second pre-paid phone number only used for account recovery for these instances.
**Avoid using your PM to Generate OTPs** | Advanced | Many password managers are also able to generate 2FA codes. It is best not to use your primary password manager as your 2FA authenticator as well, since it would become a single point of failure if compromised. Instead use a dedicated [authenticator app](https://github.com/Lissy93/awesome-privacy#2-factor-authentication) on your phone or laptop
**Avoid Face Unlock** | Advanced | Most phones and laptops offer a facial recognition authentication feature, using the camera to compare a snapshot of your face with a stored hash. It may be very convenient, but there are numerous ways to [fool it](https://www.forbes.com/sites/jvchamary/2017/09/18/security-apple-face-id-iphone-x/) and gain access to the device, through digital photos and reconstructions from CCTV footage. Unlike your password- there are likely photos of your face on the internet, and videos recorded by surveillance cameras
**Watch out for Keyloggers** | Advanced | A hardware [keylogger](https://en.wikipedia.org/wiki/Hardware_keylogger) is a physical device planted between your keyboard and the USB port, which intercepts all key strokes, and sometimes relays data to a remote server. It gives a hacker access to everything typed, including passwords. The best way to stay protected, is just by checking your USB connection after your PC has been unattended. It is also possible for keyloggers to be planted inside the keyboard housing, so look for any signs that the case has been tampered with, and consider bringing your own keyboard to work. Data typed on a virtual keyboard, pasted from the clipboard or auto-filled by a password manager can not be intercepted by a hardware keylogger.
**Consider a Hardware Token** | Advanced | A U2F/ FIDO2 security key is a USB (or NFC) device that you insert while logging in to an online service, in to verify your identity, instead of entering a OTP from your authenticator. [SoloKey](https://solokeys.com) and [NitroKey](https://www.nitrokey.com) are examples of such keys. They bring with them several security benefits, since the browser communicates directly with the device and cannot be fooled as to which host is requesting authentication, because the TLS certificate is checked. [This post](https://security.stackexchange.com/a/71704) is a good explanation of the security of using FIDO U2F tokens. Of course it is important to store the physical key somewhere safe, or keep it on your person. Some online accounts allow for several methods of 2FA to be enabled
**Consider Offline Password Manager** | Advanced | For increased security, an encrypted offline password manager will give you full control over your data. [KeePass](https://awesome-privacy.xyz/essentials/password-managers/keepass) is a popular choice, with lots of [plugins](https://[KeePass](https://awesome-privacy.xyz/essentials/password-managers/keepass).info/plugins.html) and community forks with additional compatibility and functionality. Popular clients include: [KeePassXC](https://keepassxc.org) (desktop), [KeePassDX](https://www.keepassdx.com) (Android) and [StrongBox](https://apps.apple.com/us/app/strongbox-password-safe/id897283731) (iOS). The drawback being that it may be slightly less convenient for some, and it will be up to you to back it up, and store it securely
**Consider Unique Usernames** | Advanced | Having different passwords for each account is a good first step, but if you also use a unique username, email or phone number to log in, then it will be significantly harder for anyone trying to gain unauthorised access. The easiest method for multiple emails, is using auto-generated aliases for anonymous mail forwarding. This is where [anything]@yourdomain.com will arrive in your inbox, allowing you to use a different email for each account (see [Mail Alias Providers](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding)). Usernames are easier, since you can use your password manager to generate, store and auto-fill these. Virtual phone numbers can be generated through your VOIP provider

### Recommended Software
- [Password Managers](https://github.com/Lissy93/awesome-privacy#password-managers)
- [2-Factor Authentication](https://github.com/Lissy93/awesome-privacy#2-factor-authentication)


## Web Browsing

Most websites on the internet will use some form of tracking, often to gain insight into their users behaviour and preferences. This data can be incredibly detailed, and so is extremely valuable to corporations, governments and intellectual property thieves. Data breaches and leaks are common, and deanonymizing users web activity is often a trivial task.

There are two primary methods of tracking; stateful (cookie-based), and stateless (fingerprint-based). Cookies are small pieces of information, stored in your browser with a unique ID that is used to identify you. Browser fingerprinting is a highly accurate way to identify and track users wherever they go online. The information collected is quite comprehensive, and often includes browser details, OS, screen resolution, supported fonts, plugins, time zone, language and font preferences, and even hardware configurations.

This section outlines the steps you can take, to be better protected from threats, minimise online tracking and improve privacy.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Block Ads** | Essential | Using an ad-blocker can help improve your privacy, by blocking the trackers that ads implement. [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) is a very efficient and open source browser addon, developed by Raymond Hill. When 3rd-party ads are displayed on a webpage, they have the ability to track you, gathering personal information about you and your habits, which can then be sold, or used to show you more targeted ads, and some ads are plain malicious or fake. Blocking ads also makes pages load faster, uses less data and provides a less cluttered experience.
**Ensure Website is Legitimate** | Basic | It may sound obvious, but when you logging into any online accounts, double check the URL is correct. Storing commonly visited sites in your bookmarks is a good way to ensure the URL is easy to find. When visiting new websites, look for common signs that it could be unsafe: Browser warnings, redirects, on-site spam and pop-ups. You can also check a website using a tool, such as: [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total), [IsLegitSite](https://www.islegitsite.com), [Google Safe Browsing Status](https://transparencyreport.google.com/safe-browsing/search) if you are unsure.
**Watch out for Browser Malware** | Basic | Your system or browser can be compromised by spyware, miners, browser hijackers, malicious redirects, adware etc. You can usually stay protected, just by: ignoring pop-ups, be wary of what your clicking, don't proceed to a website if your browser warns you it may be malicious. Common signs of browser malware include: default search engine or homepage has been modified, toolbars, unfamiliar extensions or icons, significantly more ads, errors and pages loading much slower than usual. These articles from Heimdal explain [signs of browser malware](https://heimdalsecurity.com/blog/warning-signs-operating-system-infected-malware), [how browsers get infected](https://heimdalsecurity.com/blog/practical-online-protection-where-malware-hides) and [how to remove browser malware](https://heimdalsecurity.com/blog/malware-removal).
**Use a Privacy-Respecting Browser** | Essential | [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) (with a few tweaks) and [Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser) are secure, private-respecting browsers. Both are fast, open source, user-friendly and available on all major operating systems. Your browser has access to everything that you do online, so if possible, avoid Google Chrome, Edge and Safari as (without correct configuration) all three of them, collect usage data, call home and allow for invasive tracking. Firefox requires a few changes to achieve optimal security, for example - [arkenfox](https://github.com/arkenfox/user.js/wiki) or [12byte](https://12bytes.org/firefox-configuration-guide-for-privacy-freaks-and-performance-buffs/)'s user.js configs. See more: [Privacy Browsers](https://github.com/Lissy93/awesome-privacy#browsers).
**Use a Private Search Engine** | Essential | Using a privacy-preserving, non-tracking search engine, will reduce risk that your search terms are not logged, or used against you. Consider [DuckDuckGo](https://awesome-privacy.xyz/essentials/search-engines/duckduckgo), or [Qwant](https://awesome-privacy.xyz/essentials/search-engines/qwant). Google implements some [incredibly invasive](https://hackernoon.com/data-privacy-concerns-with-google-b946f2b7afea) tracking policies, and have a history of displaying [biased search results](https://www.businessinsider.com/evidence-that-google-search-results-are-biased-2014-10). Therefore Google, along with Bing, Baidu, Yahoo and Yandex are incompatible with anyone looking to protect their privacy. It is recommended to update your [browsers default search](https://duckduckgo.com/install) to a privacy-respecting search engine.
**Remove Unnecessary Browser Addons** | Essential | Extensions are able to see, log or modify anything you do in the browser, and some innocent looking browser apps, have malicious intentions. Websites can see which extensions you have installed, and may use this to enhance your fingerprint, to more accurately identify/ track you. Both [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox) and Chrome web stores allow you to check what permissions/access rights an extension requires before you install it. Check the reviews. Only install extensions you really need, and removed those which you haven't used in a while.
**Keep Browser Up-to-date** | Essential | Browser vulnerabilities are constantly being [discovered](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=browser) and patched, so it’s important to keep it up to date, to avoid a zero-day exploit. You can [see which browser version you're using here](https://www.whatismybrowser.com/), or follow [this guide](https://www.whatismybrowser.com/guides/how-to-update-your-browser/) for instructions on how to update. Some browsers will auto-update to the latest stable version.
**Check for HTTPS** | Essential | If you enter information on a non-HTTPS website, this data is transported unencrypted and can therefore be read by anyone who intercepts it. Do not enter any data on a non-HTTPS website, but also do not let the green padlock give you a false sense of security, just because a website has SSL certificate, does not mean that it is legitimate or trustworthy. [HTTPS-Everywhere](https://www.eff.org/https-everywhere) (developed by the [EFF](https://www.eff.org/)) used to be a browser extension/addon that automatically enabled HTTPS on websites, but as of 2022 is now deprecated. In their [accouncement article](https://www.eff.org/) the EFF explains that most browsers now integrate such protections. Additionally, it provides instructions for [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), Chrome, Edge and Safari browsers on how to enable their HTTPS secure protections.
**Use DNS-over-HTTPS** | Essential | Traditional DNS makes requests in plain text for everyone to see. It allows for eavesdropping and manipulation of DNS data through man-in-the-middle attacks. Whereas DNS-over-HTTPS performs DNS resolution via the HTTPS protocol, meaning data between you and your DNS resolver is encrypted. A popular option is [CloudFlare](https://awesome-privacy.xyz/networking/dns-providers/cloudflare)'s [1.1.1.1](https://awesome-privacy.xyz/security-tools/mobile-apps/1.1.1.1), or compare providers- it is simple to enable in-browser. Note that DoH comes with its own issues, mostly preventing web filtering.
**Multi-[Session](https://awesome-privacy.xyz/communication/encrypted-messaging/session) Containers** | Essential | Compartmentalisation is really important to keep different aspects of your browsing separate. For example, using different profiles for work, general browsing, social media, online shopping etc will reduce the number associations that data brokers can link back to you. One option is to make use of [Firefox Containers](https://awesome-privacy.xyz/security-tools/browser-extensions/firefox-multi-account-containers) which is designed exactly for this purpose. Alternatively, you could use different browsers for different tasks ([Brave](https://awesome-privacy.xyz/essentials/browsers/brave-browser), [Firefox](https://awesome-privacy.xyz/essentials/browsers/firefox), [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) etc).
**Use Incognito** | Essential | When using someone else's machine, ensure that you're in a private/ incognito session. This will prevent browser history, cookies and some data being saved, but is not fool-proof- you can still be tracked.
**Understand Your Browser Fingerprint** | Essential | Browser Fingerprinting is an incredibly accurate method of tracking, where a website identifies you based on your device information. You can view your fingerprint at amiunique.org- The aim is to be as un-unique as possible.
**Manage Cookies** | Essential | Clearing cookies regularly is one step you can take to help reduce websites from tracking you. Cookies may also store your session token, which if captured, would allow someone to access your accounts without credentials. To mitigate this you should clear cookies often.
**Block Third-Party Cookies** | Essential | Third-party cookies placed on your device by a website other than the one you’re visiting. This poses a privacy risk, as a 3rd entity can collect data from your current session. This guide explains how you can disable 3rd-party cookies, and you can check here ensure this worked.
**Block Third-Party Trackers** | Essential | Blocking trackers will help to stop websites, advertisers, analytics and more from tracking you in the background. [Privacy Badger](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-badger), [DuckDuckGo Privacy Essentials](https://awesome-privacy.xyz/security-tools/browser-extensions/privacy-essentials), [uBlock Origin](https://awesome-privacy.xyz/networking/ad-blockers/ublock-origin) and uMatrix (advanced) are all very effective, open source tracker-blockers available for all major browsers.
**Beware of Redirects** | Optional | While some redirects are harmless, others, such as Unvalidated redirects are used in phishing attacks, it can make a malicious link seem legitimate. If you are unsure about a redirect URL, you can check where it forwards to with a tool like RedirectDetective.
**Do Not Sign Into Your Browser** | Optional | Many browsers allow you to sign in, in order to sync history, bookmarks and other browsing data across devices. However this not only allows for further data collection, but also increases attack surface through providing another avenue for a malicious actor to get hold of personal information.
**Disallow Prediction Services** | Optional | Some browsers allow for prediction services, where you receive real-time search results or URL auto-fill. If this is enabled then data is sent to Google (or your default search engine) with every keypress, rather than when you hit enter.
**Avoid G Translate for Webpages** | Optional | When you visit a web page written in a foreign language, you may be prompted to install the Google Translate extension. Be aware that Google collects all data (including input fields), along with details of the current user. Instead use a translation service that is not linked to your browser.
**Disable Web Notifications** | Optional | Browser push notifications are a common method for criminals to encourage you to click their link, since it is easy to spoof the source. Be aware of this, and for instructions on disabling browser notifications, see this article.
**Disable Automatic Downloads** | Optional | Drive-by downloads is a common method of getting harmful files onto a users device. This can be mitigated by disabling auto file downloads, and be cautious of websites which prompt you to download files unexpectedly.
**Disallow Access to Sensors** | Optional | Mobile websites can tap into your device sensors without asking. If you grant these permissions to your browser once, then all websites are able to use these capabilities, without permission or notification.
**Disallow Location** | Optional | Location Services lets sites ask for your physical location to improve your experience. This should be disabled in settings. Note that there are still other methods of determining your approximate location.
**Disallow Camera/ Microphone access** | Optional | Check browser settings to ensure that no websites are granted access to webcam or microphone. It may also be beneficial to use physical protection such as a webcam cover and microphone blocker.
**Disable Browser Password Saves** | Optional | Do not allow your browser to store usernames and passwords. These can be easily viewed or accessed. Instead use a password manager.
**Disable Browser Autofill** | Optional | Turn off autofill for any confidential or personal details. This feature can be harmful if your browser is compromised in any way. Instead, consider using your password manager's Notes feature.
**Protect from Exfil Attack** | Optional | The CSS Exfiltrate attack is a method where credentials and other sensitive details can be snagged with just pure CSS. You can stay protected, with the [CSS Exfil Protection](https://awesome-privacy.xyz/security-tools/browser-extensions/css-exfil-protection) plugin.
**Deactivate ActiveX** | Optional | ActiveX is a browser extension API that built into Microsoft IE, and enabled by default. It's not commonly used anymore, but since it gives plugins intimate access rights, and can be dangerous, therefore you should disable it.
**Disable WebRTC** | Optional | WebRTC allows high-quality audio/video communication and peer-to-peer file-sharing straight from the browser. However it can pose as a privacy leak. To learn more, check out this guide.
**Spoof HTML5 Canvas Sig** | Optional | Canvas Fingerprinting allows websites to identify and track users very accurately. You can use the Canvas-Fingerprint-Blocker extension to spoof your fingerprint or use [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor).
**Spoof User Agent** | Optional | The user agent tells the website what device, browser and version you are using. Switching user agent periodically is one small step you can take to become less unique.
**Disregard DNT** | Optional | Enabling Do Not Track has very limited impact, since many websites do not respect or follow this. Since it is rarely used, it may also add to your signature, making you more unique.
**Prevent HSTS Tracking** | Optional | HSTS was designed to help secure websites, but privacy concerns have been raised as it allowed site operators to plant super-cookies. It can be disabled by visiting chrome://net-internals/#hsts in Chromium-based browsers.
**Prevent Automatic Browser Connections** | Optional | Even when you are not using your browser, it may call home to report on usage activity, analytics and diagnostics. You may wish to disable some of this, which can be done through the settings.
**Enable 1st-Party Isolation** | Optional | [First Party Isolation](https://awesome-privacy.xyz/security-tools/browser-extensions/first-party-isolation) means that all identifier sources and browser state are scoped using the URL bar domain, this can greatly reduce tracking.
**Strip Tracking Params from URLs** | Advanced | Websites often append additional GET parameters to URLs that you click, to identify information like source/referrer. You can sanitize manually, or use an extension like [ClearURLs](https://awesome-privacy.xyz/security-tools/browser-extensions/clearurls) to strip tracking data from URLs automatically.
**First Launch Security** | Advanced | After installing a web browser, the first time you launch it (prior to configuring its privacy settings), most browsers will call home. Therefore, after installing a browser, you should first disable your internet connection, then configure privacy options before reenabling your internet connectivity.
**Use The Tor Browser** | Advanced | The [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) Project provides a browser that encrypts and routes your traffic through multiple nodes, keeping users safe from interception and tracking. The main drawbacks are speed and user experience.
**Disable JavaScript** | Advanced | Many modern web apps are JavaScript-based, so disabling it will greatly decrease your browsing experience. But if you really want to go all out, then it will really reduce your attack surface.

### Recommended Software
- [Privacy Browsers](https://github.com/Lissy93/awesome-privacy#browsers)
- [Browser Extensions](https://github.com/Lissy93/awesome-privacy#browser-extensions)
- [Browser & Bookmark Sync](https://github.com/Lissy93/awesome-privacy#browser-sync)


## Email

Nearly 50 years since the first email was sent, it's still very much a big part of our day-to-day life, and will continue to be for the near future. So considering how much trust we put in them, it's surprising how fundamentally insecure this infrastructure is. Email-related fraud [is on the up](https://www.csoonline.com/article/3247670/email/email-security-in-2018.html), and without taking basic measures you could be at risk.

If a hacker gets access to your emails, it provides a gateway for your other accounts to be compromised (through password resets), therefore email security is paramount for your digital safety.

The big companies providing "free" email service, don't have a good reputation for respecting users privacy: Gmail was caught giving [third parties full access](https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442) to user emails and also [tracking all of your purchases](https://www.cnbc.com/2019/05/17/google-gmail-tracks-purchase-history-how-to-delete-it.html). Yahoo was also caught scanning emails in real-time [for US surveillance agencies](http://news.trust.org/item/20161004170601-99f8c) Advertisers [were granted access](https://thenextweb.com/insider/2018/08/29/both-yahoo-and-aol-are-scanning-customer-emails-to-attract-advertisers) to Yahoo and AOL users messages to “identify and segment potential customers by picking up on contextual buying signals, and past purchases.”

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Have more than one email address** | Essential | Consider using a different email address for security-critical communications from trivial mail such as newsletters. This compartmentalization could reduce the amount of damage caused by a data breach, and also make it easier to recover a compromised account.
**Keep Email Address Private** | Essential | Do not share your primary email publicly, as mail addresses are often the starting point for most phishing attacks.
**Keep your Account Secure** | Essential | Use a long and unique password, enable 2FA and be careful while logging in. Your email account provides an easy entry point to all your other online accounts for an attacker.
**Disable Automatic Loading of Remote Content** | Essential | Email messages can contain remote content such as images or stylesheets, often automatically loaded from the server. You should disable this, as it exposes your IP address and device information, and is often used for tracking. For more info, see [this article](https://www.theverge.com/2019/7/3/20680903/email-pixel-trackers-how-to-stop-images-automatic-download).
**Use Plaintext** | Optional | There are two main types of emails on the internet: plaintext and HTML. The former is strongly preferred for privacy & security as HTML messages often include identifiers in links and inline images, which can collect usage and personal data. There's also numerous risks of remote code execution targeting the HTML parser of your mail client, which cannot be exploited if you are using plaintext. For more info, as well as setup instructions for your mail provider, see [UsePlaintext.email](https://useplaintext.email/).
**Don’t connect third-party apps to your email account** | Optional | If you give a third-party app or plug-in full access to your inbox, they effectively have full unhindered access to all your emails and their contents, which poses significant security and privacy risks.
**Don't Share Sensitive Data via Email** | Optional | Emails are very easily intercepted. Furthermore, you can’t be sure of how secure your recipient's environment is. Therefore, emails cannot be considered safe for exchanging confidential information, unless it is encrypted.
**Consider Switching to a Secure Mail Provider** | Optional | Secure and reputable email providers such as [Forward Email](https://awesome-privacy.xyz/communication/encrypted-email/forward-email), [ProtonMail](https://awesome-privacy.xyz/communication/mail-forwarding/protonmail), and [Tutanota](https://awesome-privacy.xyz/communication/encrypted-email/tuta) allow for end-to-end encryption, full privacy as well as more security-focused features. Unlike typical email providers, your mailbox cannot be read by anyone but you, since all messages are encrypted.
**Use Smart Key** | Advanced | OpenPGP does not support Forward secrecy, which means if either your or the recipient's private key is ever stolen, all previous messages encrypted with it will be exposed. Therefore, you should take great care to keep your private keys safe. One method of doing so, is to use a USB Smart Key to sign or decrypt messages, allowing you to do so without your private key leaving the USB device.
**Use Aliasing / Anonymous Forwarding** | Advanced | Email aliasing allows messages to be sent to [anything]@my-domain.com and still land in your primary inbox. Effectively allowing you to use a different, unique email address for each service you sign up for. This means if you start receiving spam, you can block that alias and determine which company leaked your email address.
**Subaddressing** | Optional | An alternative to aliasing is subaddressing, where anything after the `+` symbol is omitted during mail delivery. This enables you to keep track of who shared/ leaked your email address, but unlike aliasing, it will not protect against your real address being revealed.
**Use a Custom Domain** | Advanced | Using a custom domain means that you are not dependent on the address assigned by your mail provider. So you can easily switch providers in the future and do not need to worry about a service being discontinued.
**Sync with a client for backup** | Advanced | To avoid losing temporary or permanent access to your emails during an unplanned event (such as an outage or account lock), Thunderbird can sync/ backup messages from multiple accounts via IMAP and store locally on your primary device.
**Be Careful with Mail Signatures** | Advanced | You do not know how secure of an email environment the recipient of your message may have. There are several extensions that automatically crawl messages, and create a detailed database of contact information based upon email signatures.
**Be Careful with Auto-Replies** | Advanced | Out-of-office automatic replies are very useful for informing people there will be a delay in replying, but all too often people reveal too much information- which can be used in social engineering and targeted attacks.
**Choose the Right Mail Protocol** | Advanced | Do not use outdated protocols (below IMAPv4 or POPv3), both have known vulnerabilities and out-dated security.
**Self-Hosting** | Advanced | Self-hosting your own mail server is not recommended for non-advanced users, since correctly securing it is critical yet requires strong networking knowledge.
**Always use TLS Ports** | Advanced | There are SSL options for POP3, IMAP, and SMTP as standard TCP/IP ports. They are easy to use, and widely supported so should always be used instead of plaintext email ports.
**DNS Availability** | Advanced | For self-hosted mail servers, to prevent DNS problems impacting availability- use at least 2 MX records, with secondary and tertiary MX records for redundancy when the primary MX record fails.
**Prevent DDoS and Brute Force Attacks** | Advanced | For self-hosted mail servers (specifically SMTP), limit your total number of simultaneous connections, and maximum connection rate to reduce the impact of attempted bot attacks.
**Maintain IP Blacklist** | Advanced | For self-hosted mail servers, you can improve spam filters and harden security, through maintaining an up-to-date local IP blacklist and a spam URI realtime block lists to filter out malicious hyperlinks.

### Recommended Software
- [Secure Email Providers](https://github.com/Lissy93/awesome-privacy#encrypted-email)
- [Mail Forwarding](https://github.com/Lissy93/awesome-privacy#anonymous-mail-forwarding)
- [Pre-Configured Mail Servers](https://github.com/Lissy93/awesome-privacy#pre-configured-mail-servers)
- [Email Clients](https://github.com/Lissy93/awesome-privacy#email-clients)


## Messaging



**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Only Use Fully End-to-End Encrypted Messengers** | Essential | End-to-end encryption is a system of communication where messages are encrypted on your device and not decrypted until they reach the intended recipient. This ensures that any actor who intercepts traffic cannot read the message contents, nor can anybody with access to the central servers where data is stored.
**Use only Open Source Messaging Platforms** | Essential | If code is open source then it can be independently examined and audited by anyone qualified to do so, to ensure that there are no backdoors, vulnerabilities, or other security issues.
**Use a "Trustworthy" Messaging Platform** | Essential | When selecting an encrypted messaging app, ensure it's fully open source, stable, actively maintained, and ideally backed by reputable developers.
**Check Security Settings** | Essential | Enable security settings, including contact verification, security notifications, and encryption. Disable optional non-security features such as read receipt, last online, and typing notification.
**Ensure your Recipients Environment is Secure** | Essential | Your conversation can only be as secure as the weakest link. Often the easiest way to infiltrate a communications channel is to target the individual or node with the least protection.
**Disable Cloud Services** | Essential | Some mobile messaging apps offer a web or desktop companion. This not only increases attack surface but it has been linked to several critical security issues, and should therefore be avoided, if possible.
**Secure Group Chats** | Essential | The risk of compromise rises exponentially, the more participants are in a group, as the attack surface increases. Periodically check that all participants are legitimate.
**Create a Safe Environment for Communication** | Essential | There are several stages where your digital communications could be monitored or intercepted. This includes: your or your participants' device, your ISP, national gateway or government logging, the messaging provider, the servers.
**Agree on a Communication Plan** | Optional | In certain situations, it may be worth making a communication plan. This should include primary and backup methods of securely getting in hold with each other.
**Strip Meta-Data from Media** | Optional | Metadata is "Data about Data" or additional information attached to a file or transaction. When you send a photo, audio recording, video, or document you may be revealing more than you intended to.
**Defang URLs** | Optional | Sending links via various services can unintentionally expose your personal information. This is because, when a thumbnail or preview is generated- it happens on the client-side.
**Verify your Recipient** | Optional | Always ensure you are talking to the intended recipient, and that they have not been compromised. One method for doing so is to use an app which supports contact verification.
**Enable Ephemeral Messages** | Optional | Self-destructing messages is a feature that causes your messages to automatically delete after a set amount of time. This means that if your device is lost, stolen, or seized, an adversary will only have access to the most recent communications.
**Avoid SMS** | Optional | SMS may be convenient, but it's not secure. It is susceptible to threats such as interception, sim swapping, manipulation, and malware.
**Watch out for Trackers** | Optional | Be wary of messaging applications with trackers, as the detailed usage statistics they collect are often very invasive, and can sometimes reveal your identity as well as personal information that you would otherwise not intend to share.
**Consider Jurisdiction** | Advanced | The jurisdictions where the organisation is based, and data is hosted should also be taken into account.
**Use an Anonymous Platform** | Advanced | If you believe you may be targeted, you should opt for an anonymous messaging platform that does not require a phone number, or any other personally identifiable information to sign up or use.
**Ensure Forward Secrecy is Supported** | Advanced | Opt for a platform that implements forward secrecy. This is where your app generates a new encryption key for every message.
**Consider a Decentralized Platform** | Advanced | If all data flows through a central provider, you have to trust them with your data and meta-data. You cannot verify that the system running is authentic without back doors.

### Recommended Software
- [Secure Messaging Apps](https://github.com/Lissy93/awesome-privacy#encrypted-messaging)
- [P2P Messaging Platforms](https://github.com/Lissy93/awesome-privacy#p2p-messaging)


## Social Media

Online communities have existed since the invention of the internet, and give people around the world the opportunity to connect, communicate and share. Although these networks are a great way to promote social interaction and bring people together, that have a dark side - there are some serious [Privacy Concerns with Social Networking Services](https://en.wikipedia.org/wiki/Privacy_concerns_with_social_networking_services), and these social networking sites are owned by private corporations, and that they make their money by collecting data about individuals and selling that data on, often to third party advertisers.
Secure your account, lock down your privacy settings, but know that even after doing so, all data intentionally and non-intentionally uploaded is effectively public. If possible, avoid using conventional social media networks.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Secure your Account** | Essential | Social media profiles get stolen or taken over all too often. To protect your account: use a unique and strong password, and enable 2-factor authentication.
**Check Privacy Settings** | Essential | Most social networks allow you to control your privacy settings. Ensure that you are comfortable with what data you are currently exposing and to whom.
**Think of All Interactions as Public** | Essential | There are still numerous methods of viewing a users 'private' content across many social networks. Therefore, before uploading, posting or commenting on anything, think "Would I mind if this was totally public?"
**Think of All Interactions as Permanent** | Essential | Pretty much every post, comment, photo etc is being continuously backed up by a myriad of third-party services, who archive this data and make it indexable and publicly available almost forever.
**Don't Reveal too Much** | Essential | Profile information creates a goldmine of info for hackers, the kind of data that helps them personalize phishing scams. Avoid sharing too much detail (DoB, Hometown, School etc).
**Be Careful what you Upload** | Essential | Status updates, comments, check-ins and media can unintentionally reveal a lot more than you intended them to. This is especially relevant to photos and videos, which may show things in the background.
**Don't Share Email or Phone Number** | Essential | Posting your real email address or mobile number, gives hackers, trolls and spammers more munition to use against you, and can also allow separate aliases, profiles or data points to be connected.
**Don't Grant Unnecessary Permissions** | Essential | By default many of the popular social networking apps will ask for permission to access your contacts, call log, location, messaging history etc. If they don’t need this access, don’t grant it.
**Be Careful of 3rd-Party Integrations** | Essential | Avoid signing up for accounts using a Social Network login, revoke access to social apps you no longer use.
**Avoid Publishing Geo Data while still Onsite** | Essential | If you plan to share any content that reveals a location, then wait until you have left that place. This is particularly important when you are taking a trip, at a restaurant, campus, hotel/resort, public building or airport.
**Remove metadata before uploading media** | Optional | Most smartphones and some cameras automatically attach a comprehensive set of additional data (called EXIF data) to each photograph. Remove this data before uploading.
**Implement Image Cloaking** | Advanced | Tools like Fawkes can be used to very subtly, slightly change the structure of faces within photos in a way that is imperceptible by humans, but will prevent facial recognition systems from being able to recognize a given face.
**Consider Spoofing GPS in home vicinity** | Advanced | Even if you yourself never use social media, there is always going to be others who are not as careful, and could reveal your location.
**Consider False Information** | Advanced | If you just want to read, and do not intend on posting too much- consider using an alias name, and false contact details.
**Don’t have any social media accounts** | Advanced | Social media is fundamentally un-private, so for maximum online security and privacy, avoid using any mainstream social networks.

### Recommended Software
- [Alternative Social Media](https://github.com/Lissy93/awesome-privacy#social-networks)
- [Alternative Video Platforms](https://github.com/Lissy93/awesome-privacy#video-platforms)
- [Alternative Blogging Platforms](https://github.com/Lissy93/awesome-privacy#blogging-platforms)
- [News Readers and Aggregation](https://github.com/Lissy93/awesome-privacy#news-readers-and-aggregation)


## Networks

This section covers how you connect your devices to the internet securely, including configuring your router and setting up a VPN.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Use a VPN** | Essential | Use a reputable, paid-for VPN. This can help protect sites you visit from logging your real IP, reduce the amount of data your ISP can collect, and increase protection on public WiFi.
**Change your Router Password** | Essential | After getting a new router, change the password. Default router passwords are publicly available, meaning anyone within proximity would be able to connect.
**Use WPA2, and a strong password** | Essential | There are different authentication protocols for connecting to WiFi. Currently, the most secure options are WPA2 and WPA3 (on newer routers).
**Keep router firmware up-to-date** | Essential | Manufacturers release firmware updates that fix security vulnerabilities, implement new standards, and sometimes add features or improve the performance of your router.
**Implement a Network-Wide VPN** | Optional | If you configure your VPN on your router, firewall, or home server, then traffic from all devices will be encrypted and routed through it, without needing individual VPN apps.
**Protect against DNS leaks** | Optional | When using a VPN, it is extremely important to exclusively use the DNS server of your VPN provider or secure service.
**Use a secure VPN Protocol** | Optional | OpenVPN and WireGuard are open source, lightweight, and secure tunneling protocols. Avoid using PPTP or SSTP.
**Secure DNS** | Optional | Use DNS-over-HTTPS which performs DNS resolution via the HTTPS protocol, encrypting data between you and your DNS resolver.
**Avoid the free router from your ISP** | Optional | Typically they’re manufactured cheaply in bulk in China, with insecure propriety firmware that doesn't receive regular security updates.
**Whitelist MAC Addresses** | Optional | You can whitelist MAC addresses in your router settings, disallowing any unknown devices to immediately connect to your network, even if they know your credentials.
**Change the Router’s Local IP Address** | Optional | It is possible for a malicious script in your web browser to exploit a cross-site scripting vulnerability, accessing known-vulnerable routers at their local IP address and tampering with them.
**Don't Reveal Personal Info in SSID** | Optional | You should update your network name, choosing an SSID that does not identify you, include your flat number/address, and does not specify the device brand/model.
**Opt-Out Router Listings** | Optional | WiFi SSIDs are scanned, logged, and then published on various websites, which is a serious privacy concern for some.
**Hide your SSID** | Optional | Your router's Service Set Identifier is simply the network name. If it is not visible, it may receive less abuse.
**Disable WPS** | Optional | Wi-Fi Protected Setup provides an easier method to connect, without entering a long WiFi password, but WPS introduces a series of major security issues.
**Disable UPnP** | Optional | Universal Plug and Play allows applications to automatically forward a port on your router, but it has a long history of serious security issues.
**Use a Guest Network for Guests** | Optional | Do not grant access to your primary WiFi network to visitors, as it enables them to interact with other devices on the network.
**Change your Router's Default IP** | Optional | Modifying your router admin panel's default IP address will make it more difficult for malicious scripts targeting local IP addresses.
**Kill unused processes and services on your router** | Optional | Services like Telnet and SSH that provide command-line access to devices should never be exposed to the internet and should also be disabled on the local network unless they're actually needed.
**Don't have Open Ports** | Optional | Close any open ports on your router that are not needed. Open ports provide an easy entrance for hackers.
**Disable Unused Remote Access Protocols** | Optional | When protocols such as PING, Telnet, SSH, UPnP, and HNAP etc are enabled, they allow your router to be probed from anywhere in the world.
**Disable Cloud-Based Management** | Optional | You should treat your router's admin panel with the utmost care, as considerable damage can be caused if an attacker is able to gain access.
**Manage Range Correctly** | Optional | It's common to want to pump your router's range to the max, but if you reside in a smaller flat, your attack surface is increased when your WiFi network can be picked up across the street.
**Route all traffic through [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor)** | Advanced | VPNs have their weaknesses. For increased security, route all your internet traffic through the [Tor](https://awesome-privacy.xyz/networking/mix-networks/tor) network.
**Disable WiFi on all Devices** | Advanced | Connecting to even a secure WiFi network increases your attack surface. Disabling your home WiFi and connect each device via Ethernet.

### Recommended Software
- [Virtual Private Networks](https://github.com/Lissy93/awesome-privacy#virtual-private-networks)
- [Mix Networks](https://github.com/Lissy93/awesome-privacy#mix-networks)
- [Router Firmware](https://github.com/Lissy93/awesome-privacy#router-firmware)
- [Open Source Proxies](https://github.com/Lissy93/awesome-privacy#proxies)
- [DNS Providers](https://github.com/Lissy93/awesome-privacy#dns)
- [Firewalls](https://github.com/Lissy93/awesome-privacy#firewalls)
- [Network Analysis Tools](https://github.com/Lissy93/awesome-privacy#network-analysis)
- [Self-Hosted Network Security Tools](https://github.com/Lissy93/awesome-privacy#self-hosted-network-security)


## Mobile Devices

Smart phones have revolutionized so many aspects of life and brought the world to our fingertips. For many of us, smart phones are our primary means of communication, entertainment and access to knowledge. But while they've brought convenience to whole new level, there's some ugly things going on behind the screen.
Geo-tracking is used to trace our every move, and we have little control over who has this data- your phone is even able to [track your location without GPS](https://gizmodo.com/how-to-track-a-cellphone-without-gps-or-consent-1821125371). Over the years numerous reports that surfaced, outlining ways in which your phone's [mic can eavesdrop](https://www.independent.co.uk/life-style/gadgets-and-tech/news/smartphone-apps-listening-privacy-alphonso-shazam-advertising-pool-3d-honey-quest-a8139451.html), and the [camera can watch you](https://www.businessinsider.com/hackers-governments-smartphone-iphone-camera-wikileaks-cybersecurity-hack-privacy-webcam-2017-6)- all without your knowledge or consent. And then there's the malicious apps, lack of security patches and potential/ likely backdoors.
Using a smart phone generates a lot of data about you- from information you intentionally share, to data silently generated from your actions. It can be scary to see what Google, Microsoft, Apple and Facebook know about us- sometimes they know more than our closest family. It's hard to comprehend what your data will reveal, especially in conjunction with other data.
This data is used for [far more than just advertising](https://internethealthreport.org/2018/the-good-the-bad-and-the-ugly-sides-of-data-tracking/) - more often it's used to rate people for finance, insurance and employment. Targeted ads can even be used for fine-grained surveillance (see [ADINT](https://adint.cs.washington.edu))
More of us are concerned about how [governments use collect and use our smart phone data](https://www.statista.com/statistics/373916/global-opinion-online-monitoring-government/), and rightly so, federal agencies often [request our data from Google](https://www.statista.com/statistics/273501/global-data-requests-from-google-by-federal-agencies-and-governments/), [Facebook](https://www.statista.com/statistics/287845/global-data-requests-from-facebook-by-federal-agencies-and-governments/), Apple, Microsoft, Amazon, and other tech companies. Sometimes requests are made in bulk, returning detailed information on everybody within a certain geo-fence, [often for innocent people](https://www.nytimes.com/interactive/2019/04/13/us/google-location-tracking-police.html). And this doesn't include all of the internet traffic that intelligence agencies around the world have unhindered access to.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Encrypt your Device** | Essential | In order to keep your data safe from physical access, use file encryption. This will mean if your device is lost or stolen, no one will have access to your data.
**Turn off connectivity features that aren’t being used** | Essential | When you're not using WiFi, Bluetooth, NFC etc, turn those features off. There are several common threats that utilise these features.
**Keep app count to a minimum** | Essential | Uninstall apps that you don’t need or use regularly. As apps often run in the background, slowing your device down, but also collecting data.
**App Permissions** | Essential | Don’t grant apps permissions that they don’t need. For Android, [Bouncer](https://awesome-privacy.xyz/security-tools/mobile-apps/bouncer) is an app that allows you to grant temporary/ 1-off permissions.
**Only install Apps from official source** | Essential | Applications on Apple App Store and Google Play Store are scanned and cryptographically signed, making them less likely to be malicious.
**Be Careful of Phone Charging Threats** | Optional | Juice Jacking is when hackers use public charging stations to install malware on your smartphone or tablet through a compromised USB port.
**Set up a mobile carrier PIN** | Essential | SIM hijacking is when a hacker is able to get your mobile number transferred to their sim. The easiest way to protect against this is to set up a PIN through your mobile provider.
**Opt-out of Caller ID Listings** | Optional | To keep your details private, you can unlist your number from caller ID apps like TrueCaller, CallApp, SyncMe, and Hiya.
**Use Offline Maps** | Optional | Consider using an offline maps app, such as OsmAnd or Organic Maps, to reduce data leaks from map apps.
**Opt-out of personalized ads** | Optional | You can slightly reduce the amount of data collected by opting-out of seeing personalized ads.
**Erase after too many login attempts** | Optional | To protect against an attacker brute forcing your pin, set your device to erase after too many failed login attempts.
**Monitor Trackers** | Optional | [εxodus](https://awesome-privacy.xyz/security-tools/online-tools/εxodus) is a great service which lets you search for any app and see which trackers are embedded in it.
**Use a Mobile Firewall** | Optional | To prevent applications from leaking privacy-sensitive data, you can install a firewall app.
**Reduce Background Activity** | Optional | For Android, SuperFreeze makes it possible to entirely freeze all background activities on a per-app basis.
**Sandbox Mobile Apps** | Optional | Prevent permission-hungry apps from accessing your private data with [Island](https://awesome-privacy.xyz/security-tools/mobile-apps/island), a sandbox environment.
**Tor Traffic** | Advanced | [Orbot](https://awesome-privacy.xyz/security-tools/mobile-apps/orbot) provides a system-wide Tor connection, which will help protect you from surveillance and public WiFi threats.
**Avoid Custom Virtual Keyboards** | Optional | It is recommended to stick with your device's stock keyboard. If you choose to use a third-party keyboard app, ensure it is reputable.
**Restart Device Regularly** | Optional | Restarting your phone at least once a week will clear the app state cached in memory and may run more smoothly after a restart.
**Avoid SMS** | Optional | SMS should not be used to receive 2FA codes or for communication, instead use an encrypted messaging app, such as [Signal](https://awesome-privacy.xyz/communication/encrypted-messaging/signal).
**Keep your Number Private** | Optional | [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) allows you to create and use virtual phone numbers for different people or groups. This is great for compartmentalisation.
**Watch out for Stalkerware** | Optional | Stalkerware is malware that is installed directly onto your device by someone you know. The best way to get rid of it is through a factory reset.
**Favor the Browser, over Dedicated App** | Optional | Where possible, consider using a secure browser to access sites, rather than installing dedicated applications.
**Consider running a custom ROM (Android)** | Advanced | If you're concerned about your device manufacturer collecting too much personal information, consider a privacy-focused custom ROM.

### Recommended Software
- [Mobile Apps, for Security + Privacy](https://github.com/Lissy93/awesome-privacy#mobile-apps)
- [Encrypted Messaging](https://github.com/Lissy93/awesome-privacy#encrypted-messaging)
- [Mobile Operation Systems](https://github.com/Lissy93/awesome-privacy#mobile-operating-systems)


## Personal Computers

Although Windows and OS X are easy to use and convenient, they both are far from secure. Your OS provides the interface between hardware and your applications, so if compromised can have detrimental effects.


**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Keep your System up-to-date** | Essential | System updates contain fixes/patches for security issues, improve performance, and sometimes add new features. Install new updates when prompted.
**Encrypt your Device** | Essential | Use BitLocker for Windows, FileVault on MacOS, or LUKS on Linux, to enable full disk encryption. This prevents unauthorized access if your computer is lost or stolen.
**Backup Important Data** | Essential | Maintaining encrypted backups prevents loss due to ransomware, theft, or damage. Consider using [Cryptomator](https://awesome-privacy.xyz/security-tools/mobile-apps/cryptomator) for cloud files or [VeraCrypt](https://awesome-privacy.xyz/essentials/file-encryption/veracrypt) for USB drives.
**Be Careful Plugging USB Devices into your Computer** | Essential | USB devices can pose serious threats. Consider making a USB sanitizer with CIRCLean to safely check USB devices.
**Activate Screen-Lock when Idle** | Essential | Lock your computer when away and set it to require a password on resume from screensaver or sleep to prevent unauthorized access.
**Disable Cortana or Siri** | Essential | Voice-controlled assistants can have privacy implications due to data sent back for processing. Disable or limit their listening capabilities.
**Review your Installed Apps** | Essential | Keep installed applications to a minimum to reduce exposure to vulnerabilities and regularly clear application caches.
**Manage Permissions** | Essential | Control which apps have access to your location, camera, microphone, contacts, and other sensitive information.
**Disallow Usage Data from being sent to the Cloud** | Essential | Limit the amount of usage information or feedback sent to the cloud to protect your privacy.
**Avoid Quick Unlock** | Essential | Use a strong password instead of biometrics or short PINs for unlocking your computer to enhance security.
**Power Off Computer, instead of Standby** | Essential | Shut down your device when not in use, especially if your disk is encrypted, to keep data secure.
**Don't link your PC with your Microsoft or Apple Account** | Optional | Use a local account only to prevent data syncing and exposure. Avoid using sync services that compromise privacy.
**Check which Sharing Services are Enabled** | Optional | Disable network sharing features you are not using to close gateways to common threats.
**Don't use Root/Admin Account for Non-Admin Tasks** | Optional | Use an unprivileged user account for daily tasks and only elevate permissions for administrative changes to mitigate vulnerabilities.
**Block Webcam + Microphone** | Optional | Cover your webcam when not in use and consider blocking unauthorized audio recording to protect privacy.
**Use a Privacy Filter** | Optional | Use a screen privacy filter in public spaces to prevent shoulder surfing and protect sensitive information.
**Physically Secure Device** | Optional | Use a Kensington Lock to secure your laptop in public spaces and consider port locks to prevent unauthorized physical access.
**Don't Charge Devices from your PC** | Optional | Use a power bank or AC wall charger instead of your PC to avoid security risks associated with USB connections.
**Randomize your hardware address on Wi-Fi** | Optional | Modify or randomize your MAC address to protect against tracking across different WiFi networks.
**Use a Firewall** | Optional | Install a firewall app to monitor and block unwanted internet access by certain applications, protecting against remote access attacks and privacy breaches.
**Protect Against Software Keyloggers** | Optional | Use key stroke encryption tools to protect against software keyloggers recording your keystrokes.
**Check Keyboard Connection** | Optional | Be vigilant for hardware keyloggers when using public or unfamiliar computers by checking keyboard connections.
**Prevent Keystroke Injection Attacks** | Optional | Lock your PC when away and consider using USBGuard or similar tools to protect against keystroke injection attacks.
**Don't use commercial "Free" Anti-Virus** | Optional | Rely on built-in security tools and avoid free anti-virus applications due to their potential for privacy invasion and data collection.
**Periodically check for Rootkits** | Advanced | Regularly check for rootkits to detect and mitigate full system control threats using tools like [chkrootkit](https://awesome-privacy.xyz/operating-systems/linux-defenses/chkrootkit).
**BIOS Boot Password** | Advanced | Enable a BIOS or UEFI password to add an additional security layer during boot-up, though be aware of its limitations.
**Use a Security-Focused Operating System** | Advanced | Consider switching to Linux or a security-focused distro like QubeOS or [Tails](https://awesome-privacy.xyz/operating-systems/desktop-operating-systems/tails) for enhanced privacy and security.
**Make Use of VMs** | Advanced | Use virtual machines for risky activities or testing suspicious software to isolate potential threats from your primary system.
**Compartmentalize** | Advanced | Isolate different programs and data sources from one another as much as possible to limit the extent of potential breaches.
**Disable Undesired Features (Windows)** | Advanced | Disable unnecessary Windows "features" and services that run in the background to reduce data collection and resource use.
**Secure Boot** | Advanced | Ensure that Secure Boot is enabled to prevent malware from replacing your boot loader and other critical software.
**Secure SSH Access** | Advanced | Take steps to protect SSH access from attacks by changing the default port, using SSH keys, and configuring firewalls.
**Close Un-used Open Ports** | Advanced | Turn off services listening on external ports that are not needed to protect against remote exploits and improve security.
**Implement Mandatory Access Control** | Advanced | Restrict privileged access to limit the damage that can be done if a system is compromised.
**Use Canary Tokens** | Advanced | Deploy canary tokens to detect unauthorized access to your files or emails faster and gather information about the intruder.

### Recommended Software
- [Secure Operating Systems](https://github.com/Lissy93/awesome-privacy#desktop-operating-systems)
- [Linux Defenses](https://github.com/Lissy93/awesome-privacy#linux-defences)
- [Windows Defenses](https://github.com/Lissy93/awesome-privacy#windows-defences)
- [Mac OS Defenses](https://github.com/Lissy93/awesome-privacy#mac-os-defences)
- [Anti-Malware](https://github.com/Lissy93/awesome-privacy#anti-malware)
- [Firewalls](https://github.com/Lissy93/awesome-privacy#firewalls-1)
- [File Encryption](https://github.com/Lissy93/awesome-privacy#file-encryption)


## Smart Home

Home assistants (such as Google Home, Alexa and Siri) and other internet connected devices collect large amounts of personal data (including voice samples, location data, home details and logs of all interactions). Since you have limited control on what is being collected, how it's stored, and what it will be used for, this makes it hard to recommend any consumer smart-home products to anyone who cares about privacy and security.
Security vs Privacy: There are many smart devices on the market that claim to increase the security of your home while being easy and convenient to use (Such as Smart Burglar Alarms, Internet Security Cameras, Smart Locks and Remote access Doorbells to name a few). These devices may appear to make security easier, but there is a trade-off in terms of privacy: as they collect large amounts of personal data, and leave you without control over how this is stored or used. The security of these devices is also questionable, since many of them can be (and are being) hacked, allowing an intruder to bypass detection with minimum effort.
The most privacy-respecting option, would be to not use "smart" internet-connected devices in your home, and not to rely on a security device that requires an internet connection. But if you do, it is important to fully understand the risks of any given product, before buying it. Then adjust settings to increase privacy and security. The following checklist will help mitigate the risks associated with internet-connected home devices.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Rename devices to not specify brand/model** | Essential | Change default device names to something generic to prevent targeted attacks by obscuring brand or model information.
**Disable microphone and camera when not in use** | Essential | Use hardware switches to turn off microphones and cameras on smart devices to protect against accidental recordings or targeted access.
**Understand what data is collected, stored and transmitted** | Essential | Research and ensure comfort with the data handling practices of smart home devices before purchase, avoiding devices that share data with third parties.
**Set privacy settings, and opt out of sharing data with third parties** | Essential | Adjust app settings for strictest privacy controls and opt-out of data sharing with third parties wherever possible.
**Don't link your smart home devices to your real identity** | Essential | Use anonymous usernames and passwords, avoiding sign-up/log-in via social media or other third-party services to maintain privacy.
**Keep firmware up-to-date** | Essential | Regularly update smart device firmware to apply security patches and enhancements.
**Protect your Network** | Essential | Secure your home WiFi and network to prevent unauthorized access to smart devices.
**Be wary of wearables** | Optional | Consider the extensive data collection capabilities of wearable devices and their implications for privacy.
**Don't connect your home's critical infrastructure to the Internet** | Optional | Evaluate the risks of internet-connected thermostats, alarms, and detectors due to potential remote access by hackers.
**Mitigate Alexa/ Google Home Risks** | Optional | Consider privacy-focused alternatives like [Mycroft](https://awesome-privacy.xyz/smart-home-and-iot/voice-assistants/mycroft) or use Project Alias to prevent idle listening by voice-activated assistants.
**Monitor your home network closely** | Optional | Use tools like FingBox or router features to monitor for unusual network activity.
**Deny Internet access where possible** | Advanced | Use firewalls to block internet access for devices that don't need it, limiting operation to local network use.
**Assess risks** | Advanced | Consider the privacy implications for all household members and adjust device settings for security and privacy, such as disabling devices at certain times.

### Recommended Software
- [Home Automation](https://github.com/Lissy93/awesome-privacy#home-automation)
- [AI Voice Assistants](https://github.com/Lissy93/awesome-privacy#ai-voice-assistants)


## Personal Finance

Credit card fraud is the most common form of identity theft (with [133,015 reports in the US in 2017 alone](https://www.experian.com/blogs/ask-experian/identity-theft-statistics/)), and a total loss of $905 million, which was a 26% increase from the previous year. The with a median amount lost per person was $429 in 2017. It's more important than ever to take basic steps to protect yourself from falling victim
Note about credit cards: Credit cards have technological methods in place to detect and stop some fraudulent transactions. Major payment processors implement this, by mining huge amounts of data from their card holders, in order to know a great deal about each persons spending habits. This data is used to identify fraud, but is also sold onto other data brokers. Credit cards are therefore good for security, but terrible for data privacy.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Sign up for Fraud Alerts and Credit Monitoring** | Essential | Enable fraud alerts and credit monitoring through Experian, TransUnion, or Equifax to be alerted of suspicious activity.
**Apply a Credit Freeze** | Essential | Prevent unauthorized credit inquiries by freezing your credit through Experian, TransUnion, and Equifax.
**Use Virtual Cards** | Optional | Utilize virtual card numbers for online transactions to protect your real banking details. Services like [Privacy.com](https://awesome-privacy.xyz/finance/virtual-credit-cards/privacy.com) and [MySudo](https://awesome-privacy.xyz/finance/virtual-credit-cards/mysudo) offer such features.
**Use Cash for Local Transactions** | Optional | Pay with [Cash](https://awesome-privacy.xyz/finance/other-payment-methods/cash) for local and everyday purchases to avoid financial profiling by institutions.
**Use Cryptocurrency for Online Transactions** | Optional | Opt for privacy-focused cryptocurrencies like [Monero](https://awesome-privacy.xyz/finance/cryptocurrencies/monero) for online transactions to maintain anonymity. Use cryptocurrencies wisely to ensure privacy.
**Store Crypto Securely** | Advanced | Securely store cryptocurrencies using offline wallet generation, hardware wallets like [Trezor](https://awesome-privacy.xyz/finance/crypto-wallets/trezor) or [ColdCard](https://awesome-privacy.xyz/finance/crypto-wallets/coldcard), or consider long-term storage solutions like [CryptoSteel](https://awesome-privacy.xyz/finance/crypto-wallets/cryptosteel).
**Buy Crypto Anonymously** | Advanced | Purchase cryptocurrencies without linking to your identity through services like [LocalBitcoins](https://awesome-privacy.xyz/finance/crypto-exchanges/localbitcoins), [Bisq](https://awesome-privacy.xyz/finance/crypto-exchanges/bisq), or Bitcoin ATMs.
**Tumble/ Mix Coins** | Advanced | Use a bitcoin mixer or CoinJoin before converting Bitcoin to currency to obscure transaction trails.
**Use an Alias Details for Online Shopping** | Advanced | For online purchases, consider using alias details, forwarding email addresses, VOIP numbers, and secure delivery methods to protect your identity.
**Use alternate delivery address** | Advanced | Opt for deliveries to non-personal addresses such as PO Boxes, forwarding addresses, or local pickup locations to avoid linking purchases directly to you.

### Recommended Software
- [Virtual Credit Cards](https://github.com/Lissy93/awesome-privacy#virtual-credit-cards)
- [Cryptocurrencies](https://github.com/Lissy93/awesome-privacy#cryptocurrencies)
- [Crypto Wallets](https://github.com/Lissy93/awesome-privacy#crypto-wallets)
- [Crypto Exchanges](https://github.com/Lissy93/awesome-privacy#crypto-exchanges)
- [Other Payment Methods](https://github.com/Lissy93/awesome-privacy#other-payment-methods)
- [Budgeting Tools](https://github.com/Lissy93/awesome-privacy#budgeting-tools)


## Human Aspect

Many data breaches, hacks and attacks are caused by human error. The following list contains steps you should take, to reduce the risk of this happening to you. Many of them are common sense, but it's worth takin note of.

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Verify Recipients** | Essential | Emails can be easily spoofed. Verify the sender's authenticity, especially for sensitive actions, and prefer entering URLs manually rather than clicking links in emails.
**Don't Trust Your Popup Notifications** | Essential | Fake pop-ups can be deployed by malicious actors. Always check the URL before entering any information on a popup.
**Never Leave Device Unattended** | Essential | Unattended devices can be compromised even with strong passwords. Use encryption and remote erase features like Find My Phone for lost devices.
**Prevent Camfecting** | Essential | Protect against camfecting by using webcam covers and microphone blockers. Mute home assistants when not in use or discussing sensitive matters.
**Stay protected from shoulder surfers** | Essential | Use privacy screens on laptops and mobiles to prevent others from reading your screen in public spaces.
**Educate yourself about phishing attacks** | Essential | Be cautious of phishing attempts. Verify URLs, context of received messages, and employ good security practices like using 2FA and not reusing passwords.
**Watch out for Stalkerware** | Essential | Be aware of stalkerware installed by acquaintances for spying. Look out for signs like unusual battery usage and perform factory resets if suspected.
**Install Reputable Software from Trusted Sources** | Essential | Only download software from legitimate sources and check files with tools like [Virus Total](https://awesome-privacy.xyz/security-tools/online-tools/virus-total) before installation.
**Store personal data securely** | Essential | Ensure all personal data on devices or in the cloud is encrypted to protect against unauthorized access.
**Obscure Personal Details from Documents** | Essential | When sharing documents, obscure personal details with opaque rectangles to prevent information leakage.
**Do not assume a site is secure, just because it is `HTTPS`** | Essential | HTTPS does not guarantee a website's legitimacy. Verify URLs and exercise caution with personal data.
**Use Virtual Cards when paying online** | Optional | Use virtual cards for online payments to protect your banking details and limit transaction risks.
**Review application permissions** | Optional | Regularly review and manage app permissions to ensure no unnecessary access to sensitive device features.
**Opt-out of public lists** | Optional | Remove yourself from public databases and marketing lists to reduce unwanted contacts and potential risks.
**Never Provide Additional PII When Opting-Out** | Optional | Do not provide additional personal information when opting out of data services to avoid further data collection.
**Opt-out of data sharing** | Optional | Many apps and services default to data sharing settings. Opt out to protect your data from being shared with third parties.
**Review and update social media privacy** | Optional | Regularly check and update your social media settings due to frequent terms updates that may affect your privacy settings.
**Compartmentalize** | Advanced | Keep different areas of digital activity separate to limit data exposure in case of a breach.
**WhoIs Privacy Guard** | Advanced | Use WhoIs Privacy Guard for domain registrations to protect your personal information from public searches.
**Use a forwarding address** | Advanced | Use a PO Box or forwarding address for mail to prevent companies from knowing your real address, adding a layer of privacy protection.
**Use anonymous payment methods** | Advanced | Opt for anonymous payment methods like cryptocurrencies to avoid entering identifiable information online.


## Physical Security

Public records often include sensitive personal data (full name, date of birth, phone number, email, address, ethnicity etc), and are gathered from a range of sources (census records, birth/ death/ marriage certificates, voter registrants, marketing information, customer databases, motor vehicle records, professional/ business licenses and all court files in full detail). This sensitive personal information is [easy and legal to access](https://www.consumerreports.org/consumerist/its-creepy-but-not-illegal-for-this-website-to-provide-all-your-public-info-to-anyone/), which raises some [serious privacy concerns](https://privacyrights.org/resources/public-records-internet-privacy-dilemma) (identity theft, personal safety risks/ stalkers, destruction of reputations, dossier society)

CCTV is one of the major ways that the corporations, individuals and the government tracks your movements. In London, UK the average person is caught on camera about 500 times per day. This network is continuing to grow, and in many cities around the world, facial recognition is being rolled out, meaning the state can know the identity of residents on the footage in real-time.
Strong authentication, encrypted devices, patched software and anonymous web browsing may be of little use if someone is able to physically compromise you, your devices and your data. This section outlines some basic methods for physical security

**Security** | **Priority** | **Details and Hints**
--- | --- | ---
**Destroy Sensitive Documents** | Essential | Shred or redact sensitive documents before disposal to protect against
identity theft and maintain confidentiality.

**Opt-Out of Public Records** | Essential | Contact people search websites to opt-out from listings that show persona
information, using guides like Michael Bazzell's Personal Data Removal Workbook.

**Watermark Documents** | Essential | Add a watermark with the recipient's name and date to digital copies of
personal documents to trace the source of a breach.

**Don't Reveal Info on Inbound Calls** | Essential | Only share personal data on calls you initiate and verify the recipient's phone number.

**Stay Alert** | Essential | Be aware of your surroundings and assess potential risks in new environments.
**Secure Perimeter** | Essential | Ensure physical security of locations storing personal info devices, minimizing external access and using intrusion detection systems.
**Physically Secure Devices** | Essential | Use physical security measures like Kensington locks, webcam covers, and privacy screens for devices.
**Keep Devices Out of Direct Sight** | Essential | Prevent devices from being visible from outside to mitigate risks from lasers and theft.
**Protect your PIN** | Essential | Shield your PIN entry from onlookers and cameras, and clean touchscreens after use.
**Check for Skimmers** | Essential | Inspect ATMs and public devices for skimming devices and tampering signs before use.
**Protect your Home Address** | Optional | Use alternative locations, forwarding addresses, and anonymous payment methods to protect your home address.
**Use a PIN, Not Biometrics** | Advanced | Prefer PINs over biometrics for device security in situations where legal coercion to unlock devices may occur.
**Reduce exposure to CCTV** | Advanced | Wear disguises and choose routes with fewer cameras to avoid surveillance.
**Anti-Facial Recognition Clothing** | Advanced | Wear clothing with patterns that trick facial-recognition technology.
**Reduce Night Vision Exposure** | Advanced | Use IR light sources or reflective glasses to obstruct night vision cameras.
**Protect your DNA** | Advanced | Avoid sharing DNA with heritage websites and be cautious about leaving DNA traces.



<!-- checklist-end -->

----

#### There's an interactive version!
- [Digital Defense](https://digital-defense.io) - View details, check items of, and track your progress

#### Other Awesome Security Lists
- @sbilly/[awesome-security](https://github.com/sbilly/awesome-security)
- @0x4D31/[awesome-threat-detection](https://github.com/0x4D31/awesome-threat-detection)
- @hslatman/[awesome-threat-intelligence](https://github.com/hslatman/awesome-threat-intelligence)
- @PaulSec/[awesome-sec-talks](https://github.com/PaulSec/awesome-sec-talks)
- @Lissy93/[awesome-privacy](https://github.com/lissy93/awesime-privacy)
- @Zbetcheckin/[security_list](https://github.com/zbetcheckin/Security_list)
- Michael Horowitz / [defensivecomputingchecklist.com](https://defensivecomputingchecklist.com/)

[See More](/4_Privacy_And_Security_Links.md#other-github-security-lists)

----

## Notes

*Thanks for visiting, hope you found something useful here :) Contributions are welcome, and much appreciated - to propose an edit [raise an issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose), or [open a PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master). See: [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md).*

*Disclaimer: This is not an exhaustive list, and aims only to be taken as guide.*

*Licensed under [Creative Commons, CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), © [Alicia Sykes](https://aliciasykes.com) 2020*

[![Attribution 4.0 International](https://licensebuttons.net/l/by/3.0/88x31.png)](/LICENSE.md)

---

Help support the continued development of this project 💖

[![Sponsor Lissy93 on GitHub](https://img.shields.io/badge/Sponsor_on_GitHub-Lissy93-%23ff4dda?style=for-the-badge&logo=githubsponsors&logoColor=ff4dda)](https://github.com/sponsors/Lissy93)

----

Found this helpful? Consider sharing it with others, to help them also improve their digital security 😇

[![Share on Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=for-the-badge&logo=Twitter)](http://twitter.com/share?text=Check%20out%20the%20Personal%20Cyber%20Security%20Checklist-%20an%20ultimate%20list%20of%20tips%20for%20protecting%20your%20digital%20security%20and%20privacy%20in%202020%2C%20with%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![Share on LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=for-the-badge&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=https://github.com/Lissy93)
[![Share on Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=for-the-badge&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![Share on Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=for-the-badge&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Check%20out%20the%20Ultimate%20Personal%20Cyber%20Security%20Checklist%20by%20%40Lissy93%20on%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)

---

Get in touch 📬

[![Alicia Sykes on Twitter](https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter)](https://twitter.com/Lissy_Sykes)
[![Alicia Sykes on GitHub](https://img.shields.io/github/followers/lissy93?label=Lissy93&style=social)](https://github.com/Lissy93)
[![Alicia Sykes on Mastodon](https://img.shields.io/mastodon/follow/1032965?domain=https%3A%2F%2Fmastodon.social)](https://mastodon.social/web/accounts/1032965)
[![Alicia Sykes on Keybase](https://img.shields.io/badge/aliciasykes--lightgrey?style=social&logo=Keybase)](https://keybase.io/aliciasykes)
[![Alicia Sykes's PGP](https://img.shields.io/badge/PGP--lightgrey?style=social&logo=Let%E2%80%99s%20Encrypt)](https://keybase.io/aliciasykes/pgp_keys.asc)
[![Alicia Sykes's Website](https://img.shields.io/badge/aliciasykes.com--lightgrey?style=social&logo=Tencent%20QQ)](https://aliciasykes.com)

---
