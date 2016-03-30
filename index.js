'use strict';

import _ from 'lodash';
import StemmerUtility from './lib/stemmer_utility.js';

const VOWEL = ['a', 'e', 'i', 'o', 'u'];
const PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
const POSSESIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];

function totalSyllables (word) {
 	var result = 0;

 	for (var i = 0; i < word.length; i++) {
 		if (isVowel(word[i])) result++;
 	};

 	return result;
}

function removeParticle (word) {
	return removeMatchingCollection(word, PARTICLE_CHARACTERS, 'end');
}

function removePossesive (word) {
	return removeMatchingCollection(word, POSSESIVE_PRONOUN_CHARACTERS, 'end');
}

function removeMatchingCollection (word, type, position) {
	var numberOfSyllables = totalSyllables(word);
	var selectedPosition = _.camelCase(`is ${position}s with`);

	type.forEach((char) => {
		if (StemmerUtility[selectedPosition](word, word.length, char)) {
			numberOfSyllables -= 1;
			if (position === 'end') {
				word = word.slice(0, char.length * -1);
			}
		}
	});

	return word;
}

function isVowel (character) {
	return _.includes(VOWEL, character);
}

module.exports = {
	totalSyllables,
	removeParticle,
	removePossesive
}