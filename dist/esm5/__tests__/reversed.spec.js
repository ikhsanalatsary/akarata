/* tslint:disable:no-unsafe-any */
import * as fs from 'fs';
import akarata from '../index';
var reversedLemas = JSON.parse(fs.readFileSync(__dirname + "/reversed.json", 'utf8'));
xdescribe('Reversed Lemas', function () {
    describe('test again reversed lemas from KBBI dictionary', function () {
        var _loop_1 = function (i) {
            if (reversedLemas.hasOwnProperty(i)) {
                it("'" + reversedLemas[i].kata + " should be stemmed to " + reversedLemas[i].lema + "'", function () {
                    ShouldStem(akarata.stem, reversedLemas[i].kata, reversedLemas[i].lema.trim());
                });
            }
        };
        for (var i in reversedLemas) {
            _loop_1(i);
        }
    });
});
function ShouldStem(methodName, word, transformWord) {
    var actual = methodName(word);
    // methodName(word).should.equal(transformWord);
    expect(actual).toEqual(transformWord);
}
//# sourceMappingURL=reversed.spec.js.map