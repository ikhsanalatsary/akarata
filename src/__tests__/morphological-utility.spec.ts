import MorphologicalUtility from '../lib/morphological-utility'

describe('Stemmer', () => {
  const morphological = new MorphologicalUtility()
  const {
    removeFirstOrderPrefix,
    removeParticle,
    // removePossesive,
    removeSecondOrderPrefix,
    removeSuffix,
    totalSyllables,
  } = morphological
  it('should available', () => {
    expect(removeFirstOrderPrefix).toBeDefined()
    expect(removeParticle).toBeDefined()
    // expect(removePossesive).toBeDefined();
    expect(removeSecondOrderPrefix).toBeDefined()
    expect(removeSuffix).toBeDefined()
    expect(totalSyllables).toBeDefined()
  })

  describe('Total Syllables', () => {
    it("'memasak' should return 3", () => {
      const actual = totalSyllables('memasak')
      // totalSyllables('memasak').should.equal(3);
      expect(actual).toEqual(3)
    })

    it("'mewarnai' should return 4", () => {
      // totalSyllables('mewarnai').should.equal(4);
      const actual = totalSyllables('mewarnai')
      expect(actual).toEqual(4)
    })

    it("'permainan' should return 4", () => {
      // totalSyllables('permainan').should.equal(4);
      const actual = totalSyllables('permainan')
      expect(actual).toEqual(4)
    })
  })

  describe('Remove particle', () => {
    describe('should remove these particles at the end of the word', () => {
      it("'kah'", () => {
        ShouldTransform(removeParticle, 'manakah', 'mana')
        ShouldTransform(removeParticle, 'bukukah', 'buku')
      })

      it("'lah'", () => {
        ShouldTransform(removeParticle, 'itulah', 'itu')
      })

      it("'pun'", () => {
        ShouldTransform(removeParticle, 'bagaimanapun', 'bagaimana')
      })
    })
  })

  describe('should not remove these particles at the rest part of the word', () => {
    it("'kah'", () => {
      ShouldNotTransform(removeParticle, 'kahak')
      ShouldNotTransform(removeParticle, 'pernikahan')
    })

    it("'lah'", () => {
      ShouldNotTransform(removeParticle, 'lahiriah')
      ShouldNotTransform(removeParticle, 'kelahiran')
    })

    it("'pun'", () => {
      ShouldNotTransform(removeParticle, 'punya')
      ShouldNotTransform(removeParticle, 'kepunyaan')
    })
  })

  xdescribe('Remove possesive pronoun', () => {
    describe('should remove these possessive pronouns at the end of the word', () => {
      it("'ku'", () => {
        // ShouldTransform(removePossesive, 'mainanku', 'mainan');
        // ShouldTransform(removePossesive, 'bukuku', 'buku');
      })

      it("'mu'", () => {
        // ShouldTransform(removePossesive, 'gelasmu', 'gelas');
      })

      it("'nya'", () => {
        // ShouldTransform(removePossesive, 'mobilnya', 'mobil');
      })
    })

    xdescribe('should not remove these possessive pronouns at the rest part of the word', () => {
      it("'ku'", () => {
        // ShouldNotTransform(removePossesive, 'kumakan');
        // ShouldNotTransform(removePossesive, 'kekurangan');
      })

      it("'mu'", () => {
        // ShouldNotTransform(removePossesive, 'murahan');
        // ShouldNotTransform(removePossesive, 'kemurkaan');
      })

      it("'nya'", () => {
        // ShouldNotTransform(removePossesive, 'nyapu');
        // ShouldNotTransform(removePossesive, 'menyambung');
      })
    })
  })

  describe('Remove first order prefix', () => {
    describe('words with these special characters', () => {
      describe('at the begining', () => {
        describe('followed by a vowel, should remove and substitute the last character', () => {
          it("'meny'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'menyapu', 'sapu')
            ShouldTransform(removeFirstOrderPrefix, 'menyambung', 'sambung')
          })

          it("'pen'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'penulis', 'tulis')
            ShouldTransform(removeFirstOrderPrefix, 'penata', 'tata')
          })

          it("'peny'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'penyantap', 'santap')
            ShouldTransform(removeFirstOrderPrefix, 'penyongsong', 'songsong')
            ShouldTransform(removeFirstOrderPrefix, 'penyakit', 'sakit')
          })
        })

        describe('followed by consonant, should only remove the special characters', () => {
          it("'meny'", () => {
            // Find a real indonesian word for this case
            ShouldTransform(removeFirstOrderPrefix, 'menyxxx', 'xxx')
          })

          it("'peny'", () => {
            // Find a real indonesian word for this case
            ShouldTransform(removeFirstOrderPrefix, 'penyxxx', 'xxx')
          })

          it("'pen'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'penjahat', 'jahat')
          })
        })
      })

      describe('at the rest part of the word', () => {
        describe('followed by a vowel, should not do anything', () => {
          it("'meny'", () => {
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyaxx')
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenya')
          })

          it("'peny'", () => {
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyaxx')
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenya')
          })

          it("'pen'", () => {
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenexx')
            ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeno')
          })
        })
      })

      describe('followed by consonant, should not do anything', () => {
        it("'meny'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenykxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenyk')
        })

        it("'peny'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenykxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenyk')
        })

        it("'pen'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenrxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpenr')
        })
      })
    })

    describe('words with first order prefix characters', () => {
      describe('at the begining', () => {
        describe('should remove these characters', () => {
          it("'meng'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'menggambar', 'gambar')
          })

          it("'men'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'mendaftar', 'daftar')
          })

          it("'mem'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'membangun', 'bangun')
            ShouldTransform(removeFirstOrderPrefix, 'membeli', 'beli')
            ShouldTransform(removeFirstOrderPrefix, 'memberi', 'beri')
            ShouldTransform(removeFirstOrderPrefix, 'memilah', 'pilah')
          })

          it("'me'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'melukis', 'lukis')
            // ShouldTransform(removeFirstOrderPrefix, 'memakan', 'makan');
            // ShouldTransform(removeFirstOrderPrefix, 'meminum', 'minum');
            ShouldTransform(removeFirstOrderPrefix, 'menikah', 'nikah')
          })

          it("'peng'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'penggaris', 'garis')
          })

          it("'pem'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'pembajak', 'bajak')
          })

          it("'di'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'disayang', 'sayang')
          })

          it("'ter'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'terakhir', 'akhir')
            ShouldTransform(removeFirstOrderPrefix, 'terucap', 'ucap')
          })

          it("'ke'", () => {
            ShouldTransform(removeFirstOrderPrefix, 'kemana', 'mana')
            ShouldTransform(removeFirstOrderPrefix, 'kemakan', 'makan')
          })
        })
      })

      describe('at the rest part of the word, should not remove these characters', () => {
        it("'meng'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmengxex')
          ShouldNotTransform(removeFirstOrderPrefix, 'xexmeng')
        })

        it("'men'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmenxxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmen')
        })

        it("'mem'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmemxxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmem')
        })

        it("'me'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxmexxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxme')
        })

        it("'peng'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpengxxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpeng')
        })

        it("'pem'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpemxxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxpem')
        })

        it("'di'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxdixxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxdi')
        })

        it("'ter'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxterxxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxter')
        })

        it("'ke'", () => {
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxkexxx')
          ShouldNotTransform(removeFirstOrderPrefix, 'xxxke')
        })
      })
    })
  })

  describe('Remove Second Order Prefix', () => {
    describe('should handle these irregular words', () => {
      it("'belajar'", () => {
        ShouldTransform(removeSecondOrderPrefix, 'belajar', 'ajar')
      })

      it("'belunjur'", () => {
        ShouldTransform(removeSecondOrderPrefix, 'belunjur', 'unjur')
      })

      it("'pelajar'", () => {
        ShouldTransform(removeSecondOrderPrefix, 'pelajar', 'ajar')
      })
    })

    describe("should handle words starting with 'be*er' where * isn't a vowel & the length > 4", () => {
      it("'beserta'", () => {
        ShouldTransform(removeSecondOrderPrefix, 'beserta', 'serta')
      })
    })

    describe('words with second order prefix characters', () => {
      describe('at the beginning', () => {
        describe('should remove these characters', () => {
          it("'ber'", () => {
            ShouldTransform(removeSecondOrderPrefix, 'bercerita', 'cerita')
          })

          it("'per'", () => {
            ShouldTransform(removeSecondOrderPrefix, 'perjelas', 'jelas')
          })

          it("'pe'", () => {
            ShouldTransform(removeSecondOrderPrefix, 'pesuruh', 'suruh')
          })
        })
      })
    })

    describe('at the rest part of the word, should not remove these characters', () => {
      it("'ber'", () => {
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxberxxx')
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxber')
      })

      it("'per'", () => {
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxperxxx')
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxper')
      })

      it("'pe'", () => {
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxpexxx')
        ShouldNotTransform(removeSecondOrderPrefix, 'xxxpe')
      })
    })
  })

  describe('Remove Suffix', () => {
    describe('word with these suffix characters', () => {
      beforeEach(() => {
        morphological.flags = 0
      })
      describe('at the end of the word, should remove the suffix characters', () => {
        it("'kan'", () => {
          ShouldTransform(removeSuffix, 'katakan', 'kata')
        })

        it("'an'", () => {
          ShouldTransform(removeSuffix, 'sandaran', 'sandar')
          ShouldTransform(removeSuffix, 'makanan', 'makan')
        })

        it("'i'", () => {
          ShouldTransform(removeSuffix, 'tiduri', 'tidur')
        })
      })
    })

    describe('at the rest part of the word, should not remove the characters', () => {
      it("'kan'", () => {
        ShouldNotTransform(removeSuffix, 'kanxxx')
        ShouldNotTransform(removeSuffix, 'xxxkanxxx')
      })

      it("'an'", () => {
        ShouldNotTransform(removeSuffix, 'anxxx')
        ShouldNotTransform(removeSuffix, 'xxxanxxx')
      })

      it("'an'", () => {
        ShouldNotTransform(removeSuffix, 'ixxx')
        ShouldNotTransform(removeSuffix, 'xxxixxx')
      })
    })
  })
})

type Fn = (word: string) => string

function ShouldTransform(methodName: Fn, word: string, transformWord: string) {
  const actual = methodName(word)
  // methodName(word).should.equal(transformWord);
  expect(actual).toEqual(transformWord)
}

function ShouldNotTransform(methodName: Fn, word: string) {
  const actual = methodName(word)
  // methodName(word).should.equal(word);
  expect(actual).toEqual(word)
}
