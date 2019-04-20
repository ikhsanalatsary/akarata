/* tslint:disable:no-unsafe-any */
import * as fs from 'fs';
import akarata from '../index';
xdescribe('Reversed Lemas', () => {
    const reversedLemas = JSON.parse(fs.readFileSync(`${__dirname}/reversed.json`, 'utf8'));
    xdescribe('test again reversed lemas from KBBI dictionary', () => {
        for (const i in reversedLemas) {
            if (reversedLemas.hasOwnProperty(i)) {
                xit(`'${reversedLemas[i].kata} should be stemmed to ${reversedLemas[i].lema}'`, () => {
                    ShouldStem(akarata.stem, reversedLemas[i].kata, reversedLemas[i].lema.trim());
                });
            }
        }
    });
});
function ShouldStem(methodName, word, transformWord) {
    const actual = methodName(word);
    // methodName(word).should.equal(transformWord)
    expect(actual).toEqual(transformWord);
}
//# sourceMappingURL=reversed.spec.js.map