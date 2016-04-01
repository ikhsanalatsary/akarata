/**
	* PENDING
	*
**/

'use strict';

import Morphological from './lib/morphological_utility.js';
const totalSyllables = Morphological.totalSyllables;
const removeParticle = Morphological.removeParticle;

function stem (word, stemmingMethod = 'full') {
	var numberSyllables = totalSyllables(word);

	if (numberSyllables > 2) word = removeParticle(word);

	return word;
}

module.exports = {
	stem
}