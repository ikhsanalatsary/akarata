'use strict';

import includes from 'array-includes';
import {
	totalSyllables,
	removeParticle,
	removePossesive,
	removeFirstOrderPrefix,
	removeSecondOrderPrefix,
	removeSuffix,
} from './lib/morphological_utility';

const ShouldNotTransformTheseWords = ['lari', 'nikah', 'pilah', 'pakai', 'iman'];

function stem(word, derivationalStemming = true) {
	let numberSyllables = totalSyllables(word);

	if (numberSyllables > 2) {
		word = removePossesive(word);
		if (derivationalStemming) word = stemDerivational(word);
	}

	if (numberSyllables > 2 && !includes(ShouldNotTransformTheseWords, word)) {
		word = removeParticle(word);
		if (numberSyllables > 2) word = removeParticle(word);
		if (derivationalStemming) word = stemDerivational(word);
	}

	return word;
}

function stemDerivational(word) {
	let numberSyllables = totalSyllables(word);
	const previousLength = word.length;
	if (numberSyllables > 2) word = removeFirstOrderPrefix(word);

	if (previousLength === word.length) {
	  if (numberSyllables > 2) word = removeSecondOrderPrefix(word);
		if (includes(ShouldNotTransformTheseWords, word)) numberSyllables -= 1;
		if (numberSyllables > 2) word = removeSuffix(word);
	}

	return word;
}

module.exports = {
	stem,
};
