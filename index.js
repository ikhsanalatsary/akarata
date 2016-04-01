'use strict';

import Morphological from './lib/morphological_utility.js';
const totalSyllables = Morphological.totalSyllables;
const removeParticle = Morphological.removeParticle;
const removePossesive = Morphological.removePossesive;
const removeFirstOrderPrefix = Morphological.removeFirstOrderPrefix;
const removeSecondOrderPrefix = Morphological.removeSecondOrderPrefix;
const removeSuffix = Morphological.removeSuffix;

function stem (word, derivationalStemming = true) {
	var numberSyllables = totalSyllables(word);

	if (numberSyllables > 2) {
			word = removePossesive(word);
			if (derivationalStemming) word = stemDerivational(word);
		}

	if (numberSyllables > 2 && word !== 'pilah') {
		word = removeParticle(word);
		if (word === 'buku') numberSyllables -= 1;
	}

	return word;
}

function stemDerivational (word) {
	var numberSyllables = totalSyllables(word);
	var previousLength = word.length;
	if (numberSyllables > 2) word = removeFirstOrderPrefix(word);
	if (word === 'puji') numberSyllables -= 1;
	if (word === 'pakai') numberSyllables -= 2;

	if (previousLength === word.length) {
	  if (numberSyllables > 2) word = removeSecondOrderPrefix(word);
		if (word === 'lari') numberSyllables -= 1;
		if (numberSyllables > 2) word = removeSuffix(word);
		}

	return word;
}

module.exports = {
	stem
}