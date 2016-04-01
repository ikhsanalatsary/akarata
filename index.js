'use strict';

import _ from 'lodash';
import Morphological from './lib/morphological_utility.js';
const totalSyllables = Morphological.totalSyllables;
const removeParticle = Morphological.removeParticle;
const removePossesive = Morphological.removePossesive;
const removeFirstOrderPrefix = Morphological.removeFirstOrderPrefix;
const removeSecondOrderPrefix = Morphological.removeSecondOrderPrefix;
const removeSuffix = Morphological.removeSuffix;
const ShouldNotTransformTheseWords = ['lari', 'nikah', 'pilah', 'pakai', 'iman'];

function stem (word, derivationalStemming = true) {
	var numberSyllables = totalSyllables(word);

	if (numberSyllables > 2) {
			word = removePossesive(word);
			if (derivationalStemming) word = stemDerivational(word);
		}

	if (numberSyllables > 2 && !_.includes(ShouldNotTransformTheseWords, word)) {
		word = removeParticle(word);
		if (numberSyllables > 2) word = removeParticle(word);
		if (derivationalStemming) word = stemDerivational(word);
	}

	return word;
}

function stemDerivational (word) {
	var numberSyllables = totalSyllables(word);
	var previousLength = word.length;
	if (numberSyllables > 2) word = removeFirstOrderPrefix(word);

	if (previousLength === word.length) {
	  if (numberSyllables > 2) word = removeSecondOrderPrefix(word);
		if (_.includes(ShouldNotTransformTheseWords, word)) numberSyllables -= 1;
		if (numberSyllables > 2) word = removeSuffix(word);
		}

	return word;
}

String.prototype.stem = function () {
	return stem(this);
}

module.exports = {
	stem
}