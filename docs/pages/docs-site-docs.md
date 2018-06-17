
## Documentation for the GitHub Docs Site

<p align="center">
  <a href="https://travis-ci.org/Lissy93/voronoi-site-template"><img data-no-zoom src="https://travis-ci.org/Lissy93/voronoi-site-template.svg?branch=master" alt="Build Status" /></a>
  <a href="https://www.codacy.com/app/lissy93/voronoi-site-template?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Lissy93/voronoi-site-template&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/42869ef92bb2469e9f92bcf5de15bc94" alt="Codacy Badge" /></a>
  <a href="https://david-dm.org/Lissy93/voronoi-site-template"><img data-no-zoom src="https://david-dm.org/Lissy93/voronoi-site-template/status.svg" alt="dependencies Status" /></a>
  <a href="https://david-dm.org/Lissy93/voronoi-site-template?type=dev"><img data-no-zoom src="https://david-dm.org/Lissy93/voronoi-site-template/dev-status.svg" alt="devDependencies Status" /></a>
  <a href="https://github.com/Lissy93/voronoi-site-template/commits/master"><img data-no-zoom src="https://img.shields.io/maintenance/yes/2018.svg?style=flat-square" alt="Maintenance" /></a>
  <a href="https://codeclimate.com/github/Lissy93/voronoi-site-template/maintainability"><img data-no-zoom src="https://api.codeclimate.com/v1/badges/58e7ee2c035047d1572e/maintainability" alt="Maintainability" /></a>
</p>

## Installing

Simply clone the repo, navigate into the new directory, install dependencies, build, and your ready to go!

```console
git clone https://github.com/Lissy93/voronoi-site-template.git
cd voronoi-site-template
yarn
```

## Building, Developing and Deploying

- [**`npm run build`**](package.json#L9) *Triggers complete webpack build*
- [**`npm run start`**](package.json#L7) *Opens the standalone version*
- [**`npm run serve`**](package.json#L8) *Runs app on a lightweight node server*
- [**`npm run dev`**](package.json#L10) *Starts webpack-dev-server, for live changes*
- [**`npm run clean`**](package.json#L12) *Removes all generated files and libraries*
- [**`npm run test`**](package.json#L11) *Executes the test scripts*

*__Note:__ You should only need to modify files within the [`/src`](src/) directory, and the [`*.md`](pages/) files. Anything else will be overidden when webpack builds.*

## Credits
 - This project uses [Docsify](https://github.com/QingWei-Li/docsify/) to display MD docs and for navigation
 - The homepage Vonoroi visualisation was based on Mike Bostock's origional D3.js [voronoi](https://github.com/d3/d3-voronoi) script.

## License
Licensed under MIT, (C) [Alicia Sykes](https://aliciasykes.com) 2018. [Read full License](LICENSE.md).

[![License](https://upload.wikimedia.org/wikipedia/commons/f/f8/License_icon-mit-88x31-2.svg)](LICENSE.md)