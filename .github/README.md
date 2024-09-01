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

<details>
    <summary><b>Contents</b></summary>
    
- [The Checklist](#the-checklist)
- [The Website](#the-website)
- [The API](#the-api)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

</details>

---

## The Checklist

You can read the full checklist in [`CHECKLIST.md`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md).<br>
<sub>To view/edit the raw data, see [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/master/personal-security-checklist.yml)</sub>

---

## The Website

The easiest method for consuming the checklist is via our website: **[digital-defense.io](https://digital-defense.io/)**

Here you can browse lists, filter by your threat model and tick items off once complete (plus, there are pretty charts to make you feel good about your progress ☺️).

<p align="center">
<img width="600" src="https://i.ibb.co/jzKn05H/digital-defense.png" />
</p>

### About
The source for the website is in [`web/`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/web).<br />
The site is built with Qwik, using TypeScript and some components from DaisyUI.

### Developing
To run the app locally, or to make code changes, you'll need Node and Git installed.

1. Grab the code: `git clone git@github.com:Lissy93/personal-security-checklist.git`
2. Navigate into the source: `cd personal-security-checklist/web`
3. Install dependencies: `yarn`
4. Start the development server: `yarn dev`

Alternatively, just open this repo in Code Spaces, where everything is already configured and ready to go.

### Deploying
To deploy the app, follow the developing steps above, then run `yarn build`, `yarn build.static`. You can then deploy it by copying the `dist/` directory to any CDN, web server or static hosting provider of your choice.

Alternatively, fork the repo and import it into your providers' dashboard. Or use the link below for an easy 1-click deployment 😉

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

## Contributing
All checklist data is stored in [`personal-security-checklist.yml`](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/personal-security-checklist.yml). This is pulled in the website at build-time and referenced by the API, and is also dynamically inserted into the markdown [Checklist page](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/CHECKLIST.md).

So if you only wish to make changes to the data, this is the only file you need to edit.

Important: When submitting your pull request, provide references backing up any information that you're adding/amending/removing.

For modifying the website or API source, see the developing sections above for instructions on running locally.

Before submitting an issue or PR, please ensure you've followed the [community guidelines](https://github.com/Lissy93/personal-security-checklist/blob/master/.github/CONTRIBUTING.md) and followed the [Code of Conduct](https://github.com/Lissy93/personal-security-checklist/blob/HEAD/.github/CODE_OF_CONDUCT.md).

---

## Credits

Thank you to all who have contributed to, or sponsored this project!

### Sponsors

<!-- readme: sponsors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/vincentkoc">
            <img src="https://avatars.githubusercontent.com/u/25068?u=cbf098fc04c0473523d373b0dd2145b4ec99ef93&v=4" width="80;" alt="vincentkoc"/>
            <br />
            <sub><b>Vincent Koc</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/tbjers">
            <img src="https://avatars.githubusercontent.com/u/1117052?v=4" width="80;" alt="tbjers"/>
            <br />
            <sub><b>Torgny Bjers</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/AnandChowdhary">
            <img src="https://avatars.githubusercontent.com/u/2841780?u=747e554b3a7f12eb20b7910e1c87d817844f714f&v=4" width="80;" alt="AnandChowdhary"/>
            <br />
            <sub><b>Anand Chowdhary</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/shrippen">
            <img src="https://avatars.githubusercontent.com/u/2873570?v=4" width="80;" alt="shrippen"/>
            <br />
            <sub><b>Shrippen</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/bile0026">
            <img src="https://avatars.githubusercontent.com/u/5022496?u=aec96ad173c0ea9baaba93807efa8a848af6595c&v=4" width="80;" alt="bile0026"/>
            <br />
            <sub><b>Zach Biles</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/UlisesGascon">
            <img src="https://avatars.githubusercontent.com/u/5110813?u=3c41facd8aa26154b9451de237c34b0f78d672a5&v=4" width="80;" alt="UlisesGascon"/>
            <br />
            <sub><b>Ulises Gascón</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/digitalarche">
            <img src="https://avatars.githubusercontent.com/u/6546135?u=564756d7f44ab2206819eb3148f6d822673f5066&v=4" width="80;" alt="digitalarche"/>
            <br />
            <sub><b>Digital Archeology</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/InDieTasten">
            <img src="https://avatars.githubusercontent.com/u/7047377?u=8d8f8017628b38bc46dcbf3620e194b01d3fb2d1&v=4" width="80;" alt="InDieTasten"/>
            <br />
            <sub><b>InDieTasten</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/araguaci">
            <img src="https://avatars.githubusercontent.com/u/7318668?v=4" width="80;" alt="araguaci"/>
            <br />
            <sub><b>Araguaci</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/bmcgonag">
            <img src="https://avatars.githubusercontent.com/u/7346620?u=2a0f9284f3e12ac1cc15288c254d1ec68a5081e8&v=4" width="80;" alt="bmcgonag"/>
            <br />
            <sub><b>Brian McGonagill</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/vlad-tim">
            <img src="https://avatars.githubusercontent.com/u/11474041?u=eee43705b54d2ec9f51fc4fcce5ad18dd17c87e4&v=4" width="80;" alt="vlad-tim"/>
            <br />
            <sub><b>Vlad</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/helixzz">
            <img src="https://avatars.githubusercontent.com/u/12218889?u=d06d0c103dfbdb99450623064f7da3c5a3675fb6&v=4" width="80;" alt="helixzz"/>
            <br />
            <sub><b>HeliXZz</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/patvdv">
            <img src="https://avatars.githubusercontent.com/u/12430107?u=e8911c2fb91af4d30432f76da8c40927b2830bd7&v=4" width="80;" alt="patvdv"/>
            <br />
            <sub><b>Patrick Van Der Veken</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mryesiller">
            <img src="https://avatars.githubusercontent.com/u/24632172?u=0d20f2d615158f87cd60a3398d3efb026c32f291&v=4" width="80;" alt="mryesiller"/>
            <br />
            <sub><b>Göksel Yeşiller</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sushibait">
            <img src="https://avatars.githubusercontent.com/u/26634535?v=4" width="80;" alt="sushibait"/>
            <br />
            <sub><b>Shiverme Timbers</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/forwardemail">
            <img src="https://avatars.githubusercontent.com/u/32481436?v=4" width="80;" alt="forwardemail"/>
            <br />
            <sub><b>Forward Email - Open-source & Privacy-focused Email Service (2023)</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/semiceau">
            <img src="https://avatars.githubusercontent.com/u/50425951?u=f8c386b966312769f559422adf0dbc7e2f116258&v=4" width="80;" alt="semiceau"/>
            <br />
            <sub><b>GT</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Bastii717">
            <img src="https://avatars.githubusercontent.com/u/53431819?u=604977bed6ad6875ada890d0d3765a4cacc2fa14&v=4" width="80;" alt="Bastii717"/>
            <br />
            <sub><b>Bastii717</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/getumbrel">
            <img src="https://avatars.githubusercontent.com/u/59408891?v=4" width="80;" alt="getumbrel"/>
            <br />
            <sub><b>Umbrel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/frankdez93">
            <img src="https://avatars.githubusercontent.com/u/87549420?v=4" width="80;" alt="frankdez93"/>
            <br />
            <sub><b>Frankdez93</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/terminaltrove">
            <img src="https://avatars.githubusercontent.com/u/121595180?v=4" width="80;" alt="terminaltrove"/>
            <br />
            <sub><b>Terminal Trove</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/st617">
            <img src="https://avatars.githubusercontent.com/u/128325650?v=4" width="80;" alt="st617"/>
            <br />
            <sub><b>St617</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/nrvo">
            <img src="https://avatars.githubusercontent.com/u/151435968?u=e1dcb307fd0efdc45cddbe9490a7b956e4da6835&v=4" width="80;" alt="nrvo"/>
            <br />
            <sub><b>Nrvo</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/hudsonrock-partnerships">
            <img src="https://avatars.githubusercontent.com/u/163282900?u=5f2667f7fe5d284ac7a2da6b0800ea8970b0fcbf&v=4" width="80;" alt="hudsonrock-partnerships"/>
            <br />
            <sub><b>Hudsonrock-partnerships</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: sponsors -end -->

If you've found this repository helpful, consider sponsoring me on GitHub if you're able 💜

### Contributors

<!-- readme: contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Lissy93">
            <img src="https://avatars.githubusercontent.com/u/1862727?v=4" width="80;" alt="Lissy93"/>
            <br />
            <sub><b>Alicia Sykes</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/liss-bot">
            <img src="https://avatars.githubusercontent.com/u/87835202?v=4" width="80;" alt="liss-bot"/>
            <br />
            <sub><b>Alicia Bot</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/matkoniecz">
            <img src="https://avatars.githubusercontent.com/u/899988?v=4" width="80;" alt="matkoniecz"/>
            <br />
            <sub><b>Mateusz Konieczny</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/lucadidomenico">
            <img src="https://avatars.githubusercontent.com/u/56132403?v=4" width="80;" alt="lucadidomenico"/>
            <br />
            <sub><b>Luca Di Domenico</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/gitetsu">
            <img src="https://avatars.githubusercontent.com/u/44036?v=4" width="80;" alt="gitetsu"/>
            <br />
            <sub><b>Gitetsu</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/aarontorres0">
            <img src="https://avatars.githubusercontent.com/u/51248787?v=4" width="80;" alt="aarontorres0"/>
            <br />
            <sub><b>Aaron </b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/0xnbk">
            <img src="https://avatars.githubusercontent.com/u/355844?v=4" width="80;" alt="0xnbk"/>
            <br />
            <sub><b>Nbk</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/alxndrv">
            <img src="https://avatars.githubusercontent.com/u/44431221?v=4" width="80;" alt="alxndrv"/>
            <br />
            <sub><b>Andrey Aleksandrov</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/hypogram">
            <img src="https://avatars.githubusercontent.com/u/122231081?v=4" width="80;" alt="hypogram"/>
            <br />
            <sub><b>Hypogram</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/b3pio">
            <img src="https://avatars.githubusercontent.com/u/59568034?v=4" width="80;" alt="b3pio"/>
            <br />
            <sub><b>₿ӠⱣłØ</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/rusty-snake">
            <img src="https://avatars.githubusercontent.com/u/41237666?v=4" width="80;" alt="rusty-snake"/>
            <br />
            <sub><b>Rusty-snake</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/marjamis">
            <img src="https://avatars.githubusercontent.com/u/10202014?v=4" width="80;" alt="marjamis"/>
            <br />
            <sub><b>Marjamis</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/ansuz">
            <img src="https://avatars.githubusercontent.com/u/1264398?v=4" width="80;" alt="ansuz"/>
            <br />
            <sub><b>Ansuz</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/zacharyraber">
            <img src="https://avatars.githubusercontent.com/u/105998568?v=4" width="80;" alt="zacharyraber"/>
            <br />
            <sub><b>Zachary Raber</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sirodoht">
            <img src="https://avatars.githubusercontent.com/u/553444?v=4" width="80;" alt="sirodoht"/>
            <br />
            <sub><b>Theodore Keloglou</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ilesinge">
            <img src="https://avatars.githubusercontent.com/u/501674?v=4" width="80;" alt="ilesinge"/>
            <br />
            <sub><b>Alexandre G.-Raymond</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ba32107">
            <img src="https://avatars.githubusercontent.com/u/26036493?v=4" width="80;" alt="ba32107"/>
            <br />
            <sub><b>Balazs Gyurak</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dmbaturin">
            <img src="https://avatars.githubusercontent.com/u/482212?v=4" width="80;" alt="dmbaturin"/>
            <br />
            <sub><b>Daniil Baturin</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/mwleeds">
            <img src="https://avatars.githubusercontent.com/u/7833263?v=4" width="80;" alt="mwleeds"/>
            <br />
            <sub><b>Phaedrus Leeds</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/pndyjack">
            <img src="https://avatars.githubusercontent.com/u/20967911?v=4" width="80;" alt="pndyjack"/>
            <br />
            <sub><b>Pndyjack</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/kdenhartog">
            <img src="https://avatars.githubusercontent.com/u/23125059?v=4" width="80;" alt="kdenhartog"/>
            <br />
            <sub><b>Kyle Den Hartog</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dextermallo">
            <img src="https://avatars.githubusercontent.com/u/29012607?v=4" width="80;" alt="dextermallo"/>
            <br />
            <sub><b>Dexter</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/zeusalmighty717">
            <img src="https://avatars.githubusercontent.com/u/79133911?v=4" width="80;" alt="zeusalmighty717"/>
            <br />
            <sub><b>Zeus Almighty</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/WairimuMaringa">
            <img src="https://avatars.githubusercontent.com/u/94458202?v=4" width="80;" alt="WairimuMaringa"/>
            <br />
            <sub><b>Wairimu Maringa</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/tim-v3">
            <img src="https://avatars.githubusercontent.com/u/103248132?v=4" width="80;" alt="tim-v3"/>
            <br />
            <sub><b>Tim Weber</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ThomasRettig">
            <img src="https://avatars.githubusercontent.com/u/68767503?v=4" width="80;" alt="ThomasRettig"/>
            <br />
            <sub><b>Thomas Rettig</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/spikecodes">
            <img src="https://avatars.githubusercontent.com/u/19519553?v=4" width="80;" alt="spikecodes"/>
            <br />
            <sub><b>Spike O'Carroll</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Silvhr">
            <img src="https://avatars.githubusercontent.com/u/71043300?v=4" width="80;" alt="Silvhr"/>
            <br />
            <sub><b>Silvhr</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/rorymbyrne">
            <img src="https://avatars.githubusercontent.com/u/18581795?v=4" width="80;" alt="rorymbyrne"/>
            <br />
            <sub><b>Rory Byrne</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/yaxollum">
            <img src="https://avatars.githubusercontent.com/u/46109467?v=4" width="80;" alt="yaxollum"/>
            <br />
            <sub><b>Peter Ye</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/sjamaan">
            <img src="https://avatars.githubusercontent.com/u/128536?v=4" width="80;" alt="sjamaan"/>
            <br />
            <sub><b>Peter Bex</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/pdelfino">
            <img src="https://avatars.githubusercontent.com/u/7698207?v=4" width="80;" alt="pdelfino"/>
            <br />
            <sub><b>Pedro Delfino</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Oymate">
            <img src="https://avatars.githubusercontent.com/u/50857856?v=4" width="80;" alt="Oymate"/>
            <br />
            <sub><b>Oymate</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/nickali">
            <img src="https://avatars.githubusercontent.com/u/1514992?v=4" width="80;" alt="nickali"/>
            <br />
            <sub><b>Nick Ali</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mschwrdtnr">
            <img src="https://avatars.githubusercontent.com/u/39745446?v=4" width="80;" alt="mschwrdtnr"/>
            <br />
            <sub><b>Max S.</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/lordpansar">
            <img src="https://avatars.githubusercontent.com/u/14231148?v=4" width="80;" alt="lordpansar"/>
            <br />
            <sub><b>Magnus Sundström</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/lukecarr">
            <img src="https://avatars.githubusercontent.com/u/24438483?v=4" width="80;" alt="lukecarr"/>
            <br />
            <sub><b>Luke Carr</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/elesiuta">
            <img src="https://avatars.githubusercontent.com/u/8146662?v=4" width="80;" alt="elesiuta"/>
            <br />
            <sub><b>Eric Lesiuta</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/fireneat">
            <img src="https://avatars.githubusercontent.com/u/95147296?v=4" width="80;" alt="fireneat"/>
            <br />
            <sub><b>Fireneat</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ignoramous">
            <img src="https://avatars.githubusercontent.com/u/852289?v=4" width="80;" alt="ignoramous"/>
            <br />
            <sub><b>Ignoramous</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/jxdv">
            <img src="https://avatars.githubusercontent.com/u/138708600?v=4" width="80;" alt="jxdv"/>
            <br />
            <sub><b>Jxdv</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/kevodwyer">
            <img src="https://avatars.githubusercontent.com/u/5311499?v=4" width="80;" alt="kevodwyer"/>
            <br />
            <sub><b>Kevodwyer</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/notthewave">
            <img src="https://avatars.githubusercontent.com/u/74874782?v=4" width="80;" alt="notthewave"/>
            <br />
            <sub><b>Axel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ogoregen">
            <img src="https://avatars.githubusercontent.com/u/37447279?v=4" width="80;" alt="ogoregen"/>
            <br />
            <sub><b>Oğuzhan</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/omahs">
            <img src="https://avatars.githubusercontent.com/u/73983677?v=4" width="80;" alt="omahs"/>
            <br />
            <sub><b>Omahs</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/pabloscloud">
            <img src="https://avatars.githubusercontent.com/u/93644977?v=4" width="80;" alt="pabloscloud"/>
            <br />
            <sub><b>Pabloscloud</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/partoneoftwo">
            <img src="https://avatars.githubusercontent.com/u/1677630?v=4" width="80;" alt="partoneoftwo"/>
            <br />
            <sub><b>Partoneoftwo</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/pipboy96">
            <img src="https://avatars.githubusercontent.com/u/46632672?v=4" width="80;" alt="pipboy96"/>
            <br />
            <sub><b>Pipboy96</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/theblackmallard">
            <img src="https://avatars.githubusercontent.com/u/42389961?v=4" width="80;" alt="theblackmallard"/>
            <br />
            <sub><b>Theblackmallard</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/titanism">
            <img src="https://avatars.githubusercontent.com/u/101466223?v=4" width="80;" alt="titanism"/>
            <br />
            <sub><b>Titanism</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/0x192">
            <img src="https://avatars.githubusercontent.com/u/55300518?v=4" width="80;" alt="0x192"/>
            <br />
            <sub><b>W1nst0n</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/101lols">
            <img src="https://avatars.githubusercontent.com/u/29000894?v=4" width="80;" alt="101lols"/>
            <br />
            <sub><b>101lols</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/boushley">
            <img src="https://avatars.githubusercontent.com/u/101239?v=4" width="80;" alt="boushley"/>
            <br />
            <sub><b>Aaron Boushley</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Adv4n6">
            <img src="https://avatars.githubusercontent.com/u/34752023?v=4" width="80;" alt="Adv4n6"/>
            <br />
            <sub><b>Adv4n6</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/ajdumanhug">
            <img src="https://avatars.githubusercontent.com/u/9420289?v=4" width="80;" alt="ajdumanhug"/>
            <br />
            <sub><b>Aj Dumanhug</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ndsvw">
            <img src="https://avatars.githubusercontent.com/u/21332313?v=4" width="80;" alt="ndsvw"/>
            <br />
            <sub><b>Alex</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/austinhuang0131">
            <img src="https://avatars.githubusercontent.com/u/16656689?v=4" width="80;" alt="austinhuang0131"/>
            <br />
            <sub><b>Austin Huang</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ben-thul">
            <img src="https://avatars.githubusercontent.com/u/13566569?v=4" width="80;" alt="ben-thul"/>
            <br />
            <sub><b>Ben Thul</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/BBlackwo">
            <img src="https://avatars.githubusercontent.com/u/7598058?v=4" width="80;" alt="BBlackwo"/>
            <br />
            <sub><b>Benjamin B</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/BrunoBernardino">
            <img src="https://avatars.githubusercontent.com/u/1239616?v=4" width="80;" alt="BrunoBernardino"/>
            <br />
            <sub><b>Bruno Bernardino</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/wallies">
            <img src="https://avatars.githubusercontent.com/u/561860?v=4" width="80;" alt="wallies"/>
            <br />
            <sub><b>Cameron</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/chemmi">
            <img src="https://avatars.githubusercontent.com/u/15739060?v=4" width="80;" alt="chemmi"/>
            <br />
            <sub><b>Christian Hemminghaus</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Compr0mzd">
            <img src="https://avatars.githubusercontent.com/u/83233183?v=4" width="80;" alt="Compr0mzd"/>
            <br />
            <sub><b>Compr0mzd</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/DaShoe">
            <img src="https://avatars.githubusercontent.com/u/89014564?v=4" width="80;" alt="DaShoe"/>
            <br />
            <sub><b>DaShoe</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/danielgtaylor">
            <img src="https://avatars.githubusercontent.com/u/106826?v=4" width="80;" alt="danielgtaylor"/>
            <br />
            <sub><b>Daniel G. Taylor</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/dim1119">
            <img src="https://avatars.githubusercontent.com/u/10008788?v=4" width="80;" alt="dim1119"/>
            <br />
            <sub><b>Dimitris Lazarakis</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/VoDmAl">
            <img src="https://avatars.githubusercontent.com/u/248879?v=4" width="80;" alt="VoDmAl"/>
            <br />
            <sub><b>Dmitry Vorobyev</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/federicoviceconti">
            <img src="https://avatars.githubusercontent.com/u/25590766?v=4" width="80;" alt="federicoviceconti"/>
            <br />
            <sub><b>Federico</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mrfelpa">
            <img src="https://avatars.githubusercontent.com/u/65371336?v=4" width="80;" alt="mrfelpa"/>
            <br />
            <sub><b>Mrfelpa</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/fkohrt">
            <img src="https://avatars.githubusercontent.com/u/12914806?v=4" width="80;" alt="fkohrt"/>
            <br />
            <sub><b>Florian Kohrt</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/freddy-m">
            <img src="https://avatars.githubusercontent.com/u/25013506?v=4" width="80;" alt="freddy-m"/>
            <br />
            <sub><b>Freddy</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/hw4n">
            <img src="https://avatars.githubusercontent.com/u/38372575?v=4" width="80;" alt="hw4n"/>
            <br />
            <sub><b>Hwanhee Chae</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/jneplokh">
            <img src="https://avatars.githubusercontent.com/u/46184597?v=4" width="80;" alt="jneplokh"/>
            <br />
            <sub><b>Jacob Neplokh</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/gongjason">
            <img src="https://avatars.githubusercontent.com/u/52545545?v=4" width="80;" alt="gongjason"/>
            <br />
            <sub><b>Jason G</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mxygem">
            <img src="https://avatars.githubusercontent.com/u/21065409?v=4" width="80;" alt="mxygem"/>
            <br />
            <sub><b>Gemini Smith</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/monkeywithacupcake">
            <img src="https://avatars.githubusercontent.com/u/7316730?v=4" width="80;" alt="monkeywithacupcake"/>
            <br />
            <sub><b>Jess</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/openjck">
            <img src="https://avatars.githubusercontent.com/u/933396?v=4" width="80;" alt="openjck"/>
            <br />
            <sub><b>John Karahalis</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/edelbluth">
            <img src="https://avatars.githubusercontent.com/u/4939388?v=4" width="80;" alt="edelbluth"/>
            <br />
            <sub><b>Juergen Edelbluth</b></sub>
        </a>
    </td></tr>
<tr>
    <td align="center">
        <a href="https://github.com/fetzu">
            <img src="https://avatars.githubusercontent.com/u/6372605?v=4" width="80;" alt="fetzu"/>
            <br />
            <sub><b>Julien</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/seclution">
            <img src="https://avatars.githubusercontent.com/u/38378574?v=4" width="80;" alt="seclution"/>
            <br />
            <sub><b>Kai Biebel</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/koirand">
            <img src="https://avatars.githubusercontent.com/u/17229643?v=4" width="80;" alt="koirand"/>
            <br />
            <sub><b>Kazuki Koide</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/Kotbenek">
            <img src="https://avatars.githubusercontent.com/u/64036903?v=4" width="80;" alt="Kotbenek"/>
            <br />
            <sub><b>Dominik Piątkowski</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/leon-costa">
            <img src="https://avatars.githubusercontent.com/u/83498565?v=4" width="80;" alt="leon-costa"/>
            <br />
            <sub><b>Leon Costa</b></sub>
        </a>
    </td></tr>
</table>
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

