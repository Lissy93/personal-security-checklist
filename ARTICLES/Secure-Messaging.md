# Choosing a Secure Messenging Platform

This article explains the considerations you should be aware of when selecting a secure messenger.

**TLDR;** Opting for a secure messaging app can prevent any third-parties accessing your private conversions. Choose a platform that is E2E encrypted, open source and actively maintained. Advanced security features can harden defenses further, such as  self-destructing messages, contact verification, forward secrecy, the ability to sign up with an aliases (instead of phone number or email) and a decentralized P2P network sending content over Tor.

## Considerations

### End-to-end Encryption
End-to-end encryption means that messages are encrypted locally on your device, before being sent to your recipient(s). Neither the service provider, nor any actor who intercepts messages can ever decrypt the content. This is important since your data is safe from a data breach, law enforcement warrant, rogue employee or a malicious actor. Avoid apps that offer E2E encryption as an optional feature, as this could increase the chance of a plain text accidentally message being sent. Be aware that some providers offer weak or backdore'd encryption - (often called [Snake Oil Encryption](https://en.wikipedia.org/wiki/Snake_oil_(cryptography))), if the platform is not open source, then there is no way of verifying weather this is the case.

### Open Source
The most secure designs, are the ones you do not have to trust. Without an app being open source, we can not verify that it is truly secure. It may have backdoors, weak cryptography or security vulnerabilities. This is one reason why apps which has fully-open and public source code can be more trustworthy But don't be fooled by false advertising; just because an app uses open source cryptography, does not mean it is fully open source, and hence cannot be verified. The published source code must be complete, and the security design system must be thoroughly documented.

### Code Audit
As well as encryption, the developers need to take care of code quality, user experience, and service availability. The math behind the cryptography may be flawless, but a small mistake in the implementation, can result in serious consequences for security. Therefore the code base should be regularly audited by independant security specialists, and the report published publicly.

### Active Maintenance
Pushing  well tested security updates in a timely manner is of prime importance to security.  New bugs, vulnerabilities and issues are being discovered all the time, and without being patched they may be exploited by an adversary.  For a messenger to be secure, a public stable (non-beta) release needs to be available, and there needs to be secure auto-updating mechanisms to quickly mitigate security problems. It should be clear to the user which version they are running, and if a newer version is available

### Reproducible Builds
Most apps are distributed in a pre-compiled form, making it very difficult to verify that the version you downloaded is authentic and the same as that in the open source repository.  [Binary Transparency](https://wiki.mozilla.org/Security/Binary_Transparency) allows third parties to verify that the binaries are built directly from the public source code. [Reproducible builds](https://reproducible-builds.org) is the practice of verifying the build are authentic, and do not contain backdoors. This is done with a pre-defined build environment and a  fully deterministic build process - transforming a given set of source code must always output the same result. The user can then, if they desire build the app themselves and validate that the output matches the original build.

### Additional Features
Some messaging platforms have additional features, that can be enticing to users, but it critical that these features do not undermine the goals of security. For example, cloud backups should be off by default, and if exported data will be decrypted the user must be made aware of this. Avoid platforms that priorities feature development over security

### Meta Data
Sending and receiving messages generates meta data, and this can reveal a lot of information: Who do you talk to, how often/ for how long, when, where, how etc. Not all messaging platforms automatically encrypt this, so it is important to check: What is collected, how long is it stored, with whom is it shared for and for what purposes. In general, the best meta data policies are the shortest: We do not collect any user meta data.

### Stability
The app should be usable, salable and reliable.  One of the biggest dangers is that if the platform fails to reliably deliver messages, users may be forced to fall back to less secure channels.  Some smaller messaging services may not have the resources required to build a robust and reliable messaging platform, yet this is essential for security.

### Financing
Building apps and maintaining servers is expensive. Ask yourself - who is paying for all that? Because usually, if a service is free - you're the product. This isn't always the case, as some open source apps are funded by non-profit organisations, who receive donations and sponsorship.  But if you cannot easily find out who is behind the app, this should be a red flag.

### Reputable Developers
Developers should have a solid history of responding to technical problems and legal threats with the platform, as well as a realistic and transparent attitude toward government and law enforcement


### Jurisdiction 
The location of where the company is legally registered, where they run operations from and where they host user data plays a big role in security. In some countries or states, organisations are forced to comply with local government regulations, which can often require the organisation log all their users data, or hand over any encryption keys. Generally, it's better to avoid companies from within the [Five Eyes](https://en.wikipedia.org/wiki/Five_Eyes) Alliance.

### Anonymity
If the app asks for a phone number, email address or name, then you are not anonymous.  For vulnerable users, the ability to sign up anonymously is critical, as a major identifier like a phone number  is private information, and could be risky if they are being targeted by someone who knows their identity, (such as a government, stalker or criminal adversary). This may not be needed for everyone, but if you believe you may be targeted, then opt for an anonymous messaging app, download it over Tor, outside of Google Play / Apple App Store, create an anonymous identity  ant only run the app while connected through Tor.

### Contact Verification
Your communications can only be as secure as the weakest link, and if you cannot verify your contacts identity, you cannot be sure that their account has not been taken over, or even that you are communicating with the intended entity. In the same way, if your recipient has been compromised, your messages are not safe at all. Contact fingerprint verification is a powerful feature, enabling users to trust the destination, and preventing hackers from hijacking the conversation. It usually takes the form of comparing fingerprint codes, even over a phone call or in real life via a QR code. A secure messenger should provide reliable indicators of compromise that are recognizable to an end-user, so if someone has logged on from a new device, both parties should be notified.

### Ephemeral Messages
You cannot always rely on the physical security of your device. Self-destructing messages is a really neat feature the causes your messages to automatically delete after a set amount of time. This means that if your device is lost or stolen, an adversary will only have access to the most recent communications. Unlike remote erase, disappearing messages does not require your device to be remotely accessible or have signal. You are able to vary this time frame from weeks all the way down to just a few seconds, depending on your threat model.

### Forward Secrecy
Opt for a platform that implements  [forward secrecy](https://en.wikipedia.org/wiki/Forward_secrecy). This is where your app generates a new encryption key for every message, then even if your adversary has obtained your device and extracted the private encryption key, they will not be able to use it to decrypt any previously captured messages. This means that even if a key from one party is compromised, it will not be possible to decrypt the remainder of the session with this key.

### Decentralization
Without freedom, your app will have a single point of failure. If all data flows through a central provider, then you have to trust them with your meta-data. And if that provider ceases to operate, the entire network will be unavailable for that duration. Whereas with a decentralized system, you have the freedom to delegate trust to someone else, in another jurisdiction. With a fully peer-to-peer app, there are no central servers to compromise, and there is no single point of failure.

## Additional Settings
Your choose an application that allows you to disable optional non-security features such as read receipt, last online and typing notification. If the app supports cloud sync either for backup or for access through a web app companion, this increases the attack surface and so should be disabled also.

## Final Considerations
The weakest point in any system is the user. If you or your recipient is compromised, then even the most advanced security features will become obsolete. Follow good security practices, and ensure the contact you are communicating with also does so. It's important to remember that new vulnerabilities are being discovered and exploited all the time, and the most secure messaging app of today could become compromised in the future

