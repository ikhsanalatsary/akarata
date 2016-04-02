'use strict';

function isStartsWith (text, byTextLength, prefix) {
	var prefixLength = prefix.length;
	if (prefixLength > byTextLength) return false;
	for (var i = 0; i < prefixLength; i++) {
		if (text[i] !== prefix[i]) return false;
	}
	return true;
}

function isEndsWith (text, byTextLength, suffix) {
	var suffixLength = suffix.length;
	if (suffixLength > byTextLength) return false;
	for (var i = 0; i < suffixLength; i++) {
		if (text.substring(text.length - suffixLength)[i] !== suffix[i]) return false;
	}
	return true;
}

module.exports = {
	isStartsWith,
	isEndsWith
}