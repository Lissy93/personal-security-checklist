<h1 align="center">Personal Security Checklist</h1>

<p align="center">
<b><i>The ultimate list of tips to secure your digital life</i></b>
<br />
<b>🌐 <a href="https://digital-defense.io/">digital-defense.io</a></b><br />
<br />
<a href="https://personal-security-checklist.as93.net"><img src="https://i.ibb.co/Rb6P6h6/shield.png" width="64" /><br /></a>
<br />
<kbd><br />👉 <a href="https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md"><b>Read the Checklist</b></a> 👈<br /><br /></kbd>
<br />
</p>


## Contents
- [The Checklist](#the-checklist)
- [The Website](#the-website)
- [The API](#the-api)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

---

## The Checklist

You can view the full checklist in [`CHECKLIST.md`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md)

---

## The Website

The easiest method for consuming the checklist is via our website, at: **[digital-defense.io](https://digital-defense.io/)**

Here you can browse all checklists, filter by level, and check items off as you complete them.

<p align="center">
<img width="600" src="https://i.ibb.co/jzKn05H/digital-defense.png" />
</p>

### About
The source for the website is in [`web/`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/web).<br />
The site is built with Qwik, using TypeScript and some components from DaisyUI.

### Developing
To run the app locally, or to make code changes, you'll need Node and Git installed.

1. Grab the code: `git@github.com:Lissy93/personal-security-checklist.git`
2. Navigate into source: `cd personal-security-checklist/web`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

Alternatively, just open this repo is Code Spaces, where everything is already configured and ready to go.

### Deploying
To deploy the app, follow the developing steps above, then run `yarn build`. You can then deploy it by copying the `dist/` directory to any CDN, web server or static hosting provider.

Alternatively, you can deploy to Netlify or Vercel simply by forking the repository, and then importing it via your dashboard. Or use the links below for an easy 1-click deploy.

---

## The API

We also make all the data available via a free API, which you can use however you wish.

### Usage
All endpoints are documented in our OpenAPI spec, you can view these and try them out via our [Swagger docs]().

Base: digital-defense.io/api

/api/checklists
/api/checklists/[name-or-index]
/api/checklists/[name]/[point-index]
/api/search/[searchterm]


### Developing

### Deploying

---

## Contributing
All checklist data is stored in `personal-security-checklist.yml`. This is pulled in the website at build-time, and referenced by the API, and is also dynamically inserted into the markdown Checklist page.

So if you only wish to make changes to the data, this is the only file you need to edit.

Important: When submitting your pull request, provide references backing up any information that you're adding/amending/removing.

For modifying the website or API source, see the developing sections above for instructions on running locally.

Prior to submitting an issue or PR, please ensure you've followed the community guidelines laid out in the Code of Conduct.

---

## Credits

Thank you to all who have contributed to, or sponsored this project!

### Sponsors

<!-- readme: sponsors -start -->
<!-- readme: sponsors -end -->

If you've found this repository helpful, consider sponsoring me on GitHub if you're able 💜

### Contributors

<!-- readme: contributors -start -->
<!-- readme: contributors -end -->

---


## License

> _**[Lissy93/Personal-Security-Checklist](https://github.com/Lissy93/personal-security-checklist)** is licensed under [MIT](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/LICENSE) © [Alicia Sykes](https://aliciasykes.com) 2024._<br>
> <sup align="right">For information, see <a href="https://tldrlegal.com/license/mit-license">TLDR Legal > MIT</a></sup>

<details>
<summary>Expand License</summary>

```
The MIT License (MIT)
Copyright (c) Alicia Sykes <alicia@omg.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sub-license, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included install 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANT ABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

</details>




<!-- License + Copyright -->
<p  align="center">
  <i>© <a href="https://aliciasykes.com">Alicia Sykes</a> 2024</i><br>
  <i>Licensed under <a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></i><br>
  <a href="https://github.com/lissy93"><img src="https://i.ibb.co/4KtpYxb/octocat-clean-mini.png" /></a><br>
  <sup>Thanks for visiting :)</sup>
</p>

<!-- Dinosaurs are Awesome -->
<!-- 
                        . - ~ ~ ~ - .
      ..     _      .-~               ~-.
     //|     \ `..~                      `.
    || |      }  }              /       \  \
(\   \\ \~^..'                 |         }  \
 \`.-~  o      /       }       |        /    \
 (__          |       /        |       /      `.
  `- - ~ ~ -._|      /_ - ~ ~ ^|      /- _      `.
              |     /          |     /     ~-.     ~- _
              |_____|          |_____|         ~ - . _ _~_-_
-->

