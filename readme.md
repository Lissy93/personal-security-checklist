# Personal Security Checklist

# Introduction
## What is being collected?

**Google**
Chances are that on a daily basis you use apps, services or maybe even an Operating System owned by a large company such as Google, Microsoft, Apple. They collect and maintain comprehensive records or everything you do, from the sites you visit, to the physical locations you’ve been. They store the photos and videos you take, and all device information, as well as of course the information that you manually input such as calendar events, emails, personal details etc (ref: [Privacy.google.com, 2018](https://privacy.google.com/your-data.html), [Privacy.microsoft.com, 2018](https://privacy.microsoft.com/en-GB/), [Apple UK, 2018](http://(Apple (United Kingdom), 2018))).

**Social Media**
Over [2 billion people](https://www.statista.com/topics/1164/social-networks/) regularly use social media. Facebook and Twitter both monitor and record current location, websites visited, browsing and shopping behaviour and the interactions you have with other users. They also have a fairly strong idea of your political engagements and income level based on how you use their services.

**Web Browsers**
Your web browser also allows for data to be recorded about you, without your immediate knowledge. Most browsers store cookies from sites and also record IP addresses, information about your devices, web beacons, HTTP referers and Pixel tags.

**Internet Service Providers**
Your ISP (the company providing you with your internet connection) monitor all your online activity. From the things you search for and the sites you visit, to your current location and shopping habits. They do this through deep packet inspection, and work closely with the government.

**The Government**
The government works with private companies to collect large amounts of data on you. Including all emails and messages sent and received, GPS location data, video calls, debit/ credit card transactions, legal documents, health documents, travel documents and all media content uploaded.


# How to maximize your security

**Passwords**
Ideally you should use a different, and secure password to access each service you use. To securely manage all of these, a password manager is usually the best option.

| **Done** | **Security**                                                               | **Details and Hints**                                                                                                                                                                                                                                                                                        |
| -------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| []       | **Use a strong password**                                                  | Check how strong your password is at: [HowSecureIsMyPassword.net](https://howsecureismypassword.net)                                                                                                                                                                                                         |
| []       | **Use different passwords for each account you have**                      | In order to manage having hundreds of different passwords, use a [password manager](https://en.wikipedia.org/wiki/Password_manager). Have a look at [LastPass](https://www.lastpass.com), [DashLane](https://www.dashlane.com), [KeePass](https://keepass.info) or [Robo Forms 8](https://www.roboform.com). |
| []       | **Never answer online security questions truthaly**                        | Instead, create a password inside your password manager to store your fictitious answer. This will stop people guessing your place of birth or mothers mainen name.                                                                                                                                          |
| []       | **Don’t use a 4-digit pin to access your phone**                           | Don’t use a short pin to access your smartphone or computer. Instead use a text password.                                                                                                                                                                                                                    |
| []       | **If possible, try to avoid bio-metric and hardware-based authentication** | Fingerprint sensors, face-detection and voice-recognition are all easily hackable. Where possible replace these with traditional passwords.                                                                                                                                                                  |
| []       | P**assword protect your BIOS and drives**                                  | A BIOS or UEFI password will make a hackers life much harder if they get hold of your PC or hard drive, [here is a guide on how to do it](https://www.howtogeek.com/186235/how-to-secure-your-computer-with-a-bios-or-uefi-password/).                                                                       |


**2-Factor Authentication**
This is a secure method of logging in, where you supply not just your password, but also an additional code usually from a device that only you’d have access to.

| **Done** | **Security**              | **Details and Hints**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Use an authenticator.** | Use [Google Authenticator](https://support.google.com/accounts/answer/1066447) where sites offer 2-FA.
Alternative authenticators include: [Authy](https://authy.com),  [FreeOTP](https://freeotp.github.io), [LastPassAuthenticator](https://lastpass.com/auth/) and [AuthenticatorPlus](https://www.authenticatorplus.com).

SMS codes are ubiquitous, but easy to break so although better than nothing, not ideal. Another option is a hardware-based 2FA, such as [Yubico](https://www.yubico.com/security-keys-authentication/), although with limited compatibility and of  course a physical cost. |


**Browser and Search**
Most modern web browsers allow for addons and extensions, these can access anything that you do online, avoid installing anything that may not be legitimate and check permissions first.

| **Done** | **Security**                                       | **Details and Hints**                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Only use trusted browser addons and extensions** | Both Firefox and Chrome webstore allow you to check what permissions access rights an extension requires before you install it. Check the reviews. Only install extensions you really need.                                                                                                                                                                                                                                                         |
| []       | **Use a private search engine**                    | Take a look at [DuckDuckGo](https://duckduckgo.com) or [StartPage](https://www.startpage.com).
Neither store cookies or cache anything.                                                                                                                                                                                                                                                                                                             |
| []       | **Consider a privacy browser**                     | Google openly collects usage data on Chrome. There are several privacy browsers out there which minimize the amount of data collected. Have a look at [Brave Browser](https://brave.com), [Yandex](https://browser.yandex.com), or [Comodo](https://www.comodo.com/home/browsers-toolbars/browser.php). As a more extreme choice, consider [Tor](https://www.torproject.org/).                                                                      |
| []       | **Block scripts from bad origin**                  | Use an extension such as [uBlock Origin](https://github.com/gorhill/uBlock), to block anything being loaded from an external or unverified origin.                                                                                                                                                                                                                                                                                                  |
| []       | **Block Trackers**                                 | Use an extension such as [Privacy Badger](https://www.eff.org/privacybadger) to disallow adds from secretly tracking where you go, and which sites you visit.                                                                                                                                                                                                                                                                                       |
| []       | **Force HTTPS only traffic**                       | Use an extension such as [HTTPS Everywhere](https://www.eff.org/https-everywhere), to force all sites to load securely.                                                                                                                                                                                                                                                                                                                             |
| []       | **Disable Flash**                                  | Adobe Flash has been around since the dawn of the internet, however it has been falling in popularity for a while. It brings with it many unpatched vulnerabilities (a few of which you can [read about here](https://www.comparitech.com/blog/information-security/flash-vulnerabilities-security/)).
See [this guide](https://www.howtogeek.com/222275/how-to-uninstall-and-disable-flash-in-every-web-browser/), on how to disable Flash player. |


**VPN**
A Virtual Private Network (VPN) allows you to securely connect to the internet, when you visit a site, your visiting it through the secure VPN connection and not broadcasting your own IP address. A VPN will hide your identity on the websites you visit, to your internet service provider, and to anyone else trying to track you, they can also encrypt your traffic so you can browse more securely on public networks. They’re really easy to setup.

| **Done** | **Security**  | **Details and Hints**                                                                                                                                                                                                                                                                           |
| -------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Use a VPN** | Ideally use a paid-for VPN, as they’re considerably better quality so won’t affect your speeds, nor show adds.
Take a look at [VyprVPN](https://www.goldenfrog.com/vyprvpn), [NordVPN](https://nordvpn.com), [IPVanish](https://www.ipvanish.com) and [TunnelBear](https://www.tunnelbear.com). |


**Social Media**

| **Done** | **Security**                                                          | **Details and Hints**                                                                                                                                                                                                                                                                                                                                                      |
| -------- | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Check your privacy settings**                                       | Most social networks allow you to control your privacy settings. Ensure that your profile can only be viewed by people who you are in your friends list, and you know personally.                                                                                                                                                                                          |
| []       | **Only put info on social media that you wouldn’t mind being public** | Even with tightened security settings, don’t put anything online that you wouldn’t want to be seen by anyone other than your friends. Don’t reply soley on the social networks security.                                                                                                                                                                                   |
| []       | **Don’t give social networking apps permissions they don’t need**     | By default many of the popular social networking apps, will ask for permission to access your contacts, your call log, your location, your messaging history etc.. If they don’t need this access- don’t grant it.                                                                                                                                                         |
| []       | **Remove meta data before uploading media**                           | Most smartphones and some cameras automatically attach a comprehensive set of additional data to each photograph., This usually includes things like time, date, location, camera model, user etc. Remove this data before uploading. See [this guide](https://www.makeuseof.com/tag/3-ways-to-remove-exif-metadata-from-photos-and-why-you-might-want-to/) for more info. |


**Your Devices**

| **Done** | **Security**                                            | **Details and Hints**                                                                                                                                                          |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| []       | **Turn of connectivity features that arn’t being used** | When your not using WiFi, Bluetooth, NFC or anything else- turn those features off. These are commonly used to easily hack individuals.                                        |
| []       | **Uninstall apps that you don’t need**                  | Don’t have apps that your not using on your phone, as they can be collecting data in the background. Don’t install apps from non-legitimate sources, or apps with few reviews. |
| []       | **Don’t grant apps permissions that they don’t need.**  | If an app doesn’t need access to your camera- don’t grant it access. Same with any features of your phone, be wary about what each app has access to.                          |



**Phone Number**

| **Done** | **Security**                       | **Details and Hints**                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | Avoid using your real phone number | Where possible, avoid giving out your real phone number while creating accounts online. You can create phone numbers using services such as [Google Voice](https://voice.google.com) or [Skype](https://www.skype.com/en/features/online-number/). For temporary usage you can use a service like [iNumbr](https://www.inumbr.com) that generates a phone number that forwards messages and calls to your main number. |


**Communication**
SMS texting is not secure.

| **Done** | **Security**                                     | **Details and Hints**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------- | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ ]      | Don’t use SMS.
Use E2E encrypted messaging apps | [iMessage is secure](https://techcrunch.com/2014/02/27/apple-explains-exactly-how-secure-imessage-really-is/). For non-Apple users [Signal](https://signal.org) is the most secure option. As of late 2016 [WhatsApp](https://www.whatsapp.com) is also [end-to-end-encrypted using the Signal protocol](https://signal.org/blog/whatsapp-complete/). Signal can also protect your phone calls.                                                                                                      |
| [ ]      | Use a secure email provider                      | Most email providers completely invade your privacy intercepting both messages sent and received. [ProtonMail](https://protonmail.com) is a secure email provider, that is open source and offers end-to-end encryption.

There are alternative secure mail providers (such as [CounterMail](https://countermail.com), [HushMail](https://www.hushmail.com) and [MailFence](https://mailfence.com))- but [ProtonMail](https://protonmail.com) has both a clear interface and strong security record |


**Your Router**

| **Done** | **Security**                     | **Details and Hints**                                                                                                                                                                                                                                                                                                             |
| -------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Don’t use a default password** | Change your router password- [here is a guide as to how](https://www.lifewire.com/how-to-change-your-wireless-routers-admin-password-2487652).                                                                                                                                                                                    |
| []       | **Ideally hide your SSID**       | An SSID (or Service Set Identifier) is simply your network name. If it is not visible, it is much less likely to be targeted. You can usually hide it after logging into your router admin panel, [see here for more details](https://www.lifewire.com/hide-your-wireless-network-from-your-internet-leeching-neighbors-2487655). |


**Operating Systems**
Although Windows and OS X are easy and convient, they both are far from secure. The ideal option would be to install a security-based OS. Where this often isn’t possible, using a VM or dual-booting with a consumer-focused Linux distro is still preferable to primarily using a either of Microsoft’s, Apple’s or Google’s services.

| **Done** | **Security**                                             | **Details and Hints**                                                                                                                                                                                                                                                                     |
| -------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Consider Switching to Linux**                          | Linux is considerably [more secure](https://www.pcworld.com/article/202452/why_linux_is_more_secure_than_windows.html) than both OSX and Windows. Some distros are still more secure than others, so it’s worth choosing the right one to get a balance between security and convenience. |
| []       | **Consider running a custom ROM on your Android device** | Your default OS tracks information about your usage, and app data, constantly. Consider a security-focused custom ROM, such as [Lineage](https://lineageos.org) or [CopperheadOS](https://copperhead.co/android/).                                                                        |

**Shopping**

| **Done** | **Security**                                       | **Details and Hints**                                                                                                                                                                                                        |
| -------- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []       | **Use a pre-paid debit card, topped up with cash** | There are a lot of options out there, some are free, some are only available in certain locations, some do require identity checks, whereas others don’t- so it’s worth shopping round to find the one that’s right for you. |
| []       | **Pay with a Crypto currency**                     | This is the most secure method of payment, although unfortunately not currently widley supported.                                                                                                                            |
| []       | **Don’t get goods delivered to your home address** | Use a pickup service, such as Doddle, Amazon Click + Collect, eBay Argos collect etc.                                                                                                                                        |



# References

Privacy.google.com. (2018). *Google Privacy | Why data protection matters*. [online] Available at: https://privacy.google.com/your-data.html [Accessed 17 Mar. 2018].

Privacy.microsoft.com. (2018). *Privacy – Microsoft privacy*. [online] Available at: https://privacy.microsoft.com/en-GB/ [Accessed 17 Mar. 2018].

Apple (United Kingdom). (2018). *Privacy*. [online] Available at: https://www.apple.com/uk/privacy/ [Accessed 17 Mar. 2018].
