'use strict';

import _ from 'lodash';
import StemmerUtility from './lib/stemmer_utility.js';

const isEndsWith = StemmerUtility.isEndsWith;
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
	return removeMatchingCollection(word, 'particle', 'end');
}

function removePossesive (word) {
	return removeMatchingCollection(word, 'possesive', 'end');
}

function removeMatchingCollection (word, type, position) {
	var numberOfSyllables = totalSyllables(word);

	if (type === 'particle' && position === 'end') {
		PARTICLE_CHARACTERS.forEach((char) => {
			if (isEndsWith(word, word.length, char)) {
				numberOfSyllables -= 1;
				word = word.slice(0, char.length * -1);
			}
		});
	} else if (type === 'possesive' && position === 'end') {
		POSSESIVE_PRONOUN_CHARACTERS.forEach((char) => {
			if (isEndsWith(word, word.length, char)) {
				numberOfSyllables -= 1;
				word = word.slice(0, char.length * -1);
			}
		});
	}

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