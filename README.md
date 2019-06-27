<p align="center">
  <a href="https://www.dyne.org">
    <img alt="Temet Nosce" src="https://jaromil.dyne.org/img/dyne.png" width="300" />
  </a>
</p>
<h1 align="center">
  Temet Nosce </br>
  <sub>Sawtooth block explorer</sub>
</h1>
 

:construction: This software is part of the [DECODE project](https://decodeproject.eu) about data-ownership and [technological sovereignty](https://www.youtube.com/watch?v=RvBRbwBm_nQ). Our effort is that of improving people's awareness of how their data is processed by algorithms, as well facilitate the work of developers to create along [privacy by design principles](https://decodeproject.eu/publications/privacy-design-strategies-decode-architecture) using algorithms that can be deployed in any situation without any change.

<details>
 <summary><strong>:triangular_flag_on_post: Table of Contents</strong> (click to expand)</summary>

* [Install](#floppy_disk-install)
* [Usage](#video_game-usage)
* [Configuration](#wrench-configuration)
* [Testing](#clipboard-testing)
* [Troubleshooting & debugging](#bug-troubleshooting--debugging)
* [Acknowledgements](#heart_eyes-acknowledgements)
* [Links](#globe_with_meridians-links)
* [Contributing](#busts_in_silhouette-contributing)
* [License](#briefcase-license)
</details>

***
## :floppy_disk: Install
After checkout

```bash
npm i -g gatsby-cli
yarn
yarn start
```

***
## :video_game: Usage


A quick look at the top-level files and directories you'll see in this project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

***
## :wrench: Configuration
`.env.development`

The only env variable you have to define is:

`SAWTOOTH_API="http://localhost:8090/blocks"`: To define the endpoint of the Sawtooth rest API 

***

## :clipboard: Testing

***
## :bug: Troubleshooting & debugging


***
## :heart_eyes: Acknowledgements

Copyright :copyright: 2019 by [Dyne.org](https://www.dyne.org) foundation, Amsterdam

Designed, written and maintained by Puria Nafisi Azizi.

<img src="https://zenroom.dyne.org/img/ec_logo.png" class="pic" alt="Project funded by the European Commission">

This project is receiving funding from the European Union’s Horizon 2020 research and innovation programme under grant agreement nr. 732546 (DECODE).


***
## :globe_with_meridians: Links

https://decodeproject.eu/

https://dyne.org/

https://sawtooth.hyperledger.org/


***
## :busts_in_silhouette: Contributing

Please first take a look at the [Dyne.org - Contributor License Agreement](CONTRIBUTING.md) then

1.  :twisted_rightwards_arrows: [FORK IT](https://github.com/DECODEproject/temet_nosce/fork)
2.  Create your feature branch `git checkout -b feature/branch`
3.  Commit your changes `git commit -am 'Add some fooBar'`
4.  Push to the branch `git push origin feature/branch`
5.  Create a new Pull Request
6.  :pray: Thank you


***
## :briefcase: License

    Temet Nosce
    Copyright (c) 2019 Dyne.org foundation, Amsterdam

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
