import chai from 'chai';
import Helper from './spec_helper.js';
import Stemmer from './../index.js';
const should = chai.should();
const expect = chai.expect;
const ShouldStem = Helper.ShouldTransform;
const ShouldNotTransform = Helper.ShouldNotTransform;

// PENDING

describe("Akarata", () => {
	describe("covering the inflectional particles", () => {
		it("'kah'", () => {
			ShouldStem(Stemmer.stem, 'manakah', 'mana');
			ShouldStem(Stemmer.stem, 'bukukah', 'buku');
		});

		it("'lah'", () => {
			ShouldStem(Stemmer.stem, 'adalah', 'ada');
		});

		it("'pun'", () => {
			ShouldStem(Stemmer.stem, 'bagaimanapun', 'bagaimana');
		});
	});

	describe("covering the inflectional possessive pronouns", () => {
		it("'ku'", () => {
			ShouldStem(Stemmer.stem, 'bukuku', 'buku');
		});

		it("'mu'", () => {
			ShouldStem(Stemmer.stem, 'rumahmu', 'rumah');
		});

		it("'nya'", () => {
			ShouldStem(Stemmer.stem, 'cintanya', 'cinta');
		});
	});

	describe("covering the first order of derivational prefixes", () => {
		it("'meng'", () => {
			ShouldStem(Stemmer.stem, 'mengukur', 'ukur');
		});

		it("'meny'", () => {
			ShouldStem(Stemmer.stem, 'menyapu', 'sapu');
		});

		it("'men'", () => {
			ShouldStem(Stemmer.stem, 'menduga', 'duga');
			ShouldStem(Stemmer.stem, 'menuduh', 'tuduh');
		});

		it("'me'", () => {
			ShouldStem(Stemmer.stem, 'menikah', 'nikah');
		});

		describe("'mem' followed by 'p'", () => {
			it("'mem'", () => {
				ShouldStem(Stemmer.stem, 'memilih', 'pilih');
				ShouldStem(Stemmer.stem, 'memilah', 'pilah');
				ShouldStem(Stemmer.stem, 'memuji', 'puji');
				ShouldStem(Stemmer.stem, 'memakai', 'pakai');
			});
		})

		it("'mem'", () => {
			ShouldStem(Stemmer.stem, 'membaca', 'baca');
			ShouldStem(Stemmer.stem, 'membantu', 'bantu');
		});

		it("'me'", () => {
			ShouldStem(Stemmer.stem, 'melayang', 'layang');
			ShouldStem(Stemmer.stem, 'merusak', 'rusak');
		});

		it("'peng'", () => {
			ShouldStem(Stemmer.stem, 'pengukur', 'ukur');
		});

		it("'peny'", () => {
			ShouldStem(Stemmer.stem, 'penyalin', 'salin');
		});

		it("'pen'", () => {
			ShouldStem(Stemmer.stem, 'penasehat', 'nasehat');
			ShouldStem(Stemmer.stem, 'penarik', 'tarik');
		});

		describe("'pem' followed by p", () => {
			it("'pem'", () => {
				ShouldStem(Stemmer.stem, 'pemilih', 'pilih');
				ShouldStem(Stemmer.stem, 'pemilah', 'pilah');
				ShouldStem(Stemmer.stem, 'pemuji', 'puji');
			});
		});

		it("'pem'", () => {
			ShouldStem(Stemmer.stem, 'pembaca', 'baca');
			ShouldStem(Stemmer.stem, 'pembicara', 'bicara');
		});

		it("'di'", () => {
			ShouldStem(Stemmer.stem, 'diukur', 'ukur');
			ShouldStem(Stemmer.stem, 'dilihat', 'lihat');
		});

		it("'ter'", () => {
			ShouldStem(Stemmer.stem, 'terindah', 'indah');
			ShouldStem(Stemmer.stem, 'terhebat', 'hebat');
			ShouldStem(Stemmer.stem, 'terukur', 'ukur');
			ShouldStem(Stemmer.stem, 'tersapu', 'sapu');
		});

		it("'ter'", () => {
			ShouldStem(Stemmer.stem, 'kekasih', 'kasih');
			ShouldStem(Stemmer.stem, 'kemana', 'mana');
		});
	});

	describe("covering the second order of derivational suffixes", () => {
		it("'ber'", () => {
			ShouldStem(Stemmer.stem, 'berlari', 'lari');
		});

		it("'bel'", () => {
			ShouldStem(Stemmer.stem, 'belajar', 'ajar');
		});

		it("'be'", () => {
			ShouldStem(Stemmer.stem, 'bekerja', 'kerja');
		});

		it("'per'", () => {
			ShouldStem(Stemmer.stem, 'perjelas', 'jelas');
		});

		it("'pel'", () => {
			ShouldStem(Stemmer.stem, 'pelajar', 'ajar');
		});

		it("'pe'", () => {
			ShouldStem(Stemmer.stem, 'pekerja', 'kerja');
			ShouldStem(Stemmer.stem, 'pelari', 'lari');
		});
	});

	describe("covering the derivational suffixes", () => {
		it("'kan'", () => {
			ShouldStem(Stemmer.stem, 'tarikkan', 'tarik');
			ShouldStem(Stemmer.stem, 'ambilkan', 'ambil');
		});

		it("'an'", () => {
			ShouldStem(Stemmer.stem, 'makanan', 'makan');
			ShouldStem(Stemmer.stem, 'sarapan', 'sarap');
		});

		it("'i'", () => {
			ShouldStem(Stemmer.stem, 'ajari', 'ajar');
			ShouldStem(Stemmer.stem, 'cermati', 'cermat');
		});
	});
});