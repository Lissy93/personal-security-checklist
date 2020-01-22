# Personal Security Checklist | TLDR

> This is the shortened version of [The Complete Personal Security Checklist](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md). 
It lays out the 20 most essential security + privacy tips, that you should complete to protect your digital life.


## ACCOUNT LOGINS
- Use strong, unique passphrases for each of your accounts (12+ alpha-numeric upper and lower-case letters + symbols). Avoid predicitable patterns, dictionary words and names.
- Use a password manager: It is going to be almost impossible to remember all your different passwords. A password manager will generate passwords, securly store and auto-fill them, with a browser extension and mobile app. You will only need to remember 1 master password. [1Password](https://1password.com/) and [BitWarden](https://bitwarden.com/). [KeePass XC](https://keepassxc.org/) is more secure, but without any cloud-sync functionality.
- Use 2-factor authentication for all secure accounts (email, cloud storage, financial accounts and social media). You can do this with [Authy](https://authy.com/) which will also let you back up and sync your tokens across multiple devices. Or for for open source options there is [Aegis](https://getaegis.app/) and [AndOTP](https://github.com/andOTP/andOTP).
- Be cautious when logging into your accounts on someone elses device, as you cannot be sure that it is free of malware. Use incognito mode (Ctrl+Shift+N) so your credentials don't get cached.


## BROWSING
- Don't enter any personal details on websites that are not HTTPS
- Switch to Firefox or Brave browser, both of which have better privacy by default. Consider using [Tor](https://www.torproject.org/) for the greatest privacy.
- Consider using search engine that doesn't track you, such as DuckDuckGo
- Install [PrivacyBadger](https://www.eff.org/privacybadger) extension to block invisible trackers, and [HTTPS Everywhere](https://www.eff.org/https-everywhere) to force sites to load via HTTPS. You can use [Panopticlick](https://panopticlick.eff.org/) to quickly check if your browser is safe against tracking.


## PHONE
- Have a strong pin/ password on your device
- Turn of WiFi when your not using it, and delete saved networks that you no longer need (Settings --> WiFi --> Saved Networks)
- Don't grant apps permissions that they don't need. For Android, you can use [Exodus](https://exodus-privacy.eu.org/en/) to quickly see the permissions and trackers for each of your installed apps


## EMAIL
- It's important to protect your email account, as if a hacker gains access to it they will be able to reset the passwords for all your other accounts. Ensure you have a strong and unique password, and enablle 2FA.
- Emails are not encrypted by default, meaning they are able to be read by anyone who intercepts them as well as your email provider (Google, Microsoft, Apple, Yahoo etc all monitor emails). Consider switching to a secure mail provider, such as [ProtonMail](https://protonmail.com/). (Other encrypted mail providers include [Tutanota](https://tutanota.com/), [CounterMail](https://countermail.com/), [HushMail](https://www.hushmail.com/) and [MailFence](https://mailfence.com/))


## NETWORKING
- Use a reputible VPN, to keep your IP protected, and reduce the amount of browsing data your ISP can log. Note, VPN's do not provide ultimate protection as advertisers commonly state, they merley route your traaffic through a different network. See [thatoneprivacysite.net](https://thatoneprivacysite.net/) for a detailed comparison chart. [ProtonVPN](https://protonvpn.com/) has a free starter plan, [Mullvad](https://mullvad.net/) is great for anonimity. Other good all-rounders include NordVPN, TorGaurd and AirVPN.
- Change your routers default password. Anyone connected to your WiFi is able to listen to network traffic, so in order to prevent people you don't know from connecting, use WPA2 and set a strong password.
- Update your router settings to use a secure DNS, such as [Cloudflare's 1.1.1.1](https://1.1.1.1/dns/), this should also speed up your internet. If you cannot modify your roters settings, you can set the DNS on your phone (with the [1.1.1.1. app](https://1.1.1.1/)), or [Windows](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/windows/), [Mac](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/mac/) or [Linux](https://developers.cloudflare.com/1.1.1.1/setting-up-1.1.1.1/linux/). DNS is the system used to resolve URL's to their server addresses, many DNS providers collect data on your browsing habbits and use it to target you with ads or sell it on. 


## DEVICES
- Keep software up-to-date. Security fixes and patches are released as updates, so it is important to install updates when prompted, for your phone, PC, router, IoT devices and all software/ apps.
