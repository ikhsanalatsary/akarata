'use strict';

import _ from 'lodash';

const VOWEL = ['a', 'e', 'i', 'o', 'u'];

function totalSyllables (word) {
 	var result = 0;

 	for (var i = 0; i < word.length; i++) {
 		if (isVowel(word[i])) result++;
 	};

 	return result;
}

function isVowel (character) {
	return _.includes(VOWEL, character);
}

module.exports = {
	totalSyllables
}