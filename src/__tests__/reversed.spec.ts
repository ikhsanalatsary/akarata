/* tslint:disable:no-unsafe-any */
import * as fs from 'fs'
import * as akarata from '../index'
const reversedLemas = JSON.parse(
  fs.readFileSync(`${__dirname}/reversed.json`, 'utf8')
)

describe('Reversed Lemas', () => {
  describe('test again reversed lemas from KBBI dictionary', () => {
    for (const i in reversedLemas) {
      if (reversedLemas.hasOwnProperty(i)) {
        it(`'${reversedLemas[i].kata} should be stemmed to ${
          reversedLemas[i].lema
        }'`, () => {
          ShouldStem(akarata.stem, reversedLemas[i].kata, reversedLemas[i].lema)
        })
      }
    }
  })
})

type Fn = (word: string) => string

function ShouldStem(methodName: Fn, word: string, transformWord: string) {
  const actual = methodName(word)
  // methodName(word).should.equal(transformWord);
  expect(actual).toEqual(transformWord)
}
