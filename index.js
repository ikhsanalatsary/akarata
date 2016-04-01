'use strict';

import _ from 'lodash';
import StemmerUtility from './lib/stemmer_utility.js';

const VOWEL = ['a', 'e', 'i', 'o', 'u'];
const PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
const POSSESIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];
const FIRST_ORDER_PREFIX_CHARACTERS = ['meng', 'meny', 'men', 'mem', 'me', 'peng', 'peny', 'pen', 'pem', 'di', 'ter', 'ke'];
const SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS = ['meny', 'peny', 'pen'];
const SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'be', 'per', 'pe'];
const SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['be'];
const NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'per', 'pe'];
const SPECIAL_SECOND_ORDER_PREFIX_WORDS = ['belajar', 'pelajar', 'belunjur'];

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
				case (_.includes(['meny', 'peny'], char) && word.substring(2) !== 'nyanyi' && word.substring(2) !== 'nyala' && word.substring(2) !== 'nyata'):
					substituteChar = 's';
				break;
				case char === 'pen':
					substituteChar = 't';
				break;
				case (word.substring(2) === 'nyanyi' || word.substring(2) === 'nyala' || word.substring(2) === 'nyata'):
					substituteChar = 'ny';
				break;
			}
			if (substituteChar) word = substituteChar + word.slice(charLength);
		}
	});
	if (word === 'memakan' || word === 'meminum') {
		word = sliceWordWithPosition(word, 2, 'start');
	}

	word = removeMatchingCollection(word, FIRST_ORDER_PREFIX_CHARACTERS, 'start');

	return word;
}

function removeSecondOrderPrefix (word) {
	var numberOfSyllables = totalSyllables(word);
	var wordLength = word.length;

	if (_.includes(SPECIAL_SECOND_ORDER_PREFIX_WORDS, word)) {
		numberOfSyllables -= 1;
		return sliceWordWithPosition(word, 3, 'start');
	} else if (StemmerUtility.isStartsWith(word, wordLength, 'be') && wordLength > 4 && !isVowel(word[2]) && word.substring(3, 5) === 'er') {
		numberOfSyllables -= 1;
		return sliceWordWithPosition(word, 2, 'start');
	} else {
		return removeMatchingCollection(word, NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS, 'start');
	}
}

function removeParticle (word) {
	return removeMatchingCollection(word, PARTICLE_CHARACTERS, 'end');
}

function removePossesive (word) {
	return removeMatchingCollection(word, POSSESIVE_PRONOUN_CHARACTERS, 'end');
}

function removeMatchingCollection (word, type, position) {
	var numberOfSyllables = totalSyllables(word);
	var Position = _.camelCase(`is ${position}s with`);


	type.forEach((char) => {
		if (StemmerUtility[Position](word, word.length, char)) {
			numberOfSyllables -= 1;

			if (position === 'end') {
				word = word.slice(0, char.length * -1);
			} else {
				word = word.slice(char.length);
			}
		}
	});

	return word;
}

function isVowel (character) {
	return _.includes(VOWEL, character);
}

function sliceWordWithPosition(word, charLength, position) {
	if (position === 'end') {
		word = word.slice(0, charLength * -1);
	} else {
		word = word.slice(charLength);
	}

	return word;
}

module.exports = {
	totalSyllables,
	removeParticle,
	removePossesive,
	removeFirstOrderPrefix,
	removeSecondOrderPrefix
}