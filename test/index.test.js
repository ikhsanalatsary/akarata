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

	describe("Remove first order prefix", () => {
		describe("words with these special characters", () => {
			describe("at the begining", () => {
				describe("followed by a vowel, should remove and substitute the last character", () => {
					it("'meny'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menyapu', 'sapu');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menyanyi', 'nyanyi');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menyala', 'nyala');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menyata', 'nyata');
					});

					it("'pen'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penulis', 'tulis');
					});

					it("'peny'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penyongsong', 'songsong');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penyakit', 'sakit');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penyanyi', 'nyanyi');
					});
				});

				describe("followed by consonant, should only remove the special characters", () => {
					it("'meny'", () => {
						// TODO: Find a real indonesian word for this case
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menyxxx', 'xxx');
					});

					it("'peny'", () => {
						// TODO: Find a real indonesian word for this case
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penyxxx', 'xxx');
					});

					it("'pen'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penjahat', 'jahat');
					});
				});
			});

			describe("at the rest part of the word", () => {
				describe("followed by a vowel, should not do anything", () => {
					it("'meny'", () => {
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmenyaxx');
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmenya');
					});

					it("'peny'", () => {
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenyaxx');
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenya');
					});

					it("'pen'", () => {
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenexx');
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpeno');
					});
				});
			});

			describe("followed by consonant, should not do anything", () => {
				it("'meny'", () => {
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmenykxx');
						ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmenyk');
					});

				it("'peny'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenykxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenyk');
				});

				it("'pen'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenrxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpenr');
				});
			});
		});

		describe("words with first order prefix characters", () => {
			describe("at the begining", () => {
				describe("should remove these characters", () => {
					it("'meng'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'menggambar', 'gambar');
					});

					it("'men'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'mendaftar', 'daftar');
					});

					it("'mem'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'membangun', 'bangun');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'membeli', 'beli');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'memberi', 'beri');
					});

					it("'me'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'melukis', 'lukis');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'memakan', 'makan');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'meminum', 'minum');
					});

					it("'peng'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'penggaris', 'garis');
					});

					it("'pem'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'pembajak', 'bajak');
					});

					it("'di'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'disayang', 'sayang');
					});

					it("'ter'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'terakhir', 'akhir');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'terucap', 'ucap');
					});

					it("'ke'", () => {
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'kemana', 'mana');
						ShouldTransform(Stemmer.removeFirstOrderPrefix, 'kemakan', 'makan');
					});
				});
			});

			describe("at the rest part of the word, should not remove these characters", () => {
				it("'meng'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmengxex');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xexmeng');
				});

				it("'men'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmenxxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmen');
				});

				it("'mem'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmemxxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmem');
				});

				it("'me'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxmexxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxme');
				});

				it("'peng'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpengxxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpeng');
				});

				it("'pem'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpemxxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxpem');
				});

				it("'di'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxdixxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxdi');
				});

				it("'ter'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxterxxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxter');
				});

				it("'ke'", () => {
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxkexxx');
					ShouldNotTransform(Stemmer.removeFirstOrderPrefix, 'xxxke');
				});
			});
		});
	});

	describe("Remove Second Order Prefix", () => {
		describe("should handle these irregular words", () => {
			it("'belajar'", () => {
				ShouldTransform(Stemmer.removeSecondOrderPrefix, 'belajar', 'ajar');
			});

			it("'belunjur'", () => {
				ShouldTransform(Stemmer.removeSecondOrderPrefix, 'belunjur', 'unjur');
			});

			it("'pelajar'", () => {
				ShouldTransform(Stemmer.removeSecondOrderPrefix, 'pelajar', 'ajar');
			});
		});

		describe("should handle words starting with 'be*er' where * isn't a vowel & the length > 4", () => {
			it("'beserta'", () => {
				ShouldTransform(Stemmer.removeSecondOrderPrefix, 'beserta', 'serta');
			});
		});

		describe("words with second order prefix characters", () => {
			describe("at the beginning", () => {
				describe("should remove these characters", () => {
					it("'ber'", () => {
						ShouldTransform(Stemmer.removeSecondOrderPrefix, 'bercerita', 'cerita');
					});

					it("'per'", () => {
						ShouldTransform(Stemmer.removeSecondOrderPrefix, 'perjelas', 'jelas');
					});

					it("'pe'", () => {
						ShouldTransform(Stemmer.removeSecondOrderPrefix, 'pesuruh', 'suruh');
					});
				});
			});
		});

		describe("at the rest part of the word, should not remove these characters", () => {
			it("'ber'", () => {
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxberxxx');
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxber');
			});

			it("'per'", () => {
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxperxxx');
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxper');
			});

			it("'pe'", () => {
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxpexxx');
				ShouldNotTransform(Stemmer.removeSecondOrderPrefix, 'xxxpe');
			});
		});
	});

	describe("Remove Suffix", () => {
		describe("word with these suffix characters", () => {
			describe("at the end of the word, should remove the suffix characters", () => {
				it("'kan'", () => {
					ShouldTransform(Stemmer.removeSuffix, 'katakan', 'kata');
				});

				it("'an'", () => {
					ShouldTransform(Stemmer.removeSuffix, 'sandaran', 'sandar');
					ShouldTransform(Stemmer.removeSuffix, 'makanan', 'makan');
				});

				it("'i'", () => {
					ShouldTransform(Stemmer.removeSuffix, 'tiduri', 'tidur');
				});
			});
		});

		describe("at the rest part of the word, should not remove the characters", () =>{
			it("'kan'", () => {
				ShouldNotTransform(Stemmer.removeSuffix, 'kanxxx');
				ShouldNotTransform(Stemmer.removeSuffix, 'xxxkanxxx');
			});

			it("'an'", () => {
				ShouldNotTransform(Stemmer.removeSuffix, 'anxxx');
				ShouldNotTransform(Stemmer.removeSuffix, 'xxxanxxx');
			});

			it("'an'", () => {
				ShouldNotTransform(Stemmer.removeSuffix, 'ixxx');
				ShouldNotTransform(Stemmer.removeSuffix, 'xxxixxx');
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