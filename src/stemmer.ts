import includes from 'lodash.includes';
import {
  removeFirstOrderPrefix,
  removeParticle,
  removePossesive,
  removeSecondOrderPrefix,
  removeSuffix,
  totalSyllables
} from './lib/morphological-utility';

const ShouldNotTransformTheseWords = [
  'lari',
  'nikah',
  'pilah',
  'pakai',
  'iman'
];

function stem(word: string, derivationalStemming = true) {
  const numberSyllables = totalSyllables(word);

  if (numberSyllables > 2) {
    word = removePossesive(word);
    if (derivationalStemming) word = stemDerivational(word);
  }

  if (numberSyllables > 2 && !includes(ShouldNotTransformTheseWords, word)) {
    word = removeParticle(word);
    if (numberSyllables > 2) word = removeParticle(word);
    if (derivationalStemming) word = stemDerivational(word);
  }

  return word;
}

function stemDerivational(word: string) {
  let numberSyllables = totalSyllables(word);
  const previousLength = word.length;
  if (numberSyllables > 2) word = removeFirstOrderPrefix(word);

  if (previousLength === word.length) {
    if (numberSyllables > 2) word = removeSecondOrderPrefix(word);
    if (includes(ShouldNotTransformTheseWords, word)) numberSyllables -= 1;
    if (numberSyllables > 2) word = removeSuffix(word);
  }

  return word;
}

export { stem };
