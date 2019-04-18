import MorphologicalUtility from '../lib/morphological-utility';
describe('Stemmer', function () {
    var morphological = new MorphologicalUtility();
    var removeFirstOrderPrefix = morphological.removeFirstOrderPrefix, removeParticle = morphological.removeParticle, removePossessivePronoun = morphological.removePossessivePronoun, removeSecondOrderPrefix = morphological.removeSecondOrderPrefix, removeSuffix = morphological.removeSuffix, totalSyllables = morphological.totalSyllables;
    it('should available', function () {
        expect(removeFirstOrderPrefix).toBeDefined();
        expect(removeParticle).toBeDefined();
        expect(removePossessivePronoun).toBeDefined();
        expect(removeSecondOrderPrefix).toBeDefined();
        expect(removeSuffix).toBeDefined();
        expect(totalSyllables).toBeDefined();
    });
    describe('Total Syllables', function () {
        it("'memasak' should return 3", function () {
            var actual = totalSyllables('memasak');
            // totalSyllables('memasak').should.equal(3);
            expect(actual).toEqual(3);
        });
        it("'mewarnai' should return 4", function () {
            // totalSyllables('mewarnai').should.equal(4);
            var actual = totalSyllables('mewarnai');
            expect(actual).toEqual(4);
        });
        it("'permainan' should return 4", function () {
            // totalSyllables('permainan').should.equal(4);
            var actual = totalSyllables('permainan');
            expect(actual).toEqual(4);
        });
    });
    describe('Remove particle', function () {
        describe('should remove these particles at the end of the word', function () {
            it("'kah'", function () {
                ShouldTransform(removeParticle, 'manakah', 'mana');
                ShouldTransform(removeParticle, 'bukukah', 'buku');
            });
            it("'lah'", function () {
                ShouldTransform(removeParticle, 'itulah', 'itu');
            });
            it("'pun'", function () {
                ShouldTransform(removeParticle, 'bagaimanapun', 'bagaimana');
            });
        });
    });
    describe('should not remove these particles at the rest part of the word', function () {
        it("'kah'", function () {
            ShouldNotTransform(removeParticle, 'kahak');
            ShouldNotTransform(removeParticle, 'pernikahan');
        });
        it("'lah'", function () {
            ShouldNotTransform(removeParticle, 'lahiriah');
            ShouldNotTransform(removeParticle, 'kelahiran');
        });
        it("'pun'", function () {
            ShouldNotTransform(removeParticle, 'punya');
            ShouldNotTransform(removeParticle, 'kepunyaan');
        });
    });
    describe('Remove possesive pronoun', function () {
        describe('should remove these possessive pronouns at the end of the word', function () {
            it("'ku'", function () {
                ShouldTransform(removePossessivePronoun, 'mainanku', 'mainan');
                ShouldTransform(removePossessivePronoun, 'bukuku', 'buku');
            });
            it("'mu'", function () {
                ShouldTransform(removePossessivePronoun, 'gelasmu', 'gelas');
            });
            it("'nya'", function () {
                ShouldTransform(removePossessivePronoun, 'mobilnya', 'mobil');
            });
        });
        describe('should not remove these possessive pronouns at the rest part of the word', function () {
            it("'ku'", function () {
                ShouldNotTransform(removePossessivePronoun, 'kumakan');
                ShouldNotTransform(removePossessivePronoun, 'kekurangan');
            });
            it("'mu'", function () {
                ShouldNotTransform(removePossessivePronoun, 'murahan');
                ShouldNotTransform(removePossessivePronoun, 'kemurkaan');
            });
            it("'nya'", function () {
                ShouldNotTransform(removePossessivePronoun, 'nyapu');
                ShouldNotTransform(removePossessivePronoun, 'menyambung');
            });
        });
        describe('should not set any flags regardless the characters position', function () {
            // tslint:disable-next-line:no-any
            var prevFlags;
            beforeAll(function () {
                prevFlags = morphological.flags;
            });
            it("'ku'", function () {
                removePossessivePronoun('mainanku');
                removePossessivePronoun('kumakan');
                removePossessivePronoun('kekurangan');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
            it("'mu'", function () {
                removePossessivePronoun('mobilmu');
                removePossessivePronoun('murahan');
                removePossessivePronoun('kemurkaan');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
            it("'nya'", function () {
                removePossessivePronoun('gelasnya');
                removePossessivePronoun('nyapu');
                removePossessivePronoun('menyambung');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
        });
    });
    describe('Remove first order prefix', function () {
        describe('words with these special characters', function () {
            describe('at the begining', function () {
                describe('followed by a vowel, should remove and substitute the last character', function () {
                    it("'meny'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'menyapu', 'sapu');
                        ShouldTransform(removeFirstOrderPrefix, 'menyambung', 'sambung');
                    });
                    it("'pen'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'penulis', 'tulis');
                        ShouldTransform(removeFirstOrderPrefix, 'penata', 'tata');
                    });
                    it("'peny'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'penyantap', 'santap');
                        ShouldTransform(removeFirstOrderPrefix, 'penyongsong', 'songsong');
                        ShouldTransform(removeFirstOrderPrefix, 'penyakit', 'sakit');
                    });
                });
                describe('followed by consonant, should only remove the special characters', function () {
                    it("'meny'", function () {
                        // Find a real indonesian word for this case
                        ShouldTransform(removeFirstOrderPrefix, 'menyxxx', 'xxx');
                    });
                    it("'peny'", function () {
                        // Find a real indonesian word for this case
                        ShouldTransform(removeFirstOrderPrefix, 'penyxxx', 'xxx');
                    });
                    it("'pen'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'penjahat', 'jahat');
                    });
                });
            });
            describe('should set the flags correctly regardless vowel or consonant', function () {
                it("'meny' should set the flags to REMOVED_MENG", function () {
                    var constant = MorphologicalUtility.REMOVED_MENG;
                    removeFirstOrderPrefix('menyambung');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('menyxxx');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                });
                it("'peny' should set the flags to REMOVED_PENG", function () {
                    var constant = MorphologicalUtility.REMOVED_PENG;
                    removeFirstOrderPrefix('penyantap');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('penyxxx');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                });
                it("'pen' should set the flags to REMOVED_PENG", function () {
                    var constant = MorphologicalUtility.REMOVED_PENG;
                    removeFirstOrderPrefix('penata');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('penjahat');
                    expect(morphological.flags).toBe(constant);
                });
            });
            describe('at the rest part of the word', function () {
                describe('followed by a vowel, should not do anything', function () {
                    it("'meny'", function () {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyaxx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenya');
                    });
                    it("'peny'", function () {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyaxx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenya');
                    });
                    it("'pen'", function () {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenexx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeno');
                    });
                });
            });
            describe('followed by consonant, should not do anything', function () {
                it("'meny'", function () {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenykxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyk');
                });
                it("'peny'", function () {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenykxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyk');
                });
                it("'pen'", function () {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenrxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenr');
                });
            });
        });
        describe('words with first order prefix characters', function () {
            describe('at the begining', function () {
                describe('should remove these characters', function () {
                    it("'meng'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'menggambar', 'gambar');
                    });
                    it("'men'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'mendaftar', 'daftar');
                    });
                    it("'mem'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'membangun', 'bangun');
                        ShouldTransform(removeFirstOrderPrefix, 'membeli', 'beli');
                        ShouldTransform(removeFirstOrderPrefix, 'memberi', 'beri');
                        ShouldTransform(removeFirstOrderPrefix, 'memilah', 'pilah');
                    });
                    it("'me'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'melukis', 'lukis');
                        // ShouldTransform(removeFirstOrderPrefix, 'memakan', 'makan');
                        // ShouldTransform(removeFirstOrderPrefix, 'meminum', 'minum');
                        ShouldTransform(removeFirstOrderPrefix, 'menikah', 'nikah');
                    });
                    it("'peng'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'penggaris', 'garis');
                    });
                    it("'pem'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'pembajak', 'bajak');
                    });
                    it("'di'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'disayang', 'sayang');
                    });
                    it("'ter'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'terakhir', 'akhir');
                        ShouldTransform(removeFirstOrderPrefix, 'terucap', 'ucap');
                    });
                    it("'ke'", function () {
                        ShouldTransform(removeFirstOrderPrefix, 'kemana', 'mana');
                        ShouldTransform(removeFirstOrderPrefix, 'kemakan', 'makan');
                    });
                });
            });
            describe('should set the flags correctly', function () {
                beforeEach(function () {
                    morphological.flags = undefined;
                });
                describe('to REMOVED_MENG on these characters', function () {
                    var REMOVED_MENG = MorphologicalUtility.REMOVED_MENG;
                    it("meng'", function () {
                        removeFirstOrderPrefix('menggambar');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("men'", function () {
                        removeFirstOrderPrefix('mendaftar');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("mem'", function () {
                        removeFirstOrderPrefix('membangun');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("me'", function () {
                        removeFirstOrderPrefix('melukis');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                });
                describe('to REMOVED_PENG on these characters', function () {
                    var REMOVED_PENG = MorphologicalUtility.REMOVED_PENG;
                    it("peng'", function () {
                        removeFirstOrderPrefix('penggaris');
                        expect(morphological.flags).toBe(REMOVED_PENG);
                    });
                    it("pem'", function () {
                        removeFirstOrderPrefix('pembajak');
                        expect(morphological.flags).toBe(REMOVED_PENG);
                    });
                });
                describe('to their respective constants on these characters', function () {
                    it("di'", function () {
                        removeFirstOrderPrefix('disayang');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_DI);
                    });
                    it("ter'", function () {
                        removeFirstOrderPrefix('terucap');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_TER);
                    });
                    it("ke'", function () {
                        removeFirstOrderPrefix('kemakan');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_KE);
                    });
                });
            });
            describe('at the rest part of the word', function () {
                beforeAll(function () {
                    morphological.flags = undefined;
                });
                describe('should not remove these characters', function () {
                    describe('and should not set any flags', function () {
                        it("'meng'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmengxex');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xexmeng');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'men'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmen');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'mem'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmemxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmem');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'me'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmexxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxme');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'peng'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpengxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeng');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'pem'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpemxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpem');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'di'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxdixxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxdi');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'ter'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxterxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxter');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'ke'", function () {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxkexxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxke');
                            expect(morphological.flags).not.toBeDefined();
                        });
                    });
                });
            });
        });
    });
    describe('Remove Second Order Prefix', function () {
        var REMOVED_BER = MorphologicalUtility.REMOVED_BER;
        describe('should handle these irregular words', function () {
            describe("'belajar'", function () {
                beforeAll(function () {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', function () {
                    ShouldTransform(removeSecondOrderPrefix, 'belajar', 'ajar');
                });
                it('should set the flags to REMOVED_BER', function () {
                    expect(morphological.flags).toBe(REMOVED_BER);
                });
            });
            describe("'belunjur'", function () {
                beforeAll(function () {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', function () {
                    ShouldTransform(removeSecondOrderPrefix, 'belunjur', 'unjur');
                });
                it('should set the flags to REMOVED_BER', function () {
                    expect(morphological.flags).toBe(REMOVED_BER);
                });
            });
            describe("'pelajar'", function () {
                beforeAll(function () {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', function () {
                    ShouldTransform(removeSecondOrderPrefix, 'pelajar', 'ajar');
                });
                it('should not set any flags', function () {
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
        describe("should handle words starting with 'be*er' where * isn't a vowel & the length > 4", function () {
            describe("'beserta'", function () {
                beforeAll(function () {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', function () {
                    ShouldTransform(removeSecondOrderPrefix, 'beserta', 'serta');
                });
                it('should set the flags to REMOVED_BER', function () {
                    expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_BER);
                });
            });
        });
        describe('words with second order prefix characters', function () {
            beforeEach(function () {
                morphological.flags = undefined;
            });
            describe('at the beginning', function () {
                describe('should remove these characters', function () {
                    describe('should set the flags correctly', function () {
                        beforeEach(function () {
                            morphological.flags = undefined;
                        });
                        it("'ber'", function () {
                            ShouldTransform(removeSecondOrderPrefix, 'bercerita', 'cerita');
                            expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_BER);
                        });
                        it("'per'", function () {
                            ShouldTransform(removeSecondOrderPrefix, 'perjelas', 'jelas');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'pe'", function () {
                            ShouldTransform(removeSecondOrderPrefix, 'pesuruh', 'suruh');
                            expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_PE);
                        });
                    });
                });
            });
        });
        describe('at the rest part of the word, should not remove these characters', function () {
            describe('should not set any flags', function () {
                beforeEach(function () {
                    morphological.flags = undefined;
                });
                it("'ber'", function () {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxberxxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxber');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'per'", function () {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxperxxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxper');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'pe'", function () {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxpexxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxpe');
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
    });
    describe('Remove Suffix', function () {
        describe('word with these suffix characters', function () {
            beforeEach(function () {
                morphological.flags = undefined;
            });
            describe('at the end of the word, should remove the suffix characters', function () {
                it("'kan'", function () {
                    ShouldTransform(removeSuffix, 'katakan', 'kata');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'an'", function () {
                    ShouldTransform(removeSuffix, 'sandaran', 'sandar');
                    ShouldTransform(removeSuffix, 'makanan', 'makan');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'i'", function () {
                    ShouldTransform(removeSuffix, 'tiduri', 'tidur');
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
        describe('at the rest part of the word, should not remove the characters', function () {
            it("'kan'", function () {
                ShouldNotTransform(removeSuffix, 'kanxxx');
                ShouldNotTransform(removeSuffix, 'xxxkanxxx');
            });
            it("'an'", function () {
                ShouldNotTransform(removeSuffix, 'anxxx');
                ShouldNotTransform(removeSuffix, 'xxxanxxx');
            });
            it("'an'", function () {
                ShouldNotTransform(removeSuffix, 'ixxx');
                ShouldNotTransform(removeSuffix, 'xxxixxx');
            });
        });
    });
});
function ShouldTransform(methodName, word, transformWord) {
    var actual = methodName(word);
    // methodName(word).should.equal(transformWord);
    expect(actual).toEqual(transformWord);
}
function ShouldNotTransform(methodName, word) {
    var actual = methodName(word);
    // methodName(word).should.equal(word);
    expect(actual).toEqual(word);
}
//# sourceMappingURL=morphological-utility.spec.js.map