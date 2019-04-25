# Akarata

[![Build Status](https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master)](https://travis-ci.org/ikhsanalatsary/akarata)
[![codecov](https://codecov.io/gh/ikhsanalatsary/akarata/branch/master/graph/badge.svg)](https://codecov.io/gh/ikhsanalatsary/akarata)
[![npm](https://img.shields.io/npm/v/akarata.svg?color=blue)](http://npm.im/akarata) [![Greenkeeper badge](https://badges.greenkeeper.io/ikhsanalatsary/akarata.svg)](https://greenkeeper.io/)

[README Bahasa version](./README.md)

Akarata is a JavaScript library to retrieve the root / syllable root (stem) from word stem that does have a prefix in front of the word or suffix at the end of the word in Indonesian. Akarata is derived from the word "akar kata" in indonesian, for easier pronouncing.

Akarata inspired by stem of word in Indonesian based on Porter Stemmer, using algorithm published in _paper_ [**A Study of Stemming Effects on Information Retrieval in Bahasa Indonesia**](http://www.illc.uva.nl/Publications/ResearchReports/MoL-2003-02.text.pdf), by Fadillah Z Tala.

Akarata created universally, can be run on the server using `Node.js` or in the modern browser even in`react-native`. But it should be noted that the compatibility of the _platform_. Check on [Compatibility function](#compatibility-function)

## Requirement

tslib >= 1.9.0

## Installation

npm:

    npm install --save tslib akarata

yarn:

    yarn add tslib akarata

## Compatibility function

Because akarata uses [Array.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes). So if you use akarata on `Node.js` version 4, _browser_ Edge < v14, IE, Chrome < v47, Firefox < 43, Safari < v9, etc([see table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Browser_compatibility)) you need [`polyfill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill). You can jump to this section to include it [Include polyfill](#include-polyfill)

## Include polyfill

Skip this step if _platform_ is supported.

use `npm`:

    npm i ts-polyfill

use `yarn`:

    yarn add ts-polyfill

### Usage polyfill

Import this before you import akarata, usually put it on top.

on node.js:

    require('ts-polyfill/lib/es2016-array-include');

on ES2015+ / Babel / TypeScript:

    import 'ts-polyfill/lib/es2016-array-include';

### Only use script tag:

If you do not want to install `ts-polyfill` and the target is browser only. Then copy the code in the documentation [`polyfill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill)

    <script type="javascript">
      // paste code here
    <script>

## Usage

### Importing the library

ES2015+ / Babel / TypeScript:

    // import library
    import * as akarata from 'akarata';
    // or
    import akarata from 'akarata';

CommonJS/ UMD / NodeJS:

    // import library
    var akarata = require('akarata');

Michael Jackson script/ MJS / NodeJS `experimental-modules`:

    // import library
    import * as akarata from 'akarata';
    // or
    import akarata from 'akarata';

`unpkg.com`:

    // since akarata version > 0.1.5
    // unpkg.com/:package@:version/:file
    // `.min` means compressed version
    // for instance
    import * as akarata from 'https://unpkg.com/akarata@0.2.0/bundles/index.esm.js';
    // or
    import akarata from 'https://unpkg.com/akarata@0.2.0/bundles/index.esm.min.js';

    // or with absolute url, fallback to bundles/index.umd.js
    import akarata from 'https://unpkg.com/akarata';

### Then you can use it

    // call the stem method
    akarata.stem('menikah'); // nikah

Or you can directly try it on this web: [akarata.netlify.com](https://akarata.netlify.com).

## Issues

By cause of this module is still in its development process, submit a [ticket](<(https://github.com/ikhsanalatsary/akarata/issues/new)>) if you are facing an issue.

## Contributing

This module is intended to be a Javascript implementation of [Apache Lucene](http://lucene.apache.org/)'s Bahasa Indonesia word stemmer.

1. Require Node.js version >= 8.5
2. Fork this project
3. Create your feature branch (`git checkout -b my-new-feature`)
4. Make changes and test cases for your feature in `__tests__` directory and run `npm test`
5. Save your changes and add them (`git add .`)
6. Commit your changes (`git commit -m 'Added some new feature'`)
7. Push to the branch (`git push origin my-new-feature`)
8. Create new pull request

### Reference

1. [Great Dictionary of the Indonesian Language](http://bahasa.kemdiknas.go.id/kbbi/index.php)
2. To look up and verify [Indonesian words](http://kateglo.com/)
3. Wikipedia article (in Bahasa) [Prefixes in Bahasa Indonesia](http://id.wikipedia.org/wiki/Prefiks_dalam_bahasa_Indonesia)

## Thanks

First and foremost, I would like to thank to Allah Subhanahu Wa Ta'ala, that without his blessings this project could not be made. I would like to also thank:

- Faidlah Z Tala & [Apache Lucene](http://lucene.apache.org/) as without them this module could not be made
- [Kateglo Bahtera](http://kateglo.com/) for providing an API so this module could separate ambiguous words and validation.
- Adinda Praditya & [Indonesian Stemmer](https://github.com/apraditya/indonesian_stemmer) for the great mentorship along with his project, this module could be implemented in JavaScript
