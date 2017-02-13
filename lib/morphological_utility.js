'use strict'

import includes from 'array-includes';
import camelCase from 'camelcase';
import StemmerUtility from './stemmer_utility.js';

const VOWEL = ['a', 'e', 'i', 'o', 'u'];
const PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
const POSSESIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];
const FIRST_ORDER_PREFIX_CHARACTERS = ['meng', 'meny', 'men', 'mem', 'me', 'peng', 'peny', 'pen', 'pem', 'di', 'ter', 'ke'];
const SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS = ['meny', 'peny', 'pen', 'men', 'mem', 'pem'];
const SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'be', 'per', 'pe'];
const SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['be'];
const NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'per', 'pe'];
const SPECIAL_SECOND_ORDER_PREFIX_WORDS = ['belajar', 'pelajar', 'belunjur'];
const SUFFIX_CHARACTERS = ['kan', 'an', 'i'];
const AMBIGUOUS_WORDS = ['nyanyi', 'nyala', 'nyata', 'nasehat', 'makan', 'minum', 'nikah'];

function totalSyllables (word) {
  let result = 0;

  for (let i = 0; i < word.length; i++) {
 		if (isVowel(word[i])) result++;
	}

 	return result;
}

function removeFirstOrderPrefix (word) {
	let numberOfSyllables = totalSyllables(word);
	const wordLength = word.length;

	SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS.forEach((char) => {
		const charLength = char.length;
		if (StemmerUtility.isStartsWith(word, wordLength, char) && wordLength > charLength && isVowel(word[charLength])) {
			numberOfSyllables -= 1;
			word = substituteChar(AMBIGUOUS_WORDS, char, word);
		}
	});

	if (word === 'memakan' || word === 'meminum') {
		word = sliceWordWithPosition(word, 2, 'start');
	}

	word = removeMatchingCollection(word, FIRST_ORDER_PREFIX_CHARACTERS, 'start');

	return word;
}

function removeSecondOrderPrefix (word) {
	let numberOfSyllables = totalSyllables(word);
	const wordLength = word.length;

	if (includes(SPECIAL_SECOND_ORDER_PREFIX_WORDS, word)) {
		numberOfSyllables -= 1;
		return sliceWordWithPosition(word, 3, 'start');
	} else if (StemmerUtility.isStartsWith(word, wordLength, 'be') && wordLength > 4 && !isVowel(word[2]) && word.substring(3, 5) === 'er') {
		numberOfSyllables -= 1;
		return sliceWordWithPosition(word, 2, 'start');
	} else {
		return removeMatchingCollection(word, NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS, 'start');
	}
}

function removeSuffix (word) {
	return removeMatchingCollection(word, SUFFIX_CHARACTERS, 'end');
}

function removeParticle (word) {
	return removeMatchingCollection(word, PARTICLE_CHARACTERS, 'end');
}

function removePossesive (word) {
	return removeMatchingCollection(word, POSSESIVE_PRONOUN_CHARACTERS, 'end');
}

function removeMatchingCollection (word, type, position) {
	let numberOfSyllables = totalSyllables(word);
	const Position = camelCase(`is ${position}s with`);

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
	return includes(VOWEL, character);
}

function sliceWordWithPosition(word, charLength, position) {
	if (position === 'end') {
		word = word.slice(0, charLength * -1);
	} else {
		word = word.slice(charLength);
	}

	return word;
}

function substituteChar(AMBIGUOUS_WORD, char, word) {
	const charLength = char.length;
	let substituteChar;

	switch (typeof word !== 'undefined') {
		case (includes(['meny', 'peny'], char) && !includes(AMBIGUOUS_WORDS, word.substring(2))):
			substituteChar = 's';
		break;
		case includes(['men', 'pen'], char):
			substituteChar = 't';
			if (includes(AMBIGUOUS_WORDS, word.substring(2))
					|| includes(['kah', 'lah', 'ku', 'mu', 'nya', 'kan', 'an', 'i'], word.substring(word.length -1))) {
				substituteChar = 'n';
			}
		break;
		case char === 'mem' && !includes(AMBIGUOUS_WORDS, word.substring(2)):
			substituteChar = 'p';
		break;
		case char === 'pem':
			substituteChar = 'p';
		break;
		case (word.substring(2) === 'nyanyi' || word.substring(2) === 'nyala' || word.substring(2) === 'nyata'):
			substituteChar = 'ny';
		break;
	}
	if (substituteChar) word = substituteChar + word.slice(charLength);

	return word;
}

module.exports = {
	totalSyllables,
	removeParticle,
	removePossesive,
	removeFirstOrderPrefix,
	removeSecondOrderPrefix,
	removeSuffix,
};
