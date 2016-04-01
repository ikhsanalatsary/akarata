'use strict';

function ShouldTransform (methodName, word, transformWord) {
	methodName(word).should.equal(transformWord);
}

function ShouldNotTransform (methodName, word) {
	methodName(word).should.equal(word);
}

module.exports = {
	ShouldTransform,
	ShouldNotTransform
}