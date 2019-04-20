import MorphologicalUtility from '../lib/morphological-utility';
describe('Stemmer', () => {
    const morphological = new MorphologicalUtility();
    const { removeFirstOrderPrefix, removeParticle, removePossessivePronoun, removeSecondOrderPrefix, removeSuffix, totalSyllables, } = morphological;
    it('should available', () => {
        expect(removeFirstOrderPrefix).toBeDefined();
        expect(removeParticle).toBeDefined();
        expect(removePossessivePronoun).toBeDefined();
        expect(removeSecondOrderPrefix).toBeDefined();
        expect(removeSuffix).toBeDefined();
        expect(totalSyllables).toBeDefined();
    });
    describe('Total Syllables', () => {
        it("'memasak' should return 3", () => {
            const actual = totalSyllables('memasak');
            // totalSyllables('memasak').should.equal(3);
            expect(actual).toEqual(3);
        });
        it("'mewarnai' should return 4", () => {
            // totalSyllables('mewarnai').should.equal(4);
            const actual = totalSyllables('mewarnai');
            expect(actual).toEqual(4);
        });
        it("'permainan' should return 4", () => {
            // totalSyllables('permainan').should.equal(4);
            const actual = totalSyllables('permainan');
            expect(actual).toEqual(4);
        });
    });
    describe('Remove particle', () => {
        describe('should remove these particles at the end of the word', () => {
            it("'kah'", () => {
                ShouldTransform(removeParticle, 'manakah', 'mana');
                ShouldTransform(removeParticle, 'bukukah', 'buku');
            });
            it("'lah'", () => {
                ShouldTransform(removeParticle, 'itulah', 'itu');
            });
            it("'pun'", () => {
                ShouldTransform(removeParticle, 'bagaimanapun', 'bagaimana');
            });
        });
    });
    describe('should not remove these particles at the rest part of the word', () => {
        it("'kah'", () => {
            ShouldNotTransform(removeParticle, 'kahak');
            ShouldNotTransform(removeParticle, 'pernikahan');
        });
        it("'lah'", () => {
            ShouldNotTransform(removeParticle, 'lahiriah');
            ShouldNotTransform(removeParticle, 'kelahiran');
        });
        it("'pun'", () => {
            ShouldNotTransform(removeParticle, 'punya');
            ShouldNotTransform(removeParticle, 'kepunyaan');
        });
    });
    describe('Remove possesive pronoun', () => {
        describe('should remove these possessive pronouns at the end of the word', () => {
            it("'ku'", () => {
                ShouldTransform(removePossessivePronoun, 'mainanku', 'mainan');
                ShouldTransform(removePossessivePronoun, 'bukuku', 'buku');
            });
            it("'mu'", () => {
                ShouldTransform(removePossessivePronoun, 'gelasmu', 'gelas');
            });
            it("'nya'", () => {
                ShouldTransform(removePossessivePronoun, 'mobilnya', 'mobil');
            });
        });
        describe('should not remove these possessive pronouns at the rest part of the word', () => {
            it("'ku'", () => {
                ShouldNotTransform(removePossessivePronoun, 'kumakan');
                ShouldNotTransform(removePossessivePronoun, 'kekurangan');
            });
            it("'mu'", () => {
                ShouldNotTransform(removePossessivePronoun, 'murahan');
                ShouldNotTransform(removePossessivePronoun, 'kemurkaan');
            });
            it("'nya'", () => {
                ShouldNotTransform(removePossessivePronoun, 'nyapu');
                ShouldNotTransform(removePossessivePronoun, 'menyambung');
            });
        });
        describe('should not set any flags regardless the characters position', () => {
            // tslint:disable-next-line:no-any
            let prevFlags;
            beforeAll(() => {
                prevFlags = morphological.flags;
            });
            it("'ku'", () => {
                removePossessivePronoun('mainanku');
                removePossessivePronoun('kumakan');
                removePossessivePronoun('kekurangan');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
            it("'mu'", () => {
                removePossessivePronoun('mobilmu');
                removePossessivePronoun('murahan');
                removePossessivePronoun('kemurkaan');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
            it("'nya'", () => {
                removePossessivePronoun('gelasnya');
                removePossessivePronoun('nyapu');
                removePossessivePronoun('menyambung');
                expect(morphological.flags).not.toBeDefined();
                expect(morphological.flags).toBe(prevFlags);
            });
        });
    });
    describe('Remove first order prefix', () => {
        describe('words with these special characters', () => {
            describe('at the begining', () => {
                describe('followed by a vowel, should remove and substitute the last character', () => {
                    it("'meny'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'menyapu', 'sapu');
                        ShouldTransform(removeFirstOrderPrefix, 'menyambung', 'sambung');
                    });
                    it("'pen'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'penulis', 'tulis');
                        ShouldTransform(removeFirstOrderPrefix, 'penata', 'tata');
                    });
                    it("'peny'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'penyantap', 'santap');
                        ShouldTransform(removeFirstOrderPrefix, 'penyongsong', 'songsong');
                        ShouldTransform(removeFirstOrderPrefix, 'penyakit', 'sakit');
                    });
                });
                describe('followed by consonant, should only remove the special characters', () => {
                    it("'meny'", () => {
                        // Find a real indonesian word for this case
                        ShouldTransform(removeFirstOrderPrefix, 'menyxxx', 'xxx');
                    });
                    it("'peny'", () => {
                        // Find a real indonesian word for this case
                        ShouldTransform(removeFirstOrderPrefix, 'penyxxx', 'xxx');
                    });
                    it("'pen'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'penjahat', 'jahat');
                    });
                });
            });
            describe('should set the flags correctly regardless vowel or consonant', () => {
                it("'meny' should set the flags to REMOVED_MENG", () => {
                    const constant = MorphologicalUtility.REMOVED_MENG;
                    removeFirstOrderPrefix('menyambung');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('menyxxx');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                });
                it("'peny' should set the flags to REMOVED_PENG", () => {
                    const constant = MorphologicalUtility.REMOVED_PENG;
                    removeFirstOrderPrefix('penyantap');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('penyxxx');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                });
                it("'pen' should set the flags to REMOVED_PENG", () => {
                    const constant = MorphologicalUtility.REMOVED_PENG;
                    removeFirstOrderPrefix('penata');
                    expect(morphological.flags).toBe(constant);
                    morphological.flags = undefined;
                    removeFirstOrderPrefix('penjahat');
                    expect(morphological.flags).toBe(constant);
                });
            });
            describe('at the rest part of the word', () => {
                describe('followed by a vowel, should not do anything', () => {
                    it("'meny'", () => {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyaxx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenya');
                    });
                    it("'peny'", () => {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyaxx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenya');
                    });
                    it("'pen'", () => {
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenexx');
                        ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeno');
                    });
                });
            });
            describe('followed by consonant, should not do anything', () => {
                it("'meny'", () => {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenykxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyk');
                });
                it("'peny'", () => {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenykxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyk');
                });
                it("'pen'", () => {
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenrxx');
                    ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenr');
                });
            });
        });
        describe('words with first order prefix characters', () => {
            describe('at the begining', () => {
                describe('should remove these characters', () => {
                    it("'meng'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'menggambar', 'gambar');
                    });
                    it("'men'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'mendaftar', 'daftar');
                    });
                    it("'mem'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'membangun', 'bangun');
                        ShouldTransform(removeFirstOrderPrefix, 'membeli', 'beli');
                        ShouldTransform(removeFirstOrderPrefix, 'memberi', 'beri');
                        ShouldTransform(removeFirstOrderPrefix, 'memilah', 'pilah');
                    });
                    it("'me'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'melukis', 'lukis');
                        // ShouldTransform(removeFirstOrderPrefix, 'memakan', 'makan');
                        // ShouldTransform(removeFirstOrderPrefix, 'meminum', 'minum');
                        ShouldTransform(removeFirstOrderPrefix, 'menikah', 'nikah');
                    });
                    it("'peng'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'penggaris', 'garis');
                    });
                    it("'pem'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'pembajak', 'bajak');
                    });
                    it("'di'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'disayang', 'sayang');
                    });
                    it("'ter'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'terakhir', 'akhir');
                        ShouldTransform(removeFirstOrderPrefix, 'terucap', 'ucap');
                    });
                    it("'ke'", () => {
                        ShouldTransform(removeFirstOrderPrefix, 'kemana', 'mana');
                        ShouldTransform(removeFirstOrderPrefix, 'kemakan', 'makan');
                    });
                });
            });
            describe('should set the flags correctly', () => {
                beforeEach(() => {
                    morphological.flags = undefined;
                });
                describe('to REMOVED_MENG on these characters', () => {
                    const { REMOVED_MENG } = MorphologicalUtility;
                    it("meng'", () => {
                        removeFirstOrderPrefix('menggambar');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("men'", () => {
                        removeFirstOrderPrefix('mendaftar');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("mem'", () => {
                        removeFirstOrderPrefix('membangun');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                    it("me'", () => {
                        removeFirstOrderPrefix('melukis');
                        expect(morphological.flags).toBe(REMOVED_MENG);
                    });
                });
                describe('to REMOVED_PENG on these characters', () => {
                    const { REMOVED_PENG } = MorphologicalUtility;
                    it("peng'", () => {
                        removeFirstOrderPrefix('penggaris');
                        expect(morphological.flags).toBe(REMOVED_PENG);
                    });
                    it("pem'", () => {
                        removeFirstOrderPrefix('pembajak');
                        expect(morphological.flags).toBe(REMOVED_PENG);
                    });
                });
                describe('to their respective constants on these characters', () => {
                    it("di'", () => {
                        removeFirstOrderPrefix('disayang');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_DI);
                    });
                    it("ter'", () => {
                        removeFirstOrderPrefix('terucap');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_TER);
                    });
                    it("ke'", () => {
                        removeFirstOrderPrefix('kemakan');
                        expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_KE);
                    });
                });
            });
            describe('at the rest part of the word', () => {
                beforeAll(() => {
                    morphological.flags = undefined;
                });
                describe('should not remove these characters', () => {
                    describe('and should not set any flags', () => {
                        it("'meng'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmengxex');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xexmeng');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'men'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmen');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'mem'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmemxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmem');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'me'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmexxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxme');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'peng'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpengxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeng');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'pem'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpemxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpem');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'di'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxdixxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxdi');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'ter'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxterxxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxter');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'ke'", () => {
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxkexxx');
                            ShouldNotTransform(removeFirstOrderPrefix, 'xxxke');
                            expect(morphological.flags).not.toBeDefined();
                        });
                    });
                });
            });
        });
    });
    describe('Remove Second Order Prefix', () => {
        const { REMOVED_BER } = MorphologicalUtility;
        describe('should handle these irregular words', () => {
            describe("'belajar'", () => {
                beforeAll(() => {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', () => {
                    ShouldTransform(removeSecondOrderPrefix, 'belajar', 'ajar');
                });
                it('should set the flags to REMOVED_BER', () => {
                    expect(morphological.flags).toBe(REMOVED_BER);
                });
            });
            describe("'belunjur'", () => {
                beforeAll(() => {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', () => {
                    ShouldTransform(removeSecondOrderPrefix, 'belunjur', 'unjur');
                });
                it('should set the flags to REMOVED_BER', () => {
                    expect(morphological.flags).toBe(REMOVED_BER);
                });
            });
            describe("'pelajar'", () => {
                beforeAll(() => {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', () => {
                    ShouldTransform(removeSecondOrderPrefix, 'pelajar', 'ajar');
                });
                it('should not set any flags', () => {
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
        describe("should handle words starting with 'be*er' where * isn't a vowel & the length > 4", () => {
            describe("'beserta'", () => {
                beforeAll(() => {
                    morphological.flags = undefined;
                });
                it('should be handled correctly', () => {
                    ShouldTransform(removeSecondOrderPrefix, 'beserta', 'serta');
                });
                it('should set the flags to REMOVED_BER', () => {
                    expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_BER);
                });
            });
        });
        describe('words with second order prefix characters', () => {
            beforeEach(() => {
                morphological.flags = undefined;
            });
            describe('at the beginning', () => {
                describe('should remove these characters', () => {
                    describe('should set the flags correctly', () => {
                        beforeEach(() => {
                            morphological.flags = undefined;
                        });
                        it("'ber'", () => {
                            ShouldTransform(removeSecondOrderPrefix, 'bercerita', 'cerita');
                            expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_BER);
                        });
                        it("'per'", () => {
                            ShouldTransform(removeSecondOrderPrefix, 'perjelas', 'jelas');
                            expect(morphological.flags).not.toBeDefined();
                        });
                        it("'pe'", () => {
                            ShouldTransform(removeSecondOrderPrefix, 'pesuruh', 'suruh');
                            expect(morphological.flags).toBe(MorphologicalUtility.REMOVED_PE);
                        });
                    });
                });
            });
        });
        describe('at the rest part of the word, should not remove these characters', () => {
            describe('should not set any flags', () => {
                beforeEach(() => {
                    morphological.flags = undefined;
                });
                it("'ber'", () => {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxberxxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxber');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'per'", () => {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxperxxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxper');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'pe'", () => {
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxpexxx');
                    ShouldNotTransform(removeSecondOrderPrefix, 'xxxpe');
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
    });
    describe('Remove Suffix', () => {
        describe('word with these suffix characters', () => {
            beforeEach(() => {
                morphological.flags = undefined;
            });
            describe('at the end of the word, should remove the suffix characters', () => {
                it("'kan'", () => {
                    ShouldTransform(removeSuffix, 'katakan', 'kata');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'an'", () => {
                    ShouldTransform(removeSuffix, 'sandaran', 'sandar');
                    ShouldTransform(removeSuffix, 'makanan', 'makan');
                    expect(morphological.flags).not.toBeDefined();
                });
                it("'i'", () => {
                    ShouldTransform(removeSuffix, 'tiduri', 'tidur');
                    expect(morphological.flags).not.toBeDefined();
                });
            });
        });
        describe('at the rest part of the word, should not remove the characters', () => {
            it("'kan'", () => {
                ShouldNotTransform(removeSuffix, 'kanxxx');
                ShouldNotTransform(removeSuffix, 'xxxkanxxx');
            });
            it("'an'", () => {
                ShouldNotTransform(removeSuffix, 'anxxx');
                ShouldNotTransform(removeSuffix, 'xxxanxxx');
            });
            it("'an'", () => {
                ShouldNotTransform(removeSuffix, 'ixxx');
                ShouldNotTransform(removeSuffix, 'xxxixxx');
            });
        });
    });
});
function ShouldTransform(methodName, word, transformWord) {
    const actual = methodName(word);
    // methodName(word).should.equal(transformWord);
    expect(actual).toEqual(transformWord);
}
function ShouldNotTransform(methodName, word) {
    const actual = methodName(word);
    // methodName(word).should.equal(word);
    expect(actual).toEqual(word);
}
//# sourceMappingURL=morphological-utility.spec.js.map