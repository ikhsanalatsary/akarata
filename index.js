'use strict';

import _ from 'lodash';
import StemmerUtility from './lib/stemmer_utility.js';

const isEndsWith = StemmerUtility.isEndsWith;
const VOWEL = ['a', 'e', 'i', 'o', 'u'];
const PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];

function totalSyllables (word) {
 	var result = 0;

 	for (var i = 0; i < word.length; i++) {
 		if (isVowel(word[i])) result++;
 	};

 	return result;
}

function removeParticle (word) {
	var numberOfSyllables = totalSyllables(word);

	PARTICLE_CHARACTERS.forEach((char) => {
		if (isEndsWith(word, word.length, char)) {
			numberOfSyllables -= 1;
			word = word.slice(0, char.length * -1);
		}
	});
	return word
}

function isVowel (character) {
	return _.includes(VOWEL, character);
}

module.exports = {
	totalSyllables,
	removeParticle
}