import akarata from '../index'

describe('Akarata', () => {
  describe('covering the inflectional particles', () => {
    it("'kah'", () => {
      ShouldStem(akarata.stem, 'manakah', 'mana')
      ShouldStem(akarata.stem, 'bukukah', 'buku')
    })

    it("'lah'", () => {
      ShouldStem(akarata.stem, 'adalah', 'ada')
    })

    it("'pun'", () => {
      ShouldStem(akarata.stem, 'bagaimanapun', 'bagaimana')
    })
  })

  describe('covering the inflectional possessive pronouns', () => {
    it("'ku'", () => {
      ShouldStem(akarata.stem, 'bukuku', 'buku')
    })

    it("'mu'", () => {
      ShouldStem(akarata.stem, 'rumahmu', 'rumah')
    })

    it("'nya'", () => {
      ShouldStem(akarata.stem, 'cintanya', 'cinta')
      // layan or pelayan?
      ShouldStem(akarata.stem, 'pelayannya', 'layan')
    })
  })

  describe('covering the first order of derivational prefixes', () => {
    it("'meng'", () => {
      ShouldStem(akarata.stem, 'mengukur', 'ukur')
      ShouldStem(akarata.stem, 'mengecewakan', 'kecewa')
      ShouldStem(akarata.stem, 'mengatakan', 'kata')
    })

    it("'meny'", () => {
      ShouldStem(akarata.stem, 'menyapu', 'sapu')
    })

    it("'men'", () => {
      ShouldStem(akarata.stem, 'menduga', 'duga')
      ShouldStem(akarata.stem, 'menuduh', 'tuduh')
    })

    it("'me'", () => {
      ShouldStem(akarata.stem, 'menikah', 'nikah')
      // ShouldStem(akarata.stem, 'memakan', 'makan')
    })

    describe("'mem' followed by 'p'", () => {
      it("'mem'", () => {
        ShouldStem(akarata.stem, 'memilih', 'pilih')
        ShouldStem(akarata.stem, 'memilah', 'pilah')
        ShouldStem(akarata.stem, 'memuji', 'puji')
        ShouldStem(akarata.stem, 'memakai', 'pakai')
      })
    })

    it("'mem'", () => {
      ShouldStem(akarata.stem, 'membaca', 'baca')
      ShouldStem(akarata.stem, 'membantu', 'bantu')
    })

    it("'me'", () => {
      ShouldStem(akarata.stem, 'melayang', 'layang')
      ShouldStem(akarata.stem, 'merusak', 'rusak')
      ShouldStem(akarata.stem, 'memasak', 'masak')
      // ShouldStem(akarata.stem, 'memandikan', 'mandi')
    })

    it("'peng'", () => {
      ShouldStem(akarata.stem, 'pengukur', 'ukur')
    })

    it("'peny'", () => {
      ShouldStem(akarata.stem, 'penyalin', 'salin')
    })

    it("'pen'", () => {
      ShouldStem(akarata.stem, 'penasehat', 'nasehat')
      ShouldStem(akarata.stem, 'penarik', 'tarik')
    })

    describe("'pem' followed by p", () => {
      it("'pem'", () => {
        ShouldStem(akarata.stem, 'pemilih', 'pilih')
        ShouldStem(akarata.stem, 'pemilah', 'pilah')
        ShouldStem(akarata.stem, 'pemuji', 'puji')
      })
    })

    it("'pem'", () => {
      ShouldStem(akarata.stem, 'pembaca', 'baca')
      ShouldStem(akarata.stem, 'pembicara', 'bicara')
      // ShouldStem(akarata.stem, 'pemilik', 'milik')
    })

    it("'di'", () => {
      ShouldStem(akarata.stem, 'diukur', 'ukur')
      ShouldStem(akarata.stem, 'dilihat', 'lihat')
      ShouldStem(akarata.stem, 'dilihat', 'lihat')
      // ShouldStem(akarata.stem, 'direkomendasikan', 'rekomendasi')
    })

    it("'ter'", () => {
      ShouldStem(akarata.stem, 'terindah', 'indah')
      ShouldStem(akarata.stem, 'terhebat', 'hebat')
      ShouldStem(akarata.stem, 'terukur', 'ukur')
      ShouldStem(akarata.stem, 'tersapu', 'sapu')
    })

    it("'ter'", () => {
      ShouldStem(akarata.stem, 'kekasih', 'kasih')
      ShouldStem(akarata.stem, 'kemana', 'mana')
    })
  })

  describe('covering the second order of derivational suffixes', () => {
    it("'ber'", () => {
      ShouldStem(akarata.stem, 'berlari', 'lari')
      ShouldStem(akarata.stem, 'berganti', 'ganti')
    })

    it("'bel'", () => {
      ShouldStem(akarata.stem, 'belajar', 'ajar')
    })

    it("'be'", () => {
      ShouldStem(akarata.stem, 'bekerja', 'kerja')
    })

    it("'per'", () => {
      ShouldStem(akarata.stem, 'perjelas', 'jelas')
    })

    it("'pel'", () => {
      ShouldStem(akarata.stem, 'pelajar', 'ajar')
    })

    it("'pe'", () => {
      ShouldStem(akarata.stem, 'pekerja', 'kerja')
      ShouldStem(akarata.stem, 'pelari', 'lari')
    })
  })

  describe('covering the derivational suffixes', () => {
    it("'kan'", () => {
      ShouldStem(akarata.stem, 'tarikkan', 'tarik')
      ShouldStem(akarata.stem, 'ambilkan', 'ambil')
    })

    it("'an'", () => {
      ShouldStem(akarata.stem, 'makanan', 'makan')
      ShouldStem(akarata.stem, 'sarapan', 'sarap')
      ShouldStem(akarata.stem, 'kekinian', 'kini')
    })

    describe("'i'", () => {
      it('should stem correctly', () => {
        ShouldStem(akarata.stem, 'ajari', 'ajar')
        ShouldStem(akarata.stem, 'cermati', 'cermat')
      })

      it('should not stem these words', () => {
        ShouldStem(akarata.stem, 'santai', 'santai')
        ShouldStem(akarata.stem, 'strategi', 'strategi')
        ShouldStem(akarata.stem, 'lokasi', 'lokasi')
        ShouldStem(akarata.stem, 'rekomendasi', 'rekomendasi')
      })
    })
  })
})

type Fn = (word: string) => string

function ShouldStem(methodName: Fn, word: string, transformWord: string) {
  const actual = methodName(word)
  // methodName(word).should.equal(transformWord)
  expect(actual).toEqual(transformWord)
}
