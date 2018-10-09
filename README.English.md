# Akarata

[![Code Climate](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/gpa.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata)
[![Test Coverage](https://codeclimate.com/github/ikhsanalatsary/akarata/badges/coverage.svg)](https://codeclimate.com/github/ikhsanalatsary/akarata/coverage)
[![Build Status](https://travis-ci.org/ikhsanalatsary/akarata.svg?branch=master)](https://travis-ci.org/ikhsanalatsary/akarata)
[![Depedencies Status](https://david-dm.org/ikhsanalatsary/akarata.svg)](https://david-dm.org/ikhsanalatsary/akarata)

Akarata is a JavaScript library to retrieve the root / syllable root (stem) from word stem that does have a prefix in front of the word or  suffix at the end of the word in Indonesian. Akarata is derived from the word "akar kata" in indonesian, for easier pronouncing.

Akarata inspired by stem of word in Indonesian based on Porter Stemmer, using algorithm published in *paper* [**A Study of Stemming Effects on Information Retrieval in Bahasa Indonesia**](http://www.illc.uva.nl/Publications/ResearchReports/MoL-2003-02.text.pdf), by Fadillah Z Tala. 

## Installation

npm:

	npm install --save akarata

yarn:

	yarn add akarata

## Usage

Babel:

	import akarata from 'akarata';
	akarata.stem('menikah'); // nikah


JavaScript:

	var akarata = require('akarata');
	akarata.stem('belajar'); // ajar

Or you can directly try it on this web: [akarata.netlify.com](https://akarata.netlify.com).