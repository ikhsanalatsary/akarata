'use strict';

import _ from 'lodash';
import StemmerUtility from './lib/stemmer_utility.js';

const VOWEL = ['a', 'e', 'i', 'o', 'u'];
const PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
const POSSESIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];
const FIRST_ORDER_PREFIX_CHARACTERS = ['meng', 'meny', 'men', 'mem', 'me', 'peng', 'peny', 'pen', 'pem', 'di', 'ter', 'ke'];
const SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS = ['meny', 'peny', 'pen'];

function totalSyllables (word) {
 	var result = 0;

 	for (var i = 0; i < word.length; i++) {
 		if (isVowel(word[i])) result++;
 	};

 	return result;
}

function removeFirstOrderPrefix (word) {
	var numberOfSyllables = totalSyllables(word);
	var wordLength = word.length;

	SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS.forEach((char) => {
		var charLength = char.length;
		if (StemmerUtility.isStartsWith(word, wordLength, char) && wordLength > charLength && isVowel(word[charLength])) {
			numberOfSyllables -= 1;
			var substituteChar;

			switch (typeof word != 'undefined') {
				case _.includes(['meny', 'peny'], char):
					substituteChar = 's';
				break;
				case char === 'pen':
					substituteChar = 't';
				break;
			}
			if (substituteChar) word = substituteChar + word.slice(charLength);
		}
	});
	word = removeMatchingCollection(word, FIRST_ORDER_PREFIX_CHARACTERS, 'start');

	return word;
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
			} else {
				word = word.slice(char.length);
			};

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
	removePossesive,
	removeFirstOrderPrefix
}