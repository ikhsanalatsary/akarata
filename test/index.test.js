import chai from 'chai';
import Stemmer from './../index.js';
const should = chai.should();
const expect = chai.expect;

describe("Stemmer", () => {
	it("should available", () => {
		expect(Stemmer).to.be.not.null;
	});

	describe("Total Syllables", () => {
		it("'memasak' should return 3", () => {
			Stemmer.totalSyllables('memasak').should.equal(3);
		});

		it("'mewarnai' should return 4", () => {
			Stemmer.totalSyllables('mewarnai').should.equal(4);
		});

		it("'permainan' should return 4", () => {
			Stemmer.totalSyllables('permainan').should.equal(4);
		});
	});
});