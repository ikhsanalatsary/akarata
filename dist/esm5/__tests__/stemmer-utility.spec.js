/* tslint:disable:no-unused-expression */
import stemmerUtility from '../lib/stemmer-utility';
describe('stemmerUtility', function () {
    it('should available', function () {
        expect(stemmerUtility).toBeDefined();
        expect(stemmerUtility.isEndsWith).toBeDefined();
        expect(stemmerUtility.isStartsWith).toBeDefined();
    });
    var word = 'asldkamsdo';
    var prefix = 'asld';
    var suffix = 'amsdo';
    describe('the word starts with prefix', function () {
        it('that have different letters from the prefix should return false', function () {
            var actual = stemmerUtility.isStartsWith(word, 3, 'ber');
            // stemmerUtility.isStartsWith(word, 3, 'ber').should.be.false;
            expect(actual).toBeFalsy();
        });
    });
    describe("that have the same letters with the word's first letters", function () {
        it('by exactly prefix length should be true', function () {
            var actual = stemmerUtility.isStartsWith(word, prefix.length, prefix);
            // stemmerUtility.isStartsWith(word, prefix.length, prefix).should.be.true;
            expect(actual).toBeTruthy();
        });
        it('by more than prefix length should still be true', function () {
            var actual = stemmerUtility.isStartsWith(word, prefix.length + 1, prefix);
            // stemmerUtility.isStartsWith(word, prefix.length + 1, prefix).should.be
            //   .true;
            expect(actual).toBeTruthy();
        });
        it('by less than prefix length should still be false', function () {
            var actual = stemmerUtility.isStartsWith(word, prefix.length - 1, prefix);
            // stemmerUtility.isStartsWith(word, prefix.length - 1, prefix).should.be
            //   .false;
            expect(actual).toBeFalsy();
        });
    });
    describe('the word ends with suffix', function () {
        it('that have different letters from the suffix should return false', function () {
            var actual = stemmerUtility.isEndsWith(word, 3, 'abc');
            // stemmerUtility.isEndsWith(word, 3, 'abc').should.be.false;
            expect(actual).toBeFalsy();
        });
        describe("that have the same letters with the word's last letters", function () {
            it('by exactly suffix length should be true', function () {
                var actual = stemmerUtility.isEndsWith(word, suffix.length, suffix);
                // stemmerUtility.isEndsWith(word, suffix.length, suffix).should.be.true;
                expect(actual).toBeTruthy();
            });
            it('by more than suffix length should still be true', function () {
                var actual = stemmerUtility.isEndsWith(word, suffix.length + 1, suffix);
                // stemmerUtility.isEndsWith(word, suffix.length + 1, suffix).should.be
                //   .true;
                expect(actual).toBeTruthy();
            });
            it('by less than suffix length should still be false', function () {
                var actual = stemmerUtility.isEndsWith(word, suffix.length - 1, suffix);
                // stemmerUtility.isEndsWith(word, suffix.length - 1, suffix).should.be
                //   .false;
                expect(actual).toBeFalsy();
            });
        });
    });
});
//# sourceMappingURL=stemmer-utility.spec.js.map