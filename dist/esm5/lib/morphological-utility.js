// tslint:disable:no-any
import IrregularWords from './irregular-words';
import StemmerUtility from './stemmer-utility';
var AMBIGUOUS_WORDS = [
    'nyanyi',
    'nyala',
    'nyata',
    'nasehat',
    'makan',
    'minum',
    'nikah',
];
var Position;
(function (Position) {
    Position["start"] = "Start";
    Position["end"] = "End";
})(Position || (Position = {}));
var MorphologicalUtility = /** @class */ (function () {
    function MorphologicalUtility() {
        var _this = this;
        this.numberOfSyllables = 0;
        this.totalSyllables = function (word) {
            var result = 0;
            for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
                var value = word_1[_i];
                if (_this.isVowel(value))
                    result++;
            }
            return result;
        };
        this.removeParticle = function (word) {
            _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
            word = _this.removeCharactersMatchingCollection(word, _this.collectionFor('particle'), Position.end);
            return word;
        };
        this.removePossessivePronoun = function (word) {
            _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
            return _this.removeCharactersMatchingCollection(word, _this.collectionFor('possessive_pronoun'), Position.end);
        };
        this.removeFirstOrderPrefix = function (word) {
            _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
            var prevWord = word;
            word = _this.removeAndSubstituteCharactersMatchingCollection(word, _this.collectionFor('special_first_order_prefix'), Position.start);
            if (prevWord !== word) {
                return word;
            }
            word = _this.removeCharactersMatchingCollection(word, _this.collectionFor('first_order_prefix'), Position.start);
            return word;
        };
        this.removeSecondOrderPrefix = function (word) {
            var REMOVED_BER = MorphologicalUtility.REMOVED_BER, SPECIAL_SECOND_ORDER_PREFIX_WORDS = MorphologicalUtility.SPECIAL_SECOND_ORDER_PREFIX_WORDS;
            _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
            var wordLength = word.length;
            if (SPECIAL_SECOND_ORDER_PREFIX_WORDS.includes(word)) {
                if (word.slice(0, 2) === 'be') {
                    _this.flags = _this.flags || REMOVED_BER;
                }
                _this.reduceSyllable();
                word = _this.sliceWordAtPosition(word, 3, Position.start);
                return word;
            }
            if (StemmerUtility.isStartsWith(word, wordLength, 'be') &&
                wordLength > 4 &&
                !_this.isVowel(word[2]) &&
                word.slice(3, 5) === 'er') {
                _this.flags = _this.flags || REMOVED_BER;
                _this.reduceSyllable();
                word = _this.sliceWordAtPosition(word, 2, Position.start);
                return word;
            }
            return _this.removeCharactersMatchingCollection(word, _this.collectionFor('non_special_second_order_prefix'), Position.start);
        };
        this.removeSuffix = function (word) {
            var REMOVED_KE = MorphologicalUtility.REMOVED_KE, REMOVED_PENG = MorphologicalUtility.REMOVED_PENG, REMOVED_PE = MorphologicalUtility.REMOVED_PE, REMOVED_DI = MorphologicalUtility.REMOVED_DI, REMOVED_MENG = MorphologicalUtility.REMOVED_MENG, REMOVED_TER = MorphologicalUtility.REMOVED_TER, REMOVED_BER = MorphologicalUtility.REMOVED_BER, SUFFIX_CHARACTERS = MorphologicalUtility.SUFFIX_CHARACTERS;
            if (_this.ambiguousWithSufficesEndingWords(word))
                return word;
            _this.numberOfSyllables = _this.numberOfSyllables || _this.totalSyllables(word);
            var constantToCheck = [];
            // tslint:disable-next-line:prefer-for-of
            for (var index = 0; index < SUFFIX_CHARACTERS.length; index++) {
                var character = SUFFIX_CHARACTERS[index];
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
                    constantToCheck.every(function (cons) { return (_this.flags & cons) === 0; })) {
                    _this.reduceSyllable();
                    word = _this.sliceWordAtPosition(word, character.length, Position.end);
                }
            }
            return word;
        };
    }
    Object.defineProperty(MorphologicalUtility.prototype, "flags", {
        get: function () {
            return this._flags;
        },
        set: function (v) {
            this._flags = v;
        },
        enumerable: true,
        configurable: true
    });
    MorphologicalUtility.prototype.ambiguousWithSufficesEndingWords = function (word) {
        return IrregularWords.ENDS_WITH_SUFFIX_CHARACTERS.includes(word);
    };
    MorphologicalUtility.prototype.removeCharactersMatchingCollection = function (word, collection, position) {
        // tslint:disable-next-line:prefer-for-of
        for (var index = 0; index < collection.length; index++) {
            var characters = collection[index];
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
    };
    MorphologicalUtility.prototype.sliceWordAtPosition = function (word, characterSize, position) {
        var multiplier = position === Position.start ? 0 : -1;
        var wordSlice = word.split('');
        wordSlice.splice(multiplier * characterSize, characterSize);
        word = wordSlice.join('');
        return word;
    };
    MorphologicalUtility.prototype.removeAndSubstituteCharactersMatchingCollection = function (word, collection, position) {
        // tslint:disable-next-line:prefer-for-of
        for (var index = 0; index < collection.length; index++) {
            var characters = collection[index];
            var matched = this.matchingCharactersRequiresSubstitution(word, characters, position);
            if (matched) {
                this.flags = this.flags || this.collectionFor(characters, 'removed');
                this.reduceSyllable();
                word = this.substituteWordCharacter(word, characters);
                word = this.sliceWordAtPosition(word, characters.length - 1, Position.start);
            }
        }
        return word;
    };
    MorphologicalUtility.prototype.matchingCharactersRequiresSubstitution = function (word, characters, position) {
        return (this.matchCharactersPositionFollowedByVowel(word, characters, position) &&
            this.substitutionRequired(word, characters));
    };
    MorphologicalUtility.prototype.matchCharactersPositionFollowedByVowel = function (word, characters, position) {
        var wordLength = word.length;
        var characterSize = characters.length;
        var Pos = "is" + position + "sWith";
        return (StemmerUtility[Pos](word, wordLength, characters) &&
            wordLength > characterSize &&
            this.isVowel(word[characterSize]));
    };
    MorphologicalUtility.prototype.substitutionRequired = function (word, characters) {
        return (MorphologicalUtility.WITH_VOWEL_SUBSTITUTION_PREFIX_CHARACTERS.includes(characters) || this.containsIrregularPrefix(word, characters));
    };
    MorphologicalUtility.prototype.containsIrregularPrefix = function (word, characters) {
        var irregularOnPrefix = Object.keys(IrregularWords.ON_PREFIX_CHARACTERS).includes(characters);
        if (irregularOnPrefix) {
            return this.choppedWordMatchWordsCollection(word.slice(characters.length, word.length), IrregularWords.ON_PREFIX_CHARACTERS[characters]);
        }
        return false;
    };
    MorphologicalUtility.prototype.substituteWordCharacter = function (word, characters) {
        var substituteChar = '';
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
        var reduceChars = characters.length - 1;
        var firstChar = word.slice(-word.length, reduceChars);
        var oldSubstituteChar = word[reduceChars];
        var resChar = word.slice(characters.length);
        return substituteChar ? firstChar + substituteChar + resChar : word;
    };
    MorphologicalUtility.prototype.isVowel = function (character) {
        return MorphologicalUtility.VOWEL.includes(character);
    };
    MorphologicalUtility.prototype.collectionFor = function (name, type) {
        if (type === void 0) { type = 'characters'; }
        var constantName;
        var col1 = ['meny', 'men', 'mem', 'me'];
        var col2 = ['peny', 'pen', 'pem'];
        if (type === 'characters') {
            constantName = name + "_" + type;
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
            constantName = type + "_" + name;
        }
        var staticMethod = constantName.toUpperCase();
        var collection = MorphologicalUtility[staticMethod];
        return collection;
    };
    MorphologicalUtility.prototype.matchPositionAndNotAmbiguousWithCharacters = function (word, characters, position) {
        var pos = "is" + position + "sWith";
        return (StemmerUtility[pos](word, word.length, characters) && !this.ambiguousWithCharacters(word, characters, position));
    };
    MorphologicalUtility.prototype.ambiguousWithCharacters = function (word, characters, position) {
        if (position === Position.start) {
            if (characters === 'per') {
                return this.choppedWordMatchWordsCollection(word.slice(3, word.length), IrregularWords.BEGINS_WITH_R);
            }
            else {
                return false;
            }
        }
        else {
            return IrregularWords.ENDS_WITH_COMMON_CHARACTERS[characters].some(function (ambiguousWord) {
                var prefix = ['me', 'be', 'pe'];
                if (!prefix.includes(word.slice(0, 2))) {
                    return false;
                }
                return StemmerUtility.isEndsWith(word, word.length, ambiguousWord);
            });
        }
    };
    MorphologicalUtility.prototype.choppedWordMatchWordsCollection = function (choppedWord, collection) {
        return collection.some(function (word) {
            return StemmerUtility.isStartsWith(choppedWord, choppedWord.length, word);
        });
    };
    MorphologicalUtility.prototype.reduceSyllable = function () {
        this.numberOfSyllables -= 1;
    };
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
    return MorphologicalUtility;
}());
export default MorphologicalUtility;
//# sourceMappingURL=morphological-utility.js.map