import chai from 'chai';
import stemmerUtility from './../lib/stemmer_utility.js';
const should = chai.should();
const expect = chai.expect;

describe("stemmerUtility", () => {
	it("should available", () => {
		expect(stemmerUtility).not.to.be.null;
	});

	var word = 'asldkamsdo';
	var prefix = 'asld';
	var suffix = 'amsdo';

	describe("the word starts with prefix", () => {
		it("that have different letters from the prefix should return false", () => {
			stemmerUtility.isStartsWith(word, 3, 'ber').should.be.false;
		});
	});

	describe("that have the same letters with the word's first letters", () => {
		it("by exactly prefix length should be true", () => {
			stemmerUtility.isStartsWith(word, prefix.length, prefix).should.be.true;
		});

		it("by more than prefix length should still be true", () => {
			stemmerUtility.isStartsWith(word, prefix.length + 1, prefix).should.be.true;
		});

		it("by less than prefix length should still be false", () => {
			stemmerUtility.isStartsWith(word, prefix.length - 1, prefix).should.be.false;
		});
	});

	describe("the word ends with suffix", () => {
		it("that have different letters from the suffix should return false", () => {
			stemmerUtility.isEndsWith(word, 3, 'abc').should.be.false;
		});

		describe("that have the same letters with the word's last letters", () => {
			it("by exactly suffix length should be true", () => {
				stemmerUtility.isEndsWith(word, suffix.length, suffix).should.be.true;
			});

			it("by more than suffix length should still be true", () => {
				stemmerUtility.isEndsWith(word, suffix.length + 1, suffix).should.be.true;
			});

			it("by less than suffix length should still be false", () => {
				stemmerUtility.isEndsWith(word, suffix.length - 1, suffix).should.be.false;
			});
		});
	});
});