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

	describe("Remove particle", () => {
		describe("should remove these particles at the end of the word", () => {
			it("'kah'", () => {
				ShouldTransform(Stemmer.removeParticle, 'manakah', 'mana');
			});

			it("'lah'", () => {
				ShouldTransform(Stemmer.removeParticle, 'itulah', 'itu');
			});

			it("'pun'", () => {
				ShouldTransform(Stemmer.removeParticle, 'bagaimanapun', 'bagaimana');
			});
		});
	});

	describe("should not remove these particles at the rest part of the word", () => {
		it("'kah'", () => {
			ShouldNotTransform(Stemmer.removeParticle, 'kahak');
			ShouldNotTransform(Stemmer.removeParticle, 'pernikahan');
		});

		it("'lah'", () => {
			ShouldNotTransform(Stemmer.removeParticle, 'lahiriah');
			ShouldNotTransform(Stemmer.removeParticle, 'kelahiran');
		});

		it("'pun'", () => {
			ShouldNotTransform(Stemmer.removeParticle, 'punya');
			ShouldNotTransform(Stemmer.removeParticle, 'kepunyaan');
		});
	});

	describe("Remove possesive pronoun", () => {
		describe("should remove these possessive pronouns at the end of the word", () => {
			it("'ku'", () => {
				ShouldTransform(Stemmer.removePossesive, 'mainanku', 'mainan');
			});

			it("'mu'", () => {
				ShouldTransform(Stemmer.removePossesive, 'gelasmu', 'gelas');
			});

			it("'nya'", () => {
				ShouldTransform(Stemmer.removePossesive, 'mobilnya', 'mobil');
			});
		});

		describe("should not remove these possessive pronouns at the rest part of the word", () => {
			it("'ku'", () => {
				ShouldNotTransform(Stemmer.removePossesive, 'kumakan');
				ShouldNotTransform(Stemmer.removePossesive, 'kekurangan');
			});

			it("'mu'", () => {
				ShouldNotTransform(Stemmer.removePossesive, 'murahan');
				ShouldNotTransform(Stemmer.removePossesive, 'kemurkaan');
			});

			it("'nya'", () => {
				ShouldNotTransform(Stemmer.removePossesive, 'nyapu');
				ShouldNotTransform(Stemmer.removePossesive, 'menyambung');
			});
		});
	});
});

function ShouldTransform (methodName, word, transformWord) {
	methodName(word).should.equal(transformWord);
}

function ShouldNotTransform (methodName, word) {
	methodName(word).should.equal(word);
}