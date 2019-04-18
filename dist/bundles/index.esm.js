// tslint:disable:no-any
class IrregularWords {
    static loadWords(filename, chopped = false) {
        let contents = require(`./irregular-words/${filename}`).default;
        if (chopped) {
            contents = contents.map((word) => word.slice(1, word.length));
        }
        return contents;
    }
}
IrregularWords.SPECIAL_LETTERS = ['K', 'P', 'N', 'R'];
IrregularWords.ENDS_WITH_I = IrregularWords.loadWords('akhiran-i');
IrregularWords.ENDS_WITH_COMMON_CHARACTERS = {
    kah: IrregularWords.loadWords('kah'),
    lah: IrregularWords.loadWords('lah'),
    pun: IrregularWords.loadWords('pun'),
    ku: IrregularWords.loadWords('ku'),
    mu: IrregularWords.loadWords('mu'),
    nya: IrregularWords.loadWords('nya'),
};
IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS = ['majikan'].concat(IrregularWords.ENDS_WITH_I);
IrregularWords.SPECIAL_LETTERS.map((letter) => {
    IrregularWords[`BEGINS_WITH_${letter}`] = IrregularWords.loadWords(`${letter.toLowerCase()}`, true);
});
IrregularWords.ON_PREFIX_CHARACTERS = {
    meng: IrregularWords.BEGINS_WITH_K,
    peng: IrregularWords.BEGINS_WITH_K,
    mem: IrregularWords.BEGINS_WITH_P,
    pem: IrregularWords.BEGINS_WITH_P,
};

function isStartsWith(text, byTextLength, prefix) {
    const prefixLength = prefix.length;
    if (prefixLength > byTextLength)
        return false;
    for (let i = 0; i < prefixLength; i++) {
        if (text[i] !== prefix[i])
            return false;
    }
    return true;
}
function isEndsWith(text, byTextLength, suffix) {
    const suffixLength = suffix.length;
    if (suffixLength > byTextLength)
        return false;
    for (let i = 0; i < suffixLength; i++) {
        if (text.substring(text.length - suffixLength)[i] !== suffix[i]) {
            return false;
        }
    }
    return true;
}
var StemmerUtility = {
    isStartsWith,
    isEndsWith,
};

// tslint:disable:no-any
var Position;
(function (Position) {
    Position["start"] = "Start";
    Position["end"] = "End";
})(Position || (Position = {}));
class MorphologicalUtility {
    constructor() {
        this.numberOfSyllables = 0;
        this.totalSyllables = (word) => {
            let result = 0;
            for (const value of word) {
                if (this.isVowel(value))
                    result++;
            }
            return result;
        };
        this.removeParticle = (word) => {
            this.numberOfSyllables = this.numberOfSyllables || this.totalSyllables(word);
            word = this.removeCharactersMatchingCollection(word, this.collectionFor('particle'), Position.end);
            return word;
        };
        this.removePossessivePronoun = (word) => {
            this.numberOfSyllables = this.numberOfSyllables || this.totalSyllables(word);
            return this.removeCharactersMatchingCollection(word, this.collectionFor('possessive_pronoun'), Position.end);
        };
        this.removeFirstOrderPrefix = (word) => {
            this.numberOfSyllables = this.numberOfSyllables || this.totalSyllables(word);
            const prevWord = word;
            word = this.removeAndSubstituteCharactersMatchingCollection(word, this.collectionFor('special_first_order_prefix'), Position.start);
            if (prevWord !== word) {
                return word;
            }
            word = this.removeCharactersMatchingCollection(word, this.collectionFor('first_order_prefix'), Position.start);
            return word;
        };
        this.removeSecondOrderPrefix = (word) => {
            const { REMOVED_BER, SPECIAL_SECOND_ORDER_PREFIX_WORDS, } = MorphologicalUtility;
            this.numberOfSyllables = this.numberOfSyllables || this.totalSyllables(word);
            const wordLength = word.length;
            if (SPECIAL_SECOND_ORDER_PREFIX_WORDS.includes(word)) {
                if (word.slice(0, 2) === 'be') {
                    this.flags = this.flags || REMOVED_BER;
                }
                this.reduceSyllable();
                word = this.sliceWordAtPosition(word, 3, Position.start);
                return word;
            }
            if (StemmerUtility.isStartsWith(word, wordLength, 'be') &&
                wordLength > 4 &&
                !this.isVowel(word[2]) &&
                word.slice(3, 5) === 'er') {
                this.flags = this.flags || REMOVED_BER;
                this.reduceSyllable();
                word = this.sliceWordAtPosition(word, 2, Position.start);
                return word;
            }
            return this.removeCharactersMatchingCollection(word, this.collectionFor('non_special_second_order_prefix'), Position.start);
        };
        this.removeSuffix = (word) => {
            const { REMOVED_KE, REMOVED_PENG, REMOVED_PE, REMOVED_DI, REMOVED_MENG, REMOVED_TER, REMOVED_BER, SUFFIX_CHARACTERS, } = MorphologicalUtility;
            if (this.ambiguousWithSufficesEndingWords(word))
                return word;
            this.numberOfSyllables = this.numberOfSyllables || this.totalSyllables(word);
            let constantToCheck = [];
            // tslint:disable-next-line:prefer-for-of
            for (let index = 0; index < SUFFIX_CHARACTERS.length; index++) {
                const character = SUFFIX_CHARACTERS[index];
                switch (character) {
                    case 'kan':
                        constantToCheck = [REMOVED_KE, REMOVED_PENG, REMOVED_PE];
                        break;
                    case 'an':
                        constantToCheck = [REMOVED_DI, REMOVED_MENG, REMOVED_TER];
                        break;
                    case 'i':
                        constantToCheck = [REMOVED_BER, REMOVED_KE, REMOVED_PENG];
                        break;
                    default:
                        break;
                }
                if (StemmerUtility.isEndsWith(word, word.length, character) &&
                    // tslint:disable-next-line:no-bitwise
                    constantToCheck.every((cons) => (this.flags & cons) === 0)) {
                    this.reduceSyllable();
                    word = this.sliceWordAtPosition(word, character.length, Position.end);
                }
            }
            return word;
        };
    }
    set flags(v) {
        this._flags = v;
    }
    get flags() {
        return this._flags;
    }
    ambiguousWithSufficesEndingWords(word) {
        return IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS.includes(word);
    }
    removeCharactersMatchingCollection(word, collection, position) {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < collection.length; index++) {
            const characters = collection[index];
            if (this.matchPositionAndNotAmbiguousWithCharacters(word, characters, position)) {
                if (characters === 'mem' && this.isVowel(word[characters.length])) {
                    continue;
                }
                this.flags = this.flags || this.collectionFor(characters, 'removed');
                this.reduceSyllable();
                word = this.sliceWordAtPosition(word, characters.length, position);
            }
        }
        return word;
    }
    sliceWordAtPosition(word, characterSize, position) {
        const multiplier = position === Position.start ? 0 : -1;
        const wordSlice = word.split('');
        wordSlice.splice(multiplier * characterSize, characterSize);
        word = wordSlice.join('');
        return word;
    }
    removeAndSubstituteCharactersMatchingCollection(word, collection, position) {
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < collection.length; index++) {
            const characters = collection[index];
            const matched = this.matchingCharactersRequiresSubstitution(word, characters, position);
            if (matched) {
                this.flags = this.flags || this.collectionFor(characters, 'removed');
                this.reduceSyllable();
                word = this.substituteWordCharacter(word, characters);
                word = this.sliceWordAtPosition(word, characters.length - 1, Position.start);
            }
        }
        return word;
    }
    matchingCharactersRequiresSubstitution(word, characters, position) {
        return (this.matchCharactersPositionFollowedByVowel(word, characters, position) &&
            this.substitutionRequired(word, characters));
    }
    matchCharactersPositionFollowedByVowel(word, characters, position) {
        const wordLength = word.length;
        const characterSize = characters.length;
        const Pos = `is${position}sWith`;
        return (StemmerUtility[Pos](word, wordLength, characters) &&
            wordLength > characterSize &&
            this.isVowel(word[characterSize]));
    }
    substitutionRequired(word, characters) {
        return (MorphologicalUtility.WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS.includes(characters) || this.containsIrregularPrefix(word, characters));
    }
    containsIrregularPrefix(word, characters) {
        const irregularOnPrefix = Object.keys(IrregularWords.ON_PREFIX_CHARACTERS).includes(characters);
        if (irregularOnPrefix) {
            return this.choppedWordMatchWordsCollection(word.slice(characters.length, word.length), IrregularWords.ON_PREFIX_CHARACTERS[characters]);
        }
        return false;
    }
    substituteWordCharacter(word, characters) {
        let substituteChar = '';
        switch (true) {
            case ['meny', 'peny'].includes(characters):
                substituteChar = 's';
                break;
            case ['men', 'pen'].includes(characters):
                substituteChar = this.choppedWordMatchWordsCollection(word.slice(characters.length, word.length), IrregularWords.BEGINS_WITH_N)
                    ? 'n'
                    : 't';
                break;
            case ['meng', 'peng'].includes(characters):
                substituteChar = 'k';
                break;
            case ['mem', 'pem'].includes(characters):
                substituteChar = 'p';
                break;
            default:
                break;
        }
        const reduceChars = characters.length - 1;
        const firstChar = word.slice(-word.length, reduceChars);
        const oldSubstituteChar = word[reduceChars];
        const resChar = word.slice(characters.length);
        return substituteChar ? firstChar + substituteChar + resChar : word;
    }
    isVowel(character) {
        return MorphologicalUtility.VOWEL.includes(character);
    }
    collectionFor(name, type = 'characters') {
        let constantName;
        const col1 = ['meny', 'men', 'mem', 'me'];
        const col2 = ['peny', 'pen', 'pem'];
        if (type === 'characters') {
            constantName = `${name}_${type}`;
        }
        else {
            switch (true) {
                case col1.includes(name):
                    name = 'meng';
                    break;
                case col2.includes(name):
                    name = 'peng';
                    break;
                default:
                    break;
            }
            constantName = `${type}_${name}`;
        }
        const staticMethod = constantName.toUpperCase();
        const collection = MorphologicalUtility[staticMethod];
        return collection;
    }
    matchPositionAndNotAmbiguousWithCharacters(word, characters, position) {
        const pos = `is${position}sWith`;
        return (StemmerUtility[pos](word, word.length, characters) && !this.ambiguousWithCharacters(word, characters, position));
    }
    ambiguousWithCharacters(word, characters, position) {
        if (position === Position.start) {
            if (characters === 'per') {
                return this.choppedWordMatchWordsCollection(word.slice(3, word.length), IrregularWords.BEGINS_WITH_R);
            }
            else {
                return false;
            }
        }
        else {
            return IrregularWords.ENDS_WITH_COMMON_CHARACTERS[characters].some((ambiguousWord) => {
                const prefix = ['me', 'be', 'pe'];
                if (!prefix.includes(word.slice(0, 2))) {
                    return false;
                }
                return StemmerUtility.isEndsWith(word, word.length, ambiguousWord);
            });
        }
    }
    choppedWordMatchWordsCollection(choppedWord, collection) {
        return collection.some((word) => StemmerUtility.isStartsWith(choppedWord, choppedWord.length, word));
    }
    reduceSyllable() {
        this.numberOfSyllables -= 1;
    }
}
MorphologicalUtility.VOWEL = ['a', 'e', 'i', 'o', 'u'];
MorphologicalUtility.PARTICLE_CHARACTERS = ['kah', 'lah', 'pun'];
MorphologicalUtility.POSSESSIVE_PRONOUN_CHARACTERS = ['ku', 'mu', 'nya'];
MorphologicalUtility.FIRST_ORDER_PREFIX_CHARACTERS = [
    'meng',
    'meny',
    'men',
    'mem',
    'me',
    'peng',
    'peny',
    'pen',
    'pem',
    'di',
    'ter',
    'ke',
];
MorphologicalUtility.SPECIAL_FIRST_ORDER_PREFIX_CHARACTERS = [
    'meng',
    'peng',
    'meny',
    'peny',
    'pen',
    'men',
    'mem',
    'pem',
];
MorphologicalUtility.SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'be', 'per', 'pe'];
MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['be'];
MorphologicalUtility.NON_SPECIAL_SECOND_ORDER_PREFIX_CHARACTERS = ['ber', 'per', 'pe'];
MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_WORDS = ['belajar', 'pelajar', 'belunjur'];
MorphologicalUtility.SUFFIX_CHARACTERS = ['kan', 'an', 'i'];
MorphologicalUtility.WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS = [
    'meny',
    'peny',
    'men',
    'pen',
];
MorphologicalUtility.REMOVED_KE = 1;
MorphologicalUtility.REMOVED_PENG = 2;
MorphologicalUtility.REMOVED_DI = 4;
MorphologicalUtility.REMOVED_MENG = 8;
MorphologicalUtility.REMOVED_TER = 16;
MorphologicalUtility.REMOVED_BER = 32;
MorphologicalUtility.REMOVED_PE = 64;

class Stemmer extends MorphologicalUtility {
    constructor() {
        super(...arguments);
        this.stem = (word, derivationalStemming = true) => {
            this.flags = undefined;
            if (word.match(/\s/)) {
                word.split(' ').map((w) => this.stem(w));
            }
            else {
                this.numberOfSyllables = this.totalSyllables(word);
                if (this.isStillHasManySyllables()) {
                    word = this.removeParticle(word);
                }
                if (this.isStillHasManySyllables()) {
                    word = this.removePossessivePronoun(word);
                }
                if (derivationalStemming) {
                    word = this.stemDerivational(word);
                }
            }
            return word;
        };
    }
    stemDerivational(word) {
        let prevSize = word.length;
        if (this.isStillHasManySyllables()) {
            word = this.removeFirstOrderPrefix(word);
        }
        if (prevSize !== word.length) {
            prevSize = word.length;
            if (this.isStillHasManySyllables()) {
                word = this.removeSuffix(word);
            }
            if (prevSize !== word.length) {
                word = this.removeSecondOrderPrefix(word);
            }
        }
        else {
            if (this.isStillHasManySyllables()) {
                word = this.removeSecondOrderPrefix(word);
            }
            if (this.isStillHasManySyllables()) {
                word = this.removeSuffix(word);
            }
        }
        return word;
    }
    isStillHasManySyllables() {
        return this.numberOfSyllables > 2;
    }
}
var stemmer = new Stemmer();

const { stem } = stemmer;
var index = { stem };

export default index;
export { stem };
//# sourceMappingURL=index.esm.js.map
