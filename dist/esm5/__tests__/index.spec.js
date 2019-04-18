import akarata from '../index';
describe('Akarata', function () {
    describe('covering the inflectional particles', function () {
        it("'kah'", function () {
            ShouldStem(akarata.stem, 'manakah', 'mana');
            ShouldStem(akarata.stem, 'bukukah', 'buku');
        });
        it("'lah'", function () {
            ShouldStem(akarata.stem, 'adalah', 'ada');
        });
        it("'pun'", function () {
            ShouldStem(akarata.stem, 'bagaimanapun', 'bagaimana');
        });
    });
    describe('covering the inflectional possessive pronouns', function () {
        it("'ku'", function () {
            ShouldStem(akarata.stem, 'bukuku', 'buku');
        });
        it("'mu'", function () {
            ShouldStem(akarata.stem, 'rumahmu', 'rumah');
        });
        it("'nya'", function () {
            ShouldStem(akarata.stem, 'cintanya', 'cinta');
            // layan or pelayan?
            ShouldStem(akarata.stem, 'pelayannya', 'layan');
        });
    });
    describe('covering the first order of derivational prefixes', function () {
        it("'meng'", function () {
            ShouldStem(akarata.stem, 'mengukur', 'ukur');
            ShouldStem(akarata.stem, 'mengecewakan', 'kecewa');
            ShouldStem(akarata.stem, 'mengatakan', 'kata');
        });
        it("'meny'", function () {
            ShouldStem(akarata.stem, 'menyapu', 'sapu');
        });
        it("'men'", function () {
            ShouldStem(akarata.stem, 'menduga', 'duga');
            ShouldStem(akarata.stem, 'menuduh', 'tuduh');
        });
        it("'me'", function () {
            ShouldStem(akarata.stem, 'menikah', 'nikah');
        });
        describe("'mem' followed by 'p'", function () {
            it("'mem'", function () {
                ShouldStem(akarata.stem, 'memilih', 'pilih');
                ShouldStem(akarata.stem, 'memilah', 'pilah');
                ShouldStem(akarata.stem, 'memuji', 'puji');
                ShouldStem(akarata.stem, 'memakai', 'pakai');
            });
        });
        it("'mem'", function () {
            ShouldStem(akarata.stem, 'membaca', 'baca');
            ShouldStem(akarata.stem, 'membantu', 'bantu');
        });
        it("'me'", function () {
            ShouldStem(akarata.stem, 'melayang', 'layang');
            ShouldStem(akarata.stem, 'merusak', 'rusak');
            // ShouldStem(akarata.stem, 'memasak', 'masak');
            // ShouldStem(akarata.stem, 'memandikan', 'mandi');
        });
        it("'peng'", function () {
            ShouldStem(akarata.stem, 'pengukur', 'ukur');
        });
        it("'peny'", function () {
            ShouldStem(akarata.stem, 'penyalin', 'salin');
        });
        it("'pen'", function () {
            ShouldStem(akarata.stem, 'penasehat', 'nasehat');
            ShouldStem(akarata.stem, 'penarik', 'tarik');
        });
        describe("'pem' followed by p", function () {
            it("'pem'", function () {
                ShouldStem(akarata.stem, 'pemilih', 'pilih');
                ShouldStem(akarata.stem, 'pemilah', 'pilah');
                ShouldStem(akarata.stem, 'pemuji', 'puji');
            });
        });
        it("'pem'", function () {
            ShouldStem(akarata.stem, 'pembaca', 'baca');
            ShouldStem(akarata.stem, 'pembicara', 'bicara');
            // ShouldStem(akarata.stem, 'pemilik', 'milik');
        });
        it("'di'", function () {
            ShouldStem(akarata.stem, 'diukur', 'ukur');
            ShouldStem(akarata.stem, 'dilihat', 'lihat');
            ShouldStem(akarata.stem, 'dilihat', 'lihat');
            // ShouldStem(akarata.stem, 'direkomendasikan', 'rekomendasi')
        });
        it("'ter'", function () {
            ShouldStem(akarata.stem, 'terindah', 'indah');
            ShouldStem(akarata.stem, 'terhebat', 'hebat');
            ShouldStem(akarata.stem, 'terukur', 'ukur');
            ShouldStem(akarata.stem, 'tersapu', 'sapu');
        });
        it("'ter'", function () {
            ShouldStem(akarata.stem, 'kekasih', 'kasih');
            ShouldStem(akarata.stem, 'kemana', 'mana');
        });
    });
    describe('covering the second order of derivational suffixes', function () {
        it("'ber'", function () {
            ShouldStem(akarata.stem, 'berlari', 'lari');
            ShouldStem(akarata.stem, 'berganti', 'ganti');
        });
        it("'bel'", function () {
            ShouldStem(akarata.stem, 'belajar', 'ajar');
        });
        it("'be'", function () {
            ShouldStem(akarata.stem, 'bekerja', 'kerja');
        });
        it("'per'", function () {
            ShouldStem(akarata.stem, 'perjelas', 'jelas');
        });
        it("'pel'", function () {
            ShouldStem(akarata.stem, 'pelajar', 'ajar');
        });
        it("'pe'", function () {
            ShouldStem(akarata.stem, 'pekerja', 'kerja');
            ShouldStem(akarata.stem, 'pelari', 'lari');
        });
    });
    describe('covering the derivational suffixes', function () {
        it("'kan'", function () {
            ShouldStem(akarata.stem, 'tarikkan', 'tarik');
            ShouldStem(akarata.stem, 'ambilkan', 'ambil');
        });
        it("'an'", function () {
            ShouldStem(akarata.stem, 'makanan', 'makan');
            ShouldStem(akarata.stem, 'sarapan', 'sarap');
            ShouldStem(akarata.stem, 'kekinian', 'kini');
        });
        describe("'i'", function () {
            it('should stem correctly', function () {
                ShouldStem(akarata.stem, 'ajari', 'ajar');
                ShouldStem(akarata.stem, 'cermati', 'cermat');
            });
            it('should not stem these words', function () {
                ShouldStem(akarata.stem, 'santai', 'santai');
                ShouldStem(akarata.stem, 'strategi', 'strategi');
                ShouldStem(akarata.stem, 'lokasi', 'lokasi');
                ShouldStem(akarata.stem, 'rekomendasi', 'rekomendasi');
            });
        });
    });
});
function ShouldStem(methodName, word, transformWord) {
    var actual = methodName(word);
    // methodName(word).should.equal(transformWord);
    expect(actual).toEqual(transformWord);
}
//# sourceMappingURL=index.spec.js.map